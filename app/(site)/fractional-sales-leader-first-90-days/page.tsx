'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoFractionalLeaderFirst90Days'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FractionalLeaderFirst90DaysPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const phases = [
    {
      number: '01',
      label: v('phase1Label', 'Days 1–30'),
      title: v('phase1Title', 'Listen, Audit, and Map What Is Real'),
      detail: v('phase1Detail', "The first 30 days are not for fixing anything. They are for understanding what is actually happening versus what the founder believes is happening. A fractional sales leader who starts making changes in week one has skipped the most important step: diagnosis. The audit covers five areas — pipeline quality and stage accuracy, quota structure and ICP definition, the existing sales process and where deals are dying, the team's activity patterns versus their outcomes, and the CRM setup. At the end of 30 days, the fractional leader should be able to give you a written summary of the top two or three highest-leverage interventions and why those are the priority over everything else."),
      deliverable: v('phase1Deliverable', "Deliverable by day 30: A written pipeline audit and a prioritized list of the two or three changes with the highest expected revenue impact. If you do not receive this, ask for it directly."),
    },
    {
      number: '02',
      label: v('phase2Label', 'Days 31–60'),
      title: v('phase2Title', 'First Interventions, Process Changes, Pipeline Cleanup'),
      detail: v('phase2Detail', "Days 31 through 60 are when the work becomes visible. The first interventions are almost always the same: redefine the ICP criteria, clean the pipeline of zombie deals, install or repair the weekly pipeline review, and establish clear exit criteria for each pipeline stage. These are not glamorous changes. They are the unglamorous infrastructure work that makes everything else downstream more accurate and more actionable. By day 60, the pipeline should be smaller and more honest than it was on day one. That is a feature, not a failure. A smaller, honest pipeline is more useful than a large, inflated one."),
      deliverable: v('phase2Deliverable', "Deliverable by day 60: A cleaned and restructured pipeline with documented stage criteria, a running weekly review cadence, and at least one documented outbound or inbound process improvement in motion."),
    },
    {
      number: '03',
      label: v('phase3Label', 'Days 61–90'),
      title: v('phase3Title', 'Accountability Systems Live, Forecast Cleaned Up, Behavior Starting to Shift'),
      detail: v('phase3Detail', "The third phase is about making the first two phases stick. Accountability systems go live: the scorecard, the sales accountability document, the weekly one-on-one structure with documented next actions, and the forecast methodology that connects pipeline data to revenue projections. By day 90, the team should understand who is accountable for what and what happens when commitments are not met. The founder should see a forecast they can use for planning rather than one they have to mentally adjust before sharing with investors or the board. Revenue improvement may not be visible yet at day 90. The infrastructure that produces revenue improvement should be."),
      deliverable: v('phase3Deliverable', "Deliverable by day 90: A documented sales process, a functioning accountability rhythm, a forecast the founder trusts, and a clear roadmap for the next 90 days based on what the first 90 revealed."),
    },
  ]

  const comparison = [
    {
      greenFlag: v('comp1Green', 'Completes a written pipeline audit in the first two weeks'),
      redFlag: v('comp1Red', 'Starts selling or prospecting before auditing what is already broken'),
    },
    {
      greenFlag: v('comp2Green', 'Identifies the one or two highest-leverage interventions and explains why'),
      redFlag: v('comp2Red', 'Tries to change everything at once and creates confusion about priorities'),
    },
    {
      greenFlag: v('comp3Green', 'Establishes a regular weekly review cadence with documented next actions by day 45'),
      redFlag: v('comp3Red', 'Runs ad hoc check-ins with no consistent structure or documentation'),
    },
    {
      greenFlag: v('comp4Green', 'Reports on outcomes: deals moved, deals lost, and why'),
      redFlag: v('comp4Red', 'Reports on activity: calls made, emails sent — without tying it to results'),
    },
    {
      greenFlag: v('comp5Green', 'Has the sales process documented and shared with the team by day 60'),
      redFlag: v('comp5Red', 'Still operating from memory and informal conversations with no written process'),
    },
    {
      greenFlag: v('comp6Green', 'The team understands who is accountable for what and what the consequences are'),
      redFlag: v('comp6Red', 'Accountability is still informal, personal, and inconsistent across the team'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How long does it take to see results from a fractional sales leader?",
      a: "Process improvements are visible within 30 to 60 days. Revenue improvements typically follow 60 to 120 days after that, depending on your average sales cycle length. If your average deal takes 90 days to close, you will not see the revenue from better pipeline management until deals that entered the improved pipeline close. What you should see within 30 days is a more honest pipeline, a cleaner forecast, and a team that knows what is expected of them in a way they did not before.",
    },
    {
      q: "What should a fractional sales leader deliver in the first 30 days?",
      a: "A written pipeline audit, a prioritized list of two or three changes with the highest revenue impact, and a clear explanation of why those are the priority over everything else. If they cannot produce this in 30 days, either they did not do the work or they do not know what they are looking at. Both are problems you need to address directly.",
    },
    {
      q: "Should a fractional sales leader start selling immediately or focus on process first?",
      a: "Process first. A fractional sales leader who closes a deal in week two and skips the audit has told you something important: they are optimizing for short-term wins rather than the structural change your team needs. The exception is if you have an active deal that is close to closing and requires specific expertise. In that case, supporting the close is reasonable. Making deals the primary focus in the first 30 days is not.",
    },
    {
      q: "How do I know if my fractional sales leader is actually working?",
      a: "The clearest signal in the first 90 days is whether your pipeline is more honest and more useful than it was before. If your forecast has improved in accuracy, your team knows their accountability expectations, your pipeline review has a consistent structure, and you have a documented sales process — those are all leading indicators that revenue improvement is coming. If none of those things have happened by day 90, you have a conversation to have.",
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
        headline: 'What to Expect in the First 90 Days With a Fractional Sales Leader',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/fractional-sales-leader-first-90-days',
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
              Fractional Sales Leadership
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What to Expect in the First 90 Days')}
              <span className="block text-blue-400">{v('heroAccent', 'With a Fractional Sales Leader')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Days 1-30 are for listening. Days 31-60 are for fixing. Days 61-90 are for making it stick. Here is exactly what should happen after you bring in a fractional sales leader — and the red flags that tell you it is not working.")}
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
                href="/what-does-fractional-sales-leader-do"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What does a fractional sales leader do week to week? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 3 Phases */}
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
              {v('sectionPhasesHeading', 'The 3-Phase 90-Day Roadmap')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionPhasesSubheading', "Each phase builds on the last. Skipping the audit phase is the most common reason engagements stall.")}
            </motion.p>
            <div className="space-y-8">
              {phases.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-1 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">{item.label}</p>
                      <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mb-4 mt-3 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Milestone: </span>
                    <span className="text-blue-800">{item.deliverable}</span>
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
              {v('seoPara1', "One of the most common questions founders ask before hiring a fractional sales leader is: how will I know if it is working? The answer is usually not found in the revenue numbers for the first 60 to 90 days. Revenue is a lagging indicator. The leading indicators are process improvements, pipeline accuracy, forecast reliability, and team accountability. If those are in place and improving, the revenue follows. The challenge is that most founders have not been told what to look for, so they either wait nervously or make judgments too early based on the wrong data.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The best way to get clear on whether a fractional sales leader is the right move is to understand exactly what problem you are trying to solve first. If you are still uncertain about timing, this page will help.")}{' '}
              <Link href="/when-to-hire-a-fractional-sales-leader" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                When to hire a fractional sales leader →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison: Green flags vs. Red flags */}
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
              {v('sectionCompHeading', 'Green Flags vs. Red Flags in the First 90 Days')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', "You should not have to guess whether your fractional sales leader is doing the right things. Here is what good looks like versus what should concern you.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold text-green-400">Green Flag</div>
                <div className="px-6 py-4 font-bold text-red-400">Red Flag</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.greenFlag}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.redFlag}</p>
                  </div>
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
              {v('aboutBio2', "The 90-day roadmap I described here is the same one I follow in every new engagement. The phases are not arbitrary. They reflect the sequence of work that produces durable results rather than short-term activity. Founders who are patient through the audit phase almost always see meaningful pipeline and forecast improvement by day 60. The ones who push for quick visible wins before the foundation is set usually end up redoing the foundation work later anyway.")}
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
              {v('ctaHeadline', "Want to Know What the First 90 Days Would Look Like for Your Business Specifically?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk through your current situation and give you a clear sense of what the first 90 days would focus on, what the highest-leverage interventions are, and what a realistic revenue improvement timeline looks like for your team.")}
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
