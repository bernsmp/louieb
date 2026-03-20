"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, AlertCircle, XCircle } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const rootCauses = [
  {
    title: "Wrong candidate profile",
    detail:
      "Founders hire reps who look great on paper — logos, quotas, polish. But they've only ever sold for well-known companies with strong inbound demand. In a startup, there's no brand, no warm leads, no marketing support. These reps struggle in cold environments because they've never had to prospect from zero. The logo is a trap.",
    icon: XCircle,
  },
  {
    title: "No system to sell into",
    detail:
      "The rep arrives on Day 1 and there's no Sales Playbook, no defined ICP, no structured pipeline, no onboarding plan. They have to figure out how to sell your product on their own. Some invent something that works. Most don't. The failure isn't the rep — it's the blank slate you handed them.",
    icon: XCircle,
  },
  {
    title: "No coaching after onboarding",
    detail:
      "Founders hire a rep, hand them a login to the CRM, and disappear. There are no weekly 1:1s, no deal reviews, no call coaching. Without structured feedback, reps drift. Bad habits compound. Good instincts go unnoticed. The best reps leave for companies that will actually develop them.",
    icon: XCircle,
  },
  {
    title: "Comp structure that attracts the wrong people",
    detail:
      "A base-heavy compensation plan signals safety over performance. The reps who thrive in startups want upside — they're motivated by variable comp tied to real results. If your plan looks like a corporate job, you'll attract reps who want a corporate experience. That's not what your stage needs.",
    icon: XCircle,
  },
  {
    title: "Misaligned expectations",
    detail:
      "No Position Contract. No written 30-60-90 plan. No defined KPIs. The rep thinks the job is one thing; the founder expects something else. By the time the mismatch becomes obvious, you've wasted 3–4 months and probably $30,000–$50,000. Get the expectations in writing before Day 1.",
    icon: XCircle,
  },
  {
    title: "Hiring before the founder has sold it",
    detail:
      "If you haven't closed 10–20 customers yourself and identified the repeatable pattern — who buys, why they buy, what the sales cycle looks like — you don't have enough to hand off. You're hiring someone to figure out something you haven't figured out yet. That's not a sales hire. That's an expensive experiment.",
    icon: XCircle,
  },
];

const fixIt = [
  {
    title: "Define the right candidate profile before you post the job",
    detail: "Startup reps are different from enterprise reps. Build your scorecard around: have they sold something no one had heard of? Can they build pipeline from cold? Do they understand why they lost deals — not just won them?",
  },
  {
    title: "Build the Sales Playbook before they start",
    detail: "ICP, discovery questions, demo flow, objection handling, pricing conversation, follow-up cadence. One document your rep can study, follow, and improve. Don't hire into a blank slate.",
  },
  {
    title: "Create a written 30-60-90 plan with milestones",
    detail: "Day 1–30: product immersion and playbook mastery. Day 30–60: managed calls with feedback. Day 60–90: independent deal ownership. Specific, measurable milestones at each phase.",
  },
  {
    title: "Install a weekly coaching cadence",
    detail: "30-minute 1:1 every week with a defined agenda: pipeline review, deal diagnosis, objection practice, feedback. Reps improve when someone is paying attention. Without it, they plateau.",
  },
  {
    title: "Get the comp structure right",
    detail: "50/50 base-to-variable. Enough base to attract quality, enough variable to incentivize performance. Startup reps should want the upside. If they're negotiating for a higher base, that's a signal.",
  },
];

const faqs = [
  {
    q: "What's the single most common reason startup sales hires fail?",
    a: "Hiring the wrong profile. Most founders hire reps with impressive logos who have only ever sold into warm, inbound-heavy environments. At a startup with no brand and no marketing, they have to build pipeline from cold — which is a completely different skill. They look great in the interview and struggle from Day 1. The profile matters more than the resume.",
  },
  {
    q: "How do I know if my sales hire is failing or my system is broken?",
    a: "Look at activity data. Is the rep running real discovery calls, or just demos? Are they building pipeline from cold, or waiting for leads? Are they following the playbook? If activity is strong and results are weak, the system needs fixing — the ICP might be wrong, the messaging might be off, or the product-market fit isn't there yet. If activity is weak, the rep needs coaching or replacement. Don't confuse the two. Founders often blame the rep when the system is the real problem.",
  },
  {
    q: "How do I interview for a startup sales rep vs. a traditional sales rep?",
    a: "Ask questions that reveal how they sell without support. 'Walk me through a deal you built from zero — no inbound, no SDR, no referral.' 'Tell me about a deal you lost and exactly why.' 'How do you handle a prospect who goes dark after three great calls?' The answers reveal whether they can operate independently. Avoid candidates who can only describe wins, can't explain losses, or reference support systems that won't exist at your company.",
  },
  {
    q: "What do I do if I've already made a bad sales hire?",
    a: "First, diagnose honestly. Is the rep underperforming because of them, or because there's no system? If it's the system, fix the system before making any personnel decision. If activity is clearly low and coaching hasn't moved the needle after 60–90 days, it's time to move on. Document the expected activities and results (the Position Contract), have a direct conversation about the gap, give a specific improvement window, and make the call when the window closes. Staying too long with the wrong rep is expensive — in money, time, and team morale.",
  },
  {
    q: "How many sales reps should I hire first?",
    a: "Two. With one rep, you can't tell if results reflect the individual or the system. With two, you have comparison data. If one dramatically outperforms the other, you learn from them. If both struggle, the system needs fixing. Two reps also create peer accountability and make each other better. The cost difference is real, but the learning is worth it.",
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
      headline: "Why Startups Fail at Sales Hiring: Root Causes and How to Fix Them",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/why-startups-fail-at-sales-hiring",
      description:
        "The six root causes of startup sales hiring failure — wrong profile, no system, no coaching, bad comp, misaligned expectations — and exactly how to fix each one.",
    },
  ],
};

export default function WhyStartupsFailAtSalesHiringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&fit=crop&auto=format" imageAlt="Startup team in a hiring and recruitment planning session" className="bg-slate-950">
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
              Startup Sales Hiring
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Why Startups Fail
              <span className="block text-[#0966c2]">at Sales Hiring</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              Most startup sales hires fail within 12 months. The reasons are almost always the
              same — and almost always preventable. Here are the six root causes, and exactly
              what to do differently.
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
                href="/how-to-hire-first-sales-rep"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to hire your first sales rep →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Root Causes */}
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
              The 6 Root Causes of Startup Sales Hiring Failure
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 max-w-2xl text-lg text-neutral-600">
              I&apos;ve seen these same patterns in dozens of companies. Founders are usually
              surprised by how preventable each one is.
            </motion.p>
            <div className="grid gap-5 md:grid-cols-2">
              {rootCauses.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <h3 className="mb-2 font-bold text-neutral-900">{item.title}</h3>
                      <p className="text-sm text-neutral-700">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Fix It */}
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
              How to Do It Differently
            </motion.h2>
            <div className="space-y-4">
              {fixIt.map((item, i) => (
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
              I&apos;ve Made These Mistakes
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-4 text-neutral-700">
              <p>
                I&apos;m Louie Bernstein — I have 50 years in business experience, including 22 as
                a bootstrapped founder. My Fractional Sales Leadership business has been helping
                founders since 2017.
              </p>
              <p>
                I&apos;ve made most of these mistakes myself. I hired the impressive resume that
                couldn&apos;t sell without support. I brought on reps before the system was built.
                I gave feedback once a quarter and wondered why nothing changed. That experience —
                plus 9 years of watching founders make the same mistakes — is what I bring to this
                work.
              </p>
              <p>
                The difference between a sales hire that works and one that doesn&apos;t is almost
                never the rep. It&apos;s the infrastructure around them.
              </p>
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
                href="/why-sales-reps-fail-in-startups"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Why individual sales reps fail in startups →
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
              Ready to Get the Next Hire Right?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at your current situation —
              whether you&apos;re pre-hire, mid-hire, or recovering from a bad one — and figure
              out exactly what needs to happen next.
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
