/**
 * Seed script: Is Your Sales Process Actually Hurting Your B2B Growth?
 * - seoSalesProcessHurtingB2bGrowth → /is-your-sales-process-actually-hurting-your-b2b-growth
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-is-your-sales-process-actually-hurting-your-b2b-growth.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoSalesProcessHurtingB2bGrowth: {
    // Hero
    heroTag: 'Sales Process Diagnosis',
    heroLine1: 'Is Your Sales Process Actually',
    heroAccent: 'Hurting Your B2B Growth?',
    heroH2:
      'Did You Accidentally Build a System Meant for a Fortune 500 Instead of Your Stage of Business?',
    heroDescription:
      "For $1M–$10M ARR founders whose CRM has 12 pipeline stages, 20 required fields, and a forecast nobody trusts. Right-size the process to your stage — and watch the cycle compress.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "Most $1M–$10M ARR founders don't have a broken sales process — they have an oversized one. They copied stages, stage-gates, and tooling from companies twenty times their size, and the weight is now slowing every deal down.",
    takeaway2:
      'An over-engineered process hurts growth in three concrete ways: it lengthens the sales cycle, it kills rep accountability behind a maze of fields, and it lets bad-fit deals hide inside the pipeline for months.',
    takeaway3:
      "Your process should be the smallest set of stages, fields, and rituals that produce a forecast you trust. If a stage doesn't change a decision you make, delete it.",
    takeaway4:
      'The right-sized B2B sales process at $1M–$10M ARR is five stages, ten required fields, one weekly pipeline review, and a written disqualification rule. Nothing more.',
    takeaway5:
      "You don't need a Fortune 500 sales operations team. You need a Fractional Sales Leader who has installed a stage-appropriate process at this revenue band before — and who will rip out the parts that aren't earning their keep.",

    // Symptoms
    sectionSymptomsHeading: 'Four Signs Your Sales Process Is Hurting Growth',
    sectionSymptomsSubheading:
      'If two or more of these are true, your process is no longer fit for your stage. The fix is rarely more — it is almost always less.',

    symptom1Title: 'Your Pipeline Has More Stages Than Your Team Has Reps',
    symptom1Detail:
      "Somewhere along the way you stood up nine, ten, twelve pipeline stages — Lead, MQL, SQL, Discovery, Demo Scheduled, Demo Completed, Proposal Sent, Negotiation, Verbal, Closed-Won. Then you bolted on sub-stages. At a Fortune 500 with two hundred reps and a sales operations department, that level of granularity tells leadership exactly where the funnel is leaking. At $1M–$10M ARR with three reps, it does the opposite. Reps spend an hour a week dragging deals around in HubSpot. Forecast accuracy drops because every stage is a guess. Real movement gets buried under administrative motion.",
    symptom1Outcome:
      'Cut the pipeline to five stages your buyer actually moves through. Forecast accuracy almost always improves the same week.',

    symptom2Title: 'Required Fields Have Replaced Real Qualification',
    symptom2Detail:
      "Enterprise CRMs run on twenty-plus required fields per opportunity — industry vertical, sub-vertical, deal source, deal sub-source, primary contact role, secondary contact role, multi-thread count, BANT score, MEDDIC score, regional flag. Each field exists for a reporting reason that matters at scale. At your stage, none of those fields are answering the only question that matters: is this deal real or is this rep dressing up hope as progress? You ended up with a CRM that is technically complete and operationally useless. Reps fill in the boxes. The pipeline still lies. The forecast still misses.",
    symptom2Outcome:
      'Replace twenty enterprise fields with three real qualification questions that have to be answered with evidence — not opinions, not checkboxes.',

    symptom3Title: 'Your Sales Cycle Is Longer Than Your Buyer Needs It to Be',
    symptom3Detail:
      "Founders who copy enterprise process inherit enterprise pacing. Two-week gaps between calls. Mandatory \"alignment\" meetings before a proposal. Multi-stakeholder demos that the buyer didn't ask for. The buyer at $1M–$10M ARR is usually a single decision-maker with a budget, a problem, and a timeline. They don't want a six-touch journey. They want an answer. Your process is now the friction. Deals that should close in three weeks take three months. Some of them die in the gap because a competitor with a leaner motion got there first.",
    symptom3Outcome:
      'A sales cycle compressed to match how your buyer actually buys — usually 30 to 60 percent shorter — without dropping a single qualification step that matters.',

    symptom4Title: 'Reports Have Replaced Conversations',
    symptom4Detail:
      "The sign you've over-built: leadership now manages sales by dashboard. You scroll through twelve KPI tiles, and you still cannot tell which three deals will close this month. The Fortune 500 model assumes a layer of sales managers translating dashboards into rep coaching. You don't have that layer. You have a founder, a couple of reps, and a Monday-morning report nobody reads. The fix is not more reporting — it is one weekly pipeline review where every open deal gets named out loud, defended with evidence, and either advanced or killed. That single ritual replaces nine dashboards.",
    symptom4Outcome:
      'A 45-minute weekly meeting that does what the entire BI stack was failing to do — surface the truth about each deal, in front of the people who can act on it.',

    // SEO paragraphs
    seoPara1:
      "The single most common diagnosis I make at $1M–$10M ARR is the same one most founders never expect: your sales process is not too small. It is too large. It was assembled in good faith — a stage borrowed from an ex-Salesforce friend, a qualification framework lifted from a HubSpot blog, a dashboard built for a board meeting that does not exist yet — and now it is the thing slowing you down. The forecast is unreliable not because reps are dishonest, but because the process is asking the wrong questions.",
    seoPara2:
      'The fix is to build a stage-appropriate sales process — one that is the smallest possible system that still produces a forecast you can run a business on. If you want the long-form playbook for what that looks like, read',
    seoPara2b:
      '. And if you want to see how the same logic applies to the entire sales infrastructure — pipeline, playbook, qualification, accountability — start with',
    seoPara2c: '. The pattern is the same: install only what your stage needs.',

    // Comparison table
    sectionCompareHeading: 'Fortune 500 Process vs. Stage-Appropriate Process',
    sectionCompareSubheading:
      'Same buyer. Same product. Two completely different growth curves — driven entirely by the weight of the process around the deal.',
    compareColLeft: 'Fortune 500 Process Bolted On',
    compareColRight: 'Stage-Appropriate Process',
    compare1Without: '10–12 pipeline stages copied from a HubSpot enterprise template',
    compare1With: '5 stages that match how your buyer actually moves',
    compare2Without: '20+ required fields per opportunity, mostly ignored or fabricated',
    compare2With: '10 fields max, every one of them tied to a real qualification gate',
    compare3Without: 'Multi-stakeholder enterprise demos for single-decision-maker buyers',
    compare3With: 'Tight discovery + demo flow matched to your actual buyer',
    compare4Without: "Forecast built on stage probabilities that don't match reality",
    compare4With: 'Forecast built on evidence-based exit criteria for each stage',
    compare5Without: 'MEDDIC, BANT, SPICED bolted on without any of them being enforced',
    compare5With: 'One disqualification rule, written down, applied every week',
    compare6Without: 'Process designed for a 100-rep team running on a 3-rep team',
    compare6With: 'Process designed for a 3-rep team that can scale to 10 without rebuilding',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I right-size sales processes for $1M–$10M ARR B2B founders — strip out the enterprise weight, install the five stages and ten fields and one weekly ritual that actually move deals, and hand back a CRM the team trusts. Most engagements compress the sales cycle by 30 percent or more inside 90 days, without adding a single rep.",

    // FAQs
    faq1Question: 'How do I know if my sales process is actually hurting growth, not helping it?',
    faq1Answer:
      "Three quick tests. First: ask a rep to talk through their top three open deals without looking at the CRM. If they cannot, the process is replacing their thinking, not supporting it. Second: pull your last twenty closed-lost deals and check the CRM stage at the time they died. If most stalled in the same stage, that stage is where your process is fighting you. Third: time the gap between your average first call and signed contract. If it is materially longer than your buyer's stated buying timeline, the process is the bottleneck.",

    faq2Question: "What's the right number of pipeline stages for a $1M–$10M ARR B2B company?",
    faq2Answer:
      'Five. Lead, Qualified, Discovery Complete, Proposal, Closed. Each stage has written exit criteria based on what the buyer has confirmed — not what the rep has done. More stages do not give you more visibility; they give you more places for deals to hide. The most accurate forecasts I have ever seen at this revenue band came out of a five-stage pipeline reviewed every Monday with the founder in the room.',

    faq3Question: 'Should I be using MEDDIC, BANT, or another qualification framework?',
    faq3Answer:
      'Pick one and enforce it ruthlessly. The mistake is layering all three onto the same opportunity record so reps fill out fifteen qualification fields and qualify nothing. At $1M–$10M ARR, BANT works for transactional deals, MEDDIC works for higher-ACV multi-stakeholder deals, and SPICED works for emerging products. The framework matters less than the discipline of writing down exactly which evidence has to exist before a deal advances — and killing deals that lack it.',

    faq4Question: "Won't a leaner sales process limit us when we scale?",
    faq4Answer:
      'The opposite. Companies that scale cleanly are the ones that built a tight stage-appropriate process at $1M–$10M ARR and added complexity only when reality demanded it. The companies that struggle to scale are the ones that imported enterprise complexity early and now cannot retrain a growing team off a process the team never trusted in the first place. Right-size now. Add stages, fields, and tooling later, only when the data forces you to.',

    faq5Question: 'How long does it take to fix an over-engineered sales process?',
    faq5Answer:
      "Two to four weeks for the redesign — pipeline stages, required fields, qualification criteria, weekly review structure. Another 30 to 60 days for the team to live in the new system, get coached on it, and break old habits. Most engagements I run see forecast accuracy improve inside the first month and sales-cycle length contract by month three. The bottleneck is almost never the design. It is the founder's willingness to delete what doesn't earn its place.",

    // CTA
    ctaHeadline: 'Strip the Process. Free the Pipeline.',
    ctaDescription:
      "In 30 minutes I will walk through your current pipeline, fields, and weekly cadence and tell you exactly which pieces are earning their keep — and which ones are slowing you down. No pitch. Just a clear read.",
  },
}

async function seed() {
  for (const [section, content] of Object.entries(sections)) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section, content }, { onConflict: 'section' })

    if (error) {
      console.error(`X ${section}:`, error.message)
    } else {
      console.log(`OK ${section}`)
    }
  }
  console.log('Done.')
}

seed()
