/**
 * Seed script: 5 new SEO pages (batch 6)
 * - seoManageUnderperformingSalesperson  → /how-to-manage-underperforming-salesperson
 * - seoFractionalLeaderFirst90Days       → /fractional-sales-leader-first-90-days
 * - seoSalesPerformanceImprovementPlan   → /sales-performance-improvement-plan
 * - seoHowToRunSalesQbr                  → /how-to-run-a-sales-qbr
 * - seoHowToBuildSalesCulture            → /how-to-build-sales-culture
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-5-new-pages-batch6.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {

  // ─────────────────────────────────────────────────────────────
  // 1. HOW TO MANAGE AN UNDERPERFORMING SALESPERSON
  // ─────────────────────────────────────────────────────────────
  seoManageUnderperformingSalesperson: {
    heroLine1: 'How to Manage an Underperforming Salesperson',
    heroAccent: 'Without Losing Another 6 Months',
    heroDescription: "Most founders wait too long, misdiagnose the problem, and either fire the wrong person or keep the wrong person. Here is the 5-step framework for diagnosing, coaching, and deciding — fast.",

    sectionStepsHeading: 'The 5-Step Framework for Managing Underperformance',
    sectionStepsSubheading: 'Most founders skip step one and go straight to step three. That is where the cost accumulates.',

    step1Title: 'Diagnose Before You React',
    step1Detail: "When a salesperson is not hitting their number, the instinct is to intervene immediately. The problem with that instinct is you may be solving the wrong thing. Underperformance has four possible root causes: the salesperson lacks the skill, the salesperson lacks the motivation, the sales process is broken, or the quota and ICP were set incorrectly. Firing a salesperson who has a broken process is an expensive mistake. Coaching a salesperson who has the wrong motivation wastes your time. Diagnosis comes first.",
    step1Fix: "Before your next conversation with this person, write down which of the four root causes you think is most likely. Then write down the evidence you have for that belief. If your evidence is thin, you are not ready to act yet.",

    step2Title: 'Have the Direct Conversation You Have Been Avoiding',
    step2Detail: "Most founders let underperformance go on too long because they are uncomfortable with direct feedback. They drop hints, adjust territories, or quietly reassign accounts. The salesperson rarely understands what is actually wrong until it is too late to fix it. A direct conversation means two things: you name the specific gap (not 'your numbers are down' but 'you closed zero deals from your last 12 discovery calls'), and you ask the salesperson to explain what they think is happening. You need both the data and their perspective before you can know what to do next.",
    step2Fix: "Write out the specific metric that is not being met. Write out the expected standard. Schedule a 30-minute conversation to share both, and ask the salesperson to come to that meeting with their own explanation for the gap.",

    step3Title: 'Set a 30-Day Performance Window With Specific Criteria',
    step3Detail: "The most common mistake in managing underperformance is keeping someone in a vague performance conversation for months. There is no timeline, no clear standard, and no defined consequence. The salesperson stays in place, morale on the team suffers, and nothing changes. A 30-day performance window with written criteria removes the ambiguity. The criteria should be activity-based and outcome-based: a specific number of discovery calls, a specific number of qualified deals entering the pipeline, and a specific close rate on opportunities already in stage. The standard has to be achievable. The timeline has to be real.",
    step3Fix: "Write down three to five measurable criteria the salesperson needs to hit within 30 days. Share them in writing. Confirm the salesperson understands what will happen if the criteria are met and what will happen if they are not.",

    step4Title: 'Coach to the Specific Gap, Not the Symptom',
    step4Detail: "If the diagnosis points to a skill gap rather than a motivation or system problem, coaching is the right intervention. Coaching the wrong thing wastes time for both of you. If deals are stalling between discovery and proposal, the issue is likely qualification or solution presentation. If deals are stalling at close, it may be price objection handling or urgency creation. Identify the one specific bottleneck in this salesperson's process and focus your coaching time there. Do not run general sales training. Run deal-specific coaching on the exact stage where the breakdown happens.",
    step4Fix: "Pull the last 10 deals this salesperson lost or stalled. Identify which stage each deal was in when it died. If 7 of 10 died in the same stage, that is the coaching target.",

    step5Title: 'Make the Decision Based on Evidence, Not Patience',
    step5Detail: "At the end of the 30-day window, you have two options: the criteria were met or they were not. If the criteria were met, acknowledge it and raise the bar for the next 30 days. If the criteria were not met, the conversation you need to have is clear. The most common failure mode here is extending the timeline. If a salesperson did not meet the criteria in 30 days, adding another 30 days rarely produces a different result. It usually means you are postponing a decision you have already made. Make the call based on the evidence you set out to gather, not on how long the person has been there or how much you like them personally.",
    step5Fix: "On day 30, review the criteria together. Score each one. The outcome of that review determines the next step. The criteria should make the decision for you.",

    sectionCompHeading: 'System Problem vs. Person Problem',
    sectionCompSubheading: "Getting this diagnosis wrong is the most expensive mistake you can make. Here is how to tell the difference.",

    comp1System: 'No written ICP or qualification criteria defined for the team',
    comp1Person: 'This specific salesperson is skipping qualification steps the rest of the team follows',
    comp2System: 'The sales process has never been documented or trained',
    comp2Person: 'The salesperson knows the process and is not following it',
    comp3System: 'Every new hire takes 9 to 12 months to ramp up',
    comp3Person: 'This salesperson is ramping slower than everyone else hired at the same time',
    comp4System: 'Quota was set without benchmarks or historical data',
    comp4Person: 'Other salespeople on the same quota are hitting it consistently',
    comp5System: 'Pipeline reviews happen irregularly and lack accountability',
    comp5Person: 'This salesperson does not show up prepared or act on agreed next steps',
    comp6System: 'Lost deal debriefs never happen — nobody knows why deals die',
    comp6Person: 'This salesperson loses deals that similar salespeople close at the same stage',

    seoPara1: "Underperformance in a small sales team is expensive in two directions. The obvious cost is the deals you are not closing. The less obvious cost is what the underperformance does to the rest of the team. When a salesperson is not being managed, everyone else on the team sees it. Standards drift. Accountability weakens. The people who are performing start wondering why they bother. The cost of delay is not just the missed quota. It is the signal it sends to everyone watching.",
    seoPara2: "The most important thing to get right before any performance conversation is the clarity of your expectations. If you have never written down what a good month looks like for this salesperson, the conversation will be subjective — and subjective performance conversations rarely produce change. Start with the accountability document and the quota criteria before you manage to them.",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "Managing underperformance is one of the most common conversations I have with founders in the first weeks of an engagement. They usually already know what needs to happen. They have been putting it off. Part of what I do is give founders the framework and the data to make the call they should have made weeks earlier, and to move forward without second-guessing themselves.",

    faq1Question: 'How long should I give an underperforming salesperson before taking action?',
    faq1Answer: "Thirty days from the moment you identify a specific, measurable gap. Not from when revenue started declining. The moment you can name a precise metric that is not being met, you start the clock. Waiting longer rarely produces new information. It usually just means you have a longer conversation to have at the end and a bigger cost to absorb in the meantime.",

    faq2Question: 'How do I know if it is a salesperson problem or a sales process problem?',
    faq2Answer: "The fastest test is to compare this salesperson's results against everyone else on the team using the same process. If your other salespeople are closing at 30% and this person is closing at 5%, that points toward a person issue. If your entire team is closing at 5%, that points toward a system issue. If you only have one salesperson, compare their conversion rates by stage against your own historical conversion rates from when you were selling. The data tells you where to look.",

    faq3Question: 'What do I say in a performance conversation with an underperforming salesperson?',
    faq3Answer: "Say the specific number. Do not open with general feedback or soften the lead. Say: 'Over the past 90 days your close rate on qualified opportunities is 8%. The team standard is 25%. I want to understand what you think is driving that gap before we talk about next steps.' Then stop talking and listen. You need to hear their explanation before you decide what is actually broken. Most founders do the opposite: they deliver a diagnosis before they have collected the data.",

    faq4Question: 'Should I put a salesperson on a PIP or just let them go?',
    faq4Answer: "A PIP makes sense when two things are true: you believe the performance problem is fixable, and you have not yet had a direct conversation with specific criteria. A PIP is not a formality before termination. If you have already decided, skip the PIP and have the honest conversation. If you have not decided and the problem is addressable, a 30-day PIP with clear metrics gives both sides the information they need to reach the right outcome.",

    ctaHeadline: "You Already Know Something Is Wrong. Let's Figure Out What to Do About It.",
    ctaDescription: "In 30 minutes I can help you diagnose whether you have a person problem, a process problem, or a quota problem — and give you a clear next step that does not cost you another quarter.",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. WHAT TO EXPECT IN THE FIRST 90 DAYS WITH A FRACTIONAL SALES LEADER
  // ─────────────────────────────────────────────────────────────
  seoFractionalLeaderFirst90Days: {
    heroLine1: 'What to Expect in the First 90 Days',
    heroAccent: 'With a Fractional Sales Leader',
    heroDescription: "Days 1-30 are for listening. Days 31-60 are for fixing. Days 61-90 are for making it stick. Here is exactly what should happen after you bring in a fractional sales leader — and the red flags that tell you it is not working.",

    sectionPhasesHeading: 'The 3-Phase 90-Day Roadmap',
    sectionPhasesSubheading: "Each phase builds on the last. Skipping the audit phase is the most common reason engagements stall.",

    phase1Label: 'Days 1–30',
    phase1Title: 'Listen, Audit, and Map What Is Real',
    phase1Detail: "The first 30 days are not for fixing anything. They are for understanding what is actually happening versus what the founder believes is happening. A fractional sales leader who starts making changes in week one has skipped the most important step: diagnosis. The audit covers five areas — pipeline quality and stage accuracy, quota structure and ICP definition, the existing sales process and where deals are dying, the team's activity patterns versus their outcomes, and the CRM setup. At the end of 30 days, the fractional leader should be able to give you a written summary of the top two or three highest-leverage interventions and why those are the priority over everything else.",
    phase1Deliverable: "Deliverable by day 30: A written pipeline audit and a prioritized list of the two or three changes with the highest expected revenue impact. If you do not receive this, ask for it directly.",

    phase2Label: 'Days 31–60',
    phase2Title: 'First Interventions, Process Changes, Pipeline Cleanup',
    phase2Detail: "Days 31 through 60 are when the work becomes visible. The first interventions are almost always the same: redefine the ICP criteria, clean the pipeline of zombie deals, install or repair the weekly pipeline review, and establish clear exit criteria for each pipeline stage. These are not glamorous changes. They are the unglamorous infrastructure work that makes everything else downstream more accurate and more actionable. By day 60, the pipeline should be smaller and more honest than it was on day one. That is a feature, not a failure. A smaller, honest pipeline is more useful than a large, inflated one.",
    phase2Deliverable: "Deliverable by day 60: A cleaned and restructured pipeline with documented stage criteria, a running weekly review cadence, and at least one documented outbound or inbound process improvement in motion.",

    phase3Label: 'Days 61–90',
    phase3Title: 'Accountability Systems Live, Forecast Cleaned Up, Behavior Starting to Shift',
    phase3Detail: "The third phase is about making the first two phases stick. Accountability systems go live: the scorecard, the sales accountability document, the weekly one-on-one structure with documented next actions, and the forecast methodology that connects pipeline data to revenue projections. By day 90, the team should understand who is accountable for what and what happens when commitments are not met. The founder should see a forecast they can use for planning rather than one they have to mentally adjust before sharing with investors or the board. Revenue improvement may not be visible yet at day 90. The infrastructure that produces revenue improvement should be.",
    phase3Deliverable: "Deliverable by day 90: A documented sales process, a functioning accountability rhythm, a forecast the founder trusts, and a clear roadmap for the next 90 days based on what the first 90 revealed.",

    sectionCompHeading: 'Green Flags vs. Red Flags in the First 90 Days',
    sectionCompSubheading: "You should not have to guess whether your fractional sales leader is doing the right things. Here is what good looks like versus what should concern you.",

    comp1Green: 'Completes a written pipeline audit in the first two weeks',
    comp1Red: 'Starts selling or prospecting before auditing what is already broken',
    comp2Green: 'Identifies the one or two highest-leverage interventions and explains why',
    comp2Red: 'Tries to change everything at once and creates confusion about priorities',
    comp3Green: 'Establishes a regular weekly review cadence with documented next actions by day 45',
    comp3Red: 'Runs ad hoc check-ins with no consistent structure or documentation',
    comp4Green: 'Reports on outcomes: deals moved, deals lost, and why',
    comp4Red: 'Reports on activity: calls made, emails sent — without tying it to results',
    comp5Green: 'Has the sales process documented and shared with the team by day 60',
    comp5Red: 'Still operating from memory and informal conversations with no written process',
    comp6Green: 'The team understands who is accountable for what and what the consequences are',
    comp6Red: 'Accountability is still informal, personal, and inconsistent across the team',

    seoPara1: "One of the most common questions founders ask before hiring a fractional sales leader is: how will I know if it is working? The answer is usually not found in the revenue numbers for the first 60 to 90 days. Revenue is a lagging indicator. The leading indicators are process improvements, pipeline accuracy, forecast reliability, and team accountability. If those are in place and improving, the revenue follows. The challenge is that most founders have not been told what to look for, so they either wait nervously or make judgments too early based on the wrong data.",
    seoPara2: "The best way to get clear on whether a fractional sales leader is the right move is to understand exactly what problem you are trying to solve first. If you are still uncertain about timing, this page will help.",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "The 90-day roadmap I described here is the same one I follow in every new engagement. The phases are not arbitrary. They reflect the sequence of work that produces durable results rather than short-term activity. Founders who are patient through the audit phase almost always see meaningful pipeline and forecast improvement by day 60. The ones who push for quick visible wins before the foundation is set usually end up redoing the foundation work later anyway.",

    faq1Question: 'How long does it take to see results from a fractional sales leader?',
    faq1Answer: "Process improvements are visible within 30 to 60 days. Revenue improvements typically follow 60 to 120 days after that, depending on your average sales cycle length. If your average deal takes 90 days to close, you will not see the revenue from better pipeline management until deals that entered the improved pipeline close. What you should see within 30 days is a more honest pipeline, a cleaner forecast, and a team that knows what is expected of them in a way they did not before.",

    faq2Question: 'What should a fractional sales leader deliver in the first 30 days?',
    faq2Answer: "A written pipeline audit, a prioritized list of two or three changes with the highest revenue impact, and a clear explanation of why those are the priority over everything else. If they cannot produce this in 30 days, either they did not do the work or they do not know what they are looking at. Both are problems you need to address directly.",

    faq3Question: 'Should a fractional sales leader start selling immediately or focus on process first?',
    faq3Answer: "Process first. A fractional sales leader who closes a deal in week two and skips the audit has told you something important: they are optimizing for short-term wins rather than the structural change your team needs. The exception is if you have an active deal that is close to closing and requires specific expertise. In that case, supporting the close is reasonable. Making deals the primary focus in the first 30 days is not.",

    faq4Question: 'How do I know if my fractional sales leader is actually working?',
    faq4Answer: "The clearest signal in the first 90 days is whether your pipeline is more honest and more useful than it was before. If your forecast has improved in accuracy, your team knows their accountability expectations, your pipeline review has a consistent structure, and you have a documented sales process — those are all leading indicators that revenue improvement is coming. If none of those things have happened by day 90, you have a conversation to have.",

    ctaHeadline: "Want to Know What the First 90 Days Would Look Like for Your Business Specifically?",
    ctaDescription: "In 30 minutes I can walk through your current situation and give you a clear sense of what the first 90 days would focus on, what the highest-leverage interventions are, and what a realistic revenue improvement timeline looks like for your team.",
  },

  // ─────────────────────────────────────────────────────────────
  // 3. HOW TO PUT A SALESPERSON ON A PERFORMANCE IMPROVEMENT PLAN
  // ─────────────────────────────────────────────────────────────
  seoSalesPerformanceImprovementPlan: {
    heroLine1: 'How to Put a Salesperson on a Performance Improvement Plan',
    heroAccent: "A Founder's Guide",
    heroDescription: "Most PIP guides are written for HR departments at enterprise companies. This one is written for founders managing their first or second salesperson who want a process that is fair, specific, and actually produces a decision.",

    sectionStepsHeading: 'The 5-Step PIP Framework for Small Sales Teams',
    sectionStepsSubheading: "Done right, a PIP forces clarity on both sides. The goal is not to build a case for termination. The goal is to give the salesperson a genuine, documented opportunity to meet a defined standard.",

    step1Title: 'Define the Specific Performance Gap in Writing',
    step1Detail: "A PIP that says 'needs to improve performance' is not a PIP. It is a complaint with a signature line. The only useful PIP starts with a precise gap statement: what the current performance is, what the expected performance is, and the time period over which the gap has been observed. 'John closed 2 deals last quarter. The team standard is 6 deals at an average deal size of $18,000. Over the past two quarters, John has closed 2 deals and 3 deals respectively, while other salespeople hired at the same time averaged 5 and 6.' That is a gap statement. It removes ambiguity and gives both sides the same factual starting point.",
    step1Fix: "Write the gap statement before the PIP conversation. If you cannot write it in two sentences with specific numbers, you are not ready to run a PIP yet. You need more data first.",

    step2Title: 'Set the Metric-Based Standard for Success',
    step2Detail: "The success criteria of a PIP should be specific, measurable, and achievable. Achievable is important: a PIP that sets a standard nobody else is hitting is a setup for termination, not improvement. The criteria should cover both activity metrics and outcome metrics. Activity metrics: a minimum number of discovery calls per week, a minimum number of qualified opportunities entered into the pipeline. Outcome metrics: a specific close rate, a specific number of closed deals or revenue over the PIP period. Two or three clear criteria are enough. A PIP with ten criteria becomes impossible to track and enforce.",
    step2Fix: "Write out your success criteria before the PIP meeting. Share them with the salesperson at the start of the conversation, not at the end. They should understand the standard before they agree to the plan.",

    step3Title: 'Set the Timeline: 30 Days for Performance Issues, 60 Days for Skill Gaps',
    step3Detail: "The timeline of a PIP should match the nature of the problem. If the issue is attitude, consistency, or following the defined process, 30 days is enough to see whether the behavior changes. If the issue is a skill gap, like converting discovery calls to qualified opportunities, 60 days gives more time for coaching to take effect. Shorter than 30 days is rarely defensible. Longer than 60 days is almost always about avoiding a decision rather than giving a genuine chance to improve. Pick the timeline that matches the problem and commit to it.",
    step3Fix: "State the timeline explicitly in the written PIP document: start date, end date, and the review date. All three parties (you, the salesperson, and any HR support if applicable) should sign the document on day one.",

    step4Title: 'Schedule Weekly Check-Ins With Documentation',
    step4Detail: "A PIP without weekly check-ins is just a document. The check-in is where the PIP does its work. Each weekly check-in should take 30 minutes and cover three things: progress against each criterion (with actual numbers, not impressions), what helped or hindered performance that week, and what specific coaching or resource the salesperson needs to succeed in the coming week. Document each check-in. Write a brief summary of what was discussed and what was agreed. Both parties get a copy. This documentation protects both of you and creates a real-time record of whether genuine support was provided during the PIP period.",
    step4Fix: "Put the weekly check-ins on the calendar on day one of the PIP. Do not let them get canceled. If you cancel them, you are signaling that the PIP is not serious.",

    step5Title: 'Make the Decision on Day 30 or Day 60 and Hold to It',
    step5Detail: "The most common failure in PIP execution is extending the timeline when criteria are not met. If the salesperson did not meet the stated criteria in the agreed period, the right next step is a conversation about what comes next: either a transition out of the role or, in rare cases, a restructured role with different expectations. Extending the PIP almost never produces a different outcome. It delays the inevitable, keeps the salesperson in limbo, and signals to the rest of the team that the accountability systems are not real. Make the call on the agreed date based on the evidence you collected, not based on how the person made you feel during the check-ins.",
    step5Fix: "On the final review date, score each criterion as met or not met. The scoring should make the decision for you. If it does not, the criteria were not specific enough.",

    sectionMistakesHeading: '6 PIP Mistakes That Make the Process Useless',
    sectionMistakesSubheading: "These are the patterns that turn a PIP into a formality instead of a genuine management tool.",

    mistake1: "Writing goals like 'improve attitude' or 'communicate more proactively' with no measurable definition",
    mistake2: "Running a PIP as a formality when the decision to terminate has already been made",
    mistake3: "Canceling weekly check-ins because things are busy, which signals the PIP is not serious",
    mistake4: "Extending the PIP timeline when criteria are not met instead of making the agreed decision",
    mistake5: "Focusing only on outcomes (close rate) without inspecting the activity and process inputs that drive them",
    mistake6: "Not providing the specific coaching, tools, or information the salesperson needs to have a genuine chance to improve",

    seoPara1: "Most of the PIP content available online is written for HR teams at large companies with formal performance management systems. It focuses on documentation for legal protection, HR sign-off requirements, and multi-tier escalation paths. That content is not useful for a founder managing a team of two or three salespeople who has never run a formal performance process before. The value of a PIP for a small team is different: it forces you to define what success looks like for this role, which many founders have never done explicitly. A PIP that ends in improvement is a better outcome than a PIP that ends in termination. Both outcomes depend on how clearly the standard was set at the start.",
    seoPara2: "Before running a PIP, make sure you have the accountability document in place for your team. If you have never written down what good performance looks like for this salesperson, you are starting the PIP conversation from a position of ambiguity.",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "I have helped dozens of founders work through performance management conversations they had been avoiding for months. The most common pattern I see is this: the founder already knows what needs to happen and has known for a while. What they need is a clear framework and someone to walk them through the conversation with confidence. A well-run PIP is not a punishment. It is the most honest thing you can do for a salesperson who might be in the wrong role or missing the support they need to succeed.",

    faq1Question: 'What should a sales performance improvement plan include?',
    faq1Answer: "Five things: a precise gap statement with specific numbers, two to three measurable success criteria, a defined timeline (30 or 60 days), a weekly check-in schedule with documentation, and a clear statement of what happens at the end of the PIP if criteria are met and if they are not. Anything vague is not a PIP. It is a conversation you had and wrote down.",

    faq2Question: 'How long should a sales PIP last?',
    faq2Answer: "Thirty days for behavior or consistency problems. Sixty days for skill gaps that require coaching to close. Shorter than 30 days is not enough time to see genuine change. Longer than 60 days usually means you are postponing a decision rather than running a genuine improvement process. The timeline should be set based on the type of problem, not based on how uncomfortable you are with the outcome.",

    faq3Question: 'Can I put a salesperson on a PIP after just 3 months?',
    faq3Answer: "Yes, if two conditions are true: you have clear evidence of underperformance against a known standard, and the salesperson understood what that standard was before you hired them. If your onboarding did not set clear performance expectations for the first 90 days, a PIP at month three is premature. Fix the onboarding expectations first and give a reasonable ramp window before measuring against full quota.",

    faq4Question: 'Is a sales PIP a legal requirement before terminating a salesperson?',
    faq4Answer: "In most US at-will employment situations, a PIP is not a legal requirement before termination. The practical reason to run a PIP is not legal protection. It is clarity. A PIP forces you to define success in writing, give the salesperson a genuine chance, and make a decision based on documented evidence rather than a subjective call. That is valuable for you and fair to the salesperson regardless of the legal requirements in your jurisdiction.",

    ctaHeadline: "You Already Have the Information. You Need a Framework for What to Do With It.",
    ctaDescription: "In 30 minutes I can help you build the specific criteria for a PIP that is fair, defensible, and actually produces a clear outcome — without months of ambiguity on both sides.",
  },

  // ─────────────────────────────────────────────────────────────
  // 4. HOW TO RUN A SALES QBR FOR A SMALL B2B TEAM
  // ─────────────────────────────────────────────────────────────
  seoHowToRunSalesQbr: {
    heroLine1: 'How to Run a Sales QBR',
    heroAccent: 'for a Small B2B Team',
    heroDescription: "Most QBR guides assume you have a RevOps team pulling dashboards and 20 salespeople presenting slides. This one is built for founders running 1-4 salespeople who want 90 minutes that actually changes something about how the team sells.",

    sectionQuestionsHeading: 'The 4-Question QBR Framework for Small Teams',
    sectionQuestionsSubheading: "Four questions. Ninety minutes. One decision. Every quarter, the same structure. That consistency is what makes a QBR valuable over time.",

    q1Title: 'What Worked Last Quarter and Why?',
    q1Detail: "This is not a restatement of the revenue number. It is a specific analysis of which inputs produced the results. Which deals closed? Where did they come from? Which salespeople drove most of the performance? Which sales activities had the highest conversion? The goal is to identify one or two repeatable patterns that should be reinforced in the next quarter. Most teams skip the 'why' and go straight to the number. The number tells you what happened. The why tells you what to do more of.",
    q1Prompt: "Prep question for each salesperson: Name your one best win last quarter and the specific reason you believe it closed.",

    q2Title: 'What Broke Last Quarter and What Did It Cost?',
    q2Detail: "Losses are data. A team that does not debrief losses is flying blind on what is working against them in the market. This question covers deals that were lost, deals that stalled, and any process or resource failures that cost the team capacity or credibility. The framing matters: this is not a blame session. It is a diagnostic conversation with a specific goal. At the end of the discussion, you should have at least one specific change you are making in the next quarter to avoid repeating the same failure.",
    q2Prompt: "Prep question for each salesperson: Name one deal you should have won last quarter and the specific reason you lost it.",

    q3Title: 'What Does Pipeline Health Look Like Entering This Quarter?',
    q3Detail: "This is the forward-looking section and it requires actual data, not impressions. Cover pipeline coverage: do you have 3x to 4x your revenue target in qualified opportunities? Cover stage distribution: are deals concentrated in early stages with no real close-readiness? Cover deal velocity: are any deals stalling in the same stage repeatedly? And cover deal quality: how many opportunities were added this quarter versus last quarter, and what was the source? If your pipeline going into the next quarter cannot support your revenue target, you do not have a goal problem. You have a pipeline generation problem.",
    q3Prompt: "Pull the numbers before the QBR: total pipeline value, number of qualified deals, average deal size, pipeline coverage ratio against the quarter target.",

    q4Title: 'What One Thing Will We Change This Quarter and Who Owns It?',
    q4Detail: "A QBR that ends without a decision is a status update. The fourth question is the decision-making section. Based on what worked, what broke, and what the pipeline looks like, the team should agree on one specific change for the next 90 days. One. Not five, not a strategic overhaul. One specific behavior or process change with a clear owner, a clear definition of what success looks like, and a date by which it will be evaluated. The single-change format is intentional. Teams that try to change three things change none of them. Teams that commit to one change with an owner and a deadline move.",
    q4Prompt: "Format: 'This quarter, we will [specific change]. [Name] owns it. We will evaluate whether it worked at the next QBR by measuring [specific metric].'",

    sectionCompHeading: 'QBR That Wastes Time vs. QBR That Changes How You Sell',
    sectionCompSubheading: "The difference between a QBR that produces a decision and one that produces a summary is structure. Here is what that looks like.",

    comp1Bad: "Starts with a slide deck reviewing last quarter's revenue and activity stats",
    comp1Good: 'Starts with a one-page prep document shared 24 hours in advance with the four questions',
    comp2Bad: "Each person gives their own update in whatever format they prefer",
    comp2Good: 'Everyone answers the same four questions in the same sequence every time',
    comp3Bad: 'Forward-looking revenue forecast is based on gut feel and deal optimism',
    comp3Good: 'Forward-looking section is built from pipeline coverage math with actuals',
    comp4Bad: "Runs 3 hours with no decisions made and action items that nobody follows up on",
    comp4Good: 'Runs 90 minutes and ends with one specific change, one owner, and a date',
    comp5Bad: 'Lost deals are never discussed — only wins get airtime',
    comp5Good: 'Lost deals are discussed specifically: what was lost, why, and what changes next quarter',

    seoPara1: "Most small sales teams have no quarterly rhythm at all. They run weekly pipeline reviews and monthly one-on-ones, and the closest thing to a QBR is a conversation at the start of each quarter about the new number. That is not a QBR. It is a quota announcement. The value of the QBR is not in reviewing the number. It is in examining the patterns under the number and making a specific decision about what to change. A founder who runs a consistent QBR four times a year with their sales team is generating more management intelligence than a founder who checks in on deals every week for 52 weeks without stepping back to look at the system.",
    seoPara2: "If you are ready to add more structure to how you manage your sales team, start with the weekly meeting and the pipeline review before adding the QBR layer. The QBR builds on the data those habits generate.",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "I install the QBR as a standard practice in almost every engagement. The first one is usually the most revealing: the team has never looked at their own win and loss patterns in a structured way. The patterns that emerge in the first QBR often reveal root causes that weekly deal reviews never surface. Once a team has run three or four QBRs with the same format, the quality of their strategic decisions about where to invest time and energy improves significantly.",

    faq1Question: 'What is a sales QBR and why does it matter for small teams?',
    faq1Answer: "A QBR, or quarterly business review, is a structured 90-minute meeting where the sales team looks back at the last quarter and forward into the next one using the same set of questions every time. For a small team of one to four salespeople, it matters because it creates the only regular forum where patterns get examined rather than just numbers. Most small sales teams talk about deals constantly and almost never talk about why the deals they should be winning are not closing. The QBR is where that conversation happens.",

    faq2Question: 'How long should a sales QBR be for a team of 2-4 salespeople?',
    faq2Answer: "Ninety minutes is the right target for a small team. Long enough to cover all four questions substantively. Short enough that people stay engaged and do not treat it as a day-long obligation. The keys to keeping it at 90 minutes are a shared prep document sent 24 hours in advance and a facilitator who keeps the conversation focused on decisions rather than stories. If the QBR regularly runs over two hours, the problem is usually a lack of structure in the prep, not a lack of time in the meeting.",

    faq3Question: 'What data do I need to prepare for a sales quarterly business review?',
    faq3Answer: "Five numbers: total revenue closed last quarter versus target, total pipeline entering the new quarter versus the quarterly target multiplied by 3 to 4 for coverage, win rate from the last quarter by source, average sales cycle length compared to the prior quarter, and the number of new qualified opportunities added last quarter by source. If your CRM does not give you these numbers cleanly, the QBR prep process itself will reveal that CRM hygiene is your highest-leverage fix for the next quarter.",

    faq4Question: 'What is the difference between a weekly pipeline review and a quarterly QBR?',
    faq4Answer: "A weekly pipeline review is operational: it focuses on specific deals, specific next steps, and specific stalled conversations. It answers the question 'what do we need to do this week.' A quarterly QBR is strategic: it focuses on patterns, systemic improvements, and directional decisions for the next 90 days. It answers the question 'what do we need to change about how we sell.' Both are necessary. A team that only does weekly reviews is managing deals without improving the system. A team that only does quarterly reviews is thinking strategically without the weekly discipline to execute.",

    ctaHeadline: "Your Next QBR Should Produce a Decision. Let's Make Sure It Does.",
    ctaDescription: "In 30 minutes I can help you build the QBR prep document, set the agenda for your first structured quarterly review, and identify the one change that would have the most impact on next quarter's revenue.",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. HOW TO BUILD A SALES CULTURE AT A SMALL B2B COMPANY
  // ─────────────────────────────────────────────────────────────
  seoHowToBuildSalesCulture: {
    heroLine1: 'How to Build a Sales Culture',
    heroAccent: 'at a Small B2B Company',
    heroDescription: "Sales culture is not a leaderboard or a motivational Slack channel. It is the set of behaviors your team repeats without being told. Here is the 5-practice framework for building it intentionally.",

    sectionPracticesHeading: '5 Practices That Build a Real Sales Culture',
    sectionPracticesSubheading: "Culture is not what you declare. It is what you do consistently. Each practice below requires repetition to become real.",

    practice1Title: 'Build Rituals Around Performance, Not Just Results',
    practice1Detail: "Culture is not built through strategy documents or values posters. It is built through repeated rituals that shape how the team thinks and behaves. The rituals that matter most in a sales team are the ones that happen around performance: the weekly pipeline review, the win celebration, the loss debrief, the monthly one-on-one focused on development rather than just numbers. Each of these, done consistently, communicates what the team values — not what the founder says it values, but what actually gets time and attention. A team whose losses are never discussed is a team that learns nothing from losing. That pattern becomes culture.",
    practice1Action: "Audit your current rituals. Which ones are consistent? Which ones happen only when things are going well? The gaps in your ritual calendar are the gaps in your culture.",

    practice2Title: 'Debrief Every Lost Deal Without Blame',
    practice2Detail: "How a team handles a loss tells you more about its culture than how it handles a win. A team that never talks about losses is a team that cannot improve. A team that blames the customer, the competition, or the product when a deal is lost is a team that has no learning loop. A structured loss debrief takes 20 minutes and covers four questions: what did we know about this deal that we ignored, what did we do right that we should repeat, what did we do wrong that we need to fix, and what do we know now about this prospect or competitor that we did not know before. The debrief is not about fault. It is about information.",
    practice2Action: "Run a loss debrief on the last three deals your team lost. Use the same four questions each time. Write the output in a shared document. Review it in the next QBR.",

    practice3Title: 'Create a Shared Vocabulary for Pipeline Quality',
    practice3Detail: "One of the least visible but most powerful elements of sales culture is shared language. When every salesperson on the team uses the same words to mean the same things — qualified opportunity, stage exit criteria, champion, economic buyer — the team can communicate about deals quickly and accurately. When salespeople use different words to mean different things, every pipeline review is a translation exercise. The language comes from the sales process documentation, the ICP definition, and the stage criteria. When those are written down and trained, the vocabulary becomes shared. When they are not written down, everyone invents their own terminology and the pipeline data becomes unreliable.",
    practice3Action: "Check this in your next pipeline review: ask two different salespeople to define a 'qualified opportunity' in their own words. If the definitions differ, you do not have shared language yet.",

    practice4Title: 'Make Accountability Visible, Not Punitive',
    practice4Detail: "Accountability in a sales culture is not about punishing underperformance. It is about making commitments visible so that the team knows what was agreed and what actually happened. When a salesperson commits in a pipeline review to a specific next action by a specific date, and the next meeting starts by reviewing whether that happened, accountability becomes structural rather than personal. The team holds itself accountable because the system requires it, not because the leader is watching. The absence of this structure is what produces a culture where people say they will do things and then quietly do not.",
    practice4Action: "Start every pipeline review by reviewing the specific commitments from the prior week: who committed to what, and what actually happened. Do not skip this step when things are busy.",

    practice5Title: 'Reward the Behavior That Leads to Results, Not Just the Outcome',
    practice5Detail: "A culture that only celebrates closed deals creates a team that focuses on the finish line and skips the inputs that get them there. When a salesperson does a great discovery call, runs a thorough loss debrief, coaches a junior team member through an objection, or identifies a new market signal in a lost deal — those behaviors are worth recognition even when they do not immediately produce closed revenue. Recognizing the behavior that precedes results communicates what the culture actually values. It also builds a more resilient team: salespeople who are recognized for quality inputs tend to manage losing streaks better than salespeople who are only recognized when they close.",
    practice5Action: "In your next team meeting, call out one specific behavior (not a result) that you want to see more of. Name it, name the person who did it, and say why it matters.",

    sectionSignalsHeading: '6 Signs Your Sales Culture Is Broken',
    sectionSignalsSubheading: "These patterns look like performance problems on the surface. Underneath, they are culture problems — and they will not be fixed by hiring different people.",

    signal1: 'Lost deals are never discussed as a team — wins get all the airtime',
    signal2: 'Salespeople compete with each other instead of sharing what is working',
    signal3: 'Accountability conversations only happen when something has gone badly wrong',
    signal4: 'Leadership talks about revenue goals but never inspects the activities that produce them',
    signal5: "The sales process lives in one person's head and changes informally every few months",
    signal6: 'New salespeople have no idea what success looks like in their first 90 days because nobody has written it down',

    seoPara1: "Most founders think about culture when something goes wrong. The team is not hitting quota, morale is low, or their best salesperson just quit. By the time those symptoms appear, the culture problem has been building for months or years. Culture is easier to build intentionally from the start than to repair after it has calcified around the wrong behaviors. For a $1M to $10M ARR company in founder-led sales mode, the transition out of that mode is largely a culture transition: from 'the founder sells and the team supports' to 'the team sells and the founder manages and leads.' That transition requires deliberate work on the behaviors the team repeats.",
    seoPara2: "The accountability document is one of the most direct culture-building tools available to a small sales team. When everyone knows what they are accountable for and what the consequences are, accountability becomes structural rather than personal.",

    aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2: "I work with founders who are not emotionally entangled with the existing team dynamics in the way the founder is — which is one of the reasons I can install the rituals that build culture faster than most founders can do it alone. The loss debrief ritual alone has changed the conversation in more teams than almost any other single intervention. Teams that have never talked about why they lose suddenly see patterns they were missing, and the conversation about what to do differently becomes specific rather than general.",

    faq1Question: "What does 'sales culture' actually mean for a small company?",
    faq1Answer: "Sales culture is the set of behaviors your team repeats without being told. It is how they handle a prospect who goes quiet after a proposal. It is how they debrief a lost deal. It is how they talk about the product in a discovery call. At a small company, culture is not declared — it is demonstrated. Whatever the founder and the first salespeople do consistently becomes the culture, whether that is intentional or not. The most important question is not 'what culture do we want?' It is 'what are we actually doing right now, and is it the behavior we want to repeat at scale?'",

    faq2Question: 'How do you build a sales culture when you only have 2 or 3 salespeople?',
    faq2Answer: "The same way you build it with 20. Through consistent rituals, shared language, visible accountability, and recognition of the right behaviors. The advantage at 2 or 3 people is that culture formation is faster and more direct. Every interaction between the founder and the salespeople is a culture-building moment. The disadvantage is that bad habits also form fast. A founder who never debriefs losses with their first two salespeople will have a culture that avoids that conversation by the time they have ten.",

    faq3Question: 'What are the signs your company has a weak or broken sales culture?',
    faq3Answer: "Six signs: lost deals are never analyzed, salespeople compete instead of collaborate, accountability only happens during crisis moments, the sales process is undocumented and varies by person, new salespeople take 9 to 12 months to ramp because there is no consistent playbook, and leadership measures activity but does not inspect quality. Any one of these is a signal. All six together means you are managing a group of individuals who happen to share a quota, not a team with a shared way of selling.",

    faq4Question: "How long does it take to change a sales team's culture?",
    faq4Answer: "New rituals take 90 days to feel normal. New accountability systems take a full quarter to generate enough data to improve on. Real culture change, where the team behaves differently without being reminded, typically takes two to four quarters of consistent leadership behavior. The key word is consistent. Culture changes when the new behavior is reinforced every week, not announced once. The founder is the single biggest driver of how fast culture changes, because the team takes its cues from what actually gets attention and what gets ignored.",

    ctaHeadline: "Your Team's Culture Is Being Built Right Now. The Only Question Is Whether It Is Intentional.",
    ctaDescription: "In 30 minutes I can help you identify the two or three behaviors your team is currently repeating that are working against you, and give you a specific set of rituals to start replacing them with.",
  },
}

async function seed() {
  console.log('Seeding 5 new SEO pages (batch 6)...\n')

  for (const [section, content] of Object.entries(sections)) {
    const { data, error } = await supabase
      .from('site_content')
      .upsert({ section, content }, { onConflict: 'section' })

    if (error) {
      console.error(`❌ Failed: ${section}`, error.message)
    } else {
      console.log(`✅ Seeded: ${section}`)
    }
  }

  console.log('\nDone.')
}

seed()
