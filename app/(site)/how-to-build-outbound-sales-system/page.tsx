'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoBuildOutboundSalesSystem'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const buildingBlocks = [
  {
    number: '01',
    title: 'Define a Tight ICP Before You Write a Single Email',
    body: 'Outbound fails when the list is wrong — not when the email is wrong. Before you build sequences, define exactly who you\'re targeting: industry, company size, revenue stage, job title, and the specific trigger event that makes them a buyer now.',
  },
  {
    number: '02',
    title: 'Build a Messaging Framework Around Their Pain',
    body: 'Your outreach should start with their problem — not your product. Write 3–5 core pain statements that resonate with your ICP. Every email, call, and LinkedIn message should map to one of these.',
  },
  {
    number: '03',
    title: 'Create a Multi-Touch Sequence (Not Just Emails)',
    body: 'Effective outbound uses 7–10 touches over 3–4 weeks: cold email, phone, LinkedIn, and follow-up email in combination. Single-channel, single-touch outbound almost never works at scale.',
  },
  {
    number: '04',
    title: 'Build Your Prospecting List Deliberately',
    body: 'Use LinkedIn Sales Navigator, Apollo, or ZoomInfo to build lists that match your ICP criteria exactly. Prioritize accounts with trigger events: new funding, leadership changes, hiring surges in sales or ops.',
  },
  {
    number: '05',
    title: 'Set Up a CRM to Track Every Touch',
    body: 'You need to know open rates, reply rates, meeting rates, and conversion rates at every stage. Without tracking, you can\'t improve. Even HubSpot\'s free tier is enough to start.',
  },
  {
    number: '06',
    title: 'Run Weekly Reviews on What\'s Working',
    body: 'Review reply rate by message variant, meeting booked rate by list segment, and close rate from outbound-sourced deals. Double down on what converts and kill what doesn\'t.',
  },
]

const outboundMetrics = [
  { metric: 'Open Rate', benchmark: '40–60%', note: 'Below 30% means subject lines need work' },
  { metric: 'Reply Rate', benchmark: '5–15%', note: 'Below 3% means messaging or ICP is off' },
  { metric: 'Meeting Booked Rate', benchmark: '2–8%', note: 'Per 100 prospects contacted' },
  { metric: 'Outbound → Close Rate', benchmark: '15–25%', note: 'Of booked meetings that become customers' },
]

const faqs = [
  {
    q: 'How long does it take to build an outbound system from scratch?',
    a: 'With focused effort, you can have a working outbound system — ICP defined, sequences built, CRM configured, list loaded — in 30 days. Expect 60–90 days before you have enough data to optimize. Most companies see their first consistent outbound-sourced revenue by month three.',
  },
  {
    q: 'Do I need a dedicated SDR to run outbound?',
    a: 'Not at first. Many founders at $1M–$5M ARR run outbound themselves or with one versatile rep before adding a dedicated SDR. The sequence infrastructure does most of the heavy lifting once it\'s set up. An SDR makes sense once you\'ve proven the messaging and want to scale volume.',
  },
  {
    q: 'Cold email is dead, isn\'t it?',
    a: 'Spray-and-pray cold email is dead. Personalized, problem-focused outreach to a tightly defined ICP — sent from a properly configured domain — still generates pipeline. The bar is higher than it was in 2018, but quality outbound works. Most "cold email is dead" takes are from people who never built it right.',
  },
  {
    q: 'What tools do I need to build an outbound system?',
    a: 'At minimum: a CRM (HubSpot free tier works), a sequencing tool (Apollo, Outreach, or Salesloft), and a prospect list source (LinkedIn Sales Navigator or Apollo). Total cost for early-stage: $200–$400/month. Don\'t buy more than you can use — the system matters more than the stack.',
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
      headline: 'How to Build an Outbound Sales System From Scratch',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-build-outbound-sales-system',
    },
  ],
}

export default function HowToBuildOutboundSalesSystemPage() {
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
              Sales Systems
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Build an Outbound Sales System')}
              <span className="block text-blue-400">{v('heroAccent', 'From Scratch')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Waiting for inbound is not a growth strategy at $1M–$10M ARR. Here's the 6-step system to build outbound pipeline that fills your calendar without relying on referrals or luck.")}
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
                href="/how-to-hire-first-sales-rep"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Hiring your first sales rep →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 6 Building Blocks */}
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
              The 6 Building Blocks of an Outbound System
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Outbound isn't about volume — it's about precision. These are the components you need in place before you send a single message.
            </motion.p>
            <div className="space-y-6">
              {buildingBlocks.map((block, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{block.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{block.title}</h3>
                    <p className="text-neutral-700">{block.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benchmarks */}
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
              Outbound Benchmarks Worth Knowing
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              If your numbers are significantly below these, something in the system needs fixing — not more volume.
            </motion.p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-6 py-4 text-left font-semibold text-neutral-600">Metric</th>
                    <th className="px-6 py-4 text-left font-semibold text-blue-700">Healthy Benchmark</th>
                    <th className="px-6 py-4 text-left font-semibold text-neutral-500">What Low Numbers Mean</th>
                  </tr>
                </thead>
                <tbody>
                  {outboundMetrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 font-medium text-neutral-800">{row.metric}</td>
                      <td className="px-6 py-4 text-blue-700 font-semibold">{row.benchmark}</td>
                      <td className="px-6 py-4 text-neutral-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Want to understand how outbound fits into a full sales system?{' '}
                <Link href="/build-sales-team-after-1m-arr" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  Build a complete sales team after $1M ARR →
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
              {v('aboutBio2', "I've built outbound systems from scratch for founders who were entirely referral-dependent — turning them into companies with predictable pipeline that doesn't disappear when a referral source goes quiet.")}
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
              {v('ctaHeadline', "Let's Build Your Outbound Pipeline")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map out exactly what your outbound system needs — ICP, messaging, sequence structure, and the metrics that tell you it's working.")}
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
