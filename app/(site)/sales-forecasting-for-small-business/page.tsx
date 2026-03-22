'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesForecastingSmallBusiness'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const forecastingMistakes = [
  {
    title: 'Using "gut feel" instead of pipeline data',
    body: 'What you think will close and what the data says will close are almost never the same. Forecasting requires actual pipeline metrics — not optimism.',
  },
  {
    title: 'Counting deals too early',
    body: 'A verbal yes is not a closed deal. Many small businesses count revenue from deals that haven\'t signed, haven\'t paid, or haven\'t passed legal. This inflates forecasts and creates cash flow surprises.',
  },
  {
    title: 'No defined pipeline stages',
    body: 'Without clear stages and conversion rates between them, you can\'t forecast. You need to know: how many deals enter each stage, how many convert, and how long they take.',
  },
  {
    title: 'Ignoring sales cycle length',
    body: 'If your average deal takes 45 days to close, a deal that entered the pipeline yesterday is not closing this month. Sales cycle data is the engine of accurate forecasting.',
  },
]

const forecastingSteps = [
  { step: '1', title: 'Define Your Pipeline Stages', body: 'Create 4–6 stages with clear entry and exit criteria. Every rep should be able to stage a deal consistently and without debate.' },
  { step: '2', title: 'Track Conversion Rates Between Stages', body: 'What percentage of Stage 2 deals become Stage 3? Stage 3 to closed? Once you have 60 days of data, you can start forecasting with math.' },
  { step: '3', title: 'Measure Average Sales Cycle Length', body: 'From first contact to signed — how many days on average? By deal size, by rep, by channel. This determines what\'s actually closeable in any given month.' },
  { step: '4', title: 'Weight Deals by Stage', body: 'A deal in Stage 2 is not worth full contract value. Weight by your actual conversion rate per stage. $100K × 20% conversion = $20K forecast contribution.' },
  { step: '5', title: 'Run a Weekly Pipeline Review', body: 'Forecast without a weekly review is a spreadsheet exercise. The review is where you catch deals that stalled, update stages, and make real decisions about what will close.' },
]

const faqs = [
  {
    q: 'What\'s the simplest sales forecasting method for small businesses?',
    a: 'Stage-weighted pipeline forecasting. Assign a close probability to each pipeline stage based on your actual historical conversion rates. Multiply each deal\'s value by its stage probability and sum the total. Review and adjust weekly. It\'s not perfect, but it beats gut feel every time.',
  },
  {
    q: 'How much pipeline do I need to hit my revenue target?',
    a: 'Divide your revenue target by your overall pipeline close rate. If you close 25% of all deals that enter your pipeline and you need $500K, you need $2M in pipeline. Most small businesses are operating with 2–3x. High-performing teams run 4–5x coverage.',
  },
  {
    q: 'How long before my forecast becomes reliable?',
    a: 'You need at least 60–90 days of consistent pipeline tracking before your conversion rates stabilize. Most small businesses can build a working forecast model in one quarter if they start tracking the right data now.',
  },
  {
    q: 'What CRM do you recommend for small business sales forecasting?',
    a: 'The best CRM is the one your team actually uses. HubSpot\'s free tier works for most sub-$5M companies. Salesforce is overkill until you have 5+ reps. What matters more than the tool is whether you have defined stages, consistent data entry, and someone running weekly reviews.',
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
      headline: 'Sales Forecasting for Small Business: How to Actually Predict Revenue',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/sales-forecasting-for-small-business',
    },
  ],
}

export default function SalesForecastingSmallBusinessPage() {
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
              Sales Operations
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Sales Forecasting for Small Business')}
              <span className="block text-blue-400">{v('heroAccent', 'How to Actually Predict Revenue')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Stop guessing and start forecasting. Here's the practical system small businesses use to predict revenue accurately — without a complex CRM or a data analyst.")}
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
                href="/how-to-build-a-sales-process-after-1m-arr"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Build a sales process first →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Common Mistakes */}
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
              Why Small Business Forecasting Fails
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Most forecasting mistakes aren't about the math — they're about missing the inputs the math requires.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {forecastingMistakes.map((mistake, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-6"
                >
                  <h3 className="mb-2 text-lg font-bold text-red-900">{mistake.title}</h3>
                  <p className="text-neutral-700">{mistake.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5-Step System */}
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
              The 5-Step Forecasting System
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              This is the model I use with every client. It takes about 30 days to set up and starts producing reliable predictions within one quarter.
            </motion.p>
            <div className="space-y-4">
              {forecastingSteps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-5 rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-neutral-900">{s.title}</h3>
                    <p className="text-neutral-700">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Need help building your pipeline first?{' '}
                <Link href="/build-sales-team-after-1m-arr" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  How to build a sales team after $1M ARR →
                </Link>
              </p>
            </motion.div>
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
              {v('aboutBio2', "I work with founders at $1M–$15M ARR to build the pipeline systems and forecasting models that turn revenue prediction from guesswork into a repeatable process.")}
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
              {v('ctaHeadline', 'Build a Pipeline You Can Actually Forecast')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can show you exactly what's missing from your current forecasting system and what it would take to predict revenue with confidence.")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                Book a Working Session
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
