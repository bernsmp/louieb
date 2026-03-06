import Link from "next/link";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { HeroScrollButtons } from "@/components/still-in-the-game/HeroScrollButtons";
import { getStillInTheGameContent } from "@/lib/cms";

export const metadata = {
  title: "Still In The Game | Louie Bernstein",
  description:
    "A Resilience Framework for Founders and Entrepreneurs. Five decades. Five decisions. One framework that builds the resilience to get you to the next stage — and keep you there.",
  robots: {
    index: false,
    follow: false,
  },
};

const decisions = [
  {
    number: "01",
    decade: "December 1985 · Atlanta",
    title: "The Jump",
    subtitle: "When to Leave the Dock",
    story:
      "Two kids. A broken vertebra. Life savings gone. He started a company anyway. MindIQ launched in 1986, ran for 22 years, and made the INC 500.",
    lesson:
      "The people who build something are not the ones who waited for the right time.",
    resilience:
      "Builds the foundational layer: the knowledge that you can handle not knowing. Every decision after it is made from a steadier place.",
  },
  {
    number: "02",
    decade: "September 2001 · MindIQ, Year 15",
    title: "The Crisis",
    subtitle: "When Hope Is Not a Strategy",
    story:
      "9/11 wiped out a business built on people flying to training centers. He told his team it was a blip. He was wrong. An 18-month grind nearly broke everything.",
    lesson:
      "The longer you wait to face a changing reality, the more expensive the correction becomes.",
    resilience:
      "Builds the confidence that you can handle bad news. You stop dreading it. You start treating it as data. And data can be acted on.",
  },
  {
    number: "03",
    decade: "2008 · MindIQ, Year 22",
    title: "The Burnout",
    subtitle: "When to Stop Before You Break",
    story:
      "Lying in bed, unable to go to work. Later diagnosed with depression. What burnout actually looks like from inside — and how to catch it before the water boils.",
    lesson:
      "Resilience is infrastructure. You build it before you need it, not during the crisis.",
    resilience:
      "Recovery forces you to build the systems that prevent the next one. Not toughness — resilience. The difference is everything.",
  },
  {
    number: "04",
    decade: "2015 · Everything Ahead",
    title: "The Reinvention",
    subtitle: "When to Bet on Yourself Again",
    story:
      "After 22 years, he walked away. Then built the thing he would have hired when he was burning out doing all the selling himself.",
    lesson:
      "The thing you survived is often your most valuable credential. Not a weakness to hide.",
    resilience:
      "Resilience stops being reactive and becomes intentional. You are deliberately designing from what you already survived.",
  },
  {
    number: "05",
    decade: "Today · Still Building at 74",
    title: "The Long Game",
    subtitle: "What It Takes to Still Be Standing",
    story:
      "A Reddit post at 72 got 12 million impressions and 110,000 upvotes. People everywhere are looking for someone who went through the hard part and made it out.",
    lesson:
      "The version of you at 74 is being built right now, by the decisions you make today.",
    resilience:
      "All four layers compound over time. This is not a single moment of resilience. It is a life made of resilient choices, stacked decade by decade.",
  },
];

const benefits = [
  {
    headline: "You will stop being blindsided.",
    body: "The five decisions in this framework hit almost every founder and entrepreneur, at almost every stage. Most people walk into them unprepared because nobody talks about them openly. You will see them coming.",
    icon: "👁",
  },
  {
    headline: "You will make better decisions under pressure.",
    body: "The prompts in each chapter are not reflection exercises. They are decision tools. They force clarity on the thing you are actually facing — not the surface problem, the real one underneath it.",
    icon: "⚡",
  },
  {
    headline: "You will build resilience deliberately, not accidentally.",
    body: "Most founders build resilience the hard way — by getting knocked down until they stop staying down as long. This framework accelerates that. You are learning from someone who already took the hits.",
    icon: "🏗",
  },
  {
    headline: "You will get to the next stage with more left in the tank.",
    body: "Burnout, bad decisions, and avoidable crises are the three biggest reasons founders and entrepreneurs stall before they reach their potential. This framework addresses all three directly.",
    icon: "🔋",
  },
  {
    headline: "You will have a coach in your corner when you need one.",
    body: "The Claude prompts at the end of each chapter give you access to Louie's thinking at any hour, applied to your specific numbers, your team, your moment. Not generic advice — your situation.",
    icon: "🎯",
  },
];

const frameworkStructure = [
  { label: "The Story", desc: "What happened. The real version, with the details that made it hard." },
  { label: "The Decision", desc: "What this moment was really about and why founders and entrepreneurs get it wrong." },
  { label: "The Resilience Connection", desc: "How surviving this decision builds a specific layer of resilience you will need for every stage after it." },
  { label: "The Lesson", desc: "What to do when you hit this moment yourself." },
  { label: "The Claude Prompts", desc: "Coaching, advisory, and mindset prompts to apply the framework to your situation today." },
];

const promptTypes = [
  {
    type: "Coaching",
    icon: "🎯",
    description:
      "Surface what you already know but haven't said out loud. Louie asking the hard questions. Answer them before you run anything else.",
  },
  {
    type: "Advisory",
    icon: "📋",
    description:
      "Specific, actionable recommendations for your exact situation — your numbers, your team, your timeline. Argue with the output. Refine it. Make it yours.",
  },
  {
    type: "Mindset",
    icon: "🧠",
    description:
      "The psychological layer underneath the business decision. Some of the worst decisions are made for the right business reasons at the wrong emotional moment.",
  },
];

const whatIsIncluded = [
  "Five chapters — one decision per decade — with the real story, the resilience connection, and the lesson",
  "30 Claude AI prompts (6 per chapter): Coaching, Advisory, and Mindset",
  "A framework for building resilience deliberately, not by accident",
  "Immediate digital download — start today",
];

const aboutStats = [
  { value: "74", label: "Years Old — Still Building" },
  { value: "22", label: "Years Running MindIQ" },
  { value: "INC 500", label: "Company Built from Scratch" },
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
                A Resilience Framework
              </span>
              <span className="text-neutral-400">·</span>
              <span className="text-sm text-neutral-300">
                For Founders &amp; Entrepreneurs
              </span>
            </div>

            {/* Headline */}
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {cms.heroHeadline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-2xl font-medium text-neutral-300 md:text-3xl">
              {cms.heroSubheadline}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
              {cms.heroTagline}
            </p>

            {/* VIDEO */}
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
                      <svg className="h-10 w-10 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-neutral-300">Video Coming Soon</p>
                    <p className="max-w-sm text-sm text-neutral-500">
                      Add your YouTube video ID in the CMS under{" "}
                      <code className="text-neutral-400">stillInTheGame → videoId</code>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <HeroScrollButtons
              ctaPrimaryText="Get the Framework →"
              ctaSecondaryText="See What's Inside"
            />
          </div>
        </BackgroundCells>
      </section>

      {/* ── HOOK / PROBLEM ────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-3xl font-bold leading-snug text-neutral-900 md:text-4xl lg:text-5xl">
            Most business advice is written by people{" "}
            <span className="text-neutral-400">
              who haven't finished the race yet.
            </span>
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600">
            They're successful. They're smart. But they're still in the middle of it.
            They haven't hit the decisions that only come after decade two or three —
            the ones nobody talks about honestly because they're still too close to them.
          </p>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-neutral-900 bg-neutral-50 p-8 text-left">
            <p className="text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl">
              Louie Bernstein is 74. He built a bootstrapped company that ran for 22 years
              and made the INC 500. He survived 9/11, a burnout, a depression diagnosis,
              and about forty other things that should have ended everything.
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              He finished the race. Then he started again.{" "}
              <span className="font-semibold text-neutral-900">
                This framework is what he learned.
              </span>
            </p>
            <div className="mt-6 rounded-xl bg-neutral-900 px-6 py-4">
              <p className="text-base font-semibold text-white">
                "Resilience is not a personality trait. It is a skill. And like every skill,
                it is built — decision by decision, decade by decade — by the founders and
                entrepreneurs who choose to stay in the game."
              </p>
              <p className="mt-2 text-sm text-neutral-400">— Louie Bernstein</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
              What This Framework Does for You
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              If you go through all five decisions — read the stories, work the prompts,
              apply the framework — here is what changes.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.slice(0, 3).map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-lg"
              >
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">{b.headline}</h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {benefits.slice(3).map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-neutral-900 bg-white p-8 shadow-lg"
              >
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">{b.headline}</h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-4xl font-bold text-neutral-900 md:text-5xl">
            Who This Is For
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-8">
              <h3 className="text-xl font-bold text-neutral-400">Not for you if…</h3>
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
            <div className="rounded-2xl border-2 border-neutral-900 bg-white p-8 shadow-xl">
              <h3 className="text-xl font-bold text-neutral-900">Built for you if…</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "You're a founder or entrepreneur who is still actively building something",
                  "You've hit at least one of the five decisions — or you can see one coming",
                  "You want the honest version of what building looks like over decades",
                  "You want to build resilience deliberately, not by surviving it alone",
                  "You're ready to use AI to apply what you learn to your specific situation right now",
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

      {/* ── HOW THE FRAMEWORK WORKS ───────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              How the Framework Is Structured
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              Each of the five decisions follows the same format.
              Every chapter is a complete decision toolkit.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white">
            {frameworkStructure.map((item, i) => (
              <div
                key={i}
                className={`flex gap-6 px-8 py-6 ${
                  i < frameworkStructure.length - 1 ? "border-b border-neutral-100" : ""
                }`}
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <span className="font-bold text-neutral-900">{item.label}</span>
                  <span className="text-neutral-500"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-semibold text-neutral-700">
            The Resilience Connection is what separates this from every other business book.
            It shows exactly how each decision builds a layer of resilience
            you will need at every stage after it.
          </p>
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
              One per decade. The real story. What it cost. What it built.
              And exactly how it made the next stage possible.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {decisions.map((d) => (
              <div
                key={d.number}
                className="group rounded-2xl border-2 border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-xl lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                  {/* Number badge */}
                  <div className="flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-900 text-3xl font-bold text-white shadow-lg transition-transform group-hover:scale-105 lg:h-24 lg:w-24 lg:text-4xl">
                      {d.number}
                    </div>
                  </div>
                  {/* Content */}
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
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl bg-neutral-50 px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          The Lesson
                        </p>
                        <p className="mt-2 text-sm font-semibold italic text-neutral-700">
                          "{d.lesson}"
                        </p>
                      </div>
                      <div className="rounded-xl bg-neutral-900 px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          The Resilience Connection
                        </p>
                        <p className="mt-2 text-sm font-semibold text-neutral-200">
                          {d.resilience}
                        </p>
                      </div>
                    </div>
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
              Not generic reflection questions. A resilience framework built from Louie's actual
              thinking — engineered so you run{" "}
              <span className="font-semibold text-white">
                your specific situation through it.
              </span>
            </p>
            <p className="mx-auto mt-3 max-w-xl text-lg text-neutral-500">
              Your numbers. Your team. Your moment.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {promptTypes.map((pt) => (
              <div
                key={pt.type}
                className="rounded-2xl border border-neutral-700 bg-neutral-800/50 p-8"
              >
                <div className="text-4xl">{pt.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{pt.type} Prompts</h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">{pt.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-neutral-700 bg-neutral-800/30 p-8 text-center">
            <p className="text-lg font-semibold text-neutral-300 md:text-xl">
              "Thirty minutes with these prompts is the closest thing to sitting across
              from someone who has been exactly where you are
              <span className="text-white"> and came out the other side."</span>
            </p>
          </div>

          <div className="mt-10 grid gap-4 text-center md:grid-cols-3">
            {[
              { value: "5", label: "Decisions" },
              { value: "30", label: "Claude Prompts" },
              { value: "3", label: "Prompt Types Per Chapter" },
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
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
              People everywhere are looking for someone who went through the hard part
              and made it. That is who you can be. But you have to build toward it.
            </p>
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
              <div className="mt-1 text-base text-neutral-500">
                110,000 upvotes on "Things I've learned in 72 years"
              </div>
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
                A country being bombed daily — still showing up to build resilience.
                The need for this framework is everywhere.
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
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-4 py-2">
            <span className="text-sm font-semibold text-neutral-300">
              A Resilience Framework for Founders &amp; Entrepreneurs
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
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
                className="block w-full rounded-lg bg-white px-12 py-5 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
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
          <div className="mt-12 border-t border-neutral-800 pt-10">
            <p className="text-lg font-semibold text-neutral-300">
              "{cms.closingQuote}"
            </p>
            <p className="mt-2 text-base text-neutral-500">— Louie Bernstein</p>
            <p className="mt-6 text-base text-neutral-600">
              The win does not build you. The comeback does.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
