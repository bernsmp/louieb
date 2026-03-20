"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const causes = [
  {
    title: "You never built a repeatable prospecting motion",
    detail:
      "Most early-stage companies close their first customers through network and referrals. That's not a pipeline. That's luck and relationships. When the warm network runs out, there's nothing behind it. A real pipeline requires a defined prospecting process that runs whether or not the founder is making calls.",
  },
  {
    title: "No one owns pipeline generation",
    detail:
      "When pipeline is everyone's job, it's no one's job. Without a clearly assigned owner — with specific activity KPIs — prospecting gets deprioritized the moment things get busy. Then the pipeline runs dry 60–90 days later, and everyone is surprised.",
  },
  {
    title: "The pipeline was always a fantasy",
    detail:
      "Many companies have 'deals in the pipeline' that are really just conversations. No commitment. No next step. No indication the prospect is actually going to buy. A pipeline full of 'maybes' looks healthy until it's all supposed to close — and it doesn't.",
  },
  {
    title: "You paused outbound when inbound was working",
    detail:
      "Inbound surges create a false sense of security. Teams stop doing outbound because there's enough coming in. Then inbound slows (seasonality, algorithm change, campaign ends) and there's nothing in the outbound pipeline because no one was building it.",
  },
];

const immediateSteps = [
  {
    step: "This week",
    title: "Audit what you actually have",
    desc: "Go through every deal in your CRM. Identify which ones have a defined next step with a specific date. Those are real pipeline. Everything else is a contact. The gap between what you thought you had and what's real is your problem statement.",
  },
  {
    step: "Week 2",
    title: "Re-engage your best existing relationships",
    desc: "Your fastest path to short-term pipeline is past customers, past prospects who went dark, and warm referral network. Before you build new outbound, make sure you've squeezed the relationships you already have. This buys you time while you build the system.",
  },
  {
    step: "Week 3–4",
    title: "Define your ICP for outbound targeting",
    desc: "Cold outbound only works when it's targeted. Who is the exact type of company that buys fastest, pays most, and churns least? Get specific: industry, size, title, trigger events. The tighter your ICP, the more effective every prospecting activity becomes.",
  },
  {
    step: "Month 2",
    title: "Build the prospecting engine",
    desc: "Sequences, scripts, LinkedIn outreach, referral asks — all built around your ICP. Assign specific activity targets (calls per day, emails per day, connections per week). Track activity, not just results. This is how you build pipeline that doesn't depend on luck.",
  },
  {
    step: "Month 2–3",
    title: "Rebuild pipeline stages around prospect actions",
    desc: "Replace vague stages ('Interested', 'Follow-up') with action-based stages tied to what the prospect has actually done. 'Discovery call completed. Next step agreed.' That's real pipeline. This gives you an honest forecast instead of wishful thinking.",
  },
];

const faqs = [
  {
    q: "How long does it take to rebuild pipeline from zero?",
    a: "If you're starting from scratch with cold outbound, expect 60–90 days before you see meaningful new pipeline with qualified buyers. That's the reality of sales cycles. The faster path in the short term is re-engaging warm relationships — past customers, dormant leads, referral sources. Both need to run simultaneously.",
  },
  {
    q: "Should I hire more salespeople to fix a pipeline problem?",
    a: "Not yet. Hiring more reps into an empty pipeline just means you have more people doing nothing — and more payroll. Fix the prospecting motion first. Once you have a repeatable system generating qualified pipeline, then scale the headcount. Hiring into a broken system makes the problem worse.",
  },
  {
    q: "What's the difference between a real pipeline and a fake one?",
    a: "A real pipeline has specific next steps with specific dates. 'We'll reconnect in Q3' is not a next step — it's a polite no. 'We're meeting Tuesday at 2pm to review the proposal' is a next step. Go through your pipeline and count only the deals with a concrete next step agreed upon by the buyer. That number is your real pipeline.",
  },
  {
    q: "How do I prevent this from happening again?",
    a: "Build a prospecting engine that runs even when sales are good. Assign activity-based KPIs to every rep for outbound activity (not just closed revenue). Run weekly pipeline reviews that force everyone to look at what's entering the top of funnel — not just what's supposed to close this month. Pipeline dries up when prospecting stops. Prospecting stops when no one is accountable for it.",
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
      headline: "No Pipeline: What to Do When Your Sales Pipeline Is Empty",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/no-pipeline-what-to-do",
      description:
        "Why sales pipelines run dry — and the immediate steps to rebuild qualified pipeline fast.",
    },
  ],
};

export default function NoPipelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#0369a1" fillColor="rgba(3,105,161,0.3)" className="bg-slate-950">
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
              Pipeline Emergency Guide
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              No Pipeline.
              <span className="block text-[#0966c2]">What to Do Right Now.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              An empty pipeline today means no revenue in 60–90 days. Here&apos;s why it happened,
              what to do this week, and how to build a prospecting engine that keeps the pipeline
              full.
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
              className="rounded-xl border border-red-200 bg-red-50 p-6"
            >
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
                <div>
                  <p className="font-bold text-red-900">The 90-day revenue cliff:</p>
                  <p className="mt-1 text-red-800">
                    Whatever you do about pipeline today won&apos;t show up in revenue for 60–90
                    days — the length of a typical sales cycle. That means if your pipeline is
                    empty right now, you need to move immediately. Every week you wait pushes the
                    revenue recovery further out.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why It Happened */}
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
              Why Your Pipeline Ran Dry
            </motion.h2>
            <div className="space-y-4">
              {causes.map((cause, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <div>
                      <h3 className="mb-2 font-bold text-neutral-900">{cause.title}</h3>
                      <p className="text-neutral-600">{cause.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Do */}
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
              What to Do — In Order
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              Here&apos;s the step-by-step approach for rebuilding pipeline from nothing:
            </motion.p>
            <div className="space-y-4">
              {immediateSteps.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-6 rounded-xl border border-neutral-200 p-6"
                >
                  <div className="shrink-0">
                    <div className="rounded-lg bg-[#0966c2]/10 px-3 py-1 text-xs font-bold text-[#0966c2] whitespace-nowrap">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <h3 className="font-bold text-neutral-900">{item.title}</h3>
                    </div>
                    <p className="mt-1 text-neutral-600">{item.desc}</p>
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
                href="/fractional-cro-for-1m-10m-founders"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                How a Fractional CRO builds pipeline systems →
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
              Let&apos;s Figure Out What&apos;s Killing Your Pipeline
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              30 minutes. We&apos;ll look at your specific situation — why pipeline dried up and
              what the fastest path to rebuilding it looks like.
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
