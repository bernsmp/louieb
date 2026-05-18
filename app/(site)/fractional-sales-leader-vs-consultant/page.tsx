'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'fslVsConsultantPage'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FractionalSalesLeaderVsConsultantPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "A consultant gives you a report. A Fractional Sales Leader gives you a working sales function. If your gap is execution, a report will not close it."),
    v('takeaway2', "Consultants are accountable for the quality of their advice. Fractional Sales Leaders are accountable for revenue — pipeline coverage, close rate, quota attainment."),
    v('takeaway3', "A consultant interviews the CEO and writes a strategy. A Fractional Sales Leader runs a sales audit, builds the playbook, manages the reps, and rides every deal review."),
    v('takeaway4', "At $1M–$10M ARR, your problem is rarely 'we don't know what to do.' It is 'no one is owning the doing.' Consultants do not solve that. Embedded leadership does."),
    v('takeaway5', "When the engagement ends, a consultant leaves you with a slide deck. A Fractional Sales Leader leaves you with a documented playbook, a clean CRM, a trained team, and a forecast you can run a board meeting from."),
  ]

  const differences = [
    {
      number: '01',
      title: v('diff1Title', 'Discovery: Sales Audit vs. CEO Interview'),
      detail: v('diff1Detail', "A Fractional Sales Leader starts with a Sales Audit — they read the CRM, sit on calls, interview every rep, and trace the last 50 closed and lost deals. They are looking for the actual gap, not the perceived one. A consultant typically starts with the CEO. They take the founder's mental model of the sales function and translate it into a strategy document. That document is only as accurate as the founder's view of a system they have admitted they are too close to. The audit beats the interview because it surfaces what is actually broken — not what the founder thinks is broken."),
      outcome: v('diff1Outcome', "A diagnosis based on evidence — calls, CRM data, deal autopsies — not on a founder's self-report from inside the problem."),
    },
    {
      number: '02',
      title: v('diff2Title', 'Output: Built System vs. Written Recommendation'),
      detail: v('diff2Detail', "Consultants deliver documents — a strategy deck, a playbook draft, a market assessment, a roadmap. The implementation is your problem. A Fractional Sales Leader delivers a working sales function: a playbook your team actually uses, a CRM that reflects reality, qualification criteria enforced in the pipeline, a forecast process that runs weekly, and reps trained to operate inside it. The difference is not effort. It is ownership. The consultant owns the document. The Fractional Sales Leader owns the result."),
      outcome: v('diff2Outcome', "A sales machine you can hand to a future VP — not a 60-page PDF that sits on a shared drive."),
    },
    {
      number: '03',
      title: v('diff3Title', 'Accountability: Results vs. Advice'),
      detail: v('diff3Detail', "A consultant is accountable for the quality of their advice. If you implement it badly, that is on you. If you do not implement it at all, that is also on you. A Fractional Sales Leader is accountable for outcomes — quota attainment, pipeline coverage, close rate, cycle length, ramp time on new reps. They sit in the same forecast review you do. They have skin in the same outcome you have. When the number is missed, they do not get to point at the document. They have to fix the system."),
      outcome: v('diff3Outcome', "A partner whose reputation depends on your revenue growth — not on whether their deck was received well."),
    },
    {
      number: '04',
      title: v('diff4Title', 'Engagement: Embedded vs. Project-Based'),
      detail: v('diff4Detail', "A consultant runs a project: scope, timeline, deliverable, invoice, exit. Four to eight weeks is typical. A Fractional Sales Leader is embedded — recurring weekly involvement, often two or three days a week, for six to twelve months. They show up in your standup. They run your pipeline review. They are in the room when a big deal is on the line. The work is not 'analyze and recommend.' It is 'operate alongside you until the function runs on its own.' Embedded leadership is what changes behavior. Project work, however well-scoped, almost never does."),
      outcome: v('diff4Outcome', "A weekly rhythm of coaching, deal reviews, and team development — not a kickoff, a status meeting, and a final report."),
    },
    {
      number: '05',
      title: v('diff5Title', 'Team: Manages People vs. Talks About Them'),
      detail: v('diff5Detail', "Consultants rarely manage anyone. They might recommend a hire, suggest a comp plan, or critique a rep's call recording, but they do not run a one-on-one, write a performance plan, or fire anyone who needs to go. A Fractional Sales Leader does all of it. They interview candidates. They onboard new reps. They coach in the moment. They hold weekly accountability conversations. They make the hard call when a rep is not going to make it. If your sales problem is partly a people problem — and it almost always is — a consultant cannot fix it. They can only describe it."),
      outcome: v('diff5Outcome', "A functioning sales team, not a written assessment of the team you currently have."),
    },
  ]

  const comparisonRows = [
    {
      consultant: v('compare1Consultant', "Speaks mostly with the CEO and writes a strategy"),
      fsl: v('compare1Fsl', "Runs a full sales audit before recommending anything"),
    },
    {
      consultant: v('compare2Consultant', "Project-based — 4 to 8 weeks, then disengaged"),
      fsl: v('compare2Fsl', "Embedded — recurring weekly involvement for 6 to 12 months"),
    },
    {
      consultant: v('compare3Consultant', "Accountable for the quality of the advice"),
      fsl: v('compare3Fsl', "Accountable for revenue, pipeline, and team performance"),
    },
    {
      consultant: v('compare4Consultant', "Recommends a hiring plan you have to execute"),
      fsl: v('compare4Fsl', "Interviews, hires, onboards, and coaches the salespeople"),
    },
    {
      consultant: v('compare5Consultant', "Hands off a playbook draft and a roadmap"),
      fsl: v('compare5Fsl', "Builds the playbook, the CRM, and the daily cadence"),
    },
    {
      consultant: v('compare6Consultant', "Leaves a slide deck on a shared drive"),
      fsl: v('compare6Fsl', "Leaves a working sales function the next leader can run"),
    },
  ]

  const whenToHire = [
    {
      number: '01',
      title: v('when1Title', "Hire a Fractional Sales Leader When the Gap Is Execution"),
      detail: v('when1Detail', "If you have already had the strategy conversation — maybe more than once — and the bottleneck is that no one is owning the rep coaching, the pipeline hygiene, the forecasting discipline, or the team accountability, a consultant will not help. You do not need another document. You need a leader who shows up every week, runs the operating cadence, and stays until it works without them. This is the most common reality at $1M–$10M ARR."),
    },
    {
      number: '02',
      title: v('when2Title', "Hire a Consultant When the Gap Is Strategic"),
      detail: v('when2Detail', "If you have a capable internal sales leader, strong execution discipline, and a specific strategic question — repricing, repositioning, channel design, an objective audit before a board meeting — a consultant can be exactly the right fit. They bring outside pattern recognition, deliver a crisp recommendation, and exit. The trap is using a consultant when the real problem is implementation, because the strategy doc then becomes evidence of effort rather than progress."),
    },
    {
      number: '03',
      title: v('when3Title', "If You Are Unsure, the Audit Tells You"),
      detail: v('when3Detail', "A Fractional Sales Leader's first deliverable is usually a 4-to-6 week Sales Audit. That audit alone will tell you whether the gap is strategic (in which case you may not need ongoing fractional leadership at all) or operational (in which case the engagement converts into a full build). Either way, you get an evidence-based diagnosis instead of a consultant's opinion, and you keep the option of fractional leadership without committing to it up front."),
    },
  ]

  const defaultFaqs = [
    {
      q: "What is the main difference between a Fractional Sales Leader and a Consultant?",
      a: "A consultant is accountable for the quality of their advice and the deliverable they hand over — usually a strategy document, audit, or playbook draft. A Fractional Sales Leader is accountable for revenue outcomes — quota attainment, pipeline coverage, close rate, and team performance — and is embedded weekly in your business until the sales function works without them. The consultant tells you what to do. The Fractional Sales Leader does it with you.",
    },
    {
      q: "Why do consultants alone often fail to fix a sales problem?",
      a: "Because at $1M–$10M ARR the gap is rarely strategic — it is operational. Most founders already know roughly what they should be doing. The hard part is the daily implementation: running pipeline reviews, coaching reps, enforcing CRM discipline, holding people accountable, making hire and fire decisions. A consultant produces a document. A document does not change rep behavior, does not run the cadence, and does not own the number. You can implement a great consultant's playbook badly — and most founders do, because they are still buried inside the deals.",
    },
    {
      q: "When should I hire a consultant instead of a Fractional Sales Leader?",
      a: "Hire a consultant when you have strong execution capacity and need an objective outside view on a specific strategic question — repricing, ICP redefinition, GTM channel strategy, M&A sales due diligence, or a sales audit before a board meeting. Hire a Fractional Sales Leader when your bottleneck is leadership and execution: nobody is owning the team, the forecast, the playbook, or the operating cadence at the depth and discipline the business needs.",
    },
    {
      q: "Is a Fractional Sales Leader more expensive than a consultant?",
      a: "Different cost profile, not necessarily more expensive. A consultant engagement is typically $15,000–$50,000 for a 4-to-8 week project — a one-time spend that produces a document. A Fractional Sales Leader is typically $6,000–$14,000 per month, ongoing for 6 to 12 months — recurring spend that produces a working sales function. The right way to compare is per dollar of revenue impact. A document that does not get implemented costs you the full project fee. A working sales system pays back the fractional fee inside the first one or two new deals.",
    },
    {
      q: "Can a Fractional Sales Leader do both strategy and execution?",
      a: "Yes, and most experienced ones do. The engagement typically opens with a 4-to-6 week Sales Audit that delivers a strategic diagnosis — what is broken, what is missing, what to fix first, and what it will cost. If you stop there, you have effectively bought a consulting engagement. If you continue, the Fractional Sales Leader stays embedded to install the system, run the team, and exit only when the function runs on its own. You get both the outside-view strategy and the inside-the-room execution from the same person.",
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
        headline: 'Fractional Sales Leader vs Consultant: Key Differences Explained',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/fractional-sales-leader-vs-consultant',
        datePublished: '2026-05-17',
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
              {v('heroTag', 'Choosing Sales Leadership That Sticks')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Fractional Sales Leader')}
              <span className="block text-blue-400">{v('heroAccent', 'vs Consultant — What Actually Builds Revenue?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', "Why Embedded Leadership Beats Outside Advice at $1M–$10M ARR")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "A consultant hands you a strategy. A Fractional Sales Leader runs the team, builds the playbook, and is accountable for the number. Here is when each one is the right call — and why founders stuck in founder-led sales almost always need the second.")}
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

      {/* Five Differences */}
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
              {v('sectionDiffHeading', 'The Five Differences That Actually Matter')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionDiffSubheading', "Both roles have a place. But at $1M–$10M ARR, these five gaps are where consultants quietly stop being useful — and embedded leadership starts.")}
            </motion.p>
            <div className="space-y-8">
              {differences.map((item, i) => (
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

      {/* SEO paragraphs */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara1', "Most founders stuck in founder-led sales have already hired at least one consultant. They have a strategy deck, an audit report, maybe a playbook draft. None of it changed the number. That is not because the consultant was wrong. It is because consulting is an information delivery system, and the gap at $1M–$10M ARR is not an information gap — it is an execution gap. A Fractional Sales Leader fills that gap by sitting inside the operation: in the deal reviews, in the one-on-ones, in the forecast meeting, on the calls. They do not hand you a document and leave. They run the function until it runs without them.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "If you are weighing the two, start with a clean diagnosis. Read")}{' '}
              <Link href="/fractional-sales-leader" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What a Fractional Sales Leader Actually Does →
              </Link>
              {v('seoPara2b', " for the embedded-leadership picture, and")}{' '}
              <Link href="/250k-mistake-vp-sales-hire-too-early" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                The $250K Mistake: Hiring a VP of Sales Too Early →
              </Link>
              {v('seoPara2c', " for why founders skip past fractional too quickly and pay for it. The choice between consultant, fractional, and full-time VP is not about seniority. It is about whether the business needs analysis, embedded execution, or a permanent owner — and at this stage, almost always the middle one.")}
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
              {v('sectionCompareHeading', 'Consultant vs. Fractional Sales Leader, Side by Side')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "Same engagement window, very different outputs. Read across each row and the pattern is hard to miss.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Consultant')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Fractional Sales Leader')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.consultant}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.fsl}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* When to Hire Which */}
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
              {v('sectionWhenHeading', 'When to Hire Which')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionWhenSubheading', "Both roles are real. The mistake is picking the wrong one for the gap you actually have.")}
            </motion.p>
            <div className="space-y-8">
              {whenToHire.map((item, i) => (
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
              {v('aboutBio2', "I have been on both sides of this comparison — hired as a consultant to write the strategy, and hired as a Fractional Sales Leader to build the function. The work that produces revenue is almost never the strategy work. It is the operating cadence, the deal reviews, the rep coaching, and the accountability conversations that happen every week with someone who owns the number alongside the founder.")}
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
                <Link href="/fractional-sales-leader-vs-sales-consultant" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Fractional Sales Leader vs Sales Consultant: A Closer Look at the Sales-Specific Version of This Question →
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How Do I Build a Sales System Without Hiring a Full-Time VP of Sales? →
                </Link>
              </li>
              <li>
                <Link href="/videos/ask-this-before-hiring-a-fractional-sales-leader" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Watch: The One Question to Ask Before Hiring a Fractional Sales Leader →
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
              {v('ctaHeadline', "Not Sure Which One You Need? Start With the Audit.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you whether your gap is strategic — in which case a consultant or a Sales Audit is the right call — or operational, in which case embedded fractional leadership is what actually moves the number.")}
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
