'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoRevenueUnpredictableMonthly'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function RevenueUnpredictableMonthlyPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', 'Unpredictable monthly revenue is not a market problem — it is a system problem. Lumpy revenue means lumpy pipeline, and lumpy pipeline means a broken or missing sales operating system.'),
    v('takeaway2', 'The real causes are structural: no qualification discipline, no prospecting cadence, a few deals carrying the whole forecast, and a founder who is still the pipeline. None of them are solved by "closing harder."'),
    v('takeaway3', 'Revenue fluctuation is measurable. Once you can see it — pipeline coverage, stage conversion, deal velocity, concentration risk — you can engineer it down.'),
    v('takeaway4', 'Predictable revenue is built, not hoped for. The fix is a documented playbook, a CRM that tells the truth, and a weekly rhythm that surfaces problems before they hit the bank statement.'),
    v('takeaway5', 'A Fractional Sales Leader can install the full system in 60 to 90 days at roughly 25% of the cost of a full-time VP — and without betting a year of runway on a single hire.'),
  ]

  const causes = [
    {
      number: '01',
      title: v('cause1Title', 'Your Pipeline Is Hero-Dependent'),
      detail: v('cause1Detail', "Almost every $1M–$10M ARR business with unpredictable revenue has the same root cause: the founder is the pipeline. New deals enter the system because the founder introduced them, referred them, or personally chased them down. When the founder is in back-to-back meetings, traveling, closing existing deals, or just tired, new pipeline stops being created. Four weeks later, the top of the funnel is empty, and six weeks after that the empty funnel becomes empty revenue. The revenue roller coaster is not a market trend — it is a direct reflection of which weeks the founder had time to prospect."),
      outcome: v('cause1Outcome', 'A prospecting cadence that runs whether the founder is in town or not — so top-of-funnel volume stops correlating with founder calendar availability.'),
    },
    {
      number: '02',
      title: v('cause2Title', 'Deals Are Not Actually Qualified'),
      detail: v('cause2Detail', "Without written qualification criteria, every deal in the CRM gets treated as real. A prospect replies to an email and the deal gets marked \"Proposal Sent.\" A decision-maker goes quiet and the deal stays open because no one is sure it is dead. The pipeline fills with optimism, the forecast is built on that optimism, and one bad week of \"no-decisions\" and silent deals collapses the whole month. This is why strong-looking pipelines produce weak months — the pipeline was never actually qualified. You were measuring activity, not commitment."),
      outcome: v('cause2Outcome', 'Written qualification criteria enforced as required CRM fields — so the pipeline only shows deals the buyer has actually committed to.'),
    },
    {
      number: '03',
      title: v('cause3Title', 'One or Two Accounts Carry the Whole Month'),
      detail: v('cause3Detail', "When a $40K deal lands, the month is a win. When it slips to next quarter, the month is a disaster. That is concentration risk, and it shows up everywhere in the $1M–$10M range because the deals are large enough to move the P&L and rare enough to dominate the forecast. If three deals represent 60% of next month's revenue, you do not have a forecast — you have three coin flips. Flip all three and the month is extraordinary. Miss two and the month is a layoff conversation. Predictability requires a wider base of smaller, repeatable deals — not a shrinking handful of big ones."),
      outcome: v('cause3Outcome', 'A pipeline wide enough that no single deal slipping can break the month — the cure for concentration risk is volume, not heroics.'),
    },
    {
      number: '04',
      title: v('cause4Title', 'The Forecast Is a Feeling, Not a Model'),
      detail: v('cause4Detail', "Ask ten founders what their forecast is built on and nine will describe a gut check: \"We think these deals will close.\" That is not a forecast — that is a wish list. A real forecast is a model: pipeline coverage ratio, stage conversion rates, average deal cycle time, average deal size. Multiply those four numbers against the pipeline and you get a statistical expectation, not an emotional one. Without the model, the CFO sees revenue bounce ±40% and nobody can explain why. With the model, the bounce compresses to ±10% and the exceptions are explainable the week they happen."),
      outcome: v('cause4Outcome', 'A four-variable forecast model that survives board scrutiny — and a weekly review that catches deviations before they become quarterly misses.'),
    },
    {
      number: '05',
      title: v('cause5Title', 'Nobody Owns the Weekly Rhythm'),
      detail: v('cause5Detail', "Unpredictability compounds because no one is in the room, every week, asking the uncomfortable questions. Why did this deal slip? What did the buyer actually say? Where is pipeline coverage for next quarter? Which reps are below activity and why? Without that cadence, problems are discovered the day the month closes — and by then, they are outcomes, not inputs. A standing weekly pipeline review, owned by someone accountable, is the single highest-leverage habit for crushing monthly revenue volatility. It is also the first thing founders drop when they get busy."),
      outcome: v('cause5Outcome', 'A weekly pipeline review that never gets cancelled — where problems surface as inputs to change, not as excuses after the quarter ends.'),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Top-of-funnel volume swings by 60% month to month'),
      withIt: v('compare1With', 'Prospecting cadence produces consistent weekly activity'),
    },
    {
      without: v('compare2Without', 'Pipeline looks strong but half the deals never close'),
      withIt: v('compare2With', 'Every deal meets written qualification criteria before it counts'),
    },
    {
      without: v('compare3Without', 'Three deals represent most of next month — any slip kills the month'),
      withIt: v('compare3With', 'Wide pipeline base — no single deal can break the forecast'),
    },
    {
      without: v('compare4Without', 'Forecast accuracy swings ±40% with no explanation'),
      withIt: v('compare4With', 'Forecast accuracy holds within ±10% — deviations are traceable'),
    },
    {
      without: v('compare5Without', 'Founder only sees problems after the month closes'),
      withIt: v('compare5With', 'Weekly pipeline review catches issues as inputs, not outcomes'),
    },
    {
      without: v('compare6Without', 'Revenue feels like the weather — hope it is sunny next month'),
      withIt: v('compare6With', 'Revenue is engineered — the inputs determine the output'),
    },
  ]

  const diagnosticSteps = [
    {
      number: '01',
      title: v('diag1Title', 'Measure the Actual Volatility'),
      detail: v('diag1Detail', "Pull the last 12 months of booked revenue. Compute the standard deviation and the ratio between your best month and worst month. A healthy B2B business at this stage runs within a 1.5x spread top-to-bottom. If yours is 3x or more, the problem is structural — not seasonal, not market-driven, not bad luck. You cannot fix what you have not measured, and most founders have never actually put a number on the volatility they are living with."),
    },
    {
      number: '02',
      title: v('diag2Title', 'Audit the Pipeline Against Reality'),
      detail: v('diag2Detail', "For every deal marked \"committed\" or \"best case\" in the current month, write down in one sentence what the buyer actually said — in their words, not the rep's. If you cannot, the deal is not real. This exercise typically removes 30 to 50% of the pipeline on first pass. It hurts, but the pipeline you are left with is a pipeline you can forecast against. The other 30–50% was noise that was inflating the numbers and guaranteeing next month's surprise."),
    },
    {
      number: '03',
      title: v('diag3Title', 'Install the Four Inputs'),
      detail: v('diag3Detail', "Predictable revenue requires four tracked inputs, measured weekly: new opportunities created (top-of-funnel health), stage conversion rates (pipeline quality), average deal cycle time (velocity), and pipeline coverage for the next two quarters (forward coverage). You do not need more data — you need these four. Build a one-page dashboard. Review it every Monday. Within 90 days, the numbers stabilize and so does revenue, because the inputs are now under management rather than under observation."),
    },
  ]

  const defaultFaqs = [
    {
      q: 'What are revenue fluctuations — and why do B2B companies experience them?',
      a: 'Revenue fluctuations are month-to-month swings in booked revenue that exceed what your deal cycle and market conditions alone would predict. In B2B companies at $1M–$10M ARR, the fluctuations are almost always driven by internal sales-system issues — not external market forces. The typical causes: a hero-dependent pipeline where the founder is the only real rainmaker, deals that look qualified in the CRM but were never actually qualified against real criteria, dangerous deal concentration (a few big accounts carrying the month), and a forecast built on gut feel instead of a model. When you fix those four inputs, the fluctuation compresses to a narrow, explainable band.',
    },
    {
      q: 'Is unpredictable revenue just normal for small B2B companies?',
      a: 'Some volatility is normal — deal sizes are large and deal counts are small, so one deal slipping matters. But the kind of volatility most founders describe — a record month followed by a near-zero month followed by another record — is not normal. It is a symptom of a missing sales operating system. Companies that have installed playbook, qualification, pipeline discipline, and a weekly cadence run within a 1.5x spread top-to-bottom. Companies without those run 3x, 5x, or worse. The volatility is a business-model signal, not a market signal.',
    },
    {
      q: 'How fast can I actually make my revenue predictable?',
      a: 'Measurable improvement shows up in 30 to 45 days once the four inputs (qualification criteria, prospecting cadence, pipeline coverage, weekly review) are in place. Full stabilization — where you can forecast within ±10% and the board stops asking what happened — typically takes 60 to 90 days with a Fractional Sales Leader running the installation. The reason it is that fast: the data is already in your CRM. The work is applying discipline to the data you already have, not collecting new data.',
    },
    {
      q: 'Do I need to hire a full-time VP of Sales to fix this?',
      a: 'Almost never at $1M–$10M ARR. A full-time VP is a $400K commitment with a 6-month ramp and a ~70% failure rate in the first 18 months. You do not need a new headcount to fix forecast volatility — you need someone who has installed this system ten times before, who can do it without a learning curve, and who can hand it off to you when it is running. That is what a Fractional Sales Leader delivers: the senior operator without the senior payroll.',
    },
    {
      q: "What is the single highest-leverage thing I can do this week to stabilize revenue?",
      a: 'Run a true qualification audit on every deal in your current-month commit list. For each one, write down in one sentence — in the buyer\'s exact words — what they have actually committed to. If you cannot, remove the deal from commit. That single exercise typically removes 30–50% of the pipeline that was inflating your forecast, and it gives you an honest baseline to manage from. Everything else (cadence, coverage, model) builds on top of that honest baseline.',
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
        headline: 'Why Does My Revenue Feel Unpredictable Month to Month?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/why-does-my-revenue-feel-unpredictable-month-to-month',
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
              {v('heroTag', 'Revenue Predictability Diagnostic')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Why Does My Revenue Feel')}
              <span className="block text-blue-400">{v('heroAccent', 'Unpredictable Month to Month?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'What Are Revenue Fluctuations?')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders watching revenue swing between record months and empty ones. The volatility is not the market — it is a missing sales system. Here is the diagnosis, and the fix.")}
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

      {/* Five Causes */}
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
              {v('sectionCausesHeading', 'The Five Structural Causes of Unpredictable Revenue')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCausesSubheading', 'None of them are "the market." All of them are fixable — and none of them require a new VP hire.')}
            </motion.p>
            <div className="space-y-8">
              {causes.map((item, i) => (
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
                    <span className="font-bold text-blue-800">The Fix: </span>
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
              {v('seoPara1', "Monthly revenue volatility is the single most common complaint we hear from founders between $1M and $10M in ARR. It feels like a market problem — hot months, cold months, deals going sideways for \"reasons.\" It is almost never a market problem. It is a sales operating system problem. When the founder is the top of the funnel, the closer, and the forecaster all at once, monthly output correlates directly with how many hours the founder spent selling that month. That is not a business — it is a talent-dependent revenue engine where the talent is also running the company.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The stable version of this looks different. Revenue in a company with a real sales system is the downstream output of four measurable inputs: opportunity creation, stage conversion, cycle time, and forward pipeline coverage. If you want the full picture of what a real sales system contains and how it gets built in 60–90 days, read")}{' '}
              <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How to Build a Sales System Without Hiring a Full-Time VP of Sales →
              </Link>
              {v('seoPara2b', ". And if the underlying issue is that every deal still routes through you personally, start with")}{' '}
              <Link href="/why-does-my-sales-pipeline-depend-on-me" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Why Does My Sales Pipeline Depend Entirely on Me? →
              </Link>
              {v('seoPara2c', ". Predictability is built — not negotiated, not hoped for.")}
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
              {v('sectionCompareHeading', 'Lumpy Revenue vs. Engineered Revenue')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'Same market. Same product. Same deal sizes. The difference is whether the inputs are under management.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Lumpy Revenue (No System)')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Engineered Revenue (With System)')}
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

      {/* Diagnostic steps */}
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
              {v('sectionDiagnosticHeading', 'A Three-Step Diagnostic You Can Run This Week')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionDiagnosticSubheading', 'Before you install a system, find out where the volatility is actually coming from. You cannot fix what you cannot measure.')}
            </motion.p>
            <div className="space-y-8">
              {diagnosticSteps.map((item, i) => (
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
              {v('aboutBio2', "I install the sales infrastructure — playbook, pipeline discipline, qualification criteria, and weekly cadence — that turns unpredictable monthly revenue into a forecast that holds within ±10%. Most engagements stabilize the numbers in 60 to 90 days and hand off a system that runs without me.")}
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
                <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales System Without Hiring a Full-Time VP of Sales →
                </Link>
              </li>
              <li>
                <Link href="/why-does-my-sales-pipeline-depend-on-me" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Why Does My Sales Pipeline Depend Entirely on Me? →
                </Link>
              </li>
              <li>
                <Link href="/sales-forecasting-for-small-business" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Sales Forecasting for Small Business: How to Build a Forecast That Holds →
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
              {v('ctaHeadline', 'End the Revenue Roller Coaster')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can diagnose exactly where your monthly revenue volatility is coming from, which of the five causes is driving it, and what it would take to stabilize the forecast in 60 to 90 days — without a $400K VP hire.")}
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
