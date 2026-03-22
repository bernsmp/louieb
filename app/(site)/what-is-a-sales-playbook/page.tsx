'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, BookOpen } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatIsASalesPlaybook'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const playbookContents = [
  { section: 'Ideal Customer Profile (ICP)', detail: 'A written definition of exactly who you sell to — industry, company size, job title, pain triggers, and disqualifiers.' },
  { section: 'Prospecting & Outreach', detail: 'How reps find leads, what outreach sequences they run, approved messaging templates, and call scripts.' },
  { section: 'Discovery Framework', detail: 'The questions reps ask in every first call — structured to uncover real pain and qualify or disqualify quickly.' },
  { section: 'Demo or Pitch Playbook', detail: 'What to show, in what order, and how to tailor the narrative to different buyer personas and pain points.' },
  { section: 'Objection Handling Guide', detail: 'Written responses to the 10–15 most common objections, with language your best rep actually uses.' },
  { section: 'Close & Follow-Up Sequences', detail: 'What happens after every meeting — the email, the next step, the timeline, and how to advance a stalled deal.' },
]

const noPlaybookSigns = [
  'Every rep closes differently — no consistent process',
  'New reps take 6+ months to become productive',
  'You lose deals and aren\'t sure why',
  'The founder or top rep has to ride along to close anything',
  'Coaching means telling reps to "make more calls"',
  'Your best rep leaving would be catastrophic',
]

const faqs = [
  {
    q: 'What is a sales playbook?',
    a: 'A sales playbook is a documented guide that defines how your sales team sells — your ICP, outreach sequences, discovery questions, objection responses, demo structure, and close process. It\'s the system that lets any trained rep replicate what your best rep does.',
  },
  {
    q: 'How long does it take to build a sales playbook?',
    a: 'With focused effort, a foundational playbook can be built in 4–6 weeks. The first version doesn\'t need to be perfect — it needs to exist. You\'ll refine it based on what actually works in the field over the following quarter.',
  },
  {
    q: 'Who should build the sales playbook?',
    a: 'Ideally, your best sales performer and a sales leader work on it together. The top rep provides the real-world patterns that actually close deals. The leader provides the structure and process discipline. Many founders bring in a fractional sales leader specifically for this work.',
  },
  {
    q: 'How do I get my reps to actually use the playbook?',
    a: 'Build it with them, not for them. Use call recordings to validate the content. Reference it in pipeline reviews. Make it the basis of coaching conversations. A playbook no one uses is a document — a playbook embedded in your process is a system.',
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
      headline: 'What Is a Sales Playbook — And Does Your Business Have One?',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/what-is-a-sales-playbook',
    },
  ],
}

export default function WhatIsASalesPlaybookPage() {
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
              {v('heroLine1', 'What Is a Sales Playbook')}
              <span className="block text-blue-400">{v('heroAccent', '— And Does Your Business Have One?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "If your sales process lives in your best rep's head, you don't have a playbook — you have a dependency. Here's what a real sales playbook contains and how to know if your business needs one.")}
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

      {/* What a Playbook Contains */}
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
              What a Sales Playbook Contains
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              A real playbook is more than a script. It documents every stage of your sales motion so any trained rep can execute it.
            </motion.p>
            <div className="space-y-4">
              {playbookContents.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <span className="font-bold text-neutral-900">{item.section}: </span>
                    <span className="text-neutral-700">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signs You Don't Have One */}
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
              Signs You Don't Have a Real Playbook
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Most companies think they have a playbook. What they actually have is a PDF nobody reads.
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-2">
              {noPlaybookSigns.map((sign, i) => (
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
                Ready to build the system?{' '}
                <Link href="/how-to-build-outbound-sales-system" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  How to build an outbound sales system from scratch →
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
              {v('aboutBio2', "Building the sales playbook is often the first thing I do in a new engagement — because everything else depends on it. If your process isn't documented, coaching is impossible and scale is a fantasy.")}
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
              {v('ctaHeadline', "Let's Build Your Sales Playbook")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you what's missing from your current process — and what it would take to build a playbook your reps will actually use.")}
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
