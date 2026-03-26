'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoDiagnoseSalesTeamProblems'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const rootCauses = [
  {
    number: '01',
    cause: 'Pipeline Problem',
    signal: 'Not enough qualified opportunities entering the top of the funnel',
    diagnosis: 'Pull your pipeline entry rate for the last 90 days. If the number of new qualified opportunities is flat or declining while activity (calls, emails, meetings) stays constant, you have a targeting or messaging problem — not a rep problem. The reps are working. They\'re working on the wrong companies or with the wrong message.',
    questions: ['How many new stage-1 qualified deals entered the pipeline this month vs. 60 days ago?', 'What percentage of outreach converts to a first meeting?', 'Is the ICP too broad — are reps spending time on companies that never close?'],
    fix: 'Re-validate the ICP against the last 20 closed-won deals. Tighten the target list before increasing outreach volume.',
  },
  {
    number: '02',
    cause: 'Process Problem',
    signal: 'Deals enter the pipeline but stall or die without clear reasons',
    diagnosis: 'Run a closed-lost analysis on the last 15 deals that went past Stage 2 and didn\'t close. If the loss reasons are vague ("went quiet," "timing") or inconsistent across reps, your pipeline stages aren\'t built on buyer milestones — they\'re built on seller activities. Deals aren\'t moving forward because nobody knows what forward looks like.',
    questions: ['Can every rep articulate the specific buyer action required to move a deal from stage 2 to stage 3?', 'What percentage of deals stall at the same stage?', 'How long is the average deal in "proposal sent"?'],
    fix: 'Rebuild pipeline stages with explicit buyer milestones as exit criteria. Every stage advance requires a documented buyer commitment, not a seller action.',
  },
  {
    number: '03',
    cause: 'People Problem',
    signal: 'Pipeline is healthy and process is clear, but individual reps can\'t convert',
    diagnosis: 'If you have a working pipeline and clear stage definitions, and one or two reps are still dramatically underperforming against the others, that\'s a people problem — not a process problem. Analyze each rep\'s metrics individually: close rate from Stage 3, average deal size, discount frequency. Underperforming reps at this stage usually have one of three issues: weak discovery skills, inability to manage multi-stakeholder deals, or failure to establish urgency.',
    questions: ['Are your top and bottom reps working on similar quality deals or are deal assignments skewed?', 'What does the call recording data show about quality differences in discovery?', 'Has the underperforming rep ever closed a deal of this complexity independently?'],
    fix: 'Before replacing a rep, spend 2 weeks on call coaching with specific feedback tied to call recordings. If performance doesn\'t improve with direct coaching, you have your answer.',
  },
  {
    number: '04',
    cause: 'Compensation Problem',
    signal: 'Activity levels and deal quality are fine, but close rates have declined',
    diagnosis: 'If your reps are generating pipeline and the deals look good but close rates are declining, check whether the comp plan is still aligned with the behaviors you need. Common comp plan failures: over-emphasis on new logos creates neglect of expansion, accelerators that only kick in after unrealistic thresholds produce no urgency, base-to-variable ratio that\'s too high produces risk-averse reps who don\'t push deals to close.',
    questions: ['When did close rates start declining — was there a comp plan change around the same time?', 'Are reps sandbagging deals into the next quarter to hit accelerators?', 'Is the comp plan rewarding the behaviors that actually produce revenue?'],
    fix: 'Run a deal-timing analysis: are deals clustering at quarter end in a way that suggests sandbagging? If yes, the problem is incentive design, not rep capability.',
  },
  {
    number: '05',
    cause: 'Leadership Problem',
    signal: 'The team has talent and deals are available, but direction and accountability are absent',
    diagnosis: 'This is the hardest problem to diagnose from inside the business because the founder is usually the source of it. When a team has capable reps, reasonable pipeline, and no clear accountability structure — no weekly pipeline reviews, no quotas, no performance expectations — the limiting factor is management. The reps don\'t know what good looks like, what\'s expected, or what the consequences of missing targets are.',
    questions: ['Do reps have individual quotas they can state from memory?', 'Is there a weekly pipeline review with deal-level accountability?', 'Has anyone had a direct performance conversation with a rep in the last 30 days?'],
    fix: 'Establish the minimum accountability infrastructure: individual quotas, a weekly pipeline review, and monthly performance check-ins tied to data. If you can\'t run this yourself, it\'s time to bring in a fractional sales leader.',
  },
]

const selfAssessmentItems = [
  { question: 'Do you know your stage-by-stage conversion rates for the last 12 months?', category: 'Data' },
  { question: 'Do you know the primary loss reason for your last 10 deals?', category: 'Data' },
  { question: 'Can you state each rep\'s close rate and average deal size independently?', category: 'People' },
  { question: 'Do pipeline stages have written buyer milestone exit criteria?', category: 'Process' },
  { question: 'Is there a weekly pipeline review with accountability to next actions?', category: 'Management' },
  { question: 'Do reps have individual written quotas with a defined measurement period?', category: 'Management' },
  { question: 'Has the ICP been validated against closed-won deal data in the last 6 months?', category: 'Strategy' },
  { question: 'Does your comp plan reward exactly the behaviors that produce revenue?', category: 'Compensation' },
]

const faqs = [
  {
    q: 'How long does a proper sales team diagnosis take?',
    a: 'A thorough self-assessment using the five root causes above takes 2–4 hours with your own data. A professional sales audit — where someone external analyzes your CRM data, reviews call recordings, and interviews reps — typically takes one to two weeks. The value of the external audit is that founders are often too close to the problem to see the real root cause. They assume it\'s a people problem when it\'s actually a process problem, or vice versa.',
  },
  {
    q: 'What if multiple root causes apply at the same time?',
    a: 'They often do — and that\'s normal. A pipeline problem and a process problem can coexist. A compensation problem and a leadership problem often appear together. The key is to rank them by impact: which root cause is costing you the most revenue right now? Fix that one first. Trying to fix all five simultaneously usually means none get fixed properly.',
  },
  {
    q: 'How do I know if the problem is the rep or the process?',
    a: 'Test it systematically: put the same rep in a different territory or segment with a clearer process. If performance improves, it was the process. If it doesn\'t, it\'s the rep. You can also compare metrics across reps working on similar deals — if one rep consistently underperforms against the group with similar deal quality and pipeline access, the evidence points toward capability, not process.',
  },
  {
    q: 'When should I bring in outside help instead of diagnosing myself?',
    a: 'If you\'ve identified the problem and you know what to fix — start internally. Bring in outside help when: (1) you\'ve been working on the problem for two or more quarters without improvement, (2) your own involvement in selling makes it hard to assess objectively, or (3) the diagnosis points to a leadership gap that requires someone else to fill the accountability role. The third case is the most common reason founders engage a fractional sales leader.',
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'Article',
      headline: 'How to Diagnose Why Your Sales Team Isn\'t Growing Revenue: A Self-Assessment for Founders',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/diagnose-sales-team-problems',
    },
  ],
}

export default function DiagnoseSalesTeamProblemsPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const displayFaqs = cmsfaqs(4, faqs)
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
              Sales Diagnostics
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Diagnose Why Your Sales Team')}
              <span className="block text-blue-400">{v('heroAccent', "Isn't Growing Revenue")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Before you fire someone, change the comp plan, or hire a VP of Sales — run this diagnosis. Flat or declining revenue has five root causes. This self-assessment tells you which one is yours.")}
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
                href="/why-sales-team-not-growing-revenue"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Why sales teams stop growing revenue →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Root Causes */}
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
              The 5 Root Causes of Stalled Revenue Growth
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Most stalled revenue has one primary cause. Identify yours before you spend money fixing the wrong thing.
            </motion.p>
            <div className="space-y-8">
              {rootCauses.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <div>
                      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-500">{item.cause}</div>
                      <h3 className="text-xl font-bold text-neutral-900">{item.signal}</h3>
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.diagnosis}</p>
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-bold text-neutral-700">Diagnostic Questions:</p>
                    <ul className="space-y-1">
                      {item.questions.map((q, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="mt-1 shrink-0 text-blue-400">?</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Fix: </span>
                    <span className="text-blue-800 text-sm">{item.fix}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              The most expensive mistake in sales management is fixing the wrong thing. Founders who have a process problem fire reps. Founders who have a pipeline problem add comp plan complexity. Founders who have a leadership problem hire a VP of Sales who walks into an infrastructure-free environment and fails within 9 months. Each of these mistakes costs six figures and 6–12 months of momentum. The diagnosis step isn't optional — it's the most important investment you can make before acting.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The five root causes above aren't theoretical. They're the categories I assess in the first 30 days of every engagement. In most cases, founders know something is wrong — they just don't know which root cause is primary. Getting that right changes everything: the right fix implemented in the right place produces results within 60–90 days. The wrong fix produces frustration and regret. If you've been struggling with revenue growth for more than two quarters, there's a specific reason — and it's findable. Start with{' '}
              <Link href="/what-is-a-sales-audit" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                understanding what a sales audit reveals →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Self-Assessment Checklist */}
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
              The 8-Point Self-Assessment
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Answer each question honestly. Every "no" is a root cause worth investigating.
            </motion.p>
            <div className="space-y-3">
              {selfAssessmentItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
                >
                  <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">{item.category}</span>
                  <p className="text-neutral-700">{item.question}</p>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "The five root causes above are the framework I use in every first-month diagnosis. In 20+ years of working with sales teams, I've rarely seen a revenue problem that wasn't traceable to one of these five categories. The founders who fix things fastest are the ones who get the diagnosis right first — then move with focus.")}
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
              {v('ctaHeadline', "Know the Symptoms — Need the Diagnosis?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk through your specific revenue situation, identify which of the five root causes is primary, and tell you exactly where to start. No slides. Just diagnosis.")}
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
