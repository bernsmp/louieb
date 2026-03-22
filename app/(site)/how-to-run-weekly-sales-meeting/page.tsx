'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWeeklySalesMeeting'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const agendaItems = [
  { time: '0–5 min', item: 'Pipeline Numbers Check', detail: 'Review total open pipeline value vs. target. Not individual deals — the overall health number. Is coverage ratio above 3x? If not, that\'s the first problem to address.' },
  { time: '5–20 min', item: 'Deal Review — Stuck Deals Only', detail: 'Focus exclusively on deals that haven\'t moved in 7+ days or that are past their expected close date. What\'s the real obstacle? What\'s the next committed action? Not every deal — only the ones that need intervention.' },
  { time: '20–35 min', item: 'One Skill Coaching Block', detail: 'Pick one specific sales skill and spend 15 minutes on it using real examples from the week\'s calls. Objection handling, discovery questions, close language. One topic, real material, actionable.' },
  { time: '35–45 min', item: 'Wins and What Worked', detail: 'End with one closed deal or advanced opportunity and debrief what specifically worked. This builds the playbook and motivates the team at the same time.' },
]

const whatToAvoid = [
  { avoid: 'Reviewing every single deal', why: 'Wastes time on healthy pipeline. Focus on stuck and at-risk deals only.' },
  { avoid: 'Making it a status report', why: 'If reps are just reading from their CRM, you\'re wasting an hour. The meeting should drive decisions, not data recitation.' },
  { avoid: 'Skipping when things are busy', why: 'The meeting is most valuable when things are chaotic. Skipping it trains reps that it\'s optional.' },
  { avoid: 'No pre-work requirement', why: 'Reps should update their pipeline and flag stuck deals before the meeting — not during it. Send a 5-minute pre-work reminder the day before.' },
  { avoid: 'Running it without an agenda', why: 'Unstructured sales meetings drift into complaint sessions. Publish and follow the same agenda every week.' },
  { avoid: 'Making it about the number', why: '"We need to hit quota" is not coaching. If the meeting is just pressure, reps will dread it and disengage.' },
]

const faqs = [
  {
    q: 'How long should a weekly sales meeting be?',
    a: 'For a team of 2–5 reps, 45 minutes is the right target. An hour max. Longer meetings lose attention and signal that the leader hasn\'t prepared a tight agenda. If you can\'t cover what matters in 45 minutes, you\'re reviewing too many deals or not running deal reviews out of the CRM beforehand.',
  },
  {
    q: 'Should the weekly meeting be a pipeline review or a coaching session?',
    a: 'Both — but in the right proportions. About one-third of the time should be pipeline health (stuck deals, coverage ratio). The other two-thirds should be skill development and deal strategy. Most sales meetings get this backwards: all pipeline, no coaching.',
  },
  {
    q: 'What if I only have one or two reps?',
    a: 'The format scales down. With one rep, a weekly 30-minute 1:1 replaces the team meeting. Cover the same agenda: pipeline health, one stuck deal, one coaching topic, one win. The structure matters more than the headcount.',
  },
  {
    q: 'How do I get my reps to take the weekly meeting seriously?',
    a: 'Run it consistently, start on time, and make it useful. If reps feel like the meeting helps them close deals and not just report on them, they\'ll show up prepared. If it\'s just a quota pressure session, they\'ll tune out. The meeting earns its own attendance.',
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
      headline: 'How to Run a Weekly Sales Meeting That Actually Works',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-run-weekly-sales-meeting',
    },
  ],
}

export default function WeeklySalesMeetingPage() {
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
              {v('heroLine1', 'How to Run a Weekly Sales Meeting')}
              <span className="block text-blue-400">{v('heroAccent', 'That Actually Works')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most weekly sales meetings are status reports dressed up as coaching. Here's the 45-minute agenda that moves pipeline, develops reps, and ends on time — every week.")}
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
                href="/why-sales-team-not-growing-revenue"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Why your team isn't growing revenue →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Agenda */}
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
              The 45-Minute Weekly Sales Meeting Agenda
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Same structure every week. Predictability makes reps prepare — and preparation makes the meeting worth running.
            </motion.p>
            <div className="space-y-4">
              {agendaItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <div className="shrink-0 rounded-lg bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                    {item.time}
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900">{item.item}: </span>
                    <span className="text-neutral-700">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Avoid */}
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
              6 Things That Kill the Weekly Sales Meeting
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Most sales meetings fail for the same reasons. Avoid these and you're already ahead.
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-2">
              {whatToAvoid.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <X className="h-4 w-4 shrink-0 text-red-500" />
                    <span className="font-bold text-neutral-900">{item.avoid}</span>
                  </div>
                  <p className="text-sm text-neutral-600">{item.why}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Deeper issues with your team's performance?{' '}
                <Link href="/what-is-a-sales-audit" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  What a sales audit uncovers →
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
              {v('aboutBio2', "I've run hundreds of weekly sales meetings and redesigned the meeting cadence for dozens of teams. The difference between a meeting that moves revenue and one that wastes an hour is almost entirely structure and preparation.")}
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
              {v('ctaHeadline', "Let's Fix Your Sales Meeting Cadence")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review how your team is currently running pipeline and coaching — and show you what a better cadence looks like.")}
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
