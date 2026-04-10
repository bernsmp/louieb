const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// ─── Page 1: seoFounderPipelineDependency ────────────────────────────────────

const founderPipelineDependency = {
  // Hero
  heroTag: 'Founder-Led Sales',
  heroLine1: 'Why Does My Sales Pipeline',
  heroAccent: 'Depend Entirely on Me?',
  heroDescription: "If the deals slow when you travel, the problem is structure — not effort. Founder pipeline dependency isn't a hustle problem. It's a system problem. Here's what's causing it and how to fix it.",

  // Section: 5 Reasons
  sectionReasonsHeading: '5 Reasons Your Pipeline Depends on You',
  sectionReasonsSubheading: "Each one is a structural gap — not a talent problem on your team.",

  reason1Title: 'Your Relationships Are Carrying Work That Systems Should Do',
  reason1Detail: "In the early days, your network was your competitive advantage. You called people you knew, and deals opened. That worked from $0 to $1M because relationship capital was the fastest path to first revenue. The problem is that relationships don't scale. Your network has finite reach. When you've saturated it, pipeline generation stalls — and no salesperson you hire can borrow your rolodex.",
  reason1Fix: "Map every closed-won deal from the last 18 months. Count how many started because a buyer knew you personally versus responded to a systematic outreach effort. If more than half trace back to your personal relationships, you don't have a pipeline — you have a contact list.",

  reason2Title: "You're the Only Person Who Knows What a Real Deal Looks Like",
  reason2Detail: "Most founders have a mental model of what a qualified opportunity looks like — but they've never written it down. That means every deal evaluation runs through the founder's intuition. Your salespeople can't qualify properly because the criteria live in your head, not in a shared system. Deals that should be disqualified stay in the pipeline because no one has permission to say no.",
  reason2Fix: "Write out your three hard criteria for a qualified opportunity: company type, trigger event, and minimum budget. Add them to your CRM as required fields for Stage 1. Now anyone can run the filter — not just you.",

  reason3Title: "Every Big Deal Still Needs You in the Room",
  reason3Detail: "Even if you've hired salespeople, you probably get pulled in for the final meetings. The enterprise prospect wants to meet 'the founder.' The deal at risk needs your credibility. The negotiation requires someone with authority. What looks like relationship selling is actually a structural problem: your team can generate interest, but they can't close without you. That creates a ceiling on how much revenue you can produce.",
  reason3Fix: "Track the last 12 closed-won deals and mark every touchpoint that involved you. If you appear in more than 60% of closes, your team isn't actually selling. They're setting up meetings for you.",

  reason4Title: "You Have No Written Process, So Only You Can Run It",
  reason4Detail: "Founder-built sales processes live in the founder's head. The stages are informal, the criteria are instinctive, and the messaging evolved from a thousand customer conversations. That institutional knowledge is real and valuable. It's also invisible to anyone else. A salesperson you hire can't replicate a process they can't read. So they default to their own instincts — which don't match yours.",
  reason4Fix: "Before your next hire, document every stage of your sales process including what the buyer must do or say to advance to the next stage. If you can't write it down, you don't have a process yet — you have a habit.",

  reason5Title: "No One Is Accountable to the Pipeline Number Except You",
  reason5Detail: "Accountability requires a standard, a measurement, and a consequence for missing both. In founder-led sales, the standard is whatever the founder knows the pipeline should look like. The measurement is informal. The consequence is the founder doing it themselves when it falls short. This is not a team problem — it is a system design problem. When the only person accountable to the pipeline is the founder, the pipeline depends on the founder.",
  reason5Fix: "Establish a weekly pipeline review with a minimum coverage target. Every salesperson should own a specific pipeline number — not a call activity metric, but a dollar value of qualified pipeline. If the number isn't there, the review surfaces it before the quarter is over.",

  // SEO Paragraphs
  seoPara1: "The question \"why does my sales pipeline depend entirely on me?\" is one of the most common things I hear from founders between $1M and $5M ARR. It sounds like a motivation problem or a hiring problem. It isn't either. The pipeline depends on you because the systems that should replace your involvement don't exist yet. Your relationships opened the first doors. Your intuition qualified the first deals. Your credibility closed the first contracts. None of that was wrong — it was exactly the right approach to get from zero to your first million. The problem is that none of it was designed to work without you.",
  seoPara2: "The exit path from founder pipeline dependency isn't a new hire — it's a new system. A documented qualification process, a written Sales Playbook, a structured pipeline review, and a clear accountability standard. Once those exist, other people can run the pipeline without running everything through you. If you're trying to figure out where to start, a",

  // Comparison Table
  sectionCompareHeading: 'Founder-Dependent Pipeline vs. System-Driven Pipeline',
  sectionCompareSubheading: 'The difference is not effort. It is infrastructure.',
  compare1Dependent: 'Pipeline slows when the founder travels',
  compare1System: 'Pipeline runs on scheduled, systematic inputs',
  compare2Dependent: "Deals require founder involvement to close",
  compare2System: 'Salespeople close using a documented process',
  compare3Dependent: "Qualification happens in the founder's head",
  compare3System: 'ICP criteria live in the CRM as required fields',
  compare4Dependent: 'Revenue forecast is an educated guess',
  compare4System: 'Forecast is built on tracked stage close rates',
  compare5Dependent: 'New salespeople fail to replicate founder results',
  compare5System: 'New salespeople follow a written Sales Playbook',
  compare6Dependent: "Growth is limited by the founder's capacity",
  compare6System: 'Growth is limited by team size and system quality',

  // About Louie
  aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
  aboutBio2: "Founder pipeline dependency is the most common problem I find in the first week of every engagement. The pipeline isn't broken — it's built around you. My job is to rebuild it so it works without you in every deal. That's what makes revenue predictable and the business sellable.",

  // FAQs
  faq1Question: "Why does pipeline generation stop when a founder steps back?",
  faq1Answer: "Because the pipeline was built on the founder's relationships, instincts, and credibility — none of which transfer automatically to a new hire. When the founder steps back, those inputs stop immediately. Pipeline generation that depends on any one person is a structural risk, not a performance problem. The fix is building systematic inputs — outbound sequences, referral programs, inbound content — that run without the founder's personal involvement.",

  faq2Question: "Can hiring a salesperson fix my pipeline dependency problem?",
  faq2Answer: "Not on its own. If the pipeline depends on the founder, hiring a salesperson doesn't change the structure — it adds a person to a broken system. The new salesperson will fail to replicate founder success, and the founder will conclude that good salespeople are impossible to find. The real fix is building a documented process, a clear ICP, and a pipeline accountability system before adding headcount.",

  faq3Question: "How long does it take to build a pipeline that doesn't depend on the founder?",
  faq3Answer: "With the right structure in place, most founders see meaningful change within 90 days. The first 30 days are spent documenting what exists and building the qualification criteria. Days 30 to 60 establish the pipeline review cadence and salesperson accountability. By day 90, the pipeline is running on system-driven inputs and the founder has stepped back from day-to-day deal involvement.",

  faq4Question: "What is founder pipeline dependency actually costing me?",
  faq4Answer: "The most direct cost is a ceiling on revenue growth. If every deal requires the founder's involvement, revenue is limited by the founder's available hours. A second cost is business value: companies with founder-dependent pipelines sell at lower multiples because buyers see the revenue as tied to a single person. A third cost is salesperson turnover — when salespeople can't succeed without the founder in every deal, the best ones leave.",

  faq5Question: "What should I do if my pipeline is completely founder-dependent right now?",
  faq5Answer: "Start with a pipeline audit. Map every deal in your CRM and identify which ones require your personal involvement to move forward. That map shows you exactly where the dependency is concentrated. Then build the qualification criteria and a written stage progression. Both take less than a week to draft. A fractional sales leader can run this process with you and install the accountability system that keeps the pipeline moving after you've stepped back.",

  // CTA
  ctaHeadline: "Let's Map Your Pipeline Dependencies",
  ctaDescription: "In 30 minutes I can identify exactly where your pipeline is bottlenecked on you — and outline the system changes that fix it.",
}

// ─── Page 2: seoWhatBreaksFounderSelling ─────────────────────────────────────

const whatBreaksFounderSelling = {
  // Hero
  heroTag: 'Founder-Led Sales',
  heroLine1: 'What Breaks First',
  heroAccent: 'When a Founder Stops Selling?',
  heroDescription: "Most founders find out what's fragile only after they step back from sales. By then, a quarter is already gone. Here's what breaks in the first 60 days — and what to build before the handoff so the transition sticks.",

  // Section: 5 Things That Break
  sectionBreaksHeading: 'The 5 Things That Break First',
  sectionBreaksSubheading: 'All five are predictable. All five are preventable — if you build the right infrastructure before you step back.',

  break1Title: 'Pipeline Generation Collapses Within 30 Days',
  break1Detail: "The founder was the pipeline. Every relationship-sourced lead, every conference follow-up, every referral introduction ran through the founder. When the founder steps back, those inputs stop immediately. The salesperson you hired doesn't have the same network, doesn't have the same credibility, and doesn't have a systematic outbound process to replace what you were doing manually. The pipeline doesn't slow down — it stops.",
  break1Fix: "Before stepping back, document every pipeline input you own and assign each one to a system or a person. Relationship referrals need a formal referral program. Conference outreach needs a sequence. Inbound leads need a response protocol. If these don't exist on paper before you leave, pipeline generation dies with your involvement.",

  break2Title: 'Deals That Should Die Stay Open',
  break2Detail: "Founders qualify on instinct. They can tell in the first meeting whether a deal is real or not — based on patterns built over years of customer conversations. Salespeople who were hired and trained informally don't have those instincts, and they haven't been given written criteria to replace them. Without clear qualification standards, they keep every deal alive out of optimism and fear of delivering bad news. The pipeline fills with deals that will never close.",
  break2Fix: "Write down the three things that make a deal qualified and the three things that disqualify one automatically. Add them to your CRM as required fields. Give your salespeople explicit permission to disqualify deals — and reward them for it.",

  break3Title: 'Close Rate Drops Because the Founder Was the Closing Tool',
  break3Detail: "In many founder-led sales processes, the founder is the reason deals close. Buyers trust the founder. They feel confident because the person who built the product is the one selling it. When a salesperson takes over the final meetings, buyers often pull back — not because the product changed, but because the credibility they were buying into walked out the door. The close rate the founder achieved doesn't belong to the sales process. It belongs to the founder personally.",
  break3Fix: "Build a case study library, a reference call program, and a written close framework before stepping back. These give salespeople the credibility infrastructure to close without the founder's personal authority in the room.",

  break4Title: 'Revenue Forecast Goes From Educated Guess to Pure Fiction',
  break4Detail: "Founders who are close to every deal can estimate close probability with reasonable accuracy, even informally. When they step back, the sales team reports optimistic deal stages because they have no accountability standard and no historical close rate data by stage. The forecast looks fine at the start of the quarter and falls apart at the end. By the time the miss is visible, it's too late to recover the quarter.",
  break4Fix: "Before stepping back, install stage exit criteria based on buyer actions — not seller activities. Track actual close rates by stage for at least two quarters. The forecast should be built on those rates, not on the salesperson's confidence level.",

  break5Title: "The Sales Team Loses Direction When the Founder Isn't Watching",
  break5Detail: "In founder-led sales, the team's accountability is often informal. The founder is in the deal, sees the work, and provides feedback in real time. When the founder steps back, that feedback loop disappears. The team doesn't know what 'good' looks like because it was never written down. Without a defined standard, a documented process, or a visible accountability system, salespeople default to their own habits — which often aren't the ones that close deals.",
  break5Fix: "Install a weekly pipeline review before stepping back. Define what a qualified opportunity looks like in writing. Create a sales Accountability Document that specifies each salesperson's targets, the metrics used to evaluate them, and the review cadence. The Accountability Document replaces the informal oversight that exists when the founder is present in every deal.",

  // SEO Paragraphs
  seoPara1: "The question \"what breaks first when a founder stops selling?\" has a factual answer, and it varies by business. In most cases, pipeline generation is the first failure because it is the most founder-dependent. The second failure is deal qualification. The third is close rate. All three typically happen within the first 60 days of the founder stepping back, which is why so many transition attempts get reversed: the founder leaves, the numbers drop, the board gets nervous, and the founder steps back in. The real problem is that the business was never built to run without them.",
  seoPara2: "The founders who exit sales successfully don't step back and hope. They build the infrastructure first: the Sales Playbook, the qualification criteria, the pipeline accountability system, and the Accountability Document that defines what each salesperson is responsible for. That infrastructure takes 60 to 90 days to build and test. If you're trying to figure out how to",
  seoPara2b: ", start with the infrastructure.",

  // Comparison Table
  sectionCompareHeading: 'Founders Who Fail the Transition vs. Founders Who Succeed',
  sectionCompareSubheading: 'The difference is rarely talent. It is almost always preparation.',
  compare1Fail: 'Step back and assume salespeople figure it out',
  compare1Succeed: 'Install a written Sales Playbook before stepping back',
  compare2Fail: 'No documented qualification criteria',
  compare2Succeed: 'ICP and disqualification criteria in the CRM as required fields',
  compare3Fail: 'No weekly review cadence or coverage targets',
  compare3Succeed: 'Weekly pipeline review with minimum pipeline coverage targets',
  compare4Fail: 'Salespeople lack a closing framework',
  compare4Succeed: 'Case study library and reference call program in place',
  compare5Fail: 'Revenue depends on the founder being present',
  compare5Succeed: 'Revenue depends on a documented, repeatable process',
  compare6Fail: 'Founder forced back into sales after 60 days',
  compare6Succeed: 'Clean handoff with metrics holding within 20% of baseline',

  // About Louie
  aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
  aboutBio2: "I've watched founders step back from sales dozens of times. The ones who fail almost always do the same thing: they leave before building the infrastructure. The ones who succeed built the Sales Playbook, the qualification criteria, and the accountability system before they walked out the door. My job is to build that infrastructure with you so the transition sticks.",

  // FAQs
  faq1Question: "How long after a founder stops selling before problems show up?",
  faq1Answer: "Pipeline problems show up in the first 30 days. Close rate and forecast accuracy problems show up in 45 to 60 days. Morale and direction problems become visible by the end of the first quarter. Most founders don't see the full scope of the breakdown until the first quarterly review — by which point two or three months of revenue have already been affected.",

  faq2Question: "Can I hand off sales to a salesperson I already have?",
  faq2Answer: "Yes, if that salesperson has the tools to succeed without you. That means a documented Sales Playbook, written ICP and disqualification criteria, a formal pipeline review cadence, and a closing framework. Without those tools, even a talented salesperson will underperform — because the process lives in your head, not in a shared system.",

  faq3Question: "What should I build before stepping back from sales?",
  faq3Answer: "Four things: a written Sales Playbook, an ICP with hard qualification criteria, a weekly pipeline accountability review, and a sales Accountability Document for each salesperson. These four items replace the informal oversight and institutional knowledge that exists when you're in every deal. Without them, the transition fails almost every time.",

  faq4Question: "How do I know if my sales team is ready for me to step back?",
  faq4Answer: "Run a test. Step back for one month and track three metrics: new qualified opportunities added, deal progression through stages, and close rate. If all three hold within 20% of your personal baseline, the team has the infrastructure to run without you. If any one of them drops sharply, the system isn't ready — and adding pressure won't fix it.",

  faq5Question: "What role should a founder play in sales after stepping back?",
  faq5Answer: "Founders who successfully exit selling typically move into three roles: providing strategic direction, supporting complex or high-value deals when necessary, and building company credibility through content and relationships. They stop being the primary closer and start being the brand. That transition only works when the operational sales system is strong enough to run without them in every deal.",

  // CTA
  ctaHeadline: 'Build the Foundation Before You Step Back',
  ctaDescription: "In 30 minutes I can map what's currently holding your pipeline together, identify the three things most likely to break when you step back, and outline what needs to be built before the handoff.",
}

// ─── Upsert both sections ─────────────────────────────────────────────────────

async function seed() {
  console.log('Seeding seoFounderPipelineDependency...')
  const { error: e1 } = await supabase
    .from('site_content')
    .upsert({ section: 'seoFounderPipelineDependency', content: founderPipelineDependency }, { onConflict: 'section' })
  if (e1) { console.error('Error:', e1); process.exit(1) }
  console.log('✓ seoFounderPipelineDependency seeded')

  console.log('Seeding seoWhatBreaksFounderSelling...')
  const { error: e2 } = await supabase
    .from('site_content')
    .upsert({ section: 'seoWhatBreaksFounderSelling', content: whatBreaksFounderSelling }, { onConflict: 'section' })
  if (e2) { console.error('Error:', e2); process.exit(1) }
  console.log('✓ seoWhatBreaksFounderSelling seeded')

  console.log('\nDone. Both CMS sections are now populated.')
}

seed()
