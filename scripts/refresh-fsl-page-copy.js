/**
 * Refresh /fractional-sales-leader copy — content + FAQs.
 *
 * NO structural changes. NO touching the videos table, playlistId, layout,
 * SEO image, or visibility flags. Just sharper copy aimed at $1M–$10M ARR
 * founders stuck in founder-led sales.
 *
 * FAQ rows are UPDATED by id so display_order, page, and timestamps survive.
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/refresh-fsl-page-copy.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// ────────────────────────────────────────────────────────────────────
// SITE CONTENT (section='fslPage')
// Merge-style update — only the keys below get replaced; everything
// else on the row (playlistId, layout, seoImage, visible) is preserved.
// ────────────────────────────────────────────────────────────────────

const contentUpdates = {
  // ── SEO ──
  seoTitle: 'What Is a Fractional Sales Leader? | Louie Bernstein',
  seoDescription:
    "A Fractional Sales Leader is embedded sales leadership for founders at $1M–$10M ARR who are stuck running every deal themselves. I install the playbook, the pipeline discipline, and the team — at roughly 25% of the cost of a full-time VP of Sales.",

  // ── Hero ──
  headline: 'What Is a Fractional Sales Leader?',
  tagline:
    "Embedded sales leadership for founders at $1M–$10M ARR who are stuck running every deal themselves — at roughly 25% of the cost of a full-time VP of Sales.",

  // ── Intro (long-form, supports HTML) ──
  introHook:
    "<b>You built this company from nothing.</b><br>Now you are stuck running every sales call when you should be running the business.",

  introParagraph1:
    "<p>The climb from $1M to $10M ARR is where founder-led sales quietly stops scaling. You know roughly what good looks like. You know you cannot keep being the closer. But hiring a $400K full-time VP of Sales into a company without a playbook, without a clean CRM, and without an accountability system is a coin flip — and the data says it loses about 70% of the time inside eighteen months. <b>There is a middle path that does not bet the runway on a single hire.</b></p>",

  introParagraph2:
    "<p>A Fractional Sales Leader is that middle path. You get an experienced sales executive — someone who has built teams, closed deals, and scaled multiple companies — embedded part-time in your business. Not a consultant who hands you a strategy deck and disappears. Not a $400K VP you cannot afford to be wrong about. Embedded leadership that runs the function until it runs without them.</p><p>I have been a Fractional Sales Leader since 2017, working with 50+ companies in the $1M–$10M ARR range. Before that I scaled my own company from zero to the INC 500. I have seen what works at this stage and what does not.</p><p><a href=\"https://louiebernstein.com/fractional-sales-leader-vs-consultant\" target=\"_self\">See how a Fractional Sales Leader is different from a consultant →</a></p>",

  introParagraph3:
    "<p><b>What I actually do, week by week:</b> install the Sales Playbook, fix the pipeline and the CRM, define qualification criteria your reps actually use, hire your first two or three scalable sellers, coach them through their ramp, and run the weekly forecast meeting until the founder no longer has to. The deliverable is not advice. It is a working sales function — one a future full-time VP can step into and run.</p>",

  introParagraph4:
    "<p>Most engagements run six to twelve months and end the same way: the founder is out of every deal, the team is hitting quota without me, and the company is finally ready to hire a permanent leader to run a machine that already produces revenue.</p><p>Watch the videos below or read the&nbsp;<a href=\"https://louiebernstein.com/faqs\" target=\"_self\">FAQs</a> — then decide if this model fits where your company is right now.</p>",

  // ── Section titles ──
  videosSectionHeadline: 'Five Questions Every Founder Should Ask',
  videosSectionSubheadline:
    "If you are weighing whether a Fractional Sales Leader fits your business, start here. Five short videos answering the questions founders ask me most.",
  videosPlaylistButtonText: 'Watch the Full Playlist on YouTube',

  faqSectionHeadline: 'Frequently Asked Questions',
  faqSectionSubheadline:
    'The questions $1M–$10M ARR founders most often have before bringing in fractional sales leadership.',

  introCtaNote:
    'Thirty minutes. No pitch. Just a conversation about whether this model fits your situation.',

  // ── Final CTA ──
  finalCtaHeadline: 'Ready to Stop Being the Sales Bottleneck?',
  finalCtaButtonText: 'Schedule a 30-Minute Call',
  finalCtaDescription:
    "Let's talk through where your sales function is today, what is missing, and whether a Fractional Sales Leader is the right next move — or whether something else is. No pressure either way.",
  finalCtaSecondaryText: 'Back to Home',
}

// ────────────────────────────────────────────────────────────────────
// FAQs — updated BY ID so display_order/page/timestamps are preserved.
// (Captured from the current Supabase rows.)
// ────────────────────────────────────────────────────────────────────

const faqUpdates = [
  {
    id: 'ece78564-841a-40c8-8409-3148d24b35bf',
    question: 'What does a Fractional Sales Leader actually do?',
    answer:
      "A Fractional Sales Leader is an experienced sales executive embedded in your business part-time — typically two or three days a week, for six to twelve months. The work is hands-on, not advisory: install a Sales Playbook your team actually runs, fix the CRM and the pipeline, define qualification criteria, hire and onboard the first two or three scalable reps, coach them through their ramp, and run the weekly pipeline and forecast cadence. You get the capability of a VP of Sales without the $400K all-in cost or the 12-month bet on a single hire. I have been doing this since 2017 with 50+ companies in the $1M–$10M ARR range.",
  },
  {
    id: 'd2014d8e-09a0-4b87-8971-1d1f75a0aea9',
    question: 'When should I hire a Fractional Sales Leader?',
    answer:
      "The sweet spot is $1M–$10M ARR, founder-led sales, and either stalled growth or growth that depends entirely on the founder being in every deal. You have proven product-market fit. You are closing deals. But there is no playbook, no clean pipeline, and no one running the cadence beside you. You are not ready to bet $400K on a full-time VP. That is exactly when fractional leadership pays back — usually within the first one or two new deals it helps close.",
  },
  {
    id: 'e966dd6f-fd31-4686-b354-0589feae4923',
    question: 'What is fractional sales management — and how is it different from consulting or coaching?',
    answer:
      "Fractional sales management is an experienced sales leader engaged part-time, on contract, to design, install, and run the sales function — not to advise on it. The leader is embedded inside the business and accountable for outcomes: quota attainment, pipeline coverage, close rate, ramp time on new reps. They build or fix the strategy, the process from first contact to close, the pipeline stages, the forecast, the CRM, and the team. It is not consulting (consultants leave after the deck). It is not coaching (coaches do not own execution). It is leadership applied for the slice of time the business actually needs — at $1M–$10M ARR, that is almost never full-time. The outcome is a repeatable sales system, a team that can sell without the founder, and a predictable forecast.",
  },
  {
    id: '1e6495b9-f941-4130-9b98-67b3a13670dd',
    question: 'Who benefits most from fractional sales management?',
    answer:
      "Founders and CEOs at $1M–$10M ARR who are stuck in founder-led sales. Companies in transition between scrappy early-stage selling and a fully-built sales organization. Businesses that need senior sales leadership — building processes, hiring the right reps, holding people accountable — but that cannot justify a $400K full-time VP yet, and have seen consultants deliver decks that nobody implemented. Common triggers: stalled growth, inconsistent forecast, the founder is the bottleneck in every deal, the first sales hires are underperforming, or a board is pushing for sales leadership before the company can afford the full-time version.",
  },
  {
    id: '896bccbe-829b-4e63-851b-6a69ce66a845',
    question: 'Why do founders pick fractional sales leadership over a full-time hire?',
    answer:
      "Five reasons that show up in almost every engagement:\n\n• Cost efficiency — senior leadership at roughly 25% of the all-in cost of a full-time VP of Sales\n• Speed — week-one impact, no six-month recruiting cycle, no six-month ramp\n• Flexibility — scale involvement up or down as the business changes\n• Objectivity — an outside operator who can diagnose what founders are too close to see\n• Lower risk — easier to expand or exit than a full-time hire if the situation changes\n\nThe shorthand: same capability, lower commitment, faster impact.",
  },
  {
    id: '5c955812-7ae9-40a7-9be3-20c8d13badfe',
    question: 'Can a Fractional Sales Leader help me hire my first sales reps?',
    answer:
      "Yes — and most engagements include it. The fractional leader writes the job description, runs the search, screens candidates against a hiring scorecard, runs the interview loop using a structured 120+ question library tailored for sales roles, and makes the recommendation. The founder still makes the final call. The point is to avoid the most expensive mistake at this stage: hiring a 'mini-me' who replicates the founder's style instead of an operator who runs the playbook. A bad first sales hire costs $200K+ all-in and twelve months of lost pipeline. Getting it right is worth doing slowly.",
  },
  {
    id: '571b8320-8203-4867-9a51-d3f614a11422',
    question: 'What is fractional sales leadership typically used for?',
    answer:
      "Most often as the bridge between founder-led sales and a full-time VP of Sales. The fractional leader installs the infrastructure — playbook, pipeline, qualification criteria, accountability system — and runs the team through the first six to twelve months of structured execution. By the time the engagement ends, the founder is out of every deal, the team is hitting quota without them, and the company is ready to hire a permanent leader to run a machine that already works. Some founders extend the engagement past that point. Some never need to hire the full-time version at all.",
  },
  {
    id: 'e30b4b5c-2d46-499b-b73d-08514979cb0f',
    question: "I'm not sure I can afford this right now. What should I do?",
    answer:
      "Run the actual math, not the gut math. The cost of a founder stuck in every deal — at $200/hour of opportunity cost, on tasks a $30/hour ops person could do — is almost always higher than the monthly fee for a Fractional Sales Leader. Add the cost of a stalled forecast, a slow ramp on the reps you have already hired, and the deals that did not close because nobody was running the cadence. The right comparison is not 'fractional leader vs. nothing.' It is 'fractional leader vs. another twelve months of the current situation.' That comparison usually flips the answer.",
  },
  {
    id: '08691732-cbec-4584-8f32-f976222bb9fc',
    question: 'What if I lose control of the culture by bringing in outside help?',
    answer:
      "A good fractional leader does the opposite — they reinforce your culture by installing systems that reflect your values. You still own the vision, the brand, and the standards. They own the operating cadence that makes those standards repeatable when you are not in the room. Most founders find the engagement actually strengthens the culture, because for the first time it survives outside of one person's head.",
  },
]

// ────────────────────────────────────────────────────────────────────
// EXECUTE
// ────────────────────────────────────────────────────────────────────

async function refreshContent() {
  // Merge with existing row to preserve playlistId, layout, visible, seoImage.
  const { data: existing, error: fetchErr } = await supabase
    .from('site_content')
    .select('content')
    .eq('section', 'fslPage')
    .single()

  if (fetchErr) {
    console.error('❌ Could not fetch existing fslPage content:', fetchErr.message)
    return
  }

  const merged = { ...(existing?.content || {}), ...contentUpdates }

  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'fslPage', content: merged }, { onConflict: 'section' })

  if (error) {
    console.error('❌ site_content fslPage:', error.message)
  } else {
    console.log('✅ site_content fslPage — refreshed', Object.keys(contentUpdates).length, 'keys')
  }
}

async function refreshFaqs() {
  for (const faq of faqUpdates) {
    const { error } = await supabase
      .from('faq_items')
      .update({ question: faq.question, answer: faq.answer })
      .eq('id', faq.id)
    if (error) {
      console.error(`❌ faq_items ${faq.id}:`, error.message)
    } else {
      console.log(`✅ faq_items ${faq.id.slice(0, 8)} — ${faq.question.slice(0, 60)}…`)
    }
  }
}

async function main() {
  await refreshContent()
  await refreshFaqs()
  console.log('Done.')
}

main()
