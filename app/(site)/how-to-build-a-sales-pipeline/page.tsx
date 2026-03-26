'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoBuildSalesPipeline'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const pipelineLayers = [
  {
    number: '01',
    title: 'Define What a Qualified Opportunity Actually Looks Like',
    detail: 'Most founders at $1M–$5M ARR have never written down their ICP with hard criteria. "Anyone who could use our product" is not a definition — it\'s an excuse to avoid the harder work of filtering. A qualified opportunity has four attributes: the right company size, the right trigger event, the right job title in the room, and a budget window that matches your sales cycle. Without these, your pipeline fills with noise that kills forecasting accuracy.',
    fix: 'Pull your last 20 closed-won deals. Identify the three attributes they share that your losses don\'t. Those become your qualification criteria. Add them as required CRM fields before a deal can move past Stage 1.',
  },
  {
    number: '02',
    title: 'Build Three Separate Pipeline Inputs — Not Just One',
    detail: 'Referral networks feel like pipeline, but they\'re disguised dependency. When referrals dry up — and they always do at some point — there\'s nothing underneath. A self-filling pipeline has three independent inputs running in parallel: outbound (you go find them), inbound (they find you), and partner/referral (warm introductions from existing relationships). Each requires different infrastructure and different ownership.',
    fix: 'Audit how your last 30 closed-won deals entered your pipeline. If more than 60% came from one source, that\'s a single point of failure. Build the other two inputs as parallel programs, even at small scale.',
  },
  {
    number: '03',
    title: 'Set Stage Exit Criteria Based on Buyer Milestones, Not Seller Actions',
    detail: 'The most common pipeline problem isn\'t deal quality — it\'s that pipeline stages are defined by what the seller does ("sent proposal," "had call") instead of what the buyer commits to. Deals stuck in "proposal sent" for 45 days aren\'t in your pipeline — they\'re in your wishlist. Buyer milestone stages look different: "confirmed budget and timeline," "economic buyer identified and engaged," "legal review initiated." These stages are honest about where deals actually are.',
    fix: 'Rewrite your pipeline stages so that each stage advance requires a documented buyer action or commitment — not just a seller activity. Purge any deal that can\'t pass its current stage\'s exit criteria.',
  },
  {
    number: '04',
    title: 'Calculate Minimum Pipeline Coverage for Your Number',
    detail: 'Most founders don\'t know how much pipeline they actually need to hit quota. The formula is simple: take your revenue target, divide by your close rate, and that\'s your minimum pipeline value at Stage 1. If you close 25% of qualified opportunities and need $2M in new revenue, you need $8M in qualified pipeline. If you don\'t have that number and no plan to build it, your revenue target is a hope, not a plan.',
    fix: 'Run the pipeline coverage calculation for your current quarter. If you\'re below 3x coverage on committed revenue, you have a pipeline generation problem — not a closing problem. That changes where you focus your effort.',
  },
  {
    number: '05',
    title: 'Establish a Weekly Pipeline Review That Creates Accountability',
    detail: 'Pipeline doesn\'t fill itself — it fills because someone is accountable to the number every week. The weekly pipeline review is the mechanism that creates that accountability. Done correctly, it takes 45 minutes and covers three things: what moved forward this week and why, what is stuck and what the specific next action is, and what new qualified opportunities entered the pipe. Done incorrectly, it\'s a status update that everyone tolerates and no one learns from.',
    fix: 'Separate deal inspection from status reporting. Ask five questions for every deal over $10K: What is the specific next step? When does it happen? Who owns it? What could kill this deal? Is the timeline still accurate? If you can\'t answer all five, the deal doesn\'t belong in the pipeline.',
  },
]

const pipelineKillers = [
  { killer: 'Letting unqualified deals stay in the pipeline "just in case"', result: 'Inflated forecasts that destroy trust in your numbers' },
  { killer: 'Using activity-based stage definitions instead of buyer milestones', result: 'Pipeline that shows progress when deals are actually stalling' },
  { killer: 'No written ICP criteria applied at point of entry', result: 'Reps spending time on deals that were never real' },
  { killer: 'Relying on a single pipeline source (usually referrals)', result: 'Volatile pipeline that disappears when referrals slow down' },
  { killer: 'Pipeline reviews that cover status but not next actions', result: 'Meetings that feel productive but move nothing forward' },
]

const faqs = [
  {
    q: 'How much pipeline do I need to hit my revenue target?',
    a: 'The standard benchmark is 3x–4x your revenue target in qualified pipeline. If you need $500K in new revenue this quarter and your close rate is 25%, you need at least $2M in qualified opportunities. But this only works if your pipeline stages are honest — inflated pipelines with zombie deals will give you false coverage numbers.',
  },
  {
    q: 'What\'s the difference between a referral network and a real pipeline?',
    a: 'A referral network is relationship-dependent — it works when relationships are active and dries up when they aren\'t. A real pipeline has systematic inputs that generate opportunities without requiring a specific person to make a call. Referrals can be one input, but if they\'re your only input, you don\'t have a pipeline — you have a network that can disappear.',
  },
  {
    q: 'How long does it take to build a pipeline that fills itself?',
    a: 'With the right infrastructure in place, you can see a functioning pipeline within 90 days. But "fills itself" doesn\'t mean no effort — it means the inputs are systematic rather than ad hoc. Outbound sequences run continuously. Inbound content generates leads without daily intervention. Partner relationships produce introductions on a regular cadence. Building that infrastructure takes 60–90 days; maintaining it is ongoing.',
  },
  {
    q: 'When should I bring in a fractional sales leader to help build my pipeline?',
    a: 'If you\'ve been trying to fix pipeline problems for more than two quarters without meaningful improvement, the issue is structural — not a matter of more effort. A fractional sales leader will audit your pipeline inputs, rebuild your stage definitions, establish a weekly review cadence, and create the accountability that makes pipeline management a discipline rather than a fire drill.',
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
      headline: 'How to Build a Sales Pipeline That Actually Fills Itself',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-build-a-sales-pipeline',
    },
  ],
}

export default function BuildSalesPipelinePage() {
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
              Pipeline Development
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Build a Sales Pipeline')}
              <span className="block text-blue-400">{v('heroAccent', 'That Actually Fills Itself')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most $1M–$10M ARR businesses don't have a pipeline problem — they have a pipeline structure problem. Here's the 5-layer system that creates consistent, predictable deal flow without founder dependency.")}
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
                href="/no-pipeline-what-to-do"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                No pipeline right now? Start here →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Pipeline Layers */}
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
              The 5-Layer Pipeline Framework
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each layer builds on the last. Skip one and the pipeline looks full but performs empty.
            </motion.p>
            <div className="space-y-8">
              {pipelineLayers.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Action: </span>
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
              The phrase "pipeline problem" gets used to describe a dozen different things — not enough leads, wrong leads, deals that stall, forecasts that miss, reps who can't close. But most pipeline problems at the $1M–$10M ARR stage aren't really about volume. They're about structure. Founders build pipelines the way they built their first sales: through relationships, instinct, and whatever worked. What works for $0–$1M breaks somewhere between $2M and $5M. The inputs dry up, the stages lie, and the forecast becomes guesswork.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              Building a pipeline that fills itself means creating systematic inputs that don't depend on any one person's activity level. It means defining pipeline stages honestly enough that your forecast actually predicts revenue. And it means establishing the weekly review discipline that keeps every deal moving toward a decision. If you're looking for where to start before building the pipeline, a{' '}
              <Link href="/what-is-a-sales-audit" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                sales audit will show you exactly what's broken →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Killers */}
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
              5 Pipeline Habits That Kill Growth
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              These are the patterns I find in the first pipeline audit on almost every engagement.
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pipelineKillers.slice(0, 3).map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-5"
                >
                  <h3 className="mb-2 font-bold text-red-800">✕ {item.killer}</h3>
                  <p className="text-sm text-red-700">{item.result}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {pipelineKillers.slice(3).map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-5"
                >
                  <h3 className="mb-2 font-bold text-red-800">✕ {item.killer}</h3>
                  <p className="text-sm text-red-700">{item.result}</p>
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
              {v('aboutBio2', "Pipeline audits are the first thing I do in every engagement. In 20 years of doing this, I've never seen a $1M–$10M ARR company with a healthy pipeline structure on day one. That's not a criticism — it's the nature of founder-built sales. My job is to rebuild it systematically, so revenue becomes predictable.")}
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
              {v('ctaHeadline', "Let's Look at Your Pipeline Together")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess your current pipeline structure, identify the one input that's failing, and map exactly what needs to change to make your revenue predictable.")}
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
