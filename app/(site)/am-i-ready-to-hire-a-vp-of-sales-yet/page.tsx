'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-06'
const CMS_SECTION = 'seoReadyToHireVpSales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function ReadyToHireVpSalesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "A VP of Sales doesn't build your sales engine. They scale one that already runs. If there's nothing to scale, even a great VP fails."),
    v('takeaway2', "The honest question isn't \"Can I afford a VP?\" It's \"Would a VP have anything to run on day one?\" Most founders at $1M–$10M ARR can't answer yes yet."),
    v('takeaway3', "There are five things to complete before you hire: get out of founder-led sales, lock your Ideal Customer Profile, write the playbook, build a forecast you trust, and prove the process works in someone else's hands."),
    v('takeaway4', "Hire before those five are done and you're betting roughly $400K and a year of runway on one person fixing problems they were never hired to fix."),
    v('takeaway5', "A Fractional Sales Leader builds all five with you in 60 to 90 days, at about 25% of a full-time VP's cost. Then you hire the VP into a machine that already produces revenue."),
  ]

  const checklist = [
    {
      number: '01',
      title: v('item1Title', "You've Actually Gotten Out of Founder-Led Sales"),
      detail: v('item1Detail', "This is the one founders skip. If you're still the closer on every deal that matters, you don't have a sales function, you have a sales person, and it's you. A VP can't scale a motion that only lives in your head. Before you hire, the core deals have to close when you're not in the room. That means at least one other person is running discovery, handling objections, and getting to yes without you on the call. If revenue still drops the week you go on vacation, you're not ready. You're the product."),
      outcome: v('item1Outcome', "Deals that close without you on the call, so a VP inherits a working motion instead of inheriting you."),
    },
    {
      number: '02',
      title: v('item2Title', 'You Have a Defined Ideal Customer Profile'),
      detail: v('item2Detail', "A VP of Sales will ask one question in the first week: who do we sell to and who do we walk away from? If your answer is \"anyone with a budget,\" they'll spend their first quarter guessing, and so will every rep they hire. A defined Ideal Customer Profile names the industry, the company size, the revenue band, the buying role, and the disqualifiers that kill a deal on sight. It's the difference between a team that fills the pipeline with real buyers and a team that fills it with hope. You write this before the VP, not after, because you're the one who knows which customers actually stick."),
      outcome: v('item2Outcome', "A one-page ICP every rep qualifies against, so the pipeline fills with buyers who close and renew."),
    },
    {
      number: '03',
      title: v('item3Title', 'You Have a Written Sales Playbook'),
      detail: v('item3Detail', "The playbook is your sales instinct turned into something teachable. It scripts the discovery framework, the qualification criteria, the recurring objections and the best answer to each, the demo, the follow-up cadence, and the close. Without it, every rep sells a slightly different product to a slightly different buyer, and a VP inherits chaos instead of a system. Founders assume the VP will write the playbook. The good ones can, but it takes them six months you don't have, and they'll write it from a generic template instead of from what's already working in your business. Hand them a playbook and they scale it. Hand them a blank page and they stall."),
      outcome: v('item3Outcome', "A 20-to-40-page operating manual that turns rep onboarding from six months into 30 days."),
    },
    {
      number: '04',
      title: v('item4Title', 'You Have a Pipeline and Forecast You Can Trust'),
      detail: v('item4Detail', "A VP is going to be measured on a number, and they'll want to know that number is real before they sign. If your forecast is a feeling and your pipeline stages are aspirational labels copied from a CRM template, you can't hand them a target you believe in. A trustworthy pipeline has stages defined by buyer actions, not seller activity. \"Discovery complete\" means the buyer confirmed the problem, the budget, the timeline, and the decision-maker, not that a meeting happened. When the data is clean, a VP can forecast, coach, and hold the line. When it's fiction, they spend month one rebuilding it and month two explaining the miss."),
      outcome: v('item4Outcome', "A forecast you'd take to the board without a footnote, so a VP owns a real number from day one."),
    },
    {
      number: '05',
      title: v('item5Title', 'You Have Proof the Process Works in Someone Else’s Hands'),
      detail: v('item5Detail', "The final test is the one that matters most: has anyone besides you closed a deal by following the process, not by being charismatic? One or two reps hitting quota on the playbook is proof the system is teachable, repeatable, and ready to be scaled. That's exactly what a VP is for. If nobody has done it yet, you don't need a VP, you need to prove the motion works once, because a VP scales what's proven. They don't manufacture proof. Hiring them to find out whether your sales model even works is the single most expensive experiment a founder can run."),
      outcome: v('item5Outcome', "At least one rep closing on the playbook, so the VP scales a proven motion instead of testing an unproven one."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', "You're still the closer on every deal that counts"),
      withIt: v('compare1With', 'Deals close without the founder in the room'),
    },
    {
      without: v('compare2Without', '"We sell to anyone with a budget"'),
      withIt: v('compare2With', 'A defined ICP every rep qualifies against'),
    },
    {
      without: v('compare3Without', 'The process lives in the founder’s head'),
      withIt: v('compare3With', 'A written playbook anyone can run'),
    },
    {
      without: v('compare4Without', 'Forecast is a guess, off by 30% a quarter'),
      withIt: v('compare4With', 'A forecast built on real stage conversion data'),
    },
    {
      without: v('compare5Without', 'Nobody but the founder has ever closed on it'),
      withIt: v('compare5With', 'One or two reps already hitting quota on the playbook'),
    },
    {
      without: v('compare6Without', 'VP spends a year fixing the foundation, then leaves'),
      withIt: v('compare6With', 'VP scales a working machine from week one'),
    },
  ]

  const defaultFaqs = [
    {
      q: 'How do I know if I am ready to hire a VP of Sales?',
      a: "Run the five-item checklist on this page honestly. If you're out of founder-led sales, you have a defined ICP, a written playbook, a forecast you trust, and at least one rep closing on the process, you're ready. If two or more of those are missing, hiring a VP means paying someone $400K to build the foundation, and that almost never works. A VP scales a working sales engine. They don't build one from scratch.",
    },
    {
      q: 'What happens if I hire a VP of Sales before I am ready?',
      a: "The usual path is six to twelve months of slow progress, a mutual parting of ways, and then a return to founder-led sales while you recover. The all-in cost of a failed VP hire at this stage runs $500K to $800K once you add recruiting fees, severance, lost pipeline, and the deals that didn't close during the ramp. The damage isn't just the money. It's the year of momentum you can't get back.",
    },
    {
      q: 'Can I just hire a VP of Sales to build all five of these for me?',
      a: "You can, but it's the most expensive way to do it and the most likely to fail. A VP of Sales is hired and paid to scale and lead, not to do the foundational build, write the first playbook, or prove the model works. Most VPs at this level haven't done a ground-up build in years and don't want to. They want to inherit a machine and make it bigger. Build the five first, then hire the VP to run them.",
    },
    {
      q: 'What is the difference between a VP of Sales and a Fractional Sales Leader here?',
      a: "A full-time VP is a permanent, roughly $400K commitment hired to scale an existing engine. A Fractional Sales Leader is brought in to build that engine, the playbook, the ICP, the pipeline, the accountability, and prove it works, in 60 to 90 days at about 25% of the cost. The Fractional Sales Leader gets you ready. The VP takes it from there. Used in that order, you stop betting a year of runway on one hire.",
    },
    {
      q: 'How long does it take to get ready to hire a VP of Sales?',
      a: "With a Fractional Sales Leader who has done it before, the core foundation, playbook, ICP, pipeline discipline, and accountability, is built in 60 to 90 days. Proving the motion in a rep's hands adds another 30 to 60 days. So most founders go from \"not ready\" to \"genuinely ready\" in about four to six months, with a working sales function the whole time instead of a year of guessing.",
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
        headline: 'Am I Ready to Hire a VP of Sales Yet?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/am-i-ready-to-hire-a-vp-of-sales-yet',
        datePublished: '2026-06-14',
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
              {v('heroTag', 'Sales Leadership Readiness')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Am I Ready to Hire a')}
              <span className="block text-blue-400">{v('heroAccent', 'VP of Sales Yet?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', '5 Things to Complete Before Hiring a VP of Sales')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders weighing a $400K VP hire. A VP scales a sales engine that already runs. Here's how to know if you have one to hand them, and what to finish first if you don't.")}
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
                href="/250k-mistake-vp-sales-hire-too-early"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                The $250K mistake of hiring too early →
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

      {/* The 5 Things — checklist */}
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
              {v('sectionItemsHeading', '5 Things to Complete Before Hiring a VP of Sales')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionItemsSubheading', "If you can check all five honestly, you're ready. If you can't, here's exactly what to finish first.")}
            </motion.p>
            <div className="space-y-8">
              {checklist.map((item, i) => (
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
              {v('seoPara1', "The question \"Am I ready to hire a VP of Sales?\" is really two questions wearing one coat. The first is about you, can you afford the roughly $400K all-in cost, are you tired of carrying sales alone. The second is the one that actually decides the outcome: would a VP have anything to run on day one? Roughly 70% of first-time VP hires fail inside eighteen months, and it's rarely because the VP was bad. It's because they were hired into companies with no playbook, no defined process, and a founder who was still the best, and only, salesperson in the building.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "So the readiness work happens before the hire, not after. You get yourself")}{' '}
              <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                out of founder-led sales
              </Link>
              {v('seoPara2b', ", you write down")}{' '}
              <Link href="/how-to-create-an-ideal-customer-profile" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                who your ideal customer actually is
              </Link>
              {v('seoPara2c', ", you build the playbook and a forecast you trust, and you prove the motion works in someone else's hands. Do that and a VP scales a machine that already produces revenue. Skip it and you've hired an operator to run an empty operation. The order matters more than the title.")}
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
              {v('sectionCompareHeading', 'Hiring Too Early vs. Hiring Ready')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "The difference isn't the VP's talent. It's whether the five things were done before they started.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Hiring a VP Too Early')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Hiring a VP When Ready')}
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
              {v('aboutBio2', "I've watched a lot of founders hire a VP of Sales hoping it would fix sales, and watched most of them spend $400K finding out it doesn't work that way. My job is to get you ready first, build the five things, prove the motion, and hand you a sales engine that's actually scalable. Then, when you hire a VP, they're set up to win instead of set up to leave.")}
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
                <Link href="/250k-mistake-vp-sales-hire-too-early" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  The $250K Mistake: Hiring a VP of Sales Too Early →
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales System Without Hiring a Full-Time VP of Sales →
                </Link>
              </li>
              <li>
                <Link href="/when-to-hire-a-fractional-sales-leader" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  When to Hire a Fractional Sales Leader →
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
              {v('ctaHeadline', 'Not Sure Which of the Five You Have?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk the checklist with you, tell you honestly whether you're ready to hire a VP of Sales, and map what it would take to get ready if you're not, without the $400K bet.")}
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
