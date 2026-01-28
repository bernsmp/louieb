"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { Check, X, ArrowRight } from "lucide-react";

// Comparison data
const comparisonPoints = [
  {
    category: "Discovery",
    fsl: "Starts with a Sales Audit to understand the details",
    consultant: "Speaks mostly with the CEO",
    fslWins: true,
  },
  {
    category: "Process Building",
    fsl: "Builds Sales Processes and Systems",
    consultant: "Offers advice",
    fslWins: true,
  },
  {
    category: "Team Management",
    fsl: "Manages the Sales Team",
    consultant: "Rarely manages teams",
    fslWins: true,
  },
  {
    category: "Engagement",
    fsl: "Embedded in the business",
    consultant: "Project based",
    fslWins: true,
  },
  {
    category: "Pipeline Assessment",
    fsl: "Creates a sales pipeline based on reality",
    consultant: "Takes the pipeline at face value",
    fslWins: true,
  },
  {
    category: "Leadership Role",
    fsl: "Acts as part of leadership",
    consultant: "Advice from the outside",
    fslWins: true,
  },
  {
    category: "Accountability",
    fsl: "Accountable for results",
    consultant: "Only accountable for the quality of their advice",
    fslWins: true,
  },
  {
    category: "Hiring Support",
    fsl: "Helps in interviewing and hiring the sales team",
    consultant: "Very rarely interviews any salespeople",
    fslWins: true,
  },
  {
    category: "Approach",
    fsl: "Balances strategy with operational tactics",
    consultant: "More strategy providing one-off expertise",
    fslWins: true,
  },
  {
    category: "Involvement",
    fsl: "Front line activities with the salespeople",
    consultant: "Hands off",
    fslWins: true,
  },
  {
    category: "Metrics",
    fsl: "Develops relevant KPIs and metrics",
    consultant: "Gives advice on what other companies do",
    fslWins: true,
  },
  {
    category: "Daily Operations",
    fsl: "Implements a daily sales cadence",
    consultant: "Does not get that granular. More high level",
    fslWins: true,
  },
  {
    category: "Tools & Technology",
    fsl: "Familiar with most CRMs, sales tools including AI",
    consultant: "Book knowledge",
    fslWins: true,
  },
  {
    category: "Growth Systems",
    fsl: "Builds the Sales Playbook for consistent growth",
    consultant: "Uses existing company knowledge they uncover",
    fslWins: true,
  },
];

export default function FractionalSalesLeaderVsConsultantPage() {
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Fractional Sales Leader vs Consultant: Key Differences Explained",
            description:
              "Understand the critical differences between hiring a Fractional Sales Leader and a Consultant for your business growth.",
            author: {
              "@type": "Person",
              name: "Louie Bernstein",
              url: "https://louiebernstein.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Louie Bernstein",
              url: "https://louiebernstein.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://louiebernstein.com/fractional-sales-leader-vs-consultant",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the main difference between a Fractional Sales Leader and a Consultant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Fractional Sales Leader is embedded in your business, manages the sales team, and is accountable for results. A Consultant provides external advice on specific projects but typically doesn't manage teams or take ownership of outcomes.",
                },
              },
              {
                "@type": "Question",
                name: "When should I hire a Fractional Sales Leader vs a Consultant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hire a Fractional Sales Leader if you need someone to run sales while you scale or search for a full-time executive. Hire a Consultant if you need specialized insight, market validation, or a roadmap that your existing team can execute.",
                },
              },
              {
                "@type": "Question",
                name: "Is a Fractional Sales Leader accountable for sales results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, a Fractional Sales Leader is accountable for results, unlike a consultant who is only accountable for the quality of their advice.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <BackgroundCells className="bg-slate-950">
            <div className="text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-4 py-2">
                  <span className="text-sm font-semibold text-white">
                    Making the Right Choice
                  </span>
                  <span className="text-neutral-400">|</span>
                  <span className="text-sm text-neutral-300">
                    Sales Leadership Guide
                  </span>
                </div>

                <h1 className="text-4xl font-medium text-white md:text-5xl lg:text-6xl xl:text-7xl">
                  Fractional Sales Leader
                  <span className="block mt-2 text-[#0966c2]">
                    vs Consultant
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-300 md:text-xl lg:text-2xl">
                  Understanding the key differences can make or break your sales
                  growth strategy
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                  <Link
                    href="#comparison"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#comparison")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-blue-50 hover:shadow-lg md:px-10 md:py-4 md:text-lg"
                  >
                    See the Differences
                  </Link>
                  <Link
                    href="https://calendly.com/louiebernstein/30minutes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border-2 border-[#0966c2] bg-[#0966c2] px-8 py-3 text-base font-semibold text-white transition-all hover:border-[#0855a3] hover:bg-[#0855a3] hover:shadow-lg md:px-10 md:py-4 md:text-lg"
                  >
                    Schedule a Discussion
                  </Link>
                </div>
              </motion.div>
            </div>
          </BackgroundCells>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
                These distinctions are based on common practices in business
                development, sales strategy, and organizational consulting. Note
                that these roles can sometimes overlap or vary by industry, but
                the core differences highlight their{" "}
                <strong className="text-neutral-900">
                  scope, involvement, and impact
                </strong>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
                The Critical Differences
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                A side-by-side comparison of what you actually get
              </p>
            </div>

            {/* Desktop Table Header */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-neutral-100">
                <h3 className="text-lg font-bold text-neutral-900">Category</h3>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0966c2] to-[#0855a3] text-white shadow-lg">
                <h3 className="text-lg font-bold">Fractional Sales Leader</h3>
                <p className="text-sm text-blue-100 mt-1">
                  Embedded Leadership
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-neutral-200/50 border border-neutral-300">
                <h3 className="text-lg font-bold text-neutral-700">
                  Consultant
                </h3>
                <p className="text-sm text-neutral-500 mt-1">External Advisor</p>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  {/* Mobile Card */}
                  <div className="md:hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm font-semibold text-[#0966c2] mb-4">
                      {point.category}
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-green-600 mb-1">
                            Fractional Sales Leader
                          </div>
                          <p className="text-neutral-900 font-medium">
                            {point.fsl}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                          <X className="w-5 h-5 text-neutral-400" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-neutral-400 mb-1">
                            Consultant
                          </div>
                          <p className="text-neutral-500">{point.consultant}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Row */}
                  <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
                    <div className="p-6 rounded-2xl bg-neutral-50 flex items-center border border-neutral-100">
                      <span className="font-bold text-neutral-900">
                        {point.category}
                      </span>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 group-hover:border-green-400 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-neutral-800 leading-relaxed">
                          {point.fsl}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 group-hover:border-neutral-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                          <X className="w-5 h-5 text-neutral-400" />
                        </div>
                        <p className="text-neutral-500 leading-relaxed">
                          {point.consultant}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
                The Bottom Line
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Fractional Sales Leader Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0966c2] to-[#0855a3] p-8 md:p-10 text-white shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 mb-6">
                    <span className="text-sm font-semibold">Recommended</span>
                  </div>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Hire a Fractional Sales Leader
                  </h3>
                  <p className="mt-4 text-lg text-blue-100 leading-relaxed">
                    If you need someone to{" "}
                    <strong className="text-white">run sales</strong> while you
                    scale or search for a full-time executive.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>Embedded leadership</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>Accountable for results</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>Builds systems that scale</span>
                    </li>
                  </ul>
                  <Link
                    href="https://calendly.com/louiebernstein/30minutes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[#0966c2] font-semibold transition-all hover:shadow-lg"
                  >
                    Talk to a Fractional Sales Leader
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Consultant Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl bg-white border-2 border-neutral-200 p-8 md:p-10 shadow-lg"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-100 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 mb-6">
                    <span className="text-sm font-semibold text-neutral-600">
                      Alternative
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                    Hire a Consultant
                  </h3>
                  <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                    If you need specialized insight, market validation, or a
                    roadmap that your{" "}
                    <strong className="text-neutral-900">
                      existing team can execute
                    </strong>
                    .
                  </p>
                  <ul className="mt-6 space-y-3 text-neutral-600">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      </div>
                      <span>External perspective</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      </div>
                      <span>Project-based engagement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      </div>
                      <span>Strategic advice</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 text-white md:py-24">
          <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to Accelerate Your Sales?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-200">
              Let&apos;s discuss whether a Fractional Sales Leader is the right
              fit for your business.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://calendly.com/louiebernstein/30minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-neutral-900 transition-all hover:bg-neutral-100 hover:shadow-xl"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/fractional-sales-leader"
                className="rounded-lg border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-neutral-900"
              >
                Learn About FSL
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
