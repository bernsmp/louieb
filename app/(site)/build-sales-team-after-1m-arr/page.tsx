"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, AlertTriangle, Users } from "lucide-react";
import { useCmsSection } from "@/lib/useCmsSection";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const CMS_SECTION = "seoBuildSalesTeam1mArr";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const commonMistakes = [
  {
    title: "Hiring before the system is built",
    detail:
      "You hit $1M mostly on founder energy and relationships. That's not a repeatable system — that's you. Your first sales hire will fail if there's no playbook, no defined ICP, no structured pipeline, and no onboarding plan. They'll invent their own version of your sales process, which won't work.",
  },
  {
    title: "Hiring too senior too fast",
    detail:
      "A VP of Sales at $1M ARR is almost always the wrong move. You don't have enough revenue to justify the cost, and a VP needs a team to manage — not a blank slate to build from scratch. Hire a strong full-cycle rep first. Build the system. Then hire management.",
  },
  {
    title: "Copying enterprise sales models",
    detail:
      "SDR/AE splits, marketing automation, complex qualification frameworks — these are for $10M+ companies with full teams. At $1M ARR, you need one or two full-cycle reps who can prospect, qualify, demo, and close. Complexity kills velocity at your stage.",
  },
  {
    title: "Transitioning founder-led sales overnight",
    detail:
      "Handing off your best relationships to a new rep on day one is how you lose accounts. Transition gradually: rep shadows you, then you shadow rep, then rep runs it solo with you available. Give the buyer time to trust the new person.",
  },
];

const buildFirst = [
  {
    title: "A written Sales Playbook",
    detail:
      "Your ICP, discovery questions, demo flow, objection handling, pricing conversation, and follow-up cadence. If this lives in your head, your first rep will invent their own version — which may not work.",
  },
  {
    title: "Action-based pipeline stages",
    detail:
      "Every stage should reflect something the prospect has done, not something you hope will happen. 'Discovery call completed, next step agreed' is a real stage. 'Interested' is not.",
  },
  {
    title: "A defined ICP",
    detail:
      "Not 'anyone who could benefit.' Specific industry, company size, title, pain point, and trigger events that make a buyer ready now. Your rep can only target who you define.",
  },
  {
    title: "A 30-60-90 onboarding plan",
    detail:
      "Day 1–30: product immersion, playbook study, shadowing. Day 30–60: managed demos with feedback. Day 60–90: independent deal ownership with weekly 1:1 coaching.",
  },
  {
    title: "A Position Contract",
    detail:
      "A written document defining the role, expected activities, KPIs, and what success looks like at 30, 60, and 90 days. Your rep should know exactly what they're accountable for before they start.",
  },
];

const faqs = [
  {
    q: "When should I start building a sales team after hitting $1M ARR?",
    a: "When you've closed enough deals yourself to know the repeatable pattern. You need to understand your ICP, why buyers say yes, what the typical sales cycle looks like, and how to handle the 5–6 most common objections. If you haven't done that work yet, you're not ready to hand off selling — you'll just be funding someone else's guessing.",
  },
  {
    q: "Who should my first sales hire be?",
    a: "Almost always a full-cycle rep — someone who can prospect, qualify, demo, and close. Not an SDR (they generate leads but can't close). Not a VP of Sales (too senior, needs a team to manage). A full-cycle rep who has sold something no one had heard of before, built their own pipeline from cold, and can describe exactly why they've lost deals — not just the wins.",
  },
  {
    q: "How do I transition from founder-led to team-led sales without losing momentum?",
    a: "Gradually. Start by documenting everything you do: your discovery questions, your demo flow, your objection responses. Then shadow your first rep on calls and give them feedback. Let them run calls with you present. Then let them run calls solo while you debrief after. Don't hand off your best relationships until the rep has earned the buyer's trust. The transition takes 3–6 months when done right.",
  },
  {
    q: "How should I structure comp for my first sales rep?",
    a: "50/50 base-to-variable is the right ratio for a startup sales rep. Too much base removes the performance incentive. Too little base attracts the wrong people or forces short-termism. For B2B at $1M–$3M ARR, that typically means $60k–$80k base with $60k–$80k OTE upside. The specific number depends on your deal size and sales cycle.",
  },
  {
    q: "How do I know if it's the rep failing or my system failing?",
    a: "Look at activity data, not just revenue. Is the rep running real discovery calls or just demos? Are they building pipeline from cold or only working inbound? Are they following the playbook? If activity is strong and results are weak, the system needs fixing. If activity is weak, the rep needs coaching — or replacement. Don't confuse the two.",
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
      headline: "How to Build a Sales Team After $1M ARR: What to Build First, Who to Hire, and How to Transition",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/build-sales-team-after-1m-arr",
      description:
        "A practical guide to building a sales team after hitting $1M ARR — the mistakes to avoid, what to build before you hire, who your first rep should be, and how to transition from founder-led sales.",
    },
  ],
};

export default function BuildSalesTeamAfter1mArrPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const displayFaqs = cmsfaqs(5, faqs)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#0ea5e9" fillColor="rgba(14,165,233,0.3)" className="bg-slate-950">
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
              Post $1M ARR Playbook
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v("heroLine1", "How to Build a Sales Team")}
              <span className="block text-[#0966c2]">{v("heroAccent", "After $1M ARR")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v("heroDescription", "Hitting $1M is proof of concept. Building a team to get to $5M is a completely different challenge \u2014 and most founders approach it wrong. Here\u2019s what to build first, who to hire, and how to make the transition without losing momentum.")}
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

      {/* Common Mistakes */}
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
              The Mistakes Most Founders Make
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 max-w-2xl text-lg text-neutral-600">
              I&apos;ve watched founders make the same four mistakes when transitioning to a sales
              team. They&apos;re expensive and avoidable.
            </motion.p>
            <div className="space-y-4">
              {commonMistakes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-red-100 bg-red-50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
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

      {/* Build First */}
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
              Build These 5 Things Before You Hire
            </motion.h2>
            <div className="space-y-4">
              {buildFirst.map((item, i) => (
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
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-[#0966c2]" />
              <h2 className="font-serif text-2xl font-bold text-neutral-900">
                I&apos;ve Built This Transition Before
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4 text-neutral-700">
              <p>
                {v("aboutBio1", "I\u2019m Louie Bernstein \u2014 I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
              </p>
              <p>
                {v("aboutBio2", "I made every mistake on this list in my own businesses. I hired too fast. I hired too senior. I handed off relationships before the rep was ready. I watched good people fail because the system wasn\u2019t there to support them. That experience \u2014 plus 9 years of helping other founders \u2014 is what I bring to this work.")}
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
              {displayFaqs.map((faq, i) => (
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
                href="/founder-led-sales-not-scaling"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Is your founder-led sales model not scaling? →
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
              {v("ctaHeadline", "Ready to Build Your Sales Team the Right Way?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v("ctaDescription", "Let\u2019s spend 30 minutes together. We\u2019ll look at where your sales system is today, what needs to be built before you hire, and what the right first hire looks like for your business.")}
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
