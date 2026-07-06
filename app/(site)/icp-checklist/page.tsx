'use client'

import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'
import IcpClarityChecklist from '@/components/IcpClarityChecklist'

const CMS_SECTION = 'seoIcpChecklist'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function IcpChecklistPage() {
  const { v } = useCmsSection(CMS_SECTION)

  const benefits = [
    {
      title: v('benefit1Title', 'Your ICP Clarity Score'),
      text: v('benefit1Text', 'A 0–15 score that tells you whether you have a real Ideal Customer Profile — or a hunch that lives in your head.'),
    },
    {
      title: v('benefit2Title', 'Where the Filter Leaks'),
      text: v('benefit2Text', 'The checklist covers the three tests of a working ICP: is it written down, is it built on evidence from closed deals, and is it actually used by your team and your CRM.'),
    },
    {
      title: v('benefit3Title', 'What to Fix First'),
      text: v('benefit3Text', 'A straight answer for your score: what to build next, using data you already have sitting in your closed-won deals.'),
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'The ICP Clarity Checklist',
    description:
      '15 checks to find out if you actually know who your best customer is. Free checklist for B2B founders at $1M–$10M ARR.',
    url: 'https://louiebernstein.com/icp-checklist',
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
              {v('heroTag', 'Free 2-Minute Checklist for B2B Founders')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'The ICP Clarity')}
              <span className="block text-blue-400">{v('heroAccent', 'Checklist')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', '15 checks to find out if you actually know who your best customer is.')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', 'Deals stall, cycles drag, and reps chase prospects that never close — usually because the Ideal Customer Profile lives in the founder\'s head. Take 15 yes/no checks and get your score, where the filter leaks, and what to fix first.')}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <a
                href="#checklist"
                className="inline-block rounded-lg bg-blue-700 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-800"
              >
                {v('heroCtaText', 'Start the Free Checklist')}
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
              {v('benefitsHeading', 'What You Get in 2 Minutes')}
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

      {/* The checklist itself */}
      <section id="checklist" className="scroll-mt-24 bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <IcpClarityChecklist />
          </div>
        </div>
      </section>
    </>
  )
}
