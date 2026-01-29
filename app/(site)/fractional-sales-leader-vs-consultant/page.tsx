"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { Check, X, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/**
 * CMS EDITABLE CONTENT
 * 
 * To make this page editable in Supabase CMS:
 * 1. Go to Supabase Dashboard > Table Editor > site_content
 * 2. Add a new row with:
 *    - section: 'fslVsConsultantPage'
 *    - content: { JSON object matching the structure in lib/cms.ts defaults.fslVsConsultantPage }
 * 
 * All content on this page can be edited via CMS:
 * - Hero section (headline, description, CTAs)
 * - Introduction text
 * - Comparison points (all 14 categories)
 * - Summary cards (FSL and Consultant)
 * - Final CTA section
 * 
 * Default values are defined in lib/cms.ts under fslVsConsultantPage
 */

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

// Stagger animation variants for premium feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FractionalSalesLeaderVsConsultantPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // CMS data state - will be populated from Supabase if available
  const [cmsData, setCmsData] = useState<typeof comparisonPoints | null>(null);
  
  useEffect(() => {
    // Fetch CMS data if available
    fetch('/api/cms/fsl-vs-consultant')
      .then(res => res.json())
      .then(data => {
        if (data && data.comparison?.points) {
          setCmsData(data.comparison.points);
        }
      })
      .catch(err => console.warn('CMS data not available, using defaults:', err));
  }, []);
  
  // Use CMS data if available, otherwise use hardcoded defaults
  const comparisonData = cmsData || comparisonPoints;

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
        <section ref={heroRef} className="relative w-full overflow-hidden">
          <BackgroundCells className="bg-slate-950">
            <div className="text-center px-6 py-20 md:py-32">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-600/50 bg-neutral-900/50 backdrop-blur-sm px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-white">
                      Making the Right Choice
                    </span>
                    <span className="text-neutral-400">|</span>
                    <span className="text-sm text-neutral-300">
                      Sales Leadership Guide
                    </span>
                  </div>
                </motion.div>

                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl font-medium text-white md:text-5xl lg:text-6xl xl:text-7xl tracking-tight"
                >
                  <span className="inline-block">
                    {"Fractional Sales Leader".split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        variants={wordVariants}
                        className="inline-block mr-2"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                  <motion.span 
                    variants={itemVariants}
                    className="block mt-2 bg-gradient-to-r from-[#0966c2] via-[#0a7dd4] to-[#0966c2] bg-clip-text text-transparent"
                  >
                    vs Consultant
                  </motion.span>
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="mx-auto max-w-3xl text-lg text-neutral-300 md:text-xl lg:text-2xl leading-relaxed"
                >
                  Understanding the key differences can make or break your sales
                  growth strategy
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="#comparison"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector("#comparison")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="group relative inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-950 transition-all duration-300 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/20 md:px-10 md:py-4 md:text-lg overflow-hidden"
                    >
                      <span className="relative z-10">See the Differences</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="https://calendly.com/louiebernstein/30minutes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center rounded-lg border-2 border-[#0966c2] bg-[#0966c2] px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:border-[#0855a3] hover:bg-[#0855a3] hover:shadow-xl hover:shadow-[#0966c2]/30 md:px-10 md:py-4 md:text-lg overflow-hidden"
                    >
                      <span className="relative z-10">Schedule a Discussion</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#0855a3] to-[#0966c2] opacity-0 group-hover:opacity-100"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Hero Image with Parallax */}
            <motion.div 
              style={{ y, opacity }}
              className="mt-4 md:mt-6 px-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-5xl"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <motion.img
                    src="/images/fractional-sales-leader-hero.png"
                    alt="Professional sales leadership team collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                  {/* Fallback gradient placeholder */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-[#0966c2]/20 via-transparent to-slate-800/40 flex items-center justify-center">
                    <div className="text-center px-8">
                      <p className="text-white/60 text-sm">Add hero image here</p>
                      <p className="text-white/40 text-xs mt-2">Recommended: Professional team/leadership image</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </BackgroundCells>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
                These distinctions are based on common practices in business
                development, sales strategy, and organizational consulting. Note
                that these roles can sometimes overlap or vary by industry, but
                the core differences highlight their{" "}
                <strong className="text-neutral-900 font-semibold">
                  scope, involvement, and impact
                </strong>
                .
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl tracking-tight">
                The Critical Differences
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600"
              >
                A side-by-side comparison of what you actually get
              </motion.p>
            </motion.div>

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
              {comparisonData.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: index * 0.03,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group"
                >
                  {/* Mobile Card */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="md:hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-sm font-semibold text-[#0966c2] mb-4">
                      {point.category}
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.03 + 0.2, type: "spring" }}
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
                        >
                          <Check className="w-5 h-5 text-green-600" />
                        </motion.div>
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
                  </motion.div>

                  {/* Desktop Row */}
                  <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-2xl bg-neutral-50 flex items-center border border-neutral-100 transition-all duration-300"
                    >
                      <span className="font-bold text-neutral-900">
                        {point.category}
                      </span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 group-hover:border-green-400 group-hover:shadow-xl group-hover:shadow-green-500/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <motion.div 
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.03 + 0.2, type: "spring" }}
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
                        >
                          <Check className="w-5 h-5 text-white" />
                        </motion.div>
                        <p className="text-neutral-800 leading-relaxed">
                          {point.fsl}
                        </p>
                      </div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 group-hover:border-neutral-300 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                          <X className="w-5 h-5 text-neutral-400" />
                        </div>
                        <p className="text-neutral-500 leading-relaxed">
                          {point.consultant}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl tracking-tight">
                The Bottom Line
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Fractional Sales Leader Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  hover: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0966c2] to-[#0855a3] p-8 md:p-10 text-white shadow-2xl cursor-pointer group"
              >
                <motion.div 
                  className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 mb-6"
                  >
                    <span className="text-sm font-semibold">Recommended</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Hire a Fractional Sales Leader
                  </h3>
                  <p className="mt-4 text-lg text-blue-100 leading-relaxed">
                    If you need someone to{" "}
                    <strong className="text-white">run sales</strong> while you
                    scale or search for a full-time executive.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Embedded leadership", "Accountable for results", "Builds systems that scale"].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                        >
                          <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                        </motion.div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="https://calendly.com/louiebernstein/30minutes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[#0966c2] font-semibold transition-all hover:shadow-xl hover:shadow-white/20 group-hover:bg-blue-50"
                    >
                      Talk to a Fractional Sales Leader
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Consultant Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  hover: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative overflow-hidden rounded-3xl bg-white border-2 border-neutral-200 p-8 md:p-10 shadow-lg group"
              >
                <motion.div 
                  className="absolute top-0 right-0 w-64 h-64 bg-neutral-100 rounded-full -translate-y-1/2 translate-x-1/2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10">
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
                    {["External perspective", "Project-based engagement", "Strategic advice"].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-neutral-400" />
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 text-white md:py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0966c2]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0966c2]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              Ready to Accelerate Your Sales?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-xl text-neutral-200"
            >
              Let&apos;s discuss whether a Fractional Sales Leader is the right
              fit for your business.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="https://calendly.com/louiebernstein/30minutes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-lg font-semibold text-neutral-900 transition-all duration-300 hover:bg-neutral-100 hover:shadow-2xl hover:shadow-white/20 overflow-hidden"
                >
                  <span className="relative z-10">Schedule a Free Consultation</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-white opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/fractional-sales-leader"
                  className="group relative inline-flex items-center justify-center rounded-lg border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Learn About FSL</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
