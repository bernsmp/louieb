'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-04'
const CMS_SECTION = 'seoHowToMakeColdCall'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const faqs = [
  {
    q: "What's the best opener for a cold call?",
    a: "The best opener is honest about what the call is, respectful of the prospect's time, and earns the next 30 seconds instead of trying to pitch in the first 10. The pattern that works most consistently sounds like this: name, company, a one sentence reason for the call tied to something specific about the prospect, and a permission ask. \"Hi Sarah, this is Louie with Sales Getters. I know you weren't expecting my call. I noticed you just hired your third salesperson, and I help founders at that stage avoid the most common pipeline issues that come with growth. Do you have 30 seconds for me to explain why I called, and you can tell me if it makes sense to keep talking?\" That structure earns more conversations than any clever line.",
  },
  {
    q: "How long should a cold call last?",
    a: "A cold call has two stages, and each has a different target length. The opening conversation, where you earn the right to a real meeting, should run 3 to 7 minutes. Your goal is not to sell. It is to confirm relevance and book a longer conversation on the calendar. The follow up meeting, the one you booked from the cold call, should run 20 to 30 minutes. Founders who try to close on the cold call almost always lose the deal. The cold call earns the meeting. The meeting earns the deal.",
  },
  {
    q: "What time of day should I make cold calls?",
    a: "Two windows work best for B2B founders calling other founders or executives. Early morning, 7:30 to 9:00 AM local time, catches people before their day fills up and before gatekeepers arrive. Late afternoon, 4:00 to 5:30 PM local time, catches people winding down when meetings have ended. Avoid Mondays before 10 AM and Friday afternoons after 3 PM. Tuesday, Wednesday, and Thursday consistently produce the highest connect rates. If you can only call during one window, pick early morning. The voicemails you leave at 7:45 AM get returned more often than the ones you leave at 2 PM.",
  },
  {
    q: "How do I get past the gatekeeper on a cold call?",
    a: "Treat the gatekeeper as a person, not an obstacle. Use their name. Be direct about who you are and why you are calling. \"Hi, this is Louie Bernstein. Is Sarah available?\" works better than vague corporate speak. If asked what the call is regarding, give a specific honest answer that does not sound like a pitch. \"I help founders at her stage build sales processes, and I wanted to ask her a question about how her sales team is structured.\" If the gatekeeper says she is not available, ask when a better time would be, and ask for her direct line or extension. Build rapport with gatekeepers. They remember the people who treat them well, and they often become the reason you get the meeting.",
  },
  {
    q: "Is cold calling still effective in 2026?",
    a: "Yes. Cold calling has actually become more effective in the last three years because most salespeople have abandoned it for email and LinkedIn. The inbox is crowded. The phone is quieter than it has been in a decade. A good cold caller working a clean list can connect with 8 to 12 percent of dials and book meetings on 2 to 4 percent of connects. That is dramatically better than the reply rates on cold email, and the conversations are higher quality. Cold calling is not dead. It is one of the few outbound channels where effort still creates outsized results, because so few people are willing to do it well.",
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'Article',
      headline: 'How to Make a Cold Call (That Actually Books Meetings)',
      author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
      url: 'https://louiebernstein.com/how-to-make-a-cold-call',
    },
  ],
}

export default function HowToMakeColdCallPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)
  const displayFaqs = cmsfaqs(5, faqs)

  const openers = [
    {
      line: 'Opener 1',
      label: v('opener1Label', 'The Pattern Interrupt'),
      detail: v('opener1Detail', "This opener acknowledges the awkwardness of the cold call up front. It works because it is honest, and honesty is rare in the first 10 seconds of a sales call. The pattern interrupt resets the prospect's defensive posture and earns you the chance to make your point. It is the single highest converting opener I have used across thousands of dials, and it is what I teach every salesperson on day one."),
      example: v('opener1Example', '"Hi Sarah, this is Louie with Sales Getters. I know you weren\'t expecting my call. Can I take 30 seconds to explain why I dialed, and you can tell me if it is worth keeping the conversation going?"'),
    },
    {
      line: 'Opener 2',
      label: v('opener2Label', 'The Specific Trigger'),
      detail: v('opener2Detail', "This opener references something specific about the prospect that proves you did your research. A funding announcement, a job posting, a piece of content they published, or a hiring milestone. Specificity is the antidote to feeling spammed. When the prospect hears something true about their company in the first sentence, they assume the rest of the call is going to be relevant too. They are usually right."),
      example: v('opener2Example', '"Hi Sarah, this is Louie. I saw that you just expanded your sales team to seven salespeople. That is the exact stage where most founders stop being able to forecast accurately, and I have a quick observation about why. Can I share it?"'),
    },
    {
      line: 'Opener 3',
      label: v('opener3Label', 'The Permission Question'),
      detail: v('opener3Detail', "This opener gives the prospect explicit control over the conversation. Most salespeople are afraid of asking permission because they think the prospect will say no. The opposite is true. When you ask permission, the prospect feels respected, and they almost always say yes. The question is not whether you ask permission. It is what you ask permission for. Asking for 30 seconds works. Asking for 5 minutes does not."),
      example: v('opener3Example', '"Hi Sarah, this is Louie with Sales Getters. I have a specific reason I called you today, and it should take me less than 30 seconds to explain. Is now a bad time?"'),
    },
    {
      line: 'Opener 4',
      label: v('opener4Label', 'The Curiosity Hook'),
      detail: v('opener4Detail', "This opener leads with a question or observation that creates intrigue without revealing the pitch. The goal is to make the prospect think, then ask a follow up question. The mistake most salespeople make is trying to be clever instead of relevant. Curiosity only works when it is rooted in something the prospect actually cares about. If your hook is generic, it sounds like a marketing email read out loud, and the prospect hangs up."),
      example: v('opener4Example', '"Hi Sarah, this is Louie. Quick question. When you look at your top three salespeople, do you know what specifically makes them better than the next three? Most founders I talk to think they know, and they are usually wrong. That is actually why I called."'),
    },
    {
      line: 'Opener 5',
      label: v('opener5Label', 'The Referral Bridge'),
      detail: v('opener5Detail', "This opener uses a real connection or shared context to create immediate trust. It is the single highest converting opener available, and it works because the prospect is no longer hearing from a stranger. They are hearing from someone connected to a person or context they recognize. Never fake a referral. The damage from a fake referral is permanent, and it is not worth the meeting. When you have a real one, lead with it."),
      example: v('opener5Example', '"Hi Sarah, this is Louie with Sales Getters. Mark Johnson at Acme suggested I reach out. He mentioned you are scaling your sales team and might be looking at the same kind of process work I helped him build last year. Did he mention I might call?"'),
    },
  ]

  const beforeAfter = [
    {
      label: v('beforeAfterRow1Label', 'Opening Line'),
      bad: v('beforeAfterRow1Bad', '"Hi, how are you doing today?"'),
      good: v('beforeAfterRow1Good', '"Hi Sarah, this is Louie with Sales Getters. I know you weren\'t expecting my call."'),
    },
    {
      label: v('beforeAfterRow2Label', 'Reason for Call'),
      bad: v('beforeAfterRow2Bad', '"I wanted to reach out and see if we could schedule a quick call to discuss your sales needs."'),
      good: v('beforeAfterRow2Good', '"I noticed you just hired your third salesperson. That stage usually creates pipeline issues most founders do not see coming."'),
    },
    {
      label: v('beforeAfterRow3Label', 'Value Statement'),
      bad: v('beforeAfterRow3Bad', '"We help companies like yours improve their sales results through our proven methodology."'),
      good: v('beforeAfterRow3Good', '"I help B2B founders at $2M to $8M ARR build the sales processes that let them step out of every deal."'),
    },
    {
      label: v('beforeAfterRow4Label', 'Permission Ask'),
      bad: v('beforeAfterRow4Bad', '"Do you have a few minutes to chat about your goals?"'),
      good: v('beforeAfterRow4Good', '"Can I take 30 seconds to explain why I called, and you can tell me if it makes sense to keep talking?"'),
    },
    {
      label: v('beforeAfterRow5Label', 'Close'),
      bad: v('beforeAfterRow5Bad', '"Great. I will send you a calendar invite for sometime next week."'),
      good: v('beforeAfterRow5Good', '"I have Tuesday at 2 PM or Thursday at 10 AM open. Which works better, or would you prefer a different time?"'),
    },
  ]

  const callVsEmail = [
    {
      label: v('compareRow1Label', 'Connect Rate'),
      call: v('compareRow1Call', '8 to 12 percent of dials'),
      email: v('compareRow1Email', '40 percent open rate, 3 to 5 percent reply'),
    },
    {
      label: v('compareRow2Label', 'Meeting Conversion'),
      call: v('compareRow2Call', '2 to 4 percent of dials become meetings'),
      email: v('compareRow2Email', '0.5 to 1.5 percent of sends become meetings'),
    },
    {
      label: v('compareRow3Label', 'Time per Touch'),
      call: v('compareRow3Call', '2 to 5 minutes per dial including dispositioning'),
      email: v('compareRow3Email', '30 seconds per send at scale'),
    },
    {
      label: v('compareRow4Label', 'Conversation Quality'),
      call: v('compareRow4Call', 'Real time, hear tone, can adapt and ask questions'),
      email: v('compareRow4Email', 'One way, no read on tone, harder to qualify quickly'),
    },
    {
      label: v('compareRow5Label', 'Where It Fits'),
      call: v('compareRow5Call', 'Best for high value targets and warm follow ups'),
      email: v('compareRow5Email', 'Best for top of funnel volume and reach across an ICP'),
    },
  ]

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
              {v('heroLabel', 'Outbound Sales')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Make a Cold Call')}
              <span className="block text-blue-400">{v('heroAccent', 'That Actually Books Meetings')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Cold calling is harder than cold email, and it converts at twice the rate. Here is the structure that earns conversations with B2B founders, plus 5 openers that consistently break through, and the rewrites that turn deleted calls into booked meetings.")}
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
                {v('heroPrimaryButton', 'Talk to Louie. 30 Minutes.')}
              </Link>
              <Link
                href="/what-is-a-sales-cadence"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                {v('heroSecondaryLink', 'How cold calls fit into a cadence →')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Key Takeaways */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
                Key Takeaways
              </span>
            </motion.div>
            <motion.ul variants={itemVariants} className="space-y-3 text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway1', "The first 10 seconds of a cold call decide everything. Acknowledge the awkwardness, name yourself clearly, and earn the next 30 seconds with a specific reason for the call.")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway2', "The goal of a cold call is not to close the deal. It is to earn a 20 minute meeting on the calendar, where the real qualification and selling happens.")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway3', "Cold calling converts at roughly 2 to 4x the rate of cold email, and the best windows are 7:30 to 9:00 AM and 4:00 to 5:30 PM, Tuesday through Thursday.")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{v('takeaway4', "Specificity beats cleverness. A real trigger about the prospect's company will outperform any clever opener you can write in advance.")}</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Cold Call Openers That Work (H2) */}
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
              {v('openersHeading', 'Cold Call Openers That Work')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('openersSubheading', 'Five openers that consistently earn the next 30 seconds, with real examples you can adapt to your ICP.')}
            </motion.p>
            <div className="space-y-8">
              {openers.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex flex-wrap items-start gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">{item.line}</span>
                    <h3 className="text-lg font-bold text-neutral-900">{item.label}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">Example: </span>
                    <span className="italic text-blue-800">{item.example}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoParagraph1', "Cold calling is the most underused outbound channel in B2B sales right now. Most $1M to $10M ARR teams have quietly abandoned the phone in favor of email and LinkedIn, and that is exactly why the phone has become a competitive advantage. Decision makers receive 100 cold emails a week, and they receive 1 or 2 cold calls. The conversation you can have in 4 minutes on a call would take 6 weeks to build over email, and a single connect can replace an entire 8 step email sequence.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoParagraph2', "The salespeople who succeed at cold calling are not the ones with the best scripts. They are the ones who treat each call like a conversation, lead with something specific, and ask permission before pitching. Cold calling rewards effort more than any other outbound channel, and it works best when paired with email and LinkedIn in a multi touch cadence. To see how cold calls fit alongside email in a systematic outreach sequence,")}{' '}
              <Link href="/what-is-a-sales-cadence" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                {v('seoParagraph2LinkText', 'read the full cadence guide →')}
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-white py-16 md:py-20">
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
              {v('beforeAfterHeading', 'Before and After: Real Cold Call Rewrites')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('beforeAfterSubheading', 'The difference between a hung up call and a booked meeting is usually these five changes.')}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-3 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold text-neutral-400">Section</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-red-400">Before (Gets Hung Up On)</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">After (Books Meetings)</div>
              </div>
              {beforeAfter.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="px-6 py-4 text-sm font-bold text-neutral-800">{row.label}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm italic text-neutral-500">{row.bad}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm italic text-neutral-800">{row.good}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cold Call vs Cold Email Comparison */}
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
              {v('compareHeading', 'Cold Call vs. Cold Email')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('compareSubheading', 'Both channels work. They work differently. Knowing which is right for which target makes both more effective.')}
            </motion.p>
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <div className="grid grid-cols-3 bg-neutral-900 text-white">
                <div className="px-6 py-4 font-bold text-neutral-400">Metric</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">Cold Call</div>
                <div className="border-l border-neutral-700 px-6 py-4 font-bold text-blue-400">Cold Email</div>
              </div>
              {callVsEmail.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="px-6 py-4 text-sm font-bold text-neutral-800">{row.label}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">{row.call}</div>
                  <div className="border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">{row.email}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-8"
          >
            <motion.h2 variants={itemVariants} className="mb-4 font-serif text-2xl font-bold text-neutral-900">
              About Louie Bernstein
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-3 text-neutral-700">
              {v('aboutBio1', "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I have made tens of thousands of cold calls across 5 decades, and I have coached hundreds of salespeople through the same fear of picking up the phone. The pattern that wins is always the same. Lead with something specific. Acknowledge the awkwardness up front. Ask permission for 30 seconds. Earn the meeting, do not try to close on the call. The teams I work with usually double their connect to meeting rate inside the first month.")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16 md:py-20">
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
                  className="rounded-xl border border-neutral-200 bg-white p-6"
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
      <section className="bg-white py-12 md:py-14">
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
                <Link href="/how-to-write-a-cold-email" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Write a Cold Email That Gets Replies →
                </Link>
              </li>
              <li>
                <Link href="/what-is-a-sales-cadence" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is a Sales Cadence? How to Build One That Books Meetings →
                </Link>
              </li>
              <li>
                <Link href="/how-to-build-outbound-sales-system" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build an Outbound Sales System From Scratch →
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
              {v('ctaHeadline', 'Want Me to Listen to Your Team Cold Call?')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review recordings of your current cold calls, point out the specific lines killing your connect rate, and rewrite the openers using the structure that consistently books meetings.")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-neutral-900 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
              >
                {v('ctaButton', 'Book a Free 30-Minute Call')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
