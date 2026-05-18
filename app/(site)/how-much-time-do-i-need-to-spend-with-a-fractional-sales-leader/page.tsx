'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-05'
const CMS_SECTION = 'seoTimeWithFractionalSalesLeader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function TimeWithFractionalSalesLeaderPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const phases = [
    {
      number: '01',
      title: v('phase1Title', 'Weeks 1–2: Discovery and Extraction (4–6 hours of your time)'),
      detail: v('phase1Detail', "The first two weeks are the heaviest. I sit with you to extract what is in your head — your best closed deals, your real Ideal Customer Profile, the objections you actually hear, the questions you ask that move buyers forward, the patterns in your wins and losses. This is the founder magic, and only you can give it to me. Block four to six hours across two weeks for working sessions. Be available for short follow-up calls in between. The more time you give me in this window, the faster everything downstream gets built."),
      fix: v('phase1Outcome', "What you get: a documented version of how you sell, ready to be turned into a Sales Playbook the team can run from."),
    },
    {
      number: '02',
      title: v('phase2Title', 'Weeks 3–6: Build the Playbook and CRM (2–3 hours per week)'),
      detail: v('phase2Detail', "Now I do most of the writing. The Sales Playbook gets drafted. The CRM gets reconfigured to match the real pipeline stages with evidence-based exit criteria. Qualification fields go in. Reporting gets cleaned up. Your time drops to about two to three hours a week — one working session to review drafts, plus a short weekly stand-up. I do not need you in every meeting at this stage. I need you reviewing what I produce so it matches how you actually sell."),
      fix: v('phase2Outcome', "What you get: a written Sales Playbook and a CRM that tells you the truth about pipeline health in one glance."),
    },
    {
      number: '03',
      title: v('phase3Title', 'Weeks 7–12: Install the System and Onboard the Team (1–2 hours per week)'),
      detail: v('phase3Detail', "The system goes live. The weekly pipeline review starts. If you already have salespeople, they get trained on the playbook. If you do not, this is when I help you hire the first scalable rep. Your time drops to about one to two hours a week — the weekly pipeline review (60 minutes) plus a quick async check-in. You are no longer the bottleneck. The system is running and I am running it with you, not for you."),
      fix: v('phase3Outcome', "What you get: a working sales operation with you in the room as the leader, not the operator."),
    },
    {
      number: '04',
      title: v('phase4Title', 'Month 4 and Beyond: Steady State (30–60 minutes per week)'),
      detail: v('phase4Detail', "Steady state is one hour a week, sometimes less. A short pipeline review. Monthly forecast accuracy check. Quarterly compensation and territory review. You are operating as a Founder-CEO again, not a Founder-Salesperson. The Fractional Sales Leader runs the rhythm. You make the strategic calls. Most founders use the time they get back to focus on product, partnerships, or fundraising — the work that compounds."),
      fix: v('phase4Outcome', "What you get: 20+ hours a week back, a sellable revenue engine, and a forecast you can take to the board."),
    },
  ]

  const comparisonRows = [
    {
      dependent: v('compare1Dependent', 'Founder hides from the engagement to "stay focused"'),
      system: v('compare1System', 'Founder front-loads time in weeks 1–2 to compound results'),
    },
    {
      dependent: v('compare2Dependent', 'Sessions are squeezed into 15-minute hallway calls'),
      system: v('compare2System', 'Sessions are scheduled, recorded, and have written agendas'),
    },
    {
      dependent: v('compare3Dependent', 'Founder is reactive — only joins when something is on fire'),
      system: v('compare3System', 'Founder joins a weekly pipeline review that never gets cancelled'),
    },
    {
      dependent: v('compare4Dependent', 'Playbook stalls because founder will not sit for extraction'),
      system: v('compare4System', 'Playbook gets built in 6 weeks because founder gave 6 hours up front'),
    },
    {
      dependent: v('compare5Dependent', 'Engagement drifts because there is no shared cadence'),
      system: v('compare5System', 'Cadence is fixed: weekly review, monthly forecast, quarterly reset'),
    },
    {
      dependent: v('compare6Dependent', 'Six months in, nothing has been installed — only discussed'),
      system: v('compare6System', 'Twelve weeks in, the system is live and the founder is stepping back'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How many hours per week do I actually need to spend with my Fractional Sales Leader?",
      a: "It is not a flat number — it is a curve. Weeks 1–2 are the heaviest at four to six hours total, because I am extracting what is in your head and you are the only source. Weeks 3–6 settle into two to three hours a week. By month four and beyond, steady state is thirty to sixty minutes a week. Average across a 90-day build is roughly two hours a week of focused founder time. Most founders are surprised it is that low — the worry is usually that it will be much more.",
    },
    {
      q: "Why is the time commitment heavier in the first two weeks?",
      a: "Because everything else depends on getting the playbook right, and the playbook lives in your head. Your real Ideal Customer Profile, the objections you hear, the patterns in your wins and losses, the questions you ask that move buyers forward — none of that is written down anywhere. If I do not get it from you in the first two weeks, I have to guess. Guessing produces a generic playbook that the team will not use. Six focused hours up front saves you six months of rebuild later.",
    },
    {
      q: "Can I just dump documents on the Fractional Sales Leader and skip the meetings?",
      a: "No — and this is the single most common reason engagements fail to deliver. Documents tell me what you wrote down. Working sessions tell me what you actually do. The gap between those two is usually large, and the gap is where the value lives. The founders who try to outsource the discovery phase end up with a polished playbook that does not match the real sales motion. Then the team ignores it. Then nothing changes.",
    },
    {
      q: "What if I cannot give six hours in the first two weeks?",
      a: "Then we stretch the discovery phase to four weeks at three hours a week, but the trade-off is real — the playbook ships later and the rest of the build slips with it. If you cannot find six hours across two weeks for the most important strategic work in your business, that is a signal worth examining. Most founders find the time once they understand what those hours produce: a documented sales motion the team can run without them.",
    },
    {
      q: "How does my time commitment change once the system is built?",
      a: "It drops dramatically. By month four, you are at roughly an hour a week — a short pipeline review and a monthly forecast check. That is the whole point of building the system. The first 90 days are a concentrated investment so that everything afterward runs on a cadence you barely have to touch. Most founders use the time they get back on product, partnerships, or strategic hires — the work that only the founder can do.",
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
        headline: 'How Much Time Do I Need to Spend With a Fractional Sales Leader?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader',
        datePublished: '2026-05-18',
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
              {v('heroTag', 'Engagement Cadence')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Much Time Do I Need to Spend')}
              <span className="block text-blue-400">{v('heroAccent', 'With a Fractional Sales Leader?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-xl font-semibold text-blue-200 md:text-2xl"
            >
              {v('heroH2', 'At first, the more the better off you will be.')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "The time commitment is a curve, not a flat number. Heavy in weeks 1–2, light by month four. Here is what to expect at every stage — and why front-loading your time pays off for the next two years.")}
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
                What does a Fractional Sales Leader actually do? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7"
          >
            <motion.h2 variants={itemVariants} className="mb-5 font-serif text-2xl font-bold text-blue-800">
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700"></span>
                <span>{v('takeaway1', 'Founder time is a curve, not a flat hourly rate. The first two weeks are heavy by design — four to six hours of focused work — because the playbook lives in your head and only you can extract it.')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700"></span>
                <span>{v('takeaway2', 'Weeks 3–6 drop to about two to three hours a week as the Sales Playbook and CRM get built. You are reviewing, not producing.')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700"></span>
                <span>{v('takeaway3', 'By weeks 7–12 you are at one to two hours a week — a weekly pipeline review plus a short check-in. The system is running and the team is executing the playbook.')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700"></span>
                <span>{v('takeaway4', 'Steady state from month four onward is roughly an hour a week. Most founders use the time they get back on product, partnerships, or fundraising.')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700"></span>
                <span>{v('takeaway5', 'Skip the upfront investment and the engagement stalls. Founders who try to outsource discovery end up with a generic playbook the team will not use — and another year of founder-led sales.')}</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
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
              {v('sectionPhasesHeading', 'The Founder-Time Curve Across a 90-Day Build')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionPhasesSubheading', 'Each phase has a different role for you. The hours go down as the system goes up.')}
            </motion.p>
            <div className="space-y-8">
              {phases.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">{item.fix}</span>
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
              {v('seoPara1', "The question \"how much time do I need to spend with a Fractional Sales Leader?\" comes up in almost every first call I have with a $1M–$10M ARR founder. The honest answer is the one most people do not want to hear: a lot at the start, almost nothing later. Six focused hours in the first two weeks. Two to three hours a week through week six. One to two hours a week through week twelve. Then thirty to sixty minutes a week from month four forward. The total across the first 90 days is roughly thirty hours of your time — about half of one working week — to install a system that runs for years.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', 'The mistake I see most often is the founder who tries to "stay out of the way" in weeks one and two — they think they are being respectful of their own time and the Fractional Sales Leader\'s expertise. They are not. They are leaving the most valuable raw material on the table. The Sales Playbook lives in your head. If you will not sit for the extraction, no one can build the rest. If you are weighing whether the investment is worth it, the')}{' '}
              <Link href="/fractional-sales-leadership-roi" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Fractional Sales Leadership ROI calculator →
              </Link>{' '}
              {v('seoPara2b', 'will show you what those thirty front-loaded hours produce — typically two to three times the cost in incremental revenue within twelve months.')}
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
              {v('sectionCompareHeading', 'Engagements That Stall vs. Engagements That Install')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The difference is almost always how the founder shows up in the first 30 days.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Engagement That Stalls')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Engagement That Installs')}
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

      {/* What to Do This Week */}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionNextHeading', 'How to Prepare Before You Hire')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionNextSubheading', 'Five things to have ready before week one. None of them take longer than thirty minutes.')}
            </motion.p>
            <div className="space-y-3">
              {[
                v('next1', 'Block six hours in your calendar across the first two weeks — treat them like a board meeting'),
                v('next2', 'Pull a list of your last 20 closed-won and 20 closed-lost deals from your CRM'),
                v('next3', 'Identify the three best calls you have ever run — recordings if you have them, notes if you do not'),
                v('next4', 'Write down the one customer profile that has the highest close rate and the shortest sales cycle'),
                v('next5', 'Decide which weekly hour, going forward, is the standing pipeline review — and never move it'),
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
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
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "The founders who get the most out of working with me are the ones who front-load their time in the first two weeks. They sit for the extraction. They give me the messy version, not the rehearsed one. Twelve weeks later they have a working sales system and almost no day-to-day involvement in it. That is the whole point.")}
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

      {/* Related Reading */}
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
                <Link href="/what-does-fractional-sales-leader-do" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Does a Fractional Sales Leader Do Week to Week? →
                </Link>
              </li>
              <li>
                <Link href="/fractional-sales-leader-first-90-days" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What to Expect in the First 90 Days With a Fractional Sales Leader →
                </Link>
              </li>
              <li>
                <Link href="/can-fractional-sales-leader-lead-team-part-time" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How Can a Fractional Sales Leader Lead My Team If They&apos;re Only Here 25 Hours a Week? →
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
              {v('ctaHeadline', "Ready to Map the First 90 Days?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk you through exactly what your first two weeks would look like, what we would extract, and what your time commitment would be at every stage.")}
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
