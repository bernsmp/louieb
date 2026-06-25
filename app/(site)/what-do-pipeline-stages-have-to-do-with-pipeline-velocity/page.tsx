'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-06'
const CMS_SECTION = 'seoPipelineStagesVelocity'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function PipelineStagesVelocityPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "Your stages aren't labels. They're a stopwatch. Every stage has an average amount of time a healthy deal spends inside it."),
    v('takeaway2', "Your sales cycle length is just the sum of your stage times. Shorten one stage and you speed up the whole pipeline."),
    v('takeaway3', "Velocity has four levers: number of deals, win rate, deal size, and cycle length. Stages are the one lever you control week to week."),
    v('takeaway4', "The stall almost always lives in one stage. The minute you measure time-in-stage, it stops hiding."),
    v('takeaway5', "You don't need a VP of Sales to fix this. You need stages with clear exit criteria and a weekly look at how long deals are sitting still."),
  ]

  const insights = [
    {
      number: '01',
      title: v('insight1Title', 'How Long a Deal Should Actually Take'),
      detail: v('insight1Detail', "Once you've tracked time-in-stage across 20 or 30 closed deals, you've got a benchmark. You know a healthy deal sits in Discovery for about 9 days, in Proposal for about 14, and in Negotiation for about 7. That number isn't a guess anymore. It's the heartbeat of your pipeline, and every new deal gets measured against it. When a deal runs long in a stage, you don't wonder if there's a problem. You know there is."),
      outcome: v('insight1Outcome', "A real benchmark for every stage, so you can tell a slow deal from a dead one in seconds instead of weeks."),
    },
    {
      number: '02',
      title: v('insight2Title', 'Which Stage Is Your Bottleneck'),
      detail: v('insight2Detail', "Add up the average time deals spend in each stage and one of them will be fat. That's your bottleneck. Maybe deals fly through Discovery and then sit in Proposal for a month because your pricing is confusing or your champion can't sell it internally. You can't fix what you can't see. The stage timing shows you exactly where deals lose momentum, so you stop guessing and start working on the one thing that's actually slowing you down."),
      outcome: v('insight2Outcome', "The single stage that's costing you the most time, named and measured, so your fix lands where it matters."),
    },
    {
      number: '03',
      title: v('insight3Title', 'Whether a Live Deal Is On Track or Already Gone'),
      detail: v('insight3Detail', "A deal that's been in Proposal for 45 days when your average is 14 isn't a live deal. It's a ghost that hasn't told you yet. Without stage timing, that deal sits in your forecast giving you false hope. With it, the deal ages out and flags itself. You either re-engage it with a real reason or you kill it and free up the rep's time. A clean pipeline you can trust beats a fat one you can't."),
      outcome: v('insight3Outcome', "Aging deals that surface themselves automatically, so your pipeline reflects reality and your forecast stops lying to you."),
    },
    {
      number: '04',
      title: v('insight4Title', 'A Close Date You Can Forecast'),
      detail: v('insight4Detail', "If a deal is in Discovery and you know the average time left to close is 30 days, you have a forecast date that's grounded in your own history instead of a rep's optimism. Stack that across every open deal and you've got a quarter you can actually predict. This is the difference between walking into a board meeting with a forecast you'd bet on and walking in with a number you're hoping comes true."),
      outcome: v('insight4Outcome', "A forecast built on stage math, not gut feel, so next quarter stops being a surprise."),
    },
    {
      number: '05',
      title: v('insight5Title', 'Whether to Coach the Rep or Fix the Process'),
      detail: v('insight5Detail', "When one rep's deals stall in a stage where everyone else's move fine, that's a coaching conversation. When every rep's deals stall in the same stage, that's a process problem and no amount of coaching will fix it. Stage timing tells you which one you're looking at. Most founders blame the people when it's the process, or blame the process when it's one rep who needs help. The data ends that argument."),
      outcome: v('insight5Outcome', "A clear read on whether the stall is a person or the playbook, so you spend your energy on the right fix."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Stages are just labels reps drag deals between'),
      withIt: v('compare1With', 'Stages are timed steps with clear exit criteria'),
    },
    {
      without: v('compare2Without', "You can't say how long a normal deal takes"),
      withIt: v('compare2With', 'You know the average dwell time for every stage'),
    },
    {
      without: v('compare3Without', 'The bottleneck is invisible, so it never gets fixed'),
      withIt: v('compare3With', 'The slow stage is named and worked on first'),
    },
    {
      without: v('compare4Without', 'Dead deals sit in the forecast for months'),
      withIt: v('compare4With', 'Aging deals flag themselves and get cleaned out'),
    },
    {
      without: v('compare5Without', 'Forecast is a feeling, off by 30% every quarter'),
      withIt: v('compare5With', 'Forecast is stage math you can take to the board'),
    },
    {
      without: v('compare6Without', "You blame reps for what's actually a process stall"),
      withIt: v('compare6With', 'You know whether to coach a rep or fix the process'),
    },
  ]

  const defaultFaqs = [
    {
      q: 'What exactly is pipeline velocity?',
      a: "Pipeline velocity is how fast revenue moves through your pipeline. The formula is your number of qualified deals, multiplied by your win rate, multiplied by your average deal value, divided by your sales cycle length. Three of those four levers are slow to change. Cycle length is the one you can move week to week, and you move it by shortening the time deals spend in your stages.",
    },
    {
      q: 'How are pipeline stages connected to velocity?',
      a: "Your sales cycle length is the denominator in the velocity formula, and that cycle length is just the sum of the time deals spend in each stage. So your stages are where velocity is actually won or lost. Tighten the slow stage and the whole cycle gets shorter, which means revenue moves faster without adding a single new deal. That's why stage timing is the most practical lever a founder has.",
    },
    {
      q: 'How many pipeline stages should I have?',
      a: "For most $1M to $10M companies, four to six stages is right. Fewer than four and you can't see where deals stall. More than seven and reps stop updating them honestly. The point isn't the number of stages. It's that each stage has a clear exit criterion based on something the buyer did, not something the rep hopes is true. If you can't write down what has to happen for a deal to leave a stage, that stage isn't real.",
    },
    {
      q: "I don't track time-in-stage yet. Where do I start?",
      a: "Pull your last 20 or 30 closed-won deals and look at how many days each one spent in each stage. Your CRM already has the timestamps. Average them and you've got your first benchmark. Then do the same for your open deals and flag anything that's sitting longer than the average. You'll usually find your bottleneck and a handful of dead deals in the first hour. You don't need new software. You need to look.",
    },
    {
      q: 'Do I need to hire a VP of Sales to get this working?',
      a: "No. This is exactly the kind of system a Fractional Sales Leader installs without the cost or risk of a full-time VP hire. I'll set up the stages, define the exit criteria, get the timing flowing out of your CRM, and build the weekly review that keeps deals moving. You get a pipeline that predicts revenue in 60 to 90 days, and you keep your runway.",
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
        headline: 'What Do Pipeline Stages Have to Do With Pipeline Velocity?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/what-do-pipeline-stages-have-to-do-with-pipeline-velocity',
        datePublished: '2026-06-24',
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
              {v('heroTag', 'Pipeline & Velocity')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Do Pipeline Stages Have to Do')}
              <span className="block text-blue-400">{v('heroAccent', 'With Pipeline Velocity?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'If you know each pipeline stage length you can predict how quickly deals move, or stall.')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "If you're a $1M to $10M founder running your own pipeline, your stages are the fastest lever you've got. Time them and you can see exactly where deals slow down, and exactly how to speed them up.")}
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
                href="/sales-velocity-b2b"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is sales velocity? →
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

      {/* What Stage Timing Tells You — 5 numbered cards */}
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
              {v('sectionInsightsHeading', '5 Things Stage Length Tells You About Velocity')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionInsightsSubheading', "Time how long deals sit in each stage and your pipeline stops being a mystery. Here's what the numbers hand you.")}
            </motion.p>
            <div className="space-y-8">
              {insights.map((item, i) => (
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
              {v('seoPara1', "Most founders treat pipeline stages as folders. A deal gets dragged from one to the next when it feels right, and the stage name is the only thing that changes. That's a waste of the most useful data you own. The moment you start timing how long deals sit in each stage, your stages turn into a diagnostic tool. They tell you where deals slow down, which ones are already dead, and how long the live ones really have left.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "This only works if your stages are real. Each one needs a clear exit criterion tied to something the buyer did, which is why I always start with how you")}{' '}
              <Link href="/sales-pipeline-stages" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                define your pipeline stages
              </Link>
              {v('seoPara2b', " before touching the numbers. Once the stages are solid, the timing flows straight into the metric that predicts your revenue. If you want the full picture of how that math works, start with")}{' '}
              <Link href="/sales-velocity-b2b" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                what sales velocity is and why it matters
              </Link>
              {v('seoPara2c', ". Stages are where you actually move the needle.")}
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
              {v('sectionCompareHeading', 'Stages as Labels vs. Stages as a Stopwatch')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "Same CRM, same deals. The difference is whether you're timing the stages or just naming them.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Stages as Labels')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Stages as a Stopwatch')}
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

      {/* The Velocity Formula callout */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionFormulaHeading', 'The Formula, and the One Lever You Control')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-6 text-center text-neutral-600">
              {v('sectionFormulaSubheading', "Four inputs decide how fast revenue moves. Three of them are slow to change. One of them lives in your stages.")}
            </motion.p>
            <motion.div variants={itemVariants} className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-6 text-center">
              <p className="font-serif text-lg font-bold text-blue-800 md:text-xl">
                {v('formulaLine', 'Velocity  =  (Qualified Deals × Win Rate × Average Deal Value) ÷ Sales Cycle Length')}
              </p>
            </motion.div>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('formulaBody', "Adding more deals takes marketing spend and time. Lifting your win rate takes better discovery and reps who've ramped. Raising deal size takes a different buyer or a packaging change. All three are real, and all three are slow. Sales cycle length is different. It's the sum of the time deals spend in your stages, and you can shrink it this quarter by attacking the one stage where deals pile up. That's why stages aren't a side topic to velocity. They are the controllable half of the equation.")}
            </motion.p>
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
              {v('aboutBio1', "I'm Louie Bernstein. I've got 50 years in business, including 22 as a bootstrapped founder, and my Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "Stage timing is one of the first things I look at when I open up a founder's pipeline. It's quick, it's already sitting in your CRM, and it almost always points straight at the deal that's quietly costing you the most. I'll set the stages, define the exit criteria, and build the weekly review that keeps your pipeline moving, without the $400K bet of a full-time VP hire.")}
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
                <Link href="/sales-pipeline-stages" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Sales Pipeline Stages: How to Define Them →
                </Link>
              </li>
              <li>
                <Link href="/sales-velocity-b2b" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is Sales Velocity? The Metric That Predicts Revenue →
                </Link>
              </li>
              <li>
                <Link href="/how-to-run-a-sales-pipeline-review" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Run a Sales Pipeline Review →
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
              {v('ctaHeadline', 'Want to See Where Your Pipeline Is Stalling?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can look at your stages, find the one that's slowing your deals down, and show you what shortening it would do to your forecast. No new software required.")}
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
