'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatIsRevOps'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function WhatIsRevOpsPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const revopsDefinition = [
    {
      number: '01',
      title: v('def1Title', 'Revenue Operations Is Not a Department'),
      body: v('def1Body', "RevOps is a function — a set of processes, tools, and accountability structures that align your sales, marketing, and customer success teams around a shared revenue goal. In most $1M–$10M companies, one person (or a fractional leader) handles the RevOps function as part of the broader sales leadership role."),
    },
    {
      number: '02',
      title: v('def2Title', 'Its Job Is Eliminating Revenue Friction'),
      body: v('def2Body', "Revenue friction is anything that slows down or stops deals from closing: a CRM that's not configured correctly, handoffs between marketing and sales that lose leads, pricing processes that create unnecessary delays, or a customer success team that doesn't flag expansion opportunities. RevOps finds and fixes these friction points systematically."),
    },
    {
      number: '03',
      title: v('def3Title', 'It Owns the Systems, Not the Selling'),
      body: v('def3Body', "RevOps doesn't close deals. It builds and maintains the infrastructure that enables deals to close: the CRM configuration, the reporting dashboards, the lead routing rules, the contract workflows, and the onboarding handoffs. Think of it as the operations layer under your entire revenue-generating function."),
    },
    {
      number: '04',
      title: v('def4Title', 'It Creates Revenue Predictability'),
      body: v('def4Body', "The defining outcome of good RevOps is a revenue number you can forecast with confidence. When the data is clean, the pipeline stages are real, and the handoffs are smooth, the forecast becomes reliable. Investors, boards, and founders all need this. Most companies under $10M ARR don't have it — because they haven't built the RevOps infrastructure to produce it."),
    },
  ]

  const comparison = [
    {
      label: v('comp1Label', 'Primary responsibility'),
      sales: v('comp1Sales', 'Close deals'),
      revops: v('comp1Revops', 'Enable deals to close more efficiently'),
      fractional: v('comp1Fractional', 'Build and manage the sales team'),
    },
    {
      label: v('comp2Label', 'Owns the CRM'),
      sales: v('comp2Sales', 'Uses the CRM'),
      revops: v('comp2Revops', 'Configures and maintains the CRM'),
      fractional: v('comp2Fractional', 'Sets CRM strategy and requirements'),
    },
    {
      label: v('comp3Label', 'Focus on revenue'),
      sales: v('comp3Sales', 'Current quarter pipeline'),
      revops: v('comp3Revops', 'Systems that improve long-term conversion'),
      fractional: v('comp3Fractional', 'Team performance and quarterly attainment'),
    },
    {
      label: v('comp4Label', 'Works with'),
      sales: v('comp4Sales', 'Prospects and customers'),
      revops: v('comp4Revops', 'Sales, marketing, and CS teams'),
      fractional: v('comp4Fractional', 'Sales reps, founders, and RevOps function'),
    },
    {
      label: v('comp5Label', 'Typical hire stage'),
      sales: v('comp5Sales', 'First $500K ARR'),
      revops: v('comp5Revops', '$5M–$10M ARR or earlier with fractional'),
      fractional: v('comp5Fractional', '$1M–$10M ARR'),
    },
  ]

  const needsRevops = [
    { signal: v('needs1', 'Your CRM data is incomplete or not trusted for forecasting'), needs: true },
    { signal: v('needs2', 'Marketing generates leads that sales never follows up on'), needs: true },
    { signal: v('needs3', "You can't tell which marketing campaigns are producing pipeline"), needs: true },
    { signal: v('needs4', 'Contract and proposal processes create unnecessary delays'), needs: true },
    { signal: v('needs5', "Customer success doesn't know which accounts are at risk"), needs: true },
    { signal: v('needs6', 'You have clean pipeline data and a reliable forecast'), needs: false },
  ]

  const defaultFaqs = [
    {
      q: 'Does a $3M ARR company need Revenue Operations?',
      a: "It needs the function — not necessarily a dedicated headcount. At $3M ARR, RevOps typically means: a well-configured CRM, clean lead routing from marketing to sales, a reliable pipeline review process, and basic reporting dashboards. A fractional sales leader often handles all of this as part of their engagement. You don't need to hire a RevOps director to get the benefit.",
    },
    {
      q: "What's the difference between Revenue Operations and Sales Operations?",
      a: "Sales operations focuses specifically on the sales function: CRM management, territory planning, quota setting, and sales process optimization. Revenue operations expands that scope to include marketing operations and customer success operations — so the entire revenue-generating function runs on shared data, shared tools, and shared accountability. For most companies under $10M, the distinction is academic; both functions are handled by the same person or team.",
    },
    {
      q: 'When should I hire a dedicated RevOps person?',
      a: "When you have 6+ quota-carrying reps, a marketing team generating significant pipeline, and a customer success team managing renewals and expansions. Before that, RevOps responsibilities are typically handled by a fractional sales leader or a sales operations generalist. Hiring a full-time RevOps director too early creates overhead without proportional impact.",
    },
    {
      q: 'How does RevOps improve revenue forecasting?',
      a: "Forecasting accuracy is a data quality problem as much as a judgment problem. When stage definitions are clear and enforced, when reps update CRM records consistently, and when pipeline reviews use real exit criteria rather than guesswork — the data becomes trustworthy. RevOps builds and maintains the systems that produce that data. Most companies that miss their forecast consistently are missing the RevOps infrastructure to produce a clean pipeline.",
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
        headline: 'What Is Revenue Operations (RevOps)? A Plain-English Guide for Founders',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/what-is-revenue-operations-revops',
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
              Revenue Operations
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Is Revenue Operations (RevOps)?')}
              <span className="block text-blue-400">{v('heroAccent', 'A Plain-English Guide for Founders')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "RevOps is one of the most buzzed-about concepts in B2B sales — and one of the least understood by founders who need it most. Here's what it actually is, what it does, and whether your $1M–$10M business needs it now.")}
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
                href="/sales-tech-stack-for-small-business"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What sales tech stack do you need? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Definition */}
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
              {v('sectionDefinitionHeading', 'What RevOps Actually Means')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionDefinitionSubheading', 'Four plain-English explanations that cut through the jargon.')}
            </motion.p>
            <div className="space-y-6">
              {revopsDefinition.map((item, i) => (
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
              {v('seoPara1', "Revenue Operations emerged as a discipline because the old model — separate Sales Ops, Marketing Ops, and CS Ops teams working in silos — created invisible gaps where revenue fell through. Leads generated by marketing weren't followed up by sales. Customer success didn't know which accounts were about to churn until it was too late. Forecasts were built on bad pipeline data that no one trusted. RevOps addresses this by treating the entire revenue function as a single, connected system.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "For founders at the $1M–$10M stage, the most important RevOps function is usually the simplest one: making sure the CRM is configured correctly, pipeline data is clean, and the handoffs between marketing and sales actually work. That alone can dramatically improve forecast accuracy and close rates.")}{' '}
              <Link href="/sales-forecasting-for-small-business" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Sales forecasting →
              </Link>{' '}
              RevOps infrastructure is almost always the root cause when it isn't reliable.
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
              {v('sectionComparisonHeading', 'RevOps vs. Sales Ops vs. Fractional Sales Leader')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComparisonSubheading', "Three functions that overlap — but aren't interchangeable.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-4 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-4 py-4 text-sm font-bold"></div>
                <div className="border-r border-neutral-700 px-4 py-4 text-sm font-bold">Sales</div>
                <div className="border-r border-neutral-700 px-4 py-4 text-sm font-bold text-blue-400">RevOps</div>
                <div className="px-4 py-4 text-sm font-bold text-blue-400">Fractional Sales Leader</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-4 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="border-r border-neutral-200 px-4 py-4 text-sm font-semibold text-neutral-700">{row.label}</div>
                  <div className="border-r border-neutral-200 px-4 py-4 text-sm text-neutral-600">{row.sales}</div>
                  <div className="border-r border-neutral-200 px-4 py-4 text-sm text-neutral-600">{row.revops}</div>
                  <div className="px-4 py-4 text-sm text-neutral-600">{row.fractional}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Does my company need RevOps */}
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
              {v('sectionNeedsHeading', 'Does Your Company Need RevOps Right Now?')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionNeedsSubheading', 'Check these signals honestly — they point directly at missing RevOps infrastructure.')}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {needsRevops.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${!item.needs ? 'border-green-200 bg-green-50' : 'border-red-100 bg-red-50'}`}
                >
                  <div className={`mt-0.5 shrink-0 rounded-full p-1 ${!item.needs ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {!item.needs ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </div>
                  <p className={`text-sm font-medium ${!item.needs ? 'text-green-900' : 'text-red-900'}`}>{item.signal}</p>
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
              {v('aboutBio2', "In most of my engagements, I serve as the de facto RevOps function for the first 6–12 months — configuring the CRM, building the pipeline review cadence, and establishing the reporting infrastructure. For companies under $10M ARR, this is almost always the right approach: get the function done by someone who's also running the sales team, before you hire a dedicated RevOps head.")}
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
              {v('ctaHeadline', "Want Revenue That's Actually Predictable?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current revenue infrastructure — CRM, pipeline process, and handoffs — and tell you exactly where the friction is costing you deals.")}
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
