const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const pages = [
  {
    section: 'seoCaseStudy61SalesGrowth',
    content: {
      heroLine1: 'Case Study: 61% Sales Growth',
      heroAccent: 'in One Year',
      heroDescription: 'A B2B SaaS company at $2.1M ARR was growing slowly and founder-dependent. Twelve months later: 61% revenue growth, 3.8× pipeline coverage, and a team that could close without the founder in the room.',
      ctaHeadline: 'Want Results Like This in Your Business?',
      ctaDescription: "In 30 minutes I can tell you whether your sales org has the same structural problems — and what it would take to fix them.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "The engagement described in this case study is representative of what I do with founder-led companies at $1M–$15M ARR. Every engagement is different, but the structural problems are almost always the same — and so are the fixes.",
      faq1Question: 'Is 61% sales growth in one year realistic for my business?',
      faq1Answer: "It depends on your starting point. Most of my clients are founder-dependent, under-systemized, and not tracking the right metrics when we begin. When those problems get fixed, growth accelerates — not because of magic, but because deals stop falling through the cracks. 61% is the result in this case study; your results will depend on your stage, team, and market.",
      faq2Question: 'How long does an engagement like this take?',
      faq2Answer: "Most meaningful progress happens in 90 days. The first 30 are diagnosis and infrastructure — fixing the pipeline, stage definitions, and rep accountability. Days 31–90 are execution and coaching. By month 3, the team should be operating on a system rather than on instinct.",
      faq3Question: 'What does a fractional sales leader actually do in an engagement like this?',
      faq3Answer: "Diagnose first: pipeline review, call shadows, win/loss analysis. Then build: ICP documentation, stage definitions, playbook, comp plan. Then manage: weekly pipeline reviews, rep coaching, founder handoff. The goal is always to make myself replaceable by building a system that runs without me.",
      faq4Question: 'How is this different from hiring a full-time VP of Sales?',
      faq4Answer: "A VP of Sales is hired to scale a working system. If the system doesn't exist yet — no documented process, no reliable pipeline, no trained reps — a VP of Sales will spend their first 6 months trying to build what a fractional leader builds in 60–90 days. Most founders hire full-time too early and pay for it.",
    },
  },
  {
    section: 'seoWarningSalesProcessBreaking',
    content: {
      heroLine1: 'The 5 Warning Signs Your Sales Process',
      heroAccent: 'Is About to Break',
      heroDescription: "Most sales processes don't fail suddenly. They give you signals for months before revenue drops. Here are the five you can't afford to ignore.",
      ctaHeadline: 'Recognize Any of These in Your Business?',
      ctaDescription: "In 30 minutes I can run a quick diagnostic on your sales process and tell you which warning signs are present, how serious they are, and where to start fixing them.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "The warning signs on this page are the ones I look for in the first week of any engagement. They're almost always there. The difference between companies that fix them quickly and those that don't is whether someone is running the diagnostics — or waiting for the numbers to speak for themselves.",
      faq1Question: 'How do I know if these warning signs apply to me specifically?',
      faq1Answer: "Run through each one and ask: do I have data to disprove it? If you can't point to stage conversion rates, rep ramp timelines, or forecast accuracy data to say \"no, that's not us\" — the warning sign probably applies. Most founders in the $1M–$5M ARR range discover that 2–3 of these apply when they look honestly.",
      faq2Question: 'Is a broken sales process fixable while still trying to hit revenue targets?',
      faq2Answer: "Yes — but it requires parallel tracking. You can't stop selling to fix the process. What you can do is make 2–3 surgical changes that improve the most broken parts without disrupting what's currently working. Most fixes take 60–90 days to show up in the numbers. Start with the one that's costing you the most deals right now.",
      faq3Question: 'What if the issue is the people, not the process?',
      faq3Answer: "Most of the time, it's both. But start with process before changing people. A rep performing poorly in a broken process might be exactly the right person for a functional one. Firing reps into a broken system just starts the cycle over.",
      faq4Question: 'When should I bring in outside help versus fixing this internally?',
      faq4Answer: "If you've identified the warning signs and know what to fix — start internally. If you've been aware of the problem for more than two quarters and it's still not improving, that's the signal that you need outside perspective. The longer a broken process runs, the more it compounds — in bad habits, bad hires, and bad culture.",
    },
  },
  {
    section: 'seoWhatFslDoes',
    content: {
      heroLine1: 'What Does a Fractional Sales Leader',
      heroAccent: 'Actually Do Week to Week?',
      heroDescription: "People ask about the title. Here's the actual work — what gets done Monday through Friday, why it matters, and how it's different from coaching or consulting.",
      ctaHeadline: "Want to See What This Looks Like in Your Business?",
      ctaDescription: "In 30 minutes I can walk you through exactly what a fractional engagement would look like for your stage — what I'd focus on first and what results you could expect in 90 days.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "The week-to-week breakdown on this page is what my actual engagements look like. The work changes as a company scales — early on it's mostly infrastructure and diagnosis, later it's execution and accountability. But the commitment is always the same: drive revenue, not just advice.",
      faq1Question: 'How many hours per week does a fractional sales leader typically work?',
      faq1Answer: "Most engagements are 10–20 hours per week, depending on the stage and complexity of the sales org. Early-stage companies with a small team typically need 10–12 hours. Companies with 4–8 reps and active pipeline work typically need 15–20 hours. The hours adjust as the engagement matures.",
      faq2Question: "How is this different from a sales coach?",
      faq2Answer: "A sales coach works on skill development — how reps pitch, handle objections, and close. A fractional sales leader does that and also owns the system: pipeline management, forecasting, hiring, comp plans, CRM setup, and strategy. A coach is a teacher. A fractional sales leader is an operator.",
      faq3Question: 'Does a fractional sales leader attend sales calls?',
      faq3Answer: "Yes — shadowing calls is one of the most important diagnostic tools in the first 30 days. You can't build a coaching framework without hearing where deals are won and lost. After the initial diagnosis, call shadowing continues on a selective basis, focused on deal reviews and rep development.",
      faq4Question: 'Can a fractional sales leader work with a company that has no sales team yet?',
      faq4Answer: "Yes — and this is often the best time to bring one in. If you're a founder closing deals yourself and you're ready to hire your first rep, a fractional sales leader can define the role, document your sales process, build the playbook, and run the hiring process before the rep starts. That sets the hire up to succeed.",
    },
  },
  {
    section: 'seoTransitionFounderLedSales',
    content: {
      heroLine1: 'How to Transition Out of Founder-Led Sales',
      heroAccent: 'Without Losing Momentum',
      heroDescription: "You built the company by selling it yourself. Now that's the bottleneck. Here's the 5-step framework for handing off sales without watching revenue fall.",
      ctaHeadline: "Ready to Start Your Transition?",
      ctaDescription: "In 30 minutes I can map out where you are in the founder-led sales lifecycle and what the next step looks like for your specific business.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "I've guided dozens of founders through this exact transition — from solo seller to a system that runs without them. The mistakes on this page are the ones I see most often. The framework works when founders commit to it.",
      faq1Question: 'How long does the transition out of founder-led sales take?',
      faq1Answer: "Most founders see meaningful progress in 60–90 days when they commit to the framework. The first 30 days are spent extracting and documenting the process. Days 31–60 are training and handoff with close oversight. By day 90, reps should be closing deals independently on most of the pipeline.",
      faq2Question: 'What if my deals are too complex for reps to handle without me?',
      faq2Answer: "That's usually a documentation problem, not a complexity problem. Complex deals have more variables — but those variables can be mapped, and the decision frameworks can be taught. If a deal truly requires your personal expertise, that's a signal about your ICP, not your sales process.",
      faq3Question: 'Should I hire a VP of Sales to manage this transition?',
      faq3Answer: "Not yet. A VP of Sales is hired to scale a working system — not to build one from scratch. If you bring in a VP before the process is documented, they'll spend their first 6 months recreating what you already know. Document first, then hire to scale.",
      faq4Question: 'How do I know when I\'ve successfully transitioned?',
      faq4Answer: "The clearest signal: a quarter ends and revenue hit target without you closing more than 10–15% of deals. Secondary signals include reps forecasting accurately without coaching, pipeline coverage staying above 3×, and new reps ramping in under 90 days. When those are true, the transition is real.",
    },
  },
]

async function seed() {
  for (const page of pages) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section: page.section, content: page.content }, { onConflict: 'section' })

    if (error) {
      console.error(`❌ ${page.section}:`, error.message)
    } else {
      console.log(`✅ ${page.section}`)
    }
  }
}

seed()
