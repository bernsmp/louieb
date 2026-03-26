'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToWriteColdEmail'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const emailFormula = [
  {
    line: 'Line 1',
    label: 'The Hook — Make It Specific to Them',
    detail: 'The first sentence determines whether the rest of the email gets read. Generic openers ("I hope this finds you well," "I\'m reaching out because...") destroy open rates before you even make your point. A strong hook references something specific to the recipient: a recent funding announcement, a job posting that signals a problem, a piece of content they published, or a mutual connection. It proves you did your homework and didn\'t spray-and-pray.',
    example: '"Saw that you just expanded your sales team to 6 reps — congrats. Rapid growth at that stage usually surfaces some interesting process challenges."',
  },
  {
    line: 'Line 2',
    label: 'The Problem — Name the Pain Without Overstating It',
    detail: 'The second line names the problem your prospect is likely experiencing, based on their situation. Don\'t diagnose them — hypothesize. "Companies at your stage often find that..." is more effective than "You probably have this problem." The former invites a conversation. The latter presumes you know their business better than they do, which creates resistance even when you\'re right.',
    example: '"Companies scaling from 3 to 7 reps often find the founder is still the closer on the biggest deals — pipeline fills up but conversion slows down."',
  },
  {
    line: 'Line 3',
    label: 'The Solution — One Sentence, Not a Pitch',
    detail: 'Describe what you do in a single, plain-English sentence focused on the outcome, not the features. Avoid jargon, superlatives, and anything that sounds like marketing copy. "We help" or "I work with" is fine. "Revolutionary platform that leverages AI to transform your go-to-market strategy" will get you deleted. The goal of this line is to be understandable in 5 seconds — not impressive.',
    example: '"I work with B2B founders at $2M–$8M ARR to build the sales processes that let them step back from day-to-day selling."',
  },
  {
    line: 'Line 4',
    label: 'The Proof — One Specific Result',
    detail: 'One concrete result is more powerful than three vague ones. "Helped increase revenue" says nothing. "Helped a SaaS company at $3.2M ARR grow 61% in 12 months by rebuilding their pipeline process" says something you can check. Specificity creates credibility. If you don\'t have a named case study you can share, use an anonymized result with enough detail to be believable.',
    example: '"One of my clients — a B2B SaaS company at $3.2M ARR — grew 61% in the first year of working together."',
  },
  {
    line: 'Line 5',
    label: 'The CTA — One Ask, Low Friction',
    detail: 'Most cold emails fail at the ask. "Would you be open to a quick call sometime?" is not an ask — it\'s a vague possibility. A strong CTA is a specific, low-friction request with a clear yes/no answer. Offer two time options. Keep the meeting short (20 minutes). Make it easy to say yes by naming the agenda. And make it easy to say no by acknowledging that you understand if the timing isn\'t right.',
    example: '"Worth a 20-minute call to see if this is relevant? I have Tuesday at 2pm or Thursday at 10am — or just reply with a time that works better."',
  },
]

const beforeAfter = [
  {
    label: 'Subject Line',
    bad: '"Quick question about your sales process"',
    good: '"Your Series A + 6 reps — a question"',
  },
  {
    label: 'Opening Line',
    bad: '"I hope this email finds you well. I\'m reaching out because I came across your company..."',
    good: '"Saw that you just expanded to 6 reps — that stage usually surfaces some interesting process questions."',
  },
  {
    label: 'Problem Statement',
    bad: '"Many companies struggle with sales productivity and revenue growth."',
    good: '"Companies scaling from 3 to 7 reps often find the founder is still the closer on the biggest deals."',
  },
  {
    label: 'What You Do',
    bad: '"Our innovative platform leverages proven methodologies to optimize your revenue engine."',
    good: '"I work with B2B founders at $2M–$8M ARR to build the sales processes that let them step back from day-to-day selling."',
  },
  {
    label: 'CTA',
    bad: '"Would love to connect and share more about how we might be able to help. Let me know if you\'d like to chat!"',
    good: '"Worth 20 minutes? Tuesday at 2pm or Thursday at 10am — or reply with a time that works."',
  },
]

const faqs = [
  {
    q: 'What\'s the right length for a cold email?',
    a: 'Between 75 and 125 words. Short enough to read in 30 seconds on a phone, long enough to include all five lines of the formula. Every word beyond 125 is statistically decreasing your reply rate. If you find yourself writing longer, it\'s usually because you\'re trying to explain too much before earning the right to a conversation. The goal of a cold email is not to close a deal — it\'s to earn a meeting.',
  },
  {
    q: 'Should I personalize every cold email or use templates?',
    a: 'Use a template for Lines 2–5 (problem, solution, proof, CTA) — these can be consistent across an ICP segment. Personalize Line 1 (the hook) for every prospect. The hook is what makes the email feel human and relevant. Even a single personalized sentence increases reply rates significantly compared to pure templates. At scale, use tools like Apollo.io with custom fields that let you insert personalized variables automatically.',
  },
  {
    q: 'How do I know if my cold email is performing well?',
    a: 'Track three metrics: open rate (target 40%+), reply rate (target 3–5% for cold outreach), and positive reply rate (target 1–2%). If your open rate is low, the problem is the subject line or sender reputation. If opens are high but replies are low, the email content isn\'t landing. If you\'re getting replies but they\'re all negative, you\'re targeting the wrong ICP or leading too aggressively with a pitch.',
  },
  {
    q: 'How does cold email fit into a broader outbound system?',
    a: 'Cold email is one channel in a multi-touch cadence — typically the highest-volume touchpoint because it\'s the lowest-effort to execute at scale. It works best when combined with phone calls and LinkedIn touchpoints, not as a standalone channel. A prospect who gets a relevant email, sees your LinkedIn comment on their post two days later, and receives a voicemail the following week is far more likely to respond than one who only receives emails.',
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
      headline: 'How to Write a Cold Email That Gets Replies (Without Sounding Like Spam)',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-write-a-cold-email',
    },
  ],
}

export default function HowToWriteColdEmailPage() {
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
              {v('heroLine1', 'How to Write a Cold Email That Gets Replies')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Sounding Like Spam')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most cold emails fail because they pitch instead of connect. Here's the 5-line formula that earns replies — plus real before/after rewrites of the most common cold email mistakes.")}
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
                href="/what-is-a-sales-cadence"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How cold email fits into a cadence →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5-Line Formula */}
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
              The 5-Line Cold Email Formula
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              75–125 words. One ask. Earns the meeting — doesn't try to close it.
            </motion.p>
            <div className="space-y-8">
              {emailFormula.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex flex-wrap items-start gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">{item.line}</span>
                    <h3 className="text-lg font-bold text-neutral-900">{item.label}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Example: </span>
                    <span className="italic text-blue-800">{item.example}</span>
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
              Cold email is the most scalable outbound channel available to a $1M–$10M ARR sales team — and the most commonly abused. The inbox is crowded, and buyers have developed a fast filter for anything that feels templated, self-congratulatory, or irrelevant. The emails that get replies aren't the most clever or the longest — they're the most relevant. Relevance comes from specificity: knowing enough about the prospect to name a real problem in a way that makes them think "how did they know that?"
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The 5-line formula above is designed to create that relevance at scale. Lines 2–5 can be templated for a segment. Line 1 must be personalized for the individual. That split — 80% template, 20% personalization — is how you run outbound efficiently without sounding like a robot. And cold email only reaches its full potential when it's part of a multi-touch cadence. To see how email fits alongside phone and LinkedIn in a systematic sequence,{' '}
              <Link href="/what-is-a-sales-cadence" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the full cadence guide →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
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
              Before and After: Real Cold Email Rewrites
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The difference between a deleted email and a replied-to one is usually these changes.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-3 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold text-neutral-400">Section</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-red-400">Before (Gets Deleted)</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">After (Gets Replies)</div>
              </div>
              {beforeAfter.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="px-6 py-4 text-sm font-bold text-neutral-800">{row.label}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm italic text-neutral-500">{row.bad}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm italic text-neutral-800">{row.good}</div>
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
              {v('aboutBio2', "Cold email audits are something I do in every outbound engagement. The most common finding: emails are too long, lead with a pitch, and ask for too much too soon. The fix is almost always the same — shorten it, personalize the first line, and replace the pitch with a specific problem hypothesis. Reply rates typically double within two weeks of making those changes.")}
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
              {v('ctaHeadline', "Want Me to Audit Your Cold Emails?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current outbound emails, identify the specific lines killing your reply rate, and rewrite them using the formula that consistently earns meetings.")}
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
