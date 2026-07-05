/**
 * One-time Kit (kit.com) setup for the Founder Sales Trap Self-Audit.
 *
 * What it does (all idempotent — safe to re-run):
 *   1. Verifies your KIT_API_KEY works.
 *   2. Creates the three score-band tags if they don't exist:
 *        "Audit: Deep in the Trap" / "Audit: Halfway Out" / "Audit: Has Systems"
 *   3. Creates the "audit_score" custom field if it doesn't exist.
 *   4. Prints the exact env var lines to paste into .env.local and Vercel.
 *
 * Usage:
 *   1. Kit → Settings → Developer → API Keys → copy your V4 API key.
 *   2. Add  KIT_API_KEY=your_key  to D:\louieb\.env.local
 *   3. node scripts/kit-audit-setup.js
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const KIT_BASE = 'https://api.kit.com/v4';
const API_KEY = process.env.KIT_API_KEY;
const FORM_ID = process.env.KIT_FORM_ID || '9648246';

const TAGS = [
  { env: 'KIT_TAG_DEEP', name: 'Audit: Deep in the Trap' },
  { env: 'KIT_TAG_HALFWAY', name: 'Audit: Halfway Out' },
  { env: 'KIT_TAG_SYSTEMS', name: 'Audit: Has Systems' },
];

function headers() {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Kit-Api-Key': API_KEY,
  };
}

async function kitGetAll(pathname, listKey) {
  // Follows cursor pagination and returns every item.
  const items = [];
  let cursor = null;
  for (;;) {
    const url = `${KIT_BASE}${pathname}?per_page=500${cursor ? `&after=${cursor}` : ''}`;
    const res = await fetch(url, { headers: headers() });
    if (!res.ok) throw new Error(`GET ${pathname} failed: ${res.status} ${await res.text()}`);
    const data = await res.json();
    items.push(...(data[listKey] || []));
    if (data.pagination?.has_next_page) cursor = data.pagination.end_cursor;
    else return items;
  }
}

async function ensureTag(name, existing) {
  const found = existing.find((t) => t.name.toLowerCase() === name.toLowerCase());
  if (found) {
    console.log(`  Tag exists: "${name}" (id ${found.id})`);
    return found.id;
  }
  const res = await fetch(`${KIT_BASE}/tags`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error(`Create tag "${name}" failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  console.log(`  Tag created: "${name}" (id ${data.tag.id})`);
  return data.tag.id;
}

async function ensureCustomField() {
  const fields = await kitGetAll('/custom_fields', 'custom_fields');
  const found = fields.find(
    (f) => f.key === 'audit_score' || (f.label || '').toLowerCase() === 'audit score'
  );
  if (found) {
    console.log(`  Custom field exists: audit_score (id ${found.id})`);
    return;
  }
  const res = await fetch(`${KIT_BASE}/custom_fields`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ label: 'audit_score' }),
  });
  if (!res.ok) throw new Error(`Create custom field failed: ${res.status} ${await res.text()}`);
  console.log('  Custom field created: audit_score');
}

async function main() {
  if (!API_KEY) {
    console.error(
      'KIT_API_KEY is not set.\n' +
        'Get it from Kit → Settings → Developer → API Keys (V4 key),\n' +
        'add  KIT_API_KEY=your_key  to .env.local, then re-run this script.'
    );
    process.exit(1);
  }

  console.log('1. Verifying API key…');
  const account = await fetch(`${KIT_BASE}/account`, { headers: headers() });
  if (!account.ok) {
    console.error(`API key rejected (${account.status}). Double-check it is the V4 key.`);
    process.exit(1);
  }
  const acct = await account.json();
  console.log(`  OK — connected to Kit account: ${acct.account?.name || '(unnamed)'}`);

  console.log('2. Ensuring score-band tags…');
  const existingTags = await kitGetAll('/tags', 'tags');
  const ids = {};
  for (const t of TAGS) ids[t.env] = await ensureTag(t.name, existingTags);

  console.log('3. Ensuring audit_score custom field…');
  await ensureCustomField();

  console.log('\n✔ Kit setup complete. Use these env vars (in .env.local AND Vercel):\n');
  console.log(`KIT_API_KEY=${API_KEY}`);
  console.log(`KIT_FORM_ID=${FORM_ID}`);
  for (const t of TAGS) console.log(`${t.env}=${ids[t.env]}`);
  console.log(
    '\nRemaining manual step in Kit: create your email sequence, then a Visual\n' +
      'Automation: "Joins form" (the audit form) → "Add to sequence".'
  );
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
