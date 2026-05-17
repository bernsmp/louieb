'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-05'
const CMS_SECTION = 'seoOneSizeFitsAllPlaybook'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function OneSizeFitsAllPlaybookPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "No — a good Fractional Sales Leader does the opposite. They extract your sales DNA into a written playbook, then enforce it. The playbook is built around your business, not around a template."),
    v('takeaway2', "Generic frameworks fail because every $1M–$10M ARR business sells a different product to a different buyer in a different way. The job of the FSL is to codify what makes you different, not to erase it."),
    v('takeaway3', "The first 30 days of a real engagement is observation: shadowing your calls, reading your closed deals, interviewing your customers. Nothing gets installed until the founder motion is understood."),
    v('takeaway4', "Customization happens in the language, the qualification criteria, the objections, the ICP definition, the pricing posture, and the closing cadence. Those are the parts of selling that are uniquely yours."),
    v('takeaway5', "If a fractional leader walks in week one with a generic template, fire them. The right person walks in with questions, not answers — and walks out with a playbook that sounds like you wrote it."),
  ]

  const components = [
    {
      number: '01',
      title: v('comp1Title', 'They Observe Before They Install'),
      detail: v('comp1Detail', "The first two to three weeks of a real Fractional Sales Leader engagement is pure observation. They listen to recorded calls, read closed-won and closed-lost deal notes, sit through your live demos, and interview your best customers. They are not pitching frameworks. They are decoding the founder motion — the language you use, the questions you ask, the objections you defuse without thinking, the moments where the buyer leans in. The job is to find your sales fingerprint, not to overwrite it."),
      outcome: v('comp1Outcome', "A documented map of how your business actually wins deals — before a single change is made to the process."),
    },
    {
      number: '02',
      title: v('comp2Title', 'They Codify Your DNA, Not a Template'),
      detail: v('comp2Detail', "Once the founder motion is understood, it gets written down. The Ideal Customer Profile uses your real disqualifiers, not a generic checklist. The discovery questions are the ones you actually ask. The objection responses are the ones that have worked for you. The pricing posture matches your positioning. The proposal structure mirrors what your buyers expect. The result is a 20-to-40-page playbook that any rep can run from — and that reads like you sat down and wrote it yourself, because it captures the way you sell."),
      outcome: v('comp2Outcome', "A playbook your reps can execute on day one — that preserves your voice, your standards, and the specific way your customers like to buy."),
    },
    {
      number: '03',
      title: v('comp3Title', 'They Customize the Operating Cadence Around You'),
      detail: v('comp3Detail', "Every business has its own rhythm. Some sell on a 30-day cycle, others on six months. Some run weekly forecasts, others bi-weekly. Some founders want to stay in the closing conversations, others want out completely. A good Fractional Sales Leader builds the pipeline review, the weekly meeting, the deal review, and the accountability document around your cadence and your involvement level — not a generic operating system imported from a previous engagement."),
      outcome: v('comp3Outcome', "A management rhythm that fits how you actually run the business — with the founder in the loop where it adds value and out of the loop where it does not."),
    },
    {
      number: '04',
      title: v('comp4Title', 'They Adapt to Your Buyer, Not the Other Way Around'),
      detail: v('comp4Detail', "Your buyer is not the same as the next company's buyer. A founder selling enterprise software to CFOs runs nothing like a founder selling field services to plant managers. The sales motion has to match the buyer — the cadence of follow-up, the format of the proposal, the role of price, the use of demos, the role of references, the legal cycle, the procurement steps. A real FSL builds around the actual buyer your business sells to. A weak one tries to retrofit your buyer into a generic B2B SaaS framework that was never going to fit."),
      outcome: v('comp4Outcome', "A sales process tuned to your buyer's behavior — so deals move forward at the cadence your customers actually buy on."),
    },
    {
      number: '05',
      title: v('comp5Title', 'They Make Customization Reviewable and Reversible'),
      detail: v('comp5Detail', "Every customized element of the playbook is documented and open to revision. The qualification criteria can be tightened. The objection responses get updated as the market shifts. The ICP gets refined every 90 days based on win/loss data. Customization is not a one-shot configuration — it is an ongoing relationship between what the data shows and what the founder knows. A real FSL builds the feedback loop into the system from day one."),
      outcome: v('comp5Outcome', "A living playbook that gets sharper every quarter — and a founder who keeps their hand on the strategic decisions without being stuck in every deal."),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Imports a template and renames the fields'),
      withIt: v('compare1With', 'Observes for 2–3 weeks before installing anything'),
    },
    {
      without: v('compare2Without', "Uses generic B2B SaaS qualification criteria"),
      withIt: v('compare2With', "Builds qualification criteria from your closed-won deals"),
    },
    {
      without: v('compare3Without', "Forces your buyer into a pre-built pipeline"),
      withIt: v('compare3With', "Builds pipeline stages around your buyer's actual journey"),
    },
    {
      without: v('compare4Without', "Erases the founder's voice in the messaging"),
      withIt: v('compare4With', "Codifies the founder's voice into a repeatable script"),
    },
    {
      without: v('compare5Without', "One operating cadence applied to every client"),
      withIt: v('compare5With', "Cadence customized to your team size and rhythm"),
    },
    {
      without: v('compare6Without', "Playbook is locked — take it or leave it"),
      withIt: v('compare6With', "Playbook is reviewed and refined every 90 days"),
    },
  ]

  const customizationLayers = [
    {
      number: '01',
      title: v('layer1Title', 'Your Language and Positioning'),
      detail: v('layer1Detail', "The exact words your buyers respond to are not transferable from another business. The phrases that surface urgency in your market, the proof points that earn trust, the analogies that make the product click — these get pulled directly from your closed-won calls and written into the playbook verbatim. Reps do not invent new positioning. They run the positioning that already works."),
    },
    {
      number: '02',
      title: v('layer2Title', 'Your ICP and Disqualifiers'),
      detail: v('layer2Detail', "Generic ICPs say 'mid-market B2B' and move on. A real ICP, customized to your business, names the industry, the revenue band, the buying role, the trigger event, the tech stack indicator, and the three things that disqualify a deal in the first call. Those disqualifiers are pulled from the deals you have lost, not from a frameworks deck. They become required fields in your CRM so reps cannot ignore them."),
    },
    {
      number: '03',
      title: v('layer3Title', 'Your Operating Rhythm and Founder Involvement'),
      detail: v('layer3Detail', "How often do you want to review the pipeline? What deal size triggers your involvement? When does a rep escalate, and when do they own the call? A customized engagement defines all of this in writing — based on your preferences and the realities of your team — instead of importing a one-size cadence from someone else's playbook."),
    },
  ]

  const defaultFaqs = [
    {
      q: "Won't a fractional leader try to make my business look like every other client they've worked with?",
      a: "A weak one will. A strong one does the opposite — they spend the first two to three weeks observing how you actually sell, then write the playbook around your sales motion. The reason fractional leaders exist is because $1M–$10M ARR businesses are too unique for off-the-shelf systems. The right person sees customization as the whole job, not a step on the way to a template.",
    },
    {
      q: "How do I tell in the first conversation whether a fractional leader will customize or just import a template?",
      a: "Ask them to walk you through the first 30 days of an engagement. If they describe observation work — shadowing calls, reading closed deals, interviewing customers — you are talking to someone who customizes. If they describe installing frameworks, configuring a CRM template, or rolling out their methodology, you are talking to someone who templates. Then ask: 'What was the most surprising thing about the last engagement you ran?' A customizer can answer that question in detail. A templater cannot.",
    },
    {
      q: "What about my brand voice, my customer relationships, my reputation — does any of that change?",
      a: "Not the parts that work. The whole point of codifying your sales motion is to preserve it as the team grows. Your voice, your customer relationships, and your reputation are assets — they get written into the playbook as the standards every rep is held to. What changes is the dependency on you personally to enforce them. The standards become the system. You stop being the only person who can hold the line.",
    },
    {
      q: "How long does the customization process take?",
      a: "Roughly 30 days of observation and extraction, followed by 30 to 60 days of installation. By day 60 you should have a playbook in writing, a CRM configured to match, qualification criteria enforced in the pipeline, and an accountability document in place. The playbook then gets refined every 90 days based on what the win/loss data shows. Customization is not a one-time event — it is an ongoing relationship between your business and the system.",
    },
    {
      q: "What happens if the customization is wrong — if the playbook does not match how my buyer actually buys?",
      a: "The playbook is reviewed and revised every 90 days. Any field, any stage, any qualification criterion, any objection response is open for change based on what the data shows. The point of a real engagement is to build a living system, not a frozen artifact. If something is not working, it gets fixed. The founder always has veto power. The playbook is yours, not the fractional leader's.",
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
        headline: "Will a Fractional Sales Leader Force a 'One-Size-Fits-All' Playbook on My Unique Business?",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/will-fractional-sales-leader-force-one-size-fits-all-playbook',
        datePublished: '2026-05-17',
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
      <HeroBackground accentColor="#6d28d9" fillColor="rgba(109,40,217,0.3)" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400"
            >
              {v('heroTag', 'Customization, Not Cookie-Cutter')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'Will a Fractional Sales Leader Force a ‘One-Size-Fits-All’ Playbook')}
              <span className="block text-violet-400">{v('heroAccent', 'on My Unique Business?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-violet-200 md:text-xl"
            >
              {v('heroH2', "I don't want to lose control of our unique identity and sales DNA")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders worried that an outsider will erase what makes their business different. Short answer: no — a real Fractional Sales Leader codifies your DNA, they don't overwrite it.")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-violet-700 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-violet-800"
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
            className="rounded-xl border-l-4 border-violet-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-sm font-bold uppercase tracking-widest text-violet-800"
            >
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              {takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-neutral-700">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-700" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* How Customization Actually Works — 5 components */}
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
              {v('sectionComponentsHeading', 'How a Real Fractional Leader Customizes — Step by Step')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionComponentsSubheading', 'Customization is the work. The methodology is observation, codification, and refinement — never importation.')}
            </motion.p>
            <div className="space-y-8">
              {components.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-violet-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-violet-100 bg-violet-50 px-4 py-3">
                    <span className="font-bold text-violet-800">What You Get: </span>
                    <span className="text-violet-800">{item.outcome}</span>
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
              {v('seoPara1', "The fear of losing your sales DNA is the single most common objection founders raise when considering a fractional leader — and it is also the most misplaced. The whole reason the fractional model exists is because $1M–$10M ARR businesses are not interchangeable. A template that works at a 200-person SaaS company will collapse inside a 12-person services business. A real Fractional Sales Leader treats your existing sales motion as the source material — not as a problem to be replaced. They are not bringing a playbook with them. They are building yours.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "If you want to understand the actual artifact that gets built — what a real playbook contains and why it is the foundation of a customized system — read")}{' '}
              <Link href="/what-is-a-sales-playbook" className="font-semibold text-violet-700 underline underline-offset-2 hover:text-violet-900">
                What Is a Sales Playbook →
              </Link>
              {v('seoPara2b', ". And if you want to see exactly how a Fractional Sales Leader spends their time inside an engagement — the observation, the extraction, the iteration — start with")}{' '}
              <Link href="/what-does-fractional-sales-leader-do" className="font-semibold text-violet-700 underline underline-offset-2 hover:text-violet-900">
                What Does a Fractional Sales Leader Do Week to Week →
              </Link>
              {v('seoPara2c', ". The system gets built around you. That is the entire point.")}
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
              {v('sectionCompareHeading', 'Template-First vs. Founder-First')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', 'Two very different approaches walk through your door with the same job title. The difference shows up in the first week.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Template-First (Avoid)')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-violet-400">
                  {v('compareColRight', 'Founder-First (Hire This)')}
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

      {/* Customization Layers — 3 phases */}
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
              {v('sectionLayersHeading', 'The Three Layers That Get Customized to You')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionLayersSubheading', 'These are the parts of selling that are uniquely yours — and they are the parts a real Fractional Sales Leader builds around, not over.')}
            </motion.p>
            <div className="space-y-8">
              {customizationLayers.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-violet-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="text-neutral-700">{item.detail}</p>
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
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years of business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I do not bring a template. I bring a method — observation, extraction, codification, iteration — and the playbook that comes out of an engagement is unmistakably yours. Most engagements install a customized sales system in 60 to 90 days that preserves the founder's voice and removes the founder's bottleneck at the same time.")}
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

      {/* Related Reading */}
      <section className="bg-neutral-50 py-12 md:py-14">
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
                <Link href="/what-is-a-sales-playbook" className="font-semibold text-violet-700 underline underline-offset-2 hover:text-violet-900">
                  What Is a Sales Playbook — and Does Your Business Have One? →
                </Link>
              </li>
              <li>
                <Link href="/what-does-fractional-sales-leader-do" className="font-semibold text-violet-700 underline underline-offset-2 hover:text-violet-900">
                  What Does a Fractional Sales Leader Do Week to Week? →
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-sales-system-without-full-time-vp" className="font-semibold text-violet-700 underline underline-offset-2 hover:text-violet-900">
                  How to Build a Sales System Without Hiring a Full-Time VP →
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
              {v('ctaHeadline', 'Your Business Is Not a Template. The Playbook Should Not Be Either.')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can walk you through how the customization process actually works — and show you what a playbook built around your business looks like vs. a template imported from somebody else's.")}
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
