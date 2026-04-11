/**
 * Seed script: Why Do My Salespeople Underperform Without Me Involved?
 * - seoSalespeopleUnderperformWithoutMe → /why-do-my-salespeople-underperform-without-me
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-salespeople-underperform-without-me.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoSalespeopleUnderperformWithoutMe: {
    heroTag: 'Founder-Led Sales',
    heroLine1: 'Why Do My Salespeople Underperform',
    heroAccent: 'Without Me Involved?',
    heroDescription:
      "If your salespeople only perform when you are in the room, the problem is not your salespeople. It is what you never built for them. Here are the five root causes — and what to fix first.",

    sectionCausesHeading: 'The 5 Real Reasons Your Salespeople Need You in the Room',
    sectionCausesSubheading:
      'None of these are about talent. All of them are about infrastructure you have not built yet.',

    cause1Title: 'You Never Documented How You Close',
    cause1Detail:
      "Your salespeople watched you close deals. They sat in on calls, heard you handle objections, and saw you move prospects from interested to committed. What they never got was a written framework for how you do it. The phrases you use to create urgency, the moment you shift from discovery to proposal, the way you handle the price question — those live in your head. When you step out of the room, they are gone. Your salespeople are not underperforming because they lack talent. They are underperforming because they are trying to replicate something that was never written down.",
    cause1Fix:
      "Record your next five closing calls. Transcribe them. Extract the specific language patterns, the objection responses, and the transition moments. Those transcripts are the first draft of your closing playbook. Give that document to your salespeople and run one deal debrief per week until they internalize it.",

    cause2Title: 'The Sales Process Exists in Your Memory, Not in a System',
    cause2Detail:
      "Most founders build a functional sales process over years of trial and error. They know which questions to ask, which prospects to prioritize, which signals indicate a deal is real, and which signals indicate it will never close. That knowledge feels like instinct, so it never gets written down. The result is a sales process that only one person can execute. Your salespeople are working without a map in territory you know by memory. They will make different decisions at every step, qualify differently, and close at a lower rate — not because they are worse salespeople, but because they are operating without the accumulated knowledge you have.",
    cause2Fix:
      "Write down every stage in your sales process and what has to be true for a deal to move to the next one. Define your three strongest ICP signals and your three automatic disqualifiers. Put both in your CRM as required fields. This is the skeleton of a Sales Playbook, and it is the single highest-leverage thing you can do to close the performance gap.",

    cause3Title: 'Pipeline Depends on Your Network, Not a Repeatable System',
    cause3Detail:
      "A significant portion of your pipeline likely comes from relationships you built over years: referrals from past clients, introductions from your network, warm leads from people who know you personally. Your salespeople do not have that network. They cannot replicate those pipeline sources because those sources are attached to you, not to the business. The deals that come in when you are involved are fundamentally different from the ones your salespeople have to generate on their own. This is not a salesperson problem. It is a pipeline infrastructure problem.",
    cause3Fix:
      "Identify every pipeline source from the past 12 months. Categorize each one as founder-dependent or system-dependent. Any founder-dependent source needs a replacement: a formal referral program, an outbound sequence, a content strategy, or a partnership structure. The goal is to move your pipeline sources from your personal relationships to documented systems that any salesperson can operate.",

    cause4Title: 'There Is No Accountability Structure When You Step Back',
    cause4Detail:
      "When you are in the deal, accountability is automatic. You see what your salespeople are doing, you give real-time feedback, and the deal either moves forward or you intervene. When you step back, that feedback loop disappears. There are no pipeline reviews with clear expectations. There is no written standard for what a qualified opportunity looks like. There is no Accountability Document that defines what each salesperson owns, what the metrics are, and how they will be evaluated. Without that structure, salespeople default to their own habits. Some habits are good. Most are not the ones that close deals.",
    cause4Fix:
      "Install a weekly 30-minute pipeline review with a fixed agenda: deals in each stage, next actions, and expected close dates. Create a written Accountability Document for each salesperson that defines their quota, their activity targets, and the metrics you will use to evaluate them. Review it monthly. These two structures replace the informal oversight that exists when you are present in every deal.",

    cause5Title: 'They Were Never Trained — They Were Observed',
    cause5Detail:
      "The way most founders onboard salespeople is by having them shadow a few calls, then sending them into the field. This is observation, not training. Observation tells a salesperson what the output looks like. It does not give them the framework to produce that output independently. The founder's judgment, pattern recognition, and instincts took years to build. A new salesperson watching three calls does not inherit any of it. When the founder steps back, the salesperson is left with an impression of how good looks — but no structured way to replicate it.",
    cause5Fix:
      "Build a 30-60-90 day onboarding plan with specific skills at each milestone. In the first 30 days: learn the ICP, the product, and the qualification criteria. In days 31-60: run discovery calls with oversight and debrief every call. In days 61-90: carry a pipeline independently with weekly coaching. Observe and debrief — do not just observe. The debrief is where learning happens.",

    seoPara1:
      "The question founders usually ask is: 'Why do my salespeople underperform without me involved?' The honest answer is that they were never set up to succeed without you. Your involvement was doing two jobs at once: it was closing deals, and it was compensating for every gap in the system. When you step back, the gaps become visible. They were always there. You just could not see them because you were filling them personally.",
    seoPara2:
      "The founders who fix this problem stop asking whether their salespeople are good enough and start asking what their salespeople are missing. In almost every case, the answer is a written process, a pipeline system, and an accountability structure. Those three things are buildable. If you want to understand exactly",
    seoPara2b: ", the pattern is predictable — and preventable.",

    sectionCompHeading: 'Founder-Dependent Sales Team vs. Self-Sufficient Sales Team',
    sectionCompSubheading:
      'The difference is not the caliber of the salespeople. It is the infrastructure they are given to work with.',

    comp1Dependent: 'Close rate drops when founder is not in the room',
    comp1Independent: 'Salespeople close using a documented framework, not founder presence',
    comp2Dependent: 'Pipeline dries up when founder stops making introductions',
    comp2Independent: 'Pipeline is generated through systems: outbound, referral program, inbound',
    comp3Dependent: 'New salespeople shadow calls and figure it out on their own',
    comp3Independent: 'New salespeople follow a 30-60-90 onboarding plan with structured debriefs',
    comp4Dependent: 'Qualification is inconsistent — each salesperson decides differently',
    comp4Independent: 'ICP and disqualification criteria are written and enforced in the CRM',
    comp5Dependent: 'No weekly pipeline review — founder checks in informally',
    comp5Independent: 'Weekly pipeline review with a fixed agenda and written Accountability Document',
    comp6Dependent: 'Salespeople do not know what "good" looks like without founder feedback',
    comp6Independent: 'Performance standards are written, reviewed monthly, and tied to clear metrics',

    aboutBio1:
      "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "The question 'why do my salespeople underperform without me?' is one I hear from founders in the first week of almost every engagement. The answer is almost always the same: the process that makes the founder effective has never been extracted into a form anyone else can use. The first thing I do is build that extraction. Once it is on paper, the performance gap closes fast.",

    faq1Question: 'Why do my salespeople close at half the rate I do?',
    faq1Answer:
      "Because the process that produces your close rate lives in your head, not in a shared system. Your close rate is built on years of pattern recognition, refined objection handling, and relationship capital that your salespeople do not have access to. To close that gap, you need to extract what you know into a written framework: how you qualify, how you handle the three or four objections that come up most often, how you create urgency, and how you move from discovery to close. When that framework is written down and trained — not just observed — close rates converge.",
    faq2Question: 'Is it possible for salespeople to perform without me being involved?',
    faq2Answer:
      "Yes — but only if you build the infrastructure that replaces your personal involvement. That infrastructure is four things: a documented Sales Playbook with qualification criteria and closing frameworks, a pipeline system that generates leads without your network, a weekly accountability review that replaces informal oversight, and an onboarding process that trains rather than just observes. Every one of those four things can be built. Most founders have not built any of them. That is why performance collapses without them.",
    faq3Question: 'How do I know if the problem is my salespeople or my sales system?',
    faq3Answer:
      "If every salesperson you hire underperforms without you, the problem is the system. If one salesperson underperforms while others hit their number, the problem is more likely the person. The fastest diagnostic: compare close rates across your team. If the entire team closes at a fraction of your rate and the gap disappears when you get involved, you have a system problem. If one salesperson is at 8% while others are at 25%, you have a person problem. These require completely different fixes.",
    faq4Question: 'What does a sales team need to perform without the founder?',
    faq4Answer:
      "Four things. First, a written Sales Playbook that captures the qualification criteria, the sales process stages, the objection responses, and the closing framework. Second, a pipeline source that is not dependent on the founder's personal network. Third, a weekly pipeline review where performance is measured against written standards. Fourth, an Accountability Document for each salesperson that defines their targets, their metrics, and the review cadence. None of these are complicated. All of them take time and intention to build.",
    faq5Question: 'How long does it take to fix founder-dependent sales performance?',
    faq5Answer:
      "Most companies see meaningful improvement in 60 to 90 days when the infrastructure is built correctly. The first 30 days go into documentation: the Sales Playbook, the ICP, the qualification criteria, and the Accountability Documents. Days 31 to 60 are training and coaching against those documents. By day 90, salespeople should be running their pipeline against a written standard rather than against their instinct. The number that usually moves first is close rate. Pipeline volume follows as outbound systems replace founder-sourced leads.",

    ctaHeadline: "Your Salespeople Are Not the Problem. Let's Find What Is.",
    ctaDescription:
      "In 30 minutes I can tell you whether your team is underperforming because of a person issue or a system issue — and give you the one thing to fix first that will close the performance gap the fastest.",
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
