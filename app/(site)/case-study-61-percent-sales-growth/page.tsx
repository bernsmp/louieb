'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoCaseStudy61SalesGrowth'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const metrics = [
  { label: 'Revenue Growth', value: '61%', period: 'Year One' },
  { label: 'Pipeline Coverage', value: '3.8×', period: 'vs. Prior Year' },
  { label: 'Time to Hire', value: '34 Days', period: 'First Sales Rep' },
  { label: 'Close Rate Improvement', value: '+27%', period: 'End of Engagement' },
]

const engagementPhases = [
  {
    phase: 'Phase 1',
    title: 'Weeks 1–4: Diagnose Before Building',
    body: 'We started by auditing every deal closed in the prior 18 months. Who bought, why they bought, what triggered the decision, and what the sales conversation looked like. The pattern that emerged surprised the founder: 80% of revenue came from a customer profile they weren\'t actively targeting. Their ICP was wrong.',
  },
  {
    phase: 'Phase 2',
    title: 'Weeks 5–12: Rebuild the Process Around the Real Buyer',
    body: 'We rebuilt the ICP definition, updated the messaging to speak directly to that buyer\'s pain, and created a 6-stage pipeline with clear exit criteria at each stage. The founder ran the first 10 deals personally under the new framework to validate it before hiring.',
  },
  {
    phase: 'Phase 3',
    title: 'Months 4–6: First Hire, Done Right',
    body: 'With a validated process, we built the hiring profile, screened 22 candidates, and placed the first rep in 34 days. The rep ramped against a real playbook — not a verbal handoff. First deal closed in week 7 of tenure. That almost never happens without a structured process.',
  },
  {
    phase: 'Phase 4',
    title: 'Months 7–12: Scale What Works',
    body: 'With one rep proving the model, we added a second. CRM hygiene, weekly pipeline reviews, and a monthly forecast rhythm gave the founder visibility they\'d never had before. By month 12, the founder was no longer the primary closer. Revenue was up 61%.',
  },
]

const keyActions = [
  'Rewrote the ICP based on closed-won analysis, not assumptions',
  'Created a 6-stage pipeline with defined exit criteria at each stage',
  'Built a sales playbook capturing discovery questions, objection responses, and close sequences',
  'Designed and executed a hiring process that placed the right first rep in 34 days',
  'Implemented a weekly pipeline review cadence with accountability metrics',
  'Transitioned the founder out of primary closer role by month 10',
]

const faqs = [
  {
    q: 'How long does a typical fractional sales engagement run?',
    a: 'Most engagements run 6–12 months. The first 60–90 days are diagnostic and infrastructure-building. Months 3–6 focus on implementation and first hires. Months 6–12 are about scaling what\'s working and building the systems that outlast the engagement. Some clients continue on a lighter retainer after the core work is done.',
  },
  {
    q: 'What kind of company was this client?',
    a: 'A B2B professional services company at $1.4M ARR with a 6-month sales cycle, average contract value of $28K, and a founder who was personally closing 90% of revenue. Sound familiar? It\'s the profile I work with most often.',
  },
  {
    q: 'Can results like this be replicated?',
    a: '61% is a strong result — and it was earned by doing the fundamentals correctly. The companies that see this kind of growth are the ones willing to rebuild from the ICP up, run a proper hiring process, and give the new system enough time to compound. Results vary, but the underlying methodology applies to any B2B company with a repeatable sale.',
  },
  {
    q: 'What does an engagement with you actually cost?',
    a: 'Engagements are scoped individually based on what the company needs. Most fractional arrangements run $5,000–$10,000/month depending on scope and time commitment. In this case study, the investment paid back in new revenue within the first quarter of the engagement.',
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
      headline: 'Case Study: How a B2B Company Achieved 61% Sales Growth in One Year',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/case-study-61-percent-sales-growth',
    },
  ],
}

export default function CaseStudy61SalesGrowthPage() {
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
              Case Study
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Case Study: 61% Sales Growth')}
              <span className="block text-blue-400">{v('heroAccent', 'in One Year')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', 'How a B2B professional services company went from founder-dependent, stalled revenue to a functioning sales team and 61% growth — in 12 months.')}
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

      {/* Metrics */}
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              The Results at a Glance
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-6 text-center"
                >
                  <div className="mb-1 font-serif text-4xl font-bold text-blue-700">{m.value}</div>
                  <div className="mb-1 text-sm font-bold text-neutral-800">{m.label}</div>
                  <div className="text-xs text-neutral-500">{m.period}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
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
              className="mb-6 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              The Problem
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-4 text-lg text-neutral-700">
              When this founder first reached out, their situation was familiar: $1.4M ARR, growing slowly, and personally responsible for closing nearly every deal. They had tried to hire a salesperson twice. Both failed within four months. Revenue had plateaued. The founder was exhausted.
            </motion.p>
            <motion.p variants={itemVariants} className="mb-4 text-lg text-neutral-700">
              The root cause wasn't the hires. It was what came before the hires: no defined ICP, no documented sales process, no repeatable messaging. The reps had been hired to do a job that didn't have a clear description — and failed accordingly.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-neutral-700">
              The founder needed someone to build the system before building the team. That's where the engagement started.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Engagement Phases */}
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
              How the Engagement Unfolded
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Four phases over 12 months. Each built on the last.
            </motion.p>
            <div className="space-y-6">
              {engagementPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-sm font-bold text-blue-400 uppercase tracking-widest pt-1">{phase.phase}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{phase.title}</h3>
                    <p className="text-neutral-700">{phase.body}</p>
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
              The 61% revenue growth in this case study wasn't the result of a bigger marketing budget, a new product, or a lucky referral. It came from building the sales infrastructure that most $1M–$3M ARR companies don't have yet: a validated ICP, a documented process, a structured pipeline, and a first rep hired against a real playbook. These are the fundamentals. They're unsexy. They're also what determines whether the next 12 months look like the last 12, or something dramatically better.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              Fractional sales leadership is most valuable precisely at this stage — when the company has product-market fit but not sales-process fit. The founder knows how to sell one-to-one. What they don't yet have is a system that works without them. Building that system is the job. If you're wondering what it looks like week to week,{' '}
              <Link href="/what-does-fractional-sales-leader-do" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                here's what a fractional sales leader actually does →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Actions */}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What Was Actually Done
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              No strategy decks. No frameworks left on a shared drive. These are the actions taken during the engagement.
            </motion.p>
            <div className="space-y-3">
              {keyActions.map((action, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 text-sm font-bold text-blue-700">{i + 1}.</div>
                  <p className="text-neutral-700">{action}</p>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "This case study represents the kind of work I do — not advising from a distance, but building alongside you. The ICP analysis, the playbook, the hiring process, the pipeline reviews — that's what a fractional sales leader does when the engagement is working.")}
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
              {v('ctaHeadline', "Could This Be Your Company's Story?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you whether the conditions for this kind of result exist in your business — and what it would take to build them.")}
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
