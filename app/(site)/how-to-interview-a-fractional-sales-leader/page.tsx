'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-04'
const CMS_SECTION = 'seoHowToInterviewFractionalSalesLeader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HowToInterviewFractionalSalesLeaderPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const questions = [
    {
      number: '01',
      title: v('q1Title', 'What does your first 30 days look like?'),
      detail: v('q1Detail', "This question separates operators from advisors immediately. A fractional sales leader who has done this before will describe a specific process: how they audit deals in the CRM, how they interview the sales team, how they assess the ICP, and what they expect to deliver at the end of 30 days. A consultant who has rebranded as fractional will talk in general terms about assessing the business and identifying opportunities. Listen for specificity. If they cannot describe the first 30 days with precision, they have either never done it before or they are making it up as they go."),
      prompt: v('q1Prompt', "Follow-up: Ask them to walk you through the last engagement they started. What was broken when they arrived? What did they look at first? What was the output at day 30?"),
    },
    {
      number: '02',
      title: v('q2Title', 'Can you show me a sales playbook you built from scratch?'),
      detail: v('q2Detail', "Every fractional sales leader will tell you they build playbooks. Ask to see one. A real operator will have a version they can share, even sanitized for confidentiality. It does not need to be perfect. It needs to be real. The playbook will tell you more about how they work than any resume will. Look at the ICP section. Look at the objection handling section. Look at the sales stages. If the playbook is vague, generic, or built mostly from templates, that is a signal that the work is at the surface level. If it is specific to an industry and reflects real deals and real conversations, that is the kind of thinking you need in your business."),
      prompt: v('q2Prompt', "Follow-up: Ask them to explain one specific section of the playbook. How did they decide what to include? What changed after they saw how the sales team actually used it?"),
    },
    {
      number: '03',
      title: v('q3Title', 'How do you handle a salesperson who is not performing?'),
      detail: v('q3Detail', "This is a management question, not a strategy question. Anyone can talk about strategy. The fractional sales leader you hire will be accountable for the people on your team. You need to know how they manage performance. Listen for a concrete framework. A good answer covers: how they first diagnose whether the problem is skill or motivation, how they give specific feedback, what a performance improvement plan looks like in practice, and at what point they recommend letting someone go. A weak answer avoids the letting-go part entirely. A red flag is an answer that treats all performance problems as a coaching opportunity without acknowledging that some salespeople are simply wrong for the role."),
      prompt: v('q3Prompt', "Follow-up: Ask them about a specific situation where coaching did not work. What did they do next? How did they handle the conversation with the founder?"),
    },
    {
      number: '04',
      title: v('q4Title', 'What does your working relationship with the founder look like week to week?'),
      detail: v('q4Detail', "The fractional model only works if the founder and the fractional leader are aligned. This question reveals how they structure that relationship. A strong answer includes a weekly standing call with a consistent agenda, a shared document or dashboard the founder can check between calls, and clear expectations about what decisions the fractional leader makes independently versus what they bring to the founder first. If their answer is vague, or if it sounds like they expect the founder to stay out of the way entirely, that is a mismatch for most $1M to $10M businesses where the founder is still deeply involved in sales."),
      prompt: v('q4Prompt', "Follow-up: Ask what they do when they disagree with the founder about a sales decision. How do they handle that conversation?"),
    },
    {
      number: '05',
      title: v('q5Title', 'Have you ever walked away from an engagement or asked a client to end it early?'),
      detail: v('q5Detail', "This is a character question. Every experienced fractional sales leader has ended at least one engagement before the contract was complete. The reason tells you a lot about their values and their self-awareness. Good answers include situations where the founder refused to implement anything they recommended, where the company's problems were financial rather than sales-related, or where it became clear the engagement was not a fit. A candidate who has never ended an engagement early is either too new to have faced a hard situation or too conflict-averse to have handled one. Neither is what you want managing your sales team."),
      prompt: v('q5Prompt', "Follow-up: Ask what warning signs they now look for in a prospective client before they agree to start. What would make them decline an engagement today?"),
    },
  ]

  const comparison = [
    {
      bad: v('comp1Bad', 'Asks about years of experience and lets impressive numbers carry the decision'),
      good: v('comp1Good', 'Asks for specific examples from engagements at companies your size with your sales model'),
    },
    {
      bad: v('comp2Bad', 'Accepts general descriptions of past success without asking for proof'),
      good: v('comp2Good', 'Requests a sanitized playbook or sample deliverable from a prior engagement'),
    },
    {
      bad: v('comp3Bad', 'Skips reference calls because the candidate made a good impression'),
      good: v('comp3Good', 'Speaks directly with a founder who has worked with them, not just a LinkedIn reference'),
    },
    {
      bad: v('comp4Bad', 'Signs a 6-month contract before seeing how they work'),
      good: v('comp4Good', 'Structures a 30-day paid trial before committing to a longer engagement'),
    },
    {
      bad: v('comp5Bad', 'Chooses whoever is cheapest or whoever has the longest resume'),
      good: v('comp5Good', 'Chooses the person who described your situation most accurately without being told'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How many fractional sales leaders should I interview before making a decision?",
      a: "Three is usually the right number. One gives you nothing to compare. Two creates a binary choice where you talk yourself into the better of two options. Three gives you enough range to identify what good actually looks like in this role. More than three and the process tends to slow down without producing better decisions. The goal is not to find the best candidate from a large pool. It is to get clear on what you need, identify someone who matches it, and move quickly enough that you are not spending two months interviewing while your pipeline continues to stall.",
    },
    {
      q: "What is a fair rate for a fractional sales leader and how should I compare candidates on price?",
      a: "Fractional sales leaders typically work on monthly retainers ranging from $5,000 to $15,000 per month depending on time commitment, seniority, and market. Hourly rates range from $150 to $350. Do not compare candidates primarily on price. A fractional leader who costs $8,000 per month and produces results is far cheaper than one who costs $5,000 per month and produces none. The more useful comparison is results per dollar: what did they deliver in their last engagement, what did the company pay, and what was the return? If they cannot point to specific, measurable outcomes, the rate is irrelevant.",
    },
    {
      q: "How do I know if someone is a real operator or just a consultant with a new title?",
      a: "Ask them to describe something they built. Not something they recommended. Not a strategy they presented. Something they built: a pipeline stage definition, a compensation plan, a sales cadence, a hiring scorecard. Real operators talk about what they made and how it held up under pressure. Consultants talk about what they advised and who was responsible for implementing it. The distinction matters because you are not hiring someone to give you a list of things to do. You are hiring someone who will do those things themselves or alongside your team.",
    },
    {
      q: "What should I ask a reference when I call one for a fractional sales leader?",
      a: "Ask three questions. First: what was the business doing when this person started, and what was it doing when they left or when the engagement ended? You want before-and-after numbers if the reference will share them. Second: what did this person do that the founder could not have done without them? This reveals whether the engagement was additive or decorative. Third: what would you do differently if you hired this person again? Every reference will say they were great. The third question is where you get the honest information that helps you set expectations before the engagement starts.",
    },
    {
      q: "Is it reasonable to ask for a 30-day trial before signing a longer contract?",
      a: "Yes, and any experienced fractional sales leader will say yes too. A 30-day paid trial is standard practice for serious operators because it protects both sides. You get to see how they work before you commit. They get to see whether your business has the conditions for the engagement to succeed. A candidate who resists a trial period and pushes immediately for a 6-month contract is usually either unsure of their ability to produce results in 30 days or so overcommitted across other clients that they cannot afford to prove themselves before the contract is signed.",
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
        headline: 'How to Interview a Fractional Sales Leader',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-to-interview-a-fractional-sales-leader',
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
              Hiring Guidance
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Interview a Fractional Sales Leader')}
              <span className="block text-blue-400">{v('heroAccent', 'What to Ask and What to Watch Out For')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders decide whether to hire a fractional sales leader based on a resume and one good conversation. That is how you end up paying $8,000 a month for someone who sends you decks. These are the five questions that tell you whether you are talking to a real operator.")}
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
                See what a fractional sales leader actually does →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Questions */}
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
              {v('sectionQuestionsHeading', 'The 5 Interview Questions That Reveal Everything')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionQuestionsSubheading', "Each question has a right kind of answer and a wrong kind of answer. The wrong kind usually sounds impressive.")}
            </motion.p>
            <div className="space-y-8">
              {questions.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Follow-up: </span>
                    <span className="text-blue-800">{item.prompt}</span>
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
              {v('seoPara1', "The fractional sales leader market has expanded fast, and not everyone in it has the credentials to back up the title. Some are former salespeople who never managed a team. Some are sales coaches who added 'fractional' to their website when it became a trending search term. A small number are genuine operators who have built sales systems at multiple companies and can point to specific, measurable outcomes at each one. The interview process is how you tell them apart.")}
            </motion.p>
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The most common mistake founders make is letting a polished first impression end the evaluation. Someone who is good at selling themselves is not necessarily good at selling for you or building a team that sells consistently without them. The questions above are designed to get past the pitch and into the evidence. The evidence is in the details: the specific playbooks, the specific performance conversations, the specific founder relationships. Vague answers at any of these five points are a signal worth taking seriously.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara3', "Before you interview anyone, get clear on what you actually need. If you have no sales process at all, you need a builder. If you have a process that is breaking under growth, you need a diagnostician who can identify the failure point and fix it. If your team is underperforming, you need someone with a track record of coaching salespeople to higher output. The right fractional sales leader for one situation is often wrong for another. Know your situation first.")} {' '}
              <Link href="/fractional-sales-leader-first-90-days" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                What to expect in the first 90 days with a fractional sales leader →
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
              {v('sectionCompHeading', 'Weak Interview Process vs. Strong Interview Process')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', "The difference between hiring the right person and spending six months paying for someone who disappoints you is usually in the evaluation process, not the candidate pool.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold text-red-400">Weak Interview Process</div>
                <div className="px-6 py-4 font-bold text-green-400">Strong Interview Process</div>
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
              {v('aboutBio2', "I have been on both sides of this conversation. I have interviewed candidates who looked great on paper and delivered nothing. I have also been interviewed by founders who had no framework for what they were looking for, which made it impossible for either of us to know whether the engagement would work. The questions on this page are the ones I wish every founder would ask me and every other fractional sales leader they consider. The answers either confirm that someone is the right fit or save both sides from a six-month mistake.")}
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
              {v('ctaHeadline', "You Have Better Questions to Ask. Let's Make Sure You Ask Them.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk you through what a strong fractional sales engagement looks like, answer your specific questions, and help you figure out whether your business is at the right stage to benefit from one — including whether that person should be me.")}
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
