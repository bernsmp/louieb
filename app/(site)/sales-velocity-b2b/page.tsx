'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesVelocityB2b'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalesVelocityPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const levers = [
    {
      number: '01',
      title: v('lever1Title', 'Number of Opportunities'),
      body: v('lever1Body', 'The raw count of active deals in your pipeline at any given time. More opportunities mean more chances to close — but only if the other three levers are healthy. Adding opportunities to a broken win rate or a long cycle accelerates losses, not revenue.'),
    },
    {
      number: '02',
      title: v('lever2Title', 'Average Deal Size'),
      body: v('lever2Body', 'The mean value of deals you close. Increasing deal size is often the highest-leverage move for $1M–$10M companies — moving from $20K to $30K average deal while keeping everything else constant increases velocity by 50%. This starts with better ICP definition and more disciplined qualification.'),
    },
    {
      number: '03',
      title: v('lever3Title', 'Win Rate'),
      body: v('lever3Body', "The percentage of deals you close from the total opportunities you work. A 25% win rate means three of every four deals you invest time in go nowhere. Doubling win rate to 50% — achievable through better qualification and a real sales playbook — doubles revenue velocity without adding a single new opportunity."),
    },
    {
      number: '04',
      title: v('lever4Title', 'Sales Cycle Length'),
      body: v('lever4Body', "The average number of days from first contact to closed-won. This is the denominator — it divides into everything else. A deal worth $30K that closes in 45 days generates twice the velocity of the same deal that takes 90 days. Reducing cycle length is the fastest way to compress the denominator and accelerate revenue."),
    },
  ]

  const diagnostics = [
    {
      problem: v('diag1Problem', 'Low velocity despite healthy pipeline volume'),
      cause: v('diag1Cause', 'Win rate or deal size problem — too many unqualified deals or underpriced contracts'),
    },
    {
      problem: v('diag2Problem', 'Low velocity despite high win rate'),
      cause: v('diag2Cause', 'Not enough opportunities entering the top of the funnel — pipeline generation issue'),
    },
    {
      problem: v('diag3Problem', 'Low velocity despite strong win rate and deal size'),
      cause: v('diag3Cause', 'Cycle is too long — deals are stalling somewhere in the middle stages'),
    },
    {
      problem: v('diag4Problem', 'High velocity but inconsistent month-to-month'),
      cause: v('diag4Cause', 'Lumpy pipeline — feast-or-famine pattern signals no systematic outreach or poor stage discipline'),
    },
    {
      problem: v('diag5Problem', 'Velocity improving but revenue flat'),
      cause: v('diag5Cause', 'Churn or contraction canceling out new closed revenue — CS or renewal problem, not a sales problem'),
    },
  ]

  const signals = [
    v('signal1', "You can't explain why revenue was up one month and flat the next"),
    v('signal2', 'Your sales forecast is based on gut feel, not pipeline math'),
    v('signal3', "You don't know your win rate by rep, by segment, or by source"),
    v('signal4', 'Deals take significantly longer to close than they did a year ago'),
    v('signal5', "You're adding more reps but revenue per rep is declining"),
    v('signal6', 'Your pipeline looks healthy but the revenue never materializes'),
  ]

  const defaultFaqs = [
    {
      q: 'What is the sales velocity formula?',
      a: "Sales velocity = (Number of Opportunities × Average Deal Size × Win Rate) ÷ Sales Cycle Length. For example: 40 opportunities × $25,000 average deal × 30% win rate ÷ 60 days = $5,000 in daily revenue. Multiply by 30 for monthly velocity ($150,000/month). The formula is most useful as a diagnostic — if monthly revenue doesn't match what your velocity formula predicts, one of the four inputs is wrong.",
    },
    {
      q: 'Which of the four sales velocity levers has the most impact?',
      a: "It depends on your specific numbers — which is why you need to calculate it. For most $1M–$10M companies, win rate is the highest-leverage lever because it's typically the most broken. A team closing 20% of opportunities that could close 35% with a better playbook and qualification process will see a 75% increase in velocity without adding headcount. That said, deal size is often underestimated — founders frequently undercharge relative to value, and a 20% price increase with flat volume is pure velocity gain.",
    },
    {
      q: "How is sales velocity different from revenue?",
      a: "Revenue is a lagging indicator — it tells you what already happened. Sales velocity is a leading indicator — it tells you what's about to happen. If your velocity is declining today, your revenue will decline in 30–90 days. That's why velocity-based pipeline reviews are more useful for founders than quota-based ones: they surface problems before they hit the income statement.",
    },
    {
      q: 'How often should I calculate sales velocity?',
      a: "Monthly at minimum — weekly if you're in an active growth push or trying to diagnose a specific problem. The goal isn't to track the number obsessively. It's to build the habit of asking: 'Which of the four inputs changed this month, and why?' That question surfaces the root cause of revenue problems faster than any dashboard.",
    },
  ]

  const displayFaqs = cmsfaqs(4, defaultFaqs)

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
        headline: 'What Is Sales Velocity? The One Metric That Predicts Revenue Better Than Quota',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/sales-velocity-b2b',
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
              Sales Performance
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Is Sales Velocity?')}
              <span className="block text-blue-400">{v('heroAccent', 'The One Metric That Predicts Revenue Better Than Quota')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Quota tells you if you hit the number. Sales velocity tells you why — and what's coming next. Here's the formula every $1M–$10M founder should understand, and how to use it to diagnose exactly what's holding your revenue back.")}
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
                href="/sales-kpis-for-small-business"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                The 7 sales KPIs every team needs →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* The 4 Levers */}
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
              {v('sectionLeversHeading', 'The 4 Levers of Sales Velocity')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionLeversSubheading', 'Sales velocity = (Opportunities × Deal Size × Win Rate) ÷ Cycle Length. Each lever multiplies or divides the others.')}
            </motion.p>
            <div className="space-y-6">
              {levers.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-700">{item.body}</p>
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
              {v('seoPara1', "Most founders manage their sales team the way they read a speedometer — they check the number (revenue) and react when it's too low. Sales velocity is different. It's the dashboard that tells you why the car is slowing down before you've actually decelerated. The formula surfaces the specific input — pipeline volume, deal size, win rate, or cycle length — that's constraining revenue. Without it, you're guessing at root cause.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "For companies at the $1M–$10M stage, the most common velocity problem is a hidden win rate collapse masked by growing pipeline. Founders keep adding leads, but conversion rates are quietly declining — and the lagging revenue numbers don't show it until months later. A monthly velocity calculation would catch this in the first 30 days.")}{' '}
              <Link href="/sales-forecasting-for-small-business" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Better sales forecasting starts here →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Table */}
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
              {v('sectionDiagHeading', 'How to Use Velocity to Diagnose Revenue Problems')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionDiagSubheading', 'Each velocity pattern points to a specific root cause — and a specific fix.')}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">What You See</div>
                <div className="px-6 py-4 font-bold text-blue-400">What It Means</div>
              </div>
              {diagnostics.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.problem}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <p className="text-sm text-neutral-700">{row.cause}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signals */}
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
              {v('sectionSignalsHeading', '6 Signs Your Team Has a Sales Velocity Problem')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionSignalsSubheading', "If any of these are true, you're flying blind on what's actually driving — or killing — your revenue.")}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {signals.map((signal, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 rounded-full bg-red-100 p-1 text-red-700">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-red-900">{signal}</p>
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
              {v('aboutBio2', "Sales velocity is one of the first things I calculate when I start a new engagement. It immediately tells me which lever is broken — and points me directly at the root cause before I spend a day talking to reps or reviewing deals. Most companies I work with have never calculated it. When they do, the problem that's been confusing them for months becomes obvious in about 10 minutes.")}
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
              {v('ctaHeadline', "Want to Know What's Actually Limiting Your Revenue?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can calculate your sales velocity, identify which lever is broken, and tell you exactly what to fix first to move the number.")}
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
