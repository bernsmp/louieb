"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { AlertTriangle, CheckCircle } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const signs = [
  {
    number: "01",
    title: "You're still closing most deals yourself",
    detail:
      "If you, the founder, are still in the final stages of most deals — your company has not built a sales system. It has built a dependency on you. When you stop, sales stop. A Fractional CRO breaks that dependency by building a process your team can own.",
  },
  {
    number: "02",
    title: "You've hired salespeople but they're not producing",
    detail:
      "Salespeople without a Sales Playbook figure out their own way to sell — which may not match what actually works. You hired them to solve your sales problem, but without a system to plug into, they flounder. The issue is almost never the hire. It's the lack of infrastructure.",
  },
  {
    number: "03",
    title: "You have no documented sales process",
    detail:
      "If the sales process lives only in your head, your company is fragile. What happens when you travel? When you're sick? When you want to take a vacation? A Fractional CRO's first job is to document what works — turning your instincts into a playbook anyone can follow.",
  },
  {
    number: "04",
    title: "Your pipeline is based on hope, not data",
    detail:
      "Most early-stage pipelines are optimistic by nature — founders track 'interest' instead of 'action.' A Fractional CRO rebuilds your pipeline around what prospects have actually done, not what you hope they'll do. This turns your forecast from a guess into a number you can rely on.",
  },
  {
    number: "05",
    title: "Revenue has plateaued despite adding headcount",
    detail:
      "You added reps but revenue didn't move. This is a process problem, not a people problem. More salespeople running a broken process just creates more chaos. A Fractional CRO identifies where the system is broken and fixes the foundation — before you add more people to it.",
  },
  {
    number: "06",
    title: "You're burning out running sales and the business",
    detail:
      "Running both the company and the sales motion is a recipe for burnout. The math is simple: a Fractional CRO costs $6k–$14k/month. Your time is worth far more than that running the business you built. The question isn't whether you can afford a Fractional CRO. It's whether you can afford not to have one.",
  },
  {
    number: "07",
    title: "You've hit $1M ARR and want to reach $5M",
    detail:
      "The jump from $1M to $5M ARR almost never happens with the same sales approach that got you to $1M. Founder-led sales works up to a point — then it becomes the ceiling. The companies that break through $5M are the ones that systemize sales before they need to, not after they're already stuck.",
  },
];

const faqs = [
  {
    q: "What's the biggest mistake founders make when timing this decision?",
    a: "Waiting too long. Most founders wait until they're exhausted, pipeline is stalled, or a key rep has quit — then they bring in help in crisis mode. The best time to bring in a Fractional CRO is when things are going okay but you can see the ceiling coming. That's when you can build proactively instead of reactively.",
  },
  {
    q: "Is it too early to hire a Fractional CRO at $1M ARR?",
    a: "No — $1M ARR is often the ideal time. You've proven the product works. Now the question is how to scale it without the founder doing every deal. The Sales Playbook and pipeline systems we build are designed for exactly this stage.",
  },
  {
    q: "What if I just need a sales consultant instead?",
    a: "A consultant advises. A Fractional CRO does. If you want a report with recommendations, hire a consultant. If you want someone embedded in the business building the system and managing the team, that's a Fractional CRO. See the full comparison on our Fractional Sales Leader vs. Consultant page.",
  },
  {
    q: "How long before I see results?",
    a: "The Sales Audit is complete in the first 30 days. By month 2–3, you have a Sales Playbook and the team is operating from a documented process. By month 6, you should see measurable improvement in pipeline quality and rep productivity. Results compound as the system matures.",
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
      headline: "When to Hire a Fractional CRO: 7 Signs You're Ready",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/when-to-hire-a-fractional-cro",
      description:
        "7 clear signs your $1M–$10M business needs a Fractional CRO right now — and what happens if you wait.",
    },
  ],
};

export default function WhenToHirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground pattern="sparse-dots" className="bg-slate-950">
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
              Decision Guide
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              When to Hire a Fractional CRO:
              <span className="block text-[#0966c2]">7 Signs You&apos;re Ready</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              Most founders wait too long. By the time they bring in sales leadership, they&apos;re
              burned out, pipeline is stalled, and the business is stuck. Here are the 7 signs that
              now is the right time.
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

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-amber-200 bg-amber-50 p-6"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
                <div>
                  <p className="font-bold text-amber-900">The cost of waiting:</p>
                  <p className="mt-1 text-amber-800">
                    Founder-led sales costs you approximately $285,000 per month in lost opportunity
                    — your time, your opportunity cost, and the deals you&apos;re not closing because
                    you&apos;re running everything else. The sooner you build the system, the sooner
                    it pays for itself.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The 7 Signs */}
      <section className="bg-neutral-50 py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {signs.map((sign, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-4xl font-black text-[#0966c2]/20">{sign.number}</span>
                  <h2 className="text-xl font-bold text-neutral-900">{sign.title}</h2>
                </div>
                <p className="text-neutral-600">{sign.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Happens When You Do */}
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
              className="mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What Happens When You Bring In a Fractional CRO
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              Here&apos;s what the first 90 days look like:
            </motion.p>
            <div className="space-y-4">
              {[
                {
                  phase: "Days 1–30",
                  title: "Sales Audit",
                  desc: "Deep discovery into your sales motion, pipeline, team, ICP, and competitive positioning. No recommendations until we understand the full picture.",
                },
                {
                  phase: "Days 30–60",
                  title: "Sales Playbook Build",
                  desc: "Your best practices documented into a repeatable system — scripts, objection handling, pipeline stages, ICP definition, and onboarding framework.",
                },
                {
                  phase: "Days 60–90",
                  title: "System & Accountability Launch",
                  desc: "Pipeline reviews, daily training cadence (15–33 min/day), KPIs, Position Contracts. The team starts operating from a system, not improvising.",
                },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-6 rounded-xl border border-neutral-200 p-6"
                >
                  <div className="shrink-0 text-center">
                    <div className="rounded-lg bg-[#0966c2]/10 px-3 py-1 text-xs font-bold text-[#0966c2]">
                      {phase.phase}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <h3 className="font-bold text-neutral-900">{phase.title}</h3>
                    </div>
                    <p className="mt-1 text-neutral-600">{phase.desc}</p>
                  </div>
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
              Common Questions
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
                href="/fractional-sales-leader-vs-consultant"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Fractional Sales Leader vs. Consultant — what&apos;s the difference? →
              </Link>
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-6 rounded-xl border border-[#0966c2]/20 bg-blue-50 p-6 text-center"
            >
              <p className="mb-1 text-sm font-semibold text-[#0966c2]">Ready to Start Vetting?</p>
              <p className="mb-3 text-neutral-700">
                Once you&apos;ve decided it&apos;s time, there&apos;s one question you must ask every candidate.
              </p>
              <Link
                href="/videos/ask-this-before-hiring-a-fractional-sales-leader"
                className="font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Watch: Ask This Before Hiring A Fractional Sales Leader →
              </Link>
            </motion.div>
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
              Recognize Any of These Signs?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at where your sales are today
              and figure out the right next step — whether that&apos;s working with me or not.
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
