/**
 * Seed script: How Much Time Do I Need to Spend With a Fractional Sales Leader?
 * - seoTimeWithFractionalSalesLeader → /how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-time-with-fractional-sales-leader.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoTimeWithFractionalSalesLeader: {
    // Hero
    heroTag: 'Engagement Cadence',
    heroLine1: 'How Much Time Do I Need to Spend',
    heroAccent: 'With a Fractional Sales Leader?',
    heroH2: 'At first, the more the better off you will be.',
    heroDescription:
      'The time commitment is a curve, not a flat number. Heavy in weeks 1–2, light by month four. Here is what to expect at every stage — and why front-loading your time pays off for the next two years.',

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'Founder time is a curve, not a flat hourly rate. The first two weeks are heavy by design — four to six hours of focused work — because the playbook lives in your head and only you can extract it.',
    takeaway2:
      'Weeks 3–6 drop to about two to three hours a week as the Sales Playbook and CRM get built. You are reviewing, not producing.',
    takeaway3:
      'By weeks 7–12 you are at one to two hours a week — a weekly pipeline review plus a short check-in. The system is running and the team is executing the playbook.',
    takeaway4:
      'Steady state from month four onward is roughly an hour a week. Most founders use the time they get back on product, partnerships, or fundraising.',
    takeaway5:
      'Skip the upfront investment and the engagement stalls. Founders who try to outsource discovery end up with a generic playbook the team will not use — and another year of founder-led sales.',

    // Phases section
    sectionPhasesHeading: 'The Founder-Time Curve Across a 90-Day Build',
    sectionPhasesSubheading: 'Each phase has a different role for you. The hours go down as the system goes up.',

    phase1Title: 'Weeks 1–2: Discovery and Extraction (4–6 hours of your time)',
    phase1Detail:
      "The first two weeks are the heaviest. I sit with you to extract what is in your head — your best closed deals, your real Ideal Customer Profile, the objections you actually hear, the questions you ask that move buyers forward, the patterns in your wins and losses. This is the founder magic, and only you can give it to me. Block four to six hours across two weeks for working sessions. Be available for short follow-up calls in between. The more time you give me in this window, the faster everything downstream gets built.",
    phase1Outcome:
      'What you get: a documented version of how you sell, ready to be turned into a Sales Playbook the team can run from.',

    phase2Title: 'Weeks 3–6: Build the Playbook and CRM (2–3 hours per week)',
    phase2Detail:
      'Now I do most of the writing. The Sales Playbook gets drafted. The CRM gets reconfigured to match the real pipeline stages with evidence-based exit criteria. Qualification fields go in. Reporting gets cleaned up. Your time drops to about two to three hours a week — one working session to review drafts, plus a short weekly stand-up. I do not need you in every meeting at this stage. I need you reviewing what I produce so it matches how you actually sell.',
    phase2Outcome:
      'What you get: a written Sales Playbook and a CRM that tells you the truth about pipeline health in one glance.',

    phase3Title: 'Weeks 7–12: Install the System and Onboard the Team (1–2 hours per week)',
    phase3Detail:
      'The system goes live. The weekly pipeline review starts. If you already have salespeople, they get trained on the playbook. If you do not, this is when I help you hire the first scalable rep. Your time drops to about one to two hours a week — the weekly pipeline review (60 minutes) plus a quick async check-in. You are no longer the bottleneck. The system is running and I am running it with you, not for you.',
    phase3Outcome:
      'What you get: a working sales operation with you in the room as the leader, not the operator.',

    phase4Title: 'Month 4 and Beyond: Steady State (30–60 minutes per week)',
    phase4Detail:
      'Steady state is one hour a week, sometimes less. A short pipeline review. Monthly forecast accuracy check. Quarterly compensation and territory review. You are operating as a Founder-CEO again, not a Founder-Salesperson. The Fractional Sales Leader runs the rhythm. You make the strategic calls. Most founders use the time they get back to focus on product, partnerships, or fundraising — the work that compounds.',
    phase4Outcome:
      'What you get: 20+ hours a week back, a sellable revenue engine, and a forecast you can take to the board.',

    // SEO paragraphs
    seoPara1:
      'The question "how much time do I need to spend with a Fractional Sales Leader?" comes up in almost every first call I have with a $1M–$10M ARR founder. The honest answer is the one most people do not want to hear: a lot at the start, almost nothing later. Six focused hours in the first two weeks. Two to three hours a week through week six. One to two hours a week through week twelve. Then thirty to sixty minutes a week from month four forward. The total across the first 90 days is roughly thirty hours of your time — about half of one working week — to install a system that runs for years.',
    seoPara2:
      'The mistake I see most often is the founder who tries to "stay out of the way" in weeks one and two — they think they are being respectful of their own time and the Fractional Sales Leader\'s expertise. They are not. They are leaving the most valuable raw material on the table. The Sales Playbook lives in your head. If you will not sit for the extraction, no one can build the rest. If you are weighing whether the investment is worth it, the',
    seoPara2b:
      'will show you what those thirty front-loaded hours produce — typically two to three times the cost in incremental revenue within twelve months.',

    // Comparison table
    sectionCompareHeading: 'Engagements That Stall vs. Engagements That Install',
    sectionCompareSubheading: 'The difference is almost always how the founder shows up in the first 30 days.',
    compareColLeft: 'Engagement That Stalls',
    compareColRight: 'Engagement That Installs',
    compare1Dependent: 'Founder hides from the engagement to "stay focused"',
    compare1System: 'Founder front-loads time in weeks 1–2 to compound results',
    compare2Dependent: 'Sessions are squeezed into 15-minute hallway calls',
    compare2System: 'Sessions are scheduled, recorded, and have written agendas',
    compare3Dependent: 'Founder is reactive — only joins when something is on fire',
    compare3System: 'Founder joins a weekly pipeline review that never gets cancelled',
    compare4Dependent: 'Playbook stalls because founder will not sit for extraction',
    compare4System: 'Playbook gets built in 6 weeks because founder gave 6 hours up front',
    compare5Dependent: 'Engagement drifts because there is no shared cadence',
    compare5System: 'Cadence is fixed: weekly review, monthly forecast, quarterly reset',
    compare6Dependent: 'Six months in, nothing has been installed — only discussed',
    compare6System: 'Twelve weeks in, the system is live and the founder is stepping back',

    // What to Do This Week
    sectionNextHeading: 'How to Prepare Before You Hire',
    sectionNextSubheading: 'Five things to have ready before week one. None of them take longer than thirty minutes.',
    next1: 'Block six hours in your calendar across the first two weeks — treat them like a board meeting',
    next2: 'Pull a list of your last 20 closed-won and 20 closed-lost deals from your CRM',
    next3: 'Identify the three best calls you have ever run — recordings if you have them, notes if you do not',
    next4: 'Write down the one customer profile that has the highest close rate and the shortest sales cycle',
    next5: 'Decide which weekly hour, going forward, is the standing pipeline review — and never move it',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'The founders who get the most out of working with me are the ones who front-load their time in the first two weeks. They sit for the extraction. They give me the messy version, not the rehearsed one. Twelve weeks later they have a working sales system and almost no day-to-day involvement in it. That is the whole point.',

    // FAQs
    faq1Question: 'How many hours per week do I actually need to spend with my Fractional Sales Leader?',
    faq1Answer:
      'It is not a flat number — it is a curve. Weeks 1–2 are the heaviest at four to six hours total, because I am extracting what is in your head and you are the only source. Weeks 3–6 settle into two to three hours a week. By month four and beyond, steady state is thirty to sixty minutes a week. Average across a 90-day build is roughly two hours a week of focused founder time. Most founders are surprised it is that low — the worry is usually that it will be much more.',

    faq2Question: 'Why is the time commitment heavier in the first two weeks?',
    faq2Answer:
      'Because everything else depends on getting the playbook right, and the playbook lives in your head. Your real Ideal Customer Profile, the objections you hear, the patterns in your wins and losses, the questions you ask that move buyers forward — none of that is written down anywhere. If I do not get it from you in the first two weeks, I have to guess. Guessing produces a generic playbook that the team will not use. Six focused hours up front saves you six months of rebuild later.',

    faq3Question: 'Can I just dump documents on the Fractional Sales Leader and skip the meetings?',
    faq3Answer:
      'No — and this is the single most common reason engagements fail to deliver. Documents tell me what you wrote down. Working sessions tell me what you actually do. The gap between those two is usually large, and the gap is where the value lives. The founders who try to outsource the discovery phase end up with a polished playbook that does not match the real sales motion. Then the team ignores it. Then nothing changes.',

    faq4Question: 'What if I cannot give six hours in the first two weeks?',
    faq4Answer:
      'Then we stretch the discovery phase to four weeks at three hours a week, but the trade-off is real — the playbook ships later and the rest of the build slips with it. If you cannot find six hours across two weeks for the most important strategic work in your business, that is a signal worth examining. Most founders find the time once they understand what those hours produce: a documented sales motion the team can run without them.',

    faq5Question: 'How does my time commitment change once the system is built?',
    faq5Answer:
      'It drops dramatically. By month four, you are at roughly an hour a week — a short pipeline review and a monthly forecast check. That is the whole point of building the system. The first 90 days are a concentrated investment so that everything afterward runs on a cadence you barely have to touch. Most founders use the time they get back on product, partnerships, or strategic hires — the work that only the founder can do.',

    // CTA
    ctaHeadline: 'Ready to Map the First 90 Days?',
    ctaDescription:
      'In 30 minutes I can walk you through exactly what your first two weeks would look like, what we would extract, and what your time commitment would be at every stage.',
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
