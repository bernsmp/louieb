"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, AlertCircle, BookOpen, Target, BarChart3, Users, Zap, ClipboardList } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const mistakes = [
  "Treating every trial signup as a sales opportunity — instead of qualifying by intent and fit first",
  "No handoff process between marketing, SDRs, and AEs — leads fall through the cracks",
  "Demoing the product before understanding the buyer's specific pain",
  "Pitching features to someone who hasn't agreed there's a problem worth solving",
  "No documented expansion motion — you close the initial deal and forget about NRR",
];

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Sales Audit First — Always",
    detail:
      "Before you build anything, understand what's actually happening in your current sales motion. Where are trials converting? Where are they dying? What's your average sales cycle? What's your ICP? Most SaaS founders are surprised by what the data actually shows vs. what they assumed. The audit is the foundation.",
    insight: "In my experience, most SaaS companies are selling to too broad an ICP. Narrowing it is the fastest way to increase win rates.",
  },
  {
    icon: Target,
    step: "Step 2",
    title: "Define a SaaS-Specific ICP",
    detail:
      "Your ICP in SaaS isn't just company size and industry. It includes: what tech stack they're already running, what trigger event makes them ready to buy now (new funding, headcount growth, entering a new market), and how they evaluate software. The tighter your ICP, the shorter your sales cycle and the lower your churn.",
    insight: "Tight ICP = faster sales cycle + lower churn. Loose ICP = lots of activity, low conversion, high early churn.",
  },
  {
    icon: BookOpen,
    step: "Step 3",
    title: "Build a SaaS Sales Playbook",
    detail:
      "Your playbook covers discovery questions specific to your product category, demo flow (lead with their pain, not your features), objection handling for common SaaS objections (security, integration, 'we already have something'), pricing conversation structure, and your expansion motion. Write this before you hire another rep.",
    insight: null,
  },
  {
    icon: BarChart3,
    step: "Step 4",
    title: "Build a Pipeline That Reflects SaaS Reality",
    detail:
      "SaaS pipelines need stages that reflect prospect actions, not your hopes. 'Trial Started' is not a pipeline stage. 'Trial with 3+ active users' is. 'Demo Attended' is not. 'Technical Questions Asked Post-Demo' is. Build your pipeline around what prospects have committed to — not what your reps have sent them.",
    insight: "Action-based pipeline stages are the difference between a real forecast and a fantasy number.",
  },
  {
    icon: Zap,
    step: "Step 5",
    title: "Nail the Trial-to-Paid Conversion Motion",
    detail:
      "Most SaaS companies leave conversion to chance — hoping the product will sell itself during the trial. It won't. Build a structured trial experience: day 1 onboarding call, day 7 check-in, day 14 value review, day 21 buying conversation. Map your reps' activity to the trial calendar, not to their own schedule.",
    insight: null,
  },
  {
    icon: Users,
    step: "Step 6",
    title: "Build an Expansion and Retention Motion",
    detail:
      "New ARR is expensive to acquire. Net Revenue Retention is what separates great SaaS businesses from good ones. Your sales process doesn't end at contract signature. Build a 90-day success check-in, a defined QBR process for accounts above a threshold, and an expansion trigger (usage milestones, headcount growth, new use cases) that your AEs and CSMs share ownership of.",
    insight: "The best SaaS sales teams I've seen treat expansion revenue as a sales motion, not a support function.",
  },
];

const faqs = [
  {
    q: "Is SaaS sales really that different from other B2B sales?",
    a: "The fundamentals are the same — ICP, discovery, objection handling, pipeline discipline. But the motion is different. SaaS has trials, shorter initial contracts, expansion revenue, and churn risk that product-led companies often underweight. The playbook needs to reflect the SaaS buying journey specifically.",
  },
  {
    q: "When should a SaaS founder stop selling and bring in a sales leader?",
    a: "When you've closed 20–30 customers yourself and you understand the repeatable pattern. That's the moment to document what you know, build the Sales Playbook, and then bring in reps or a Fractional Sales Leader to run the system. Bringing in sales help before you understand the pattern means someone else is guessing in your place.",
  },
  {
    q: "What's the #1 mistake SaaS founders make in their sales process?",
    a: "Demoing before they've run a real discovery. Founders are in love with their product — which is great for building, terrible for selling. If you show the demo before you've confirmed the prospect has the problem your product solves, you're doing a product tour, not a sales call. Discovery first. Demo second. Always.",
  },
  {
    q: "Do I need a different playbook for PLG (product-led growth) vs. sales-led growth?",
    a: "Yes — but the principles overlap. In a PLG motion, your reps are working with product-qualified leads (PQLs) instead of marketing-qualified leads. The discovery is different (they've already seen the product), and the objection handling shifts toward expansion, security, and enterprise features. But ICP clarity, pipeline architecture, and conversion discipline matter just as much.",
  },
  {
    q: "How do I know if my sales process is the problem vs. my product?",
    a: "Run a Sales Audit. Look at where in the pipeline deals are dying. If they're dying at trial (conversion), that's often a sales process or onboarding problem. If they're dying before the trial (top of funnel), that's an ICP or messaging problem. If they're closing but churning early, that's a fit or expectation problem. The data tells you where to look.",
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
      headline: "How to Build a Sales Process for SaaS",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/how-to-build-a-sales-process-for-saas",
      description:
        "A step-by-step framework for building a repeatable SaaS sales process — ICP, playbook, trial conversion, pipeline, and expansion motion.",
    },
  ],
};

export default function SaaSSalesProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80&fit=crop&auto=format" imageAlt="SaaS team collaborating on building a scalable sales process" className="bg-slate-950">
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
              SaaS Sales Framework
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              How to Build a Sales Process
              <span className="block text-[#0966c2]">for SaaS</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              SaaS sales has unique challenges — trials, expansion revenue, churn risk, product-led
              vs. sales-led growth. Here&apos;s the exact process for building a repeatable sales
              system that converts trials and grows ARR.
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
                href="/how-to-build-a-sales-process-after-1m-arr"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                General sales process framework →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Common Mistakes */}
      <section className="bg-white py-16 md:py-20">
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
              Why Most SaaS Sales Processes Break Down
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              I&apos;ve worked inside dozens of SaaS companies as a Fractional Sales Leader. The
              same five problems show up again and again:
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-3">
              {mistakes.map((mistake, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-neutral-800">{mistake}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-neutral-50 py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0966c2]/10">
                      <step.icon className="h-6 w-6 text-[#0966c2]" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#0966c2]">
                      {step.step}
                    </p>
                    <h2 className="text-xl font-bold text-neutral-900">{step.title}</h2>
                  </div>
                </div>
                <p className="mb-4 text-neutral-600">{step.detail}</p>
                {step.insight && (
                  <div className="rounded-lg border border-[#0966c2]/20 bg-[#0966c2]/5 p-4">
                    <p className="text-sm font-semibold text-[#0966c2]">{step.insight}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-neutral-50 p-10 shadow-sm"
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
                I don&apos;t consult from a distance. I get embedded in your business — running
                Sales Audits, building Sales Playbooks, managing teams, and building the systems
                that let founders step out of the daily sales grind.
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
                href="/fractional-cro-pricing"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                See Fractional CRO pricing →
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
              Ready to Build a SaaS Sales Process That Actually Works?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Let&apos;s spend 30 minutes together. We&apos;ll look at your current sales motion
              and figure out the highest-leverage place to start.
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
