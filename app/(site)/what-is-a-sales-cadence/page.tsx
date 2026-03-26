'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatIsASalesCadence'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const cadenceTouches = [
  { day: 'Day 1', channel: 'Email', type: 'Personalized cold email', detail: 'Reference a specific trigger event, recent news, or shared connection. No product pitch. One clear problem statement and a single low-friction ask.' },
  { day: 'Day 3', channel: 'LinkedIn', type: 'Connection request', detail: 'Send a connection request with a brief, non-salesy note. Reference the same trigger event from your email. Keep it under 300 characters.' },
  { day: 'Day 5', channel: 'Phone', type: 'First call attempt', detail: 'Leave a 20-second voicemail that references your email and creates curiosity — not a product pitch. End with a specific follow-up commitment: "I\'ll send one more note Friday."' },
  { day: 'Day 8', channel: 'Email', type: 'Follow-up with value', detail: 'Send a piece of relevant content — a short case study, a framework, or a stat that speaks to the problem. Ask if it\'s useful. Do not pitch.' },
  { day: 'Day 10', channel: 'LinkedIn', type: 'Engage with content', detail: 'Comment meaningfully on something they\'ve posted in the last 30 days. Not a like — a thoughtful comment that shows you read it.' },
  { day: 'Day 14', channel: 'Phone', type: 'Second call attempt', detail: 'Leave a voicemail referencing the value you sent. Offer a specific meeting time: "I have Tuesday at 2pm or Wednesday at 10am — 20 minutes to see if this is relevant to you."' },
  { day: 'Day 17', channel: 'Email', type: 'Pattern interrupt', detail: 'Use a short, different-format email: 2–3 sentences max. Try a direct question instead of a pitch. "Is [problem] something you\'re actively working on right now?"' },
  { day: 'Day 21', channel: 'Phone', type: 'Third call attempt', detail: 'Same voicemail structure as Day 14 — slightly different framing. Reference a new data point or development in their industry if possible.' },
  { day: 'Day 24', channel: 'Email', type: 'Bump the original email', detail: 'Reply to your original email thread with a single line: "Did this fall off your radar, [Name]?" High reply rates. Keeps the thread context visible.' },
  { day: 'Day 28', channel: 'Email', type: 'Break-up email', detail: 'The final touch. Be direct: "I\'ve reached out a few times and haven\'t heard back — I\'m guessing the timing isn\'t right. If that changes, here\'s how to reach me." Often generates replies.' },
]

const adHocVsCadence = [
  { adHoc: 'Rep sends one email and waits to hear back', cadence: 'Systematic 10-touch sequence runs automatically over 28 days' },
  { adHoc: 'Follow-up timing depends on rep memory and motivation', cadence: 'Every prospect gets the same disciplined follow-up regardless of rep mood' },
  { adHoc: 'Reps give up after 1–2 touches (most deals require 5–8)', cadence: 'Sequence continues through all documented touches before marking as unresponsive' },
  { adHoc: 'No data on which messages or channels perform best', cadence: 'Reply rates, meeting rates, and unsubscribe rates tracked per step' },
  { adHoc: 'Founder must manually follow up to ensure consistency', cadence: 'Process runs without founder involvement once it\'s built' },
]

const faqs = [
  {
    q: 'How many touches should a sales cadence have?',
    a: 'Research consistently shows that 80% of deals require 5 or more touches before a prospect responds. Most reps stop at 1–2. A 10-touch cadence over 28 days is the right starting point for most B2B outbound programs targeting mid-market buyers. For enterprise buyers with longer research cycles, 12–15 touches over 45 days is more appropriate. The goal isn\'t more volume — it\'s systematic, multi-channel persistence that earns the meeting.',
  },
  {
    q: 'What\'s the right mix of email, phone, and LinkedIn in a cadence?',
    a: 'For most B2B sales teams, a 10-touch cadence breaks down as: 4–5 emails (the highest-volume, lowest-effort channel), 3 phone attempts (the highest-conversion channel when done well), and 2–3 LinkedIn touchpoints (research, connection, and content engagement). The exact mix should be adjusted based on your ICP — senior executives are harder to reach by phone but more active on LinkedIn; operational buyers often respond better to email.',
  },
  {
    q: 'Should every rep have their own cadence or should there be one company cadence?',
    a: 'Start with one company cadence that every rep uses. Variation before you have data is noise, not strategy. Once you\'ve run the cadence through 100+ prospects and have reply rates and meeting rates at each step, you can test variations — different subject lines, different value props, different sequencing. Reps can personalize within the cadence, but the structure should be consistent. Consistency is what makes the data meaningful.',
  },
  {
    q: 'What tools do I need to run a cadence for a small team?',
    a: 'For a team of 1–4 reps, Apollo.io (outbound + sequencing + prospecting data) handles most of what you need at a reasonable price point. HubSpot Sequences works if you\'re already on HubSpot and your list management is in good shape. Outreach.io and Salesloft are more powerful but designed for larger teams. The tool matters less than the cadence design and the discipline to actually run it — start simple and add sophistication as you learn what works.',
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
      headline: 'What Is a Sales Cadence? How to Build One That Books Meetings',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/what-is-a-sales-cadence',
    },
  ],
}

export default function WhatIsASalesCadencePage() {
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
              Outbound Sales
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Is a Sales Cadence?')}
              <span className="block text-blue-400">{v('heroAccent', 'How to Build One That Books Meetings')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "A sales cadence is a structured, multi-touch outreach sequence that systematically moves a cold prospect toward a meeting. Here's the 10-touch, 28-day framework and how to build it into your outbound motion.")}
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
                href="/how-to-build-outbound-sales-system"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Build the full outbound system →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 10-Touch Cadence */}
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
              The 10-Touch, 28-Day Cadence Template
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Multi-channel. Systematic. Built to run without the founder managing every follow-up.
            </motion.p>
            <div className="space-y-4">
              {cadenceTouches.map((touch, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">{touch.day}</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-neutral-700">{touch.channel}</span>
                    <span className="text-sm font-bold text-neutral-900">{touch.type}</span>
                  </div>
                  <p className="text-sm text-neutral-700">{touch.detail}</p>
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
              A sales cadence solves one of the most common problems in founder-led outbound: inconsistency. Without a cadence, outreach quality and follow-up frequency depend entirely on individual rep motivation and memory. Some prospects get six touches over a month. Others get one email and never hear from you again. A cadence replaces that randomness with a system — every prospect in the sequence gets the same disciplined outreach regardless of whether the rep is having a good week or a bad one.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The 10-touch template above is a starting point, not a fixed rule. The right cadence for your business depends on your ICP, your ACV, and your sales cycle. A founder selling $100K enterprise contracts needs a different sequence than a team selling $15K SMB deals. What doesn't change is the principle: systematic, multi-channel persistence that respects the buyer's time and earns the meeting through relevance and value, not volume alone. To see how this fits into a complete outbound system,{' '}
              <Link href="/how-to-build-outbound-sales-system" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the full outbound system guide →
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
              Ad-Hoc Outreach vs. Cadence-Based Outreach
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The difference isn't effort level — it's whether the system runs when the rep is distracted.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold">Ad-Hoc Outreach</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">Cadence-Based Outreach</div>
              </div>
              {adHocVsCadence.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-2 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
                    <span>{row.adHoc}</span>
                  </div>
                  <div className="flex items-start gap-2 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-green-600">✓</span>
                    <span>{row.cadence}</span>
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
              {v('aboutBio2', "Building cadences is one of the first operational things I do when a company's outbound is inconsistent. In most cases, reps are abandoning prospects after 1–2 touches because there's no system telling them to persist. Installing a cadence and measuring reply rates at each step typically doubles meeting-booked rates within 60 days — not because we're doing more, but because we're doing it systematically.")}
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
              {v('ctaHeadline', "Let's Build Your Outbound Cadence")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess your current outreach process, identify where prospects are falling through the cracks, and map a cadence that fits your ICP and sales cycle.")}
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
