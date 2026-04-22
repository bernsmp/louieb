'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHiddenCostsFounderLedSales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HiddenCostsFounderLedSalesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', 'Founder-led sales is not free. It is the most expensive sales channel you have — you just are not invoicing yourself for it.'),
    v('takeaway2', 'The five hidden costs: founder opportunity cost, pipeline concentration risk, the hiring tax of broken onboarding, the exit-valuation discount, and the strategic blindness tax.'),
    v('takeaway3', 'A typical $5M ARR founder spends 30–50% of every week in active selling — $200K–$400K of misallocated executive time per year, before counting any other cost.'),
    v('takeaway4', 'Acquirers and investors apply a 20–40% valuation discount to revenue that depends on a single human. Every quarter you stay in founder-led sales, that discount compounds.'),
    v('takeaway5', 'The exit is not "hire a VP." It is to install a sales system — playbook, pipeline, qualification, accountability — that runs without you. A Fractional Sales Leader builds that in 60 to 90 days.'),
  ]

  const costs = [
    {
      number: '01',
      title: v('cost1Title', 'The Opportunity Cost of Founder Time'),
      detail: v('cost1Detail', "Most $1M–$10M founders spend between 30% and 50% of every week in active selling — discovery calls, second meetings, proposals, follow-ups, the deal that \"only I can close.\" Price your time at $200 to $400 an hour (the realistic loaded rate for a founder running a venture-stage company) and the math is brutal. Twenty hours a week of selling is roughly $200K to $400K a year of founder labor. That is the same money the company would pay for the VP of Sales it does not yet have — except the founder is also expected to run the business, raise the round, and ship the product. The cost is invisible because it never appears on the P&L. It only shows up as the things that did not get done."),
      outcome: v('cost1Outcome', 'Twenty hours a week back. The strategic work — partnerships, fundraising, the next product line — gets done by the only person who can do it.'),
    },
    {
      number: '02',
      title: v('cost2Title', 'The Pipeline Concentration Risk'),
      detail: v('cost2Detail', 'When the founder is the best (or only) closer, the entire revenue pipeline sits on a single point of failure. A bad month for the founder — a board meeting that runs long, a family event, a flu — produces a bad month for the company. Investors and boards look for diversification; they count how many revenue dollars depend on one human being. If the answer is "most of them," they price that risk into your next round. Worse, the forecast becomes a calendar, not a model. You are not predicting revenue; you are predicting your own availability. The CFO cannot run a business on that — and neither can a buyer doing diligence.'),
      outcome: v('cost2Outcome', "A pipeline that closes deals while you sleep — and a forecast built on stage conversion data, not the founder's calendar."),
    },
    {
      number: '03',
      title: v('cost3Title', 'The Hiring Tax (Failed Reps and Broken Onboarding)'),
      detail: v('cost3Detail', 'Founders eventually try to hire out of the problem. They bring in a salesperson. The salesperson has no playbook to run, no qualification criteria to enforce, no documented sales motion to follow — just the founder saying "watch how I do it." The rep flounders for six to nine months, churns or gets fired, and the founder is back in the chair. The all-in cost of a failed first sales hire at this stage runs $150K to $300K when you include base, recruiting fees, commission paid against unconverted pipeline, and the deals that did not close during the ramp. Most $1M–$10M founders pay this tax at least twice before they realize it is the system that is broken, not the people.'),
      outcome: v('cost3Outcome', 'A documented playbook and ramp plan that gets a new rep producing pipeline in 60 to 90 days — instead of churning out before they ever close.'),
    },
    {
      number: '04',
      title: v('cost4Title', 'The Exit-Valuation Discount'),
      detail: v('cost4Detail', 'Acquirers, private equity buyers, and Series B-and-beyond investors all run the same diligence test: "What happens to revenue if the founder leaves?" If the answer is "it falls off a cliff," they apply a discount. The standard range is 20 to 40 percent — sometimes more for businesses with concentrated customer relationships. On a $5M ARR business sold at a 4x revenue multiple, a 30% founder-dependency discount is six million dollars erased from the sale price. That is the single largest hidden cost of founder-led sales, and it is the one founders see only when it is too late to fix. The fix is years of evidence that the company sells without the founder in the room — not a slide in the pitch deck saying it does.'),
      outcome: v('cost4Outcome', 'A clean diligence story. Revenue that survives the founder leaving — and a multiple that reflects it.'),
    },
    {
      number: '05',
      title: v('cost5Title', 'The Strategic Blindness Tax'),
      detail: v('cost5Detail', 'The founder who is on every sales call stops seeing the market. They are too deep in individual deals to spot patterns across the pipeline — the new objection that just emerged, the competitor who started winning on price, the segment that is suddenly going dark. A sales team — even a small one — running a documented process produces signal: win-loss data, objection trends, segment performance, pricing pressure. The founder of a founder-led shop does not have that signal because they are the system. They make strategic decisions on instinct and small samples, and they miss the shift until it is in the quarterly numbers.'),
      outcome: v('cost5Outcome', 'A weekly view of pipeline patterns, win-loss themes, and segment trends — so strategic moves are based on data instead of the last call you took.'),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', '30–50% of founder hours absorbed by active selling each week'),
      withIt: v('compare1With', 'Founder time refocused on product, partnerships, and fundraising'),
    },
    {
      without: v('compare2Without', "Forecast is the founder's calendar — investors discount it accordingly"),
      withIt: v('compare2With', 'Forecast built on stage conversion data the board can trust'),
    },
    {
      without: v('compare3Without', 'First sales hires churn in 6–9 months for $150K–$300K all-in'),
      withIt: v('compare3With', 'New reps producing pipeline in 60–90 days against a documented playbook'),
    },
    {
      without: v('compare4Without', 'Acquirers apply a 20–40% valuation discount for founder dependency'),
      withIt: v('compare4With', "Diligence story shows revenue surviving the founder's exit"),
    },
    {
      without: v('compare5Without', 'Founder too deep in deals to spot market or pipeline patterns'),
      withIt: v('compare5With', 'Weekly signal on objections, win-loss themes, and segment trends'),
    },
    {
      without: v('compare6Without', 'The cost is invisible until it is too large to fix in one quarter'),
      withIt: v('compare6With', 'The cost is contractual, capped, and disappears at end of engagement'),
    },
  ]

  const defaultFaqs = [
    {
      q: 'What does founder-led sales actually cost a $5M ARR company per year?',
      a: 'Add three line items the P&L does not show. First, founder labor: 20 to 30 hours a week of active selling at a realistic founder loaded rate of $200 to $400 an hour is $200K to $400K a year. Second, the failed sales hire most $5M founders make at least once: $150K to $300K all-in for base, commission, recruiting, and unrecovered pipeline. Third, the compounding valuation discount: 20 to 40 percent applied to founder-dependent revenue at exit. The honest annual run-rate cost is $600K to over $1M — most of it invisible until it is paid.',
    },
    {
      q: 'How does founder-led sales hurt my valuation at exit?',
      a: "Acquirers and Series B-plus investors run a single test in diligence: what happens to revenue if the founder leaves? If the answer is 'most of it goes with them,' they apply a discount of 20 to 40 percent to your enterprise value, sometimes more. On a $5M ARR business sold at a 4x revenue multiple, a 30% founder-dependency discount is roughly six million dollars erased from the sale price. The fix is documented evidence — a year or more of it — that the company sells without you in the room.",
    },
    {
      q: 'Is it possible to stay in some sales and still scale?',
      a: 'Yes — if you choose your role carefully and on purpose. Founders should stay involved in the largest strategic accounts, in the discovery for new market segments, and in any deal that establishes pricing precedent for the company. They should be out of every other deal. The mistake is not founder involvement; it is founder dependency. The line is whether the rep can finish the deal if you disappear for two weeks. If the answer is no, you have not delegated — you are still the system.',
    },
    {
      q: 'How long does it take to start reclaiming the founder-time cost?',
      a: "With a Fractional Sales Leader running the engagement, most founders see meaningful reclaimed hours by the end of month one — when the playbook is in draft and the qualification criteria start filtering deals before they get to the founder's calendar. By day 60, the CRM and pipeline discipline are doing the work the founder was doing manually. By day 90, the first deals are closing without the founder in the room. The founder's calendar typically opens up by 10 to 15 hours a week in the first quarter.",
    },
    {
      q: 'What is the single most expensive hidden cost?',
      a: 'The valuation discount at exit. The other costs are paid in cash and time, which are recoverable. The exit discount is paid in a one-time event that crystallizes the cost of every quarter you stayed in founder-led sales. It is also the only one of the five hidden costs you cannot fix retroactively — you cannot install a sales system the week before the buyer arrives. The fix has to be in place long enough to show in the financials. That is why the founders who exit best are the ones who started building the machine two to three years before they sold.',
    },
  ]

  const displayFaqs = cmsfaqs(5, defaultFaqs)

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: displayFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'Article',
        headline: 'What Are the Hidden Costs of Founder-Led Sales?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/what-are-the-hidden-costs-of-founder-led-sales',
        datePublished: '2026-04-22',
        publisher: {
          '@type': 'Organization',
          name: 'Louie Bernstein',
          logo: { '@type': 'ImageObject', url: 'https://louiebernstein.com/logo/og-image.png' },
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#1d4ed8" fillColor="rgba(29,78,216,0.3)" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400"
            >
              {v('heroTag', 'Founder-Led Sales: The True Cost')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Are the Hidden Costs')}
              <span className="block text-blue-400">{v('heroAccent', 'of Founder-Led Sales?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'And How Do I Keep From Getting Surprised?')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders who think founder-led sales is free because it is not on the P&L. The real bill comes due in opportunity cost, pipeline risk, valuation discounts, and failed hires. Here is the math — and the way out.")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-700 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-800"
              >
                Talk to Louie — 30 Minutes
              </Link>
              <Link
                href="/fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What a Fractional Sales Leader actually does →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-sm font-bold uppercase tracking-widest text-blue-800"
            >
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              {takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-neutral-700">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* The Five Hidden Costs */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionCostsHeading', 'The Five Hidden Costs of Founder-Led Sales')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCostsSubheading', 'None of these line items show up on your P&L. All five get paid — in cash, equity, or both.')}
            </motion.p>
            <div className="space-y-8">
              {costs.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">What You Reclaim: </span>
                    <span className="text-blue-800">{item.outcome}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraphs */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara1', "The trap with founder-led sales is that it does not look expensive. There is no contract to sign, no salary to approve, no benefits package to budget for. The cost is paid in things that never appear on a financial statement: the strategic project that slipped a quarter, the rep who churned at month seven, the discount the acquirer applied at exit, the segment your team did not see going dark until revenue dropped. None of those line items hit the P&L — but every one of them is paid for in cash, equity, or both.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', 'If you want to understand exactly what founder-led sales is doing to your business — and the structural reasons it eventually breaks — start with')}{' '}
              <Link href="/what-is-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What Is Founder-Led Sales — And Why It Eventually Breaks →
              </Link>
              {v('seoPara2b', '. And if you are already past the point of wanting out and need a concrete way through, read')}{' '}
              <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How to Get Out of Founder-Led Sales →
              </Link>
              {v('seoPara2c', '. The cost of staying compounds every quarter. The cost of leaving is fixed and finite.')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionCompareHeading', 'What It Costs You vs. What You Reclaim')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The left column is the bill you are paying right now. The right column is what changes when the system is in place.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Founder-Led Sales (What It Costs You)')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Sales System Installed (What You Reclaim)')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.without}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.withIt}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Economics callout — the actual annual tab */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionEconomicsHeading', 'The Real Annual Tab — When You Add It All Up')}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-lg border border-red-100 bg-red-50 p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-700">
                  {v('econLeftLabel', 'Founder-Led Sales (Annual)')}
                </p>
                <p className="mb-2 font-serif text-3xl font-bold text-neutral-900">
                  {v('econLeftCost', '$600K – $1M+ / year')}
                </p>
                <p className="text-sm text-neutral-700">
                  {v('econLeftDetail', 'Founder labor at $200K–$400K, one failed sales hire at $150K–$300K, and a 20–40% valuation discount that compounds every quarter you stay. None of it shows on the P&L.')}
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-lg border border-blue-100 bg-blue-50 p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-800">
                  {v('econRightLabel', 'Fractional Sales Leader Engagement')}
                </p>
                <p className="mb-2 font-serif text-3xl font-bold text-neutral-900">
                  {v('econRightCost', '$72K – $168K / year')}
                </p>
                <p className="text-sm text-neutral-700">
                  {v('econRightDetail', 'A contracted, capped expense. Installs the system that ends the founder labor, fixes the failed-hire problem, and erases the valuation discount. Disappears when the engagement ends.')}
                </p>
              </motion.div>
            </div>
            <motion.p variants={itemVariants} className="mt-6 text-center text-neutral-700">
              {v('econSummary', 'Founder-led sales feels free because nobody invoices for it. The real bill — six figures or more, every year, plus a multi-million-dollar exit discount — gets paid by the founder, the equity, or both. A fractional engagement converts that hidden, compounding cost into a fixed, finite one.')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-8"
          >
            <motion.h2 variants={itemVariants} className="mb-4 font-serif text-2xl font-bold text-neutral-900">
              About Louie Bernstein
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-3 text-neutral-700">
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', 'I help $1M–$10M ARR founders see — and stop paying — the hidden costs of founder-led sales. The work is concrete: a playbook, a working pipeline, qualification criteria, a written accountability structure, and the first scalable hires. Most engagements install the system in 60 to 90 days and hand off a sales operation that produces revenue without the founder in the room.')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {displayFaqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="mb-6 font-serif text-xl font-bold text-neutral-900">
              Related Reading
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              <li>
                <Link href="/what-is-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is Founder-Led Sales — And Why It Eventually Breaks →
                </Link>
              </li>
              <li>
                <Link href="/why-does-my-revenue-feel-unpredictable-month-to-month" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Why Does My Revenue Feel Unpredictable Month to Month? →
                </Link>
              </li>
              <li>
                <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Get Out of Founder-Led Sales →
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-10 text-white md:py-14">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl"
            >
              {v('ctaHeadline', 'Stop Paying the Hidden Bill')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', 'In 30 minutes I can give you the actual annual cost of your current founder-led sales operation — opportunity cost, pipeline risk, hiring tax, and exit-valuation discount — and outline exactly what it would take to install the system that makes it stop.')}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                Book a Free 30-Minute Call
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
