"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, X, DollarSign, Clock, TrendingDown, AlertCircle } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fullTimeCosts = [
  { label: "Base salary", value: "$200,000–$300,000" },
  { label: "On-target earnings (OTE)", value: "$400,000–$500,000" },
  { label: "Benefits (health, 401k, etc.)", value: "$30,000–$50,000" },
  { label: "Equity (typical grant)", value: "$50,000–$100,000/yr value" },
  { label: "Recruiting & search fees", value: "$30,000–$60,000" },
  { label: "Onboarding ramp time", value: "4–6 months" },
  { label: "Wrong hire cost", value: "$500,000–$1,000,000" },
];

const fractionalCosts = [
  { label: "Monthly retainer", value: "$6,000–$14,000/month" },
  { label: "Annual total", value: "$72,000–$168,000/year" },
  { label: "Equity required", value: "None" },
  { label: "Benefits required", value: "None" },
  { label: "Recruiting fees", value: "None" },
  { label: "Time to impact", value: "Week one" },
  { label: "Commitment", value: "Month-to-month" },
];

const whatIsIncluded = [
  "Sales Audit — deep discovery of your current sales motion",
  "Sales Playbook — documenting your process so any rep can follow it",
  "ICP Definition — clarity on exactly who you're selling to and why",
  "Pipeline Architecture — action-based stages that actually predict revenue",
  "Team Management — 1:1s, pipeline reviews, accountability structures",
  "Hiring Scorecards — so you hire salespeople who will actually succeed",
  "Daily Training System — 15–33 minutes/day that keeps reps sharp",
  "KPIs & Position Contracts — so everyone knows what winning looks like",
];

const faqs = [
  {
    q: "What drives the price toward $6k vs. $12k per month?",
    a: "Scope and time. A $6k/month engagement typically involves 8–12 hours/week focused on a specific deliverable like building a Sales Playbook or auditing the pipeline. A $14k/month engagement involves more hours, active team management, hiring support, and full strategic oversight. Most engagements start at the lower end and scale as the work deepens.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Most engagements run 6–12 months because that's what it takes to build a real system, not just hand you a document. That said, I don't lock clients into long-term contracts. We work month-to-month with a mutual understanding of the timeline. If something isn't working, we talk about it and adjust.",
  },
  {
    q: "How does this compare to hiring a full-time VP of Sales?",
    a: "A full-time VP of Sales costs $200k–$300k base, plus equity, benefits, and recruiting fees — $400k–$500k all-in per year. A Fractional CRO costs $72k–$168k per year with no equity, no benefits, and no recruiting fees. That's 60–80% less cost. And you get impact week one instead of after a 6-month ramp.",
  },
  {
    q: "What if I just need help getting started — not a full engagement?",
    a: "Book a Working Session. We'll spend 30 minutes looking at your specific situation and figure out what the right first step is — whether that's a Sales Audit, a Sales Playbook build, or something else entirely. No pitch, no pressure. Just a real conversation.",
  },
  {
    q: "What's the ROI? How do I know this is worth it?",
    a: "The ROI comes from two places: revenue you capture faster, and time you get back. If a Fractional CRO helps one additional mid-market deal close per month, it pays for itself many times over. If it gets you out of the daily sales grind so you can focus on strategy, product, or fundraising — the value compounds even more.",
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
      name: "Fractional CRO",
      provider: {
        "@type": "Person",
        name: "Louie Bernstein",
        url: "https://louiebernstein.com",
        jobTitle: "Fractional Sales Leader",
      },
      description: "Embedded fractional sales leadership for $1M–$10M founders.",
      areaServed: "United States",
      priceRange: "$6,000–$14,000/month",
      offers: {
        "@type": "Offer",
        price: "6000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "6000",
          priceCurrency: "USD",
          referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitText: "MONTH" },
        },
      },
    },
  ],
};

export default function FractionalCROPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&fit=crop&auto=format" imageAlt="Business professional reviewing pricing and financial planning documents" className="bg-slate-950">
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
              Pricing
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Fractional CRO Pricing:
              <span className="block text-[#0966c2]">Real Numbers. No Surprises.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              A full-time VP of Sales costs $400,000–$500,000 all-in per year. A Fractional CRO
              costs $6,000–$14,000 per month. Same strategic leadership. 60–80% less cost. Here
              are the real numbers.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#0966c2] px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0855a3]"
              >
                Book a Working Session
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Quick Numbers */}
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              The Numbers Side by Side
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full-time */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border-2 border-red-200 bg-red-50 p-8"
              >
                <div className="mb-2 flex items-center gap-2">
                  <X className="h-5 w-5 text-red-500" />
                  <h3 className="text-xl font-bold text-red-700">Full-Time VP of Sales</h3>
                </div>
                <p className="mb-6 text-sm text-red-600">
                  All-in annual cost: <strong>$400,000–$500,000+</strong>
                </p>
                <div className="space-y-3">
                  {fullTimeCosts.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-red-200 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-neutral-700">{item.label}</span>
                      <span className="text-sm font-bold text-red-700">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fractional */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border-2 border-green-200 bg-green-50 p-8"
              >
                <div className="mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <h3 className="text-xl font-bold text-green-700">Fractional CRO</h3>
                </div>
                <p className="mb-6 text-sm text-green-600">
                  All-in annual cost: <strong>$72,000–$168,000</strong>
                </p>
                <div className="space-y-3">
                  {fractionalCosts.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-green-200 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-neutral-700">{item.label}</span>
                      <span className="text-sm font-bold text-green-700">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-xl bg-[#0966c2]/10 p-6 text-center"
            >
              <p className="text-lg font-bold text-[#0966c2]">
                Fractional CRO costs 60–80% less than a full-time VP of Sales.
              </p>
              <p className="mt-1 text-neutral-600">
                Same strategic leadership. Zero equity dilution. No 6-month ramp. Impact starting
                week one.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
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
              className="mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What&apos;s Included
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              Every engagement includes the core deliverables your sales system needs to stand on
              its own:
            </motion.p>
            <div className="grid gap-3 sm:grid-cols-2">
              {whatIsIncluded.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0966c2]" />
                  <span className="text-neutral-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost of Inaction */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-6 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              The Real Cost Is Doing Nothing
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Clock,
                  title: "Your Time",
                  desc: "Every hour you spend closing deals is an hour you're not spending on product, fundraising, or strategy. At $500/hr of opportunity cost, 20 hours/week = $520k/year.",
                },
                {
                  icon: TrendingDown,
                  title: "Lost Pipeline",
                  desc: "Deals that fall through the cracks because no one owns follow-up. Deals that go cold because no one is running pipeline reviews. Every stalled deal is real revenue not recognized.",
                },
                {
                  icon: AlertCircle,
                  title: "Bad Hires",
                  desc: "Hiring salespeople without a Sales Playbook or system is expensive. The average bad sales hire costs $200k–$400k all-in when you factor in salary, lost pipeline, and replacement costs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0966c2]/10">
                    <item.icon className="h-5 w-5 text-[#0966c2]" />
                  </div>
                  <h3 className="mb-2 font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
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
              Pricing Questions
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
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-10 text-white md:py-14">
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
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0966c2]/20 px-4 py-2"
            >
              <DollarSign className="h-4 w-4 text-[#0966c2]" />
              <span className="text-sm font-semibold text-[#0966c2]">Starting at $6,000/month</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl"
            >
              Let&apos;s Talk About Your Specific Situation
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              30 minutes. We&apos;ll look at your sales situation and figure out what the right
              scope and investment looks like for your business.
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
