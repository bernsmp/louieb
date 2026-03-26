'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesAccountabilityDocument'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const docComponents = [
  {
    number: '01',
    title: 'Role Definition — What This Person Actually Owns',
    detail: 'A job title is not a role definition. "Account Executive" tells a rep what they\'re called. A role definition tells them what they\'re responsible for producing. The accountability document starts with a clear, plain-English statement of the rep\'s primary function: "Your job is to convert qualified Stage 1 opportunities to closed-won revenue. You own everything from the first discovery call to the signed contract." Every rep should be able to answer "what is my job?" without looking at the document — but the document should exist as the authoritative source.',
    example: 'Primary Accountability: Convert qualified pipeline to closed-won revenue. You are responsible for all selling activity from Stage 1 qualification to signature. You are not responsible for lead generation, marketing, or customer success post-close.',
  },
  {
    number: '02',
    title: 'Activity Standards — The Minimum Weekly Numbers',
    detail: 'Without defined activity standards, accountability becomes subjective. "She\'s not working hard enough" is an opinion. "She ran 4 discovery calls against a standard of 8" is a fact. Activity standards define the minimum number of weekly selling activities required to maintain a healthy pipeline: outbound touches, discovery calls, follow-up meetings, proposals sent. These numbers should be derived from your pipeline math — working backward from the revenue target through conversion rates to the activity inputs required to produce it.',
    example: 'Weekly Activity Standards: 40 outbound touches (calls + emails), 6 discovery calls on qualified Stage 1 opportunities, 2 proposals sent to Stage 3+ deals, all CRM pipeline updated by end of day Friday.',
  },
  {
    number: '03',
    title: 'Metrics Ownership — Which KPIs Are Theirs',
    detail: 'The accountability document specifies which KPIs the rep is personally accountable to — not just tracking, but owning. A rep who owns their win rate will behave differently than one who just reports it. Ownership means: this is your number, you are expected to know it, and if it\'s trending in the wrong direction, you are expected to have a plan to fix it. Typically, reps own 3–4 KPIs: pipeline coverage, stage conversion rates on their deals, average sales cycle, and quarterly quota attainment.',
    example: 'KPIs You Own: (1) Pipeline coverage ratio — maintain 3.5× minimum on your quota. (2) Stage 2 to Stage 3 conversion — target 40%+. (3) Average sales cycle — target under 90 days. (4) Quarterly quota attainment — 100% is the standard.',
  },
  {
    number: '04',
    title: 'Decision Rights — What They Can Decide Without Escalating',
    detail: 'Ambiguity about decision rights creates two failure modes: reps who escalate everything (slowing every deal and burdening the founder), or reps who make commitments they shouldn\'t (creating liability and misaligned expectations). A clear decision rights framework specifies what a rep can decide unilaterally, what requires manager approval, and what requires founder involvement. For most $1M–$10M ARR companies: rep decides on deal strategy and next steps; manager approves non-standard terms or exceptions; founder approves pricing changes above a threshold.',
    example: 'Decision Rights: You can agree to standard terms, standard pricing, and standard timelines without approval. Any discount above 10%, any non-standard contract term, or any commitment to a feature not in the current product roadmap requires pre-approval from [name].',
  },
  {
    number: '05',
    title: 'Consequence Clarity — What Happens When Standards Aren\'t Met',
    detail: 'The most important part of an accountability document is the one most managers leave out: what happens when standards aren\'t met. Without consequence clarity, the document is a description, not an accountability system. Consequence clarity doesn\'t mean a list of punishments — it means a transparent, fair framework: first miss gets a documented coaching conversation, second miss triggers a performance improvement plan, third miss triggers a separation conversation. Everyone knows the rules before they\'re playing by them.',
    example: 'Performance Standards: Consistent performance below 80% of quota for two consecutive months triggers a formal coaching plan with 60-day improvement targets. Three consecutive months below 80% triggers a role review conversation. These standards apply equally to all quota-carrying roles.',
  },
]

const withoutVsWith = [
  { without: 'Reps interpret their role differently — some focus on activity, some on outcomes', with: 'Every rep knows exactly what they own and how their performance is measured' },
  { without: 'Founders referee "that\'s not my job" conversations every week', with: 'Role boundaries are documented — disputes resolve by reading the document' },
  { without: 'Coaching conversations are vague and subjective', with: 'Coaching is data-driven: "Your Stage 2 conversion is 22% against a standard of 35%"' },
  { without: 'Underperformers are surprised when action is taken', with: 'Standards are clear from day one — no one is blindsided' },
  { without: 'Founder must stay involved to manage individual rep behavior', with: 'System manages behavior; founder reviews outcomes, not activity' },
]

const faqs = [
  {
    q: 'How is an accountability document different from a job description?',
    a: 'A job description describes a role for recruiting. An accountability document defines performance expectations for someone already in the role. Job descriptions are written to attract candidates — they\'re often aspirational and broad. Accountability documents are written to create operational clarity: specific activity standards, specific KPIs with specific targets, specific decision rights, and specific consequences when standards aren\'t met. A rep should review their accountability document weekly, not just once during onboarding.',
  },
  {
    q: 'When should I create accountability documents for my team?',
    a: 'Before you hire your first quota-carrying rep — not after. The document should be part of the offer process: this is the role, these are the standards, these are the KPIs you\'ll own. If you already have a team without accountability documents, create them now. The conversation doesn\'t have to be adversarial: "I want to be clearer about what success looks like for you and how I\'ll support you in getting there." Most reps welcome the clarity — ambiguity is more stressful than high standards.',
  },
  {
    q: 'How specific should the activity standards be?',
    a: 'Specific enough to be measurable, not so specific that they micromanage tactics. "Make 40 outbound touches per week" is an activity standard. "Call prospects between 9am and 11am on Tuesdays" is micromanagement. The standards should be set by working backward from the pipeline math: if a rep needs $500K in new ARR, and your close rate is 25%, and your average stage 1 to close cycle is 90 days, how many new opportunities does the rep need to create each month? That number drives the activity standard.',
  },
  {
    q: 'How does a fractional sales leader use accountability documents?',
    a: 'I build an accountability document for every role in the first 60 days of an engagement. It becomes the basis for every coaching conversation, every pipeline review, and every performance discussion. When a rep is underperforming, the document tells us exactly where: activity, conversion, cycle time, or quota attainment. Without it, underperformance is a feeling. With it, underperformance is a data point — and data points have solutions.',
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
      headline: 'Why Every Sales Team Needs an Accountability Document',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/sales-accountability-document',
    },
  ],
}

export default function SalesAccountabilityDocumentPage() {
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
              Sales Management
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Why Every Sales Team Needs')}
              <span className="block text-blue-400">{v('heroAccent', 'an Accountability Document')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most sales teams operate on unspoken expectations. When those expectations aren't met, founders manage behavior instead of outcomes. An accountability document changes that — here's what it contains and why it's the single document that lets a founder step back.")}
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
                href="/transition-out-of-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How this fits into transitioning out of founder-led sales →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Components */}
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
              The 5 Components of a Sales Accountability Document
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Every section has a job. Leave one out and the system has a gap.
            </motion.p>
            <div className="space-y-8">
              {docComponents.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Example language: </span>
                    <span className="italic text-blue-800">{item.example}</span>
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
              The accountability document is one of the least glamorous assets in a sales organization — and one of the most powerful. Founders who are stuck managing day-to-day rep behavior are almost always stuck because expectations were communicated verbally, not documented. Verbal expectations get interpreted differently by different people. Written expectations, reviewed and signed during onboarding, create a shared reference point that removes ambiguity from every coaching conversation, every pipeline review, and every performance discussion.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The five components above work together as a system. Role definition sets the context. Activity standards define the inputs. Metrics ownership defines the outputs. Decision rights prevent escalation bottlenecks. Consequence clarity completes the accountability loop. When all five are in place, a founder can review outcomes rather than managing behavior — which is the shift that makes stepping back from founder-led sales sustainable. For a complete framework on making that transition,{' '}
              <Link href="/transition-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the founder-led sales transition guide →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
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
              Without an Accountability Document vs. With One
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The shift from managing people to managing a system starts with this document.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold">Without the Document</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">With the Document</div>
              </div>
              {withoutVsWith.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-2 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
                    <span>{row.without}</span>
                  </div>
                  <div className="flex items-start gap-2 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-green-600">✓</span>
                    <span>{row.with}</span>
                  </div>
                </div>
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
              {v('aboutBio2', "I build an accountability document for every sales role in the first 60 days of every engagement. It's the document that makes every other management conversation easier — because instead of having opinions about performance, we have a shared reference for what was agreed. It's also the document that most directly enables founders to step back from managing reps day-to-day, because the system manages expectations instead of requiring the founder to.")}
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
              {v('ctaHeadline', "Let's Build Your Accountability System")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess your current team structure, identify the accountability gaps that are keeping you involved in day-to-day selling, and show you what an accountability document would look like for your specific roles.")}
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
