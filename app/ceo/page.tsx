'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes'
const CMS_SECTION = 'ceoLanding'

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

function BookButton({ label, full = false }: { label: string; full?: boolean }) {
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
      className={`inline-flex items-center justify-center rounded-lg bg-[#E8610A] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.03] hover:bg-[#cf560a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8610A] ${full ? 'w-full sm:w-auto' : ''}`}
    >
      {label}
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

type CalendlyWidget = { initPopupWidget: (opts: { url: string }) => void }
declare global {
  interface Window {
    Calendly?: CalendlyWidget
  }
}

export default function CeoLandingPage() {
  useCalendly()
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const ctaLabel = v('ctaButtonLabel', 'Book Your Discovery Call')
  const finalCtaLabel = v('finalCtaButtonLabel', 'Book My Founder Exit Call')

  const breakItems = [
    v('breakItem1', 'Great reps leave.'),
    v('breakItem2', 'Forecasts become fiction.'),
    v('breakItem3', 'Revenue stalls.'),
    v('breakItem4', 'Company valuation suffers.'),
    v('breakItem5', 'You burn out.'),
  ]

  const pictureLines = [
    v('pictureLine1', 'You take a vacation without reading your email.'),
    v('pictureLine2', 'Your phone doesn’t ring.'),
    v('pictureLine3', 'Sales meetings happen without you.'),
    v('pictureLine4', 'Pipeline reviews happen without you.'),
    v('pictureLine5', 'Revenue still comes in.'),
    v('pictureLine6', 'For the first time in years...'),
  ]

  const costItems = [
    v('costItem1', 'The deals you miss because you were buried in other deals.'),
    v('costItem2', 'The hire you keep delaying.'),
    v('costItem3', 'The forecast you cannot trust.'),
    v('costItem4', 'The growth that stalls at the edge of your calendar.'),
    v('costItem5', 'The toll it takes on you and the people at home.'),
  ]

  const nothingItems = [
    v('nothingItem1', 'You are still closing most of the deals.'),
    v('nothingItem2', 'Your pipeline still depends on you.'),
    v('nothingItem3', 'You still cannot step away without sales slowing down.'),
    v('nothingItem4', 'Your growth is still capped by your calendar.'),
  ]

  const todayItems = [
    v('todayItem1', 'You close the biggest deals.'),
    v('todayItem2', 'Pipeline reviews feel like guesswork.'),
    v('todayItem3', 'Your reps need you in every conversation.'),
    v('todayItem4', 'You cannot take your foot off the gas.'),
    v('todayItem5', 'Sales owns your calendar.'),
  ]

  const futureItems = [
    v('futureItem1', 'Your team runs pipeline reviews without you.'),
    v('futureItem2', 'Your forecast is predictable.'),
    v('futureItem3', 'New reps ramp faster.'),
    v('futureItem4', 'You finally trust your CRM.'),
    v('futureItem5', 'You spend your time on strategy, not chasing deals.'),
    v('futureItem6', 'You can take real time off.'),
  ]

  const walkItems = [
    v('walkItem1', 'A documented sales process that gives you consistency. No more winging it.'),
    v('walkItem2', 'Defined pipeline stages that help you forecast your cash flow.'),
    v('walkItem3', 'Accountabilities Documents for every role. What and when defined. No surprises.'),
    v('walkItem4', 'A hiring and onboarding system that gets the best candidates, who can produce quickly.'),
    v('walkItem5', 'A strict qualifying standard based on your ICP. Keeps reps from chasing bad deals and wasting their time and YOUR money.'),
    v('walkItem6', 'A weekly operating cadence your team runs.'),
  ]

  const notSellingItems = [
    v('notSellingItem1', 'Building systems'),
    v('notSellingItem2', 'Creating predictability'),
    v('notSellingItem3', 'Getting your life back'),
    v('notSellingItem4', 'Increasing company value'),
    v('notSellingItem5', 'Becoming a CEO again'),
  ]

  const howBuys = [
    v('howBuys1', 'One hour a week that saves you hundreds of hours over the next year.'),
    v('howBuys2', 'Proven systems so you skip the expensive trial and error I already paid for.'),
    v('howBuys3', 'A playbook your team can run so the business no longer lives or dies on your calendar.'),
    v('howBuys4', 'Straight talk. You get what works and what does not. No fluff. No theory.'),
  ]

  const weeks = [
    { n: 'Week 1', title: v('week1Title', 'Discovery and Current State.'), detail: v('week1Detail', 'Map where sales stands today. What works, what’s stuck.') },
    { n: 'Week 2', title: v('week2Title', 'Validate Your ICP.'), detail: v('week2Detail', 'Get clear on who best to sell to and who are time-wasters.') },
    { n: 'Week 3', title: v('week3Title', 'Pipeline and Stages.'), detail: v('week3Detail', 'Build stages that help forecast cash flow and that prospects earn.') },
    { n: 'Week 4', title: v('week4Title', 'Accountabilities Documents.'), detail: v('week4Detail', 'Give every role a clear standard to hit. No surprises.') },
    { n: 'Week 5', title: v('week5Title', 'Inbound and Outbound.'), detail: v('week5Detail', 'We’ll build the outreach mix that fits your budget.') },
    { n: 'Week 6', title: v('week6Title', 'Hiring and Onboarding.'), detail: v('week6Detail', 'Set up my best-practices hiring system to hire and ramp reps fast.') },
    { n: 'Week 7', title: v('week7Title', 'Compensation and Quotas.'), detail: v('week7Detail', 'Set pay and quotas that reward the right actions and protect margin.') },
    { n: 'Week 8', title: v('week8Title', 'CRM as the Source of Truth.'), detail: v('week8Detail', 'Make your CRM the one place the truth lives – and you can count on.') },
    { n: 'Week 9', title: v('week9Title', 'The Weekly Sales Rhythm.'), detail: v('week9Detail', 'The cadence that runs the team without you.') },
    { n: 'Week 10', title: v('week10Title', 'Forecasting and the Numbers.'), detail: v('week10Detail', 'Trade hope-ium for a forecast you can defend.') },
    { n: 'Week 11', title: v('week11Title', 'Social Selling in B2B.'), detail: v('week11Detail', 'Learn the strategies for how to get business from LinkedIn and YouTube.') },
    { n: 'Week 12', title: v('week12Title', 'The Founder Exit.'), detail: v('week12Detail', 'Step out of the deals and hand the pipeline to your team.') },
  ]

  const forYouItems = [
    v('forYouItem1', 'You are at an earlier stage, need a sales and business coach now, and cannot afford to hire one yet.'),
    v('forYouItem2', 'You are a founder at $1M to $10M in revenue, still closing most of the sales yourself.'),
    v('forYouItem3', 'You want a sounding board for big decisions from someone who has run the play for 50 years.'),
    v('forYouItem4', 'You are considering an exit, acquisition, or wealth creation.'),
  ]

  const whyHireItems = [
    v('whyHireItem1', 'Worry about payroll'),
    v('whyHireItem2', 'Carry every big sale'),
    v('whyHireItem3', 'Work nights and weekends'),
    v('whyHireItem4', 'Wonder if you can ever step away'),
  ]

  const priceItems = [
    v('priceItem1', 'One new deal can pay for months of coaching.'),
    v('priceItem2', 'We only start if our first call proves this is a fit.'),
    v('priceItem3', 'I work with a small number of founders at a time, so each one gets my focus.'),
    v('priceItem4', 'Want me building it with you in the trenches, not just coaching? Ask about my full Fractional Sales Leadership Program on the call.'),
  ]

  const stopItems = [
    v('stopItem1', 'You become a better CEO.'),
    v('stopItem2', 'A better spouse.'),
    v('stopItem3', 'A better parent.'),
    v('stopItem4', 'A better leader.'),
    v('stopItem5', 'You sleep better.'),
    v('stopItem6', 'You stop carrying the company alone.'),
  ]

  const waitItems = [
    v('waitItem1', 'More founder dependency and more burnout.'),
    v('waitItem2', 'More growth left on the table.'),
    v('waitItem3', 'More risk if you get sick or want out.'),
    v('waitItem4', 'Your business becomes less valuable and harder to sell.'),
    v('waitItem5', 'Good people leave because everything bottlenecks with you.'),
  ]

  const defaultFaqs = [
    { q: 'How is this different from hiring a VP of Sales?', a: 'A VP is a six-figure bet on one person, and most do not last two years. This builds the system first, so any rep can run it, at a fraction of the cost. When you are ready to hire, you hire into something that works.' },
    { q: 'I am not at $1M yet. Can this still help?', a: 'Yes. Earlier-stage founders use this to build the right habits before the wrong ones set in. We start where you are.' },
    { q: 'How much of my time does it take?', a: 'One hour a week on our call, plus the work we agree on between sessions. It is built to give you time back, not take it.' },
    { q: 'What happens on the call?', a: 'We look at where your sales stand, name the one thing keeping sales stuck on you, and decide together if this is a fit. No pitch. If it is not right, I will tell you.' },
    { q: 'Can I cancel?', a: 'The first 12 weeks build the foundation, so I ask for that commitment. After that it is month to month.' },
    { q: 'What if I want you more hands-on?', a: 'Ask about my full Fractional Sales Leadership Program, where I build it with you week to week.' },
  ]
  const displayFaqs = cmsfaqs(6, defaultFaqs)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: displayFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div className="font-sans text-[#1f2937]" style={{ fontFamily: 'var(--font-inter), Inter, Arial, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              {v('heroKicker', 'The Founder’s Corner™ · In Your Corner to Help You Grow Your Business')}
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {v('heroH1Line1', 'Are YOU the Real Sales Department?')}
              <span className="mt-1 block text-2xl font-bold text-white/90 sm:text-3xl md:text-4xl">
                {v('heroH1Line2', 'Build a Company That Grows Without You.')}
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-base text-blue-100 sm:text-lg">
              {v('heroSubhead', 'In 12 weeks, turn founder-led sales into a system your team can run — so revenue keeps coming when you step away, and you get your time, your focus, and your life back.')}
            </p>
            <p className="mx-auto mb-5 max-w-2xl text-base font-bold text-[#F6A46A] sm:text-lg">
              {v('heroAccent', 'Grow and scale your company — for a fraction of the cost of a full-time VP of Sales.')}
            </p>
            <BookButton label={ctaLabel} />
            <p className="mx-auto mt-3 max-w-xl text-xs text-blue-200/80 sm:text-sm">
              {v('heroMicrocopy', 'A free 30-minute call. No pitch. We map where you are now and where you want to be. If it is not a fit, I will tell you.')}
            </p>
            <p className="mx-auto mt-5 max-w-2xl border-t border-white/15 pt-5 text-lg font-bold text-white">
              {v('heroProof', '“You have put together a really powerful system for any small business that wants to grow.” — B2B Investor')}
            </p>
          </div>
        </section>

        {/* Maybe This Sounds Familiar */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">{v('familiarHeading', 'Maybe This Sounds Familiar')}</h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('familiarP1', 'You wake up thinking about sales. You go to bed thinking about sales. You cannot remember the last vacation where you did not check your phone. You know you need systems. You do not know where to start.')}
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('familiarP2', 'And in the back of your mind, the same questions sit there. What happens if I get sick? What happens if I want to step away for a month? What happens if I want to sell this business someday?')}
            </p>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              {v('familiarP3', 'If that lands, you are not failing. You are still the system. Let us fix that.')}
            </p>
            <blockquote className="border-l-4 border-[#E8610A] bg-[#F3F5F9] py-5 pl-6 pr-5">
              <p className="text-lg italic leading-relaxed text-neutral-800">
                {v('familiarQuote', '“We now had everyone working off the same playbook, and it gave us consistency. Results were much easier to measure.”')}
              </p>
              <footer className="mt-3 text-sm font-semibold text-[#1B3A6B]">
                {v('familiarQuoteAttr', '— Neal Reynolds, CEO, BankMarketingCenter.com')}
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Costing You More Than You Think */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              {v('costHeading', 'Founder-Led Sales Is Costing You More Than You Think')}
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('costP1', 'Do the math on your own time. If an hour of your time is worth $300, and you spend 20 hours a week running and closing sales, that is more than $300,000 a year — gone.')}
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">{v('costP2', 'And that is before the real costs:')}</p>
            <ul className="mb-6 space-y-3">
              {costItems.map((t, i) => (
                <li key={i} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">
              {v('costClosing', 'You are the most expensive salesperson in your company. And you cannot scale yourself.')}
            </p>
          </div>
        </section>

        {/* If Nothing Changes */}
        <section className="bg-white px-6 pt-14 pb-8 md:pt-20 md:pb-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">{v('nothingHeading', 'If Nothing Changes')}</h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('nothingP1', 'Picture twelve months from now, with everything the same.')}
            </p>
            <ul className="mb-6 space-y-3">
              {nothingItems.map((t, i) => (
                <li key={i} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">
              {v('nothingClosing', 'Businesses do not scale. Systems scale. The only question is whether you build one this year — or carry the company on your back for another.')}
            </p>
            <blockquote className="mt-10 border-l-4 border-[#E8610A] bg-[#F3F5F9] py-6 pl-6 pr-5">
              <p className="text-lg italic leading-relaxed text-neutral-800">
                {v('nothingTestimonial', '“Louie came in and helped bring together all our sales efforts into a system with a Sales Playbook, realistic pipeline, and defined roles. We are better off from having Louie here.”')}
              </p>
              <footer className="mt-3 text-sm font-semibold text-[#1B3A6B]">
                {v('nothingTestimonialAttr', '— Ted Alvarado')}
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Founder-Led Sales Eventually Breaks Every Company */}
        <section className="bg-white px-6 pb-14 pt-4 md:pb-20 md:pt-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              {v('breakHeading', 'Founder-Led Sales Eventually Breaks Every Company.')}
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">{v('breakIntro', 'Because:')}</p>
            <ul className="mb-8 space-y-3">
              {breakItems.map((t, i) => (
                <li key={i} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('breakSlow', 'This happens slowly.')} {v('breakRealize', 'Until one day you realize:')}
            </p>
            <p className="text-xl font-bold leading-relaxed text-[#1B3A6B]">{v('breakJob', 'You built yourself a job.')}</p>
            <p className="text-xl font-bold leading-relaxed text-[#1B3A6B]">{v('breakNotCompany', 'Not a company.')}</p>
          </div>
        </section>

        {/* Where You Are Today vs Where You Could Be */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              {v('compareHeading', 'Where You Are Today vs. Where You Could Be')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-7">
                <h3 className="mb-5 text-xl font-bold text-neutral-500">{v('todayHeading', 'Where you are today')}</h3>
                <ul className="space-y-3">
                  {todayItems.map((t, i) => (
                    <li key={i} className="flex gap-3 text-neutral-600">
                      <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-neutral-400">✕</span>
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-[#E8610A] bg-white p-7 shadow-sm">
                <h3 className="mb-5 text-xl font-bold text-[#1B3A6B]">{v('futureHeading', 'Where you could be in 12 weeks')}</h3>
                <ul className="space-y-3">
                  {futureItems.map((t, i) => (
                    <li key={i} className="flex gap-3 text-neutral-800">
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
              {v('walkHeading', 'What You Walk Away With in 12 Weeks')}
            </h2>
            <ul className="mb-8 space-y-4">
              {walkItems.map((t, i) => (
                <li key={i} className="flex gap-3 text-lg text-neutral-700">
                  <Check />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8 text-lg font-bold leading-relaxed text-[#1B3A6B]">
              {v('walkClosing', 'These are the systems that give you your time back and let the company grow without you.')}
            </p>
            <BookButton label={ctaLabel} />
          </div>
        </section>

        {/* Not About Becoming Better at Selling */}
        <section className="bg-[#1B3A6B] px-6 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">
              {v('notSellingHeading', 'This Program Is Not About Becoming Better at Selling')}
            </h2>
            <p className="mb-6 text-lg text-blue-100">{v('notSellingIntro', 'It is about:')}</p>
            <ul className="space-y-4">
              {notSellingItems.map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-semibold">
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
              {v('howHeading', 'How You Get There: The Founder’s Corner')}
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('howP1', 'Imagine this — three months from now. You are no longer involved in every deal. Your team knows what to do. Your forecast finally feels real. And for the first time in years, you can focus on growing the business instead of carrying it.')}
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('howP2', 'One focused hour a week with me — a sales leader who has spent 50 years building sales teams and one INC 500 company. We work on your real sales problems. Your pipeline. Your deals. Your hires. Your numbers. Between calls, you have me on email when something needs a fast read.')}
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              {v('howP3', 'But you are not paying for calls and emails. You are paying to stop being the bottleneck. Here is what that buys you:')}
            </p>
            <ul className="mb-10 space-y-3">
              {howBuys.map((t, i) => (
                <li key={i} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-xl font-bold text-[#1B3A6B]">{v('pathHeading', 'The 12-week path')}</h3>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              {v('pathIntro', 'Here is the ground we cover. How we tailor each piece to your business is what we map out on your call.')}
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
              {v('howClosing', 'Twelve weeks. One hour each. A sales engine that no longer depends on you.')}
            </p>
          </div>
        </section>

        {/* Is This You? */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">{v('isThisHeading', 'Is This You?')}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-[#E8610A] bg-white p-7">
                <h3 className="mb-5 text-xl font-bold text-[#1B3A6B]">{v('forYouHeading', 'This is for you if')}</h3>
                <ul className="space-y-3">
                  {forYouItems.map((t, i) => (
                    <li key={i} className="flex gap-3 text-neutral-800">
                      <Check />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xl font-bold text-[#1B3A6B]">
                  {v('forYouFootnote', 'Companies dependent on the founder sell for less.')}
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-7">
                <h3 className="mb-5 text-xl font-bold text-neutral-500">{v('notForYouHeading', 'This is not for you if')}</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-neutral-600">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-neutral-400">✕</span>
                    <span className="leading-relaxed">
                      {v('notForYouItem1', 'You want someone to make the calls for you. I build the system and coach you to run it. I do not sell your product for you.')}
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
              {v('guessingHeading', 'Founders Stop Guessing and Start Measuring')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              {v('guessingP1', 'One founder was closing every deal himself. One year later, sales were up 61% and the business turned its first profit in years — built on a system, not more hustle.')}
            </p>
            <blockquote className="border-l-4 border-[#E8610A] bg-[#F3F5F9] py-5 pl-6 pr-5">
              <p className="text-lg italic leading-relaxed text-neutral-800">
                {v('guessingQuote', '“Our sales are far better than where they were a year ago. Great job.”')}
              </p>
              <footer className="mt-3 text-sm font-semibold text-[#1B3A6B]">{v('guessingQuoteAttr', '— Kevin Zhao, CEO, ZBSPOS.com')}</footer>
            </blockquote>
          </div>
        </section>

        {/* Picture This: One Year From Now */}
        <section className="bg-[#1B3A6B] px-6 py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">
              {v('pictureHeading', 'Picture this: One Year From Now.')}
            </h2>
            <div className="space-y-3">
              {pictureLines.map((line, i) => (
                <p key={i} className="text-lg text-blue-100 sm:text-xl">{line}</p>
              ))}
            </div>
            <p className="mt-8 text-2xl font-extrabold text-[#F6A46A] sm:text-3xl">
              {v('pictureClosing', 'You feel like a CEO again.')}
            </p>
          </div>
        </section>

        {/* Why Founders Hire Me — About the Author */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">{v('whyHireHeading', 'Why Founders Hire Me')}</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-7 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src={v('whyHireImage', '/images/louie-bernstein.png')}
                  alt="Louie Bernstein, Fractional Sales Leader and INC 500 founder"
                  width={112}
                  height={112}
                  className="h-28 w-28 shrink-0 rounded-full border-2 border-[#1B3A6B]/15 object-cover"
                />
                <div>
                  <p className="mb-4 text-lg leading-relaxed text-neutral-700">
                    {v('whyHireP1', 'Because I’ve been exactly where you are. I bootstrapped and ran a company for 22 years. INC 500 Winner. I know what it feels like to:')}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {whyHireItems.map((t, i) => (
                      <li key={i} className="flex gap-3 text-neutral-700">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-semibold leading-relaxed text-[#1B3A6B]">
                    {v('whyHireClosing', 'I’ve made the mistakes. Now I help founders avoid them.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Investment */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">{v('investHeading', 'Your Investment')}</h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              {v('investP1', 'You are not buying coaching. You are buying your time back, a pipeline you can trust, and a company that runs without you — on a small monthly investment, with no big hire and no big overhead.')}
            </p>
            <div className="mb-8 rounded-xl border-2 border-[#E8610A] bg-[#FBEEE3] p-7 sm:p-8">
              <p className="mb-3 text-lg leading-relaxed text-neutral-800">
                <span className="text-2xl font-extrabold text-[#1B3A6B]">{v('priceHeadline', '$1,400 per month.')}</span> {v('priceLine1', 'That comes to $350 per session. One wrong sales hire or missed deal can cost six figures in salary, ramp, and lost pipeline.')}
              </p>
              <p className="mb-6 text-lg leading-relaxed text-neutral-800">
                {v('priceLine2', 'Twelve-week minimum to start, then month to month. One rescheduled meeting per month. If you do not continue, you keep all the materials.')}
              </p>
              <ul className="space-y-3">
                {priceItems.map((t, i) => (
                  <li key={i} className="flex gap-3 text-neutral-800">
                    <Check />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mb-8 text-lg font-semibold leading-relaxed text-[#1B3A6B]">
              {v('investFootnote', 'Priced for companies where the budget is small but the need is big.')}
            </p>
            <BookButton label={ctaLabel} />
          </div>
        </section>

        {/* When Sales Stops Depending on You */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              {v('stopHeading', 'What Happens When Sales Stops Depending on You?')}
            </h2>
            <ul className="mb-8 space-y-3">
              {stopItems.map((t, i) => (
                <li key={i} className="flex gap-3 text-lg text-neutral-700">
                  <Check />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">{v('stopClosing', 'That is the real transformation.')}</p>
          </div>
        </section>

        {/* Every Month You Wait */}
        <section className="bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">{v('waitHeading', 'Every Month You Wait')}</h2>
            <ul className="mb-8 space-y-3">
              {waitItems.map((t, i) => (
                <li key={i} className="flex gap-3 text-lg text-neutral-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8610A]" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold leading-relaxed text-[#1B3A6B]">
              {v('waitClosing', 'Your competitors are building systems. Do not carry the company on your back for another year.')}
            </p>
          </div>
        </section>

        {/* Questions Founders Ask — accordion */}
        <section className="bg-[#F3F5F9] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1B3A6B] sm:text-3xl">
              {v('faqHeading', 'Questions Founders Ask')}
            </h2>
            <div className="space-y-4">
              {displayFaqs.map((f, i) => (
                <details key={i} className="group rounded-xl border border-neutral-200 bg-white p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-neutral-900">
                    <h3 className="text-lg font-bold">{f.q}</h3>
                    <span aria-hidden="true" className="shrink-0 text-2xl font-normal text-[#E8610A] transition-transform group-open:rotate-45">+</span>
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
            <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">{v('finalHeading', 'Would Your Sales Survive Without You?')}</h2>
            <p className="mb-4 text-xl font-bold text-[#F6A46A]">{v('finalSubhead', 'Let’s Find Out. Book Your Call.')}</p>
            <p className="mx-auto mb-8 max-w-xl text-lg text-blue-100">
              {v('finalLine', 'Book a free 30-minute call and we’ll walk through what happens each week.')}
            </p>
            <div
              className="calendly-inline-widget mx-auto overflow-hidden rounded-xl bg-white"
              data-url={CALENDLY}
              style={{ minWidth: '320px', height: '700px' }}
            />
            <div className="mt-6">
              <BookButton label={finalCtaLabel} />
            </div>
            {/* Award badges — INC 500 (left) + LinkedIn Top Voice (right) */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Inc500.jpg" alt="Inc. 500 Winner" className="h-[76px] w-auto rounded-lg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/linkedin-top-voice.png" alt="LinkedIn Top Voice" className="h-[76px] w-auto" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer — one link home */}
      <footer className="bg-[#12294d] px-6 py-8 text-center text-lg text-blue-200/70">
        <p>
          {v('footerText', '50 years in sales · Founder, INC 500 company ·')}{' '}
          <Link href="https://louiebernstein.com" className="font-semibold text-white underline underline-offset-2 hover:text-[#F6A46A]">
            louiebernstein.com
          </Link>
        </p>
      </footer>
    </div>
  )
}
