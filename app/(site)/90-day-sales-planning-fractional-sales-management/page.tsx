'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-06'
const CMS_SECTION = 'seo90DaySalesPlanningFractional'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function NinetyDaySalesPlanningFractionalPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "Fractional sales management isn't an open-ended retainer. It runs on 90-day planning cycles with deliverables you can check."),
    v('takeaway2', 'Before you sign with any Fractional Sales Leader, ask to see the written 90-day plan. No plan, no hire.'),
    v('takeaway3', 'A real first cycle delivers four things: a documented Sales Playbook, a pipeline you can forecast from, an Accountabilities Document for every seat, and a weekly operating rhythm.'),
    v('takeaway4', 'Ninety days is long enough to install real infrastructure and short enough that you can measure whether it worked before committing to the next cycle.'),
    v('takeaway5', "The goal isn't to make you dependent on a fractional leader. It's to hand you a system your team runs after the engagement ends."),
  ]

  const milestones = [
    {
      number: '01',
      title: v('thing1Title', 'A Written 90-Day Plan Before You Sign'),
      detail: v('thing1Detail', "The first thing to look for is the plan itself. A real Fractional Sales Leader hands you a written 90-day plan before you commit, not after. It names the deliverables for each 30-day block, the metrics that prove progress, and what you'll own at the end. If someone wants to \"see how things go\" for a few months, that's a retainer, not a plan. You're paying for a defined outcome, so you should be able to read it on a single page."),
      outcome: v('thing1Outcome', 'A one-page plan you can hold someone to, with deliverables and dates you can check against.'),
    },
    {
      number: '02',
      title: v('thing2Title', 'A Documented Sales Playbook'),
      detail: v('thing2Detail', "By day 90 you should have your sales motion written down. Right now it lives in your head. A Fractional Sales Leader's job in the first cycle is to extract it: your Ideal Customer Profile, your discovery questions, your objection responses, your close. That document is what lets a rep sell without you in the room. Ask any candidate to show you a playbook they've built before. If they can't, they've never actually built one."),
      outcome: v('thing2Outcome', 'A playbook your next hire runs from on day one, so onboarding takes 30 days instead of six months.'),
    },
    {
      number: '03',
      title: v('thing3Title', 'A Pipeline That Tells the Truth'),
      detail: v('thing3Detail', "A 90-day plan should leave you with a pipeline you can forecast from. That means stages defined by what the buyer did, not by how the rep feels. \"Proposal sent\" is an activity. \"Buyer confirmed budget, timeline, and decision-maker\" is a milestone. The difference is whether your forecast survives the last week of the quarter. Look for a leader who rebuilds your stages around evidence and kills the deals that were never real."),
      outcome: v('thing3Outcome', 'A forecast you can take to the board without a footnote, built on conversion data instead of optimism.'),
    },
    {
      number: '04',
      title: v('thing4Title', 'An Accountabilities Document for Every Seat'),
      detail: v('thing4Detail', "Most founders manage their reps by feel. A Fractional Sales Leader replaces that with an Accountabilities Document: what each person owns, the numbers they're measured on, the review cadence, and what happens when a target is missed. It covers both the activity (calls, demos, pipeline coverage) and the outcomes (close rate, cycle length, quota). When it's written down and enforced weekly, you stop being the manager of last resort."),
      outcome: v('thing4Outcome', "A team that knows exactly what it's responsible for, so you're not the one chasing every number."),
    },
    {
      number: '05',
      title: v('thing5Title', 'A Weekly Operating Rhythm That Outlasts the Engagement'),
      detail: v('thing5Detail', "The point of fractional sales management isn't to make you dependent on a fractional leader. It's the opposite. By day 90 you should have a standing rhythm that runs without them: a weekly sales meeting, a real pipeline review, and one-on-ones that actually coach. The 90-day plan installs the machine. The rhythm is what keeps it running after the engagement ends."),
      outcome: v('thing5Outcome', 'A self-sustaining cadence that surfaces problems early and keeps the system running when the engagement is over.'),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'You buy hours and hope something improves'),
      withIt: v('compare1With', 'You buy deliverables with dates you can check'),
    },
    {
      without: v('compare2Without', 'Progress is described, never measured'),
      withIt: v('compare2With', 'Progress is measured against named metrics'),
    },
    {
      without: v('compare3Without', 'The sales motion stays in your head'),
      withIt: v('compare3With', 'The sales motion is documented in a playbook'),
    },
    {
      without: v('compare4Without', 'Forecast is a feeling that breaks every quarter'),
      withIt: v('compare4With', 'Forecast is built on real, evidence-based pipeline stages'),
    },
    {
      without: v('compare5Without', 'You stay the manager of last resort'),
      withIt: v('compare5With', 'An Accountabilities Document runs the team'),
    },
    {
      without: v('compare6Without', "When they leave, you're back where you started"),
      withIt: v('compare6With', 'A weekly rhythm keeps running without them'),
    },
  ]

  const phases = [
    {
      number: '01',
      title: v('phase1Title', 'Days 1–30: Diagnose and Codify'),
      detail: v('phase1Detail', "The first month is extraction. Your fractional leader sits with your closed deals, your recorded calls, and your pipeline, and writes down what's actually working. What does a qualified buyer look like? Which questions surface urgency? What does a yes sound like a week before it lands? This is the founder's instinct, pulled out of your head and onto the page. By day 30 you have the first draft of a Sales Playbook and an honest read on where the pipeline is lying to you."),
    },
    {
      number: '02',
      title: v('phase2Title', 'Days 31–60: Install and Enforce'),
      detail: v('phase2Detail', "With the playbook drafted, the infrastructure goes in. Pipeline stages get rebuilt around buyer evidence. Required fields enforce qualification so reps stop keeping dead deals alive. The Accountabilities Document gets written for every seat, and the weekly sales meeting becomes a standing appointment that's never cancelled. This is the unglamorous middle stretch where a system stops being a document and starts being how the team actually works."),
    },
    {
      number: '03',
      title: v('phase3Title', 'Days 61–90: Hand Off the Rhythm'),
      detail: v('phase3Detail', "The final month is about making the machine run without the fractional leader. The weekly meeting, the pipeline review, and the one-on-ones get handed to whoever owns them next, whether that's you, a sales manager, or the first rep you promote. The plan ends with a system in place and a rhythm that keeps it running. If the engagement continues, the next 90-day plan tackles the next constraint. Either way, you're not left dependent on one person."),
    },
  ]

  const defaultFaqs = [
    {
      q: 'What does 90-day sales planning have to do with fractional sales management?',
      a: "Everything. Fractional sales management isn't an open-ended consulting retainer. It runs on 90-day planning cycles. Each cycle has a defined set of deliverables, a way to measure them, and something concrete you own at the end. The 90-day window is long enough to install real sales infrastructure and short enough that you can tell whether it worked before you commit to the next cycle. If a leader can't describe your first 90 days in deliverables, they're selling hours.",
    },
    {
      q: 'Why 90 days and not six months or a year?',
      a: "Ninety days is the shortest window that produces durable change and the longest you should wait before measuring it. In the first 30 days a Fractional Sales Leader diagnoses and documents your sales motion. In the next 30 they install the infrastructure and enforce it. In the final 30 they hand off the operating rhythm. A year-long plan with no 90-day checkpoint is just a retainer with a longer leash. You want results you can measure inside a quarter.",
    },
    {
      q: 'What should the first 90-day plan actually deliver?',
      a: "A documented Sales Playbook, a pipeline with stages defined by buyer evidence, an Accountabilities Document for every seat, and a weekly operating rhythm that runs without the fractional leader in the room. Those four things turn founder-led selling into a system your team can run. If a 90-day plan promises activity instead of those deliverables, it isn't a plan worth paying for.",
    },
    {
      q: 'How is this different from hiring a full-time VP of Sales?',
      a: "A full-time VP is a roughly $400K all-in bet on one person, and most first-time VP hires fail inside eighteen months because they're dropped into a company with no system to run. A Fractional Sales Leader builds the system first, on a 90-day plan, at a fraction of the cost. You get the infrastructure before you decide whether you even need a full-time VP to run it. Build the machine first. Hire the operator after it works.",
    },
    {
      q: "What if I don't see results in the first 90 days?",
      a: "Then the plan was wrong or the leader was wrong, and you'll know it inside a quarter instead of a year. That's the entire point of planning in 90-day cycles. You're not signing an open-ended commitment. You're buying a defined outcome with a checkpoint. A real Fractional Sales Leader welcomes that checkpoint, because their value shows up in deliverables you can hold in your hand, not hours on an invoice.",
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
        headline: 'What Does 90-Day Sales Planning Have to Do With Fractional Sales Management?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/90-day-sales-planning-fractional-sales-management',
        datePublished: '2026-06-28',
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
              {v('heroTag', 'Fractional Sales Management')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Does 90-Day Sales Planning Have to Do')}
              <span className="block text-blue-400">{v('heroAccent', 'With Fractional Sales Management?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', "If You're Considering Hiring a Fractional Sales Leader, Here's What You Need to See")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders weighing a Fractional Sales Leader. The real product isn't hours. It's a 90-day plan with deliverables you can hold someone to. Here's how to read one.")}
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
            className="rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-sm font-bold uppercase tracking-widest text-blue-800"
            >
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              {takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-neutral-700">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* The 5 Things to Look For */}
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
              {v('sectionThingsHeading', 'The 5 Things a 90-Day Plan Should Deliver')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionThingsSubheading', "If you're evaluating a Fractional Sales Leader, this is the checklist. Each one is a deliverable, not a promise.")}
            </motion.p>
            <div className="space-y-8">
              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">What You Get: </span>
                    <span className="text-blue-800">{item.outcome}</span>
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
              {v('seoPara1', "Most founders think hiring a Fractional Sales Leader means buying someone's time. It doesn't. You're buying a 90-day plan with deliverables you can check. Fractional sales management runs on planning cycles, not open-ended retainers. The 90-day window is long enough to install real infrastructure and short enough that you can measure whether it worked. If the leader you're talking to can't describe the first 90 days in concrete deliverables, they're selling hours, not outcomes.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "Before you sign anything, ask to see the plan and ask how they'll measure it. To know what the first cycle should actually produce, start with")}{' '}
              <Link href="/fractional-sales-leader-first-90-days" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What to Expect in the First 90 Days with a Fractional Sales Leader →
              </Link>
              {v('seoPara2b', '. And the single deliverable that matters most is the written')}{' '}
              <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Accountabilities Document →
              </Link>
              {v('seoPara2c', ' that makes your team responsible without you in the room. The plan is the product. Everything else follows from it.')}
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
              {v('sectionCompareHeading', 'An Open-Ended Retainer vs. a 90-Day Plan')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "The difference isn't the seniority of the person. It's whether you're buying hours or buying a defined outcome.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'An Open-Ended Retainer')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'A 90-Day Plan')}
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

      {/* What the 90 Days Look Like — 3 phases */}
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
              {v('sectionPhasesHeading', 'What the 90 Days Actually Look Like')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionPhasesSubheading', 'Three 30-day blocks, each with a job. This is the operating rhythm of fractional sales management.')}
            </motion.p>
            <div className="space-y-8">
              {phases.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
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
              {v('aboutBio2', "Fractional sales management, the way I run it, is a sequence of 90-day plans. Each one installs a piece of the machine: the playbook, the pipeline, the Accountabilities Document, the weekly rhythm. By the end you own a system your team can run, whether I'm still in the room or not.")}
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
                <Link href="/fractional-sales-leader-first-90-days" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What to Expect in the First 90 Days with a Fractional Sales Leader →
                </Link>
              </li>
              <li>
                <Link href="/how-do-i-vet-a-fractional-sales-leader" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How Do I Vet a Fractional Sales Leader? 5 Things to Look For →
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales System Without Hiring a Full-Time VP of Sales →
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
              {v('ctaHeadline', 'Ask to See the 90-Day Plan Before You Sign')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I'll walk you through exactly what a 90-day plan should deliver for a company your size, and what to look for in any Fractional Sales Leader you're considering. No plan, no hire.")}
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
