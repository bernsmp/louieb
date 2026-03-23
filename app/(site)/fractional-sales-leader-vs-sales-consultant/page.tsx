'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoFslVsSalesConsultant'

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
    dimension: 'Primary deliverable',
    fsl: 'Revenue results — pipeline, closed deals, team performance',
    consultant: 'A document — strategy deck, audit report, playbook draft',
  },
  {
    dimension: 'Accountability',
    fsl: 'Accountable to outcomes: quota, pipeline coverage, close rates',
    consultant: 'Accountable to deliverables: report submitted, engagement closed',
  },
  {
    dimension: 'Implementation',
    fsl: 'Implements alongside you — builds, hires, coaches, manages',
    consultant: 'Recommends — you implement (or don\'t)',
  },
  {
    dimension: 'Time in your business',
    fsl: 'Recurring weekly involvement — embedded in your pipeline',
    consultant: 'Project-based — often 4–8 weeks, then disengaged',
  },
  {
    dimension: 'What happens when they leave',
    fsl: 'A working sales function continues operating after them',
    consultant: 'A slide deck sits on a shared drive',
  },
  {
    dimension: 'Skin in the game',
    fsl: 'Their reputation depends on your revenue growth',
    consultant: 'Their reputation depends on project delivery',
  },
  {
    dimension: 'Typical cost',
    fsl: '$4,000–$12,000/month, ongoing',
    consultant: '$10,000–$40,000 per project engagement',
  },
  {
    dimension: 'Best fit',
    fsl: 'Companies that need leadership and execution, not advice',
    consultant: 'Companies that have good execution but need an outside perspective',
  },
]

const fslWins = [
  {
    title: 'You Need Revenue, Not Recommendations',
    body: 'A consultant tells you what to do. A fractional sales leader helps do it with you. If your problem is execution — building pipeline, coaching reps, running deals — you need the latter.',
  },
  {
    title: 'Your Team Needs a Leader, Not a Report',
    body: 'Reps don\'t get better from reading a strategy deck. They get better from working alongside an experienced leader who shows them how, reviews their calls, and holds them accountable week to week.',
  },
  {
    title: 'You\'ve Already Had the Strategy Conversation',
    body: 'Most founders know what they need to do. The hard part is the implementation — building the process, changing behaviors, making the right hires. That\'s where a fractional sales leader earns their fee.',
  },
  {
    title: 'You Want Something That Lasts After They\'re Gone',
    body: 'A consultant\'s work ends when the engagement ends. A fractional sales leader builds a sales function that outlasts them — playbooks, processes, CRM hygiene, trained reps, and a pipeline that doesn\'t disappear.',
  },
]

const whenConsultantWins = [
  'You need an objective outside assessment of what\'s broken — a sales audit',
  'You have strong execution but need strategic input on pricing, ICP, or GTM',
  'You\'re preparing for a board presentation and need crisp strategic framing',
  'You have a capable internal leader who just needs a specific framework or model',
]

const faqs = [
  {
    q: 'What\'s wrong with hiring a sales consultant?',
    a: 'Nothing — in the right situation. Sales consultants are valuable when you have good execution capacity and need strategic input. The problem is that most early-stage founders don\'t have that execution capacity. They hire a consultant, get a great strategy document, and then struggle to implement it. The strategy wasn\'t the gap. The leadership and accountability were.',
  },
  {
    q: 'Can a fractional sales leader also do strategic consulting?',
    a: 'Yes. Most experienced fractional sales leaders combine strategic and operational work. They\'ll assess your current state, build a plan, and then stay to execute it. That\'s the difference between advice and partnership — a fractional sales leader doesn\'t hand you the map and leave. They drive with you.',
  },
  {
    q: 'How do I know if I\'ve been over-relying on consultants?',
    a: 'Ask yourself: how many sales strategy documents exist in your company that weren\'t implemented? If you have more than one strategy deck that collected dust, you\'ve been buying insight you can\'t execute. That\'s the sign that what you need is leadership, not more recommendations.',
  },
  {
    q: 'Isn\'t a fractional sales leader more expensive over time?',
    a: 'Compared to a single project engagement, yes — a fractional sales leader is an ongoing investment. But the comparison should be: which delivers more revenue? A $25K consultant engagement that produces a document versus a $6K/month fractional leader who builds pipeline and closes deals with your team. The math usually favors ongoing leadership.',
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
      headline: 'Fractional Sales Leader vs. Sales Consultant: Why One Drives Results and One Delivers Slides',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/fractional-sales-leader-vs-sales-consultant',
    },
  ],
}

export default function FslVsSalesConsultantPage() {
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
              {v('heroLine1', 'Fractional Sales Leader vs. Sales Consultant:')}
              <span className="block text-blue-400">{v('heroAccent', 'One Drives Results. One Delivers Slides.')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Both claim to fix your sales problem. One hands you a document. The other builds the machine that generates revenue. Here's how to tell which one you're actually hiring.")}
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
              The Core Differences
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              This isn't about which is better. It's about which fits your actual need.
            </motion.p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-5 py-4 text-left font-semibold text-neutral-500">Dimension</th>
                    <th className="px-5 py-4 text-left font-semibold text-blue-700">Fractional Sales Leader</th>
                    <th className="px-5 py-4 text-left font-semibold text-neutral-700">Sales Consultant</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-5 py-4 font-medium text-neutral-500">{row.dimension}</td>
                      <td className="px-5 py-4 text-blue-900">{row.fsl}</td>
                      <td className="px-5 py-4 text-neutral-700">{row.consultant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why FSL Wins */}
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
              Why Most Founders Need a Fractional Sales Leader
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Not because consultants are bad. Because most early-stage companies don't have an advice problem.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {fslWins.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-blue-900">{item.title}</h3>
                  <p className="text-blue-800">{item.body}</p>
                </motion.div>
              ))}
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
              The "sales consultant vs fractional sales leader" question is one of the most searched comparisons among founders trying to fix their revenue. And the answer matters: a sales consultant is a project-based engagement that ends when the deliverable is submitted. A fractional sales leader is an ongoing operating relationship where the person stays accountable to results. The difference isn't just semantics — it determines whether your sales problem actually gets solved or just gets analyzed.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              Most founders who have worked with sales consultants walk away with a framework they didn't fully implement and a renewed version of the same problem they started with. The strategy wasn't wrong — the execution support was missing. That's what a fractional sales leader provides: not a strategy, but the leadership muscle that turns strategy into closed deals. If you're also evaluating a sales coach as an option, it's worth reading{' '}
              <Link href="/fractional-sales-leader-vs-sales-coach" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                how a fractional sales leader differs from a sales coach →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* When Consultant Wins */}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              When a Sales Consultant Actually Is the Right Call
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              It happens. Here are the scenarios where a consultant is the better fit.
            </motion.p>
            <div className="space-y-3">
              {whenConsultantWins.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4"
                >
                  <div className="mt-0.5 shrink-0 text-sm font-bold text-neutral-500">{i + 1}.</div>
                  <p className="text-neutral-700">{item}</p>
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
              {v('aboutBio2', "I don't write strategy reports. I build sales pipelines. If you're evaluating me against a sales consultant, the conversation you want to have is about what you've already tried — and what changed as a result. I'm only the right fit if what you need is someone embedded in your business, accountable to results, and working alongside you until the revenue machine is working.")}
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
              {v('ctaHeadline', "Ready to Work With Someone Accountable to Results?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "Let's talk about your revenue situation — what's broken, what you've already tried, and whether a fractional sales leader is the right next move for your business.")}
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
