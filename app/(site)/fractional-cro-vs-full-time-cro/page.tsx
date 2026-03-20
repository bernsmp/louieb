"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, X } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fractionalWins = [
  {
    title: "You're pre-$10M ARR",
    detail:
      "At this stage, a full-time CRO is premature. You don't yet have the revenue org complexity that justifies a $200k–$280k salary plus equity. A fractional CRO gives you senior-level strategy and execution at $6k–$14k/month.",
  },
  {
    title: "You need strategy AND execution",
    detail:
      "Fractional CROs don't just advise — they build. Sales playbook, ICP definition, pipeline stage design, rep coaching, forecast cadences. You get someone who rolls up their sleeves, not just someone who shows up to board meetings.",
  },
  {
    title: "You want to de-risk the hire",
    detail:
      "A full-time CRO hire that doesn't work costs you $300k–$500k including severance, recruiter fees, and lost time. A fractional engagement lets you test the relationship, refine what you need, and transition to full-time with confidence when the time is right.",
  },
  {
    title: "You need immediate impact",
    detail:
      "A full-time search takes 3–6 months. A fractional CRO can start in two weeks. If you have a revenue problem right now, you don't have six months to wait.",
  },
];

const fullTimeWins = [
  {
    title: "You're past $10M–$15M ARR",
    detail:
      "At this revenue level, your sales org has enough complexity — multiple reps, SDR team, AEs, managers — that you need a full-time leader who is 100% present. Fractional isn't enough for that level of organizational complexity.",
  },
  {
    title: "You need board-level representation",
    detail:
      "If investors are expecting a C-suite revenue leader who is fully accountable, a fractional engagement may not satisfy that expectation. Full-time comes with full accountability and full organizational authority.",
  },
  {
    title: "You have a large cross-functional team to align",
    detail:
      "When sales, marketing, and customer success are each 10+ person departments with their own leaders, you need a full-time CRO to drive alignment daily — not someone who is present two or three days a week.",
  },
];

const comparison = [
  { label: "Monthly cost", fractional: "$6,000–$14,000", fullTime: "$15,000–$23,000+" },
  { label: "Annual cost", fractional: "$72k–$168k", fullTime: "$180k–$280k + benefits" },
  { label: "Equity", fractional: "None or minimal", fullTime: "0.5%–1.5% typically" },
  { label: "Time to start", fractional: "1–2 weeks", fullTime: "3–6 months to hire" },
  { label: "Time commitment", fractional: "2–3 days/week", fullTime: "5 days/week" },
  { label: "Best for", fractional: "Sub-$10M ARR", fullTime: "$10M+ ARR" },
];

const faqs = [
  {
    q: "Does a fractional CRO actually execute, or just advise?",
    a: "Both — but with the emphasis on execution. I build the Sales Playbook, define pipeline stages, run the weekly forecast calls, coach your reps in the field, and sit in on key deals. I'm not a consultant who sends a deck and disappears. I'm working in the business two to three days a week.",
  },
  {
    q: "What happens when I'm ready to hire full-time?",
    a: "Most founders I work with use the fractional engagement to build the sales infrastructure, test what the CRO role really needs to look like in their company, and then hire full-time with a clear job spec and a functioning playbook. The fractional period makes the full-time hire better and faster. Some companies keep the fractional arrangement indefinitely — it depends on your growth stage.",
  },
  {
    q: "Does a fractional CRO get equity?",
    a: "It varies. Most fractional engagements are retainer-only with no equity. Some arrangements at earlier-stage companies include a small equity component (0.1%–0.25%) for a longer-term commitment. I typically work on a monthly retainer with no equity requirement.",
  },
  {
    q: "What's the minimum engagement length?",
    a: "I typically work in 3-month minimum engagements. Real change — playbook built, reps coached, pipeline redesigned — takes at least 90 days to show up in the numbers. Shorter engagements produce assessments, not transformation.",
  },
  {
    q: "How do I know when I'm ready to go full-time?",
    a: "When your sales org complexity exceeds what fractional can serve. That usually means: you have 8+ reps, you have functional leaders in sales, marketing, and CS who each need executive management, and your board expects a C-suite officer who is fully present. Until then, fractional gives you more horsepower per dollar.",
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
      headline: "Fractional CRO vs. Full-Time CRO: Which One Do You Actually Need?",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/fractional-cro-vs-full-time-cro",
      description:
        "A clear breakdown of when to hire a fractional CRO versus a full-time CRO — including cost comparison, stage fit, and what each model actually delivers.",
    },
  ],
};

export default function FractionalCroVsFullTimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#0284c7" fillColor="rgba(2,132,199,0.3)" className="bg-slate-950">
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
              CRO Hiring Decision
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Fractional CRO vs.
              <span className="block text-[#0966c2]">Full-Time CRO</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              The right answer depends on your ARR, your sales org complexity, and what you actually
              need right now. Here&apos;s how to think through the decision — and avoid the
              expensive mistake of hiring wrong.
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
                href="/fractional-cro-pricing"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                See fractional CRO pricing →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Cost Comparison Table */}
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
              The Numbers Side by Side
            </motion.h2>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-6 py-4 text-sm font-semibold text-neutral-600"></th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#0966c2]">Fractional CRO</th>
                    <th className="px-6 py-4 text-sm font-semibold text-neutral-700">Full-Time CRO</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-700">{row.label}</td>
                      <td className="px-6 py-4 text-sm text-neutral-900">{row.fractional}</td>
                      <td className="px-6 py-4 text-sm text-neutral-900">{row.fullTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* When Fractional Wins */}
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
              When Fractional is the Right Call
            </motion.h2>
            <div className="space-y-4">
              {fractionalWins.map((item, i) => (
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

      {/* When Full-Time Wins */}
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
              When Full-Time Makes Sense
            </motion.h2>
            <div className="space-y-4">
              {fullTimeWins.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
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
              Not Sure Which Model Fits Your Stage?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at your ARR, your sales org,
              and what you actually need right now — and I&apos;ll give you a straight answer on
              whether fractional or full-time is the right next move.
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
