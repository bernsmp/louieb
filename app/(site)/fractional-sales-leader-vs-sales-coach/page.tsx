'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoFslVsSalesCoach'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const comparisonRows = [
  {
    dimension: 'Primary role',
    fsl: 'Embedded leader — builds and runs your sales function',
    coach: 'Advisor — improves skills through exercises and sessions',
  },
  {
    dimension: 'What they deliver',
    fsl: 'Process, pipeline, hires, CRM, forecasting, strategy',
    coach: 'Better calls, improved objection handling, confidence',
  },
  {
    dimension: 'Accountability',
    fsl: 'Owns revenue outcomes alongside you',
    coach: 'Accountable to session deliverables only',
  },
  {
    dimension: 'Team involvement',
    fsl: 'Works directly with your reps in the field',
    coach: 'Typically works 1:1 with the rep or founder',
  },
  {
    dimension: 'Who makes decisions',
    fsl: 'Makes or informs major sales decisions',
    coach: 'Advises — you or your team make all decisions',
  },
  {
    dimension: 'Cost range',
    fsl: '$4,000–$12,000/month depending on scope',
    coach: '$200–$500/hour or $2,000–$5,000/month retainer',
  },
  {
    dimension: 'Time to impact',
    fsl: '30–60 days to process improvements, 60–90 to revenue lift',
    coach: 'Skills improve over months of consistent practice',
  },
  {
    dimension: 'Best for',
    fsl: 'Founders at $1M–$10M ARR who need sales leadership now',
    coach: 'Reps or founders who already have a process and need refinement',
  },
]

const whenToHireCoach = [
  'Your reps have a solid process but struggle with specific skills (closing, discovery, objections)',
  'You have a VP of Sales but want additional coaching bandwidth for the team',
  'You personally want to improve your selling skills as a founder-seller',
  'You\'re pre-product-market-fit and not yet ready for leadership-level investment',
]

const whenToHireFsl = [
  'You have $1M+ ARR and no full-time sales leader',
  'Your team isn\'t hitting quota and you don\'t know why',
  'You\'re still the primary closer and need to transition out',
  'You need someone to build the process, hire reps, and own the pipeline',
  'You\'re preparing for a VP of Sales hire and need the foundation in place first',
]

const faqs = [
  {
    q: 'Can a sales coach replace a fractional sales leader?',
    a: 'No. A sales coach improves individual skills. A fractional sales leader builds and manages the sales function. If your team needs skills work, a coach helps. If your company needs a sales strategy, process, pipeline architecture, and leadership — that\'s a fractional sales leader. Many companies need both, but they serve different purposes.',
  },
  {
    q: 'Our sales team has a coach already. Do we still need a fractional sales leader?',
    a: 'Possibly. If your team has the skills but lacks a structured process, defined ICP, working CRM, and clear pipeline accountability — a coach won\'t fix that. Coaching improves what exists. A fractional sales leader builds what doesn\'t exist yet. The two can work in parallel if your budget supports it.',
  },
  {
    q: 'How do I know which one I actually need?',
    a: 'Ask yourself: is my revenue problem a skills problem or a systems problem? If your reps know who to call and what to say but aren\'t hitting numbers — skills. If you don\'t have a repeatable process, clear ICP, or revenue predictability — systems. Most early-stage companies have a systems problem first.',
  },
  {
    q: 'What does a fractional sales leader actually do day-to-day?',
    a: 'It varies by engagement, but typically: weekly pipeline reviews, rep coaching in the field, CRM oversight, hiring support, forecast management, and strategic sales planning. They\'re embedded in your business 2–4 days a month — enough to drive real change without a full-time overhead.',
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
      headline: 'Fractional Sales Leader vs. Sales Coach: What\'s the Difference?',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/fractional-sales-leader-vs-sales-coach',
    },
  ],
}

export default function FslVsSalesCoachPage() {
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
              Sales Leadership
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Fractional Sales Leader vs. Sales Coach:')}
              <span className="block text-blue-400">{v('heroAccent', "What's the Difference?")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Founders confuse these two roles constantly — and hiring the wrong one is an expensive mistake. Here's how to tell them apart and know which one you actually need.")}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              Side-by-Side Comparison
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Same goal — more revenue. Completely different approaches.
            </motion.p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-5 py-4 text-left font-semibold text-neutral-500">Dimension</th>
                    <th className="px-5 py-4 text-left font-semibold text-blue-700">Fractional Sales Leader</th>
                    <th className="px-5 py-4 text-left font-semibold text-neutral-700">Sales Coach</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-5 py-4 font-medium text-neutral-500">{row.dimension}</td>
                      <td className="px-5 py-4 text-blue-900">{row.fsl}</td>
                      <td className="px-5 py-4 text-neutral-700">{row.coach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              The confusion between a fractional sales leader and a sales coach is understandable — both work with early-stage companies, both focus on revenue, and both are often one person working part-time. But they operate on completely different levels. A sales coach improves what individual people do inside an existing system. A fractional sales leader builds and manages the system itself. If the system doesn't exist yet, coaching the people inside it won't generate the revenue you're hoping for.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              Most founders at $1M–$5M ARR have a systems problem, not a skills problem. Their reps aren't struggling because they don't know how to handle objections — they're struggling because there's no defined ICP, no structured pipeline stage, no accountability framework, and no one translating strategy into weekly execution. That's a fractional sales leader problem. For a closer look at how a fractional sales leader compares to a full-time consultant,{' '}
              <Link href="/fractional-sales-leader-vs-sales-consultant" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read this comparison →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* When to Hire Each */}
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
              When to Hire Each
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                <h3 className="mb-5 font-serif text-xl font-bold text-blue-900">Hire a Fractional Sales Leader when…</h3>
                <ul className="space-y-3">
                  {whenToHireFsl.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-blue-600">→</span>
                      <span className="text-blue-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="mb-5 font-serif text-xl font-bold text-neutral-900">Hire a Sales Coach when…</h3>
                <ul className="space-y-3">
                  {whenToHireCoach.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-neutral-500">→</span>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
              {v('aboutBio2', "I work as a fractional sales leader — not a coach, not a consultant. I'm embedded in your business, accountable to your pipeline, and working alongside your team to build the systems that move revenue. If you want to explore which type of support actually fits your situation, let's talk.")}
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
              {v('ctaHeadline', "Let's Figure Out What You Actually Need")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you honestly whether you need a fractional sales leader, a coach, or something else entirely — and what the right path looks like for your stage.")}
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
