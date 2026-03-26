'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoRunSalesPipelineReview'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const reviewQuestions = [
  {
    number: '01',
    question: 'What is the specific next step on this deal — and when does it happen?',
    why: 'Every deal in your pipeline should have one owner, one next action, and one deadline. If the answer is "waiting to hear back," that\'s not a next step — it\'s a passive prayer. A real next step is: "Follow-up call scheduled for Tuesday at 2pm to review the proposal with the CFO." If you can\'t state that clearly, the deal is stalling and nobody\'s doing anything about it.',
  },
  {
    number: '02',
    question: 'Has the buyer taken any action since the last update?',
    why: 'Deals that progress have buyers doing things: requesting references, involving legal, scheduling additional stakeholders, asking detailed implementation questions. Deals that stall have sellers doing things: sending follow-ups, leaving voicemails, "just checking in." If the buyer hasn\'t taken a meaningful action in two weeks, ask yourself honestly: is this still a real deal?',
  },
  {
    number: '03',
    question: 'Who is the economic buyer, and have we spoken to them?',
    why: 'The majority of deals that get to proposal and die were never really alive — because the economic buyer was never in the room. If you\'ve only spoken to a champion or an influencer without confirming that the person with budget authority knows this deal exists and supports it, you\'re selling to someone who can say yes but can\'t write the check.',
  },
  {
    number: '04',
    question: 'What is the most likely reason this deal doesn\'t close?',
    why: 'This is the most important question most pipeline reviews never ask. Every deal has a risk. Naming it isn\'t pessimism — it\'s preparation. "They\'re evaluating a competitor and haven\'t committed to a timeline" is a specific risk with specific mitigation strategies. "They\'re slow movers" is a vague generalization that produces no action. Name the risk. Make a plan.',
  },
  {
    number: '05',
    question: 'Is this deal still forecast-worthy, or should it move to nurture?',
    why: 'Pipeline hygiene is not about being pessimistic — it\'s about being honest with your own numbers. A deal that has been in "proposal sent" for 60 days without buyer action is not a pipeline deal. It\'s a marketing nurture candidate. Keeping it in the pipeline inflates your coverage ratio and destroys your forecast accuracy. Move it out, assign it to a nurture sequence, and free up your mental bandwidth.',
  },
]

const reviewAgenda = [
  { time: '0–5 min', task: 'Quick numbers check: pipeline value vs. last week, new deals entered, deals closed or lost' },
  { time: '5–30 min', task: 'Deal-by-deal inspection of all qualified opportunities over threshold (e.g., >$10K or >your average ACV)' },
  { time: '30–40 min', task: 'Identify the 2–3 deals that need the most help this week — assign specific support actions' },
  { time: '40–45 min', task: 'Pipeline hygiene: move zombie deals to nurture, flag any deals that need ICP requalification' },
]

const badVsGood = [
  { bad: '"We sent a follow-up, waiting to hear"', good: '"CFO review call confirmed for Thursday — here\'s what we need to prepare"' },
  { bad: '"They\'re moving slowly but still interested"', good: '"Buyer hasn\'t acted in 14 days — we\'re moving to nurture unless we get a confirmed next step by Friday"' },
  { bad: '"It\'s a big deal, I\'m keeping it close"', good: '"Deal risk: champion has no budget authority. Action: request intro to CFO this week"' },
  { bad: '"Pipeline is looking good"', good: '"We have $1.8M in qualified pipeline vs. $2.4M coverage target — we\'re short. Here\'s where new pipe is coming from"' },
]

const faqs = [
  {
    q: 'How often should we run a pipeline review?',
    a: 'Weekly for most $1M–$10M ARR businesses with active sales teams. Bi-weekly if your sales cycle is very long (90+ days) and deal velocity is low. Monthly is too infrequent to catch deals before they die quietly. The key is consistency — a regular cadence creates accountability that an irregular one never does.',
  },
  {
    q: 'Who should be in the pipeline review?',
    a: 'The sales leader (or fractional sales leader) and every rep who carries a quota. Keep it tight — no marketing, no ops, no spectators. The meeting is about deal accountability. Everyone in the room should have a deal to report on or a coaching role to play. More than 6 people and it becomes a status meeting that nobody benefits from.',
  },
  {
    q: 'How do I run a pipeline review when I\'m still the main closer?',
    a: 'If you\'re the founder and the primary closer, the pipeline review is still valuable — it\'s self-accountability. Go through every deal against the five questions. The discipline of reviewing your own deals objectively surfaces the same insights that a manager\'s review would. The difference is you have to be ruthless with yourself about what\'s real vs. what you want to be real.',
  },
  {
    q: 'What\'s the difference between a pipeline review and a sales forecast?',
    a: 'A pipeline review is about deal-level accountability — what\'s happening with each specific deal and what actions will move it forward. A sales forecast is a revenue prediction derived from pipeline data. The pipeline review is the input that makes the forecast accurate. If you don\'t run disciplined pipeline reviews, your forecast is guesswork.',
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
      headline: 'How to Run a Sales Pipeline Review Without It Becoming a Waste of Time',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-run-a-sales-pipeline-review',
    },
  ],
}

export default function RunSalesPipelineReviewPage() {
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
              Sales Management
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Run a Sales Pipeline Review')}
              <span className="block text-blue-400">{v('heroAccent', "Without It Becoming a Waste of Time")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most pipeline reviews are theater — status updates that nobody learns from and nothing changes after. Here are the five questions that turn a pipeline review into an accountability engine.")}
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
                How to run a weekly sales meeting →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Questions */}
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
              The 5 Questions for Every Deal
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Ask these for every deal over your average ACV threshold. If you can't answer all five, the deal doesn't belong in your forecast.
            </motion.p>
            <div className="space-y-6">
              {reviewQuestions.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-lg font-bold text-neutral-900">{item.question}</h3>
                  </div>
                  <p className="text-neutral-700">{item.why}</p>
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
              The pipeline review is the most important recurring meeting in a sales organization — and the most commonly wasted. When it works, deals move faster, reps become more accountable, and the forecast becomes reliable. When it fails, it becomes a 45-minute status theater where reps report what they think their manager wants to hear and nothing changes afterward. The difference between the two isn't the frequency of the meeting — it's the quality of the questions asked inside it.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The five questions above are what separate a coaching conversation from a status update. They require reps to know their deals deeply enough to defend them — not just report on them. For founders who are still the primary closer and haven't yet built the discipline around a formal review, the same questions apply to your own deals. Self-accountability is the first step. If you want to understand what a full sales management system looks like beyond the pipeline review,{' '}
              <Link href="/what-does-fractional-sales-leader-do" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                see what a fractional sales leader does each week →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 45-Minute Agenda */}
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
              The 45-Minute Pipeline Review Agenda
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Use this template. Adjust the threshold for deal-level review to match your ACV.
            </motion.p>
            <div className="space-y-4">
              {reviewAgenda.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-5 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{item.time}</span>
                  </div>
                  <div className="border-l border-neutral-200 pl-5">
                    <p className="text-neutral-700">{item.task}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bad vs Good */}
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
              What Good Looks Like vs. What Most Reviews Sound Like
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The difference is specificity. Vague answers produce no action. Specific answers produce next steps.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 px-6 py-3 text-sm font-bold text-white">
                <div className="text-red-300">❌ Status Theater</div>
                <div className="text-green-300">✓ Real Pipeline Review</div>
              </div>
              {badVsGood.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 gap-4 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="text-neutral-500 italic">&ldquo;{row.bad}&rdquo;</div>
                  <div className="font-medium text-neutral-800">&ldquo;{row.good}&rdquo;</div>
                </div>
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
              {v('aboutBio2', "Monday pipeline reviews are the anchor of every engagement I run. The five questions above are the ones I ask every week. When teams learn to answer them specifically — not vaguely — deal velocity increases within 30 days. It\'s not magic. It\'s accountability with a structure.")}
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
              {v('ctaHeadline', "Want Me to Run a Pipeline Review With Your Team?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can show you exactly what changes when pipeline reviews go from status meetings to coaching sessions — and what that means for your close rate and forecast accuracy.")}
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
