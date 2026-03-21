'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CMS_SECTION = 'seoCostFractionalVp'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const costFactors = [
  {
    title: 'Scope of work',
    detail: 'A fractional leader running 1:1s with 3 reps, managing pipeline, and building the playbook from scratch requires more time than an advisory engagement. More hours = higher retainer.',
  },
  {
    title: 'Time commitment per week',
    detail: 'Most engagements run 1–2 days per week. Light-touch advisory engagements start around $6,000/month. Full sales leadership — managing people, running reviews, attending key deals — runs $10,000–$14,000/month.',
  },
  {
    title: 'Company stage and complexity',
    detail: 'A $2M ARR startup with 1 rep needs less than a $10M ARR company with 5 reps and a SDR team. Complexity and organizational scope affect time and therefore cost.',
  },
  {
    title: 'Engagement length',
    detail: 'Most founders commit to 6–12 months minimum. The first 90 days are the highest-value phase — diagnosis, playbook build, rep coaching. It takes time to see results in sales. Short engagements rarely deliver full value.',
  },
]

const whatYouGet = [
  'Weekly 1:1s with all sales reps',
  'Documented Sales Playbook — ICP, process, objections, pricing conversations',
  'Pipeline review and hygiene — real stages, action-based progression',
  'Deal coaching — live call debriefs and strategy sessions',
  'Rep hiring — profile, interview questions, scorecard',
  'Rep onboarding — 30/60/90 plan with milestones',
  'Forecasting and pipeline reporting',
  'Direct availability for escalations and key deals',
]

const faqs = [
  {
    q: 'What does a fractional VP of Sales cost per month?',
    a: 'My retainers run $6,000–$14,000/month depending on scope and time commitment. Most founders in the $1M–$10M ARR range work with me at $8,000–$12,000/month for 6–12 months. That covers real sales leadership — team management, playbook development, deal coaching, and pipeline oversight.',
  },
  {
    q: 'How does that compare to hiring a full-time VP of Sales?',
    a: 'A full-time VP of Sales at a $5M–$15M ARR startup typically commands $180,000–$280,000 in base salary — before equity, benefits, and the 3–6 month ramp. At $12,000/month, a fractional leader costs $144,000/year with no equity, no benefits, no ramp time, and no severance if it doesn\'t work out.',
  },
  {
    q: 'Is a fractional arrangement month-to-month or a fixed contract?',
    a: 'I work on rolling monthly retainers with a minimum commitment (typically 3–6 months) to ensure there\'s enough time to build and see results. Sales leadership that\'s hired and fired in 60 days doesn\'t work for anyone. But there\'s no multi-year lock-in.',
  },
  {
    q: 'What\'s included in the retainer?',
    a: 'Rep 1:1s, pipeline reviews, playbook development, deal coaching, rep hiring support, and direct availability for your team. I don\'t disappear between scheduled calls — your reps can reach me when a deal needs attention.',
  },
  {
    q: 'Do you charge per hour or a flat retainer?',
    a: 'Flat monthly retainer. Hourly billing creates the wrong incentives — I should be helping you close faster and build better systems, not running up hours. A retainer aligns my incentives with yours.',
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
      '@type': 'Service',
      name: 'Fractional VP of Sales',
      provider: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      description: 'What does a fractional VP of Sales cost? Transparent pricing, what\'s included, and how it compares to a full-time hire.',
      url: 'https://louiebernstein.com/cost-of-fractional-vp-sales',
      offers: { '@type': 'Offer', priceRange: '$6,000–$14,000/month' },
    },
  ],
}

export default function CostOfFractionalVpSalesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const faqsData = cmsfaqs(5, faqs)
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
                Transparent Pricing
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              >
                {v('heroLine1', 'What Does a')}
                <span className="block text-blue-400">{v('heroAccent', 'Fractional VP of Sales Cost?')}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
              >
                {v('heroDescription', 'The short answer: $6,000\u2013$14,000/month. Here\u2019s what drives that range, what\u2019s included, and how it stacks up against the full-time alternative.')}
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
                  href="/fractional-vp-sales-vs-full-time-vp"
                  className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
                >
                  Fractional vs. full-time comparison →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </HeroBackground>

      {/* Pricing Range */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { range: '$6,000–$8,000/mo', label: 'Advisory', desc: 'Strategic guidance, monthly/biweekly calls, playbook review. Light touch — best for founders who are still selling themselves and want a senior sounding board.' },
                { range: '$8,000–$12,000/mo', label: 'Active Leadership', desc: 'Weekly 1:1s, pipeline reviews, deal coaching, rep management. Embedded in the business 1–2 days/week. The most common engagement for $1M–$8M ARR founders.' },
                { range: '$12,000–$14,000/mo', label: 'Full Engagement', desc: 'Everything in Active Leadership plus hiring support, onboarding new reps, and higher time availability. Right for companies with 3–5 reps scaling fast.' },
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`rounded-xl border-2 p-6 ${i === 1 ? 'border-blue-300 bg-blue-50' : 'border-neutral-200 bg-neutral-50'}`}
                >
                  <p className="mb-1 text-2xl font-bold text-neutral-900">{tier.range}</p>
                  <p className={`mb-3 text-sm font-semibold uppercase tracking-wide ${i === 1 ? 'text-blue-700' : 'text-neutral-500'}`}>{tier.label}</p>
                  <p className="text-sm text-neutral-600">{tier.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
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
              className="mb-8 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What&apos;s Included
            </motion.h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {whatYouGet.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span className="text-neutral-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Factors */}
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
              className="mb-8 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What Drives the Cost
            </motion.h2>
            <div className="space-y-4">
              {costFactors.map((factor, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-2 font-bold text-neutral-900">{factor.title}</h3>
                  <p className="text-neutral-600">{factor.detail}</p>
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
              {v('aboutBio1', 'I\u2019m Louie Bernstein \u2014 I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.')}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', 'I work with founders at $1M\u2013$15M ARR who need real sales leadership without the full-time VP cost. No equity, no ramp time, no severance. Just a senior leader who\u2019s been in the seat before and knows how to build what you need.')}
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
              {faqsData.map((faq, i) => (
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
              {v('ctaHeadline', 'Want to Talk Through the Numbers?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', 'Let\u2019s spend 30 minutes together. I\u2019ll walk you through what an engagement would actually look like for your business and what it would cost.')}
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
