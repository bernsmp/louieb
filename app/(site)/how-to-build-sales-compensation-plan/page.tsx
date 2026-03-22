'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, AlertCircle } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesCompensationPlan'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const compComponents = [
  { component: 'Base Salary', detail: 'The fixed floor that covers the rep\'s cost of living and provides stability. For small teams, base should represent 50–60% of OTE. Too high and you remove accountability; too low and you can\'t recruit.' },
  { component: 'On-Target Commission (OTE)', detail: 'The total expected earnings if the rep hits 100% of quota. OTE = base + commission at quota. Design the plan so that hitting quota produces OTE — then calibrate whether OTE is competitive for the role in your market.' },
  { component: 'Quota', detail: 'The revenue or activity target that triggers commission. Set it at 4–5x the rep\'s OTE for a healthy business. If your rep earns $80K OTE, quota should be $320K–$400K in closed revenue annually.' },
  { component: 'Commission Rate', detail: 'The percentage paid on each closed deal. For most small B2B teams, 8–12% of ARR or deal value is the range. Higher commission rates work for transactional deals; lower rates apply to large enterprise contracts with long cycles.' },
  { component: 'Accelerators', detail: 'Bonus commission rates that kick in when the rep exceeds quota. Accelerators are the most powerful motivation tool in sales comp — a rep at 120% of quota earning 1.5x their base commission rate is incentivized to keep pushing.' },
  { component: 'Clawback Policy', detail: 'The rule for commission recovery if a deal cancels or doesn\'t pay within 90–180 days. Essential for subscription businesses. Reps should know the policy upfront — it discourages deals with shaky customers.' },
]

const benchmarks = [
  { metric: 'OTE (quota attainment at 100%)', smb: '$60K–$90K', midMarket: '$90K–$140K' },
  { metric: 'Base as % of OTE', smb: '50–60%', midMarket: '45–55%' },
  { metric: 'Commission rate on closed ARR', smb: '8–12%', midMarket: '6–10%' },
  { metric: 'Quota as multiple of OTE', smb: '4–5x', midMarket: '5–6x' },
  { metric: 'Accelerator kicks in at', smb: '100% of quota', midMarket: '100% of quota' },
  { metric: 'Accelerator rate', smb: '1.25–1.5x base commission', midMarket: '1.5–2x base commission' },
]

const compMistakes = [
  { mistake: 'Capping commissions', fix: 'Caps tell your best reps to stop selling. Remove them. You want reps motivated to exceed quota, not coast once they hit it.' },
  { mistake: 'Changing the plan mid-year', fix: 'Nothing destroys sales culture faster than moving the goalposts. Lock the plan for 12 months and communicate changes well in advance for the next cycle.' },
  { mistake: 'Quota set too low', fix: 'If 80%+ of your reps hit quota every month, quota is too low. You\'re over-paying for average performance. Quota should be attainable but stretching.' },
  { mistake: 'No accelerators', fix: 'A flat commission rate with no accelerator gives your top performer zero extra incentive. Build in a 1.5x rate at 120% and watch what happens.' },
]

const faqs = [
  {
    q: 'What is a fair sales commission for a small team?',
    a: 'For most B2B SMB sales roles, 8–12% of closed ARR or deal value is the range. The right number depends on your average deal size, sales cycle length, and OTE. If a rep closes $500K at 10% commission, they earn $50K in commission on top of their base.',
  },
  {
    q: 'How do I set quota for a new sales rep?',
    a: 'Start by working backwards from the rep\'s OTE. If their OTE is $80K and you want a 4x quota-to-OTE ratio, quota is $320K annually — about $27K/month in closed revenue. Adjust based on your average deal size and cycle length to make sure the math is achievable.',
  },
  {
    q: 'Should I pay commission on bookings or on cash collected?',
    a: 'For most small teams, pay on bookings (signed contract or closed deal). Paying on cash collected creates cash flow delays that frustrate reps and complicates tracking. Use a clawback clause for deals that cancel within 90–180 days instead.',
  },
  {
    q: 'What\'s the biggest mistake small companies make with sales comp?',
    a: 'Capping commissions. Founders fear uncapped commissions because they imagine a rep earning more than the CEO. In practice, a rep who earns $200K because they closed $2M in ARR is one of the best problems a small company can have. Caps send your top performers to competitors.',
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
      headline: 'How to Build a Sales Compensation Plan for a Small Team',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-build-sales-compensation-plan',
    },
  ],
}

export default function SalesCompensationPlanPage() {
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
              {v('heroLine1', 'How to Build a Sales Compensation Plan')}
              <span className="block text-blue-400">{v('heroAccent', 'for a Small Team')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "The wrong comp plan drives the wrong behavior — or drives your best rep to a competitor. Here's how to build a plan that attracts strong performers, rewards results, and doesn't cap the upside that motivates top sellers.")}
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
                href="/how-to-hire-first-sales-rep"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to hire your first sales rep →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Comp Components */}
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
              The 6 Components of a Sales Comp Plan
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Every component has a purpose. Understanding how they interact is how you build a plan that motivates the right behavior.
            </motion.p>
            <div className="space-y-4">
              {compComponents.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <span className="font-bold text-neutral-900">{item.component}: </span>
                    <span className="text-neutral-700">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benchmarks */}
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
              Small Team Sales Comp Benchmarks
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              These ranges apply to B2B companies at $1M–$15M ARR with ACV between $10K and $100K.
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Metric</th>
                    <th className="px-4 py-3 text-left font-semibold">SMB AE ($50K–$100K ACV)</th>
                    <th className="px-4 py-3 text-left font-semibold">Mid-Market AE ($100K+ ACV)</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 font-medium text-neutral-800">{row.metric}</td>
                      <td className="px-4 py-3 text-neutral-600">{row.smb}</td>
                      <td className="px-4 py-3 text-neutral-600">{row.midMarket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <div className="mt-10">
              <motion.h3 variants={itemVariants} className="mb-4 text-center font-serif text-xl font-bold text-neutral-900">
                4 Comp Plan Mistakes to Avoid
              </motion.h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {compMistakes.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="rounded-xl border border-neutral-200 bg-white p-5"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                      <span className="font-bold text-neutral-900">{item.mistake}</span>
                    </div>
                    <p className="text-sm text-neutral-600">{item.fix}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Building out your full sales team?{' '}
                <Link href="/build-sales-team-after-1m-arr" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  How to build a sales team after $1M ARR →
                </Link>
              </p>
            </motion.div>
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
              {v('aboutBio2', "I've designed sales compensation plans for dozens of small teams — from a single first rep to 10-person sales organizations. The most common mistake I see is founders who are afraid to pay their reps well. The right comp plan is the best investment in revenue growth you can make.")}
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
              {v('ctaHeadline', "Let's Build a Comp Plan That Attracts and Retains Top Reps")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current compensation structure and tell you whether it's competitive, whether it's driving the right behavior, and what to change.")}
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
