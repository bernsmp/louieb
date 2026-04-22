/**
 * Seed script: Why Does My Revenue Feel Unpredictable Month to Month?
 * - seoRevenueUnpredictableMonthly → /why-does-my-revenue-feel-unpredictable-month-to-month
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-revenue-unpredictable-monthly.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoRevenueUnpredictableMonthly: {
    // Hero
    heroTag: 'Revenue Predictability Diagnostic',
    heroLine1: 'Why Does My Revenue Feel',
    heroAccent: 'Unpredictable Month to Month?',
    heroH2: 'What Are Revenue Fluctuations?',
    heroDescription:
      "For $1M–$10M ARR founders watching revenue swing between record months and empty ones. The volatility is not the market — it is a missing sales system. Here is the diagnosis, and the fix.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'Unpredictable monthly revenue is not a market problem — it is a system problem. Lumpy revenue means lumpy pipeline, and lumpy pipeline means a broken or missing sales operating system.',
    takeaway2:
      'The real causes are structural: no qualification discipline, no prospecting cadence, a few deals carrying the whole forecast, and a founder who is still the pipeline. None of them are solved by "closing harder."',
    takeaway3:
      'Revenue fluctuation is measurable. Once you can see it — pipeline coverage, stage conversion, deal velocity, concentration risk — you can engineer it down.',
    takeaway4:
      'Predictable revenue is built, not hoped for. The fix is a documented playbook, a CRM that tells the truth, and a weekly rhythm that surfaces problems before they hit the bank statement.',
    takeaway5:
      'A Fractional Sales Leader can install the full system in 60 to 90 days at roughly 25% of the cost of a full-time VP — and without betting a year of runway on a single hire.',

    // Five Causes section
    sectionCausesHeading: 'The Five Structural Causes of Unpredictable Revenue',
    sectionCausesSubheading:
      'None of them are "the market." All of them are fixable — and none of them require a new VP hire.',

    cause1Title: 'Your Pipeline Is Hero-Dependent',
    cause1Detail:
      "Almost every $1M–$10M ARR business with unpredictable revenue has the same root cause: the founder is the pipeline. New deals enter the system because the founder introduced them, referred them, or personally chased them down. When the founder is in back-to-back meetings, traveling, closing existing deals, or just tired, new pipeline stops being created. Four weeks later, the top of the funnel is empty, and six weeks after that the empty funnel becomes empty revenue. The revenue roller coaster is not a market trend — it is a direct reflection of which weeks the founder had time to prospect.",
    cause1Outcome:
      'A prospecting cadence that runs whether the founder is in town or not — so top-of-funnel volume stops correlating with founder calendar availability.',

    cause2Title: 'Deals Are Not Actually Qualified',
    cause2Detail:
      "Without written qualification criteria, every deal in the CRM gets treated as real. A prospect replies to an email and the deal gets marked \"Proposal Sent.\" A decision-maker goes quiet and the deal stays open because no one is sure it is dead. The pipeline fills with optimism, the forecast is built on that optimism, and one bad week of \"no-decisions\" and silent deals collapses the whole month. This is why strong-looking pipelines produce weak months — the pipeline was never actually qualified. You were measuring activity, not commitment.",
    cause2Outcome:
      'Written qualification criteria enforced as required CRM fields — so the pipeline only shows deals the buyer has actually committed to.',

    cause3Title: 'One or Two Accounts Carry the Whole Month',
    cause3Detail:
      "When a $40K deal lands, the month is a win. When it slips to next quarter, the month is a disaster. That is concentration risk, and it shows up everywhere in the $1M–$10M range because the deals are large enough to move the P&L and rare enough to dominate the forecast. If three deals represent 60% of next month's revenue, you do not have a forecast — you have three coin flips. Flip all three and the month is extraordinary. Miss two and the month is a layoff conversation. Predictability requires a wider base of smaller, repeatable deals — not a shrinking handful of big ones.",
    cause3Outcome:
      'A pipeline wide enough that no single deal slipping can break the month — the cure for concentration risk is volume, not heroics.',

    cause4Title: 'The Forecast Is a Feeling, Not a Model',
    cause4Detail:
      "Ask ten founders what their forecast is built on and nine will describe a gut check: \"We think these deals will close.\" That is not a forecast — that is a wish list. A real forecast is a model: pipeline coverage ratio, stage conversion rates, average deal cycle time, average deal size. Multiply those four numbers against the pipeline and you get a statistical expectation, not an emotional one. Without the model, the CFO sees revenue bounce ±40% and nobody can explain why. With the model, the bounce compresses to ±10% and the exceptions are explainable the week they happen.",
    cause4Outcome:
      'A four-variable forecast model that survives board scrutiny — and a weekly review that catches deviations before they become quarterly misses.',

    cause5Title: 'Nobody Owns the Weekly Rhythm',
    cause5Detail:
      "Unpredictability compounds because no one is in the room, every week, asking the uncomfortable questions. Why did this deal slip? What did the buyer actually say? Where is pipeline coverage for next quarter? Which reps are below activity and why? Without that cadence, problems are discovered the day the month closes — and by then, they are outcomes, not inputs. A standing weekly pipeline review, owned by someone accountable, is the single highest-leverage habit for crushing monthly revenue volatility. It is also the first thing founders drop when they get busy.",
    cause5Outcome:
      'A weekly pipeline review that never gets cancelled — where problems surface as inputs to change, not as excuses after the quarter ends.',

    // SEO paragraphs
    seoPara1:
      "Monthly revenue volatility is the single most common complaint we hear from founders between $1M and $10M in ARR. It feels like a market problem — hot months, cold months, deals going sideways for \"reasons.\" It is almost never a market problem. It is a sales operating system problem. When the founder is the top of the funnel, the closer, and the forecaster all at once, monthly output correlates directly with how many hours the founder spent selling that month. That is not a business — it is a talent-dependent revenue engine where the talent is also running the company.",
    seoPara2:
      'The stable version of this looks different. Revenue in a company with a real sales system is the downstream output of four measurable inputs: opportunity creation, stage conversion, cycle time, and forward pipeline coverage. If you want the full picture of what a real sales system contains and how it gets built in 60–90 days, read',
    seoPara2b:
      '. And if the underlying issue is that every deal still routes through you personally, start with',
    seoPara2c: '. Predictability is built — not negotiated, not hoped for.',

    // Comparison table
    sectionCompareHeading: 'Lumpy Revenue vs. Engineered Revenue',
    sectionCompareSubheading:
      'Same market. Same product. Same deal sizes. The difference is whether the inputs are under management.',
    compareColLeft: 'Lumpy Revenue (No System)',
    compareColRight: 'Engineered Revenue (With System)',
    compare1Without: 'Top-of-funnel volume swings by 60% month to month',
    compare1With: 'Prospecting cadence produces consistent weekly activity',
    compare2Without: 'Pipeline looks strong but half the deals never close',
    compare2With: 'Every deal meets written qualification criteria before it counts',
    compare3Without: 'Three deals represent most of next month — any slip kills the month',
    compare3With: 'Wide pipeline base — no single deal can break the forecast',
    compare4Without: 'Forecast accuracy swings ±40% with no explanation',
    compare4With: 'Forecast accuracy holds within ±10% — deviations are traceable',
    compare5Without: 'Founder only sees problems after the month closes',
    compare5With: 'Weekly pipeline review catches issues as inputs, not outcomes',
    compare6Without: 'Revenue feels like the weather — hope it is sunny next month',
    compare6With: 'Revenue is engineered — the inputs determine the output',

    // Diagnostic section (3 steps)
    sectionDiagnosticHeading: 'A Three-Step Diagnostic You Can Run This Week',
    sectionDiagnosticSubheading:
      'Before you install a system, find out where the volatility is actually coming from. You cannot fix what you cannot measure.',
    diag1Title: 'Measure the Actual Volatility',
    diag1Detail:
      "Pull the last 12 months of booked revenue. Compute the standard deviation and the ratio between your best month and worst month. A healthy B2B business at this stage runs within a 1.5x spread top-to-bottom. If yours is 3x or more, the problem is structural — not seasonal, not market-driven, not bad luck. You cannot fix what you have not measured, and most founders have never actually put a number on the volatility they are living with.",
    diag2Title: 'Audit the Pipeline Against Reality',
    diag2Detail:
      "For every deal marked \"committed\" or \"best case\" in the current month, write down in one sentence what the buyer actually said — in their words, not the rep's. If you cannot, the deal is not real. This exercise typically removes 30 to 50% of the pipeline on first pass. It hurts, but the pipeline you are left with is a pipeline you can forecast against. The other 30–50% was noise that was inflating the numbers and guaranteeing next month's surprise.",
    diag3Title: 'Install the Four Inputs',
    diag3Detail:
      "Predictable revenue requires four tracked inputs, measured weekly: new opportunities created (top-of-funnel health), stage conversion rates (pipeline quality), average deal cycle time (velocity), and pipeline coverage for the next two quarters (forward coverage). You do not need more data — you need these four. Build a one-page dashboard. Review it every Monday. Within 90 days, the numbers stabilize and so does revenue, because the inputs are now under management rather than under observation.",

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'I install the sales infrastructure — playbook, pipeline discipline, qualification criteria, and weekly cadence — that turns unpredictable monthly revenue into a forecast that holds within ±10%. Most engagements stabilize the numbers in 60 to 90 days and hand off a system that runs without me.',

    // FAQs
    faq1Question: 'What are revenue fluctuations — and why do B2B companies experience them?',
    faq1Answer:
      'Revenue fluctuations are month-to-month swings in booked revenue that exceed what your deal cycle and market conditions alone would predict. In B2B companies at $1M–$10M ARR, the fluctuations are almost always driven by internal sales-system issues — not external market forces. The typical causes: a hero-dependent pipeline where the founder is the only real rainmaker, deals that look qualified in the CRM but were never actually qualified against real criteria, dangerous deal concentration (a few big accounts carrying the month), and a forecast built on gut feel instead of a model. When you fix those four inputs, the fluctuation compresses to a narrow, explainable band.',

    faq2Question: 'Is unpredictable revenue just normal for small B2B companies?',
    faq2Answer:
      'Some volatility is normal — deal sizes are large and deal counts are small, so one deal slipping matters. But the kind of volatility most founders describe — a record month followed by a near-zero month followed by another record — is not normal. It is a symptom of a missing sales operating system. Companies that have installed playbook, qualification, pipeline discipline, and a weekly cadence run within a 1.5x spread top-to-bottom. Companies without those run 3x, 5x, or worse. The volatility is a business-model signal, not a market signal.',

    faq3Question: 'How fast can I actually make my revenue predictable?',
    faq3Answer:
      'Measurable improvement shows up in 30 to 45 days once the four inputs (qualification criteria, prospecting cadence, pipeline coverage, weekly review) are in place. Full stabilization — where you can forecast within ±10% and the board stops asking what happened — typically takes 60 to 90 days with a Fractional Sales Leader running the installation. The reason it is that fast: the data is already in your CRM. The work is applying discipline to the data you already have, not collecting new data.',

    faq4Question: 'Do I need to hire a full-time VP of Sales to fix this?',
    faq4Answer:
      'Almost never at $1M–$10M ARR. A full-time VP is a $400K commitment with a 6-month ramp and a ~70% failure rate in the first 18 months. You do not need a new headcount to fix forecast volatility — you need someone who has installed this system ten times before, who can do it without a learning curve, and who can hand it off to you when it is running. That is what a Fractional Sales Leader delivers: the senior operator without the senior payroll.',

    faq5Question: 'What is the single highest-leverage thing I can do this week to stabilize revenue?',
    faq5Answer:
      "Run a true qualification audit on every deal in your current-month commit list. For each one, write down in one sentence — in the buyer's exact words — what they have actually committed to. If you cannot, remove the deal from commit. That single exercise typically removes 30–50% of the pipeline that was inflating your forecast, and it gives you an honest baseline to manage from. Everything else (cadence, coverage, model) builds on top of that honest baseline.",

    // CTA
    ctaHeadline: 'End the Revenue Roller Coaster',
    ctaDescription:
      "In 30 minutes I can diagnose exactly where your monthly revenue volatility is coming from, which of the five causes is driving it, and what it would take to stabilize the forecast in 60 to 90 days — without a $400K VP hire.",
  },
}

async function seed() {
  for (const [section, content] of Object.entries(sections)) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section, content }, { onConflict: 'section' })

    if (error) {
      console.error(`X ${section}:`, error.message)
      process.exitCode = 1
    } else {
      console.log(`OK ${section}`)
    }
  }
  console.log('Done.')
}

seed()
