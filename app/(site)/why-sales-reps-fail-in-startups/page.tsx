"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { AlertCircle, Check } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const reasons = [
  {
    number: "01",
    why: "You hired them into a company with no Sales Playbook",
    detail:
      "Your rep came in excited. Then they asked: 'What's our ICP?' You pointed to a deck. They asked: 'What's our discovery process?' You said, 'Figure out what works.' They asked: 'How do we handle pricing pushback?' You shrugged. Without a Sales Playbook, your rep is improvising from day one. Some figure it out. Most don't.",
    fix: "Build the Sales Playbook before you hire. Document your ICP, your discovery questions, your objection responses, your demo flow, your pricing conversation. Give your first rep a system to follow, not a blank page.",
  },
  {
    number: "02",
    why: "They came from a company where the brand did the selling",
    detail:
      "A rep who sold for Salesforce, HubSpot, or any category-leading company often had inbound demand, name recognition, and a prospect who already wanted to buy. At your startup, the rep has to create demand and credibility from scratch. That's a different skill set — and a lot of reps discover they don't have it.",
    fix: "In your hiring process, prioritize reps who have sold for companies nobody has heard of. Ask them: 'What was your prospecting motion at your last job?' Reps who've built pipeline from cold are more valuable to startups than reps who've worked well-fed inbound queues.",
  },
  {
    number: "03",
    why: "No onboarding — they were just thrown in",
    detail:
      "Most startup onboarding is a few product demos and a 'here are your targets — good luck.' Reps who've succeeded in structured environments flounder without structure. And the ones who've only ever had bad onboarding don't know what good looks like. The result: 60–90 days of subpar performance, then a conversation about whether to let them go.",
    fix: "Build a 30-60-90 day onboarding plan before the rep starts. Day 1–30: shadowing, product immersion, playbook study. Day 30–60: managed demos with feedback. Day 60–90: independent deal ownership with weekly 1:1 coaching. Set specific milestones at each phase.",
  },
  {
    number: "04",
    why: "The ICP is wrong — they're selling to the wrong people",
    detail:
      "Startups often define ICP as 'anyone who might benefit from the product.' That's not an ICP — that's wishful thinking. When the ICP is wrong or too broad, reps spend time on prospects who will never buy, can't sell to, or who churn immediately. Their numbers look bad because they're playing the wrong game.",
    fix: "Define ICP with precision: industry, company size, title, current pain, trigger events that make them ready to buy now. Then give your reps a target list built to that spec. Watch what happens to their conversion rate.",
  },
  {
    number: "05",
    why: "The quota was set based on nothing",
    detail:
      "A lot of startup quotas come from a spreadsheet model: 'We need $2M ARR this year, we have three reps, so each one needs to close $667k.' That math says nothing about whether that's achievable given the deal size, the sales cycle, and the actual market. Reps who can't hit an unrealistic quota are not underperforming — they're being set up to fail.",
    fix: "Set quotas from the bottom up. Look at average deal size, average sales cycle, and the number of qualified prospects your reps can realistically work. Build from those inputs to a quota — not from a revenue goal backward to a number that sounds good.",
  },
  {
    number: "06",
    why: "There's no training, feedback, or coaching",
    detail:
      "Sales is a skill. Skills deteriorate without practice. Yet most startup sales teams get zero structured training after onboarding. No role plays. No call reviews. No objection drills. Managers (often founders) don't have time to coach, so reps get one feedback cycle: their monthly quota number. That's not coaching — that's scorekeeping.",
    fix: "Implement 15–33 minutes of daily training. Role plays, objection practice, call reviews. Run weekly 1:1s focused on specific deals and specific skills — not status updates. This is the infrastructure that turns average reps into performers.",
  },
];

const faqs = [
  {
    q: "How long should I give a new rep before I know if they'll work out?",
    a: "90 days — but with clear milestones at 30 and 60. At day 30, they should know the product, the playbook, and have run several managed demos. At day 60, they should be running deals independently. At day 90, you should have enough activity data and early deal feedback to make a real assessment. If you have no onboarding structure, you have no basis for that assessment.",
  },
  {
    q: "Is it better to hire experienced reps or train junior ones?",
    a: "For startups, I often prefer hungry junior reps over expensive experienced ones — especially if the experienced rep comes from a large company where inbound demand did most of the work. A junior rep who's coachable and gritty, given a great Sales Playbook and structured training, often outperforms an expensive rep who's coasting on brand. But the key is the infrastructure. Without it, neither will succeed.",
  },
  {
    q: "Should I hire one rep or two at the same time?",
    a: "Two. Always two. With one rep, you can't tell if results are because of them or the system. With two, you have comparison data. If one is dramatically outperforming, you learn from them. If both are struggling, the system needs fixing. Two reps also create peer accountability and make each other better.",
  },
  {
    q: "What's the single thing that most predicts whether a sales rep will succeed?",
    a: "Coachability. More than experience, more than resume, more than past quota attainment — a rep who takes feedback, adjusts quickly, and puts in the work to improve is the rep who succeeds in a startup environment where things change fast and the playbook is still being written. Ask for specific examples of how they've changed based on feedback in previous roles.",
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
      headline: "Why Sales Reps Fail in Startups — and What to Do About It",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/why-sales-reps-fail-in-startups",
      description:
        "The 6 real reasons sales reps fail in startups — and the specific fix for each one.",
    },
  ],
};

export default function WhySalesRepsFailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground pattern="bold-grid" className="bg-slate-950">
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
              Startup Sales Reality
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Why Sales Reps Fail
              <span className="block text-[#0966c2]">in Startups</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              Most startup sales reps fail in the first 90 days. The reasons are almost never what
              founders think. Here are the 6 real causes — and the specific fix for each one.
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

      {/* Intro callout */}
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
              className="rounded-xl border border-[#0966c2]/20 bg-[#0966c2]/5 p-6"
            >
              <p className="text-lg text-neutral-700">
                <span className="font-bold text-[#0966c2]">The uncomfortable truth:</span>{" "}
                When a sales rep fails, founders usually blame the rep. In most cases, the system
                failed the rep first. No Sales Playbook. No real onboarding. No training. No
                coaching. No realistic quota. Give a good rep a bad environment — they&apos;ll
                fail. Give a mediocre rep a great system — they&apos;ll surprise you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The 6 Reasons */}
      <section className="bg-neutral-50 py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-start gap-4">
                  <span className="shrink-0 text-4xl font-black text-[#0966c2]/20">
                    {reason.number}
                  </span>
                  <h2 className="text-xl font-bold text-red-700">{reason.why}</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Why It Happens
                    </p>
                    <p className="text-neutral-600">{reason.detail}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-green-700">
                          The Fix
                        </p>
                        <p className="text-neutral-700">{reason.fix}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <motion.p variants={itemVariants} className="mt-8 text-center">
              <Link
                href="/fractional-sales-leader"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                How a Fractional Sales Leader builds the system your reps need →
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
              Let&apos;s Look at Why Your Reps Are Failing
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              30 minutes. We&apos;ll diagnose what&apos;s actually happening in your sales
              environment and identify what needs to be built before you hire again.
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
