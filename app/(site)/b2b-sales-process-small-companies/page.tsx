'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-04'
const CMS_SECTION = 'seoB2bSalesProcessSmallCompanies'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const faqs = [
  {
    q: "What is a B2B sales process for a small company?",
    a: "A B2B sales process for a small company is a repeatable, five stage system a two to six person sales team can run without a Salesforce admin or a RevOps hire. It defines how a lead becomes a customer, who owns each step, what has to be true before a deal moves forward, and which numbers matter. The five stages that work for most $1M to $10M ARR B2B companies are Target, Engage, Qualify, Validate, and Close. Each stage has one goal, a clear exit gate, and a specific metric. Anything more elaborate collapses under its own weight. Anything simpler gives founders the forecast accuracy of a coin flip.",
  },
  {
    q: "How many stages should my sales process have?",
    a: "Five. For a B2B company between $1M and $10M ARR, five stages give you enough structure to forecast accurately, coach salespeople, and diagnose where deals die, without creating admin work that no one does. Seven and eight stage processes come from enterprise playbooks that assume full time sales operations support. Small companies do not have that support, so the extra stages end up blank in the CRM. The goal of a sales process is not to look thorough in a board deck. It is to make the same deal flow, every time, predictably, so revenue stops depending on the founder.",
  },
  {
    q: "What is the difference between a B2B sales process and a sales methodology?",
    a: "The sales process is the what, the methodology is the how. The process defines the stages a deal moves through, the activities at each stage, and the exit criteria to move to the next stage. The methodology defines how your salespeople run the conversation inside each stage. MEDDIC, SPIN, Challenger, and Sandler are methodologies. Your five stage pipeline is your process. Small B2B companies usually need the process first, because without it no methodology matters. A methodology applied to a broken process produces confident salespeople with inaccurate forecasts.",
  },
  {
    q: "How do I know if my sales process is working?",
    a: "Three tests. First, two salespeople selling the same product to the same ICP should produce similar conversion rates between stages. If one person closes 40 percent of qualified deals and another closes 8 percent, the process is not the problem, the person is, and you can coach them. If both close 8 percent, the process is broken. Second, your forecast should land inside 10 percent of actual, three months running. Third, you should be able to look at any stuck deal and know exactly which exit gate it failed, without calling a meeting. If any of those tests fail, rebuild before you hire another salesperson.",
  },
  {
    q: "How long does it take to build a B2B sales process for a small company?",
    a: "Thirty to sixty days if you already have deal data and an honest view of what happens when a lead arrives. The work is not complicated, it is specific. Define your ICP in one paragraph. Map the five stages, write the exit criteria for each, and pick one metric per stage. Load it into your CRM with the same stage names everyone uses. Train the team in a single two hour session. Run weekly pipeline reviews against the new stages for six weeks. What takes longer is the cultural work of getting salespeople to follow it. That part is ongoing, and it is the real job of a sales leader.",
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
      headline: 'B2B Sales Process of Small Companies',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/b2b-sales-process-small-companies',
    },
  ],
}

export default function B2bSalesProcessSmallCompaniesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const displayFaqs = cmsfaqs(5, faqs)

  const stages = [
    {
      line: 'Stage 1',
      label: v('stage1Label', 'Target'),
      detail: v('stage1Detail', "Target is the stage where a company earns the right to be in your pipeline. Not every lead belongs. Most small B2B companies lose the first 90 days of a deal cycle because they put anyone who responded to an email into the funnel. The Target stage filters for ICP fit, not interest. A clear ICP paragraph, a list built against it, and a trigger event that explains why now. Exit gate: the account matches ICP criteria and a trigger event is documented."),
      example: v('stage1Example', 'Exit gate: "B2B SaaS, 50 to 250 employees, headquartered in North America, Series A or bootstrapped past $2M ARR, just hired a second salesperson in the last 60 days." If all five are true, the account moves to Engage. If any are false, it stays in Target or drops out entirely.'),
    },
    {
      line: 'Stage 2',
      label: v('stage2Label', 'Engage'),
      detail: v('stage2Detail', "Engage is the stage where a human conversation happens. A call connected, a meaningful email reply, a LinkedIn message answered, or a meeting held. Cold email opens and ghost replies do not count. Small companies frequently log a lead as engaged after a single email reply that says \"not now.\" That is not engagement, that is a signal to nurture. Exit gate: the prospect confirms that the problem your product solves is a real problem they have, in their own words, on a recorded call or in writing."),
      example: v('stage2Example', 'Exit gate: prospect says a version of "Yes, we are actively dealing with this and it is costing us." Not "sounds interesting." Not "let me see our calendar." Real pain, stated plainly, before the deal moves to Qualify.'),
    },
    {
      line: 'Stage 3',
      label: v('stage3Label', 'Qualify'),
      detail: v('stage3Detail', "Qualify is where most small company sales processes quietly collapse. The salesperson runs a discovery call, likes the prospect, and advances the deal on optimism. Qualification is not a vibe. It is four answers. Does the prospect have the pain your product solves? Do they have budget or can they access it? Is there a deadline driving the decision? Is the economic buyer in the conversation or committed to joining? If any answer is soft, the deal is not qualified, and forecasting it into this quarter is how founders lose their shirts."),
      example: v('stage3Example', 'Exit gate: all four answers are documented in the CRM in the prospect\'s own words. Pain, budget, timing, decision maker. If any of the four is missing, the deal stays in Qualify. No exceptions. "I think they can probably find the money" is not budget confirmation.'),
    },
    {
      line: 'Stage 4',
      label: v('stage4Label', 'Validate'),
      detail: v('stage4Detail', "Validate is the stage where the prospect tests whether your solution actually solves their problem. Demo, proof of concept, reference check, pricing walk through, security review, whatever your sales cycle requires. This is the most expensive stage in the process for the salesperson, and it is where underqualified deals burn the most time. The salespeople I coach are taught to run Validate like a project with named stakeholders, a mutual action plan, and a decision date. Deals that refuse a mutual action plan almost never close."),
      example: v('stage4Example', 'Exit gate: the prospect confirms in writing that the solution fits, references a decision date inside 45 days, and names the person with signing authority. A verbal "we love it" does not move the deal. A Monday email that lists four open items and a timeline does.'),
    },
    {
      line: 'Stage 5',
      label: v('stage5Label', 'Close'),
      detail: v('stage5Detail', "Close is paperwork, terms, and the last five percent of questions a buyer asks before signing. A healthy Close stage lasts days, not weeks. If a deal sits in Close for more than 21 days in a small B2B company, something upstream was wrong. Either the decision maker was never fully bought in, or the budget never existed, or the timing story was invented to get a meeting. A clean process catches those issues in Qualify and Validate, not in Close. When Close takes 3 months, the fix is almost never in Close. It is in how Qualify was run."),
      example: v('stage5Example', 'Exit gate: contract signed, purchase order received, kickoff scheduled. The handoff to implementation happens in the next business day. Closed deals that wait a week for a handoff lose 20 percent of their projected revenue in delayed starts and scope creep.'),
    },
  ]

  const beforeAfter = [
    {
      label: v('beforeAfterRow1Label', 'Pipeline Stages'),
      bad: v('beforeAfterRow1Bad', '8 stages copied from an enterprise Salesforce template. Half are empty on every deal.'),
      good: v('beforeAfterRow1Good', '5 stages with one goal each, used consistently by every salesperson on every deal.'),
    },
    {
      label: v('beforeAfterRow2Label', 'Exit Criteria'),
      bad: v('beforeAfterRow2Bad', '"Feels good, moving forward." Deals advance on optimism and close rates tell the story.'),
      good: v('beforeAfterRow2Good', 'Every stage has a written exit gate. Deals do not move until the gate is documented in the CRM.'),
    },
    {
      label: v('beforeAfterRow3Label', 'Qualification'),
      bad: v('beforeAfterRow3Bad', 'Discovery calls that turn into product demos in the first 10 minutes. No pain confirmed, no budget discussed.'),
      good: v('beforeAfterRow3Good', 'Pain, budget, timing, decision maker all confirmed in the prospect\'s words before a demo is scheduled.'),
    },
    {
      label: v('beforeAfterRow4Label', 'Forecast Accuracy'),
      bad: v('beforeAfterRow4Bad', 'Forecasts land 40 to 60 percent off. Board meetings turn into defensive explanations.'),
      good: v('beforeAfterRow4Good', 'Forecasts land inside 10 percent of actual, three quarters running. Board conversations shift to strategy.'),
    },
    {
      label: v('beforeAfterRow5Label', 'Founder Involvement'),
      bad: v('beforeAfterRow5Bad', 'Founder is pulled into every deal over $25K. Nothing closes without them on the call.'),
      good: v('beforeAfterRow5Good', 'Founder is only pulled in for strategic accounts over $100K or reference calls. The process runs without them.'),
    },
  ]

  const smallVsEnterprise = [
    {
      label: v('compareRow1Label', 'Number of Stages'),
      small: v('compareRow1Small', '5 stages, each with one clear goal and exit gate'),
      enterprise: v('compareRow1Enterprise', '7 to 9 stages with sub stages, scoring, and automation rules'),
    },
    {
      label: v('compareRow2Label', 'Team Structure'),
      small: v('compareRow2Small', '1 to 6 salespeople, one leader, no RevOps support'),
      enterprise: v('compareRow2Enterprise', 'SDRs, AEs, AMs, CSMs, Sales Ops, Enablement, RevOps'),
    },
    {
      label: v('compareRow3Label', 'Deal Size'),
      small: v('compareRow3Small', '$5K to $150K ACV, 30 to 120 day cycle, 1 to 3 decision makers'),
      enterprise: v('compareRow3Enterprise', '$250K to $2M ACV, 6 to 18 month cycle, 6 to 12 decision makers'),
    },
    {
      label: v('compareRow4Label', 'Tools'),
      small: v('compareRow4Small', 'HubSpot or Pipedrive, Gmail, LinkedIn, a dialer. Nothing more.'),
      enterprise: v('compareRow4Enterprise', 'Salesforce, Outreach, Gong, 6sense, ZoomInfo, Salesloft, and custom integrations'),
    },
    {
      label: v('compareRow5Label', 'Metrics Tracked'),
      small: v('compareRow5Small', 'One metric per stage. 5 numbers on the wall, updated weekly.'),
      enterprise: v('compareRow5Enterprise', 'Dozens of metrics across funnel, velocity, attribution, and cohort analysis'),
    },
  ]

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
              {v('heroLabel', 'Sales Process')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'B2B Sales Process of Small Companies')}
              <span className="block text-blue-400">{v('heroAccent', 'The 5 Stages That Actually Work')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most small B2B companies copy an enterprise sales process and wonder why it never gets used. Here is the 5 stage process that works for a $1M to $10M ARR team, the exit gates that make forecasts accurate, and the mistakes that quietly break pipelines.")}
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
                {v('heroPrimaryButton', 'Talk to Louie. 30 Minutes.')}
              </Link>
              <Link
                href="/how-to-build-a-sales-process-after-1m-arr"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                {v('heroSecondaryLink', 'How to build the process after $1M ARR →')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
                Key Takeaways
              </span>
            </motion.div>
            <motion.ul variants={itemVariants} className="space-y-3 text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway1', "A small B2B company needs 5 stages, not 8. Target, Engage, Qualify, Validate, Close. Each stage has one goal and a written exit gate.")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway2', "Exit gates are the difference between a forecast that lands and a forecast that embarrasses you in a board meeting. Write them down. Enforce them.")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway3', "Qualification is where most small company processes collapse. Pain, budget, timing, and decision maker all documented before a demo. No exceptions.")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway4', "The test for a working process is simple. Two salespeople selling the same product to the same ICP should produce similar conversion rates, and the forecast should land inside 10 percent of actual for three quarters running.")}</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* H2 — What should a sales process actually look like? */}
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
              {v('stagesHeading', 'What should a sales process actually look like for a small B2B company?')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('stagesSubheading', 'Five stages. One goal per stage. A written exit gate. That is the whole thing.')}
            </motion.p>
            <div className="space-y-8">
              {stages.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex flex-wrap items-start gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">{item.line}</span>
                    <h3 className="text-lg font-bold text-neutral-900">{item.label}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Example: </span>
                    <span className="italic text-blue-800">{item.example}</span>
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
              {v('seoParagraph1', "The B2B sales process of a small company has one job. Make revenue predictable enough that the founder can step out of the deal and the number still shows up. Everything in the process serves that outcome. The stages, the exit gates, the metrics, the weekly cadence. When any of those drift, the founder gets pulled back into deals and the team stops growing. The biggest mistake I see in companies between $1M and $10M ARR is copying a process built for a 200 person sales organization and then wondering why it never gets used.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoParagraph2', "A good process for a small company is simple, specific, and enforced. Five stages. One goal per stage. A written exit gate in the prospect's own words. One metric per stage that gets reviewed every week. Nothing more. The complexity of the methodology, the playbook, and the coaching system can grow as the team grows. The process does not need to be elaborate to work. It needs to be used. For the deeper walk through of how to build one from scratch,")}{' '}
              <Link href="/how-to-build-a-sales-process-after-1m-arr" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                {v('seoParagraph2LinkText', 'read the $1M ARR sales process guide →')}
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
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
              {v('beforeAfterHeading', 'Before and After: A Small B2B Sales Process Rebuild')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('beforeAfterSubheading', 'What most $1M to $10M companies have today, versus what a working process looks like.')}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-3 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold text-neutral-400">Area</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-red-400">Before (Breaks at Scale)</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">After (Predictable Revenue)</div>
              </div>
              {beforeAfter.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="px-6 py-4 text-sm font-bold text-neutral-800">{row.label}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm italic text-neutral-500">{row.bad}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm italic text-neutral-800">{row.good}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Small Company vs Enterprise Comparison */}
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
              {v('compareHeading', 'Small B2B Process vs. Enterprise Process')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('compareSubheading', 'A process built for 200 salespeople will break a team of 4. A process built for 4 will scale to 40. One direction works.')}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <div className="grid grid-cols-3 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold text-neutral-400">Dimension</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">Small B2B ($1M–$10M)</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">Enterprise ($100M+)</div>
              </div>
              {smallVsEnterprise.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="px-6 py-4 text-sm font-bold text-neutral-800">{row.label}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">{row.small}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">{row.enterprise}</div>
                </div>
              ))}
            </div>
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
              {v('aboutBio2', "I have built and rebuilt sales processes for small B2B companies across software, services, manufacturing, and healthcare. The process that wins is always the same shape. Five stages. Written exit gates. One metric per stage. A weekly pipeline review that enforces the gates. The teams I work with usually tighten their forecast accuracy inside 90 days, and the founder starts getting weekends back inside 6 months. That is the whole point of the work.")}
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
                <Link href="/how-to-build-a-sales-process-after-1m-arr" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales Process After $1M ARR →
                </Link>
              </li>
              <li>
                <Link href="/5-warning-signs-sales-process-breaking" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  The 5 Warning Signs Your Sales Process Is About to Break →
                </Link>
              </li>
              <li>
                <Link href="/sales-pipeline-stages" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Sales Pipeline Stages: How to Define Them So Your Team Uses Them the Same Way →
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
              {v('ctaHeadline', 'Want Me to Look at Your Current Sales Process?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I will map your current stages against the 5 that work, show you where deals are dying, and give you the first three changes to make this quarter.")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                {v('ctaButton', 'Book a Free 30-Minute Call')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
