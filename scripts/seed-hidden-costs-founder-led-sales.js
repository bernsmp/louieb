/**
 * Seed script: What Are the Hidden Costs of Founder-Led Sales?
 * - seoHiddenCostsFounderLedSales → /what-are-the-hidden-costs-of-founder-led-sales
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-hidden-costs-founder-led-sales.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoHiddenCostsFounderLedSales: {
    // Hero
    heroTag: 'Founder-Led Sales: The True Cost',
    heroLine1: 'What Are the Hidden Costs',
    heroAccent: 'of Founder-Led Sales?',
    heroH2: 'And How Do I Keep From Getting Surprised?',
    heroDescription:
      "For $1M–$10M ARR founders who think founder-led sales is free because it is not on the P&L. The real bill comes due in opportunity cost, pipeline risk, valuation discounts, and failed hires. Here is the math — and the way out.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'Founder-led sales is not free. It is the most expensive sales channel you have — you just are not invoicing yourself for it.',
    takeaway2:
      'The five hidden costs: founder opportunity cost, pipeline concentration risk, the hiring tax of broken onboarding, the exit-valuation discount, and the strategic blindness tax.',
    takeaway3:
      'A typical $5M ARR founder spends 30–50% of every week in active selling — $200K–$400K of misallocated executive time per year, before counting any other cost.',
    takeaway4:
      'Acquirers and investors apply a 20–40% valuation discount to revenue that depends on a single human. Every quarter you stay in founder-led sales, that discount compounds.',
    takeaway5:
      'The exit is not "hire a VP." It is to install a sales system — playbook, pipeline, qualification, accountability — that runs without you. A Fractional Sales Leader builds that in 60 to 90 days.',

    // Five Hidden Costs
    sectionCostsHeading: 'The Five Hidden Costs of Founder-Led Sales',
    sectionCostsSubheading:
      'None of these line items show up on your P&L. All five get paid — in cash, equity, or both.',

    cost1Title: 'The Opportunity Cost of Founder Time',
    cost1Detail:
      "Most $1M–$10M founders spend between 30% and 50% of every week in active selling — discovery calls, second meetings, proposals, follow-ups, the deal that \"only I can close.\" Price your time at $200 to $400 an hour (the realistic loaded rate for a founder running a venture-stage company) and the math is brutal. Twenty hours a week of selling is roughly $200K to $400K a year of founder labor. That is the same money the company would pay for the VP of Sales it does not yet have — except the founder is also expected to run the business, raise the round, and ship the product. The cost is invisible because it never appears on the P&L. It only shows up as the things that did not get done.",
    cost1Outcome:
      'Twenty hours a week back. The strategic work — partnerships, fundraising, the next product line — gets done by the only person who can do it.',

    cost2Title: 'The Pipeline Concentration Risk',
    cost2Detail:
      'When the founder is the best (or only) closer, the entire revenue pipeline sits on a single point of failure. A bad month for the founder — a board meeting that runs long, a family event, a flu — produces a bad month for the company. Investors and boards look for diversification; they count how many revenue dollars depend on one human being. If the answer is "most of them," they price that risk into your next round. Worse, the forecast becomes a calendar, not a model. You are not predicting revenue; you are predicting your own availability. The CFO cannot run a business on that — and neither can a buyer doing diligence.',
    cost2Outcome:
      "A pipeline that closes deals while you sleep — and a forecast built on stage conversion data, not the founder's calendar.",

    cost3Title: 'The Hiring Tax (Failed Reps and Broken Onboarding)',
    cost3Detail:
      'Founders eventually try to hire out of the problem. They bring in a salesperson. The salesperson has no playbook to run, no qualification criteria to enforce, no documented sales motion to follow — just the founder saying "watch how I do it." The rep flounders for six to nine months, churns or gets fired, and the founder is back in the chair. The all-in cost of a failed first sales hire at this stage runs $150K to $300K when you include base, recruiting fees, commission paid against unconverted pipeline, and the deals that did not close during the ramp. Most $1M–$10M founders pay this tax at least twice before they realize it is the system that is broken, not the people.',
    cost3Outcome:
      'A documented playbook and ramp plan that gets a new rep producing pipeline in 60 to 90 days — instead of churning out before they ever close.',

    cost4Title: 'The Exit-Valuation Discount',
    cost4Detail:
      'Acquirers, private equity buyers, and Series B-and-beyond investors all run the same diligence test: "What happens to revenue if the founder leaves?" If the answer is "it falls off a cliff," they apply a discount. The standard range is 20 to 40 percent — sometimes more for businesses with concentrated customer relationships. On a $5M ARR business sold at a 4x revenue multiple, a 30% founder-dependency discount is six million dollars erased from the sale price. That is the single largest hidden cost of founder-led sales, and it is the one founders see only when it is too late to fix. The fix is years of evidence that the company sells without the founder in the room — not a slide in the pitch deck saying it does.',
    cost4Outcome:
      'A clean diligence story. Revenue that survives the founder leaving — and a multiple that reflects it.',

    cost5Title: 'The Strategic Blindness Tax',
    cost5Detail:
      'The founder who is on every sales call stops seeing the market. They are too deep in individual deals to spot patterns across the pipeline — the new objection that just emerged, the competitor who started winning on price, the segment that is suddenly going dark. A sales team — even a small one — running a documented process produces signal: win-loss data, objection trends, segment performance, pricing pressure. The founder of a founder-led shop does not have that signal because they are the system. They make strategic decisions on instinct and small samples, and they miss the shift until it is in the quarterly numbers.',
    cost5Outcome:
      'A weekly view of pipeline patterns, win-loss themes, and segment trends — so strategic moves are based on data instead of the last call you took.',

    // SEO paragraphs
    seoPara1:
      "The trap with founder-led sales is that it does not look expensive. There is no contract to sign, no salary to approve, no benefits package to budget for. The cost is paid in things that never appear on a financial statement: the strategic project that slipped a quarter, the rep who churned at month seven, the discount the acquirer applied at exit, the segment your team did not see going dark until revenue dropped. None of those line items hit the P&L — but every one of them is paid for in cash, equity, or both.",
    seoPara2:
      'If you want to understand exactly what founder-led sales is doing to your business — and the structural reasons it eventually breaks — start with',
    seoPara2b:
      '. And if you are already past the point of wanting out and need a concrete way through, read',
    seoPara2c:
      '. The cost of staying compounds every quarter. The cost of leaving is fixed and finite.',

    // Comparison table
    sectionCompareHeading: 'What It Costs You vs. What You Reclaim',
    sectionCompareSubheading:
      'The left column is the bill you are paying right now. The right column is what changes when the system is in place.',
    compareColLeft: 'Founder-Led Sales (What It Costs You)',
    compareColRight: 'Sales System Installed (What You Reclaim)',
    compare1Without: '30–50% of founder hours absorbed by active selling each week',
    compare1With: 'Founder time refocused on product, partnerships, and fundraising',
    compare2Without: "Forecast is the founder's calendar — investors discount it accordingly",
    compare2With: 'Forecast built on stage conversion data the board can trust',
    compare3Without: 'First sales hires churn in 6–9 months for $150K–$300K all-in',
    compare3With: 'New reps producing pipeline in 60–90 days against a documented playbook',
    compare4Without: 'Acquirers apply a 20–40% valuation discount for founder dependency',
    compare4With: "Diligence story shows revenue surviving the founder's exit",
    compare5Without: 'Founder too deep in deals to spot market or pipeline patterns',
    compare5With: 'Weekly signal on objections, win-loss themes, and segment trends',
    compare6Without: 'The cost is invisible until it is too large to fix in one quarter',
    compare6With: 'The cost is contractual, capped, and disappears at end of engagement',

    // Economics callout
    sectionEconomicsHeading: 'The Real Annual Tab — When You Add It All Up',
    econLeftLabel: 'Founder-Led Sales (Annual)',
    econLeftCost: '$600K – $1M+ / year',
    econLeftDetail:
      'Founder labor at $200K–$400K, one failed sales hire at $150K–$300K, and a 20–40% valuation discount that compounds every quarter you stay. None of it shows on the P&L.',
    econRightLabel: 'Fractional Sales Leader Engagement',
    econRightCost: '$72K – $168K / year',
    econRightDetail:
      'A contracted, capped expense. Installs the system that ends the founder labor, fixes the failed-hire problem, and erases the valuation discount. Disappears when the engagement ends.',
    econSummary:
      'Founder-led sales feels free because nobody invoices for it. The real bill — six figures or more, every year, plus a multi-million-dollar exit discount — gets paid by the founder, the equity, or both. A fractional engagement converts that hidden, compounding cost into a fixed, finite one.',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'I help $1M–$10M ARR founders see — and stop paying — the hidden costs of founder-led sales. The work is concrete: a playbook, a working pipeline, qualification criteria, a written accountability structure, and the first scalable hires. Most engagements install the system in 60 to 90 days and hand off a sales operation that produces revenue without the founder in the room.',

    // FAQs
    faq1Question: 'What does founder-led sales actually cost a $5M ARR company per year?',
    faq1Answer:
      'Add three line items the P&L does not show. First, founder labor: 20 to 30 hours a week of active selling at a realistic founder loaded rate of $200 to $400 an hour is $200K to $400K a year. Second, the failed sales hire most $5M founders make at least once: $150K to $300K all-in for base, commission, recruiting, and unrecovered pipeline. Third, the compounding valuation discount: 20 to 40 percent applied to founder-dependent revenue at exit. The honest annual run-rate cost is $600K to over $1M — most of it invisible until it is paid.',

    faq2Question: 'How does founder-led sales hurt my valuation at exit?',
    faq2Answer:
      "Acquirers and Series B-plus investors run a single test in diligence: what happens to revenue if the founder leaves? If the answer is 'most of it goes with them,' they apply a discount of 20 to 40 percent to your enterprise value, sometimes more. On a $5M ARR business sold at a 4x revenue multiple, a 30% founder-dependency discount is roughly six million dollars erased from the sale price. The fix is documented evidence — a year or more of it — that the company sells without you in the room.",

    faq3Question: 'Is it possible to stay in some sales and still scale?',
    faq3Answer:
      'Yes — if you choose your role carefully and on purpose. Founders should stay involved in the largest strategic accounts, in the discovery for new market segments, and in any deal that establishes pricing precedent for the company. They should be out of every other deal. The mistake is not founder involvement; it is founder dependency. The line is whether the rep can finish the deal if you disappear for two weeks. If the answer is no, you have not delegated — you are still the system.',

    faq4Question: 'How long does it take to start reclaiming the founder-time cost?',
    faq4Answer:
      "With a Fractional Sales Leader running the engagement, most founders see meaningful reclaimed hours by the end of month one — when the playbook is in draft and the qualification criteria start filtering deals before they get to the founder's calendar. By day 60, the CRM and pipeline discipline are doing the work the founder was doing manually. By day 90, the first deals are closing without the founder in the room. The founder's calendar typically opens up by 10 to 15 hours a week in the first quarter.",

    faq5Question: 'What is the single most expensive hidden cost?',
    faq5Answer:
      'The valuation discount at exit. The other costs are paid in cash and time, which are recoverable. The exit discount is paid in a one-time event that crystallizes the cost of every quarter you stayed in founder-led sales. It is also the only one of the five hidden costs you cannot fix retroactively — you cannot install a sales system the week before the buyer arrives. The fix has to be in place long enough to show in the financials. That is why the founders who exit best are the ones who started building the machine two to three years before they sold.',

    // CTA
    ctaHeadline: 'Stop Paying the Hidden Bill',
    ctaDescription:
      'In 30 minutes I can give you the actual annual cost of your current founder-led sales operation — opportunity cost, pipeline risk, hiring tax, and exit-valuation discount — and outline exactly what it would take to install the system that makes it stop.',
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
