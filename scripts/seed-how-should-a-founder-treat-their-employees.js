/**
 * Seed script: How Should a Founder Treat Their Employees?
 * - seoHowToTreatEmployees → /how-should-a-founder-treat-their-employees
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-how-should-a-founder-treat-their-employees.js
 */

const { createClient } = require('@supabase/supabase-js')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoHowToTreatEmployees: {
    // Hero
    heroTag: 'Leadership & Sales Culture',
    heroLine1: 'How Should a Founder',
    heroAccent: 'Treat Their Employees?',
    heroH2: 'I Have a Formula That Works Every Time',
    heroDescription:
      "Treat your employees exactly as you want them to treat your best customers. For $1M–$10M ARR founders stuck in founder-led sales, it's also the formula that decides whether you can ever hand your customers to someone else.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "There's one formula, and it works every time: treat your employees exactly as you want them to treat your best customers. Everything else follows from it.",
    takeaway2:
      "It runs as a circle. Treat your people well, they treat your customers well, your customers buy, and then you reward your people. Win, win, win, win.",
    takeaway3:
      "How you treat your first salespeople decides whether you'll ever escape founder-led sales. Treat them like order-takers and you'll still be closing every deal yourself at $8M ARR.",
    takeaway4:
      "Clarity beats charisma. A written Accountabilities Document does more for morale than any pep talk, because people relax the moment they know exactly what the target is.",
    takeaway5:
      "This isn't the soft option. It's the most accountable system there is, because the standard is written down, it's fair, and it applies to you too.",

    // Circle of Success graphic
    circleHeading: 'The Circle of Success',
    circleSubheading:
      "It's a loop, and it starts with your people. Treat them well, they treat your customers well, your customers pay you, and that's what lets you reward your people. Then it repeats.",

    // The Formula — 5 rules
    sectionRulesHeading: 'The Formula, Step by Step',
    sectionRulesSubheading:
      "Five moves. Skip one and the circle breaks. Run all five and you build a team you can actually hand your customers to.",

    rule1Title: "Treat Them Exactly How You Want Them to Treat Your Best Customer",
    rule1Detail:
      "This is the whole formula in one sentence. Think about how you want your salesperson to treat your biggest account: with respect, straight answers, patience, and follow-through that never slips. Now ask whether you give them that same treatment. You can't hand a customer something you never handed the person selling to them. If your salespeople feel rushed, second-guessed, and kept in the dark, that's exactly how your customers will feel on the other end of the call. The way you treat the team is the ceiling on how they treat the market.",
    rule1Outcome:
      "Salespeople who treat your customers the way you would, because they've been treated that way themselves.",

    rule2Title: "Give Them Clarity Before You Give Them a Quota",
    rule2Detail:
      "Most people don't underperform because they're lazy. They underperform because nobody ever told them, in writing, what winning looks like. Before you hand a salesperson a number, hand them clarity: what they own, how they're measured, what a good week looks like, and what happens when a target is missed. I put this in an Accountabilities Document so it lives on paper instead of in my head. When the standard is written down, people stop guessing what you want and start hitting it. Clarity is a kindness, and it's also the fastest path to performance.",
    rule2Outcome:
      "A team that knows the target on day one, so onboarding takes 30 days instead of six months of guesswork.",

    rule3Title: "Pay Them Like Partners in the Outcome, Not Costs to Minimize",
    rule3Detail:
      "If you build the comp plan to protect your margin at every turn, your salespeople will do the same thing to your customers. They'll nickel-and-dime the deal, hold back, and treat every account like a transaction, because that's the game you taught them to play. Pay people like partners in the result you're chasing and they'll chase it with you. This is the reward step in the circle, and it isn't charity. When your people win because your customers won, everyone is pulling in the same direction. A comp plan is a values statement disguised as a spreadsheet.",
    rule3Outcome:
      "Salespeople who fight for the customer's outcome because their own outcome is tied to it.",

    rule4Title: "Coach Them Every Week. Don't Just Inspect Them",
    rule4Detail:
      "There's a difference between a weekly review that feels like coaching and one that feels like an interrogation. Both look at the same pipeline. One sends people out energized and one sends them out defensive. Sit down every week, look at the deals together, and ask what you can do to help move them. Catch people doing things right, not just things wrong. Salespeople who feel developed stay and get better. Salespeople who feel audited update the CRM to survive the meeting and learn nothing. The weekly rhythm is where you either build a team or slowly train them to hide from you.",
    rule4Outcome:
      "A weekly cadence that surfaces problems early and turns your average reps into good ones instead of chasing them out the door.",

    rule5Title: "Hold Them to a Standard, Not to Your Mood",
    rule5Detail:
      "The fastest way to lose good people is to be warm one day and cold the next, so nobody ever knows which founder is walking in. Consistency is what people actually mean when they say they want a good boss. Write the standard down, apply it to everyone the same way, and apply it to yourself first. When the rules are fair and predictable, people take risks, tell you the truth, and bring you the bad news early while you can still do something about it. When the rules move with your mood, they manage you instead of managing their deals. A standard you keep is worth more than a speech you give.",
    rule5Outcome:
      "A team that tells you the truth early, because the standard is fair, written, and the same every single day.",

    // SEO paragraphs
    seoPara1:
      "Founders ask how they should treat their employees like it's a soft question, but for a $1M–$10M business it's the whole ballgame. The way you treat your salespeople is the ceiling on how they treat your customers, and your customers can feel the difference. A team that's squeezed, kept in the dark, and second-guessed will pass all of that straight through to the people you're trying to sell. A team that's paid fairly, coached weekly, and trusted with a clear standard will treat your accounts the way you would. Culture isn't a poster on the wall. It's the customer experience, one salesperson at a time.",
    seoPara2:
      "This matters most when you're trying to get out of founder-led sales. You can't hand your customers to someone you never really invested in. If you want the practical version of this,",
    seoPara2b: ", and then put the standard on paper with a",
    seoPara2c:
      ". Treat people well, write the standard down, and the customers take care of themselves.",

    // Comparison table
    sectionCompareHeading: 'How Founders Lose Their Best People vs. How They Keep Them',
    sectionCompareSubheading:
      "The difference is rarely money. It's almost always how people are treated day to day.",
    compareColLeft: 'Treats Employees as Costs',
    compareColRight: 'Treats Employees as Partners',
    compare1Fail: 'Micromanages every deal and every call',
    compare1Succeed: 'Sets a clear standard and lets people own the outcome',
    compare2Fail: 'Comp plan built to protect margin',
    compare2Succeed: 'Comp plan built to reward the customer outcome',
    compare3Fail: 'Feedback only shows up when something breaks',
    compare3Succeed: 'Weekly coaching that catches the good and the bad',
    compare4Fail: "Expectations live only in the founder's head",
    compare4Succeed: 'Expectations written in an Accountabilities Document',
    compare5Fail: 'Warm one day, cold the next',
    compare5Succeed: 'Same fair standard every day, applied to everyone',
    compare6Fail: 'Salespeople treat customers like transactions',
    compare6Succeed: 'Salespeople treat customers the way the founder would',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I've run this formula in my own companies and installed it in dozens of others. Treat your people the way you want them to treat your customers, write the standard down, and reward the outcome. It's simple, it isn't easy, and it's the thing that finally lets a founder step out of every deal. When I build a sales team with you, this is the culture I build underneath it.",

    // FAQs
    faq1Question: "Isn't \"treat employees well\" too soft to build a real sales team?",
    faq1Answer:
      "It's the opposite of soft. The formula isn't about being nice for its own sake. It's about clarity, fair pay, weekly coaching, and a written standard you hold everyone to, including yourself. That's a demanding system. Soft is leaving the target undefined and hoping people read your mind. When you treat people well and hold a hard line at the same time, you get a team that performs and stays. Warmth and accountability aren't opposites. The best sales cultures run on both.",

    faq2Question: "What's the single most important part of the formula?",
    faq2Answer:
      "Treat your employees exactly as you want them to treat your best customers. Everything else is a way of living that out. If you want your salesperson to give a customer respect, straight answers, and follow-through, you have to give them the same. They can't pass along something they never received. Get that one thing right and the rest of the formula, the clarity, the comp, the coaching, the consistency, becomes obvious.",

    faq3Question: "How does the way I treat employees actually affect my customers?",
    faq3Answer:
      "It runs as a circle. Treat your people well and they'll treat your customers well. Your customers buy from people who feel valued and stay away from people who feel squeezed. Then your customers buy, and that's what lets you reward your people, which starts the circle again. It's win, win, win, win. The opposite circle is just as real: squeeze your team and they'll squeeze your customers, and your revenue tells the story before you do.",

    faq4Question: "I have one salesperson and I still close every deal myself. Does this apply to me?",
    faq4Answer:
      "Especially to you. How you treat that first salesperson decides whether you'll ever hand sales off. If you keep them in the dark and jump into every deal, they'll never learn to sell the way you do, and you'll be closing everything yourself at $8M ARR. If you give them clarity, coach them weekly, and let them own outcomes, you're building someone you can eventually trust with your customers. That's the whole point of getting out of founder-led sales.",

    faq5Question: "What's an Accountabilities Document, and why does it matter here?",
    faq5Answer:
      "It's a one-page written agreement that spells out what a salesperson owns, how they're measured, what good looks like, and the cadence of review. It matters because clarity is how you treat people well without saying a word. When the target is on paper, people stop guessing and start performing, and you stop being the only person who knows what's expected. It's the difference between a team that runs on your mood and a team that runs on a standard.",

    // CTA
    ctaHeadline: 'Build a Team You Can Hand Your Customers To',
    ctaDescription:
      "In 30 minutes I can show you where your current team treatment is helping or hurting your revenue, and what to change so your salespeople start treating your customers the way you would.",
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
