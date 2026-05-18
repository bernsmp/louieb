/**
 * Seed the new CMS-editable badge fields on the fslPage row.
 * Merges into the existing content row — does not touch anything else.
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-fsl-page-badge.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function main() {
  const { data: existing, error: fetchErr } = await supabase
    .from('site_content')
    .select('content')
    .eq('section', 'fslPage')
    .single()

  if (fetchErr) {
    console.error('❌ fetch:', fetchErr.message)
    return
  }

  const merged = {
    ...(existing?.content || {}),
    badgeLeft: 'LinkedIn Top Voice',
    badgeRight: '9+ Years as Fractional Sales Leader',
  }

  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'fslPage', content: merged }, { onConflict: 'section' })

  if (error) {
    console.error('❌ upsert:', error.message)
  } else {
    console.log('✅ fslPage badgeLeft/badgeRight seeded')
  }
}

main()
