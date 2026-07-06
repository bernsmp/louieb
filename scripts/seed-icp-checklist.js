/**
 * Seed the CMS content for /icp-checklist (lead magnet landing page).
 * Usage: node scripts/seed-icp-checklist.js
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const content = {
  heroTag: 'Free 2-Minute Checklist for B2B Founders',
  heroLine1: 'The ICP Clarity',
  heroAccent: 'Checklist',
  heroH2: '15 checks to find out if you actually know who your best customer is.',
  heroDescription:
    "Deals stall, cycles drag, and reps chase prospects that never close — usually because the Ideal Customer Profile lives in the founder's head. Take 15 yes/no checks and get your score, where the filter leaks, and what to fix first.",
  heroCtaText: 'Start the Free Checklist',
  heroCtaNote: 'No credit card. Instant results.',
  benefitsHeading: 'What You Get in 2 Minutes',
  benefit1Title: 'Your ICP Clarity Score',
  benefit1Text:
    'A 0–15 score that tells you whether you have a real Ideal Customer Profile — or a hunch that lives in your head.',
  benefit2Title: 'Where the Filter Leaks',
  benefit2Text:
    'The checklist covers the three tests of a working ICP: is it written down, is it built on evidence from closed deals, and is it actually used by your team and your CRM.',
  benefit3Title: 'What to Fix First',
  benefit3Text:
    'A straight answer for your score: what to build next, using data you already have sitting in your closed-won deals.',
};

async function main() {
  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'seoIcpChecklist', content }, { onConflict: 'section' });
  if (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }
  console.log('Seeded seoIcpChecklist ✔');
}

main();
