'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesQualifiedLead'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalesQualifiedLeadPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const leadTypes = [
    {
      number: '01',
      title: v('lead1Title', 'Marketing Qualified Lead (MQL)'),
      body: v('lead1Body', "An MQL is a lead that marketing has determined shows enough interest or fits enough criteria to be worth sales attention — but hasn't been qualified by a sales conversation yet. MQL definitions vary wildly: it might mean 'downloaded a whitepaper,' 'attended a webinar,' or 'matches our ICP firmographics.' The core problem: without a specific, agreed-upon MQL definition, marketing sends everything and sales ignores everything."),
    },
    {
      number: '02',
      title: v('lead2Title', 'Sales Qualified Lead (SQL)'),
      body: v('lead2Body', "An SQL is a lead that a sales rep has engaged with directly and confirmed meets the minimum bar for real pursuit. SQL qualification typically uses a framework like BANT (Budget, Authority, Need, Timeline) or MEDDIC. The key: it requires a human sales conversation, not just a data match. A lead that looks perfect on paper but has no budget or no urgency is not an SQL — it's a marketing hypothesis."),
    },
    {
      number: '03',
      title: v('lead3Title', 'Sales Accepted Lead (SAL)'),
      body: v('lead3Body', "An SAL is the handoff stage between MQL and SQL — it's the moment sales formally accepts the lead from marketing and commits to engaging within a defined SLA (typically 24–48 hours). SAL is most relevant in companies with a formal SDR/AE structure where there's a clear handoff point. For most $1M–$10M companies, the SAL stage can be simplified — but the concept of a committed response SLA is valuable at any size."),
    },
    {
      number: '04',
      title: v('lead4Title', 'How to Define SQL for Your Specific Business'),
      body: v('lead4Body', "The right SQL definition is built from your closed-won data — not from a framework template. Pull your last 30 closed deals and ask: what did they have in common at the point of first real engagement? Budget range confirmed? Decision-maker in the room? A specific trigger event (headcount growth, new funding, technology change)? The criteria that appear in 80%+ of your wins become your SQL definition. Update it quarterly as the win data evolves."),
    },
  ]

  const comparison = [
    {
      without: v('comparison1Without', "Sales and marketing argue constantly about lead quality — each side blames the other"),
      with: v('comparison1With', 'Clear SQL criteria mean both teams agree on what constitutes a real opportunity'),
    },
    {
      without: v('comparison2Without', "Reps spend time on leads that will never buy — opportunity cost is invisible"),
      with: v('comparison2With', 'Reps only pursue leads that meet the minimum qualification bar — time is protected'),
    },
    {
      without: v('comparison3Without', "Pipeline is inflated with wishful opportunities that make the forecast look full"),
      with: v('comparison3With', 'Pipeline reflects real opportunities — forecast accuracy improves significantly'),
    },
    {
      without: v('comparison4Without', "Conversion rates are meaningless because the denominator includes unqualified garbage"),
      with: v('comparison4With', 'Conversion rates are based on qualified leads — and become a meaningful performance signal'),
    },
    {
      without: v('comparison5Without', "Marketing optimizes for MQL volume — sends leads sales will never work"),
      with: v('comparison5With', 'Marketing optimizes for SQL conversion — generates fewer, better leads'),
    },
    {
      without: v('comparison6Without', "Close rate appears low but the actual problem is poor lead quality at the top"),
      with: v('comparison6With', 'Root cause of close rate problems is correctly identified — qualification vs. process vs. rep skill'),
    },
  ]

  const signals = [
    v('signal1', 'Sales and marketing have different definitions of what a good lead looks like'),
    v('signal2', "Reps complain that marketing leads aren't worth working"),
    v('signal3', "Marketing hits MQL targets but sales misses quota — and no one connects the two"),
    v('signal4', 'Your pipeline looks full but conversion rates are low and deals are slow'),
    v('signal5', 'You can\'t tell whether a close rate problem is a qualification problem or a process problem'),
    v('signal6', 'There\'s no agreed SLA for how quickly sales should follow up on marketing leads'),
  ]

  const defaultFaqs = [
    {
      q: 'Should every company use BANT to qualify leads?',
      a: "BANT (Budget, Authority, Need, Timeline) is a useful starting framework — not a universal standard. For high-velocity, low-ACV sales, BANT is often too heavyweight and slows reps down unnecessarily. For complex enterprise deals, BANT may not be sufficient and frameworks like MEDDIC or SPICED provide more structure. For most $1M–$10M B2B companies, a simplified version works well: 'Does this person have the authority and budget to buy, and is there a specific problem they need to solve in the next 90 days?' Those three questions catch most unqualified leads.",
    },
    {
      q: "What happens when sales rejects a marketing-generated lead?",
      a: "In a functioning demand generation model, rejected leads go back to marketing with a specific rejection reason (not 'bad lead' — that's useless). Marketing tracks rejection reasons, adjusts targeting, and feeds the pattern back into campaign optimization. This feedback loop is what makes the MQL-to-SQL handoff valuable over time. Without it, sales rejects leads and marketing keeps sending the same low-quality volume, and the conversation never improves.",
    },
    {
      q: "How does SQL definition relate to ICP?",
      a: "Your SQL definition should be a tighter version of your ICP. The ICP describes the universe of companies and buyers you want to sell to. The SQL definition adds the behavioral and situational signals that indicate a specific company is ready to buy now — not just potentially a good fit at some point. A company that perfectly matches your ICP but has no current urgency or budget is an ICP match, not an SQL. The SQL filter protects rep time from ICP matches that aren't ready.",
    },
    {
      q: "How often should the SQL definition be updated?",
      a: "At minimum, quarterly — and whenever the win data changes significantly. The most common trigger for an update is a shift in your average deal size or ICP segment. As companies grow from $1M to $5M ARR, the buyers they serve often shift: the SQL criteria that worked for SMB deals may not apply to the mid-market segment they're starting to win. Running a quarterly win/loss analysis and updating SQL criteria based on what closed is the discipline that keeps qualification current.",
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
        headline: "What Is a Sales Qualified Lead (SQL)? And Why Your Team Needs a Clear Definition",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/sales-qualified-lead-definition',
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
              Sales & Marketing Alignment
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Is a Sales Qualified Lead (SQL)?')}
              <span className="block text-blue-400">{v('heroAccent', 'And Why Your Team Needs a Clear Definition')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most sales teams have an informal sense of what a good lead looks like. Almost none have it written down. Without a documented SQL definition, sales and marketing argue about lead quality, pipeline is inflated with junk, and close rates look worse than they actually are.")}
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
                href="/how-to-create-ideal-customer-profile"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Build your ICP first →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Lead Type Cards */}
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
              {v('sectionLeadTypesHeading', 'MQL vs. SQL vs. SAL: The Distinctions That Matter')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionLeadTypesSubheading', "The definitions only matter if they're agreed upon by both sales and marketing — and built from your actual win data.")}
            </motion.p>
            <div className="space-y-6">
              {leadTypes.map((item, i) => (
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
              {v('seoPara1', "The absence of a documented SQL definition is one of the most common — and most costly — operational gaps in $1M–$10M companies. Without it, sales reps make individual judgment calls about which leads to pursue, marketing has no feedback signal to optimize against, and pipeline reviews become debates about individual deals rather than systematic analysis of conversion patterns. The cost isn't visible in any single quarter — it compounds silently over time.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "Building an SQL definition is a half-day exercise. It requires a sales leader, a marketing leader (or founder), and access to the last 30 closed-won deals. The output is a one-page document that both teams commit to using — and review quarterly. That document, consistently applied, improves forecast accuracy, reduces wasted rep time, and gives marketing a target worth optimizing toward.")}{' '}
              <Link href="/win-loss-analysis-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Win/loss analysis is how you validate your SQL criteria →
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
              {v('sectionComparisonHeading', 'Without SQL Definition vs. With SQL Definition')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComparisonSubheading', "One document. Two completely different ways sales and marketing operate.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900 text-white">
                <div className="border-r border-neutral-700 px-6 py-4 font-bold">Without SQL Definition</div>
                <div className="px-6 py-4 font-bold text-blue-400">With SQL Definition</div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-start gap-3 border-r border-neutral-200 px-6 py-4">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-neutral-700">{row.without}</p>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-neutral-700">{row.with}</p>
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
              {v('sectionSignalsHeading', '6 Signs Your SQL Definition Is Broken or Missing')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionSignalsSubheading', "If any of these are true, your pipeline data is unreliable and your close rate metrics are misleading you.")}
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
              {v('aboutBio2', "In almost every engagement I start, there's no documented SQL definition. Sales and marketing are operating on separate assumptions about what a good lead looks like, and nobody has reconciled them. Creating that shared definition — built from closed-won data, not theory — is one of the first alignment exercises I run. It usually takes half a day and immediately improves both pipeline quality and the sales-marketing relationship.")}
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
              {v('ctaHeadline', "Sales and Marketing Not Aligned on What a Good Lead Looks Like?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk through your current lead qualification process, identify where the definition is breaking down, and help you build an SQL framework from your actual closed-won data.")}
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
