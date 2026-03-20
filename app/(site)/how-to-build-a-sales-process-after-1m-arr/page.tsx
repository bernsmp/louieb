"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, BookOpen, Target, Users, BarChart3, Zap, ClipboardList, TrendingUp } from "lucide-react";

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
    icon: ClipboardList,
    step: "Step 1",
    title: "Start with a Sales Audit",
    detail:
      "Before you build anything, understand what's actually happening. Who's buying and why? Where are deals dying? What's your real close rate (not the optimistic one)? What's the actual length of your sales cycle? A Sales Audit gives you the foundation — facts, not assumptions — to build the right process, not just any process.",
    insight:
      "Most $1M ARR companies discover they've been selling to the wrong ICP at least some of the time. The Audit reveals this.",
  },
  {
    icon: BookOpen,
    step: "Step 2",
    title: "Build Your Sales Playbook",
    detail:
      "Your Sales Playbook is the master document of your sales process. It captures your ICP definition, discovery questions, demo flow, objection handling, pricing conversation, follow-up cadence, and onboarding steps. If it lives only in your head, every rep will invent their own version. The Playbook turns founder instinct into a system any rep can follow.",
    insight:
      "A Sales Playbook isn't just for reps. It's how you onboard faster, coach specifically, and scale without starting over every time someone leaves.",
  },
  {
    icon: Target,
    step: "Step 3",
    title: "Define Your ICP with Precision",
    detail:
      "Ideal Customer Profile is not 'companies who would benefit from our product.' It's specific: industry, company size, title, pain point, budget authority, and trigger events that make them ready to buy now. The tighter your ICP, the shorter your sales cycle, the higher your win rate, and the better your reps perform.",
    insight:
      "Bad ICP = reps chasing every lead, closing none. Tight ICP = reps focusing on the buyers most likely to say yes.",
  },
  {
    icon: BarChart3,
    step: "Step 4",
    title: "Create Action-Based Pipeline Stages",
    detail:
      "Rebuild your pipeline around what the prospect has done, not what you hope they'll do. Replace stages like 'Interested' and 'Proposal Sent' with 'Discovery Call Completed,' 'Demo Attended,' 'Proposal Reviewed + Questions Asked.' The prospect's actions tell you the real story about deal health — and give you an accurate forecast.",
    insight:
      "When your pipeline tracks prospect actions, your forecast becomes a real number you can count on.",
  },
  {
    icon: Zap,
    step: "Step 5",
    title: "Implement Daily Training (15–33 Minutes)",
    detail:
      "Sales is a skill that atrophies without practice. Daily training — role plays, objection drills, call reviews — is the highest-leverage thing you can do for rep performance. It doesn't need to be elaborate. 15 minutes of focused practice every day compounds into dramatically better performance. Teams that train daily onboard new reps faster and handle objections better.",
    insight: null,
  },
  {
    icon: Users,
    step: "Step 6",
    title: "Run Weekly 1:1s and Pipeline Reviews",
    detail:
      "1:1s are coaching sessions, not status updates. Each one should focus on a specific deal, a specific skill, or a specific obstacle. Pipeline reviews (bi-weekly with the full team) create peer accountability and force everyone to confront what's real versus what's optimistic. These two cadences are how you manage a sales team.",
    insight:
      "The manager who runs great 1:1s is the one whose reps hit quota consistently.",
  },
  {
    icon: ClipboardList,
    step: "Step 7",
    title: "Set KPIs and Position Contracts",
    detail:
      "Every rep should know exactly what winning looks like in their role. Not just revenue — activity-based KPIs (calls, discovery calls, demos, proposals) that are the leading indicators of revenue. A Position Contract makes expectations explicit before the rep starts. No ambiguity about what the job is.",
    insight: null,
  },
  {
    icon: TrendingUp,
    step: "Step 8",
    title: "Hire Into the System",
    detail:
      "Now hire. With a Sales Playbook, ICP definition, pipeline structure, training cadence, KPIs, and Position Contracts in place, every new rep has a clear environment to succeed in. You're not hoping they'll figure it out — you're giving them a system designed for their success. This is when two reps outperform what ten reps achieved before.",
    insight:
      "The Sales Playbook cuts rep ramp time from 90 days to 30. That math matters at scale.",
  },
];

const faqs = [
  {
    q: "What's the first thing to build after hitting $1M ARR?",
    a: "Start with a Sales Audit, then a Sales Playbook. Most founders want to hire first — but hiring without a documented process means every rep invents their own approach. The Playbook gives your first reps a system to plug into instead of improvising from scratch.",
  },
  {
    q: "How long does it take to build a proper sales process?",
    a: "A focused Sales Audit takes 2–4 weeks. A Sales Playbook takes 4–6 weeks to build properly. Pipeline restructuring can happen in days. Full implementation — pipeline, KPIs, training cadence, 1:1s running consistently — is typically a 90-day project. Then the system matures and improves over the next 6–12 months.",
  },
  {
    q: "Should I hire a VP of Sales or build the process first?",
    a: "Build first. Hire a VP of Sales after you have a working system and want someone to manage and optimize it. Bringing a VP in before you have a process means you're paying $300k+ for someone to build what should have been built first. The typical pattern: Sales Playbook → hire two reps → let the reps run → then consider a VP of Sales.",
  },
  {
    q: "What tools do I need?",
    a: "The tools matter less than the process. A CRM (HubSpot, Salesforce, Pipedrive, or even a well-structured spreadsheet) to track pipeline. A document (Google Doc, Notion, or similar) for your Sales Playbook. The discipline to run 1:1s and pipeline reviews consistently. The tools should serve the process — not define it.",
  },
  {
    q: "What if I want to do this myself?",
    a: "I have a free YouTube series — 'The Founder's and CEO's Sales System' — that walks through exactly how to build this without hiring anyone. If you want someone embedded who's done this dozens of times and can compress the timeline, that's where I come in. Either way, the framework is the same.",
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
      headline: "How to Build a Sales Process After $1M ARR",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/how-to-build-a-sales-process-after-1m-arr",
      description:
        "The exact framework for building a repeatable sales process after $1M ARR — Sales Playbook, ICP, pipeline, KPIs, daily training.",
    },
  ],
};

export default function HowToBuildSalesProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#4f46e5" fillColor="rgba(79,70,229,0.3)" className="bg-slate-950">
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
              Sales Process Framework
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              How to Build a Sales Process
              <span className="block text-[#0966c2]">After $1M ARR</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              Hitting $1M ARR means your product works. The next challenge is building a sales
              system that scales without you closing every deal. Here&apos;s the exact framework —
              in the right order.
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
                href="/how-to-replace-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to replace founder-led sales →
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
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-3xl font-bold text-neutral-900"
            >
              $1M ARR Is a Turning Point, Not a Finish Line
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-4 text-lg text-neutral-600">
              Most founders reach $1M ARR through hustle, relationships, and sheer force of will.
              That&apos;s a real accomplishment. But the things that got you here — founder-led
              sales, informal processes, closing every deal yourself — are the things that will cap
              you at $3M–$5M if you don&apos;t change them.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-neutral-600">
              The jump from $1M to $5M to $10M ARR requires a sales{" "}
              <span className="font-semibold text-neutral-900">system</span> — not more effort.
              Here&apos;s how to build it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-neutral-50 py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0966c2]/10">
                      <step.icon className="h-6 w-6 text-[#0966c2]" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#0966c2]">
                      {step.step}
                    </p>
                    <h2 className="text-xl font-bold text-neutral-900">{step.title}</h2>
                  </div>
                </div>
                <p className="mb-4 text-neutral-600">{step.detail}</p>
                {step.insight && (
                  <div className="rounded-lg bg-[#0966c2]/5 border border-[#0966c2]/20 p-4">
                    <p className="text-sm font-semibold text-[#0966c2]">{step.insight}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You End Up With */}
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
              What You End Up With
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              When this framework is fully implemented, here&apos;s what your sales operation looks
              like:
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "A documented Sales Playbook every rep sells from",
                "A precise ICP your reps use to qualify instantly",
                "A pipeline that tells you the truth about what will close",
                "Daily training that keeps the team sharp",
                "Weekly 1:1s that develop each rep specifically",
                "KPIs that show you leading indicators, not just results",
                "New reps who are productive in 30 days, not 90",
                "A founder who is no longer the bottleneck in sales",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-neutral-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900"
            >
              What Founders Say After Building the System
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "When Louie came on board he wrote and organized our outbound scripts and emails. We now had everyone working off the same playbook, and it gave us consistency. Results were much easier to measure. Onboarding, and getting a new BDR productive, happen quicker too.",
                  name: "Neal Reynolds",
                  title: "CEO, BankMarketingCenter.com",
                },
                {
                  quote:
                    "Louie came in and helped bring together all our sales efforts into a system with a Sales Playbook, realistic pipeline, and defined roles. We are better off from having Louie here.",
                  name: "CEO",
                  title: "Retail e-commerce platform",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-8"
                >
                  <p className="mb-4 italic text-neutral-700">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-bold text-neutral-900">— {t.name}</p>
                  <p className="text-sm text-neutral-500">{t.title}</p>
                </motion.div>
              ))}
            </div>
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
                  className="rounded-xl border border-neutral-200 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-8 text-center space-y-3">
              <p>
                <Link
                  href="/when-to-hire-a-fractional-cro"
                  className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
                >
                  7 signs it&apos;s time to hire a Fractional CRO →
                </Link>
              </p>
              <p>
                <Link
                  href="/fractional-cro-pricing"
                  className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
                >
                  See Fractional CRO pricing →
                </Link>
              </p>
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
              Ready to Build the Sales Process That Gets You to $5M?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at where your sales process is
              today and figure out the right first step to build toward the next level.
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
            <motion.p variants={itemVariants} className="mt-6 text-sm text-neutral-400">
              Prefer to build it yourself? Watch my free YouTube series:{" "}
              <a
                href="https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-200"
              >
                The Founder&apos;s and CEO&apos;s Sales System
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
