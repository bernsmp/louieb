'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhatBreaksFounderSelling'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function WhatBreaksFounderSellingPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const breakdowns = [
    {
      number: '01',
      title: v('break1Title', 'Pipeline Generation Collapses Within 30 Days'),
      detail: v('break1Detail', "The founder was the pipeline. Every relationship-sourced lead, every conference follow-up, every referral introduction ran through the founder. When the founder steps back, those inputs stop immediately. The salesperson you hired doesn't have the same network, doesn't have the same credibility, and doesn't have a systematic outbound process to replace what you were doing manually. The pipeline doesn't slow down — it stops."),
      fix: v('break1Fix', "Before stepping back, document every pipeline input you own and assign each one to a system or a person. Relationship referrals need a formal referral program. Conference outreach needs a sequence. Inbound leads need a response protocol. If these don't exist on paper before you leave, pipeline generation dies with your involvement."),
    },
    {
      number: '02',
      title: v('break2Title', 'Deals That Should Die Stay Open'),
      detail: v('break2Detail', "Founders qualify on instinct. They can tell in the first meeting whether a deal is real or not — based on patterns built over years of customer conversations. Salespeople who were hired and trained informally don't have those instincts, and they haven't been given written criteria to replace them. Without clear qualification standards, they keep every deal alive out of optimism and fear of delivering bad news. The pipeline fills with deals that will never close."),
      fix: v('break2Fix', "Write down the three things that make a deal qualified and the three things that disqualify one automatically. Add them to your CRM as required fields. Give your salespeople explicit permission to disqualify deals — and reward them for it."),
    },
    {
      number: '03',
      title: v('break3Title', 'Close Rate Drops Because the Founder Was the Closing Tool'),
      detail: v('break3Detail', "In many founder-led sales processes, the founder is the reason deals close. Buyers trust the founder. They feel confident because the person who built the product is the one selling it. When a salesperson takes over the final meetings, buyers often pull back — not because the product changed, but because the credibility they were buying into walked out the door. The close rate the founder achieved doesn't belong to the sales process. It belongs to the founder personally."),
      fix: v('break3Fix', "Build a case study library, a reference call program, and a written close framework before stepping back. These give salespeople the credibility infrastructure to close without the founder's personal authority in the room."),
    },
    {
      number: '04',
      title: v('break4Title', 'Revenue Forecast Goes From Educated Guess to Pure Fiction'),
      detail: v('break4Detail', "Founders who are close to every deal can estimate close probability with reasonable accuracy, even informally. When they step back, the sales team reports optimistic deal stages because they have no accountability standard and no historical close rate data by stage. The forecast looks fine at the start of the quarter and falls apart at the end. By the time the miss is visible, it's too late to recover the quarter."),
      fix: v('break4Fix', "Before stepping back, install stage exit criteria based on buyer actions — not seller activities. Track actual close rates by stage for at least two quarters. The forecast should be built on those rates, not on the salesperson's confidence level."),
    },
    {
      number: '05',
      title: v('break5Title', 'The Sales Team Loses Direction When the Founder Isn\'t Watching'),
      detail: v('break5Detail', "In founder-led sales, the team's accountability is often informal. The founder is in the deal, sees the work, and provides feedback in real time. When the founder steps back, that feedback loop disappears. The team doesn't know what 'good' looks like because it was never written down. Without a defined standard, a documented process, or a visible accountability system, salespeople default to their own habits — which often aren't the ones that close deals."),
      fix: v('break5Fix', "Install a weekly pipeline review before stepping back. Define what a qualified opportunity looks like in writing. Create a sales Accountability Document that specifies each salesperson's targets, the metrics used to evaluate them, and the review cadence. The Accountability Document replaces the informal oversight that exists when the founder is present in every deal."),
    },
  ]

  const comparisonRows = [
    {
      fail: v('compare1Fail', 'Step back and assume salespeople figure it out'),
      succeed: v('compare1Succeed', 'Install a written Sales Playbook before stepping back'),
    },
    {
      fail: v('compare2Fail', 'No documented qualification criteria'),
      succeed: v('compare2Succeed', 'ICP and disqualification criteria in the CRM as required fields'),
    },
    {
      fail: v('compare3Fail', 'No weekly review cadence or coverage targets'),
      succeed: v('compare3Succeed', 'Weekly pipeline review with minimum pipeline coverage targets'),
    },
    {
      fail: v('compare4Fail', 'Salespeople lack a closing framework'),
      succeed: v('compare4Succeed', 'Case study library and reference call program in place'),
    },
    {
      fail: v('compare5Fail', 'Revenue depends on the founder being present'),
      succeed: v('compare5Succeed', 'Revenue depends on a documented, repeatable process'),
    },
    {
      fail: v('compare6Fail', 'Founder forced back into sales after 60 days'),
      succeed: v('compare6Succeed', 'Clean handoff with metrics holding within 20% of baseline'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How long after a founder stops selling before problems show up?",
      a: "Pipeline problems show up in the first 30 days. Close rate and forecast accuracy problems show up in 45 to 60 days. Morale and direction problems become visible by the end of the first quarter. Most founders don't see the full scope of the breakdown until the first quarterly review — by which point two or three months of revenue have already been affected.",
    },
    {
      q: "Can I hand off sales to a salesperson I already have?",
      a: "Yes, if that salesperson has the tools to succeed without you. That means a documented Sales Playbook, written ICP and disqualification criteria, a formal pipeline review cadence, and a closing framework. Without those tools, even a talented salesperson will underperform — because the process lives in your head, not in a shared system.",
    },
    {
      q: "What should I build before stepping back from sales?",
      a: "Four things: a written Sales Playbook, an ICP with hard qualification criteria, a weekly pipeline accountability review, and a sales Accountability Document for each salesperson. These four items replace the informal oversight and institutional knowledge that exists when you're in every deal. Without them, the transition fails almost every time.",
    },
    {
      q: "How do I know if my sales team is ready for me to step back?",
      a: "Run a test. Step back for one month and track three metrics: new qualified opportunities added, deal progression through stages, and close rate. If all three hold within 20% of your personal baseline, the team has the infrastructure to run without you. If any one of them drops sharply, the system isn't ready — and adding pressure won't fix it.",
    },
    {
      q: "What role should a founder play in sales after stepping back?",
      a: "Founders who successfully exit selling typically move into three roles: providing strategic direction, supporting complex or high-value deals when necessary, and building company credibility through content and relationships. They stop being the primary closer and start being the brand. That transition only works when the operational sales system is strong enough to run without them in every deal.",
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
        headline: 'What Breaks First When a Founder Stops Selling?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/what-breaks-first-when-founder-stops-selling',
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
              {v('heroLine1', 'What Breaks First')}
              <span className="block text-blue-400">{v('heroAccent', 'When a Founder Stops Selling?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders find out what's fragile only after they step back from sales. By then, a quarter is already gone. Here's what breaks in the first 60 days — and what to build before the handoff so the transition sticks.")}
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
                href="/transition-out-of-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to transition without losing momentum →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Breakdowns */}
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
              {v('sectionBreaksHeading', 'The 5 Things That Break First')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionBreaksSubheading', 'All five are predictable. All five are preventable — if you build the right infrastructure before you step back.')}
            </motion.p>
            <div className="space-y-8">
              {breakdowns.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Fix Before You Leave: </span>
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
              {v('seoPara1', "The question \"what breaks first when a founder stops selling?\" has a factual answer, and it varies by business. In most cases, pipeline generation is the first failure because it is the most founder-dependent. The second failure is deal qualification. The third is close rate. All three typically happen within the first 60 days of the founder stepping back, which is why so many transition attempts get reversed: the founder leaves, the numbers drop, the board gets nervous, and the founder steps back in. The real problem is that the business was never built to run without them.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The founders who exit sales successfully don't step back and hope. They build the infrastructure first: the Sales Playbook, the qualification criteria, the pipeline accountability system, and the Accountability Document that defines what each salesperson is responsible for. That infrastructure takes 60 to 90 days to build and test. If you're trying to figure out how to")}{' '}
              <Link href="/transition-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                transition out of founder-led sales without losing momentum →
              </Link>
              {v('seoPara2b', ", start with the infrastructure.")}
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
              {v('sectionCompareHeading', 'Founders Who Fail the Transition vs. Founders Who Succeed')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The difference is rarely talent. It is almost always preparation.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  Transition Fails
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  Transition Succeeds
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.fail}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.succeed}
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
              {v('aboutBio2', "I've watched founders step back from sales dozens of times. The ones who fail almost always do the same thing: they leave before building the infrastructure. The ones who succeed built the Sales Playbook, the qualification criteria, and the accountability system before they walked out the door. My job is to build that infrastructure with you so the transition sticks.")}
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
                <Link href="/founder-led-sales-exit-checklist" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Founder-Led Sales Exit Checklist →
                </Link>
              </li>
              <li>
                <Link href="/how-to-replace-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Replace Founder-Led Sales Without Losing Momentum →
                </Link>
              </li>
              <li>
                <Link href="/what-is-a-sales-playbook" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is a Sales Playbook — and Does Your Business Have One? →
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
              {v('ctaHeadline', 'Build the Foundation Before You Step Back')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map what's currently holding your pipeline together, identify the three things most likely to break when you step back, and outline what needs to be built before the handoff.")}
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
