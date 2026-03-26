'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesKPIsSmallBusiness'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const kpis = [
  {
    number: '01',
    title: 'Pipeline Coverage Ratio',
    category: 'Leading Indicator',
    detail: 'Pipeline coverage ratio is the ratio of your total qualified pipeline value to your revenue target for the period. The standard benchmark is 3×–4× — meaning if you need $500K in new revenue this quarter, you need $1.5M–$2M in qualified pipeline. Below 3× and you have a pipeline generation problem. Above 4× doesn\'t mean you\'re safe — it often means your qualification criteria are too loose and you\'re carrying zombie deals.',
    benchmark: '3×–4× of quarterly revenue target',
  },
  {
    number: '02',
    title: 'Stage Conversion Rates',
    category: 'Leading Indicator',
    detail: 'Stage conversion rate measures the percentage of deals that advance from one pipeline stage to the next. This is the most diagnostic KPI in your stack — it shows exactly where deals are stalling. If 80% of deals move from Stage 1 to Stage 2 but only 20% move from Stage 2 to Stage 3, you have a qualification problem at Stage 2. If Stage 3 to close conversion is low, you likely have a pricing, champion, or timeline problem.',
    benchmark: 'Track separately for each stage transition — benchmarks vary by stage',
  },
  {
    number: '03',
    title: 'Average Sales Cycle Length',
    category: 'Leading Indicator',
    detail: 'Average sales cycle is the number of days from first qualified conversation to closed-won. This KPI drives your pipeline coverage math and your cash flow forecasting. If your average cycle is 90 days and you need to hit a target in 60 days, the deals entering pipeline today won\'t help. Most founders at $1M–$5M ARR are surprised by how long their real sales cycle is once they measure it — because memory compresses time and outliers distort the average.',
    benchmark: 'Measure median, not mean, to avoid outlier distortion',
  },
  {
    number: '04',
    title: 'Win Rate on Qualified Opportunities',
    category: 'Lagging Indicator',
    detail: 'Win rate is the percentage of qualified Stage 1 opportunities that close as won. The operative word is "qualified" — a win rate calculated against all pipeline including unqualified leads is meaningless. For a $1M–$10M ARR B2B business, a win rate of 20–30% on properly qualified pipeline is healthy. Below 15% usually signals an ICP problem (chasing the wrong buyers) or a process problem (losing at a specific stage). Above 40% can signal underpricing or an ICP that\'s too narrow.',
    benchmark: '20%–30% on qualified pipeline is healthy for most B2B companies',
  },
  {
    number: '05',
    title: 'Rep Ramp Time',
    category: 'Operational Indicator',
    detail: 'Rep ramp time is the number of days from a sales rep\'s start date to the first month they hit full quota. This KPI tells you how good your onboarding process is, how clear your playbook is, and how well you\'re hiring to your actual ICP. Industry benchmarks are 3–6 months for most B2B sales roles. If your ramp is consistently longer than 6 months, the problem is almost never the rep — it\'s a lack of documented process, unclear ICP, or insufficient coaching during ramp.',
    benchmark: '3–6 months to full quota; document the ramp schedule before hire',
  },
  {
    number: '06',
    title: 'Activity Ratios — Calls and Emails to Meetings',
    category: 'Leading Indicator',
    detail: 'Activity ratios measure how many outbound activities (calls, emails, LinkedIn touchpoints) produce one booked meeting. This is your outbound efficiency metric. If it takes 80 touches to book one meeting and your close rate is 25%, you know exactly how many activities your team needs to produce to hit the revenue target. Without this ratio, "more activity" is a direction, not a plan. With it, you can calculate whether your team has the capacity to hit the number.',
    benchmark: 'Varies by channel and ICP — measure your own baseline, then improve it quarterly',
  },
  {
    number: '07',
    title: 'Revenue Per Rep',
    category: 'Lagging Indicator',
    detail: 'Revenue per rep is total new revenue divided by the number of quota-carrying reps. This is the efficiency metric that tells you whether adding headcount makes sense. If each rep generates $400K in new ARR and your cost per rep (OTE + overhead) is $200K, you have a 2:1 revenue-to-cost ratio. Before adding a rep, know this number — and know whether the constraint on rep productivity is pipeline (not enough leads), process (not enough structure), or people (wrong hire).',
    benchmark: 'Varies by ACV and market — benchmark against your own trend, not industry averages',
  },
]

const vanityVsReal = [
  { vanity: 'Number of calls made', real: 'Call-to-meeting conversion rate' },
  { vanity: 'Total pipeline value', real: 'Qualified pipeline at 3× coverage ratio' },
  { vanity: 'Number of proposals sent', real: 'Proposal-to-close conversion rate' },
  { vanity: 'Meetings booked', real: 'Stage 1 to Stage 2 conversion rate' },
  { vanity: 'Revenue vs. last year', real: 'Revenue per rep vs. cost per rep' },
]

const faqs = [
  {
    q: 'Which KPI should I focus on first if I\'m starting from scratch?',
    a: 'Pipeline coverage ratio. It\'s the most immediate signal of whether you have enough fuel in the engine to hit your revenue target this quarter. If you\'re below 3× coverage, nothing else matters as much as generating more qualified opportunities. Once coverage is healthy, stage conversion rates become the most useful KPI — they show you exactly where in the process deals are stalling.',
  },
  {
    q: 'How do I set benchmarks when I have no historical data?',
    a: 'Start by tracking actuals for 90 days before setting targets. Pull every deal that entered your pipeline in the last 6 months and calculate the four core metrics: win rate, average cycle, stage conversion at each stage, and activity-to-meeting ratio. These become your baseline. Set your first targets at 10–15% improvement over baseline, not at industry benchmarks — benchmarks from companies with different ACVs, markets, and team sizes are largely irrelevant to your specific situation.',
  },
  {
    q: 'My team says the KPIs feel like micromanagement. How do I handle that?',
    a: 'This objection almost always means one of two things: the KPIs are tracking activity (inputs) instead of outcomes, or the metrics are being used to punish rather than coach. KPIs should answer the question "where is the process breaking?" not "who is underperforming?" When reps understand that stage conversion rates help them get better — and get more support on stuck deals — the resistance usually dissolves. Lead with coaching, not scorecarding.',
  },
  {
    q: 'When should I bring in a fractional sales leader to help set up KPI tracking?',
    a: 'If you\'ve been in business for more than 12 months at $1M+ ARR and can\'t answer "what is our win rate on qualified pipeline?" and "what is our average sales cycle?" — you need external help. Not because the metrics are complicated, but because without them you\'re making hiring, comp, and pipeline decisions on instinct. A fractional sales leader will build the tracking infrastructure and the review cadence that makes the metrics meaningful.',
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'Article',
      headline: 'The 7 Sales KPIs Every $1M–$10M Business Should Track',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/sales-kpis-for-small-business',
    },
  ],
}

export default function SalesKPIsPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const displayFaqs = cmsfaqs(4, faqs)
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
              Sales Performance
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'The 7 Sales KPIs Every')}
              <span className="block text-blue-400">{v('heroAccent', '$1M–$10M Business Should Track')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most small sales teams track activity. The companies that hit their numbers track outcomes. Here are the 7 KPIs that actually predict revenue — and the vanity metrics to stop wasting time on.")}
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
                href="/how-to-run-a-sales-pipeline-review"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to put these KPIs to work in your pipeline review →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 7 KPIs */}
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
              The 7 KPIs That Actually Predict Revenue
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Four lead the revenue. Three lag it. You need both — but in the right order.
            </motion.p>
            <div className="space-y-8">
              {kpis.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex flex-wrap items-start gap-3">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">{item.category}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">{item.title}</h3>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Benchmark: </span>
                    <span className="text-blue-800">{item.benchmark}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              The most common reason $1M–$10M ARR companies miss revenue targets isn't a people problem or a market problem. It's a measurement problem. Founders are running their sales org on gut instinct and lagging indicators — they find out the quarter missed after it's over. The 7 KPIs above are the instruments that tell you whether you're on track before the quarter ends. Leading indicators — pipeline coverage, stage conversion, activity ratios — are the early warning system. Lagging indicators — win rate, revenue per rep — confirm whether the system is working.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The tracking infrastructure doesn't have to be sophisticated. A CRM with clean data and a weekly pipeline review where you look at stage conversion rates is enough to get started. The goal is to move from "we missed because deals didn't close" to "we saw the conversion drop at Stage 2 in week 4 and adjusted." That shift — from reactive to predictive — is what the right KPIs produce. If you want to see how these metrics come to life in a structured weekly review,{' '}
              <Link href="/how-to-run-a-sales-pipeline-review" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the pipeline review framework →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vanity vs Real */}
      <section className="bg-white py-16 md:py-20">
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
              Vanity Metrics vs. Real Metrics
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              One tells you how busy the team looks. The other tells you whether you'll hit the number.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold">Vanity Metric (Stop Tracking)</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">Real Metric (Start Tracking)</div>
              </div>
              {vanityVsReal.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-2 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
                    <span>{row.vanity}</span>
                  </div>
                  <div className="flex items-start gap-2 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-green-600">✓</span>
                    <span>{row.real}</span>
                  </div>
                </div>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "One of the first things I do in every engagement is pull a KPI audit — what are they tracking, what are the actual numbers, and how do they compare to what the founder believes. In most cases, the founder has been optimistic about win rates and too pessimistic about sales cycle length. Getting to accurate baselines changes every decision that follows.")}
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
              {v('ctaHeadline', "Let's Build Your KPI Dashboard Together")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can audit your current sales metrics, identify the two or three numbers that matter most at your stage, and map out how to start tracking them this week.")}
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
