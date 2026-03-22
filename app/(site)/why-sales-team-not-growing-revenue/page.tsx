'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesTeamNotGrowingRevenue'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const realReasons = [
  {
    title: 'No Documented Sales Process',
    body: 'If the process lives in the founder\'s head, every rep reinvents the wheel. Without defined stages, exit criteria, and talk tracks, reps are guessing — and guessing doesn\'t scale.',
  },
  {
    title: 'ICP Is Too Vague',
    body: 'When "ideal customer" means "anyone who might buy," reps waste time on bad-fit deals that drain the pipeline. Unclear ICP means low close rates and demoralized reps — not bad reps.',
  },
  {
    title: 'No Real Sales Leadership',
    body: 'A founder who checks in on Friday afternoons isn\'t sales leadership. Reps need weekly deal reviews, coaching on specific calls, and someone who\'s accountable for pipeline health — not just revenue targets.',
  },
  {
    title: 'Reps Were Set Up to Fail',
    body: 'Hiring before the playbook exists, giving reps no onboarding, and expecting them to figure it out: this is how good reps become bad results. The system failed them — they didn\'t fail the system.',
  },
  {
    title: 'Quota Was Set Without a Conversion Model',
    body: 'If the quota was picked based on what you need to hit, not what the pipeline and close rate can actually support, your team is chasing a number that was never achievable.',
  },
  {
    title: 'No Accountability Loop',
    body: 'Without weekly pipeline reviews, forecasting discipline, and deal-level accountability, problems stay invisible until they become revenue misses. By then it\'s too late to course-correct.',
  },
]

const faqs = [
  {
    q: 'My reps are working hard — why aren\'t they closing more?',
    a: 'Hard work without a system produces effort, not results. If your reps are doing the activity but not closing, the problem is almost always the sales process, the ICP definition, or the lack of coaching on specific deals. Activity without clarity is just busy work.',
  },
  {
    q: 'Should I replace my sales reps?',
    a: 'Not until you\'ve fixed the system. Most "bad rep" situations are actually "bad system" situations. Before replacing anyone, audit the process: Do reps have a playbook? Are they working the right ICP? Are they getting real coaching? If those answers are no, the problem isn\'t the rep.',
  },
  {
    q: 'What does a revenue-growing sales team actually look like?',
    a: 'It runs a documented process. It has a tightly defined ICP. It reviews pipeline weekly against conversion benchmarks. Reps get coaching on real deals, not just quota pep talks. And there\'s a leader — not just a manager — who owns the system, not just the number.',
  },
  {
    q: 'How do I know if I need a fractional sales leader vs. better reps?',
    a: 'If your reps are working a broken process and getting predictably inconsistent results, you need better leadership before you need better reps. A fractional sales leader builds the system — the process, the ICP, the coaching cadence — so that your reps can actually perform.',
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
      headline: "Why Your Sales Team Isn't Growing Revenue (And It's Not Their Fault)",
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/why-sales-team-not-growing-revenue',
    },
  ],
}

export default function WhySalesTeamNotGrowingRevenuePage() {
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
              Sales Team Performance
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', "Why Your Sales Team Isn't Growing Revenue")}
              <span className="block text-blue-400">{v('heroAccent', "(And It's Not Their Fault)")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Before you fire another rep, look at the system they're working. In most cases the reps aren't the problem — the process, the leadership, and the structure are.")}
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
                href="/sales-team-not-hitting-quota"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Sales team not hitting quota? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Real Reasons */}
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
              The 6 Real Reasons Your Team Isn't Growing Revenue
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              These are system failures — not people failures. Each one is fixable if you identify it early enough.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {realReasons.map((reason, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{reason.title}</h3>
                  <p className="text-neutral-700">{reason.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before You Fire Anyone */}
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
              className="mb-8 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              Before You Fire Anyone, Ask These Questions
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
                <h3 className="mb-4 text-lg font-bold text-red-800">Signs It's a People Problem</h3>
                <ul className="space-y-3">
                  {[
                    'They\'re not doing the activity even when you check',
                    'They\'re closing when given a great inbound lead but nothing else',
                    'They\'ve been coached repeatedly on the same issue without improvement',
                    'Other reps in the same system are outperforming them consistently',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 text-lg font-bold text-blue-800">Signs It's a System Problem</h3>
                <ul className="space-y-3">
                  {[
                    'Every rep struggles with the same stage of the sale',
                    'Close rates have been low from day one for every hire',
                    'No documented process exists for them to follow',
                    'The founder closes deals reps can\'t — but never shows them how',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Thinking about bringing in sales leadership?{' '}
                <Link href="/fractional-sales-leader" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  Learn what a fractional sales leader does →
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
              {v('aboutBio2', "I've walked into dozens of companies where the reps were blamed for broken systems. My job is to fix the system — the process, the pipeline management, the coaching cadence — so the team can actually perform.")}
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
              {v('ctaHeadline', "Let's Diagnose What's Holding Your Team Back")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you whether you have a people problem, a system problem, or a leadership problem — and what to fix first.")}
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
