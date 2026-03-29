'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoBuildGoToMarketStrategy'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const gtmComponents = [
  {
    number: '01',
    title: 'Ideal Customer Profile (ICP)',
    body: 'Your ICP is not your target market. It\'s the specific company type — defined by firmographics, trigger events, pain points, and internal buyer profile — that closes fastest, pays best, and stays longest. Vague ICPs produce long sales cycles and low conversion rates. A precise ICP built from your last 30 closed-won deals is the foundation every other GTM decision is built on.',
    question: 'Test: Can you describe your ICP in one sentence and have every rep agree on it?',
  },
  {
    number: '02',
    title: 'Value Proposition and Messaging',
    body: 'Your value proposition must answer one question for the buyer: "Why should I change what I\'m doing right now, for this?" It\'s not about features. It\'s about the specific business outcome the buyer gets — quantified, grounded in their situation, and differentiated from alternatives. Most companies at the $1M–$10M stage have a product, not a message. The GTM strategy forces that message to be built.',
    question: 'Test: If a rep describes your value proposition to a cold prospect, does it make them want to learn more?',
  },
  {
    number: '03',
    title: 'Sales Motion',
    body: 'Your sales motion is how you go from first contact to closed-won. That includes: which channel you use to find buyers (outbound, inbound, partner, referral), what the discovery process looks like, how you structure the evaluation, and what the handoff to onboarding looks like. Different ICPs require different motions. A land-and-expand SaaS sale looks nothing like a professional services engagement.',
    question: 'Test: Can a new rep understand your sales motion from a one-page document on day one?',
  },
  {
    number: '04',
    title: 'Channel Strategy',
    body: 'Where do your best buyers live? Most $1M–$10M companies stumble into their first customers through founder networks and warm referrals — which doesn\'t tell you where to find the next 100. Channel strategy forces you to answer: which acquisition channels produce the right buyers at a sustainable cost. It also prevents the expensive mistake of investing in channels that produce volume but not quality.',
    question: 'Test: Do you know your customer acquisition cost and sales cycle length by channel?',
  },
  {
    number: '05',
    title: 'Launch and Iteration Plan',
    body: 'A GTM strategy is a hypothesis, not a plan. It needs defined milestones and feedback loops: pipeline coverage targets, conversion rate benchmarks, ICP validation checkpoints. The companies that execute GTM successfully are the ones that treat the first 90 days as a test, not a commitment. Adjust the ICP, the messaging, or the channel based on what the data says — not what the original plan assumed.',
    question: 'Test: Do you have defined metrics that would tell you the GTM strategy isn\'t working?',
  },
]

const gtmComparison = [
  { wrong: 'ICP defined as "companies between $1M and $50M that could use our product"', right: 'ICP defined as "B2B SaaS companies at $2M–$8M ARR with a sales team of 3–10 reps experiencing quota miss"' },
  { wrong: 'Value prop is a list of features: "Our platform does X, Y, and Z"', right: 'Value prop is an outcome: "We cut sales ramp time by 40% for growing B2B teams"' },
  { wrong: 'Sales motion is: "however we closed the last deal"', right: 'Sales motion is documented: outbound sequence → discovery → demo → proposal → close' },
  { wrong: 'Channel strategy is: "post on LinkedIn and hope for referrals"', right: 'Channel strategy has two tested channels with CAC and conversion rate data for each' },
  { wrong: 'No defined success metrics — GTM is "working" if revenue goes up', right: 'Weekly pipeline coverage, stage conversion rates, and ICP match rate measured from day one' },
]

const gtmMistakes = [
  { mistake: 'Building the GTM around what you want to sell, not what buyers want to buy', why: 'GTM that starts with the product fails in the field. Start with the buyer\'s problem and work backward.' },
  { mistake: 'Targeting too broad an ICP to avoid leaving revenue on the table', why: 'Broad targeting produces long cycles, high churn, and unclear messaging. Narrow to win — then expand.' },
  { mistake: 'Defining the GTM strategy in a conference room without sales data', why: 'Your last 30 deals contain the real GTM. Build from closed-won patterns, not internal conviction.' },
  { mistake: 'Treating the GTM as a launch event instead of an ongoing process', why: 'Markets move. ICPs shift. What works in Q1 may not work in Q3. GTM requires quarterly reviews.' },
]

const faqs = [
  {
    q: 'Do I need a go-to-market strategy if I already have $3M in ARR?',
    a: 'Yes — more than ever. At $3M ARR, you\'ve validated that some version of your GTM works. The question is whether it\'s built on repeatable fundamentals (clear ICP, documented process, known channels) or on founder relationships and luck. If it\'s the latter, scaling past $5M will be much harder than it should be. A formal GTM review at $3M–$5M ARR is one of the highest-leverage investments a founder can make.',
  },
  {
    q: 'How often should a go-to-market strategy be revised?',
    a: 'The core ICP and value proposition should be reviewed quarterly and updated when the data changes — when close rates shift, when win/loss patterns change, or when a new segment starts outperforming the original. The channel strategy should be reviewed monthly. Most companies under $10M are running on a GTM built in the first year and never updated — which means they\'re often selling to the wrong buyers with the wrong message through the wrong channels.',
  },
  {
    q: 'What\'s the relationship between a go-to-market strategy and a sales playbook?',
    a: 'The GTM strategy defines the "what" and "who" — which buyers to target, with what message, through what channels. The sales playbook defines the "how" — the specific process reps use to convert those buyers into customers. The GTM strategy should be built before the playbook, because the playbook is built around the buyer journey the GTM strategy defines. Most companies build the playbook first and wonder why it doesn\'t work.',
  },
  {
    q: 'Can a fractional sales leader help build a go-to-market strategy?',
    a: 'Yes — and this is one of the highest-value applications of fractional sales leadership. Building a GTM strategy requires both strategic clarity (ICP, value prop, motion) and operational execution (configuring the CRM, training reps, running pipeline reviews against the new framework). Consultants can deliver the strategy document. A fractional sales leader builds the strategy and then implements it.',
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
      headline: 'How to Build a Go-to-Market Strategy for a $1M–$10M B2B Business',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-build-a-go-to-market-strategy',
    },
  ],
}

export default function HowToBuildGtmStrategyPage() {
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
              Growth Strategy
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Build a Go-to-Market Strategy')}
              <span className="block text-blue-400">{v('heroAccent', 'for a $1M–$10M B2B Business')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders have a sales process. Few have a go-to-market strategy. The difference is what separates companies that stall at $3M from companies that break through to $10M. Here's the five-component framework.")}
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
                href="/how-to-create-an-ideal-customer-profile"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to create an ideal customer profile →
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
              The 5 Components of a GTM Strategy
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each component has a test you can run right now to assess where you stand.
            </motion.p>
            <div className="space-y-6">
              {gtmComponents.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                      <p className="mb-4 text-neutral-700">{item.body}</p>
                      <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                        <span className="text-sm font-bold text-blue-800">{item.question}</span>
                      </div>
                    </div>
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
              A go-to-market strategy is not a marketing plan, a pitch deck, or a set of quarterly revenue targets. It's the operational framework that defines who you sell to, what you say to them, how you reach them, and how you close them — documented clearly enough that a rep can execute it without the founder in the room. Most $1M–$10M companies don't have one. They have a collection of things that have worked and a founder who knows how to sell. That distinction is what makes growth hard to sustain.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              Building a GTM strategy starts with your data, not with a blank whiteboard. The ICP comes from your last 30 closed-won deals. The value proposition comes from your win/loss analysis. The channel strategy comes from your CAC by source. If you don't have that data today, the first step is building the tracking system that generates it. If you're not sure{' '}
              <Link href="/what-is-a-sales-audit" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                what a sales audit covers →
              </Link>{' '}
              that's typically the right place to start before building the GTM strategy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GTM Done Right vs Wrong */}
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
              GTM Done Right vs. GTM Done Wrong
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The difference is specificity. Vague GTM produces vague results.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold text-red-400">GTM Done Wrong</div>
                <div className="px-6 py-4 font-bold text-green-400">GTM Done Right</div>
              </div>
              {gtmComparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.wrong}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.right}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GTM Mistakes */}
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
              4 GTM Mistakes That Kill Traction
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each one is common at the $1M–$10M stage. Each one is avoidable.
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2">
              {gtmMistakes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-6"
                >
                  <h3 className="mb-2 font-bold text-red-800">✕ {item.mistake}</h3>
                  <p className="text-sm text-red-700">{item.why}</p>
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
              {v('aboutBio2', "The go-to-market strategy work I do with founders almost always starts the same way: pulling the last 30 closed-won deals and asking hard questions about who actually bought, why, and how. What comes out of that analysis almost always surprises founders — and it becomes the foundation of a GTM that actually produces predictable revenue instead of sporadic wins.")}
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
              {v('ctaHeadline', "Want to Build a GTM That Actually Produces Predictable Revenue?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current GTM — ICP, message, motion, and channels — and tell you exactly where the gaps are and what to fix first.")}
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
