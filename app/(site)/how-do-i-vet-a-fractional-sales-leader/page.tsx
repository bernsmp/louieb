'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-06'
const CMS_SECTION = 'seoVetFractionalSalesLeader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function VetFractionalSalesLeaderPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v(
      'takeaway1',
      "Don't hire the resume. Hire the operator. The Fractional Sales Leaders who help you the most are the ones who've built sales engines from scratch at companies your size, not the ones who managed a team at a Fortune 500.",
    ),
    v(
      'takeaway2',
      "A real Fractional Sales Leader can show you artifacts: a sanitized Sales Playbook, an Accountabilities Document, a CRM build, a 90-day plan. If they can't show you what they've built, they're an advisor with a new label.",
    ),
    v(
      'takeaway3',
      "References from $1M–$10M founders matter more than logos. A founder who'll get on the phone and tell you the truth is worth more than three impressive brand names on a slide.",
    ),
    v(
      'takeaway4',
      "Beware the Fractional Sales Leader who won't tell you when the engagement is wrong. The good ones have walked away from work. They protect their reputation more than they protect their next invoice.",
    ),
    v(
      'takeaway5',
      "The right Fractional Sales Leader builds you out of the dependency, not into it. Their goal is to install a system that runs without them, then leave on time.",
    ),
  ]

  const thingsToLookFor = [
    {
      number: '01',
      title: v('thing1Title', "Proof They've Built — Not Just Advised"),
      detail: v(
        'thing1Detail',
        "The single biggest trap when you're vetting a Fractional Sales Leader is mistaking advice for execution. Anyone can show up to your office and give you a list of recommendations. A real Fractional Sales Leader has built the thing they're recommending. Ask them to show you a Sales Playbook they wrote, a CRM pipeline they configured, an Accountabilities Document they enforced, a comp plan they rolled out. If they can't put an artifact in front of you, they haven't done the work. They've watched other people do it. You don't need another consultant standing behind your team telling them what to fix. You need an operator who'll sit next to your reps, fix it with them, and leave a system behind.",
      ),
      outcome: v(
        'thing1Outcome',
        "You hire someone who'll do the work, not someone who'll present a deck about the work. The difference shows up in week one.",
      ),
    },
    {
      number: '02',
      title: v('thing2Title', 'A Specific 30-60-90 Day Plan, Written Down Before You Sign'),
      detail: v(
        'thing2Detail',
        "Any Fractional Sales Leader worth hiring has done this enough times that they can describe, in writing, what the first 30, 60, and 90 days look like in your business. Not a generic deck. A plan that names the deliverables: by day 30, the Sales Playbook is drafted and the CRM is audited. By day 60, the pipeline is rebuilt with real stage definitions and the Accountabilities Document is in place. By day 90, weekly pipeline reviews are running and the first new rep is hired against a real scorecard. If the answer to \"what do the first 90 days look like?\" is vague, you're hiring someone who'll figure it out as they go. That's expensive figuring-out time, on your dime.",
      ),
      outcome: v(
        'thing2Outcome',
        "You know exactly what you're paying for, what you'll have at the end of each month, and how to tell if it's working — before you sign the contract.",
      ),
    },
    {
      number: '03',
      title: v('thing3Title', "References From Founders Your Size — Not Logos"),
      detail: v(
        'thing3Detail',
        "A Fractional Sales Leader who's spent the last decade running enterprise teams will know a lot about sales. They won't necessarily know how to operate inside a $3M ARR bootstrapped company where the founder is still selling, the CRM is half-built, and there's no budget for a $400K hire. The skills don't transfer cleanly. When you're vetting, ask for two or three references from founders at $1M–$10M ARR who've used them in the last three years. Then actually call those founders. Ask them: what was the company doing when this person started, what was it doing when they left, and what would you do differently? Logos are decoration. Founder phone calls are signal.",
      ),
      outcome: v(
        'thing3Outcome',
        "You hire someone who's already solved your specific problem at your specific scale — not someone whose playbook was built for a company 10x your size.",
      ),
    },
    {
      number: '04',
      title: v('thing4Title', 'An Accountabilities Document They Wrote and Enforced'),
      detail: v(
        'thing4Detail',
        "Most failed sales hires fail because nobody wrote down what the person was actually accountable for. The job description got them in the door. After that, expectations drifted, the founder got frustrated, and a year later everyone agreed it wasn't working. A Fractional Sales Leader who's been doing this seriously has an Accountabilities Document — a one-page artifact that names the outcomes a salesperson owns, the metrics they're measured on, the cadence of review, and what happens when targets are missed. Ask to see one. If they don't have a version they can show you, they don't have a system for making your team accountable. They have hope.",
      ),
      outcome: v(
        'thing4Outcome',
        "Your next sales hire walks in on day one knowing exactly what they own, what they're measured on, and what good looks like. So do you.",
      ),
    },
    {
      number: '05',
      title: v('thing5Title', 'A Clear Exit Plan — and Walk-Away Criteria'),
      detail: v(
        'thing5Detail',
        "Here's the test that separates the operators from the people billing hours: ask them what would make them walk away from your engagement. The strong answer is specific. They'll tell you they've ended engagements when the founder refused to implement what they recommended, when the company's real problem turned out to be the product not the sales motion, when the founder kept overriding the salespeople and breaking the system. A Fractional Sales Leader who has never ended an engagement early is either too new to have seen one fail or too dependent on the revenue to push back when something's wrong. Either way, you're hiring someone who'll keep cashing checks long after the engagement stops working.",
      ),
      outcome: v(
        'thing5Outcome',
        "You hire someone whose reputation matters more to them than your next invoice. That's the person who'll tell you the truth when nobody else will.",
      ),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Hires on chemistry and impressive resume language'),
      withIt: v('compare1With', 'Asks for artifacts: playbook, pipeline build, Accountabilities Document'),
    },
    {
      without: v('compare2Without', "Accepts a generic 'we'll assess and recommend' plan"),
      withIt: v('compare2With', 'Demands a written 30-60-90 day plan with named deliverables'),
    },
    {
      without: v('compare3Without', 'Trusts the LinkedIn logo wall — Fortune 500 names look safe'),
      withIt: v('compare3With', 'Calls two founders at $1M–$10M ARR who actually used them'),
    },
    {
      without: v('compare4Without', "Signs a 6-month contract before seeing how they work"),
      withIt: v('compare4With', 'Structures a 30-day paid trial with clear deliverables'),
    },
    {
      without: v('compare5Without', "Doesn't ask about walk-away criteria or past engagement endings"),
      withIt: v('compare5With', "Asks what made them walk away from work — and listens for specificity"),
    },
    {
      without: v('compare6Without', "Hires the cheapest option — or the most expensive, hoping price equals quality"),
      withIt: v('compare6With', 'Hires the one who described your situation accurately without being told'),
    },
  ]

  const defaultFaqs = [
    {
      q: 'How long does vetting a Fractional Sales Leader actually take?',
      a: "Two to three weeks if you're disciplined. The first week is filtering — looking at who matches your stage, who can show you artifacts, who has founder references at $1M–$10M ARR. The second week is real conversations with the three finalists, including the written 30-60-90 day plan. The third week is reference calls and a paid trial agreement. Founders who stretch this to two months almost always end up hiring out of fatigue. The discipline isn't in the timeline. It's in refusing to hire anyone who can't pass the artifact test.",
    },
    {
      q: 'What artifacts should a Fractional Sales Leader be able to show me?',
      a: "At minimum: a sanitized Sales Playbook from a prior engagement, an Accountabilities Document, a CRM pipeline structure with stage definitions, and a sample 30-60-90 day plan from a recent client. The exact contents don't matter as much as the existence. Someone who's been doing the work has these things on hand. Someone who hasn't will give you reasons why they can't share them. Confidentiality is a real concern, but sanitization is easy. If they can't redact a client name from a playbook, that's a tell.",
    },
    {
      q: "What's the difference between vetting and interviewing a Fractional Sales Leader?",
      a: "Vetting is the broader pre-hire evaluation — the references, the artifacts, the 90-day plan, the walk-away criteria. Interviewing is the conversation itself, the specific questions you ask in the meeting. You vet to build the shortlist. You interview to confirm what vetting told you. Most founders skip the vetting and go straight to interviewing, which means they're judging on personality and presentation. That's how the wrong person gets hired with everyone in the room nodding along.",
    },
    {
      q: 'Should I do a paid trial before signing a longer engagement?',
      a: "Yes, every time. A 30-day paid trial protects both sides. You see how they actually work — not how they pitch. They see whether your business has the conditions for the engagement to succeed. Any experienced Fractional Sales Leader will agree to this immediately because they've been burned by clients who looked good on paper. The ones who resist a trial period and push for a 6-month contract are either unsure they can deliver in 30 days or so overcommitted to other clients they can't afford to prove themselves first. Neither is the person you want.",
    },
    {
      q: "I'm at $2M ARR and stuck in founder-led sales. Is this really the time to bring someone in?",
      a: "Yes — this is exactly the time. The founders who wait until $5M or $8M ARR to bring in a Fractional Sales Leader have usually spent 18 months grinding through hires that didn't work, processes that didn't scale, and pipeline that depended entirely on them. The right Fractional Sales Leader at $2M ARR builds the infrastructure that lets you grow without becoming the bottleneck. At $5M ARR you're not hiring help — you're hiring a rescue.",
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
        headline: 'How Do I Vet a Fractional Sales Leader?',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/how-do-i-vet-a-fractional-sales-leader',
        datePublished: '2026-06-01',
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
              {v('heroTag', 'Hiring a Fractional Sales Leader')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Do I Vet a')}
              <span className="block text-blue-400">{v('heroAccent', 'Fractional Sales Leader?')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', '5 Things to Look For Before Hiring a Fractional Sales Leader')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v(
                'heroDescription',
                "For $1M–$10M ARR founders who can't afford to hire the wrong person into the most important seat in the company. The vetting test that separates the operators from the advisors.",
              )}
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
                href="/how-to-interview-a-fractional-sales-leader"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                The interview questions to ask &rarr;
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

      {/* 5 Things to Look For */}
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
              {v('sectionThingsHeading', 'The 5 Things to Look For')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v(
                'sectionThingsSubheading',
                "Each one is a test you can run before you sign. If a candidate fails two of these, move on. The cost of the wrong hire is far higher than the cost of restarting your search.",
              )}
            </motion.p>
            <div className="space-y-8">
              {thingsToLookFor.map((item, i) => (
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
              {v(
                'seoPara1',
                "Most founders vet a Fractional Sales Leader the way they'd vet a vendor — a sales call, a proposal, a price, a decision. That's how the wrong person gets hired. The Fractional Sales Leader you bring in will sit at the center of your sales motion. They'll touch your reps, your pipeline, your forecast, your CRM, your hiring scorecard, and the founder time you don't have to spare. If you wouldn't hire a VP of Sales on a 45-minute pitch, don't hire a Fractional Sales Leader that way either. Vet like the seat matters — because it does.",
              )}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v(
                'seoPara2',
                "The five things on this page are the ones I'd use if I were vetting a Fractional Sales Leader for my own company. Once you've narrowed the shortlist with these tests, the next step is the conversation itself — and the right ",
              )}
              <Link
                href="/how-to-interview-a-fractional-sales-leader"
                className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                interview questions to ask a Fractional Sales Leader &rarr;
              </Link>
              {v(
                'seoPara2b',
                " will tell you whether they can actually do the work. And if you want to see the artifact that should be on day one of every engagement, read ",
              )}
              <Link
                href="/sales-accountability-document"
                className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                the Sales Accountability Document &rarr;
              </Link>
              {v('seoPara2c', '. The artifact is what makes the engagement work.')}
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
              {v('sectionCompareHeading', 'Hire on Vibes vs. Vet Like the Seat Matters')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v(
                'sectionCompareSubheading',
                "The wrong hire is a six-figure mistake and six months of lost momentum. The right vetting process is a three-week investment that pays for itself before the first invoice.",
              )}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'How Most Founders Hire')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'How to Actually Vet')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">&#10007;</span>
                    {row.without}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">&#10003;</span>
                    {row.withIt}
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
              {v(
                'aboutBio1',
                "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
              )}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v(
                'aboutBio2',
                "If you're vetting someone for this role, vet me the same way. Ask me for the playbook. Ask me for the Accountabilities Document. Ask me for two founders at your stage who'll tell you the truth about what changed in their business while I was there. If I can't pass my own test, I haven't earned the seat.",
              )}
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
                <Link
                  href="/how-to-interview-a-fractional-sales-leader"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  How to Interview a Fractional Sales Leader: The 5 Questions That Reveal the Truth &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/what-does-fractional-sales-leader-do"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  What Does a Fractional Sales Leader Do Week to Week? &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/fractional-sales-leadership-roi"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  Fractional Sales Leadership ROI: What Does the Investment Return? &rarr;
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
              {v('ctaHeadline', "Vet Me the Same Way")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v(
                'ctaDescription',
                "In 30 minutes I'll walk you through the artifacts, the 90-day plan, the founder references, and the walk-away criteria. If I'm not the right Fractional Sales Leader for your business, I'll tell you who is.",
              )}
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
