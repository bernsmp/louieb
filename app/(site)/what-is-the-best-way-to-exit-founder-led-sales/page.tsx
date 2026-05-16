'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-05'
const CMS_SECTION = 'seoBestWayToExitFounderLedSales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function BestWayToExitFounderLedSalesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', 'The best way to exit founder-led sales is not to stop selling. It is to replace yourself stage-by-stage, in a defined order, against a written checklist — so revenue never depends on the day you decide to step back.'),
    v('takeaway2', "Most $1M–$10M ARR founders try to exit by hiring. That fails because they are handing a person what should have been a system. A new rep cannot replicate your instincts. A written playbook can."),
    v('takeaway3', 'A founder-led sales exit checklist has five non-negotiable items: a codified playbook, a stage-by-stage handover, forecast discipline in the CRM, a Builder-profile hire, and a witnessed handover period. Skip any one and the exit reverses inside six months.'),
    v('takeaway4', 'The exit takes 90 to 180 days when run against a checklist. The exit takes 18 months or never when run on instinct. A Fractional Sales Leader cuts that timeline roughly in half because they have done it before and they will not skip steps.'),
    v('takeaway5', "Your job after the exit is not to disappear. It is to coach the new sales motion from one step back — strategy, hiring, customer escalations — instead of running every deal yourself. That is leadership. The deal-by-deal work is not."),
  ]

  const checklistItems = [
    {
      number: '01',
      title: v('item1Title', 'Codify the Founder Sales Motion Into a Written Playbook'),
      detail: v('item1Detail', "You cannot exit a process that lives only in your head. The first checklist item is the playbook — the written translation of how you actually sell. It defines the Ideal Customer Profile with specific constraints (industry, size, role, disqualifying characteristics). It scripts the discovery call. It documents every objection and the best response to each one. It contains the email sequences, the proposal structure, the closing cadence. Most founders skip this step because writing it down feels slower than just doing the deal. That is exactly why the exit never happens — the document that would free you is the one you are too busy to write."),
      outcome: v('item1Outcome', "A 20-to-40-page playbook anyone on the team can run from on day one — the artifact that turns founder instinct into a teachable system."),
    },
    {
      number: '02',
      title: v('item2Title', 'Replace Yourself Stage-by-Stage, Top of Funnel First'),
      detail: v('item2Detail', "Founders who try to exit all at once almost always fail. The reverse is true: founders who exit stage-by-stage — starting with the top of the funnel and working downward — almost always succeed. Hand off prospecting and discovery first. Stay in the room for demos and proposals for the next 60 days. Then hand off the demo. Then the proposal. Then the close. Each stage gets a written handover criteria and a measurable outcome. By the time you are out of the closing stage, the rest of the funnel is already running without you and the team has caught the deals that would have stalled."),
      outcome: v('item2Outcome', "A controlled, reversible handover where revenue never spikes downward — because no single transition carries the whole exit."),
    },
    {
      number: '03',
      title: v('item3Title', 'Install Forecast Discipline — CRM Truth, Not CRM Hope'),
      detail: v('item3Detail', "Founders forecast on instinct. Salespeople, without explicit criteria, forecast on optimism. The exit cannot happen until the CRM is telling the truth about what is real and what is not. Every pipeline stage needs written entry and exit criteria based on buyer actions, not seller activities. Required fields enforce qualification discipline. Deals that lack the criteria get killed without ceremony. By the end of this step you should be able to look at the pipeline once a week and trust the number you see — because if you cannot trust the forecast, you will not let go of the deals, and the exit reverses."),
      outcome: v('item3Outcome', "A weekly forecast you can take to the board without footnotes — and a pipeline that produces honest numbers without you running every deal review."),
    },
    {
      number: '04',
      title: v('item4Title', 'Hire the Builder Profile, Not the Maintainer'),
      detail: v('item4Detail', "Most founders hire reps who look like a junior version of themselves. That fails. At the $1M–$10M stage you do not need a maintainer who can run a mature process — you need a Builder who can execute a brand-new playbook, handle ambiguity, and operate without a VP overhead. Builders are not always the most polished interviewers. They are the ones who have lived in messy early-stage companies and shipped revenue anyway. A Fractional Sales Leader knows the profile, has the network to source it, and runs the interview loop. Hiring on your own at this stage usually produces a maintainer-mismatch — and the exit reverses inside two quarters."),
      outcome: v('item4Outcome', "A first rep who can actually take the handover — ramping in 60 to 90 days into a system that already works."),
    },
    {
      number: '05',
      title: v('item5Title', 'Run the Witnessed Handover — Then Stay Out'),
      detail: v('item5Detail', "The final step is the part most founders sabotage. After the playbook is written, the stages are handed off, the CRM is honest, and the Builder is hired, there is a 60-to-90-day handover period where you are present but not driving. You sit in on deals. You coach after the call, not during it. You let deals get lost that you would have closed personally — because the lesson is worth more than the deal. A witness is critical here: a Fractional Leader, an advisor, a board member — someone who will tell you when you are slipping back in. Most founder-led exits fail not at the hiring step but at this one: the founder steps back, then steps in, then steps back, and the team learns the founder is still the safety net."),
      outcome: v('item5Outcome', "A team that closes deals without looking for you — and a founder who has actually exited, not just delegated."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', "Exit happens 'when we hire a VP' — which keeps slipping"),
      withIt: v('compare1With', 'Exit runs against a written checklist with deadlines'),
    },
    {
      without: v('compare2Without', 'Founder hands off all at once — revenue craters in 60 days'),
      withIt: v('compare2With', 'Stage-by-stage handover — top of funnel first, close last'),
    },
    {
      without: v('compare3Without', 'CRM is decorative; founder still forecasts in their head'),
      withIt: v('compare3With', 'CRM tells the truth — founder can trust the number'),
    },
    {
      without: v('compare4Without', 'First hire is a polished maintainer — wrong profile, fails fast'),
      withIt: v('compare4With', 'First hire is a Builder who can ramp inside a new playbook'),
    },
    {
      without: v('compare5Without', 'Founder steps back, steps in, steps back — team learns to wait'),
      withIt: v('compare5With', 'Witnessed 90-day handover — founder out, team running'),
    },
    {
      without: v('compare6Without', 'Exit reverses inside 6 months — founder back in every deal'),
      withIt: v('compare6With', 'Exit holds at 90 days — founder coaches strategy, not deals'),
    },
  ]

  const whatToDoThisWeek = [
    v('todo1', "Pull your last 10 closed-won deals and write down what made each one close — that draft is the first page of your playbook"),
    v('todo2', "List every sales activity you personally did in the last 30 days; circle the ones a trained rep could do today with no playbook"),
    v('todo3', "Open your CRM. Count how many deals have a 'next step' field filled in. If it is less than 80%, you do not have forecast discipline yet"),
    v('todo4', "Write down the profile of your worst sales hire and the profile of your best — the difference is your Builder vs Maintainer criteria"),
    v('todo5', "Name the person — advisor, fractional leader, board member — who will tell you when you have slipped back into the pipeline. Without a witness, the exit reverses"),
  ]

  const defaultFaqs = [
    {
      q: 'How long does it take to exit founder-led sales the right way?',
      a: 'Ninety to 180 days when you run it against a checklist — a written playbook in the first 30 days, the stage-by-stage handover and CRM discipline in days 30–90, the Builder hire and witnessed handover in days 90–180. Exits run on instinct without a checklist take 18 months on average, and roughly half of those reverse inside the first year.',
    },
    {
      q: 'Can I exit founder-led sales without hiring anyone new?',
      a: "Sometimes — if you already have a rep on the team who can be elevated into the role, and if a Fractional Sales Leader can install the playbook, the CRM discipline, and the accountability around that rep. More often you need one new Builder hire to run the system the playbook describes. A Fractional Leader is not a replacement for that rep — it is the person who installs the system the rep operates inside.",
    },
    {
      q: 'What is the single biggest mistake founders make when trying to exit?',
      a: 'Trying to exit by hiring before the playbook exists. A new VP or rep inherits founder instinct that was never written down, fails to replicate it, and within six months the founder is back in every deal — exhausted, behind on plan, and now also paying for a hire who is failing. The fix is sequence: playbook first, infrastructure second, hire third. Never the reverse.',
    },
    {
      q: 'Do I need a full-time VP of Sales to exit founder-led sales?',
      a: 'Not at $1M–$10M ARR. A full-time VP is the right answer when you have a working sales system, a team of six or more reps, and complexity that needs a leader of leaders. Before that point, a Fractional Sales Leader installs the system at roughly 25% of the cost of a full-time VP — and your first one or two Builder reps run inside it. You hire the full-time VP after the machine already works.',
    },
    {
      q: 'How do I know if I have actually exited founder-led sales or just temporarily stepped back?',
      a: 'Three tests. First: can the team close a deal worth more than 5% of your quarterly target without you in the room? Second: do you trust the forecast number without doing your own mental recount? Third: when a deal stalls, does a rep run a defined recovery play — or do they bring it to you? If you pass all three for 90 consecutive days, the exit is real. If you fail any one of them, you have stepped back, not exited.',
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
        headline: "What's the Best Way to Exit Founder-Led Sales?",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/what-is-the-best-way-to-exit-founder-led-sales',
        datePublished: '2026-05-16',
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
              {v('heroTag', 'Founder-Led Sales Exit')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', "What's the Best Way to Exit")}
              <span className="block text-blue-400">{v('heroAccent', 'Founder-Led Sales?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'Use a Founder-Led Sales Exit Checklist.')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders ready to step out of every deal without watching revenue crater. Five checklist items, a stage-by-stage handover, and a 90-day exit that actually holds.")}
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
                href="/founder-led-sales-exit-checklist"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                See the full exit checklist →
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

      {/* The 5 Checklist Items */}
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
              {v('sectionChecklistHeading', 'The Five-Item Founder-Led Sales Exit Checklist')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionChecklistSubheading', 'Skip any one of these and the exit reverses inside six months. Run all five in order and it holds at 90 days.')}
            </motion.p>
            <div className="space-y-8">
              {checklistItems.map((item, i) => (
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
              {v('seoPara1', "The best way to exit founder-led sales is the one nobody actually wants to hear: slow down to go faster. Founders who try to exit by simply hiring — a VP, a senior rep, a head of sales — almost universally fail. The reason is structural, not personal. You are handing a new person the instinct, the relationships, and the pattern-matching that has lived in your head for years. A human cannot inherit that. A written system can. The exit checklist is how you build that system.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "If you want the full step-by-step inventory, start with the")}{' '}
              <Link href="/founder-led-sales-exit-checklist" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Founder-Led Sales Exit Checklist →
              </Link>
              {v('seoPara2b', " — the long-form companion to this page. And if your concern is what happens to revenue while you are stepping out, read")}{' '}
              <Link href="/how-do-i-step-out-of-day-to-day-sales-without-losing-revenue" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How Do I Step Out of Day-to-Day Sales Without Losing Revenue →
              </Link>
              {v('seoPara2c', '. The exit holds when revenue does. The checklist is how you make sure both happen.')}
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
              {v('sectionCompareHeading', 'Exit Without a Checklist vs. Exit With One')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'The difference is not effort or talent. It is whether the steps are written down and run in order.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Without the Checklist')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'With the Checklist')}
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
              {v('sectionTodoHeading', 'What to Do This Week')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionTodoSubheading', 'Before bringing in outside help, run these five diagnostics. They will tell you which checklist item to start with.')}
            </motion.p>
            <div className="space-y-3">
              {whatToDoThisWeek.map((item, i) => (
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
              {v('aboutBio2', "I have run this exit checklist with more founders than I can count. The pattern is always the same: the founders who treat it as a checklist exit cleanly in 90 to 180 days. The founders who treat it as a vibe spend two years half-exiting and end up back in every deal. The checklist is not the magic. The discipline of running it in order is.")}
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
                <Link href="/founder-led-sales-exit-checklist" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Founder-Led Sales Exit Checklist →
                </Link>
              </li>
              <li>
                <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Get Out of Founder-Led Sales →
                </Link>
              </li>
              <li>
                <Link href="/how-do-i-step-out-of-day-to-day-sales-without-losing-revenue" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How Do I Step Out of Day-to-Day Sales Without Losing Revenue? →
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
              {v('ctaHeadline', 'Ready to Actually Exit — Not Just Step Back?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map where you are on the exit checklist today, what is missing, and what it would take to get out of every deal in the next 90 to 180 days — without revenue dropping while you do.")}
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
