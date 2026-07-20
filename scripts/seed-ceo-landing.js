/**
 * Seed script: The Founder's Corner™ landing page
 * - ceoLanding → /ceo
 *
 * Run with (loads .env.local automatically via -r dotenv/config if desired):
 * node scripts/seed-ceo-landing.js
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load .env.local so NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are available
try {
  const envPath = path.join(__dirname, '..', '.env.local')
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
} catch {}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  ceoLanding: {
    // Shared CTA
    ctaButtonLabel: 'Book Your Discovery Call',

    // Hero
    heroKicker: 'The Founder’s Corner™ · In Your Corner to Help You Grow Your Business',
    heroH1Line1: 'Are YOU the Real Sales Department?',
    heroH1Line2: 'Build a Company That Grows Without You.',
    heroSubhead:
      'In 12 weeks, turn founder-led sales into a system your team can run — so revenue keeps coming when you step away, and you get your time, your focus, and your life back.',
    heroAccent: 'Grow and scale your company — for a fraction of the cost of a full-time VP of Sales.',
    heroMicrocopy:
      'A free 30-minute call. No pitch. We map where you are now and where you want to be. If it is not a fit, I will tell you.',
    heroProof: 'One founder grew sales 61% in a single year — without adding a single salesperson.',

    // Maybe This Sounds Familiar
    familiarHeading: 'Maybe This Sounds Familiar',
    familiarP1:
      'You wake up thinking about sales. You go to bed thinking about sales. You cannot remember the last vacation where you did not check your phone. You know you need systems. You do not know where to start.',
    familiarP2:
      'And in the back of your mind, the same questions sit there. What happens if I get sick? What happens if I want to step away for a month? What happens if I want to sell this business someday?',
    familiarP3: 'If that lands, you are not failing. You are still the system. Let us fix that.',
    familiarQuote:
      '“We now had everyone working off the same playbook, and it gave us consistency. Results were much easier to measure.”',
    familiarQuoteAttr: '— Neal Reynolds, CEO, BankMarketingCenter.com',

    // Costing You More
    costHeading: 'Founder-Led Sales Is Costing You More Than You Think',
    costP1:
      'Do the math on your own time. If an hour of your time is worth $300, and you spend 20 hours a week running and closing sales, that is more than $300,000 a year — gone.',
    costP2: 'And that is before the real costs:',
    costItem1: 'The deals you miss because you were buried in other deals.',
    costItem2: 'The hire you keep delaying.',
    costItem3: 'The forecast you cannot trust.',
    costItem4: 'The growth that stalls at the edge of your calendar.',
    costItem5: 'The toll it takes on you and the people at home.',
    costClosing: 'You are the most expensive salesperson in your company. And you cannot scale yourself.',

    // If Nothing Changes
    nothingHeading: 'If Nothing Changes',
    nothingP1: 'Picture twelve months from now, with everything the same.',
    nothingItem1: 'You are still closing most of the deals.',
    nothingItem2: 'Your pipeline still depends on you.',
    nothingItem3: 'You still cannot step away without sales slowing down.',
    nothingItem4: 'Your growth is still capped by your calendar.',
    nothingClosing:
      'Businesses do not scale. Systems scale. The only question is whether you build one this year — or carry the company on your back for another.',

    // Today vs Could Be
    compareHeading: 'Where You Are Today vs. Where You Could Be',
    todayHeading: 'Where you are today',
    todayItem1: 'You close the biggest deals.',
    todayItem2: 'Pipeline reviews feel like guesswork.',
    todayItem3: 'Your reps need you in every conversation.',
    todayItem4: 'You cannot take your foot off the gas.',
    todayItem5: 'Sales owns your calendar.',
    futureHeading: 'Where you could be in 12 weeks',
    futureItem1: 'Your team runs pipeline reviews without you.',
    futureItem2: 'Your forecast is predictable.',
    futureItem3: 'New reps ramp faster.',
    futureItem4: 'You finally trust your CRM.',
    futureItem5: 'You spend your time on strategy, not chasing deals.',
    futureItem6: 'You can take real time off.',

    // What You Walk Away With
    walkHeading: 'What You Walk Away With in 12 Weeks',
    walkItem1: 'A documented sales process that gives you consistency. No more winging it.',
    walkItem2: 'Defined pipeline stages that help you forecast your cash flow.',
    walkItem3: 'Accountabilities Documents for every role. What and when defined. No surprises.',
    walkItem4: 'A hiring and onboarding system that gets the best candidates, who can produce quickly.',
    walkItem5:
      'A strict qualifying standard based on your ICP. Keeps reps from chasing bad deals and wasting their time and YOUR money.',
    walkItem6: 'A weekly operating cadence your team runs.',
    walkClosing: 'These are the systems that give you your time back and let the company grow without you.',

    // Not About Better Selling
    notSellingHeading: 'This Program Is Not About Becoming Better at Selling',
    notSellingIntro: 'It is about:',
    notSellingItem1: 'Building systems',
    notSellingItem2: 'Creating predictability',
    notSellingItem3: 'Getting your life back',
    notSellingItem4: 'Increasing company value',
    notSellingItem5: 'Becoming a CEO again',

    // How You Get There
    howHeading: 'How You Get There: The Founder’s Corner',
    howP1:
      'Imagine this — three months from now. You are no longer involved in every deal. Your team knows what to do. Your forecast finally feels real. And for the first time in years, you can focus on growing the business instead of carrying it.',
    howP2:
      'One focused hour a week with me — a sales leader who has spent 50 years building sales teams and one INC 500 company. We work on your real sales problems. Your pipeline. Your deals. Your hires. Your numbers. Between calls, you have me on email when something needs a fast read.',
    howP3:
      'But you are not paying for calls and emails. You are paying to stop being the bottleneck. Here is what that buys you:',
    howBuys1: 'One hour a week that saves you hundreds of hours over the next year.',
    howBuys2: 'Proven systems so you skip the expensive trial and error I already paid for.',
    howBuys3: 'A playbook your team can run so the business no longer lives or dies on your calendar.',
    howBuys4: 'Straight talk. You get what works and what does not. No fluff. No theory.',
    pathHeading: 'The 12-week path',
    pathIntro:
      'Here is the ground we cover. How we tailor each piece to your business is what we map out on your call.',
    week1Title: 'Discovery and Current State.',
    week1Detail: 'Map where sales stands today. What works, what’s stuck.',
    week2Title: 'Validate Your ICP.',
    week2Detail: 'Get clear on who best to sell to and who are time-wasters.',
    week3Title: 'Pipeline and Stages.',
    week3Detail: 'Build stages that help forecast cash flow and that prospects earn.',
    week4Title: 'Accountabilities Documents.',
    week4Detail: 'Give every role a clear standard to hit. No surprises.',
    week5Title: 'Inbound and Outbound.',
    week5Detail: 'We’ll build the outreach mix that fits your budget.',
    week6Title: 'Hiring and Onboarding.',
    week6Detail: 'Set up my best-practices hiring system to hire and ramp reps fast.',
    week7Title: 'Compensation and Quotas.',
    week7Detail: 'Set pay and quotas that reward the right actions and protect margin.',
    week8Title: 'CRM as the Source of Truth.',
    week8Detail: 'Make your CRM the one place the truth lives – and you can count on.',
    week9Title: 'The Weekly Sales Rhythm.',
    week9Detail: 'The cadence that runs the team without you.',
    week10Title: 'Forecasting and the Numbers.',
    week10Detail: 'Trade hope-ium for a forecast you can defend.',
    week11Title: 'Social Selling in B2B.',
    week11Detail: 'Learn the strategies for how to get business from LinkedIn and YouTube.',
    week12Title: 'The Founder Exit.',
    week12Detail: 'Step out of the deals and hand the pipeline to your team.',
    howClosing: 'Twelve weeks. One hour each. A sales engine that no longer depends on you.',

    // Is This You?
    isThisHeading: 'Is This You?',
    forYouHeading: 'This is for you if',
    forYouItem1:
      'You are at an earlier stage, need a sales and business coach now, and cannot afford to hire one yet.',
    forYouItem2: 'You are a founder at $1M to $10M in revenue, still closing most of the sales yourself.',
    forYouItem3:
      'You want a sounding board for big decisions from someone who has run the play for 50 years.',
    notForYouHeading: 'This is not for you if',
    notForYouItem1:
      'You want someone to make the calls for you. I build the system and coach you to run it. I do not sell your product for you.',

    // Founders Stop Guessing
    guessingHeading: 'Founders Stop Guessing and Start Measuring',
    guessingP1:
      'One founder was closing every deal himself. One year later, sales were up 61% and the business turned its first profit in years — built on a system, not more hustle.',
    guessingQuote: '“Our sales are far better than where they were a year ago. Great job.”',
    guessingQuoteAttr: '— Kevin Zhao, CEO, ZBSPOS.com',

    // Why Founders Hire Me
    whyHireHeading: 'Why Founders Hire Me',
    whyHireImage: '/images/louie-bernstein.png',
    whyHireP1:
      'Because I’ve been exactly where you are. I bootstrapped and ran a company for 22 years. INC 500 Winner. I know what it feels like to:',
    whyHireItem1: 'Worry about payroll',
    whyHireItem2: 'Carry every big sale',
    whyHireItem3: 'Work nights and weekends',
    whyHireItem4: 'Wonder if you can ever step away',
    whyHireClosing: 'I’ve made the mistakes. Now I help founders avoid them.',

    // Your Investment
    investHeading: 'Your Investment',
    investP1:
      'You are not buying coaching. You are buying your time back, a pipeline you can trust, and a company that runs without you — on a small monthly investment, with no big hire and no big overhead.',
    priceHeadline: '$1,400 per month.',
    priceLine1:
      'That comes to $350 per session. One wrong sales hire or missed deal can cost six figures in salary, ramp, and lost pipeline.',
    priceLine2:
      'Twelve-week minimum to start, then month to month. One rescheduled meeting per month. If you do not continue, you keep all the materials.',
    priceItem1: 'One new deal can pay for months of coaching.',
    priceItem2: 'We only start if our first call proves this is a fit.',
    priceItem3: 'I work with a small number of founders at a time, so each one gets my focus.',
    priceItem4:
      'Want me building it with you in the trenches, not just coaching? Ask about my full Fractional Sales Leadership Program on the call.',

    // When Sales Stops Depending on You
    stopHeading: 'What Happens When Sales Stops Depending on You?',
    stopItem1: 'You become a better CEO.',
    stopItem2: 'A better spouse.',
    stopItem3: 'A better parent.',
    stopItem4: 'A better leader.',
    stopItem5: 'You sleep better.',
    stopItem6: 'You stop carrying the company alone.',
    stopClosing: 'That is the real transformation.',

    // Every Month You Wait
    waitHeading: 'Every Month You Wait',
    waitItem1: 'More founder dependency and more burnout.',
    waitItem2: 'More growth left on the table.',
    waitItem3: 'More risk if you get sick or want out.',
    waitItem4: 'Your business becomes less valuable and harder to sell.',
    waitItem5: 'Good people leave because everything bottlenecks with you.',
    waitClosing:
      'Your competitors are building systems. Do not carry the company on your back for another year.',

    // FAQ
    faqHeading: 'Questions Founders Ask',
    faq1Question: 'How is this different from hiring a VP of Sales?',
    faq1Answer:
      'A VP is a six-figure bet on one person, and most do not last two years. This builds the system first, so any rep can run it, at a fraction of the cost. When you are ready to hire, you hire into something that works.',
    faq2Question: 'I am not at $1M yet. Can this still help?',
    faq2Answer:
      'Yes. Earlier-stage founders use this to build the right habits before the wrong ones set in. We start where you are.',
    faq3Question: 'How much of my time does it take?',
    faq3Answer:
      'One hour a week on our call, plus the work we agree on between sessions. It is built to give you time back, not take it.',
    faq4Question: 'What happens on the call?',
    faq4Answer:
      'We look at where your sales stand, name the one thing keeping sales stuck on you, and decide together if this is a fit. No pitch. If it is not right, I will tell you.',
    faq5Question: 'Can I cancel?',
    faq5Answer:
      'The first 12 weeks build the foundation, so I ask for that commitment. After that it is month to month.',
    faq6Question: 'What if I want you more hands-on?',
    faq6Answer:
      'Ask about my full Fractional Sales Leadership Program, where I build it with you week to week.',

    // Final band
    finalHeading: 'Would Your Sales Survive Without You?',
    finalSubhead: 'Let’s Find Out. Book Your Call.',
    finalLine: 'Book a free 30-minute call and we’ll walk through what happens each week.',

    // Footer
    footerText: '50 years in sales · Founder, INC 500 company ·',
  },
}

async function seed() {
  for (const [section, content] of Object.entries(sections)) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section, content }, { onConflict: 'section' })

    if (error) {
      console.error(`❌ ${section}:`, error.message)
    } else {
      console.log(`✅ ${section}`)
    }
  }
  console.log('Done.')
}

seed()
