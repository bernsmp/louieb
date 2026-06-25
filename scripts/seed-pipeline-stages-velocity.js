/**
 * Seed script: What Do Pipeline Stages Have to Do With Pipeline Velocity?
 * - seoPipelineStagesVelocity → /what-do-pipeline-stages-have-to-do-with-pipeline-velocity
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-pipeline-stages-velocity.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoPipelineStagesVelocity: {
    // Hero
    heroTag: 'Pipeline & Velocity',
    heroLine1: 'What Do Pipeline Stages Have to Do',
    heroAccent: 'With Pipeline Velocity?',
    heroH2: 'If you know each pipeline stage length you can predict how quickly deals move, or stall.',
    heroDescription:
      "If you're a $1M to $10M founder running your own pipeline, your stages are the fastest lever you've got. Time them and you can see exactly where deals slow down, and exactly how to speed them up.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "Your stages aren't labels. They're a stopwatch. Every stage has an average amount of time a healthy deal spends inside it.",
    takeaway2:
      "Your sales cycle length is just the sum of your stage times. Shorten one stage and you speed up the whole pipeline.",
    takeaway3:
      "Velocity has four levers: number of deals, win rate, deal size, and cycle length. Stages are the one lever you control week to week.",
    takeaway4:
      "The stall almost always lives in one stage. The minute you measure time-in-stage, it stops hiding.",
    takeaway5:
      "You don't need a VP of Sales to fix this. You need stages with clear exit criteria and a weekly look at how long deals are sitting still.",

    // 5 numbered insight cards
    sectionInsightsHeading: '5 Things Stage Length Tells You About Velocity',
    sectionInsightsSubheading:
      "Time how long deals sit in each stage and your pipeline stops being a mystery. Here's what the numbers hand you.",

    insight1Title: 'How Long a Deal Should Actually Take',
    insight1Detail:
      "Once you've tracked time-in-stage across 20 or 30 closed deals, you've got a benchmark. You know a healthy deal sits in Discovery for about 9 days, in Proposal for about 14, and in Negotiation for about 7. That number isn't a guess anymore. It's the heartbeat of your pipeline, and every new deal gets measured against it. When a deal runs long in a stage, you don't wonder if there's a problem. You know there is.",
    insight1Outcome:
      'A real benchmark for every stage, so you can tell a slow deal from a dead one in seconds instead of weeks.',

    insight2Title: 'Which Stage Is Your Bottleneck',
    insight2Detail:
      "Add up the average time deals spend in each stage and one of them will be fat. That's your bottleneck. Maybe deals fly through Discovery and then sit in Proposal for a month because your pricing is confusing or your champion can't sell it internally. You can't fix what you can't see. The stage timing shows you exactly where deals lose momentum, so you stop guessing and start working on the one thing that's actually slowing you down.",
    insight2Outcome:
      "The single stage that's costing you the most time, named and measured, so your fix lands where it matters.",

    insight3Title: 'Whether a Live Deal Is On Track or Already Gone',
    insight3Detail:
      "A deal that's been in Proposal for 45 days when your average is 14 isn't a live deal. It's a ghost that hasn't told you yet. Without stage timing, that deal sits in your forecast giving you false hope. With it, the deal ages out and flags itself. You either re-engage it with a real reason or you kill it and free up the rep's time. A clean pipeline you can trust beats a fat one you can't.",
    insight3Outcome:
      'Aging deals that surface themselves automatically, so your pipeline reflects reality and your forecast stops lying to you.',

    insight4Title: 'A Close Date You Can Forecast',
    insight4Detail:
      "If a deal is in Discovery and you know the average time left to close is 30 days, you have a forecast date that's grounded in your own history instead of a rep's optimism. Stack that across every open deal and you've got a quarter you can actually predict. This is the difference between walking into a board meeting with a forecast you'd bet on and walking in with a number you're hoping comes true.",
    insight4Outcome:
      'A forecast built on stage math, not gut feel, so next quarter stops being a surprise.',

    insight5Title: 'Whether to Coach the Rep or Fix the Process',
    insight5Detail:
      "When one rep's deals stall in a stage where everyone else's move fine, that's a coaching conversation. When every rep's deals stall in the same stage, that's a process problem and no amount of coaching will fix it. Stage timing tells you which one you're looking at. Most founders blame the people when it's the process, or blame the process when it's one rep who needs help. The data ends that argument.",
    insight5Outcome:
      'A clear read on whether the stall is a person or the playbook, so you spend your energy on the right fix.',

    // SEO paragraphs
    seoPara1:
      "Most founders treat pipeline stages as folders. A deal gets dragged from one to the next when it feels right, and the stage name is the only thing that changes. That's a waste of the most useful data you own. The moment you start timing how long deals sit in each stage, your stages turn into a diagnostic tool. They tell you where deals slow down, which ones are already dead, and how long the live ones really have left.",
    seoPara2:
      'This only works if your stages are real. Each one needs a clear exit criterion tied to something the buyer did, which is why I always start with how you',
    seoPara2b:
      ' before touching the numbers. Once the stages are solid, the timing flows straight into the metric that predicts your revenue. If you want the full picture of how that math works, start with',
    seoPara2c: '. Stages are where you actually move the needle.',

    // Comparison table
    sectionCompareHeading: 'Stages as Labels vs. Stages as a Stopwatch',
    sectionCompareSubheading:
      "Same CRM, same deals. The difference is whether you're timing the stages or just naming them.",
    compareColLeft: 'Stages as Labels',
    compareColRight: 'Stages as a Stopwatch',
    compare1Without: 'Stages are just labels reps drag deals between',
    compare1With: 'Stages are timed steps with clear exit criteria',
    compare2Without: "You can't say how long a normal deal takes",
    compare2With: 'You know the average dwell time for every stage',
    compare3Without: 'The bottleneck is invisible, so it never gets fixed',
    compare3With: 'The slow stage is named and worked on first',
    compare4Without: 'Dead deals sit in the forecast for months',
    compare4With: 'Aging deals flag themselves and get cleaned out',
    compare5Without: 'Forecast is a feeling, off by 30% every quarter',
    compare5With: 'Forecast is stage math you can take to the board',
    compare6Without: "You blame reps for what's actually a process stall",
    compare6With: 'You know whether to coach a rep or fix the process',

    // Velocity formula callout
    sectionFormulaHeading: 'The Formula, and the One Lever You Control',
    sectionFormulaSubheading:
      'Four inputs decide how fast revenue moves. Three of them are slow to change. One of them lives in your stages.',
    formulaLine:
      'Velocity  =  (Qualified Deals × Win Rate × Average Deal Value) ÷ Sales Cycle Length',
    formulaBody:
      "Adding more deals takes marketing spend and time. Lifting your win rate takes better discovery and reps who've ramped. Raising deal size takes a different buyer or a packaging change. All three are real, and all three are slow. Sales cycle length is different. It's the sum of the time deals spend in your stages, and you can shrink it this quarter by attacking the one stage where deals pile up. That's why stages aren't a side topic to velocity. They are the controllable half of the equation.",

    // About
    aboutBio1:
      "I'm Louie Bernstein. I've got 50 years in business, including 22 as a bootstrapped founder, and my Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "Stage timing is one of the first things I look at when I open up a founder's pipeline. It's quick, it's already sitting in your CRM, and it almost always points straight at the deal that's quietly costing you the most. I'll set the stages, define the exit criteria, and build the weekly review that keeps your pipeline moving, without the $400K bet of a full-time VP hire.",

    // FAQs
    faq1Question: 'What exactly is pipeline velocity?',
    faq1Answer:
      "Pipeline velocity is how fast revenue moves through your pipeline. The formula is your number of qualified deals, multiplied by your win rate, multiplied by your average deal value, divided by your sales cycle length. Three of those four levers are slow to change. Cycle length is the one you can move week to week, and you move it by shortening the time deals spend in your stages.",

    faq2Question: 'How are pipeline stages connected to velocity?',
    faq2Answer:
      "Your sales cycle length is the denominator in the velocity formula, and that cycle length is just the sum of the time deals spend in each stage. So your stages are where velocity is actually won or lost. Tighten the slow stage and the whole cycle gets shorter, which means revenue moves faster without adding a single new deal. That's why stage timing is the most practical lever a founder has.",

    faq3Question: 'How many pipeline stages should I have?',
    faq3Answer:
      "For most $1M to $10M companies, four to six stages is right. Fewer than four and you can't see where deals stall. More than seven and reps stop updating them honestly. The point isn't the number of stages. It's that each stage has a clear exit criterion based on something the buyer did, not something the rep hopes is true. If you can't write down what has to happen for a deal to leave a stage, that stage isn't real.",

    faq4Question: "I don't track time-in-stage yet. Where do I start?",
    faq4Answer:
      "Pull your last 20 or 30 closed-won deals and look at how many days each one spent in each stage. Your CRM already has the timestamps. Average them and you've got your first benchmark. Then do the same for your open deals and flag anything that's sitting longer than the average. You'll usually find your bottleneck and a handful of dead deals in the first hour. You don't need new software. You need to look.",

    faq5Question: 'Do I need to hire a VP of Sales to get this working?',
    faq5Answer:
      "No. This is exactly the kind of system a Fractional Sales Leader installs without the cost or risk of a full-time VP hire. I'll set up the stages, define the exit criteria, get the timing flowing out of your CRM, and build the weekly review that keeps deals moving. You get a pipeline that predicts revenue in 60 to 90 days, and you keep your runway.",

    // CTA
    ctaHeadline: 'Want to See Where Your Pipeline Is Stalling?',
    ctaDescription:
      "In 30 minutes I can look at your stages, find the one that's slowing your deals down, and show you what shortening it would do to your forecast. No new software required.",
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
