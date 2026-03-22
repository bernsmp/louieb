'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, Search } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatIsASalesAudit'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const auditCovers = [
  { area: 'Sales Process', detail: 'Are the stages defined? Are exit criteria clear? Is the process followed consistently by every rep?' },
  { area: 'Pipeline Health', detail: 'What\'s the coverage ratio? Where are deals stalling? What\'s the average age of open deals at each stage?' },
  { area: 'ICP & Targeting', detail: 'Are reps working the right prospects? Is the ICP documented and followed — or is it "anyone who says yes"?' },
  { area: 'Close Rate by Rep & Stage', detail: 'Where in the process does revenue leak? Which reps are underperforming — and is it skill, system, or support?' },
  { area: 'Forecasting Accuracy', detail: 'How close are your forecasts to actuals? If you\'re off by more than 20%, something upstream is broken.' },
  { area: 'Rep Onboarding & Training', detail: 'How are new reps trained? Do they have a playbook? How long before they\'re expected to close independently?' },
  { area: 'Sales Leadership', detail: 'Is someone running real pipeline reviews? Are reps being coached on specific deals — or just told to hit the number?' },
]

const needAuditSigns = [
  'Revenue is flat or declining despite increased sales activity',
  'You\'ve replaced reps and the problem persists',
  'Forecasts are consistently wrong — high or low',
  'You don\'t know where in the process deals are actually dying',
  'You\'re about to make a significant sales hire and want to set them up to succeed',
  'Pipeline is growing but close rates are falling',
]

const faqs = [
  {
    q: 'What is a sales audit?',
    a: 'A sales audit is a structured review of your entire sales operation — the process, the pipeline, the team, the metrics, and the management system. The goal is to find where revenue is leaking and why, then build a specific plan to fix it.',
  },
  {
    q: 'How long does a sales audit take?',
    a: 'A thorough sales audit typically takes 2–3 weeks for a company with 1–10 reps. It includes deal-level pipeline review, rep interviews, process documentation review, metrics analysis, and a findings presentation with prioritized recommendations.',
  },
  {
    q: 'What does a sales audit cost?',
    a: 'It varies by scope and company size. As a fractional sales leader, I often conduct the audit as the first phase of an engagement — so you\'re not paying for an audit and then separately paying for fixes. The findings become the roadmap.',
  },
  {
    q: 'Can I do a sales audit myself?',
    a: 'You can do a version of it — but the most valuable audits are done by someone outside the system. It\'s hard to see what\'s broken when you\'re inside it every day. An outside perspective catches things founders and managers consistently miss because they\'ve normalized the dysfunction.',
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
      headline: 'What Is a Sales Audit — And Does Your Business Need One?',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/what-is-a-sales-audit',
    },
  ],
}

export default function WhatIsASalesAuditPage() {
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
              {v('heroLine1', 'What Is a Sales Audit')}
              <span className="block text-blue-400">{v('heroAccent', '— And Does Your Business Need One?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "If revenue isn't growing the way your activity levels suggest it should, something in your sales system is broken. A sales audit tells you exactly what — and where to fix it first.")}
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
                Build a sales process →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* What a Sales Audit Covers */}
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
              What a Sales Audit Covers
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              A real audit goes deeper than "are your reps making enough calls." It examines every layer of the revenue system.
            </motion.p>
            <div className="space-y-4">
              {auditCovers.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <Search className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <span className="font-bold text-neutral-900">{item.area}: </span>
                    <span className="text-neutral-700">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Do You Need One */}
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
              Signs You Need a Sales Audit
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              If two or more of these are true, a structured audit will almost certainly pay for itself.
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-2">
              {needAuditSigns.map((sign, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-neutral-700">{sign}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Struggling with a specific issue?{' '}
                <Link href="/why-sales-team-not-growing-revenue" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  Why your sales team isn't growing revenue →
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
              {v('aboutBio2', "I conduct sales audits as the first phase of every engagement — because you can't fix what you haven't diagnosed. The audit findings become the roadmap that drives everything we do together.")}
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
              {v('ctaHeadline', "Let's Find Out What's Really Breaking Your Revenue")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can give you a preliminary read on your biggest sales system gaps — and what a full audit would uncover.")}
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
