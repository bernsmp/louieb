'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seo250kMistakeVpSalesHire'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const failureTimeline = [
  {
    step: '01',
    title: 'The Hire Looks Great on Paper',
    body: 'You find someone with an impressive resume — Fortune 500 experience, a Rolodex of contacts, confident in the interview. You offer $180K base plus commission and equity. Deal closed.',
  },
  {
    step: '02',
    title: 'Months 1–3: Lots of Activity, No Revenue',
    body: 'Your new VP is busy — building decks, reorganizing the CRM, attending conferences. They talk about "pipeline" constantly. You see almost no new revenue. You assume it\'s a ramp.',
  },
  {
    step: '03',
    title: 'Months 4–6: The Explanations Start',
    body: 'The deals that were "almost closed" keep slipping. You hear about bad timing, wrong product fit, pricing concerns. The VP asks for more marketing support, better tools, a bigger team.',
  },
  {
    step: '04',
    title: 'Month 7–9: You Know It\'s Not Working',
    body: 'Revenue hasn\'t moved. You\'ve spent $135K+ in salary alone. You start having harder conversations. The VP doubles down on excuses. You realize the problem isn\'t external — it\'s the hire.',
  },
  {
    step: '05',
    title: 'Month 10–12: The Exit',
    body: 'You part ways. Add severance, recruiting fees, lost opportunity cost, and the distraction it caused to your business — and you\'re looking at $200K–$300K in real cost. And you\'re back to square one.',
  },
]

const realCosts = [
  { line: 'Base salary (10 months)', amount: '$150,000+' },
  { line: 'Recruiter fee (20–25% of base)', amount: '$30,000–$45,000' },
  { line: 'Benefits & employer taxes', amount: '$20,000–$30,000' },
  { line: 'Tools, travel, onboarding', amount: '$10,000–$20,000' },
  { line: 'Severance', amount: '$15,000–$30,000' },
  { line: 'Opportunity cost (lost deals)', amount: 'Incalculable' },
  { line: 'Total hard cost', amount: '$225,000–$325,000' },
]

const warningSignsNotReady = [
  {
    sign: 'You haven\'t sold 10+ deals yourself',
    why: 'If you haven\'t proven the sale, you can\'t train someone else to do it. A VP can\'t build a process that doesn\'t exist yet.',
  },
  {
    sign: 'Your ACV is under $15K',
    why: 'Low ACV deals require high volume. A VP of Sales at $180K base needs to drive $700K+ in new revenue just to break even on their cost.',
  },
  {
    sign: 'You don\'t have a repeatable sales process',
    why: 'A VP manages a process. They don\'t create one from nothing — at least not at enterprise comp. That\'s a different job.',
  },
  {
    sign: 'You\'re under $2M ARR',
    why: 'Most companies that hire a VP of Sales under $2M ARR do so too early. The infrastructure, deal flow, and management overhead aren\'t there yet.',
  },
  {
    sign: 'You\'re hiring to solve a motivation problem',
    why: 'If your current team isn\'t selling, a VP rarely fixes that. They need reps to manage — not a broken team to rescue.',
  },
  {
    sign: 'You expect them to carry a bag',
    why: 'VPs of Sales aren\'t individual contributors. If you need someone closing deals directly, hire a senior AE — not a VP.',
  },
]

const faqs = [
  {
    q: 'What should I hire instead of a VP of Sales at this stage?',
    a: 'At $1M–$5M ARR, most founders need a Fractional Sales Leader — someone with VP-level experience who works with you 2–3 days a week to build the process, coach the team, and establish the infrastructure. You get the strategic expertise at 30–40% of the cost, without the full-time commitment you can\'t yet support.',
  },
  {
    q: 'When IS the right time to hire a VP of Sales?',
    a: 'Generally: when you\'re at $3M–$5M+ ARR with a repeatable sales process already proven, a team of 3+ reps to manage, and deal flow that justifies executive-level oversight. Before that, you\'re paying VP comp to do Director or Manager work.',
  },
  {
    q: 'How much does a VP of Sales actually cost?',
    a: 'Total compensation (base + OTE + equity) for a VP of Sales typically runs $250K–$400K annually in the $5M–$20M ARR market. Add recruiting fees, benefits, and ramp period costs and you\'re looking at $300K–$500K in year one before they contribute meaningful revenue.',
  },
  {
    q: 'What if my VP of Sales candidate has a strong track record?',
    a: 'Track record matters — but context matters more. A VP who succeeded at a 200-person company with a full SDR team and mature playbook is a completely different hire than what a $2M ARR company needs. Ask candidates directly: have they ever built a sales process from zero? Most haven\'t.',
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
      headline: 'The $250,000 Mistake: What Happens When You Hire a VP of Sales Too Early',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/250k-mistake-vp-sales-hire-too-early',
    },
  ],
}

export default function VpSalesTooEarlyPage() {
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
              VP of Sales
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'The $250,000 Mistake:')}
              <span className="block text-blue-400">{v('heroAccent', 'Hiring a VP of Sales Too Early')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "It's the most expensive mistake early-stage founders make in sales. Here's exactly how it happens — and how to avoid it.")}
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
                href="/fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is a Fractional Sales Leader? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* How It Happens */}
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
              How It Happens — Almost Every Time
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The story varies in the details. The pattern is always the same.
            </motion.p>
            <div className="space-y-6">
              {failureTimeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{item.step}</div>
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

      {/* Real Cost Breakdown */}
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
              The Real Cost of a Failed VP of Sales Hire
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Most founders undercount the total cost. Here's what it actually adds up to.
            </motion.p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-6 py-4 text-left font-semibold text-neutral-600">Cost Line</th>
                    <th className="px-6 py-4 text-left font-semibold text-blue-700">Estimated Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {realCosts.map((row, i) => (
                    <tr key={i} className={i === realCosts.length - 1 ? 'bg-blue-50 font-bold' : i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 text-neutral-800">{row.line}</td>
                      <td className={`px-6 py-4 font-semibold ${i === realCosts.length - 1 ? 'text-blue-800' : 'text-blue-700'}`}>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              The question founders ask most often isn't "how much does a VP of Sales cost?" — it's "why didn't my VP of Sales hire work?" The answer is almost always the same: the company wasn't ready for what a VP of Sales actually does. A VP of Sales is a people manager, a process optimizer, and a strategic operator. They are not a do-it-all closer. At $1M–$3M ARR, most companies don't have enough deals, enough reps, or enough infrastructure to leverage what a VP does best.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The founders who avoid this mistake share one thing in common: they sought experienced sales leadership without the full-time VP overhead before they were ready to support it. Whether through a{' '}
              <Link href="/fractional-sales-leader-vs-sales-consultant" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                fractional sales leader
              </Link>{' '}
              or a trusted advisor, they got the strategic guidance they needed at a stage where a $250K+ full-time hire would have been a bet the company couldn't afford to lose.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-neutral-50 py-16 md:py-20">
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
              6 Signs You're Not Ready to Hire a VP of Sales
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              If any of these apply to you, pause. Fix the foundation before making the hire.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {warningSignsNotReady.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="mb-2 font-bold text-red-700">{item.sign}</h3>
                  <p className="text-sm text-neutral-600">{item.why}</p>
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
              {v('aboutBio2', "I've watched founders make the VP of Sales hiring mistake more times than I can count. I've also helped them recover — and build the sales infrastructure they needed first, so the next leadership hire actually sticks.")}
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
              {v('ctaHeadline', "Let's Talk Before You Make the Hire")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you whether you're ready for a VP of Sales — or what needs to happen first. No pitch, just an honest answer.")}
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
