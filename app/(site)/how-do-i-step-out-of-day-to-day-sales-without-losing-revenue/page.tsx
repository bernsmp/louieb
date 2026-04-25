'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoStepOutDayToDaySales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function StepOutDayToDaySalesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', 'Revenue does not collapse because the founder stops selling. It collapses because the founder stops selling before the system that replaces them is in writing and running.'),
    v('takeaway2', 'A safe step-out is sequenced, not announced. You exit specific accounts and specific stages on a defined schedule — never the whole motion in one quarter.'),
    v('takeaway3', 'Day 1 is not a memo. Day 1 is the day you start recording your calls, capturing your qualification logic, and naming the person who will own the first stage of the pipeline without you.'),
    v('takeaway4', 'You stay in the deal as the escalation path, not the first line. Reps own the cadence; you show up only when the deal needs the founder voice — and only when invited.'),
    v('takeaway5', 'A Fractional Sales Leader compresses this transition from twelve nervous months to roughly 90 days of structured handoff — without the $400K bet of a full-time VP hire.'),
  ]

  const guardrails = [
    {
      number: '01',
      title: v('comp1Title', 'Document the Founder Sales Motion Before You Step Back'),
      detail: v('comp1Detail', "The reason most founder step-outs cause a revenue dip is simple: the founder is the playbook. The qualification logic, the second-call script, the pricing instinct, the objection handling — all of it lives between the founder's ears. Step out without documenting it and the next person in the chair is guessing. The fix is to record every call for 30 days, transcribe them, and extract the patterns into a written playbook: ICP definition, discovery questions, qualification criteria, the three objections you hear most and how you answer them, the pricing rules, and the specific language that closes deals. This is not optional. Without it, every transition is a relaunch."),
      outcome: v('comp1Outcome', "A 20-to-40-page operating manual the next person can run from on day one — so the handoff transfers a process, not a personality."),
    },
    {
      number: '02',
      title: v('comp2Title', "Install Pipeline Discipline That Doesn't Need You in the Room"),
      detail: v('comp2Detail', "Founders run pipeline by memory. They know which deal is real, which prospect is stalling, and which one needs a nudge — without ever opening the CRM. That is the system you are stepping out of, and it does not transfer. To step out cleanly, the pipeline has to be visible to anyone who looks at it. Stages have to match how deals actually move. Each stage needs written entry and exit criteria based on buyer evidence, not seller activity. A weekly pipeline review has to happen on the calendar whether you attend or not. The minute the pipeline runs without you for four weeks straight, you have proven the system works. Until then, you have not."),
      outcome: v('comp2Outcome', "A CRM and weekly rhythm that surface pipeline health in one glance — so the team catches slipping deals before you would have caught them yourself."),
    },
    {
      number: '03',
      title: v('comp3Title', 'Hand Off Specific Accounts on a Defined Schedule'),
      detail: v('comp3Detail', "The wrong way to step out is to announce that you are stepping out. The right way is to hand off specific accounts in specific stages on specific dates. New inbound leads transfer first — those have no founder relationship at risk. Active discovery deals transfer second, with the founder shadowing the next two calls. Late-stage deals stay with the founder until they close, then the renewals transfer. Top-ten existing accounts transfer last, with a co-branded introduction email and a joint call before the founder steps fully out. Done this way, no customer ever feels abandoned and no rep ever inherits a deal they cannot defend. Done the other way, you watch a quarter of revenue stall while the new person learns the relationships from scratch."),
      outcome: v('comp3Outcome', "A 90-day transfer schedule with named owners and dates — so the handoff is a calendar, not an event."),
    },
    {
      number: '04',
      title: v('comp4Title', 'Stay Available as the Escalation Path, Not the First Line'),
      detail: v('comp4Detail', "Stepping out is not disappearing. The founder voice still matters at the top of certain deals — strategic accounts, board-level buyers, deals over a defined dollar threshold. The mistake is making the founder available for everything. That collapses the new system instantly because reps will route around it the moment friction appears. The fix is a written escalation rule: the founder gets pulled into a deal only when the rep requests it, only above a defined deal size or buyer level, and only with a specific, prepared agenda. The rep owns the cadence. The founder shows up, says the thing only the founder can say, and leaves. That is the pattern that lets a founder remain a strategic asset without becoming the bottleneck again."),
      outcome: v('comp4Outcome', "A clear, written rule that defines when the founder steps in — so the team gets the founder voice when it matters and nothing when it does not."),
    },
  ]

  const dayOnePhases = [
    {
      number: '01',
      title: v('phase1Title', 'Day 1 — Start the Recording, Name the Successor'),
      detail: v('phase1Detail', "Day 1 of stepping out is not a calendar event. It is two practical actions. First: turn on the call recorder. Every founder sales call from this point forward gets recorded and transcribed. That archive is the raw material for the playbook. Second: name the human who will own the first stage of the pipeline without you — a Fractional Sales Leader, your strongest internal hire, or your operations partner. They sit in on every call from Day 1, not to run them, but to start absorbing the patterns. There is no announcement, no team meeting, no big pivot. The day-to-day looks identical to last week. The difference is structural and invisible — and it is what makes the rest of the transition possible."),
    },
    {
      number: '02',
      title: v('phase2Title', 'Week 1 to 4 — Extract the Playbook, Map the Pipeline'),
      detail: v('phase2Detail', "Inside the first month, the recordings get turned into a written playbook draft and the pipeline gets re-stage to match how deals actually move. Required CRM fields enforce qualification. The weekly pipeline review goes on the calendar — same time, every week, never cancelled. The successor begins running the cadence: setting agendas, opening the meeting, calling out slipping deals. The founder still owns every relationship and every close — nothing has transferred yet. What has changed is that for the first time, someone other than the founder can describe in writing what a qualified deal looks like, where every active deal stands, and what has to happen this week to move it forward."),
    },
    {
      number: '03',
      title: v('phase3Title', 'Day 30 to 90 — Transfer Accounts on Schedule, Step Into Escalation'),
      detail: v('phase3Detail', "Starting around day 30, the handoff begins on a written schedule. New inbound leads route to the successor immediately — clean break, no founder shadow. Active discovery deals transfer with two co-led calls, then the rep takes over. Late-stage deals stay with the founder. By day 60, the rep is running discovery solo and bringing the founder in only on demos for strategic accounts. By day 90, the founder has stepped out of the daily pipeline entirely and is operating as the escalation path on the deals where the founder voice still moves the needle. Revenue is steady or up — because the system was built before the step-out, not after."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Founder announces "I am stepping out" on a Monday'),
      withIt: v('compare1With', 'Step-out happens silently over 90 days on a written schedule'),
    },
    {
      without: v('compare2Without', 'Sales motion lives in the founder\'s head — never written down'),
      withIt: v('compare2With', 'Calls recorded, patterns extracted, playbook in writing before any handoff'),
    },
    {
      without: v('compare3Without', 'New person inherits all accounts at once and stalls deals'),
      withIt: v('compare3With', 'Accounts transfer in tranches: inbound first, late-stage last'),
    },
    {
      without: v('compare4Without', 'Pipeline is invisible to anyone but the founder'),
      withIt: v('compare4With', 'Pipeline stages, exit criteria, and weekly review run without the founder'),
    },
    {
      without: v('compare5Without', 'Founder remains "available" — gets dragged back into every deal'),
      withIt: v('compare5With', 'Written escalation rule defines exactly when the founder is pulled in'),
    },
    {
      without: v('compare6Without', 'Revenue dips 20–30% in the quarter of the step-out'),
      withIt: v('compare6With', 'Revenue stays flat or grows because the system was built before the exit'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How long does a safe founder step-out actually take?",
      a: "Roughly 90 days for the structural transition and another 60 to 90 days before the founder is fully out of the day-to-day pipeline. The first 30 days are documentation and infrastructure. Days 30 to 60 are graduated handoff of inbound and early-stage deals. Days 60 to 90 transfer the rest, with the founder remaining only as the escalation path on strategic accounts. Founders who try to step out faster usually get pulled back in within six weeks.",
    },
    {
      q: "Will revenue dip when I stop selling?",
      a: "It dips when the system that replaces you is not in writing before you step back. It does not dip when you have a documented playbook, a pipeline that is visible to someone other than you, and a phased handoff schedule. The founders who lose revenue during a step-out almost always announced the exit before they built the bench. The founders who hold revenue steady built the bench first and then stepped out quietly over a quarter.",
    },
    {
      q: "Can I do this without hiring a full-time VP of Sales?",
      a: "Yes — and most $1M–$10M ARR companies should. A full-time VP at this stage is roughly $400K all-in and has a high failure rate when hired into a company without a documented playbook. A Fractional Sales Leader runs the structural transition in 90 days at roughly 25% of the cost, and you finish with a system in writing rather than a dependency on one new hire. After the system is built, you can decide whether you actually need a full-time VP or whether the fractional model continues to fit.",
    },
    {
      q: "What if my customers only want to deal with me?",
      a: "That feeling is real for the top five or ten accounts. It is rarely true for the rest. The fix is a sequenced introduction: a co-branded email from you and the new owner, one joint call where you explicitly transfer trust, and a written escalation path for anything strategic. For the accounts where the relationship genuinely cannot transfer, you stay involved at the executive level only and let the new owner run the day-to-day. Over six months, the relationship usually transfers. The founders who never test this stay stuck in their own pipeline forever.",
    },
    {
      q: "How do I know I am ready to step out at all?",
      a: "Three signals: deals are stalling because you are the bottleneck, you are the only person who can describe what a qualified opportunity looks like, and pipeline visibility lives in your head. If any of those are true, you are ready — and the longer you wait, the harder the transition gets. The right time to step out is before the pipeline forces you to. The wrong time is after a key deal slips because you were too thin to cover it.",
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
        headline: 'How Do I Step Out of Day-to-Day Sales Without Losing Revenue?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-do-i-step-out-of-day-to-day-sales-without-losing-revenue',
        datePublished: '2026-04-24',
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
              {v('heroTag', 'The Founder Step-Out Playbook')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Do I Step Out of Day-to-Day Sales')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Losing Revenue?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'What Does Day 1 Look Like?')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders ready to get out of the daily pipeline without watching revenue dip in the quarter of the exit. A sequenced 90-day handoff — not a one-day announcement.")}
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

      {/* The Four Guardrails */}
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
              {v('sectionComponentsHeading', 'The Four Guardrails for Stepping Out Without Losing Revenue')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComponentsSubheading', 'Skip any one of these and the step-out becomes a step-back inside six weeks. All four are non-negotiable.')}
            </motion.p>
            <div className="space-y-8">
              {guardrails.map((item, i) => (
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
              {v('seoPara1', "Most founders try to step out of sales the same way: a Monday morning announcement, a quick rep handoff, and a hope that the pipeline holds. It almost never does. Revenue dips because every active deal still depends on the founder's qualification logic, the founder's pricing instinct, and the founder's relationship with the buyer — and none of that has been written down. The dip is not the cost of stepping out; it is the cost of stepping out without first installing the system that replaces you.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The capital-efficient version of this transition does not require a $400K full-time VP hire. If you want the full picture of what gets built first, read")}{' '}
              <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How to Build a Sales System Without a Full-Time VP →
              </Link>
              {v('seoPara2b', ". And if the question on your mind is what specifically breaks first when you stop selling — and how to prevent each one — start with")}{' '}
              <Link href="/what-breaks-first-when-founder-stops-selling" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What Breaks First When a Founder Stops Selling →
              </Link>
              {v('seoPara2c', ". The step-out is a sequencing problem, not a courage problem.")}
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
              {v('sectionCompareHeading', 'Stepping Out the Wrong Way vs. the Right Way')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'Same goal. Two transition models. One protects the quarter and one costs it.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Unstructured Step-Out')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Sequenced 90-Day Handoff')}
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

      {/* Day 1 / Week 1 / 90 Day Sequence */}
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
              {v('sectionSequenceHeading', 'What Day 1, Week 1, and Day 90 Actually Look Like')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionSequenceSubheading', 'A real step-out is invisible to customers and obvious in the CRM. Here is the actual cadence.')}
            </motion.p>
            <div className="space-y-8">
              {dayOnePhases.map((item, i) => (
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
              {v('aboutBio2', "I run founder step-outs for $1M–$10M ARR companies — the playbook extraction, the pipeline rebuild, the phased account handoff, and the escalation rules that keep the founder strategic without keeping them stuck. Most engagements move the founder out of daily pipeline in 90 days with revenue flat or up — and without the $400K bet of a full-time VP hire.")}
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
                <Link href="/how-to-replace-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Replace Founder-Led Sales Without Losing Momentum →
                </Link>
              </li>
              <li>
                <Link href="/what-breaks-first-when-founder-stops-selling" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Breaks First When a Founder Stops Selling? →
                </Link>
              </li>
              <li>
                <Link href="/founder-led-sales-exit-checklist" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Founder-Led Sales Exit Checklist →
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
              {v('ctaHeadline', 'Plan the Step-Out Before You Take It')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map exactly what your 90-day step-out should look like — what to document first, which accounts to transfer in which order, and where the founder voice still has to show up. No commitment, no pitch deck.")}
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
