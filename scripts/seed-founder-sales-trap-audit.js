/**
 * Seed the CMS content for /founder-sales-trap-audit (lead magnet landing page).
 * Usage: node scripts/seed-founder-sales-trap-audit.js
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const content = {
  heroTag: 'Free 3-Minute Self-Audit for B2B Founders',
  heroLine1: 'The Founder Sales Trap',
  heroAccent: 'Self-Audit',
  heroH2: '20 questions to find out if you are the bottleneck holding back your own sales growth.',
  heroDescription:
    'If every deal still runs through you, your revenue is capped at your personal bandwidth. Answer 20 yes/no questions and get your score, what it means, and exactly which systems to build next.',
  heroCtaText: 'Start the Free Self-Audit',
  heroCtaNote: 'No credit card. Instant results.',
  benefitsHeading: 'What You Get in 3 Minutes',
  benefit1Title: 'Your Founder Sales Trap Score',
  benefit1Text:
    'A 0–20 score that tells you exactly how dependent your revenue is on you personally — not a vague feeling, a number.',
  benefit2Title: 'Where Your System Is Missing',
  benefit2Text:
    'The audit covers the five systems every sales team needs: founder dependency, playbook, pipeline discipline, hiring readiness, and accountability.',
  benefit3Title: 'What to Do Next',
  benefit3Text:
    'A straight answer for your score band — what to build first, what to skip, and why a $250K VP of Sales hire is almost never the fix.',
};

async function main() {
  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'seoFounderSalesTrapAudit', content }, { onConflict: 'section' });
  if (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }
  console.log('Seeded seoFounderSalesTrapAudit ✔');
}

main();
