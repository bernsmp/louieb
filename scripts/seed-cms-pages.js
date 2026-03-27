/**
 * seed-cms-pages.js
 * Reads every app/(site)/[page]/page.tsx, extracts v() defaults and FAQ arrays,
 * then upserts all content into Supabase site_content table.
 *
 * Run: node scripts/seed-cms-pages.js
 */

// Support running from worktree — walk up to find .env.local
const path = require('path')
const fs = require('fs')
;(function loadEnv() {
  const candidates = [
    path.join(__dirname, '..', '.env.local'),
    path.join(__dirname, '..', '..', '..', '.env.local'), // worktree → repo root
    path.join(process.env.HOME || process.env.USERPROFILE || '', 'louieb', '.env.local'),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) { require('dotenv').config({ path: p }); return }
  }
  require('dotenv').config({ path: '.env.local' })
})()
const { createClient } = require('@supabase/supabase-js')
const glob = require('glob')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// ─── Extraction helpers ───────────────────────────────────────────────────────

/**
 * Extract CMS_SECTION value from file content
 */
function extractSection(src) {
  const m = src.match(/const\s+CMS_SECTION\s*=\s*['"]([^'"]+)['"]/)
  return m ? m[1] : null
}

/**
 * Extract all v('key', 'default') calls.
 * Handles single quotes, double quotes, and backtick strings on the default.
 */
function extractVDefaults(src) {
  const result = {}
  // Match: v('key', 'value') or v('key', "value") or v("key", "value") etc.
  // We need to handle multi-line strings carefully — use a simple approach that
  // captures the content between balanced quotes on a single logical call.
  const re = /v\(\s*['"](\w+)['"]\s*,\s*(?:`([^`]*)`|"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')\s*\)/gs
  let m
  while ((m = re.exec(src)) !== null) {
    const key = m[1]
    // m[2] = backtick, m[3] = double-quote, m[4] = single-quote
    const val = (m[2] ?? m[3] ?? m[4] ?? '').replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n')
    result[key] = val
  }
  return result
}

/**
 * Extract FAQ array: const faqs = [{ q: '...', a: '...' }, ...]
 * Uses a naive but robust approach: find the array literal and eval-parse it.
 */
function extractFaqs(src) {
  // Find `const faqs = [` and grab the full array block
  const startIdx = src.search(/const\s+faqs\s*=\s*\[/)
  if (startIdx === -1) return []

  // Walk forward to find the matching closing bracket
  const arrStart = src.indexOf('[', startIdx)
  let depth = 0
  let end = arrStart
  for (let i = arrStart; i < src.length; i++) {
    if (src[i] === '[') depth++
    else if (src[i] === ']') {
      depth--
      if (depth === 0) { end = i; break }
    }
  }

  const arrSrc = src.slice(arrStart, end + 1)

  // Parse using Function constructor (safe — no network, just static data extraction)
  try {
    // Replace shorthand { q: ..., a: ... } — works as-is in JS
    // We need to evaluate the array literal
    // eslint-disable-next-line no-new-func
    const faqs = new Function(`return ${arrSrc}`)()
    return Array.isArray(faqs) ? faqs : []
  } catch {
    console.warn('  ⚠ Could not parse faqs array, skipping FAQs')
    return []
  }
}

/**
 * Convert a faqs array to flat CMS field format:
 * faq1Question, faq1Answer, faq2Question, faq2Answer, ...
 */
function faqsToFields(faqs) {
  const result = {}
  faqs.slice(0, 4).forEach((faq, i) => {
    result[`faq${i + 1}Question`] = faq.q ?? ''
    result[`faq${i + 1}Answer`] = faq.a ?? ''
  })
  return result
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const siteDir = path.join(__dirname, '..', 'app', '(site)')
  const pageFiles = glob.sync('*/page.tsx', { cwd: siteDir, absolute: true })

  console.log(`Found ${pageFiles.length} site pages. Scanning for CMS_SECTION…\n`)

  // Collect all sections to seed
  const toSeed = []
  for (const file of pageFiles) {
    const src = fs.readFileSync(file, 'utf8')
    const section = extractSection(src)
    if (!section) continue // static page, no CMS

    const vDefaults = extractVDefaults(src)
    const faqs = extractFaqs(src)
    const faqFields = faqsToFields(faqs)

    const content = { ...vDefaults, ...faqFields }
    if (Object.keys(content).length === 0) continue

    toSeed.push({ section, content, file: path.relative(process.cwd(), file) })
  }

  console.log(`Found ${toSeed.length} pages with CMS content to seed.\n`)

  // Check which sections already have content in Supabase
  const { data: existing, error: fetchErr } = await supabase
    .from('site_content')
    .select('section, content')

  if (fetchErr) {
    console.error('Error fetching existing content:', fetchErr.message)
    process.exit(1)
  }

  const existingMap = {}
  for (const row of existing ?? []) {
    existingMap[row.section] = row.content
  }

  // Upsert only pages where Supabase is empty or missing
  let seeded = 0
  let skipped = 0
  for (const { section, content, file } of toSeed) {
    const existing = existingMap[section]
    const hasContent = existing && Object.keys(existing).some(k => existing[k])

    if (hasContent) {
      // Only skip if ALL expected fields are already populated
      const missingFields = Object.keys(content).filter(k => !existing[k])
      if (missingFields.length === 0) {
        console.log(`  ✓ SKIP  ${section} (already populated)`)
        skipped++
        continue
      }
      // Merge: fill only missing fields
      console.log(`  ~ MERGE ${section} (filling ${missingFields.length} missing fields)`)
      const merged = { ...content, ...existing } // existing wins
      const { error } = await supabase
        .from('site_content')
        .upsert({ section, content: merged }, { onConflict: 'section' })
      if (error) console.error(`    ✗ Error: ${error.message}`)
      else seeded++
    } else {
      console.log(`  + SEED  ${section}  ← ${file}`)
      const { error } = await supabase
        .from('site_content')
        .upsert({ section, content }, { onConflict: 'section' })
      if (error) console.error(`    ✗ Error: ${error.message}`)
      else seeded++
    }
  }

  console.log(`\nDone! Seeded/updated: ${seeded}, skipped (already full): ${skipped}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
