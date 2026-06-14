/**
 * Seed script: Am I Ready to Hire a VP of Sales Yet?
 * - seoReadyToHireVpSales → /am-i-ready-to-hire-a-vp-of-sales-yet
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-ready-to-hire-vp-of-sales.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoReadyToHireVpSales: {
    // Hero
    heroTag: 'Sales Leadership Readiness',
    heroLine1: 'Am I Ready to Hire a',
    heroAccent: 'VP of Sales Yet?',
    heroH2: '5 Things to Complete Before Hiring a VP of Sales',
    heroDescription:
      "For $1M–$10M ARR founders weighing a $400K VP hire. A VP scales a sales engine that already runs. Here's how to know if you have one to hand them, and what to finish first if you don't.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "A VP of Sales doesn't build your sales engine. They scale one that already runs. If there's nothing to scale, even a great VP fails.",
    takeaway2:
      "The honest question isn't \"Can I afford a VP?\" It's \"Would a VP have anything to run on day one?\" Most founders at $1M–$10M ARR can't answer yes yet.",
    takeaway3:
      "There are five things to complete before you hire: get out of founder-led sales, lock your Ideal Customer Profile, write the playbook, build a forecast you trust, and prove the process works in someone else's hands.",
    takeaway4:
      "Hire before those five are done and you're betting roughly $400K and a year of runway on one person fixing problems they were never hired to fix.",
    takeaway5:
      "A Fractional Sales Leader builds all five with you in 60 to 90 days, at about 25% of a full-time VP's cost. Then you hire the VP into a machine that already produces revenue.",

    // The 5 Things
    sectionItemsHeading: '5 Things to Complete Before Hiring a VP of Sales',
    sectionItemsSubheading:
      "If you can check all five honestly, you're ready. If you can't, here's exactly what to finish first.",

    item1Title: "You've Actually Gotten Out of Founder-Led Sales",
    item1Detail:
      "This is the one founders skip. If you're still the closer on every deal that matters, you don't have a sales function, you have a sales person, and it's you. A VP can't scale a motion that only lives in your head. Before you hire, the core deals have to close when you're not in the room. That means at least one other person is running discovery, handling objections, and getting to yes without you on the call. If revenue still drops the week you go on vacation, you're not ready. You're the product.",
    item1Outcome:
      "Deals that close without you on the call, so a VP inherits a working motion instead of inheriting you.",

    item2Title: 'You Have a Defined Ideal Customer Profile',
    item2Detail:
      "A VP of Sales will ask one question in the first week: who do we sell to and who do we walk away from? If your answer is \"anyone with a budget,\" they'll spend their first quarter guessing, and so will every rep they hire. A defined Ideal Customer Profile names the industry, the company size, the revenue band, the buying role, and the disqualifiers that kill a deal on sight. It's the difference between a team that fills the pipeline with real buyers and a team that fills it with hope. You write this before the VP, not after, because you're the one who knows which customers actually stick.",
    item2Outcome:
      "A one-page ICP every rep qualifies against, so the pipeline fills with buyers who close and renew.",

    item3Title: 'You Have a Written Sales Playbook',
    item3Detail:
      "The playbook is your sales instinct turned into something teachable. It scripts the discovery framework, the qualification criteria, the recurring objections and the best answer to each, the demo, the follow-up cadence, and the close. Without it, every rep sells a slightly different product to a slightly different buyer, and a VP inherits chaos instead of a system. Founders assume the VP will write the playbook. The good ones can, but it takes them six months you don't have, and they'll write it from a generic template instead of from what's already working in your business. Hand them a playbook and they scale it. Hand them a blank page and they stall.",
    item3Outcome:
      "A 20-to-40-page operating manual that turns rep onboarding from six months into 30 days.",

    item4Title: 'You Have a Pipeline and Forecast You Can Trust',
    item4Detail:
      "A VP is going to be measured on a number, and they'll want to know that number is real before they sign. If your forecast is a feeling and your pipeline stages are aspirational labels copied from a CRM template, you can't hand them a target you believe in. A trustworthy pipeline has stages defined by buyer actions, not seller activity. \"Discovery complete\" means the buyer confirmed the problem, the budget, the timeline, and the decision-maker, not that a meeting happened. When the data is clean, a VP can forecast, coach, and hold the line. When it's fiction, they spend month one rebuilding it and month two explaining the miss.",
    item4Outcome:
      "A forecast you'd take to the board without a footnote, so a VP owns a real number from day one.",

    item5Title: 'You Have Proof the Process Works in Someone Else’s Hands',
    item5Detail:
      "The final test is the one that matters most: has anyone besides you closed a deal by following the process, not by being charismatic? One or two reps hitting quota on the playbook is proof the system is teachable, repeatable, and ready to be scaled. That's exactly what a VP is for. If nobody has done it yet, you don't need a VP, you need to prove the motion works once, because a VP scales what's proven. They don't manufacture proof. Hiring them to find out whether your sales model even works is the single most expensive experiment a founder can run.",
    item5Outcome:
      "At least one rep closing on the playbook, so the VP scales a proven motion instead of testing an unproven one.",

    // SEO paragraphs
    seoPara1:
      "The question \"Am I ready to hire a VP of Sales?\" is really two questions wearing one coat. The first is about you, can you afford the roughly $400K all-in cost, are you tired of carrying sales alone. The second is the one that actually decides the outcome: would a VP have anything to run on day one? Roughly 70% of first-time VP hires fail inside eighteen months, and it's rarely because the VP was bad. It's because they were hired into companies with no playbook, no defined process, and a founder who was still the best, and only, salesperson in the building.",
    seoPara2:
      "So the readiness work happens before the hire, not after. You get yourself",
    seoPara2b: ", you write down",
    seoPara2c:
      ", you build the playbook and a forecast you trust, and you prove the motion works in someone else's hands. Do that and a VP scales a machine that already produces revenue. Skip it and you've hired an operator to run an empty operation. The order matters more than the title.",

    // Comparison table
    sectionCompareHeading: 'Hiring Too Early vs. Hiring Ready',
    sectionCompareSubheading:
      "The difference isn't the VP's talent. It's whether the five things were done before they started.",
    compareColLeft: 'Hiring a VP Too Early',
    compareColRight: 'Hiring a VP When Ready',
    compare1Without: "You're still the closer on every deal that counts",
    compare1With: 'Deals close without the founder in the room',
    compare2Without: '"We sell to anyone with a budget"',
    compare2With: 'A defined ICP every rep qualifies against',
    compare3Without: 'The process lives in the founder’s head',
    compare3With: 'A written playbook anyone can run',
    compare4Without: 'Forecast is a guess, off by 30% a quarter',
    compare4With: 'A forecast built on real stage conversion data',
    compare5Without: 'Nobody but the founder has ever closed on it',
    compare5With: 'One or two reps already hitting quota on the playbook',
    compare6Without: 'VP spends a year fixing the foundation, then leaves',
    compare6With: 'VP scales a working machine from week one',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I've watched a lot of founders hire a VP of Sales hoping it would fix sales, and watched most of them spend $400K finding out it doesn't work that way. My job is to get you ready first, build the five things, prove the motion, and hand you a sales engine that's actually scalable. Then, when you hire a VP, they're set up to win instead of set up to leave.",

    // FAQs
    faq1Question: 'How do I know if I am ready to hire a VP of Sales?',
    faq1Answer:
      "Run the five-item checklist on this page honestly. If you're out of founder-led sales, you have a defined ICP, a written playbook, a forecast you trust, and at least one rep closing on the process, you're ready. If two or more of those are missing, hiring a VP means paying someone $400K to build the foundation, and that almost never works. A VP scales a working sales engine. They don't build one from scratch.",

    faq2Question: 'What happens if I hire a VP of Sales before I am ready?',
    faq2Answer:
      "The usual path is six to twelve months of slow progress, a mutual parting of ways, and then a return to founder-led sales while you recover. The all-in cost of a failed VP hire at this stage runs $500K to $800K once you add recruiting fees, severance, lost pipeline, and the deals that didn't close during the ramp. The damage isn't just the money. It's the year of momentum you can't get back.",

    faq3Question: 'Can I just hire a VP of Sales to build all five of these for me?',
    faq3Answer:
      "You can, but it's the most expensive way to do it and the most likely to fail. A VP of Sales is hired and paid to scale and lead, not to do the foundational build, write the first playbook, or prove the model works. Most VPs at this level haven't done a ground-up build in years and don't want to. They want to inherit a machine and make it bigger. Build the five first, then hire the VP to run them.",

    faq4Question: 'What is the difference between a VP of Sales and a Fractional Sales Leader here?',
    faq4Answer:
      "A full-time VP is a permanent, roughly $400K commitment hired to scale an existing engine. A Fractional Sales Leader is brought in to build that engine, the playbook, the ICP, the pipeline, the accountability, and prove it works, in 60 to 90 days at about 25% of the cost. The Fractional Sales Leader gets you ready. The VP takes it from there. Used in that order, you stop betting a year of runway on one hire.",

    faq5Question: 'How long does it take to get ready to hire a VP of Sales?',
    faq5Answer:
      "With a Fractional Sales Leader who has done it before, the core foundation, playbook, ICP, pipeline discipline, and accountability, is built in 60 to 90 days. Proving the motion in a rep's hands adds another 30 to 60 days. So most founders go from \"not ready\" to \"genuinely ready\" in about four to six months, with a working sales function the whole time instead of a year of guessing.",

    // CTA
    ctaHeadline: 'Not Sure Which of the Five You Have?',
    ctaDescription:
      "In 30 minutes I can walk the checklist with you, tell you honestly whether you're ready to hire a VP of Sales, and map what it would take to get ready if you're not, without the $400K bet.",
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
