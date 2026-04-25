/**
 * Seed script: How Do I Step Out of Day-to-Day Sales Without Losing Revenue?
 * - seoStepOutDayToDaySales → /how-do-i-step-out-of-day-to-day-sales-without-losing-revenue
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-step-out-day-to-day-sales.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoStepOutDayToDaySales: {
    // Hero
    heroTag: 'The Founder Step-Out Playbook',
    heroLine1: 'How Do I Step Out of Day-to-Day Sales',
    heroAccent: 'Without Losing Revenue?',
    heroH2: 'What Does Day 1 Look Like?',
    heroDescription:
      "For $1M–$10M ARR founders ready to get out of the daily pipeline without watching revenue dip in the quarter of the exit. A sequenced 90-day handoff — not a one-day announcement.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'Revenue does not collapse because the founder stops selling. It collapses because the founder stops selling before the system that replaces them is in writing and running.',
    takeaway2:
      'A safe step-out is sequenced, not announced. You exit specific accounts and specific stages on a defined schedule — never the whole motion in one quarter.',
    takeaway3:
      'Day 1 is not a memo. Day 1 is the day you start recording your calls, capturing your qualification logic, and naming the person who will own the first stage of the pipeline without you.',
    takeaway4:
      'You stay in the deal as the escalation path, not the first line. Reps own the cadence; you show up only when the deal needs the founder voice — and only when invited.',
    takeaway5:
      'A Fractional Sales Leader compresses this transition from twelve nervous months to roughly 90 days of structured handoff — without the $400K bet of a full-time VP hire.',

    // Four Guardrails
    sectionComponentsHeading: 'The Four Guardrails for Stepping Out Without Losing Revenue',
    sectionComponentsSubheading:
      'Skip any one of these and the step-out becomes a step-back inside six weeks. All four are non-negotiable.',

    comp1Title: 'Document the Founder Sales Motion Before You Step Back',
    comp1Detail:
      "The reason most founder step-outs cause a revenue dip is simple: the founder is the playbook. The qualification logic, the second-call script, the pricing instinct, the objection handling — all of it lives between the founder's ears. Step out without documenting it and the next person in the chair is guessing. The fix is to record every call for 30 days, transcribe them, and extract the patterns into a written playbook: ICP definition, discovery questions, qualification criteria, the three objections you hear most and how you answer them, the pricing rules, and the specific language that closes deals. This is not optional. Without it, every transition is a relaunch.",
    comp1Outcome:
      'A 20-to-40-page operating manual the next person can run from on day one — so the handoff transfers a process, not a personality.',

    comp2Title: "Install Pipeline Discipline That Doesn't Need You in the Room",
    comp2Detail:
      "Founders run pipeline by memory. They know which deal is real, which prospect is stalling, and which one needs a nudge — without ever opening the CRM. That is the system you are stepping out of, and it does not transfer. To step out cleanly, the pipeline has to be visible to anyone who looks at it. Stages have to match how deals actually move. Each stage needs written entry and exit criteria based on buyer evidence, not seller activity. A weekly pipeline review has to happen on the calendar whether you attend or not. The minute the pipeline runs without you for four weeks straight, you have proven the system works. Until then, you have not.",
    comp2Outcome:
      'A CRM and weekly rhythm that surface pipeline health in one glance — so the team catches slipping deals before you would have caught them yourself.',

    comp3Title: 'Hand Off Specific Accounts on a Defined Schedule',
    comp3Detail:
      "The wrong way to step out is to announce that you are stepping out. The right way is to hand off specific accounts in specific stages on specific dates. New inbound leads transfer first — those have no founder relationship at risk. Active discovery deals transfer second, with the founder shadowing the next two calls. Late-stage deals stay with the founder until they close, then the renewals transfer. Top-ten existing accounts transfer last, with a co-branded introduction email and a joint call before the founder steps fully out. Done this way, no customer ever feels abandoned and no rep ever inherits a deal they cannot defend. Done the other way, you watch a quarter of revenue stall while the new person learns the relationships from scratch.",
    comp3Outcome:
      'A 90-day transfer schedule with named owners and dates — so the handoff is a calendar, not an event.',

    comp4Title: 'Stay Available as the Escalation Path, Not the First Line',
    comp4Detail:
      "Stepping out is not disappearing. The founder voice still matters at the top of certain deals — strategic accounts, board-level buyers, deals over a defined dollar threshold. The mistake is making the founder available for everything. That collapses the new system instantly because reps will route around it the moment friction appears. The fix is a written escalation rule: the founder gets pulled into a deal only when the rep requests it, only above a defined deal size or buyer level, and only with a specific, prepared agenda. The rep owns the cadence. The founder shows up, says the thing only the founder can say, and leaves. That is the pattern that lets a founder remain a strategic asset without becoming the bottleneck again.",
    comp4Outcome:
      'A clear, written rule that defines when the founder steps in — so the team gets the founder voice when it matters and nothing when it does not.',

    // SEO paragraphs
    seoPara1:
      "Most founders try to step out of sales the same way: a Monday morning announcement, a quick rep handoff, and a hope that the pipeline holds. It almost never does. Revenue dips because every active deal still depends on the founder's qualification logic, the founder's pricing instinct, and the founder's relationship with the buyer — and none of that has been written down. The dip is not the cost of stepping out; it is the cost of stepping out without first installing the system that replaces you.",
    seoPara2:
      "The capital-efficient version of this transition does not require a $400K full-time VP hire. If you want the full picture of what gets built first, read",
    seoPara2b:
      ". And if the question on your mind is what specifically breaks first when you stop selling — and how to prevent each one — start with",
    seoPara2c: '. The step-out is a sequencing problem, not a courage problem.',

    // Comparison table
    sectionCompareHeading: 'Stepping Out the Wrong Way vs. the Right Way',
    sectionCompareSubheading:
      'Same goal. Two transition models. One protects the quarter and one costs it.',
    compareColLeft: 'Unstructured Step-Out',
    compareColRight: 'Sequenced 90-Day Handoff',
    compare1Without: 'Founder announces "I am stepping out" on a Monday',
    compare1With: 'Step-out happens silently over 90 days on a written schedule',
    compare2Without: "Sales motion lives in the founder's head — never written down",
    compare2With: 'Calls recorded, patterns extracted, playbook in writing before any handoff',
    compare3Without: 'New person inherits all accounts at once and stalls deals',
    compare3With: 'Accounts transfer in tranches: inbound first, late-stage last',
    compare4Without: 'Pipeline is invisible to anyone but the founder',
    compare4With: 'Pipeline stages, exit criteria, and weekly review run without the founder',
    compare5Without: 'Founder remains "available" — gets dragged back into every deal',
    compare5With: 'Written escalation rule defines exactly when the founder is pulled in',
    compare6Without: 'Revenue dips 20–30% in the quarter of the step-out',
    compare6With: 'Revenue stays flat or grows because the system was built before the exit',

    // Day 1 / Week 1 / 90 Day Sequence
    sectionSequenceHeading: 'What Day 1, Week 1, and Day 90 Actually Look Like',
    sectionSequenceSubheading:
      'A real step-out is invisible to customers and obvious in the CRM. Here is the actual cadence.',
    phase1Title: 'Day 1 — Start the Recording, Name the Successor',
    phase1Detail:
      "Day 1 of stepping out is not a calendar event. It is two practical actions. First: turn on the call recorder. Every founder sales call from this point forward gets recorded and transcribed. That archive is the raw material for the playbook. Second: name the human who will own the first stage of the pipeline without you — a Fractional Sales Leader, your strongest internal hire, or your operations partner. They sit in on every call from Day 1, not to run them, but to start absorbing the patterns. There is no announcement, no team meeting, no big pivot. The day-to-day looks identical to last week. The difference is structural and invisible — and it is what makes the rest of the transition possible.",
    phase2Title: 'Week 1 to 4 — Extract the Playbook, Map the Pipeline',
    phase2Detail:
      "Inside the first month, the recordings get turned into a written playbook draft and the pipeline gets re-stage to match how deals actually move. Required CRM fields enforce qualification. The weekly pipeline review goes on the calendar — same time, every week, never cancelled. The successor begins running the cadence: setting agendas, opening the meeting, calling out slipping deals. The founder still owns every relationship and every close — nothing has transferred yet. What has changed is that for the first time, someone other than the founder can describe in writing what a qualified deal looks like, where every active deal stands, and what has to happen this week to move it forward.",
    phase3Title: 'Day 30 to 90 — Transfer Accounts on Schedule, Step Into Escalation',
    phase3Detail:
      "Starting around day 30, the handoff begins on a written schedule. New inbound leads route to the successor immediately — clean break, no founder shadow. Active discovery deals transfer with two co-led calls, then the rep takes over. Late-stage deals stay with the founder. By day 60, the rep is running discovery solo and bringing the founder in only on demos for strategic accounts. By day 90, the founder has stepped out of the daily pipeline entirely and is operating as the escalation path on the deals where the founder voice still moves the needle. Revenue is steady or up — because the system was built before the step-out, not after.",

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I run founder step-outs for $1M–$10M ARR companies — the playbook extraction, the pipeline rebuild, the phased account handoff, and the escalation rules that keep the founder strategic without keeping them stuck. Most engagements move the founder out of daily pipeline in 90 days with revenue flat or up — and without the $400K bet of a full-time VP hire.",

    // FAQs
    faq1Question: 'How long does a safe founder step-out actually take?',
    faq1Answer:
      'Roughly 90 days for the structural transition and another 60 to 90 days before the founder is fully out of the day-to-day pipeline. The first 30 days are documentation and infrastructure. Days 30 to 60 are graduated handoff of inbound and early-stage deals. Days 60 to 90 transfer the rest, with the founder remaining only as the escalation path on strategic accounts. Founders who try to step out faster usually get pulled back in within six weeks.',

    faq2Question: 'Will revenue dip when I stop selling?',
    faq2Answer:
      'It dips when the system that replaces you is not in writing before you step back. It does not dip when you have a documented playbook, a pipeline that is visible to someone other than you, and a phased handoff schedule. The founders who lose revenue during a step-out almost always announced the exit before they built the bench. The founders who hold revenue steady built the bench first and then stepped out quietly over a quarter.',

    faq3Question: 'Can I do this without hiring a full-time VP of Sales?',
    faq3Answer:
      'Yes — and most $1M–$10M ARR companies should. A full-time VP at this stage is roughly $400K all-in and has a high failure rate when hired into a company without a documented playbook. A Fractional Sales Leader runs the structural transition in 90 days at roughly 25% of the cost, and you finish with a system in writing rather than a dependency on one new hire. After the system is built, you can decide whether you actually need a full-time VP or whether the fractional model continues to fit.',

    faq4Question: 'What if my customers only want to deal with me?',
    faq4Answer:
      'That feeling is real for the top five or ten accounts. It is rarely true for the rest. The fix is a sequenced introduction: a co-branded email from you and the new owner, one joint call where you explicitly transfer trust, and a written escalation path for anything strategic. For the accounts where the relationship genuinely cannot transfer, you stay involved at the executive level only and let the new owner run the day-to-day. Over six months, the relationship usually transfers. The founders who never test this stay stuck in their own pipeline forever.',

    faq5Question: 'How do I know I am ready to step out at all?',
    faq5Answer:
      'Three signals: deals are stalling because you are the bottleneck, you are the only person who can describe what a qualified opportunity looks like, and pipeline visibility lives in your head. If any of those are true, you are ready — and the longer you wait, the harder the transition gets. The right time to step out is before the pipeline forces you to. The wrong time is after a key deal slips because you were too thin to cover it.',

    // CTA
    ctaHeadline: 'Plan the Step-Out Before You Take It',
    ctaDescription:
      "In 30 minutes I can map exactly what your 90-day step-out should look like — what to document first, which accounts to transfer in which order, and where the founder voice still has to show up. No commitment, no pitch deck.",
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
