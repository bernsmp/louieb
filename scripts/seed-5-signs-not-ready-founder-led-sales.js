/**
 * Seed script: 5 Signs You're Not Ready to Give Up Founder-Led Sales
 * - seo5SignsNotReadyFounderLedSales → /5-signs-not-ready-to-give-up-founder-led-sales
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-5-signs-not-ready-founder-led-sales.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seo5SignsNotReadyFounderLedSales: {
    heroTag: 'Founder-Led Sales',
    heroLine1: "5 Signs You're Not Ready",
    heroAccent: 'to Give Up Founder-Led Sales',
    heroDescription:
      "Don't waste time and money pretending you are. If your sales infrastructure isn't built yet, stepping back will cost you deals, momentum, and months you can't get back.",

    sectionSignsHeading: 'The 5 Signs',
    sectionSignsSubheading:
      'Any one of these is reason enough to hold off on stepping back. All five mean you have real work to do first.',

    sign1Title: "Your Salespeople Can't Close Without You in the Room",
    sign1Detail:
      "If every serious deal still requires you to show up — to a final meeting, a pricing conversation, or a difficult objection — that is not a performance problem with your salespeople. That is evidence your sales process hasn't been transferred yet. The closes you're making aren't coming from a repeatable system. They're coming from your personal credibility, your product knowledge, and your ability to read the room. Until you've documented the reasons customers buy, built a reference story library, and installed a closing framework your team can actually use, stepping back will cost you real deals.",
    sign1Action:
      "Track the close rate gap between deals you're involved in and deals you're not. If the gap is more than 30 percentage points, your process isn't ready for handoff. Build the closing infrastructure before you walk out.",

    sign2Title: "You Haven't Written Down Why Customers Buy",
    sign2Detail:
      "Most founders know intuitively why their product wins. They know which objections kill deals, which customer stories land, and which questions signal a serious buyer. The problem is that knowledge lives entirely in their head. It has never been written down, tested by a salesperson, or built into a pitch anyone else can repeat. If you handed your team a prospect list tomorrow and left the building, they wouldn't know what to say. That is not a team problem. It is a documentation problem, and it is yours to solve before you step back.",
    sign2Action:
      "Write down the three things customers say when they decide to buy and the three questions that kill deals. Teach both to every salesperson you have. That is the beginning of a real Sales Playbook.",

    sign3Title: 'Your Ideal Customer Is Still a Work in Progress',
    sign3Detail:
      "Founders who are still learning who their best customers are need to stay in sales. Pattern recognition is the whole point of founder-led selling at this stage. You're not just closing deals. You're learning which companies convert, which stay long-term, and which refer others without being asked. Once you've spoken with enough customers to write a clear ICP with specific company size, industry, pain points, and disqualification criteria, you can document it and hand it off. Until then, every conversation you're having is research your future salespeople depend on.",
    sign3Action:
      "If you can't describe your best customer in one paragraph without using the words 'various' or 'it depends,' your ICP is not ready to hand off. Stay in sales until you can.",

    sign4Title: 'No Salesperson on Your Team Has Ever Closed a Deal Without You',
    sign4Detail:
      "If no one on your team has run a complete sales cycle on their own, you don't yet know what breaks when you step back. You might assume the problem is qualification. It might actually be the demo. You might assume it's the close. It might actually be discovery. You can't build the right infrastructure until you've seen what fails in the real world. Before stepping back, let at least two salespeople run full cycles without your involvement. Track where deals stall. Those are the exact gaps you need to fill before any transition can work.",
    sign4Action:
      "Choose two active opportunities and assign them to a salesperson with clear instructions: they own the deal from this point forward. Watch what happens. Fix what fails. Then decide whether you're ready to step back.",

    sign5Title: 'Your Sales Process Lives in Your Head, Not in Writing',
    sign5Detail:
      "A Sales Playbook isn't a nice-to-have. It is the difference between a founder who can step back and a founder who gets pulled back in within 60 days. If you don't have a written Sales Playbook that covers ICP, outreach sequences, discovery questions, demo structure, objection handling, and close criteria, you don't have a process anyone else can follow. You have a memory. Memories don't transfer, don't scale, and don't survive a salesperson turnover. The infrastructure has to exist on paper before it can live without you.",
    sign5Action:
      "Before your next week ends, write one page that answers four questions: Who do we sell to? How do we reach them? What do we ask in discovery? What are the top three objections and how do we handle them? That is the start. Finish it before you think about stepping back.",

    seoPara1:
      "The push to exit founder-led sales has become so loud it sounds like universal advice. It isn't. Giving up founder-led sales before you've built the right infrastructure is one of the most expensive mistakes a growing business can make. You hire salespeople who underperform because they're working without tools. You spend six months trying to diagnose why revenue isn't growing. Then you step back in, which is exactly where you started, except now you've spent the money and the time. The five signs above aren't excuses to avoid change. They're a checklist. If any of them describe your business today, the answer isn't to hire your way out of founder-led sales. The answer is to do the foundation work first.",
    seoPara2: 'Understand',
    seoPara2b:
      " — then you'll see why the timing of the transition matters as much as the transition itself. The founders who exit successfully don't step back and hope. They build the infrastructure first: the Sales Playbook, the ICP, the qualification criteria, and the Accountability Document. That work takes 60 to 90 days to build and pressure-test. When you're ready to make the move, read",
    seoPara2c: ' before you hire anyone new. The sequence matters.',

    sectionCompHeading: 'Founders Who Step Back Too Early vs. Founders Who Time It Right',
    sectionCompSubheading:
      'The difference is almost never talent or ambition. It is preparation.',

    compare1Early: 'Step back before any salesperson has run a solo cycle',
    compare1Ready: 'Let salespeople run complete cycles and observe what breaks',
    compare2Early: 'No written ICP or disqualification criteria',
    compare2Ready: 'ICP documented with firmographics, pain points, and hard disqualifiers',
    compare3Early: 'Sales Playbook does not exist',
    compare3Ready: 'Sales Playbook written and tested before stepping back',
    compare4Early: 'No closing framework for salespeople to use',
    compare4Ready: 'Reference story library and closing criteria in place',
    compare5Early: 'Step back and wait for problems to appear',
    compare5Ready: 'Run a controlled test cycle before making the transition permanent',
    compare6Early: 'Forced back into sales after 60 days',
    compare6Ready: 'Clean handoff with metrics holding within 20% of baseline',

    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I've worked with founders who stepped back from sales too early and paid for it. The pattern is almost always the same: the infrastructure wasn't built, the salespeople weren't equipped, and the revenue dropped. My job is to build what's missing before you make the transition — so when you step back, it sticks.",

    faq1Question: "Is it okay to still be doing founder-led sales at $2M or $3M ARR?",
    faq1Answer:
      "Yes, if your sales process isn't documented, your ICP isn't finalized, or your salespeople haven't proven they can close without you. Revenue milestones don't determine readiness. Infrastructure does. Some founders should stay in sales at $5M ARR because the process still lives in their head. Others can step back at $1M ARR because they've done the documentation work. The question isn't what your ARR is. The question is whether your team can sell without you.",

    faq2Question: 'How do I know when my sales process is ready for handoff?',
    faq2Answer:
      "Three tests. First, can a salesperson walk through your entire pitch without asking you a single question? Second, can they qualify a deal using written criteria that exist independent of your judgment? Third, have they closed at least one deal from start to finish without your involvement? If the answer to all three is yes, your process may be ready. If any one of them is no, you're not there yet.",

    faq3Question: 'What happens if I step back from sales before my team is ready?',
    faq3Answer:
      "The most common outcome is a revenue drop in the first 60 to 90 days, followed by the founder stepping back in. The business loses both time and money. The salespeople lose confidence. The founder loses credibility as a leader because the transition didn't stick. The damage is real, and it sets back the next attempt by at least a quarter. Getting it right the first time is worth the extra 60 days of preparation.",

    faq4Question: 'Can I hire a salesperson and still run founder-led sales at the same time?',
    faq4Answer:
      "Yes, and for many businesses in the $1M to $3M range, this is exactly the right move. Hire a salesperson, stay in the deals alongside them, and use that time to document what you do, test what works without you, and build the infrastructure. Treat your own involvement as temporary and deliberate. The goal is to work yourself out of the selling role — not to hire someone and immediately disappear.",

    faq5Question: "What is the first thing to build if I know I'm not ready to step back yet?",
    faq5Answer:
      "Write your Sales Playbook. Start with one page that answers four questions: Who do you sell to? How do you find them? What do you ask in discovery? What are the top three objections and how do you handle them? That single page is the foundation of everything else. Add to it every week based on what you observe in the field. Within 60 days you'll have a Playbook your salespeople can actually use.",

    ctaHeadline: 'Get the Infrastructure Right Before You Step Back',
    ctaDescription:
      "In 30 minutes I can review where your sales process stands, identify the gaps that would cause the transition to fail, and outline exactly what needs to be built before you step back.",
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
