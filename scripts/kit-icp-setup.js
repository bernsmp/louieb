/**
 * One-time Kit setup for the ICP Clarity Checklist lead magnet, plus the
 * cross-magnet source-designation system (a "Magnet: …" tag per lead magnet
 * and a lead_source custom field). Idempotent — safe to re-run.
 * Usage: node scripts/kit-icp-setup.js
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const KIT_BASE = 'https://api.kit.com/v4';
const API_KEY = process.env.KIT_API_KEY;

const TAGS = [
  'ICP: Selling to Everyone',
  'ICP: Sketch Not Profile',
  'ICP: Filter Installed',
  'Magnet: ICP Checklist',
  'Magnet: Founder Sales Trap Audit',
];
const CUSTOM_FIELDS = ['icp_score', 'lead_source'];

function headers() {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Kit-Api-Key': API_KEY,
  };
}

async function kitGetAll(pathname, listKey) {
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

async function ensureCustomField(label, existing) {
  const found = existing.find(
    (f) => f.key === label || (f.label || '').toLowerCase() === label.toLowerCase()
  );
  if (found) {
    console.log(`  Custom field exists: ${label}`);
    return;
  }
  const res = await fetch(`${KIT_BASE}/custom_fields`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ label }),
  });
  if (!res.ok) throw new Error(`Create field "${label}" failed: ${res.status} ${await res.text()}`);
  console.log(`  Custom field created: ${label}`);
}

async function main() {
  if (!API_KEY) {
    console.error('KIT_API_KEY missing from .env.local');
    process.exit(1);
  }
  console.log('Ensuring tags…');
  const existingTags = await kitGetAll('/tags', 'tags');
  const ids = {};
  for (const name of TAGS) ids[name] = await ensureTag(name, existingTags);

  console.log('Ensuring custom fields…');
  const existingFields = await kitGetAll('/custom_fields', 'custom_fields');
  for (const label of CUSTOM_FIELDS) await ensureCustomField(label, existingFields);

  console.log('\nTag IDs for app/api/lead-magnet-subscribe/route.ts:');
  console.log(JSON.stringify(ids, null, 2));
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
