'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, AlertCircle } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHubSpotSmallSalesTeam'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const setupSteps = [
  { step: '1. Define Your Pipeline Stages', detail: 'Before touching HubSpot, map your actual sales stages on paper. Don\'t use HubSpot\'s defaults — build stages that match how your deals actually move. Five to seven stages is the right range for most small teams.' },
  { step: '2. Set Up Contact and Company Properties', detail: 'Create the custom properties you need to track your ICP criteria: industry, company size, lead source, and any qualifying fields. Keep it lean — if you won\'t filter or report on it, don\'t create it.' },
  { step: '3. Configure Deal Properties', detail: 'Add deal properties for the metrics that matter: deal source, competitor mentioned, close reason (won and lost), and any qualification criteria specific to your process.' },
  { step: '4. Build Your Email Sequences', detail: 'Set up your outreach sequences using HubSpot\'s sequences tool. Start with your core cold outreach and follow-up sequence. Templates should be personalized enough to not look automated.' },
  { step: '5. Create Views and Reports', detail: 'Build a "My Open Deals by Stage" view for daily rep use and a "Pipeline by Rep" view for weekly reviews. Add a simple close rate report by rep and by deal source from day one.' },
  { step: '6. Define Data Entry Standards', detail: 'Write a one-page CRM hygiene guide: what gets logged, when, and by whom. No system works if reps only log wins. Enforce consistent data entry before you build anything on top of it.' },
]

const commonMistakes = [
  { mistake: 'Using default pipeline stages', fix: 'Build stages that match your actual sales motion — not HubSpot\'s generic template.' },
  { mistake: 'Adding too many fields', fix: 'Every unused field erodes adoption. Create only what you\'ll actively use to filter, coach, or report.' },
  { mistake: 'Skipping data entry standards', fix: 'Garbage in, garbage out. Define what gets logged before you build reports on top of it.' },
  { mistake: 'Buying the full suite too early', fix: 'Start with the free CRM. Add Sales Hub Starter when your team hits 3+ reps and you need sequences.' },
]

const faqs = [
  {
    q: 'Is HubSpot the right CRM for a small sales team?',
    a: 'For most teams under $10M ARR with fewer than 5 reps, yes. HubSpot\'s free CRM is genuinely capable, the UI is intuitive enough that reps actually use it, and it scales into paid tiers cleanly. Salesforce is overkill until you have 5+ reps and a dedicated admin.',
  },
  {
    q: 'How long does it take to set up HubSpot for a small team?',
    a: 'A clean, functional setup takes 1–2 days of focused work. Pipeline stages, contact/deal properties, sequences, and basic reports. Where companies waste time is over-engineering it — building complex automations and dashboards before anyone is using the basics consistently.',
  },
  {
    q: 'What HubSpot tier do I actually need?',
    a: 'Start with the free CRM. It\'s more capable than most small teams use. Add Sales Hub Starter ($15–$20/seat/month) when you need sequences and email tracking. Don\'t buy Sales Hub Pro until you have a dedicated ops person to manage it.',
  },
  {
    q: 'How do I get my reps to actually use HubSpot?',
    a: 'Keep the setup simple enough that logging takes less than 2 minutes per interaction. Run pipeline reviews out of HubSpot — if reps know you\'re reviewing their data, they\'ll enter it. Never accept "it\'s in my notes" as a substitute for CRM entries.',
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
      headline: 'How to Set Up HubSpot for a Small Sales Team',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-set-up-hubspot-for-small-sales-team',
    },
  ],
}

export default function HubSpotSmallSalesTeamPage() {
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
              CRM & Tools
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Set Up HubSpot')}
              <span className="block text-blue-400">{v('heroAccent', 'for a Small Sales Team')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most small teams set up HubSpot wrong — too complex, too many fields, no data standards. Here's the 6-step setup that actually gets used.")}
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
                href="/how-to-build-a-sales-process-after-1m-arr"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Build a sales process first →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Setup Steps */}
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
              The 6-Step HubSpot Setup for Small Teams
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Do these in order. Don't skip to automation until the fundamentals are working.
            </motion.p>
            <div className="space-y-4">
              {setupSteps.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <span className="font-bold text-neutral-900">{item.step}: </span>
                    <span className="text-neutral-700">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes */}
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
              Common HubSpot Setup Mistakes
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Most small teams make at least two of these — usually on day one.
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-2">
              {commonMistakes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                    <span className="font-bold text-neutral-900">{item.mistake}</span>
                  </div>
                  <p className="text-sm text-neutral-600">{item.fix}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center text-neutral-600">
              <p>
                Need to forecast revenue from your pipeline?{' '}
                <Link href="/sales-forecasting-for-small-business" className="text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900">
                  Sales forecasting for small business →
                </Link>
              </p>
            </motion.div>
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
              {v('aboutBio2', "I've set up CRM systems for dozens of small sales teams — and cleaned up the mess left by over-engineered setups that nobody used. The right CRM setup is simple, consistent, and built around how your team actually sells.")}
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
              {v('ctaHeadline', "Let's Get Your CRM Working for Your Team")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your current HubSpot setup and tell you exactly what to fix — and what to stop doing.")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                Book a Working Session
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
