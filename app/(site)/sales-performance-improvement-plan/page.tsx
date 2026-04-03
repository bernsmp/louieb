'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesPerformanceImprovementPlan'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalesPerformanceImprovementPlanPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const steps = [
    {
      number: '01',
      title: v('step1Title', 'Define the Specific Performance Gap in Writing'),
      detail: v('step1Detail', "A PIP that says 'needs to improve performance' is not a PIP. It is a complaint with a signature line. The only useful PIP starts with a precise gap statement: what the current performance is, what the expected performance is, and the time period over which the gap has been observed. 'John closed 2 deals last quarter. The team standard is 6 deals at an average deal size of $18,000. Over the past two quarters, John has closed 2 deals and 3 deals respectively, while other salespeople hired at the same time averaged 5 and 6.' That is a gap statement. It removes ambiguity and gives both sides the same factual starting point."),
      fix: v('step1Fix', "Write the gap statement before the PIP conversation. If you cannot write it in two sentences with specific numbers, you are not ready to run a PIP yet. You need more data first."),
    },
    {
      number: '02',
      title: v('step2Title', 'Set the Metric-Based Standard for Success'),
      detail: v('step2Detail', "The success criteria of a PIP should be specific, measurable, and achievable. Achievable is important: a PIP that sets a standard nobody else is hitting is a setup for termination, not improvement. The criteria should cover both activity metrics and outcome metrics. Activity metrics: a minimum number of discovery calls per week, a minimum number of qualified opportunities entered into the pipeline. Outcome metrics: a specific close rate, a specific number of closed deals or revenue over the PIP period. Two or three clear criteria are enough. A PIP with ten criteria becomes impossible to track and enforce."),
      fix: v('step2Fix', "Write out your success criteria before the PIP meeting. Share them with the salesperson at the start of the conversation, not at the end. They should understand the standard before they agree to the plan."),
    },
    {
      number: '03',
      title: v('step3Title', 'Set the Timeline: 30 Days for Performance Issues, 60 Days for Skill Gaps'),
      detail: v('step3Detail', "The timeline of a PIP should match the nature of the problem. If the issue is attitude, consistency, or following the defined process, 30 days is enough to see whether the behavior changes. If the issue is a skill gap, like converting discovery calls to qualified opportunities, 60 days gives more time for coaching to take effect. Shorter than 30 days is rarely defensible. Longer than 60 days is almost always about avoiding a decision rather than giving a genuine chance to improve. Pick the timeline that matches the problem and commit to it."),
      fix: v('step3Fix', "State the timeline explicitly in the written PIP document: start date, end date, and the review date. All three parties (you, the salesperson, and any HR support if applicable) should sign the document on day one."),
    },
    {
      number: '04',
      title: v('step4Title', 'Schedule Weekly Check-Ins With Documentation'),
      detail: v('step4Detail', "A PIP without weekly check-ins is just a document. The check-in is where the PIP does its work. Each weekly check-in should take 30 minutes and cover three things: progress against each criterion (with actual numbers, not impressions), what helped or hindered performance that week, and what specific coaching or resource the salesperson needs to succeed in the coming week. Document each check-in. Write a brief summary of what was discussed and what was agreed. Both parties get a copy. This documentation protects both of you and creates a real-time record of whether genuine support was provided during the PIP period."),
      fix: v('step4Fix', "Put the weekly check-ins on the calendar on day one of the PIP. Do not let them get canceled. If you cancel them, you are signaling that the PIP is not serious."),
    },
    {
      number: '05',
      title: v('step5Title', 'Make the Decision on Day 30 or Day 60 and Hold to It'),
      detail: v('step5Detail', "The most common failure in PIP execution is extending the timeline when criteria are not met. If the salesperson did not meet the stated criteria in the agreed period, the right next step is a conversation about what comes next: either a transition out of the role or, in rare cases, a restructured role with different expectations. Extending the PIP almost never produces a different outcome. It delays the inevitable, keeps the salesperson in limbo, and signals to the rest of the team that the accountability systems are not real. Make the call on the agreed date based on the evidence you collected, not based on how the person made you feel during the check-ins."),
      fix: v('step5Fix', "On the final review date, score each criterion as met or not met. The scoring should make the decision for you. If it does not, the criteria were not specific enough."),
    },
  ]

  const mistakes = [
    v('mistake1', "Writing goals like 'improve attitude' or 'communicate more proactively' with no measurable definition"),
    v('mistake2', "Running a PIP as a formality when the decision to terminate has already been made"),
    v('mistake3', "Canceling weekly check-ins because things are busy, which signals the PIP is not serious"),
    v('mistake4', "Extending the PIP timeline when criteria are not met instead of making the agreed decision"),
    v('mistake5', "Focusing only on outcomes (close rate) without inspecting the activity and process inputs that drive them"),
    v('mistake6', "Not providing the specific coaching, tools, or information the salesperson needs to have a genuine chance to improve"),
  ]

  const defaultFaqs = [
    {
      q: "What should a sales performance improvement plan include?",
      a: "Five things: a precise gap statement with specific numbers, two to three measurable success criteria, a defined timeline (30 or 60 days), a weekly check-in schedule with documentation, and a clear statement of what happens at the end of the PIP if criteria are met and if they are not. Anything vague is not a PIP. It is a conversation you had and wrote down.",
    },
    {
      q: "How long should a sales PIP last?",
      a: "Thirty days for behavior or consistency problems. Sixty days for skill gaps that require coaching to close. Shorter than 30 days is not enough time to see genuine change. Longer than 60 days usually means you are postponing a decision rather than running a genuine improvement process. The timeline should be set based on the type of problem, not based on how uncomfortable you are with the outcome.",
    },
    {
      q: "Can I put a salesperson on a PIP after just 3 months?",
      a: "Yes, if two conditions are true: you have clear evidence of underperformance against a known standard, and the salesperson understood what that standard was before you hired them. If your onboarding did not set clear performance expectations for the first 90 days, a PIP at month three is premature. Fix the onboarding expectations first and give a reasonable ramp window before measuring against full quota.",
    },
    {
      q: "Is a sales PIP a legal requirement before terminating a salesperson?",
      a: "In most US at-will employment situations, a PIP is not a legal requirement before termination. The practical reason to run a PIP is not legal protection. It is clarity. A PIP forces you to define success in writing, give the salesperson a genuine chance, and make a decision based on documented evidence rather than a subjective call. That is valuable for you and fair to the salesperson regardless of the legal requirements in your jurisdiction.",
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
        headline: "How to Put a Salesperson on a Performance Improvement Plan (A Founder's Guide)",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/sales-performance-improvement-plan',
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
              {v('heroLine1', 'How to Put a Salesperson on a Performance Improvement Plan')}
              <span className="block text-blue-400">{v('heroAccent', "A Founder's Guide")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most PIP guides are written for HR departments at enterprise companies. This one is written for founders managing their first or second salesperson who want a process that is fair, specific, and actually produces a decision.")}
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
                href="/how-to-manage-underperforming-salesperson"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Not sure if it is time for a PIP? Start here →
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
              {v('sectionStepsHeading', 'The 5-Step PIP Framework for Small Sales Teams')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionStepsSubheading', "Done right, a PIP forces clarity on both sides. The goal is not to build a case for termination. The goal is to give the salesperson a genuine, documented opportunity to meet a defined standard.")}
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
              {v('seoPara1', "Most of the PIP content available online is written for HR teams at large companies with formal performance management systems. It focuses on documentation for legal protection, HR sign-off requirements, and multi-tier escalation paths. That content is not useful for a founder managing a team of two or three salespeople who has never run a formal performance process before. The value of a PIP for a small team is different: it forces you to define what success looks like for this role, which many founders have never done explicitly. A PIP that ends in improvement is a better outcome than a PIP that ends in termination. Both outcomes depend on how clearly the standard was set at the start.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "Before running a PIP, make sure you have the accountability document in place for your team. If you have never written down what good performance looks like for this salesperson, you are starting the PIP conversation from a position of ambiguity.")}{' '}
              <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                See the sales accountability document framework →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PIP Mistakes */}
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
              {v('sectionMistakesHeading', '6 PIP Mistakes That Make the Process Useless')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionMistakesSubheading', "These are the patterns that turn a PIP into a formality instead of a genuine management tool.")}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {mistakes.map((mistake, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 rounded-full bg-red-100 p-1 text-red-700">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-red-900">{mistake}</p>
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
              {v('aboutBio2', "I have helped dozens of founders work through performance management conversations they had been avoiding for months. The most common pattern I see is this: the founder already knows what needs to happen and has known for a while. What they need is a clear framework and someone to walk them through the conversation with confidence. A well-run PIP is not a punishment. It is the most honest thing you can do for a salesperson who might be in the wrong role or missing the support they need to succeed.")}
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
              {v('ctaHeadline', "You Already Have the Information. You Need a Framework for What to Do With It.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can help you build the specific criteria for a PIP that is fair, defensible, and actually produces a clear outcome — without months of ambiguity on both sides.")}
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
