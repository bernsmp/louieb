'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWarningSalesProcessBreaking'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const warningSigns = [
  {
    number: '01',
    sign: 'Deals Are Slipping — and Nobody Knows Why',
    detail: 'When a deal slips in a healthy sales process, you have a reason: bad timing, budget freeze, lost to a competitor. When deals slip and the explanation is always vague — "they went quiet," "they needed more time" — your pipeline stages aren\'t measuring what actually moves a deal forward. You\'re tracking activity, not progress.',
    fix: 'Map your last 10 lost deals. If you can\'t identify a single pattern, your stage definitions are decorative. Rebuild them around buyer milestones, not seller actions.',
  },
  {
    number: '02',
    sign: 'Your Best Rep Leaving Would Break the Number',
    detail: 'If one rep leaving would cause you to miss revenue targets by more than 20%, you don\'t have a sales process — you have a person. A scalable process distributes performance across the team. When your numbers depend on one individual\'s relationships or instincts, you\'re one resignation away from a crisis.',
    fix: 'Document what your top performer does differently. Those behaviors should be in your playbook and coaching sessions — not living only in their head.',
  },
  {
    number: '03',
    sign: 'New Reps Take 6+ Months to Close Their First Deal',
    detail: 'Industry standard for B2B ramp is 60–90 days to first close. If your reps are taking twice that, something in the onboarding, the playbook, or the pipeline structure is broken. Long ramp times don\'t just cost money — they tell you that your process isn\'t teachable, which means it isn\'t a process at all.',
    fix: 'Break the ramp into weeks, not months. Week 1: product and ICP. Week 2: discovery framework. Weeks 3–4: shadow 5 calls. Weeks 5–8: run deals with oversight. If you can\'t sequence it, you can\'t teach it.',
  },
  {
    number: '04',
    sign: 'You Can\'t Predict Next Quarter\'s Revenue',
    detail: 'A functioning sales process produces a reliable forecast. If your quarterly prediction is consistently off by more than 20% — in either direction — your pipeline data isn\'t trustworthy. Either stage conversion rates are unknown, deal values are guessed, or the pipeline itself is inflated with deals that will never close.',
    fix: 'Calculate your historical stage-to-stage conversion rate for the last 8 quarters. If you can\'t, you don\'t have enough data — which means you haven\'t been tracking the right things.',
  },
  {
    number: '05',
    sign: 'You\'re Discounting to Close Deals That Should Win on Value',
    detail: 'Discounting is the most common symptom of a broken sales process — and the most dangerous one to ignore. When reps default to price reductions instead of value conversations, it signals one of three things: the ICP is wrong (you\'re selling to people who can\'t afford you), the discovery is weak (you haven\'t connected price to ROI), or the rep lacks the skills and tools to hold firm.',
    fix: 'Track your discount rate by rep, by segment, and by deal stage. If discounting is highest in early-stage deals, the process is to blame. If it\'s concentrated in one rep, it\'s a coaching problem.',
  },
]

const whatToDoNext = [
  'Run a closed-won/closed-lost analysis on the last 20 deals',
  'Map your current pipeline stages against actual buyer milestones',
  'Calculate your average discount rate and where discounting happens most',
  'Time your last 3 new rep ramps — what was the actual days-to-first-close?',
  'Ask your best rep to explain their process: if they can\'t teach it, you don\'t have one',
]

const faqs = [
  {
    q: 'How do I know if these warning signs apply to me specifically?',
    a: 'Run through each one and ask: do I have data to disprove it? If you can\'t point to stage conversion rates, rep ramp timelines, or forecast accuracy data to say "no, that\'s not us" — the warning sign probably applies. Most founders in the $1M–$5M ARR range discover that 2–3 of these apply when they look honestly.',
  },
  {
    q: 'Is a broken sales process fixable while still trying to hit revenue targets?',
    a: 'Yes — but it requires parallel tracking. You can\'t stop selling to fix the process. What you can do is make 2–3 surgical changes that improve the most broken parts without disrupting what\'s currently working. Most fixes take 60–90 days to show up in the numbers. Start with the one that\'s costing you the most deals right now.',
  },
  {
    q: 'What if the issue is the people, not the process?',
    a: 'Most of the time, it\'s both. But start with process before changing people. A rep performing poorly in a broken process might be exactly the right person for a functional one. Firing reps into a broken system just starts the cycle over.',
  },
  {
    q: 'When should I bring in outside help versus fixing this internally?',
    a: 'If you\'ve identified the warning signs and know what to fix — start internally. If you\'ve been aware of the problem for more than two quarters and it\'s still not improving, that\'s the signal that you need outside perspective. The longer a broken process runs, the more it compounds — in bad habits, bad hires, and bad culture.',
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
      headline: 'The 5 Warning Signs Your Sales Process Is About to Break',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/5-warning-signs-sales-process-breaking',
    },
  ],
}

export default function WarningSaleProcessBreakingPage() {
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
              Sales Diagnostics
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'The 5 Warning Signs Your Sales Process')}
              <span className="block text-blue-400">{v('heroAccent', 'Is About to Break')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most sales processes don't fail suddenly. They give you signals for months before revenue drops. Here are the five you can't afford to ignore.")}
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
                href="/what-is-a-sales-audit"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is a sales audit? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Warning Signs */}
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
              The 5 Warning Signs
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each one is specific. Each one has a diagnosis and a fix. If more than two apply to you, your process needs attention now.
            </motion.p>
            <div className="space-y-8">
              {warningSigns.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.sign}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Fix: </span>
                    <span className="text-blue-800">{item.fix}</span>
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
              A broken sales process rarely announces itself. Revenue declines slowly, then suddenly. The warning signs are almost always present 3–6 months before the numbers get bad enough to force action — but most founders aren't running the diagnostics to catch them early. Deal slippage, rep dependency, unpredictable forecasting, and price-based closing are all symptoms of a system that was never built for scale. They're not individual rep failures.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The founders who catch these signals early have one advantage: they're measuring the right things. Stage conversion rates, ramp timelines, discount rates by rep and segment — these are the metrics that surface process problems before they become revenue problems. If you're not sure where to start, a{' '}
              <Link href="/why-sales-team-not-growing-revenue" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                deeper look at why your sales team isn't growing revenue →
              </Link>{' '}
              will help you identify which of these is the primary driver.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What to Do Next */}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What to Do This Week
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Before calling in outside help, run these five internal diagnostics. The answers will tell you exactly how broken things are — and where to start fixing.
            </motion.p>
            <div className="space-y-3">
              {whatToDoNext.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 text-sm font-bold text-blue-700">{i + 1}.</div>
                  <p className="text-neutral-700">{item}</p>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "The warning signs on this page are the ones I look for in the first week of any engagement. They're almost always there. The difference between companies that fix them quickly and those that don't is whether someone is running the diagnostics — or waiting for the numbers to speak for themselves.")}
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
              {displayFaqs.map((faq, i) => (
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
              {v('ctaHeadline', "Recognize Any of These in Your Business?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can run a quick diagnostic on your sales process and tell you which warning signs are present, how serious they are, and where to start fixing them.")}
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
