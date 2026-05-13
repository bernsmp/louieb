'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesCompPlanDesign'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalesCompPlanDesignPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', 'A comp plan is built backwards from quota and Ideal Customer Profile — not the other way around. If the quota is not real, the comp plan is just a hope spreadsheet.'),
    v('takeaway2', 'The B2B closing-rep standard is 50/50 base-to-variable. Above 70/30 you over-pay for activity; below 30/70 you create desperate reps who close the wrong deals.'),
    v('takeaway3', 'Behavior follows commission. If you pay on revenue, you get revenue. If you pay on margin, you get margin. If you pay on new logos, you get new logos. Pick one outcome — and stop accidentally paying for the wrong one.'),
    v('takeaway4', 'The single best rule of thumb at $1M–$10M ARR: a rep at 100% of plan should generate roughly 5x their OTE in booked revenue. If your all-in sales cost is north of 20% of revenue, the math is broken before you start.'),
    v('takeaway5', 'A good comp plan is the last thing you build, not the first. Without a written quota, an enforced ICP, and a CRM that can measure outcomes, no comp plan in the world will fix the business.'),
  ]

  const components = [
    {
      number: '01',
      title: v('comp1Title', 'The Base-to-Variable Split'),
      detail: v('comp1Detail', "The first lever in any B2B comp plan is the ratio of guaranteed base salary to at-risk variable. For a closing role at $1M–$10M ARR, the standard is 50/50 — half the OTE is paid as base, half is earned through commission and bonus. Founders frequently break this rule in both directions and pay for it. Go too heavy on base (70/30, 80/20) and reps coast — there is no real consequence to a soft quarter. Go too heavy on variable (30/70, all commission) and reps panic — they close deals that should never have closed, discount to win, and burn out inside a year. 50/50 is the discipline. It pays enough base to keep good reps alive through a ramp or a slow quarter, and enough variable to make winning matter."),
      outcome: v('comp1Outcome', 'A pay structure where the rep can survive the bad months but cannot get rich on the good ones without actually closing — exactly the incentive you want.'),
    },
    {
      number: '02',
      title: v('comp2Title', 'Quota Math That Holds Up to Scrutiny'),
      detail: v('comp2Detail', "Comp is downstream of quota. If the number is wrong, the plan is broken. A real quota is built from three inputs: the OTE you are paying the rep, the territory or lead volume that rep will receive, and the historical close rates by stage from your own CRM. The rule of thumb is that a rep at 100% of plan should generate roughly 5x their OTE in booked revenue. A rep on a $200K OTE should be on a $1M quota. If you cannot defend the quota with territory math and conversion data, your reps cannot defend the number when they miss — and you will end up renegotiating the plan in Q3."),
      outcome: v('comp2Outcome', 'A quota every rep accepts as fair on day one — and a comp plan you do not have to rewrite halfway through the year.'),
    },
    {
      number: '03',
      title: v('comp3Title', 'The Trigger Event: What You Pay On'),
      detail: v('comp3Detail', 'Every comp plan has a single moment that triggers payout — and choosing the wrong one is one of the most expensive mistakes founders make. The three options: pay on signed contract, pay on invoice issued, or pay on cash collected. Pay on signed contract and reps will sign anything, including deals that get clawed back at the first renewal. Pay on cash and reps stop closing the deals where collections are slow. Most $1M–$10M ARR businesses end up paying a split — 50% at signature, 50% on cash collected within 90 days — which keeps the rep motivated to close and motivated to close the right customers.'),
      outcome: v('comp3Outcome', 'A commission timing rule that pays reps for revenue you actually got — not revenue you hoped to get when the deal closed.'),
    },
    {
      number: '04',
      title: v('comp4Title', 'Accelerators, Decelerators, and Caps'),
      detail: v('comp4Detail', "A flat commission percentage is the laziest possible comp plan. It pays the same for a rep at 60% of quota as it does for a rep at 160%. A real plan uses accelerators — a higher commission rate above quota — to reward overperformance, and decelerators — a lower rate below a threshold — to make missing quota painful. A 1.5x accelerator above 100% is standard. A 0.5x decelerator below 60% is common. Almost no plan should be capped. Capping commissions tells your best rep that there is a ceiling on what they can earn — and the moment they hit it, they stop selling for the rest of the year. The only ceiling should be the one your company cannot afford."),
      outcome: v('comp4Outcome', 'A plan that pays top performers like top performers, makes underperformance financially uncomfortable, and never penalizes a rep for being too good at their job.'),
    },
    {
      number: '05',
      title: v('comp5Title', 'The Non-Cash Levers: SPIFFs, MBOs, and Team Bonuses'),
      detail: v('comp5Detail', "Cash commission is the engine of the plan, but it is not the only lever. SPIFFs (Sales Performance Incentive Funds) are short-term cash bonuses tied to specific behaviors you want right now — a new product launch, a strategic vertical, an underperforming SKU. MBOs (Management By Objectives) are quarterly bonuses tied to non-revenue outcomes — CRM hygiene, case study creation, pipeline coverage targets. Team bonuses are paid only when the entire team hits a collective number. Use these sparingly. Used well, they steer behavior in the direction the business needs this quarter without rewriting the whole plan. Used poorly, they confuse the rep and dilute the main commission engine."),
      outcome: v('comp5Outcome', 'A handful of surgical incentives — used only when the main plan needs reinforcement — that move specific behavior without breaking the core structure.'),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', '100% commission, no base — "real reps eat what they kill"'),
      withIt: v('compare1With', '50/50 base-to-variable split — reps survive ramps and slow quarters'),
    },
    {
      without: v('compare2Without', 'Quota is a number written in a board deck'),
      withIt: v('compare2With', 'Quota is built from territory math and CRM-driven close rates'),
    },
    {
      without: v('compare3Without', 'Commission paid the second a contract is signed'),
      withIt: v('compare3With', 'Split payout — 50% at signature, 50% on cash collected'),
    },
    {
      without: v('compare4Without', 'One flat percentage applied to every deal, every rep'),
      withIt: v('compare4With', 'Accelerators above quota, decelerators below the floor, no cap'),
    },
    {
      without: v('compare5Without', 'Same comp plan for hunters, farmers, and account managers'),
      withIt: v('compare5With', 'Distinct plans for new-logo, expansion, and renewal motions'),
    },
    {
      without: v('compare6Without', 'Plan rewritten mid-year when revenue is short'),
      withIt: v('compare6With', 'Plan locked for the full year — fix the rep, not the math'),
    },
  ]

  const buildPhases = [
    {
      number: '01',
      title: v('phase1Title', 'Lock the Quota Before You Touch the Comp Plan'),
      detail: v('phase1Detail', "You cannot design a comp plan against a quota that does not exist. Step one is to write the quota on paper, derive it from territory, lead volume, and last year's conversion data, and confirm it with the rep before a single commission percentage is discussed. A quota built in a vacuum will be argued every quarter. A quota built from the numbers in your own CRM is defensible — and a defensible quota is the foundation of a defensible comp plan."),
    },
    {
      number: '02',
      title: v('phase2Title', 'Set the OTE That Wins the Talent You Need'),
      detail: v('phase2Detail', "OTE — On-Target Earnings — is the total compensation a rep makes at 100% of plan. It is the single number a candidate uses to evaluate the role, and it has to be at or above market for the territory and the segment. For a B2B closing rep at $1M–$10M ARR, that is typically $150K to $250K OTE depending on deal size and geography. Lower than that and you will not attract anyone who has closed B2B deals before. Higher than that and you cannot afford the team you need to scale."),
    },
    {
      number: '03',
      title: v('phase3Title', 'Pick the Trigger and the Behavior It Rewards'),
      detail: v('phase3Detail', "Decide what you are paying for: bookings, revenue, gross margin, new logos, or expansion. Each one drives a different rep behavior. Founders frequently default to "pay on revenue" without thinking through the consequences — which is why their best rep keeps closing low-margin, hard-to-deliver deals. Choose the trigger that maps to what the business actually needs right now, write it into the plan, and resist the temptation to pay on multiple things simultaneously. Reps cannot optimize for three competing incentives. Pick one."),
    },
    {
      number: '04',
      title: v('phase4Title', 'Stress-Test the Plan With Last Year\'s Data'),
      detail: v('phase4Detail', "Before publishing the plan, run last year's actual deals through it. Would your top rep have earned more under the new plan than the old one? Would your bottom rep have starved? Is the cost of sales — total comp paid divided by total revenue closed — within your target range (typically 12% to 20% for B2B)? If a rep can hit 100% of plan and your business loses money on them, the plan is broken. If a rep cannot hit 100% under realistic conditions, the plan is also broken. Fix it on paper before you ship it to the team."),
    },
  ]

  const defaultFaqs = [
    {
      q: "What is a fair base-to-variable split for a B2B closing sales rep?",
      a: "For a closing role at $1M–$10M ARR, 50/50 is the standard — half the OTE paid as guaranteed base, half earned through commission and bonus. If your deal size is small and the cycle is short, a 60/40 split (more variable) can work. If the cycle is long and the deal complex, a 60/40 the other way (more base) is sometimes appropriate. But for most B2B founders, 50/50 is the right starting point and the right ending point. The reps you want will accept it. The reps who refuse it are usually the reps you do not want.",
    },
    {
      q: "Should I pay commission on signed contracts, invoiced revenue, or cash collected?",
      a: "Most $1M–$10M ARR companies pay a split: 50% of commission at contract signature, 50% on cash collected within 90 days. This keeps reps motivated to close and motivated to close customers who will actually pay. Paying 100% on signature creates clawback risk and rewards reps for deals that fall apart at the first renewal. Paying 100% on cash slows the engine — reps stop closing accounts where collections are slow. The split keeps both halves of the incentive intact.",
    },
    {
      q: "How do I know if my comp plan is over- or under-paying?",
      a: "Calculate your all-in cost of sales: total compensation paid divided by total revenue closed in the same period. For B2B at $1M–$10M ARR, you want that number between 12% and 20%. Above 20%, you are over-paying and the business cannot scale — every new rep makes the math worse. Below 10%, your reps are under-paid and you will lose them to a competitor that runs the math correctly. The right comp plan lands consistently inside that 12% to 20% window across reps and quarters.",
    },
    {
      q: "Should I cap commissions?",
      a: "Almost never. Capping commissions is one of the fastest ways to demotivate a top rep. The moment they hit the cap, they stop selling — and they tell every recruiter who calls that you cap commissions. The result is that your best people leave for an uncapped role at a competitor. The right structure is accelerators above quota, not caps. Yes, you will write a few big commission checks. That is the cost of having reps who consistently exceed quota — and it is the cheapest cost of growth you will ever pay.",
    },
    {
      q: "How often should I change the comp plan?",
      a: "Once a year, at most. The biggest mistake founders make is changing the plan mid-year when revenue is short — which signals to the team that the plan is negotiable, the quota is negotiable, and management is panicking. Lock the plan for the full fiscal year. If something is wrong, fix it in next year's plan. The only mid-year change that ever makes sense is adding a SPIFF to drive a specific short-term behavior — never restructuring the base, variable, or quota in the middle of the year.",
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
        headline: 'How Do I Design a Good Sales Comp Plan?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-do-i-design-a-good-sales-comp-plan',
        datePublished: '2026-05-13',
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
              {v('heroTag', 'Sales Compensation Design')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Do I Design')}
              <span className="block text-blue-400">{v('heroAccent', 'a Good Sales Comp Plan?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'How to Put Together a Sales Comp Plan That Motivates Your Sales Team')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders building their first real sales team. A good comp plan is the last thing you build — not the first. Here is the structure that motivates reps, protects margin, and stops paying for the wrong behavior.")}
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
                href="/how-to-build-sales-compensation-plan"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                The full guide to building a sales comp plan →
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

      {/* The 5 Components */}
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
              {v('sectionComponentsHeading', 'The 5 Components of a Good Sales Comp Plan')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComponentsSubheading', 'Skip any one of these and the plan will pay you to lose money. All five are non-negotiable.')}
            </motion.p>
            <div className="space-y-8">
              {components.map((item, i) => (
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
                    <span className="font-bold text-blue-800">What You Get: </span>
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
              {v('seoPara1', "Most B2B founders at $1M–$10M ARR design their first comp plan in a panic — they have just hired (or are about to hire) their first salesperson, the candidate asks what the comp structure looks like, and the founder makes something up on the spot. It usually sounds generous, the rep accepts, and six months later the founder is paying 30% of revenue in comp on deals that are barely profitable, with a rep who has no real accountability because the quota was never real. The comp plan was never the problem. The quota was. The Ideal Customer Profile was. The pipeline discipline was. Comp was the symptom.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "A good comp plan is the last thing you build, not the first — and it only works when the quota underneath it is defensible. If you have not yet locked the math, start with")}{' '}
              <Link href="/how-to-set-sales-quota" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How to Set Quota for a Small Sales Team →
              </Link>
              {v('seoPara2b', ". And because a comp plan without enforced accountability is just a wishlist, pair it with")}{' '}
              <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                The Sales Accountability Document →
              </Link>
              {v('seoPara2c', " — the written agreement that turns the comp plan into a real management instrument.")}
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
              {v('sectionCompareHeading', 'A Bad Comp Plan vs. a Good One')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The structure is the difference. A bad plan rewards activity and hopes for revenue. A good plan pays for the outcome you actually want.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Bad Comp Plan')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Good Comp Plan')}
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

      {/* Build Sequence — 4 phases */}
      <section className="bg-white py-16 md:py-20">
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
              {v('sectionSequenceHeading', 'The 4-Step Sequence to Build a Comp Plan That Works')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionSequenceSubheading', 'The order matters more than any individual piece. Most founders try to build the comp plan first — and end up paying for behavior the business does not need.')}
            </motion.p>
            <div className="space-y-8">
              {buildPhases.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="text-neutral-700">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-white p-8"
          >
            <motion.h2 variants={itemVariants} className="mb-4 font-serif text-2xl font-bold text-neutral-900">
              About Louie Bernstein
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-3 text-neutral-700">
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I have designed and rebuilt dozens of comp plans for $1M–$10M ARR founders. Every one starts the same way: lock the quota, set the OTE, pick the trigger, and stress-test the math with last year's data before a single rep sees the plan. Comp is not the engine of a sales team — it is the steering wheel. Build it last, and build it carefully.")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
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
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
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
      <section className="bg-neutral-50 py-12 md:py-14">
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
                <Link href="/how-to-build-sales-compensation-plan" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales Compensation Plan →
                </Link>
              </li>
              <li>
                <Link href="/how-to-set-sales-quota" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Set Quota for a Small Sales Team →
                </Link>
              </li>
              <li>
                <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Sales Accountability Document: Why Every Team Needs One →
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
              {v('ctaHeadline', 'Design a Comp Plan That Pays for the Behavior You Actually Want')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map what your current comp plan is actually rewarding, identify where the math is broken, and outline what a defensible plan would look like for your team — base, variable, quota, trigger, and accelerators.")}
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
