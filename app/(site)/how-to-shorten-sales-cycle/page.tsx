'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToShortenSalesCycle'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HowToShortenSalesCyclePage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const tactics = [
    {
      number: '01',
      title: v('tactic1Title', 'Qualify Harder at the Top — Kill Deals That Will Never Close'),
      body: v('tactic1Body', "The fastest way to shorten your average cycle is to stop working deals that were never going to close. A deal that lingers for 180 days before dying as 'no decision' is costing you the same hours as a deal that closes in 45 days. Better qualification criteria — budget confirmed, decision-maker engaged, urgency established, success criteria defined — reduces cycle length by eliminating the back half of your pipeline where deals stall and die."),
    },
    {
      number: '02',
      title: v('tactic2Title', 'Engage the Real Decision-Maker Earlier'),
      body: v('tactic2Body', "Most B2B deals stall at 'evaluation complete, waiting for approval.' That approval delay is almost always avoidable — if you had gotten executive engagement in the first two meetings instead of the last one. Introduce the multi-stakeholder question in discovery: 'Who else will be involved in the final decision, and when is the right time for me to connect with them?' Getting there early compresses the back end of the cycle by 30–60 days in most cases."),
    },
    {
      number: '03',
      title: v('tactic3Title', 'Use a Mutual Action Plan on Every Deal Above Threshold'),
      body: v('tactic3Body', "A mutual action plan (MAP) is a shared document that lists every step needed to get from 'evaluating' to 'signed' — with owners and dates on both sides. It creates joint accountability, surfaces hidden steps the buyer didn't tell you about, and makes the 'close date' a collaborative target rather than a sales quota artifact. For deals above $10K, a MAP used consistently can compress cycles by 20–30%."),
    },
    {
      number: '04',
      title: v('tactic4Title', 'Define Stage Exit Criteria That Actually Mean Something'),
      body: v('tactic4Body', "Vague pipeline stages produce long, unforecastable cycles. When 'Proposal Sent' means the rep emailed a PDF and is waiting to hear back, deals can sit there for weeks. When 'Proposal Sent' requires verbal agreement on pricing range and a scheduled review call, movement through stages becomes predictable. Exit criteria are the mechanism that converts stage labels into genuine progress indicators — and they compress cycles by preventing deals from sitting in limbo."),
    },
    {
      number: '05',
      title: v('tactic5Title', "Eliminate Internal Friction on Your Side"),
      body: v('tactic5Body', "Cycle length isn't always a buyer problem. Legal reviews, contract approvals, custom proposal processes, and pricing exceptions that require VP sign-off all add days and weeks to cycles — on your side. Audit your internal deal process from 'verbal yes' to 'signed contract.' Every step that requires an internal handoff or approval is a cycle extension. Streamline legal, templatize proposals, and pre-approve pricing tiers to compress the close phase."),
    },
  ]

  const comparison = [
    {
      without: v('comparison1Without', "Deals sit in 'Proposal Sent' for 3–4 weeks with no defined next step"),
      with: v('comparison1With', 'Every proposal has a scheduled review call within 5 days of delivery'),
    },
    {
      without: v('comparison2Without', "Decision-maker is engaged for the first time at the end of the process"),
      with: v('comparison2With', 'Decision-maker is identified and contacted in the first two meetings'),
    },
    {
      without: v('comparison3Without', "Deals that will never close stay in the pipeline for months"),
      with: v('comparison3With', 'Deals without confirmed budget, urgency, and access are killed within 30 days'),
    },
    {
      without: v('comparison4Without', 'Internal contract review adds 3–4 weeks to every deal'),
      with: v('comparison4With', 'Streamlined contract process with pre-approved terms closes in 5–7 days'),
    },
    {
      without: v('comparison5Without', "Close date on the CRM is the rep's hope, not a buyer commitment"),
      with: v('comparison5With', 'Close date is tied to a mutual action plan step the buyer agreed to'),
    },
    {
      without: v('comparison6Without', "Average cycle length is unknown — no one has measured it"),
      with: v('comparison6With', 'Cycle length is tracked by stage, rep, and segment — and improving quarter over quarter'),
    },
  ]

  const signals = [
    v('signal1', 'Deals regularly reach "verbal yes" and then stall for weeks before signing'),
    v('signal2', 'You don\'t know your average sales cycle length — or it varies wildly by rep'),
    v('signal3', 'The same deals appear in pipeline reviews month after month with no movement'),
    v('signal4', 'You frequently get surprised by "we need to loop in procurement" late in the process'),
    v('signal5', 'Your close rate improves in Q4 — suggesting urgency is the only lever you use'),
    v('signal6', 'Your internal contract and approval process adds more time than the buyer evaluation'),
  ]

  const defaultFaqs = [
    {
      q: "What's a realistic target for B2B sales cycle length at the $1M–$10M stage?",
      a: "It depends heavily on deal size and complexity, but a useful benchmark: SMB deals under $15K should close in 30–45 days. Mid-market deals at $15K–$50K should close in 60–90 days. Enterprise or complex deals above $50K may run 90–180 days. If your cycles are significantly longer than these benchmarks for equivalent deal sizes, there's a process or qualification problem worth diagnosing. The goal isn't to hit an arbitrary number — it's to compress cycles relative to your own historical baseline.",
    },
    {
      q: 'Does shortening the sales cycle mean being more aggressive with buyers?',
      a: "No — and this is the most important misconception to clear up. Shortening the cycle is about removing friction, not adding pressure. Buyers who feel pushed close slower, not faster, because they become defensive and start involving more stakeholders as a delay tactic. The legitimate cycle-shortening techniques — better qualification, early executive engagement, mutual action plans, clear stage criteria — all work by making it easier for the buyer to say yes, not by making it harder for them to say no.",
    },
    {
      q: 'How do you handle a buyer who says they need more time to evaluate?',
      a: "First, find out what they're actually evaluating. 'More time' is almost always a proxy for something specific: they need to compare alternatives, get internal approval, validate budget, or resolve an internal disagreement. Ask: 'What specifically needs to happen on your side before you can make a decision, and what's driving the timeline?' That answer tells you whether you're dealing with a real process requirement or a delay tactic — and what you can do to help accelerate it.",
    },
    {
      q: 'Should I measure sales cycle length for every deal or just the average?',
      a: "Both — and segment it. Your average cycle tells you the overall health. But the most actionable insight comes from segmenting by: deal size (is the cycle longer for bigger deals?), rep (is one rep significantly faster or slower?), source (do inbound deals close faster than outbound?), and stage (where are deals actually stalling?). The stall point diagnosis is usually where you find the most leverage — one stage is causing most of the cycle extension, and fixing it produces disproportionate results.",
    },
  ]

  const displayFaqs = cmsfaqs(4, defaultFaqs)

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: displayFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'Article',
        headline: "How to Shorten Your B2B Sales Cycle Without Discounting or Pushing",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-to-shorten-sales-cycle',
      },
    ],
  }

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
              Sales Process
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Shorten Your B2B Sales Cycle')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Discounting, Pushing, or Pressuring Buyers')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "A long sales cycle isn't usually a buyer problem. It's a process problem — on your side. Here are the five tactics that remove friction, compress deal timelines, and generate revenue faster without sacrificing relationship quality.")}
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
                href="/sales-pipeline-stages"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Fix your pipeline stage definitions →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Tactics */}
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
              {v('sectionTacticsHeading', '5 Tactics That Actually Shorten the Sales Cycle')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionTacticsSubheading', "Each tactic targets a different source of cycle length — use all five and the cumulative compression is significant.")}
            </motion.p>
            <div className="space-y-6">
              {tactics.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
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

      {/* SEO Paragraphs */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara1', "Sales cycle length is the denominator in your sales velocity formula — every day you compress the average cycle multiplies the value of every other sales investment you make. A company with a 90-day average cycle that compresses to 60 days generates 50% more revenue from the same pipeline, the same reps, and the same quota — without adding a single new opportunity. It's the highest-leverage improvement most $1M–$10M companies aren't measuring.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The most common source of long cycles isn't buyer hesitation — it's the rep's failure to establish clear next steps at every stage. When a meeting ends without a scheduled follow-up and a defined deliverable, the deal decelerates. When every interaction ends with a specific next action owned by both sides, the cycle stays in motion. That habit — closing every conversation with a committed next step — is the single most implementable cycle-shortening behavior I've seen.")} {' '}
              <Link href="/sales-velocity-b2b" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Understand how cycle length affects sales velocity →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

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
              {v('sectionComparisonHeading', 'Long Cycle Behaviors vs. Short Cycle Behaviors')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComparisonSubheading', "The difference between a 90-day and a 45-day cycle is almost entirely in these behaviors.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">Long Cycle Behavior</div>
                <div className="px-6 py-4 font-bold text-blue-400">Short Cycle Behavior</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.without}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.with}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signals */}
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
              {v('sectionSignalsHeading', '6 Signs Your Sales Cycle Is Longer Than It Needs to Be')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionSignalsSubheading', "These are process failures, not buyer behaviors — and each one is fixable.")}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {signals.map((signal, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 rounded-full bg-red-100 p-1 text-red-700">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-red-900">{signal}</p>
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
              {v('aboutBio2', "In every engagement, cycle length is one of the first metrics I audit. It's almost always longer than it should be — and the culprit is almost always on the seller's side, not the buyer's. Vague stage definitions, missing next steps, late executive engagement, and slow internal processes add weeks to deals that could close in days. Fixing these — methodically, with clear stage criteria and a mutual action plan template — typically compresses average cycles by 25–35% within two quarters.")}
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
              {v('ctaHeadline', "Deals Taking Too Long to Close?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can audit your pipeline, identify where deals are stalling, and tell you exactly what process changes will compress your average cycle.")}
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
