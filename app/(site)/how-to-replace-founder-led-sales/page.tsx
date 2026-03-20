"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { CheckCircle, AlertTriangle } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const steps = [
  {
    step: "Step 1",
    title: "Run a Sales Audit Before You Touch Anything",
    detail:
      "Most founders jump to hiring or building a playbook before they understand what's actually happening in their sales motion. The Sales Audit changes that. It examines your ICP, pipeline stages, messaging, conversion rates, and where deals are dying. Without this, you're building on assumptions. With it, you're building on reality.",
    callout: "The Sales Audit is the foundation. Everything else comes after.",
  },
  {
    step: "Step 2",
    title: "Build Your Sales Playbook Before You Hire Anyone",
    detail:
      "Your Sales Playbook is the documentation of everything that makes your sales work — your ICP, your discovery questions, your objection handling, your pricing conversation, your follow-up cadence. If this lives only in your head, every new rep will invent their own version. Write it down first. Then hire into it.",
    callout:
      "A Sales Playbook turns one founder's instincts into a system any rep can follow.",
  },
  {
    step: "Step 3",
    title: "Define Your ICP with Precision",
    detail:
      "Who is the exact type of company and buyer who buys fastest, pays the most, churns the least, and refers the most? Most founders have a vague sense of this. Replacing founder-led sales requires making it explicit — industry, company size, title, pain point, trigger event. Your reps can only sell to who you define.",
    callout: null,
  },
  {
    step: "Step 4",
    title: "Build Action-Based Pipeline Stages",
    detail:
      "Most pipelines track stages like 'Proposal Sent' or 'Interested.' These track the salesperson's actions, not the prospect's. Replace them with action-based stages tied to what the prospect has done: 'Discovery Call Completed,' 'Demo Attended,' 'Proposal Reviewed.' This makes your pipeline tell the truth instead of flattering your numbers.",
    callout: "A good pipeline tells you what's real. A bad pipeline tells you what you want to hear.",
  },
  {
    step: "Step 5",
    title: "Hire Two Salespeople — Not a VP",
    detail:
      "The most common mistake founders make: they hire a VP of Sales thinking that person will build the machine. But a VP of Sales needs a system to manage — not to invent. Hire two salespeople into your documented playbook first. One for redundancy, comparison, and data. Two is how you know if the system works or if one rep just got lucky.",
    callout: "Don't hire a VP to build. Build first. Then hire a VP to manage.",
  },
  {
    step: "Step 6",
    title: "Implement Daily Training (15–33 Minutes/Day)",
    detail:
      "Sales is a skill. Skills atrophy without practice. A 15–33 minute daily training session — role plays, objection practice, call reviews — keeps your team sharp and cuts onboarding time from months to weeks. This isn't motivational content. It's deliberate practice of the specific situations your reps face.",
    callout: null,
  },
  {
    step: "Step 7",
    title: "Set KPIs and Hold the Team Accountable",
    detail:
      "Every rep should know exactly what winning looks like in their role. Not just revenue targets, but activity-based KPIs: calls made, discovery conversations held, demos completed. A Position Contract makes expectations explicit. Weekly pipeline reviews keep everyone accountable. This is how you manage a sales team — not by hoping they'll figure it out.",
    callout: null,
  },
  {
    step: "Step 8",
    title: "Step Back — Gradually and Intentionally",
    detail:
      "Don't vanish overnight. Start by staying out of late-stage deals. Let reps run their own demos. Observe pipeline reviews rather than running them. The goal is to make yourself replaceable — by design. When you can take a two-week vacation and revenue doesn't dip, you've replaced founder-led sales.",
    callout: "The goal: your company should sell better when you're not in the room.",
  },
];

const mistakes = [
  "Hiring salespeople before building a Sales Playbook",
  "Hiring a VP of Sales before you have a functioning sales system",
  "Keeping your pipeline in a spreadsheet instead of a real CRM with action-based stages",
  "Using 'interested' or 'proposal sent' as pipeline stages (these track your activity, not theirs)",
  "Running no training — then wondering why reps don't handle objections well",
  "Setting revenue targets but no activity-based KPIs",
];

const faqs = [
  {
    q: "What's the #1 mistake founders make when transitioning out of founder-led sales?",
    a: "Hiring before building the system. Most founders hire a VP of Sales or bring on reps, expecting them to figure it out. Without a Sales Playbook, ICP definition, and documented pipeline, every new hire invents their own approach — and results are inconsistent at best. Build the system first. Always.",
  },
  {
    q: "How long does it take to replace founder-led sales?",
    a: "Most companies do this in 6–12 months if they approach it systematically. Month 1 is the Sales Audit and Playbook. Months 2–4 are hiring and implementing the system. Months 4–12 are the reps building their own book of business with your oversight decreasing over time.",
  },
  {
    q: "Do I need a Fractional Sales Leader to do this, or can I do it myself?",
    a: "You can absolutely use this framework yourself. I have a free YouTube series — The Founder's and CEO's Sales System — that walks through exactly how. If you want someone embedded who has done this 50+ times and can accelerate the timeline, that's where a Fractional Sales Leader comes in. Either way, the framework is the same.",
  },
  {
    q: "Should I hire one salesperson or two?",
    a: "Two. Always two. With one rep, you can't tell if their results are because of the system or because of the individual. With two reps, you have comparison data. If one is dramatically outperforming, you learn from them. If they're both struggling, the system needs to be fixed. Two reps also create accountability between themselves.",
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
      headline: "How to Replace Founder-Led Sales Without Losing Momentum",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/how-to-replace-founder-led-sales",
      description:
        "A step-by-step framework for replacing founder-led sales — Sales Audit, Sales Playbook, ICP, hiring, KPIs, and stepping back.",
    },
  ],
};

export default function HowToReplaceFounderLedSalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#67e8f9" fillColor="rgba(103,232,249,0.3)" className="bg-slate-950">
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
              Founder-Led Sales Transition
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              How to Replace Founder-Led Sales
              <span className="block text-[#0966c2]">Without Losing Momentum</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              You built a $1M+ business by being your company&apos;s best salesperson. Now
              it&apos;s time to build the system that lets someone else do it. Here&apos;s the exact
              framework — in the right order.
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
                href="/how-to-build-a-sales-process-after-1m-arr"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to build a sales process after $1M ARR →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Warning */}
      <section className="bg-white py-12 md:py-16">
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
                  <p className="font-bold text-amber-900">
                    Founder-led sales is costing you more than you think.
                  </p>
                  <p className="mt-1 text-amber-800">
                    Every hour you spend selling is an hour not spent on product, strategy, or
                    growth. The ceiling isn&apos;t the market. It&apos;s you. And the longer you
                    wait to build the system, the harder the transition becomes.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-neutral-50 py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-[#0966c2] px-3 py-1 text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900">{step.title}</h2>
                </div>
                <p className="text-neutral-600">{step.detail}</p>
                {step.callout && (
                  <div className="mt-4 border-l-4 border-[#0966c2] pl-4">
                    <p className="font-semibold italic text-[#0966c2]">{step.callout}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mistakes to Avoid */}
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
              Mistakes That Kill the Transition
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              I&apos;ve seen these patterns derail the transition from founder-led sales more times
              than I can count:
            </motion.p>
            <div className="space-y-3">
              {mistakes.map((mistake, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
                >
                  <span className="mt-0.5 text-red-500">✗</span>
                  <span className="text-neutral-800">{mistake}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Louie */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-10 shadow-sm"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-6 font-serif text-3xl font-bold text-neutral-900"
            >
              About Louie Bernstein
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-4 text-lg text-neutral-600">
              I&apos;m Louie Bernstein — 72 years old, 50 years in business, 9 years as a
              Fractional Sales Executive. I&apos;ve helped dozens of founders with $1M–$10M ARR
              make exactly this transition — replacing founder-led sales with a system that scales.
            </motion.p>
            <motion.p variants={itemVariants} className="mb-6 text-lg text-neutral-600">
              I also have a free YouTube series — &ldquo;The Founder&apos;s and CEO&apos;s Sales
              System&rdquo; — that walks through how to build this yourself if you prefer the DIY
              route. If you want it done faster with someone embedded in the work, that&apos;s where
              I come in.
            </motion.p>
            <motion.div variants={itemVariants} className="border-l-4 border-[#0966c2] pl-6">
              <p className="text-lg italic text-neutral-600">
                &ldquo;Louie came in and helped bring together all our sales efforts into a system
                with a Sales Playbook, realistic pipeline, and defined roles. We are better off from
                having Louie here.&rdquo;
              </p>
              <p className="mt-2 font-semibold text-neutral-700">— Retail e-commerce platform</p>
            </motion.div>
            <motion.p variants={itemVariants} className="mt-6">
              <Link
                href="/"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Learn more at louiebernstein.com →
              </Link>
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
              Common Questions
            </motion.h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 p-6"
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
              Ready to Build the System That Replaces You?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Book a 30-minute working session. We&apos;ll look at where your sales are stuck and
              figure out the right first step for your specific situation.
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
