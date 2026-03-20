"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { ArrowRight } from "lucide-react";

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
    problem: "No Sales Playbook",
    why: "Every rep is improvising their own version of the sales conversation. Discovery sounds different. Objections are handled differently. Pricing is presented differently. When everyone does it their own way, you can't measure what's working or coach to a standard.",
    fix: "Build a Sales Playbook that documents your ICP, discovery questions, demo flow, objection responses, and follow-up cadence. When every rep is running the same playbook, you can identify what works and what doesn't — and coach to a specific standard.",
  },
  {
    number: "02",
    problem: "The Pipeline Is a Fantasy",
    why: "Most pipelines track what the salesperson did — 'Proposal Sent,' 'Follow-up Scheduled,' 'Interested.' These don't tell you what the prospect has committed to. A pipeline full of 'maybes' and 'hopefuls' creates false confidence in the forecast and misdirects coaching attention.",
    fix: "Rebuild your pipeline with action-based stages tied to what the prospect has done. 'Discovery call completed' beats 'In discussions.' 'Proposal reviewed and questions asked' beats 'Proposal sent.' The prospect's actions tell you the truth about deal health.",
  },
  {
    number: "03",
    problem: "No Daily Training",
    why: "Sales is a skill. Skills atrophy without deliberate practice. Most small business sales teams get zero structured training after onboarding. Then managers wonder why objection handling falls apart, why discovery gets skipped, why reps can't hold a pricing conversation under pressure.",
    fix: "Implement 15–33 minutes of daily training — role plays, objection drills, call reviews, product knowledge. This doesn't have to be elaborate. Consistency matters more than content. Teams that train daily close faster, handle objections better, and onboard new reps in half the time.",
  },
  {
    number: "04",
    problem: "Wrong KPIs — Measuring Outputs, Not Activities",
    why: "You're tracking closed revenue and not much else. But closed revenue is the output of 40 other things happening (or not happening) earlier in the funnel. By the time you see a revenue problem, it's already 30–60 days old. You need leading indicators.",
    fix: "Track activity-based KPIs: calls made, discovery conversations held, demos completed, proposals sent. These are the levers that drive revenue. When a rep isn't hitting quota, activity KPIs tell you where the breakdown is — so you can fix the cause, not just react to the symptom.",
  },
  {
    number: "05",
    problem: "No 1:1s or Pipeline Reviews",
    why: "Reps don't know what good looks like in their pipeline. They don't know which deals to prioritize. They don't get coaching on the deals most likely to close this month. Without structured 1:1s and pipeline reviews, every rep operates in isolation — and problems compound invisibly.",
    fix: "Weekly 1:1s (focused on specific deals, not general check-ins) and a bi-weekly pipeline review with the full team. 1:1s surface coaching opportunities. Pipeline reviews create peer accountability and force clarity on what's real versus what's optimistic.",
  },
  {
    number: "06",
    problem: "Reps Don't Know Their Own Numbers",
    why: "Ask your reps: What's your average deal size? What's your conversion rate from demo to close? How many discovery calls do you need to get one closed deal? Most reps can't answer these questions — and if they can't, they can't self-diagnose or self-correct.",
    fix: "Give every rep a personal scorecard updated weekly. When reps know their numbers, they can identify where in their own funnel the leakage is. It also creates a culture of self-accountability rather than waiting to be managed.",
  },
  {
    number: "07",
    problem: "Wrong People in the Wrong Roles",
    why: "Not every salesperson is built for every type of sales. Outbound hunters struggle in account management roles. Relationship builders flounder in high-velocity transactional environments. Most small businesses hire for 'sales experience' and wing the role definition.",
    fix: "Build a Position Contract before you hire — a clear, written description of what this role requires, what activities are expected, and what winning looks like in 90 days. Use a hiring scorecard. It won't eliminate bad hires, but it dramatically reduces them.",
  },
];

const faqs = [
  {
    q: "Is it the salespeople or the system?",
    a: "Almost always the system. Salespeople can only perform as well as the environment they're in allows. No Sales Playbook, no training, no real pipeline visibility, no meaningful KPIs — and then we blame the rep for not hitting quota. In my experience, most underperforming sales teams have underperforming systems. Fix the system first, then evaluate the people.",
  },
  {
    q: "How do I know if I need a Sales Audit or just better training?",
    a: "Start with a Sales Audit. You can't know what's broken without looking at the full picture — pipeline, process, team, messaging, ICP. Training might be the solution. But it might also be that your ICP is wrong, your pipeline stages are misleading your forecast, or your reps are selling to the wrong buyers. The Audit tells you where to focus.",
  },
  {
    q: "My reps are experienced. Shouldn't they know this stuff already?",
    a: "Experience is valuable, but experienced reps bring habits from their previous employers — including bad ones. 'Experienced' doesn't mean 'aligned with your process.' Even great salespeople need a documented playbook to operate from, a clear ICP to target, and a structured pipeline to navigate. The system creates consistency regardless of individual experience.",
  },
  {
    q: "How fast can this be fixed?",
    a: "Pipeline architecture can be rebuilt in 2–4 weeks. A Sales Playbook takes 4–6 weeks. Daily training can start immediately. KPIs and Position Contracts can be set up in the first 30 days. By month 3, a well-run engagement produces measurable improvement in activity levels, pipeline quality, and rep productivity.",
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
      headline: "Why Your Sales Team Isn't Hitting Quota (And How to Fix It)",
      author: { "@type": "Person", name: "Louie Bernstein", url: "https://louiebernstein.com" },
      publisher: { "@type": "Person", name: "Louie Bernstein" },
      url: "https://louiebernstein.com/why-your-sales-team-isnt-hitting-quota",
    },
  ],
};

export default function WhySalesTeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#818cf8" fillColor="rgba(129,140,248,0.3)" className="bg-slate-950">
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
              Sales Performance Diagnosis
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Why Your Sales Team Isn&apos;t Hitting Quota
              <span className="block text-[#0966c2]">And How to Fix It</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              It&apos;s almost never the salespeople. Here are the 7 real reasons sales teams miss
              quota — and the specific fix for each one.
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
                How to build a sales process →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-lg text-neutral-600">
              In 9 years as a Fractional Sales Leader, I&apos;ve walked into dozens of businesses
              where the sales team isn&apos;t performing. In almost every case, the problem wasn&apos;t
              the salespeople. It was the{" "}
              <span className="font-semibold text-neutral-900">system</span> — or the lack of one.
              No Sales Playbook. No real pipeline. No training. No meaningful KPIs. Then we blame
              the rep.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-4 text-lg text-neutral-600">
              Here are the 7 most common reasons sales teams miss quota — and the specific fix for
              each one.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The 7 Reasons */}
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
                  <div>
                    <h2 className="text-xl font-bold text-red-700">{reason.problem}</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Why It Happens
                    </p>
                    <p className="text-neutral-600">{reason.why}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-green-700">
                      The Fix
                    </p>
                    <p className="text-neutral-700">{reason.fix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-neutral-50 p-10 text-center"
            >
              <p className="mb-6 text-xl italic text-neutral-700">
                &ldquo;When Louie came on board he wrote and organized our outbound scripts and
                emails. We now had everyone working off the same playbook, and it gave us
                consistency. Results were much easier to measure. Onboarding, and getting a new BDR
                productive, happen quicker too.&rdquo;
              </p>
              <p className="font-bold text-neutral-900">— Neal Reynolds</p>
              <p className="text-neutral-500">CEO, BankMarketingCenter.com</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 text-center">
              <p className="mb-4 text-lg text-neutral-600">
                Want to understand your specific situation before making any moves?
              </p>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Book a Working Session <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
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
              Common Questions
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
                href="/fractional-sales-leader-vs-consultant"
                className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
              >
                Fractional Sales Leader vs. Consultant — which do you need? →
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
              Let&apos;s Figure Out Why Your Team Is Missing Quota
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              30 minutes. We&apos;ll diagnose the specific issues in your sales system and identify
              the highest-leverage fix.
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
