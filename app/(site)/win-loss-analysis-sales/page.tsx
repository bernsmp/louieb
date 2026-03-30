'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWinLossAnalysis'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function WinLossAnalysisPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const steps = [
    {
      number: '01',
      title: v('step1Title', 'Pull Your Last 30 Closed Deals — Wins and Losses'),
      body: v('step1Body', "Start with the data you already have. Export the last 30 closed-won and 30 closed-lost deals from your CRM. If you don't have 30 of each, use what you have. The goal is a representative sample — not a perfect one. Include deal size, source, industry, deal length, and which rep handled it."),
    },
    {
      number: '02',
      title: v('step2Title', 'Interview the Buyers — Not Just Your Reps'),
      body: v('step2Body', "Rep notes in the CRM are filtered through ego and assumption. The real win/loss intelligence comes from calling the buyers directly — both the ones who bought and the ones who didn't. A 15-minute call with three simple questions ('Why did you choose us?' / 'Why did you go another direction?' / 'What almost made you decide differently?') generates more actionable insight than 6 months of rep feedback."),
    },
    {
      number: '03',
      title: v('step3Title', 'Segment by Pattern — Not by Individual Deal'),
      body: v('step3Body', "The goal isn't to understand why deal #17 was lost. It's to find patterns across all 60 deals. Group wins and losses by: decision driver, competitor, buyer title, company size, industry, and rep. The patterns that emerge — 'We win when the buyer is a VP of Sales' or 'We lose every deal where procurement is involved' — become the foundation of your ICP and playbook updates."),
    },
    {
      number: '04',
      title: v('step4Title', 'Separate Controllable from Uncontrollable Losses'),
      body: v('step4Body', "Not every loss is fixable. Some deals are lost to budget freezes, company acquisitions, or competitors with fundamentally better pricing. Those are uncontrollable losses — learn from them but don't obsess over them. The high-value insight is in the controllable losses: deals you lost due to rep skill gaps, unclear value proposition, late engagement of the right stakeholder, or a proposal that didn't address the real objection."),
    },
    {
      number: '05',
      title: v('step5Title', 'Build Three Specific Actions From What You Find'),
      body: v('step5Body', "A win/loss analysis that doesn't change anything is a research project, not a business tool. Every analysis should produce at least three specific actions: one change to your ICP or targeting, one change to your sales process or playbook, and one coaching focus for your reps. Document them, assign owners, and set a 60-day checkpoint to assess whether they're moving the numbers."),
    },
  ]

  const comparison = [
    {
      without: v('comparison1Without', "Lost deals are recorded as 'no decision' or 'price' with no further detail"),
      with: v('comparison1With', 'Each loss has a documented root cause categorized by type and assigned to a controllable or uncontrollable bucket'),
    },
    {
      without: v('comparison2Without', "ICP is based on who you hope to sell to, not who actually buys"),
      with: v('comparison2With', 'ICP is refined every quarter from closed-won pattern analysis'),
    },
    {
      without: v('comparison3Without', "Reps handle the same objections inconsistently — each inventing their own response"),
      with: v('comparison3With', 'Playbook objection responses are built from real win/loss root cause data'),
    },
    {
      without: v('comparison4Without', 'Pricing changes are reactive — discounts given when buyers push back'),
      with: v('comparison4With', 'Pricing strategy is informed by what decision drivers actually drive wins vs. losses'),
    },
    {
      without: v('comparison5Without', 'Marketing campaigns target the wrong buyers because no one has checked win data'),
      with: v('comparison5With', 'Marketing and sales are aligned on the exact profile that closes fastest and stays longest'),
    },
    {
      without: v('comparison6Without', 'The same fixable mistakes get made quarter after quarter'),
      with: v('comparison6With', 'Controllable loss patterns are caught and corrected within one sales cycle'),
    },
  ]

  const signals = [
    v('signal1', 'You lose to the same competitor repeatedly without knowing exactly why'),
    v('signal2', 'Your win rate has been declining for 2+ quarters and you can\'t explain it'),
    v('signal3', 'Different reps quote different reasons for losing the same type of deal'),
    v('signal4', 'Your ICP hasn\'t been reviewed since you first wrote it down'),
    v('signal5', 'You\'ve hired more reps but close rates per rep are declining'),
    v('signal6', 'Marketing and sales disagree on what a good lead looks like'),
  ]

  const defaultFaqs = [
    {
      q: 'How often should a win/loss analysis be run?',
      a: "Quarterly at minimum — ideally as an ongoing process where every closed deal (win or loss) gets a brief structured review within 48 hours. The quarterly deep-dive should pull the full dataset, look for trends, and produce the three specific actions. The 48-hour close reviews catch emerging patterns before they compound. Most companies under $10M run neither — which is why the same losses repeat quarter after quarter.",
    },
    {
      q: 'Should sales reps conduct their own win/loss interviews?',
      a: "No — and this is the most common mistake. Buyers will not tell your rep the real reason they chose a competitor. They'll soften it, omit the most embarrassing parts, and protect the relationship. Win/loss interviews should be conducted by someone the buyer perceives as neutral: a founder, a customer success leader, or a third party. The information you get from an unfiltered buyer conversation is categorically different from what a rep hears after the deal closes.",
    },
    {
      q: "What's the most valuable insight a win/loss analysis typically surfaces?",
      a: "ICP drift — companies that are winning deals with a different buyer profile than the one they think they're targeting. This is extremely common in $1M–$10M companies that grew through founder relationships. The deals that close fastest and stay longest often look different from the deals the company is actively pursuing. Fixing that misalignment — by updating the ICP and redirecting sales effort — often has more impact than any process or playbook change.",
    },
    {
      q: 'Can win/loss analysis help with pricing decisions?',
      a: "Yes — and this is one of the most underused applications. When you analyze wins against losses by deal size and decision driver, you almost always find that price objections cluster around deals where value was never clearly established — not deals where the product was genuinely too expensive. This means most 'price losses' are actually 'value communication losses.' That realization is the foundation of a discount-reduction strategy that actually works.",
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
        headline: "How to Run a Win/Loss Analysis: And What to Do With What You Find",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/win-loss-analysis-sales',
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
              Sales Strategy
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Run a Win/Loss Analysis')}
              <span className="block text-blue-400">{v('heroAccent', 'And What to Do With What You Find')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most companies lose the same deals for the same reasons, quarter after quarter, because nobody ever studied why they lost. A win/loss analysis takes less than a week to run and surfaces the specific changes — to your ICP, your process, and your playbook — that move the close rate.")}
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
                href="/how-to-build-a-go-to-market-strategy"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to build a GTM strategy →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Steps */}
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
              {v('sectionStepsHeading', 'How to Run a Win/Loss Analysis in 5 Steps')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionStepsSubheading', "The process takes less than a week. The insights it produces can change your go-to-market for the next year.")}
            </motion.p>
            <div className="space-y-6">
              {steps.map((item, i) => (
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
              {v('seoPara1', "Win/loss analysis is one of the most high-leverage activities a $1M–$10M company can run — and one of the most neglected. The reason it gets skipped is psychological, not logistical: founders and sales leaders don't want to hear that their positioning is wrong, their ICP is off, or that their reps are losing deals for entirely avoidable reasons. The data is almost always uncomfortable. It's also almost always actionable.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The companies that use win/loss analysis systematically compound their advantages over time — they close the same gaps that competitors leave open, continuously narrow their ICP to the buyers who close fastest, and build a playbook grounded in what actually works rather than what sales leaders think works.")}{' '}
              <Link href="/what-is-sales-enablement" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Sales enablement is how you systematize what you learn →
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
              {v('sectionComparisonHeading', 'Without Win/Loss Analysis vs. With It')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComparisonSubheading', "The gap compounds over time. Companies that study their losses systematically outperform those that don't.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">Without Win/Loss Analysis</div>
                <div className="px-6 py-4 font-bold text-blue-400">With Win/Loss Analysis</div>
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
              {v('sectionSignalsHeading', '6 Signs You Need a Win/Loss Analysis Now')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionSignalsSubheading', "If any of these are true, you're losing fixable deals — and the problem will compound until you look at the data.")}
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
              {v('aboutBio2', "A win/loss analysis is one of the first things I run in a new engagement — usually in the first two weeks. What it reveals about the real ICP, the real competitive dynamics, and the real reasons deals stall almost always reshapes the sales strategy for the rest of the engagement. Founders are almost always surprised by what they find. The data is never what they assumed.")}
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
              {v('ctaHeadline', "Losing Deals You Should Be Winning?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk through your last quarter of closed deals, identify the patterns in what you're losing and why, and tell you what to change first.")}
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
