'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToSetSalesQuota'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const quotaSteps = [
  {
    number: '01',
    title: 'Never Copy Enterprise Benchmarks',
    detail: 'The first mistake most founders make when setting quota is Googling "average quota for B2B SaaS rep" and finding a number like "$800K ARR" — then applying it to a 6-person company that\'s never run a quota-based model before. Enterprise quotas are built on years of conversion data, established territories, mature marketing pipelines, and full support infrastructure. Applying them to an early-stage team produces two outcomes: reps miss quota immediately and lose confidence, or you conclude you have bad reps when you actually had a bad benchmark.',
    action: 'Before setting any quota number, calculate what your current business can actually support. Start with your revenue target, your headcount, and your actual conversion data — not industry benchmarks.',
  },
  {
    number: '02',
    title: 'Build Quota from the Bottom Up — Not the Top Down',
    detail: 'Bottoms-up quota starts with what a rep can realistically do given your actual deal flow, ACV, and conversion rates. The formula: (Number of deals a rep can work at once) × (Stage 2 to close conversion rate) × (Average contract value) × (Number of quarters per year) = annual quota. If a rep can actively work 20 deals at a time, closes 30% of Stage 2 deals, and your ACV is $30K, that\'s: 20 × 0.30 × $30K × 4 quarters = $720K annual quota. This is a calculation, not a hope.',
    action: 'Run this formula with your actual numbers. Then add a 10–15% stretch factor on top. The result is an ambitious but achievable quota rooted in the reality of your sales environment.',
  },
  {
    number: '03',
    title: 'Use Ramp Quotas for New Hires — Every Time',
    detail: 'A new rep on day 1 cannot be held to the same standard as a tenured rep in month 12. Ramp quotas acknowledge this — and they protect both the rep and the business. A standard ramp structure for a 90-day sales cycle: Month 1: 0% of quota (onboarding, learning product and ICP, shadowing calls). Month 2: 25% of quota (running deals with oversight). Month 3: 50% of quota. Month 4: 75% of quota. Month 5: 100%. Skipping the ramp doesn\'t produce faster results — it produces early-stage failures that you incorrectly attribute to the rep.',
    action: 'Write down your ramp schedule before the rep\'s first day. Share it with them in the offer letter so expectations are set before they start.',
  },
  {
    number: '04',
    title: 'When You Have Less Than 12 Months of Rep Data',
    detail: 'If your first rep has been selling for only 6 months, you don\'t have a reliable conversion rate or average deal size to base quota on. Use a range instead of a single number. Take your current conversion data and apply a conservative multiplier: best case (if the last 3 months of conversion rates hold), base case (if the last 6 months hold), and downside (if there\'s a 20% degradation). Set quota at the base case. Review at 90 days. Adjust based on what the data actually shows.',
    action: 'With less than 12 months of data, set quota conservatively, review at 90-day intervals, and build in a formal mid-year reset if the pipeline model has changed materially.',
  },
  {
    number: '05',
    title: 'Know When and How to Revise Quota Mid-Year',
    detail: 'Revising quota mid-year is almost always the wrong move — unless the underlying business assumptions changed materially. If you launched into a new segment, a key product changed, or you\'ve had a significant market shift, a mid-year revision may be warranted. The test: would a rep with full information at the start of the year have expected this change? If yes, the change is valid. If the business is just harder than expected — that\'s not a quota problem, that\'s a pipeline or process problem. Don\'t solve operational problems by adjusting the scoreboard.',
    action: 'Establish a formal quota review process at 6 months with a predetermined criteria list. If fewer than two criteria are met, quota doesn\'t change — the underlying problem gets addressed operationally.',
  },
]

const quotaComparisonRows = [
  { label: 'Starting Point', wrong: 'Industry benchmark from the internet', right: 'Your actual ACV, close rate, and deal capacity' },
  { label: 'New Rep Treatment', wrong: 'Full quota from day 1', right: 'Ramp schedule over 4–5 months' },
  { label: 'Limited Data Situation', wrong: 'Make up a round number', right: 'Calculate a range, set base case, review at 90 days' },
  { label: 'Mid-Year Changes', wrong: 'Lower quota when team is struggling', right: 'Fix the process problem, not the scorecard' },
  { label: 'Annual Review', wrong: 'Add 20% to last year automatically', right: 'Recalculate from bottoms-up with updated conversion data' },
]

const quotaWarnings = [
  'Setting quota before you know your average sales cycle length and close rate',
  'Applying the same quota to reps in different market segments or territories',
  'Never reviewing quota mid-year — even when business assumptions have changed materially',
  'Setting quota with no comp plan attached — quota without variable pay has no motivational power',
  'Making quota private — if reps don\'t know each other\'s quotas, you can\'t build team accountability',
]

const faqs = [
  {
    q: 'What\'s a reasonable quota-to-OTE ratio for a small sales team?',
    a: 'The standard model: quota should be 4x–6x the rep\'s on-target earnings (OTE). If a rep\'s OTE is $150K, quota should be $600K–$900K in revenue. This ratio ensures that the rep\'s compensation is aligned with the value they create. Quotas below 4x OTE make the hire unprofitable. Quotas above 6x OTE are unrealistic and destroy morale when not achieved.',
  },
  {
    q: 'Should quota be in dollars, deals, or activities?',
    a: 'For most B2B teams: quota should be in revenue (dollars or ARR), not activities or deals. Activity quotas (calls per week, emails per day) measure effort, not results. Deal-count quotas create incentives to close small, easy deals instead of pursuing the right accounts. Revenue quotas focus the rep on what the business actually needs. Activity management is a coaching tool, not a quota metric.',
  },
  {
    q: 'What happens when quota is consistently missed by the whole team?',
    a: 'If the entire team misses quota — not just one rep — the quota is probably wrong. Run the bottoms-up calculation again with real data. Either your conversion rates have changed, your deal flow is insufficient to support the quota level, or the quota was set too high to begin with. A quota that 80% of the team can\'t hit isn\'t a performance problem — it\'s a planning problem. Fix the benchmark, not the people.',
  },
  {
    q: 'How should quota change when I add more salespeople?',
    a: 'Each rep\'s individual quota shouldn\'t automatically increase just because the team grows. Team size and individual quota are separate variables. When you add a rep, you\'re adding capacity — which should increase the total team target. The individual quota should still be set from the bottoms-up calculation based on that rep\'s expected deal flow and capacity, not as a fraction of a top-down revenue goal divided by headcount.',
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
      headline: 'How to Set Quota for a Small Sales Team (When You Have No Benchmarks)',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-set-sales-quota',
    },
  ],
}

export default function HowToSetSalesQuotaPage() {
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
              Sales Performance Management
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Set Quota for a Small Sales Team')}
              <span className="block text-blue-400">{v('heroAccent', 'When You Have No Benchmarks')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most early-stage quotas are either made up or borrowed from enterprise playbooks that don't apply. Here's how to set quotas that are ambitious enough to drive performance — and honest enough to be achievable.")}
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
                href="/how-to-build-sales-compensation-plan"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to build a sales comp plan →
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
              The 5-Step Quota Framework
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Built for teams with 1–5 reps and limited historical data. No guessing. No copying competitors.
            </motion.p>
            <div className="space-y-6">
              {quotaSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{step.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{step.title}</h3>
                    <p className="mb-4 text-neutral-700">{step.detail}</p>
                    <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                      <span className="font-bold text-blue-800">Action: </span>
                      <span className="text-blue-800 text-sm">{step.action}</span>
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
              Quota is the single most powerful management lever in a sales organization. Set it correctly and it drives behavior, creates accountability, and makes the comp plan meaningful. Set it incorrectly and it demoralizes your best reps, produces sandbagging behavior, and tells you nothing useful about actual team performance. The tragedy is that most early-stage quotas are set incorrectly for an obvious reason: founders are guessing. They don't have the conversion data, the pipeline model, or the revenue operations knowledge to calculate a real number — so they copy what they hear about, split the revenue target by headcount, or pick a number that "sounds right."
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The bottoms-up quota calculation fixes this. It forces you to understand your own sales math before you hold anyone accountable to it. And quota only works when it's connected to a comp plan that makes hitting it financially meaningful. Once you have the quota right, make sure the comp plan is aligned with the same behaviors it's supposed to reward. Read the{' '}
              <Link href="/how-to-build-sales-compensation-plan" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                guide to building a small-team sales comp plan →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              How Quota Gets Set: Wrong vs. Right
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The patterns are consistent. Most early-stage quotas fail for the same reasons.
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-3 bg-neutral-900 px-6 py-3 text-sm font-bold text-white">
                <div></div>
                <div className="text-center text-red-300">Wrong Way</div>
                <div className="text-center text-green-300">Right Way</div>
              </div>
              {quotaComparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="font-semibold text-neutral-900">{row.label}</div>
                  <div className="text-center text-neutral-500 italic">{row.wrong}</div>
                  <div className="text-center font-medium text-blue-700">{row.right}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warnings */}
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
              5 Quota-Setting Traps to Avoid
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Each one is common. Each one is avoidable once you know to look for it.
            </motion.p>
            <div className="space-y-3">
              {quotaWarnings.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
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
              {v('aboutBio2', "Setting quota correctly is one of the first things I do in every engagement. I build the bottoms-up model from actual pipeline data, set the ramp schedule in the offer letter, and connect the quota to a comp plan that makes hitting it financially meaningful. Founders are often surprised by how much changes when reps have a real number they understand and believe in.")}
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
              {v('ctaHeadline', "Need Help Setting Quota for Your Team?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current pipeline data and run the bottoms-up quota calculation for your team — so you have a number that's defensible, achievable, and aligned with your revenue target.")}
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
