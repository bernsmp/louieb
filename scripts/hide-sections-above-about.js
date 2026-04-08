require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Sections to hide (everything above About Louie Bernstein)
const sectionsToHide = [
  'hero',
  'fractionalSalesLeader',
  'testimonialsSection',
  'process',
  'valueProposition',
  'faq',
];

async function run() {
  // Fetch current content for each section so we don't lose existing overrides
  const { data: rows, error: fetchErr } = await supabase
    .from('site_content')
    .select('section, content')
    .in('section', sectionsToHide);

  if (fetchErr) {
    console.error('Fetch error:', fetchErr);
    process.exit(1);
  }

  const existingMap = {};
  (rows || []).forEach(r => { existingMap[r.section] = r.content || {}; });

  const upserts = sectionsToHide.map(section => ({
    section,
    content: { ...(existingMap[section] || {}), visible: false },
  }));

  const { error } = await supabase
    .from('site_content')
    .upsert(upserts, { onConflict: 'section' });

  if (error) {
    console.error('Upsert error:', error);
    process.exit(1);
  }

  console.log('Hidden sections:', sectionsToHide.join(', '));
}

run();
