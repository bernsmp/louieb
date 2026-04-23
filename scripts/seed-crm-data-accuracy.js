/**
 * Seed script: How Do I Know If My CRM Data Is Actually Accurate?
 * - seoCrmDataAccuracy → /how-do-i-know-if-my-crm-data-is-actually-accurate
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-crm-data-accuracy.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoCrmDataAccuracy: {
    // Hero
    heroTag: 'CRM Data Accuracy & Rep Discipline',
    heroLine1: 'How Do I Know If My CRM Data',
    heroAccent: 'Is Actually Accurate?',
    heroH2: 'What Should I Tell My Salespeople to Make Sure It Is?',
    heroDescription:
      "For $1M–$10M ARR founders whose forecast keeps missing and whose pipeline report does not match reality. Five tests, four sentences to your reps, one weekly ritual — and the CRM starts telling the truth.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      'If you cannot trust your CRM today, you do not have a CRM problem — you have a sales discipline problem that the CRM is honestly reporting. Software cannot force a rep to tell the truth.',
    takeaway2:
      'CRM data is accurate when three things hold: close dates survive a full week, every stage requires specific buyer evidence to advance, and every open deal has a dated next step owned by the buyer — not the seller.',
    takeaway3:
      'Fixing CRM accuracy is not a tooling project. It is required fields, enforced stage exit criteria, a weekly 30-minute pipeline review, and a written expectation that updates happen before the rep leaves on Friday.',
    takeaway4:
      'What you tell your salespeople is the variable. The single highest-leverage sentence a founder can say: "The CRM is your forecast. If the CRM is wrong, you are wrong — the software is not the problem."',
    takeaway5:
      '$1M–$10M ARR founders do not need a RevOps team or a new CRM. You need five rules written down, one non-cancellable weekly meeting, and the willingness to enforce consequences when the data is wrong.',

    // Five Tests Section Heading
    sectionTestsHeading: 'The Five Tests of CRM Accuracy',
    sectionTestsSubheading:
      'Run each of these against your pipeline today. Any test your CRM fails is a specific, fixable behavior — not a reason to buy new software.',

    // Test 1
    test1Title: 'The Close Date Test — Does It Survive a Full Week?',
    test1Detail:
      "A reliable CRM has close dates that hold. If every Friday you watch deals slip two, three, or four weeks forward, the close dates were never real to begin with — they were seller optimism. Pick any ten deals in your pipeline right now. Write down today's close dates. Check them next Friday. If more than two have moved, you are looking at hope, not a forecast. The fix is not pestering reps for firmer dates. The fix is requiring a specific, buyer-confirmed signal — a signed proposal, a legal review date, a purchase-order timeline — before any close date is entered. Until that signal exists, the field stays blank. A blank close date is infinitely more useful than a lie.",
    test1Outcome:
      'A forecast you can actually run the business on — one where the close dates you see next quarter are within a week of the ones your reps enter today.',

    // Test 2
    test2Title: 'The Stage-Evidence Match — Does Each Stage Actually Mean Anything?',
    test2Detail:
      'Pipeline stages are only useful if advancing one requires specific proof. In most $1M–$10M ARR companies, stages are narrative: "Discovery," "Proposal," "Negotiation." But those words have no gatekeeping power. A rep moves a deal to Proposal after sending a PDF, whether or not the buyer asked for one. Real stages are gated by buyer actions: Discovery exits when the buyer confirms the problem, budget, timeline, and decision-maker. Proposal exits when the buyer accepts pricing in writing. Negotiation exits when legal review is scheduled. If a rep can advance a deal without the corresponding buyer action, your stages are theater — and your pipeline report is fiction.',
    test2Outcome:
      'Each pipeline stage becomes a truth-telling instrument. The deals in Proposal are genuinely at proposal — and the deals that got stuck at Discovery stop being smuggled forward to make the pipeline look healthier.',

    // Test 3
    test3Title: 'The Next Step Test — Buyer Action or Seller Hope?',
    test3Detail:
      'Open the next-step field on any ten live opportunities. Read what is written. If you see "Follow up," "Check in," "Send materials," or worst of all an empty field, you are looking at a dead pipeline pretending to be alive. A legitimate next step has three attributes: a specific action, a date, and a named buyer counterpart. "Call with CFO Tuesday 3/15 at 2pm to review pricing" is a next step. "Follow up next week" is a confession. Require this format as a CRM field, reject anything that does not meet it during pipeline review, and your deal list will compress by 20–40% inside a month. The deals that drop off were never going to close anyway.',
    test3Outcome:
      'A pipeline where every open deal has a dated buyer commitment — and a rep roster that spends time on the deals actually moving, not the ghosts.',

    // Test 4
    test4Title: 'The Required Fields Test — Is the CRM Configured to Enforce the Truth?',
    test4Detail:
      'Most CRM problems are configuration problems disguised as discipline problems. If your CRM allows a rep to save a $50K opportunity without a captured budget, a named decision-maker, and a timeline, the CRM is complicit. These three fields should be mandatory before any deal leaves Discovery. Add one more: a disqualification reason field that is required on any closed-lost entry. Without it, your loss data is noise. Configuration takes two hours with an admin. Coaching reps to remember these fields manually takes two years and never actually works. Do not hire a sales trainer to fix what a required field would solve before lunch.',
    test4Outcome:
      'A CRM that physically cannot lie to you. Deals without the inputs that matter never enter the pipeline, and your loss analysis becomes data instead of vibes.',

    // Test 5
    test5Title: 'The Dormancy Test — What Does Silence Mean in Your Pipeline?',
    test5Detail:
      'Every CRM should auto-flag any open deal that has had no activity for fourteen days. Silent deals are dead deals roughly 80% of the time — the buyer has moved on, the rep has moved on, and the only thing still moving is the forecast number the deal is inflating. The fix is a stale-deal report that runs every Monday and appears at the top of the weekly pipeline review. The rule is simple: any deal on the stale list either gets a new dated buyer commitment in the next seven days or gets marked closed-lost. No exceptions. Reps learn quickly that hiding dead deals is more work than killing them.',
    test5Outcome:
      'A pipeline that reflects reality week over week — and a close rate that rises because the denominator (total open deals) finally matches what is actually live.',

    // SEO paragraphs
    seoPara1:
      "CRM inaccuracy is almost never a software problem. You can spend $200,000 on a new platform and have worse data in ninety days if the human behavior underneath has not changed. The real cause is always the same: there is no written standard for what a \"real\" deal looks like in your CRM, there is no recurring review where bad data is flagged in front of the team, and there is no consequence for a rep who updates on Sunday night with fiction. Fix the standard, fix the cadence, and fix the consequence — and almost any CRM becomes accurate.",
    seoPara2:
      'The fastest path to a believable forecast is the weekly pipeline review. It is a 30-minute meeting that is never cancelled, where every open deal gets four questions asked of it. Founders who run this well have CRMs that tell the truth within a month. For the exact structure, read',
    seoPara2b:
      '. And if your stages themselves are the problem — meaning they do not gate advancement on buyer evidence — start by rebuilding them using',
    seoPara2c: '. The CRM is the instrument. The pipeline review is how you tune it.',

    // Comparison table
    sectionCompareHeading: 'CRM Theater vs. CRM Truth',
    sectionCompareSubheading:
      'Which side does your pipeline live on today? Any row on the left is a specific behavior you can fix this quarter without changing software.',
    compareColLeft: 'CRM Theater (Inaccurate)',
    compareColRight: 'CRM Truth (Accurate)',
    compare1Without: 'Close dates slip every Friday by two-plus weeks',
    compare1With: 'Close dates backed by buyer-confirmed signals that hold',
    compare2Without: 'Stages are narrative labels anyone can advance',
    compare2With: 'Stages gated by specific buyer actions as exit criteria',
    compare3Without: '"Follow up next week" is an accepted next step',
    compare3With: 'Every next step is a dated, named buyer action',
    compare4Without: 'Deals save without budget, decision-maker, or timeline',
    compare4With: 'Required fields block any deal missing qualification data',
    compare5Without: 'Dead deals hide in the pipeline for 60 to 90 days',
    compare5With: '14-day dormancy flag forces a close or a commitment',
    compare6Without: 'Forecast is a feeling — off by 30% every quarter',
    compare6With: 'Forecast built on evidence-based data within 10%',

    // What to Tell Your Salespeople (coaching sentences)
    sectionCoachHeading: 'What to Tell Your Salespeople — Four Sentences',
    sectionCoachSubheading:
      'Say these four things, repeat them weekly, and enforce them visibly. This is the coaching language that turns a CRM from a chore into the forecast of record.',
    coach1Title: '"The CRM Is Your Forecast. If the CRM Is Wrong, You Are Wrong."',
    coach1Detail:
      'Reps treat CRM updates as administrative overhead until leadership treats the CRM as the forecast of record. Say it in the kickoff meeting, in the offer letter, and in every one-on-one: the data you enter is the forecast we run the business on. If the data is wrong, the business makes wrong decisions — and that is on the rep who entered it, not on the system that recorded it. Once that cultural norm is installed, CRM hygiene stops being a nag and starts being a professional standard.',
    coach2Title: '"Fridays Before You Go Home, the CRM Is Accurate — Or the Week Is Not Done."',
    coach2Detail:
      'Pick a cadence and enforce it. The standard is Friday afternoon: every live opportunity has an updated stage, a dated next step, and a realistic close date before the rep logs off. This is not a suggestion; it is the last task of the week. Pipeline review on Monday morning assumes the data was trued up on Friday. A rep whose data is stale on Monday is spoken to privately, then publicly, then formally. A ritual that is never skipped and has visible weekly consequences is the only cadence that holds.',
    coach3Title: '"A Blank Field Beats a Fake One Every Time."',
    coach3Detail:
      'The most destructive habit a rep can have is making up numbers to fill required fields — guessing at a budget, inventing a timeline, listing a contact who is not really the decision-maker. Tell your team explicitly: a blank field means the information is not yet known, and that is fine. A fake field is a lie that ends up in the forecast. Reward reps who leave a field blank and ask for help qualifying. Correct — hard — reps who fill fields with fiction to look productive. Honesty in the CRM is a hiring criterion, not a nice-to-have.',
    coach4Title: '"Disqualifying a Deal Is a Good Day, Not a Bad One."',
    coach4Detail:
      'Founders unconsciously reward fat pipelines. Reps learn to keep every marginal deal alive because a bigger pipeline reads as more effort. Reverse this. Tell the team: a deal killed on Wednesday is a win — honesty, cycle discipline, and eight hours of reclaimed selling time. Celebrate closed-lost entries in pipeline review. Publicly thank reps who kill deals early. The goal is a small, real pipeline — not a large, optimistic one. This single cultural shift does more for forecast accuracy than any piece of software ever will.',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      'I install the operating rhythms — required fields, weekly pipeline reviews, stage exit criteria, and accountability language — that turn a CRM from a chore into a forecast you can run the business on. Most engagements have the data honest inside 30 days, without buying new software.',

    // FAQs
    faq1Question: 'How do I audit my CRM data accuracy in under an hour?',
    faq1Answer:
      "Pull the top ten deals in your pipeline by dollar value. Check four things on each: is the close date within two weeks of when it was originally entered, does the stage match a specific buyer action, is the next step a dated action owned by the buyer, and are budget/timeline/decision-maker fields populated with real names and numbers. If more than three of ten fail any of these tests, your CRM is reporting fiction. That is your audit. An hour of the founder's time beats any $20K consulting engagement.",

    faq2Question: 'What should be required fields in every B2B CRM?',
    faq2Answer:
      'At minimum, before any deal advances past Discovery: estimated deal size, named decision-maker and economic buyer, timeline anchored to a specific event (contract start, budget cycle, project deadline), next step as a dated buyer action, and a qualified-or-disqualified reason with a written answer. At closed-lost, a structured loss-reason field. These six fields do 90% of the work. Anything more is often noise; anything less and the CRM can be gamed.',

    faq3Question: 'My reps say CRM updates take selling time away — how do I respond?',
    faq3Answer:
      'The response is: updating the CRM is part of selling. A rep who cannot summarize an open deal in four fields does not actually understand the deal — and the CRM is honestly reporting that gap. If updates genuinely take more than 15 minutes a day, the CRM is over-configured (trim the required fields) or the rep is carrying too many deals (trim the pipeline). But the answer is never to relax the standard. Unreliable data costs more than any hour a rep thinks they saved by skipping it.',

    faq4Question: 'How do I know if my forecast is believable?',
    faq4Answer:
      'Compare your last four quarters of committed forecast against actual closed revenue. If the gap is within 10%, you have a working forecast. If it is 20–30%, your CRM data is unreliable and needs the audit above. If it is over 30%, the forecast is a guess with a spreadsheet attached — and the fix is process discipline, not a better BI tool. A believable forecast comes from believable stage data, which comes from enforced exit criteria, which comes from weekly review.',

    faq5Question: 'Should I invest in a better CRM platform or a better process first?',
    faq5Answer:
      'Process first, every time. The most common mistake at $1M–$10M ARR is replacing HubSpot with Salesforce (or vice versa), hoping the new tool will solve a behavior problem. It does not. You end up paying 3x for the same bad data to live in a more expensive system. Fix the required fields, the stage exit criteria, the weekly review, and the accountability language inside your existing CRM first. If after 90 days of disciplined process your current platform is genuinely the bottleneck — usually it is not — then consider upgrading.',

    // CTA
    ctaHeadline: 'Make Your CRM Tell the Truth — in 30 Days',
    ctaDescription:
      'In 30 minutes I can audit your current CRM, identify exactly where the data is lying, and outline the required fields, weekly ritual, and coaching language that fixes it — without replacing a single piece of software.',
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
