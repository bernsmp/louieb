/**
 * Seed script: How Do I Design a Good Sales Comp Plan?
 * - seoSalesCompPlanDesign → /how-do-i-design-a-good-sales-comp-plan
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-sales-comp-plan-design.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoSalesCompPlanDesign: {
    // Hero
    heroTag: 'Sales Compensation Design',
    heroLine1: 'How Do I Design',
    heroAccent: 'a Good Sales Comp Plan?',
    heroH2: 'How to Put Together a Sales Comp Plan That Motivates Your Sales Team',
    heroDescription:
      "For $1M–$10M ARR founders building their first real sales team. A good comp plan is the last thing you build — not the first. Here is the structure that motivates reps, protects margin, and stops paying for the wrong behavior.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'A comp plan is built backwards from quota and Ideal Customer Profile — not the other way around. If the quota is not real, the comp plan is just a hope spreadsheet.',
    takeaway2:
      'The B2B closing-rep standard is 50/50 base-to-variable. Above 70/30 you over-pay for activity; below 30/70 you create desperate reps who close the wrong deals.',
    takeaway3:
      'Behavior follows commission. If you pay on revenue, you get revenue. If you pay on margin, you get margin. If you pay on new logos, you get new logos. Pick one outcome — and stop accidentally paying for the wrong one.',
    takeaway4:
      'The single best rule of thumb at $1M–$10M ARR: a rep at 100% of plan should generate roughly 5x their OTE in booked revenue. If your all-in sales cost is north of 20% of revenue, the math is broken before you start.',
    takeaway5:
      'A good comp plan is the last thing you build, not the first. Without a written quota, an enforced ICP, and a CRM that can measure outcomes, no comp plan in the world will fix the business.',

    // Five Components
    sectionComponentsHeading: 'The 5 Components of a Good Sales Comp Plan',
    sectionComponentsSubheading:
      'Skip any one of these and the plan will pay you to lose money. All five are non-negotiable.',

    comp1Title: 'The Base-to-Variable Split',
    comp1Detail:
      "The first lever in any B2B comp plan is the ratio of guaranteed base salary to at-risk variable. For a closing role at $1M–$10M ARR, the standard is 50/50 — half the OTE is paid as base, half is earned through commission and bonus. Founders frequently break this rule in both directions and pay for it. Go too heavy on base (70/30, 80/20) and reps coast — there is no real consequence to a soft quarter. Go too heavy on variable (30/70, all commission) and reps panic — they close deals that should never have closed, discount to win, and burn out inside a year. 50/50 is the discipline. It pays enough base to keep good reps alive through a ramp or a slow quarter, and enough variable to make winning matter.",
    comp1Outcome:
      'A pay structure where the rep can survive the bad months but cannot get rich on the good ones without actually closing — exactly the incentive you want.',

    comp2Title: 'Quota Math That Holds Up to Scrutiny',
    comp2Detail:
      "Comp is downstream of quota. If the number is wrong, the plan is broken. A real quota is built from three inputs: the OTE you are paying the rep, the territory or lead volume that rep will receive, and the historical close rates by stage from your own CRM. The rule of thumb is that a rep at 100% of plan should generate roughly 5x their OTE in booked revenue. A rep on a $200K OTE should be on a $1M quota. If you cannot defend the quota with territory math and conversion data, your reps cannot defend the number when they miss — and you will end up renegotiating the plan in Q3.",
    comp2Outcome:
      'A quota every rep accepts as fair on day one — and a comp plan you do not have to rewrite halfway through the year.',

    comp3Title: 'The Trigger Event: What You Pay On',
    comp3Detail:
      'Every comp plan has a single moment that triggers payout — and choosing the wrong one is one of the most expensive mistakes founders make. The three options: pay on signed contract, pay on invoice issued, or pay on cash collected. Pay on signed contract and reps will sign anything, including deals that get clawed back at the first renewal. Pay on cash and reps stop closing the deals where collections are slow. Most $1M–$10M ARR businesses end up paying a split — 50% at signature, 50% on cash collected within 90 days — which keeps the rep motivated to close and motivated to close the right customers.',
    comp3Outcome:
      'A commission timing rule that pays reps for revenue you actually got — not revenue you hoped to get when the deal closed.',

    comp4Title: 'Accelerators, Decelerators, and Caps',
    comp4Detail:
      "A flat commission percentage is the laziest possible comp plan. It pays the same for a rep at 60% of quota as it does for a rep at 160%. A real plan uses accelerators — a higher commission rate above quota — to reward overperformance, and decelerators — a lower rate below a threshold — to make missing quota painful. A 1.5x accelerator above 100% is standard. A 0.5x decelerator below 60% is common. Almost no plan should be capped. Capping commissions tells your best rep that there is a ceiling on what they can earn — and the moment they hit it, they stop selling for the rest of the year. The only ceiling should be the one your company cannot afford.",
    comp4Outcome:
      'A plan that pays top performers like top performers, makes underperformance financially uncomfortable, and never penalizes a rep for being too good at their job.',

    comp5Title: 'The Non-Cash Levers: SPIFFs, MBOs, and Team Bonuses',
    comp5Detail:
      "Cash commission is the engine of the plan, but it is not the only lever. SPIFFs (Sales Performance Incentive Funds) are short-term cash bonuses tied to specific behaviors you want right now — a new product launch, a strategic vertical, an underperforming SKU. MBOs (Management By Objectives) are quarterly bonuses tied to non-revenue outcomes — CRM hygiene, case study creation, pipeline coverage targets. Team bonuses are paid only when the entire team hits a collective number. Use these sparingly. Used well, they steer behavior in the direction the business needs this quarter without rewriting the whole plan. Used poorly, they confuse the rep and dilute the main commission engine.",
    comp5Outcome:
      'A handful of surgical incentives — used only when the main plan needs reinforcement — that move specific behavior without breaking the core structure.',

    // SEO paragraphs
    seoPara1:
      "Most B2B founders at $1M–$10M ARR design their first comp plan in a panic — they have just hired (or are about to hire) their first salesperson, the candidate asks what the comp structure looks like, and the founder makes something up on the spot. It usually sounds generous, the rep accepts, and six months later the founder is paying 30% of revenue in comp on deals that are barely profitable, with a rep who has no real accountability because the quota was never real. The comp plan was never the problem. The quota was. The Ideal Customer Profile was. The pipeline discipline was. Comp was the symptom.",
    seoPara2:
      "A good comp plan is the last thing you build, not the first — and it only works when the quota underneath it is defensible. If you have not yet locked the math, start with",
    seoPara2b:
      ". And because a comp plan without enforced accountability is just a wishlist, pair it with",
    seoPara2c:
      " — the written agreement that turns the comp plan into a real management instrument.",

    // Comparison table
    sectionCompareHeading: 'A Bad Comp Plan vs. a Good One',
    sectionCompareSubheading:
      'The structure is the difference. A bad plan rewards activity and hopes for revenue. A good plan pays for the outcome you actually want.',
    compareColLeft: 'Bad Comp Plan',
    compareColRight: 'Good Comp Plan',
    compare1Without: '100% commission, no base — "real reps eat what they kill"',
    compare1With: '50/50 base-to-variable split — reps survive ramps and slow quarters',
    compare2Without: 'Quota is a number written in a board deck',
    compare2With: 'Quota is built from territory math and CRM-driven close rates',
    compare3Without: 'Commission paid the second a contract is signed',
    compare3With: 'Split payout — 50% at signature, 50% on cash collected',
    compare4Without: 'One flat percentage applied to every deal, every rep',
    compare4With: 'Accelerators above quota, decelerators below the floor, no cap',
    compare5Without: 'Same comp plan for hunters, farmers, and account managers',
    compare5With: 'Distinct plans for new-logo, expansion, and renewal motions',
    compare6Without: 'Plan rewritten mid-year when revenue is short',
    compare6With: 'Plan locked for the full year — fix the rep, not the math',

    // Build sequence phases
    sectionSequenceHeading: 'The 4-Step Sequence to Build a Comp Plan That Works',
    sectionSequenceSubheading:
      'The order matters more than any individual piece. Most founders try to build the comp plan first — and end up paying for behavior the business does not need.',
    phase1Title: 'Lock the Quota Before You Touch the Comp Plan',
    phase1Detail:
      "You cannot design a comp plan against a quota that does not exist. Step one is to write the quota on paper, derive it from territory, lead volume, and last year's conversion data, and confirm it with the rep before a single commission percentage is discussed. A quota built in a vacuum will be argued every quarter. A quota built from the numbers in your own CRM is defensible — and a defensible quota is the foundation of a defensible comp plan.",
    phase2Title: 'Set the OTE That Wins the Talent You Need',
    phase2Detail:
      "OTE — On-Target Earnings — is the total compensation a rep makes at 100% of plan. It is the single number a candidate uses to evaluate the role, and it has to be at or above market for the territory and the segment. For a B2B closing rep at $1M–$10M ARR, that is typically $150K to $250K OTE depending on deal size and geography. Lower than that and you will not attract anyone who has closed B2B deals before. Higher than that and you cannot afford the team you need to scale.",
    phase3Title: 'Pick the Trigger and the Behavior It Rewards',
    phase3Detail:
      'Decide what you are paying for: bookings, revenue, gross margin, new logos, or expansion. Each one drives a different rep behavior. Founders frequently default to "pay on revenue" without thinking through the consequences — which is why their best rep keeps closing low-margin, hard-to-deliver deals. Choose the trigger that maps to what the business actually needs right now, write it into the plan, and resist the temptation to pay on multiple things simultaneously. Reps cannot optimize for three competing incentives. Pick one.',
    phase4Title: "Stress-Test the Plan With Last Year's Data",
    phase4Detail:
      "Before publishing the plan, run last year's actual deals through it. Would your top rep have earned more under the new plan than the old one? Would your bottom rep have starved? Is the cost of sales — total comp paid divided by total revenue closed — within your target range (typically 12% to 20% for B2B)? If a rep can hit 100% of plan and your business loses money on them, the plan is broken. If a rep cannot hit 100% under realistic conditions, the plan is also broken. Fix it on paper before you ship it to the team.",

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I have designed and rebuilt dozens of comp plans for $1M–$10M ARR founders. Every one starts the same way: lock the quota, set the OTE, pick the trigger, and stress-test the math with last year's data before a single rep sees the plan. Comp is not the engine of a sales team — it is the steering wheel. Build it last, and build it carefully.",

    // FAQs
    faq1Question: 'What is a fair base-to-variable split for a B2B closing sales rep?',
    faq1Answer:
      'For a closing role at $1M–$10M ARR, 50/50 is the standard — half the OTE paid as guaranteed base, half earned through commission and bonus. If your deal size is small and the cycle is short, a 60/40 split (more variable) can work. If the cycle is long and the deal complex, a 60/40 the other way (more base) is sometimes appropriate. But for most B2B founders, 50/50 is the right starting point and the right ending point. The reps you want will accept it. The reps who refuse it are usually the reps you do not want.',

    faq2Question: 'Should I pay commission on signed contracts, invoiced revenue, or cash collected?',
    faq2Answer:
      'Most $1M–$10M ARR companies pay a split: 50% of commission at contract signature, 50% on cash collected within 90 days. This keeps reps motivated to close and motivated to close customers who will actually pay. Paying 100% on signature creates clawback risk and rewards reps for deals that fall apart at the first renewal. Paying 100% on cash slows the engine — reps stop closing accounts where collections are slow. The split keeps both halves of the incentive intact.',

    faq3Question: 'How do I know if my comp plan is over- or under-paying?',
    faq3Answer:
      'Calculate your all-in cost of sales: total compensation paid divided by total revenue closed in the same period. For B2B at $1M–$10M ARR, you want that number between 12% and 20%. Above 20%, you are over-paying and the business cannot scale — every new rep makes the math worse. Below 10%, your reps are under-paid and you will lose them to a competitor that runs the math correctly. The right comp plan lands consistently inside that 12% to 20% window across reps and quarters.',

    faq4Question: 'Should I cap commissions?',
    faq4Answer:
      'Almost never. Capping commissions is one of the fastest ways to demotivate a top rep. The moment they hit the cap, they stop selling — and they tell every recruiter who calls that you cap commissions. The result is that your best people leave for an uncapped role at a competitor. The right structure is accelerators above quota, not caps. Yes, you will write a few big commission checks. That is the cost of having reps who consistently exceed quota — and it is the cheapest cost of growth you will ever pay.',

    faq5Question: 'How often should I change the comp plan?',
    faq5Answer:
      'Once a year, at most. The biggest mistake founders make is changing the plan mid-year when revenue is short — which signals to the team that the plan is negotiable, the quota is negotiable, and management is panicking. Lock the plan for the full fiscal year. If something is wrong, fix it in next year\'s plan. The only mid-year change that ever makes sense is adding a SPIFF to drive a specific short-term behavior — never restructuring the base, variable, or quota in the middle of the year.',

    // CTA
    ctaHeadline: 'Design a Comp Plan That Pays for the Behavior You Actually Want',
    ctaDescription:
      "In 30 minutes I can map what your current comp plan is actually rewarding, identify where the math is broken, and outline what a defensible plan would look like for your team — base, variable, quota, trigger, and accelerators.",
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
