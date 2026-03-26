'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToCloseDealsNoDiscount'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const closingLevers = [
  {
    number: '01',
    lever: 'Urgency Anchoring',
    detail: 'The most powerful closing lever is a real deadline tied to the buyer\'s situation — not a fake "end-of-quarter discount." Urgency works when it\'s grounded in the buyer\'s cost of waiting: "Every month you wait is another month the team is closing deals without a pipeline system, which based on your conversion rate is costing you roughly X in revenue." Fake urgency ("offer expires Friday!") destroys trust. Real urgency — built during discovery — closes deals.',
    script: '"Based on what you\'ve told me about the Q3 target — if we start in the next two weeks, we can have the process in place before you need it to work. If we push to Q4, you\'re solving a revenue problem retroactively instead of preventing it."',
  },
  {
    number: '02',
    lever: 'Risk Reversal',
    detail: 'Pricing objections often aren\'t really about price — they\'re about risk. The buyer isn\'t sure you\'ll deliver what you\'re promising, and discounting doesn\'t solve that concern — it just makes them pay less for the risk. Risk reversal removes the hesitation by reducing the downside: a phased engagement that starts small, a 30-day structured pilot with defined success criteria, or a performance guarantee tied to specific outcomes. You protect your price and lower their risk at the same time.',
    script: '"Rather than adjusting the price, what if we start with a 30-day diagnostic engagement — fixed scope, defined deliverables — so you can see the work before committing to the full engagement? No risk on your side, and you get a clear picture of what a full engagement would produce."',
  },
  {
    number: '03',
    lever: 'Champion Building',
    detail: 'Deals die when the champion can\'t sell internally. Your job is to give your champion everything they need to win the internal conversation: a one-page business case, a before/after ROI calculation, answers to the objections they\'ll face from Finance or the CEO, and a clear articulation of the cost of inaction. When your champion is equipped, they do the closing for you. When they\'re not, they present your proposal cold to a skeptical economic buyer — and the deal dies.',
    script: '"Before you present this internally, let me help you build the business case. What objections do you expect from [Finance/CEO/IT]? Let\'s prepare your answers so you walk in armed."',
  },
  {
    number: '04',
    lever: 'ROI Anchoring',
    detail: 'When a buyer says "it\'s too expensive," they\'re telling you that the perceived value doesn\'t justify the investment. The fix isn\'t to lower the price — it\'s to raise the perception of value by making the ROI explicit and undeniable. Use their own numbers from discovery: their current close rate, their average deal size, their revenue target. Build the math in front of them. "If we improve your win rate by 10 percentage points on your current pipeline, that\'s $X in additional revenue. Our fee is $Y. That\'s a Z× return." Let the math do the work.',
    script: '"Let me show you the math with your numbers. You told me your pipeline is $1.2M and your close rate is 18%. If we move that to 28% — which is conservative for what we\'d build — that\'s $120K in additional revenue from your current pipeline alone. The engagement is $X. Does the math make sense at that return?"',
  },
  {
    number: '05',
    lever: 'Mutual Action Plan',
    detail: 'Deals without a documented path forward don\'t close — they drift. A mutual action plan (MAP) is a shared document that lists every step between "verbal yes" and "signature," who owns each step, and when it happens. Creating a MAP during the final stages of a deal keeps momentum moving, aligns both sides on what "closing" actually looks like, and surfaces blockers before they become surprises. It also signals professionalism and execution discipline — which itself builds buyer confidence.',
    script: '"Let\'s map out the path from here to signature. Based on what you\'ve told me, you\'ll need legal review, IT sign-off, and final approval from [economic buyer]. If we work backward from a [target start date], what does the timeline need to look like to make that work? I\'ll build a shared doc we can both track."',
  },
  {
    number: '06',
    lever: 'Executive Alignment',
    detail: 'The majority of deals that stall after a verbal yes stall because the economic buyer was never in the room. The champion said yes. But the check-signer has a different set of concerns, hasn\'t been part of the conversation, and isn\'t bought in. Executive alignment means proactively requesting a meeting with the economic buyer before the proposal — not after. It feels aggressive. It closes deals. "I want to make sure this is aligned at the right level before we finalize anything — can we get 20 minutes with [name] to confirm we\'re solving the right problem?"',
    script: '"Before we finalize the proposal, I\'d like 20 minutes with [executive name] — not to pitch, but to make sure we\'re solving the right problem at the right level. The last thing either of us wants is to spend 4 weeks on a proposal that doesn\'t land because they have a different priority. Would you be able to make that introduction?"',
  },
]

const discountingCost = [
  { action: 'Discount 10% to close the deal', consequence: 'Margin loss that requires 11% more revenue to compensate' },
  { action: 'Discount for "this one exception"', consequence: 'Buyer tells their network; every future prospect expects the same' },
  { action: 'Discount at month end to hit quota', consequence: 'Trains buyers to wait until month end to start every negotiation' },
  { action: 'Discount to beat a competitor', consequence: 'Attracts price-sensitive buyers who churn first when renewal time comes' },
  { action: 'Discount to "close faster"', consequence: 'Deal closes; buyer anchors to discounted price for every future renewal' },
]

const faqs = [
  {
    q: 'What do I say when a prospect directly asks for a discount?',
    a: '"I hear you on price — let me ask a question before we go there. Is the concern about the total investment, or is it about confidence that this will deliver the result?" In most cases, the answer reveals a risk concern, not a price concern. Respond to what\'s actually in the way. If the concern is genuinely budget-constrained, explore scope reduction or phasing rather than discounting the same scope at a lower price.',
  },
  {
    q: 'Is it ever appropriate to offer a discount?',
    a: 'Yes — in specific circumstances. Multi-year contracts where the buyer is genuinely reducing your renewal risk. True budget constraints at early-stage companies where a smaller deal today builds a much larger relationship over time. And strategic accounts where a reference customer or case study creates outsized future value. The test: is the discount creating real value for your business, or are you just accepting less money because the buyer pushed back? The first is strategy. The second is a pattern that compounds.',
  },
  {
    q: 'My competitors always discount. How do I compete on value without matching their price?',
    a: 'You compete by making the comparison irrelevant. If you\'re being evaluated purely on price, you\'ve already lost the value conversation. Go back to discovery: what does the buyer actually need to achieve? Build the ROI case for your solution. Quantify what it costs them to go with the cheaper option that doesn\'t fully solve the problem. A buyer who\'s seen the math rarely makes the decision on price alone — and if they do, they\'re the wrong buyer.',
  },
  {
    q: 'When should I bring in a fractional sales leader to fix my pricing and discounting problems?',
    a: 'When your discount rate exceeds 15% of average deal size, when reps are discounting in the first conversation before a proposal is even built, or when you\'re consistently losing to lower-priced competitors on deals where you had a clear performance advantage. These are symptoms of a value positioning problem and a discovery process problem — not a pricing problem. A fractional sales leader will diagnose which lever is actually broken.',
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
      headline: 'How to Close More Deals Without Discounting Your Price',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-close-deals-without-discounting',
    },
  ],
}

export default function HowToCloseDealsNoDiscountPage() {
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
              Closing &amp; Negotiation
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Close More Deals')}
              <span className="block text-blue-400">{v('heroAccent', 'Without Discounting Your Price')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Discounting doesn't close deals — it trains buyers to wait and colleagues to expect it. Here are the 6 non-price closing levers that protect your margin and move deals to signature.")}
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
                Strong discovery prevents most pricing objections →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 6 Closing Levers */}
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
              6 Non-Price Closing Levers
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Each lever addresses a specific reason deals stall — without touching your price.
            </motion.p>
            <div className="space-y-8">
              {closingLevers.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.lever}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Script: </span>
                    <span className="italic text-blue-800">{item.script}</span>
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
              Discounting is a symptom, not a strategy. When a sales team defaults to price reductions to close deals, it almost always signals one of three things: the value hasn't been clearly communicated, discovery didn't surface the urgency behind the purchase, or the rep doesn't have the tools to address the real objection. Each of those is a process problem — and none of them are solved by giving the buyer a better deal. They're solved by building the sales process that creates value clarity before the price conversation begins.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The 6 levers above work because they address what's actually in the way: risk (lever 2), internal politics (levers 3 and 6), unclear ROI (lever 4), missing urgency (lever 1), and deal drift (lever 5). None of them require you to change your price. They require you to understand the deal well enough to know which lever to pull. That understanding comes from great discovery — which is why the two pages belong together. To see how discovery sets up a no-discount close,{' '}
              <Link href="/how-to-run-a-discovery-call" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the discovery call framework →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Discounting Actually Costs */}
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
              What Discounting Actually Costs You
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The short-term win almost always creates a longer-term problem.
            </motion.p>
            <div className="space-y-4">
              {discountingCost.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-red-100 md:grid-cols-2"
                >
                  <div className="flex items-center gap-3 bg-red-50 px-6 py-4">
                    <span className="font-bold text-red-600">✕</span>
                    <span className="text-sm font-bold text-red-800">{item.action}</span>
                  </div>
                  <div className="flex items-center gap-3 border-t border-red-100 bg-white px-6 py-4 md:border-l md:border-t-0">
                    <span className="text-sm text-neutral-700">{item.consequence}</span>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "In most of my engagements, discounting is running at 20–30% before I arrive. The underlying cause is almost always the same: reps are hearing 'it's too expensive' and treating it as a price problem when it's actually a value communication problem. The fix is never to discount — it's to rebuild the discovery process and the ROI conversation so price is never the variable that's in question.")}
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
              {v('ctaHeadline', "Let's Fix Your Closing Process")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review your recent lost deals, identify whether the problem is price, value, or process, and give you the 2–3 specific changes that will protect your margin starting this quarter.")}
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
