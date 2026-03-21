"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check } from "lucide-react";
import { useCmsSection } from "@/lib/useCmsSection";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const CMS_SECTION = "seoVpVsCro";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const vpSalesRole = [
  {
    title: "Runs the sales team",
    detail:
      "The VP of Sales owns the quota, manages the reps, runs the weekly pipeline reviews, and drives daily sales execution. Their job is to take the current sales motion and make it perform.",
  },
  {
    title: "Accountable for the sales number",
    detail:
      "A VP of Sales is measured on one thing: hitting the revenue target. They own the forecast, the pipeline health, and the team's activity levels. They don't own marketing, they don't own customer success — they own sales.",
  },
  {
    title: "Hires, trains, and manages reps",
    detail:
      "Building out the sales team is a core VP of Sales responsibility. Sourcing candidates, running structured interviews, onboarding new reps, coaching in the field, managing out underperformers. People management is central to the role.",
  },
  {
    title: "Reports to the CEO or CRO",
    detail:
      "In companies that have a CRO, the VP of Sales reports to them. In companies without a CRO, they report directly to the CEO. Their scope is the sales department — not the full revenue organization.",
  },
];

const croRole = [
  {
    title: "Owns the entire revenue engine",
    detail:
      "The CRO is responsible for every function that touches revenue: sales, marketing, and customer success. They're accountable for how leads are generated, how they convert, and how customers expand and renew.",
  },
  {
    title: "Drives cross-functional alignment",
    detail:
      "The most common CRO problem is sales and marketing misalignment — different definitions of a qualified lead, different messages in market, finger-pointing when pipeline is thin. The CRO eliminates that by owning both.",
  },
  {
    title: "Sets revenue strategy",
    detail:
      "GTM motion, ICP definition, pricing strategy, market expansion, channel mix — these are CRO-level decisions. A VP of Sales executes the strategy. A CRO defines it.",
  },
  {
    title: "Board-level accountability",
    detail:
      "In funded companies, the CRO presents the full revenue picture to the board — not just sales performance, but pipeline generation, NRR, expansion revenue, churn. They're a C-suite officer with full organizational authority.",
  },
];

const whenVP = [
  "You have a sales team and need someone to manage and develop them",
  "Your sales motion is defined — you need execution, not strategy",
  "You're sub-$5M ARR and your revenue problem is sales-specific",
  "You don't yet have the org complexity that requires cross-functional leadership",
];

const whenCRO = [
  "Sales, marketing, and customer success are misaligned and nobody owns the overlap",
  "You're past $5M ARR and revenue strategy is unclear across functions",
  "You have leaders in multiple revenue functions who need an executive above them",
  "Your board expects C-suite revenue accountability",
];

const faqs = [
  {
    q: "Can the same person do both jobs?",
    a: "At early stage — yes, often. A strong VP of Sales at a $2M ARR company may be doing everything a CRO would do at a larger company. The title matters less than the scope of the role. The distinction becomes more important as you scale and the functions separate.",
  },
  {
    q: "Should I hire a VP of Sales or a CRO as my first sales leader?",
    a: "Almost always VP of Sales first. A CRO without a functional sales team to lead is just an expensive strategist. Build the sales foundation first — playbook, team, pipeline — then layer in cross-functional leadership once you have something worth coordinating.",
  },
  {
    q: "What's the salary difference?",
    a: "VP of Sales typically earns $130k–$200k base with variable, total OTE $180k–$280k. A CRO runs $200k–$350k base with total comp often exceeding $400k–$500k at growth-stage companies. Plus equity expectations are higher for CROs. The cost difference is real.",
  },
  {
    q: "Is a Fractional CRO closer to a VP of Sales or a CRO?",
    a: "Closer to a CRO in scope, but operating fractionally. A good Fractional CRO will look at your whole revenue operation — pipeline generation, sales execution, customer success if relevant — and help you build the right infrastructure. The difference is you're getting that capability at $6k–$14k/month instead of $300k+ per year.",
  },
  {
    q: "My company has both a VP of Sales and a CRO title open. Which do I fill first?",
    a: "Fill VP of Sales first. Get the sales function running and producing before you add a revenue executive to coordinate across functions. A CRO without a functioning sales organization has nothing to lead. Sequence matters.",
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
      headline: "VP of Sales vs. CRO: What's the Difference and Which One Do You Need?",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/vp-sales-vs-cro-difference",
      description:
        "A clear breakdown of the difference between a VP of Sales and a Chief Revenue Officer — what each role owns, when to hire each, and which one your company actually needs right now.",
    },
  ],
};

export default function VpSalesVsCroPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const displayFaqs = cmsfaqs(5, faqs)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#2dd4bf" fillColor="rgba(45,212,191,0.3)" className="bg-slate-950">
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
              Revenue Leadership Roles
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v("heroLine1", "VP of Sales vs. CRO:")}
              <span className="block text-[#0966c2]">{v("heroAccent", "What\u2019s the Difference?")}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v("heroDescription", "These titles get used interchangeably at startups \u2014 but they\u2019re different roles that solve different problems. Hiring the wrong one at the wrong stage is a $200k\u2013$300k mistake.")}
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
                href="/fractional-cro-for-1m-10m-founders"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What a Fractional CRO does instead →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* What a VP of Sales Does */}
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
              What a VP of Sales Owns
            </motion.h2>
            <div className="space-y-4">
              {vpSalesRole.map((item, i) => (
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

      {/* What a CRO Does */}
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
              What a CRO Owns
            </motion.h2>
            <div className="space-y-4">
              {croRole.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
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

      {/* When to Hire Each */}
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
              Which Role Do You Need?
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                variants={itemVariants}
                className="rounded-xl border-2 border-[#0966c2]/20 bg-white p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-[#0966c2]">Hire a VP of Sales when...</h3>
                <ul className="space-y-3">
                  {whenVP.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0966c2]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="rounded-xl border-2 border-emerald-200 bg-white p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-emerald-700">Hire a CRO when...</h3>
                <ul className="space-y-3">
                  {whenCRO.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-2xl font-bold text-neutral-900"
            >
              Who I Am
            </motion.h2>
            <motion.p variants={itemVariants} className="text-neutral-600">
              {v("aboutBio1", "I\u2019m Louie Bernstein \u2014 I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
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
              {v("ctaHeadline", "Not Sure Which Role You Need?")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v("ctaDescription", "Let\u2019s spend 30 minutes together. We\u2019ll look at your revenue org, your stage, and what you actually need \u2014 and I\u2019ll give you a straight answer on whether VP of Sales, CRO, or fractional leadership is the right move.")}
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
