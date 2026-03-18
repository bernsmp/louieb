"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { AlertTriangle, CheckCircle, TrendingDown } from "lucide-react";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const signs = [
  {
    title: "You are in every important deal",
    detail:
      "If the deal stalls when you're not involved, your company doesn't have a sales process — it has you. That's not a business. That's a job you can never leave.",
  },
  {
    title: "Revenue is flat despite adding salespeople",
    detail:
      "You hired reps to take over, but revenue didn't move. More often than not, this isn't a hiring problem. It's that you gave your reps no system to plug into. They're improvising in the dark.",
  },
  {
    title: "You can't take a real vacation",
    detail:
      "If two weeks off means deals go cold and pipeline dries up, founder-led sales has created a dependency that's limiting not just growth — but your life.",
  },
  {
    title: "Your reps sell differently from each other",
    detail:
      "Every rep has their own way of running a discovery, presenting the product, handling objections. No two deals look the same. There's no Sales Playbook. There's no standard. You're managing chaos.",
  },
  {
    title: "You're the best closer on your team — by a lot",
    detail:
      "Founders are usually the best salesperson in the company. But that gap should be shrinking as you build a system. If your reps are still nowhere close, the system is missing — not the talent.",
  },
];

const fixes = [
  {
    phase: "First 30 days",
    title: "Sales Audit",
    desc: "Understand what's actually working in your sales motion before you change anything. ICP, pipeline, conversion rates, messaging — we look at all of it.",
  },
  {
    phase: "Days 30–60",
    title: "Sales Playbook",
    desc: "Document your instincts into a repeatable system. Scripts, discovery questions, objection handling, pipeline stages, and onboarding. Every rep sells from the same playbook.",
  },
  {
    phase: "Days 60–90",
    title: "System & Accountability Launch",
    desc: "Daily training, pipeline reviews, KPIs, Position Contracts. The team starts operating from a system instead of improvising. You start stepping back — intentionally.",
  },
  {
    phase: "Month 3–12",
    title: "Founder Exits the Daily Close",
    desc: "Deals close without you in the room. You move from sales operator to sales leader to sales observer. That's when the business is finally built to scale.",
  },
];

const faqs = [
  {
    q: "How do I know if founder-led sales is the actual problem vs. something else?",
    a: "Run a Sales Audit. Most of the time, the root cause isn't the founder or the reps — it's the absence of infrastructure. No Sales Playbook means every rep invents their own approach. No pipeline architecture means the forecast is fiction. The audit tells you exactly where to look.",
  },
  {
    q: "I've been the main closer for 5 years. Can this actually change?",
    a: "Yes — but it requires intentional effort, not hope. The founders I've worked with who successfully replaced themselves in sales did three things: they documented what worked before they hired anyone else, they hired two reps at once (not one), and they committed to stepping out of deals gradually rather than all at once. It's a process, not a switch.",
  },
  {
    q: "What if my reps just aren't as good as me at selling?",
    a: "That's almost always a system problem, not a people problem. If your best sales conversations live only in your head, your reps can't replicate them. Write down your best discovery questions. Document your objection responses. Record your best demos. Then give your reps the tools to follow a proven path — not to reinvent the wheel.",
  },
  {
    q: "Should I hire a VP of Sales to fix this?",
    a: "Not yet. A VP of Sales needs a system to manage — not to invent. If you bring in a VP before you have a documented process, you're paying $300k+ for someone to build what should have been built first. Build the Sales Playbook. Hire two reps. Let the system prove itself. Then bring in a VP to manage and scale it.",
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
      headline: "Founder-Led Sales Not Scaling: What to Do When You're the Ceiling",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/founder-led-sales-not-scaling",
      description:
        "Why founder-led sales stops scaling — and the step-by-step process for replacing yourself as the company's primary closer.",
    },
  ],
};

export default function FounderLedSalesNotScalingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <BackgroundCells className="bg-slate-950">
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
              Scaling Beyond the Founder
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Founder-Led Sales
              <span className="block text-[#0966c2]">Isn&apos;t Scaling.</span>
              Here&apos;s Why — and What to Do.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              You&apos;re still the best salesperson in your company. That was an asset at $500k ARR.
              At $2M ARR, it&apos;s the ceiling. Here&apos;s the exact process for replacing yourself
              — without losing momentum.
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
                href="/how-to-replace-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Step-by-step replacement framework →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </BackgroundCells>

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
                  <p className="font-bold text-amber-900">
                    I&apos;ve been in this exact situation — as a founder.
                  </p>
                  <p className="mt-1 text-amber-800">
                    I ran a bootstrapped company for 22 years. I was the closer for longer than I
                    should have been. The transition out of founder-led sales is one of the hardest
                    moves a founder can make — because it requires trusting a system more than your
                    own instincts. But it&apos;s the only way to scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signs */}
      <section className="bg-neutral-50 py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-6">
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
              5 Signs Founder-Led Sales Is Your Ceiling
            </motion.h2>
            <div className="space-y-4">
              {signs.map((sign, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <TrendingDown className="mt-0.5 h-6 w-6 shrink-0 text-red-500" />
                    <div>
                      <h3 className="mb-2 font-bold text-neutral-900">{sign.title}</h3>
                      <p className="text-neutral-600">{sign.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What the Fix Looks Like */}
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
              What the Fix Actually Looks Like
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-neutral-600">
              This is how a structured engagement replaces founder-led sales — in the right order:
            </motion.p>
            <div className="space-y-4">
              {fixes.map((fix, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-6 rounded-xl border border-neutral-200 p-6"
                >
                  <div className="shrink-0">
                    <div className="rounded-lg bg-[#0966c2]/10 px-3 py-1 text-xs font-bold text-[#0966c2]">
                      {fix.phase}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <h3 className="font-bold text-neutral-900">{fix.title}</h3>
                    </div>
                    <p className="mt-1 text-neutral-600">{fix.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                I understand founder-led sales from both sides of the table — having lived it for
                over two decades, and now having helped dozens of founders make the transition out
                of it. I don&apos;t consult from a distance. I get embedded, build the system, and
                stay until it works.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 border-l-4 border-[#0966c2] pl-6">
              <p className="text-lg italic text-neutral-600">
                &ldquo;Louie came in and helped bring together all our sales efforts into a system
                with a Sales Playbook, realistic pipeline, and defined roles. We are better off from
                having Louie here.&rdquo;
              </p>
              <p className="mt-2 font-semibold text-neutral-700">— CEO, Retail e-commerce platform</p>
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
                href="/when-to-hire-a-fractional-cro"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                7 signs it&apos;s time to hire a Fractional CRO →
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
              Ready to Stop Being Your Company&apos;s Only Salesperson?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              Book a 30-minute working session. We&apos;ll look at where your sales are stuck and
              map out the right path forward for your specific situation.
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
