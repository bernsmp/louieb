'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesProcessHurtingB2bGrowth'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function SalesProcessHurtingGrowthPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "Most $1M–$10M ARR founders don't have a broken sales process — they have an oversized one. They copied stages, stage-gates, and tooling from companies twenty times their size, and the weight is now slowing every deal down."),
    v('takeaway2', "An over-engineered process hurts growth in three concrete ways: it lengthens the sales cycle, it kills rep accountability behind a maze of fields, and it lets bad-fit deals hide inside the pipeline for months."),
    v('takeaway3', "Your process should be the smallest set of stages, fields, and rituals that produce a forecast you trust. If a stage doesn't change a decision you make, delete it."),
    v('takeaway4', "The right-sized B2B sales process at $1M–$10M ARR is five stages, ten required fields, one weekly pipeline review, and a written disqualification rule. Nothing more."),
    v('takeaway5', "You don't need a Fortune 500 sales operations team. You need a Fractional Sales Leader who has installed a stage-appropriate process at this revenue band before — and who will rip out the parts that aren't earning their keep."),
  ]

  const symptoms = [
    {
      number: '01',
      title: v('symptom1Title', 'Your Pipeline Has More Stages Than Your Team Has Reps'),
      detail: v('symptom1Detail', "Somewhere along the way you stood up nine, ten, twelve pipeline stages — Lead, MQL, SQL, Discovery, Demo Scheduled, Demo Completed, Proposal Sent, Negotiation, Verbal, Closed-Won. Then you bolted on sub-stages. At a Fortune 500 with two hundred reps and a sales operations department, that level of granularity tells leadership exactly where the funnel is leaking. At $1M–$10M ARR with three reps, it does the opposite. Reps spend an hour a week dragging deals around in HubSpot. Forecast accuracy drops because every stage is a guess. Real movement gets buried under administrative motion."),
      outcome: v('symptom1Outcome', "Cut the pipeline to five stages your buyer actually moves through. Forecast accuracy almost always improves the same week."),
    },
    {
      number: '02',
      title: v('symptom2Title', 'Required Fields Have Replaced Real Qualification'),
      detail: v('symptom2Detail', "Enterprise CRMs run on twenty-plus required fields per opportunity — industry vertical, sub-vertical, deal source, deal sub-source, primary contact role, secondary contact role, multi-thread count, BANT score, MEDDIC score, regional flag. Each field exists for a reporting reason that matters at scale. At your stage, none of those fields are answering the only question that matters: is this deal real or is this rep dressing up hope as progress? You ended up with a CRM that is technically complete and operationally useless. Reps fill in the boxes. The pipeline still lies. The forecast still misses."),
      outcome: v('symptom2Outcome', "Replace twenty enterprise fields with three real qualification questions that have to be answered with evidence — not opinions, not checkboxes."),
    },
    {
      number: '03',
      title: v('symptom3Title', 'Your Sales Cycle Is Longer Than Your Buyer Needs It to Be'),
      detail: v('symptom3Detail', "Founders who copy enterprise process inherit enterprise pacing. Two-week gaps between calls. Mandatory \"alignment\" meetings before a proposal. Multi-stakeholder demos that the buyer didn't ask for. The buyer at $1M–$10M ARR is usually a single decision-maker with a budget, a problem, and a timeline. They don't want a six-touch journey. They want an answer. Your process is now the friction. Deals that should close in three weeks take three months. Some of them die in the gap because a competitor with a leaner motion got there first."),
      outcome: v('symptom3Outcome', "A sales cycle compressed to match how your buyer actually buys — usually 30 to 60 percent shorter — without dropping a single qualification step that matters."),
    },
    {
      number: '04',
      title: v('symptom4Title', 'Reports Have Replaced Conversations'),
      detail: v('symptom4Detail', "The sign you've over-built: leadership now manages sales by dashboard. You scroll through twelve KPI tiles, and you still cannot tell which three deals will close this month. The Fortune 500 model assumes a layer of sales managers translating dashboards into rep coaching. You don't have that layer. You have a founder, a couple of reps, and a Monday-morning report nobody reads. The fix is not more reporting — it is one weekly pipeline review where every open deal gets named out loud, defended with evidence, and either advanced or killed. That single ritual replaces nine dashboards."),
      outcome: v('symptom4Outcome', "A 45-minute weekly meeting that does what the entire BI stack was failing to do — surface the truth about each deal, in front of the people who can act on it."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', '10–12 pipeline stages copied from a HubSpot enterprise template'),
      withIt: v('compare1With', '5 stages that match how your buyer actually moves'),
    },
    {
      without: v('compare2Without', '20+ required fields per opportunity, mostly ignored or fabricated'),
      withIt: v('compare2With', '10 fields max, every one of them tied to a real qualification gate'),
    },
    {
      without: v('compare3Without', 'Multi-stakeholder enterprise demos for single-decision-maker buyers'),
      withIt: v('compare3With', 'Tight discovery + demo flow matched to your actual buyer'),
    },
    {
      without: v('compare4Without', "Forecast built on stage probabilities that don't match reality"),
      withIt: v('compare4With', 'Forecast built on evidence-based exit criteria for each stage'),
    },
    {
      without: v('compare5Without', "MEDDIC, BANT, SPICED bolted on without any of them being enforced"),
      withIt: v('compare5With', 'One disqualification rule, written down, applied every week'),
    },
    {
      without: v('compare6Without', 'Process designed for a 100-rep team running on a 3-rep team'),
      withIt: v('compare6With', 'Process designed for a 3-rep team that can scale to 10 without rebuilding'),
    },
  ]

  const defaultFaqs = [
    {
      q: "How do I know if my sales process is actually hurting growth, not helping it?",
      a: "Three quick tests. First: ask a rep to talk through their top three open deals without looking at the CRM. If they cannot, the process is replacing their thinking, not supporting it. Second: pull your last twenty closed-lost deals and check the CRM stage at the time they died. If most stalled in the same stage, that stage is where your process is fighting you. Third: time the gap between your average first call and signed contract. If it is materially longer than your buyer's stated buying timeline, the process is the bottleneck.",
    },
    {
      q: "What's the right number of pipeline stages for a $1M–$10M ARR B2B company?",
      a: "Five. Lead, Qualified, Discovery Complete, Proposal, Closed. Each stage has written exit criteria based on what the buyer has confirmed — not what the rep has done. More stages do not give you more visibility; they give you more places for deals to hide. The most accurate forecasts I have ever seen at this revenue band came out of a five-stage pipeline reviewed every Monday with the founder in the room.",
    },
    {
      q: "Should I be using MEDDIC, BANT, or another qualification framework?",
      a: "Pick one and enforce it ruthlessly. The mistake is layering all three onto the same opportunity record so reps fill out fifteen qualification fields and qualify nothing. At $1M–$10M ARR, BANT works for transactional deals, MEDDIC works for higher-ACV multi-stakeholder deals, and SPICED works for emerging products. The framework matters less than the discipline of writing down exactly which evidence has to exist before a deal advances — and killing deals that lack it.",
    },
    {
      q: "Won't a leaner sales process limit us when we scale?",
      a: "The opposite. Companies that scale cleanly are the ones that built a tight stage-appropriate process at $1M–$10M ARR and added complexity only when reality demanded it. The companies that struggle to scale are the ones that imported enterprise complexity early and now cannot retrain a growing team off a process the team never trusted in the first place. Right-size now. Add stages, fields, and tooling later, only when the data forces you to.",
    },
    {
      q: "How long does it take to fix an over-engineered sales process?",
      a: "Two to four weeks for the redesign — pipeline stages, required fields, qualification criteria, weekly review structure. Another 30 to 60 days for the team to live in the new system, get coached on it, and break old habits. Most engagements I run see forecast accuracy improve inside the first month and sales-cycle length contract by month three. The bottleneck is almost never the design. It is the founder's willingness to delete what doesn't earn its place.",
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
        headline: 'Is Your Sales Process Actually Hurting Your B2B Growth?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/is-your-sales-process-actually-hurting-your-b2b-growth',
        datePublished: '2026-05-08',
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
              {v('heroTag', 'Sales Process Diagnosis')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Is Your Sales Process Actually')}
              <span className="block text-blue-400">{v('heroAccent', 'Hurting Your B2B Growth?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'Did You Accidentally Build a System Meant for a Fortune 500 Instead of Your Stage of Business?')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders whose CRM has 12 pipeline stages, 20 required fields, and a forecast nobody trusts. Right-size the process to your stage — and watch the cycle compress.")}
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
                href="/fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What a Fractional Sales Leader actually does →
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

      {/* The Four Symptoms */}
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
              {v('sectionSymptomsHeading', 'Four Signs Your Sales Process Is Hurting Growth')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionSymptomsSubheading', "If two or more of these are true, your process is no longer fit for your stage. The fix is rarely more — it is almost always less.")}
            </motion.p>
            <div className="space-y-8">
              {symptoms.map((item, i) => (
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
              {v('seoPara1', "The single most common diagnosis I make at $1M–$10M ARR is the same one most founders never expect: your sales process is not too small. It is too large. It was assembled in good faith — a stage borrowed from an ex-Salesforce friend, a qualification framework lifted from a HubSpot blog, a dashboard built for a board meeting that does not exist yet — and now it is the thing slowing you down. The forecast is unreliable not because reps are dishonest, but because the process is asking the wrong questions.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The fix is to build a stage-appropriate sales process — one that is the smallest possible system that still produces a forecast you can run a business on. If you want the long-form playbook for what that looks like, read")}{' '}
              <Link href="/how-to-build-a-sales-process-after-1m-arr" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How to Build a Sales Process After $1M ARR →
              </Link>
              {v('seoPara2b', ". And if you want to see how the same logic applies to the entire sales infrastructure — pipeline, playbook, qualification, accountability — start with")}{' '}
              <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                How to Build a Sales System Without Hiring a Full-Time VP of Sales →
              </Link>
              {v('seoPara2c', ". The pattern is the same: install only what your stage needs.")}
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
              {v('sectionCompareHeading', 'Fortune 500 Process vs. Stage-Appropriate Process')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'Same buyer. Same product. Two completely different growth curves — driven entirely by the weight of the process around the deal.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Fortune 500 Process Bolted On')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Stage-Appropriate Process')}
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
              {v('aboutBio2', "I right-size sales processes for $1M–$10M ARR B2B founders — strip out the enterprise weight, install the five stages and ten fields and one weekly ritual that actually move deals, and hand back a CRM the team trusts. Most engagements compress the sales cycle by 30 percent or more inside 90 days, without adding a single rep.")}
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
                <Link href="/how-to-build-a-sales-process-after-1m-arr" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales Process After $1M ARR →
                </Link>
              </li>
              <li>
                <Link href="/5-warning-signs-sales-process-breaking" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  5 Warning Signs Your Sales Process Is Breaking →
                </Link>
              </li>
              <li>
                <Link href="/what-is-a-sales-playbook" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is a Sales Playbook — and Does Your Business Have One? →
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
              {v('ctaHeadline', 'Strip the Process. Free the Pipeline.')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I will walk through your current pipeline, fields, and weekly cadence and tell you exactly which pieces are earning their keep — and which ones are slowing you down. No pitch. Just a clear read.")}
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
