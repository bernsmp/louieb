"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, AlertTriangle, DollarSign, Users, Target, BarChart3, Zap } from "lucide-react";
import { useCmsSection } from "@/lib/useCmsSection";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";
const CMS_SECTION = "seoSeriesAFSL";

const reasonIcons = [AlertTriangle, DollarSign, BarChart3, Users, Target, Zap];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const defaultFaqs = [
  {
    q: "What is a fractional sales leader and how does it work at Series A?",
    a: "A fractional sales leader is an experienced sales executive who embeds part-time — typically 2–3 days per week — in your business. At Series A, they build the sales system from scratch: Sales Playbook, pipeline architecture, KPIs, hiring process, and team management. They own the sales function so the founders don't have to — without the $400k–$500k full-time VP cost.",
  },
  {
    q: "Why do investors insist on fractional sales leadership after Series A?",
    a: "Smart investors at the Series A stage know that most sales failures happen because the company tried to scale a process that was never documented. A fractional sales leader builds the repeatable revenue system before hiring a full-time team. That makes the Series B diligence cleaner, the revenue more defensible, and the growth story more credible.",
  },
  {
    q: "When should a Series A company hire a fractional sales leader vs. a full-time VP?",
    a: "At Series A ($1M–$10M ARR), the fractional model is almost always the right call. You need a system built — not a leader hired. A full-time VP at this stage costs $400k+, takes 3–6 months to find, and carries massive mis-hire risk. A fractional sales leader gets in immediately, builds the system, and transitions to a full-time hire once you have the processes, the team, and the revenue ($10M–$15M ARR) to justify it.",
  },
  {
    q: "How long do Series A companies typically work with a fractional sales leader?",
    a: "Most engagements run 12–24 months. The first 90 days are focused on the Sales Audit, Playbook, and system installation. Months 3–12 shift to team management, hiring, and pipeline optimization. By 18–24 months, you'll have a documented system and a functioning team — and you'll know exactly what your full-time VP hire needs to inherit.",
  },
  {
    q: "What does a fractional sales leader cost at the Series A stage?",
    a: "Typically $8,000–$15,000 per month depending on hours and scope. That's 60–80% less than a full-time VP of Sales all-in. For most Series A companies, it's the single highest-ROI line item in the operating budget — because it builds the system that everything else scales on.",
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
      name: "Fractional Sales Leadership for Series A Companies",
      provider: {
        "@type": "Person",
        name: "Louie Bernstein",
        url: "https://louiebernstein.com",
        jobTitle: "Fractional Sales Leader",
      },
      description:
        "Embedded fractional sales leadership for Series A companies — Sales Audits, Sales Playbooks, hiring systems, pipeline architecture, and team management to build repeatable revenue before scaling.",
      areaServed: "United States",
      priceRange: "$8,000–$15,000/month",
    },
  ],
};

export default function SeriesAPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION);
  const faqs = cmsfaqs(5, defaultFaqs);

  const reasonTitles = [
    v("reason1Title", "Founder-Led Sales Doesn't Scale"),
    v("reason2Title", "You Can't Afford a Mis-Hire at This Stage"),
    v("reason3Title", "Investors Need a Repeatable Revenue Model"),
    v("reason4Title", "You Need Someone Who Can Hire and Manage"),
    v("reason5Title", "Accountability Starts Before You Scale"),
    v("reason6Title", "Speed to Repeatability Is Competitive Advantage"),
  ];
  const reasonDescs = [
    v("reason1Desc", "At Series A, the founder is still the best salesperson — and that's a liability. A fractional sales leader documents what the founder does, builds the playbook, and creates a system that works without the founder in every deal."),
    v("reason2Desc", "A full-time VP of Sales at Series A costs $400k–$500k all-in — and the average tenure is 19 months. A bad hire sets you back two years. A fractional sales leader gives you senior leadership for $8k–$15k/month with a 30-day exit clause."),
    v("reason3Desc", "Series B diligence will ask: is this revenue repeatable? Can it be replicated by new hires? A fractional sales leader builds the documented system — the Sales Playbook, pipeline architecture, and KPIs — that answers yes."),
    v("reason4Desc", "Scaling from 2 to 5 reps at Series A is where most companies fall apart. A fractional sales leader writes scorecards, runs the interviews, onboards new hires, and manages performance — so the founders can focus on product and fundraising."),
    v("reason5Desc", "Position Contracts and activity-based KPIs aren't a Series B initiative. They need to be built at Series A, while the team is small enough to install them cleanly. Fractional sales leaders do this from day one."),
    v("reason6Desc", "The company that builds a repeatable sales system fastest wins. A fractional sales leader has done this 10+ times. They skip the learning curve your first full-time VP would take two years to climb."),
  ];

  const buildItems = [
    v("buildItem1", "Sales Audit to understand the current reality — not just the founder's version of it"),
    v("buildItem2", "Documented Sales Playbook: ICP, discovery scripts, objection handling, pipeline stages"),
    v("buildItem3", "Hiring scorecard and onboarding process for the first 1–3 sales reps"),
    v("buildItem4", "Position Contracts that define exactly what each rep is accountable for"),
    v("buildItem5", "Activity-based KPIs tied to the actual sales motion, not vanity metrics"),
    v("buildItem6", "Weekly pipeline review rhythm the team can run independently"),
    v("buildItem7", "Daily training structure (15–33 min) that shortens rep ramp time"),
    v("buildItem8", "CRM setup and hygiene standards so data is actionable"),
  ];

  const compRows = [
    {
      category: v("comp1Category", "Cost"),
      fractional: v("comp1Fractional", "$8,000–$15,000/month"),
      fullTime: v("comp1FullTime", "$400,000–$500,000/year all-in"),
      fslWins: true,
    },
    {
      category: v("comp2Category", "Time to start"),
      fractional: v("comp2Fractional", "2–4 weeks"),
      fullTime: v("comp2FullTime", "3–6 months to hire + 90-day ramp"),
      fslWins: true,
    },
    {
      category: v("comp3Category", "Risk"),
      fractional: v("comp3Fractional", "30-day exit clause"),
      fullTime: v("comp3FullTime", "6–12 months severance exposure"),
      fslWins: true,
    },
    {
      category: v("comp4Category", "Experience"),
      fractional: v("comp4Fractional", "Has built sales systems at 10+ companies"),
      fullTime: v("comp4FullTime", "May have led one or two at scale"),
      fslWins: true,
    },
    {
      category: v("comp5Category", "Focus"),
      fractional: v("comp5Fractional", "System-building and team management"),
      fullTime: v("comp5FullTime", "Often spends first year figuring out the company"),
      fslWins: true,
    },
    {
      category: v("comp6Category", "Right time to hire full-time"),
      fractional: v("comp6Fractional", "When you hit $10M–$15M ARR and need full-time focus"),
      fullTime: v("comp6FullTime", "Too early at Series A for most companies"),
      fslWins: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#1d4ed8" fillColor="rgba(29,78,216,0.3)" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400"
            >
              Fractional Sales Leadership — Series A
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v("heroLine1", "Series A Companies That Scale Sales")}
              <span className="block text-blue-400">{v("heroAccent", "Build the System First.")}</span>
              {v("heroLine3", "Smart Investors Already Know This.")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v("heroDescription", "A fractional sales leader gives Series A companies a documented sales system, a managed team, and a repeatable revenue model — before you bet $400k on a full-time VP hire that may not work out.")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-700"
              >
                {v("ctaButtonText", "Book a Working Session")}
              </Link>
              <Link
                href="/fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What is a Fractional Sales Leader? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Why Investors Insist */}
      <section className="bg-white py-16 md:py-24">
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
              {v("investorsHeading", "Why Smart Investors Insist on Fractional Sales Leadership at Series A")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600"
            >
              {v("investorsSubheading", "Series B diligence asks one question: is this revenue repeatable? The answer gets built at Series A — or not at all.")}
            </motion.p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reasonTitles.map((title, i) => {
                const Icon = reasonIcons[i];
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{title}</h3>
                    <p className="text-sm text-neutral-600">{reasonDescs[i]}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What They Build */}
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
              {v("buildHeading", "What a Fractional Sales Leader Builds at Series A")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mb-10 text-lg text-neutral-600"
            >
              {v("buildIntro", "This is not consulting. This is hands-on system installation — the infrastructure your sales team needs to operate without the founder in every conversation.")}
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-4">
              {buildItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-neutral-800">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Comparison: Fractional vs Full-Time */}
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
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v("compHeading", "Fractional Sales Leader vs. Full-Time VP at Series A")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600"
            >
              {v("compSubheading", "At $1M–$10M ARR, the math strongly favors fractional leadership. Here's why.")}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-left font-semibold text-blue-400">Fractional Sales Leader</th>
                    <th className="px-6 py-4 text-left font-semibold text-neutral-400">Full-Time VP of Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {compRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="px-6 py-4 font-semibold text-neutral-900">{row.category}</td>
                      <td className="px-6 py-4 text-neutral-700">
                        <span className="flex items-start gap-2">
                          {row.fslWins && <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />}
                          {row.fractional}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-neutral-500">{row.fullTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900"
            >
              {v("testimonialsHeading", "What Founders Say")}
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote: v("testimonial1Quote", "When Louie came on board he wrote and organized our outbound scripts and emails. We now had everyone working off the same playbook, and it gave us consistency. Results were much easier to measure. Onboarding, and getting a new BDR productive, happen quicker too."),
                  name: v("testimonial1Name", "Neal Reynolds"),
                  title: v("testimonial1Title", "CEO, BankMarketingCenter.com"),
                },
                {
                  quote: v("testimonial2Quote", "Louie, your fresh perspective and hard work have been instrumental in driving our sales results. You've helped us establish a solid foundation with documented processes, better pipeline management, and a more accountable sales culture."),
                  name: v("testimonial2Name", "Brian Torrence"),
                  title: v("testimonial2Title", "CEO, Strategic Sales & Marketing"),
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
                >
                  <p className="mb-4 text-lg italic text-neutral-700">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-bold text-neutral-900">— {t.name}</p>
                  <p className="text-sm text-neutral-500">{t.title}</p>
                </motion.div>
              ))}
            </div>
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
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={itemVariants} className="mt-8 text-center text-neutral-500">
              Want to see what a fractional sales leader does week to week?{" "}
              <Link
                href="/what-does-fractional-sales-leader-do"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                See the week-to-week breakdown →
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
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
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
              {v("ctaHeadline", "Let's Build Your Sales System Before You Scale It")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v("ctaDescription", "30 minutes. I'll ask about your current sales motion and tell you exactly what needs to be built first. No pitch, no pressure.")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                {v("ctaButtonText", "Book a Working Session")}
              </Link>
            </motion.div>
            <motion.p variants={itemVariants} className="mt-4 text-sm text-neutral-400">
              Or read more:{" "}
              <Link href="/fractional-sales-leadership-roi" className="underline hover:text-white">
                Fractional Sales Leadership ROI →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
