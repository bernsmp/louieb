/**
 * Add the ICP Clarity Checklist card to the /tools hub in Supabase.
 * (The CMS toolsPage row overrides code defaults.) Idempotent.
 * Usage: node scripts/add-icp-tool-card.js
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const CARD = {
  name: 'The ICP Clarity Checklist',
  description:
    '15 checks to find out if you actually know who your best customer is. Get your ICP Clarity Score and what to fix first.',
  href: '/icp-checklist',
  icon: 'Target',
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
    console.log('ICP card already present on toolsPage ✔');
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
  console.log('ICP card added to toolsPage ✔');
}

main();
