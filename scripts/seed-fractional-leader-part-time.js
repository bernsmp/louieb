/**
 * Seed script: How Can They Lead My Team If They're Only Here Two Days a Week?
 * - seoFractionalLeaderPartTime → /can-fractional-sales-leader-lead-team-part-time
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-fractional-leader-part-time.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoFractionalLeaderPartTime: {
    // Hero
    heroTag: 'Fractional Leadership Objections',
    heroLine1: 'How Can They Lead My Team',
    heroAccent: "If They're Only Here Two Days a Week?",
    heroH2: "I'll End Up Paying for a Leader But Still Doing the Managing Myself",
    heroDescription:
      "The objection is real — but it is pointed at the wrong thing. Leadership is not presence. It is the system that runs when no one is in the room. Here is how a Fractional Sales Leader actually leads a team they see two days a week — and why it often works better than a full-time manager who is always there.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "A 'two days a week' fractional leader is not part-time management — it is full-time systems. The team is led by the operating cadence, the playbook, and the accountability document, not by whether someone is sitting at the next desk.",
    takeaway2:
      "A full-time sales manager who is 'always available' is usually the symptom of the problem you are trying to solve. Constant availability means every decision routes through one person — and the team never builds independent judgment.",
    takeaway3:
      'The two on-site days are structured deliberately: pipeline review, 1:1 coaching, deal strategy, hiring and ramping. The other five days, the team runs the cadence the fractional leader built — and the founder is no longer the manager.',
    takeaway4:
      "The fear of 'still doing the managing yourself' is valid only if you hire an advisor who shows up and leaves. A real fractional leader installs accountability that runs without them — and that is the deliverable, not the hours.",
    takeaway5:
      'By month two you should feel less involved in sales than you did at week one. If you feel busier, the system was not installed correctly. That is a fractional leader problem — not a fractional model problem.',

    // Four Components — How a Fractional Leader Actually Leads
    sectionComponentsHeading: 'How a Fractional Sales Leader Actually Leads',
    sectionComponentsSubheading:
      'Leadership is not desk hours. It is the four artifacts that let the team execute when the leader is not in the room.',

    comp1Title: 'The Operating Cadence',
    comp1Detail:
      "The operating cadence is the weekly rhythm the team runs whether the leader is on-site or not. Monday pipeline review, Tuesday 1:1 coaching, Thursday forecast roll-up, Friday written recap — fixed times, fixed agendas, fixed owners. The cadence is published in the team calendar and never moves. When something has to be cancelled, it gets rescheduled, not skipped. Once the cadence is running, it does not require the leader to be present for every beat. The leader sets the rhythm, runs the high-leverage meetings, and steps back. The team owns the rest.",
    comp1Outcome:
      'A team that knows what is happening every day of the week, in writing, without anyone asking — so problems surface in the cadence rather than at random.',

    comp2Title: 'The Written Accountability System',
    comp2Detail:
      "An accountability system is not a one-on-one meeting. It is a written document that specifies what every salesperson is responsible for, what metrics they are measured against, what the cadence of review is, and what happens when a target is missed. It covers activity metrics (calls, demos, pipeline coverage) and outcome metrics (close rate, cycle length, quota attainment). Reps read it on day one and refer to it weekly. When the fractional leader is not on-site, the accountability document is what runs the team. It eliminates the need for ad-hoc 'checking in' — because the rep already knows what they are being held to and how the next review will be conducted.",
    comp2Outcome:
      'Reps who know exactly what they are responsible for and exactly what the next conversation will be about — no surprises, no shifting goalposts, no leader required to enforce.',

    comp3Title: 'The Documented Sales Playbook',
    comp3Detail:
      "The playbook is the written answer to every recurring sales question. What does a qualified prospect look like? What questions surface urgency on a discovery call? What is the right response to the seven most common objections? When does a deal move to the next stage, and what evidence is required to move it? The playbook is the institutional memory of how this company sells. When a rep has a question on a Wednesday and the fractional leader is off-site, the rep checks the playbook first — and the playbook answers most questions. The leader is no longer the bottleneck. The playbook is.",
    comp3Outcome:
      'A team that does not need to interrupt the leader for every question — because the playbook has already answered the 80 percent that recur.',

    comp4Title: 'The Decision Authority Map',
    comp4Detail:
      'The decision authority map is one page that says, in writing, who decides what. Reps decide: discount up to X percent, deal terms inside Y boundaries, qualification calls based on the playbook criteria. The leader decides: anything above those thresholds, hiring and firing recommendations, playbook changes. The founder decides: pricing strategy, ICP changes, deals over a defined dollar value. Most sales teams have none of this in writing — so every decision either escalates to the founder or stalls. A fractional leader installs the decision map in the first 30 days. After that, very few decisions need to escalate, because the answer is already on the wall.',
    comp4Outcome:
      'Faster deals and fewer escalations — because the team already knows what they are empowered to decide and what they are not.',

    // SEO paragraphs (with inline links)
    seoPara1:
      "The fear of 'paying for a leader but still doing the managing yourself' is the right concern — applied to the wrong model. The risk is real if you hire someone who shows up, advises, and leaves. That is a sales consultant, not a fractional leader. A real Fractional Sales Leader is an operator. They install the playbook, the cadence, the accountability document, and the decision map — the four artifacts that make the team manageable without the founder. The deliverable is not the hours on the calendar. The deliverable is the operating system.",
    seoPara2:
      "The other half of the answer is that a full-time sales manager who is 'always available' is often the worst version of what you can hire. Constant availability means every rep brings every question to the manager — so the team never develops independent judgment, the manager becomes the bottleneck, and the founder is one resignation away from losing the sales function in someone's head. The systems-first approach a fractional leader brings is more durable than presence. To see how the same logic applies to installing the underlying system itself, read",
    seoPara2b:
      '. For a closer look at the first ninety days of an engagement and how the leadership system gets installed, see',
    seoPara2c: '.',

    // Comparison table
    sectionCompareHeading: 'Full-Time Manager vs. Fractional Leader: What Actually Happens',
    sectionCompareSubheading:
      'The full-time manager is on-site five days. The fractional leader is on-site two. Watch how each one handles the same problem.',
    compareColLeft: 'Full-Time Manager (5 days, always available)',
    compareColRight: 'Fractional Sales Leader (2 days, fully systemized)',
    compare1Without: 'Reps interrupt with every question — the manager is the bottleneck',
    compare1With: 'Reps check the playbook first — the leader answers only the exceptions',
    compare2Without: 'Weekly 1:1s slip when the manager is busy; sometimes skipped for weeks',
    compare2With: 'Operating cadence is fixed — 1:1s are never cancelled, only rescheduled',
    compare3Without: 'Pipeline review happens when there is time — not on a schedule',
    compare3With: 'Pipeline review runs every Monday with a written agenda and stage criteria',
    compare4Without: 'Reps are coached when behavior is bad — reactive and inconsistent',
    compare4With: 'Reps are coached against a documented playbook with measurable benchmarks',
    compare5Without: "Forecast is the manager's gut feel — off by 30 percent most quarters",
    compare5With: 'Forecast is built from documented stage criteria and rep-level conversion data',
    compare6Without: 'Manager leaves and the team is in chaos — everything was in their head',
    compare6With: 'Leader leaves and the system stays — playbook, cadence, accountability all remain',

    // Sequence — What Two Days a Week Actually Looks Like
    sectionSequenceHeading: 'What Two Days a Week Actually Looks Like',
    sectionSequenceSubheading:
      "Most founders picture 'two days' as twelve hours of vague consulting. Here is how those hours are actually allocated — and what the leader is doing on the other five days.",
    phase1Title: 'Day One On-Site: The High-Leverage Day',
    phase1Detail:
      'The first on-site day is built around the meetings that only the leader can run. Pipeline review (60 to 90 minutes) — every rep walks through their top five deals against written stage criteria. 1:1 coaching (30 minutes per rep) — focused on the deals where the rep is stuck, against the playbook. Deal strategy (60 minutes) — the two or three deals where the leader has to be hands-on. Forecast roll-up (60 minutes) — what the team is going to close, with confidence levels by rep and stage. That is six to eight hours of structured meetings the rest of the week depends on.',
    phase2Title: 'Day Two On-Site: The Build Day',
    phase2Detail:
      "The second on-site day is for the work that compounds. Hiring and interviewing the next reps. Playbook updates based on the patterns observed in pipeline review. Coaching the rep manager (if one exists yet) on running the cadence in the leader's absence. Founder strategy session (30 to 60 minutes) — what is changing, what is breaking, what needs founder attention. Closing the week with the team — the kickoff for next week's priorities. This is the day that buys the leader the right to be off-site for the next five.",
    phase3Title: 'The Other Five Days: Async Leadership',
    phase3Detail:
      'The off-site days are not idle. The leader reviews CRM activity daily, intervenes on escalated deals within hours, coaches against recorded call replays, updates the playbook with new objection patterns, and runs the hiring pipeline (sourcing, screening, reference calls). The founder gets a Friday written recap — what was reviewed, what changed, what is forecast, what needs founder attention next week. The team runs the cadence. The leader leads through the system they built.',

    // About Louie
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'Every engagement starts the same way: I install the operating cadence, the written accountability document, the playbook, and the decision authority map in the first 30 to 60 days. After that, the team runs whether I am on-site or not — and the founder is no longer the manager. That is the deliverable. The two days a week are just when I show up to enforce and improve it.',

    // FAQs
    faq1Question:
      'How do you maintain credibility with the team when you are only on-site two days a week?',
    faq1Answer:
      'Credibility comes from outcomes and the quality of the systems you install — not from time in the chair. By the end of the first two weeks, the team is running a weekly cadence they did not have before, every rep has a written accountability document on their desk, and the playbook is being filled in. That is what builds credibility. The team sees a leader who is making their job clearer and easier, not someone who is around for show.',

    faq2Question: 'What happens when a rep has an urgent deal question on a day you are not on-site?',
    faq2Answer:
      'Three things happen, in order. First, the rep checks the playbook — and 80 percent of recurring questions are already answered there. Second, if it is a real exception, the rep messages me, and I respond inside the same business day, usually inside an hour. Third, if it is a strategic call (a deal over a defined size, a non-standard term, a competitive escalation), I get on a quick call with the rep, and with the prospect if needed. Two days on-site does not mean five days unavailable.',

    faq3Question: 'How is this different from hiring a sales consultant who just advises and leaves?',
    faq3Answer:
      'A consultant tells you what to do. A Fractional Sales Leader does it with you and then runs it. I do not hand over a slide deck and disappear. I am inside the CRM. I am inside the pipeline reviews. I am running the 1:1s, hiring the next rep, and updating the playbook as I learn what is working. The deliverable is a team that performs — not a recommendation that sits in your inbox.',

    faq4Question: 'What if my team is junior or inexperienced — do they not need full-time management?',
    faq4Answer:
      'Junior reps need clarity more than they need presence. A junior rep with a documented playbook, a written accountability document, a fixed cadence, and a defined coaching loop will ramp faster than the same rep reporting to a full-time manager who is reactive and disorganized. The mistake most founders make with junior teams is more meetings, not better systems. The systems do the management. The leader runs the systems.',

    faq5Question:
      'How do I know you are actually working the other five days and not just on the two you are here?',
    faq5Answer:
      'You get a Friday written recap that documents the week: deals reviewed, decisions made, playbook updates, pipeline movement, hiring activity, and any items that need founder attention. You also have visibility into CRM activity, meeting recordings, and the playbook history. The off-site days are not a black box — they are documented at the same level of rigor as the on-site days. That is part of the deliverable.',

    // CTA
    ctaHeadline: "Stop Picturing 'Two Days.' Start Picturing the System.",
    ctaDescription:
      'In 30 minutes I can walk you through what the four artifacts — cadence, accountability, playbook, decision authority — would look like in your business, and how the engagement would be structured around your team. No slide deck. No vague promises.',
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
