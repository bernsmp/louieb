"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, TrendingUp, AlertCircle } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stageProblems = [
  {
    title: "Founder still running sales",
    detail:
      "You closed the first $1M yourself. That worked. But you can't close the next $5M the same way — you're also running the company. Founder-led sales doesn't scale past a certain point, and you're probably at that point right now.",
  },
  {
    title: "Reps hired but results are inconsistent",
    detail:
      "You've brought on one or two salespeople. Some deals close, some don't, and you can't tell why. There's no playbook, no defined process, no accountability framework. Each rep is running their own version of your sales motion.",
  },
  {
    title: "No pipeline visibility",
    detail:
      "Your CRM is a wishful thinking list. Pipeline stages say 'Interested' and 'Proposal Sent' but don't reflect what the prospect has actually done. You can't forecast, you can't coach, and you can't tell what's real.",
  },
  {
    title: "No coaching structure",
    detail:
      "Reps are on their own after onboarding. There are no regular deal reviews, no call coaching, no weekly 1:1s with a defined agenda. Without a coaching structure, performance plateaus — and good reps leave.",
  },
  {
    title: "Pricing and positioning drift",
    detail:
      "Different reps position the product differently. Discounts happen without a framework. Deals get lost on pricing because there's no structured way to have the pricing conversation. Every deal becomes a negotiation.",
  },
  {
    title: "Sales and marketing not aligned",
    detail:
      "Marketing is generating leads that sales says aren't qualified. Sales is saying buyers don't understand the product. The ICP definition is fuzzy. Without alignment, both teams waste effort chasing the wrong opportunities.",
  },
];

const whatIInstall = [
  {
    title: "A complete Sales Playbook",
    detail: "ICP, discovery questions, demo flow, objection handling, pricing conversation, follow-up cadence. One source of truth your whole team uses.",
  },
  {
    title: "Action-based pipeline stages",
    detail: "Replace opinion-based stages with stages that reflect what the prospect has done. Real pipeline visibility means real forecasting.",
  },
  {
    title: "Weekly coaching cadence",
    detail: "Deal reviews, call coaching, 1:1s with defined agendas. Reps improve when they have a structured feedback loop. Without it, they plateau.",
  },
  {
    title: "Position Contracts for every rep",
    detail: "Written accountability for activities, KPIs, and what success looks like at 30, 60, and 90 days. No ambiguity. Clear expectations.",
  },
  {
    title: "Hiring profile and process",
    detail: "When you're ready to add headcount, you'll know exactly who to look for, how to interview, and what red flags to avoid.",
  },
];

const faqs = [
  {
    q: "What does a fractional sales leader actually do at the $1M–$10M stage?",
    a: "I function as your VP of Sales without the full-time cost. That means installing a Sales Playbook, building your pipeline process, coaching your reps weekly, fixing your ICP and positioning, and building the accountability structures that make a sales team consistent. I'm embedded in your business — not a consultant who hands you a slide deck.",
  },
  {
    q: "Do I need a fractional sales leader or should I hire a full-time VP of Sales?",
    a: "At $1M–$5M ARR, you almost certainly don't have enough revenue to justify a $200k–$300k VP of Sales. And more importantly, you don't yet have the systems a VP needs to manage. A fractional engagement lets you install those systems first — so when you do hire a full-time leader, they walk into a working machine, not a blank slate.",
  },
  {
    q: "How long does it typically take to see results?",
    a: "Most founders see meaningful improvement in pipeline clarity and rep behavior within 60–90 days. The Sales Playbook is usually complete within the first 30 days. Revenue results depend on your sales cycle length — a 90-day cycle means revenue impact shows up around month 4 or 5. What you'll notice first: your reps stop winging it, your pipeline becomes real, and deals stop dying for reasons you can't diagnose.",
  },
  {
    q: "What's the investment for fractional sales leadership at this stage?",
    a: "Retainers typically run $6,000–$14,000/month depending on scope and time commitment. That's a fraction of a full-time VP of Sales — and unlike a hire, there's no 6-month ramp period before you see any output. Most engagements pay for themselves within the first quarter.",
  },
  {
    q: "How is this different from a sales consultant?",
    a: "Consultants deliver recommendations. I deliver outcomes. I'm in your weekly team meetings, coaching your reps on real deals, iterating the playbook based on what I hear on actual calls. The work is done with you, not handed to you. That's the difference between advice and execution.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Service",
      name: "Fractional Sales Leadership for $1M–$10M Companies",
      provider: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      description:
        "Fractional Sales Leadership for companies between $1M and $10M in revenue. Sales Playbook, pipeline process, rep coaching, and accountability structures — without the full-time VP of Sales cost.",
      url: "https://louiebernstein.com/sales-leadership-for-1m-10m-companies",
      offers: {
        "@type": "Offer",
        priceRange: "$6,000–$14,000/month",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function SalesLeadership1m10mPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&fit=crop&auto=format" imageAlt="Sales leadership team driving growth for a scaling company" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#0966c2]"
            >
              For Founders at $1M–$10M ARR
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Sales Leadership Built for
              <span className="block text-[#0966c2]">$1M–$10M Companies</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              The $1M–$10M stage is where most sales systems break. You&apos;ve outgrown
              founder-led sales but you&apos;re not big enough for a $250k VP. I install the
              systems, coach the team, and build the infrastructure that gets you to $10M and
              beyond.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#0966c2] px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0855a3]"
              >
                Book a Working Session
              </Link>
              <Link
                href="/fractional-cro-for-1m-10m-founders"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Fractional CRO for this stage →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Stage Problems */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What&apos;s Breaking at This Stage
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 max-w-2xl text-lg text-neutral-600">
              The $1M–$10M stage has a specific set of sales problems. I&apos;ve seen them in
              dozens of companies. Here&apos;s what&apos;s typically going wrong.
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stageProblems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
                    <h3 className="font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-600">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Install */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What I Build in Your Business
            </motion.h2>
            <div className="space-y-4">
              {whatIInstall.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-[#0966c2]" />
                    <div>
                      <h3 className="mb-2 font-bold text-neutral-900">{item.title}</h3>
                      <p className="text-neutral-600">{item.detail}</p>
                    </div>
                  </div>
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
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-6 font-serif text-2xl font-bold text-neutral-900"
            >
              Why I Understand This Stage
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-4 text-neutral-700">
              <p>
                I&apos;m Louie Bernstein — I have 50 years in business experience, including 22 as
                a bootstrapped founder. My Fractional Sales Leadership business has been helping
                founders since 2017.
              </p>
              <p>
                I&apos;ve been in the $1M–$10M trench myself. I know what it feels like to have
                hired the wrong rep, to have watched deals die for reasons you can&apos;t diagnose,
                and to have a pipeline full of numbers that don&apos;t mean anything. I built my
                way out of those problems — and now I help founders do the same thing, faster.
              </p>
              <p>
                Most of my competitors have advice. I have scar tissue.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
                <Check className="h-4 w-4 text-[#0966c2]" />
                50 years in business
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
                <Check className="h-4 w-4 text-[#0966c2]" />
                22 years as a founder
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
                <Check className="h-4 w-4 text-[#0966c2]" />
                Helping founders since 2017
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16 md:py-24">
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
              {faqs.map((faq, i) => (
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
            <motion.p variants={itemVariants} className="mt-8 text-center">
              <Link
                href="/fractional-cro-for-1m-10m-founders"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Learn more about fractional CRO for this stage →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-10 text-white md:py-14">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#0966c2]/10 blur-3xl" />
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
              Ready to Build a Sales System That Scales?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at where you are now, what
              the gaps are, and what a fractional sales leadership engagement would actually do in
              your business.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                Book a Working Session
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
