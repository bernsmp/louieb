"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, AlertCircle, Search, Wrench } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const diagnostics = [
  {
    question: "Do your reps have a documented Sales Playbook to sell from?",
    ifNo:
      "Then every rep is improvising. You can't coach to a standard that doesn't exist. Build the playbook before you evaluate performance.",
  },
  {
    question: "Are your pipeline stages based on prospect actions — not rep activities?",
    ifNo:
      "Then your forecast is unreliable and your coaching is reactive. You can't tell where deals are actually dying. Rebuild the pipeline first.",
  },
  {
    question: "Does each rep have activity-based KPIs (not just revenue targets)?",
    ifNo:
      "Then you're managing outcomes instead of inputs. Revenue is a lagging indicator. By the time it's low, it's already 30–60 days too late. Set leading-indicator KPIs.",
  },
  {
    question: "Are you running weekly 1:1s focused on specific deals and specific skills?",
    ifNo:
      "Then your reps are operating without coaching. Quota misses compound invisibly until they're impossible to ignore. Start structured 1:1s immediately.",
  },
  {
    question: "Is there daily or weekly sales training?",
    ifNo:
      "Then skills are atrophying. Sales is a perishable skill. Reps who don't train don't improve. 15 minutes of focused practice per day makes a measurable difference in 30 days.",
  },
];

const actions = [
  {
    timeline: "This week",
    title: "Run a Sales Audit",
    desc: "Before changing anything, understand what's actually happening. Pipeline review, call recordings, rep interviews, win/loss analysis. Build from facts, not assumptions.",
    icon: Search,
  },
  {
    timeline: "Month 1",
    title: "Build or Fix the Sales Playbook",
    desc: "Document your ICP, discovery questions, objection handling, demo flow, and pricing conversation. Give every rep the same foundation to sell from.",
    icon: Wrench,
  },
  {
    timeline: "Month 1–2",
    title: "Set Real KPIs and Run Real 1:1s",
    desc: "Activity-based KPIs for every rep. Weekly 1:1s focused on specific deals and specific coaching moments. Pipeline reviews that force honesty about what's real.",
    icon: Check,
  },
  {
    timeline: "Month 2–3",
    title: "Implement Daily Training",
    desc: "15–33 minutes every day. Role plays, objection drills, call reviews. This isn't motivational content — it's deliberate practice of the specific skills your reps need.",
    icon: AlertCircle,
  },
];

const faqs = [
  {
    q: "How do I know if my reps are the problem or the system is?",
    a: "Assume it's the system until proven otherwise. In my experience across dozens of businesses, the most common cause of quota misses is the absence of infrastructure — no Sales Playbook, no real pipeline, no training, no meaningful KPIs. Fix those first. If the same reps still can't perform after 90 days in a real system, then it's a people problem.",
  },
  {
    q: "Should I fire my underperforming reps?",
    a: "Not immediately. First, make sure they've had the tools to succeed. A rep with no Sales Playbook, no training, and no real coaching cannot be fairly evaluated against a quota. Once you've provided the system, give it 90 days. If performance doesn't move, then you have real data to make a personnel decision.",
  },
  {
    q: "How quickly can I expect to see improvement?",
    a: "Pipeline architecture and KPI changes can be implemented in 2–4 weeks and show results in the same period. A Sales Playbook takes 4–6 weeks to build properly. Daily training shows results in 30–45 days. Most well-run engagements see measurable improvement in pipeline quality and rep activity within 90 days.",
  },
  {
    q: "What's the single highest-leverage fix?",
    a: "Start with a Sales Audit to find the specific breakdown. But if I had to pick one universal lever: rebuild your pipeline stages around prospect actions, not rep activities. When you can see exactly where deals are dying — not just that they're dying — coaching and fixing becomes dramatically easier. Everything else follows.",
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
      headline: "Sales Team Not Hitting Quota: A Diagnostic and Fix Guide",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/sales-team-not-hitting-quota",
      description:
        "A practical diagnostic for when your sales team isn't hitting quota — how to identify the real cause and fix it systematically.",
    },
  ],
};

export default function SalesTeamNotHittingQuotaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop&auto=format" imageAlt="Sales team reviewing performance metrics and quota attainment" className="bg-slate-950">
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
              Quota Diagnostic
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Your Sales Team Isn&apos;t Hitting Quota.
              <span className="block text-[#0966c2]">Here&apos;s How to Diagnose It.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              Before you fire your reps or set new targets, answer five questions. The answers will
              tell you exactly what&apos;s broken — and what to fix first.
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

      {/* Diagnostic */}
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
              className="mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              The 5-Question Diagnostic
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              Answer these honestly. Every &ldquo;No&rdquo; answer is a root cause — not a symptom.
            </motion.p>
            <div className="space-y-4">
              {diagnostics.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <p className="mb-3 font-bold text-neutral-900">
                    <span className="mr-2 text-[#0966c2]">{i + 1}.</span>
                    {item.question}
                  </p>
                  <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-amber-900">
                      <span className="font-bold">If No:</span> {item.ifNo}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fix */}
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
              The Fix — In Order
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              Once you know what&apos;s broken, here&apos;s the sequence to fix it:
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {actions.map((action, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0966c2]">
                    {action.timeline}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{action.title}</h3>
                  <p className="text-sm text-neutral-600">{action.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-neutral-50 p-10 text-center"
          >
            <motion.p variants={itemVariants} className="mb-6 text-xl italic text-neutral-700">
              &ldquo;When Louie came on board he wrote and organized our outbound scripts and emails.
              We now had everyone working off the same playbook, and it gave us consistency. Results
              were much easier to measure.&rdquo;
            </motion.p>
            <motion.p variants={itemVariants} className="font-bold text-neutral-900">
              — Neal Reynolds, CEO, BankMarketingCenter.com
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
                href="/why-your-sales-team-isnt-hitting-quota"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                7 specific reasons sales teams miss quota →
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
              Let&apos;s Diagnose Your Specific Quota Problem
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              30 minutes. We&apos;ll work through the diagnostic together and identify the root
              cause — so you&apos;re fixing the right thing, not just the most obvious thing.
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
