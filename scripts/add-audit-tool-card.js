/**
 * Add the Founder Sales Trap Self-Audit card to the /tools hub in Supabase.
 * (The CMS toolsPage row overrides the code defaults, so the card must be
 * added to the DB row too.) Idempotent — skips if the card already exists.
 * Usage: node scripts/add-audit-tool-card.js
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const CARD = {
  name: 'The Founder Sales Trap Self-Audit',
  description:
    'Answer 20 yes/no questions to find out if you are the bottleneck holding back your own sales growth. Get your score and exactly which sales systems to build next.',
  href: '/founder-sales-trap-audit',
  icon: 'BarChart',
};

async function main() {
  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('section', 'toolsPage')
    .maybeSingle();
  if (error) {
    console.error('Fetch failed:', error.message);
    process.exit(1);
  }
  if (!data?.content) {
    console.log('No toolsPage row in Supabase — code defaults apply, nothing to do.');
    return;
  }
  const content = data.content;
  const tools = Array.isArray(content.tools) ? content.tools : [];
  if (tools.some((t) => t.href === CARD.href)) {
    console.log('Audit card already present on toolsPage ✔');
    return;
  }
  content.tools = [...tools, CARD];
  const { error: upErr } = await supabase
    .from('site_content')
    .upsert({ section: 'toolsPage', content }, { onConflict: 'section' });
  if (upErr) {
    console.error('Upsert failed:', upErr.message);
    process.exit(1);
  }
  console.log('Audit card added to toolsPage ✔');
}

main();
