'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes'

// Load Calendly assets after mount so they never block first paint (LCP).
function useCalendly() {
  useEffect(() => {
    if (!document.querySelector('link[data-calendly]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.setAttribute('data-calendly', '')
      document.head.appendChild(link)
    }
    if (!document.querySelector('script[data-calendly]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.setAttribute('data-calendly', '')
      document.body.appendChild(script)
    }
  }, [])
}

// Brand tokens (brand docs): navy #1B3A6B, orange #E8610A,
// price fill #FBEEE3, soft band #F3F5F9

type CalendlyWidget = {
  initPopupWidget: (opts: { url: string }) => void
}
declare global {
  interface Window {
    Calendly?: CalendlyWidget
  }
}

function BookButton({
  className = '',
  full = false,
}: {
  className?: string
  full?: boolean
}) {
  const open = useCallback(() => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY })
    } else if (typeof window !== 'undefined') {
      window.open(CALENDLY, '_blank', 'noopener,noreferrer')
    }
  }, [])

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center rounded-lg bg-[#E8610A] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.03] hover:bg-[#cf560a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8610A] ${full ? 'w-full sm:w-auto' : ''} ${className}`}
    >
      Book Your Discovery Call
    </button>
  )
}

function Check() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-xl font-bold leading-none text-[#E8610A]"
    >
      ✓
    </span>
  )
}

const weeks: { n: string; title: string; detail: string }[] = [
  { n: 'Week 1', title: 'Discovery and Current State.', detail: 'Map where sales stands today. What works, what’s stuck.' },
  { n: 'Week 2', title: 'Validate Your ICP.', detail: 'Get clear on who best to sell to and who are time-wasters.' },
  { n: 'Week 3', title: 'Pipeline and Stages.', detail: 'Build stages that help forecast cash flow and that prospects earn.' },
  { n: 'Week 4', title: 'Accountabilities Documents.', detail: 'Give every role a clear standard to hit. No surprises.' },
  { n: 'Week 5', title: 'Inbound and Outbound.', detail: 'We’ll build the outreach mix that fits your budget.' },
  { n: 'Week 6', title: 'Hiring and Onboarding.', detail: 'Set up my best-practices hiring system to hire and ramp reps fast.' },
  { n: 'Week 7', title: 'Compensation and Quotas.', detail: 'Set pay and quotas that reward the right actions and protect margin.' },
  { n: 'Week 8', title: 'CRM as the Source of Truth.', detail: 'Make your CRM the one place the truth lives – and you can count on.' },
  { n: 'Week 9', title: 'The Weekly Sales Rhythm.', detail: 'The cadence that runs the team without you.' },
  { n: 'Week 10', title: 'Forecasting and the Numbers.', detail: 'Trade hope-ium for a forecast you can defend.' },
  { n: 'Week 11', title: 'Social Selling in B2B.', detail: 'Learn the strategies for how to get business from LinkedIn and YouTube.' },
  { n: 'Week 12', title: 'The Founder Exit.', detail: 'Step out of the deals and hand the pipeline to your team.' },
]

const faqs: { q: string; a: string }[] = [
  {
    q: 'How is this different from hiring a VP of Sales?',
    a: 'A VP is a six-figure bet on one person, and most do not last two years. This builds the system first, so any rep can run it, at a fraction of the cost. When you are ready to hire, you hire into something that works.',
  },
  {
    q: 'I am not at $1M yet. Can this still help?',
    a: 'Yes. Earlier-stage founders use this to build the right habits before the wrong ones set in. We start where you are.',
  },
  {
    q: 'How much of my time does it take?',
    a: 'One hour a week on our call, plus the work we agree on between sessions. It is built to give you time back, not take it.',
  },
  {
    q: 'What happens on the call?',
    a: 'We look at where your sales stand, name the one thing keeping sales stuck on you, and decide together if this is a fit. No pitch. If it is not right, I will tell you.',
  },
  {
    q: 'Can I cancel?',
    a: 'The first 12 weeks build the foundation, so I ask for that commitment. After that it is month to month.',
  },
  {
    q: 'What if I want you more hands-on?',
    a: 'Ask about my full Fractional Sales Leadership Program, where I build it with you week to week.',
  },
]

export default function CeoLandingPage() {
  useCalendly()
  return (
    <div className="font-sans text-[#1f2937]" style={{ fontFamily: 'var(--font-inter), Inter, Arial, sans-serif' }}>
      {/* Header — logo only, links home */}
      <header className="bg-[#1B3A6B]">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <Link href="https://louiebernstein.com" className="group flex items-center gap-3 transition-opacity hover:opacity-80" aria-label="Louie Bernstein — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/LB Logo.png" alt="" aria-hidden="true" className="h-9 w-auto brightness-0 invert" />
            <span className="text-lg font-bold tracking-tight text-white">Louie Bernstein</span>
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-[#1B3A6B] px-6 pb-14 pt-6 text-center text-white md:pb-20 md:pt-14">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#F6A46A] sm:text-sm">
              The Founder&apos;s Corner™ · In Your Corner to Help You Grow Your Business
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Are YOU the Real Sales Department?
              <span className="mt-1 block text-2xl font-bold text-white/90 sm:text-3xl md:text-4xl">
                Build a Company That Grows Without You.
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-base text-blue-100 sm:text-lg">
              In 12 weeks, turn founder-led sales into a system your team can run — so revenue keeps coming when you step away, and you get your time, your focus, and your life back.
            </p>
            <p className="mx-auto mb-5 max-w-2xl text-base font-bold text-[#F6A46A] sm:text-lg">
              Grow and scale your company — for a fraction of the cost of a full-time VP of Sales.
            </p>
            <BookButton />
            <p className="mx-auto mt-3 max-w-xl text-xs text-blue-200/80 sm:text-sm">
              A free 30-minute call. No pitch. We map where you are now and where you want to be. If it is not a fit, I will tell you.
            </p>
            <p className="mx-auto mt-5 max-w-2xl border-t border-white/15 pt-5 text-lg font-bold text-white">
              One founder grew sales 61% in a single year — without adding a single salesperson.
            </p>
          </div>
        </section>

        {/* Maybe This Sounds Familiar */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">Maybe This Sounds Familiar</h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              You wake up thinking about sales. You go to bed thinking about sales. You cannot remember the last vacation where you did not check your phone. You know you need systems. You do not know where to start.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              And in the back of your mind, the same questions sit there. What happens if I get sick? What happens if I want to step away for a month? What happens if I want to sell this business someday?
            </p>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              If that lands, you are not failing. You are still the system. Let us fix that.
            </p>
            <blockquote className="border-l-4 border-[#E8610A] bg-[#F3F5F9] py-5 pl-6 pr-5">
              <p className="text-lg italic leading-relaxed text-neutral-800">
                “We now had everyone working off the same playbook, and it gave us consistency. Results were much easier to measure.”
              </p>
              <footer className="mt-3 text-sm font-semibold text-[#1B3A6B]">
                — Neal Reynolds, CEO, BankMarketingCenter.com
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Costing You More Than You Think */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              Founder-Led Sales Is Costing You More Than You Think
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              Do the math on your own time. If an hour of your time is worth $300, and you spend 20 hours a week running and closing sales, that is more than $300,000 a year — gone.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">And that is before the real costs:</p>
            <ul className="mb-6 space-y-3">
              {[
                'The deals you miss because you were buried in other deals.',
                'The hire you keep delaying.',
                'The forecast you cannot trust.',
                'The growth that stalls at the edge of your calendar.',
                'The toll it takes on you and the people at home.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">
              You are the most expensive salesperson in your company. And you cannot scale yourself.
            </p>
          </div>
        </section>

        {/* If Nothing Changes */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">If Nothing Changes</h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              Picture twelve months from now, with everything the same.
            </p>
            <ul className="mb-6 space-y-3">
              {[
                'You are still closing most of the deals.',
                'Your pipeline still depends on you.',
                'You still cannot step away without sales slowing down.',
                'Your growth is still capped by your calendar.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">
              Businesses do not scale. Systems scale. The only question is whether you build one this year — or carry the company on your back for another.
            </p>
          </div>
        </section>

        {/* Where You Are Today vs Where You Could Be */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              Where You Are Today vs. Where You Could Be
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-7">
                <h3 className="mb-5 text-xl font-bold text-neutral-500">Where you are today</h3>
                <ul className="space-y-3">
                  {[
                    'You close the biggest deals.',
                    'Pipeline reviews feel like guesswork.',
                    'Your reps need you in every conversation.',
                    'You cannot take your foot off the gas.',
                    'Sales owns your calendar.',
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-neutral-600">
                      <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-neutral-400">✕</span>
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-[#E8610A] bg-white p-7 shadow-sm">
                <h3 className="mb-5 text-xl font-bold text-[#1B3A6B]">Where you could be in 12 weeks</h3>
                <ul className="space-y-3">
                  {[
                    'Your team runs pipeline reviews without you.',
                    'Your forecast is predictable.',
                    'New reps ramp faster.',
                    'You finally trust your CRM.',
                    'You spend your time on strategy, not chasing deals.',
                    'You can take real time off.',
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-neutral-800">
                      <Check />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You Walk Away With */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              What You Walk Away With in 12 Weeks
            </h2>
            <ul className="mb-8 space-y-4">
              {[
                'A documented sales process that gives you consistency. No more winging it.',
                'Defined pipeline stages that help you forecast your cash flow.',
                'Accountabilities Documents for every role. What and when defined. No surprises.',
                'A hiring and onboarding system that gets the best candidates, who can produce quickly.',
                'A strict qualifying standard based on your ICP. Keeps reps from chasing bad deals and wasting their time and YOUR money.',
                'A weekly operating cadence your team runs.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg text-neutral-700">
                  <Check />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8 text-lg font-bold leading-relaxed text-[#1B3A6B]">
              These are the systems that give you your time back and let the company grow without you.
            </p>
            <BookButton />
          </div>
        </section>

        {/* Not About Becoming Better at Selling */}
        <section className="bg-[#1B3A6B] px-6 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">
              This Program Is Not About Becoming Better at Selling
            </h2>
            <p className="mb-6 text-lg text-blue-100">It is about:</p>
            <ul className="space-y-4">
              {[
                'Building systems',
                'Creating predictability',
                'Getting your life back',
                'Increasing company value',
                'Becoming a CEO again',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-lg font-semibold">
                  <span aria-hidden="true" className="text-xl font-bold text-[#F6A46A]">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How You Get There */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              How You Get There: The Founder&apos;s Corner
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              Imagine this — three months from now. You are no longer involved in every deal. Your team knows what to do. Your forecast finally feels real. And for the first time in years, you can focus on growing the business instead of carrying it.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              One focused hour a week with me — a sales leader who has spent 50 years building sales teams and one INC 500 company. We work on your real sales problems. Your pipeline. Your deals. Your hires. Your numbers. Between calls, you have me on email when something needs a fast read.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              But you are not paying for calls and emails. You are paying to stop being the bottleneck. Here is what that buys you:
            </p>
            <ul className="mb-10 space-y-3">
              {[
                'One hour a week that saves you hundreds of hours over the next year.',
                'Proven systems so you skip the expensive trial and error I already paid for.',
                'A playbook your team can run so the business no longer lives or dies on your calendar.',
                'Straight talk. You get what works and what does not. No fluff. No theory.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-xl font-bold text-[#1B3A6B]">The 12-week path</h3>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              Here is the ground we cover. How we tailor each piece to your business is what we map out on your call.
            </p>
            <ol className="mb-10 space-y-4">
              {weeks.map((w) => (
                <li key={w.n} className="flex gap-4 rounded-lg border border-neutral-200 bg-[#F3F5F9] p-4">
                  <span className="shrink-0 text-sm font-bold uppercase tracking-wide text-[#E8610A]">{w.n}</span>
                  <span className="text-neutral-700">
                    <span className="font-bold text-neutral-900">{w.title}</span> {w.detail}
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">
              Twelve weeks. One hour each. A sales engine that no longer depends on you.
            </p>
          </div>
        </section>

        {/* Is This You? */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">Is This You?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-[#E8610A] bg-white p-7">
                <h3 className="mb-5 text-xl font-bold text-[#1B3A6B]">This is for you if</h3>
                <ul className="space-y-3">
                  {[
                    'You are at an earlier stage, need a sales and business coach now, and cannot afford to hire one yet.',
                    'You are a founder at $1M to $10M in revenue, still closing most of the sales yourself.',
                    'You want a sounding board for big decisions from someone who has run the play for 50 years.',
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-neutral-800">
                      <Check />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-7">
                <h3 className="mb-5 text-xl font-bold text-neutral-500">This is not for you if</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-neutral-600">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-neutral-400">✕</span>
                    <span className="leading-relaxed">
                      You want someone to make the calls for you. I build the system and coach you to run it. I do not sell your product for you.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Stop Guessing */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              Founders Stop Guessing and Start Measuring
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              One founder was closing every deal himself. One year later, sales were up 61% and the business turned its first profit in years — built on a system, not more hustle.
            </p>
            <blockquote className="border-l-4 border-[#E8610A] bg-[#F3F5F9] py-5 pl-6 pr-5">
              <p className="text-lg italic leading-relaxed text-neutral-800">
                “Our sales are far better than where they were a year ago. Great job.”
              </p>
              <footer className="mt-3 text-sm font-semibold text-[#1B3A6B]">— Kevin Zhao, CEO, ZBSPOS.com</footer>
            </blockquote>
          </div>
        </section>

        {/* Why Founders Hire Me — About the Author */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">Why Founders Hire Me</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-7 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src="/images/louie-bernstein.png"
                  alt="Louie Bernstein, Fractional Sales Leader and INC 500 founder"
                  width={112}
                  height={112}
                  className="h-28 w-28 shrink-0 rounded-full border-2 border-[#1B3A6B]/15 object-cover"
                />
                <div>
                  <p className="mb-4 text-lg leading-relaxed text-neutral-700">
                    Because I&apos;ve been exactly where you are. I bootstrapped and ran a company for 22 years. INC 500 Winner. I know what it feels like to:
                  </p>
                  <ul className="mb-4 space-y-2">
                    {['Worry about payroll', 'Carry every big sale', 'Work nights and weekends', 'Wonder if you can ever step away'].map((t) => (
                      <li key={t} className="flex gap-3 text-neutral-700">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-semibold leading-relaxed text-[#1B3A6B]">
                    I&apos;ve made the mistakes. Now I help founders avoid them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Investment */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">Your Investment</h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              You are not buying coaching. You are buying your time back, a pipeline you can trust, and a company that runs without you — on a small monthly investment, with no big hire and no big overhead.
            </p>
            <div className="mb-8 rounded-xl border-2 border-[#E8610A] bg-[#FBEEE3] p-7 sm:p-8">
              <p className="mb-3 text-lg leading-relaxed text-neutral-800">
                <span className="text-2xl font-extrabold text-[#1B3A6B]">$1,400 per month.</span> That comes to $350 per session. One wrong sales hire or missed deal can cost six figures in salary, ramp, and lost pipeline.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-neutral-800">
                Twelve-week minimum to start, then month to month. One rescheduled meeting per month. If you do not continue, you keep all the materials.
              </p>
              <ul className="space-y-3">
                {[
                  'One new deal can pay for months of coaching.',
                  'We only start if our first call proves this is a fit.',
                  'I work with a small number of founders at a time, so each one gets my focus.',
                  'Want me building it with you in the trenches, not just coaching? Ask about my full Fractional Sales Leadership Program on the call.',
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-neutral-800">
                    <Check />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BookButton />
          </div>
        </section>

        {/* When Sales Stops Depending on You */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              What Happens When Sales Stops Depending on You?
            </h2>
            <ul className="mb-8 space-y-3">
              {[
                'You become a better CEO.',
                'A better spouse.',
                'A better parent.',
                'A better leader.',
                'You sleep better.',
                'You stop carrying the company alone.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg text-neutral-700">
                  <Check />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">That is the real transformation.</p>
          </div>
        </section>

        {/* Every Month You Wait */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">Every Month You Wait</h2>
            <ul className="mb-8 space-y-3">
              {[
                'More founder dependency and more burnout.',
                'More growth left on the table.',
                'More risk if you get sick or want out.',
                'Your business becomes less valuable and harder to sell.',
                'Good people leave because everything bottlenecks with you.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">
              Your competitors are building systems. Do not carry the company on your back for another year.
            </p>
          </div>
        </section>

        {/* Questions Founders Ask — accordion */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              Questions Founders Ask
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-neutral-200 bg-white p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-neutral-900">
                    <h3 className="text-lg font-bold">{f.q}</h3>
                    <span aria-hidden="true" className="shrink-0 text-2xl font-normal text-[#E8610A] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-neutral-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL — dark navy band + inline Calendly embed */}
        <section className="bg-[#1B3A6B] px-6 py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">Would Your Sales Survive Without You?</h2>
            <p className="mb-4 text-xl font-bold text-[#F6A46A]">Let&apos;s Find Out. Book Your Call.</p>
            <p className="mx-auto mb-8 max-w-xl text-lg text-blue-100">
              Book a free 30-minute call and we&apos;ll walk through what happens each week.
            </p>
            <div
              className="calendly-inline-widget mx-auto overflow-hidden rounded-xl bg-white"
              data-url={CALENDLY}
              style={{ minWidth: '320px', height: '700px' }}
            />
            <div className="mt-6">
              <BookButton />
            </div>
          </div>
        </section>
      </main>

      {/* Footer — one link home */}
      <footer className="bg-[#12294d] px-6 py-8 text-center text-sm text-blue-200/70">
        <p>
          50 years in sales · Founder, INC 500 company ·{' '}
          <Link href="https://louiebernstein.com" className="font-semibold text-white underline underline-offset-2 hover:text-[#F6A46A]">
            louiebernstein.com
          </Link>
        </p>
      </footer>
    </div>
  )
}
