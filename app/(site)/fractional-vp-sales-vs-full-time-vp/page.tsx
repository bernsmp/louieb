'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'

const CMS_SECTION = 'seoVpSalesVsFullTime'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FractionalVpSalesVsFullTimePage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const comparison = [
    {
      category: v('compare1Category', 'Cost'),
      fractional: v('compare1Fractional', '$6,000–$14,000/month retainer'),
      fullTime: v('compare1FullTime', '$180,000–$280,000/year base + equity + benefits'),
    },
    {
      category: v('compare2Category', 'Time to productivity'),
      fractional: v('compare2Fractional', "Week 1 — they've done this before"),
      fullTime: v('compare2FullTime', '3–6 months before they\'re fully up to speed'),
    },
    {
      category: v('compare3Category', 'Commitment'),
      fractional: v('compare3Fractional', 'Month-to-month or short contract — stop anytime'),
      fullTime: v('compare3FullTime', 'Full-time employee — legal, severance, and disruption to exit'),
    },
    {
      category: v('compare4Category', 'Experience level'),
      fractional: v('compare4Fractional', 'Senior, battle-tested — has seen your exact problems before'),
      fullTime: v('compare4FullTime', "Varies widely — hard to assess until they're already in the seat"),
    },
    {
      category: v('compare5Category', 'Equity'),
      fractional: v('compare5Fractional', 'None required'),
      fullTime: v('compare5FullTime', 'Significant equity expected at VP level'),
    },
    {
      category: v('compare6Category', "Risk if it doesn't work"),
      fractional: v('compare6Fractional', 'Low — end the engagement, lessons learned'),
      fullTime: v('compare6FullTime', 'High — months of disruption, recruiting cost, reset'),
    },
    {
      category: v('compare7Category', 'Right stage'),
      fractional: v('compare7Fractional', '$1M–$15M ARR — building systems, proving repeatability'),
      fullTime: v('compare7FullTime', '$15M+ ARR — when you need full-time focus and a dedicated leader'),
    },
  ]

  const chooseFractionalWhen = [
    v('fractional1', "You're at $1M–$15M ARR and still building the sales system"),
    v('fractional2', "You need a senior leader but can't justify $220k+ full-time"),
    v('fractional3', 'You have 1–4 reps who need real management and coaching'),
    v('fractional4', 'You want to test and prove the sales model before a big hire'),
    v('fractional5', 'You\'re not sure what "VP of Sales" should look like at your company yet'),
  ]

  const chooseFullTimeWhen = [
    v('fullTime1', "You're at $15M+ ARR with a proven, repeatable sales motion"),
    v('fullTime2', 'You need someone embedded full-time managing a large team'),
    v('fullTime3', 'The sales system is built — you need scale, not construction'),
    v('fullTime4', 'You can justify the full cost: base, equity, benefits, ramp time'),
    v('fullTime5', "You've already used a fractional leader to prove the model"),
  ]

  const defaultFaqs = [
    {
      q: 'What does a fractional VP of Sales actually do?',
      a: "Everything a full-time VP does — builds the sales process, coaches the team, sets pipeline standards, runs deal reviews, defines ICP, creates the playbook — but on a part-time retainer. You get senior leadership without the full-time cost. Most of my clients are at $1M–$10M ARR and aren't ready for a $220k+ full-time hire.",
    },
    {
      q: 'When does a fractional VP make more sense than a full-time VP?',
      a: "When you're still building the system, not just scaling an existing one. A full-time VP needs a working process to manage. A fractional VP helps you build that process — the ICP definition, the playbook, the pipeline stages, the rep management framework. Once that's built and you're scaling a repeatable motion, then you hire full-time.",
    },
    {
      q: 'Can a fractional VP manage my existing sales reps?',
      a: "Yes. I work with and manage existing reps — running 1:1s, deal reviews, performance coaching, and pipeline management. The fractional model works well when you have 1–4 reps who need a real leader but the company can't justify or afford a full-time VP yet.",
    },
    {
      q: 'What does a fractional VP of Sales cost?',
      a: "My retainers run $6,000–$14,000/month depending on scope and time commitment. Compare that to a full-time VP at $180k–$280k base — plus equity, benefits, and the 3–6 months of ramp time before they're producing. Most founders at the $1M–$10M stage find the fractional model delivers more per dollar at that stage.",
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
        '@type': 'Service',
        name: 'Fractional VP of Sales',
        provider: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        description: 'Fractional VP of Sales vs full-time VP — when to hire fractional, what it costs, and what you actually get.',
        url: 'https://louiebernstein.com/fractional-vp-sales-vs-full-time-vp',
        offers: { '@type': 'Offer', priceRange: '$6,000–$14,000/month' },
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
                Sales Leadership Decision
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              >
                {v('heroLine1', 'Fractional VP of Sales')}
                <span className="block text-blue-400">{v('heroAccent', 'vs. Full-Time VP')}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
              >
                {v('heroDescription', "The question isn't which is better. It's which is right for where you are now. At $1M–$10M ARR, the answer is almost always fractional — and here's why.")}
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
                  href="/fractional-vp-of-sales-for-small-businesses"
                  className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
                >
                  About fractional VP of Sales →
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionCompareHeading', 'Side-by-Side Comparison')}
            </motion.h2>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="px-6 py-4 text-left font-semibold text-neutral-600">Category</th>
                    <th className="px-6 py-4 text-left font-semibold text-blue-700">Fractional VP</th>
                    <th className="px-6 py-4 text-left font-semibold text-neutral-500">Full-Time VP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 font-medium text-neutral-800">{row.category}</td>
                      <td className="px-6 py-4 text-neutral-700">
                        <span className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          {row.fractional}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-neutral-500">{row.fullTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When Each Makes Sense */}
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionWhenHeading', 'When to Choose Each')}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 text-lg font-bold text-blue-800">{v('whenFractionalHeading', 'Choose Fractional When…')}</h3>
                <ul className="space-y-3">
                  {chooseFractionalWhen.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-xl border-2 border-neutral-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-neutral-700">{v('whenFullTimeHeading', 'Choose Full-Time When…')}</h3>
                <ul className="space-y-3">
                  {chooseFullTimeWhen.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-600">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* True Cost of a Full-Time VP */}
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
              {v('sectionCostHeading', 'The True Cost of a Full-Time VP')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600"
            >
              {v('sectionCostSubhead', "The base salary is the smallest line item. Once you add equity, benefits, ramp, and severance risk, the real cost is 2–3x what most founders budget for.")}
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-xl border border-blue-100 bg-blue-50 p-7">
                <div className="mb-3 text-3xl font-bold text-blue-700">01</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">{v('cost1Title', 'Base Salary')}</h3>
                <p className="text-neutral-700">
                  {v('cost1Body', "$180,000–$280,000 a year. At $1M–$10M ARR, that's 2–10% of your entire revenue going to one hire before they've closed a single deal.")}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-xl border border-blue-100 bg-blue-50 p-7">
                <div className="mb-3 text-3xl font-bold text-blue-700">02</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">{v('cost2Title', 'Equity Dilution')}</h3>
                <p className="text-neutral-700">
                  {v('cost2Body', "VP of Sales hires expect 0.5%–1.5% in equity. On a company that exits at $50M, that's a $250,000–$750,000 check you write at the finish line.")}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-xl border border-blue-100 bg-blue-50 p-7">
                <div className="mb-3 text-3xl font-bold text-blue-700">03</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">{v('cost3Title', 'Benefits, Bonus, OTE')}</h3>
                <p className="text-neutral-700">
                  {v('cost3Body', "Add 30% on top of base for health, retirement, payroll tax, and the on-target commission that gets paid whether the team hits the number or not. Real loaded cost: $250,000–$370,000 a year.")}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-xl border border-blue-100 bg-blue-50 p-7">
                <div className="mb-3 text-3xl font-bold text-blue-700">04</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">{v('cost4Title', 'Ramp + Severance Risk')}</h3>
                <p className="text-neutral-700">
                  {v('cost4Body', "3–6 months before they're producing. When it doesn't work — and most VP of Sales hires don't make 18 months — you write a severance check, lose another 6 months to the search, and start over.")}
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7"
            >
              <p className="text-lg text-neutral-800">
                <span className="font-bold text-neutral-900">{v('costNetLabel', 'Net: ')}</span>
                {v('costNetBody', "A full-time VP at $1M–$10M ARR runs roughly $400,000–$600,000 in true 24-month cost when it works. A fractional retainer at $96,000–$168,000 a year delivers the same senior leadership while you build the system that actually justifies the full-time hire later.")}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 space-y-4 text-neutral-700"
            >
              <p>
                {v('costProse1', "Most founders compare a fractional retainer to a full-time base salary and call it a day. That's the wrong math. The honest comparison is the 24-month total cost — base, equity, loaded benefits, ramp, and the cost of being wrong — versus a fractional engagement you can end any month if it isn't working. ")}
                <Link
                  href="/250k-mistake-vp-sales-hire-too-early"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  The $250k mistake most founders make
                </Link>
                {v('costProse1End', " is hiring the full-time VP before the sales system exists for them to manage.")}
              </p>
              <p>
                {v('costProse2', "The right sequence at $1M–$10M ARR is usually fractional first, full-time second. A fractional leader builds the playbook, hires and ramps the reps, and proves the motion is repeatable. Once it is, you hand off to a full-time VP who scales it. ")}
                <Link
                  href="/cost-of-fractional-vp-sales"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  Here's exactly what fractional costs
                </Link>
                {v('costProse2End', " and what's included.")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-6 font-serif text-2xl font-bold text-neutral-900 md:text-3xl"
            >
              {v('relatedHeading', 'Related Reading')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3 text-lg">
              <li>
                <Link
                  href="/250k-mistake-vp-sales-hire-too-early"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  The $250k Mistake: Hiring a VP of Sales Too Early
                </Link>
              </li>
              <li>
                <Link
                  href="/cost-of-fractional-vp-sales"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  What Does a Fractional VP of Sales Actually Cost?
                </Link>
              </li>
              <li>
                <Link
                  href="/fractional-sales-leader-first-90-days"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  What a Fractional Sales Leader Does in the First 90 Days
                </Link>
              </li>
            </motion.ul>
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
              {v('aboutBio2', "I work with founders at $1M–$15M ARR who need real sales leadership but aren't ready for a full-time VP. I've lived both sides of this — as a founder who built and sold without a VP, and as the fractional leader who comes in and builds what was missing.")}
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
              {v('ctaHeadline', 'Not Sure Which Is Right for You?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "Let's spend 30 minutes together. I'll tell you honestly whether you need fractional leadership or a full-time hire — and what to build before you do either.")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                Book a Working Session
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
