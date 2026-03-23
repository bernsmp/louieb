'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoWhenReadyHireFirstSalesRep'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const tenSalesRuleSteps = [
  {
    number: '01',
    title: 'You\'ve Closed at Least 10 Deals Yourself',
    body: 'Not 10 referrals that closed themselves. Ten deals where you found the prospect, ran the discovery, handled objections, and asked for the business. If you haven\'t done this, you don\'t yet know what you\'re asking a rep to do.',
  },
  {
    number: '02',
    title: 'You Can Write Down the Sales Process',
    body: 'How many calls does it take to close? What are the top 3 objections? What\'s the trigger that makes a prospect ready to buy now? If you can answer these from experience — not assumption — you have a process worth teaching.',
  },
  {
    number: '03',
    title: 'You Know Your ICP Cold',
    body: 'Industry, company size, job title, pain trigger. If you\'re still figuring out who your best customer is, a rep will waste months selling to the wrong people while you pay their salary.',
  },
  {
    number: '04',
    title: 'You Have Enough Inbound to Keep One Rep Busy',
    body: 'Or you have a clear outbound strategy. A rep with no leads is a rep looking for another job in 90 days. Before you hire, verify that the pipeline exists to give them a real chance to succeed.',
  },
  {
    number: '05',
    title: 'Your Unit Economics Support the Hire',
    body: 'A fully loaded sales rep costs $80K–$130K in year one. Your ACV, close rate, and ramp time must add up to a path to positive ROI within 12 months. Run the math before you post the job.',
  },
]

const readySignals = [
  { signal: 'Closed 10+ deals yourself with a clear process', ready: true },
  { signal: 'Revenue is slipping because you\'re stretched too thin', ready: true },
  { signal: 'You have a defined ICP with proof', ready: true },
  { signal: 'Deal flow exists to support a rep through ramp', ready: true },
  { signal: 'You can articulate the sales process in writing', ready: true },
  { signal: 'You haven\'t proven you can close the sale yourself', ready: false },
  { signal: 'You\'re hiring because you don\'t want to sell', ready: false },
  { signal: 'You\'re under $500K ARR with no repeatable motion', ready: false },
  { signal: 'You expect the rep to figure out the ICP', ready: false },
  { signal: 'You don\'t have time to onboard and coach them', ready: false },
]

const faqs = [
  {
    q: 'What if I hate selling and I\'m not good at it?',
    a: 'This is actually the most common reason founders hire too early — and it\'s a mistake. If you haven\'t proven you can sell your own product, a rep can\'t either. You don\'t need to be a great salesperson. You just need to have closed enough deals to know what works. Get uncomfortable, close 10, then hire.',
  },
  {
    q: 'What revenue level should I be at before hiring a sales rep?',
    a: 'Revenue is a proxy, not the rule. Founders at $500K ARR with a proven process and clear ICP can successfully hire a rep. Founders at $2M ARR without those things will waste the hire. That said, if you\'re under $300K ARR, you almost certainly need more proof before the hire makes economic sense.',
  },
  {
    q: 'Should I hire a junior or senior sales rep first?',
    a: 'For a first hire, most founders do better with a hungry mid-level rep (3–5 years experience) who can execute a defined process — not a senior rep who expects to build it. Senior reps need infrastructure to thrive. If you\'re still building the infrastructure, a senior hire will be frustrated and expensive.',
  },
  {
    q: 'How long does it take a first sales rep to ramp?',
    a: 'Realistically: 60–90 days before you see meaningful pipeline, 90–120 days before you see closed revenue. Plan your cash accordingly. If you need revenue in 30 days, a new rep is not the solution — you need to sell more yourself first.',
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
      headline: 'How to Know When You\'re Ready to Hire Your First Sales Rep',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/when-ready-hire-first-sales-rep',
    },
  ],
}

export default function WhenReadyHireFirstSalesRepPage() {
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
              First Sales Hire
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Know When You\'re Ready')}
              <span className="block text-blue-400">{v('heroAccent', 'to Hire Your First Sales Rep')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "The answer isn't a revenue number. It's a checklist — and most founders skip the most important item on it.")}
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
                href="/how-to-hire-first-sales-rep"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to hire your first sales rep →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* The 10-Sales Rule */}
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
              The 5-Part Readiness Test
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Every item on this list needs to be true before you post the job description. One missing piece can sink the hire.
            </motion.p>
            <div className="space-y-6">
              {tenSalesRuleSteps.map((step, i) => (
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

      {/* Ready vs Not Ready */}
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
              Ready or Not Ready?
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              Check yourself against these signals honestly before committing to the hire.
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {readySignals.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${item.ready ? 'border-green-200 bg-green-50' : 'border-red-100 bg-red-50'}`}
                >
                  <div className={`mt-0.5 shrink-0 rounded-full p-1 ${item.ready ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.ready ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </div>
                  <p className={`text-sm font-medium ${item.ready ? 'text-green-900' : 'text-red-900'}`}>{item.signal}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              The most common reason a first sales hire fails isn't candidate quality — it's founder readiness. When a founder hasn't personally proven the sale, they can't write a job description that reflects what they actually need, can't evaluate candidates against a real standard, and can't coach the rep when they struggle. The result is a rep who flails for 90 days before everyone agrees it's not working. That's a $100K mistake and 6 months lost.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The founders who hire their first sales rep successfully have one thing in common: they sold first. They know what a good discovery call sounds like because they've run 50 of them. They know which objections kill deals because they've lost to those objections. That knowledge — earned through actual selling — is what separates a successful first hire from an expensive failed experiment. If you want a deeper look at what the hiring process should look like once you're ready,{' '}
              <Link href="/build-sales-team-after-1m-arr" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                here's how to build a sales team after $1M ARR →
              </Link>
            </motion.p>
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
              {v('aboutBio2', "I've helped dozens of founders make their first sales hire — and more importantly, helped them avoid making it before they were ready. The difference between the right timing and the wrong timing on this hire is often the difference between a company that scales and one that stalls.")}
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
              {v('ctaHeadline', "Not Sure If You're Ready? Let's Find Out.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess exactly where you are — whether you're ready to hire, what to do first if you're not, and what the hire should look like when the time is right.")}
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
