"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, AlertCircle, TrendingUp, Users, FileText, Target } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";
const CMS_SECTION = "seoFractionalCRO";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const problems = [
  "You're still closing most deals yourself — and your company can't grow past you",
  "You've hired salespeople but they're not hitting numbers",
  "You have no documented sales process — every rep does it differently",
  "Your pipeline is built on optimism, not data",
  "You know you need sales leadership, but a VP of Sales costs $400k+ all-in",
];

const deliverables = [
  {
    icon: FileText,
    title: "Sales Audit",
    desc: "We start by understanding what's actually happening in your sales motion — not what you think is happening. Deep discovery before any recommendations.",
  },
  {
    icon: Target,
    title: "Sales Playbook",
    desc: "I document your best sales practices into a repeatable system. Scripts, objection handling, pipeline stages, ICP — all in one place every rep can follow.",
  },
  {
    icon: Users,
    title: "Team Building & Management",
    desc: "I help you hire the right reps, onboard them fast, run pipeline reviews, and hold the team accountable so you don't have to.",
  },
  {
    icon: TrendingUp,
    title: "Predictable Pipeline",
    desc: "Replace gut-feel forecasting with action-based pipeline stages that actually predict revenue — and give you back your calendar.",
  },
];

const defaultFaqs = [
  {
    q: "What does a Fractional CRO actually do?",
    a: "A Fractional CRO (Chief Revenue Officer) provides embedded sales leadership — typically 2–3 days per week — without the full-time cost. I run your pipeline reviews, manage your sales team, build your playbook, and own the sales system so you can focus on the business. Think of it as a VP of Sales who is actually in the business, not just advising from the outside.",
  },
  {
    q: "How is a Fractional CRO different from a sales consultant?",
    a: "A consultant tells you what to do. A Fractional CRO does it with you. I am embedded in your business — running meetings, managing reps, building processes, and holding the team accountable. I start with a Sales Audit, not a PowerPoint deck. See the full comparison at our page on Fractional Sales Leader vs. Consultant.",
  },
  {
    q: "How much does a Fractional CRO cost?",
    a: "Typically $6,000–$14,000 per month depending on the scope and hours needed. Compare that to a full-time VP of Sales at $200k–$300k base plus equity and benefits — which lands at $400k–$500k all-in per year. A Fractional CRO delivers the same strategic leadership at 60–80% less cost, with no long-term commitment.",
  },
  {
    q: "Is this right for a company at $1M–$10M ARR?",
    a: "Yes — that's exactly the sweet spot. At $1M ARR, you've proven the product. The next challenge is building a sales system that scales without you. Most founders in this range are doing founder-led sales and hitting a ceiling. A Fractional CRO helps you break through that ceiling without the risk of a $400k full-time hire.",
  },
  {
    q: "How long does an engagement typically last?",
    a: "Most engagements run 6–12 months. In the first 30 days, we do a Sales Audit. By month 3, you have a Sales Playbook and the team is operating from a system. By month 6–12, you have a self-running sales machine — and you decide if you want to bring in a full-time leader or continue with fractional.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: defaultFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Service",
      name: "Fractional CRO for $1M–$10M Founders",
      provider: {
        "@type": "Person",
        name: "Louie Bernstein",
        url: "https://louiebernstein.com",
        jobTitle: "Fractional Sales Leader",
      },
      description:
        "Embedded sales leadership for founders with $1M–$10M ARR. Includes Sales Audit, Sales Playbook, team management, and pipeline systems.",
      areaServed: "United States",
      priceRange: "$6,000–$14,000/month",
    },
  ],
};

export default function FractionalCROPage() {
  const [c, setC] = useState<Record<string, string>>({});
  useEffect(() => {
    fetch(`/api/cms/section/${CMS_SECTION}`)
      .then((r) => r.json())
      .then((d) => { if (d?.content) setC(d.content as Record<string, string>); })
      .catch(() => {});
  }, []);
  const v = (key: string, def: string) => c[key] || def;
  const faqs = (() => {
    const list: Array<{ q: string; a: string }> = [];
    for (let i = 1; i <= 5; i++) {
      const q = c[`faq${i}Question`]; const a = c[`faq${i}Answer`];
      if (q && a) list.push({ q, a });
    }
    return list.length > 0 ? list : defaultFaqs;
  })();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground pattern="dot-grid" className="bg-slate-950">
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
              Fractional CRO for $1M–$10M Founders
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v("heroLine1", "You Built a $1M Business")}
              <span className="block text-[#0966c2]">{v("heroAccent", "Closing Every Deal Yourself.")}</span>
              {v("heroLine3", "That\u2019s the Problem.")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v("heroDescription", "A Fractional CRO gives $1M\u201310M founders the revenue leadership they need to escape founder-led sales \u2014 without the $400,000 full-time hire. Build a real sales system. Build a team that sells without you.")}
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
                href="/fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Learn about Fractional Sales Leadership →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Problem */}
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
              Founder-Led Sales Has a Ceiling.
              <span className="block text-[#0966c2]">You&apos;re Probably Standing on It.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              Most founders with $1M–$10M ARR are doing the same thing: closing deals themselves,
              struggling to scale the sales team, and burning out in the process. Here&apos;s what
              that looks like:
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-4">
              {problems.map((problem, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-neutral-800">{problem}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={itemVariants} className="mt-8 text-lg text-neutral-600">
              The issue isn&apos;t your product. It isn&apos;t the market. It&apos;s that you&apos;re
              trying to scale a business that only runs when you&apos;re in the room. That&apos;s
              what a{" "}
              <strong>Fractional CRO for $1M–$10M founders</strong> is designed to fix.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What I Deliver */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What a Fractional CRO Actually Delivers
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600"
            >
              Not advice. Not a deck. Embedded revenue leadership that builds your sales system from
              the inside.
            </motion.p>
            <div className="grid gap-8 md:grid-cols-2">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0966c2]/10">
                    <item.icon className="h-6 w-6 text-[#0966c2]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Economics */}
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
              The Math Is Simple
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-lg text-neutral-600">
              Full-time VP of Sales: $200k–$300k base, plus equity, benefits, and recruiting fees.
              All-in cost:{" "}
              <strong>$400,000–$500,000 per year.</strong> And that&apos;s if you hire the right
              person.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                variants={itemVariants}
                className="rounded-xl border-2 border-red-200 bg-red-50 p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-red-700">Full-Time VP of Sales</h3>
                <ul className="space-y-3">
                  {[
                    "Base salary: $200k–$300k",
                    "OTE (with commission): $400k–$500k",
                    "Benefits + equity: $50k–$100k more",
                    "Recruiting fees: $30k–$60k",
                    "6-month ramp before real impact",
                    "Wrong hire = $800k mistake",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <span className="mt-1 text-red-500">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="rounded-xl border-2 border-green-200 bg-green-50 p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-green-700">Fractional CRO</h3>
                <ul className="space-y-3">
                  {[
                    "$6,000–$14,000/month",
                    "No equity, no benefits overhead",
                    "No recruiting fees",
                    "Immediate impact — week one",
                    "No long-term commitment",
                    "60–80% less than full-time",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.p variants={itemVariants} className="mt-6 text-center text-neutral-500">
              Want to see the full pricing breakdown?{" "}
              <Link
                href="/fractional-cro-pricing"
                className="font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                See Fractional CRO Pricing →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About */}
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
            <motion.div variants={itemVariants} className="space-y-4 text-lg text-neutral-600">
              <p>
                I&apos;m Louie Bernstein — I have 50 years in business experience, including 22 as
                a bootstrapped founder. My Fractional Sales Leadership business has been helping
                founders since 2017.
              </p>
              <p>
                Since 2016, I&apos;ve been working as a Fractional Sales Executive — helping
                founders with $1M–$10M ARR build the sales systems, playbooks, and teams they need
                to scale without burning out. I&apos;ve seen every sales situation imaginable.
              </p>
              <p>
                I don&apos;t consult. I get embedded. I run Sales Audits, build Sales Playbooks,
                manage teams, and build the pipeline architecture that lets you step out of the
                day-to-day close.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 border-l-4 border-[#0966c2] pl-6">
              <p className="text-lg italic text-neutral-600">
                &ldquo;When Louie came on board he wrote and organized our outbound scripts and
                emails. We now had everyone working off the same playbook, and it gave us
                consistency. Results were much easier to measure. Onboarding, and getting a new BDR
                productive, happen quicker too.&rdquo;
              </p>
              <p className="mt-2 font-semibold text-neutral-700">
                — Neal Reynolds, CEO, BankMarketingCenter.com
              </p>
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
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
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-[#0966c2]/20 bg-blue-50 p-6"
              >
                <p className="mb-1 text-sm font-semibold text-[#0966c2]">Before You Hire</p>
                <p className="mb-3 text-neutral-700">
                  There&apos;s one question you must ask any Fractional CRO candidate before you hire them.
                </p>
                <Link
                  href="/videos/ask-this-before-hiring-a-fractional-sales-leader"
                  className="font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
                >
                  Watch: Ask This Before Hiring A Fractional Sales Leader →
                </Link>
              </motion.div>
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
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#0966c2]/10 blur-3xl" />
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
              Ready to Stop Being Your Company&apos;s Only Salesperson?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at where your sales are today,
              where you want to go, and whether a Fractional CRO is the right next move.
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
              No pitch. No pressure. Just a real conversation about your sales situation.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
