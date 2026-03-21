"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, AlertCircle, AlertTriangle } from "lucide-react";
import { useCmsSection } from "@/lib/useCmsSection";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const CMS_SECTION = "seoHireFirstSalesRep";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const beforeYouHire = [
  {
    title: "A documented Sales Playbook",
    detail:
      "Your ICP, discovery questions, demo flow, objection handling, pricing conversation, and follow-up cadence. If this lives only in your head, your first rep will invent their own version of your sales process — which may not work. Write it down first.",
  },
  {
    title: "A defined ICP",
    detail:
      "Not 'companies who might benefit.' Specific: industry, company size, title, pain point, trigger events that make them ready to buy now. Your rep can only target who you define.",
  },
  {
    title: "Action-based pipeline stages",
    detail:
      "Replace 'Interested' and 'Proposal Sent' with stages that reflect what the prospect has done. 'Discovery call completed. Next step agreed.' This gives your rep a real pipeline they can manage — not a wishful thinking list.",
  },
  {
    title: "A 30-60-90 onboarding plan",
    detail:
      "Day 1–30: product immersion, playbook study, shadowing. Day 30–60: managed demos with feedback. Day 60–90: independent deal ownership with weekly 1:1 coaching. Set specific milestones at each phase.",
  },
  {
    title: "A Position Contract",
    detail:
      "A written document that defines the role, the expected activities, the KPIs, and what success looks like at 30, 60, and 90 days. No ambiguity. Your rep knows exactly what they're accountable for before they start.",
  },
];

const redFlags = [
  "They've only ever sold for household-name companies with strong inbound demand",
  "They can't describe how they build pipeline from cold — only how they manage inbound leads",
  "Their best stories are about closing, not prospecting or building relationships",
  "They expect SDR support, marketing leads, or a named account list to work from",
  "They've never sold something no one has heard of",
  "They want a high base with low variable — startup reps should want upside",
];

const greenFlags = [
  "They've built pipeline from cold in a company no one had heard of",
  "They can articulate exactly why deals they lost were lost — not just the wins",
  "They ask great questions about your ICP, your process, and how you currently win",
  "They have strong opinions about what a Sales Playbook should include",
  "They talk about their buyers as real people — not 'prospects' or 'targets'",
  "They've been coached and improved — they can name specific things they changed",
];

const defaultFaqs = [
  {
    q: "When is the right time to hire my first salesperson?",
    a: "When you've closed 10–20 customers yourself and you understand the repeatable pattern. That means you know who buys (ICP), why they buy (pain + trigger), and how the conversation goes from first contact to close. If you haven't closed those deals yourself, you don't have enough pattern to hire into. You'll just be funding someone else's guessing.",
  },
  {
    q: "Should I hire an SDR, an AE, or a full-cycle rep?",
    a: "For your first hire, almost always full-cycle. An SDR alone generates leads but can't close them. An AE alone can close but needs leads fed to them. A full-cycle rep prospects, qualifies, demos, and closes. At your stage, you need someone who can own the whole motion. Specialization comes later.",
  },
  {
    q: "What should I pay my first sales rep?",
    a: "Plan for 50/50 base/variable. For B2B companies at the $1M–$5M ARR stage, that typically means $60k–$80k base with $60k–$80k OTE upside for a total of $120k–$160k OTE. The ratio matters: too much base removes the performance incentive. Too little base attracts reps who need quick wins over long sales cycles. Get the ratio right.",
  },
  {
    q: "How do I know if my first rep is working out?",
    a: "Look at activity KPIs, not just closed revenue. In the first 90 days, revenue is a lagging indicator. What you should see: are they running real discovery calls? Are they building their own pipeline? Are they improving their demos based on feedback? Activity plus progression in the playbook tells you more in 30 days than revenue will in 90.",
  },
  {
    q: "Should I hire one rep or two at the same time?",
    a: "Two. With one rep, you can't tell if results are because of the system or because of the individual. With two, you have comparison data. If one is dramatically outperforming, you learn from them. If both are struggling, the system needs fixing. Two reps also create peer accountability and make each other better. The cost difference is real but the learning is worth it.",
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
      "@type": "Article",
      headline: "How to Hire Your First Sales Rep: What to Build, What to Look For, and What to Avoid",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/how-to-hire-first-sales-rep",
      description:
        "A practical guide to hiring your first salesperson — what to build before you hire, what to look for, red flags to avoid, and how to onboard for success.",
    },
  ],
};

export default function HireFirstSalesRepPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION);
  const faqs = cmsfaqs(5, defaultFaqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#4338ca" fillColor="rgba(67,56,202,0.3)" className="bg-slate-950">
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
              First Sales Hire Guide
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v("heroLine1", "How to Hire Your")}
              <span className="block text-[#0966c2]">{v("heroAccent", "First Sales Rep")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v("heroDescription", "Most founders hire their first salesperson too early, into a company with no system, and then wonder why it didn't work. Here's what to build before you hire, what to look for, and how to set your first rep up to succeed.")}
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
                href="/why-sales-reps-fail-in-startups"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Why startup sales reps fail →
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
                  <p className="font-bold text-amber-900">Build the system before you hire.</p>
                  <p className="mt-1 text-amber-800">
                    The most expensive mistake founders make is hiring a salesperson before they
                    have a Sales Playbook, a defined ICP, and a structured pipeline. Your first rep
                    will figure out their own way to sell — which may not match what actually works.
                    The infrastructure comes first. Always.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Before You Hire */}
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
              Build These 5 Things Before You Hire
            </motion.h2>
            <div className="space-y-4">
              {beforeYouHire.map((item, i) => (
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

      {/* Red Flags / Green Flags */}
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
              className="mb-10 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              What to Look For in Candidates
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                variants={itemVariants}
                className="rounded-xl border-2 border-red-200 bg-red-50 p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-red-700">Red Flags</h3>
                <ul className="space-y-3">
                  {redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      {flag}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="rounded-xl border-2 border-green-200 bg-green-50 p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-green-700">Green Flags</h3>
                <ul className="space-y-3">
                  {greenFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {flag}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
                href="/how-to-build-a-sales-process-after-1m-arr"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Build the sales process before your first hire →
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
              {v("ctaHeadline", "Ready to Hire Your First Rep the Right Way?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v("ctaDescription", "Let's spend 30 minutes together. We'll look at where you are now, what needs to be built before you hire, and what the right first hire profile looks like for your specific business.")}
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
