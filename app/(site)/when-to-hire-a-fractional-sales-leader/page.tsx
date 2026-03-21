'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, AlertCircle } from 'lucide-react'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const readySigns = [
  {
    title: 'You\'re closing deals — but founder-led sales won\'t scale',
    detail: 'You\'ve proven the product sells. You\'ve closed 10–30 customers yourself. But you\'re the bottleneck — every deal needs your involvement and you can\'t keep up.',
  },
  {
    title: 'You have reps but no one managing them properly',
    detail: 'You hired 1–3 salespeople, but without a real sales leader, they\'re winging it. No consistent process, no real pipeline hygiene, no coaching. Performance is uneven and you don\'t know why.',
  },
  {
    title: 'You know you need a VP but can\'t afford one yet',
    detail: 'A full-time VP of Sales costs $180k–$280k base before equity. At $1M–$8M ARR, that\'s a huge bet. A fractional leader gives you the same strategic capability for $6,000–$14,000/month.',
  },
  {
    title: 'You need the sales system built, not just managed',
    detail: 'You don\'t have a documented playbook, defined pipeline stages, or a repeatable onboarding process for reps. You need someone who\'s built these before — not someone learning on your dime.',
  },
  {
    title: 'You\'re approaching a fundraise or entering a new market',
    detail: 'Investors want to see a credible sales leader on the team. A fractional engagement gives you that presence, with a track record of results, without the full-time commitment.',
  },
]

const notReadySigns = [
  'You haven\'t closed 10+ customers yourself yet — you don\'t know enough about why you win',
  'You have no salespeople yet and just need someone to sell for you (that\'s a rep, not a leader)',
  'Your product isn\'t stable enough to build a repeatable process around',
  'You want to delegate sales entirely and stop being involved',
]

const faqs = [
  {
    q: 'What does a fractional sales leader actually do day-to-day?',
    a: 'Builds and documents the sales playbook. Defines ICP and pipeline stages. Coaches reps through weekly 1:1s and deal reviews. Sets activity KPIs. Runs forecasting. Interviews and onboards new reps. Participates in key deals as needed. The scope varies by engagement, but it\'s real sales leadership — not consulting from a distance.',
  },
  {
    q: 'How long does a fractional engagement typically last?',
    a: 'Most engagements run 6–18 months. The first 90 days are diagnostic and build phase — understanding the current state, building foundational systems, getting reps operating off a real playbook. From there, it becomes ongoing leadership. Some founders keep a fractional leader for years. Others transition to a full-time hire once the system is proven.',
  },
  {
    q: 'How is a fractional sales leader different from a sales consultant?',
    a: 'A consultant delivers a report or recommendations and leaves. A fractional sales leader is embedded — they\'re actually in the business, managing people, running meetings, making calls, coaching deals in real time. You\'re not paying for advice. You\'re paying for execution and leadership.',
  },
  {
    q: 'What\'s the right ARR range to bring in a fractional sales leader?',
    a: 'Most founders in my experience are best positioned to benefit at $1M–$15M ARR. Before $1M, you usually need to keep selling yourself until you understand the pattern. After $15M, you likely need a full-time VP. The $1M–$15M window is where fractional leadership has the highest leverage — the model is proving itself and you need a real system around it.',
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
      '@type': 'Service',
      name: 'Fractional Sales Leadership',
      provider: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      description: 'When to hire a fractional sales leader — the signs you\'re ready, what to expect, and how to make it work.',
      url: 'https://louiebernstein.com/when-to-hire-a-fractional-sales-leader',
      offers: { '@type': 'Offer', priceRange: '$6,000–$14,000/month' },
    },
  ],
}

export default function WhenToHireFractionalSalesLeaderPage() {
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
                When to Hire a
                <span className="block text-blue-400">Fractional Sales Leader</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
              >
                Most founders wait too long — or move too early. Here are the specific signals that
                tell you it&apos;s time to bring in a fractional sales leader.
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
                  href="/fractional-vp-of-sales-for-small-businesses"
                  className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
                >
                  About fractional VP of Sales →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </HeroBackground>

      {/* Ready Signs */}
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
              5 Signs You&apos;re Ready
            </motion.h2>
            <div className="space-y-4">
              {readySigns.map((sign, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="mb-2 font-bold text-neutral-900">{sign.title}</h3>
                      <p className="text-neutral-600">{sign.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not Ready Signs */}
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
              Signs You&apos;re Not Ready Yet
            </motion.h2>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <ul className="space-y-3">
                {notReadySigns.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    {sign}
                  </li>
                ))}
              </ul>
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
              I&apos;m Louie Bernstein — I have 50 years in business experience, including 22 as a
              bootstrapped founder. My Fractional Sales Leadership business has been helping
              founders since 2017.
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              I&apos;ve seen founders hire fractional leadership too early and too late. Both are costly.
              If you&apos;re not sure which camp you&apos;re in, let&apos;s talk — I&apos;ll tell you honestly.
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
              {faqs.map((faq, i) => (
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
              Ready to Talk About Whether It&apos;s Time?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. I&apos;ll look at where you are and tell you
              honestly whether fractional sales leadership makes sense right now — or what needs to
              be in place first.
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
