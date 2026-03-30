'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesPipelineStages'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalesPipelineStagesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const stages = [
    {
      number: '01',
      title: v('stage1Title', 'Prospect Identified'),
      body: v('stage1Body', "Entry: A company matching your ICP has been identified from a list, inbound lead, referral, or research. Exit: A specific contact has been identified and initial outreach has been sent. This stage is about volume — the goal is to move qualified targets into active outreach quickly, not to spend time on accounts that will never convert. Most founders let too many accounts linger here because there's no exit criterion forcing a next action."),
    },
    {
      number: '02',
      title: v('stage2Title', 'First Contact Made'),
      body: v('stage2Body', "Entry: Outreach has been sent (email, LinkedIn, referral introduction). Exit: A two-way conversation has started — the prospect has responded and expressed enough interest to schedule a discovery call. This stage separates volume from engagement. The key metric is response rate by channel and sequence. Without a clear exit criterion, reps often count any response as progress — including 'not interested' replies that should move to disqualified."),
    },
    {
      number: '03',
      title: v('stage3Title', 'Discovery Completed'),
      body: v('stage3Body', "Entry: Discovery call has been scheduled and confirmed. Exit: You've confirmed the prospect has the problem you solve, the budget range to act, a timeline that makes the opportunity real, and a decision-making process you understand. This is the most important qualification stage. Moving an unqualified prospect past discovery wastes proposal time and distorts your pipeline forecast. Define the minimum qualification bar explicitly — and stick to it."),
    },
    {
      number: '04',
      title: v('stage4Title', 'Solution Presented'),
      body: v('stage4Body', "Entry: Qualified prospect has agreed to a presentation or demo. Exit: Prospect has provided substantive feedback on the presentation — questions about scope, pricing, timeline, or implementation indicate real evaluation. Radio silence after a presentation is not an exit to the next stage. This stage is where deals often stall because 'sent the deck' is treated as progress. True exit requires a two-way conversation about the solution, not just delivery of materials."),
    },
    {
      number: '05',
      title: v('stage5Title', 'Proposal / Commercial Discussion'),
      body: v('stage5Body', "Entry: Prospect has requested a proposal or pricing conversation has begun. Exit: Written proposal has been reviewed and prospect has communicated their position — moving forward, requesting revisions, or declining. Many teams treat 'proposal sent' as a pipeline milestone, but a sent proposal with no response is worth nothing. The exit criterion is the prospect's explicit response. Deals that sit in this stage for more than two weeks without a response should be escalated or moved to at-risk."),
    },
    {
      number: '06',
      title: v('stage6Title', 'Closed Won / Closed Lost'),
      body: v('stage6Body', "Entry: Prospect has communicated a final decision. Exit: Contract signed and payment terms agreed (Closed Won), or opportunity formally disqualified with a recorded loss reason (Closed Lost). The Closed Lost stage is as important as Closed Won — loss reason data is the input to your win/loss analysis and the foundation of pipeline improvement. If you're not capturing loss reason consistently, you're flying blind on which objections to address and which competitor narratives to counter."),
    },
  ]

  const comparison = [
    {
      without: v('comparison1Without', "Stages are named generically — 'Prospect,' 'Proposal,' 'Negotiation' — with no entry or exit criteria"),
      with: v('comparison1With', 'Each stage has a defined entry criterion and an explicit exit action the rep must complete'),
    },
    {
      without: v('comparison2Without', "Reps self-report stage — deals move forward based on optimism, not evidence"),
      with: v('comparison2With', 'Stage advancement requires documented evidence: a response, a scheduled meeting, a signed document'),
    },
    {
      without: v('comparison3Without', "Pipeline forecast is based on stage names — 'Proposal' = 40% close probability regardless of context"),
      with: v('comparison3With', "Close probability is calibrated against historical data — 'Proposal' closes at 28% based on actual outcomes"),
    },
    {
      without: v('comparison4Without', "Deals sit in stages for months with no activity — pipeline is inflated with zombie opportunities"),
      with: v('comparison4With', 'Each stage has a maximum time threshold — stalled deals are flagged and reviewed weekly'),
    },
    {
      without: v('comparison5Without', "Loss reasons are not captured — 'lost' is an outcome, not a data point"),
      with: v('comparison5With', 'Loss reasons are recorded at close — data feeds win/loss analysis and objection handling improvement'),
    },
    {
      without: v('comparison6Without', "Pipeline reviews are subjective — forecast accuracy is consistently poor"),
      with: v('comparison6With', 'Pipeline reviews are stage-criteria-based — forecast accuracy improves each quarter as patterns emerge'),
    },
  ]

  const signals = [
    v('signal1', 'Your reps describe the same deal at different stages depending on who you ask'),
    v('signal2', 'Deals sit in "Proposal Sent" for 30+ days with no follow-up action recorded'),
    v('signal3', 'Your pipeline forecast has been wrong by more than 20% for three or more quarters in a row'),
    v('signal4', 'You don\'t capture loss reason consistently — you know you lost, not why'),
    v('signal5', 'New reps take 6+ months to understand how your pipeline stages work because they\'re not documented'),
    v('signal6', 'Stage names in your CRM were set up years ago and nobody has reviewed whether they reflect how you actually sell'),
  ]

  const defaultFaqs = [
    {
      q: 'How many pipeline stages should a B2B sales process have?',
      a: "Most $1M–$10M B2B companies operate well with 5–7 defined stages. Fewer than 5 and the stages become too broad to be useful — 'In Progress' tells you nothing. More than 7 and the stages become bureaucratic and reps stop updating them accurately. The right number is whatever reflects the distinct decision points in your actual sales process: the moment a prospect becomes a real conversation, the moment they become qualified, the moment a commercial discussion begins, and the moment a final decision is made. Count your decision points — that's your stage count.",
    },
    {
      q: 'What\'s the difference between a pipeline stage and a sales activity?',
      a: "A pipeline stage represents where the buyer is in the decision process — it's a status. A sales activity is something the rep does — it's an action. 'Discovery call scheduled' is an activity. 'Discovery completed with qualification confirmed' is a stage. The confusion between stages and activities is one of the most common CRM setup mistakes. When reps move deals forward based on activities (sent the email, made the call) rather than buyer-side outcomes (responded, agreed, committed), the pipeline loses its predictive value entirely.",
    },
    {
      q: 'How do I get my team to actually update pipeline stages consistently?',
      a: "The answer is exit criteria, not motivation. If a rep can advance a deal by self-reporting, they'll advance it based on optimism. If a deal can only move to 'Proposal' when a written proposal has been sent and a response has been received, then stage advancement is tied to a verifiable event — not a judgment call. Build exit criteria into your CRM as required fields or activity triggers. Review stage progression in weekly pipeline calls. Inspect the criteria, not just the stage name. Consistency follows accountability, and accountability requires criteria.",
    },
    {
      q: 'Should pipeline stages be the same across all our products or segments?',
      a: "Not necessarily. If you sell to enterprise buyers with procurement processes and also sell to small businesses with a one-call close, forcing both into the same pipeline stages will distort your forecast and frustrate your reps. The right approach is to align stages to decision-making process, not product line. If your SMB deals move from discovery to close in two weeks and your enterprise deals require a pilot and a committee review, those are different sales motions and deserve different pipeline structures. Most CRMs support multiple pipelines — use them.",
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
        headline: 'Sales Pipeline Stages: How to Define Them So Your Team Uses Them the Same Way',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/sales-pipeline-stages',
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
              Sales Process
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Sales Pipeline Stages:')}
              <span className="block text-blue-400">{v('heroAccent', 'How to Define Them So Your Team Uses Them the Same Way')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most CRM pipeline stages are vague labels that mean different things to different reps. Without entry and exit criteria, stage advancement is based on optimism — not evidence. Here's how to build stages that actually predict revenue.")}
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
                Understand your sales velocity →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 6 Stages */}
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
              {v('sectionStagesHeading', 'The 6 Sales Pipeline Stages — With Entry and Exit Criteria')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionStagesSubheading', "Every stage needs two things: a clear entry point that defines when a deal belongs here, and an exit criterion that defines when it moves forward.")}
            </motion.p>
            <div className="space-y-6">
              {stages.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-700">{item.body}</p>
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
              {v('seoPara1', "Pipeline stages are the backbone of sales forecast accuracy — and most companies set them up once, never revisit them, and wonder why their quarterly forecast is consistently wrong. The issue is almost never that reps are sandbagging or over-optimistic by nature. It's that the stages themselves don't enforce rigor. When 'Discovery' just means 'we had a call,' any call qualifies — including calls where the prospect showed no real interest. When stages are criteria-based, only qualified conversations count as Discovery, and the pipeline becomes a reliable predictor of revenue.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "Well-defined pipeline stages also reveal where deals are dying. If 70% of your deals stall between Discovery and Proposal, the bottleneck is your qualification process or your presentation. If 60% stall between Proposal and Close, the bottleneck is your commercial conversation or your objection handling. Stage data is diagnostic data — but only if the stages mean something consistent across your team.")}{' '}
              <Link href="/sales-velocity-b2b" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                See how pipeline stages affect your sales velocity →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
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
              {v('sectionComparisonHeading', 'Vague Pipeline Stages vs. Criteria-Based Stages')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComparisonSubheading', "The difference between a pipeline that predicts revenue and one that misleads you is in the rigor of your stage definitions.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">Vague Stages</div>
                <div className="px-6 py-4 font-bold text-blue-400">Criteria-Based Stages</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.without}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.with}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signals */}
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
              {v('sectionSignalsHeading', '6 Signs Your Pipeline Stages Are Broken')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionSignalsSubheading', "These patterns show up in almost every company that hasn't revisited their pipeline structure since initial CRM setup.")}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {signals.map((signal, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 rounded-full bg-red-100 p-1 text-red-700">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-red-900">{signal}</p>
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
              {v('aboutBio2', "Redefining pipeline stages is one of the highest-leverage interventions I make in almost every engagement. When a team starts using consistent, criteria-based stages, forecast accuracy typically improves within 60 days — not because the pipeline got better overnight, but because the data becomes honest. You can see where deals are actually dying, how long each stage takes, and which reps are moving deals forward vs. keeping them warm. That visibility changes everything.")}
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
              {v('ctaHeadline', "Your Pipeline Stages Should Tell You Where Deals Die. Let's Make Them Do That.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can audit your current pipeline stages, identify where your forecast is breaking down, and give you a criteria-based stage framework your team will actually use.")}
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
