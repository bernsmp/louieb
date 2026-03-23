'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatFslDoes'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const weeklyActivities = [
  {
    day: 'Monday',
    title: 'Pipeline Review',
    body: 'Review every active deal with the founder or sales team. Assess stage accuracy, identify stuck deals, flag deals at risk, and determine the 2–3 moves that matter most this week. This is accountability without micromanagement.',
  },
  {
    day: 'Tue–Wed',
    title: 'Field Work',
    body: 'Join discovery calls, demos, and negotiation conversations — not to take over, but to observe, assist on complex deals, and debrief with reps immediately after. The learning compounds faster when it\'s attached to live deals.',
  },
  {
    day: 'Thursday',
    title: 'Process and Systems Work',
    body: 'CRM updates, playbook refinements, sales email sequence reviews, reporting setup. The infrastructure work that makes the whole system more reliable. This is what most internal leaders never have time for.',
  },
  {
    day: 'Friday',
    title: 'Founder Sync',
    body: 'A standing 30–60 minute call with the founder. Discuss what\'s working, what\'s breaking, what decisions need to be made, and what\'s coming next week. Strategic alignment between the fractional leader and the founder is what makes the engagement work.',
  },
]

const monthlyByPhase = [
  {
    phase: 'Month 1',
    focus: 'Diagnosis',
    activities: [
      'Closed-won / closed-lost deal analysis',
      'ICP validation against real customers',
      'Pipeline audit — what\'s real vs. wishful',
      'CRM review — are reps using it, is data trustworthy',
      'Identify the one thing breaking revenue most',
    ],
  },
  {
    phase: 'Month 2–3',
    focus: 'Infrastructure',
    activities: [
      'Rebuild or refine pipeline stages with real exit criteria',
      'Create or update the sales playbook',
      'Establish weekly review and forecast cadence',
      'Improve onboarding process if a hire is coming',
      'Define hiring profile if team expansion is needed',
    ],
  },
  {
    phase: 'Month 4–6',
    focus: 'Execution',
    activities: [
      'Manage first hire if applicable',
      'Run weekly coaching sessions with reps',
      'Track stage conversion rates and act on the data',
      'Begin transition of founder out of primary closer role',
      'Build out compensation structure and quota framework',
    ],
  },
]

const doesNotDo = [
  'Replace your full-time VP of Sales at VP-level workload',
  'Own the CRM administrator role (that\'s an ops function)',
  'Write marketing copy or manage ad campaigns',
  'Make final hiring decisions without founder alignment',
  'Work in the business as if they\'re an employee',
]

const faqs = [
  {
    q: 'How many hours per week does a fractional sales leader typically work?',
    a: 'Most engagements run 8–16 hours per month, or roughly 2–4 hours per week. The right number depends on what\'s needed: a company building its first sales process from scratch might need 15–20 hours/month. A company with a functioning team that needs strategic oversight might run on 8–10 hours/month. We scope it to the problem, not to a fixed number.',
  },
  {
    q: 'Is a fractional sales leader embedded or advisory?',
    a: 'Embedded. That\'s the defining characteristic. Advisors give guidance. Fractional sales leaders do the work — pipeline reviews, call coaching, playbook building, hiring support. They\'re in your business regularly, not available on demand when you call.',
  },
  {
    q: 'Can a fractional sales leader manage our existing reps?',
    a: 'Yes, and this is often one of the highest-value parts of the engagement. Weekly pipeline reviews and deal coaching with your current team can improve close rates significantly — often before any new infrastructure changes take effect. If your reps aren\'t hitting quota, the coaching piece alone often pays for the engagement.',
  },
  {
    q: 'How do I know if a fractional sales leader is working?',
    a: 'You should see leading indicators within 60 days: pipeline health improves, stage definitions become clearer, rep accountability increases, and the founder spends less time firefighting individual deals. Revenue results follow at 90–120 days. If neither is happening by month 3, the engagement isn\'t working.',
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
      headline: 'What Does a Fractional Sales Leader Actually Do Week to Week?',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/what-does-fractional-sales-leader-do',
    },
  ],
}

export default function WhatFslDoesPage() {
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
              Fractional Sales Leadership
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Does a Fractional Sales Leader')}
              <span className="block text-blue-400">{v('heroAccent', 'Actually Do Week to Week?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "The question founders ask most before engaging. Here's the honest, specific answer — what gets done, when, and why it moves revenue.")}
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
                What is a Fractional Sales Leader? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Weekly Activities */}
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
              A Typical Week
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Every week has the same four anchors — regardless of where the engagement is in its lifecycle.
            </motion.p>
            <div className="space-y-5">
              {weeklyActivities.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-5 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{item.day}</span>
                  </div>
                  <div className="border-l border-neutral-200 pl-5">
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-700">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monthly by Phase */}
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
              How the Work Evolves Month by Month
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The weekly rhythm stays the same. The focus shifts as the engagement matures.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-3">
              {monthlyByPhase.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-500">{phase.phase}</div>
                  <h3 className="mb-4 text-lg font-bold text-neutral-900">{phase.focus}</h3>
                  <ul className="space-y-2">
                    {phase.activities.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="mt-1 shrink-0 text-blue-400">→</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              The most common misconception about fractional sales leadership is that it's advisory — that you get a smart person on a monthly call who tells you what to do. That's not how it works. A fractional sales leader is embedded in your pipeline. They're on calls with your reps, reviewing your deals, updating your playbook, and holding your team accountable week to week. The "fractional" part refers to the time commitment — not the depth of engagement.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              What makes this model effective for $1M–$10M ARR companies is that it delivers VP-level sales leadership at a fraction of the cost, without the 12–18 month ramp risk of a full-time hire. The founder gets a partner who is accountable to outcomes — not just to deliverables. For proof of what this looks like in practice,{' '}
              <Link href="/case-study-61-percent-sales-growth" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the case study →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What FSL Does Not Do */}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What a Fractional Sales Leader Does NOT Do
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Setting expectations honestly is part of the job. Here's what falls outside the scope.
            </motion.p>
            <div className="space-y-3">
              {doesNotDo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
                  <p className="text-neutral-700">{item}</p>
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
              {v('aboutBio2', "The schedule above is my actual schedule — not an idealized version. Monday pipeline reviews, midweek field work, Thursday infrastructure, Friday founder sync. The rhythm is what creates results. I've run it this way for every engagement since 2017.")}
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
              {v('ctaHeadline', "Want to See How This Works for Your Business?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk you through exactly what an engagement would look like for your specific situation — the scope, the timeline, and what would be different in 90 days.")}
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
