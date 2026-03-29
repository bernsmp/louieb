'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatIsSalesEnablement'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const components = [
  {
    number: '01',
    title: 'Content & Messaging',
    body: 'The materials reps use to move deals forward — one-pagers, case studies, competitive battle cards, email templates, and talk tracks. Without this, every rep invents their own pitch. Some win. Most lose inconsistently and nobody knows why.',
  },
  {
    number: '02',
    title: 'Training & Onboarding',
    body: 'A structured program that gets new reps to their first close in 60–90 days, not 6 months. It includes product knowledge, ICP understanding, discovery frameworks, and live call practice — not a stack of PDFs and a Zoom login.',
  },
  {
    number: '03',
    title: 'Playbooks & Process',
    body: 'Documented stage-by-stage guidance on how to move deals from first contact to closed-won. A real playbook tells reps what to do at each stage, what questions to ask, what objections to expect, and what constitutes a real exit criterion.',
  },
  {
    number: '04',
    title: 'CRM & Technology',
    body: 'Tools that make reps faster, not slower. A well-configured CRM that reflects the actual sales process, not the default demo setup. Sequences that automate follow-up. Dashboards that surface real pipeline health rather than vanity metrics.',
  },
  {
    number: '05',
    title: 'Coaching & Feedback Loops',
    body: 'Regular call reviews, deal reviews, and one-on-ones that surface what\'s actually happening in the field. The best sales enablement isn\'t a document — it\'s a system that continuously improves how reps sell based on real data from real deals.',
  },
]

const comparison = [
  { without: 'Every rep pitches differently — wins feel random', with: 'Consistent messaging across the team — wins are repeatable' },
  { without: 'New hires take 5–6 months to close their first deal', with: 'Structured onboarding produces first close in 60–90 days' },
  { without: 'Deal stage definitions are vague or ignored', with: 'Clear exit criteria drive accurate pipeline and forecasting' },
  { without: 'Reps create their own content — quality varies wildly', with: 'Approved materials that work are used consistently' },
  { without: 'Coaching is reactive — after a deal is already lost', with: 'Proactive coaching based on call reviews and stage data' },
  { without: 'CRM is a burden reps avoid filling in', with: 'CRM is a tool reps use because it helps them sell' },
]

const signals = [
  { signal: 'New reps take longer than 90 days to close their first deal', yes: false },
  { signal: 'Your best rep\'s departure would significantly hurt the number', yes: false },
  { signal: 'Reps handle the same objection differently every time', yes: false },
  { signal: 'You don\'t know your stage-to-stage conversion rates', yes: false },
  { signal: 'Content creation falls on the founder or one senior rep', yes: false },
  { signal: 'Your CRM data is incomplete, stale, or not trusted', yes: false },
]

const faqs = [
  {
    q: 'Is sales enablement only for large companies with dedicated teams?',
    a: 'No — and this is the most expensive misconception in B2B sales. The companies that benefit most from sales enablement are $1M–$10M businesses where every rep\'s performance matters and there\'s no margin for a slow ramp or an inconsistent pitch. You don\'t need a dedicated enablement team. You need documented processes, real training, and a playbook. A fractional sales leader can build all three.',
  },
  {
    q: 'What\'s the difference between sales enablement and sales training?',
    a: 'Sales training is one component of sales enablement. Enablement is the full system: content, training, playbooks, tools, and coaching loops. Training tells reps what to do. Enablement ensures they have everything they need to do it consistently — and a feedback loop to keep improving.',
  },
  {
    q: 'How long does it take to build a sales enablement system?',
    a: 'The core infrastructure — playbook, onboarding program, basic content library, and CRM setup — can be built in 60–90 days. The coaching and feedback loops take longer to mature because they require data from real deals. Most companies see measurable improvement in ramp time and close rates within 90 days of having the basics in place.',
  },
  {
    q: 'Can a founder build sales enablement without hiring a VP of Sales?',
    a: 'Yes — and this is often the right sequence. Build the enablement system first: document how you sell, create the playbook, set up the CRM properly, and define what good looks like. Then hire. A rep onboarded into a functioning system closes faster and stays longer than a rep hired into chaos. A fractional sales leader can build this system at a fraction of the cost of a VP hire.',
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
      headline: 'What Is Sales Enablement? And Why Your Small Team Desperately Needs It',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/what-is-sales-enablement',
    },
  ],
}

export default function WhatIsSalesEnablementPage() {
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
              {v('heroLine1', 'What Is Sales Enablement?')}
              <span className="block text-blue-400">{v('heroAccent', 'And Why Your Small Team Desperately Needs It')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Sales enablement is the system that gives your reps everything they need to sell consistently — the content, training, process, tools, and coaching. Without it, your team is improvising. Here's what it actually includes and how to build it.")}
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
                href="/what-is-a-sales-playbook"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is a sales playbook? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Components */}
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
              The 5 Components of Sales Enablement
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Sales enablement isn't a single thing. It's a system with five interconnected parts — each one breaks without the others.
            </motion.p>
            <div className="space-y-6">
              {components.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-700">{item.body}</p>
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
              Sales enablement is one of the most misunderstood concepts in B2B sales — and one of the most consequential. Most founders assume it's a large-company problem: something you build after you have 20 reps and a dedicated operations team. The reality is the opposite. The companies that benefit most from sales enablement are small teams where every rep's performance matters and there's no budget to absorb a bad ramp or a string of inconsistent closes.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              At the $1M–$10M ARR stage, most sales enablement failures aren't about lack of effort — they're about lack of system. Reps are selling differently, pitching inconsistently, and onboarding slowly because nobody has built the infrastructure that makes selling teachable. That's what enablement fixes. If your team isn't performing the way you expect, a{' '}
              <Link href="/diagnose-sales-team-problems" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                sales team diagnostic →
              </Link>{' '}
              is the fastest way to identify which component is missing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
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
              With Sales Enablement vs. Without
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The difference shows up in every part of the sales operation — not just in the number.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">Without Sales Enablement</div>
                <div className="px-6 py-4 font-bold text-blue-400">With Sales Enablement</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.without}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.with}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signals you need it */}
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
              6 Signs Your Team Needs Sales Enablement Now
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              If any of these are true, the problem isn't the people — it's the system.
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {signals.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 rounded-full bg-red-100 p-1 text-red-700">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-red-900">{item.signal}</p>
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
              {v('aboutBio2', "Building sales enablement infrastructure is one of the first things I do in every engagement. In most cases, the reps aren't the problem — the system is. Give good people a real playbook, real training, and a real feedback loop, and performance improves within 60 days. Without those things, even great reps underperform.")}
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
              {v('ctaHeadline', "Ready to Build a Sales System Your Team Can Actually Use?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess which components of sales enablement your team is missing — and tell you exactly what to build first to move the number in 90 days.")}
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
