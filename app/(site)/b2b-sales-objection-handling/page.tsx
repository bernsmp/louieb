'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoB2bSalesObjectionHandling'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const objections = [
  {
    number: '01',
    objection: '"Your price is too high."',
    rootCause: 'The buyer hasn\'t connected price to value. You haven\'t quantified ROI in their terms.',
    weakResponse: '"We can offer a 15% discount if you sign this quarter."',
    strongResponse: '"Help me understand what\'s too high relative to — your current cost, a competing quote, or your budget? Before we talk about pricing, let\'s make sure we\'ve mapped what this actually does to your revenue. If the ROI is strong, the price question usually resolves itself."',
    rule: 'Never discount before diagnosing. The objection is almost always a value problem, not a price problem.',
  },
  {
    number: '02',
    objection: '"We\'re happy with what we have."',
    rootCause: 'Status quo bias. The cost of changing feels higher than the cost of staying put.',
    weakResponse: '"But our product is better in these 10 ways..."',
    strongResponse: '"That makes sense. What would have to be true about your current situation for you to consider making a change? If everything stayed exactly the same for the next 12 months, what would the impact be?"',
    rule: 'Don\'t sell against the status quo — quantify the cost of staying in it.',
  },
  {
    number: '03',
    objection: '"We need to think about it."',
    rootCause: 'There\'s an unspoken concern — usually about risk, internal alignment, or budget — that hasn\'t surfaced yet.',
    weakResponse: '"Of course, take all the time you need. I\'ll follow up in a few weeks."',
    strongResponse: '"I completely understand. When you think about it, what specifically are you trying to resolve? Is it budget, timing, getting buy-in from someone else? I want to make sure we\'re helping you get there, not just waiting."',
    rule: 'A think-it-over is a hidden objection. Your job is to surface it, not accept it.',
  },
  {
    number: '04',
    objection: '"We don\'t have budget right now."',
    rootCause: 'Could be real, could be prioritization. Need to distinguish between a budget problem and a priority problem.',
    weakResponse: '"We have a payment plan if that helps."',
    strongResponse: '"Is this a timing issue — budget opens in Q2 — or is it more that the ROI case isn\'t compelling enough to unlock a budget exception? If the latter, that\'s worth exploring, because the companies I work with often find that this pays for itself within 90 days."',
    rule: 'Budget objections are often priority objections. Clarify which one before responding.',
  },
  {
    number: '05',
    objection: '"We need to run this by legal / procurement / the board."',
    rootCause: 'Either a legitimate process step, or the champion needs help navigating internal approval.',
    weakResponse: '"No problem — let me know when you hear back."',
    strongResponse: '"Happy to work through that process with you. What does the review typically look like? And is there anything I can provide — a one-pager for legal, a business case template for the board — that would help move it through faster? I want to make this as easy as possible for your side."',
    rule: 'Never step back from the process — step into it. Help the champion sell internally.',
  },
  {
    number: '06',
    objection: '"We\'re talking to a couple of other vendors."',
    rootCause: 'Competitive evaluation. The buyer is comparing on features, price, and trust.',
    weakResponse: '"We\'re the best option because..." (followed by feature comparison)',
    strongResponse: '"That\'s smart — you should be evaluating options. Can I ask: what does the decision criteria look like for you? What matters most beyond price? And at the end of this process, what would make you feel confident you made the right choice?" Then ask: what\'s different about how we approach this versus others you\'ve seen?',
    rule: 'Don\'t compete on features. Compete on understanding the buyer\'s problem better than anyone else.',
  },
  {
    number: '07',
    objection: '"Now isn\'t a great time."',
    rootCause: 'Timing objection — could be real (internal freeze, fiscal year, project backlog) or a gentle no.',
    weakResponse: '"Let\'s stay in touch. I\'ll reach out in six months."',
    strongResponse: '"I understand. When would be a better time, and what needs to change between now and then? If the underlying problem is still going to be there in six months — and costing you what it\'s costing you now — is there a reason to wait? Sometimes \'not now\' really means \'help me see why now.\'',
    rule: 'A timing objection requires a cost-of-delay conversation. Quantify what waiting costs them.',
  },
]

const handlingPrinciples = [
  {
    principle: 'Diagnose before responding',
    detail: 'Every objection has a root cause. Most reps respond to the objection they hear, not the one that\'s driving it. Asking one clarifying question before responding produces better outcomes than any scripted answer.',
  },
  {
    principle: 'Never discount to resolve an objection',
    detail: 'Discounting signals that the price wasn\'t justified to begin with. It trains buyers to object on price. It destroys margin. The answer to a price objection is always a value conversation — not a lower number.',
  },
  {
    principle: 'Objections are buying signals',
    detail: 'A buyer who raises an objection is still engaged. The prospect who\'s truly not interested doesn\'t object — they disappear. Treat every objection as a signal that the buyer wants to buy but has an unresolved concern.',
  },
  {
    principle: 'Stay in the process, not above it',
    detail: 'When a buyer says "we need to run this by procurement," most reps back off. The right move is to stay embedded — offer to help navigate the process, provide the documentation they need, and keep momentum. The more you step back, the more the deal stalls.',
  },
]

const faqs = [
  {
    q: 'Should sales reps memorize objection handling scripts?',
    a: 'Scripts are a starting point, not a destination. A rep who memorizes a script sounds like they memorized a script — which undermines the trust that drives sales. The goal is internalization: understanding the root cause of each objection and being able to respond authentically in the buyer\'s language. Use scripts for training, not for live calls.',
  },
  {
    q: 'What\'s the most common mistake reps make with objections?',
    a: 'Responding immediately without diagnosing. Most objections have multiple possible root causes — and the script for one root cause is wrong for another. A price objection from a buyer who doesn\'t understand ROI requires a different response than a price objection from a buyer comparing against a lower-cost competitor. Ask one question before answering.',
  },
  {
    q: 'How do you handle objections when you\'re not the one on the call?',
    a: 'This is a coaching problem. If reps are losing deals to the same objections repeatedly, the answer isn\'t a better script — it\'s a training program that teaches reps how to diagnose objections, not just respond to them. Weekly call reviews where objection handling is specifically analyzed are one of the highest-value coaching activities a fractional sales leader runs.',
  },
  {
    q: 'When is an objection actually a no?',
    a: 'When the buyer can\'t articulate what would need to change for them to move forward — and the cost-of-delay conversation doesn\'t move them. If a buyer says "not right now" and can\'t tell you what "right time" looks like, they\'re likely not a real opportunity. The right response is to close the loop clearly rather than chasing indefinitely. A clean no is more valuable than an uncertain maybe.',
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
      headline: 'B2B Sales Objection Handling: How to Respond to the 7 Most Common Objections',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/b2b-sales-objection-handling',
    },
  ],
}

export default function B2bSalesObjectionHandlingPage() {
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
              Sales Execution
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'B2B Sales Objection Handling:')}
              <span className="block text-blue-400">{v('heroAccent', 'How to Respond to the 7 Most Common Objections')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Every lost deal has an objection somewhere in it. Most reps respond to the objection they hear, not the one that's actually driving it. Here are the 7 most common B2B sales objections, their real root causes, and the responses that actually work.")}
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
                href="/how-to-run-a-discovery-call"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to run a discovery call →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 7 Objections */}
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
              The 7 Objections and How to Handle Them
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each objection includes the root cause, the weak response to avoid, and the strong response that actually moves deals forward.
            </motion.p>
            <div className="space-y-8">
              {objections.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <div className="w-full">
                      <h3 className="mb-2 text-xl font-bold text-neutral-900">{item.objection}</h3>
                      <p className="mb-4 text-sm text-neutral-500">
                        <span className="font-semibold">Root cause: </span>{item.rootCause}
                      </p>
                      <div className="mb-3 rounded-lg border border-red-100 bg-red-50 px-4 py-3">
                        <p className="text-sm text-red-700">
                          <span className="font-bold text-red-800">✕ Weak response: </span>{item.weakResponse}
                        </p>
                      </div>
                      <div className="mb-4 rounded-lg border border-green-100 bg-green-50 px-4 py-3">
                        <p className="text-sm text-green-800">
                          <span className="font-bold">✓ Strong response: </span>{item.strongResponse}
                        </p>
                      </div>
                      <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                        <p className="text-sm font-bold text-blue-800">{item.rule}</p>
                      </div>
                    </div>
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
              Objection handling is a skill problem in individual reps and a system problem in teams. When one rep handles the price objection poorly, it's a coaching opportunity. When all your reps handle it poorly, it's a training and playbook problem — and a signal that your sales enablement infrastructure is missing the component that turns good reps into great ones. The objections on this page will not surprise any experienced sales leader. But most teams encounter them without a documented response framework, which means every rep invents their own — and most of them are wrong.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              If your team is consistently losing deals at the same stage — price conversations, stakeholder approval, or competitive evaluations — the problem is almost always in the response framework, not the rep quality. A{' '}
              <Link href="/how-to-close-deals-without-discounting" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                guide to closing without discounting →
              </Link>{' '}
              covers the broader framework that prevents the price objection from arising in the first place.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4 Principles */}
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
              4 Principles Behind Every Strong Objection Response
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The specific scripts matter less than these foundational principles. Get the principles right and the responses improve automatically.
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2">
              {handlingPrinciples.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{item.principle}</h3>
                  <p className="text-sm text-neutral-700">{item.detail}</p>
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
              {v('aboutBio2', "The objections on this page are the ones I hear on call recordings every week in my engagements. Most reps struggle with them not because they're bad at sales, but because nobody has ever shown them what the root cause is. When I build a coaching program for a team, objection handling is always in the first 30 days — because fixing it moves the close rate faster than almost anything else.")}
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
              {v('ctaHeadline', "Losing Deals to Objections You Should Be Handling?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your most common lost-deal objections and tell you whether the problem is rep skill, messaging, or process — and what to fix first.")}
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
