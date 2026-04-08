'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-04'
const CMS_SECTION = 'seoFractionalSalesLeadershipPrivateEquity'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FractionalSalesLeadershipPrivateEquityPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const pillars = [
    {
      number: '01',
      title: v('p1Title', 'Speed of deployment that matches PE timelines'),
      detail: v('p1Detail', "A typical full-time VP of Sales search takes four to six months from kickoff to start date. Add a 90-day ramp and you are nine months into a hold period before sales leadership is fully operational. For a PE firm working a three-to-five year hold with value creation targets, that is a significant portion of the runway gone before the first real initiative launches. A fractional sales leader is deployed in days, not months. Within the first week, they are reviewing the CRM, interviewing the sales team, and assessing pipeline health. Within 30 days, they have a diagnostic and a prioritized action plan. The speed of deployment is one of the most practical advantages in a PE context, not because the fractional leader works faster than a full-time hire would, but because there is no search, no notice period, and no ramp curve."),
      prompt: v('p1Prompt', "PE application: Use a fractional sales leader to close the gap between close and the start date of a permanent hire — or as a long-term solution when the company size and revenue stage do not yet justify a full-time VP."),
    },
    {
      number: '02',
      title: v('p2Title', 'Pre-acquisition sales diligence that goes beyond the numbers'),
      detail: v('p2Detail', "Revenue diligence in most PE transactions focuses on historical performance, customer concentration, and churn patterns. What it often misses is a qualitative assessment of the sales organization itself: how deals actually get closed, what the pipeline conversion rates look like at each stage, how dependent the revenue is on one or two salespeople or on the founder-CEO's relationships, and whether the CRM data is trustworthy enough to build a forecast from. A fractional sales leader with operating experience can assess these factors before a deal closes. That assessment changes what you underwrite. A business with strong historical revenue but a single-point-of-failure sales org and no documented process is a different investment than the numbers alone suggest. Bringing in a fractional sales leader for a focused two-to-four week diligence engagement gives the deal team a view into the sales organization that financial analysis alone cannot provide."),
      prompt: v('p2Prompt', "PE application: Engage a fractional sales leader as part of the pre-close diligence team to assess the sales org, CRM data integrity, pipeline quality, and key-person risk before the deal signs."),
    },
    {
      number: '03',
      title: v('p3Title', 'The 90-day post-acquisition sprint that sets the trajectory'),
      detail: v('p3Detail', "The first 90 days after a PE acquisition set the pace for everything that follows. Deals that were in the pipeline at close either advance or stall based on how the transition is managed. Key salespeople either stay and engage or begin looking at their options. The sales process either gets more consistent or more chaotic as new ownership introduces reporting requirements and targets the previous team was not used to. A fractional sales leader in the first 90 days focuses on three things: protecting existing pipeline from transition disruption, establishing the reporting cadence and CRM hygiene that allows PE-grade visibility into the sales org, and identifying the one or two process changes that will have the highest impact on revenue in the first full quarter. This is not a strategy engagement. It is an operational engagement with a specific outcome at day 90: a sales team that is running a documented process, a pipeline that reflects reality, and a reporting structure that the board can rely on."),
      prompt: v('p3Prompt', "PE application: Retain a fractional sales leader at close to manage the first 90 days of post-acquisition sales continuity while the new management team gets oriented and the full-time sales leadership hire is underway."),
    },
    {
      number: '04',
      title: v('p4Title', 'Interim sales leadership during management transitions'),
      detail: v('p4Detail', "PE-backed companies go through more leadership transitions than founder-owned businesses. A new CEO comes in and the VP of Sales who was comfortable with the previous owner leaves. A sales leader is let go because their style does not fit the new targets. A VP of Sales is promoted to a larger role within the portfolio and the backfill takes six months to complete. In each of these situations, the fractional sales leader fills the gap without the revenue disruption that typically follows a leadership vacancy. The difference between a fractional leader and a sales consultant in this context is accountability. A fractional leader runs the team, manages the pipeline reviews, makes the hiring recommendations, and owns the number during the transition period. A consultant delivers recommendations and moves on. When the permanent hire starts, the fractional leader provides a structured handoff: documented processes, a current pipeline assessment, a team review, and a briefing on the issues that matter most in the first 90 days."),
      prompt: v('p4Prompt', "PE application: Use a fractional sales leader as the bridge hire during any planned or unplanned sales leadership gap — and insist on a structured handoff document before the fractional engagement ends."),
    },
    {
      number: '05',
      title: v('p5Title', 'Building an exit-ready sales organization'),
      detail: v('p5Detail', "When a PE firm prepares a portfolio company for exit, the sales organization is scrutinized by every strategic and financial buyer. The questions a sophisticated buyer asks are the same ones a fractional sales leader answers: Is the revenue repeatable or is it relationship-dependent? Can the sales process be taught to new salespeople without the current team? Is the pipeline forecast trustworthy or is it built on optimism? Does the CRM capture enough data to understand where deals come from and why they close? Is any single salesperson or customer relationship carrying disproportionate revenue? A portfolio company that can answer yes to all of these questions commands a higher multiple and requires less seller negotiation during diligence. The fractional sales leader's job in exit preparation is to make the sales organization legible to a buyer — documented, measurable, and not dependent on any one person to function."),
      prompt: v('p5Prompt', "PE application: Begin exit preparation for the sales organization 12 to 18 months before the expected exit window. The work takes time to show up in the metrics that buyers examine most closely."),
    },
  ]

  const comparison = [
    {
      bad: v('comp1Bad', 'Sales leadership gap of 4 to 9 months while a full-time VP is recruited and ramped'),
      good: v('comp1Good', 'Fractional leader deployed within days, operational within the first week'),
    },
    {
      bad: v('comp2Bad', 'Revenue diligence limited to historical financials with no qualitative sales org assessment'),
      good: v('comp2Good', 'Pre-close sales diligence covers pipeline quality, CRM integrity, and key-person risk'),
    },
    {
      bad: v('comp3Bad', 'First 90 days post-acquisition absorbed by transition chaos with no clear sales owner'),
      good: v('comp3Good', 'First 90 days protected by a fractional leader running pipeline reviews and setting process'),
    },
    {
      bad: v('comp4Bad', 'Management transitions create revenue disruption that takes quarters to recover from'),
      good: v('comp4Good', 'Fractional leader bridges the gap with full accountability for the number during the transition'),
    },
    {
      bad: v('comp5Bad', 'Sales org enters exit diligence with undocumented process and buyer-facing risk factors'),
      good: v('comp5Good', 'Sales org is legible to buyers: documented, measurable, and not person-dependent'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How does a fractional sales leader fit into a PE firm's value creation plan?",
      a: "A fractional sales leader is most useful in a value creation plan at the points where sales execution is a primary driver of value: immediately post-acquisition to protect pipeline and establish process, during any leadership gap to maintain revenue continuity, and in the 12 to 18 months before exit to make the sales organization readable to buyers. In each of these phases, the fractional leader provides operating capacity that the PE firm's deal team cannot provide directly and that a consultant engagement does not cover. The fractional leader is not a strategic advisor. They run the sales team and are accountable for outcomes during the engagement period.",
    },
    {
      q: "At what point in a PE hold should a fractional sales leader be engaged?",
      a: "The three highest-value entry points are at close, during a leadership transition, and 12 to 18 months before the exit window. At close, the fractional leader protects existing pipeline and establishes the operating cadence. During a leadership transition, they maintain accountability for the number while the permanent hire is recruited. Before exit, they build the documentation, CRM hygiene, and process consistency that buyers examine in diligence. Each of these is a distinct engagement with different objectives. Some portfolio companies use a fractional sales leader across the full hold period as a way to maintain senior sales leadership without the cost and commitment of a full-time VP hire.",
    },
    {
      q: "How does a fractional sales leader work with an existing management team in a portfolio company?",
      a: "The relationship depends on what is in place. If the portfolio company has a CEO who is managing sales directly, the fractional leader takes accountability for sales off the CEO's plate and builds the system that allows the CEO to step back. If there is already a sales team in place, the fractional leader manages that team and is accountable for their performance. If there is a VP of Sales who needs support or coaching, the fractional leader can work alongside them in a defined role. The structure is agreed at the start of the engagement and documented so that everyone on the management team understands the accountability and the reporting line.",
    },
    {
      q: "Can a fractional sales leader support pre-acquisition sales diligence?",
      a: "Yes, and it is one of the most underleveraged applications of fractional sales leadership in the PE context. A two-to-four week diligence engagement can cover: how deals are actually generated and closed, whether the pipeline at close is real or optimistic, how dependent the revenue is on specific individuals or relationships, whether the CRM data is accurate enough to support post-acquisition forecasting, and what the realistic ramp time for new salespeople looks like. This is different from the financial revenue analysis that a typical diligence team performs. It is a qualitative assessment of the sales organization that changes what you underwrite and what you plan for in the first 90 days.",
    },
    {
      q: "How does a fractional sales leader help prepare a portfolio company for exit?",
      a: "Exit preparation for a sales organization focuses on legibility. Buyers want to see that revenue is repeatable and not person-dependent, that the sales process is documented and teachable, that the CRM captures deal-level data that supports a credible forecast, and that no single customer relationship or salesperson carries disproportionate risk. The fractional sales leader works backward from the exit date to identify which of these factors need the most work and builds a 12 to 18 month plan to address them. The goal is not just to improve the sales org — it is to make the improvements visible in the metrics and documentation that a buyer will examine during diligence.",
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
        headline: 'Fractional Sales Leadership for Private Equity',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/fractional-sales-leadership-for-private-equity',
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
              Private Equity
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Fractional Sales Leadership for Private Equity')}
              <span className="block text-blue-400">{v('heroAccent', 'Accelerate Value Creation. Protect Revenue. Prepare for Exit.')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "PE-backed companies and portfolio companies need sales leadership that moves at PE speed. A full-time VP of Sales search takes six months. A fractional sales leader is operational in days — with full accountability for the number during the engagement.")}
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
                href="/what-does-fractional-sales-leader-do"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What a fractional sales leader does week to week →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Pillars */}
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
              {v('sectionPillarsHeading', '5 Ways a Fractional Sales Leader Creates Value in a PE Portfolio')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionPillarsSubheading', "Each one addresses a specific point in the PE hold cycle where sales leadership is the difference between hitting the value creation plan and missing it.")}
            </motion.p>
            <div className="space-y-8">
              {pillars.map((item, i) => (
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
                    <span className="font-bold text-blue-800">PE application: </span>
                    <span className="text-blue-800">{item.prompt}</span>
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
              {v('seoPara1', "The private equity context puts specific demands on sales leadership that a standard fractional engagement is not always structured to meet. PE firms operate on compressed timelines with defined milestones. They need visibility into the sales organization from the first board meeting. They need revenue to be predictable enough to underwrite the value creation plan. A fractional sales leader who works exclusively with founder-led businesses may not have the operating discipline or reporting fluency to meet those expectations. The right fractional leader for a PE context has experience working within portfolio company environments, understands what boards and deal teams need to see, and can translate sales performance into the language of a value creation plan.")}
            </motion.p>
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The most common failure pattern in PE-backed company sales is not hiring the wrong person. It is leaving the sales leadership role unfilled for too long during a transition. Every month without accountable sales leadership is a month of pipeline that was not managed, deals that drifted, and salespeople who started quietly reassessing their options. The cost of that gap compounds quickly. A fractional sales leader closes that gap immediately and holds the number while the permanent hire is recruited, assessed, and onboarded.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara3', "For portfolio companies at the lower end of the PE size range — typically businesses generating $5M to $25M in revenue — a full-time VP of Sales is often more overhead than the business can efficiently absorb while also funding the growth plan. A fractional sales leader at this stage delivers the same strategic and operational capacity at a fraction of the all-in cost, and can step back or hand off cleanly when the business has grown to the point where a full-time hire is the right answer.")} {' '}
              <Link href="/fractional-sales-leader-first-90-days" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What the first 90 days with a fractional sales leader look like →
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
              {v('sectionCompHeading', 'Without Fractional Sales Leadership vs. With It')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', "These are the five situations where the presence or absence of fractional sales leadership most directly affects value creation in a PE portfolio.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold text-red-400">Without Fractional Sales Leadership</div>
                <div className="px-6 py-4 font-bold text-green-400">With Fractional Sales Leadership</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.bad}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.good}</p>
                  </div>
                </motion.div>
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
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership practice has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I work with PE-backed companies and portfolio company management teams on the same problems I address with founder-led businesses: building a sales process that does not depend on any one person, making the pipeline visible and measurable, and installing the management discipline that lets the CEO or board see what is happening in sales without needing to be inside every deal. In a PE context, those problems have a defined timeline and a defined set of stakeholders who need to see results. I work within that structure and deliver the reporting and accountability that PE firms expect from any operating partner engagement.")}
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
              {v('ctaHeadline', "Your Hold Period Is Running. Let's Make Sure Sales Is Not the Bottleneck.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess where fractional sales leadership fits in your value creation plan, what the engagement would look like, and what the realistic timeline to impact is — whether you are at close, mid-hold, or preparing for exit.")}
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
