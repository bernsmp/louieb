/**
 * backup-cms.js — snapshot all CMS content from Supabase to a JSON file.
 *
 * Protects against losing CMS edits (a bad seed run, an accidental overwrite,
 * or a mistaken edit). Each run writes one dated file and keeps only the
 * newest KEEP snapshots, deleting older ones.
 *
 * Usage:
 *   node scripts/backup-cms.js [outputDir]
 *
 * Defaults to "F:\website backup". Runs daily at 04:00 via the Windows
 * scheduled task "Website CMS Backup" (see scripts/README-backup.md).
 */

const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

const OUT_DIR = process.argv[2] || 'F:\\website backup'
const KEEP = 3

// Tables worth backing up. Missing tables are skipped, not fatal.
const TABLES = [
  'site_content',
  'faq_items',
  'testimonials',
  'blog_posts',
  'services',
  'process_steps',
]

// Load .env.local relative to this script, so the working directory doesn't matter
// (the scheduled task runs from an arbitrary cwd).
function loadEnv() {
  try {
    const envPath = path.join(__dirname, '..', '.env.local')
    for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  } catch (e) {
    console.error('Could not read .env.local:', e.message)
  }
}

function stamp(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

async function main() {
  loadEnv()
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    console.error('Missing Supabase credentials in .env.local')
    process.exit(1)
  }

  fs.mkdirSync(OUT_DIR, { recursive: true })

  const supabase = createClient(url, key)
  const snapshot = { takenAt: new Date().toISOString(), tables: {} }
  const summary = []

  for (const table of TABLES) {
    const { data, error } = await supabase.from(table).select('*')
    if (error) {
      snapshot.tables[table] = { error: error.message }
      summary.push(`${table}: SKIPPED (${error.message})`)
      continue
    }
    snapshot.tables[table] = data
    summary.push(`${table}: ${data.length} rows`)
  }

  // Fail loudly rather than writing a useless snapshot over a good one.
  const sc = snapshot.tables.site_content
  if (!Array.isArray(sc) || sc.length === 0) {
    console.error('ABORT: site_content came back empty — refusing to write a bad snapshot.')
    process.exit(1)
  }

  const file = path.join(OUT_DIR, `cms-backup-${stamp()}.json`)
  fs.writeFileSync(file, JSON.stringify(snapshot, null, 2), 'utf8')
  const kb = (fs.statSync(file).size / 1024).toFixed(0)
  console.log(`Wrote ${file} (${kb} KB)`)
  summary.forEach((s) => console.log('  ' + s))

  // Rotation: keep the newest KEEP snapshots, delete the rest.
  const files = fs
    .readdirSync(OUT_DIR)
    .filter((f) => /^cms-backup-.*\.json$/.test(f))
    .map((f) => ({ f, t: fs.statSync(path.join(OUT_DIR, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t)

  for (const old of files.slice(KEEP)) {
    fs.unlinkSync(path.join(OUT_DIR, old.f))
    console.log(`Removed old snapshot ${old.f}`)
  }
  console.log(`Kept ${Math.min(files.length, KEEP)} snapshot(s).`)
}

main().catch((e) => {
  console.error('Backup failed:', e.message)
  process.exit(1)
})
