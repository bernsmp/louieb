'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalespeopleUnderperformWithoutMe'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalespeopleUnderperformWithoutMePage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const rootCauses = [
    {
      number: '01',
      title: v('cause1Title', 'You Never Documented How You Close'),
      detail: v('cause1Detail', "Your salespeople watched you close deals. They sat in on calls, heard you handle objections, and saw you move prospects from interested to committed. What they never got was a written framework for how you do it. The phrases you use to create urgency, the moment you shift from discovery to proposal, the way you handle the price question — those live in your head. When you step out of the room, they are gone. Your salespeople are not underperforming because they lack talent. They are underperforming because they are trying to replicate something that was never written down."),
      fix: v('cause1Fix', "Record your next five closing calls. Transcribe them. Extract the specific language patterns, the objection responses, and the transition moments. Those transcripts are the first draft of your closing playbook. Give that document to your salespeople and run one deal debrief per week until they internalize it."),
    },
    {
      number: '02',
      title: v('cause2Title', 'The Sales Process Exists in Your Memory, Not in a System'),
      detail: v('cause2Detail', "Most founders build a functional sales process over years of trial and error. They know which questions to ask, which prospects to prioritize, which signals indicate a deal is real, and which signals indicate it will never close. That knowledge feels like instinct, so it never gets written down. The result is a sales process that only one person can execute. Your salespeople are working without a map in territory you know by memory. They will make different decisions at every step, qualify differently, and close at a lower rate — not because they are worse salespeople, but because they are operating without the accumulated knowledge you have."),
      fix: v('cause2Fix', "Write down every stage in your sales process and what has to be true for a deal to move to the next one. Define your three strongest ICP signals and your three automatic disqualifiers. Put both in your CRM as required fields. This is the skeleton of a Sales Playbook, and it is the single highest-leverage thing you can do to close the performance gap."),
    },
    {
      number: '03',
      title: v('cause3Title', 'Pipeline Depends on Your Network, Not a Repeatable System'),
      detail: v('cause3Detail', "A significant portion of your pipeline likely comes from relationships you built over years: referrals from past clients, introductions from your network, warm leads from people who know you personally. Your salespeople do not have that network. They cannot replicate those pipeline sources because those sources are attached to you, not to the business. The deals that come in when you are involved are fundamentally different from the ones your salespeople have to generate on their own. This is not a salesperson problem. It is a pipeline infrastructure problem."),
      fix: v('cause3Fix', "Identify every pipeline source from the past 12 months. Categorize each one as founder-dependent or system-dependent. Any founder-dependent source needs a replacement: a formal referral program, an outbound sequence, a content strategy, or a partnership structure. The goal is to move your pipeline sources from your personal relationships to documented systems that any salesperson can operate."),
    },
    {
      number: '04',
      title: v('cause4Title', 'There Is No Accountability Structure When You Step Back'),
      detail: v('cause4Detail', "When you are in the deal, accountability is automatic. You see what your salespeople are doing, you give real-time feedback, and the deal either moves forward or you intervene. When you step back, that feedback loop disappears. There are no pipeline reviews with clear expectations. There is no written standard for what a qualified opportunity looks like. There is no Accountability Document that defines what each salesperson owns, what the metrics are, and how they will be evaluated. Without that structure, salespeople default to their own habits. Some habits are good. Most are not the ones that close deals."),
      fix: v('cause4Fix', "Install a weekly 30-minute pipeline review with a fixed agenda: deals in each stage, next actions, and expected close dates. Create a written Accountability Document for each salesperson that defines their quota, their activity targets, and the metrics you will use to evaluate them. Review it monthly. These two structures replace the informal oversight that exists when you are present in every deal."),
    },
    {
      number: '05',
      title: v('cause5Title', 'They Were Never Trained — They Were Observed'),
      detail: v('cause5Detail', "The way most founders onboard salespeople is by having them shadow a few calls, then sending them into the field. This is observation, not training. Observation tells a salesperson what the output looks like. It does not give them the framework to produce that output independently. The founder's judgment, pattern recognition, and instincts took years to build. A new salesperson watching three calls does not inherit any of it. When the founder steps back, the salesperson is left with an impression of how good looks — but no structured way to replicate it."),
      fix: v('cause5Fix', "Build a 30-60-90 day onboarding plan with specific skills at each milestone. In the first 30 days: learn the ICP, the product, and the qualification criteria. In days 31-60: run discovery calls with oversight and debrief every call. In days 61-90: carry a pipeline independently with weekly coaching. Observe and debrief — do not just observe. The debrief is where learning happens."),
    },
  ]

  const comparisonRows = [
    {
      dependent: v('comp1Dependent', 'Close rate drops when founder is not in the room'),
      independent: v('comp1Independent', 'Salespeople close using a documented framework, not founder presence'),
    },
    {
      dependent: v('comp2Dependent', 'Pipeline dries up when founder stops making introductions'),
      independent: v('comp2Independent', 'Pipeline is generated through systems: outbound, referral program, inbound'),
    },
    {
      dependent: v('comp3Dependent', 'New salespeople shadow calls and figure it out on their own'),
      independent: v('comp3Independent', 'New salespeople follow a 30-60-90 onboarding plan with structured debriefs'),
    },
    {
      dependent: v('comp4Dependent', 'Qualification is inconsistent — each salesperson decides differently'),
      independent: v('comp4Independent', 'ICP and disqualification criteria are written and enforced in the CRM'),
    },
    {
      dependent: v('comp5Dependent', 'No weekly pipeline review — founder checks in informally'),
      independent: v('comp5Independent', 'Weekly pipeline review with a fixed agenda and written Accountability Document'),
    },
    {
      dependent: v('comp6Dependent', 'Salespeople do not know what "good" looks like without founder feedback'),
      independent: v('comp6Independent', 'Performance standards are written, reviewed monthly, and tied to clear metrics'),
    },
  ]

  const defaultFaqs = [
    {
      q: "Why do my salespeople close at half the rate I do?",
      a: "Because the process that produces your close rate lives in your head, not in a shared system. Your close rate is built on years of pattern recognition, refined objection handling, and relationship capital that your salespeople do not have access to. To close that gap, you need to extract what you know into a written framework: how you qualify, how you handle the three or four objections that come up most often, how you create urgency, and how you move from discovery to close. When that framework is written down and trained — not just observed — close rates converge.",
    },
    {
      q: "Is it possible for salespeople to perform without me being involved?",
      a: "Yes — but only if you build the infrastructure that replaces your personal involvement. That infrastructure is four things: a documented Sales Playbook with qualification criteria and closing frameworks, a pipeline system that generates leads without your network, a weekly accountability review that replaces informal oversight, and an onboarding process that trains rather than just observes. Every one of those four things can be built. Most founders have not built any of them. That is why performance collapses without them.",
    },
    {
      q: "How do I know if the problem is my salespeople or my sales system?",
      a: "If every salesperson you hire underperforms without you, the problem is the system. If one salesperson underperforms while others hit their number, the problem is more likely the person. The fastest diagnostic: compare close rates across your team. If the entire team closes at a fraction of your rate and the gap disappears when you get involved, you have a system problem. If one salesperson is at 8% while others are at 25%, you have a person problem. These require completely different fixes.",
    },
    {
      q: "What does a sales team need to perform without the founder?",
      a: "Four things. First, a written Sales Playbook that captures the qualification criteria, the sales process stages, the objection responses, and the closing framework. Second, a pipeline source that is not dependent on the founder's personal network. Third, a weekly pipeline review where performance is measured against written standards. Fourth, an Accountability Document for each salesperson that defines their targets, their metrics, and the review cadence. None of these are complicated. All of them take time and intention to build.",
    },
    {
      q: "How long does it take to fix founder-dependent sales performance?",
      a: "Most companies see meaningful improvement in 60 to 90 days when the infrastructure is built correctly. The first 30 days go into documentation: the Sales Playbook, the ICP, the qualification criteria, and the Accountability Documents. Days 31 to 60 are training and coaching against those documents. By day 90, salespeople should be running their pipeline against a written standard rather than against their instinct. The number that usually moves first is close rate. Pipeline volume follows as outbound systems replace founder-sourced leads.",
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
        headline: 'Why Do My Salespeople Underperform Without Me Involved?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/why-do-my-salespeople-underperform-without-me',
        datePublished: '2026-04-11',
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
              {v('heroTag', 'Founder-Led Sales')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Why Do My Salespeople Underperform')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Me Involved?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "If your salespeople only perform when you are in the room, the problem is not your salespeople. It is what you never built for them. Here are the five root causes — and what to fix first.")}
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
                href="/why-does-my-sales-pipeline-depend-on-me"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Why does your pipeline depend entirely on you? →
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
              {v('sectionCausesHeading', 'The 5 Real Reasons Your Salespeople Need You in the Room')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCausesSubheading', 'None of these are about talent. All of them are about infrastructure you have not built yet.')}
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
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">What to Fix: </span>
                    <span className="text-blue-800">{item.fix}</span>
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
              {v('seoPara1', "The question founders usually ask is: 'Why do my salespeople underperform without me involved?' The honest answer is that they were never set up to succeed without you. Your involvement was doing two jobs at once: it was closing deals, and it was compensating for every gap in the system. When you step back, the gaps become visible. They were always there. You just could not see them because you were filling them personally.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The founders who fix this problem stop asking whether their salespeople are good enough and start asking what their salespeople are missing. In almost every case, the answer is a written process, a pipeline system, and an accountability structure. Those three things are buildable. If you want to understand exactly")}{' '}
              <Link href="/what-breaks-first-when-founder-stops-selling" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                what breaks first when a founder stops selling →
              </Link>
              {v('seoPara2b', ", the pattern is predictable — and preventable.")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              {v('sectionCompHeading', 'Founder-Dependent Sales Team vs. Self-Sufficient Sales Team')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', 'The difference is not the caliber of the salespeople. It is the infrastructure they are given to work with.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  Founder-Dependent
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  Self-Sufficient
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
                    {row.independent}
                  </div>
                </div>
              ))}
            </motion.div>
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
              {v('aboutBio2', "The question 'why do my salespeople underperform without me?' is one I hear from founders in the first week of almost every engagement. The answer is almost always the same: the process that makes the founder effective has never been extracted into a form anyone else can use. The first thing I do is build that extraction. Once it is on paper, the performance gap closes fast.")}
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
                <Link href="/why-does-my-sales-pipeline-depend-on-me" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Why Does My Sales Pipeline Depend Entirely on Me? →
                </Link>
              </li>
              <li>
                <Link href="/what-breaks-first-when-founder-stops-selling" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Breaks First When a Founder Stops Selling? →
                </Link>
              </li>
              <li>
                <Link href="/how-to-manage-underperforming-salesperson" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Manage an Underperforming Salesperson →
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
              {v('ctaHeadline', "Your Salespeople Are Not the Problem. Let's Find What Is.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can tell you whether your team is underperforming because of a person issue or a system issue — and give you the one thing to fix first that will close the performance gap the fastest.")}
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
