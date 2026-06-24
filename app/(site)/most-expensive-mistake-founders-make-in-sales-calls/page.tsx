'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-06'
const CMS_SECTION = 'seoExpensiveSalesCallMistake'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function ExpensiveSalesCallMistakePage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "The most expensive mistake on a sales call isn't a weak pitch or a bad close. It's that you stop listening the moment you think you know where the prospect is going, and you start drafting your reply while they're still talking."),
    v('takeaway2', "When you listen to reply instead of listening to understand, you answer the objection you expected instead of the one they actually have. That's how winnable deals quietly slip away."),
    v('takeaway3', "Founders are the worst offenders. You know the product cold, you've heard the question a hundred times, so your brain jumps ahead. The prospect feels it, and the trust you needed to close evaporates."),
    v('takeaway4', "The fix is a discipline, not a personality trait. A short pause, a confirming question, and a habit of taking notes instead of forming rebuttals will change your close rate more than any new script."),
    v('takeaway5', "This is the first thing I install when I take over a founder-led sales motion. It's also the first thing a Fractional Sales Leader can teach a team so the company stops depending on the founder's instincts to win."),
  ]

  const costs = [
    {
      number: '01',
      title: v('cost1Title', 'You Miss the Buying Signal They Just Handed You'),
      detail: v('cost1Detail', "Prospects tell you how to sell to them. They mention the deadline, the budget cycle, the executive who has to sign off, the competitor they're frustrated with. Those are the exact words that close the deal. But if you're rehearsing your next line, you hear the sentence and miss the signal inside it. You move on to your point instead of pulling the thread they just offered you. The single most valuable information on the call walks right past you."),
      fix: v('cost1Fix', "Treat every detail a prospect volunteers as a thread to pull, not a pause to fill. When they mention a deadline or a frustration, stop and ask one more question about it before you say anything else."),
    },
    {
      number: '02',
      title: v('cost2Title', 'You Answer the Objection You Expected, Not the One They Have'),
      detail: v('cost2Detail', "You've heard \"it's too expensive\" so many times that the second a prospect hesitates on price, you launch the value defense you've used for years. The problem is that this prospect wasn't worried about price. They were worried about implementation time, or whether their team would actually adopt it. You just answered a question they didn't ask, and now they're sure you weren't listening. The real objection never gets surfaced, so it never gets handled."),
      fix: v('cost2Fix', "Before you respond to any concern, repeat it back in your own words and ask if you've got it right. You'll be surprised how often the real objection is one layer beneath the one you assumed."),
    },
    {
      number: '03',
      title: v('cost3Title', 'The Prospect Feels Unheard, and Quietly Checks Out'),
      detail: v('cost3Detail', "People can tell when you're waiting for your turn to talk instead of actually listening. They feel the small interruptions, the answer that arrives a beat too fast, the way you steer back to your script. It reads as \"this person cares about their pitch, not my problem.\" That's the moment rapport dies. They won't argue with you. They'll just get polite, go quiet, and stop returning your emails. You'll call it ghosting. It started on the call."),
      fix: v('cost3Fix', "Let there be a full second of silence after the prospect finishes a thought. The pause signals you're considering what they said, and it almost always pulls more useful information out of them."),
    },
    {
      number: '04',
      title: v('cost4Title', "You Pitch Features They Never Asked About"),
      detail: v('cost4Detail', "When you're planning your reply, you default to your favorite talking points instead of the ones that matter to this buyer. So you spend ten minutes on the integration they'll never use and skip the one capability that would have closed them. A great pitch isn't the one that covers everything. It's the one that connects your product to the specific problem the prospect described, in their words, two minutes ago. You can't do that if you weren't listening to those two minutes."),
      fix: v('cost4Fix', "Build your pitch live, from their words. Note the three things they said matter most, then speak only to those. Save the full feature tour for the prospects who ask for it."),
    },
    {
      number: '05',
      title: v('cost5Title', "You Lose the One Question That Would've Moved the Deal"),
      detail: v('cost5Detail', "The best question on any sales call is the one that comes directly from what the prospect just said. It can't be scripted, because it depends on their last sentence. That's the question that uncovers the real decision criteria, the hidden stakeholder, the actual timeline. But if your attention was on composing your response, that question never forms. You ask a generic next question from your list, the conversation flattens, and the deal stays exactly as stuck as it was when the call started."),
      fix: v('cost5Fix', "Make your next question a reaction, not a recital. The phrase \"tell me more about that\" buys you time and almost always advances the deal further than the question you had queued up."),
    },
  ]

  const comparisonRows = [
    {
      reply: v('compare1Reply', 'Rehearsing your response while they talk'),
      understand: v('compare1Understand', 'Taking notes on what they actually said'),
    },
    {
      reply: v('compare2Reply', 'Answering the objection you expected'),
      understand: v('compare2Understand', 'Confirming the real concern before responding'),
    },
    {
      reply: v('compare3Reply', 'Filling every silence with your pitch'),
      understand: v('compare3Understand', 'Letting a pause draw out more information'),
    },
    {
      reply: v('compare4Reply', 'Covering your favorite features'),
      understand: v('compare4Understand', "Speaking only to the buyer's stated priorities"),
    },
    {
      reply: v('compare5Reply', 'Asking the next question from your list'),
      understand: v('compare5Understand', 'Asking the question their last answer created'),
    },
    {
      reply: v('compare6Reply', 'Prospect feels pitched and goes quiet'),
      understand: v('compare6Understand', 'Prospect feels understood and stays engaged'),
    },
  ]

  const fixSteps = [
    {
      number: '01',
      title: v('fix1Title', 'Take Notes Instead of Forming Rebuttals'),
      detail: v('fix1Detail', "Your hands and your head can't do two things at once, and that's the point. When you're writing down what the prospect says, you physically can't be drafting your comeback at the same time. Capture their exact words, the deadline, the frustration, the name of the person who signs. Those notes become the spine of your follow-up and your pitch. The act of writing forces you back into listening, which is the whole game."),
    },
    {
      number: '02',
      title: v('fix2Title', 'Pause, Then Confirm Before You Respond'),
      detail: v('fix2Detail', "Build a two-step habit into every answer. First, a beat of silence after they stop. Second, a quick paraphrase: \"So what I'm hearing is the real issue is adoption, not price. Did I get that right?\" That single sentence does two things at once. It proves you were listening, and it forces the prospect to either confirm or correct you. Either way, you're now solving the actual problem instead of the one you guessed at."),
    },
    {
      number: '03',
      title: v('fix3Title', 'Make Your Next Question Come From Their Last Answer'),
      detail: v('fix3Detail', "Stop running your discovery list like a checklist. The strongest move on any call is to take the last thing the prospect said and go one level deeper. \"You mentioned the rollout stalled last time. What happened?\" That question can't be pre-written, which is exactly why it works. It tells the prospect you're actually in the conversation with them, and it surfaces the information that scripted questions never reach."),
    },
  ]

  const defaultFaqs = [
    {
      q: "Why is planning my reply during a sales call such a big deal?",
      a: "Because the information that closes the deal is in what the prospect says, and you can't hear it while you're composing your answer. When you listen to reply instead of to understand, you miss buying signals, answer the wrong objection, and ask weaker questions. None of it looks like a mistake in the moment. It just shows up later as a deal that went quiet for no obvious reason. Over a quarter, that's a lot of winnable revenue lost to a habit you didn't know you had.",
    },
    {
      q: "Why are founders especially prone to this?",
      a: "Founders know the product better than anyone, and they've answered the same questions hundreds of times. So the brain jumps ahead. You hear the first half of a sentence, you assume you know the rest, and you start preparing your response. That confidence is exactly what makes the habit dangerous. The prospect can feel that you've already decided what they mean, and it costs you the trust you needed to close. It's also why a sales motion built only on founder instinct is so hard to hand off to a team.",
    },
    {
      q: "How do I stop planning my reply without losing the thread of the conversation?",
      a: "Take notes. When you're writing down the prospect's exact words, you can't draft your rebuttal at the same time, and your notes hold the thread for you so you don't have to keep it in your head. Then add a one-second pause and a quick paraphrase before you respond. The pause feels long to you and natural to them, and the paraphrase proves you heard them. Those two small habits do more for your close rate than any new script.",
    },
    {
      q: "Is this just a discovery-call problem, or does it show up everywhere?",
      a: "It shows up on every call, but it's most expensive on discovery and on objection handling. On discovery, planning your reply means you never uncover the real decision criteria. On objection handling, it means you answer the concern you expected instead of the one they actually raised. Both are the same root habit: listening to respond instead of listening to understand. Fix the habit and both calls get better at the same time.",
    },
    {
      q: "How does a Fractional Sales Leader fix this across a whole team?",
      a: "I make it a coachable, measurable habit instead of a personality trait. We listen to recorded calls together and mark the exact moments a rep started planning their reply instead of listening. We build the pause-and-confirm step into the call framework, and we put note-taking discipline into the playbook so it survives past any one rep. The goal is a team that consistently hears what the buyer is saying, so the company stops depending on the founder being the only person in the room who listens well.",
    },
  ]

  const displayFaqs = cmsfaqs(5, defaultFaqs)

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: displayFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'Article',
        headline: 'The Most Expensive Mistake Founders Make in Sales Calls',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/most-expensive-mistake-founders-make-in-sales-calls',
        datePublished: '2026-06-24',
        publisher: {
          '@type': 'Organization',
          name: 'Louie Bernstein',
          logo: { '@type': 'ImageObject', url: 'https://louiebernstein.com/logo/og-image.png' },
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <HeroBackground accentColor="#1d4ed8" fillColor="rgba(29,78,216,0.3)" className="bg-slate-950">
        <div className="px-6 pb-20 pt-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400"
            >
              {v('heroTag', 'Sales Conversations')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'The Most Expensive Mistake Founders Make')}
              <span className="block text-blue-400">{v('heroAccent', 'in Sales Calls?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', "Planning their reply while the prospect is still talking. Here's why:")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "For $1M–$10M ARR founders still running their own sales calls. The information that closes the deal is in what the prospect says. You can't hear it while you're rehearsing your answer. Here's what it costs you, and how to fix it.")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-700 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-800"
              >
                Talk to Louie — 30 Minutes
              </Link>
              <Link
                href="/how-to-run-a-discovery-call"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to run a discovery call that moves deals →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-sm font-bold uppercase tracking-widest text-blue-800"
            >
              {v('takeawaysHeading', 'Key Takeaways')}
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              {takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-neutral-700">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* What It Costs You — 5 numbered cards */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionCostsHeading', 'What Planning Your Reply Actually Costs You')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCostsSubheading', "Five ways the same habit quietly loses deals you could have won. Each one has a fix you can use on your next call.")}
            </motion.p>
            <div className="space-y-8">
              {costs.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">The Fix: </span>
                    <span className="text-blue-800">{item.fix}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraphs */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara1', "Most founders think the expensive mistakes in sales happen at the close. They don't. They happen in the middle of the call, in the quiet moments where you should be listening and you're busy building your answer instead. You know the product better than anyone alive, so your brain races ahead of the prospect's sentence. That confidence feels like competence. To the buyer, it reads as someone who already decided what they need and stopped paying attention. That's the most expensive thing you can do on a call, because it loses deals that were yours to win.")}{' '}
              <Link href="/how-to-run-a-discovery-call" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                It shows up most on the discovery call →
              </Link>
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The fix isn't a new script or a slicker pitch. It's a discipline: take notes instead of forming rebuttals, pause before you respond, and confirm the real concern before you answer it. That last habit is also the difference between handling the objection in front of you and handling the one you assumed. If your reps are losing deals to concerns they never actually surfaced, the problem usually starts here, with listening to reply instead of listening to understand.")}{' '}
              <Link href="/b2b-sales-objection-handling" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                It's the root of most botched objection handling →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionCompareHeading', 'Listening to Reply vs. Listening to Understand')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "Same call, same prospect. The only thing that changes is where your attention is.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Listening to Reply')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Listening to Understand')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.reply}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.understand}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How to Fix It — 3 steps */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-center font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('sectionFixHeading', 'How to Stop Planning Your Reply')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionFixSubheading', "Three habits you can use on your very next call. None of them require a new script. All of them require you to stay in the conversation.")}
            </motion.p>
            <div className="space-y-8">
              {fixSteps.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="text-neutral-700">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-white p-8"
          >
            <motion.h2 variants={itemVariants} className="mb-4 font-serif text-2xl font-bold text-neutral-900">
              About Louie Bernstein
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-3 text-neutral-700">
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I've sat in on thousands of sales calls, and the habit on this page is the one I catch the most. It's also the easiest to fix once you can see it. When I take over a founder-led sales motion, teaching the team to listen to understand instead of listening to reply is one of the first things that moves the close rate, and it's a skill that stays with the company long after I'm gone.")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 text-center font-serif text-3xl font-bold text-neutral-900"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {displayFaqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-neutral-50 py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="mb-6 font-serif text-xl font-bold text-neutral-900">
              Related Reading
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
              <li>
                <Link href="/how-to-run-a-discovery-call" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Run a Sales Discovery Call That Moves Deals Forward →
                </Link>
              </li>
              <li>
                <Link href="/b2b-sales-objection-handling" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  B2B Sales Objection Handling: 7 Common Objections →
                </Link>
              </li>
              <li>
                <Link href="/how-to-close-deals-without-discounting" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Close More Deals Without Discounting →
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-10 text-white md:py-14">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl"
            >
              {v('ctaHeadline', 'Want to Hear What Your Calls Are Missing?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can listen to how your team runs a call, show you where they're planning their reply instead of listening, and give you the habits that change it. No pitch, just a clear read on what's costing you deals.")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                Book a Free 30-Minute Call
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
