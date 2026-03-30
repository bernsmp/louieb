/**
 * Seed script: 6 new SEO pages (batch 5)
 * - seoSalesVelocityB2b         → /sales-velocity-b2b
 * - seoWinLossAnalysis           → /win-loss-analysis-sales
 * - seoHowToShortenSalesCycle    → /how-to-shorten-sales-cycle
 * - seoSalesQualifiedLead        → /sales-qualified-lead-definition
 * - seoB2bReferralProgram        → /b2b-referral-program-sales
 * - seoSalesPipelineStages       → /sales-pipeline-stages
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-6-new-pages-batch5.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {

  // ─────────────────────────────────────────────────────────────
  // 1. SALES VELOCITY B2B
  // ─────────────────────────────────────────────────────────────
  seoSalesVelocityB2b: {
    heroLine1: 'What Is Sales Velocity?',
    heroAccent: 'The One Metric That Predicts Revenue Better Than Quota',
    heroDescription: "Quota tells you if you hit the number. Sales velocity tells you why — and what's coming next. Here's the formula every $1M–$10M founder should understand, and how to use it to diagnose exactly what's holding your revenue back.",

    sectionLeversHeading: 'The 4 Levers of Sales Velocity',
    sectionLeversSubheading: 'Sales velocity = (Opportunities × Deal Size × Win Rate) ÷ Cycle Length. Each lever multiplies or divides the others.',
    lever1Title: 'Number of Opportunities',
    lever1Body: "The raw count of active deals in your pipeline at any given time. More opportunities mean more chances to close — but only if the other three levers are healthy. Adding opportunities to a broken win rate or a long cycle accelerates losses, not revenue.",
    lever2Title: 'Average Deal Size',
    lever2Body: 'The mean value of deals you close. Increasing deal size is often the highest-leverage move for $1M–$10M companies — moving from $20K to $30K average deal while keeping everything else constant increases velocity by 50%. This starts with better ICP definition and more disciplined qualification.',
    lever3Title: 'Win Rate',
    lever3Body: "The percentage of deals you close from the total opportunities you work. A 25% win rate means three of every four deals you invest time in go nowhere. Doubling win rate to 50% — achievable through better qualification and a real sales playbook — doubles revenue velocity without adding a single new opportunity.",
    lever4Title: 'Sales Cycle Length',
    lever4Body: "The average number of days from first contact to closed-won. This is the denominator — it divides into everything else. A deal worth $30K that closes in 45 days generates twice the velocity of the same deal that takes 90 days. Reducing cycle length is the fastest way to compress the denominator and accelerate revenue.",

    seoPara1: "Most founders manage their sales team the way they read a speedometer — they check the number (revenue) and react when it's too low. Sales velocity is different. It's the dashboard that tells you why the car is slowing down before you've actually decelerated. The formula surfaces the specific input — pipeline volume, deal size, win rate, or cycle length — that's constraining revenue. Without it, you're guessing at root cause.",
    seoPara2: "For companies at the $1M–$10M stage, the most common velocity problem is a hidden win rate collapse masked by growing pipeline. Founders keep adding leads, but conversion rates are quietly declining — and the lagging revenue numbers don't show it until months later. A monthly velocity calculation would catch this in the first 30 days.",

    sectionDiagHeading: 'How to Use Velocity to Diagnose Revenue Problems',
    sectionDiagSubheading: 'Each velocity pattern points to a specific root cause — and a specific fix.',
    diag1Problem: 'Low velocity despite healthy pipeline volume',
    diag1Cause: 'Win rate or deal size problem — too many unqualified deals or underpriced contracts',
    diag2Problem: 'Low velocity despite high win rate',
    diag2Cause: 'Not enough opportunities entering the top of the funnel — pipeline generation issue',
    diag3Problem: 'Low velocity despite strong win rate and deal size',
    diag3Cause: 'Cycle is too long — deals are stalling somewhere in the middle stages',
    diag4Problem: 'High velocity but inconsistent month-to-month',
    diag4Cause: 'Lumpy pipeline — feast-or-famine pattern signals no systematic outreach or poor stage discipline',
    diag5Problem: 'Velocity improving but revenue flat',
    diag5Cause: 'Churn or contraction canceling out new closed revenue — CS or renewal problem, not a sales problem',

    sectionSignalsHeading: '6 Signs Your Team Has a Sales Velocity Problem',
    sectionSignalsSubheading: "If any of these are true, you're flying blind on what's actually driving — or killing — your revenue.",
    signal1: "You can't explain why revenue was up one month and flat the next",
    signal2: 'Your sales forecast is based on gut feel, not pipeline math',
    signal3: "You don't know your win rate by rep, by segment, or by source",
    signal4: 'Deals take significantly longer to close than they did a year ago',
    signal5: "You're adding more reps but revenue per rep is declining",
    signal6: 'Your pipeline looks healthy but the revenue never materializes',

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "Sales velocity is one of the first things I calculate when I start a new engagement. It immediately tells me which lever is broken — and points me directly at the root cause before I spend a day talking to reps or reviewing deals. Most companies I work with have never calculated it. When they do, the problem that's been confusing them for months becomes obvious in about 10 minutes.",

    faq1Question: 'What is the sales velocity formula?',
    faq1Answer: "Sales velocity = (Number of Opportunities × Average Deal Size × Win Rate) ÷ Sales Cycle Length. For example: 40 opportunities × $25,000 average deal × 30% win rate ÷ 60 days = $5,000 in daily revenue. Multiply by 30 for monthly velocity ($150,000/month). The formula is most useful as a diagnostic — if monthly revenue doesn't match what your velocity formula predicts, one of the four inputs is wrong.",
    faq2Question: 'Which of the four sales velocity levers has the most impact?',
    faq2Answer: "It depends on your specific numbers — which is why you need to calculate it. For most $1M–$10M companies, win rate is the highest-leverage lever because it's typically the most broken. A team closing 20% of opportunities that could close 35% with a better playbook and qualification process will see a 75% increase in velocity without adding headcount. That said, deal size is often underestimated — founders frequently undercharge relative to value, and a 20% price increase with flat volume is pure velocity gain.",
    faq3Question: "How is sales velocity different from revenue?",
    faq3Answer: "Revenue is a lagging indicator — it tells you what already happened. Sales velocity is a leading indicator — it tells you what's about to happen. If your velocity is declining today, your revenue will decline in 30–90 days. That's why velocity-based pipeline reviews are more useful for founders than quota-based ones: they surface problems before they hit the income statement.",
    faq4Question: 'How often should I calculate sales velocity?',
    faq4Answer: "Monthly at minimum — weekly if you're in an active growth push or trying to diagnose a specific problem. The goal isn't to track the number obsessively. It's to build the habit of asking: 'Which of the four inputs changed this month, and why?' That question surfaces the root cause of revenue problems faster than any dashboard.",

    ctaHeadline: "Want to Know What's Actually Limiting Your Revenue?",
    ctaDescription: "In 30 minutes I can calculate your sales velocity, identify which lever is broken, and tell you exactly what to fix first to move the number.",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. WIN-LOSS ANALYSIS
  // ─────────────────────────────────────────────────────────────
  seoWinLossAnalysis: {
    heroLine1: 'How to Run a Win/Loss Analysis',
    heroAccent: 'And What to Do With What You Find',
    heroDescription: "Most companies lose the same deals for the same reasons, quarter after quarter, because nobody ever studied why they lost. A win/loss analysis takes less than a week to run and surfaces the specific changes — to your ICP, your process, and your playbook — that move the close rate.",

    sectionStepsHeading: 'How to Run a Win/Loss Analysis in 5 Steps',
    sectionStepsSubheading: "The process takes less than a week. The insights it produces can change your go-to-market for the next year.",
    step1Title: 'Pull Your Last 30 Closed Deals — Wins and Losses',
    step1Body: "Start with the data you already have. Export the last 30 closed-won and 30 closed-lost deals from your CRM. If you don't have 30 of each, use what you have. The goal is a representative sample — not a perfect one. Include deal size, source, industry, deal length, and which rep handled it.",
    step2Title: 'Interview the Buyers — Not Just Your Reps',
    step2Body: "Rep notes in the CRM are filtered through ego and assumption. The real win/loss intelligence comes from calling the buyers directly — both the ones who bought and the ones who didn't. A 15-minute call with three simple questions ('Why did you choose us?' / 'Why did you go another direction?' / 'What almost made you decide differently?') generates more actionable insight than 6 months of rep feedback.",
    step3Title: 'Segment by Pattern — Not by Individual Deal',
    step3Body: "The goal isn't to understand why deal #17 was lost. It's to find patterns across all 60 deals. Group wins and losses by: decision driver, competitor, buyer title, company size, industry, and rep. The patterns that emerge — 'We win when the buyer is a VP of Sales' or 'We lose every deal where procurement is involved' — become the foundation of your ICP and playbook updates.",
    step4Title: 'Separate Controllable from Uncontrollable Losses',
    step4Body: "Not every loss is fixable. Some deals are lost to budget freezes, company acquisitions, or competitors with fundamentally better pricing. Those are uncontrollable losses — learn from them but don't obsess over them. The high-value insight is in the controllable losses: deals you lost due to rep skill gaps, unclear value proposition, late engagement of the right stakeholder, or a proposal that didn't address the real objection.",
    step5Title: 'Build Three Specific Actions From What You Find',
    step5Body: "A win/loss analysis that doesn't change anything is a research project, not a business tool. Every analysis should produce at least three specific actions: one change to your ICP or targeting, one change to your sales process or playbook, and one coaching focus for your reps. Document them, assign owners, and set a 60-day checkpoint to assess whether they're moving the numbers.",

    seoPara1: "Win/loss analysis is one of the most high-leverage activities a $1M–$10M company can run — and one of the most neglected. The reason it gets skipped is psychological, not logistical: founders and sales leaders don't want to hear that their positioning is wrong, their ICP is off, or that their reps are losing deals for entirely avoidable reasons. The data is almost always uncomfortable. It's also almost always actionable.",
    seoPara2: "The companies that use win/loss analysis systematically compound their advantages over time — they close the same gaps that competitors leave open, continuously narrow their ICP to the buyers who close fastest, and build a playbook grounded in what actually works rather than what sales leaders think works.",

    sectionComparisonHeading: 'Without Win/Loss Analysis vs. With It',
    sectionComparisonSubheading: "The gap compounds over time. Companies that study their losses systematically outperform those that don't.",
    comparison1Without: "Lost deals are recorded as 'no decision' or 'price' with no further detail",
    comparison1With: 'Each loss has a documented root cause categorized by type and assigned to a controllable or uncontrollable bucket',
    comparison2Without: "ICP is based on who you hope to sell to, not who actually buys",
    comparison2With: 'ICP is refined every quarter from closed-won pattern analysis',
    comparison3Without: "Reps handle the same objections inconsistently — each inventing their own response",
    comparison3With: 'Playbook objection responses are built from real win/loss root cause data',
    comparison4Without: 'Pricing changes are reactive — discounts given when buyers push back',
    comparison4With: 'Pricing strategy is informed by what decision drivers actually drive wins vs. losses',
    comparison5Without: 'Marketing campaigns target the wrong buyers because no one has checked win data',
    comparison5With: 'Marketing and sales are aligned on the exact profile that closes fastest and stays longest',
    comparison6Without: 'The same fixable mistakes get made quarter after quarter',
    comparison6With: 'Controllable loss patterns are caught and corrected within one sales cycle',

    sectionSignalsHeading: '6 Signs You Need a Win/Loss Analysis Now',
    sectionSignalsSubheading: "If any of these are true, you're losing fixable deals — and the problem will compound until you look at the data.",
    signal1: 'You lose to the same competitor repeatedly without knowing exactly why',
    signal2: "Your win rate has been declining for 2+ quarters and you can't explain it",
    signal3: 'Different reps quote different reasons for losing the same type of deal',
    signal4: "Your ICP hasn't been reviewed since you first wrote it down",
    signal5: "You've hired more reps but close rates per rep are declining",
    signal6: 'Marketing and sales disagree on what a good lead looks like',

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "A win/loss analysis is one of the first things I run in a new engagement — usually in the first two weeks. What it reveals about the real ICP, the real competitive dynamics, and the real reasons deals stall almost always reshapes the sales strategy for the rest of the engagement. Founders are almost always surprised by what they find. The data is never what they assumed.",

    faq1Question: 'How often should a win/loss analysis be run?',
    faq1Answer: "Quarterly at minimum — ideally as an ongoing process where every closed deal (win or loss) gets a brief structured review within 48 hours. The quarterly deep-dive should pull the full dataset, look for trends, and produce the three specific actions. The 48-hour close reviews catch emerging patterns before they compound. Most companies under $10M run neither — which is why the same losses repeat quarter after quarter.",
    faq2Question: 'Should sales reps conduct their own win/loss interviews?',
    faq2Answer: "No — and this is the most common mistake. Buyers will not tell your rep the real reason they chose a competitor. They'll soften it, omit the most embarrassing parts, and protect the relationship. Win/loss interviews should be conducted by someone the buyer perceives as neutral: a founder, a customer success leader, or a third party. The information you get from an unfiltered buyer conversation is categorically different from what a rep hears after the deal closes.",
    faq3Question: "What's the most valuable insight a win/loss analysis typically surfaces?",
    faq3Answer: "ICP drift — companies that are winning deals with a different buyer profile than the one they think they're targeting. This is extremely common in $1M–$10M companies that grew through founder relationships. The deals that close fastest and stay longest often look different from the deals the company is actively pursuing. Fixing that misalignment — by updating the ICP and redirecting sales effort — often has more impact than any process or playbook change.",
    faq4Question: 'Can win/loss analysis help with pricing decisions?',
    faq4Answer: "Yes — and this is one of the most underused applications. When you analyze wins against losses by deal size and decision driver, you almost always find that price objections cluster around deals where value was never clearly established — not deals where the product was genuinely too expensive. This means most 'price losses' are actually 'value communication losses.' That realization is the foundation of a discount-reduction strategy that actually works.",

    ctaHeadline: "Losing Deals You Should Be Winning?",
    ctaDescription: "In 30 minutes I can walk through your last quarter of closed deals, identify the patterns in what you're losing and why, and tell you what to change first.",
  },

  // ─────────────────────────────────────────────────────────────
  // 3. HOW TO SHORTEN SALES CYCLE
  // ─────────────────────────────────────────────────────────────
  seoHowToShortenSalesCycle: {
    heroLine1: 'How to Shorten Your B2B Sales Cycle',
    heroAccent: 'Without Discounting, Pushing, or Pressuring Buyers',
    heroDescription: "A long sales cycle isn't usually a buyer problem. It's a process problem — on your side. Here are the five tactics that remove friction, compress deal timelines, and generate revenue faster without sacrificing relationship quality.",

    sectionTacticsHeading: '5 Tactics That Actually Shorten the Sales Cycle',
    sectionTacticsSubheading: "Each tactic targets a different source of cycle length — use all five and the cumulative compression is significant.",
    tactic1Title: 'Qualify Harder at the Top — Kill Deals That Will Never Close',
    tactic1Body: "The fastest way to shorten your average cycle is to stop working deals that were never going to close. A deal that lingers for 180 days before dying as 'no decision' is costing you the same hours as a deal that closes in 45 days. Better qualification criteria — budget confirmed, decision-maker engaged, urgency established, success criteria defined — reduces cycle length by eliminating the back half of your pipeline where deals stall and die.",
    tactic2Title: 'Engage the Real Decision-Maker Earlier',
    tactic2Body: "Most B2B deals stall at 'evaluation complete, waiting for approval.' That approval delay is almost always avoidable — if you had gotten executive engagement in the first two meetings instead of the last one. Introduce the multi-stakeholder question in discovery: 'Who else will be involved in the final decision, and when is the right time for me to connect with them?' Getting there early compresses the back end of the cycle by 30–60 days in most cases.",
    tactic3Title: 'Use a Mutual Action Plan on Every Deal Above Threshold',
    tactic3Body: "A mutual action plan (MAP) is a shared document that lists every step needed to get from 'evaluating' to 'signed' — with owners and dates on both sides. It creates joint accountability, surfaces hidden steps the buyer didn't tell you about, and makes the 'close date' a collaborative target rather than a sales quota artifact. For deals above $10K, a MAP used consistently can compress cycles by 20–30%.",
    tactic4Title: 'Define Stage Exit Criteria That Actually Mean Something',
    tactic4Body: "Vague pipeline stages produce long, unforecastable cycles. When 'Proposal Sent' means the rep emailed a PDF and is waiting to hear back, deals can sit there for weeks. When 'Proposal Sent' requires verbal agreement on pricing range and a scheduled review call, movement through stages becomes predictable. Exit criteria are the mechanism that converts stage labels into genuine progress indicators — and they compress cycles by preventing deals from sitting in limbo.",
    tactic5Title: "Eliminate Internal Friction on Your Side",
    tactic5Body: "Cycle length isn't always a buyer problem. Legal reviews, contract approvals, custom proposal processes, and pricing exceptions that require VP sign-off all add days and weeks to cycles — on your side. Audit your internal deal process from 'verbal yes' to 'signed contract.' Every step that requires an internal handoff or approval is a cycle extension. Streamline legal, templatize proposals, and pre-approve pricing tiers to compress the close phase.",

    seoPara1: "Sales cycle length is the denominator in your sales velocity formula — every day you compress the average cycle multiplies the value of every other sales investment you make. A company with a 90-day average cycle that compresses to 60 days generates 50% more revenue from the same pipeline, the same reps, and the same quota — without adding a single new opportunity. It's the highest-leverage improvement most $1M–$10M companies aren't measuring.",
    seoPara2: "The most common source of long cycles isn't buyer hesitation — it's the rep's failure to establish clear next steps at every stage. When a meeting ends without a scheduled follow-up and a defined deliverable, the deal decelerates. When every interaction ends with a specific next action owned by both sides, the cycle stays in motion. That habit — closing every conversation with a committed next step — is the single most implementable cycle-shortening behavior I've seen.",

    sectionComparisonHeading: 'Long Cycle Behaviors vs. Short Cycle Behaviors',
    sectionComparisonSubheading: "The difference between a 90-day and a 45-day cycle is almost entirely in these behaviors.",
    comparison1Without: "Deals sit in 'Proposal Sent' for 3–4 weeks with no defined next step",
    comparison1With: 'Every proposal has a scheduled review call within 5 days of delivery',
    comparison2Without: "Decision-maker is engaged for the first time at the end of the process",
    comparison2With: 'Decision-maker is identified and contacted in the first two meetings',
    comparison3Without: "Deals that will never close stay in the pipeline for months",
    comparison3With: 'Deals without confirmed budget, urgency, and access are killed within 30 days',
    comparison4Without: 'Internal contract review adds 3–4 weeks to every deal',
    comparison4With: 'Streamlined contract process with pre-approved terms closes in 5–7 days',
    comparison5Without: "Close date on the CRM is the rep's hope, not a buyer commitment",
    comparison5With: 'Close date is tied to a mutual action plan step the buyer agreed to',
    comparison6Without: "Average cycle length is unknown — no one has measured it",
    comparison6With: 'Cycle length is tracked by stage, rep, and segment — and improving quarter over quarter',

    sectionSignalsHeading: '6 Signs Your Sales Cycle Is Longer Than It Needs to Be',
    sectionSignalsSubheading: "These are process failures, not buyer behaviors — and each one is fixable.",
    signal1: "Deals regularly reach 'verbal yes' and then stall for weeks before signing",
    signal2: "You don't know your average sales cycle length — or it varies wildly by rep",
    signal3: 'The same deals appear in pipeline reviews month after month with no movement',
    signal4: "You frequently get surprised by 'we need to loop in procurement' late in the process",
    signal5: 'Your close rate improves in Q4 — suggesting urgency is the only lever you use',
    signal6: 'Your internal contract and approval process adds more time than the buyer evaluation',

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "In every engagement, cycle length is one of the first metrics I audit. It's almost always longer than it should be — and the culprit is almost always on the seller's side, not the buyer's. Vague stage definitions, missing next steps, late executive engagement, and slow internal processes add weeks to deals that could close in days. Fixing these — methodically, with clear stage criteria and a mutual action plan template — typically compresses average cycles by 25–35% within two quarters.",

    faq1Question: "What's a realistic target for B2B sales cycle length at the $1M–$10M stage?",
    faq1Answer: "It depends heavily on deal size and complexity, but a useful benchmark: SMB deals under $15K should close in 30–45 days. Mid-market deals at $15K–$50K should close in 60–90 days. Enterprise or complex deals above $50K may run 90–180 days. If your cycles are significantly longer than these benchmarks for equivalent deal sizes, there's a process or qualification problem worth diagnosing. The goal isn't to hit an arbitrary number — it's to compress cycles relative to your own historical baseline.",
    faq2Question: 'Does shortening the sales cycle mean being more aggressive with buyers?',
    faq2Answer: "No — and this is the most important misconception to clear up. Shortening the cycle is about removing friction, not adding pressure. Buyers who feel pushed close slower, not faster, because they become defensive and start involving more stakeholders as a delay tactic. The legitimate cycle-shortening techniques — better qualification, early executive engagement, mutual action plans, clear stage criteria — all work by making it easier for the buyer to say yes, not by making it harder for them to say no.",
    faq3Question: "How do you handle a buyer who says they need more time to evaluate?",
    faq3Answer: "First, find out what they're actually evaluating. 'More time' is almost always a proxy for something specific: they need to compare alternatives, get internal approval, validate budget, or resolve an internal disagreement. Ask: 'What specifically needs to happen on your side before you can make a decision, and what's driving the timeline?' That answer tells you whether you're dealing with a real process requirement or a delay tactic — and what you can do to help accelerate it.",
    faq4Question: 'Should I measure sales cycle length for every deal or just the average?',
    faq4Answer: "Both — and segment it. Your average cycle tells you the overall health. But the most actionable insight comes from segmenting by: deal size (is the cycle longer for bigger deals?), rep (is one rep significantly faster or slower?), source (do inbound deals close faster than outbound?), and stage (where are deals actually stalling?). The stall point diagnosis is usually where you find the most leverage — one stage is causing most of the cycle extension, and fixing it produces disproportionate results.",

    ctaHeadline: "Deals Taking Too Long to Close?",
    ctaDescription: "In 30 minutes I can audit your pipeline, identify where deals are stalling, and tell you exactly what process changes will compress your average cycle.",
  },

  // ─────────────────────────────────────────────────────────────
  // 4. SALES QUALIFIED LEAD DEFINITION
  // ─────────────────────────────────────────────────────────────
  seoSalesQualifiedLead: {
    heroLine1: 'What Is a Sales Qualified Lead (SQL)?',
    heroAccent: 'And Why Your Team Needs a Clear Definition',
    heroDescription: "Most sales teams have an informal sense of what a good lead looks like. Almost none have it written down. Without a documented SQL definition, sales and marketing argue about lead quality, pipeline is inflated with junk, and close rates look worse than they actually are.",

    sectionLeadTypesHeading: 'MQL vs. SQL vs. SAL: The Distinctions That Matter',
    sectionLeadTypesSubheading: "The definitions only matter if they're agreed upon by both sales and marketing — and built from your actual win data.",
    lead1Title: 'Marketing Qualified Lead (MQL)',
    lead1Body: "An MQL is a lead that marketing has determined shows enough interest or fits enough criteria to be worth sales attention — but hasn't been qualified by a sales conversation yet. MQL definitions vary wildly: it might mean 'downloaded a whitepaper,' 'attended a webinar,' or 'matches our ICP firmographics.' The core problem: without a specific, agreed-upon MQL definition, marketing sends everything and sales ignores everything.",
    lead2Title: 'Sales Qualified Lead (SQL)',
    lead2Body: "An SQL is a lead that a sales rep has engaged with directly and confirmed meets the minimum bar for real pursuit. SQL qualification typically uses a framework like BANT (Budget, Authority, Need, Timeline) or MEDDIC. The key: it requires a human sales conversation, not just a data match. A lead that looks perfect on paper but has no budget or no urgency is not an SQL — it's a marketing hypothesis.",
    lead3Title: 'Sales Accepted Lead (SAL)',
    lead3Body: "An SAL is the handoff stage between MQL and SQL — it's the moment sales formally accepts the lead from marketing and commits to engaging within a defined SLA (typically 24–48 hours). SAL is most relevant in companies with a formal SDR/AE structure where there's a clear handoff point. For most $1M–$10M companies, the SAL stage can be simplified — but the concept of a committed response SLA is valuable at any size.",
    lead4Title: 'How to Define SQL for Your Specific Business',
    lead4Body: "The right SQL definition is built from your closed-won data — not from a framework template. Pull your last 30 closed deals and ask: what did they have in common at the point of first real engagement? Budget range confirmed? Decision-maker in the room? A specific trigger event (headcount growth, new funding, technology change)? The criteria that appear in 80%+ of your wins become your SQL definition. Update it quarterly as the win data evolves.",

    seoPara1: "The absence of a documented SQL definition is one of the most common — and most costly — operational gaps in $1M–$10M companies. Without it, sales reps make individual judgment calls about which leads to pursue, marketing has no feedback signal to optimize against, and pipeline reviews become debates about individual deals rather than systematic analysis of conversion patterns. The cost isn't visible in any single quarter — it compounds silently over time.",
    seoPara2: "Building an SQL definition is a half-day exercise. It requires a sales leader, a marketing leader (or founder), and access to the last 30 closed-won deals. The output is a one-page document that both teams commit to using — and review quarterly. That document, consistently applied, improves forecast accuracy, reduces wasted rep time, and gives marketing a target worth optimizing toward.",

    sectionComparisonHeading: 'Without SQL Definition vs. With SQL Definition',
    sectionComparisonSubheading: "One document. Two completely different ways sales and marketing operate.",
    comparison1Without: "Sales and marketing argue constantly about lead quality — each side blames the other",
    comparison1With: 'Clear SQL criteria mean both teams agree on what constitutes a real opportunity',
    comparison2Without: "Reps spend time on leads that will never buy — opportunity cost is invisible",
    comparison2With: 'Reps only pursue leads that meet the minimum qualification bar — time is protected',
    comparison3Without: "Pipeline is inflated with wishful opportunities that make the forecast look full",
    comparison3With: 'Pipeline reflects real opportunities — forecast accuracy improves significantly',
    comparison4Without: "Conversion rates are meaningless because the denominator includes unqualified garbage",
    comparison4With: 'Conversion rates are based on qualified leads — and become a meaningful performance signal',
    comparison5Without: "Marketing optimizes for MQL volume — sends leads sales will never work",
    comparison5With: 'Marketing optimizes for SQL conversion — generates fewer, better leads',
    comparison6Without: "Close rate appears low but the actual problem is poor lead quality at the top",
    comparison6With: 'Root cause of close rate problems is correctly identified — qualification vs. process vs. rep skill',

    sectionSignalsHeading: '6 Signs Your SQL Definition Is Broken or Missing',
    sectionSignalsSubheading: "If any of these are true, your pipeline data is unreliable and your close rate metrics are misleading you.",
    signal1: 'Sales and marketing have different definitions of what a good lead looks like',
    signal2: "Reps complain that marketing leads aren't worth working",
    signal3: "Marketing hits MQL targets but sales misses quota — and no one connects the two",
    signal4: 'Your pipeline looks full but conversion rates are low and deals are slow',
    signal5: "You can't tell whether a close rate problem is a qualification problem or a process problem",
    signal6: "There's no agreed SLA for how quickly sales should follow up on marketing leads",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "In almost every engagement I start, there's no documented SQL definition. Sales and marketing are operating on separate assumptions about what a good lead looks like, and nobody has reconciled them. Creating that shared definition — built from closed-won data, not theory — is one of the first alignment exercises I run. It usually takes half a day and immediately improves both pipeline quality and the sales-marketing relationship.",

    faq1Question: 'Should every company use BANT to qualify leads?',
    faq1Answer: "BANT (Budget, Authority, Need, Timeline) is a useful starting framework — not a universal standard. For high-velocity, low-ACV sales, BANT is often too heavyweight and slows reps down unnecessarily. For complex enterprise deals, BANT may not be sufficient and frameworks like MEDDIC or SPICED provide more structure. For most $1M–$10M B2B companies, a simplified version works well: 'Does this person have the authority and budget to buy, and is there a specific problem they need to solve in the next 90 days?' Those three questions catch most unqualified leads.",
    faq2Question: "What happens when sales rejects a marketing-generated lead?",
    faq2Answer: "In a functioning demand generation model, rejected leads go back to marketing with a specific rejection reason (not 'bad lead' — that's useless). Marketing tracks rejection reasons, adjusts targeting, and feeds the pattern back into campaign optimization. This feedback loop is what makes the MQL-to-SQL handoff valuable over time. Without it, sales rejects leads and marketing keeps sending the same low-quality volume, and the conversation never improves.",
    faq3Question: "How does SQL definition relate to ICP?",
    faq3Answer: "Your SQL definition should be a tighter version of your ICP. The ICP describes the universe of companies and buyers you want to sell to. The SQL definition adds the behavioral and situational signals that indicate a specific company is ready to buy now — not just potentially a good fit at some point. A company that perfectly matches your ICP but has no current urgency or budget is an ICP match, not an SQL. The SQL filter protects rep time from ICP matches that aren't ready.",
    faq4Question: "How often should the SQL definition be updated?",
    faq4Answer: "At minimum, quarterly — and whenever the win data changes significantly. The most common trigger for an update is a shift in your average deal size or ICP segment. As companies grow from $1M to $5M ARR, the buyers they serve often shift: the SQL criteria that worked for SMB deals may not apply to the mid-market segment they're starting to win. Running a quarterly win/loss analysis and updating SQL criteria based on what closed is the discipline that keeps qualification current.",

    ctaHeadline: "Sales and Marketing Not Aligned on What a Good Lead Looks Like?",
    ctaDescription: "In 30 minutes I can walk through your current lead qualification process, identify where the definition is breaking down, and help you build an SQL framework from your actual closed-won data.",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. B2B REFERRAL PROGRAM
  // ─────────────────────────────────────────────────────────────
  seoB2bReferralProgram: {
    heroLine1: 'How to Build a B2B Referral Program',
    heroAccent: 'That Generates Warm Leads Consistently',
    heroDescription: "Most founders rely on referrals but have no system to generate them. They happen when a customer happens to think of you — not because you made a specific ask through a repeatable process. Here's how to build the system.",

    sectionComponentsHeading: 'The 5 Components of a Systematic Referral Program',
    sectionComponentsSubheading: "Ad-hoc referrals happen by accident. Systematic referrals require each of these five elements working together.",
    component1Title: 'Define Who Should Be Referring You',
    component1Body: "Not every customer is a good referral source. The best referral sources are customers who achieved a clear, measurable outcome from your product or service — and who regularly interact with your ICP through their professional networks. Start by identifying your top 10 customers by NPS or satisfaction and the top 5 by network overlap with your target buyer. Those 15 names are your referral program's founding members.",
    component2Title: 'Make the Ask Specific and Frictionless',
    component2Body: "The reason most companies get fewer referrals than they deserve is that they make a vague ask: 'If you know anyone who could use our help, send them our way.' Specific asks generate specific results. 'Do you know any founders in the $2M–$8M ARR range who are struggling to scale their sales team beyond founder-led sales?' gives the referrer a mental filter and a clear criterion. They either know someone or they don't — no thinking required.",
    component3Title: "Build a Follow-Through System — Not Just a Follow-Up",
    component3Body: "A referral without follow-through destroys the referral relationship. When a referral is made, the referred person should hear from you within 24 hours, get a warm handoff message from the referrer, and receive something of immediate value (a diagnostic, a relevant piece of content, a short meeting). If the referral doesn't go anywhere, close the loop with the referrer so they know and feel good about having made the introduction.",
    component4Title: 'Create a Referral Cadence — Not a One-Time Ask',
    component4Body: "One-time asks produce one-time results. A referral program is a cadence: an annual review with each customer that includes a referral ask, a mid-year check-in that surfaces new connections, and a quarterly internal audit of which customers are most likely to refer now. The founders who build systematic referral programs build them into their customer success process — not as a separate initiative, but as a standard touchpoint at key relationship milestones.",
    component5Title: "Decide Whether to Incentivize — and How",
    component5Body: "Incentive structure is context-dependent. In professional services, monetary referral fees can feel transactional and damage the relationship. In SaaS or product businesses, credits, discounts, or co-marketing value can work well. The most effective incentive is often non-monetary: exclusive access, a personal thank-you from leadership, or being listed as a case study partner. Start with the non-monetary approach and test incentive-based referrals with a small cohort before rolling out broadly.",

    seoPara1: "Referrals are the highest-converting, lowest-cost, fastest-closing pipeline source in B2B sales — and most companies generate a fraction of the referrals they could because they have no system to request them. The problem isn't that customers don't want to refer. It's that nobody ever made a specific enough ask. Customers who had great outcomes are ready and willing to introduce you to peers with the same problems — they just need a clear target, a specific ask, and a frictionless way to make the introduction.",
    seoPara2: "Building a referral program isn't a marketing project — it's a sales process. It requires the same rigor as any other pipeline generation activity: defined targets, documented process, tracked conversion rates, and regular review. Companies that treat referrals as a systematic channel rather than a happy accident typically build it into 20–30% of new pipeline within 12 months.",

    sectionComparisonHeading: 'Ad-Hoc Referrals vs. Systematic Referral Program',
    sectionComparisonSubheading: "The difference between random referrals and a reliable referral channel is entirely in the process.",
    comparison1Without: "Referrals happen randomly — when a customer happens to think of you",
    comparison1With: 'Referrals are systematically requested at defined customer milestones',
    comparison2Without: "The ask is vague: 'Let us know if anyone comes to mind'",
    comparison2With: 'The ask is specific: names the exact buyer profile the referrer should think of',
    comparison3Without: "Referred leads sit in a generic inbox with no priority routing or warm handoff",
    comparison3With: 'Referred leads are contacted within 24 hours with a personalized warm introduction',
    comparison4Without: "Referral sources are never thanked or updated on what happened to their referral",
    comparison4With: 'Every referral gets a closed-loop update — the referrer always knows what happened',
    comparison5Without: "Close rate on referred leads is unknown — they're mixed in with inbound",
    comparison5With: 'Referred leads are tracked separately — close rate, cycle length, and LTV are measured',
    comparison6Without: "The referral channel generates a few deals per year — ad hoc, unpredictable",
    comparison6With: 'The referral channel generates a predictable 15–30% of new pipeline — systematically',

    sectionSignalsHeading: "6 Signs You're Leaving Referral Revenue on the Table",
    sectionSignalsSubheading: "If any of these are true, you have a customer base that could be generating significantly more pipeline — and isn't.",
    signal1: 'Customers love you but you rarely get introductions from them',
    signal2: 'You have no formal process for requesting referrals — it happens when someone remembers to ask',
    signal3: 'You track referral source in the CRM but have never analyzed close rate or LTV by source',
    signal4: "Referred leads often go cold because nobody followed up quickly enough",
    signal5: "Your best customers have extensive networks in your ICP but you've never made a specific ask",
    signal6: "You've never measured the referral rate across your customer base",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "In my own business, referrals are the primary pipeline source — and they come systematically, not by accident. Building a referral cadence into client relationships is something I help founders do in almost every engagement. The first step is always the same: audit your customer base for satisfaction and network overlap, then make a specific ask to the five best-positioned customers. The results consistently surprise founders who've been hoping customers would refer on their own.",

    faq1Question: 'Do B2B referral programs need financial incentives to work?',
    faq1Answer: "Not for service businesses — and often financial incentives backfire by making the relationship feel transactional. In professional services, the most effective referral driver is a genuinely excellent outcome. Customers who got a measurable result refer naturally when asked specifically. What they need isn't money — it's a simple ask, a specific description of who to refer, and confirmation that their referral will be handled well. Financial incentives work better in SaaS or product businesses where the relationship is less personal.",
    faq2Question: "What's the best time to ask for a referral?",
    faq2Answer: "The optimal moment is immediately after a positive outcome — when the customer has just experienced something that makes them feel good about the relationship. This could be a quarterly business review where results are positive, a specific milestone (first closed deal, first 90-day win), or the moment a customer proactively tells you how happy they are. Asking during a problem or at contract renewal is less effective because the customer's attention is on other things.",
    faq3Question: "How do I handle a referral that doesn't convert?",
    faq3Answer: "Close the loop with the referrer — always. Tell them what happened (the company wasn't ready yet, wasn't the right fit, is on the 6-month timeline), thank them for the introduction, and keep the relationship warm. Referrers who feel their introductions went into a black hole stop referring. Referrers who feel their introductions were handled professionally and updated promptly refer again. The long-term referral relationship is more valuable than any single deal.",
    faq4Question: 'How do referral-sourced leads compare to other lead sources?',
    faq4Answer: "Referral-sourced leads consistently outperform other channels on close rate, sales cycle length, and lifetime value. The reason: a referral comes with pre-established trust. The referred buyer already believes you're credible because someone they trust said so. This compresses the early trust-building phase of the sales cycle, which is often the longest part. Most $1M–$10M companies that track referral source carefully find that referred deals close 30–50% faster and at 15–25% higher win rates than cold or inbound leads.",

    ctaHeadline: "Your Best Customers Aren't Referring You Yet. Let's Change That.",
    ctaDescription: "In 30 minutes I can review your customer base, identify your best referral sources, and help you build the ask and follow-through process that turns good relationships into consistent pipeline.",
  },

  // ─────────────────────────────────────────────────────────────
  // 6. SALES PIPELINE STAGES
  // ─────────────────────────────────────────────────────────────
  seoSalesPipelineStages: {
    heroLine1: 'Sales Pipeline Stages:',
    heroAccent: 'How to Define Them So Your Team Uses Them the Same Way',
    heroDescription: "Most CRM pipeline stages are vague labels that mean different things to different reps. Without entry and exit criteria, stage advancement is based on optimism — not evidence. Here's how to build stages that actually predict revenue.",

    sectionStagesHeading: 'The 6 Sales Pipeline Stages — With Entry and Exit Criteria',
    sectionStagesSubheading: "Every stage needs two things: a clear entry point that defines when a deal belongs here, and an exit criterion that defines when it moves forward.",
    stage1Title: 'Prospect Identified',
    stage1Body: "Entry: A company matching your ICP has been identified from a list, inbound lead, referral, or research. Exit: A specific contact has been identified and initial outreach has been sent. This stage is about volume — the goal is to move qualified targets into active outreach quickly, not to spend time on accounts that will never convert. Most founders let too many accounts linger here because there's no exit criterion forcing a next action.",
    stage2Title: 'First Contact Made',
    stage2Body: "Entry: Outreach has been sent (email, LinkedIn, referral introduction). Exit: A two-way conversation has started — the prospect has responded and expressed enough interest to schedule a discovery call. This stage separates volume from engagement. The key metric is response rate by channel and sequence. Without a clear exit criterion, reps often count any response as progress — including 'not interested' replies that should move to disqualified.",
    stage3Title: 'Discovery Completed',
    stage3Body: "Entry: Discovery call has been scheduled and confirmed. Exit: You've confirmed the prospect has the problem you solve, the budget range to act, a timeline that makes the opportunity real, and a decision-making process you understand. This is the most important qualification stage. Moving an unqualified prospect past discovery wastes proposal time and distorts your pipeline forecast. Define the minimum qualification bar explicitly — and stick to it.",
    stage4Title: 'Solution Presented',
    stage4Body: "Entry: Qualified prospect has agreed to a presentation or demo. Exit: Prospect has provided substantive feedback on the presentation — questions about scope, pricing, timeline, or implementation indicate real evaluation. Radio silence after a presentation is not an exit to the next stage. This stage is where deals often stall because 'sent the deck' is treated as progress. True exit requires a two-way conversation about the solution, not just delivery of materials.",
    stage5Title: 'Proposal / Commercial Discussion',
    stage5Body: "Entry: Prospect has requested a proposal or pricing conversation has begun. Exit: Written proposal has been reviewed and prospect has communicated their position — moving forward, requesting revisions, or declining. Many teams treat 'proposal sent' as a pipeline milestone, but a sent proposal with no response is worth nothing. The exit criterion is the prospect's explicit response. Deals that sit in this stage for more than two weeks without a response should be escalated or moved to at-risk.",
    stage6Title: 'Closed Won / Closed Lost',
    stage6Body: "Entry: Prospect has communicated a final decision. Exit: Contract signed and payment terms agreed (Closed Won), or opportunity formally disqualified with a recorded loss reason (Closed Lost). The Closed Lost stage is as important as Closed Won — loss reason data is the input to your win/loss analysis and the foundation of pipeline improvement. If you're not capturing loss reason consistently, you're flying blind on which objections to address and which competitor narratives to counter.",

    seoPara1: "Pipeline stages are the backbone of sales forecast accuracy — and most companies set them up once, never revisit them, and wonder why their quarterly forecast is consistently wrong. The issue is almost never that reps are sandbagging or over-optimistic by nature. It's that the stages themselves don't enforce rigor. When 'Discovery' just means 'we had a call,' any call qualifies — including calls where the prospect showed no real interest. When stages are criteria-based, only qualified conversations count as Discovery, and the pipeline becomes a reliable predictor of revenue.",
    seoPara2: "Well-defined pipeline stages also reveal where deals are dying. If 70% of your deals stall between Discovery and Proposal, the bottleneck is your qualification process or your presentation. If 60% stall between Proposal and Close, the bottleneck is your commercial conversation or your objection handling. Stage data is diagnostic data — but only if the stages mean something consistent across your team.",

    sectionComparisonHeading: 'Vague Pipeline Stages vs. Criteria-Based Stages',
    sectionComparisonSubheading: "The difference between a pipeline that predicts revenue and one that misleads you is in the rigor of your stage definitions.",
    comparison1Without: "Stages are named generically — 'Prospect,' 'Proposal,' 'Negotiation' — with no entry or exit criteria",
    comparison1With: 'Each stage has a defined entry criterion and an explicit exit action the rep must complete',
    comparison2Without: "Reps self-report stage — deals move forward based on optimism, not evidence",
    comparison2With: 'Stage advancement requires documented evidence: a response, a scheduled meeting, a signed document',
    comparison3Without: "Pipeline forecast is based on stage names — 'Proposal' = 40% close probability regardless of context",
    comparison3With: "Close probability is calibrated against historical data — 'Proposal' closes at 28% based on actual outcomes",
    comparison4Without: "Deals sit in stages for months with no activity — pipeline is inflated with zombie opportunities",
    comparison4With: 'Each stage has a maximum time threshold — stalled deals are flagged and reviewed weekly',
    comparison5Without: "Loss reasons are not captured — 'lost' is an outcome, not a data point",
    comparison5With: 'Loss reasons are recorded at close — data feeds win/loss analysis and objection handling improvement',
    comparison6Without: "Pipeline reviews are subjective — forecast accuracy is consistently poor",
    comparison6With: 'Pipeline reviews are stage-criteria-based — forecast accuracy improves each quarter as patterns emerge',

    sectionSignalsHeading: '6 Signs Your Pipeline Stages Are Broken',
    sectionSignalsSubheading: "These patterns show up in almost every company that hasn't revisited their pipeline structure since initial CRM setup.",
    signal1: 'Your reps describe the same deal at different stages depending on who you ask',
    signal2: "Deals sit in 'Proposal Sent' for 30+ days with no follow-up action recorded",
    signal3: 'Your pipeline forecast has been wrong by more than 20% for three or more quarters in a row',
    signal4: "You don't capture loss reason consistently — you know you lost, not why",
    signal5: "New reps take 6+ months to understand how your pipeline stages work because they're not documented",
    signal6: "Stage names in your CRM were set up years ago and nobody has reviewed whether they reflect how you actually sell",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "Redefining pipeline stages is one of the highest-leverage interventions I make in almost every engagement. When a team starts using consistent, criteria-based stages, forecast accuracy typically improves within 60 days — not because the pipeline got better overnight, but because the data becomes honest. You can see where deals are actually dying, how long each stage takes, and which reps are moving deals forward vs. keeping them warm. That visibility changes everything.",

    faq1Question: 'How many pipeline stages should a B2B sales process have?',
    faq1Answer: "Most $1M–$10M B2B companies operate well with 5–7 defined stages. Fewer than 5 and the stages become too broad to be useful — 'In Progress' tells you nothing. More than 7 and the stages become bureaucratic and reps stop updating them accurately. The right number is whatever reflects the distinct decision points in your actual sales process: the moment a prospect becomes a real conversation, the moment they become qualified, the moment a commercial discussion begins, and the moment a final decision is made. Count your decision points — that's your stage count.",
    faq2Question: "What's the difference between a pipeline stage and a sales activity?",
    faq2Answer: "A pipeline stage represents where the buyer is in the decision process — it's a status. A sales activity is something the rep does — it's an action. 'Discovery call scheduled' is an activity. 'Discovery completed with qualification confirmed' is a stage. The confusion between stages and activities is one of the most common CRM setup mistakes. When reps move deals forward based on activities (sent the email, made the call) rather than buyer-side outcomes (responded, agreed, committed), the pipeline loses its predictive value entirely.",
    faq3Question: 'How do I get my team to actually update pipeline stages consistently?',
    faq3Answer: "The answer is exit criteria, not motivation. If a rep can advance a deal by self-reporting, they'll advance it based on optimism. If a deal can only move to 'Proposal' when a written proposal has been sent and a response has been received, then stage advancement is tied to a verifiable event — not a judgment call. Build exit criteria into your CRM as required fields or activity triggers. Review stage progression in weekly pipeline calls. Inspect the criteria, not just the stage name. Consistency follows accountability, and accountability requires criteria.",
    faq4Question: 'Should pipeline stages be the same across all our products or segments?',
    faq4Answer: "Not necessarily. If you sell to enterprise buyers with procurement processes and also sell to small businesses with a one-call close, forcing both into the same pipeline stages will distort your forecast and frustrate your reps. The right approach is to align stages to decision-making process, not product line. If your SMB deals move from discovery to close in two weeks and your enterprise deals require a pilot and a committee review, those are different sales motions and deserve different pipeline structures. Most CRMs support multiple pipelines — use them.",

    ctaHeadline: "Your Pipeline Stages Should Tell You Where Deals Die. Let's Make Them Do That.",
    ctaDescription: "In 30 minutes I can audit your current pipeline stages, identify where your forecast is breaking down, and give you a criteria-based stage framework your team will actually use.",
  },
}

async function seed() {
  console.log('Seeding full content for 6 new SEO pages (batch 5)...\n')

  for (const [sectionKey, fields] of Object.entries(sections)) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section: sectionKey, content: fields }, { onConflict: 'section' })

    if (error) {
      console.error(`❌ ${sectionKey}: ${error.message}`)
    } else {
      console.log(`✅ ${sectionKey} (${Object.keys(fields).length} fields)`)
    }
  }

  console.log('\nDone.')
}

seed().catch(console.error)
