"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, Users, BookOpen, BarChart3, Target, Zap, Shield } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const whatIDo = [
  {
    icon: Target,
    title: "Sales Audit",
    desc: "Every engagement starts here. I get into the details of your sales motion before recommending anything. No assumptions.",
  },
  {
    icon: BookOpen,
    title: "Sales Playbook",
    desc: "I build the document that turns founder knowledge into a repeatable system — ICP, scripts, objection handling, pipeline stages, onboarding.",
  },
  {
    icon: Users,
    title: "Team Hiring & Management",
    desc: "Scorecards for hiring, onboarding for new reps, weekly 1:1s, pipeline reviews. I manage your team so you don't have to be in every deal.",
  },
  {
    icon: BarChart3,
    title: "Pipeline Architecture",
    desc: "Replace gut-feel forecasting with action-based pipeline stages. Know what's real, what's stalled, and where to focus.",
  },
  {
    icon: Zap,
    title: "Daily Training System",
    desc: "I implement a 15–33 minute daily training structure that keeps your reps sharp and shortens onboarding from months to weeks.",
  },
  {
    icon: Shield,
    title: "KPIs & Accountability",
    desc: "Position Contracts and activity-based KPIs that tell you exactly what each rep is responsible for — and whether they're delivering.",
  },
];

const whoThisIsFor = [
  "You have $1M–$10M ARR and you're still the one closing most deals",
  "You've hired 1–3 salespeople but they're not hitting the numbers you expected",
  "You have no Sales Playbook — every rep is improvising",
  "You can't afford a $400k full-time VP of Sales yet",
  "You want to scale sales without adding it to your own plate",
  "You're ready to stop being the bottleneck in your own growth",
];

const faqs = [
  {
    q: "What exactly is a Fractional VP of Sales?",
    a: "A Fractional VP of Sales is an experienced sales leader who works with your company part-time — typically 2–3 days per week — embedded in your business rather than advising from the outside. They build your sales system, manage your team, run pipeline reviews, and own the sales function so the founder doesn't have to.",
  },
  {
    q: "How is a Fractional VP of Sales different from a sales consultant?",
    a: "A consultant gives advice. A Fractional VP of Sales gets into the work. I start with a Sales Audit to understand what's actually happening. Then I build the Sales Playbook, manage the team, run pipeline reviews, and create accountability systems. I'm embedded in your business — not sending you a report from the outside.",
  },
  {
    q: "What size company is this right for?",
    a: "Small businesses with $1M–$10M ARR are the sweet spot. You've proven your product works. Now the challenge is building a scalable sales system. You need real leadership, but a full-time VP of Sales at $400k+ all-in isn't the right move yet. A Fractional VP of Sales bridges that gap.",
  },
  {
    q: "How much does a Fractional VP of Sales cost for a small business?",
    a: "Typically $6,000–$14,000 per month, depending on scope. That's 60–80% less than a full-time VP of Sales (which runs $400k–$500k all-in per year when you include base, OTE, equity, and benefits). You get the same strategic leadership without the full-time cost or commitment.",
  },
  {
    q: "Do I need a Sales Playbook before hiring salespeople?",
    a: "Yes — always. Hiring salespeople before you have a documented process is one of the most expensive mistakes small businesses make. Your first hire will figure out their own way to sell, which may not match yours. Building the playbook first is how you onboard faster, manage easier, and get consistent results. This is one of the first things I build in any engagement.",
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
      "@type": "Service",
      name: "Fractional VP of Sales for Small Businesses",
      provider: {
        "@type": "Person",
        name: "Louie Bernstein",
        url: "https://louiebernstein.com",
        jobTitle: "Fractional Sales Leader",
      },
      description:
        "Embedded sales leadership for small businesses — Sales Audits, Sales Playbooks, team management, pipeline systems, and daily training.",
      areaServed: "United States",
      priceRange: "$6,000–$14,000/month",
    },
  ],
};

export default function FractionalVPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&fit=crop&auto=format" imageAlt="Small business team collaborating in a modern office space" className="bg-slate-950">
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
              Fractional VP of Sales for Small Businesses
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Your Small Business Deserves
              <span className="block text-[#0966c2]">Enterprise-Grade Sales Leadership.</span>
              Without the Enterprise Price Tag.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              A Fractional VP of Sales gives small businesses the system, the team management, and
              the predictable pipeline that only large companies used to afford — at 60–80% less
              than a full-time hire.
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
                What is a Fractional Sales Leader? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Who This Is For */}
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
              This Is for You If...
            </motion.h2>
            <motion.ul variants={containerVariants} className="mt-8 space-y-4">
              {whoThisIsFor.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0966c2]" />
                  <span className="text-neutral-800">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* What I Do */}
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
              What a Fractional VP of Sales Does in Your Business
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600"
            >
              I don&apos;t consult from a distance. I get embedded and build the system from the
              inside.
            </motion.p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whatIDo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0966c2]/10">
                    <item.icon className="h-5 w-5 text-[#0966c2]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900"
            >
              What Small Business Owners Say
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "When Louie came on board he wrote and organized our outbound scripts and emails. We now had everyone working off the same playbook, and it gave us consistency. Results were much easier to measure. Onboarding, and getting a new BDR productive, happen quicker too.",
                  name: "Neal Reynolds",
                  title: "CEO, BankMarketingCenter.com",
                },
                {
                  quote:
                    "Thank you Louie for what you have done in the past year. I believe our sales are far better than where they were a year ago, great job!",
                  name: "Kevin Zhao",
                  title: "CEO, ZBSPOS.com",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-8"
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
            <motion.p variants={itemVariants} className="mt-8 text-center text-neutral-500">
              Want to understand the difference between a Fractional Sales Leader and a Consultant?{" "}
              <Link
                href="/fractional-sales-leader-vs-consultant"
                className="font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                See the full comparison →
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
              Let&apos;s Talk About Your Sales Situation
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              30 minutes. No pitch, no pressure. Just a real conversation about whether a Fractional
              VP of Sales is the right move for your small business.
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
            <motion.p variants={itemVariants} className="mt-4 text-sm text-neutral-400">
              Or{" "}
              <Link
                href="/fractional-cro-pricing"
                className="underline hover:text-white"
              >
                see pricing first
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
