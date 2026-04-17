/**
 * seed-b2b-sales-process-small-companies.js
 * Upserts the seoB2bSalesProcessSmallCompanies section into Supabase site_content
 * with every field that the live page uses.
 *
 * Run: node scripts/seed-b2b-sales-process-small-companies.js
 */

const path = require('path')
const fs = require('fs')
;(function loadEnv() {
  const candidates = [
    path.join(__dirname, '..', '.env.local'),
    path.join(__dirname, '..', '..', '..', '.env.local'),
    path.join(process.env.HOME || process.env.USERPROFILE || '', 'louieb', '.env.local'),
    'D:/louieb/.env.local',
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) { require('dotenv').config({ path: p }); return }
  }
  require('dotenv').config({ path: '.env.local' })
})()

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const SECTION = 'seoB2bSalesProcessSmallCompanies'

const content = {
  // Hero
  heroLabel: 'Sales Process',
  heroLine1: 'B2B Sales Process of Small Companies',
  heroAccent: 'The 5 Stages That Actually Work',
  heroDescription:
    'Most small B2B companies copy an enterprise sales process and wonder why it never gets used. Here is the 5 stage process that works for a $1M to $10M ARR team, the exit gates that make forecasts accurate, and the mistakes that quietly break pipelines.',
  heroPrimaryButton: 'Talk to Louie. 30 Minutes.',
  heroSecondaryLink: 'How to build the process after $1M ARR →',

  // Key Takeaways
  takeaway1:
    'A small B2B company needs 5 stages, not 8. Target, Engage, Qualify, Validate, Close. Each stage has one goal and a written exit gate.',
  takeaway2:
    'Exit gates are the difference between a forecast that lands and a forecast that embarrasses you in a board meeting. Write them down. Enforce them.',
  takeaway3:
    'Qualification is where most small company processes collapse. Pain, budget, timing, and decision maker all documented before a demo. No exceptions.',
  takeaway4:
    'The test for a working process is simple. Two salespeople selling the same product to the same ICP should produce similar conversion rates, and the forecast should land inside 10 percent of actual for three quarters running.',

  // Stages (H2 Section)
  stagesHeading: 'What should a sales process actually look like for a small B2B company?',
  stagesSubheading: 'Five stages. One goal per stage. A written exit gate. That is the whole thing.',

  stage1Label: 'Target',
  stage1Detail:
    "Target is the stage where a company earns the right to be in your pipeline. Not every lead belongs. Most small B2B companies lose the first 90 days of a deal cycle because they put anyone who responded to an email into the funnel. The Target stage filters for ICP fit, not interest. A clear ICP paragraph, a list built against it, and a trigger event that explains why now. Exit gate: the account matches ICP criteria and a trigger event is documented.",
  stage1Example:
    'Exit gate: "B2B SaaS, 50 to 250 employees, headquartered in North America, Series A or bootstrapped past $2M ARR, just hired a second salesperson in the last 60 days." If all five are true, the account moves to Engage. If any are false, it stays in Target or drops out entirely.',

  stage2Label: 'Engage',
  stage2Detail:
    "Engage is the stage where a human conversation happens. A call connected, a meaningful email reply, a LinkedIn message answered, or a meeting held. Cold email opens and ghost replies do not count. Small companies frequently log a lead as engaged after a single email reply that says \"not now.\" That is not engagement, that is a signal to nurture. Exit gate: the prospect confirms that the problem your product solves is a real problem they have, in their own words, on a recorded call or in writing.",
  stage2Example:
    'Exit gate: prospect says a version of "Yes, we are actively dealing with this and it is costing us." Not "sounds interesting." Not "let me see our calendar." Real pain, stated plainly, before the deal moves to Qualify.',

  stage3Label: 'Qualify',
  stage3Detail:
    "Qualify is where most small company sales processes quietly collapse. The salesperson runs a discovery call, likes the prospect, and advances the deal on optimism. Qualification is not a vibe. It is four answers. Does the prospect have the pain your product solves? Do they have budget or can they access it? Is there a deadline driving the decision? Is the economic buyer in the conversation or committed to joining? If any answer is soft, the deal is not qualified, and forecasting it into this quarter is how founders lose their shirts.",
  stage3Example:
    'Exit gate: all four answers are documented in the CRM in the prospect\'s own words. Pain, budget, timing, decision maker. If any of the four is missing, the deal stays in Qualify. No exceptions. "I think they can probably find the money" is not budget confirmation.',

  stage4Label: 'Validate',
  stage4Detail:
    "Validate is the stage where the prospect tests whether your solution actually solves their problem. Demo, proof of concept, reference check, pricing walk through, security review, whatever your sales cycle requires. This is the most expensive stage in the process for the salesperson, and it is where underqualified deals burn the most time. The salespeople I coach are taught to run Validate like a project with named stakeholders, a mutual action plan, and a decision date. Deals that refuse a mutual action plan almost never close.",
  stage4Example:
    'Exit gate: the prospect confirms in writing that the solution fits, references a decision date inside 45 days, and names the person with signing authority. A verbal "we love it" does not move the deal. A Monday email that lists four open items and a timeline does.',

  stage5Label: 'Close',
  stage5Detail:
    "Close is paperwork, terms, and the last five percent of questions a buyer asks before signing. A healthy Close stage lasts days, not weeks. If a deal sits in Close for more than 21 days in a small B2B company, something upstream was wrong. Either the decision maker was never fully bought in, or the budget never existed, or the timing story was invented to get a meeting. A clean process catches those issues in Qualify and Validate, not in Close. When Close takes 3 months, the fix is almost never in Close. It is in how Qualify was run.",
  stage5Example:
    'Exit gate: contract signed, purchase order received, kickoff scheduled. The handoff to implementation happens in the next business day. Closed deals that wait a week for a handoff lose 20 percent of their projected revenue in delayed starts and scope creep.',

  // SEO Paragraphs
  seoParagraph1:
    "The B2B sales process of a small company has one job. Make revenue predictable enough that the founder can step out of the deal and the number still shows up. Everything in the process serves that outcome. The stages, the exit gates, the metrics, the weekly cadence. When any of those drift, the founder gets pulled back into deals and the team stops growing. The biggest mistake I see in companies between $1M and $10M ARR is copying a process built for a 200 person sales organization and then wondering why it never gets used.",
  seoParagraph2:
    "A good process for a small company is simple, specific, and enforced. Five stages. One goal per stage. A written exit gate in the prospect's own words. One metric per stage that gets reviewed every week. Nothing more. The complexity of the methodology, the playbook, and the coaching system can grow as the team grows. The process does not need to be elaborate to work. It needs to be used. For the deeper walk through of how to build one from scratch,",
  seoParagraph2LinkText: 'read the $1M ARR sales process guide →',

  // Before / After
  beforeAfterHeading: 'Before and After: A Small B2B Sales Process Rebuild',
  beforeAfterSubheading:
    'What most $1M to $10M companies have today, versus what a working process looks like.',

  beforeAfterRow1Label: 'Pipeline Stages',
  beforeAfterRow1Bad: '8 stages copied from an enterprise Salesforce template. Half are empty on every deal.',
  beforeAfterRow1Good: '5 stages with one goal each, used consistently by every salesperson on every deal.',

  beforeAfterRow2Label: 'Exit Criteria',
  beforeAfterRow2Bad: '"Feels good, moving forward." Deals advance on optimism and close rates tell the story.',
  beforeAfterRow2Good: 'Every stage has a written exit gate. Deals do not move until the gate is documented in the CRM.',

  beforeAfterRow3Label: 'Qualification',
  beforeAfterRow3Bad: 'Discovery calls that turn into product demos in the first 10 minutes. No pain confirmed, no budget discussed.',
  beforeAfterRow3Good: "Pain, budget, timing, decision maker all confirmed in the prospect's words before a demo is scheduled.",

  beforeAfterRow4Label: 'Forecast Accuracy',
  beforeAfterRow4Bad: 'Forecasts land 40 to 60 percent off. Board meetings turn into defensive explanations.',
  beforeAfterRow4Good: 'Forecasts land inside 10 percent of actual, three quarters running. Board conversations shift to strategy.',

  beforeAfterRow5Label: 'Founder Involvement',
  beforeAfterRow5Bad: 'Founder is pulled into every deal over $25K. Nothing closes without them on the call.',
  beforeAfterRow5Good: 'Founder is only pulled in for strategic accounts over $100K or reference calls. The process runs without them.',

  // Small vs Enterprise Comparison
  compareHeading: 'Small B2B Process vs. Enterprise Process',
  compareSubheading:
    'A process built for 200 salespeople will break a team of 4. A process built for 4 will scale to 40. One direction works.',

  compareRow1Label: 'Number of Stages',
  compareRow1Small: '5 stages, each with one clear goal and exit gate',
  compareRow1Enterprise: '7 to 9 stages with sub stages, scoring, and automation rules',

  compareRow2Label: 'Team Structure',
  compareRow2Small: '1 to 6 salespeople, one leader, no RevOps support',
  compareRow2Enterprise: 'SDRs, AEs, AMs, CSMs, Sales Ops, Enablement, RevOps',

  compareRow3Label: 'Deal Size',
  compareRow3Small: '$5K to $150K ACV, 30 to 120 day cycle, 1 to 3 decision makers',
  compareRow3Enterprise: '$250K to $2M ACV, 6 to 18 month cycle, 6 to 12 decision makers',

  compareRow4Label: 'Tools',
  compareRow4Small: 'HubSpot or Pipedrive, Gmail, LinkedIn, a dialer. Nothing more.',
  compareRow4Enterprise: 'Salesforce, Outreach, Gong, 6sense, ZoomInfo, Salesloft, and custom integrations',

  compareRow5Label: 'Metrics Tracked',
  compareRow5Small: 'One metric per stage. 5 numbers on the wall, updated weekly.',
  compareRow5Enterprise: 'Dozens of metrics across funnel, velocity, attribution, and cohort analysis',

  // About
  aboutBio1:
    "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
  aboutBio2:
    'I have built and rebuilt sales processes for small B2B companies across software, services, manufacturing, and healthcare. The process that wins is always the same shape. Five stages. Written exit gates. One metric per stage. A weekly pipeline review that enforces the gates. The teams I work with usually tighten their forecast accuracy inside 90 days, and the founder starts getting weekends back inside 6 months. That is the whole point of the work.',

  // FAQs
  faq1Question: 'What is a B2B sales process for a small company?',
  faq1Answer:
    'A B2B sales process for a small company is a repeatable, five stage system a two to six person sales team can run without a Salesforce admin or a RevOps hire. It defines how a lead becomes a customer, who owns each step, what has to be true before a deal moves forward, and which numbers matter. The five stages that work for most $1M to $10M ARR B2B companies are Target, Engage, Qualify, Validate, and Close. Each stage has one goal, a clear exit gate, and a specific metric. Anything more elaborate collapses under its own weight. Anything simpler gives founders the forecast accuracy of a coin flip.',

  faq2Question: 'How many stages should my sales process have?',
  faq2Answer:
    'Five. For a B2B company between $1M and $10M ARR, five stages give you enough structure to forecast accurately, coach salespeople, and diagnose where deals die, without creating admin work that no one does. Seven and eight stage processes come from enterprise playbooks that assume full time sales operations support. Small companies do not have that support, so the extra stages end up blank in the CRM. The goal of a sales process is not to look thorough in a board deck. It is to make the same deal flow, every time, predictably, so revenue stops depending on the founder.',

  faq3Question: 'What is the difference between a B2B sales process and a sales methodology?',
  faq3Answer:
    'The sales process is the what, the methodology is the how. The process defines the stages a deal moves through, the activities at each stage, and the exit criteria to move to the next stage. The methodology defines how your salespeople run the conversation inside each stage. MEDDIC, SPIN, Challenger, and Sandler are methodologies. Your five stage pipeline is your process. Small B2B companies usually need the process first, because without it no methodology matters. A methodology applied to a broken process produces confident salespeople with inaccurate forecasts.',

  faq4Question: 'How do I know if my sales process is working?',
  faq4Answer:
    'Three tests. First, two salespeople selling the same product to the same ICP should produce similar conversion rates between stages. If one person closes 40 percent of qualified deals and another closes 8 percent, the process is not the problem, the person is, and you can coach them. If both close 8 percent, the process is broken. Second, your forecast should land inside 10 percent of actual, three months running. Third, you should be able to look at any stuck deal and know exactly which exit gate it failed, without calling a meeting. If any of those tests fail, rebuild before you hire another salesperson.',

  faq5Question: 'How long does it take to build a B2B sales process for a small company?',
  faq5Answer:
    'Thirty to sixty days if you already have deal data and an honest view of what happens when a lead arrives. The work is not complicated, it is specific. Define your ICP in one paragraph. Map the five stages, write the exit criteria for each, and pick one metric per stage. Load it into your CRM with the same stage names everyone uses. Train the team in a single two hour session. Run weekly pipeline reviews against the new stages for six weeks. What takes longer is the cultural work of getting salespeople to follow it. That part is ongoing, and it is the real job of a sales leader.',

  // CTA
  ctaHeadline: 'Want Me to Look at Your Current Sales Process?',
  ctaDescription:
    'In 30 minutes I will map your current stages against the 5 that work, show you where deals are dying, and give you the first three changes to make this quarter.',
  ctaButton: 'Book a Free 30-Minute Call',
}

async function main() {
  console.log(`Upserting section: ${SECTION}`)
  console.log(`Field count: ${Object.keys(content).length}`)

  const { error } = await supabase
    .from('site_content')
    .upsert({ section: SECTION, content }, { onConflict: 'section' })

  if (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }

  const { data, error: fetchErr } = await supabase
    .from('site_content')
    .select('section, content')
    .eq('section', SECTION)
    .single()

  if (fetchErr) {
    console.error('Verify error:', fetchErr.message)
    process.exit(1)
  }

  const populated = Object.keys(data.content || {}).filter((k) => data.content[k]).length
  console.log(`✓ Verified ${populated}/${Object.keys(content).length} fields populated in Supabase.`)
  console.log(`Done.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
