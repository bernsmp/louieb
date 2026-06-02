/**
 * Seed script: How Do I Vet a Fractional Sales Leader?
 * - seoVetFractionalSalesLeader → /how-do-i-vet-a-fractional-sales-leader
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-vet-fractional-sales-leader.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoVetFractionalSalesLeader: {
    // Hero
    heroTag: 'Hiring a Fractional Sales Leader',
    heroLine1: 'How Do I Vet a',
    heroAccent: 'Fractional Sales Leader?',
    heroH2: '5 Things to Look For Before Hiring a Fractional Sales Leader',
    heroDescription:
      "For $1M–$10M ARR founders who can't afford to hire the wrong person into the most important seat in the company. The vetting test that separates the operators from the advisors.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "Don't hire the resume. Hire the operator. The Fractional Sales Leaders who help you the most are the ones who've built sales engines from scratch at companies your size, not the ones who managed a team at a Fortune 500.",
    takeaway2:
      "A real Fractional Sales Leader can show you artifacts: a sanitized Sales Playbook, an Accountabilities Document, a CRM build, a 90-day plan. If they can't show you what they've built, they're an advisor with a new label.",
    takeaway3:
      "References from $1M–$10M founders matter more than logos. A founder who'll get on the phone and tell you the truth is worth more than three impressive brand names on a slide.",
    takeaway4:
      "Beware the Fractional Sales Leader who won't tell you when the engagement is wrong. The good ones have walked away from work. They protect their reputation more than they protect their next invoice.",
    takeaway5:
      "The right Fractional Sales Leader builds you out of the dependency, not into it. Their goal is to install a system that runs without them, then leave on time.",

    // 5 Things to Look For
    sectionThingsHeading: 'The 5 Things to Look For',
    sectionThingsSubheading:
      "Each one is a test you can run before you sign. If a candidate fails two of these, move on. The cost of the wrong hire is far higher than the cost of restarting your search.",

    thing1Title: "Proof They've Built — Not Just Advised",
    thing1Detail:
      "The single biggest trap when you're vetting a Fractional Sales Leader is mistaking advice for execution. Anyone can show up to your office and give you a list of recommendations. A real Fractional Sales Leader has built the thing they're recommending. Ask them to show you a Sales Playbook they wrote, a CRM pipeline they configured, an Accountabilities Document they enforced, a comp plan they rolled out. If they can't put an artifact in front of you, they haven't done the work. They've watched other people do it. You don't need another consultant standing behind your team telling them what to fix. You need an operator who'll sit next to your reps, fix it with them, and leave a system behind.",
    thing1Outcome:
      "You hire someone who'll do the work, not someone who'll present a deck about the work. The difference shows up in week one.",

    thing2Title: 'A Specific 30-60-90 Day Plan, Written Down Before You Sign',
    thing2Detail:
      "Any Fractional Sales Leader worth hiring has done this enough times that they can describe, in writing, what the first 30, 60, and 90 days look like in your business. Not a generic deck. A plan that names the deliverables: by day 30, the Sales Playbook is drafted and the CRM is audited. By day 60, the pipeline is rebuilt with real stage definitions and the Accountabilities Document is in place. By day 90, weekly pipeline reviews are running and the first new rep is hired against a real scorecard. If the answer to \"what do the first 90 days look like?\" is vague, you're hiring someone who'll figure it out as they go. That's expensive figuring-out time, on your dime.",
    thing2Outcome:
      "You know exactly what you're paying for, what you'll have at the end of each month, and how to tell if it's working — before you sign the contract.",

    thing3Title: 'References From Founders Your Size — Not Logos',
    thing3Detail:
      "A Fractional Sales Leader who's spent the last decade running enterprise teams will know a lot about sales. They won't necessarily know how to operate inside a $3M ARR bootstrapped company where the founder is still selling, the CRM is half-built, and there's no budget for a $400K hire. The skills don't transfer cleanly. When you're vetting, ask for two or three references from founders at $1M–$10M ARR who've used them in the last three years. Then actually call those founders. Ask them: what was the company doing when this person started, what was it doing when they left, and what would you do differently? Logos are decoration. Founder phone calls are signal.",
    thing3Outcome:
      "You hire someone who's already solved your specific problem at your specific scale — not someone whose playbook was built for a company 10x your size.",

    thing4Title: 'An Accountabilities Document They Wrote and Enforced',
    thing4Detail:
      "Most failed sales hires fail because nobody wrote down what the person was actually accountable for. The job description got them in the door. After that, expectations drifted, the founder got frustrated, and a year later everyone agreed it wasn't working. A Fractional Sales Leader who's been doing this seriously has an Accountabilities Document — a one-page artifact that names the outcomes a salesperson owns, the metrics they're measured on, the cadence of review, and what happens when targets are missed. Ask to see one. If they don't have a version they can show you, they don't have a system for making your team accountable. They have hope.",
    thing4Outcome:
      "Your next sales hire walks in on day one knowing exactly what they own, what they're measured on, and what good looks like. So do you.",

    thing5Title: 'A Clear Exit Plan — and Walk-Away Criteria',
    thing5Detail:
      "Here's the test that separates the operators from the people billing hours: ask them what would make them walk away from your engagement. The strong answer is specific. They'll tell you they've ended engagements when the founder refused to implement what they recommended, when the company's real problem turned out to be the product not the sales motion, when the founder kept overriding the salespeople and breaking the system. A Fractional Sales Leader who has never ended an engagement early is either too new to have seen one fail or too dependent on the revenue to push back when something's wrong. Either way, you're hiring someone who'll keep cashing checks long after the engagement stops working.",
    thing5Outcome:
      "You hire someone whose reputation matters more to them than your next invoice. That's the person who'll tell you the truth when nobody else will.",

    // SEO paragraphs
    seoPara1:
      "Most founders vet a Fractional Sales Leader the way they'd vet a vendor — a sales call, a proposal, a price, a decision. That's how the wrong person gets hired. The Fractional Sales Leader you bring in will sit at the center of your sales motion. They'll touch your reps, your pipeline, your forecast, your CRM, your hiring scorecard, and the founder time you don't have to spare. If you wouldn't hire a VP of Sales on a 45-minute pitch, don't hire a Fractional Sales Leader that way either. Vet like the seat matters — because it does.",
    seoPara2:
      "The five things on this page are the ones I'd use if I were vetting a Fractional Sales Leader for my own company. Once you've narrowed the shortlist with these tests, the next step is the conversation itself — and the right ",
    seoPara2b:
      " will tell you whether they can actually do the work. And if you want to see the artifact that should be on day one of every engagement, read ",
    seoPara2c: '. The artifact is what makes the engagement work.',

    // Comparison table
    sectionCompareHeading: 'Hire on Vibes vs. Vet Like the Seat Matters',
    sectionCompareSubheading:
      "The wrong hire is a six-figure mistake and six months of lost momentum. The right vetting process is a three-week investment that pays for itself before the first invoice.",
    compareColLeft: 'How Most Founders Hire',
    compareColRight: 'How to Actually Vet',
    compare1Without: 'Hires on chemistry and impressive resume language',
    compare1With: 'Asks for artifacts: playbook, pipeline build, Accountabilities Document',
    compare2Without: "Accepts a generic 'we'll assess and recommend' plan",
    compare2With: 'Demands a written 30-60-90 day plan with named deliverables',
    compare3Without: 'Trusts the LinkedIn logo wall — Fortune 500 names look safe',
    compare3With: 'Calls two founders at $1M–$10M ARR who actually used them',
    compare4Without: 'Signs a 6-month contract before seeing how they work',
    compare4With: 'Structures a 30-day paid trial with clear deliverables',
    compare5Without: "Doesn't ask about walk-away criteria or past engagement endings",
    compare5With: 'Asks what made them walk away from work — and listens for specificity',
    compare6Without: 'Hires the cheapest option — or the most expensive, hoping price equals quality',
    compare6With: 'Hires the one who described your situation accurately without being told',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "If you're vetting someone for this role, vet me the same way. Ask me for the playbook. Ask me for the Accountabilities Document. Ask me for two founders at your stage who'll tell you the truth about what changed in their business while I was there. If I can't pass my own test, I haven't earned the seat.",

    // FAQs
    faq1Question: 'How long does vetting a Fractional Sales Leader actually take?',
    faq1Answer:
      "Two to three weeks if you're disciplined. The first week is filtering — looking at who matches your stage, who can show you artifacts, who has founder references at $1M–$10M ARR. The second week is real conversations with the three finalists, including the written 30-60-90 day plan. The third week is reference calls and a paid trial agreement. Founders who stretch this to two months almost always end up hiring out of fatigue. The discipline isn't in the timeline. It's in refusing to hire anyone who can't pass the artifact test.",

    faq2Question: 'What artifacts should a Fractional Sales Leader be able to show me?',
    faq2Answer:
      "At minimum: a sanitized Sales Playbook from a prior engagement, an Accountabilities Document, a CRM pipeline structure with stage definitions, and a sample 30-60-90 day plan from a recent client. The exact contents don't matter as much as the existence. Someone who's been doing the work has these things on hand. Someone who hasn't will give you reasons why they can't share them. Confidentiality is a real concern, but sanitization is easy. If they can't redact a client name from a playbook, that's a tell.",

    faq3Question: "What's the difference between vetting and interviewing a Fractional Sales Leader?",
    faq3Answer:
      "Vetting is the broader pre-hire evaluation — the references, the artifacts, the 90-day plan, the walk-away criteria. Interviewing is the conversation itself, the specific questions you ask in the meeting. You vet to build the shortlist. You interview to confirm what vetting told you. Most founders skip the vetting and go straight to interviewing, which means they're judging on personality and presentation. That's how the wrong person gets hired with everyone in the room nodding along.",

    faq4Question: 'Should I do a paid trial before signing a longer engagement?',
    faq4Answer:
      "Yes, every time. A 30-day paid trial protects both sides. You see how they actually work — not how they pitch. They see whether your business has the conditions for the engagement to succeed. Any experienced Fractional Sales Leader will agree to this immediately because they've been burned by clients who looked good on paper. The ones who resist a trial period and push for a 6-month contract are either unsure they can deliver in 30 days or so overcommitted to other clients they can't afford to prove themselves first. Neither is the person you want.",

    faq5Question: "I'm at $2M ARR and stuck in founder-led sales. Is this really the time to bring someone in?",
    faq5Answer:
      "Yes — this is exactly the time. The founders who wait until $5M or $8M ARR to bring in a Fractional Sales Leader have usually spent 18 months grinding through hires that didn't work, processes that didn't scale, and pipeline that depended entirely on them. The right Fractional Sales Leader at $2M ARR builds the infrastructure that lets you grow without becoming the bottleneck. At $5M ARR you're not hiring help — you're hiring a rescue.",

    // CTA
    ctaHeadline: 'Vet Me the Same Way',
    ctaDescription:
      "In 30 minutes I'll walk you through the artifacts, the 90-day plan, the founder references, and the walk-away criteria. If I'm not the right Fractional Sales Leader for your business, I'll tell you who is.",
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
