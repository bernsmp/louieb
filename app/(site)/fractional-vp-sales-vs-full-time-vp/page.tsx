'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const comparison = [
  {
    category: 'Cost',
    fractional: '$6,000–$14,000/month retainer',
    fullTime: '$180,000–$280,000/year base + equity + benefits',
  },
  {
    category: 'Time to productivity',
    fractional: 'Week 1 — they\'ve done this before',
    fullTime: '3–6 months before they\'re fully up to speed',
  },
  {
    category: 'Commitment',
    fractional: 'Month-to-month or short contract — stop anytime',
    fullTime: 'Full-time employee — legal, severance, and disruption to exit',
  },
  {
    category: 'Experience level',
    fractional: 'Senior, battle-tested — has seen your exact problems before',
    fullTime: 'Varies widely — hard to assess until they\'re already in the seat',
  },
  {
    category: 'Equity',
    fractional: 'None required',
    fullTime: 'Significant equity expected at VP level',
  },
  {
    category: 'Risk if it doesn\'t work',
    fractional: 'Low — end the engagement, lessons learned',
    fullTime: 'High — months of disruption, recruiting cost, reset',
  },
  {
    category: 'Right stage',
    fractional: '$1M–$15M ARR — building systems, proving repeatability',
    fullTime: '$15M+ ARR — when you need full-time focus and a dedicated leader',
  },
]

const faqs = [
  {
    q: 'What does a fractional VP of Sales actually do?',
    a: 'Everything a full-time VP does — builds the sales process, coaches the team, sets pipeline standards, runs deal reviews, defines ICP, creates the playbook — but on a part-time retainer. You get senior leadership without the full-time cost. Most of my clients are at $1M–$10M ARR and aren\'t ready for a $220k+ full-time hire.',
  },
  {
    q: 'When does a fractional VP make more sense than a full-time VP?',
    a: 'When you\'re still building the system, not just scaling an existing one. A full-time VP needs a working process to manage. A fractional VP helps you build that process — the ICP definition, the playbook, the pipeline stages, the rep management framework. Once that\'s built and you\'re scaling a repeatable motion, then you hire full-time.',
  },
  {
    q: 'Can a fractional VP manage my existing sales reps?',
    a: 'Yes. I work with and manage existing reps — running 1:1s, deal reviews, performance coaching, and pipeline management. The fractional model works well when you have 1–4 reps who need a real leader but the company can\'t justify or afford a full-time VP yet.',
  },
  {
    q: 'What does a fractional VP of Sales cost?',
    a: 'My retainers run $6,000–$14,000/month depending on scope and time commitment. Compare that to a full-time VP at $180k–$280k base — plus equity, benefits, and the 3–6 months of ramp time before they\'re producing. Most founders at the $1M–$10M stage find the fractional model delivers more per dollar at that stage.',
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
      name: 'Fractional VP of Sales',
      provider: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      description: 'Fractional VP of Sales vs full-time VP — when to hire fractional, what it costs, and what you actually get.',
      url: 'https://louiebernstein.com/fractional-vp-sales-vs-full-time-vp',
      offers: { '@type': 'Offer', priceRange: '$6,000–$14,000/month' },
    },
  ],
}

export default function FractionalVpSalesVsFullTimePage() {
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
                Sales Leadership Decision
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              >
                Fractional VP of Sales
                <span className="block text-blue-400">vs. Full-Time VP</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
              >
                The question isn&apos;t which is better. It&apos;s which is right for where you are now.
                At $1M–$10M ARR, the answer is almost always fractional — and here&apos;s why.
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

      {/* Comparison Table */}
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
              Side-by-Side Comparison
            </motion.h2>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="px-6 py-4 text-left font-semibold text-neutral-600">Category</th>
                    <th className="px-6 py-4 text-left font-semibold text-blue-700">Fractional VP</th>
                    <th className="px-6 py-4 text-left font-semibold text-neutral-500">Full-Time VP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 font-medium text-neutral-800">{row.category}</td>
                      <td className="px-6 py-4 text-neutral-700">
                        <span className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          {row.fractional}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-neutral-500">{row.fullTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When Each Makes Sense */}
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              When to Choose Each
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 text-lg font-bold text-blue-800">Choose Fractional When…</h3>
                <ul className="space-y-3">
                  {[
                    'You\'re at $1M–$15M ARR and still building the sales system',
                    'You need a senior leader but can\'t justify $220k+ full-time',
                    'You have 1–4 reps who need real management and coaching',
                    'You want to test and prove the sales model before a big hire',
                    'You\'re not sure what "VP of Sales" should look like at your company yet',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-neutral-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-neutral-700">Choose Full-Time When…</h3>
                <ul className="space-y-3">
                  {[
                    'You\'re at $15M+ ARR with a proven, repeatable sales motion',
                    'You need someone embedded full-time managing a large team',
                    'The sales system is built — you need scale, not construction',
                    'You can justify the full cost: base, equity, benefits, ramp time',
                    'You\'ve already used a fractional leader to prove the model',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-600">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
              I work with founders at $1M–$15M ARR who need real sales leadership but aren&apos;t ready
              for a full-time VP. I&apos;ve lived both sides of this — as a founder who built and sold
              without a VP, and as the fractional leader who comes in and builds what was missing.
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
              Not Sure Which Is Right for You?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. I&apos;ll tell you honestly whether you need
              fractional leadership or a full-time hire — and what to build before you do either.
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
