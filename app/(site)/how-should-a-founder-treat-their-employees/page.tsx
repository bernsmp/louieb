'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-07'
const CMS_SECTION = 'seoHowToTreatEmployees'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HowToTreatEmployeesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v('takeaway1', "There's one formula, and it works every time: treat your employees exactly as you want them to treat your best customers. Everything else follows from it."),
    v('takeaway2', "It runs as a circle. Treat your people well, they treat your customers well, your customers buy, and then you reward your people. Win, win, win, win."),
    v('takeaway3', "How you treat your first salespeople decides whether you'll ever escape founder-led sales. Treat them like order-takers and you'll still be closing every deal yourself at $8M ARR."),
    v('takeaway4', "Clarity beats charisma. A written Accountabilities Document does more for morale than any pep talk, because people relax the moment they know exactly what the target is."),
    v('takeaway5', "This isn't the soft option. It's the most accountable system there is, because the standard is written down, it's fair, and it applies to you too."),
  ]

  const rules = [
    {
      number: '01',
      title: v('rule1Title', "Treat Them Exactly How You Want Them to Treat Your Best Customer"),
      detail: v('rule1Detail', "This is the whole formula in one sentence. Think about how you want your salesperson to treat your biggest account: with respect, straight answers, patience, and follow-through that never slips. Now ask whether you give them that same treatment. You can't hand a customer something you never handed the person selling to them. If your salespeople feel rushed, second-guessed, and kept in the dark, that's exactly how your customers will feel on the other end of the call. The way you treat the team is the ceiling on how they treat the market."),
      outcome: v('rule1Outcome', "Salespeople who treat your customers the way you would, because they've been treated that way themselves."),
    },
    {
      number: '02',
      title: v('rule2Title', "Give Them Clarity Before You Give Them a Quota"),
      detail: v('rule2Detail', "Most people don't underperform because they're lazy. They underperform because nobody ever told them, in writing, what winning looks like. Before you hand a salesperson a number, hand them clarity: what they own, how they're measured, what a good week looks like, and what happens when a target is missed. I put this in an Accountabilities Document so it lives on paper instead of in my head. When the standard is written down, people stop guessing what you want and start hitting it. Clarity is a kindness, and it's also the fastest path to performance."),
      outcome: v('rule2Outcome', "A team that knows the target on day one, so onboarding takes 30 days instead of six months of guesswork."),
    },
    {
      number: '03',
      title: v('rule3Title', "Pay Them Like Partners in the Outcome, Not Costs to Minimize"),
      detail: v('rule3Detail', "If you build the comp plan to protect your margin at every turn, your salespeople will do the same thing to your customers. They'll nickel-and-dime the deal, hold back, and treat every account like a transaction, because that's the game you taught them to play. Pay people like partners in the result you're chasing and they'll chase it with you. This is the reward step in the circle, and it isn't charity. When your people win because your customers won, everyone is pulling in the same direction. A comp plan is a values statement disguised as a spreadsheet."),
      outcome: v('rule3Outcome', "Salespeople who fight for the customer's outcome because their own outcome is tied to it."),
    },
    {
      number: '04',
      title: v('rule4Title', "Coach Them Every Week. Don't Just Inspect Them"),
      detail: v('rule4Detail', "There's a difference between a weekly review that feels like coaching and one that feels like an interrogation. Both look at the same pipeline. One sends people out energized and one sends them out defensive. Sit down every week, look at the deals together, and ask what you can do to help move them. Catch people doing things right, not just things wrong. Salespeople who feel developed stay and get better. Salespeople who feel audited update the CRM to survive the meeting and learn nothing. The weekly rhythm is where you either build a team or slowly train them to hide from you."),
      outcome: v('rule4Outcome', "A weekly cadence that surfaces problems early and turns your average reps into good ones instead of chasing them out the door."),
    },
    {
      number: '05',
      title: v('rule5Title', "Hold Them to a Standard, Not to Your Mood"),
      detail: v('rule5Detail', "The fastest way to lose good people is to be warm one day and cold the next, so nobody ever knows which founder is walking in. Consistency is what people actually mean when they say they want a good boss. Write the standard down, apply it to everyone the same way, and apply it to yourself first. When the rules are fair and predictable, people take risks, tell you the truth, and bring you the bad news early while you can still do something about it. When the rules move with your mood, they manage you instead of managing their deals. A standard you keep is worth more than a speech you give."),
      outcome: v('rule5Outcome', "A team that tells you the truth early, because the standard is fair, written, and the same every single day."),
    },
  ]

  const comparisonRows = [
    {
      fail: v('compare1Fail', 'Micromanages every deal and every call'),
      succeed: v('compare1Succeed', 'Sets a clear standard and lets people own the outcome'),
    },
    {
      fail: v('compare2Fail', 'Comp plan built to protect margin'),
      succeed: v('compare2Succeed', 'Comp plan built to reward the customer outcome'),
    },
    {
      fail: v('compare3Fail', 'Feedback only shows up when something breaks'),
      succeed: v('compare3Succeed', 'Weekly coaching that catches the good and the bad'),
    },
    {
      fail: v('compare4Fail', "Expectations live only in the founder's head"),
      succeed: v('compare4Succeed', 'Expectations written in an Accountabilities Document'),
    },
    {
      fail: v('compare5Fail', 'Warm one day, cold the next'),
      succeed: v('compare5Succeed', 'Same fair standard every day, applied to everyone'),
    },
    {
      fail: v('compare6Fail', 'Salespeople treat customers like transactions'),
      succeed: v('compare6Succeed', 'Salespeople treat customers the way the founder would'),
    },
  ]

  const defaultFaqs = [
    {
      q: "Isn't \"treat employees well\" too soft to build a real sales team?",
      a: "It's the opposite of soft. The formula isn't about being nice for its own sake. It's about clarity, fair pay, weekly coaching, and a written standard you hold everyone to, including yourself. That's a demanding system. Soft is leaving the target undefined and hoping people read your mind. When you treat people well and hold a hard line at the same time, you get a team that performs and stays. Warmth and accountability aren't opposites. The best sales cultures run on both.",
    },
    {
      q: "What's the single most important part of the formula?",
      a: "Treat your employees exactly as you want them to treat your best customers. Everything else is a way of living that out. If you want your salesperson to give a customer respect, straight answers, and follow-through, you have to give them the same. They can't pass along something they never received. Get that one thing right and the rest of the formula, the clarity, the comp, the coaching, the consistency, becomes obvious.",
    },
    {
      q: "How does the way I treat employees actually affect my customers?",
      a: "It runs as a circle. Treat your people well and they'll treat your customers well. Your customers buy from people who feel valued and stay away from people who feel squeezed. Then your customers buy, and that's what lets you reward your people, which starts the circle again. It's win, win, win, win. The opposite circle is just as real: squeeze your team and they'll squeeze your customers, and your revenue tells the story before you do.",
    },
    {
      q: "I have one salesperson and I still close every deal myself. Does this apply to me?",
      a: "Especially to you. How you treat that first salesperson decides whether you'll ever hand sales off. If you keep them in the dark and jump into every deal, they'll never learn to sell the way you do, and you'll be closing everything yourself at $8M ARR. If you give them clarity, coach them weekly, and let them own outcomes, you're building someone you can eventually trust with your customers. That's the whole point of getting out of founder-led sales.",
    },
    {
      q: "What's an Accountabilities Document, and why does it matter here?",
      a: "It's a one-page written agreement that spells out what a salesperson owns, how they're measured, what good looks like, and the cadence of review. It matters because clarity is how you treat people well without saying a word. When the target is on paper, people stop guessing and start performing, and you stop being the only person who knows what's expected. It's the difference between a team that runs on your mood and a team that runs on a standard.",
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
        headline: 'How Should a Founder Treat Their Employees?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-should-a-founder-treat-their-employees',
        datePublished: '2026-07-12',
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
              {v('heroTag', 'Leadership & Sales Culture')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Should a Founder')}
              <span className="block text-blue-400">{v('heroAccent', 'Treat Their Employees?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', 'I Have a Formula That Works Every Time')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Treat your employees exactly as you want them to treat your best customers. For $1M–$10M ARR founders stuck in founder-led sales, it's also the formula that decides whether you can ever hand your customers to someone else.")}
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
                href="/how-to-build-sales-culture"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to build a real sales culture →
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

      {/* Circle of Success graphic */}
      <section className="bg-white pb-14 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-3 font-serif text-3xl font-bold text-neutral-900 md:text-4xl"
            >
              {v('circleHeading', 'The Circle of Success')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mx-auto mb-8 max-w-xl text-neutral-600">
              {v('circleSubheading', "It's a loop, and it starts with your people. Treat them well, they treat your customers well, your customers pay you, and that's what lets you reward your people. Then it repeats.")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ckffpnbnpvwmecwzovxf.supabase.co/storage/v1/object/public/media/articles/1783907168140_circle_of_success_treat_employees_v2.png"
                alt="The Circle of Success, a 4-step loop: 1) Your People, 2) Your Customers, 3) Paying you, 4) Repeat. It starts with your people."
                style={{ width: '100%', display: 'block', borderRadius: '10px' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Formula — 5 rules */}
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
              {v('sectionRulesHeading', 'The Formula, Step by Step')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionRulesSubheading', "Five moves. Skip one and the circle breaks. Run all five and you build a team you can actually hand your customers to.")}
            </motion.p>
            <div className="space-y-8">
              {rules.map((item, i) => (
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
                    <span className="font-bold text-blue-800">What You Get: </span>
                    <span className="text-blue-800">{item.outcome}</span>
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
              {v('seoPara1', "Founders ask how they should treat their employees like it's a soft question, but for a $1M–$10M business it's the whole ballgame. The way you treat your salespeople is the ceiling on how they treat your customers, and your customers can feel the difference. A team that's squeezed, kept in the dark, and second-guessed will pass all of that straight through to the people you're trying to sell. A team that's paid fairly, coached weekly, and trusted with a clear standard will treat your accounts the way you would. Culture isn't a poster on the wall. It's the customer experience, one salesperson at a time.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "This matters most when you're trying to get out of founder-led sales. You can't hand your customers to someone you never really invested in. If you want the practical version of this,")}{' '}
              <Link href="/how-to-build-sales-culture" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                start with how to build a sales culture at a small B2B company →
              </Link>
              {v('seoPara2b', ", and then put the standard on paper with a")}{' '}
              <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Sales Accountability Document →
              </Link>
              {v('seoPara2c', ". Treat people well, write the standard down, and the customers take care of themselves.")}
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
              {v('sectionCompareHeading', 'How Founders Lose Their Best People vs. How They Keep Them')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompareSubheading', "The difference is rarely money. It's almost always how people are treated day to day.")}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Treats Employees as Costs')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Treats Employees as Partners')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.fail}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.succeed}
                  </div>
                </div>
              ))}
            </motion.div>
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
              {v('aboutBio2', "I've run this formula in my own companies and installed it in dozens of others. Treat your people the way you want them to treat your customers, write the standard down, and reward the outcome. It's simple, it isn't easy, and it's the thing that finally lets a founder step out of every deal. When I build a sales team with you, this is the culture I build underneath it.")}
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
                <Link href="/how-to-build-sales-culture" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Build a Sales Culture at a Small B2B Company →
                </Link>
              </li>
              <li>
                <Link href="/sales-accountability-document" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  Sales Accountability Document: Why Every Team Needs One →
                </Link>
              </li>
              <li>
                <Link href="/how-to-manage-underperforming-salesperson" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Manage an Underperforming Salesperson →
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
              {v('ctaHeadline', 'Build a Team You Can Hand Your Customers To')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can show you where your current team treatment is helping or hurting your revenue, and what to change so your salespeople start treating your customers the way you would.")}
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
