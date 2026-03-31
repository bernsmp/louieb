/**
 * Seed full content for /how-to-build-a-sales-pipeline (seoBuildSalesPipeline)
 * Run: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-build-sales-pipeline.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const content = {
  // Hero
  heroLine1: 'How to Build a Sales Pipeline',
  heroAccent: 'That Actually Fills Itself',
  heroDescription: "Most $1M–$10M ARR businesses don't have a pipeline problem — they have a pipeline structure problem. Here's the 5-layer system that creates consistent, predictable deal flow without founder dependency.",

  // Section: 5 Pipeline Layers
  sectionLayersHeading: 'The 5-Layer Pipeline Framework',
  sectionLayersSubheading: 'Each layer builds on the last. Skip one and the pipeline looks full but performs empty.',

  layer1Title: 'Define What a Qualified Opportunity Actually Looks Like',
  layer1Detail: "Most founders at $1M–$5M ARR have never written down their ICP with hard criteria. \"Anyone who could use our product\" is not a definition — it's an excuse to avoid the harder work of filtering. A qualified opportunity has four attributes: the right company size, the right trigger event, the right job title in the room, and a budget window that matches your sales cycle. Without these, your pipeline fills with noise that kills forecasting accuracy.",
  layer1Fix: "Pull your last 20 closed-won deals. Identify the three attributes they share that your losses don't. Those become your qualification criteria. Add them as required CRM fields before a deal can move past Stage 1.",

  layer2Title: 'Build Three Separate Pipeline Inputs — Not Just One',
  layer2Detail: "Referral networks feel like pipeline, but they're disguised dependency. When referrals dry up — and they always do at some point — there's nothing underneath. A self-filling pipeline has three independent inputs running in parallel: outbound (you go find them), inbound (they find you), and partner/referral (warm introductions from existing relationships). Each requires different infrastructure and different ownership.",
  layer2Fix: "Audit how your last 30 closed-won deals entered your pipeline. If more than 60% came from one source, that's a single point of failure. Build the other two inputs as parallel programs, even at small scale.",

  layer3Title: 'Set Stage Exit Criteria Based on Buyer Milestones, Not Seller Actions',
  layer3Detail: "The most common pipeline problem isn't deal quality — it's that pipeline stages are defined by what the seller does (\"sent proposal,\" \"had call\") instead of what the buyer commits to. Deals stuck in \"proposal sent\" for 45 days aren't in your pipeline — they're in your wishlist. Buyer milestone stages look different: \"confirmed budget and timeline,\" \"economic buyer identified and engaged,\" \"legal review initiated.\" These stages are honest about where deals actually are.",
  layer3Fix: "Rewrite your pipeline stages so that each stage advance requires a documented buyer action or commitment — not just a seller activity. Purge any deal that can't pass its current stage's exit criteria.",

  layer4Title: 'Calculate Minimum Pipeline Coverage for Your Number',
  layer4Detail: "Most founders don't know how much pipeline they actually need to hit quota. The formula is simple: take your revenue target, divide by your close rate, and that's your minimum pipeline value at Stage 1. If you close 25% of qualified opportunities and need $2M in new revenue, you need $8M in qualified pipeline. If you don't have that number and no plan to build it, your revenue target is a hope, not a plan.",
  layer4Fix: "Run the pipeline coverage calculation for your current quarter. If you're below 3x coverage on committed revenue, you have a pipeline generation problem — not a closing problem. That changes where you focus your effort.",

  layer5Title: 'Establish a Weekly Pipeline Review That Creates Accountability',
  layer5Detail: "Pipeline doesn't fill itself — it fills because someone is accountable to the number every week. The weekly pipeline review is the mechanism that creates that accountability. Done correctly, it takes 45 minutes and covers three things: what moved forward this week and why, what is stuck and what the specific next action is, and what new qualified opportunities entered the pipe. Done incorrectly, it's a status update that everyone tolerates and no one learns from.",
  layer5Fix: "Separate deal inspection from status reporting. Ask five questions for every deal over $10K: What is the specific next step? When does it happen? Who owns it? What could kill this deal? Is the timeline still accurate? If you can't answer all five, the deal doesn't belong in the pipeline.",

  // SEO Paragraphs
  seoPara1: "The phrase \"pipeline problem\" gets used to describe a dozen different things — not enough leads, wrong leads, deals that stall, forecasts that miss, reps who can't close. But most pipeline problems at the $1M–$10M ARR stage aren't really about volume. They're about structure. Founders build pipelines the way they built their first sales: through relationships, instinct, and whatever worked. What works for $0–$1M breaks somewhere between $2M and $5M. The inputs dry up, the stages lie, and the forecast becomes guesswork.",
  seoPara2: "Building a pipeline that fills itself means creating systematic inputs that don't depend on any one person's activity level. It means defining pipeline stages honestly enough that your forecast actually predicts revenue. And it means establishing the weekly review discipline that keeps every deal moving toward a decision. If you're looking for where to start before building the pipeline, a sales audit will show you exactly what's broken.",

  // Section: Pipeline Killers
  sectionKillersHeading: '5 Pipeline Habits That Kill Growth',
  sectionKillersSubheading: 'These are the patterns I find in the first pipeline audit on almost every engagement.',

  killer1Killer: 'Letting unqualified deals stay in the pipeline "just in case"',
  killer1Result: 'Inflated forecasts that destroy trust in your numbers',
  killer2Killer: 'Using activity-based stage definitions instead of buyer milestones',
  killer2Result: 'Pipeline that shows progress when deals are actually stalling',
  killer3Killer: 'No written ICP criteria applied at point of entry',
  killer3Result: 'Reps spending time on deals that were never real',
  killer4Killer: 'Relying on a single pipeline source (usually referrals)',
  killer4Result: 'Volatile pipeline that disappears when referrals slow down',
  killer5Killer: 'Pipeline reviews that cover status but not next actions',
  killer5Result: 'Meetings that feel productive but move nothing forward',

  // About
  aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
  aboutBio2: "Pipeline audits are the first thing I do in every engagement. In 20 years of doing this, I've never seen a $1M–$10M ARR company with a healthy pipeline structure on day one. That's not a criticism — it's the nature of founder-built sales. My job is to rebuild it systematically, so revenue becomes predictable.",

  // FAQs
  faq1Question: 'How much pipeline do I need to hit my revenue target?',
  faq1Answer: "The standard benchmark is 3x–4x your revenue target in qualified pipeline. If you need $500K in new revenue this quarter and your close rate is 25%, you need at least $2M in qualified opportunities. But this only works if your pipeline stages are honest — inflated pipelines with zombie deals will give you false coverage numbers.",
  faq2Question: "What's the difference between a referral network and a real pipeline?",
  faq2Answer: "A referral network is relationship-dependent — it works when relationships are active and dries up when they aren't. A real pipeline has systematic inputs that generate opportunities without requiring a specific person to make a call. Referrals can be one input, but if they're your only input, you don't have a pipeline — you have a network that can disappear.",
  faq3Question: 'How long does it take to build a pipeline that fills itself?',
  faq3Answer: "With the right infrastructure in place, you can see a functioning pipeline within 90 days. But \"fills itself\" doesn't mean no effort — it means the inputs are systematic rather than ad hoc. Outbound sequences run continuously. Inbound content generates leads without daily intervention. Partner relationships produce introductions on a regular cadence. Building that infrastructure takes 60–90 days; maintaining it is ongoing.",
  faq4Question: 'When should I bring in a fractional sales leader to help build my pipeline?',
  faq4Answer: "If you've been trying to fix pipeline problems for more than two quarters without meaningful improvement, the issue is structural — not a matter of more effort. A fractional sales leader will audit your pipeline inputs, rebuild your stage definitions, establish a weekly review cadence, and create the accountability that makes pipeline management a discipline rather than a fire drill.",

  // CTA
  ctaHeadline: "Let's Look at Your Pipeline Together",
  ctaDescription: "In 30 minutes I can assess your current pipeline structure, identify the one input that's failing, and map exactly what needs to change to make your revenue predictable.",
}

async function seed() {
  console.log('Seeding seoBuildSalesPipeline...')
  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'seoBuildSalesPipeline', content }, { onConflict: 'section' })

  if (error) {
    console.error('❌ Error:', error.message)
  } else {
    console.log(`✅ seoBuildSalesPipeline (${Object.keys(content).length} fields)`)
  }
}

seed().catch(console.error)
