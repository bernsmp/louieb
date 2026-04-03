'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToRunSalesQbr'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HowToRunSalesQbrPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const questions = [
    {
      number: '01',
      title: v('q1Title', 'What Worked Last Quarter and Why?'),
      detail: v('q1Detail', "This is not a restatement of the revenue number. It is a specific analysis of which inputs produced the results. Which deals closed? Where did they come from? Which salespeople drove most of the performance? Which sales activities had the highest conversion? The goal is to identify one or two repeatable patterns that should be reinforced in the next quarter. Most teams skip the 'why' and go straight to the number. The number tells you what happened. The why tells you what to do more of."),
      prompt: v('q1Prompt', "Prep question for each salesperson: Name your one best win last quarter and the specific reason you believe it closed."),
    },
    {
      number: '02',
      title: v('q2Title', 'What Broke Last Quarter and What Did It Cost?'),
      detail: v('q2Detail', "Losses are data. A team that does not debrief losses is flying blind on what is working against them in the market. This question covers deals that were lost, deals that stalled, and any process or resource failures that cost the team capacity or credibility. The framing matters: this is not a blame session. It is a diagnostic conversation with a specific goal. At the end of the discussion, you should have at least one specific change you are making in the next quarter to avoid repeating the same failure."),
      prompt: v('q2Prompt', "Prep question for each salesperson: Name one deal you should have won last quarter and the specific reason you lost it."),
    },
    {
      number: '03',
      title: v('q3Title', 'What Does Pipeline Health Look Like Entering This Quarter?'),
      detail: v('q3Detail', "This is the forward-looking section and it requires actual data, not impressions. Cover pipeline coverage: do you have 3x to 4x your revenue target in qualified opportunities? Cover stage distribution: are deals concentrated in early stages with no real close-readiness? Cover deal velocity: are any deals stalling in the same stage repeatedly? And cover deal quality: how many opportunities were added this quarter versus last quarter, and what was the source? If your pipeline going into the next quarter cannot support your revenue target, you do not have a goal problem. You have a pipeline generation problem."),
      prompt: v('q3Prompt', "Pull the numbers before the QBR: total pipeline value, number of qualified deals, average deal size, pipeline coverage ratio against the quarter target."),
    },
    {
      number: '04',
      title: v('q4Title', 'What One Thing Will We Change This Quarter and Who Owns It?'),
      detail: v('q4Detail', "A QBR that ends without a decision is a status update. The fourth question is the decision-making section. Based on what worked, what broke, and what the pipeline looks like, the team should agree on one specific change for the next 90 days. One. Not five, not a strategic overhaul. One specific behavior or process change with a clear owner, a clear definition of what success looks like, and a date by which it will be evaluated. The single-change format is intentional. Teams that try to change three things change none of them. Teams that commit to one change with an owner and a deadline move."),
      prompt: v('q4Prompt', "Format: 'This quarter, we will [specific change]. [Name] owns it. We will evaluate whether it worked at the next QBR by measuring [specific metric].'"),
    },
  ]

  const comparison = [
    {
      bad: v('comp1Bad', "Starts with a slide deck reviewing last quarter's revenue and activity stats"),
      good: v('comp1Good', 'Starts with a one-page prep document shared 24 hours in advance with the four questions'),
    },
    {
      bad: v('comp2Bad', "Each person gives their own update in whatever format they prefer"),
      good: v('comp2Good', 'Everyone answers the same four questions in the same sequence every time'),
    },
    {
      bad: v('comp3Bad', 'Forward-looking revenue forecast is based on gut feel and deal optimism'),
      good: v('comp3Good', 'Forward-looking section is built from pipeline coverage math with actuals'),
    },
    {
      bad: v('comp4Bad', "Runs 3 hours with no decisions made and action items that nobody follows up on"),
      good: v('comp4Good', 'Runs 90 minutes and ends with one specific change, one owner, and a date'),
    },
    {
      bad: v('comp5Bad', 'Lost deals are never discussed — only wins get airtime'),
      good: v('comp5Good', 'Lost deals are discussed specifically: what was lost, why, and what changes next quarter'),
    },
  ]

  const defaultFaqs = [
    {
      q: "What is a sales QBR and why does it matter for small teams?",
      a: "A QBR, or quarterly business review, is a structured 90-minute meeting where the sales team looks back at the last quarter and forward into the next one using the same set of questions every time. For a small team of one to four salespeople, it matters because it creates the only regular forum where patterns get examined rather than just numbers. Most small sales teams talk about deals constantly and almost never talk about why the deals they should be winning are not closing. The QBR is where that conversation happens.",
    },
    {
      q: "How long should a sales QBR be for a team of 2-4 salespeople?",
      a: "Ninety minutes is the right target for a small team. Long enough to cover all four questions substantively. Short enough that people stay engaged and do not treat it as a day-long obligation. The keys to keeping it at 90 minutes are a shared prep document sent 24 hours in advance and a facilitator who keeps the conversation focused on decisions rather than stories. If the QBR regularly runs over two hours, the problem is usually a lack of structure in the prep, not a lack of time in the meeting.",
    },
    {
      q: "What data do I need to prepare for a sales quarterly business review?",
      a: "Five numbers: total revenue closed last quarter versus target, total pipeline entering the new quarter versus the quarterly target multiplied by 3 to 4 for coverage, win rate from the last quarter by source, average sales cycle length compared to the prior quarter, and the number of new qualified opportunities added last quarter by source. If your CRM does not give you these numbers cleanly, the QBR prep process itself will reveal that CRM hygiene is your highest-leverage fix for the next quarter.",
    },
    {
      q: "What is the difference between a weekly pipeline review and a quarterly QBR?",
      a: "A weekly pipeline review is operational: it focuses on specific deals, specific next steps, and specific stalled conversations. It answers the question 'what do we need to do this week.' A quarterly QBR is strategic: it focuses on patterns, systemic improvements, and directional decisions for the next 90 days. It answers the question 'what do we need to change about how we sell.' Both are necessary. A team that only does weekly reviews is managing deals without improving the system. A team that only does quarterly reviews is thinking strategically without the weekly discipline to execute.",
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
        headline: 'How to Run a Sales QBR for a Small B2B Team',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-to-run-a-sales-qbr',
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
              {v('heroLine1', 'How to Run a Sales QBR')}
              <span className="block text-blue-400">{v('heroAccent', 'for a Small B2B Team')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most QBR guides assume you have a RevOps team pulling dashboards and 20 salespeople presenting slides. This one is built for founders running 1-4 salespeople who want 90 minutes that actually changes something about how the team sells.")}
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
                href="/how-to-run-weekly-sales-meeting"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Set up your weekly rhythm first →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 4 Questions */}
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
              {v('sectionQuestionsHeading', 'The 4-Question QBR Framework for Small Teams')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionQuestionsSubheading', "Four questions. Ninety minutes. One decision. Every quarter, the same structure. That consistency is what makes a QBR valuable over time.")}
            </motion.p>
            <div className="space-y-8">
              {questions.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Prep prompt: </span>
                    <span className="text-blue-800">{item.prompt}</span>
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
              {v('seoPara1', "Most small sales teams have no quarterly rhythm at all. They run weekly pipeline reviews and monthly one-on-ones, and the closest thing to a QBR is a conversation at the start of each quarter about the new number. That is not a QBR. It is a quota announcement. The value of the QBR is not in reviewing the number. It is in examining the patterns under the number and making a specific decision about what to change. A founder who runs a consistent QBR four times a year with their sales team is generating more management intelligence than a founder who checks in on deals every week for 52 weeks without stepping back to look at the system.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "If you are ready to add more structure to how you manage your sales team, start with the weekly meeting and the pipeline review before adding the QBR layer. The QBR builds on the data those habits generate.")}{' '}
              <Link href="/how-to-run-a-sales-pipeline-review" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How to run a pipeline review that creates accountability →
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
              {v('sectionCompHeading', 'QBR That Wastes Time vs. QBR That Changes How You Sell')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', "The difference between a QBR that produces a decision and one that produces a summary is structure. Here is what that looks like.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold text-red-400">QBR That Wastes Time</div>
                <div className="px-6 py-4 font-bold text-green-400">QBR That Changes How You Sell</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.bad}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.good}</p>
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
              {v('aboutBio2', "I install the QBR as a standard practice in almost every engagement. The first one is usually the most revealing: the team has never looked at their own win and loss patterns in a structured way. The patterns that emerge in the first QBR often reveal root causes that weekly deal reviews never surface. Once a team has run three or four QBRs with the same format, the quality of their strategic decisions about where to invest time and energy improves significantly.")}
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
              {v('ctaHeadline', "Your Next QBR Should Produce a Decision. Let's Make Sure It Does.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can help you build the QBR prep document, set the agenda for your first structured quarterly review, and identify the one change that would have the most impact on next quarter's revenue.")}
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
