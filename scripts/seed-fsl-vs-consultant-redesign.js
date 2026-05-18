/**
 * Seed script: Fractional Sales Leader vs Consultant (redesigned page)
 * - fslVsConsultantPage → /fractional-sales-leader-vs-consultant
 *
 * This REPLACES the prior nested content for this section with the new flat
 * key/value shape used by useCmsSection() in the redesigned page.
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-fsl-vs-consultant-redesign.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  fslVsConsultantPage: {
    // Hero
    heroTag: 'Choosing Sales Leadership That Sticks',
    heroLine1: 'Fractional Sales Leader',
    heroAccent: 'vs Consultant — What Actually Builds Revenue?',
    heroH2: 'Why Embedded Leadership Beats Outside Advice at $1M–$10M ARR',
    heroDescription:
      "A consultant hands you a strategy. A Fractional Sales Leader runs the team, builds the playbook, and is accountable for the number. Here is when each one is the right call — and why founders stuck in founder-led sales almost always need the second.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'A consultant gives you a report. A Fractional Sales Leader gives you a working sales function. If your gap is execution, a report will not close it.',
    takeaway2:
      'Consultants are accountable for the quality of their advice. Fractional Sales Leaders are accountable for revenue — pipeline coverage, close rate, quota attainment.',
    takeaway3:
      'A consultant interviews the CEO and writes a strategy. A Fractional Sales Leader runs a sales audit, builds the playbook, manages the reps, and rides every deal review.',
    takeaway4:
      "At $1M–$10M ARR, your problem is rarely 'we don't know what to do.' It is 'no one is owning the doing.' Consultants do not solve that. Embedded leadership does.",
    takeaway5:
      'When the engagement ends, a consultant leaves you with a slide deck. A Fractional Sales Leader leaves you with a documented playbook, a clean CRM, a trained team, and a forecast you can run a board meeting from.',

    // Five Differences
    sectionDiffHeading: 'The Five Differences That Actually Matter',
    sectionDiffSubheading:
      "Both roles have a place. But at $1M–$10M ARR, these five gaps are where consultants quietly stop being useful — and embedded leadership starts.",

    diff1Title: 'Discovery: Sales Audit vs. CEO Interview',
    diff1Detail:
      "A Fractional Sales Leader starts with a Sales Audit — they read the CRM, sit on calls, interview every rep, and trace the last 50 closed and lost deals. They are looking for the actual gap, not the perceived one. A consultant typically starts with the CEO. They take the founder's mental model of the sales function and translate it into a strategy document. That document is only as accurate as the founder's view of a system they have admitted they are too close to. The audit beats the interview because it surfaces what is actually broken — not what the founder thinks is broken.",
    diff1Outcome:
      "A diagnosis based on evidence — calls, CRM data, deal autopsies — not on a founder's self-report from inside the problem.",

    diff2Title: 'Output: Built System vs. Written Recommendation',
    diff2Detail:
      "Consultants deliver documents — a strategy deck, a playbook draft, a market assessment, a roadmap. The implementation is your problem. A Fractional Sales Leader delivers a working sales function: a playbook your team actually uses, a CRM that reflects reality, qualification criteria enforced in the pipeline, a forecast process that runs weekly, and reps trained to operate inside it. The difference is not effort. It is ownership. The consultant owns the document. The Fractional Sales Leader owns the result.",
    diff2Outcome:
      'A sales machine you can hand to a future VP — not a 60-page PDF that sits on a shared drive.',

    diff3Title: 'Accountability: Results vs. Advice',
    diff3Detail:
      'A consultant is accountable for the quality of their advice. If you implement it badly, that is on you. If you do not implement it at all, that is also on you. A Fractional Sales Leader is accountable for outcomes — quota attainment, pipeline coverage, close rate, cycle length, ramp time on new reps. They sit in the same forecast review you do. They have skin in the same outcome you have. When the number is missed, they do not get to point at the document. They have to fix the system.',
    diff3Outcome:
      'A partner whose reputation depends on your revenue growth — not on whether their deck was received well.',

    diff4Title: 'Engagement: Embedded vs. Project-Based',
    diff4Detail:
      "A consultant runs a project: scope, timeline, deliverable, invoice, exit. Four to eight weeks is typical. A Fractional Sales Leader is embedded — recurring weekly involvement, often two or three days a week, for six to twelve months. They show up in your standup. They run your pipeline review. They are in the room when a big deal is on the line. The work is not 'analyze and recommend.' It is 'operate alongside you until the function runs on its own.' Embedded leadership is what changes behavior. Project work, however well-scoped, almost never does.",
    diff4Outcome:
      'A weekly rhythm of coaching, deal reviews, and team development — not a kickoff, a status meeting, and a final report.',

    diff5Title: 'Team: Manages People vs. Talks About Them',
    diff5Detail:
      "Consultants rarely manage anyone. They might recommend a hire, suggest a comp plan, or critique a rep's call recording, but they do not run a one-on-one, write a performance plan, or fire anyone who needs to go. A Fractional Sales Leader does all of it. They interview candidates. They onboard new reps. They coach in the moment. They hold weekly accountability conversations. They make the hard call when a rep is not going to make it. If your sales problem is partly a people problem — and it almost always is — a consultant cannot fix it. They can only describe it.",
    diff5Outcome:
      'A functioning sales team, not a written assessment of the team you currently have.',

    // SEO paragraphs
    seoPara1:
      'Most founders stuck in founder-led sales have already hired at least one consultant. They have a strategy deck, an audit report, maybe a playbook draft. None of it changed the number. That is not because the consultant was wrong. It is because consulting is an information delivery system, and the gap at $1M–$10M ARR is not an information gap — it is an execution gap. A Fractional Sales Leader fills that gap by sitting inside the operation: in the deal reviews, in the one-on-ones, in the forecast meeting, on the calls. They do not hand you a document and leave. They run the function until it runs without them.',
    seoPara2: 'If you are weighing the two, start with a clean diagnosis. Read',
    seoPara2b: ' for the embedded-leadership picture, and',
    seoPara2c:
      ' for why founders skip past fractional too quickly and pay for it. The choice between consultant, fractional, and full-time VP is not about seniority. It is about whether the business needs analysis, embedded execution, or a permanent owner — and at this stage, almost always the middle one.',

    // Comparison Table
    sectionCompareHeading: 'Consultant vs. Fractional Sales Leader, Side by Side',
    sectionCompareSubheading:
      'Same engagement window, very different outputs. Read across each row and the pattern is hard to miss.',
    compareColLeft: 'Consultant',
    compareColRight: 'Fractional Sales Leader',
    compare1Consultant: 'Speaks mostly with the CEO and writes a strategy',
    compare1Fsl: 'Runs a full sales audit before recommending anything',
    compare2Consultant: 'Project-based — 4 to 8 weeks, then disengaged',
    compare2Fsl: 'Embedded — recurring weekly involvement for 6 to 12 months',
    compare3Consultant: 'Accountable for the quality of the advice',
    compare3Fsl: 'Accountable for revenue, pipeline, and team performance',
    compare4Consultant: 'Recommends a hiring plan you have to execute',
    compare4Fsl: 'Interviews, hires, onboards, and coaches the salespeople',
    compare5Consultant: 'Hands off a playbook draft and a roadmap',
    compare5Fsl: 'Builds the playbook, the CRM, and the daily cadence',
    compare6Consultant: 'Leaves a slide deck on a shared drive',
    compare6Fsl: 'Leaves a working sales function the next leader can run',

    // When To Hire
    sectionWhenHeading: 'When to Hire Which',
    sectionWhenSubheading:
      'Both roles are real. The mistake is picking the wrong one for the gap you actually have.',
    when1Title: 'Hire a Fractional Sales Leader When the Gap Is Execution',
    when1Detail:
      'If you have already had the strategy conversation — maybe more than once — and the bottleneck is that no one is owning the rep coaching, the pipeline hygiene, the forecasting discipline, or the team accountability, a consultant will not help. You do not need another document. You need a leader who shows up every week, runs the operating cadence, and stays until it works without them. This is the most common reality at $1M–$10M ARR.',
    when2Title: 'Hire a Consultant When the Gap Is Strategic',
    when2Detail:
      'If you have a capable internal sales leader, strong execution discipline, and a specific strategic question — repricing, repositioning, channel design, an objective audit before a board meeting — a consultant can be exactly the right fit. They bring outside pattern recognition, deliver a crisp recommendation, and exit. The trap is using a consultant when the real problem is implementation, because the strategy doc then becomes evidence of effort rather than progress.',
    when3Title: 'If You Are Unsure, the Audit Tells You',
    when3Detail:
      "A Fractional Sales Leader's first deliverable is usually a 4-to-6 week Sales Audit. That audit alone will tell you whether the gap is strategic (in which case you may not need ongoing fractional leadership at all) or operational (in which case the engagement converts into a full build). Either way, you get an evidence-based diagnosis instead of a consultant's opinion, and you keep the option of fractional leadership without committing to it up front.",

    // About Louie
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'I have been on both sides of this comparison — hired as a consultant to write the strategy, and hired as a Fractional Sales Leader to build the function. The work that produces revenue is almost never the strategy work. It is the operating cadence, the deal reviews, the rep coaching, and the accountability conversations that happen every week with someone who owns the number alongside the founder.',

    // FAQs
    faq1Question:
      'What is the main difference between a Fractional Sales Leader and a Consultant?',
    faq1Answer:
      'A consultant is accountable for the quality of their advice and the deliverable they hand over — usually a strategy document, audit, or playbook draft. A Fractional Sales Leader is accountable for revenue outcomes — quota attainment, pipeline coverage, close rate, and team performance — and is embedded weekly in your business until the sales function works without them. The consultant tells you what to do. The Fractional Sales Leader does it with you.',

    faq2Question: 'Why do consultants alone often fail to fix a sales problem?',
    faq2Answer:
      'Because at $1M–$10M ARR the gap is rarely strategic — it is operational. Most founders already know roughly what they should be doing. The hard part is the daily implementation: running pipeline reviews, coaching reps, enforcing CRM discipline, holding people accountable, making hire and fire decisions. A consultant produces a document. A document does not change rep behavior, does not run the cadence, and does not own the number. You can implement a great consultant\'s playbook badly — and most founders do, because they are still buried inside the deals.',

    faq3Question: 'When should I hire a consultant instead of a Fractional Sales Leader?',
    faq3Answer:
      'Hire a consultant when you have strong execution capacity and need an objective outside view on a specific strategic question — repricing, ICP redefinition, GTM channel strategy, M&A sales due diligence, or a sales audit before a board meeting. Hire a Fractional Sales Leader when your bottleneck is leadership and execution: nobody is owning the team, the forecast, the playbook, or the operating cadence at the depth and discipline the business needs.',

    faq4Question: 'Is a Fractional Sales Leader more expensive than a consultant?',
    faq4Answer:
      'Different cost profile, not necessarily more expensive. A consultant engagement is typically $15,000–$50,000 for a 4-to-8 week project — a one-time spend that produces a document. A Fractional Sales Leader is typically $6,000–$14,000 per month, ongoing for 6 to 12 months — recurring spend that produces a working sales function. The right way to compare is per dollar of revenue impact. A document that does not get implemented costs you the full project fee. A working sales system pays back the fractional fee inside the first one or two new deals.',

    faq5Question: 'Can a Fractional Sales Leader do both strategy and execution?',
    faq5Answer:
      'Yes, and most experienced ones do. The engagement typically opens with a 4-to-6 week Sales Audit that delivers a strategic diagnosis — what is broken, what is missing, what to fix first, and what it will cost. If you stop there, you have effectively bought a consulting engagement. If you continue, the Fractional Sales Leader stays embedded to install the system, run the team, and exit only when the function runs on its own. You get both the outside-view strategy and the inside-the-room execution from the same person.',

    // CTA
    ctaHeadline: 'Not Sure Which One You Need? Start With the Audit.',
    ctaDescription:
      'In 30 minutes I can tell you whether your gap is strategic — in which case a consultant or a Sales Audit is the right call — or operational, in which case embedded fractional leadership is what actually moves the number.',
  },
}

async function seed() {
  for (const [section, content] of Object.entries(sections)) {
    // Replace the row entirely so the old nested {hero, summary, ...} shape is gone.
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
