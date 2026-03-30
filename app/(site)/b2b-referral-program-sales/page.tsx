'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoB2bReferralProgram'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function B2bReferralProgramPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const components = [
    {
      number: '01',
      title: v('component1Title', 'Define Who Should Be Referring You'),
      body: v('component1Body', "Not every customer is a good referral source. The best referral sources are customers who achieved a clear, measurable outcome from your product or service — and who regularly interact with your ICP through their professional networks. Start by identifying your top 10 customers by NPS or satisfaction and the top 5 by network overlap with your target buyer. Those 15 names are your referral program's founding members."),
    },
    {
      number: '02',
      title: v('component2Title', 'Make the Ask Specific and Frictionless'),
      body: v('component2Body', "The reason most companies get fewer referrals than they deserve is that they make a vague ask: 'If you know anyone who could use our help, send them our way.' Specific asks generate specific results. 'Do you know any founders in the $2M–$8M ARR range who are struggling to scale their sales team beyond founder-led sales?' gives the referrer a mental filter and a clear criterion. They either know someone or they don't — no thinking required."),
    },
    {
      number: '03',
      title: v('component3Title', "Build a Follow-Through System — Not Just a Follow-Up"),
      body: v('component3Body', "A referral without follow-through destroys the referral relationship. When a referral is made, the referred person should hear from you within 24 hours, get a warm handoff message from the referrer, and receive something of immediate value (a diagnostic, a relevant piece of content, a short meeting). If the referral doesn't go anywhere, close the loop with the referrer so they know and feel good about having made the introduction."),
    },
    {
      number: '04',
      title: v('component4Title', 'Create a Referral Cadence — Not a One-Time Ask'),
      body: v('component4Body', "One-time asks produce one-time results. A referral program is a cadence: an annual review with each customer that includes a referral ask, a mid-year check-in that surfaces new connections, and a quarterly internal audit of which customers are most likely to refer now. The founders who build systematic referral programs build them into their customer success process — not as a separate initiative, but as a standard touchpoint at key relationship milestones."),
    },
    {
      number: '05',
      title: v('component5Title', "Decide Whether to Incentivize — and How"),
      body: v('component5Body', "Incentive structure is context-dependent. In professional services, monetary referral fees can feel transactional and damage the relationship. In SaaS or product businesses, credits, discounts, or co-marketing value can work well. The most effective incentive is often non-monetary: exclusive access, a personal thank-you from leadership, or being listed as a case study partner. Start with the non-monetary approach and test incentive-based referrals with a small cohort before rolling out broadly."),
    },
  ]

  const comparison = [
    {
      without: v('comparison1Without', "Referrals happen randomly — when a customer happens to think of you"),
      with: v('comparison1With', 'Referrals are systematically requested at defined customer milestones'),
    },
    {
      without: v('comparison2Without', "The ask is vague: 'Let us know if anyone comes to mind'"),
      with: v('comparison2With', 'The ask is specific: names the exact buyer profile the referrer should think of'),
    },
    {
      without: v('comparison3Without', "Referred leads sit in a generic inbox with no priority routing or warm handoff"),
      with: v('comparison3With', 'Referred leads are contacted within 24 hours with a personalized warm introduction'),
    },
    {
      without: v('comparison4Without', "Referral sources are never thanked or updated on what happened to their referral"),
      with: v('comparison4With', 'Every referral gets a closed-loop update — the referrer always knows what happened'),
    },
    {
      without: v('comparison5Without', "Close rate on referred leads is unknown — they're mixed in with inbound"),
      with: v('comparison5With', 'Referred leads are tracked separately — close rate, cycle length, and LTV are measured'),
    },
    {
      without: v('comparison6Without', "The referral channel generates a few deals per year — ad hoc, unpredictable"),
      with: v('comparison6With', 'The referral channel generates a predictable 15–30% of new pipeline — systematically'),
    },
  ]

  const signals = [
    v('signal1', 'Customers love you but you rarely get introductions from them'),
    v('signal2', 'You have no formal process for requesting referrals — it happens when someone remembers to ask'),
    v('signal3', 'You track referral source in the CRM but have never analyzed close rate or LTV by source'),
    v('signal4', "Referred leads often go cold because nobody followed up quickly enough"),
    v('signal5', 'Your best customers have extensive networks in your ICP but you\'ve never made a specific ask'),
    v('signal6', 'You\'ve never measured the referral rate across your customer base'),
  ]

  const defaultFaqs = [
    {
      q: 'Do B2B referral programs need financial incentives to work?',
      a: "Not for service businesses — and often financial incentives backfire by making the relationship feel transactional. In professional services, the most effective referral driver is a genuinely excellent outcome. Customers who got a measurable result refer naturally when asked specifically. What they need isn't money — it's a simple ask, a specific description of who to refer, and confirmation that their referral will be handled well. Financial incentives work better in SaaS or product businesses where the relationship is less personal.",
    },
    {
      q: "What's the best time to ask for a referral?",
      a: "The optimal moment is immediately after a positive outcome — when the customer has just experienced something that makes them feel good about the relationship. This could be a quarterly business review where results are positive, a specific milestone (first closed deal, first 90-day win), or the moment a customer proactively tells you how happy they are. Asking during a problem or at contract renewal is less effective because the customer's attention is on other things.",
    },
    {
      q: "How do I handle a referral that doesn't convert?",
      a: "Close the loop with the referrer — always. Tell them what happened (the company wasn't ready yet, wasn't the right fit, is on the 6-month timeline), thank them for the introduction, and keep the relationship warm. Referrers who feel their introductions went into a black hole stop referring. Referrers who feel their introductions were handled professionally and updated promptly refer again. The long-term referral relationship is more valuable than any single deal.",
    },
    {
      q: 'How do referral-sourced leads compare to other lead sources?',
      a: "Referral-sourced leads consistently outperform other channels on close rate, sales cycle length, and lifetime value. The reason: a referral comes with pre-established trust. The referred buyer already believes you're credible because someone they trust said so. This compresses the early trust-building phase of the sales cycle, which is often the longest part. Most $1M–$10M companies that track referral source carefully find that referred deals close 30–50% faster and at 15–25% higher win rates than cold or inbound leads.",
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
        headline: "How to Build a B2B Referral Program That Generates Warm Leads Consistently",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/b2b-referral-program-sales',
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
              Pipeline Generation
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Build a B2B Referral Program')}
              <span className="block text-blue-400">{v('heroAccent', 'That Generates Warm Leads Consistently')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders rely on referrals but have no system to generate them. They happen when a customer happens to think of you — not because you made a specific ask through a repeatable process. Here's how to build the system.")}
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
                href="/how-to-build-a-sales-pipeline-that-actually-fills-itself"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Build a pipeline that fills itself →
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
              {v('sectionComponentsHeading', 'The 5 Components of a Systematic Referral Program')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComponentsSubheading', "Ad-hoc referrals happen by accident. Systematic referrals require each of these five elements working together.")}
            </motion.p>
            <div className="space-y-6">
              {components.map((item, i) => (
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
              {v('seoPara1', "Referrals are the highest-converting, lowest-cost, fastest-closing pipeline source in B2B sales — and most companies generate a fraction of the referrals they could because they have no system to request them. The problem isn't that customers don't want to refer. It's that nobody ever made a specific enough ask. Customers who had great outcomes are ready and willing to introduce you to peers with the same problems — they just need a clear target, a specific ask, and a frictionless way to make the introduction.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "Building a referral program isn't a marketing project — it's a sales process. It requires the same rigor as any other pipeline generation activity: defined targets, documented process, tracked conversion rates, and regular review. Companies that treat referrals as a systematic channel rather than a happy accident typically build it into 20–30% of new pipeline within 12 months.")}{' '}
              <Link href="/how-to-build-outbound-sales-system" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Pair referrals with a strong outbound system →
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
              {v('sectionComparisonHeading', 'Ad-Hoc Referrals vs. Systematic Referral Program')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComparisonSubheading', "The difference between random referrals and a reliable referral channel is entirely in the process.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">Ad-Hoc Referrals</div>
                <div className="px-6 py-4 font-bold text-blue-400">Systematic Referral Program</div>
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
              {v('sectionSignalsHeading', '6 Signs You\'re Leaving Referral Revenue on the Table')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionSignalsSubheading', "If any of these are true, you have a customer base that could be generating significantly more pipeline — and isn't.")}
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
              {v('aboutBio2', "In my own business, referrals are the primary pipeline source — and they come systematically, not by accident. Building a referral cadence into client relationships is something I help founders do in almost every engagement. The first step is always the same: audit your customer base for satisfaction and network overlap, then make a specific ask to the five best-positioned customers. The results consistently surprise founders who've been hoping customers would refer on their own.")}
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
              {v('ctaHeadline', "Your Best Customers Aren't Referring You Yet. Let's Change That.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your customer base, identify your best referral sources, and help you build the ask and follow-through process that turns good relationships into consistent pipeline.")}
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
