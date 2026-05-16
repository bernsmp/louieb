'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-05'
const CMS_SECTION = 'seoJumpstartRevenueAccelerationQuickWins'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function JumpstartRevenueAccelerationPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', 'Quick wins do not come from doing more — they come from finding the revenue you already have but are not closing. Every $1M–$10M ARR company is sitting on at least one full quarter of unworked pipeline.'),
    v('takeaway2', 'The Fractional Sales Leader method jumpstarts revenue in four moves: a pipeline triage, a qualification reset, a lost-and-dormant win-back motion, and a pricing and packaging audit. None of them require new hires or new marketing spend.'),
    v('takeaway3', 'You will see measurable pipeline movement inside 30 days and closed revenue inside 60 to 90 days. This is not a transformation project — it is harvesting what is already in the field.'),
    v('takeaway4', 'The reason founders cannot do this themselves is not capability. It is capacity. Every hour you spend triaging the pipeline is an hour you are not closing the deal in front of you. A Fractional Leader does the harvest while you keep selling.'),
    v('takeaway5', 'Quick wins fund the longer build. The cash unlocked in the first 90 days typically pays for the next 6 to 12 months of fractional engagement — which is when the actual sales infrastructure gets installed.'),
  ]

  const moves = [
    {
      number: '01',
      title: v('move1Title', 'The 90-Day Pipeline Triage'),
      detail: v('move1Detail', "Every founder-led pipeline has the same shape: a small number of hot deals the founder is personally working, a large number of dormant deals that have not been touched in 45+ days, and a quiet zone of opportunities that never got past first contact. The triage takes one week. We pull every open deal, tag it by last meaningful contact date, last buyer-side signal, and stated next step. Anything older than 60 days with no buyer activity gets one direct, no-pressure re-engagement message. Roughly one in five of those messages produces a real conversation. That is your first quick win — revenue that was already yours, waiting for someone to ask."),
      outcome: v('move1Outcome', 'A clean, ranked pipeline within 7 days — and a measurable jump in active conversations inside week 2.'),
    },
    {
      number: '02',
      title: v('move2Title', 'The Qualification Reset'),
      detail: v('move2Detail', "Founders qualify on instinct in 90 seconds. Salespeople, without explicit criteria, keep every deal alive on hope. We write down the three things that make a deal real (budget confirmed, decision-maker engaged, timeline named) and the three things that disqualify it automatically (no champion, no urgency, no defined buying process). Those become required fields in the CRM. Reps get explicit permission — and credit — for killing deals that do not qualify. The pipeline shrinks. The close rate climbs. Forecast accuracy improves by week 4. A smaller pipeline that converts is worth ten times a bloated pipeline that does not."),
      outcome: v('move2Outcome', 'A 20–40% smaller pipeline closing at a 1.5–2x higher rate inside one quarter — and a forecast you can run a business on.'),
    },
    {
      number: '03',
      title: v('move3Title', 'The Lost-and-Dormant Win-Back Motion'),
      detail: v('move3Detail', "The fastest revenue in any B2B business is hiding in two places: deals you lost in the last 18 months and customers who stopped buying without ever formally churning. Both groups already know your product. Both already evaluated you. Both have changed circumstances since they walked away — new leadership, new budget, new pain. We build a tight, personalized win-back sequence — three touches over four weeks, no automation that sounds like automation, founder-signed when it matters. Win-back conversions typically run 8–15% of contacted accounts. At your average deal size, that is not a small number. It is often a full quarter of revenue."),
      outcome: v('move3Outcome', 'A pipeline of pre-qualified revivals — buyers who already trust you and already need what you sell — typically producing closed revenue inside 60 days.'),
    },
    {
      number: '04',
      title: v('move4Title', 'The Pricing and Packaging Audit'),
      detail: v('move4Detail', "Most $1M–$10M ARR companies are priced where they were at $300K ARR. The product has improved, the market has moved, the value delivered has multiplied — and the price has not. A pricing audit is not a 90-day project. It is a one-week analysis: what are you charging today, what are comparable buyers paying competitors, where in your funnel are you losing on price vs. losing on fit, and what would a 10–15% price increase on new deals actually cost you in win rate. The answer is almost always: very little. The revenue impact is immediate. This is the single highest-leverage, lowest-effort move in the entire playbook — and the one founders are most reluctant to make alone."),
      outcome: v('move4Outcome', 'A defensible price increase on new deals — typically 10–20% — implemented inside 30 days with minimal impact on win rate. Pure margin, pure revenue acceleration.'),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Pipeline is a mystery — nobody knows what is real'),
      withIt: v('compare1With', 'Pipeline is triaged, ranked, and actionable inside 7 days'),
    },
    {
      without: v('compare2Without', 'Every deal stays open — pipeline looks fat, forecast lies'),
      withIt: v('compare2With', 'Hard qualification criteria kill dead deals; close rate climbs'),
    },
    {
      without: v('compare3Without', 'Lost deals and dormant customers disappear from view'),
      withIt: v('compare3With', 'Win-back motion runs continuously — fastest revenue in the business'),
    },
    {
      without: v('compare4Without', 'Pricing has not moved since you were three people'),
      withIt: v('compare4With', 'Pricing audited and reset on new deals — instant margin lift'),
    },
    {
      without: v('compare5Without', 'Founder is the only person who can move a deal forward'),
      withIt: v('compare5With', 'Quick wins are systematized — reps can run the plays without you'),
    },
    {
      without: v('compare6Without', "Revenue is whatever it is — there is no plan to accelerate it"),
      withIt: v('compare6With', 'Measurable pipeline growth in 30 days, closed revenue in 60–90'),
    },
  ]

  const sequencePhases = [
    {
      number: '01',
      title: v('phase1Title', 'Days 1–14: Diagnose and Triage'),
      detail: v('phase1Detail', "The first two weeks are pure diagnosis. We pull every open deal, every closed-lost deal from the past 18 months, every dormant customer, and the last two quarters of pricing data. We map where revenue is actually leaking. By day 14 you have a one-page picture of your pipeline truth — what is real, what is dead, and where the recoverable revenue is hiding. This is the foundation everything else runs from. No new tools. No new hires. Just a clear-eyed look at what you already have."),
    },
    {
      number: '02',
      title: v('phase2Title', 'Days 15–45: Run the Four Quick-Win Plays'),
      detail: v('phase2Detail', "Triage messages go out to dormant pipeline. The qualification reset gets installed in the CRM. The win-back sequence launches to lost deals and dormant accounts. The pricing audit produces a new rate card for new deals. All four plays run in parallel — they do not compete for resources because they touch different parts of the funnel. By day 45 you should see active conversations climbing, forecast accuracy improving, and the first closed-won notifications from the win-back motion."),
    },
    {
      number: '03',
      title: v('phase3Title', 'Days 46–90: Close, Measure, Compound'),
      detail: v('phase3Detail', "The back half of the engagement is conversion. Revived deals work their way through the now-cleaner pipeline. Reps operate inside the new qualification rules. New deals close at higher prices. We measure week-over-week pipeline velocity, close rate, and average contract value. By day 90 the engagement has typically produced enough cash to fund the next 6–12 months of system-building — playbook, hiring, accountability, the foundational infrastructure that turns this from a one-time harvest into a repeatable revenue engine."),
    },
  ]

  const defaultFaqs = [
    {
      q: "How fast can I realistically see new revenue from these quick wins?",
      a: "Pipeline movement inside 30 days. Closed revenue inside 60 to 90 days. The win-back motion (move 3) typically produces the fastest closed dollars because those buyers already know you and have a shorter sales cycle. The pricing audit (move 4) shows up in the first new deal you sign after the new rate card goes live. None of this requires new marketing spend or new hires — it is revenue you already have, surfaced and closed.",
    },
    {
      q: "Why can't I just do this myself? It sounds like common sense.",
      a: "It is common sense. The problem is not knowing what to do — it is having the capacity to do it while still closing the deals in front of you. Every founder I have worked with already knew their dormant pipeline was a goldmine. None of them had touched it in six months. The job a Fractional Leader does is not invention. It is execution. You keep selling the deals in front of you while someone else runs the harvest in parallel.",
    },
    {
      q: "Is this just consulting? What makes it different?",
      a: "Consulting produces a deck. This produces revenue. A Fractional Sales Leader sits inside your business 25 hours a week, runs the plays, owns the outcomes, and gets paid roughly the same total dollars as a senior consultant — without the deliverable being a 40-slide strategy document. You can read the deeper distinction in our explainer on a Fractional Sales Leader versus a consultant.",
    },
    {
      q: "What if my pipeline is genuinely empty? Will these quick wins still work?",
      a: "Three of the four moves still work — qualification reset, win-back, and pricing all run off existing customer data, not new pipeline. The triage move (move 1) will be smaller, but the win-back motion (move 3) is often the highest revenue producer regardless of current pipeline size. If your pipeline is truly empty, win-back is where we start, because every $1M+ business has 18+ months of lost-deal data sitting in the CRM that nobody has worked.",
    },
    {
      q: "Will these quick wins solve my long-term sales problem?",
      a: "No — and that is the point. Quick wins are a funding mechanism, not a strategy. The 60–90 days of accelerated revenue pays for the next 6–12 months of foundational work: playbook, hiring, accountability, the system that turns this from a one-time harvest into a repeatable engine. The harvest is the entry point. The infrastructure is the durable answer.",
    },
  ]

  const displayFaqs = cmsfaqs(5, defaultFaqs)

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
        headline: 'How Do I Jumpstart Revenue Acceleration and Get Quick Wins?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-do-i-jumpstart-revenue-acceleration-and-get-quick-wins',
        datePublished: '2026-05-16',
        publisher: {
          '@type': 'Organization',
          name: 'Louie Bernstein',
          logo: { '@type': 'ImageObject', url: 'https://louiebernstein.com/logo/og-image.png' },
        },
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
      <HeroBackground accentColor="#047857" fillColor="rgba(4,120,87,0.3)" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400"
            >
              {v('heroTag', 'Revenue Acceleration & Quick Wins')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Do I Jumpstart Revenue Acceleration')}
              <span className="block text-emerald-400">{v('heroAccent', 'and Get Quick Wins?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-emerald-200 md:text-xl"
            >
              {v('heroH2', 'The Fractional Sales Leader Method')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders who need revenue this quarter, not a six-month transformation project. Four quick-win moves that surface and close the revenue already sitting in your business.")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-emerald-700 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-800"
              >
                Talk to Louie — 30 Minutes
              </Link>
              <Link
                href="/fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What a Fractional Sales Leader actually does →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border-l-4 border-emerald-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-sm font-bold uppercase tracking-widest text-emerald-800"
            >
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              {takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-neutral-700">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* The Four Quick-Win Moves */}
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
              {v('sectionMovesHeading', 'The Four Quick-Win Moves')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionMovesSubheading', 'None of these require new hires, new tools, or new marketing spend. They surface revenue you already have.')}
            </motion.p>
            <div className="space-y-8">
              {moves.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-emerald-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3">
                    <span className="font-bold text-emerald-800">What You Get: </span>
                    <span className="text-emerald-800">{item.outcome}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraphs */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara1', "Revenue acceleration at the $1M–$10M ARR stage is almost never about doing more — it is about doing what you are already doing with discipline. Every founder-led business is sitting on a quarter or more of unworked pipeline: dormant deals, lost-to-no-decision opportunities, customers who quietly stopped buying, and prices that have not kept pace with the value you now deliver. Surfacing that revenue is not a strategy project. It is an execution problem — and the reason founders cannot solve it alone is capacity, not capability.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The Fractional Sales Leader method jumpstarts revenue by running four moves in parallel inside the first 90 days. The harvest funds the build. If you want to see the underlying metric this method optimizes for, read")}{' '}
              <Link href="/sales-velocity-b2b" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900">
                What Is Sales Velocity? The Metric That Predicts Revenue →
              </Link>
              {v('seoPara2b', '. And if you want to understand the bigger arc — quick wins now, infrastructure next, scale after that — start with')}{' '}
              <Link href="/how-to-scale-revenue-1m-to-10m" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900">
                How to Scale Revenue from $1M to $10M →
              </Link>
              {v('seoPara2c', '. Acceleration is the entry point. Compounding is the destination.')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              {v('sectionCompareHeading', 'Without the Method vs. With It')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The difference is not effort. It is whether someone is running the harvest while you keep selling.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Without the Method')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-emerald-400">
                  {v('compareColRight', 'With the Method')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.without}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.withIt}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 90-Day Sequence */}
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
              {v('sectionSequenceHeading', 'The 90-Day Quick-Win Sequence')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionSequenceSubheading', 'Three phases. The harvest funds the build. The build compounds the harvest.')}
            </motion.p>
            <div className="space-y-8">
              {sequencePhases.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-emerald-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="text-neutral-700">{item.detail}</p>
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
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "The first thing I do inside a $1M–$10M ARR company is find the revenue that is already there. Pipeline triage, qualification reset, win-back motion, pricing audit — four quick-win moves that produce measurable revenue inside 90 days. That cash funds the longer build of playbook, hiring, and accountability infrastructure. Acceleration first. Scale next.")}
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

      {/* Related Reading */}
      <section className="bg-neutral-50 py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="mb-6 font-serif text-xl font-bold text-neutral-900">
              Related Reading
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              <li>
                <Link href="/how-to-build-a-sales-pipeline" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900">
                  How to Build a Sales Pipeline That Fills Itself →
                </Link>
              </li>
              <li>
                <Link href="/sales-velocity-b2b" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900">
                  What Is Sales Velocity? The Metric That Predicts Revenue →
                </Link>
              </li>
              <li>
                <Link href="/how-to-scale-revenue-1m-to-10m" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900">
                  How to Scale Revenue from $1M to $10M →
                </Link>
              </li>
            </motion.ul>
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
              {v('ctaHeadline', 'Find the Revenue You Already Have')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map where the unworked revenue is hiding in your business — dormant pipeline, lost deals, dormant accounts, and underpriced offers — and show you exactly which quick-win move to run first.")}
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
