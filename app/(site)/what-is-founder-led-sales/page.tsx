'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatIsFounderLedSales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const stages = [
  {
    stage: 'Stage 1: It Works',
    description: 'You close deals because you know the product, the pain, and the pitch better than anyone. Revenue grows. You look like a natural salesperson.',
  },
  {
    stage: 'Stage 2: It Scales — Sort Of',
    description: 'You hire a rep. They struggle. You close the hard deals yourself. Revenue still depends on you personally being in the room.',
  },
  {
    stage: 'Stage 3: It Breaks',
    description: 'You can\'t clone yourself. The pipeline depends on your calendar. You\'re the bottleneck for growth — and you know it.',
  },
]

const warningSigns = [
  'You\'re still on the majority of sales calls',
  'Your reps can\'t close without you on the call',
  'The sales process exists only in your head',
  'Revenue dips whenever you travel or take time off',
  'You can\'t predict next quarter\'s revenue with confidence',
  'New reps fail because nobody trained them on your actual process',
]

const faqs = [
  {
    q: 'What exactly is founder-led sales?',
    a: 'Founder-led sales is when the founder or CEO personally handles most or all of the selling — taking calls, running demos, closing deals. It\'s normal and often necessary in the early stages when the product is unproven and you need direct market feedback. The problem starts when it never transitions to a scalable system.',
  },
  {
    q: 'When does founder-led sales break down?',
    a: 'It typically breaks between $1M and $5M ARR. By then you\'ve proven product-market fit, but your growth is capped by your personal capacity. You can\'t clone yourself, and the sales process that lives in your head can\'t be handed to a rep without months of failure.',
  },
  {
    q: 'Can I just hire a VP of Sales to replace me?',
    a: 'Not yet — and this is where most founders make an expensive mistake. Hiring a VP of Sales before you have a documented, repeatable process sets them up to fail. They inherit chaos. A better path is to first document and systematize what you do, then hire to scale it.',
  },
  {
    q: 'How do I transition out of founder-led sales?',
    a: 'You extract the process from your head and put it on paper: your ICP, your objection responses, your demo flow, your close sequence. Then you train reps on that system — not on shadowing you. Many founders hire a fractional sales leader to do this extraction work before making a full-time VP hire.',
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
      headline: 'What Is Founder-Led Sales — And Why It Eventually Breaks',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/what-is-founder-led-sales',
    },
  ],
}

export default function WhatIsFounderLedSalesPage() {
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
              Founder Sales
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Is Founder-Led Sales')}
              <span className="block text-blue-400">{v('heroAccent', '— And Why It Eventually Breaks')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Every founder starts here. You close the first deals yourself — and it works. Then it stops working. Here's the lifecycle of founder-led sales and the moment you need to change it.")}
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
                href="/how-to-replace-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to replace founder-led sales →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* The 3 Stages */}
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
              The 3 Stages of Founder-Led Sales
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Every company that grows past $500K goes through this arc. Most founders don't realize they're in Stage 3 until the damage is already done.
            </motion.p>
            <div className="space-y-6">
              {stages.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{s.stage}</h3>
                  <p className="text-neutral-700">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warning Signs */}
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
              Warning Signs Your Founder-Led Sales Is Breaking
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              If three or more of these are true, you're already in Stage 3.
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-white p-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-neutral-700">{sign}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-10 rounded-xl bg-blue-50 border border-blue-200 p-6 text-center">
              <p className="text-neutral-700 mb-4">
                The fix isn't to work harder. It's to extract your sales process from your head and turn it into a system your team can run.{' '}
                <Link href="/how-to-replace-founder-led-sales" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  See how to replace founder-led sales →
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
              {v('aboutBio2', "I've lived founder-led sales from the inside — as the founder who was the bottleneck and had to build a system to get out of it. Now I help founders at $1M–$15M ARR do the same thing.")}
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
              {v('ctaHeadline', 'Ready to Build a Sales System That Runs Without You?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "Let's spend 30 minutes mapping out what it would take to get you out of founder-led sales — and what needs to be built first.")}
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
