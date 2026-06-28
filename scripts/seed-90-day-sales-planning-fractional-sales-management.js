/**
 * Seed script: What Does 90-Day Sales Planning Have to Do With Fractional Sales Management?
 * - seo90DaySalesPlanningFractional → /90-day-sales-planning-fractional-sales-management
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-90-day-sales-planning-fractional-sales-management.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seo90DaySalesPlanningFractional: {
    // Hero
    heroTag: 'Fractional Sales Management',
    heroLine1: 'What Does 90-Day Sales Planning Have to Do',
    heroAccent: 'With Fractional Sales Management?',
    heroH2: "If You're Considering Hiring a Fractional Sales Leader, Here's What You Need to See",
    heroDescription:
      "For $1M–$10M ARR founders weighing a Fractional Sales Leader. The real product isn't hours. It's a 90-day plan with deliverables you can hold someone to. Here's how to read one.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "Fractional sales management isn't an open-ended retainer. It runs on 90-day planning cycles with deliverables you can check.",
    takeaway2:
      'Before you sign with any Fractional Sales Leader, ask to see the written 90-day plan. No plan, no hire.',
    takeaway3:
      'A real first cycle delivers four things: a documented Sales Playbook, a pipeline you can forecast from, an Accountabilities Document for every seat, and a weekly operating rhythm.',
    takeaway4:
      'Ninety days is long enough to install real infrastructure and short enough that you can measure whether it worked before committing to the next cycle.',
    takeaway5:
      "The goal isn't to make you dependent on a fractional leader. It's to hand you a system your team runs after the engagement ends.",

    // 5 Things section
    sectionThingsHeading: 'The 5 Things a 90-Day Plan Should Deliver',
    sectionThingsSubheading:
      "If you're evaluating a Fractional Sales Leader, this is the checklist. Each one is a deliverable, not a promise.",

    thing1Title: 'A Written 90-Day Plan Before You Sign',
    thing1Detail:
      "The first thing to look for is the plan itself. A real Fractional Sales Leader hands you a written 90-day plan before you commit, not after. It names the deliverables for each 30-day block, the metrics that prove progress, and what you'll own at the end. If someone wants to \"see how things go\" for a few months, that's a retainer, not a plan. You're paying for a defined outcome, so you should be able to read it on a single page.",
    thing1Outcome:
      'A one-page plan you can hold someone to, with deliverables and dates you can check against.',

    thing2Title: 'A Documented Sales Playbook',
    thing2Detail:
      "By day 90 you should have your sales motion written down. Right now it lives in your head. A Fractional Sales Leader's job in the first cycle is to extract it: your Ideal Customer Profile, your discovery questions, your objection responses, your close. That document is what lets a rep sell without you in the room. Ask any candidate to show you a playbook they've built before. If they can't, they've never actually built one.",
    thing2Outcome:
      'A playbook your next hire runs from on day one, so onboarding takes 30 days instead of six months.',

    thing3Title: 'A Pipeline That Tells the Truth',
    thing3Detail:
      "A 90-day plan should leave you with a pipeline you can forecast from. That means stages defined by what the buyer did, not by how the rep feels. \"Proposal sent\" is an activity. \"Buyer confirmed budget, timeline, and decision-maker\" is a milestone. The difference is whether your forecast survives the last week of the quarter. Look for a leader who rebuilds your stages around evidence and kills the deals that were never real.",
    thing3Outcome:
      'A forecast you can take to the board without a footnote, built on conversion data instead of optimism.',

    thing4Title: 'An Accountabilities Document for Every Seat',
    thing4Detail:
      "Most founders manage their reps by feel. A Fractional Sales Leader replaces that with an Accountabilities Document: what each person owns, the numbers they're measured on, the review cadence, and what happens when a target is missed. It covers both the activity (calls, demos, pipeline coverage) and the outcomes (close rate, cycle length, quota). When it's written down and enforced weekly, you stop being the manager of last resort.",
    thing4Outcome:
      "A team that knows exactly what it's responsible for, so you're not the one chasing every number.",

    thing5Title: 'A Weekly Operating Rhythm That Outlasts the Engagement',
    thing5Detail:
      "The point of fractional sales management isn't to make you dependent on a fractional leader. It's the opposite. By day 90 you should have a standing rhythm that runs without them: a weekly sales meeting, a real pipeline review, and one-on-ones that actually coach. The 90-day plan installs the machine. The rhythm is what keeps it running after the engagement ends.",
    thing5Outcome:
      'A self-sustaining cadence that surfaces problems early and keeps the system running when the engagement is over.',

    // SEO paragraphs
    seoPara1:
      "Most founders think hiring a Fractional Sales Leader means buying someone's time. It doesn't. You're buying a 90-day plan with deliverables you can check. Fractional sales management runs on planning cycles, not open-ended retainers. The 90-day window is long enough to install real infrastructure and short enough that you can measure whether it worked. If the leader you're talking to can't describe the first 90 days in concrete deliverables, they're selling hours, not outcomes.",
    seoPara2:
      "Before you sign anything, ask to see the plan and ask how they'll measure it. To know what the first cycle should actually produce, start with",
    seoPara2b: '. And the single deliverable that matters most is the written',
    seoPara2c:
      ' that makes your team responsible without you in the room. The plan is the product. Everything else follows from it.',

    // Comparison table
    sectionCompareHeading: 'An Open-Ended Retainer vs. a 90-Day Plan',
    sectionCompareSubheading:
      "The difference isn't the seniority of the person. It's whether you're buying hours or buying a defined outcome.",
    compareColLeft: 'An Open-Ended Retainer',
    compareColRight: 'A 90-Day Plan',
    compare1Without: 'You buy hours and hope something improves',
    compare1With: 'You buy deliverables with dates you can check',
    compare2Without: 'Progress is described, never measured',
    compare2With: 'Progress is measured against named metrics',
    compare3Without: 'The sales motion stays in your head',
    compare3With: 'The sales motion is documented in a playbook',
    compare4Without: 'Forecast is a feeling that breaks every quarter',
    compare4With: 'Forecast is built on real, evidence-based pipeline stages',
    compare5Without: 'You stay the manager of last resort',
    compare5With: 'An Accountabilities Document runs the team',
    compare6Without: "When they leave, you're back where you started",
    compare6With: 'A weekly rhythm keeps running without them',

    // 90-day phases
    sectionPhasesHeading: 'What the 90 Days Actually Look Like',
    sectionPhasesSubheading:
      'Three 30-day blocks, each with a job. This is the operating rhythm of fractional sales management.',
    phase1Title: 'Days 1–30: Diagnose and Codify',
    phase1Detail:
      "The first month is extraction. Your fractional leader sits with your closed deals, your recorded calls, and your pipeline, and writes down what's actually working. What does a qualified buyer look like? Which questions surface urgency? What does a yes sound like a week before it lands? This is the founder's instinct, pulled out of your head and onto the page. By day 30 you have the first draft of a Sales Playbook and an honest read on where the pipeline is lying to you.",
    phase2Title: 'Days 31–60: Install and Enforce',
    phase2Detail:
      "With the playbook drafted, the infrastructure goes in. Pipeline stages get rebuilt around buyer evidence. Required fields enforce qualification so reps stop keeping dead deals alive. The Accountabilities Document gets written for every seat, and the weekly sales meeting becomes a standing appointment that's never cancelled. This is the unglamorous middle stretch where a system stops being a document and starts being how the team actually works.",
    phase3Title: 'Days 61–90: Hand Off the Rhythm',
    phase3Detail:
      "The final month is about making the machine run without the fractional leader. The weekly meeting, the pipeline review, and the one-on-ones get handed to whoever owns them next, whether that's you, a sales manager, or the first rep you promote. The plan ends with a system in place and a rhythm that keeps it running. If the engagement continues, the next 90-day plan tackles the next constraint. Either way, you're not left dependent on one person.",

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "Fractional sales management, the way I run it, is a sequence of 90-day plans. Each one installs a piece of the machine: the playbook, the pipeline, the Accountabilities Document, the weekly rhythm. By the end you own a system your team can run, whether I'm still in the room or not.",

    // FAQs
    faq1Question: 'What does 90-day sales planning have to do with fractional sales management?',
    faq1Answer:
      "Everything. Fractional sales management isn't an open-ended consulting retainer. It runs on 90-day planning cycles. Each cycle has a defined set of deliverables, a way to measure them, and something concrete you own at the end. The 90-day window is long enough to install real sales infrastructure and short enough that you can tell whether it worked before you commit to the next cycle. If a leader can't describe your first 90 days in deliverables, they're selling hours.",

    faq2Question: 'Why 90 days and not six months or a year?',
    faq2Answer:
      "Ninety days is the shortest window that produces durable change and the longest you should wait before measuring it. In the first 30 days a Fractional Sales Leader diagnoses and documents your sales motion. In the next 30 they install the infrastructure and enforce it. In the final 30 they hand off the operating rhythm. A year-long plan with no 90-day checkpoint is just a retainer with a longer leash. You want results you can measure inside a quarter.",

    faq3Question: 'What should the first 90-day plan actually deliver?',
    faq3Answer:
      "A documented Sales Playbook, a pipeline with stages defined by buyer evidence, an Accountabilities Document for every seat, and a weekly operating rhythm that runs without the fractional leader in the room. Those four things turn founder-led selling into a system your team can run. If a 90-day plan promises activity instead of those deliverables, it isn't a plan worth paying for.",

    faq4Question: 'How is this different from hiring a full-time VP of Sales?',
    faq4Answer:
      "A full-time VP is a roughly $400K all-in bet on one person, and most first-time VP hires fail inside eighteen months because they're dropped into a company with no system to run. A Fractional Sales Leader builds the system first, on a 90-day plan, at a fraction of the cost. You get the infrastructure before you decide whether you even need a full-time VP to run it. Build the machine first. Hire the operator after it works.",

    faq5Question: "What if I don't see results in the first 90 days?",
    faq5Answer:
      "Then the plan was wrong or the leader was wrong, and you'll know it inside a quarter instead of a year. That's the entire point of planning in 90-day cycles. You're not signing an open-ended commitment. You're buying a defined outcome with a checkpoint. A real Fractional Sales Leader welcomes that checkpoint, because their value shows up in deliverables you can hold in your hand, not hours on an invoice.",

    // CTA
    ctaHeadline: 'Ask to See the 90-Day Plan Before You Sign',
    ctaDescription:
      "In 30 minutes I'll walk you through exactly what a 90-day plan should deliver for a company your size, and what to look for in any Fractional Sales Leader you're considering. No plan, no hire.",
  },
}

async function seed() {
  for (const [section, content] of Object.entries(sections)) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section, content }, { onConflict: 'section' })

    if (error) {
      console.error(`❌ ${section}:`, error.message)
    } else {
      console.log(`✅ ${section}`)
    }
  }
  console.log('Done.')
}

seed()
