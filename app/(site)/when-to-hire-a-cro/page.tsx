"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { Check, AlertCircle } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const readySigns = [
  {
    title: "Sales, marketing, and CS are misaligned",
    detail:
      "Marketing is generating leads that sales calls unqualified. Sales is closing deals that CS struggles to retain. Nobody owns the overlap. That's the CRO problem — and it only gets worse without someone whose job is to fix it.",
  },
  {
    title: "You have leaders in multiple revenue functions",
    detail:
      "If you have a VP of Sales, a Head of Marketing, and a VP of Customer Success each reporting to you separately, you're effectively acting as a part-time CRO. That's not sustainable. A CRO takes that coordination off your plate.",
  },
  {
    title: "Revenue growth has stalled despite adequate pipeline",
    detail:
      "Leads are coming in, your sales team is working, but deals are slowing down or NRR is declining. That's usually a cross-functional alignment problem, not a pure sales problem. A CRO can see across the full funnel.",
  },
  {
    title: "Your board is asking for a revenue executive",
    detail:
      "Investors want C-suite accountability for revenue — not just a sales leader, but someone who owns the full commercial strategy. If your board is asking for a CRO, that's a clear signal.",
  },
  {
    title: "You're past $5M–$10M ARR",
    detail:
      "At this stage, your revenue org has enough complexity — multiple reps, functional marketing, growing customer base — that a CRO's cross-functional scope generates real value. Below this stage, a VP of Sales or Fractional CRO is usually a better fit.",
  },
];

const notReadySigns = [
  {
    title: "You're still doing founder-led sales",
    detail:
      "If you're still personally closing most of your deals, you don't have a sales team to lead yet. A CRO needs a revenue organization to run. Build the foundation first.",
  },
  {
    title: "You don't have a VP of Sales in place",
    detail:
      "In most organizations, a VP of Sales reports to the CRO. If you hire a CRO before you have a VP of Sales, your CRO will spend their time doing VP of Sales work. Sequence matters.",
  },
  {
    title: "Your revenue problem is specifically a sales execution problem",
    detail:
      "Reps not hitting quota, pipeline not converting, demos not landing. These are VP of Sales problems — not CRO problems. A CRO won't fix rep-level execution. A VP of Sales will.",
  },
  {
    title: "You're sub-$3M ARR",
    detail:
      "The cross-functional complexity that justifies a CRO usually doesn't exist at this stage. You're better served by a VP of Sales who can build the sales function, or a Fractional CRO who gives you senior strategy at a fraction of the cost.",
  },
];

const faqs = [
  {
    q: "Can a Fractional CRO bridge the gap while I decide?",
    a: "Yes — and it's often the right answer. A Fractional CRO gives you CRO-level strategy and cross-functional leadership at $6k–$14k/month while you determine whether full-time is the right next step. Most founders use the fractional period to build the infrastructure, define what the role needs to look like for their specific company, and hire full-time with much better clarity.",
  },
  {
    q: "What's the difference between a CRO and a VP of Sales for an early-stage company?",
    a: "At sub-$5M ARR, the titles often don't matter as much as the scope. What matters is: do you need someone to run a sales team (VP of Sales), or do you need someone to align your entire revenue operation across sales, marketing, and CS (CRO)? If you don't have a marketing leader or a CS leader yet, a CRO is premature. Build the team first.",
  },
  {
    q: "How much does a CRO cost?",
    a: "A full-time CRO typically earns $200k–$350k base, with total compensation including variable and equity often exceeding $400k–$600k at growth-stage companies. A Fractional CRO runs $6k–$14k/month — same experience level, 20–30% of the cost, no equity dilution.",
  },
  {
    q: "Should my CRO own marketing?",
    a: "Ideally yes, at a certain scale. The most common CRO failure mode is when they own sales but not pipeline generation — then they're held accountable for revenue without controlling the lead engine. If your CRO doesn't own marketing, make sure the marketing leader has a direct accountability relationship with the CRO on pipeline targets.",
  },
  {
    q: "What should I look for when hiring a CRO?",
    a: "Someone who has led cross-functional revenue teams before — not just sales. They should be able to speak credibly about pipeline generation, customer retention, and revenue forecasting in the same conversation. Avoid 'sales leaders' who are relabeled CROs. A real CRO has managed the full commercial operation.",
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
      "@type": "Article",
      headline: "When to Hire a CRO: The Signals That Tell You You're Ready",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/when-to-hire-a-cro",
      description:
        "A practical guide to knowing when your company is ready to hire a Chief Revenue Officer — the signs that tell you it's time, and the ones that tell you to wait.",
    },
  ],
};

export default function WhenToHireACroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <BackgroundCells className="bg-slate-950">
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
              Revenue Leadership Timing
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              When to Hire
              <span className="block text-[#0966c2]">a CRO</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              Most companies hire a CRO either too early or too late. Here are the signals that
              tell you it&apos;s time — and the ones that tell you you&apos;re not ready yet.
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
                href="/vp-sales-vs-cro-difference"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                VP of Sales vs. CRO — what&apos;s the difference? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </BackgroundCells>

      {/* You're Ready Signs */}
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
              Signs You&apos;re Ready to Hire a CRO
            </motion.h2>
            <div className="space-y-4">
              {readySigns.map((item, i) => (
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

      {/* Not Ready Signs */}
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
              Signs You&apos;re Not Ready Yet
            </motion.h2>
            <div className="space-y-4">
              {notReadySigns.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-amber-100 bg-amber-50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <div>
                      <h3 className="mb-2 font-bold text-neutral-900">{item.title}</h3>
                      <p className="text-neutral-700">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
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
      <section className="bg-white py-16 md:py-24">
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
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={itemVariants} className="mt-8 text-center">
              <Link
                href="/fractional-cro-vs-full-time-cro"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Compare fractional vs. full-time CRO →
              </Link>
            </motion.p>
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
              Not Sure if You&apos;re Ready?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at your revenue org, your stage,
              and what you actually need — and I&apos;ll give you a straight answer on whether a
              CRO is the right move, or whether something else should come first.
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
