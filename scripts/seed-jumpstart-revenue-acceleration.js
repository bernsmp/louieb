/**
 * Seed script: How Do I Jumpstart Revenue Acceleration and Get Quick Wins?
 * - seoJumpstartRevenueAccelerationQuickWins → /how-do-i-jumpstart-revenue-acceleration-and-get-quick-wins
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-jumpstart-revenue-acceleration.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoJumpstartRevenueAccelerationQuickWins: {
    // Hero
    heroTag: 'Revenue Acceleration & Quick Wins',
    heroLine1: 'How Do I Jumpstart Revenue Acceleration',
    heroAccent: 'and Get Quick Wins?',
    heroH2: 'The Fractional Sales Leader Method',
    heroDescription:
      "For $1M–$10M ARR founders who need revenue this quarter, not a six-month transformation project. Four quick-win moves that surface and close the revenue already sitting in your business.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'Quick wins do not come from doing more — they come from finding the revenue you already have but are not closing. Every $1M–$10M ARR company is sitting on at least one full quarter of unworked pipeline.',
    takeaway2:
      'The Fractional Sales Leader method jumpstarts revenue in four moves: a pipeline triage, a qualification reset, a lost-and-dormant win-back motion, and a pricing and packaging audit. None of them require new hires or new marketing spend.',
    takeaway3:
      'You will see measurable pipeline movement inside 30 days and closed revenue inside 60 to 90 days. This is not a transformation project — it is harvesting what is already in the field.',
    takeaway4:
      'The reason founders cannot do this themselves is not capability. It is capacity. Every hour you spend triaging the pipeline is an hour you are not closing the deal in front of you. A Fractional Leader does the harvest while you keep selling.',
    takeaway5:
      'Quick wins fund the longer build. The cash unlocked in the first 90 days typically pays for the next 6 to 12 months of fractional engagement — which is when the actual sales infrastructure gets installed.',

    // Four Moves section
    sectionMovesHeading: 'The Four Quick-Win Moves',
    sectionMovesSubheading:
      'None of these require new hires, new tools, or new marketing spend. They surface revenue you already have.',

    move1Title: 'The 90-Day Pipeline Triage',
    move1Detail:
      "Every founder-led pipeline has the same shape: a small number of hot deals the founder is personally working, a large number of dormant deals that have not been touched in 45+ days, and a quiet zone of opportunities that never got past first contact. The triage takes one week. We pull every open deal, tag it by last meaningful contact date, last buyer-side signal, and stated next step. Anything older than 60 days with no buyer activity gets one direct, no-pressure re-engagement message. Roughly one in five of those messages produces a real conversation. That is your first quick win — revenue that was already yours, waiting for someone to ask.",
    move1Outcome:
      'A clean, ranked pipeline within 7 days — and a measurable jump in active conversations inside week 2.',

    move2Title: 'The Qualification Reset',
    move2Detail:
      "Founders qualify on instinct in 90 seconds. Salespeople, without explicit criteria, keep every deal alive on hope. We write down the three things that make a deal real (budget confirmed, decision-maker engaged, timeline named) and the three things that disqualify it automatically (no champion, no urgency, no defined buying process). Those become required fields in the CRM. Reps get explicit permission — and credit — for killing deals that do not qualify. The pipeline shrinks. The close rate climbs. Forecast accuracy improves by week 4. A smaller pipeline that converts is worth ten times a bloated pipeline that does not.",
    move2Outcome:
      'A 20–40% smaller pipeline closing at a 1.5–2x higher rate inside one quarter — and a forecast you can run a business on.',

    move3Title: 'The Lost-and-Dormant Win-Back Motion',
    move3Detail:
      'The fastest revenue in any B2B business is hiding in two places: deals you lost in the last 18 months and customers who stopped buying without ever formally churning. Both groups already know your product. Both already evaluated you. Both have changed circumstances since they walked away — new leadership, new budget, new pain. We build a tight, personalized win-back sequence — three touches over four weeks, no automation that sounds like automation, founder-signed when it matters. Win-back conversions typically run 8–15% of contacted accounts. At your average deal size, that is not a small number. It is often a full quarter of revenue.',
    move3Outcome:
      'A pipeline of pre-qualified revivals — buyers who already trust you and already need what you sell — typically producing closed revenue inside 60 days.',

    move4Title: 'The Pricing and Packaging Audit',
    move4Detail:
      "Most $1M–$10M ARR companies are priced where they were at $300K ARR. The product has improved, the market has moved, the value delivered has multiplied — and the price has not. A pricing audit is not a 90-day project. It is a one-week analysis: what are you charging today, what are comparable buyers paying competitors, where in your funnel are you losing on price vs. losing on fit, and what would a 10–15% price increase on new deals actually cost you in win rate. The answer is almost always: very little. The revenue impact is immediate. This is the single highest-leverage, lowest-effort move in the entire playbook — and the one founders are most reluctant to make alone.",
    move4Outcome:
      'A defensible price increase on new deals — typically 10–20% — implemented inside 30 days with minimal impact on win rate. Pure margin, pure revenue acceleration.',

    // SEO paragraphs
    seoPara1:
      "Revenue acceleration at the $1M–$10M ARR stage is almost never about doing more — it is about doing what you are already doing with discipline. Every founder-led business is sitting on a quarter or more of unworked pipeline: dormant deals, lost-to-no-decision opportunities, customers who quietly stopped buying, and prices that have not kept pace with the value you now deliver. Surfacing that revenue is not a strategy project. It is an execution problem — and the reason founders cannot solve it alone is capacity, not capability.",
    seoPara2:
      'The Fractional Sales Leader method jumpstarts revenue by running four moves in parallel inside the first 90 days. The harvest funds the build. If you want to see the underlying metric this method optimizes for, read',
    seoPara2b:
      '. And if you want to understand the bigger arc — quick wins now, infrastructure next, scale after that — start with',
    seoPara2c: '. Acceleration is the entry point. Compounding is the destination.',

    // Comparison table
    sectionCompareHeading: 'Without the Method vs. With It',
    sectionCompareSubheading:
      'The difference is not effort. It is whether someone is running the harvest while you keep selling.',
    compareColLeft: 'Without the Method',
    compareColRight: 'With the Method',
    compare1Without: 'Pipeline is a mystery — nobody knows what is real',
    compare1With: 'Pipeline is triaged, ranked, and actionable inside 7 days',
    compare2Without: 'Every deal stays open — pipeline looks fat, forecast lies',
    compare2With: 'Hard qualification criteria kill dead deals; close rate climbs',
    compare3Without: 'Lost deals and dormant customers disappear from view',
    compare3With: 'Win-back motion runs continuously — fastest revenue in the business',
    compare4Without: 'Pricing has not moved since you were three people',
    compare4With: 'Pricing audited and reset on new deals — instant margin lift',
    compare5Without: 'Founder is the only person who can move a deal forward',
    compare5With: 'Quick wins are systematized — reps can run the plays without you',
    compare6Without: 'Revenue is whatever it is — there is no plan to accelerate it',
    compare6With: 'Measurable pipeline growth in 30 days, closed revenue in 60–90',

    // 90-Day Sequence
    sectionSequenceHeading: 'The 90-Day Quick-Win Sequence',
    sectionSequenceSubheading:
      'Three phases. The harvest funds the build. The build compounds the harvest.',
    phase1Title: 'Days 1–14: Diagnose and Triage',
    phase1Detail:
      "The first two weeks are pure diagnosis. We pull every open deal, every closed-lost deal from the past 18 months, every dormant customer, and the last two quarters of pricing data. We map where revenue is actually leaking. By day 14 you have a one-page picture of your pipeline truth — what is real, what is dead, and where the recoverable revenue is hiding. This is the foundation everything else runs from. No new tools. No new hires. Just a clear-eyed look at what you already have.",
    phase2Title: 'Days 15–45: Run the Four Quick-Win Plays',
    phase2Detail:
      'Triage messages go out to dormant pipeline. The qualification reset gets installed in the CRM. The win-back sequence launches to lost deals and dormant accounts. The pricing audit produces a new rate card for new deals. All four plays run in parallel — they do not compete for resources because they touch different parts of the funnel. By day 45 you should see active conversations climbing, forecast accuracy improving, and the first closed-won notifications from the win-back motion.',
    phase3Title: 'Days 46–90: Close, Measure, Compound',
    phase3Detail:
      'The back half of the engagement is conversion. Revived deals work their way through the now-cleaner pipeline. Reps operate inside the new qualification rules. New deals close at higher prices. We measure week-over-week pipeline velocity, close rate, and average contract value. By day 90 the engagement has typically produced enough cash to fund the next 6–12 months of system-building — playbook, hiring, accountability, the foundational infrastructure that turns this from a one-time harvest into a repeatable revenue engine.',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'The first thing I do inside a $1M–$10M ARR company is find the revenue that is already there. Pipeline triage, qualification reset, win-back motion, pricing audit — four quick-win moves that produce measurable revenue inside 90 days. That cash funds the longer build of playbook, hiring, and accountability infrastructure. Acceleration first. Scale next.',

    // FAQs
    faq1Question: 'How fast can I realistically see new revenue from these quick wins?',
    faq1Answer:
      'Pipeline movement inside 30 days. Closed revenue inside 60 to 90 days. The win-back motion (move 3) typically produces the fastest closed dollars because those buyers already know you and have a shorter sales cycle. The pricing audit (move 4) shows up in the first new deal you sign after the new rate card goes live. None of this requires new marketing spend or new hires — it is revenue you already have, surfaced and closed.',

    faq2Question: "Why can't I just do this myself? It sounds like common sense.",
    faq2Answer:
      'It is common sense. The problem is not knowing what to do — it is having the capacity to do it while still closing the deals in front of you. Every founder I have worked with already knew their dormant pipeline was a goldmine. None of them had touched it in six months. The job a Fractional Leader does is not invention. It is execution. You keep selling the deals in front of you while someone else runs the harvest in parallel.',

    faq3Question: 'Is this just consulting? What makes it different?',
    faq3Answer:
      'Consulting produces a deck. This produces revenue. A Fractional Sales Leader sits inside your business 25 hours a week, runs the plays, owns the outcomes, and gets paid roughly the same total dollars as a senior consultant — without the deliverable being a 40-slide strategy document. You can read the deeper distinction in our explainer on a Fractional Sales Leader versus a consultant.',

    faq4Question: 'What if my pipeline is genuinely empty? Will these quick wins still work?',
    faq4Answer:
      'Three of the four moves still work — qualification reset, win-back, and pricing all run off existing customer data, not new pipeline. The triage move (move 1) will be smaller, but the win-back motion (move 3) is often the highest revenue producer regardless of current pipeline size. If your pipeline is truly empty, win-back is where we start, because every $1M+ business has 18+ months of lost-deal data sitting in the CRM that nobody has worked.',

    faq5Question: 'Will these quick wins solve my long-term sales problem?',
    faq5Answer:
      'No — and that is the point. Quick wins are a funding mechanism, not a strategy. The 60–90 days of accelerated revenue pays for the next 6–12 months of foundational work: playbook, hiring, accountability, the system that turns this from a one-time harvest into a repeatable engine. The harvest is the entry point. The infrastructure is the durable answer.',

    // CTA
    ctaHeadline: 'Find the Revenue You Already Have',
    ctaDescription:
      'In 30 minutes I can map where the unworked revenue is hiding in your business — dormant pipeline, lost deals, dormant accounts, and underpriced offers — and show you exactly which quick-win move to run first.',
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
