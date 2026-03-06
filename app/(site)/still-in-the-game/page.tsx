import Link from "next/link";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { HeroScrollButtons } from "@/components/still-in-the-game/HeroScrollButtons";
import { getStillInTheGameContent } from "@/lib/cms";

export const metadata = {
  title: "Still In The Game | Louie Bernstein",
  description:
    "Five decades. Five decisions. One framework you can use today. A digital guide by Louie Bernstein with 30 Claude AI prompts built in.",
};

const decisions = [
  {
    number: "01",
    decade: "December 1985 · Atlanta",
    title: "The Jump",
    subtitle: "When to Leave the Dock",
    story:
      "Two kids. A broken vertebra. Life savings gone on a home addition. He started a company anyway. MindIQ launched in 1986, ran for 22 years, and made the INC 500.",
    lesson:
      "The people who build something are not the ones who waited for the right time.",
  },
  {
    number: "02",
    decade: "September 2001 · MindIQ, Year 15",
    title: "The Crisis",
    subtitle: "When Hope Is Not a Strategy",
    story:
      "9/11 wiped out a business built on people flying to training centers. He told his team it was a blip. He was wrong. What that cost — and what it taught him about leading with your head instead of your heart.",
    lesson:
      "The longer you wait to face a changing reality, the more expensive the correction becomes.",
  },
  {
    number: "03",
    decade: "2008 · MindIQ, Year 22",
    title: "The Burnout",
    subtitle: "When to Stop Before You Break",
    story:
      "Lying in bed, unable to go to work at the company he built. Later diagnosed with depression. What burnout actually looks like from the inside — and how to catch it before the water boils.",
    lesson:
      "Resilience is infrastructure. You build it before you need it, not during the crisis.",
  },
  {
    number: "04",
    decade: "2015 · Everything Ahead",
    title: "The Reinvention",
    subtitle: "When to Bet on Yourself Again",
    story:
      "After 22 years, he walked away. Then went to work at a VC-backed startup. Then built the thing he would have hired when he was burning out doing all the selling himself — a Fractional Sales Leader practice.",
    lesson:
      "The thing you survived is often your most valuable credential. Not a weakness to hide.",
  },
  {
    number: "05",
    decade: "Today · Still Building at 74",
    title: "The Long Game",
    subtitle: "What It Takes to Still Be Standing",
    story:
      "A Reddit post at age 72 got 12 million impressions and 110,000 upvotes. People everywhere are looking for someone who went through the hard part and made it out the other side.",
    lesson:
      "The version of you at 74 is being built right now, by the decisions you make today.",
  },
];

const promptTypes = [
  {
    type: "Coaching",
    icon: "🎯",
    description:
      "Surface what you already know but haven't said out loud. Louie asking you the hard questions. Answer them before you read anything else.",
  },
  {
    type: "Advisory",
    icon: "📋",
    description:
      "Specific, actionable recommendations for your exact situation. A starting point you push back on, refine, and make yours.",
  },
  {
    type: "Mindset",
    icon: "🧠",
    description:
      "Connect the decision you're facing to the mental and emotional work underneath it. Some of the worst business decisions are made for the right reasons at the wrong psychological moment.",
  },
];

const whatIsIncluded = [
  "Five full chapters — one decision per decade, with the real story behind each",
  "30 Claude AI prompts (6 per chapter) across Coaching, Advisory, and Mindset types",
  "A framework for applying Louie's experience to your exact situation",
  "Immediate digital download — start reading today",
];

const aboutStats = [
  { value: "74", label: "Years Old — Still Building" },
  { value: "22", label: "Years Running MindIQ" },
  { value: "INC 500", label: "Company He Built from Scratch" },
  { value: "9+", label: "Years as Fractional Sales Leader" },
];

export default async function StillInTheGamePage() {
  const cms = await getStillInTheGameContent();

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <BackgroundCells className="bg-slate-950">
          <div className="px-6 pb-20 pt-8 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-4 py-2">
              <span className="text-sm font-semibold text-white">
                Digital Guide
              </span>
              <span className="text-neutral-400">·</span>
              <span className="text-sm text-neutral-300">By Louie Bernstein</span>
            </div>

            {/* Headline */}
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {cms.heroHeadline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-2xl font-medium text-neutral-300 md:text-3xl">
              {cms.heroSubheadline}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
              {cms.heroTagline}
            </p>

            {/* VIDEO — shows player when videoId is set, placeholder until then */}
            <div className="mx-auto mt-10 max-w-3xl px-4">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900 shadow-2xl">
                {cms.videoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${cms.videoId}?rel=0&modestbranding=1`}
                    title={cms.heroHeadline}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-800">
                      <svg
                        className="h-10 w-10 text-neutral-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-neutral-300">
                      Video Coming Soon
                    </p>
                    <p className="max-w-sm text-sm text-neutral-500">
                      Add your YouTube video ID in the CMS under{" "}
                      <code className="text-neutral-400">stillInTheGame → videoId</code>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Scroll CTAs (client component for smooth scroll) */}
            <HeroScrollButtons
              ctaPrimaryText="Get the Guide →"
              ctaSecondaryText="See What's Inside"
            />
          </div>
        </BackgroundCells>
      </section>

      {/* ── HOOK / PROBLEM ────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-3xl font-bold leading-snug text-neutral-900 md:text-4xl lg:text-5xl">
            {cms.hookHeadline.split("haven't finished the race yet.")[0]}
            <span className="text-neutral-400">haven't finished the race yet.</span>
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600">
            {cms.hookBody}
          </p>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-neutral-900 bg-neutral-50 p-8 text-left">
            <p className="text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl">
              {cms.hookCalloutHeadline}
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              {cms.hookCalloutBody.split("This is what he learned.")[0]}
              <span className="font-semibold text-neutral-900">
                This is what he learned.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* NOT for */}
            <div className="rounded-2xl border-2 border-neutral-200 bg-white p-8">
              <h3 className="text-xl font-bold text-neutral-400">
                This is NOT for you if…
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "You want a motivational framework with no real story behind it",
                  "You're looking for a quick tactical sales fix",
                  "You haven't started yet and you're still in the research phase",
                  "You want someone to tell you it's going to be easy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-500">
                    <span className="mt-1 text-neutral-300">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IS for */}
            <div className="rounded-2xl border-2 border-neutral-900 bg-white p-8 shadow-xl">
              <h3 className="text-xl font-bold text-neutral-900">
                This IS for you if…
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "You're a founder or operator who is still actively building something",
                  "You've hit at least one of the five decisions in this guide — or you can see one coming",
                  "You want the honest version of what building looks like over decades",
                  "You're ready to use AI to apply what you learn directly to your situation",
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

      {/* ── 5 DECISIONS ───────────────────────────────────────── */}
      <section id="whats-inside" className="bg-white py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl">
              Five Decades. Five Decisions.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              One per decade. The real story. What it cost. What it built. What
              to do when you hit it.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {decisions.map((d) => (
              <div
                key={d.number}
                className="group flex flex-col gap-6 rounded-2xl border-2 border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-xl lg:flex-row lg:items-start lg:gap-10 lg:p-10"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-900 text-3xl font-bold text-white shadow-lg transition-transform group-hover:scale-105 lg:h-24 lg:w-24 lg:text-4xl">
                    {d.number}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                    {d.decade}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-neutral-900 lg:text-3xl">
                    {d.title}
                    <span className="ml-3 text-xl font-normal text-neutral-500">
                      — {d.subtitle}
                    </span>
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
                    {d.story}
                  </p>
                  <div className="mt-4 rounded-xl bg-neutral-50 px-5 py-4">
                    <p className="text-sm font-semibold italic text-neutral-700">
                      "{d.lesson}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLAUDE PROMPTS ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-900 py-24 text-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white opacity-[0.03] blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-4 py-2">
              <span className="text-sm font-semibold text-neutral-300">
                Built into every chapter
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              30 Prompts Built to Run in Claude
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-400">
              Not generic reflection questions. Decision frameworks built from
              Louie's actual thinking — engineered so you apply his experience
              to{" "}
              <span className="font-semibold text-white">your exact situation.</span>
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {promptTypes.map((pt) => (
              <div
                key={pt.type}
                className="rounded-2xl border border-neutral-700 bg-neutral-800/50 p-8"
              >
                <div className="text-4xl">{pt.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {pt.type} Prompts
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-neutral-700 bg-neutral-800/30 p-8 text-center">
            <p className="text-lg font-semibold text-neutral-300 md:text-xl">
              "Thirty minutes with these prompts is the closest thing to sitting
              across from someone who has been exactly where you are
              <span className="text-white"> and came out the other side."</span>
            </p>
          </div>

          <div className="mt-10 grid gap-4 text-center md:grid-cols-3">
            {[
              { value: "5", label: "Chapters" },
              { value: "30", label: "Claude Prompts" },
              { value: "6", label: "Prompts Per Decision" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-neutral-800/40 py-6">
                <div className="text-5xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-base text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              People Are Listening
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-neutral-200 bg-white p-10 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF4500]/10">
                <svg className="h-8 w-8 text-[#FF4500]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <div className="mt-6 text-6xl font-bold text-neutral-900">12M</div>
              <div className="mt-2 text-lg font-semibold text-neutral-600">Impressions on Reddit</div>
              <div className="mt-1 text-base text-neutral-500">110,000 upvotes on "Things I've learned in 72 years"</div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-neutral-200 bg-white p-10 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
                <svg className="h-8 w-8 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div className="mt-6 text-4xl font-bold text-neutral-900">47% of YouTube Views</div>
              <div className="mt-2 text-lg font-semibold text-neutral-600">From Ukraine</div>
              <div className="mt-1 text-base text-neutral-500">
                A country being bombed daily — still showing up to learn.
                People everywhere are looking for something real to hold onto.
              </div>
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
                {aboutStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-4xl font-bold text-neutral-900 md:text-5xl">{s.value}</div>
                    <div className="mt-1 text-base text-neutral-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">About Louie</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-600">
                <p>{cms.aboutBio1}</p>
                <p>{cms.aboutBio2}</p>
                <p>{cms.aboutBio3}</p>
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

      {/* ── PRICING / CTA ─────────────────────────────────────── */}
      <section
        id="get-the-guide"
        className="relative overflow-hidden bg-neutral-900 py-24 text-white"
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-white opacity-[0.03] blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {cms.heroHeadline}
          </h2>
          <p className="mt-4 text-xl text-neutral-400">{cms.heroSubheadline}</p>

          {/* What's included */}
          <div className="mt-10 rounded-2xl border border-neutral-700 bg-neutral-800/50 p-8 text-left">
            <h3 className="text-lg font-bold text-white">What's included:</h3>
            <ul className="mt-6 space-y-4">
              {whatIsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 text-[#0966c2]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="mt-10">
            <div className="text-6xl font-bold text-white">${cms.price}</div>
            <p className="mt-2 text-base text-neutral-500">
              One-time purchase · Instant digital download
            </p>
          </div>

          {/* Buy button */}
          <div className="mt-8">
            {cms.buyButtonUrl ? (
              <Link
                href={cms.buyButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-white px-12 py-5 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:bg-neutral-100 hover:scale-105"
              >
                {cms.buyButtonText}
              </Link>
            ) : (
              <button
                disabled
                className="w-full cursor-not-allowed rounded-lg bg-neutral-600 px-12 py-5 text-lg font-bold text-neutral-400 opacity-60"
              >
                {cms.buyButtonText} — Coming Soon
              </button>
            )}
            <p className="mt-4 text-sm text-neutral-600">
              Secure checkout via Stripe · PDF download
            </p>
          </div>

          {/* Closing quote */}
          <p className="mt-12 text-lg font-semibold text-neutral-300">
            "{cms.closingQuote}"
          </p>
          <p className="mt-2 text-base text-neutral-500">— Louie Bernstein</p>
        </div>
      </section>
    </main>
  );
}
