'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToCreateICP'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const icpSteps = [
  {
    number: '01',
    title: 'Start with Closed-Won Deals — Not Assumptions',
    detail: 'Most founders build their ICP by describing the customer they wish they had. The right way is to reverse-engineer the customers they\'ve already won. Pull your last 20 closed-won deals and look for the patterns: What company size? What industry? What was the trigger event that made them buy now? What job title was your champion? What objections came up in every deal you lost? Patterns in closed-won deals are facts. Assumptions about ideal customers are guesses.',
    action: 'Create a spreadsheet with your last 20 closed-won deals. Add columns for company size (employees and revenue), industry, champion title, trigger event, average sales cycle, and ACV. Sort by ACV descending and look for the top 3–5 shared attributes.',
  },
  {
    number: '02',
    title: 'Define Firmographic Fit with Hard Criteria',
    detail: 'An ICP without hard criteria isn\'t an ICP — it\'s a description. "Mid-market B2B companies" is not an ICP. "US-based B2B SaaS companies between 50–500 employees, Series A or B, with a dedicated sales team of 3–10 reps, and a CRM already in place" is an ICP. The specificity feels uncomfortable because it appears to shrink your market. What it actually does is concentrate your effort on the prospects most likely to buy — and dramatically improves the quality of your pipeline.',
    action: 'Define your ICP using these five firmographic fields: company size (employees), annual revenue or ARR range, industry or vertical, geographic territory, and funding stage or business model. Every field must have a specific value or range — no qualitative descriptions.',
  },
  {
    number: '03',
    title: 'Map the Buying Team — Champion, Economic Buyer, Blocker',
    detail: 'At $1M–$10M ARR, most founders sell to a champion who loves the product but doesn\'t control the budget. When the deal gets to the economic buyer, it stalls because no one built that relationship. A complete ICP maps all three roles: the champion (the person inside the company who wants the problem solved), the economic buyer (the person who approves the purchase), and the blocker (the person who can kill the deal — often IT, Legal, or Finance). Knowing all three changes how you sell from the first call.',
    action: 'For each deal in your closed-won analysis, identify who played each role. Then define the typical job titles for each role at your ICP companies. Use this to ensure you\'re multi-threading every deal from Stage 1.',
  },
  {
    number: '04',
    title: 'Identify the Trigger Events That Create Urgency',
    detail: 'The best ICP customers aren\'t just the right size and industry — they\'re the right size and industry at the right moment. Trigger events are the circumstances that make a company ready to buy now: a new VP of Sales just hired, a failed sales hire 6 months ago, a new funding round, a recent miss on a revenue target, a competitor entering their market. Companies experiencing trigger events close faster, negotiate less, and stay longer. Without trigger events, your outreach lands at the wrong time even if it lands with the right company.',
    action: 'List 5–7 trigger events that historically precede a purchase decision for your product. Add these as qualification fields in your CRM. Train reps to ask about trigger events in every discovery call and to research for them before cold outreach.',
  },
  {
    number: '05',
    title: 'Turn Your ICP into CRM Qualification Criteria',
    detail: 'An ICP document that lives in a Google Doc changes nothing. An ICP that\'s enforced as required CRM fields at Stage 1 entry changes everything. If your pipeline stages require a rep to confirm company size, champion title, trigger event, and budget window before a deal can advance, you\'ve operationalized the ICP. Deals that don\'t meet ICP criteria either get disqualified early — saving time — or get escalated for a deliberate exception decision. Either way, your pipeline reflects reality.',
    action: 'Map your ICP criteria to required CRM fields. Set Stage 1 exit criteria to require ICP confirmation. Review your current pipeline against these criteria — any deal that can\'t be confirmed should be flagged for re-qualification or removed.',
  },
]

const icpComparison = [
  { without: 'Chasing every inbound lead regardless of fit', with: 'Pre-qualifying against firmographic criteria before the first call' },
  { without: 'Reps spending hours on deals that never close', with: 'Reps focusing on the 20% of prospects that produce 80% of revenue' },
  { without: 'Forecasts that miss because pipeline is full of unlikely deals', with: 'Pipeline that reflects real conversion probability' },
  { without: 'Marketing generating leads that sales can\'t close', with: 'Marketing and sales aligned on who they\'re targeting' },
  { without: 'Founders jumping in to save deals that shouldn\'t exist', with: 'Founders able to step back because the filter does the work' },
]

const faqs = [
  {
    q: 'How often should I update my ICP?',
    a: 'Revisit your ICP quarterly for the first year, then annually once it\'s stable. The two triggers that should force an immediate review: your win rate drops below 20% on qualified pipeline (the ICP may have drifted), or you close 3+ deals outside your current ICP definition (there may be a new segment worth formalizing). Your ICP should evolve as your product and market evolve — treating it as a fixed document is the second most common mistake after not having one at all.',
  },
  {
    q: 'What if my ICP is too narrow and I run out of prospects?',
    a: 'This concern is almost always theoretical. A US-based SaaS company between 50–500 employees with an active sales team is a market of tens of thousands of companies. A specific ICP concentrates your effort — it doesn\'t eliminate your market. The founders who fear a narrow ICP are usually the ones chasing every inbound lead and closing none of them. The data almost always shows that 80% of your best customers share 3–4 specific attributes. Start there.',
  },
  {
    q: 'Can I have more than one ICP?',
    a: 'Yes — but not until your primary ICP is fully documented, operationalized in your CRM, and producing consistent results. Most companies at $1M–$5M ARR benefit from a singular focus. Once you\'ve built a repeatable motion for ICP #1, you can add a second. Running two ICPs simultaneously before you have enough sales infrastructure to serve both usually means you do both poorly.',
  },
  {
    q: 'When should a fractional sales leader help with ICP definition?',
    a: 'ICP work is one of the first things I do in every engagement. It\'s foundational to everything else — outbound targeting, pipeline qualification, rep training, and forecasting all depend on it. If your team is spending more than 30% of selling time on deals that never close, or if your pipeline has a win rate below 15%, those are signals that the ICP is either missing or not being enforced.',
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
      headline: 'How to Create an Ideal Customer Profile for a B2B Sales Team',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-create-an-ideal-customer-profile',
    },
  ],
}

export default function HowToCreateICPPage() {
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
              ICP &amp; Targeting
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Create an Ideal Customer Profile')}
              <span className="block text-blue-400">{v('heroAccent', 'for a B2B Sales Team')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders describe the customer they want. The right ICP is built by reverse-engineering the customers you've already won. Here's the 5-step framework that turns ICP from a slide into a sales filter.")}
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
                href="/how-to-build-a-sales-pipeline"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How your ICP feeds your pipeline →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5-Step Framework */}
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
              The 5-Step ICP Framework
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Built from data, enforced in your CRM. Not a slide — a filter.
            </motion.p>
            <div className="space-y-8">
              {icpSteps.map((item, i) => (
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
                    <span className="font-bold text-blue-800">Action: </span>
                    <span className="text-blue-800">{item.action}</span>
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
              The ideal customer profile is the most under-built asset in most $1M–$10M ARR companies. It exists in some form — usually a vague description of the "type" of company that buys — but it hasn't been operationalized. Reps don't use it to qualify deals. Marketing doesn't use it to target campaigns. Founders still override it when a big logo shows interest. The result is a pipeline full of deals that look real on a spreadsheet but convert at 10–12% instead of 25–35%.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              An ICP that works is specific enough to disqualify. If your ICP description fits every company in your CRM, it's not an ICP — it's a category. The five-step framework above is how you get from category to criteria. Once the criteria are in the CRM as required fields, the ICP stops being a document and starts being a discipline. If you want to see how a strong ICP connects to consistent pipeline generation,{' '}
              <Link href="/how-to-build-a-sales-pipeline" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the pipeline-building framework →
              </Link>
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
              Without an ICP vs. With One
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              The difference shows up in close rates, sales cycle length, and how much of the founder's time gets consumed by deals.
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold">Without a Defined ICP</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">With a Defined ICP</div>
              </div>
              {icpComparison.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-2 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
                    <span>{row.without}</span>
                  </div>
                  <div className="flex items-start gap-2 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-green-600">✓</span>
                    <span>{row.with}</span>
                  </div>
                </div>
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
              {v('aboutBio2', "ICP definition is one of the first things I work on in every engagement. Most founder-led companies are chasing deals that were never going to close — not because of bad selling, but because the filter was never built. When an ICP is operationalized in the CRM, win rates typically climb 10–15 percentage points within the first quarter.")}
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
              {v('ctaHeadline', "Let's Define Your ICP Together")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess your current pipeline, identify your actual best-fit customers from closed-won data, and map the ICP criteria that will improve your win rate immediately.")}
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
