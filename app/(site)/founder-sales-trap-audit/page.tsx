'use client'

import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'
import FounderSalesTrapAudit from '@/components/FounderSalesTrapAudit'

const CMS_SECTION = 'seoFounderSalesTrapAudit'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FounderSalesTrapAuditPage() {
  const { v } = useCmsSection(CMS_SECTION)

  const benefits = [
    {
      title: v('benefit1Title', 'Your Founder Sales Trap Score'),
      text: v('benefit1Text', 'A 0–20 score that tells you exactly how dependent your revenue is on you personally — not a vague feeling, a number.'),
    },
    {
      title: v('benefit2Title', 'Where Your System Is Missing'),
      text: v('benefit2Text', 'The audit covers the five systems every sales team needs: founder dependency, playbook, pipeline discipline, hiring readiness, and accountability.'),
    },
    {
      title: v('benefit3Title', 'What to Do Next'),
      text: v('benefit3Text', 'A straight answer for your score band — what to build first, what to skip, and why a $250K VP of Sales hire is almost never the fix.'),
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'The Founder Sales Trap Self-Audit',
    description:
      '20 yes/no questions to find out if you are the bottleneck holding back your own sales growth. Free self-audit for B2B founders at $1M–$10M ARR.',
    url: 'https://louiebernstein.com/founder-sales-trap-audit',
    educationalLevel: 'Business Decision Makers',
    audience: {
      '@type': 'Audience',
      audienceType: 'B2B Founders and CEOs',
    },
    publisher: {
      '@type': 'Person',
      name: 'Louie Bernstein',
      url: 'https://louiebernstein.com',
    },
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
              {v('heroTag', 'Free 3-Minute Self-Audit for B2B Founders')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'The Founder Sales Trap')}
              <span className="block text-blue-400">{v('heroAccent', 'Self-Audit')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', '20 questions to find out if you are the bottleneck holding back your own sales growth.')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', 'If every deal still runs through you, your revenue is capped at your personal bandwidth. Answer 20 yes/no questions and get your score, what it means, and exactly which systems to build next.')}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <a
                href="#audit"
                className="inline-block rounded-lg bg-blue-700 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-800"
              >
                {v('heroCtaText', 'Start the Free Self-Audit')}
              </a>
              <span className="text-base font-semibold text-neutral-300">
                {v('heroCtaNote', 'No credit card. Instant results.')}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* What you'll find out */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('benefitsHeading', 'What You Get in 3 Minutes')}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-7"
                >
                  <p className="mb-2 font-serif text-4xl font-bold text-blue-700">{`0${i + 1}`}</p>
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{b.title}</h3>
                  <p className="leading-relaxed text-neutral-700">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The audit itself */}
      <section id="audit" className="scroll-mt-24 bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <FounderSalesTrapAudit />
          </div>
        </div>
      </section>
    </>
  )
}
