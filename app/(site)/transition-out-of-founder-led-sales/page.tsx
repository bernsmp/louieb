'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoTransitionFounderLedSales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const transitionSteps = [
  {
    number: '01',
    title: 'Document the Sale Before You Delegate It',
    body: 'The transition fails when founders hand off a process that lives only in their head. Before you hire, record yourself on 10 discovery calls and 5 demos. Write down the questions you always ask, the objections you always face, and the moments where deals typically win or lose. That becomes your playbook — not a theoretical one, but the one built from your actual results.',
  },
  {
    number: '02',
    title: 'Validate the ICP With Hard Data',
    body: 'Your instinct about your best customers is probably right — but your data will surprise you. Analyze your last 30 closed-won deals: industry, company size, job title, trigger event. The real ICP is almost always narrower than the assumed one. Narrow the hiring profile, the outreach list, and the messaging to match the actual pattern before adding headcount.',
  },
  {
    number: '03',
    title: 'Hire Your First Rep Before You\'re Overwhelmed',
    body: 'Most founders wait too long — until they\'re so stretched they can\'t properly onboard the rep they just hired. Hire when you have 20–30% more pipeline than you can personally close. That\'s the moment the timing is right: enough proof that the sale works, enough overflow to give a rep real opportunities to run.',
  },
  {
    number: '04',
    title: 'Stay Involved Through the Rep\'s First 10 Deals',
    body: 'A transition isn\'t a handoff. You don\'t step back on day one. For the first 10 deals, you\'re on every call — observing, debriefing, and course-correcting in real time. The rep learns by doing deals with you, not from reading a document. By deal 10, they should be closing independently. By deal 20, you should be reviewing in the pipeline meeting, not on the call.',
  },
  {
    number: '05',
    title: 'Build the Accountability System That Keeps It Running',
    body: 'The transition is complete when the pipeline doesn\'t require you to function. That means: a CRM reps actually use, a weekly pipeline review with real accountability, a forecast you trust, and a rep or sales leader who owns the number. The founder\'s job shifts from closer to coach to strategic operator. That\'s what scaling looks like.',
  },
]

const mistakesDontDo = [
  { mistake: 'Hire a VP of Sales to lead the transition', why: 'VPs manage processes — they don\'t build them. The infrastructure needs to exist before a VP adds value.' },
  { mistake: 'Step back completely after the first hire', why: 'Momentum lives in your involvement through the first 10 deals. Early absence = slow ramp = failed hire.' },
  { mistake: 'Hand off relationships, not process', why: 'If what transfers is your personal relationships and not a repeatable method, the rep can\'t close new accounts.' },
  { mistake: 'Skip the documentation step', why: 'Undocumented sales processes can\'t be trained, measured, or improved. This is always the bottleneck.' },
]

const doneRight = [
  { signal: 'You can take a two-week vacation and revenue doesn\'t stall', right: true },
  { signal: 'Your first rep closes deals you didn\'t introduce', right: true },
  { signal: 'You have a weekly pipeline review that runs without you', right: true },
  { signal: 'Your forecast is based on data, not feel', right: true },
  { signal: 'You\'re still on every call personally closing deals', right: false },
  { signal: 'Revenue drops 20%+ when you\'re not in the building', right: false },
]

const faqs = [
  {
    q: 'How long does the transition out of founder-led sales take?',
    a: 'Done correctly: 6–12 months from decision to functional independence. Month 1–2: documentation and ICP validation. Month 3–4: first hire and ramp. Month 5–8: first 20 rep deals with founder involvement. Month 9–12: founder steps back to coaching role, pipeline runs without them. Rushing this produces failed hires and momentum loss.',
  },
  {
    q: 'What if I love selling and don\'t want to stop?',
    a: 'You don\'t have to stop. Many founders remain involved in strategic deals — enterprise accounts, partnership opportunities, high-stakes renewals. The goal isn\'t to remove you from sales. It\'s to ensure that revenue doesn\'t require you for every deal. That\'s a very different thing.',
  },
  {
    q: 'Can the transition happen while I\'m still growing fast?',
    a: 'It\'s actually easier when you\'re growing. You have deal flow to give a new rep, proof that the sale works, and enough pipeline to absorb the 60–90 day ramp without pressure. The worst time to transition is when revenue has already stalled — the urgency creates shortcuts that undermine the process.',
  },
  {
    q: 'What\'s the biggest mistake founders make in this transition?',
    a: 'Documenting nothing and hoping the rep figures it out. The second biggest: hiring for energy and personality without testing whether the candidate can execute a structured discovery process. Reps who can\'t ask good questions and can\'t hold a qualification framework fall apart in month 3, even if they interviewed brilliantly.',
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
      headline: 'How to Transition Out of Founder-Led Sales Without Losing Momentum',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/transition-out-of-founder-led-sales',
    },
  ],
}

export default function TransitionFounderLedSalesPage() {
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
              Founder-Led Sales
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Transition Out of Founder-Led Sales')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Losing Momentum')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "The goal isn't to stop selling. It's to build a sales function that works without requiring you for every deal. Here's the 5-step path that actually holds.")}
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
                href="/what-is-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is founder-led sales? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Steps */}
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
              The 5-Step Transition Framework
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each step builds on the last. Skip one and the next one fails.
            </motion.p>
            <div className="space-y-6">
              {transitionSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{step.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{step.title}</h3>
                    <p className="text-neutral-700">{step.body}</p>
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
              Transitioning out of founder-led sales is one of the most important inflection points in a company's growth. It's also one of the most mishandled. The transition fails not because of bad hires or bad luck — it fails because founders skip the documentation step, hire before validating the ICP, or step back too fast from the first rep's deals. These aren't rare mistakes. They're the default path for founders who are too stretched to do the transition right.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The companies that execute this transition successfully almost always have one thing in common: someone accountable to the process itself — not just to closing deals. Whether that's a fractional sales leader, a first VP of Sales, or an experienced advisor, having a person whose job is the system (not just the number) is what keeps momentum intact during the handoff. If you want to understand what that looks like before the transition, start here:{' '}
              <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                how to get out of founder-led sales →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mistakes Grid */}
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
              4 Mistakes That Kill the Transition
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each one is avoidable. Each one is common. If you're planning the transition, read these before you start.
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2">
              {mistakesDontDo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-6"
                >
                  <h3 className="mb-2 font-bold text-red-800">✕ {item.mistake}</h3>
                  <p className="text-sm text-red-700">{item.why}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Done Right Signals */}
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
              How You Know the Transition Worked
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              The signals are specific. Check yourself against these honestly.
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {doneRight.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${item.right ? 'border-green-200 bg-green-50' : 'border-red-100 bg-red-50'}`}
                >
                  <div className={`mt-0.5 shrink-0 rounded-full p-1 ${item.right ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.right ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </div>
                  <p className={`text-sm font-medium ${item.right ? 'text-green-900' : 'text-red-900'}`}>{item.signal}</p>
                </motion.div>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "This transition is the work I'm most proud of doing. Taking a founder from 90% of revenue to less than 30% — while growing the total — is what fractional sales leadership is built for. If you're at the stage where you know the transition needs to happen, let's talk about what it looks like for your specific business.")}
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
              {v('ctaHeadline', "Ready to Stop Being the Bottleneck?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can map the specific steps your company needs to make this transition — what to document, when to hire, and how to stay involved without staying stuck.")}
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
