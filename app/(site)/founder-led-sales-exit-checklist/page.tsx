'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-04'
const CMS_SECTION = 'seoFounderLedSalesExitChecklist'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FounderLedSalesExitChecklistPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const checklistItems = [
    {
      number: '01',
      title: v('c1Title', 'Your sales process is written down and someone else could follow it'),
      detail: v('c1Detail', "This is the first thing to check and the one most founders fail. A documented sales process means the stages are defined, exit criteria for each stage exist in writing, and a new salesperson or sales leader could read the document and know what to do in a prospect conversation without asking you. If your process lives in your head, in your email habits, or in the way you personally run calls, it is not a process. It is a skill set. Skill sets do not transfer. Documents do. Before you hand off sales, the process needs to be written in enough detail that someone who has never worked at your company could run a discovery call, advance a deal, and know when an opportunity is qualified versus wishful."),
      test: v('c1Test', "Test: Give the written document to someone who has not been on a sales call with you. Ask them to describe what happens at each stage. If they cannot, the document is not complete enough for a handoff."),
    },
    {
      number: '02',
      title: v('c2Title', 'Your pipeline can be generated without you making the first contact'),
      detail: v('c2Detail', "In most founder-led businesses, pipeline exists because the founder is a known person in their market. They get inbounds because people know them. They get referrals because people trust them personally. They open doors in outbound because their name carries weight. None of that transfers automatically. Before you exit founder-led sales, you need at least one pipeline generation mechanism that works independently of your relationships. This might be a structured referral process, an outbound cadence that has produced meetings without you sending the first email, or an inbound system driven by content or partnerships. If every deal in your pipeline started because you made a call or sent a message, you do not yet have a pipeline system. You have a founder-dependency."),
      test: v('c2Test', "Test: Look at the last 10 qualified opportunities in your CRM. Count how many started without you making the first contact. If the answer is fewer than three, pipeline generation is the gap to close before you hand off."),
    },
    {
      number: '03',
      title: v('c3Title', 'You have defined what a good salesperson looks like for your specific business'),
      detail: v('c3Detail', "Founders who exit sales before defining this standard hire the wrong person, or hand off to the wrong person already on the team, and spend the next six months wondering what went wrong. A definition of a good salesperson for your business is not generic. It is not 'hunter mentality' or 'strong communicator.' It is specific to your sales cycle, your buyer, your deal size, and your competitive environment. What activity levels are required? What conversion rates should someone hit after a 90-day ramp? What does a good discovery call sound like in your specific context? What objections does a salesperson need to handle well to win in your market? If you cannot answer these questions in writing, you are not ready to hand off sales accountability to someone else."),
      test: v('c3Test', "Test: Write down the three things a salesperson at your company must do consistently to hit quota. If you cannot write them in under five minutes, the standard is not clear enough to manage against."),
    },
    {
      number: '04',
      title: v('c4Title', 'Your CRM reflects real deal data, not optimism'),
      detail: v('c4Detail', "The CRM is the instrument panel for whoever takes over sales. If the data in it is inaccurate, outdated, or entered inconsistently, the person stepping into the sales leader role is flying blind from day one. CRM readiness for a handoff means: every active deal has a stage that reflects reality, next steps are logged, close dates are based on real buyer signals rather than internal targets, and the pipeline coverage number means something. A CRM full of stale opportunities, missing contact records, and deals that have not moved in 90 days is not a tool. It is a liability. Clean it up before the handoff, and establish the hygiene standards that the next person will be expected to maintain."),
      test: v('c4Test', "Test: Pull your pipeline report. For each deal in 'proposal' or later, confirm there is a logged next step with a date. If more than 30 percent are missing this, CRM hygiene is a pre-handoff requirement."),
    },
    {
      number: '05',
      title: v('c5Title', 'You can describe specifically what broke in sales in the last 90 days'),
      detail: v('c5Detail', "This is a readiness test for your own thinking, not for the documents. If you can sit down right now and name the specific place in your sales process where deals most often stall or die, what the root cause is, and what you have tried to fix it, you are ready to brief a sales leader. If your answer is a general statement like 'we need more pipeline' or 'the team needs to close harder,' you have not done the diagnostic work yet. Whoever takes over sales will immediately ask you what is broken and what you have tried. If you do not have a specific answer, you are handing off a puzzle, not a business. A fractional sales leader can help you do this diagnostic work. A full-time VP of Sales will expect it to be done before they arrive."),
      test: v('c5Test', "Test: Write one paragraph describing the single biggest reason deals are not closing right now. If you cannot make it specific — naming a stage, a buyer type, or a behavior — the diagnostic work is not complete."),
    },
  ]

  const comparison = [
    {
      bad: v('comp1Bad', 'The sales process exists only in the founder\'s head and varies call to call'),
      good: v('comp1Good', 'The sales process is documented with stage definitions and exit criteria anyone can follow'),
    },
    {
      bad: v('comp2Bad', 'Every deal in the pipeline started because the founder made the first contact'),
      good: v('comp2Good', 'At least one pipeline source is generating qualified meetings without the founder initiating'),
    },
    {
      bad: v('comp3Bad', 'What a good salesperson looks like is described in vague, untestable terms'),
      good: v('comp3Good', 'The definition of success for a salesperson is written down with specific metrics and timelines'),
    },
    {
      bad: v('comp4Bad', 'The CRM has stale deals, missing next steps, and close dates set by hope rather than buyer signals'),
      good: v('comp4Good', 'Every active deal has a real stage, a logged next step, and a close date tied to a specific buyer action'),
    },
    {
      bad: v('comp5Bad', 'The founder describes sales problems in general terms: need more pipeline, team needs to close better'),
      good: v('comp5Good', 'The founder can name the specific stage and root cause where deals most often break down'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How do I know if I am truly ready to exit founder-led sales?",
      a: "You are ready when you can answer yes to at least four of the five items on this checklist. The fifth item — being able to describe specifically what is broken — is the one founders most often skip, and it is also the one that most predicts whether the handoff will succeed. A new sales leader, whether fractional or full-time, cannot fix a problem the founder cannot articulate. If you can describe the problem with specificity, you can brief the next person effectively. If you cannot, the first 30 days of any engagement will be spent doing diagnostic work you should have done before hiring.",
    },
    {
      q: "What happens if I hand off sales before the checklist is complete?",
      a: "The most common outcome is a slow, expensive 90-day period where the new person spends most of their time figuring out what you already know but never wrote down. They interview customers. They ask questions you could have answered in a document. They try to understand the sales history by digging through email threads and CRM notes that were never meant to tell that story. You end up re-involved in sales to explain context, which defeats the purpose of the handoff. If the checklist is missing two or three items, you can still proceed, but you should tell the incoming leader what is missing and budget time in the first 30 days to close those gaps together.",
    },
    {
      q: "How long does it take to complete the checklist and get ready to exit founder-led sales?",
      a: "For most $1M to $5M companies, the preparation takes four to eight weeks if you work on it deliberately. Documenting the sales process typically takes one to two weeks. Cleaning up the CRM takes three to five days if you have someone who knows the data. Defining the salesperson standard takes a few hours of focused thinking, not weeks. The pipeline generation question is the one that can take longer — building a referral process or an outbound system that works without you may take a full quarter to prove out. The diagnostic work on what is broken is usually a few days of structured analysis against your closed-lost data.",
    },
    {
      q: "Do I need to hire a VP of Sales or a fractional sales leader to exit founder-led sales?",
      a: "Not necessarily, but most founders need some outside help to make the exit stick. The challenge is not the knowledge gap — most founders know their business well enough to build what is on this checklist. The challenge is time and objectivity. Founders are running the company at the same time they are trying to document it, and the documentation always loses. A fractional sales leader can run the process side of the exit in parallel with everything else you are managing. A full-time VP of Sales makes more sense once the checklist is complete, because a VP hired into a business without documented process will define the process themselves, and that definition may or may not match what you have built.",
    },
    {
      q: "Which item on this checklist do most founders fail first?",
      a: "Item two — pipeline that does not depend on the founder. This is the one that feels fine until you actually test it. Founders assume their referral network will keep working after they step back. Sometimes it does. More often, the referrals slow significantly when the founder stops being the visible face of every deal. The test is not whether you believe it will work. The test is whether it has already worked at least three times without you initiating. If you cannot point to three specific deals that came in without you, the pipeline system is not built yet. This is also the item that takes the longest to fix, which is why it should be the first one you start working on.",
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
        headline: 'Founder-Led Sales Exit Checklist',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/founder-led-sales-exit-checklist',
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
              Founder Transition
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Founder-Led Sales Exit Checklist')}
              <span className="block text-blue-400">{v('heroAccent', '5 Things That Must Be True Before You Hand Off Sales')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders exit founder-led sales too early, without the infrastructure to make the handoff work. This checklist tells you exactly what needs to be in place before you step back — and what breaks when it is not.")}
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
                href="/how-to-get-out-of-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to get out of founder-led sales →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Checklist */}
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
              {v('sectionChecklistHeading', 'The 5-Item Exit Checklist')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionChecklistSubheading', "Each item has a test at the bottom. Pass the test, check the box. If you cannot pass the test, that item is the gap to close before the handoff.")}
            </motion.p>
            <div className="space-y-8">
              {checklistItems.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Test: </span>
                    <span className="text-blue-800">{item.test}</span>
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
              {v('seoPara1', "The decision to exit founder-led sales is one of the most important inflection points in a $1M to $10M business. Done right, it frees the founder to run the company and gives the business a sales system that scales. Done wrong, it produces a gap period where deals slow down, the founder re-engages to fill the void, and the company ends up more dependent on the founder than before the exit was attempted. The difference between these two outcomes is almost always in the preparation. The checklist above is not aspirational. Every item on it is something that needs to be real — documented, tested, and working — before you step back.")}
            </motion.p>
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The timing question is the one founders get most wrong. Most try to exit too early, while the business is still in the $1M to $2M range, before there is enough deal history to document a process or enough pipeline volume to know what is generating leads. The exit is more likely to succeed at $3M to $5M ARR, when there is enough data to see patterns, enough deals to test what works, and enough revenue to afford the infrastructure — a part-time or full-time sales leader plus a CRM setup that actually reflects reality. Exiting before this stage is not impossible, but it requires more hands-on support from whoever takes over.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara3', "If you are looking at this checklist and realizing you are not ready yet, that is useful information. It tells you exactly where to focus. Work the list in order: document the process first, then build a pipeline source that does not require you, then define the salesperson standard. The CRM cleanup and the diagnostic work can happen in parallel. Most founders can complete all five items in six to eight weeks if they treat the preparation as a project rather than a background task.")} {' '}
              <Link href="/fractional-sales-leader-first-90-days" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What the first 90 days look like after you bring in a sales leader →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
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
              {v('sectionCompHeading', 'Not Ready to Exit vs. Ready to Exit')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', "These are the five signals that separate a handoff that sticks from one that collapses inside 90 days.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold text-red-400">Not Ready to Exit</div>
                <div className="px-6 py-4 font-bold text-green-400">Ready to Exit</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.bad}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.good}</p>
                  </div>
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
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership practice has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "The founder-led sales exit is the transition I work on most often. Almost every founder I work with is either in the middle of it or trying to figure out when to start. The checklist on this page comes directly from what I look for in the first 30 days of every engagement: is the process documented, is the pipeline independent, is the standard defined, is the CRM usable, and can the founder tell me specifically what is broken. When all five are in place, the handoff moves fast. When two or three are missing, we build them first. The checklist is the work.")}
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
              {v('ctaHeadline', "Know Where You Stand. Then Build What Is Missing.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk you through the checklist against your specific business, tell you which items are actually ready and which ones need work, and give you a specific sequence for closing the gaps before you hand off sales.")}
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
