'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesForecastingInvestors'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const forecastSteps = [
  {
    number: '01',
    title: 'Stop Using Top-Down Forecasting',
    detail: 'Top-down forecasting starts with a market number and works backward: "The TAM is $2B and we\'ll capture 1%..." Investors hear this and immediately discount everything else you say. It signals that your revenue targets are aspirational, not grounded in real pipeline data. A forecast built top-down tells an investor you don\'t know your conversion rates, your sales cycle, or your win rate. Those three numbers are what credibility is built on.',
    fix: 'Replace market-share projections with bottoms-up actuals. Start with your current pipeline, apply your real stage conversion rates, and show how that produces a revenue number — not the other way around.',
  },
  {
    number: '02',
    title: 'Know Your Three Core Sales Metrics Cold',
    detail: 'Before any investor meeting, you need three numbers memorized: your average contract value (ACV), your average sales cycle length (in days), and your close rate on qualified opportunities. These aren\'t estimates — they\'re calculated from your last 12–18 months of deals. If you can\'t state them precisely, the investor\'s confidence in your forecast drops to near zero. These metrics are the foundation of every credible revenue model.',
    fix: 'Pull every closed deal from the last 12–18 months. Calculate ACV, average days from first contact to close, and close rate by stage. These three numbers, stated with confidence, change how investors read your forecast entirely.',
  },
  {
    number: '03',
    title: 'Build the Forecast From Pipeline Stages, Not Annual Goals',
    detail: 'A bottoms-up forecast starts with what\'s actually in your pipeline today. Take every deal in each stage, apply your historical stage-to-close conversion rate, weight by probability, and sum to a revenue figure. Then add new business assumptions — new pipeline generation rate × close rate × ACV. The result is a forecast that any investor can stress-test. They will. And you want them to, because a forecast that survives scrutiny is what closes rounds.',
    fix: 'Build a simple spreadsheet: Stage | Deal Count | Avg Deal Size | Historical Close Rate from This Stage | Expected Revenue. Run it for the current quarter and the next two. That\'s your investor-ready forecast model.',
  },
  {
    number: '04',
    title: 'Quantify Uncertainty — Don\'t Hide It',
    detail: 'The worst thing a founder can do in a board or investor meeting is present a single-number forecast as if it\'s certain. Sophisticated investors know it isn\'t. Present a range: base case (apply historical close rates), upside case (if your two largest deals close), downside case (if your sales cycle extends 20%). Showing that you\'ve thought through the scenarios demonstrates operational maturity. Hiding uncertainty and then missing the number destroys trust permanently.',
    fix: 'Present three scenarios in every forecast: base, upside, downside. Explain the one assumption that drives the biggest variance between them. That one assumption tells investors exactly what to watch.',
  },
  {
    number: '05',
    title: 'Show What Changes After the Investment',
    detail: 'Investors don\'t just want to understand your current forecast — they want to understand what the investment changes about your revenue trajectory. If you\'re raising $2M and deploying $800K into sales hiring, show the specific assumption: "With two new AEs ramping in Q2, each producing $600K ARR at full run rate, we reach $X by Q4." The forecast bridges your current reality to your post-investment plan. That bridge is what the investment thesis lives or dies on.',
    fix: 'Build a "with investment" column alongside your base forecast. Show what additional headcount or infrastructure produces, when it ramps, and what the revenue impact is by quarter. Make the assumptions explicit and conservative.',
  },
]

const forecastComparison = [
  { label: 'Method', topDown: 'Start with TAM, work backward', bottomsUp: 'Start with pipeline, work forward' },
  { label: 'Inputs', topDown: 'Market size, assumed share', bottomsUp: 'Real pipeline, real conversion rates' },
  { label: 'Investor response', topDown: 'Immediate skepticism', bottomsUp: 'Credibility, opens due diligence' },
  { label: 'Accuracy', topDown: 'Unreliable', bottomsUp: 'Testable and improvable' },
  { label: 'What it reveals', topDown: 'Ambition', bottomsUp: 'Operational discipline' },
]

const redFlags = [
  { flag: 'Your forecast is a single number with no range', right: false },
  { flag: 'You can\'t state your close rate from memory', right: false },
  { flag: 'Your pipeline stages aren\'t tied to buyer milestones', right: false },
  { flag: 'Revenue targets exist but pipeline math doesn\'t support them', right: false },
  { flag: 'You have bottoms-up pipeline data supporting the forecast', right: true },
  { flag: 'You can show three scenarios with the key variable driving each', right: true },
]

const faqs = [
  {
    q: 'What\'s the difference between a sales forecast for operations and one for investors?',
    a: 'Operational forecasts are about resource planning — what do we hire, what do we buy. Investor forecasts are about capital allocation and return — what does our revenue look like in 12–24 months and what assumptions drive it. The mechanics are the same (pipeline × conversion rates), but investor forecasts need to show the bridge from today\'s reality to the post-investment trajectory, with explicit assumptions at every step.',
  },
  {
    q: 'My sales history is only 12 months. Is that enough data to build a credible forecast?',
    a: 'Twelve months of data is workable if you present it honestly. Use your actual conversion rates from that period, acknowledge the sample size limitation, and show month-over-month improvement trends if they exist. Investors understand that early-stage businesses have limited history. What they won\'t forgive is pretending your 6-month win rate is a reliable permanent benchmark without flagging the limitation.',
  },
  {
    q: 'How do I handle the forecast when our sales cycle is very long (6–12 months)?',
    a: 'Long sales cycles require you to show leading indicators alongside lagging revenue. Include pipeline generation rate, discovery call volume, and Stage 2 entry rate as metrics that predict future revenue even when current-period revenue looks flat. Investors who understand long-cycle B2B sales will evaluate your leading indicators as seriously as your closed revenue.',
  },
  {
    q: 'Should a fractional sales leader be involved in building the investor forecast?',
    a: 'Yes — especially if the founder is preparing for a raise while also running day-to-day operations. A fractional sales leader brings the operational credibility: they\'ve built the pipeline stages, they know the real conversion rates, they can defend the assumptions. Investors often probe the sales model specifically. Having someone in the room who owns the sales function makes the forecast much more defensible.',
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
      headline: 'How to Create a Sales Forecast Your Investors Will Actually Believe',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/sales-forecasting-for-investors',
    },
  ],
}

export default function SalesForecastingForInvestorsPage() {
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
              Revenue Forecasting
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Create a Sales Forecast')}
              <span className="block text-blue-400">{v('heroAccent', 'Your Investors Will Actually Believe')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders present a wish list and call it a forecast. Here's how to build a bottoms-up revenue model that survives board scrutiny and closes investor confidence — not kills it.")}
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
                href="/sales-forecasting-for-small-business"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Sales forecasting basics →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Steps */}
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
              The 5-Step Investor-Grade Forecast
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each step builds the credibility that separates founders who close rounds from those who get a polite pass.
            </motion.p>
            <div className="space-y-6">
              {forecastSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{step.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{step.title}</h3>
                    <p className="mb-4 text-neutral-700">{step.detail}</p>
                    <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                      <span className="font-bold text-blue-800">Action: </span>
                      <span className="text-blue-800">{step.fix}</span>
                    </div>
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
              Most founders get challenged on their forecast in a board or investor meeting and don't understand why. The answer is almost always the same: the forecast is a goal, not a model. There's no pipeline math underneath it, no conversion rate data supporting the number, and no scenario analysis showing what happens if the two biggest deals slip. A goal masquerading as a forecast is one of the fastest ways to lose investor confidence — not because the number is wrong, but because it reveals you don't understand your own sales engine well enough to model it.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The founders who present forecasts that investors trust have done the underlying work: they know their close rates, their average sales cycle, their pipeline coverage, and their stage conversion data. That work doesn't happen in a slide deck — it happens in the sales process. If your pipeline data isn't trustworthy enough to build a credible forecast, the problem to fix is the process itself. Start with{' '}
              <Link href="/sales-forecasting-for-small-business" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                building a forecast your team actually uses →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              Top-Down vs. Bottoms-Up Forecasting
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Investors know the difference immediately. Make sure you're presenting the right one.
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-3 bg-neutral-900 px-6 py-3 text-sm font-bold text-white">
                <div></div>
                <div className="text-center text-red-300">Top-Down</div>
                <div className="text-center text-green-300">Bottoms-Up</div>
              </div>
              {forecastComparison.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="font-semibold text-neutral-900">{row.label}</div>
                  <div className="text-center text-neutral-600">{row.topDown}</div>
                  <div className="text-center font-medium text-blue-700">{row.bottomsUp}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Red Flags Checklist */}
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
              Is Your Forecast Investor-Ready?
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Be honest with yourself before the investor is.
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {redFlags.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${item.right ? 'border-green-200 bg-green-50' : 'border-red-100 bg-red-50'}`}
                >
                  <div className={`mt-0.5 shrink-0 rounded-full p-1 ${item.right ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.right ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </div>
                  <p className={`text-sm font-medium ${item.right ? 'text-green-900' : 'text-red-900'}`}>{item.flag}</p>
                </motion.div>
              ))}
            </div>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I've helped founders prepare for investor meetings by building the sales data infrastructure that makes their forecast defensible. When you can walk into a board meeting and explain your close rate, your pipeline coverage, and your stage conversion data without hesitation — the entire conversation changes.")}
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
              {v('ctaHeadline', "Need a Forecast You Can Defend?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current forecast model, identify where investor confidence breaks down, and help you build the pipeline data that makes your numbers defensible.")}
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
