"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Check, TrendingUp, BookOpen, Users, Target, BarChart3, Zap, Shield, DollarSign, Clock } from "lucide-react";
import { useCmsSection } from "@/lib/useCmsSection";

const CALENDLY = "https://calendly.com/louiebernstein/30minutes?month=2026-03";

const CMS_SECTION = "seoBenefitsFSL";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const keyBenefits = [
  {
    icon: BookOpen,
    number: "01",
    title: "You Get a Documented Sales System",
    desc: "Most small businesses have no Sales Playbook — every rep improvises. A fractional sales leader builds the document that captures what works: ICP, discovery scripts, objection handling, pipeline stages, onboarding checklist. This is what turns founder knowledge into a repeatable system.",
  },
  {
    icon: Users,
    number: "02",
    title: "Someone Actually Manages Your Sales Team",
    desc: "The founder shouldn't be running 1:1s, reviewing pipelines, and coaching reps. A fractional sales leader manages the team week-to-week — pipeline reviews, performance conversations, activity accountability — so you get management without doing it yourself.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Faster Rep Ramp Time",
    desc: "Without a system, new sales reps take 6–9 months to get productive. With a Sales Playbook, Position Contracts, and a daily training structure, that ramp drops to 60–90 days. That's real revenue recovered — every quarter, with every hire.",
  },
  {
    icon: Target,
    number: "04",
    title: "You Know What Each Rep Is Accountable For",
    desc: "Position Contracts define exactly what each salesperson is responsible for — calls, meetings, pipeline value, conversion rates. No more \"I thought I was doing a good job.\" Accountability becomes objective and easy to have conversations about.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "A Pipeline That Reflects Reality",
    desc: "Most small business pipelines are full of wishful thinking. A fractional sales leader rebuilds pipeline stages around action — what the prospect has actually done — so you can forecast with confidence and prioritize where to focus.",
  },
  {
    icon: DollarSign,
    number: "06",
    title: "60–80% Less Than a Full-Time VP",
    desc: "A full-time VP of Sales costs $400k–$500k all-in per year. A fractional sales leader costs $6k–$15k/month — with no equity, no benefits, and a 30-day exit clause. For small businesses at $1M–$10M ARR, the math is overwhelmingly in favor of fractional.",
  },
  {
    icon: Zap,
    number: "07",
    title: "You Can Start in Weeks, Not Months",
    desc: "Hiring a VP of Sales takes 3–6 months, then 90 days to ramp. A fractional sales leader starts in 2–4 weeks, begins the Sales Audit in week one, and has the Playbook drafted by week eight. The clock on revenue improvement starts immediately.",
  },
  {
    icon: Shield,
    number: "08",
    title: "Lower Risk, Easy Exit",
    desc: "Mis-hiring a VP of Sales sets a small business back 18–24 months. A fractional engagement has a 30-day exit clause. If it's not working, you're out. That asymmetry — big upside, limited downside — is one of the clearest benefits for small businesses with limited runway.",
  },
  {
    icon: Clock,
    number: "09",
    title: "The Founder Gets Time Back",
    desc: "The single biggest cost in most small businesses is the founder spending 40–60% of their time on sales. A fractional sales leader takes over the sales function — managing the team, running the pipeline, owning the process — so the founder can focus on product, customers, and fundraising.",
  },
  {
    icon: TrendingUp,
    number: "10",
    title: "You Build the Foundation for a Full-Time Hire",
    desc: "The right sequence: fractional first, full-time VP later. When you hire a full-time VP of Sales, they should inherit a working system — not build one from scratch. A fractional sales leader creates that system, so your VP hire leads a team instead of being handed a blank slate.",
  },
];

const whoThisIsFor = [
  "You have $1M–$10M ARR and you're the one closing most of your own deals",
  "You've hired salespeople but they're not performing the way you expected",
  "You have no documented Sales Playbook — everyone sells differently",
  "You can't afford (or aren't ready for) a $400k full-time VP of Sales",
  "You're spending 40%+ of your time managing the sales team yourself",
  "You want predictable revenue — not just great months followed by bad ones",
];

const defaultFaqs = [
  {
    q: "What are the main benefits of hiring a fractional sales leader for a small business?",
    a: "The main benefits are: (1) a documented Sales Playbook that makes your process repeatable, (2) week-to-week team management so the founder isn't running sales, (3) faster rep onboarding and ramp time, (4) pipeline architecture based on reality rather than optimism, (5) KPIs and accountability systems for each rep, and (6) all of this at 60–80% less than a full-time VP of Sales.",
  },
  {
    q: "How is a fractional sales leader different from a sales consultant?",
    a: "A consultant advises from the outside. A fractional sales leader gets embedded in your business 2–3 days per week. They manage your team, run your pipeline reviews, build your Playbook, interview your sales hires, and own the sales function. The key difference: accountability for results, not just quality of advice.",
  },
  {
    q: "What size small business benefits most from a fractional sales leader?",
    a: "Companies with $1M–$10M ARR see the highest ROI. You've proven your product works and closed your first customers — now you need a system to scale what you've done. At this stage, you need real sales leadership, but a full-time VP isn't justified yet. That's exactly the gap a fractional sales leader fills.",
  },
  {
    q: "How much does a fractional sales leader cost for a small business?",
    a: "Typically $6,000–$15,000 per month depending on scope and time commitment. That compares to $400,000–$500,000 all-in for a full-time VP of Sales (base, OTE, equity, benefits). Most small businesses that run the math realize the fractional model is not just cheaper — it's often more effective at this stage because the fractional leader has already built systems at 10+ companies.",
  },
  {
    q: "How quickly will I see results from hiring a fractional sales leader?",
    a: "Most small businesses see meaningful improvements in the first 90 days. The first month focuses on the Sales Audit and understanding reality. Month two is Playbook and system installation. By month three, your reps are operating from a documented process, your pipeline reflects real deals, and you have a weekly rhythm that doesn't require the founder to run every meeting.",
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
      name: "Fractional Sales Leadership for Small Businesses",
      provider: {
        "@type": "Person",
        name: "Louie Bernstein",
        url: "https://louiebernstein.com",
        jobTitle: "Fractional Sales Leader",
      },
      description:
        "Fractional sales leadership for small businesses — Sales Playbooks, team management, pipeline systems, KPIs, and accountability to build repeatable revenue growth.",
      areaServed: "United States",
      priceRange: "$6,000–$15,000/month",
    },
  ],
};

export default function BenefitsPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION);
  const faqs = cmsfaqs(5, defaultFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#059669" fillColor="rgba(5,150,105,0.3)" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400"
            >
              Fractional Sales Leadership for Small Businesses
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v("heroLine1", "10 Key Benefits of Hiring a")}
              <span className="block text-emerald-400">{v("heroAccent", "Fractional Sales Leader")}</span>
              {v("heroLine3", "for Your Small Business")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v(
                "heroDescription",
                "Small businesses at $1M–$10M ARR get a documented sales system, a managed team, and predictable revenue growth — at 60–80% less than a full-time VP of Sales hire."
              )}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-emerald-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-700"
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
              These Benefits Apply to You If...
            </motion.h2>
            <motion.ul variants={containerVariants} className="mt-8 space-y-4">
              {whoThisIsFor.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-neutral-800">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 10 Benefits */}
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
              The 10 Key Benefits of a Fractional Sales Leader
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600"
            >
              These are not theoretical. Every benefit on this list comes from real engagements with
              small businesses at the $1M–$10M ARR stage.
            </motion.p>
            <div className="grid gap-6 sm:grid-cols-2">
              {keyBenefits.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600/10">
                      <item.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-3xl font-bold text-neutral-200">{item.number}</span>
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
              Small Business Owners on Working With a Fractional Sales Leader
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "Thank you Louie for what you have done in the past year. I believe our sales are far better than where they were a year ago, great job!",
                  name: "Kevin Zhao",
                  title: "CEO, ZBSPOS.com",
                },
                {
                  quote:
                    "Louie, your fresh perspective and hard work have been instrumental in driving our sales results. You've helped us establish a solid foundation with documented processes, better pipeline management, and a more accountable sales culture.",
                  name: "Brian Torrence",
                  title: "CEO, Strategic Sales & Marketing",
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
              Curious about cost?{" "}
              <Link
                href="/cost-of-fractional-vp-sales"
                className="font-semibold text-emerald-600 underline underline-offset-2 hover:text-emerald-700"
              >
                See fractional sales leadership pricing →
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
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />
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
              {v("ctaHeadline", "See Which Benefits Apply to Your Business")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v(
                "ctaDescription",
                "30 minutes. I'll ask about your current sales situation and tell you which of these benefits are most relevant — and what it would take to get there."
              )}
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
              Or read:{" "}
              <Link href="/is-fractional-sales-leadership-worth-it" className="underline hover:text-white">
                Is fractional sales leadership worth it? →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
