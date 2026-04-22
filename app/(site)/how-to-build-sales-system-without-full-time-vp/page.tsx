'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoBuildSalesSystemWithoutVp'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function BuildSalesSystemWithoutVpPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', 'You do not have a sales problem — you have an infrastructure problem. Hiring a $400K VP into an empty system almost always fails.'),
    v('takeaway2', 'A real sales system has four components: a documented Sales Playbook, a disciplined CRM and pipeline, a defined Ideal Customer Profile with qualification criteria, and a written accountability structure.'),
    v('takeaway3', 'The build sequence matters. Codify the founder sales motion first, install the infrastructure second, hire into a system that already works third — never the reverse.'),
    v('takeaway4', 'You can build all of this in 60 to 90 days with a Fractional Sales Leader at roughly 25% of the cost of a full-time VP — without betting twelve months of runway on a single hire.'),
    v('takeaway5', 'The goal is not to avoid leadership forever. It is to build the machine first so that when you eventually hire a VP, they are running something that already produces revenue.'),
  ]

  const components = [
    {
      number: '01',
      title: v('comp1Title', 'The Sales Playbook'),
      detail: v('comp1Detail', "The playbook is the written translation of the founder's sales instinct into a process anyone on the team can execute. It defines the Ideal Customer Profile with specific, rigid constraints — industry, company size, revenue range, buying role, disqualifying characteristics. It scripts the discovery call framework and the qualification criteria. It documents every recurring objection and the best response to each one. It contains the email sequences, the second-call framework, the proposal structure, and the closing cadence. Without a playbook, every rep sells a slightly different product to a slightly different customer. With one, every rep sells the same product to the same customer, the same way."),
      outcome: v('comp1Outcome', "A 20-to-40-page operating manual every salesperson runs from on day one — so onboarding becomes 30 days instead of six months."),
    },
    {
      number: '02',
      title: v('comp2Title', 'The Pipeline and CRM Infrastructure'),
      detail: v('comp2Detail', "Most $1M–$10M ARR companies have a CRM. Almost none of them have a functional pipeline. A functional pipeline has stages that match how deals actually move — not aspirational stages copied from a HubSpot template. Each stage has written entry and exit criteria based on buyer actions, not seller activities. \"Discovery Complete\" does not mean the rep had a meeting; it means the buyer confirmed the problem, the budget, the timeline, and the decision-maker. Moving a deal forward requires evidence. Moving it backward is expected when the evidence is missing. This is the difference between a forecast you can run a business on and a forecast that falls apart in the last week of the quarter."),
      outcome: v('comp2Outcome', "A CRM that tells you the truth about pipeline health in one glance — and a forecast you can take to the board without a footnote."),
    },
    {
      number: '03',
      title: v('comp3Title', 'The Qualification and Disqualification Criteria'),
      detail: v('comp3Detail', "Founders qualify on instinct. They know in the first meeting whether a deal is real. Salespeople, without explicit criteria, keep every deal alive out of hope. The pipeline fills with optimism and the forecast becomes fiction. The fix is to write down the three things that make a deal qualified and the three things that disqualify it automatically. Those criteria become required fields in the CRM. Reps are given explicit permission — and rewarded — for killing deals that do not qualify. A clean pipeline is more valuable than a fat one."),
      outcome: v('comp3Outcome', "A smaller, cleaner pipeline that closes at a higher rate — because no one is wasting cycles on deals that were never going to happen."),
    },
    {
      number: '04',
      title: v('comp4Title', 'The Accountability System'),
      detail: v('comp4Detail', "An accountability system is not a one-on-one. It is a written document that specifies what each salesperson is responsible for, what metrics they are measured on, what the cadence of review is, and what happens when a target is missed. It covers activity metrics (calls, demos, pipeline coverage) and outcome metrics (close rate, cycle length, quota attainment). It is reviewed weekly in a standing pipeline review that is never cancelled. When these four components are in writing and enforced, a salesperson can close a deal without the founder in the room. When they are not, the founder is permanently on call."),
      outcome: v('comp4Outcome', "A weekly rhythm that surfaces problems early, rewards the right behavior, and replaces founder-as-manager with a system that manages itself."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Every rep sells differently — there is no shared pitch'),
      withIt: v('compare1With', 'Documented Sales Playbook every rep runs from'),
    },
    {
      without: v('compare2Without', 'Pipeline stages copied from a CRM template'),
      withIt: v('compare2With', 'Stages match reality with evidence-based exit criteria'),
    },
    {
      without: v('compare3Without', 'Deals that should die stay open for months'),
      withIt: v('compare3With', 'Written qualification criteria enforced in the CRM'),
    },
    {
      without: v('compare4Without', 'Forecast is a feeling — off by 30% every quarter'),
      withIt: v('compare4With', 'Forecast built on stage conversion data you can trust'),
    },
    {
      without: v('compare5Without', 'Founder is in every deal or the deal stalls'),
      withIt: v('compare5With', 'Reps close without the founder in the room'),
    },
    {
      without: v('compare6Without', "$400K VP hired into chaos and fails in 12 months"),
      withIt: v('compare6With', 'VP (or fractional leader) runs a machine that already works'),
    },
  ]

  const buildPhases = [
    {
      number: '01',
      title: v('phase1Title', 'Codify the Founder Sales Motion Into a Playbook'),
      detail: v('phase1Detail', "The first 30 days of any real sales system build is about extraction. Someone — you, a fractional leader, an operations person — sits with every recorded call and every deal the founder has closed. The patterns get written down. What does a qualified conversation look like? What triggers buyer interest? What questions surface urgency? Which objections are real and which are smokescreens? What does a \"yes\" usually sound like a week before it arrives? This is the founder's magic, extracted into a document. A Fractional Leader typically does this in two to three weeks because they have done it before and know what to look for. A founder trying to do it alone will not finish — because the job the document would free them from is the same job that is keeping them too busy to write it."),
    },
    {
      number: '02',
      title: v('phase2Title', 'Install the Infrastructure and RevOps'),
      detail: v('phase2Detail', "With the playbook drafted, the CRM gets configured to match. Pipeline stages match reality. Required fields enforce qualification discipline. Automation handles the mechanical follow-ups. Reporting is built so that the founder can see pipeline health in a single glance instead of hunting for it. This is Revenue Operations work — specific, tactical, and critically unglamorous. A Fractional Sales Leader owns it. A full-time VP usually does not; they delegate it or skip it. Skipping it is why so many VP hires look busy for six months and produce nothing."),
    },
    {
      number: '03',
      title: v('phase3Title', 'Hire and Onboard the First Scalable Reps'),
      detail: v('phase3Detail', "Only now — with a playbook, a working CRM, defined qualification criteria, and a documented accountability structure — is the company ready to hire salespeople. And only now can a new rep ramp in 60 to 90 days instead of never. Founders often hire reps who are \"mini-me\" versions of themselves. This usually fails at this stage — you do not need a founder; you need someone who can execute the playbook you just wrote. A Fractional Leader uses their network to source the right profile (a Builder rep, not a Maintainer rep), runs the interviews, evaluates for pattern-match against the playbook, and owns the ramp period."),
    },
  ]

  const defaultFaqs = [
    {
      q: "How long does it take to build a sales system from scratch?",
      a: "The core system — playbook, CRM infrastructure, qualification criteria, and accountability document — can be built and operational in 60 to 90 days with a Fractional Sales Leader who has done it before. Hiring the first one or two scalable reps into that system is an additional 30 to 60 days. Most founders see measurable pipeline improvement by day 45 and a functioning rep team by month six.",
    },
    {
      q: "Can I build this sales system myself without outside help?",
      a: "Technically yes, but almost no founder does. The reason is structural: the job the system is supposed to free you from is the same job keeping you too busy to build the system. Founders who try to build it alone usually stall at the playbook stage, because writing down what you do takes you away from doing it. A Fractional Sales Leader does the extraction for you — they have built this playbook before and they know what good looks like.",
    },
    {
      q: "When do I actually need a full-time VP of Sales?",
      a: "When you have a working sales system, a sales team of six or more reps, and a company approaching or past $10M ARR. At that stage, the complexity of managing a team of that size, running multiple segments or regions, and building the next layer of leadership is a full-time job. Before that point, a VP is an expensive solution to a problem you do not yet have. Build the machine first. Hire the VP to run it after it already works.",
    },
    {
      q: "What happens if I hire a VP before the system is built?",
      a: "Most often: six to twelve months of slow progress, followed by a mutual agreement to part ways, followed by a second founder-led sales period while you recover. The all-in cost of a failed VP hire at this stage is typically $500K to $800K when you include recruiting fees, severance, lost pipeline, and the deals that did not close during the ramp. The system-first approach eliminates that risk because you are not depending on a single person to do both the building and the running.",
    },
    {
      q: "What is the single most important piece to build first?",
      a: "The playbook. Everything else — the CRM configuration, the hiring, the accountability system — depends on having a documented sales motion to enforce. Without the playbook, a CRM is just a database; reps are just people; accountability is just pressure. The playbook is the artifact that turns all of those pieces into a system.",
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
        headline: 'How Do I Build a Sales System Without Hiring a Full-Time VP of Sales?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-to-build-sales-system-without-full-time-vp',
        datePublished: '2026-04-21',
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
              {v('heroTag', 'Foundational Sales Infrastructure')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Do I Build a Sales System')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Hiring a Full-Time VP of Sales?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'Implementing Foundational Sales Infrastructure for Founders')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders stuck in founder-led sales and not ready to bet $400K on a full-time VP hire. Build the machine first — then decide who runs it.")}
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
            className="rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-sm font-bold uppercase tracking-widest text-blue-800"
            >
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              {takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-neutral-700">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* What a Real Sales System Contains — 4 components */}
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
              {v('sectionComponentsHeading', 'The Four Components of a Real Sales System')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComponentsSubheading', 'Miss one and the system is a suggestion, not a system. All four are non-negotiable.')}
            </motion.p>
            <div className="space-y-8">
              {components.map((item, i) => (
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
                    <span className="font-bold text-blue-800">What You Get: </span>
                    <span className="text-blue-800">{item.outcome}</span>
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
              {v('seoPara1', "A full-time VP of Sales is a $400,000 all-in commitment — base, OTE, equity, benefits, and recruiting fees — and roughly 70% of first-time VP hires fail inside eighteen months. The failure rate is not because VPs are bad at their jobs. It is because they are being hired into companies that do not yet have the raw materials they need to succeed: no playbook, no defined process, no CRM discipline, no qualification criteria, and a founder who is still the best salesperson in the building. You cannot hire an operator into an empty operation.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The smarter path is to build the sales system first, prove it works, and then decide whether you need a full-time VP to run it. If you want to see why so many founders get this sequence wrong, read")}{' '}
              <Link href="/250k-mistake-vp-sales-hire-too-early" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                The $250K Mistake: Hiring a VP of Sales Too Early →
              </Link>
              {v('seoPara2b', ". And if you want the full picture of the capital-efficient alternative — what a Fractional Sales Leader does and why it works at this stage — start with")}{' '}
              <Link href="/articles/what-is-fractional-sales-leader" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What Is a Fractional Sales Leader →
              </Link>
              {v('seoPara2c', ". The sequence matters more than the seniority.")}
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
              {v('sectionCompareHeading', 'Without the Infrastructure vs. With It')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The difference is not talent. It is whether the machine was built before the people were hired.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Without the Infrastructure')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'With the Infrastructure')}
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

      {/* Build Sequence — 3 phases */}
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
              {v('sectionSequenceHeading', 'The Build Sequence That Actually Works')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionSequenceSubheading', 'The order matters more than any individual piece. Most founders try to solve this backwards — and it costs them a year.')}
            </motion.p>
            <div className="space-y-8">
              {buildPhases.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="text-neutral-700">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Economics callout */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-white p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionEconomicsHeading', 'The Economics: Why Sequence Beats Seniority')}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-lg border border-red-100 bg-red-50 p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-700">
                  {v('econLeftLabel', 'Option A: Full-Time VP')}
                </p>
                <p className="mb-2 font-serif text-3xl font-bold text-neutral-900">
                  {v('econLeftCost', '~$400K / year')}
                </p>
                <p className="text-sm text-neutral-700">
                  {v('econLeftDetail', 'Base, OTE, equity, benefits, and recruiting fees. 6-month ramp before any real impact. ~70% failure rate in the first 18 months.')}
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-lg border border-blue-100 bg-blue-50 p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-800">
                  {v('econRightLabel', 'Option B: Fractional Leader')}
                </p>
                <p className="mb-2 font-serif text-3xl font-bold text-neutral-900">
                  {v('econRightCost', '~$72K – $168K / year')}
                </p>
                <p className="text-sm text-neutral-700">
                  {v('econRightDetail', 'No equity overhead, no recruiting fees, week-one impact, no long-term commitment. Same seniority — often higher — at roughly 25% of the cost.')}
                </p>
              </motion.div>
            </div>
            <motion.p variants={itemVariants} className="mt-6 text-center text-neutral-700">
              {v('econSummary', "You are trading a $400K one-shot bet on a single human for a contracted deliverable from someone who has already installed this system five or ten times. At the end of the engagement, you have a system — not a dependency.")}
            </motion.p>
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
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I build the sales infrastructure — playbook, pipeline, qualification criteria, accountability system — that lets $1M–$10M ARR founders transition out of founder-led sales without the $400K risk of a full-time VP hire. Most engagements install the full system in 60 to 90 days and hand off a machine that already produces revenue.")}
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
                <Link href="/articles/what-is-fractional-sales-leader" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is a Fractional Sales Leader? The Capital-Efficient Model for Scaling Out of Founder-Led Sales →
                </Link>
              </li>
              <li>
                <Link href="/250k-mistake-vp-sales-hire-too-early" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  The $250K Mistake: Hiring a VP of Sales Too Early →
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
              {v('ctaHeadline', 'Build the Machine Before You Hire the Operator')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map what sales infrastructure you actually have today, identify what is missing, and outline exactly what it would take to install a working system in 60 to 90 days — without the $400K VP hire.")}
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
