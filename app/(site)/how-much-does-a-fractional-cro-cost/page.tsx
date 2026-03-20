"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, DollarSign } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const pricingTiers = [
  {
    label: "Advisory / Light Engagement",
    range: "$6,000–$8,000/month",
    hours: "~8–12 hrs/week",
    includes: [
      "Weekly strategy sessions",
      "Pipeline review and coaching",
      "Sales Playbook development",
      "ICP definition and refinement",
      "Available for deal reviews and escalations",
    ],
    bestFor: "Sub-$3M ARR founders who need senior guidance and strategic direction",
  },
  {
    label: "Full Fractional Engagement",
    range: "$8,000–$14,000/month",
    hours: "~16–20 hrs/week",
    includes: [
      "2–3 days/week embedded in your business",
      "Sales team hiring, onboarding, coaching",
      "Full pipeline management and forecasting",
      "Sales Playbook built and trained",
      "Board prep and investor reporting support",
      "Weekly 1:1s with every sales rep",
    ],
    bestFor: "$3M–$10M ARR companies scaling a sales team",
  },
];

const whatsIncluded = [
  {
    title: "Sales Playbook",
    detail:
      "A documented, working sales playbook — ICP, discovery questions, demo structure, objection handling, pricing conversation, follow-up cadence. Not a template. Built specifically for your company and your buyers.",
  },
  {
    title: "Pipeline Design",
    detail:
      "Action-based pipeline stages that reflect real buyer behavior, not wishful thinking. Replaces 'Interested' and 'Proposal Sent' with stages based on what the prospect has done and agreed to.",
  },
  {
    title: "Rep Coaching",
    detail:
      "Weekly 1:1s with your sales reps, field coaching on live deals, demo reviews, call recordings. Your reps get better every week. Not just high-level direction — actual skill development.",
  },
  {
    title: "Forecast Cadence",
    detail:
      "A weekly forecast process that gives you real visibility into what's likely to close, what's at risk, and what needs action. Not a number from the CRM. A defended forecast you can trust.",
  },
  {
    title: "Hiring Support",
    detail:
      "If you need to hire reps, SDRs, or a VP of Sales, I help with job spec, sourcing, interview questions, candidate evaluation, and offer structuring. I've hired a lot of salespeople. I know what to look for.",
  },
];

const faqs = [
  {
    q: "Is this billed hourly or as a monthly retainer?",
    a: "Monthly retainer. Hourly billing doesn't work for strategic sales leadership because the most valuable work — being present in your business, building relationships with your team, making judgment calls — doesn't fit a time-tracking model. A retainer gives you access and alignment. You always know what you're paying.",
  },
  {
    q: "How does this compare to a full-time CRO's cost?",
    a: "A full-time CRO typically earns $200k–$350k base salary, plus variable compensation and equity (0.5%–1.5%). Total first-year cost including benefits, recruiting fees, and onboarding is often $300k–$500k. At $6k–$14k/month, you're getting the same level of experience for 20–30% of that cost — with no equity dilution, no recruiter fee, and you can start in two weeks.",
  },
  {
    q: "What's the minimum engagement length?",
    a: "Three months. Real results — playbook built, reps coached, pipeline redesigned — take 90 days minimum. I don't take one-month engagements because they don't produce enough change to be worth your investment. Most engagements run 6–12 months.",
  },
  {
    q: "Do you take equity?",
    a: "Typically no. My standard engagements are retainer-only. At very early-stage companies where a longer-term relationship makes sense, I occasionally discuss a small equity component. But it's not a requirement.",
  },
  {
    q: "What happens when I'm ready to hire full-time?",
    a: "I help you hire. At that point, I know your business, your team, and your sales motion better than any recruiter ever will. I help you write the right job spec, avoid the wrong candidates, and onboard the person well. Transition planning is part of what I do.",
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
      name: "Fractional CRO Services",
      provider: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      url: "https://louiebernstein.com/how-much-does-a-fractional-cro-cost",
      description:
        "Fractional CRO retainer pricing: $6,000–$14,000/month depending on scope and time commitment.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "6000",
        highPrice: "14000",
        priceCurrency: "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", unitText: "MONTH" },
      },
    },
  ],
};

export default function HowMuchFractionalCroCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground pattern="tiny-dots" className="bg-slate-950">
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
              Fractional CRO Pricing
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              How Much Does a
              <span className="block text-[#0966c2]">Fractional CRO Cost?</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              The range is $6,000–$14,000/month depending on scope and hours. Here&apos;s exactly
              what each level includes, what drives the price, and how it compares to a full-time
              hire.
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
                href="/fractional-cro-vs-full-time-cro"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Fractional vs. full-time CRO →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Pricing Tiers */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-8 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What It Costs at Each Level
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#0966c2]" />
                    <h3 className="font-bold text-neutral-900">{tier.label}</h3>
                  </div>
                  <div className="mb-1 text-2xl font-bold text-[#0966c2]">{tier.range}</div>
                  <div className="mb-4 text-sm text-neutral-500">{tier.hours}</div>
                  <ul className="mb-4 space-y-2">
                    {tier.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0966c2]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-neutral-600 border border-neutral-200">
                    Best for: {tier.bestFor}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-8 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What You Actually Get
            </motion.h2>
            <div className="space-y-4">
              {whatsIncluded.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0966c2]" />
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
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-2xl font-bold text-neutral-900"
            >
              Who I Am
            </motion.h2>
            <motion.p variants={itemVariants} className="text-neutral-600">
              I&apos;m Louie Bernstein — I have 50 years in business experience, including 22 as a
              bootstrapped founder. My Fractional Sales Leadership business has been helping founders
              since 2017.
            </motion.p>
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
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl"
            >
              Want to Know What the Right Scope Looks Like for You?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at your ARR, your team, and
              your specific revenue challenges — and I&apos;ll give you a straight answer on what
              the right engagement scope looks like and what it would cost.
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
