'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoFractionalSalesLeadershipRoi'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FractionalSalesLeadershipRoiPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const roiMetrics = [
    {
      metric: v('roi1Metric', 'Cost vs. Full-Time VP of Sales'),
      value: v('roi1Value', '60–75% less'),
      detail: v('roi1Detail', "A full-time VP of Sales at the $1M–$10M stage costs $180,000–$300,000 in base salary, plus benefits, equity, and a 12–18 month ramp period where they're building rather than scaling. A fractional engagement runs $4,000–$12,000 per month. For most companies, that's $50,000–$120,000 per year against $300,000+ fully loaded."),
    },
    {
      metric: v('roi2Metric', 'Time to First Results'),
      value: v('roi2Value', '30–60 days'),
      detail: v('roi2Detail', "A full-time VP of Sales typically takes 6–12 months to produce measurable results — partly because of ramp, partly because of the inherent risk of a bad fit. A fractional sales leader produces leading indicators (pipeline health, rep accountability, forecast accuracy) within the first 30–60 days, with revenue impact at 90 days."),
    },
    {
      metric: v('roi3Metric', 'Revenue Impact'),
      value: v('roi3Value', '20–35% increase'),
      detail: v('roi3Detail', "Companies that implement fractional sales leadership consistently report 20–35% revenue growth in the 12 months following engagement. The primary drivers: fewer deals falling through the cracks, faster rep ramp, higher close rates through better qualification, and a founder who can focus on the business rather than closing every deal."),
    },
    {
      metric: v('roi4Metric', 'Risk Profile'),
      value: v('roi4Value', 'Near zero'),
      detail: v('roi4Detail', "Hiring a full-time VP of Sales is one of the highest-risk hires a company can make. A bad hire costs $200,000–$400,000 in salary and lost momentum. A fractional engagement can be adjusted or ended with 30 days notice. The downside is bounded. The upside — a revenue system that works without the founder — is not."),
    },
  ]

  const costComparison = [
    {
      item: v('cost1Item', 'Annual cost'),
      fractional: v('cost1Fractional', '$60K–$120K/year'),
      fullTime: v('cost1FullTime', '$250K–$400K fully loaded'),
    },
    {
      item: v('cost2Item', 'Ramp to results'),
      fractional: v('cost2Fractional', '30–90 days'),
      fullTime: v('cost2FullTime', '6–18 months'),
    },
    {
      item: v('cost3Item', 'Risk of bad fit'),
      fractional: v('cost3Fractional', 'Low — 30-day exit'),
      fullTime: v('cost3FullTime', 'High — 6-12 months to realize'),
    },
    {
      item: v('cost4Item', 'Focus'),
      fractional: v('cost4Fractional', 'Revenue outcomes'),
      fullTime: v('cost4FullTime', 'Building team + political capital'),
    },
    {
      item: v('cost5Item', 'Right stage for'),
      fractional: v('cost5Fractional', '$1M–$10M ARR'),
      fullTime: v('cost5FullTime', '$10M+ with a working system'),
    },
  ]

  const roiTimeline = [
    {
      phase: v('timeline1Phase', 'Days 1–30'),
      title: v('timeline1Title', 'Diagnosis and Infrastructure'),
      outcomes: [
        v('timeline1O1', 'Pipeline audit complete — real pipeline vs. wishful pipeline identified'),
        v('timeline1O2', 'CRM configured to reflect actual sales process'),
        v('timeline1O3', 'First pipeline review cadence established'),
        v('timeline1O4', 'Rep accountability baseline set'),
      ],
    },
    {
      phase: v('timeline2Phase', 'Days 31–90'),
      title: v('timeline2Title', 'Process and Performance'),
      outcomes: [
        v('timeline2O1', 'Sales playbook drafted or updated'),
        v('timeline2O2', 'Stage conversion rates being tracked'),
        v('timeline2O3', 'Rep performance improving through weekly coaching'),
        v('timeline2O4', 'Founder beginning to step back from individual deals'),
      ],
    },
    {
      phase: v('timeline3Phase', 'Month 4–6'),
      title: v('timeline3Title', 'Revenue Impact'),
      outcomes: [
        v('timeline3O1', 'Forecast accuracy measurably improved'),
        v('timeline3O2', 'Close rates up through better qualification'),
        v('timeline3O3', 'Ramp timeline for new hires shortened'),
        v('timeline3O4', 'Revenue growing without requiring founder in every deal'),
      ],
    },
  ]

  const whenRoiIsReal = [
    { signal: v('when1', 'Founder is the primary bottleneck in the current sales motion'), real: true },
    { signal: v('when2', 'Reps are losing deals they should be winning'), real: true },
    { signal: v('when3', 'Pipeline data is inaccurate and forecasting is unreliable'), real: true },
    { signal: v('when4', "The company is ready to hire but hasn't built the system yet"), real: true },
    { signal: v('when5', 'The founder wants to skip the engagement and hire a VP directly'), real: false },
    { signal: v('when6', 'Revenue processes are already working — just need more reps'), real: false },
  ]

  const defaultFaqs = [
    {
      q: 'How do I calculate the ROI of a fractional sales leader for my specific business?',
      a: "Start with what a bad outcome costs you: a VP of Sales hired too early ($200,000–$400,000 fully loaded, often wasted), or two years of founder-dependent sales instead of a scalable process. Then estimate what a 20% improvement in close rate would mean for your revenue. For a company at $3M ARR with a 25% close rate, improving close rate to 30% on the same pipeline adds $600,000 in annual revenue. Against a $72,000–$96,000 annual fractional investment, the math is straightforward.",
    },
    {
      q: "What if the engagement doesn't produce the results expected?",
      a: "There should be measurable leading indicators within 60 days: pipeline accuracy improves, reps are more accountable, the founder is less involved in individual deals. If these signals aren't present by day 60, something is wrong with the engagement design — not the model. A well-structured fractional engagement has clear 30/60/90-day milestones. If you're evaluating one, ask for those milestones upfront.",
    },
    {
      q: "Is the ROI different for early-stage companies versus companies at $8M–$10M ARR?",
      a: "Yes — but it's high at both ends for different reasons. At $1M–$3M, the primary ROI is speed: building infrastructure that would take a founder 12–18 months to build alone gets done in 60–90 days. At $5M–$10M, the ROI shifts to scale: fixing the process and management gaps that are preventing a working sales team from performing at its potential. The economic impact is larger at higher ARR — but the leverage is real at every stage.",
    },
    {
      q: 'How does fractional sales leadership ROI compare to sales coaching?',
      a: "Sales coaching improves individual rep performance. Fractional sales leadership improves the entire revenue system. A coach helps reps handle objections better. A fractional sales leader fixes the pipeline, the process, the forecast, the hiring, and the coaching — simultaneously. For most companies, coaching alone won't move the number because the constraint isn't rep skill — it's system quality.",
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
        headline: 'Fractional Sales Leadership ROI: What Does the Investment Actually Return?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/fractional-sales-leadership-roi',
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
              ROI &amp; Pricing
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Fractional Sales Leadership ROI:')}
              <span className="block text-blue-400">{v('heroAccent', 'What Does the Investment Actually Return?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Before you commit, you want to know what you're actually buying. Here are the real numbers — cost vs. full-time hire, time to results, and revenue impact — without the sales pitch.")}
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
                href="/is-fractional-sales-leadership-worth-it"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Is fractional sales leadership worth it? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ROI Metrics */}
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
              {v('sectionRoiHeading', 'The Four ROI Dimensions')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionRoiSubheading', "ROI isn't just revenue. It's cost savings, speed, and risk reduction — all three matter.")}
            </motion.p>
            <div className="space-y-6">
              {roiMetrics.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-4">
                    <h3 className="text-lg font-bold text-neutral-900">{item.metric}</h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">{item.value}</span>
                  </div>
                  <p className="text-neutral-700">{item.detail}</p>
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
              {v('seoPara1', "The ROI question for fractional sales leadership is straightforward when you set the right baseline. The correct comparison isn't \"fractional vs. nothing\" — it's \"fractional vs. the alternatives\": hiring a VP of Sales too early, continuing founder-led sales for another 12 months, or trying to fix the sales process while also running the company. Against any of those alternatives, fractional sales leadership is dramatically more cost-effective and significantly lower risk.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The companies that get the highest ROI from fractional engagements share one characteristic: the founder is genuinely willing to step back and let the process be built. When founders remain deeply involved in every deal and treat the fractional leader as an advisor rather than an operator, results take longer. When they commit to the model, the revenue impact is measurable within 90 days.")}{' '}
              <Link href="/case-study-61-percent-sales-growth" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Read the case study →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cost Comparison */}
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
              {v('sectionCostHeading', 'Fractional vs. Full-Time: The Real Numbers')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCostSubheading', 'The cost difference is significant. But the more important difference is risk and timing.')}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-3 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 text-sm font-bold"></div>
                <div className="border-r border-neutral-700 px-6 py-4 text-sm font-bold text-blue-400">Fractional Sales Leader</div>
                <div className="px-6 py-4 text-sm font-bold">Full-Time VP of Sales</div>
              </div>
              {costComparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="border-r border-neutral-200 px-6 py-4 text-sm font-semibold text-neutral-700">{row.item}</div>
                  <div className="border-r border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <Check className="mb-0.5 mr-1.5 inline h-4 w-4 text-green-600" />{row.fractional}
                  </div>
                  <div className="px-6 py-4 text-sm text-neutral-600">{row.fullTime}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Timeline */}
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
              {v('sectionTimelineHeading', 'How ROI Builds Over Time')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionTimelineSubheading', 'The investment pays back in three phases — leading indicators first, revenue impact by month 3.')}
            </motion.p>
            <div className="grid gap-6 md:grid-cols-3">
              {roiTimeline.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-500">{phase.phase}</div>
                  <h3 className="mb-4 text-lg font-bold text-neutral-900">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* When ROI is real */}
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
              {v('sectionWhenHeading', "When the ROI Is Real — and When It's Not")}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionWhenSubheading', "Fractional sales leadership works in specific conditions. Here's the honest read.")}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {whenRoiIsReal.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${item.real ? 'border-green-200 bg-green-50' : 'border-red-100 bg-red-50'}`}
                >
                  <div className={`mt-0.5 shrink-0 rounded-full p-1 ${item.real ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.real ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </div>
                  <p className={`text-sm font-medium ${item.real ? 'text-green-900' : 'text-red-900'}`}>{item.signal}</p>
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
              {v('aboutBio2', "The ROI numbers on this page are based on real engagements — not projections. The cost savings versus a full-time VP hire are real. The 30–90 day timeline to results is real. The 20–35% revenue improvement is real for companies where the engagement conditions are right. I'll tell you honestly in a 30-minute call whether your situation meets those conditions.")}
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
              {v('ctaHeadline', "Want to Know the ROI for Your Specific Situation?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can give you a specific estimate of what a fractional engagement would cost, what results you could expect in 90 days, and whether the ROI makes sense for your stage.")}
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
