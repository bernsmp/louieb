'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { Check, X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoScaleRevenue1mTo10m'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function ScaleRevenue1mTo10mPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const phases = [
    {
      range: v('phase1Range', '$1M–$2M'),
      title: v('phase1Title', 'Validate and Document'),
      body: v('phase1Body', "At this stage, the founder is closing most deals personally. The priority isn't scaling — it's extracting what's working. Record 10 calls. Map your actual ICP from closed-won data (not who you think you sell to). Write down the discovery questions that reliably surface urgency. This documentation becomes the foundation everything else is built on. Skip it and the next phase fails."),
      focus: v('phase1Focus', 'Documentation, ICP validation, first playbook draft'),
    },
    {
      range: v('phase2Range', '$2M–$4M'),
      title: v('phase2Title', 'Hire and Systemize'),
      body: v('phase2Body', "You now have enough proof that the sale works to bring in your first dedicated rep. But hire into a documented process — not chaos. The rep should have a playbook on day one, a ramp timeline, and a founder who stays involved through the first 10 deals. Simultaneously: configure the CRM to match your actual stages, establish a weekly pipeline review, and set the first quota based on real conversion data."),
      focus: v('phase2Focus', 'First hire, CRM setup, weekly cadence, quota framework'),
    },
    {
      range: v('phase3Range', '$4M–$6M'),
      title: v('phase3Title', 'Build the Management Layer'),
      body: v('phase3Body', "You can't personally manage 3–4 reps and also run the company. This is the stage where you bring in sales leadership — either a fractional sales leader or a sales manager. The leadership layer runs pipeline reviews, coaches reps, handles escalations, and owns the forecast. The founder's role shifts from closer to occasional strategic seller and deal sponsor."),
      focus: v('phase3Focus', 'Sales leadership, rep coaching cadence, forecasting system'),
    },
    {
      range: v('phase4Range', '$6M–$10M'),
      title: v('phase4Title', 'Specialize and Scale'),
      body: v('phase4Body', "At this stage, a generalist sales motion starts to break. SDRs and AEs need to operate separately. The ICP needs to be more precisely targeted to protect margins and shorten cycles. Marketing and sales need to be aligned on pipeline coverage targets. Compensation plans need to reward the right behaviors. The systems you built at $2M–$4M need to be stress-tested and upgraded for the next tier."),
      focus: v('phase4Focus', 'Role specialization, SDR/AE split, marketing alignment, comp plan revision'),
    },
  ]

  const mistakes = [
    {
      mistake: v('mistake1', 'Hiring a VP of Sales before the process is documented'),
      why: v('mistake1Why', "A VP scales what exists. If nothing exists, they spend 6+ months recreating it — and usually quit."),
    },
    {
      mistake: v('mistake2', 'Adding headcount before fixing conversion rates'),
      why: v('mistake2Why', 'More reps in a broken process just produce more losses, faster. Fix the funnel before adding people.'),
    },
    {
      mistake: v('mistake3', 'Moving too fast past the $1M–$2M documentation phase'),
      why: v('mistake3Why', 'Everything downstream depends on knowing exactly how you sell. Founders who skip this hire wrong and onboard wrong.'),
    },
    {
      mistake: v('mistake4', 'Treating the ICP as a marketing problem, not a sales problem'),
      why: v('mistake4Why', "The ICP determines your entire go-to-market. Wrong ICP = long cycles, low conversion, and reps selling to people who can't buy."),
    },
  ]

  const readinessSignals = [
    { signal: v('readiness1', 'You know your stage-to-stage conversion rates'), ready: true },
    { signal: v('readiness2', 'Your last 20 deals have a documented close reason'), ready: true },
    { signal: v('readiness3', 'You have a playbook a new rep could use on day one'), ready: true },
    { signal: v('readiness4', "Your CRM data reflects what's actually happening in deals"), ready: true },
    { signal: v('readiness5', 'Revenue is entirely dependent on the founder being in deals'), ready: false },
    { signal: v('readiness6', "You're adding reps without knowing why the current ones are underperforming"), ready: false },
  ]

  const defaultFaqs = [
    {
      q: 'How long does it realistically take to scale from $1M to $10M?',
      a: "For B2B businesses with strong product-market fit: 3–5 years. The companies that do it faster have usually done the infrastructure work early — documented ICP, functioning CRM, trained reps, clear process. The companies that stall in the $2M–$4M range are almost always founder-dependent and lack the systems to delegate sales without losing revenue.",
    },
    {
      q: 'When should I stop closing deals myself as the founder?',
      a: "Not all at once — and probably not fully until $4M–$6M ARR. The goal isn't to remove yourself from sales. It's to ensure your involvement isn't required for deals to close. Stay active on strategic accounts and high-value prospects. Step back from everything else once reps are ramped and the process is documented. A fractional sales leader can manage this transition so revenue doesn't dip.",
    },
    {
      q: "What's the biggest mistake founders make between $1M and $3M ARR?",
      a: "Hiring before documenting. They bring in a rep or a VP of Sales, hand over the pipeline, and watch it stall because no one has ever written down how deals actually get closed. The rep improvises. Conversion rates drop. The hire fails. The mistake wasn't the hire — it was skipping the documentation step that would have made the hire successful.",
    },
    {
      q: 'Do I need a full-time VP of Sales to scale past $5M?',
      a: "Not necessarily — not yet. A fractional sales leader can build the infrastructure and manage the team through the $5M–$7M stage. A full-time VP makes sense when the team has 4+ reps and the processes are stable enough that you're scaling something that works. Hiring a VP before that is paying VP-level compensation to build what a fractional leader would build for a fraction of the cost.",
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
        headline: "How to Scale Revenue from $1M to $10M: The Founder's Roadmap",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-to-scale-revenue-1m-to-10m',
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
              Revenue Growth
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Scale Revenue from $1M to $10M')}
              <span className="block text-blue-400">{v('heroAccent', "The Founder's Roadmap")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders who hit $1M know how to sell. Almost none of them know how to build a sales system that scales without them. Here is the four-phase roadmap that covers the gap.")}
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
                href="/how-to-get-out-of-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to get out of founder-led sales →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Phases */}
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
              {v('sectionPhasesHeading', 'The Four-Phase Revenue Roadmap')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionPhasesSubheading', 'Each phase has a different primary challenge. The mistake is applying phase 3 thinking to a phase 1 problem.')}
            </motion.p>
            <div className="space-y-6">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">{phase.range}</span>
                    <h3 className="text-xl font-bold text-neutral-900">{phase.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{phase.body}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Primary focus: </span>
                    <span className="text-blue-800">{phase.focus}</span>
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
              {v('seoPara1', "Scaling revenue from $1M to $10M is one of the most studied — and most misunderstood — transitions in B2B business. The founders who stall in the $2M–$4M range aren't failing because they have the wrong product or the wrong market. They're failing because they're applying the tactics that got them to $1M to a problem that requires a different approach. What works in founder-led sales — relationships, instinct, personal credibility — doesn't translate into a system that reps can execute consistently.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The companies that break through to $10M have one thing in common: they built the infrastructure before they scaled the headcount. That means documented ICP, a functioning playbook, a CRM that reflects reality, and a management layer that coaches and holds reps accountable.")}{' '}
              <Link href="/why-sales-team-not-growing-revenue" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                A diagnosis of why your sales team isn't growing revenue →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mistakes */}
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
              {v('sectionMistakesHeading', '4 Mistakes That Stall Growth Between $1M and $10M')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionMistakesSubheading', 'These are the patterns that kill momentum — almost always in the $2M–$5M range.')}
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2">
              {mistakes.map((item, i) => (
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

      {/* Readiness Signals */}
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
              {v('sectionReadinessHeading', 'Is Your Sales Org Ready to Scale?')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionReadinessSubheading', 'Check yourself honestly against these signals before adding headcount or infrastructure.')}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {readinessSignals.map((item, i) => (
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
              {v('aboutBio2', "I've worked with dozens of founders at exactly this stage — stuck between $1M and $10M, trying to scale a sales function that was never built to scale. The roadmap on this page reflects the patterns I've seen work repeatedly. The mistakes are the ones I've watched kill momentum in companies that had everything else going for them.")}
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
              {v('ctaHeadline', "Stuck Between $1M and $10M? Let's Figure Out Why.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can identify exactly which phase you're in, what's blocking the next stage, and what it would take to get your sales org to the next level.")}
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
