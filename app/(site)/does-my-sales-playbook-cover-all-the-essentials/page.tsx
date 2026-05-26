'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-05'
const CMS_SECTION = 'seoSalesPlaybookChecklist'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalesPlaybookChecklistPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const essentials = [
    {
      number: '01',
      title: v('essential1Title', 'A Specific ICP With Hard Disqualifiers'),
      detail: v('essential1Detail', "Most playbooks I review describe the Ideal Customer Profile in a way that's so broad it's useless. \"B2B SaaS, 50 to 500 employees, growth-stage.\" That's not an ICP. That's a category. A real ICP names the industry, the revenue band, the buying role, the trigger event that makes them ready to buy, and the disqualifiers that should kill a deal before a rep wastes a week on it. If your playbook can't say no for you, it's not doing its job."),
      fix: v('essential1Fix', "Write three lines: \"We sell to ____ at companies between ____ and ____ revenue, when they're trying to fix ____. We don't sell to ____ or ____.\" If you can't fill those blanks today, your reps can't qualify a single deal correctly."),
    },
    {
      number: '02',
      title: v('essential2Title', 'Pipeline Stages Tied to Buyer Milestones, Not Rep Activity'),
      detail: v('essential2Detail', "A pipeline stage that says \"Discovery Complete\" because the rep had a meeting is theater. A real stage says \"Discovery Complete\" because the buyer confirmed the problem, the budget, the timeline, and the decision-maker, in writing or on record. Stages built around what the rep did are flattering. Stages built around what the buyer did are useful. Only one of those gives you a forecast that holds up."),
      fix: v('essential2Fix', "For every stage, write the buyer evidence required to enter it and the buyer evidence required to leave it. If your stages can't pass that test, deals are sitting in the wrong place and your forecast is fiction."),
    },
    {
      number: '03',
      title: v('essential3Title', 'A Discovery and Qualification Framework'),
      detail: v('essential3Detail', "Discovery isn't \"ask a few open-ended questions and see what happens.\" A real playbook gives reps a written framework: the questions to ask, the order to ask them, what a strong answer sounds like, what a weak answer sounds like, and what to do next in each case. Without that, every rep runs discovery differently. Which means every deal gets qualified differently. Which means your pipeline is full of optimism, not opportunity."),
      fix: v('essential3Fix', "Document the 8 to 12 questions every discovery call must cover and the qualification criteria a deal must clear to move forward. Test it: hand the framework to your newest rep and watch them run a call. If they can't follow it, it's not specific enough yet."),
    },
    {
      number: '04',
      title: v('essential4Title', "An Objection and Pricing Playbook"),
      detail: v('essential4Detail', "I can predict the top five objections your reps will hear this quarter. So can you. The question is whether the responses are written down or living in your head. A real playbook documents every recurring objection and the best response to each one — with reasoning, not just scripts. It documents pricing rules: when discounting is allowed, when it isn't, what concessions trade for what. Without that, every rep negotiates from scratch. The price floor moves every deal."),
      fix: v('essential4Fix', "List the top 10 objections you've heard in the last 12 months. Write the best response to each. Write the three pricing rules every rep must follow. That's a one-day exercise that pays back for years."),
    },
    {
      number: '05',
      title: v('essential5Title', 'A Cadence That Makes It Operational, Not Decorative'),
      detail: v('essential5Detail', "The most common reason playbooks fail isn't that they're written badly. It's that no one runs the cadence that keeps them alive. A real playbook is enforced through a weekly pipeline review, a monthly playbook revision based on what worked and what didn't, and a quarterly check on whether the ICP and pricing still match the market. Without that rhythm, the playbook becomes a PDF on a shared drive that nobody opens. You don't have a playbook. You have an artifact."),
      fix: v('essential5Fix', "Pick a standing weekly meeting where the playbook is the agenda — pipeline reviewed against it, exceptions flagged, lessons captured. If your team can't tell you when that meeting happens, the playbook isn't running anything."),
    },
  ]

  const comparisonRows = [
    {
      left: v('compare1Left', 'A one-time PowerPoint shared at kickoff'),
      right: v('compare1Right', 'A living document updated every quarter'),
    },
    {
      left: v('compare2Left', 'Vague ICP like "B2B SaaS"'),
      right: v('compare2Right', 'Specific ICP with written disqualifiers'),
    },
    {
      left: v('compare3Left', 'Stages copied from a CRM template'),
      right: v('compare3Right', 'Stages tied to buyer evidence and milestones'),
    },
    {
      left: v('compare4Left', "Objection handling left to each rep's instinct"),
      right: v('compare4Right', 'Documented objections with best-known responses'),
    },
    {
      left: v('compare5Left', "Pricing decided deal by deal in the moment"),
      right: v('compare5Right', 'Written pricing rules every rep follows'),
    },
    {
      left: v('compare6Left', 'No accountability cadence — playbook gathers dust'),
      right: v('compare6Right', 'Weekly pipeline review uses the playbook as the standard'),
    },
  ]

  const whatToDoNext = [
    v('action1', "Open your current playbook and find the ICP definition. If you can't read it out loud in 30 seconds, it's too vague."),
    v('action2', "Pick three open deals from your CRM and check whether they match the ICP. If two or more don't, the pipeline is full of the wrong deals."),
    v('action3', "Ask your newest rep to walk you through stage exit criteria from memory. If they can't, the stages aren't operational."),
    v('action4', "List the top 5 objections your team heard this month. Write the best response to each. That's the start of the objection section."),
    v('action5', "Put a 60-minute weekly meeting on the calendar where the playbook is the agenda. If you can't, the playbook isn't running anything."),
  ]

  const defaultFaqs = [
    {
      q: 'How do I know if my current playbook is missing essentials versus just needing a refresh?',
      a: "Run it through the five checks on this page. If you can answer all five with specific written content from your existing playbook, you have a real playbook that needs maintenance. If you can answer two or fewer, you don't have a playbook yet, you have notes. Most $1M to $5M companies I work with are in the second group, even when they're sure they're in the first.",
    },
    {
      q: 'How long does it take to build a real Sales Playbook from scratch?',
      a: "Sixty to ninety days with someone who's done it before. The bottleneck isn't writing — it's extraction. Most of the playbook lives in the founder's head: how they qualify, how they handle objections, how they decide on pricing. Getting that out and onto paper takes structured conversations and recorded-call review. Founders trying to do this alone usually stall, because the job the playbook would free them from is the same job that's keeping them too busy to write it.",
    },
    {
      q: 'Can a Fractional Sales Leader build the playbook for us, or does it have to come from inside?',
      a: "It has to come from the inside, but it usually needs an outside hand to extract it. The content has to be your founder's wisdom, your customer's actual language, and your team's real objections. A Fractional Sales Leader knows what a working playbook looks like, runs the interviews to pull the content out of you, and assembles it into a document that can be taught and enforced. The result is your playbook, built faster and cleaner than you'd build it alone.",
    },
    {
      q: "What if my product or buyer changes a lot — is a playbook still worth building?",
      a: "Yes, and probably more than for a stable business. A playbook in a changing market isn't a fixed document. It's a system for capturing what's working right now, sharing it across the team, and updating it when something stops working. The cadence I described in essential five is what makes that possible. Without the playbook, every change forces every rep to re-invent. With one, the team adjusts together.",
    },
    {
      q: 'Do I need a playbook before I hire my first rep, or after?',
      a: "Before. Every time. Hiring a rep without a playbook is the most expensive way to find out you didn't have a sales process. The new rep spends six months guessing, you spend that time wondering why nothing's closing, and you eventually conclude that good salespeople are impossible to find. They're not. You hired them into a system that didn't exist. Build the playbook first. Hire into it. Then the rep can actually ramp.",
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
        headline: 'Does My Sales Playbook Cover All the Essentials?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/does-my-sales-playbook-cover-all-the-essentials',
        datePublished: '2026-05-26',
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
              {v('heroTag', 'Sales Playbook Checklist')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Does My Sales Playbook Cover')}
              <span className="block text-blue-400">{v('heroAccent', 'All the Essentials?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-xl font-semibold text-blue-200"
            >
              {v('heroH2', "Here's the checklist to find out.")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most $1M to $10M ARR founders think they have a Sales Playbook. Most of them don't. They have notes, slides, or a Google Doc nobody opens. Here are the five things a real playbook has — so you can check yours honestly.")}
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
                Talk to Louie &mdash; 30 Minutes
              </Link>
              <Link
                href="/what-is-a-sales-playbook"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is a Sales Playbook? &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-800"
            >
              Key Takeaways
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              <li className="flex gap-3 text-neutral-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway1', "A real Sales Playbook isn't a document. It's a system you run. If nobody opens it weekly, it isn't a playbook.")}</span>
              </li>
              <li className="flex gap-3 text-neutral-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway2', "The five non-negotiables: a specific ICP with disqualifiers, stages tied to buyer milestones, a discovery framework, an objection and pricing playbook, and a weekly cadence that enforces it.")}</span>
              </li>
              <li className="flex gap-3 text-neutral-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway3', "Missing any one of the five and the playbook leaks. Reps quietly invent their own process, deals stall, and the pipeline starts lying to you.")}</span>
              </li>
              <li className="flex gap-3 text-neutral-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway4', "Build the playbook before you hire your next rep. Hiring into nothing is how good salespeople get blamed for a system you never built.")}</span>
              </li>
              <li className="flex gap-3 text-neutral-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway5', "A Fractional Sales Leader can extract a working playbook from you in 60 to 90 days. Trying to do it alone almost always stalls.")}</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 5 Essentials */}
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
              {v('sectionEssentialsHeading', 'The 5 Essentials Every Real Sales Playbook Has')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionEssentialsSubheading', 'Each one is specific. Each one has a check you can run today. Miss any of the five and the playbook leaks.')}
            </motion.p>
            <div className="space-y-8">
              {essentials.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Check it: </span>
                    <span className="text-blue-800">{item.fix}</span>
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
              {v('seoPara1', "The Sales Playbook is the single most important asset a $1M to $10M ARR company can own, and it's the one founders skip most often. The reason isn't laziness. It's that building a playbook feels like overhead when you're trying to hit a number. So most founders push it off. They run on instinct, close deals personally, and assume they'll write the playbook later. Later never comes. By the time the team is big enough that the lack of a playbook is obviously hurting, it's a year too late and the bad habits are already baked in.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "A Sales Playbook isn't a document you write once. It's a working operating system for the sales team. It has to be specific enough that a new rep can read it on day one and start running calls, and it has to be alive enough that it evolves as your buyer and product evolve. If you want to dig deeper into what belongs in one, start with")}{' '}
              <Link href="/what-is-a-sales-playbook" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                what is a sales playbook and does your business have one &rarr;
              </Link>
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
              {v('sectionCompareHeading', 'A Document Called "Playbook" vs. A Real Working Playbook')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "The difference isn't length. It's whether the team actually uses it.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'A Document Called "Playbook"')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'A Real Working Playbook')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">&#10007;</span>
                    {row.left}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">&#10003;</span>
                    {row.right}
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
              {v('sectionActionsHeading', 'What to Do This Week')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionActionsSubheading', "Before you hire help, run these five checks. The answers will tell you exactly how complete your playbook actually is.")}
            </motion.p>
            <div className="space-y-3">
              {whatToDoNext.map((item, i) => (
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
              {v('aboutBio1', "I'm Louie Bernstein. I've got 50 years in business, 22 of those as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "The first thing I do in almost every engagement is ask to see the Sales Playbook. Most of the time, what I get back is a slide deck, a half-written Notion page, or nothing at all. Building a real one is usually where the work starts. It's also where the biggest gains show up the fastest.")}
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
                <Link href="/what-is-a-sales-playbook" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is a Sales Playbook &mdash; And Does Your Business Have One? &rarr;
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-a-sales-process-after-1m-arr" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales Process After $1M ARR &rarr;
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-a-sales-pipeline" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales Pipeline That Fills Itself &rarr;
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
              {v('ctaHeadline', "Let's Audit Your Playbook in 30 Minutes")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "Bring me your current playbook, or what you have of one. In 30 minutes I'll tell you which of the five essentials are in place, which are missing, and where to start fixing the gaps.")}
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
