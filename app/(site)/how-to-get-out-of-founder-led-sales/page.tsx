'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoGetOutFounderLedSales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const steps = [
  {
    number: '01',
    title: 'Document the Process That Lives in Your Head',
    body: 'Write down how you find, qualify, pitch, and close deals. Every email, every objection response, every step. It doesn\'t have to be perfect — it has to exist outside your brain.',
  },
  {
    number: '02',
    title: 'Define Your ICP With Precision',
    body: 'Who are your best 5 customers? What made them buy? What problem did they have the day before they signed? This becomes the filter your reps use to qualify without you.',
  },
  {
    number: '03',
    title: 'Build a Pipeline Your Team Can Manage',
    body: 'Create defined stages, clear exit criteria, and weekly reviews that run without you on every call. The goal is predictable flow — not founder-dependent heroics.',
  },
  {
    number: '04',
    title: 'Train Reps on the System, Not on Shadowing You',
    body: 'Shadowing teaches your style. The playbook teaches the process. Your reps need a system they can follow — one that doesn\'t require you in the room to succeed.',
  },
  {
    number: '05',
    title: 'Step Back Deliberately',
    body: 'Remove yourself from the first call, then the demo, then the close. Each transition should be planned — not reactive. Measure what breaks and fix the system, not the rep.',
  },
]

const faqs = [
  {
    q: 'How long does it take to get out of founder-led sales?',
    a: 'Most founders see meaningful progress in 60–90 days when they commit to it. The first 30 days are spent extracting and documenting the process. Days 31–60 are training and handoff. By day 90 you should be reviewing results rather than closing every deal yourself.',
  },
  {
    q: 'Do I need to hire more reps before I can transition?',
    a: 'No — and this is a common mistake. Adding reps to a broken system just multiplies the chaos. Build the system first with your existing team. Once the process is documented and working, then hire to scale it.',
  },
  {
    q: 'What if my reps can\'t close without me?',
    a: 'That\'s a system problem, not a rep problem. If your reps can\'t close without you, it means the process isn\'t documented, the playbook doesn\'t exist, or they haven\'t been trained on the actual sales motion. Fix the system before replacing the people.',
  },
  {
    q: 'Should I hire a VP of Sales to do this for me?',
    a: 'Not before you have a documented process. VPs of Sales are hired to scale a working system — not to build one from scratch. A fractional sales leader is better suited to extract the process, document it, and build the foundation before a full-time hire makes sense.',
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
      headline: 'How to Get Out of Founder-Led Sales',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-get-out-of-founder-led-sales',
    },
  ],
}

export default function HowToGetOutOfFounderLedSalesPage() {
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
              Founder Sales Transition
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Get Out of')}
              <span className="block text-blue-400">{v('heroAccent', 'Founder-Led Sales')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "You built the company by selling it yourself. Now that's the thing holding you back. Here's the 5-step system to hand off sales without blowing up your revenue.")}
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
                href="/what-is-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is founder-led sales? →
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
              The 5-Step Transition Plan
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              This is not about removing yourself overnight. It's a deliberate handoff — step by step — that keeps revenue intact.
            </motion.p>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{step.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{step.title}</h3>
                    <p className="text-neutral-700">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Core Insight */}
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
              className="mb-8 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              The Mistake Most Founders Make
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
                <h3 className="mb-4 text-lg font-bold text-red-800">What Founders Try First</h3>
                <ul className="space-y-3">
                  {[
                    'Hire a VP of Sales before the process exists',
                    'Add more reps and hope one sticks',
                    'Shadow-train reps who copy your style, not your system',
                    'Delegate deals but stay involved in all the hard ones',
                    'Wait until revenue forces the issue',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 text-lg font-bold text-blue-800">What Actually Works</h3>
                <ul className="space-y-3">
                  {[
                    'Document the process before hiring anyone new',
                    'Define ICP so tightly reps can qualify without you',
                    'Build a pipeline system your team runs weekly',
                    'Train reps on the playbook, not on watching you',
                    'Remove yourself from one stage at a time — deliberately',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Want to see the full framework?{' '}
                <Link href="/sales-leadership-for-1m-10m-companies" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  Sales leadership for $1M–$10M companies →
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
              {v('aboutBio2', "I've guided dozens of founders through the transition out of founder-led sales — building the process, training the team, and stepping back without watching revenue fall. This is the work I specialize in.")}
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
              {v('ctaHeadline', "Let's Map Your Transition Out of Founder-Led Sales")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you exactly which steps you're missing and what it would take to hand off sales without losing revenue.")}
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
