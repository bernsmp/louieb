#!/usr/bin/env node
/**
 * Add `category` column to faq_items and backfill values for the /faqs page.
 * Usage: node scripts/faq-add-category-column.mjs
 *
 * Tries to ALTER TABLE via exec_sql RPC. If that's not available in this
 * Supabase project, prints the SQL for manual paste into the Dashboard SQL
 * Editor and exits with code 2 so the caller knows.
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const ADD_COLUMN_SQL = `ALTER TABLE faq_items ADD COLUMN IF NOT EXISTS category TEXT;`

// Canonical category slugs (used as values in the column) → display labels
// are rendered on the public page.
const CAT = {
  ROLE: 'role',
  TRANSITION: 'transition',
  HIRING: 'hiring',
  SYSTEMS: 'systems',
  ENGAGEMENT: 'engagement',
}

// Question text → category. Match by exact question string to avoid id drift.
const ASSIGNMENTS = [
  // 🎯 The Role of a Fractional Leader
  ['What is the main purpose of a VP of Sales?', CAT.ROLE],
  ['Who is Fractional Sales Leadership for?', CAT.ROLE],
  ['Who should not use a Fractional Sales Leader?', CAT.ROLE],
  [`Why shouldn't I just hire a full-time VP of Sales?`, CAT.ROLE],
  ['What is the difference between a Fractional Sales Leader and a full-time VP of Sales?', CAT.ROLE],
  ['What is the difference between a Fractional Sales Leader and a sales consultant?', CAT.ROLE],
  ['What is the difference between a Fractional Sales Leader and a sales coach?', CAT.ROLE],
  ['What is Fractional Sales Leadership?', CAT.ROLE],
  ['What is the difference between a Fractional Sales Leader and outsourced sales?', CAT.ROLE],
  ['What does a Fractional Sales Leader actually do?', CAT.ROLE],

  // 🚪 Founder-Led Sales Transition
  ['How do I know if I am ready to step back from sales as the founder?', CAT.TRANSITION],
  [`I am stuck at $2 million ARR. Why can't I just hire a few sales reps to grow?`, CAT.TRANSITION],
  ['What is founder-led sales?', CAT.TRANSITION],
  ['Why does founder-led sales become a problem?', CAT.TRANSITION],
  ['How do I know if I am stuck in founder-led sales?', CAT.TRANSITION],
  ['How do I get out of founder-led sales?', CAT.TRANSITION],
  ['What is the difference between founder-led sales and a scalable sales system?', CAT.TRANSITION],
  ['How do I transition from closing every deal myself to managing a team that closes without me?', CAT.TRANSITION],

  // 👥 Hiring & Compensation
  ['How do I handle pressure from board members or upper management about a struggling employee?', CAT.HIRING],
  ['What is the cost of hiring a VP of Sales too early?', CAT.HIRING],
  ['How many deals should a founder close before hiring?', CAT.HIRING],
  ['What needs to be in place on day one for a new sales hire?', CAT.HIRING],
  ['How do I know if I am ready to hire a salesperson?', CAT.HIRING],
  ['What is the rule of thumb before hiring your first salesperson?', CAT.HIRING],
  ['How many salespeople should I hire first?', CAT.HIRING],
  ['What is a sales compensation plan and how should I structure mine?', CAT.HIRING],
  ['How do I set sales quotas for my team?', CAT.HIRING],
  ['How do I hire my first salesperson?', CAT.HIRING],
  ['What should I look for when hiring salespeople?', CAT.HIRING],
  ['Why do sales VP hires fail so often?', CAT.HIRING],
  ['My best salesperson just quit. How do I protect the business?', CAT.HIRING],
  [`I've tried hiring salespeople before and they've failed. What am I doing wrong?`, CAT.HIRING],
  ['How do I know what to pay a salesperson so I can actually attract good candidates?', CAT.HIRING],
  ['Why do I need a 2-week onboarding plan before I even post the job?', CAT.HIRING],

  // 📘 Sales Systems & Playbooks
  ['What is pipeline management and why does it matter?', CAT.SYSTEMS],
  ['What is a Sales Playbook and why do I need one?', CAT.SYSTEMS],
  ['My product is too complex for a regular salesperson to sell. What do I do?', CAT.SYSTEMS],
  ['Is it really possible to close a sale during the demo?', CAT.SYSTEMS],
  ['Why do pipeline meetings fail and how do I fix them?', CAT.SYSTEMS],
  ['What is CRM optimization and why do I need it?', CAT.SYSTEMS],
  ['Which CRM should I use for my sales team?', CAT.SYSTEMS],
  ['How do I build a sales process from scratch?', CAT.SYSTEMS],
  ['What KPIs should I track for my sales team?', CAT.SYSTEMS],
  [`What if my sales team can't handle the objections like I do?`, CAT.SYSTEMS],
  ['How do I know if my sales process is actually documented or just in my head?', CAT.SYSTEMS],
  [`What's the difference between a sales slump and a broken sales process?`, CAT.SYSTEMS],
  ['What does a healthy pipeline actually look like for a $3M ARR company?', CAT.SYSTEMS],
  [`What's the first thing I should fix if I want to start scaling sales?`, CAT.SYSTEMS],
  ['What goes into a Sales Playbook?', CAT.SYSTEMS],
  ['How should I start a software demo?', CAT.SYSTEMS],

  // 🤝 Working with Louie / Engagement
  ['How much does a Fractional Sales Leader cost?', CAT.ENGAGEMENT],
  ['How many hours per week does a Fractional Sales Leader work?', CAT.ENGAGEMENT],
  ['How long does a Fractional Sales Leader engagement typically last?', CAT.ENGAGEMENT],
  ['What results can I expect from working with a Fractional Sales Leader?', CAT.ENGAGEMENT],
  ['How quickly can a Fractional Sales Leader make an impact?', CAT.ENGAGEMENT],
  ['Will I lose control of my sales team if I bring in a Fractional Sales Leader?', CAT.ENGAGEMENT],
  ['Does asking for help from a Fractional Sales Leader make me look weak to my team?', CAT.ENGAGEMENT],
  ['Can a Fractional Sales Leader help me scale from $1 million to $10 million?', CAT.ENGAGEMENT],
  ['How do I know if a Fractional Sales Leader has a track record worth trusting?', CAT.ENGAGEMENT],
  ['Can a Fractional Sales Leader work with my existing salesperson instead of replacing them?', CAT.ENGAGEMENT],
  ['At what revenue stage should I transition from a Fractional Sales Leader to a full-time VP of Sales?', CAT.ENGAGEMENT],
]

async function tryRpc() {
  const { error } = await supabase.rpc('exec_sql', { sql: ADD_COLUMN_SQL })
  return !error
}

async function tryDirectRest() {
  const r = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseServiceKey,
      Authorization: `Bearer ${supabaseServiceKey}`,
    },
    body: JSON.stringify({ sql: ADD_COLUMN_SQL }),
  })
  return r.ok
}

async function ensureColumn() {
  console.log('Step 1: ensuring `category` column exists on faq_items…')

  // Probe by selecting category and seeing if Supabase complains.
  const { error: probeErr } = await supabase
    .from('faq_items')
    .select('category')
    .limit(1)

  if (!probeErr) {
    console.log('  ✓ Column already exists.')
    return true
  }

  // Column missing — try to add it via RPC.
  if (await tryRpc()) {
    console.log('  ✓ Added via supabase.rpc(exec_sql).')
    return true
  }
  if (await tryDirectRest()) {
    console.log('  ✓ Added via direct REST.')
    return true
  }

  console.log('')
  console.log('  ✗ Cannot add the column automatically — exec_sql RPC is not available.')
  console.log('  Please run this SQL in the Supabase Dashboard → SQL Editor:')
  console.log('')
  console.log('    ' + ADD_COLUMN_SQL)
  console.log('')
  console.log('  Then re-run this script to backfill.')
  process.exit(2)
}

async function backfill() {
  console.log(`\nStep 2: backfilling category for ${ASSIGNMENTS.length} faqsPage FAQs…`)

  const { data: rows, error } = await supabase
    .from('faq_items')
    .select('id, question, category')
    .eq('page', 'faqsPage')

  if (error) {
    console.error('  ✗ Failed to fetch faqsPage FAQs:', error.message)
    process.exit(1)
  }

  const byQuestion = new Map(rows.map((r) => [r.question, r]))
  const unmatched = []
  let updated = 0
  let unchanged = 0

  for (const [question, category] of ASSIGNMENTS) {
    const row = byQuestion.get(question)
    if (!row) {
      unmatched.push(question)
      continue
    }
    if (row.category === category) {
      unchanged++
      continue
    }
    const { error: upErr } = await supabase
      .from('faq_items')
      .update({ category })
      .eq('id', row.id)
    if (upErr) {
      console.error(`  ✗ Update failed for "${question}":`, upErr.message)
      continue
    }
    updated++
  }

  // Report DB-side rows that didn't get an assignment
  const assignedSet = new Set(ASSIGNMENTS.map(([q]) => q))
  const orphans = rows.filter((r) => !assignedSet.has(r.question))

  console.log(`  ✓ Updated: ${updated}`)
  console.log(`  · Already-correct: ${unchanged}`)
  if (unmatched.length) {
    console.log(`  ⚠ Script assignments with no DB row (likely re-worded question):`)
    unmatched.forEach((q) => console.log('     - ' + q))
  }
  if (orphans.length) {
    console.log(`  ⚠ DB rows with no script assignment (uncategorized):`)
    orphans.forEach((r) => console.log('     - ' + r.question))
  }
}

async function main() {
  await ensureColumn()
  await backfill()
  console.log('\n✅ Done.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
