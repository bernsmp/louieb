import Link from "next/link";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";

export const metadata = {
  title: "Before You Leave The Dock | Louie Bernstein",
  description:
    "Are you ready to start a business — or just restless? Five critical questions that surface whether you're built for founding. Free PDF guide for aspiring entrepreneurs.",
};

const fiveQuestions = [
  {
    number: "01",
    title: "Are You Built for This?",
    subtitle: "Founder Fit vs. Employee Excellence",
    description:
      "Most high performers make great employees. Fewer make great founders. The skills that got you here are not the skills that get you through what's next. This chapter surfaces which one you actually are — without judgment.",
    insight:
      "Starting a business doesn't require a certain personality. It requires self-awareness about your specific wiring.",
  },
  {
    number: "02",
    title: "Is Your Current Role Preparing You?",
    subtitle: "The Training Ground Question",
    description:
      "Your job right now is either building the foundation you need — or consuming time you'll never get back. This chapter helps you see which one it is, and what to do about it either way.",
    insight:
      "The best founder preparation usually happens before the leap. Not after.",
  },
  {
    number: "03",
    title: "Is the Problem Real?",
    subtitle: "Solving vs. Inventing",
    description:
      "Most failed businesses don't fail because of execution. They fail because they were solving a problem nobody had — or had badly enough to pay to fix. This chapter forces the honest answer before you bet on it.",
    insight:
      "The market doesn't care how much you believe in your idea. It only cares whether it has the problem you think it does.",
  },
  {
    number: "04",
    title: "What Does Ready Actually Mean?",
    subtitle: "Defining Your Starting Line",
    description:
      '"Ready" is the most misused word in entrepreneurship. People wait for it like a feeling that arrives. This chapter gives you a concrete definition — specific to you — so you stop waiting for a feeling and start working toward a threshold.',
    insight:
      "You don't wait to feel ready. You define what ready looks like and build toward it.",
  },
  {
    number: "05",
    title: "Can You Handle the Real Costs?",
    subtitle: "Beyond the Business Plan",
    description:
      "Not the financial costs. The personal ones. The relationships, the identity, the years you won't get back if it doesn't work. This chapter doesn't talk you out of it — it makes sure you're going in with your eyes open.",
    insight:
      "The founders who survive the hard parts are rarely the most talented. They're the ones who knew what they were signing up for.",
  },
];

const benefits = [
  {
    icon: "🎯",
    headline: "Clarity on whether you're ready — or just restless.",
    body: "Most people who feel pulled toward starting can't tell the difference. This guide gives you a concrete answer, built from your specific situation — not generic advice.",
  },
  {
    icon: "⏱",
    headline: "You avoid the most expensive mistakes before they happen.",
    body: "Starting for the wrong reasons costs you years, money, and relationships. This guide surfaces the wrong reasons before they cost you anything.",
  },
  {
    icon: "🤖",
    headline: "AI-powered prompts that make hard questions answerable.",
    body: "Each chapter includes built-in prompts designed to run in Claude. They turn vague reflection into specific, personal answers — in minutes, not months.",
  },
  {
    icon: "🏗",
    headline: "A foundation strong enough to survive what comes next.",
    body: "The founders who last aren't the ones who started fast. They're the ones who started right. This guide builds the base before you need it.",
  },
];

const whatIsIncluded = [
  "5-chapter PDF guide — one critical question per chapter",
  "Built-in AI prompts for each chapter (designed to run in Claude)",
  "Founder Fit assessment — are you wired for this?",
  "Problem validation framework — is your idea solving something real?",
  'Your personal "ready" definition — no more waiting for a feeling',
  "Immediate digital download — completely free",
];

export default function BeforeYouLeaveTheDockPage() {
  const gumroadUrl = "https://louiebernstein.gumroad.com/l/entrepreneurs";
  const upsellUrl = "https://louiebernstein.gumroad.com/l/staying";

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <BackgroundCells className="bg-slate-950">
          <div className="px-6 pb-20 pt-8 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-4 py-2">
              <span className="text-sm font-semibold text-white">
                Free PDF Guide
              </span>
              <span className="text-neutral-400">·</span>
              <span className="text-sm text-neutral-300">
                For Aspiring Entrepreneurs
              </span>
            </div>

            {/* Headline */}
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Are You Ready to Start —
              <br className="hidden md:block" /> or Just Restless?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-2xl font-medium text-neutral-300 md:text-3xl">
              Before You Leave The Dock™
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
              Five critical questions that surface whether you&apos;re built for
              founding — before the cost is real.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                Get the Free Guide →
              </Link>
              <a
                href="#five-questions"
                className="text-base font-semibold text-neutral-400 underline underline-offset-4 transition-colors hover:text-neutral-200"
              >
                See What&apos;s Inside
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Free · PDF Download · No credit card required
            </p>
          </div>
        </BackgroundCells>
      </section>

      {/* ── HOOK / PROBLEM ────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold leading-snug text-neutral-900 md:text-4xl lg:text-5xl">
            Most founders don&apos;t fail because they worked too hard.
            <br className="hidden lg:block" /> They fail because they started
            wrong.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600">
            They started for the wrong reasons. They solved a problem nobody
            had. They didn&apos;t know what they were signing up for. And by the
            time they figured it out, the cost was already real.
          </p>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-neutral-900 bg-neutral-50 p-8 text-left">
            <p className="text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl">
              The best thing you can do before you start is answer five honest
              questions.
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              Not a business plan. Not a pitch deck. Five questions that cut
              through the noise and surface whether you&apos;re actually ready —
              or whether you&apos;re about to make the most expensive mistake of
              your career.
            </p>
            <div className="mt-6 rounded-xl bg-neutral-900 px-6 py-4">
              <p className="text-base font-semibold text-white">
                &ldquo;The people who build something that lasts are not the
                ones who moved fastest. They are the ones who left the dock
                deliberately — not impulsively.&rdquo;
              </p>
              <p className="mt-2 text-sm text-neutral-400">— Louie Bernstein</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE QUESTIONS ────────────────────────────────────── */}
      <section id="five-questions" className="bg-neutral-50 py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
              Five Questions. Five Chapters.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              Each chapter tackles one decision point most aspiring founders
              skip — because nobody told them it mattered.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {fiveQuestions.map((q) => (
              <div
                key={q.number}
                className="group rounded-2xl border-2 border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-xl lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                  {/* Number badge */}
                  <div className="flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-900 text-3xl font-bold text-white shadow-lg transition-transform group-hover:scale-105 lg:h-24 lg:w-24 lg:text-4xl">
                      {q.number}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 lg:text-3xl">
                      {q.title}
                      <span className="ml-3 text-xl font-normal text-neutral-500">
                        — {q.subtitle}
                      </span>
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
                      {q.description}
                    </p>
                    <div className="mt-4 rounded-xl bg-neutral-900 px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        The Insight
                      </p>
                      <p className="mt-2 text-sm font-semibold italic text-neutral-200">
                        &ldquo;{q.insight}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
              What This Guide Does for You
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              Work through all five chapters, answer the prompts honestly, and
              here&apos;s what changes.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-8 transition-all hover:border-neutral-900 hover:shadow-lg"
              >
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">
                  {b.headline}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-4xl font-bold text-neutral-900 md:text-5xl">
            Who This Is For
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-neutral-200 bg-white p-8">
              <h3 className="text-xl font-bold text-neutral-400">
                Not for you if…
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "You've already started your business",
                  "You're looking for a business plan template or pitch deck",
                  "You want someone to validate your idea without scrutiny",
                  "You're not willing to answer hard questions honestly",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-500">
                    <span className="mt-1 text-neutral-300">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-neutral-900 bg-white p-8 shadow-xl">
              <h3 className="text-xl font-bold text-neutral-900">
                Built for you if…
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "You feel pulled toward starting something but aren't sure you're ready",
                  "You want to know if your idea solves a real problem before you bet on it",
                  "You're in a job that might be preparing you — or wasting your time",
                  "You want clarity, not just motivation",
                  "You're willing to use AI to get honest, fast answers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-800">
                    <span className="mt-1 text-[#0966c2]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT LOUIE ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-10">
              <div className="space-y-8">
                {[
                  { value: "74", label: "Years Old — Still Building" },
                  { value: "22", label: "Years Running MindIQ (INC 500)" },
                  { value: "1986", label: "When He Left the Dock" },
                  { value: "9+", label: "Years as Fractional Sales Leader" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-4xl font-bold text-neutral-900 md:text-5xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-base text-neutral-600">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
                About Louie
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-600">
                <p>
                  Louie Bernstein started his company MindIQ in 1986 with two
                  kids, a broken vertebra, and his life savings on the line.
                  MindIQ ran for 22 years and made the INC 500.
                </p>
                <p>
                  He&apos;s been on both sides of the dock — the terrifying
                  moment before you leave, and the long, hard journey of staying
                  in the game after you do. He built this guide for people
                  standing where he once stood.
                </p>
                <p>
                  At 74, he&apos;s still building. Still learning. And still
                  telling the honest version of what it takes.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/"
                  className="text-base font-semibold text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]"
                >
                  Learn more at louiebernstein.com →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE DOWNLOAD CTA ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-900 py-24 text-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white opacity-[0.03] blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-4 py-2">
            <span className="text-sm font-semibold text-neutral-300">
              Free PDF Guide · Instant Download
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Before You Leave The Dock™
          </h2>
          <p className="mt-4 text-xl text-neutral-400">
            Five questions. One decision. No regrets.
          </p>

          {/* What's included */}
          <div className="mt-10 rounded-2xl border border-neutral-700 bg-neutral-800/50 p-8 text-left">
            <h3 className="text-lg font-bold text-white">
              What&apos;s included:
            </h3>
            <ul className="mt-6 space-y-4">
              {whatIsIncluded.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-neutral-300"
                >
                  <span className="mt-1 text-[#0966c2]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="mt-10">
            <div className="text-6xl font-bold text-white">Free</div>
            <p className="mt-2 text-base text-neutral-500">
              No credit card required · Instant PDF download
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href={gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-white px-12 py-5 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
            >
              Get Before You Leave The Dock — Free →
            </Link>
            <p className="mt-4 text-sm text-neutral-600">
              Delivered via Gumroad · No spam, ever
            </p>
          </div>

          {/* Closing quote */}
          <div className="mt-12 border-t border-neutral-800 pt-10">
            <p className="text-lg font-semibold text-neutral-300">
              &ldquo;Leaving the dock is not the hard part. Starting right
              is.&rdquo;
            </p>
            <p className="mt-2 text-base text-neutral-500">— Louie Bernstein</p>
          </div>
        </div>
      </section>

      {/* ── UPSELL — STAYING IN THE GAME ──────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
            <span className="text-sm font-semibold text-neutral-600">
              Already started? This is what comes next.
            </span>
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-neutral-900 md:text-5xl">
            You Left the Dock.
            <br className="hidden md:block" /> Now Stay In The Game.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-neutral-600">
            If you&apos;ve already started — or when you do —{" "}
            <em>Staying In The Game</em> is the resilience framework for what
            comes next. Five decades. Five decisions. The honest story of how to
            survive the hard parts and stay standing.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border-2 border-neutral-900 bg-neutral-50 p-8 text-left shadow-xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-neutral-900">$47</div>
              <p className="mt-2 text-base text-neutral-500">
                One-time · Instant digital download
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "5-chapter resilience framework — one real decision per decade",
                "30 Claude AI prompts (Coaching, Advisory, Mindset)",
                "The honest story — with the details that made it hard",
                "Includes Before You Leave The Dock — free",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-neutral-700"
                >
                  <span className="mt-1 text-[#0966c2]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={upsellUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-lg bg-neutral-900 px-8 py-4 text-center text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-neutral-800"
            >
              Get Staying In The Game — $47 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
