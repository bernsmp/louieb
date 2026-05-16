/**
 * Seed script: What's the Best Way to Exit Founder-Led Sales?
 * - seoBestWayToExitFounderLedSales → /what-is-the-best-way-to-exit-founder-led-sales
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-best-way-to-exit-founder-led-sales.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoBestWayToExitFounderLedSales: {
    // Hero
    heroTag: 'Founder-Led Sales Exit',
    heroLine1: "What's the Best Way to Exit",
    heroAccent: 'Founder-Led Sales?',
    heroH2: 'Use a Founder-Led Sales Exit Checklist.',
    heroDescription:
      "For $1M–$10M ARR founders ready to step out of every deal without watching revenue crater. Five checklist items, a stage-by-stage handover, and a 90-day exit that actually holds.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'The best way to exit founder-led sales is not to stop selling. It is to replace yourself stage-by-stage, in a defined order, against a written checklist — so revenue never depends on the day you decide to step back.',
    takeaway2:
      'Most $1M–$10M ARR founders try to exit by hiring. That fails because they are handing a person what should have been a system. A new rep cannot replicate your instincts. A written playbook can.',
    takeaway3:
      'A founder-led sales exit checklist has five non-negotiable items: a codified playbook, a stage-by-stage handover, forecast discipline in the CRM, a Builder-profile hire, and a witnessed handover period. Skip any one and the exit reverses inside six months.',
    takeaway4:
      'The exit takes 90 to 180 days when run against a checklist. The exit takes 18 months or never when run on instinct. A Fractional Sales Leader cuts that timeline roughly in half because they have done it before and they will not skip steps.',
    takeaway5:
      'Your job after the exit is not to disappear. It is to coach the new sales motion from one step back — strategy, hiring, customer escalations — instead of running every deal yourself. That is leadership. The deal-by-deal work is not.',

    // Checklist section
    sectionChecklistHeading: 'The Five-Item Founder-Led Sales Exit Checklist',
    sectionChecklistSubheading:
      'Skip any one of these and the exit reverses inside six months. Run all five in order and it holds at 90 days.',

    item1Title: 'Codify the Founder Sales Motion Into a Written Playbook',
    item1Detail:
      "You cannot exit a process that lives only in your head. The first checklist item is the playbook — the written translation of how you actually sell. It defines the Ideal Customer Profile with specific constraints (industry, size, role, disqualifying characteristics). It scripts the discovery call. It documents every objection and the best response to each one. It contains the email sequences, the proposal structure, the closing cadence. Most founders skip this step because writing it down feels slower than just doing the deal. That is exactly why the exit never happens — the document that would free you is the one you are too busy to write.",
    item1Outcome:
      'A 20-to-40-page playbook anyone on the team can run from on day one — the artifact that turns founder instinct into a teachable system.',

    item2Title: 'Replace Yourself Stage-by-Stage, Top of Funnel First',
    item2Detail:
      "Founders who try to exit all at once almost always fail. The reverse is true: founders who exit stage-by-stage — starting with the top of the funnel and working downward — almost always succeed. Hand off prospecting and discovery first. Stay in the room for demos and proposals for the next 60 days. Then hand off the demo. Then the proposal. Then the close. Each stage gets a written handover criteria and a measurable outcome. By the time you are out of the closing stage, the rest of the funnel is already running without you and the team has caught the deals that would have stalled.",
    item2Outcome:
      'A controlled, reversible handover where revenue never spikes downward — because no single transition carries the whole exit.',

    item3Title: 'Install Forecast Discipline — CRM Truth, Not CRM Hope',
    item3Detail:
      "Founders forecast on instinct. Salespeople, without explicit criteria, forecast on optimism. The exit cannot happen until the CRM is telling the truth about what is real and what is not. Every pipeline stage needs written entry and exit criteria based on buyer actions, not seller activities. Required fields enforce qualification discipline. Deals that lack the criteria get killed without ceremony. By the end of this step you should be able to look at the pipeline once a week and trust the number you see — because if you cannot trust the forecast, you will not let go of the deals, and the exit reverses.",
    item3Outcome:
      'A weekly forecast you can take to the board without footnotes — and a pipeline that produces honest numbers without you running every deal review.',

    item4Title: 'Hire the Builder Profile, Not the Maintainer',
    item4Detail:
      'Most founders hire reps who look like a junior version of themselves. That fails. At the $1M–$10M stage you do not need a maintainer who can run a mature process — you need a Builder who can execute a brand-new playbook, handle ambiguity, and operate without a VP overhead. Builders are not always the most polished interviewers. They are the ones who have lived in messy early-stage companies and shipped revenue anyway. A Fractional Sales Leader knows the profile, has the network to source it, and runs the interview loop. Hiring on your own at this stage usually produces a maintainer-mismatch — and the exit reverses inside two quarters.',
    item4Outcome:
      'A first rep who can actually take the handover — ramping in 60 to 90 days into a system that already works.',

    item5Title: 'Run the Witnessed Handover — Then Stay Out',
    item5Detail:
      "The final step is the part most founders sabotage. After the playbook is written, the stages are handed off, the CRM is honest, and the Builder is hired, there is a 60-to-90-day handover period where you are present but not driving. You sit in on deals. You coach after the call, not during it. You let deals get lost that you would have closed personally — because the lesson is worth more than the deal. A witness is critical here: a Fractional Leader, an advisor, a board member — someone who will tell you when you are slipping back in. Most founder-led exits fail not at the hiring step but at this one: the founder steps back, then steps in, then steps back, and the team learns the founder is still the safety net.",
    item5Outcome:
      'A team that closes deals without looking for you — and a founder who has actually exited, not just delegated.',

    // SEO paragraphs
    seoPara1:
      "The best way to exit founder-led sales is the one nobody actually wants to hear: slow down to go faster. Founders who try to exit by simply hiring — a VP, a senior rep, a head of sales — almost universally fail. The reason is structural, not personal. You are handing a new person the instinct, the relationships, and the pattern-matching that has lived in your head for years. A human cannot inherit that. A written system can. The exit checklist is how you build that system.",
    seoPara2: 'If you want the full step-by-step inventory, start with the',
    seoPara2b:
      ' — the long-form companion to this page. And if your concern is what happens to revenue while you are stepping out, read',
    seoPara2c: '. The exit holds when revenue does. The checklist is how you make sure both happen.',

    // Comparison
    sectionCompareHeading: 'Exit Without a Checklist vs. Exit With One',
    sectionCompareSubheading:
      'The difference is not effort or talent. It is whether the steps are written down and run in order.',
    compareColLeft: 'Without the Checklist',
    compareColRight: 'With the Checklist',
    compare1Without: "Exit happens 'when we hire a VP' — which keeps slipping",
    compare1With: 'Exit runs against a written checklist with deadlines',
    compare2Without: 'Founder hands off all at once — revenue craters in 60 days',
    compare2With: 'Stage-by-stage handover — top of funnel first, close last',
    compare3Without: 'CRM is decorative; founder still forecasts in their head',
    compare3With: 'CRM tells the truth — founder can trust the number',
    compare4Without: 'First hire is a polished maintainer — wrong profile, fails fast',
    compare4With: 'First hire is a Builder who can ramp inside a new playbook',
    compare5Without: 'Founder steps back, steps in, steps back — team learns to wait',
    compare5With: 'Witnessed 90-day handover — founder out, team running',
    compare6Without: 'Exit reverses inside 6 months — founder back in every deal',
    compare6With: 'Exit holds at 90 days — founder coaches strategy, not deals',

    // What to do this week
    sectionTodoHeading: 'What to Do This Week',
    sectionTodoSubheading:
      'Before bringing in outside help, run these five diagnostics. They will tell you which checklist item to start with.',
    todo1:
      'Pull your last 10 closed-won deals and write down what made each one close — that draft is the first page of your playbook',
    todo2:
      'List every sales activity you personally did in the last 30 days; circle the ones a trained rep could do today with no playbook',
    todo3:
      "Open your CRM. Count how many deals have a 'next step' field filled in. If it is less than 80%, you do not have forecast discipline yet",
    todo4:
      'Write down the profile of your worst sales hire and the profile of your best — the difference is your Builder vs Maintainer criteria',
    todo5:
      'Name the person — advisor, fractional leader, board member — who will tell you when you have slipped back into the pipeline. Without a witness, the exit reverses',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'I have run this exit checklist with more founders than I can count. The pattern is always the same: the founders who treat it as a checklist exit cleanly in 90 to 180 days. The founders who treat it as a vibe spend two years half-exiting and end up back in every deal. The checklist is not the magic. The discipline of running it in order is.',

    // FAQs
    faq1Question: 'How long does it take to exit founder-led sales the right way?',
    faq1Answer:
      'Ninety to 180 days when you run it against a checklist — a written playbook in the first 30 days, the stage-by-stage handover and CRM discipline in days 30–90, the Builder hire and witnessed handover in days 90–180. Exits run on instinct without a checklist take 18 months on average, and roughly half of those reverse inside the first year.',

    faq2Question: 'Can I exit founder-led sales without hiring anyone new?',
    faq2Answer:
      'Sometimes — if you already have a rep on the team who can be elevated into the role, and if a Fractional Sales Leader can install the playbook, the CRM discipline, and the accountability around that rep. More often you need one new Builder hire to run the system the playbook describes. A Fractional Leader is not a replacement for that rep — it is the person who installs the system the rep operates inside.',

    faq3Question: 'What is the single biggest mistake founders make when trying to exit?',
    faq3Answer:
      'Trying to exit by hiring before the playbook exists. A new VP or rep inherits founder instinct that was never written down, fails to replicate it, and within six months the founder is back in every deal — exhausted, behind on plan, and now also paying for a hire who is failing. The fix is sequence: playbook first, infrastructure second, hire third. Never the reverse.',

    faq4Question: 'Do I need a full-time VP of Sales to exit founder-led sales?',
    faq4Answer:
      'Not at $1M–$10M ARR. A full-time VP is the right answer when you have a working sales system, a team of six or more reps, and complexity that needs a leader of leaders. Before that point, a Fractional Sales Leader installs the system at roughly 25% of the cost of a full-time VP — and your first one or two Builder reps run inside it. You hire the full-time VP after the machine already works.',

    faq5Question: 'How do I know if I have actually exited founder-led sales or just temporarily stepped back?',
    faq5Answer:
      'Three tests. First: can the team close a deal worth more than 5% of your quarterly target without you in the room? Second: do you trust the forecast number without doing your own mental recount? Third: when a deal stalls, does a rep run a defined recovery play — or do they bring it to you? If you pass all three for 90 consecutive days, the exit is real. If you fail any one of them, you have stepped back, not exited.',

    // CTA
    ctaHeadline: 'Ready to Actually Exit — Not Just Step Back?',
    ctaDescription:
      'In 30 minutes I can map where you are on the exit checklist today, what is missing, and what it would take to get out of every deal in the next 90 to 180 days — without revenue dropping while you do.',
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
