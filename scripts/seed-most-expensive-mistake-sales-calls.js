/**
 * Seed script: The Most Expensive Mistake Founders Make in Sales Calls
 * - seoExpensiveSalesCallMistake → /most-expensive-mistake-founders-make-in-sales-calls
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-most-expensive-mistake-sales-calls.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoExpensiveSalesCallMistake: {
    // Hero
    heroTag: 'Sales Conversations',
    heroLine1: 'The Most Expensive Mistake Founders Make',
    heroAccent: 'in Sales Calls?',
    heroH2: "Planning their reply while the prospect is still talking. Here's why:",
    heroDescription:
      "For $1M–$10M ARR founders still running their own sales calls. The information that closes the deal is in what the prospect says. You can't hear it while you're rehearsing your answer. Here's what it costs you, and how to fix it.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "The most expensive mistake on a sales call isn't a weak pitch or a bad close. It's that you stop listening the moment you think you know where the prospect is going, and you start drafting your reply while they're still talking.",
    takeaway2:
      "When you listen to reply instead of listening to understand, you answer the objection you expected instead of the one they actually have. That's how winnable deals quietly slip away.",
    takeaway3:
      "Founders are the worst offenders. You know the product cold, you've heard the question a hundred times, so your brain jumps ahead. The prospect feels it, and the trust you needed to close evaporates.",
    takeaway4:
      'The fix is a discipline, not a personality trait. A short pause, a confirming question, and a habit of taking notes instead of forming rebuttals will change your close rate more than any new script.',
    takeaway5:
      "This is the first thing I install when I take over a founder-led sales motion. It's also the first thing a Fractional Sales Leader can teach a team so the company stops depending on the founder's instincts to win.",

    // Costs section
    sectionCostsHeading: 'What Planning Your Reply Actually Costs You',
    sectionCostsSubheading:
      'Five ways the same habit quietly loses deals you could have won. Each one has a fix you can use on your next call.',

    cost1Title: 'You Miss the Buying Signal They Just Handed You',
    cost1Detail:
      "Prospects tell you how to sell to them. They mention the deadline, the budget cycle, the executive who has to sign off, the competitor they're frustrated with. Those are the exact words that close the deal. But if you're rehearsing your next line, you hear the sentence and miss the signal inside it. You move on to your point instead of pulling the thread they just offered you. The single most valuable information on the call walks right past you.",
    cost1Fix:
      'Treat every detail a prospect volunteers as a thread to pull, not a pause to fill. When they mention a deadline or a frustration, stop and ask one more question about it before you say anything else.',

    cost2Title: 'You Answer the Objection You Expected, Not the One They Have',
    cost2Detail:
      "You've heard \"it's too expensive\" so many times that the second a prospect hesitates on price, you launch the value defense you've used for years. The problem is that this prospect wasn't worried about price. They were worried about implementation time, or whether their team would actually adopt it. You just answered a question they didn't ask, and now they're sure you weren't listening. The real objection never gets surfaced, so it never gets handled.",
    cost2Fix:
      "Before you respond to any concern, repeat it back in your own words and ask if you've got it right. You'll be surprised how often the real objection is one layer beneath the one you assumed.",

    cost3Title: 'The Prospect Feels Unheard, and Quietly Checks Out',
    cost3Detail:
      "People can tell when you're waiting for your turn to talk instead of actually listening. They feel the small interruptions, the answer that arrives a beat too fast, the way you steer back to your script. It reads as \"this person cares about their pitch, not my problem.\" That's the moment rapport dies. They won't argue with you. They'll just get polite, go quiet, and stop returning your emails. You'll call it ghosting. It started on the call.",
    cost3Fix:
      "Let there be a full second of silence after the prospect finishes a thought. The pause signals you're considering what they said, and it almost always pulls more useful information out of them.",

    cost4Title: 'You Pitch Features They Never Asked About',
    cost4Detail:
      "When you're planning your reply, you default to your favorite talking points instead of the ones that matter to this buyer. So you spend ten minutes on the integration they'll never use and skip the one capability that would have closed them. A great pitch isn't the one that covers everything. It's the one that connects your product to the specific problem the prospect described, in their words, two minutes ago. You can't do that if you weren't listening to those two minutes.",
    cost4Fix:
      'Build your pitch live, from their words. Note the three things they said matter most, then speak only to those. Save the full feature tour for the prospects who ask for it.',

    cost5Title: "You Lose the One Question That Would've Moved the Deal",
    cost5Detail:
      "The best question on any sales call is the one that comes directly from what the prospect just said. It can't be scripted, because it depends on their last sentence. That's the question that uncovers the real decision criteria, the hidden stakeholder, the actual timeline. But if your attention was on composing your response, that question never forms. You ask a generic next question from your list, the conversation flattens, and the deal stays exactly as stuck as it was when the call started.",
    cost5Fix:
      'Make your next question a reaction, not a recital. The phrase "tell me more about that" buys you time and almost always advances the deal further than the question you had queued up.',

    // SEO paragraphs
    seoPara1:
      "Most founders think the expensive mistakes in sales happen at the close. They don't. They happen in the middle of the call, in the quiet moments where you should be listening and you're busy building your answer instead. You know the product better than anyone alive, so your brain races ahead of the prospect's sentence. That confidence feels like competence. To the buyer, it reads as someone who already decided what they need and stopped paying attention. That's the most expensive thing you can do on a call, because it loses deals that were yours to win.",
    seoPara2:
      "The fix isn't a new script or a slicker pitch. It's a discipline: take notes instead of forming rebuttals, pause before you respond, and confirm the real concern before you answer it. That last habit is also the difference between handling the objection in front of you and handling the one you assumed. If your reps are losing deals to concerns they never actually surfaced, the problem usually starts here, with listening to reply instead of listening to understand.",

    // Comparison table
    sectionCompareHeading: 'Listening to Reply vs. Listening to Understand',
    sectionCompareSubheading:
      'Same call, same prospect. The only thing that changes is where your attention is.',
    compareColLeft: 'Listening to Reply',
    compareColRight: 'Listening to Understand',
    compare1Reply: 'Rehearsing your response while they talk',
    compare1Understand: 'Taking notes on what they actually said',
    compare2Reply: 'Answering the objection you expected',
    compare2Understand: 'Confirming the real concern before responding',
    compare3Reply: 'Filling every silence with your pitch',
    compare3Understand: 'Letting a pause draw out more information',
    compare4Reply: 'Covering your favorite features',
    compare4Understand: "Speaking only to the buyer's stated priorities",
    compare5Reply: 'Asking the next question from your list',
    compare5Understand: 'Asking the question their last answer created',
    compare6Reply: 'Prospect feels pitched and goes quiet',
    compare6Understand: 'Prospect feels understood and stays engaged',

    // Fix steps
    sectionFixHeading: 'How to Stop Planning Your Reply',
    sectionFixSubheading:
      'Three habits you can use on your very next call. None of them require a new script. All of them require you to stay in the conversation.',
    fix1Title: 'Take Notes Instead of Forming Rebuttals',
    fix1Detail:
      "Your hands and your head can't do two things at once, and that's the point. When you're writing down what the prospect says, you physically can't be drafting your comeback at the same time. Capture their exact words, the deadline, the frustration, the name of the person who signs. Those notes become the spine of your follow-up and your pitch. The act of writing forces you back into listening, which is the whole game.",
    fix2Title: 'Pause, Then Confirm Before You Respond',
    fix2Detail:
      "Build a two-step habit into every answer. First, a beat of silence after they stop. Second, a quick paraphrase: \"So what I'm hearing is the real issue is adoption, not price. Did I get that right?\" That single sentence does two things at once. It proves you were listening, and it forces the prospect to either confirm or correct you. Either way, you're now solving the actual problem instead of the one you guessed at.",
    fix3Title: 'Make Your Next Question Come From Their Last Answer',
    fix3Detail:
      'Stop running your discovery list like a checklist. The strongest move on any call is to take the last thing the prospect said and go one level deeper. "You mentioned the rollout stalled last time. What happened?" That question can\'t be pre-written, which is exactly why it works. It tells the prospect you\'re actually in the conversation with them, and it surfaces the information that scripted questions never reach.',

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I've sat in on thousands of sales calls, and the habit on this page is the one I catch the most. It's also the easiest to fix once you can see it. When I take over a founder-led sales motion, teaching the team to listen to understand instead of listening to reply is one of the first things that moves the close rate, and it's a skill that stays with the company long after I'm gone.",

    // FAQs
    faq1Question: 'Why is planning my reply during a sales call such a big deal?',
    faq1Answer:
      "Because the information that closes the deal is in what the prospect says, and you can't hear it while you're composing your answer. When you listen to reply instead of to understand, you miss buying signals, answer the wrong objection, and ask weaker questions. None of it looks like a mistake in the moment. It just shows up later as a deal that went quiet for no obvious reason. Over a quarter, that's a lot of winnable revenue lost to a habit you didn't know you had.",

    faq2Question: 'Why are founders especially prone to this?',
    faq2Answer:
      "Founders know the product better than anyone, and they've answered the same questions hundreds of times. So the brain jumps ahead. You hear the first half of a sentence, you assume you know the rest, and you start preparing your response. That confidence is exactly what makes the habit dangerous. The prospect can feel that you've already decided what they mean, and it costs you the trust you needed to close. It's also why a sales motion built only on founder instinct is so hard to hand off to a team.",

    faq3Question: 'How do I stop planning my reply without losing the thread of the conversation?',
    faq3Answer:
      "Take notes. When you're writing down the prospect's exact words, you can't draft your rebuttal at the same time, and your notes hold the thread for you so you don't have to keep it in your head. Then add a one-second pause and a quick paraphrase before you respond. The pause feels long to you and natural to them, and the paraphrase proves you heard them. Those two small habits do more for your close rate than any new script.",

    faq4Question: 'Is this just a discovery-call problem, or does it show up everywhere?',
    faq4Answer:
      "It shows up on every call, but it's most expensive on discovery and on objection handling. On discovery, planning your reply means you never uncover the real decision criteria. On objection handling, it means you answer the concern you expected instead of the one they actually raised. Both are the same root habit: listening to respond instead of listening to understand. Fix the habit and both calls get better at the same time.",

    faq5Question: 'How does a Fractional Sales Leader fix this across a whole team?',
    faq5Answer:
      "I make it a coachable, measurable habit instead of a personality trait. We listen to recorded calls together and mark the exact moments a rep started planning their reply instead of listening. We build the pause-and-confirm step into the call framework, and we put note-taking discipline into the playbook so it survives past any one rep. The goal is a team that consistently hears what the buyer is saying, so the company stops depending on the founder being the only person in the room who listens well.",

    // CTA
    ctaHeadline: 'Want to Hear What Your Calls Are Missing?',
    ctaDescription:
      "In 30 minutes I can listen to how your team runs a call, show you where they're planning their reply instead of listening, and give you the habits that change it. No pitch, just a clear read on what's costing you deals.",
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
