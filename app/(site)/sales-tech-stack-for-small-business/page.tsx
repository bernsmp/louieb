'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoSalesTechStackSmallBusiness'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const techLayers = [
  {
    layer: 'Layer 1',
    title: 'CRM — The Non-Negotiable Foundation',
    priority: 'Buy First',
    description: 'Every other tool in your stack feeds data into or out of your CRM. If you don\'t have a CRM your reps actually use, nothing else matters. At the $1M–$5M ARR stage, HubSpot Sales Hub (Starter or Professional) is the right call for most companies: it\'s affordable, intuitive enough that reps use it without a mandate, and has the reporting capability to build real forecasts. Salesforce is overkill until you have 5+ reps and dedicated RevOps support.',
    tools: ['HubSpot Sales Hub', 'Salesforce (for teams 5+ reps with RevOps)', 'Pipedrive (simple, founder-friendly)'],
    avoid: 'Google Sheets, spreadsheets, or any system that requires manual entry to update the pipeline',
  },
  {
    layer: 'Layer 2',
    title: 'Outreach & Sequencing — The Engine for New Pipeline',
    priority: 'Buy Second',
    description: 'Once your CRM is running, you need a system to run outbound sequences without manual follow-up. Email sequencing tools let you build multi-touch cadences that run automatically — a rep sets a prospect into a sequence and the tool manages the timing, personalization, and logging. This is what separates a 10-touch outbound process from a rep who sends one email and hopes. At the $1M–$5M stage, Apollo.io or Outreach (lighter tier) are the right starting points.',
    tools: ['Apollo.io (outbound + data, best value for small teams)', 'Outreach.io', 'Salesloft', 'HubSpot Sequences (if already on HubSpot)'],
    avoid: 'Manual email tracking in Gmail/Outlook without a sequence layer — it doesn\'t scale beyond one rep',
  },
  {
    layer: 'Layer 3',
    title: 'Call Recording & Intelligence — The Coaching Infrastructure',
    priority: 'Buy Third',
    description: 'You cannot coach reps on calls you weren\'t on. Call recording tools capture every sales call, transcribe it, flag key moments (competitor mentions, pricing objections, next steps), and make it searchable. This is the infrastructure that turns deal reviews from guesswork into data-driven coaching. Gong is the enterprise standard. Chorus (now ZoomInfo Conversation Intelligence) and Fireflies.ai are strong alternatives at lower price points for smaller teams.',
    tools: ['Gong (enterprise standard, higher price)', 'Chorus / ZoomInfo Conversation Intelligence', 'Fireflies.ai (most affordable, AI-first)'],
    avoid: 'Relying on rep memory or notes to reconstruct what happened on calls — especially during hiring and ramp',
  },
  {
    layer: 'Layer 4',
    title: 'Reporting & Analytics — The System That Tells You the Truth',
    priority: 'Build Last',
    description: 'Your CRM should handle most reporting for a $1M–$10M ARR team. Before investing in a separate BI tool, make sure your CRM data is clean enough to generate trustworthy reports on pipeline by stage, stage conversion rates, average sales cycle, and win/loss ratios. If your CRM data is too messy to trust, adding a BI layer on top of it produces expensive dashboards of bad data. Fix the data quality first. Then, if you need advanced analytics, Tableau or Looker become worth the investment.',
    tools: ['HubSpot Reports (built-in, sufficient for most)', 'Tableau or Looker (for advanced analytics at $5M+)', 'Google Data Studio (free, connects to most systems)'],
    avoid: 'Building custom dashboards before your underlying CRM data is clean and trustworthy',
  },
]

const stackByStage = [
  {
    stage: 'Pre-$3M ARR',
    tools: ['HubSpot Sales Hub Starter ($50/month/user)', 'Apollo.io (outbound + prospecting data)', 'Fireflies.ai (call recording, free tier available)'],
    investment: '~$200–400/month total',
    note: 'Keep it minimal. The process matters more than the tools at this stage.',
  },
  {
    stage: '$3M–$10M ARR',
    tools: ['HubSpot Sales Hub Professional ($100/month/user)', 'Apollo.io or Outreach.io (sequencing)', 'Gong or Chorus (call intelligence)', 'Basic CRM reporting + Google Data Studio'],
    investment: '~$800–2,000/month total',
    note: 'Now the stack can match the team size. Add tools when you have the process to support them.',
  },
]

const techMistakes = [
  { mistake: 'Buying Salesforce before you have a RevOps person to manage it', result: 'Expensive underutilized CRM that reps hate and ignore' },
  { mistake: 'Adding outreach tools before defining your ICP and messaging', result: 'High-volume outbound to the wrong people — burns your domain reputation' },
  { mistake: 'Implementing 6+ tools simultaneously', result: 'No tool gets used properly — stack complexity kills adoption' },
  { mistake: 'Building dashboards before CRM data quality is established', result: 'Beautiful dashboards reporting inaccurate data — dangerous for forecasting' },
]

const faqs = [
  {
    q: 'Do I need all four layers to start?',
    a: 'No. Start with Layer 1 (CRM) only, and make sure reps are actually using it before buying anything else. The most common tech stack mistake is buying tools before the process exists to use them. A CRM with clean data and consistent usage is worth more than four tools that nobody logs into.',
  },
  {
    q: 'HubSpot or Salesforce — how do I choose?',
    a: 'For teams under 5 reps at $1M–$7M ARR: HubSpot. It\'s faster to implement, cheaper to run, intuitive enough that reps use it without enforcement, and has the reporting capability you need. Salesforce becomes the right answer when you have dedicated RevOps support, complex custom objects or integrations, and a team of 5+ reps. Moving from HubSpot to Salesforce later is straightforward. Starting on Salesforce without RevOps support is a common and expensive mistake.',
  },
  {
    q: 'What if my reps refuse to use the CRM?',
    a: 'CRM adoption is a management problem, not a technology problem. If reps aren\'t logging activities, the two root causes are usually: (1) the CRM is too complex or time-consuming, or (2) there\'s no accountability for data quality. Simplify the required fields to the minimum necessary for forecasting, and tie pipeline reviews to CRM accuracy — deals that aren\'t in the CRM don\'t get reviewed, which means they don\'t get support.',
  },
  {
    q: 'When should a fractional sales leader assess my tech stack?',
    a: 'Ideally in the first 30 days of any engagement. Tech stack audits reveal a lot about how a sales team actually operates vs. how it\'s supposed to operate. Unused tools tell you what processes don\'t exist. CRM data quality tells you whether the pipeline is reliable. What\'s missing tells you where the team is doing things manually that should be automated.',
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
      headline: 'What Is a Sales Tech Stack? The Minimum Setup for a $1M–$10M Business',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/sales-tech-stack-for-small-business',
    },
  ],
}

export default function SalesTechStackPage() {
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
              Sales Technology
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'What Is a Sales Tech Stack?')}
              <span className="block text-blue-400">{v('heroAccent', 'The Minimum Setup for a $1M–$10M Business')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Most founders either overbuild their tech stack before they have the process to use it, or underbuild until everything breaks. Here's the four-layer framework and the exact tools that fit a $1M–$10M ARR sales team.")}
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
                href="/how-to-set-up-hubspot-for-small-sales-team"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to set up HubSpot for a small team →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 4 Layers */}
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
              The 4-Layer Sales Tech Stack
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Buy in order. Each layer depends on the one before it being in place and working.
            </motion.p>
            <div className="space-y-8">
              {techLayers.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex flex-wrap items-start gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">{item.layer}</span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-green-700">{item.priority}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">{item.title}</h3>
                  <p className="mb-4 text-neutral-700">{item.description}</p>
                  <div className="mb-3">
                    <p className="mb-2 text-sm font-bold text-neutral-800">Recommended Tools:</p>
                    <ul className="space-y-1">
                      {item.tools.map((tool, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className="mt-1 shrink-0 text-blue-400">→</span>
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3">
                    <span className="font-bold text-red-800">Avoid: </span>
                    <span className="text-red-800 text-sm">{item.avoid}</span>
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
              The sales tech stack question trips up almost every founder at the $1M–$5M ARR stage. The pressure to "get organized" comes at the same time as the pressure to grow, and the result is often 6–8 disconnected tools that nobody uses consistently. The better question isn't "what tools do I need?" — it's "what process am I trying to support, and what's the minimum tool investment to support it?" Tools don't fix processes. They either amplify a working process or add expensive complexity to a broken one.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              The order of operations matters more than the specific tools you choose. A CRM with clean data that reps use consistently is more valuable than the most sophisticated sales engagement platform implemented without process discipline. Get Layer 1 working before Layer 2. Layer 2 before Layer 3. The founders who do it in order spend less money and get more out of every tool they buy. If you want to know what this looks like inside a real small team setup,{' '}
              <Link href="/how-to-set-up-hubspot-for-small-sales-team" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                read the HubSpot setup guide for small sales teams →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stack by Stage */}
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
              Recommended Stack by Growth Stage
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              Keep it simple early. Add infrastructure as the process matures.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {stackByStage.map((stage, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-500">{stage.stage}</div>
                  <div className="mb-4 text-lg font-bold text-neutral-900">{stage.investment}</div>
                  <ul className="mb-4 space-y-2">
                    {stage.tools.map((tool, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="mt-1 shrink-0 text-blue-400">→</span>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs text-blue-800">
                    {stage.note}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes */}
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
              4 Tech Stack Mistakes That Waste Money
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              These are the patterns I find in almost every first-year tech stack audit.
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2">
              {techMistakes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-6"
                >
                  <h3 className="mb-2 font-bold text-red-800">✕ {item.mistake}</h3>
                  <p className="text-sm text-red-700">{item.result}</p>
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
              {v('aboutBio2', "Tech stack audits are part of every engagement I run. In the first 30 days, I look at what\'s in place, what\'s being used, and what the data quality looks like. The most common finding: a CRM that doesn\'t reflect reality because reps aren\'t entering data, and a stack of tools that were bought without a process to use them. The fix is always process-first, technology second.")}
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
              {v('ctaHeadline', "Want a Tech Stack Audit for Your Team?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can assess your current tools, identify what\'s underused, what\'s missing, and what the right stack looks like at your current ARR and team size.")}
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
