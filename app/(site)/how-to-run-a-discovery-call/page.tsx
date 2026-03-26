'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToRunDiscoveryCall'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const discoveryQuestions = [
  {
    number: '01',
    question: 'What does winning look like for this initiative?',
    why: 'This question surfaces the success criteria your buyer is using to evaluate you — and every other solution. If you don\'t know what "winning" means to them, you can\'t build a compelling case that you deliver it. Most reps skip this and assume the answer. The answer is almost always different from the assumption.',
  },
  {
    number: '02',
    question: 'What\'s driving the urgency to solve this now?',
    why: 'Urgency is the difference between a deal that closes and a deal that stalls. Something changed — a new hire, a missed target, a competitor threat, a board conversation — that made this a priority today instead of next quarter. Find that trigger and you find the emotional fuel behind the buying decision. Without urgency, "great meeting" deals sit in pipeline for months.',
  },
  {
    number: '03',
    question: 'What have you already tried, and what happened?',
    why: 'This question gives you the competitive landscape (what else are they evaluating or have evaluated), tells you what failed and why, and shows you where the bar is set. If they tried a solution that didn\'t work, you need to understand why — because if you can\'t differentiate from that failure, you\'ll lose for the same reasons.',
  },
  {
    number: '04',
    question: 'Who else needs to be involved in this decision?',
    why: 'This is the multi-threading question. Deals that die in procurement or at the executive level almost always die because the only relationship was with the champion — not the economic buyer. Ask this early so you can build a plan to engage the full buying team before the proposal stage, not after.',
  },
  {
    number: '05',
    question: 'What happens to the business if this problem doesn\'t get solved?',
    why: 'This is the consequence question — and it\'s the most important one for building your ROI case. When a buyer articulates the cost of inaction in their own words, they\'ve already done the work of justifying the purchase. Your job is to help them make that connection, not make it for them.',
  },
  {
    number: '06',
    question: 'What does your timeline look like?',
    why: 'Timing misalignment is one of the most common deal-killers. If the buyer wants to solve this in Q3 and you\'re building an entire close plan for Q2, you\'re working on the wrong timeline. Ask directly, ask early, and use the answer to set your pipeline stage dates accurately — not optimistically.',
  },
  {
    number: '07',
    question: 'What would make you say no to moving forward?',
    why: 'This is the kill-shot question that most reps are afraid to ask. It surfaces pricing objections, internal politics, compliance concerns, and competitive preferences before they surface as surprise blockers at the finish line. Ask it in discovery and you can address it. Find out in the final review and you\'ve already lost.',
  },
  {
    number: '08',
    question: 'What does the decision process look like from here?',
    why: 'By the end of discovery, you need a documented mutual action plan: who needs to approve, what steps come next, who owns each one, and what the timeline is. If a prospect can\'t or won\'t answer this question, that\'s a red flag about deal seriousness. Deals without a documented next step belong in your "watch list," not your pipeline.',
  },
]

const statusCheckVsDiscovery = [
  { statusCheck: 'Rep talks 70% of the time, prospect listens', discovery: 'Prospect talks 70% of the time, rep listens and directs' },
  { statusCheck: 'Questions focus on timeline and budget', discovery: 'Questions focus on problem, consequence, and decision process' },
  { statusCheck: 'Call ends with "I\'ll send you some information"', discovery: 'Call ends with a documented mutual action plan' },
  { statusCheck: 'Rep leaves not knowing who the economic buyer is', discovery: 'Rep knows every stakeholder and their role in the decision' },
  { statusCheck: 'Urgency is assumed, not confirmed', discovery: 'Trigger event and cost of inaction are explicitly documented' },
  { statusCheck: 'Deal enters pipeline as "qualified" based on rep enthusiasm', discovery: 'Deal enters pipeline with 8 qualification criteria confirmed' },
]

const faqs = [
  {
    q: 'How long should a discovery call be?',
    a: 'Book 45 minutes; run it in 30 if you get what you need. The trap most reps fall into is booking 30 minutes and using 20 of them on a product demo because they ran out of discovery time. Discovery must come first. Product comes after you\'ve confirmed that a real problem exists, that the buyer has urgency, and that the buying team and budget are real. If you can\'t cover the 8 questions in a 30-minute call, you\'re covering too much ground per question — keep answers focused.',
  },
  {
    q: 'Should I use BANT or MEDDIC in my discovery process?',
    a: 'Both are qualification frameworks, not conversation scripts. BANT (Budget, Authority, Need, Timeline) covers the minimum. MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion) is more thorough and better suited to complex B2B deals. Neither framework tells you what questions to ask — they tell you what information you need to leave the call with. The 8 questions above are a practical implementation of the MEDDIC elements in a natural conversation flow.',
  },
  {
    q: 'What if the prospect wants to jump straight to pricing?',
    a: 'Acknowledge the question and redirect: "I want to make sure any number I give you actually fits what you\'re trying to do — can I ask a few questions first so we\'re not wasting each other\'s time?" Most reasonable buyers accept this. If a prospect refuses to engage in discovery and only wants pricing, that\'s useful information: they\'re either in early evaluation mode (not ready to buy) or they\'re using you as a competitive benchmark for a deal they\'ve already decided on.',
  },
  {
    q: 'How should reps document discovery findings?',
    a: 'Every answer from the 8 questions goes into the CRM as a required field before a deal can advance past Stage 1. "Trigger event," "economic buyer name and title," "cost of inaction," "decision process," and "timeline" should all be required text fields — not checkboxes. Checkboxes allow reps to mark things done without actually having the information. Text fields require the rep to write what they heard, which forces the conversation to happen and creates accountability to the data.',
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
      headline: 'How to Run a Sales Discovery Call That Actually Moves Deals Forward',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-run-a-discovery-call',
    },
  ],
}

export default function HowToRunDiscoveryCallPage() {
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
              Sales Process
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Run a Sales Discovery Call')}
              <span className="block text-blue-400">{v('heroAccent', 'That Actually Moves Deals Forward')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most discovery calls are status checks in disguise. Here are the 8 questions that separate real discovery from a pleasant conversation that leads nowhere — plus a comparison table and call scorecard for rep coaching.")}
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
                href="/what-is-a-sales-playbook"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Build your discovery call into the sales playbook →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 8 Questions */}
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
              The 8 Discovery Questions Every Rep Must Ask
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              You need all 8 answered before a deal can move past Stage 1. No exceptions.
            </motion.p>
            <div className="space-y-6">
              {discoveryQuestions.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">"{item.question}"</h3>
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Why it matters: </span>
                    <span className="text-blue-800">{item.why}</span>
                  </div>
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
              Discovery is the most undervalued part of the B2B sales process. Founders and reps rush it because they want to get to the pitch — the part that feels like selling. But the pitch without discovery is guesswork. You're presenting solutions to problems you've assumed, not confirmed. The result is demos that feel good but don't move forward, proposals that get "we need to think about it," and deals that stall because there was never a real urgency or decision process behind them.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The 8 questions above are not a script — they're the information you need to have before you can honestly call a deal "qualified." When these answers live in the CRM as required fields, your pipeline becomes a reflection of reality rather than a record of optimism. And when discovery findings inform your proposals and demos, close rates increase because you're solving the buyer's actual problem instead of showcasing your product's best features. For a complete picture of how discovery fits into your sales motion,{' '}
              <Link href="/what-is-a-sales-playbook" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the sales playbook guide →
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
              Status Check vs. Real Discovery
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Both feel like a productive meeting. Only one actually qualifies the deal.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold">Status Check Call</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">Real Discovery Call</div>
              </div>
              {statusCheckVsDiscovery.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-2 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
                    <span>{row.statusCheck}</span>
                  </div>
                  <div className="flex items-start gap-2 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-green-600">✓</span>
                    <span>{row.discovery}</span>
                  </div>
                </div>
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
              {v('aboutBio2', "I shadow calls in the first 30 days of every engagement. The most common observation: reps are spending 40% of a discovery call on product features before they've confirmed that a real problem exists. The fix is a documented discovery framework that reps use consistently. When discovery answers become required CRM fields, deal quality improves immediately because reps can't advance phantom opportunities.")}
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
              {v('ctaHeadline', "Let's Shadow a Discovery Call Together")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current discovery process, identify the questions that are missing or being skipped, and build a qualification scorecard your team can use starting this week.")}
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
