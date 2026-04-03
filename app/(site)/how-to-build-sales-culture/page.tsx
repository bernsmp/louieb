'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { X } from 'lucide-react'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seoHowToBuildSalesCulture'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HowToBuildSalesCulturePage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const practices = [
    {
      number: '01',
      title: v('practice1Title', 'Build Rituals Around Performance, Not Just Results'),
      detail: v('practice1Detail', "Culture is not built through strategy documents or values posters. It is built through repeated rituals that shape how the team thinks and behaves. The rituals that matter most in a sales team are the ones that happen around performance: the weekly pipeline review, the win celebration, the loss debrief, the monthly one-on-one focused on development rather than just numbers. Each of these, done consistently, communicates what the team values — not what the founder says it values, but what actually gets time and attention. A team whose losses are never discussed is a team that learns nothing from losing. That pattern becomes culture."),
      action: v('practice1Action', "Audit your current rituals. Which ones are consistent? Which ones happen only when things are going well? The gaps in your ritual calendar are the gaps in your culture."),
    },
    {
      number: '02',
      title: v('practice2Title', 'Debrief Every Lost Deal Without Blame'),
      detail: v('practice2Detail', "How a team handles a loss tells you more about its culture than how it handles a win. A team that never talks about losses is a team that cannot improve. A team that blames the customer, the competition, or the product when a deal is lost is a team that has no learning loop. A structured loss debrief takes 20 minutes and covers four questions: what did we know about this deal that we ignored, what did we do right that we should repeat, what did we do wrong that we need to fix, and what do we know now about this prospect or competitor that we did not know before. The debrief is not about fault. It is about information."),
      action: v('practice2Action', "Run a loss debrief on the last three deals your team lost. Use the same four questions each time. Write the output in a shared document. Review it in the next QBR."),
    },
    {
      number: '03',
      title: v('practice3Title', 'Create a Shared Vocabulary for Pipeline Quality'),
      detail: v('practice3Detail', "One of the least visible but most powerful elements of sales culture is shared language. When every salesperson on the team uses the same words to mean the same things — qualified opportunity, stage exit criteria, champion, economic buyer — the team can communicate about deals quickly and accurately. When salespeople use different words to mean different things, every pipeline review is a translation exercise. The language comes from the sales process documentation, the ICP definition, and the stage criteria. When those are written down and trained, the vocabulary becomes shared. When they are not written down, everyone invents their own terminology and the pipeline data becomes unreliable."),
      action: v('practice3Action', "Check this in your next pipeline review: ask two different salespeople to define a 'qualified opportunity' in their own words. If the definitions differ, you do not have shared language yet."),
    },
    {
      number: '04',
      title: v('practice4Title', 'Make Accountability Visible, Not Punitive'),
      detail: v('practice4Detail', "Accountability in a sales culture is not about punishing underperformance. It is about making commitments visible so that the team knows what was agreed and what actually happened. When a salesperson commits in a pipeline review to a specific next action by a specific date, and the next meeting starts by reviewing whether that happened, accountability becomes structural rather than personal. The team holds itself accountable because the system requires it, not because the leader is watching. The absence of this structure is what produces a culture where people say they will do things and then quietly do not."),
      action: v('practice4Action', "Start every pipeline review by reviewing the specific commitments from the prior week: who committed to what, and what actually happened. Do not skip this step when things are busy."),
    },
    {
      number: '05',
      title: v('practice5Title', 'Reward the Behavior That Leads to Results, Not Just the Outcome'),
      detail: v('practice5Detail', "A culture that only celebrates closed deals creates a team that focuses on the finish line and skips the inputs that get them there. When a salesperson does a great discovery call, runs a thorough loss debrief, coaches a junior team member through an objection, or identifies a new market signal in a lost deal — those behaviors are worth recognition even when they do not immediately produce closed revenue. Recognizing the behavior that precedes results communicates what the culture actually values. It also builds a more resilient team: salespeople who are recognized for quality inputs tend to manage losing streaks better than salespeople who are only recognized when they close."),
      action: v('practice5Action', "In your next team meeting, call out one specific behavior (not a result) that you want to see more of. Name it, name the person who did it, and say why it matters."),
    },
  ]

  const signals = [
    v('signal1', 'Lost deals are never discussed as a team — wins get all the airtime'),
    v('signal2', 'Salespeople compete with each other instead of sharing what is working'),
    v('signal3', 'Accountability conversations only happen when something has gone badly wrong'),
    v('signal4', 'Leadership talks about revenue goals but never inspects the activities that produce them'),
    v('signal5', 'The sales process lives in one person\'s head and changes informally every few months'),
    v('signal6', 'New salespeople have no idea what success looks like in their first 90 days because nobody has written it down'),
  ]

  const defaultFaqs = [
    {
      q: "What does 'sales culture' actually mean for a small company?",
      a: "Sales culture is the set of behaviors your team repeats without being told. It is how they handle a prospect who goes quiet after a proposal. It is how they debrief a lost deal. It is how they talk about the product in a discovery call. At a small company, culture is not declared — it is demonstrated. Whatever the founder and the first salespeople do consistently becomes the culture, whether that is intentional or not. The most important question is not 'what culture do we want?' It is 'what are we actually doing right now, and is it the behavior we want to repeat at scale?'",
    },
    {
      q: "How do you build a sales culture when you only have 2 or 3 salespeople?",
      a: "The same way you build it with 20. Through consistent rituals, shared language, visible accountability, and recognition of the right behaviors. The advantage at 2 or 3 people is that culture formation is faster and more direct. Every interaction between the founder and the salespeople is a culture-building moment. The disadvantage is that bad habits also form fast. A founder who never debriefs losses with their first two salespeople will have a culture that avoids that conversation by the time they have ten.",
    },
    {
      q: "What are the signs your company has a weak or broken sales culture?",
      a: "Six signs: lost deals are never analyzed, salespeople compete instead of collaborate, accountability only happens during crisis moments, the sales process is undocumented and varies by person, new salespeople take 9 to 12 months to ramp because there is no consistent playbook, and leadership measures activity but does not inspect quality. Any one of these is a signal. All six together means you are managing a group of individuals who happen to share a quota, not a team with a shared way of selling.",
    },
    {
      q: "How long does it take to change a sales team's culture?",
      a: "New rituals take 90 days to feel normal. New accountability systems take a full quarter to generate enough data to improve on. Real culture change, where the team behaves differently without being reminded, typically takes two to four quarters of consistent leadership behavior. The key word is consistent. Culture changes when the new behavior is reinforced every week, not announced once. The founder is the single biggest driver of how fast culture changes, because the team takes its cues from what actually gets attention and what gets ignored.",
    },
  ]

  const displayFaqs = cmsfaqs(4, defaultFaqs)

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
        headline: 'How to Build a Sales Culture at a Small B2B Company',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-to-build-sales-culture',
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
              Sales Leadership
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How to Build a Sales Culture')}
              <span className="block text-blue-400">{v('heroAccent', 'at a Small B2B Company')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Sales culture is not a leaderboard or a motivational Slack channel. It is the set of behaviors your team repeats without being told. Here is the 5-practice framework for building it intentionally.")}
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
                href="/why-your-sales-team-isnt-hitting-quota"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Is culture the reason your team is missing quota? →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Practices */}
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
              {v('sectionPracticesHeading', '5 Practices That Build a Real Sales Culture')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionPracticesSubheading', "Culture is not what you declare. It is what you do consistently. Each practice below requires repetition to become real.")}
            </motion.p>
            <div className="space-y-8">
              {practices.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="shrink-0 text-3xl font-bold text-blue-200">{item.number}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="mb-4 text-neutral-700">{item.detail}</p>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                    <span className="font-bold text-blue-800">This week: </span>
                    <span className="text-blue-800">{item.action}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Paragraphs */}
      <section className="bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="mb-5 text-lg leading-relaxed text-neutral-700">
              {v('seoPara1', "Most founders think about culture when something goes wrong. The team is not hitting quota, morale is low, or their best salesperson just quit. By the time those symptoms appear, the culture problem has been building for months or years. Culture is easier to build intentionally from the start than to repair after it has calcified around the wrong behaviors. For a $1M to $10M ARR company in founder-led sales mode, the transition out of that mode is largely a culture transition: from 'the founder sells and the team supports' to 'the team sells and the founder manages and leads.' That transition requires deliberate work on the behaviors the team repeats.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "The accountability document is one of the most direct culture-building tools available to a small sales team. When everyone knows what they are accountable for and what the consequences are, accountability becomes structural rather than personal.")}{' '}
              <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                See how the sales accountability document works →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Broken Culture Signals */}
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
              {v('sectionSignalsHeading', '6 Signs Your Sales Culture Is Broken')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-center text-neutral-600">
              {v('sectionSignalsSubheading', "These patterns look like performance problems on the surface. Underneath, they are culture problems — and they will not be fixed by hiring different people.")}
            </motion.p>
            <div className="grid gap-3 md:grid-cols-2">
              {signals.map((signal, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <div className="mt-0.5 shrink-0 rounded-full bg-red-100 p-1 text-red-700">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-red-900">{signal}</p>
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
              {v('aboutBio1', "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v('aboutBio2', "I work with founders who are not emotionally entangled with the existing team dynamics in the way the founder is — which is one of the reasons I can install the rituals that build culture faster than most founders can do it alone. The loss debrief ritual alone has changed the conversation in more teams than almost any other single intervention. Teams that have never talked about why they lose suddenly see patterns they were missing, and the conversation about what to do differently becomes specific rather than general.")}
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
              {v('ctaHeadline', "Your Team's Culture Is Being Built Right Now. The Only Question Is Whether It Is Intentional.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can help you identify the two or three behaviors your team is currently repeating that are working against you, and give you a specific set of rituals to start replacing them with.")}
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
