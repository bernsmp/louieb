'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHireOneOrTwoSalespeople'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const whyOneFails = [
  {
    title: 'No Baseline for Performance',
    body: 'With one rep, you have no idea if their results are good, bad, or average. One rep closes 3 deals a month — is that great? Terrible? You have nothing to compare against. Two reps give you a benchmark.',
  },
  {
    title: 'The Lonely Rep Problem',
    body: 'Sales is a high-rejection job. Reps who work alone with no peers to commiserate with, compete against, or learn from burn out faster. Solo reps have higher attrition — and replacing them costs you months.',
  },
  {
    title: 'You Can\'t Tell if It\'s the Person or the Process',
    body: 'If one rep is struggling, you don\'t know if the process is broken or the person is wrong. Two reps running the same process tells you which problem you have.',
  },
  {
    title: 'No Redundancy During Ramp',
    body: 'Every rep takes 60–90 days to ramp. If your one rep is slow to start, you\'ve lost a quarter waiting. Two reps in parallel cuts your risk — if one struggles, the other can still hit.',
  },
]

const whyTwoWorks = [
  {
    title: 'Instant Benchmarking',
    body: 'Two reps running the same process gives you real performance data immediately. You can see who is ahead, why, and apply the best techniques from each to improve both.',
  },
  {
    title: 'Healthy Competition',
    body: 'Reps compete. It\'s in their nature. Two reps on the same team push each other in ways no manager can. Leaderboards, friendly wagers, peer pressure — it all drives performance.',
  },
  {
    title: 'Process Validation at 2x Speed',
    body: 'Two reps working the same playbook will surface its gaps twice as fast. You\'ll know within 60 days what\'s working and what needs to change — not 90 days in with half the data.',
  },
  {
    title: 'Lower Individual Risk',
    body: 'If one rep doesn\'t work out, you\'re not back to zero. The other rep maintains momentum while you backfill. One-rep shops grind to a halt when the hire doesn\'t work.',
  },
]

const whenOneMakesSense = [
  'Your ACV is very high ($50K+) and deal volume is naturally low',
  'You have very limited budget and can only support one rep',
  'You\'re testing a new segment or market where deal flow is unproven',
  'Your sales cycle is 6+ months and you need patience before scaling',
]

const faqs = [
  {
    q: 'Is hiring two reps at once really affordable for an early-stage company?',
    a: 'It depends on your ACV. If your average deal is $10K and you can realistically expect 2 reps to close 3 deals/month each, that\'s $60K/month in new revenue against $20K–$25K/month in rep costs. The math works. Run it for your actual numbers — if the ROI isn\'t there for two, one may be right for now.',
  },
  {
    q: 'Should both reps be the same profile?',
    a: 'Generally yes for your first cohort. You want apples-to-apples comparison. Same target market, same ICP, same process. Once you\'ve validated what works, you can diversify — but early on, consistency is what gives you useful data.',
  },
  {
    q: 'What if one rep outperforms the other dramatically?',
    a: 'That\'s valuable. Study the top performer: what are they doing differently? Better questions? Different objection handling? More disciplined follow-up? Extract that and systematize it. That knowledge is worth more than the difference in quota attainment.',
  },
  {
    q: 'We hired one rep and it didn\'t work. Should we try two next time?',
    a: 'Not necessarily. First understand why the one rep didn\'t work. If the process was unclear, the ICP was wrong, or there wasn\'t enough pipeline, two reps will just fail twice as fast. Fix the foundation, then consider the two-rep approach.',
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
      headline: 'Should You Hire One Salesperson or Two? The Answer Might Surprise You.',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/hire-one-salesperson-or-two',
    },
  ],
}

export default function HireOneOrTwoSalespeopleePage() {
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
              Sales Hiring
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Should You Hire One Salesperson or Two?')}
              <span className="block text-blue-400">{v('heroAccent', 'The Answer Might Surprise You')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders default to hiring one rep to \"test the waters.\" That instinct is wrong. Here's why two reps give you better data, lower risk, and faster results.")}
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
                href="/how-to-hire-first-sales-rep"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to hire your first sales rep →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Why One Rep Often Fails */}
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
              Why Hiring One Rep Is Riskier Than It Looks
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              One-rep hiring feels conservative. In practice, it creates four problems most founders don't anticipate.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {whyOneFails.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-700">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Two Works */}
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
              Why Two Reps Is the Smarter First Hire
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Two reps costs more upfront. It de-risks the experiment, accelerates learning, and gives you better outcomes faster.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {whyTwoWorks.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-blue-900">{item.title}</h3>
                  <p className="text-blue-800">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              The two-rep principle runs counter to the conventional startup wisdom of "hire one, see if it works, then scale." That approach made more sense when hiring was slower and cost-per-hire was higher. Today, two mid-level reps hired in the same month costs roughly $160K–$200K annually — an investment that pays for itself quickly if your ACV is above $10K and your process is sound. More importantly, it gets you to a real answer 2x faster.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The founders who struggle most with sales hiring are the ones making decisions from a sample size of one. They can't tell if the rep failed or if the process failed. Two reps running the same system gives you the data to answer that question with confidence — and to make your next hire from a position of knowledge, not hope. For a full picture of how to structure your early sales team,{' '}
              <Link href="/build-sales-team-after-1m-arr" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read how to build a sales team after $1M ARR →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* When One Makes Sense */}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              When One Rep Does Make Sense
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              The two-rep principle isn't universal. Here are the cases where starting with one is actually right.
            </motion.p>
            <div className="space-y-3">
              {whenOneMakesSense.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4"
                >
                  <div className="mt-0.5 shrink-0 text-sm font-bold text-blue-700">{i + 1}.</div>
                  <p className="text-neutral-700">{item}</p>
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
              {v('aboutBio2', "The two-rep hiring principle is something I've recommended to founders for years — and watched it change outcomes every time. It's not just a theory. It's the pattern I've seen work repeatedly at the $1M–$5M ARR stage when founders commit to building their sales team the right way.")}
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
              {v('ctaHeadline', "Let's Plan Your First Sales Hire Together")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can help you decide whether to hire one rep or two — and exactly what profile to hire for your specific market and stage.")}
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
