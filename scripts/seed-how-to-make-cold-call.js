/**
 * seed-how-to-make-cold-call.js
 * Upserts the seoHowToMakeColdCall section into Supabase site_content
 * with every field that the live page uses.
 *
 * Run: node scripts/seed-how-to-make-cold-call.js
 */

const path = require('path')
const fs = require('fs')
;(function loadEnv() {
  const candidates = [
    path.join(__dirname, '..', '.env.local'),
    path.join(__dirname, '..', '..', '..', '.env.local'),
    path.join(process.env.HOME || process.env.USERPROFILE || '', 'louieb', '.env.local'),
    'D:/louieb/.env.local',
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) { require('dotenv').config({ path: p }); return }
  }
  require('dotenv').config({ path: '.env.local' })
})()

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const SECTION = 'seoHowToMakeColdCall'

const content = {
  // Hero
  heroLabel: 'Outbound Sales',
  heroLine1: 'How to Make a Cold Call',
  heroAccent: 'That Actually Books Meetings',
  heroDescription:
    'Cold calling is harder than cold email, and it converts at twice the rate. Here is the structure that earns conversations with B2B founders, plus 5 openers that consistently break through, and the rewrites that turn deleted calls into booked meetings.',
  heroPrimaryButton: 'Talk to Louie. 30 Minutes.',
  heroSecondaryLink: 'How cold calls fit into a cadence →',

  // Key Takeaways
  takeaway1:
    'The first 10 seconds of a cold call decide everything. Acknowledge the awkwardness, name yourself clearly, and earn the next 30 seconds with a specific reason for the call.',
  takeaway2:
    'The goal of a cold call is not to close the deal. It is to earn a 20 minute meeting on the calendar, where the real qualification and selling happens.',
  takeaway3:
    'Cold calling converts at roughly 2 to 4x the rate of cold email, and the best windows are 7:30 to 9:00 AM and 4:00 to 5:30 PM, Tuesday through Thursday.',
  takeaway4:
    "Specificity beats cleverness. A real trigger about the prospect's company will outperform any clever opener you can write in advance.",

  // Openers (H2 section)
  openersHeading: 'Cold Call Openers That Work',
  openersSubheading:
    'Five openers that consistently earn the next 30 seconds, with real examples you can adapt to your ICP.',

  opener1Label: 'The Pattern Interrupt',
  opener1Detail:
    "This opener acknowledges the awkwardness of the cold call up front. It works because it is honest, and honesty is rare in the first 10 seconds of a sales call. The pattern interrupt resets the prospect's defensive posture and earns you the chance to make your point. It is the single highest converting opener I have used across thousands of dials, and it is what I teach every salesperson on day one.",
  opener1Example:
    "\"Hi Sarah, this is Louie with Sales Getters. I know you weren't expecting my call. Can I take 30 seconds to explain why I dialed, and you can tell me if it is worth keeping the conversation going?\"",

  opener2Label: 'The Specific Trigger',
  opener2Detail:
    'This opener references something specific about the prospect that proves you did your research. A funding announcement, a job posting, a piece of content they published, or a hiring milestone. Specificity is the antidote to feeling spammed. When the prospect hears something true about their company in the first sentence, they assume the rest of the call is going to be relevant too. They are usually right.',
  opener2Example:
    '"Hi Sarah, this is Louie. I saw that you just expanded your sales team to seven salespeople. That is the exact stage where most founders stop being able to forecast accurately, and I have a quick observation about why. Can I share it?"',

  opener3Label: 'The Permission Question',
  opener3Detail:
    'This opener gives the prospect explicit control over the conversation. Most salespeople are afraid of asking permission because they think the prospect will say no. The opposite is true. When you ask permission, the prospect feels respected, and they almost always say yes. The question is not whether you ask permission. It is what you ask permission for. Asking for 30 seconds works. Asking for 5 minutes does not.',
  opener3Example:
    '"Hi Sarah, this is Louie with Sales Getters. I have a specific reason I called you today, and it should take me less than 30 seconds to explain. Is now a bad time?"',

  opener4Label: 'The Curiosity Hook',
  opener4Detail:
    'This opener leads with a question or observation that creates intrigue without revealing the pitch. The goal is to make the prospect think, then ask a follow up question. The mistake most salespeople make is trying to be clever instead of relevant. Curiosity only works when it is rooted in something the prospect actually cares about. If your hook is generic, it sounds like a marketing email read out loud, and the prospect hangs up.',
  opener4Example:
    '"Hi Sarah, this is Louie. Quick question. When you look at your top three salespeople, do you know what specifically makes them better than the next three? Most founders I talk to think they know, and they are usually wrong. That is actually why I called."',

  opener5Label: 'The Referral Bridge',
  opener5Detail:
    'This opener uses a real connection or shared context to create immediate trust. It is the single highest converting opener available, and it works because the prospect is no longer hearing from a stranger. They are hearing from someone connected to a person or context they recognize. Never fake a referral. The damage from a fake referral is permanent, and it is not worth the meeting. When you have a real one, lead with it.',
  opener5Example:
    '"Hi Sarah, this is Louie with Sales Getters. Mark Johnson at Acme suggested I reach out. He mentioned you are scaling your sales team and might be looking at the same kind of process work I helped him build last year. Did he mention I might call?"',

  // SEO Paragraphs
  seoParagraph1:
    'Cold calling is the most underused outbound channel in B2B sales right now. Most $1M to $10M ARR teams have quietly abandoned the phone in favor of email and LinkedIn, and that is exactly why the phone has become a competitive advantage. Decision makers receive 100 cold emails a week, and they receive 1 or 2 cold calls. The conversation you can have in 4 minutes on a call would take 6 weeks to build over email, and a single connect can replace an entire 8 step email sequence.',
  seoParagraph2:
    'The salespeople who succeed at cold calling are not the ones with the best scripts. They are the ones who treat each call like a conversation, lead with something specific, and ask permission before pitching. Cold calling rewards effort more than any other outbound channel, and it works best when paired with email and LinkedIn in a multi touch cadence. To see how cold calls fit alongside email in a systematic outreach sequence,',
  seoParagraph2LinkText: 'read the full cadence guide →',

  // Before / After
  beforeAfterHeading: 'Before and After: Real Cold Call Rewrites',
  beforeAfterSubheading:
    'The difference between a hung up call and a booked meeting is usually these five changes.',

  beforeAfterRow1Label: 'Opening Line',
  beforeAfterRow1Bad: '"Hi, how are you doing today?"',
  beforeAfterRow1Good:
    "\"Hi Sarah, this is Louie with Sales Getters. I know you weren't expecting my call.\"",

  beforeAfterRow2Label: 'Reason for Call',
  beforeAfterRow2Bad:
    '"I wanted to reach out and see if we could schedule a quick call to discuss your sales needs."',
  beforeAfterRow2Good:
    '"I noticed you just hired your third salesperson. That stage usually creates pipeline issues most founders do not see coming."',

  beforeAfterRow3Label: 'Value Statement',
  beforeAfterRow3Bad:
    '"We help companies like yours improve their sales results through our proven methodology."',
  beforeAfterRow3Good:
    '"I help B2B founders at $2M to $8M ARR build the sales processes that let them step out of every deal."',

  beforeAfterRow4Label: 'Permission Ask',
  beforeAfterRow4Bad: '"Do you have a few minutes to chat about your goals?"',
  beforeAfterRow4Good:
    '"Can I take 30 seconds to explain why I called, and you can tell me if it makes sense to keep talking?"',

  beforeAfterRow5Label: 'Close',
  beforeAfterRow5Bad: '"Great. I will send you a calendar invite for sometime next week."',
  beforeAfterRow5Good:
    '"I have Tuesday at 2 PM or Thursday at 10 AM open. Which works better, or would you prefer a different time?"',

  // Compare table
  compareHeading: 'Cold Call vs. Cold Email',
  compareSubheading:
    'Both channels work. They work differently. Knowing which is right for which target makes both more effective.',

  compareRow1Label: 'Connect Rate',
  compareRow1Call: '8 to 12 percent of dials',
  compareRow1Email: '40 percent open rate, 3 to 5 percent reply',

  compareRow2Label: 'Meeting Conversion',
  compareRow2Call: '2 to 4 percent of dials become meetings',
  compareRow2Email: '0.5 to 1.5 percent of sends become meetings',

  compareRow3Label: 'Time per Touch',
  compareRow3Call: '2 to 5 minutes per dial including dispositioning',
  compareRow3Email: '30 seconds per send at scale',

  compareRow4Label: 'Conversation Quality',
  compareRow4Call: 'Real time, hear tone, can adapt and ask questions',
  compareRow4Email: 'One way, no read on tone, harder to qualify quickly',

  compareRow5Label: 'Where It Fits',
  compareRow5Call: 'Best for high value targets and warm follow ups',
  compareRow5Email: 'Best for top of funnel volume and reach across an ICP',

  // About
  aboutBio1:
    "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
  aboutBio2:
    'I have made tens of thousands of cold calls across 5 decades, and I have coached hundreds of salespeople through the same fear of picking up the phone. The pattern that wins is always the same. Lead with something specific. Acknowledge the awkwardness up front. Ask permission for 30 seconds. Earn the meeting, do not try to close on the call. The teams I work with usually double their connect to meeting rate inside the first month.',

  // FAQs (5)
  faq1Question: "What's the best opener for a cold call?",
  faq1Answer:
    "The best opener is honest about what the call is, respectful of the prospect's time, and earns the next 30 seconds instead of trying to pitch in the first 10. The pattern that works most consistently sounds like this: name, company, a one sentence reason for the call tied to something specific about the prospect, and a permission ask. \"Hi Sarah, this is Louie with Sales Getters. I know you weren't expecting my call. I noticed you just hired your third salesperson, and I help founders at that stage avoid the most common pipeline issues that come with growth. Do you have 30 seconds for me to explain why I called, and you can tell me if it makes sense to keep talking?\" That structure earns more conversations than any clever line.",

  faq2Question: 'How long should a cold call last?',
  faq2Answer:
    'A cold call has two stages, and each has a different target length. The opening conversation, where you earn the right to a real meeting, should run 3 to 7 minutes. Your goal is not to sell. It is to confirm relevance and book a longer conversation on the calendar. The follow up meeting, the one you booked from the cold call, should run 20 to 30 minutes. Founders who try to close on the cold call almost always lose the deal. The cold call earns the meeting. The meeting earns the deal.',

  faq3Question: 'What time of day should I make cold calls?',
  faq3Answer:
    'Two windows work best for B2B founders calling other founders or executives. Early morning, 7:30 to 9:00 AM local time, catches people before their day fills up and before gatekeepers arrive. Late afternoon, 4:00 to 5:30 PM local time, catches people winding down when meetings have ended. Avoid Mondays before 10 AM and Friday afternoons after 3 PM. Tuesday, Wednesday, and Thursday consistently produce the highest connect rates. If you can only call during one window, pick early morning. The voicemails you leave at 7:45 AM get returned more often than the ones you leave at 2 PM.',

  faq4Question: 'How do I get past the gatekeeper on a cold call?',
  faq4Answer:
    "Treat the gatekeeper as a person, not an obstacle. Use their name. Be direct about who you are and why you are calling. \"Hi, this is Louie Bernstein. Is Sarah available?\" works better than vague corporate speak. If asked what the call is regarding, give a specific honest answer that does not sound like a pitch. \"I help founders at her stage build sales processes, and I wanted to ask her a question about how her sales team is structured.\" If the gatekeeper says she is not available, ask when a better time would be, and ask for her direct line or extension. Build rapport with gatekeepers. They remember the people who treat them well, and they often become the reason you get the meeting.",

  faq5Question: 'Is cold calling still effective in 2026?',
  faq5Answer:
    'Yes. Cold calling has actually become more effective in the last three years because most salespeople have abandoned it for email and LinkedIn. The inbox is crowded. The phone is quieter than it has been in a decade. A good cold caller working a clean list can connect with 8 to 12 percent of dials and book meetings on 2 to 4 percent of connects. That is dramatically better than the reply rates on cold email, and the conversations are higher quality. Cold calling is not dead. It is one of the few outbound channels where effort still creates outsized results, because so few people are willing to do it well.',

  // CTA
  ctaHeadline: 'Want Me to Listen to Your Team Cold Call?',
  ctaDescription:
    'In 30 minutes I can review recordings of your current cold calls, point out the specific lines killing your connect rate, and rewrite the openers using the structure that consistently books meetings.',
  ctaButton: 'Book a Free 30-Minute Call',
}

async function main() {
  console.log(`Upserting section: ${SECTION}`)
  console.log(`Field count: ${Object.keys(content).length}`)

  const { error } = await supabase
    .from('site_content')
    .upsert({ section: SECTION, content }, { onConflict: 'section' })

  if (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }

  // Verify
  const { data, error: fetchErr } = await supabase
    .from('site_content')
    .select('section, content')
    .eq('section', SECTION)
    .single()

  if (fetchErr) {
    console.error('Verify error:', fetchErr.message)
    process.exit(1)
  }

  const populated = Object.keys(data.content || {}).filter((k) => data.content[k]).length
  console.log(`✓ Verified ${populated}/${Object.keys(content).length} fields populated in Supabase.`)
  console.log(`Done.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
