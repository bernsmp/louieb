/**
 * Seed script: Does My Sales Playbook Cover All the Essentials?
 * - seoSalesPlaybookChecklist → /does-my-sales-playbook-cover-all-the-essentials
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-does-my-sales-playbook-cover-all-the-essentials.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoSalesPlaybookChecklist: {
    // Hero
    heroTag: 'Sales Playbook Checklist',
    heroLine1: 'Does My Sales Playbook Cover',
    heroAccent: 'All the Essentials?',
    heroH2: "Here's the checklist to find out.",
    heroDescription:
      "Most $1M to $10M ARR founders think they have a Sales Playbook. Most of them don't. They have notes, slides, or a Google Doc nobody opens. Here are the five things a real playbook has, so you can check yours honestly.",

    // Key Takeaways
    takeaway1:
      "A real Sales Playbook isn't a document. It's a system you run. If nobody opens it weekly, it isn't a playbook.",
    takeaway2:
      "The five non-negotiables: a specific ICP with disqualifiers, stages tied to buyer milestones, a discovery framework, an objection and pricing playbook, and a weekly cadence that enforces it.",
    takeaway3:
      "Missing any one of the five and the playbook leaks. Reps quietly invent their own process, deals stall, and the pipeline starts lying to you.",
    takeaway4:
      "Build the playbook before you hire your next rep. Hiring into nothing is how good salespeople get blamed for a system you never built.",
    takeaway5:
      "A Fractional Sales Leader can extract a working playbook from you in 60 to 90 days. Trying to do it alone almost always stalls.",

    // 5 Essentials section
    sectionEssentialsHeading: 'The 5 Essentials Every Real Sales Playbook Has',
    sectionEssentialsSubheading:
      'Each one is specific. Each one has a check you can run today. Miss any of the five and the playbook leaks.',

    essential1Title: 'A Specific ICP With Hard Disqualifiers',
    essential1Detail:
      "Most playbooks I review describe the Ideal Customer Profile in a way that's so broad it's useless. \"B2B SaaS, 50 to 500 employees, growth-stage.\" That's not an ICP. That's a category. A real ICP names the industry, the revenue band, the buying role, the trigger event that makes them ready to buy, and the disqualifiers that should kill a deal before a rep wastes a week on it. If your playbook can't say no for you, it's not doing its job.",
    essential1Fix:
      "Write three lines: \"We sell to ____ at companies between ____ and ____ revenue, when they're trying to fix ____. We don't sell to ____ or ____.\" If you can't fill those blanks today, your reps can't qualify a single deal correctly.",

    essential2Title: 'Pipeline Stages Tied to Buyer Milestones, Not Rep Activity',
    essential2Detail:
      "A pipeline stage that says \"Discovery Complete\" because the rep had a meeting is theater. A real stage says \"Discovery Complete\" because the buyer confirmed the problem, the budget, the timeline, and the decision-maker, in writing or on record. Stages built around what the rep did are flattering. Stages built around what the buyer did are useful. Only one of those gives you a forecast that holds up.",
    essential2Fix:
      "For every stage, write the buyer evidence required to enter it and the buyer evidence required to leave it. If your stages can't pass that test, deals are sitting in the wrong place and your forecast is fiction.",

    essential3Title: 'A Discovery and Qualification Framework',
    essential3Detail:
      "Discovery isn't \"ask a few open-ended questions and see what happens.\" A real playbook gives reps a written framework: the questions to ask, the order to ask them, what a strong answer sounds like, what a weak answer sounds like, and what to do next in each case. Without that, every rep runs discovery differently. Which means every deal gets qualified differently. Which means your pipeline is full of optimism, not opportunity.",
    essential3Fix:
      "Document the 8 to 12 questions every discovery call must cover and the qualification criteria a deal must clear to move forward. Test it: hand the framework to your newest rep and watch them run a call. If they can't follow it, it's not specific enough yet.",

    essential4Title: 'An Objection and Pricing Playbook',
    essential4Detail:
      "I can predict the top five objections your reps will hear this quarter. So can you. The question is whether the responses are written down or living in your head. A real playbook documents every recurring objection and the best response to each one, with reasoning, not just scripts. It documents pricing rules: when discounting is allowed, when it isn't, what concessions trade for what. Without that, every rep negotiates from scratch. The price floor moves every deal.",
    essential4Fix:
      "List the top 10 objections you've heard in the last 12 months. Write the best response to each. Write the three pricing rules every rep must follow. That's a one-day exercise that pays back for years.",

    essential5Title: 'A Cadence That Makes It Operational, Not Decorative',
    essential5Detail:
      "The most common reason playbooks fail isn't that they're written badly. It's that no one runs the cadence that keeps them alive. A real playbook is enforced through a weekly pipeline review, a monthly playbook revision based on what worked and what didn't, and a quarterly check on whether the ICP and pricing still match the market. Without that rhythm, the playbook becomes a PDF on a shared drive that nobody opens. You don't have a playbook. You have an artifact.",
    essential5Fix:
      "Pick a standing weekly meeting where the playbook is the agenda: pipeline reviewed against it, exceptions flagged, lessons captured. If your team can't tell you when that meeting happens, the playbook isn't running anything.",

    // SEO paragraphs
    seoPara1:
      "The Sales Playbook is the single most important asset a $1M to $10M ARR company can own, and it's the one founders skip most often. The reason isn't laziness. It's that building a playbook feels like overhead when you're trying to hit a number. So most founders push it off. They run on instinct, close deals personally, and assume they'll write the playbook later. Later never comes. By the time the team is big enough that the lack of a playbook is obviously hurting, it's a year too late and the bad habits are already baked in.",
    seoPara2:
      "A Sales Playbook isn't a document you write once. It's a working operating system for the sales team. It has to be specific enough that a new rep can read it on day one and start running calls, and it has to be alive enough that it evolves as your buyer and product evolve. If you want to dig deeper into what belongs in one, start with",

    // Comparison Table
    sectionCompareHeading: 'A Document Called "Playbook" vs. A Real Working Playbook',
    sectionCompareSubheading: "The difference isn't length. It's whether the team actually uses it.",
    compareColLeft: 'A Document Called "Playbook"',
    compareColRight: 'A Real Working Playbook',
    compare1Left: 'A one-time PowerPoint shared at kickoff',
    compare1Right: 'A living document updated every quarter',
    compare2Left: 'Vague ICP like "B2B SaaS"',
    compare2Right: 'Specific ICP with written disqualifiers',
    compare3Left: 'Stages copied from a CRM template',
    compare3Right: 'Stages tied to buyer evidence and milestones',
    compare4Left: "Objection handling left to each rep's instinct",
    compare4Right: 'Documented objections with best-known responses',
    compare5Left: 'Pricing decided deal by deal in the moment',
    compare5Right: 'Written pricing rules every rep follows',
    compare6Left: 'No accountability cadence, playbook gathers dust',
    compare6Right: 'Weekly pipeline review uses the playbook as the standard',

    // What to Do This Week
    sectionActionsHeading: 'What to Do This Week',
    sectionActionsSubheading:
      'Before you hire help, run these five checks. The answers will tell you exactly how complete your playbook actually is.',
    action1:
      "Open your current playbook and find the ICP definition. If you can't read it out loud in 30 seconds, it's too vague.",
    action2:
      "Pick three open deals from your CRM and check whether they match the ICP. If two or more don't, the pipeline is full of the wrong deals.",
    action3:
      "Ask your newest rep to walk you through stage exit criteria from memory. If they can't, the stages aren't operational.",
    action4:
      "List the top 5 objections your team heard this month. Write the best response to each. That's the start of the objection section.",
    action5:
      "Put a 60-minute weekly meeting on the calendar where the playbook is the agenda. If you can't, the playbook isn't running anything.",

    // About
    aboutBio1:
      "I'm Louie Bernstein. I've got 50 years in business, 22 of those as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "The first thing I do in almost every engagement is ask to see the Sales Playbook. Most of the time, what I get back is a slide deck, a half-written Notion page, or nothing at all. Building a real one is usually where the work starts. It's also where the biggest gains show up the fastest.",

    // FAQs
    faq1Question: 'How do I know if my current playbook is missing essentials versus just needing a refresh?',
    faq1Answer:
      "Run it through the five checks on this page. If you can answer all five with specific written content from your existing playbook, you have a real playbook that needs maintenance. If you can answer two or fewer, you don't have a playbook yet, you have notes. Most $1M to $5M companies I work with are in the second group, even when they're sure they're in the first.",

    faq2Question: 'How long does it take to build a real Sales Playbook from scratch?',
    faq2Answer:
      "Sixty to ninety days with someone who's done it before. The bottleneck isn't writing, it's extraction. Most of the playbook lives in the founder's head: how they qualify, how they handle objections, how they decide on pricing. Getting that out and onto paper takes structured conversations and recorded-call review. Founders trying to do this alone usually stall, because the job the playbook would free them from is the same job that's keeping them too busy to write it.",

    faq3Question: 'Can a Fractional Sales Leader build the playbook for us, or does it have to come from inside?',
    faq3Answer:
      "It has to come from the inside, but it usually needs an outside hand to extract it. The content has to be your founder's wisdom, your customer's actual language, and your team's real objections. A Fractional Sales Leader knows what a working playbook looks like, runs the interviews to pull the content out of you, and assembles it into a document that can be taught and enforced. The result is your playbook, built faster and cleaner than you'd build it alone.",

    faq4Question: 'What if my product or buyer changes a lot, is a playbook still worth building?',
    faq4Answer:
      "Yes, and probably more than for a stable business. A playbook in a changing market isn't a fixed document. It's a system for capturing what's working right now, sharing it across the team, and updating it when something stops working. The cadence I described in essential five is what makes that possible. Without the playbook, every change forces every rep to re-invent. With one, the team adjusts together.",

    faq5Question: 'Do I need a playbook before I hire my first rep, or after?',
    faq5Answer:
      "Before. Every time. Hiring a rep without a playbook is the most expensive way to find out you didn't have a sales process. The new rep spends six months guessing, you spend that time wondering why nothing's closing, and you eventually conclude that good salespeople are impossible to find. They're not. You hired them into a system that didn't exist. Build the playbook first. Hire into it. Then the rep can actually ramp.",

    // CTA
    ctaHeadline: "Let's Audit Your Playbook in 30 Minutes",
    ctaDescription:
      "Bring me your current playbook, or what you have of one. In 30 minutes I'll tell you which of the five essentials are in place, which are missing, and where to start fixing the gaps.",
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
