'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-05'
const CMS_SECTION = 'seoFiveBenefitsFslBeyondRevenue'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FiveBenefitsBeyondRevenuePage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "The real ROI of a Fractional Sales Leader is not the extra revenue — it is the founder hours back, the emotional bandwidth restored, and the durability of the system they leave behind."),
    v('takeaway2', "Your calendar is the first thing that changes. Founders who bring in a Fractional Sales Leader stop being the first call on every new inbound and reclaim 8 to 15 hours a week inside the first month."),
    v('takeaway3', "Monthly numbers stop running your mood. A real pipeline review and an evidence-based forecast replace last-week-of-the-month panic with something you can act on two weeks ahead."),
    v('takeaway4', "Bad sales hires get caught in week two or three — not month six. A Fractional Sales Leader has seen the pattern before, including the way you would quietly lie to yourself about the new rep."),
    v('takeaway5', "What remains at the end of the engagement is the most valuable benefit of all: a documented sales operating system that survives any single leader and is ready for the next stage of growth."),
  ]

  const benefits = [
    {
      number: '01',
      title: v('benefit1Title', 'Your Calendar Belongs to You Again'),
      detail: v('benefit1Detail', "A founder doing $1M to $10M ARR in founder-led sales is the bottleneck on every new conversation. Every inbound lead routes to you. Every \"quick demo\" lands on your calendar. Every contract negotiation waits on your final word. You did not start the company to be the first call — you started it because you had a vision for what the company should build. A Fractional Sales Leader takes the first-call work off your plate, runs discovery the way you would, and only pulls you in when the deal actually needs the founder in the room. In my first founder-led business in the 1980s I realized one month that I had taken 47 first calls and built nothing else. That was the month I learned the difference between being busy and being the founder. The calendar is the first place a Fractional Sales Leader earns their fee — and you feel it inside the first two weeks."),
      outcome: v('benefit1Outcome', "8 to 15 hours a week back. Time for product, fundraising, hiring, strategy — the work only you can do."),
    },
    {
      number: '02',
      title: v('benefit2Title', 'The Monthly Number Stops Running Your Mood'),
      detail: v('benefit2Detail', "Founder-led sales companies live and die one month at a time. The first three weeks feel fine. The last week of the month decides whether you sleep that weekend. The forecast is a feeling, not a number — and the feeling swings 50% in either direction in the last 72 hours. A Fractional Sales Leader installs a disciplined weekly pipeline review and an evidence-based forecast. You know on the 10th what is going to land by the 30th. You stop hoping; you start managing. I spent the better part of the 1990s riding the emotional whiplash of monthly revenue inside a company I bootstrapped to $40M. The day my team and I finally trusted a forecast was the day I started sleeping at night. Your nervous system is a leadership asset. Protect it like one."),
      outcome: v('benefit2Outcome', "A forecast you can trust two weeks early — and the end of the last-week-of-the-month emotional roller coaster."),
    },
    {
      number: '03',
      title: v('benefit3Title', 'You Catch Bad Hires Before They Cost You a Year'),
      detail: v('benefit3Detail', "Every founder I have ever met has hired the wrong salesperson at least once. The story rhymes: strong interview, a fine first month of ramping up, and six months later you realize the person sells just well enough to keep their job and nothing more. The all-in cost — base, ramp, lost pipeline, deals they did not close — is usually $250K to $400K before you finally let them go. A Fractional Sales Leader sees the warning signs in weeks, not months. They have hired this person before. They have fired them before. They know what week-three behavior predicts about month-six performance. I once kept a salesperson eleven months too long because I liked him personally. That mistake taught me that liking someone is not a hiring criterion — and it is the kind of mistake a Fractional Sales Leader will not let you make twice."),
      outcome: v('benefit3Outcome', "Hiring mistakes caught in week two or three — not month six — and the $250K hole avoided."),
    },
    {
      number: '04',
      title: v('benefit4Title', 'Board and Investor Conversations Get Easier'),
      detail: v('benefit4Detail', "Investors do not buy your hustle. They buy your ability to forecast. The fastest way to lose credibility in a board meeting is to walk in with a hockey-stick chart and no operating system behind it. The fastest way to gain credibility is the opposite: a clean pipeline, a forecast you have hit or beaten two quarters in a row, and a documented sales operating system any board member can audit on the spot. A Fractional Sales Leader installs the artifacts directors and investors are quietly looking for. In one engagement, a $3M ARR client of mine walked into a Series A pitch with a 90-day pipeline conversion report and a written playbook. The lead investor told her afterward it was the cleanest sales view he had seen at her stage. The round closed two weeks later. The pipeline did the talking."),
      outcome: v('benefit4Outcome', "Sales artifacts your board and investors trust — pipeline, forecast accuracy, written playbook, and an accountability document."),
    },
    {
      number: '05',
      title: v('benefit5Title', 'A Sales Operating System That Outlives Any One Leader'),
      detail: v('benefit5Detail', "The cruelest version of founder-led sales is when it becomes consultant-led sales — when you hire someone, they get the engine running, they leave, and the whole thing collapses with them. A real Fractional Sales Leader does the opposite. They install a system: a written Sales Playbook, a disciplined CRM, defined Ideal Customer Profile and qualification criteria, and an accountability rhythm. The system is the deliverable, not the person. When the engagement ends — whether that is at twelve months or three years — what remains is a sales operation your next VP of Sales, your next sales hire, or your acquirer can pick up and run. In 50 years of business I have seen more sales teams collapse around the departure of a single human than for any other reason. The fix is to build the machine that does not depend on a single human."),
      outcome: v('benefit5Outcome', "A documented, transferable sales operating system that survives leader changes, key-person risk, and the next stage of growth."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Founder takes every first call and every demo'),
      withIt: v('compare1With', 'Fractional Sales Leader runs first calls; founder only on key deals'),
    },
    {
      without: v('compare2Without', "Monthly number feels like a coin flip until the last week"),
      withIt: v('compare2With', 'Forecast known on the 10th of the month, within 10% accuracy'),
    },
    {
      without: v('compare3Without', 'Bad sales hires discovered at month six — after $250K is spent'),
      withIt: v('compare3With', 'Bad fits identified in week two or three, recoverable instantly'),
    },
    {
      without: v('compare4Without', 'Board meeting is a chart with no system behind it'),
      withIt: v('compare4With', 'Board sees pipeline, playbook, and accountability doc'),
    },
    {
      without: v('compare5Without', 'Sales depends on a single person — usually the founder'),
      withIt: v('compare5With', 'Sales runs on a system that outlives any one leader'),
    },
    {
      without: v('compare6Without', 'Founder is on 60-hour weeks just to keep deals moving'),
      withIt: v('compare6With', 'Founder reclaims 8 to 15 hours a week for work only they can do'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How do you measure success if the benefits are not revenue?",
      a: "We track them directly. Founder hours per week spent on first calls (target: under 5). Forecast accuracy on a 30-day horizon (target: within 10%). Time-to-decision on a new sales hire (target: 21 days, not six months). Sales artifacts in writing — playbook, CRM stages, ICP, accountability document. And revenue, because revenue follows the system. The five non-revenue benefits show up in the first 90 days; the revenue compounds in the second six months.",
    },
    {
      q: "How quickly do these benefits actually show up?",
      a: "The calendar benefit is week one — within two weeks I am running first calls. The forecast benefit takes 30 to 45 days, the time it takes to clean the CRM and install evidence-based stages. The hiring benefit shows up the next time you hire — or earlier, if you already have a rep who is underperforming. The board benefit takes about a quarter, long enough to have one full pipeline cycle in writing. The system benefit is the final deliverable at the end of the engagement.",
    },
    {
      q: "Will I lose deals if I am not on every call?",
      a: "Almost no founder believes this until they live it, but yes — you will close more deals, not fewer, once you are off the first-call rotation. The reason is structural: when the founder runs every conversation, every conversation becomes a founder conversation. Buyers expect the CEO, ask for the CEO, and refuse to engage with anyone else. When a Fractional Sales Leader runs discovery, the buyer learns from day one that there is a team. That team-shaped impression is what lets the company close deals you personally cannot.",
    },
    {
      q: "Is this only for companies that have stopped growing?",
      a: "No. The five non-revenue benefits matter most for companies that are growing — and growing in ways the founder cannot personally sustain. A flat company has time problems. A growing company has all the same time problems plus a forecast that cannot keep up, a hiring pace that outruns the founder's judgment, and a board that wants more transparency every quarter. The fractional model is for the companies in motion, not the companies stuck.",
    },
    {
      q: "What is the one benefit founders are most surprised by?",
      a: "The nervous-system one — the end of the monthly emotional whiplash. Most founders expect the revenue impact and they get it. What blindsides them is how different their life feels when they know on the 10th of the month what is going to land on the 30th. Sleep improves. Marriages improve. The 11 p.m. doom-spiral about whether the quarter will land disappears. None of that shows up on a P&L. All of it changes whether you actually want to keep running this company.",
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
        headline: 'What Are the 5 Benefits of a Fractional Sales Leader for a Small Business?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/5-benefits-fractional-sales-leader-beyond-revenue',
        datePublished: '2026-05-19',
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
      <HeroBackground accentColor="#0f766e" fillColor="rgba(15,118,110,0.3)" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-400"
            >
              {v('heroTag', 'Beyond Revenue')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Are the 5 Benefits of a Fractional Sales Leader')}
              <span className="block text-teal-400">{v('heroAccent', 'for a Small Business?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-teal-200 md:text-xl"
            >
              {v('heroH2', 'And these have nothing to do with revenue.')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M to $10M ARR founders stuck in founder-led sales, every fractional pitch promises more revenue. The bigger payoff is what happens to your calendar, your nervous system, your next hire, your next board meeting, and the system you leave behind.")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-teal-700 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-teal-800"
              >
                Talk to Louie — 30 Minutes
              </Link>
              <Link
                href="/fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What a Fractional Sales Leader actually does →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border-l-4 border-teal-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-sm font-bold uppercase tracking-widest text-teal-800"
            >
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              {takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-neutral-700">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 5 Benefits — numbered cards */}
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
              {v('sectionBenefitsHeading', 'The 5 Benefits That Have Nothing to Do With Revenue')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionBenefitsSubheading', "Every fractional sales pitch leads with revenue. These are the five reasons founders actually call me — and they show up before the revenue chart bends.")}
            </motion.p>
            <div className="space-y-8">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-teal-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-teal-100 bg-teal-50 px-4 py-3">
                    <span className="font-bold text-teal-800">What You Get: </span>
                    <span className="text-teal-800">{item.outcome}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraphs */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara1', "Most fractional sales leadership pitches focus on revenue — and revenue does grow, often by 30% to 60% inside the first year. But the founders I work with at $1M to $10M ARR rarely come to me because of the revenue number. They come because their calendar is broken, their nervous system is wrecked, their last sales hire failed, and their next board meeting is six weeks away. The revenue follows. The reason they hire a Fractional Sales Leader is everything underneath it.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "If you are at the stage where the bottleneck is you, the right next move is rarely a $400K full-time VP of Sales. For the math on why that hire usually fails too early, read")}{' '}
              <Link href="/250k-mistake-vp-sales-hire-too-early" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-900">
                The $250K Mistake: Hiring a VP of Sales Too Early →
              </Link>
              {v('seoPara2b', ". For the working pattern of an engagement — what a Fractional Sales Leader actually does week to week — start with")}{' '}
              <Link href="/what-does-fractional-sales-leader-do" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-900">
                What Does a Fractional Sales Leader Do Week to Week →
              </Link>
              {v('seoPara2c', ". The five benefits above are what shows up in the first 90 days — long before any chart bends.")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              {v('sectionCompareHeading', 'Founder-Led Sales vs. With a Fractional Sales Leader')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "Not a revenue table. A founder-life table — what changes the day you stop being the only one in every deal.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Founder-Led Sales (Status Quo)')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-teal-400">
                  {v('compareColRight', 'With a Fractional Sales Leader')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.without}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.withIt}
                  </div>
                </div>
              ))}
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
              {v('aboutBio1', "I'm Louie Bernstein. I have over 50 years in business — including 22 as a bootstrapped founder of a company I grew to $40M ARR. I have been a Fractional Sales Leader since 2017, working with $1M to $10M ARR founders who are stuck in founder-led sales and not ready for a full-time VP of Sales hire.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "Most of what I do is invisible inside the revenue chart. I free up the founder's calendar, install a forecast they can trust, catch hiring mistakes before they cost a year, get the pipeline ready for board scrutiny, and leave behind a sales operating system that does not depend on any single human. The revenue takes care of itself once those five things are in place.")}
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

      {/* Related Reading */}
      <section className="bg-white py-12 md:py-14">
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
                <Link href="/can-hiring-a-fractional-sales-leader-relieve-some-of-the-stress-of-doing-everything" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-900">
                  Can Hiring a Fractional Sales Leader Relieve the Stress of Doing Everything? →
                </Link>
              </li>
              <li>
                <Link href="/250k-mistake-vp-sales-hire-too-early" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-900">
                  The $250K Mistake: Hiring a VP of Sales Too Early →
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-900">
                  How to Build a Sales System Without Hiring a Full-Time VP of Sales →
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
              {v('ctaHeadline', 'Stop Counting Revenue. Start Counting the Hours You Get Back.')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map which of the five benefits you would feel first, how fast they would land, and what it would take to get there. No pitch — just an honest read on your current state.")}
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
