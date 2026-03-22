'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, AlertCircle } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoOnboardNewSalesRep'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const onboardingPhases = [
  {
    phase: 'Days 1–30: Learn the Business',
    milestones: [
      'Complete product and ICP training — can articulate what you sell and who you sell it to',
      'Shadow 5–10 calls with experienced reps or the founder',
      'Learn the CRM: data entry standards, pipeline stages, daily workflow',
      'Read the full sales playbook and pass a knowledge check',
      'Complete their first 5 prospecting outreach attempts with feedback',
    ],
    goal: 'By day 30 the rep should understand the product, the ICP, and the process — but is not yet expected to close independently.',
  },
  {
    phase: 'Days 31–60: Run the Process',
    milestones: [
      'Conduct 10+ discovery calls independently (reviewed and debriefed)',
      'Run their first demos or proposals with a ride-along',
      'Build their first pipeline: 20+ qualified opportunities in the CRM',
      'Deliver their first pipeline review in the weekly sales meeting',
      'Close their first small deal or advance one deal to late stage',
    ],
    goal: 'By day 60 the rep should be running the full process independently — with coaching on specific deals, not hand-holding.',
  },
  {
    phase: 'Days 61–90: Own Their Number',
    milestones: [
      'Forecasting their own pipeline with 70%+ accuracy',
      'Managing a full pipeline at 3x+ coverage ratio',
      'Closing deals independently without founder involvement',
      'Receiving skill coaching in weekly reviews, not process reminders',
      'Identifying their own gaps and asking targeted questions',
    ],
    goal: 'By day 90 the rep should be fully ramped — closing independently, managing pipeline accurately, and requiring coaching rather than training.',
  },
]

const onboardingMistakes = [
  { mistake: 'No written onboarding plan', fix: 'Reps without a plan flounder. They don\'t know what to learn, when to learn it, or what\'s expected by when.' },
  { mistake: 'Too much product training, not enough process', fix: 'Reps need to understand the sales motion as much as the product. Most onboarding over-invests in features and under-invests in how to sell.' },
  { mistake: 'Expecting full productivity by day 30', fix: 'A ramped rep at day 30 is a myth. Real ramp time is 60–90 days minimum for a quality B2B process.' },
  { mistake: 'No milestone checkpoints', fix: 'Define clear pass/fail criteria at day 30 and day 60. If a rep isn\'t hitting milestones, address it early — not at day 90.' },
]

const faqs = [
  {
    q: 'How long does it take to fully onboard a new sales rep?',
    a: 'For a B2B sales role with a meaningful deal size ($10K+), expect 60–90 days to full productivity. Day 30 should be "knows the product and process." Day 60 should be "running the process independently." Day 90 should be "closing and managing a full pipeline."',
  },
  {
    q: 'What if I don\'t have a sales playbook — can I still onboard a rep?',
    a: 'You can, but it will take longer and produce less consistent results. The playbook is the foundation of onboarding. Without it, reps are trained by shadowing — which means they\'re learning your habits, not a documented process. Building the playbook first is almost always worth the delay.',
  },
  {
    q: 'Should the founder be involved in onboarding?',
    a: 'Yes — in the first 30 days, founders should run shadow sessions and debrief calls with new reps. The goal is to transfer the founder\'s sales knowledge into a documented system. After day 30, founder involvement should decrease as the rep takes over.',
  },
  {
    q: 'How do I know if a rep is going to make it?',
    a: 'Assess against milestones, not gut feel. By day 30: do they understand the ICP and process? By day 60: are they running calls independently and generating real pipeline? By day 90: are they closing without a ride-along? Reps who miss multiple milestones early rarely recover without significant intervention.',
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
      headline: 'How to Onboard a New Sales Rep in 30, 60, and 90 Days',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-onboard-new-sales-rep',
    },
  ],
}

export default function OnboardNewSalesRepPage() {
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
              Sales Management
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Onboard a New Sales Rep')}
              <span className="block text-blue-400">{v('heroAccent', 'in 30, 60, and 90 Days')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most reps fail in the first 90 days because no one told them what success looked like by when. Here's the milestone-based onboarding plan that gets new reps to full productivity — without a 6-month ramp.")}
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
                href="/how-to-hire-first-sales-rep"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to hire your first sales rep →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 30/60/90 Phases */}
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
              The 30/60/90-Day Onboarding Plan
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each phase has clear milestones. Assess against them — not against how long the rep has been at the company.
            </motion.p>
            <div className="space-y-8">
              {onboardingPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-4 font-serif text-xl font-bold text-blue-700">{phase.phase}</h3>
                  <ul className="mb-4 space-y-2">
                    {phase.milestones.map((m, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span className="text-neutral-700">{m}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="rounded-lg bg-blue-50 px-4 py-3 text-sm font-medium text-blue-800">
                    {phase.goal}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes */}
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
              The 4 Most Common Onboarding Mistakes
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Most rep failures are onboarding failures in disguise.
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-2">
              {onboardingMistakes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                    <span className="font-bold text-neutral-900">{item.mistake}</span>
                  </div>
                  <p className="text-sm text-neutral-600">{item.fix}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Need a documented process for your reps to follow?{' '}
                <Link href="/what-is-a-sales-playbook" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  What is a sales playbook →
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
              {v('aboutBio2', "I've onboarded dozens of sales reps across companies at every stage from $1M to $15M ARR. The pattern is consistent: reps who hit clear milestones in the first 30 days almost always succeed. Reps who are still finding their footing at day 45 almost never do.")}
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
              {v('ctaHeadline', "Let's Build Your Rep Onboarding Plan")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current onboarding process and tell you exactly what milestones and structure are missing — so your next hire ramps in 90 days, not 6 months.")}
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
