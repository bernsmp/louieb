/**
 * Seed script: How Do I Build a Sales System Without Hiring a Full-Time VP of Sales?
 * - seoBuildSalesSystemWithoutVp → /how-to-build-sales-system-without-full-time-vp
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-build-sales-system-without-vp.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoBuildSalesSystemWithoutVp: {
    // Hero
    heroTag: 'Foundational Sales Infrastructure',
    heroLine1: 'How Do I Build a Sales System',
    heroAccent: 'Without Hiring a Full-Time VP of Sales?',
    heroH2: 'Implementing Foundational Sales Infrastructure for Founders',
    heroDescription:
      "For $1M–$10M ARR founders stuck in founder-led sales and not ready to bet $400K on a full-time VP hire. Build the machine first — then decide who runs it.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'You do not have a sales problem — you have an infrastructure problem. Hiring a $400K VP into an empty system almost always fails.',
    takeaway2:
      'A real sales system has four components: a documented Sales Playbook, a disciplined CRM and pipeline, a defined Ideal Customer Profile with qualification criteria, and a written accountability structure.',
    takeaway3:
      'The build sequence matters. Codify the founder sales motion first, install the infrastructure second, hire into a system that already works third — never the reverse.',
    takeaway4:
      'You can build all of this in 60 to 90 days with a Fractional Sales Leader at roughly 25% of the cost of a full-time VP — without betting twelve months of runway on a single hire.',
    takeaway5:
      'The goal is not to avoid leadership forever. It is to build the machine first so that when you eventually hire a VP, they are running something that already produces revenue.',

    // Four Components
    sectionComponentsHeading: 'The Four Components of a Real Sales System',
    sectionComponentsSubheading:
      'Miss one and the system is a suggestion, not a system. All four are non-negotiable.',

    comp1Title: 'The Sales Playbook',
    comp1Detail:
      "The playbook is the written translation of the founder's sales instinct into a process anyone on the team can execute. It defines the Ideal Customer Profile with specific, rigid constraints — industry, company size, revenue range, buying role, disqualifying characteristics. It scripts the discovery call framework and the qualification criteria. It documents every recurring objection and the best response to each one. It contains the email sequences, the second-call framework, the proposal structure, and the closing cadence. Without a playbook, every rep sells a slightly different product to a slightly different customer. With one, every rep sells the same product to the same customer, the same way.",
    comp1Outcome:
      'A 20-to-40-page operating manual every salesperson runs from on day one — so onboarding becomes 30 days instead of six months.',

    comp2Title: 'The Pipeline and CRM Infrastructure',
    comp2Detail:
      "Most $1M–$10M ARR companies have a CRM. Almost none of them have a functional pipeline. A functional pipeline has stages that match how deals actually move — not aspirational stages copied from a HubSpot template. Each stage has written entry and exit criteria based on buyer actions, not seller activities. \"Discovery Complete\" does not mean the rep had a meeting; it means the buyer confirmed the problem, the budget, the timeline, and the decision-maker. Moving a deal forward requires evidence. Moving it backward is expected when the evidence is missing. This is the difference between a forecast you can run a business on and a forecast that falls apart in the last week of the quarter.",
    comp2Outcome:
      'A CRM that tells you the truth about pipeline health in one glance — and a forecast you can take to the board without a footnote.',

    comp3Title: 'The Qualification and Disqualification Criteria',
    comp3Detail:
      'Founders qualify on instinct. They know in the first meeting whether a deal is real. Salespeople, without explicit criteria, keep every deal alive out of hope. The pipeline fills with optimism and the forecast becomes fiction. The fix is to write down the three things that make a deal qualified and the three things that disqualify it automatically. Those criteria become required fields in the CRM. Reps are given explicit permission — and rewarded — for killing deals that do not qualify. A clean pipeline is more valuable than a fat one.',
    comp3Outcome:
      'A smaller, cleaner pipeline that closes at a higher rate — because no one is wasting cycles on deals that were never going to happen.',

    comp4Title: 'The Accountability System',
    comp4Detail:
      'An accountability system is not a one-on-one. It is a written document that specifies what each salesperson is responsible for, what metrics they are measured on, what the cadence of review is, and what happens when a target is missed. It covers activity metrics (calls, demos, pipeline coverage) and outcome metrics (close rate, cycle length, quota attainment). It is reviewed weekly in a standing pipeline review that is never cancelled. When these four components are in writing and enforced, a salesperson can close a deal without the founder in the room. When they are not, the founder is permanently on call.',
    comp4Outcome:
      'A weekly rhythm that surfaces problems early, rewards the right behavior, and replaces founder-as-manager with a system that manages itself.',

    // SEO paragraphs
    seoPara1:
      "A full-time VP of Sales is a $400,000 all-in commitment — base, OTE, equity, benefits, and recruiting fees — and roughly 70% of first-time VP hires fail inside eighteen months. The failure rate is not because VPs are bad at their jobs. It is because they are being hired into companies that do not yet have the raw materials they need to succeed: no playbook, no defined process, no CRM discipline, no qualification criteria, and a founder who is still the best salesperson in the building. You cannot hire an operator into an empty operation.",
    seoPara2:
      'The smarter path is to build the sales system first, prove it works, and then decide whether you need a full-time VP to run it. If you want to see why so many founders get this sequence wrong, read',
    seoPara2b:
      '. And if you want the full picture of the capital-efficient alternative — what a Fractional Sales Leader does and why it works at this stage — start with',
    seoPara2c: '. The sequence matters more than the seniority.',

    // Comparison table
    sectionCompareHeading: 'Without the Infrastructure vs. With It',
    sectionCompareSubheading:
      'The difference is not talent. It is whether the machine was built before the people were hired.',
    compareColLeft: 'Without the Infrastructure',
    compareColRight: 'With the Infrastructure',
    compare1Without: 'Every rep sells differently — there is no shared pitch',
    compare1With: 'Documented Sales Playbook every rep runs from',
    compare2Without: 'Pipeline stages copied from a CRM template',
    compare2With: 'Stages match reality with evidence-based exit criteria',
    compare3Without: 'Deals that should die stay open for months',
    compare3With: 'Written qualification criteria enforced in the CRM',
    compare4Without: 'Forecast is a feeling — off by 30% every quarter',
    compare4With: 'Forecast built on stage conversion data you can trust',
    compare5Without: 'Founder is in every deal or the deal stalls',
    compare5With: 'Reps close without the founder in the room',
    compare6Without: '$400K VP hired into chaos and fails in 12 months',
    compare6With: 'VP (or fractional leader) runs a machine that already works',

    // Build sequence phases
    sectionSequenceHeading: 'The Build Sequence That Actually Works',
    sectionSequenceSubheading:
      'The order matters more than any individual piece. Most founders try to solve this backwards — and it costs them a year.',
    phase1Title: 'Codify the Founder Sales Motion Into a Playbook',
    phase1Detail:
      "The first 30 days of any real sales system build is about extraction. Someone — you, a fractional leader, an operations person — sits with every recorded call and every deal the founder has closed. The patterns get written down. What does a qualified conversation look like? What triggers buyer interest? What questions surface urgency? Which objections are real and which are smokescreens? What does a \"yes\" usually sound like a week before it arrives? This is the founder's magic, extracted into a document. A Fractional Leader typically does this in two to three weeks because they have done it before and know what to look for. A founder trying to do it alone will not finish — because the job the document would free them from is the same job that is keeping them too busy to write it.",
    phase2Title: 'Install the Infrastructure and RevOps',
    phase2Detail:
      'With the playbook drafted, the CRM gets configured to match. Pipeline stages match reality. Required fields enforce qualification discipline. Automation handles the mechanical follow-ups. Reporting is built so that the founder can see pipeline health in a single glance instead of hunting for it. This is Revenue Operations work — specific, tactical, and critically unglamorous. A Fractional Sales Leader owns it. A full-time VP usually does not; they delegate it or skip it. Skipping it is why so many VP hires look busy for six months and produce nothing.',
    phase3Title: 'Hire and Onboard the First Scalable Reps',
    phase3Detail:
      'Only now — with a playbook, a working CRM, defined qualification criteria, and a documented accountability structure — is the company ready to hire salespeople. And only now can a new rep ramp in 60 to 90 days instead of never. Founders often hire reps who are "mini-me" versions of themselves. This usually fails at this stage — you do not need a founder; you need someone who can execute the playbook you just wrote. A Fractional Leader uses their network to source the right profile (a Builder rep, not a Maintainer rep), runs the interviews, evaluates for pattern-match against the playbook, and owns the ramp period.',

    // Economics callout
    sectionEconomicsHeading: 'The Economics: Why Sequence Beats Seniority',
    econLeftLabel: 'Option A: Full-Time VP',
    econLeftCost: '~$400K / year',
    econLeftDetail:
      'Base, OTE, equity, benefits, and recruiting fees. 6-month ramp before any real impact. ~70% failure rate in the first 18 months.',
    econRightLabel: 'Option B: Fractional Leader',
    econRightCost: '~$72K – $168K / year',
    econRightDetail:
      'No equity overhead, no recruiting fees, week-one impact, no long-term commitment. Same seniority — often higher — at roughly 25% of the cost.',
    econSummary:
      'You are trading a $400K one-shot bet on a single human for a contracted deliverable from someone who has already installed this system five or ten times. At the end of the engagement, you have a system — not a dependency.',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'I build the sales infrastructure — playbook, pipeline, qualification criteria, accountability system — that lets $1M–$10M ARR founders transition out of founder-led sales without the $400K risk of a full-time VP hire. Most engagements install the full system in 60 to 90 days and hand off a machine that already produces revenue.',

    // FAQs
    faq1Question: 'How long does it take to build a sales system from scratch?',
    faq1Answer:
      'The core system — playbook, CRM infrastructure, qualification criteria, and accountability document — can be built and operational in 60 to 90 days with a Fractional Sales Leader who has done it before. Hiring the first one or two scalable reps into that system is an additional 30 to 60 days. Most founders see measurable pipeline improvement by day 45 and a functioning rep team by month six.',

    faq2Question: 'Can I build this sales system myself without outside help?',
    faq2Answer:
      'Technically yes, but almost no founder does. The reason is structural: the job the system is supposed to free you from is the same job keeping you too busy to build the system. Founders who try to build it alone usually stall at the playbook stage, because writing down what you do takes you away from doing it. A Fractional Sales Leader does the extraction for you — they have built this playbook before and they know what good looks like.',

    faq3Question: 'When do I actually need a full-time VP of Sales?',
    faq3Answer:
      'When you have a working sales system, a sales team of six or more reps, and a company approaching or past $10M ARR. At that stage, the complexity of managing a team of that size, running multiple segments or regions, and building the next layer of leadership is a full-time job. Before that point, a VP is an expensive solution to a problem you do not yet have. Build the machine first. Hire the VP to run it after it already works.',

    faq4Question: 'What happens if I hire a VP before the system is built?',
    faq4Answer:
      'Most often: six to twelve months of slow progress, followed by a mutual agreement to part ways, followed by a second founder-led sales period while you recover. The all-in cost of a failed VP hire at this stage is typically $500K to $800K when you include recruiting fees, severance, lost pipeline, and the deals that did not close during the ramp. The system-first approach eliminates that risk because you are not depending on a single person to do both the building and the running.',

    faq5Question: 'What is the single most important piece to build first?',
    faq5Answer:
      'The playbook. Everything else — the CRM configuration, the hiring, the accountability system — depends on having a documented sales motion to enforce. Without the playbook, a CRM is just a database; reps are just people; accountability is just pressure. The playbook is the artifact that turns all of those pieces into a system.',

    // CTA
    ctaHeadline: 'Build the Machine Before You Hire the Operator',
    ctaDescription:
      'In 30 minutes I can map what sales infrastructure you actually have today, identify what is missing, and outline exactly what it would take to install a working system in 60 to 90 days — without the $400K VP hire.',
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
