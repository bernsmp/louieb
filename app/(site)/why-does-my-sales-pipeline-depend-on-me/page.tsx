'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoFounderPipelineDependency'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FounderPipelineDependencyPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const reasons = [
    {
      number: '01',
      title: v('reason1Title', 'Your Relationships Are Carrying Work That Systems Should Do'),
      detail: v('reason1Detail', "In the early days, your network was your competitive advantage. You called people you knew, and deals opened. That worked from $0 to $1M because relationship capital was the fastest path to first revenue. The problem is that relationships don't scale. Your network has finite reach. When you've saturated it, pipeline generation stalls — and no salesperson you hire can borrow your rolodex."),
      fix: v('reason1Fix', "Map every closed-won deal from the last 18 months. Count how many started because a buyer knew you personally versus responded to a systematic outreach effort. If more than half trace back to your personal relationships, you don't have a pipeline — you have a contact list."),
    },
    {
      number: '02',
      title: v('reason2Title', "You're the Only Person Who Knows What a Real Deal Looks Like"),
      detail: v('reason2Detail', "Most founders have a mental model of what a qualified opportunity looks like — but they've never written it down. That means every deal evaluation runs through the founder's intuition. Your salespeople can't qualify properly because the criteria live in your head, not in a shared system. Deals that should be disqualified stay in the pipeline because no one has permission to say no."),
      fix: v('reason2Fix', "Write out your three hard criteria for a qualified opportunity: company type, trigger event, and minimum budget. Add them to your CRM as required fields for Stage 1. Now anyone can run the filter — not just you."),
    },
    {
      number: '03',
      title: v('reason3Title', "Every Big Deal Still Needs You in the Room"),
      detail: v('reason3Detail', "Even if you've hired salespeople, you probably get pulled in for the final meetings. The enterprise prospect wants to meet 'the founder.' The deal at risk needs your credibility. The negotiation requires someone with authority. What looks like relationship selling is actually a structural problem: your team can generate interest, but they can't close without you. That creates a ceiling on how much revenue you can produce."),
      fix: v('reason3Fix', "Track the last 12 closed-won deals and mark every touchpoint that involved you. If you appear in more than 60% of closes, your team isn't actually selling. They're setting up meetings for you."),
    },
    {
      number: '04',
      title: v('reason4Title', "You Have No Written Process, So Only You Can Run It"),
      detail: v('reason4Detail', "Founder-built sales processes live in the founder's head. The stages are informal, the criteria are instinctive, and the messaging evolved from a thousand customer conversations. That institutional knowledge is real and valuable. It's also invisible to anyone else. A salesperson you hire can't replicate a process they can't read. So they default to their own instincts — which don't match yours."),
      fix: v('reason4Fix', "Before your next hire, document every stage of your sales process including what the buyer must do or say to advance to the next stage. If you can't write it down, you don't have a process yet — you have a habit."),
    },
    {
      number: '05',
      title: v('reason5Title', "No One Is Accountable to the Pipeline Number Except You"),
      detail: v('reason5Detail', "Accountability requires a standard, a measurement, and a consequence for missing both. In founder-led sales, the standard is whatever the founder knows the pipeline should look like. The measurement is informal. The consequence is the founder doing it themselves when it falls short. This is not a team problem — it is a system design problem. When the only person accountable to the pipeline is the founder, the pipeline depends on the founder."),
      fix: v('reason5Fix', "Establish a weekly pipeline review with a minimum coverage target. Every salesperson should own a specific pipeline number — not a call activity metric, but a dollar value of qualified pipeline. If the number isn't there, the review surfaces it before the quarter is over."),
    },
  ]

  const comparisonRows = [
    {
      dependent: v('compare1Dependent', 'Pipeline slows when the founder travels'),
      system: v('compare1System', 'Pipeline runs on scheduled, systematic inputs'),
    },
    {
      dependent: v('compare2Dependent', 'Deals require founder involvement to close'),
      system: v('compare2System', 'Salespeople close using a documented process'),
    },
    {
      dependent: v('compare3Dependent', 'Qualification happens in the founder\'s head'),
      system: v('compare3System', 'ICP criteria live in the CRM as required fields'),
    },
    {
      dependent: v('compare4Dependent', 'Revenue forecast is an educated guess'),
      system: v('compare4System', 'Forecast is built on tracked stage close rates'),
    },
    {
      dependent: v('compare5Dependent', 'New salespeople fail to replicate founder results'),
      system: v('compare5System', 'New salespeople follow a written Sales Playbook'),
    },
    {
      dependent: v('compare6Dependent', 'Growth is limited by the founder\'s capacity'),
      system: v('compare6System', 'Growth is limited by team size and system quality'),
    },
  ]

  const defaultFaqs = [
    {
      q: "Why does pipeline generation stop when a founder steps back?",
      a: "Because the pipeline was built on the founder's relationships, instincts, and credibility — none of which transfer automatically to a new hire. When the founder steps back, those inputs stop immediately. Pipeline generation that depends on any one person is a structural risk, not a performance problem. The fix is building systematic inputs — outbound sequences, referral programs, inbound content — that run without the founder's personal involvement.",
    },
    {
      q: "Can hiring a salesperson fix my pipeline dependency problem?",
      a: "Not on its own. If the pipeline depends on the founder, hiring a salesperson doesn't change the structure — it adds a person to a broken system. The new salesperson will fail to replicate founder success, and the founder will conclude that good salespeople are impossible to find. The real fix is building a documented process, a clear ICP, and a pipeline accountability system before adding headcount.",
    },
    {
      q: "How long does it take to build a pipeline that doesn't depend on the founder?",
      a: "With the right structure in place, most founders see meaningful change within 90 days. The first 30 days are spent documenting what exists and building the qualification criteria. Days 30 to 60 establish the pipeline review cadence and salesperson accountability. By day 90, the pipeline is running on system-driven inputs and the founder has stepped back from day-to-day deal involvement.",
    },
    {
      q: "What is founder pipeline dependency actually costing me?",
      a: "The most direct cost is a ceiling on revenue growth. If every deal requires the founder's involvement, revenue is limited by the founder's available hours. A second cost is business value: companies with founder-dependent pipelines sell at lower multiples because buyers see the revenue as tied to a single person. A third cost is salesperson turnover — when salespeople can't succeed without the founder in every deal, the best ones leave.",
    },
    {
      q: "What should I do if my pipeline is completely founder-dependent right now?",
      a: "Start with a pipeline audit. Map every deal in your CRM and identify which ones require your personal involvement to move forward. That map shows you exactly where the dependency is concentrated. Then build the qualification criteria and a written stage progression. Both take less than a week to draft. A fractional sales leader can run this process with you and install the accountability system that keeps the pipeline moving after you've stepped back.",
    },
  ]

  const displayFaqs = cmsfaqs(5, defaultFaqs)

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
        headline: 'Why Does My Sales Pipeline Depend Entirely on Me?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/why-does-my-sales-pipeline-depend-on-me',
        datePublished: '2026-04-10',
        publisher: {
          '@type': 'Organization',
          name: 'Louie Bernstein',
          logo: { '@type': 'ImageObject', url: 'https://louiebernstein.com/logo/og-image.png' },
        },
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
              {v('heroTag', 'Founder-Led Sales')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Why Does My Sales Pipeline')}
              <span className="block text-blue-400">{v('heroAccent', 'Depend Entirely on Me?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "If the deals slow when you travel, the problem is structure — not effort. Founder pipeline dependency isn't a hustle problem. It's a system problem. Here's what's causing it and how to fix it.")}
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
                href="/how-to-build-a-sales-pipeline"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to build a pipeline that fills itself →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Reasons */}
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
              {v('sectionReasonsHeading', '5 Reasons Your Pipeline Depends on You')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionReasonsSubheading', 'Each one is a structural gap — not a talent problem on your team.')}
            </motion.p>
            <div className="space-y-8">
              {reasons.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Diagnosis: </span>
                    <span className="text-blue-800">{item.fix}</span>
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
              {v('seoPara1', "The question \"why does my sales pipeline depend entirely on me?\" is one of the most common things I hear from founders between $1M and $5M ARR. It sounds like a motivation problem or a hiring problem. It isn't either. The pipeline depends on you because the systems that should replace your involvement don't exist yet. Your relationships opened the first doors. Your intuition qualified the first deals. Your credibility closed the first contracts. None of that was wrong — it was exactly the right approach to get from zero to your first million. The problem is that none of it was designed to work without you.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The exit path from founder pipeline dependency isn't a new hire — it's a new system. A documented qualification process, a written Sales Playbook, a structured pipeline review, and a clear accountability standard. Once those exist, other people can run the pipeline without running everything through you. If you're trying to figure out where to start, a")}{' '}
              <Link href="/what-is-a-sales-audit" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                sales audit will show you exactly which dependency is costing you the most →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              {v('sectionCompareHeading', 'Founder-Dependent Pipeline vs. System-Driven Pipeline')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The difference is not effort. It is infrastructure.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white">
                  Founder-Dependent
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  System-Driven
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.dependent}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.system}
                  </div>
                </div>
              ))}
            </motion.div>
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
              {v('aboutBio2', "Founder pipeline dependency is the most common problem I find in the first week of every engagement. The pipeline isn't broken — it's built around you. My job is to rebuild it so it works without you in every deal. That's what makes revenue predictable and the business sellable.")}
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

      {/* Internal Links */}
      <section className="bg-neutral-50 py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="mb-6 font-serif text-xl font-bold text-neutral-900">
              Related Reading
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              <li>
                <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Get Out of Founder-Led Sales →
                </Link>
              </li>
              <li>
                <Link href="/what-is-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is Founder-Led Sales — and Why It Eventually Breaks →
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-a-sales-pipeline" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales Pipeline That Actually Fills Itself →
                </Link>
              </li>
            </motion.ul>
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
              {v('ctaHeadline', "Let's Map Your Pipeline Dependencies")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can identify exactly where your pipeline is bottlenecked on you — and outline the system changes that fix it.")}
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
