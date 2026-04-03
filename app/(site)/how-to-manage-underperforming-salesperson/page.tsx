'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoManageUnderperformingSalesperson'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function ManageUnderperformingSalespersonPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const steps = [
    {
      number: '01',
      title: v('step1Title', 'Diagnose Before You React'),
      detail: v('step1Detail', "When a salesperson is not hitting their number, the instinct is to intervene immediately. The problem with that instinct is you may be solving the wrong thing. Underperformance has four possible root causes: the salesperson lacks the skill, the salesperson lacks the motivation, the sales process is broken, or the quota and ICP were set incorrectly. Firing a salesperson who has a broken process is an expensive mistake. Coaching a salesperson who has the wrong motivation wastes your time. Diagnosis comes first."),
      fix: v('step1Fix', "Before your next conversation with this person, write down which of the four root causes you think is most likely. Then write down the evidence you have for that belief. If your evidence is thin, you are not ready to act yet."),
    },
    {
      number: '02',
      title: v('step2Title', 'Have the Direct Conversation You Have Been Avoiding'),
      detail: v('step2Detail', "Most founders let underperformance go on too long because they are uncomfortable with direct feedback. They drop hints, adjust territories, or quietly reassign accounts. The salesperson rarely understands what is actually wrong until it is too late to fix it. A direct conversation means two things: you name the specific gap (not 'your numbers are down' but 'you closed zero deals from your last 12 discovery calls'), and you ask the salesperson to explain what they think is happening. You need both the data and their perspective before you can know what to do next."),
      fix: v('step2Fix', "Write out the specific metric that is not being met. Write out the expected standard. Schedule a 30-minute conversation to share both, and ask the salesperson to come to that meeting with their own explanation for the gap."),
    },
    {
      number: '03',
      title: v('step3Title', 'Set a 30-Day Performance Window With Specific Criteria'),
      detail: v('step3Detail', "The most common mistake in managing underperformance is keeping someone in a vague performance conversation for months. There is no timeline, no clear standard, and no defined consequence. The salesperson stays in place, morale on the team suffers, and nothing changes. A 30-day performance window with written criteria removes the ambiguity. The criteria should be activity-based and outcome-based: a specific number of discovery calls, a specific number of qualified deals entering the pipeline, and a specific close rate on opportunities already in stage. The standard has to be achievable. The timeline has to be real."),
      fix: v('step3Fix', "Write down three to five measurable criteria the salesperson needs to hit within 30 days. Share them in writing. Confirm the salesperson understands what will happen if the criteria are met and what will happen if they are not."),
    },
    {
      number: '04',
      title: v('step4Title', 'Coach to the Specific Gap, Not the Symptom'),
      detail: v('step4Detail', "If the diagnosis points to a skill gap rather than a motivation or system problem, coaching is the right intervention. Coaching the wrong thing wastes time for both of you. If deals are stalling between discovery and proposal, the issue is likely qualification or solution presentation. If deals are stalling at close, it may be price objection handling or urgency creation. Identify the one specific bottleneck in this salesperson's process and focus your coaching time there. Do not run general sales training. Run deal-specific coaching on the exact stage where the breakdown happens."),
      fix: v('step4Fix', "Pull the last 10 deals this salesperson lost or stalled. Identify which stage each deal was in when it died. If 7 of 10 died in the same stage, that is the coaching target."),
    },
    {
      number: '05',
      title: v('step5Title', 'Make the Decision Based on Evidence, Not Patience'),
      detail: v('step5Detail', "At the end of the 30-day window, you have two options: the criteria were met or they were not. If the criteria were met, acknowledge it and raise the bar for the next 30 days. If the criteria were not met, the conversation you need to have is clear. The most common failure mode here is extending the timeline. If a salesperson did not meet the criteria in 30 days, adding another 30 days rarely produces a different result. It usually means you are postponing a decision you have already made. Make the call based on the evidence you set out to gather, not on how long the person has been there or how much you like them personally."),
      fix: v('step5Fix', "On day 30, review the criteria together. Score each one. The outcome of that review determines the next step. The criteria should make the decision for you."),
    },
  ]

  const comparison = [
    {
      systemProblem: v('comp1System', 'No written ICP or qualification criteria defined for the team'),
      personProblem: v('comp1Person', 'This specific salesperson is skipping qualification steps the rest of the team follows'),
    },
    {
      systemProblem: v('comp2System', 'The sales process has never been documented or trained'),
      personProblem: v('comp2Person', 'The salesperson knows the process and is not following it'),
    },
    {
      systemProblem: v('comp3System', 'Every new hire takes 9 to 12 months to ramp up'),
      personProblem: v('comp3Person', 'This salesperson is ramping slower than everyone else hired at the same time'),
    },
    {
      systemProblem: v('comp4System', 'Quota was set without benchmarks or historical data'),
      personProblem: v('comp4Person', 'Other salespeople on the same quota are hitting it consistently'),
    },
    {
      systemProblem: v('comp5System', 'Pipeline reviews happen irregularly and lack accountability'),
      personProblem: v('comp5Person', 'This salesperson does not show up prepared or act on agreed next steps'),
    },
    {
      systemProblem: v('comp6System', 'Lost deal debriefs never happen — nobody knows why deals die'),
      personProblem: v('comp6Person', 'This salesperson loses deals that similar salespeople close at the same stage'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How long should I give an underperforming salesperson before taking action?",
      a: "Thirty days from the moment you identify a specific, measurable gap. Not from when revenue started declining. The moment you can name a precise metric that is not being met, you start the clock. Waiting longer rarely produces new information. It usually just means you have a longer conversation to have at the end and a bigger cost to absorb in the meantime.",
    },
    {
      q: "How do I know if it is a salesperson problem or a sales process problem?",
      a: "The fastest test is to compare this salesperson's results against everyone else on the team using the same process. If your other salespeople are closing at 30% and this person is closing at 5%, that points toward a person issue. If your entire team is closing at 5%, that points toward a system issue. If you only have one salesperson, compare their conversion rates by stage against your own historical conversion rates from when you were selling. The data tells you where to look.",
    },
    {
      q: "What do I say in a performance conversation with an underperforming salesperson?",
      a: "Say the specific number. Do not open with general feedback or soften the lead. Say: 'Over the past 90 days your close rate on qualified opportunities is 8%. The team standard is 25%. I want to understand what you think is driving that gap before we talk about next steps.' Then stop talking and listen. You need to hear their explanation before you decide what is actually broken. Most founders do the opposite: they deliver a diagnosis before they have collected the data.",
    },
    {
      q: "Should I put a salesperson on a PIP or just let them go?",
      a: "A PIP makes sense when two things are true: you believe the performance problem is fixable, and you have not yet had a direct conversation with specific criteria. A PIP is not a formality before termination. If you have already decided, skip the PIP and have the honest conversation. If you have not decided and the problem is addressable, a 30-day PIP with clear metrics gives both sides the information they need to reach the right outcome.",
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
        headline: 'How to Manage an Underperforming Salesperson (Without Losing Another 6 Months)',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-to-manage-underperforming-salesperson',
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
              Sales Management
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Manage an Underperforming Salesperson')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Losing Another 6 Months')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders wait too long, misdiagnose the problem, and either fire the wrong person or keep the wrong person. Here is the 5-step framework for diagnosing, coaching, and deciding — fast.")}
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
                href="/sales-accountability-document"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Build accountability before it becomes a problem →
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
              {v('sectionStepsHeading', 'The 5-Step Framework for Managing Underperformance')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionStepsSubheading', 'Most founders skip step one and go straight to step three. That is where the cost accumulates.')}
            </motion.p>
            <div className="space-y-8">
              {steps.map((item, i) => (
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
              {v('seoPara1', "Underperformance in a small sales team is expensive in two directions. The obvious cost is the deals you are not closing. The less obvious cost is what the underperformance does to the rest of the team. When a salesperson is not being managed, everyone else on the team sees it. Standards drift. Accountability weakens. The people who are performing start wondering why they bother. The cost of delay is not just the missed quota. It is the signal it sends to everyone watching.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The most important thing to get right before any performance conversation is the clarity of your expectations. If you have never written down what a good month looks like for this salesperson, the conversation will be subjective — and subjective performance conversations rarely produce change. Start with the accountability document and the quota criteria before you manage to them.")}{' '}
              <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                See what a sales accountability document looks like →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison: System vs. Person */}
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
              {v('sectionCompHeading', 'System Problem vs. Person Problem')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', "Getting this diagnosis wrong is the most expensive mistake you can make. Here is how to tell the difference.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">Signs It Is a System Problem</div>
                <div className="px-6 py-4 font-bold text-blue-400">Signs It Is a Person Problem</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    <p className="text-sm text-neutral-700">{row.systemProblem}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <p className="text-sm text-neutral-700">{row.personProblem}</p>
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
              {v('aboutBio2', "Managing underperformance is one of the most common conversations I have with founders in the first weeks of an engagement. They usually already know what needs to happen. They have been putting it off. Part of what I do is give founders the framework and the data to make the call they should have made weeks earlier, and to move forward without second-guessing themselves.")}
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

      {/* Internal link to PIP page */}
      <section className="bg-neutral-50 py-10 md:py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-neutral-600">
              Ready to formalize the process?{' '}
              <Link href="/sales-performance-improvement-plan" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Here is how to write a sales performance improvement plan →
              </Link>
            </motion.p>
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
              {v('ctaHeadline', "You Already Know Something Is Wrong. Let's Figure Out What to Do About It.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can help you diagnose whether you have a person problem, a process problem, or a quota problem — and give you a clear next step that does not cost you another quarter.")}
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
