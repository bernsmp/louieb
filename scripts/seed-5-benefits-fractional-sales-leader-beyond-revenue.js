/**
 * Seed script: What Are the 5 Benefits of a Fractional Sales Leader for a Small Business?
 * - seoFiveBenefitsFslBeyondRevenue → /5-benefits-fractional-sales-leader-beyond-revenue
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-5-benefits-fractional-sales-leader-beyond-revenue.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoFiveBenefitsFslBeyondRevenue: {
    // Hero
    heroTag: 'Beyond Revenue',
    heroLine1: 'What Are the 5 Benefits of a Fractional Sales Leader',
    heroAccent: 'for a Small Business?',
    heroH2: 'And these have nothing to do with revenue.',
    heroDescription:
      "For $1M to $10M ARR founders stuck in founder-led sales, every fractional pitch promises more revenue. The bigger payoff is what happens to your calendar, your nervous system, your next hire, your next board meeting, and the system you leave behind.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "The real ROI of a Fractional Sales Leader is not the extra revenue — it is the founder hours back, the emotional bandwidth restored, and the durability of the system they leave behind.",
    takeaway2:
      "Your calendar is the first thing that changes. Founders who bring in a Fractional Sales Leader stop being the first call on every new inbound and reclaim 8 to 15 hours a week inside the first month.",
    takeaway3:
      "Monthly numbers stop running your mood. A real pipeline review and an evidence-based forecast replace last-week-of-the-month panic with something you can act on two weeks ahead.",
    takeaway4:
      "Bad sales hires get caught in week two or three — not month six. A Fractional Sales Leader has seen the pattern before, including the way you would quietly lie to yourself about the new rep.",
    takeaway5:
      "What remains at the end of the engagement is the most valuable benefit of all: a documented sales operating system that survives any single leader and is ready for the next stage of growth.",

    // Benefits section header
    sectionBenefitsHeading: 'The 5 Benefits That Have Nothing to Do With Revenue',
    sectionBenefitsSubheading:
      "Every fractional sales pitch leads with revenue. These are the five reasons founders actually call me — and they show up before the revenue chart bends.",

    // Benefit 1
    benefit1Title: 'Your Calendar Belongs to You Again',
    benefit1Detail:
      "A founder doing $1M to $10M ARR in founder-led sales is the bottleneck on every new conversation. Every inbound lead routes to you. Every \"quick demo\" lands on your calendar. Every contract negotiation waits on your final word. You did not start the company to be the first call — you started it because you had a vision for what the company should build. A Fractional Sales Leader takes the first-call work off your plate, runs discovery the way you would, and only pulls you in when the deal actually needs the founder in the room. In my first founder-led business in the 1980s I realized one month that I had taken 47 first calls and built nothing else. That was the month I learned the difference between being busy and being the founder. The calendar is the first place a Fractional Sales Leader earns their fee — and you feel it inside the first two weeks.",
    benefit1Outcome:
      '8 to 15 hours a week back. Time for product, fundraising, hiring, strategy — the work only you can do.',

    // Benefit 2
    benefit2Title: 'The Monthly Number Stops Running Your Mood',
    benefit2Detail:
      "Founder-led sales companies live and die one month at a time. The first three weeks feel fine. The last week of the month decides whether you sleep that weekend. The forecast is a feeling, not a number — and the feeling swings 50% in either direction in the last 72 hours. A Fractional Sales Leader installs a disciplined weekly pipeline review and an evidence-based forecast. You know on the 10th what is going to land by the 30th. You stop hoping; you start managing. I spent the better part of the 1990s riding the emotional whiplash of monthly revenue inside a company I bootstrapped to $40M. The day my team and I finally trusted a forecast was the day I started sleeping at night. Your nervous system is a leadership asset. Protect it like one.",
    benefit2Outcome:
      'A forecast you can trust two weeks early — and the end of the last-week-of-the-month emotional roller coaster.',

    // Benefit 3
    benefit3Title: 'You Catch Bad Hires Before They Cost You a Year',
    benefit3Detail:
      "Every founder I have ever met has hired the wrong salesperson at least once. The story rhymes: strong interview, a fine first month of ramping up, and six months later you realize the person sells just well enough to keep their job and nothing more. The all-in cost — base, ramp, lost pipeline, deals they did not close — is usually $250K to $400K before you finally let them go. A Fractional Sales Leader sees the warning signs in weeks, not months. They have hired this person before. They have fired them before. They know what week-three behavior predicts about month-six performance. I once kept a salesperson eleven months too long because I liked him personally. That mistake taught me that liking someone is not a hiring criterion — and it is the kind of mistake a Fractional Sales Leader will not let you make twice.",
    benefit3Outcome:
      'Hiring mistakes caught in week two or three — not month six — and the $250K hole avoided.',

    // Benefit 4
    benefit4Title: 'Board and Investor Conversations Get Easier',
    benefit4Detail:
      "Investors do not buy your hustle. They buy your ability to forecast. The fastest way to lose credibility in a board meeting is to walk in with a hockey-stick chart and no operating system behind it. The fastest way to gain credibility is the opposite: a clean pipeline, a forecast you have hit or beaten two quarters in a row, and a documented sales operating system any board member can audit on the spot. A Fractional Sales Leader installs the artifacts directors and investors are quietly looking for. In one engagement, a $3M ARR client of mine walked into a Series A pitch with a 90-day pipeline conversion report and a written playbook. The lead investor told her afterward it was the cleanest sales view he had seen at her stage. The round closed two weeks later. The pipeline did the talking.",
    benefit4Outcome:
      'Sales artifacts your board and investors trust — pipeline, forecast accuracy, written playbook, and an accountability document.',

    // Benefit 5
    benefit5Title: 'A Sales Operating System That Outlives Any One Leader',
    benefit5Detail:
      "The cruelest version of founder-led sales is when it becomes consultant-led sales — when you hire someone, they get the engine running, they leave, and the whole thing collapses with them. A real Fractional Sales Leader does the opposite. They install a system: a written Sales Playbook, a disciplined CRM, defined Ideal Customer Profile and qualification criteria, and an accountability rhythm. The system is the deliverable, not the person. When the engagement ends — whether that is at twelve months or three years — what remains is a sales operation your next VP of Sales, your next sales hire, or your acquirer can pick up and run. In 50 years of business I have seen more sales teams collapse around the departure of a single human than for any other reason. The fix is to build the machine that does not depend on a single human.",
    benefit5Outcome:
      'A documented, transferable sales operating system that survives leader changes, key-person risk, and the next stage of growth.',

    // SEO paragraphs
    seoPara1:
      "Most fractional sales leadership pitches focus on revenue — and revenue does grow, often by 30% to 60% inside the first year. But the founders I work with at $1M to $10M ARR rarely come to me because of the revenue number. They come because their calendar is broken, their nervous system is wrecked, their last sales hire failed, and their next board meeting is six weeks away. The revenue follows. The reason they hire a Fractional Sales Leader is everything underneath it.",
    seoPara2:
      "If you are at the stage where the bottleneck is you, the right next move is rarely a $400K full-time VP of Sales. For the math on why that hire usually fails too early, read",
    seoPara2b:
      ". For the working pattern of an engagement — what a Fractional Sales Leader actually does week to week — start with",
    seoPara2c:
      ". The five benefits above are what shows up in the first 90 days — long before any chart bends.",

    // Comparison table
    sectionCompareHeading: 'Founder-Led Sales vs. With a Fractional Sales Leader',
    sectionCompareSubheading:
      "Not a revenue table. A founder-life table — what changes the day you stop being the only one in every deal.",
    compareColLeft: 'Founder-Led Sales (Status Quo)',
    compareColRight: 'With a Fractional Sales Leader',
    compare1Without: 'Founder takes every first call and every demo',
    compare1With: 'Fractional Sales Leader runs first calls; founder only on key deals',
    compare2Without: 'Monthly number feels like a coin flip until the last week',
    compare2With: 'Forecast known on the 10th of the month, within 10% accuracy',
    compare3Without: 'Bad sales hires discovered at month six — after $250K is spent',
    compare3With: 'Bad fits identified in week two or three, recoverable instantly',
    compare4Without: 'Board meeting is a chart with no system behind it',
    compare4With: 'Board sees pipeline, playbook, and accountability doc',
    compare5Without: 'Sales depends on a single person — usually the founder',
    compare5With: 'Sales runs on a system that outlives any one leader',
    compare6Without: 'Founder is on 60-hour weeks just to keep deals moving',
    compare6With: 'Founder reclaims 8 to 15 hours a week for work only they can do',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have over 50 years in business — including 22 as a bootstrapped founder of a company I grew to $40M ARR. I have been a Fractional Sales Leader since 2017, working with $1M to $10M ARR founders who are stuck in founder-led sales and not ready for a full-time VP of Sales hire.",
    aboutBio2:
      "Most of what I do is invisible inside the revenue chart. I free up the founder's calendar, install a forecast they can trust, catch hiring mistakes before they cost a year, get the pipeline ready for board scrutiny, and leave behind a sales operating system that does not depend on any single human. The revenue takes care of itself once those five things are in place.",

    // FAQs
    faq1Question: 'How do you measure success if the benefits are not revenue?',
    faq1Answer:
      'We track them directly. Founder hours per week spent on first calls (target: under 5). Forecast accuracy on a 30-day horizon (target: within 10%). Time-to-decision on a new sales hire (target: 21 days, not six months). Sales artifacts in writing — playbook, CRM stages, ICP, accountability document. And revenue, because revenue follows the system. The five non-revenue benefits show up in the first 90 days; the revenue compounds in the second six months.',

    faq2Question: 'How quickly do these benefits actually show up?',
    faq2Answer:
      'The calendar benefit is week one — within two weeks I am running first calls. The forecast benefit takes 30 to 45 days, the time it takes to clean the CRM and install evidence-based stages. The hiring benefit shows up the next time you hire — or earlier, if you already have a rep who is underperforming. The board benefit takes about a quarter, long enough to have one full pipeline cycle in writing. The system benefit is the final deliverable at the end of the engagement.',

    faq3Question: 'Will I lose deals if I am not on every call?',
    faq3Answer:
      'Almost no founder believes this until they live it, but yes — you will close more deals, not fewer, once you are off the first-call rotation. The reason is structural: when the founder runs every conversation, every conversation becomes a founder conversation. Buyers expect the CEO, ask for the CEO, and refuse to engage with anyone else. When a Fractional Sales Leader runs discovery, the buyer learns from day one that there is a team. That team-shaped impression is what lets the company close deals you personally cannot.',

    faq4Question: 'Is this only for companies that have stopped growing?',
    faq4Answer:
      "No. The five non-revenue benefits matter most for companies that are growing — and growing in ways the founder cannot personally sustain. A flat company has time problems. A growing company has all the same time problems plus a forecast that cannot keep up, a hiring pace that outruns the founder's judgment, and a board that wants more transparency every quarter. The fractional model is for the companies in motion, not the companies stuck.",

    faq5Question: 'What is the one benefit founders are most surprised by?',
    faq5Answer:
      'The nervous-system one — the end of the monthly emotional whiplash. Most founders expect the revenue impact and they get it. What blindsides them is how different their life feels when they know on the 10th of the month what is going to land on the 30th. Sleep improves. Marriages improve. The 11 p.m. doom-spiral about whether the quarter will land disappears. None of that shows up on a P&L. All of it changes whether you actually want to keep running this company.',

    // CTA
    ctaHeadline: 'Stop Counting Revenue. Start Counting the Hours You Get Back.',
    ctaDescription:
      "In 30 minutes I can map which of the five benefits you would feel first, how fast they would land, and what it would take to get there. No pitch — just an honest read on your current state.",
  },
}

async function seed() {
  for (const [section, content] of Object.entries(sections)) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section, content }, { onConflict: 'section' })

    if (error) {
      console.error(`X ${section}:`, error.message)
    } else {
      console.log(`OK ${section}`)
    }
  }
  console.log('Done.')
}

seed()
