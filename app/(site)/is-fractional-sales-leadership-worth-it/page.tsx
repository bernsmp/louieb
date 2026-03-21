'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'

const CMS_SECTION = "seoFslWorthIt"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const worksWhen = [
  {
    title: 'You\'ve already proven the product sells',
    detail: 'Fractional leadership accelerates a working sales motion. If you haven\'t closed 10–20 customers yourself, you don\'t have a motion to accelerate yet. Build that first.',
  },
  {
    title: 'You commit to the engagement duration',
    detail: 'Sales systems take 90 days to build and another 90 to prove. Founders who treat fractional leadership like a 30-day experiment don\'t see results. Founders who commit 6–12 months consistently do.',
  },
  {
    title: 'You\'re willing to be involved, not just hands-off',
    detail: 'Fractional leadership works best when the founder stays close — attending key deals, reviewing the playbook, reinforcing the process. It\'s not a delegation. It\'s a partnership.',
  },
  {
    title: 'You\'re at the right stage — $1M to $15M ARR',
    detail: 'Before $1M, you usually still need to sell yourself. After $15M, you likely need a full-time VP. The fractional model has the highest leverage in the $1M–$15M window.',
  },
  {
    title: 'You\'re hiring or managing a small sales team',
    detail: 'If you have 1–5 reps without real leadership, a fractional leader transforms the team. Coaching, accountability, and a system around their activity changes performance dramatically.',
  },
]

const doesntWorkWhen = [
  'You want to delegate sales entirely and stop being involved',
  'You\'re looking for someone to generate leads for you (that\'s demand gen, not sales leadership)',
  'You haven\'t validated that the product sells yet',
  'You expect 30-day results in a 6–9 month sales cycle business',
  'You\'re not willing to document anything or build a playbook',
]

const outcomes = [
  'A documented Sales Playbook your reps actually use',
  'Consistent pipeline stages that reflect reality, not wishful thinking',
  'Reps who hit activity metrics and improve quarter over quarter',
  'A hiring and onboarding system so the next rep ramps in 60 days, not 6 months',
  'A founder who is no longer the only person who can close deals',
  'A sales operation that a future full-time VP can step into and run',
]

const defaultFaqs = [
  {
    q: 'How do I know if fractional sales leadership will actually work for my company?',
    a: 'Ask yourself three questions: Have you closed 10–20 customers yourself? Do you have at least one sales rep (or are ready to hire)? Are you willing to commit 6+ months to building the system? If yes to all three, fractional sales leadership will almost certainly move the needle. The model fails when founders expect magic in 30 days or aren\'t willing to stay involved.',
  },
  {
    q: 'What results should I realistically expect?',
    a: 'In the first 90 days: a documented Sales Playbook, defined ICP, clean pipeline stages, and reps operating off a system instead of instinct. By month 6: measurable improvement in rep activity metrics, shorter sales cycles, and a pipeline you can actually forecast from. Revenue acceleration is real but takes longer — sales cycles don\'t compress overnight.',
  },
  {
    q: 'What\'s the biggest reason fractional sales leadership fails?',
    a: 'Misaligned expectations on timeline. Founders who expect a fractional leader to generate leads, close deals, and deliver revenue in 60 days are disappointed. Fractional sales leadership is about building the system — the playbook, the pipeline process, the rep coaching infrastructure. That work shows up in the revenue numbers, but not in the first quarter.',
  },
  {
    q: 'How do I measure whether it\'s working?',
    a: 'Month 1–3: Are we building the right things? Playbook documented. Pipeline stages action-based. Reps running consistent discovery calls. Month 3–6: Are activity metrics improving? More qualified calls, shorter time in each stage, fewer deals dying without a clear reason. Month 6+: Are close rates improving? Is average deal size growing? Is the founder less involved in individual deals?',
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: defaultFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'Article',
      headline: 'Is Fractional Sales Leadership Worth It? An Honest Assessment',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      publisher: { '@type': 'Person', name: 'Louie Bernstein' },
      url: 'https://louiebernstein.com/is-fractional-sales-leadership-worth-it',
      description: 'An honest look at when fractional sales leadership works, when it doesn\'t, and what outcomes you should realistically expect.',
    },
  ],
}

export default function IsFractionalSalesLeadershipWorthItPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION);
  const faqs = cmsfaqs(4, defaultFaqs);
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
                Honest Assessment
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              >
                {v("heroLine1", "Is Fractional Sales Leadership")}
                <span className="block text-blue-400">{v("heroAccent", "Worth It?")}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
              >
                {v("heroDescription", "The honest answer: it depends on where you are and what you're willing to commit to. Here's when it works, when it doesn't, and what you should realistically expect.")}
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
                  href="/when-to-hire-a-fractional-sales-leader"
                  className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
                >
                  When to hire a fractional sales leader →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </HeroBackground>

      {/* When It Works / Doesn't */}
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
              className="mb-10 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              When It Works
            </motion.h2>
            <div className="space-y-4">
              {worksWhen.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="mb-2 font-bold text-neutral-900">{item.title}</h3>
                      <p className="text-neutral-600">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              When It Doesn&apos;t
            </motion.h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <ul className="space-y-3">
                {doesntWorkWhen.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
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
              What a Successful Engagement Produces
            </motion.h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span className="text-neutral-700">{outcome}</span>
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
              {v("aboutBio1", "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v("aboutBio2", "I've had founders tell me upfront it won't work at their company. Some were right. Most weren't. If you want an honest answer about whether fractional sales leadership makes sense for your situation, book 30 minutes and I'll tell you straight.")}
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
              {faqs.map((faq, i) => (
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
              {v("ctaHeadline", "Let's Find Out If It's Worth It for You")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v("ctaDescription", "30 minutes. I'll ask you about where you are, what's working and what isn't, and tell you honestly whether fractional sales leadership is the right next move.")}
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
