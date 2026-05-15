'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-05'
const CMS_SECTION = 'seoFractionalLeaderPartTime'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FractionalLeaderPartTimePage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v(
      'takeaway1',
      "A 'two days a week' fractional leader is not part-time management — it is full-time systems. The team is led by the operating cadence, the playbook, and the accountability document, not by whether someone is sitting at the next desk."
    ),
    v(
      'takeaway2',
      "A full-time sales manager who is 'always available' is usually the symptom of the problem you are trying to solve. Constant availability means every decision routes through one person — and the team never builds independent judgment."
    ),
    v(
      'takeaway3',
      'The two on-site days are structured deliberately: pipeline review, 1:1 coaching, deal strategy, hiring and ramping. The other five days, the team runs the cadence the fractional leader built — and the founder is no longer the manager.'
    ),
    v(
      'takeaway4',
      "The fear of 'still doing the managing yourself' is valid only if you hire an advisor who shows up and leaves. A real fractional leader installs accountability that runs without them — and that is the deliverable, not the hours."
    ),
    v(
      'takeaway5',
      'By month two you should feel less involved in sales than you did at week one. If you feel busier, the system was not installed correctly. That is a fractional leader problem — not a fractional model problem.'
    ),
  ]

  const components = [
    {
      number: '01',
      title: v('comp1Title', 'The Operating Cadence'),
      detail: v(
        'comp1Detail',
        "The operating cadence is the weekly rhythm the team runs whether the leader is on-site or not. Monday pipeline review, Tuesday 1:1 coaching, Thursday forecast roll-up, Friday written recap — fixed times, fixed agendas, fixed owners. The cadence is published in the team calendar and never moves. When something has to be cancelled, it gets rescheduled, not skipped. Once the cadence is running, it does not require the leader to be present for every beat. The leader sets the rhythm, runs the high-leverage meetings, and steps back. The team owns the rest."
      ),
      outcome: v(
        'comp1Outcome',
        'A team that knows what is happening every day of the week, in writing, without anyone asking — so problems surface in the cadence rather than at random.'
      ),
    },
    {
      number: '02',
      title: v('comp2Title', 'The Written Accountability System'),
      detail: v(
        'comp2Detail',
        "An accountability system is not a one-on-one meeting. It is a written document that specifies what every salesperson is responsible for, what metrics they are measured against, what the cadence of review is, and what happens when a target is missed. It covers activity metrics (calls, demos, pipeline coverage) and outcome metrics (close rate, cycle length, quota attainment). Reps read it on day one and refer to it weekly. When the fractional leader is not on-site, the accountability document is what runs the team. It eliminates the need for ad-hoc 'checking in' — because the rep already knows what they are being held to and how the next review will be conducted."
      ),
      outcome: v(
        'comp2Outcome',
        'Reps who know exactly what they are responsible for and exactly what the next conversation will be about — no surprises, no shifting goalposts, no leader required to enforce.'
      ),
    },
    {
      number: '03',
      title: v('comp3Title', 'The Documented Sales Playbook'),
      detail: v(
        'comp3Detail',
        'The playbook is the written answer to every recurring sales question. What does a qualified prospect look like? What questions surface urgency on a discovery call? What is the right response to the seven most common objections? When does a deal move to the next stage, and what evidence is required to move it? The playbook is the institutional memory of how this company sells. When a rep has a question on a Wednesday and the fractional leader is off-site, the rep checks the playbook first — and the playbook answers most questions. The leader is no longer the bottleneck. The playbook is.'
      ),
      outcome: v(
        'comp3Outcome',
        'A team that does not need to interrupt the leader for every question — because the playbook has already answered the 80 percent that recur.'
      ),
    },
    {
      number: '04',
      title: v('comp4Title', 'The Decision Authority Map'),
      detail: v(
        'comp4Detail',
        'The decision authority map is one page that says, in writing, who decides what. Reps decide: discount up to X percent, deal terms inside Y boundaries, qualification calls based on the playbook criteria. The leader decides: anything above those thresholds, hiring and firing recommendations, playbook changes. The founder decides: pricing strategy, ICP changes, deals over a defined dollar value. Most sales teams have none of this in writing — so every decision either escalates to the founder or stalls. A fractional leader installs the decision map in the first 30 days. After that, very few decisions need to escalate, because the answer is already on the wall.'
      ),
      outcome: v(
        'comp4Outcome',
        'Faster deals and fewer escalations — because the team already knows what they are empowered to decide and what they are not.'
      ),
    },
  ]

  const comparisonRows = [
    {
      without: v('compare1Without', 'Reps interrupt with every question — the manager is the bottleneck'),
      withIt: v('compare1With', 'Reps check the playbook first — the leader answers only the exceptions'),
    },
    {
      without: v('compare2Without', 'Weekly 1:1s slip when the manager is busy; sometimes skipped for weeks'),
      withIt: v('compare2With', 'Operating cadence is fixed — 1:1s are never cancelled, only rescheduled'),
    },
    {
      without: v('compare3Without', 'Pipeline review happens when there is time — not on a schedule'),
      withIt: v('compare3With', 'Pipeline review runs every Monday with a written agenda and stage criteria'),
    },
    {
      without: v('compare4Without', 'Reps are coached when behavior is bad — reactive and inconsistent'),
      withIt: v('compare4With', 'Reps are coached against a documented playbook with measurable benchmarks'),
    },
    {
      without: v('compare5Without', "Forecast is the manager's gut feel — off by 30 percent most quarters"),
      withIt: v('compare5With', 'Forecast is built from documented stage criteria and rep-level conversion data'),
    },
    {
      without: v('compare6Without', 'Manager leaves and the team is in chaos — everything was in their head'),
      withIt: v('compare6With', 'Leader leaves and the system stays — playbook, cadence, accountability all remain'),
    },
  ]

  const phases = [
    {
      number: '01',
      title: v('phase1Title', 'Day One On-Site: The High-Leverage Day'),
      detail: v(
        'phase1Detail',
        'The first on-site day is built around the meetings that only the leader can run. Pipeline review (60 to 90 minutes) — every rep walks through their top five deals against written stage criteria. 1:1 coaching (30 minutes per rep) — focused on the deals where the rep is stuck, against the playbook. Deal strategy (60 minutes) — the two or three deals where the leader has to be hands-on. Forecast roll-up (60 minutes) — what the team is going to close, with confidence levels by rep and stage. That is six to eight hours of structured meetings the rest of the week depends on.'
      ),
    },
    {
      number: '02',
      title: v('phase2Title', 'Day Two On-Site: The Build Day'),
      detail: v(
        'phase2Detail',
        "The second on-site day is for the work that compounds. Hiring and interviewing the next reps. Playbook updates based on the patterns observed in pipeline review. Coaching the rep manager (if one exists yet) on running the cadence in the leader's absence. Founder strategy session (30 to 60 minutes) — what is changing, what is breaking, what needs founder attention. Closing the week with the team — the kickoff for next week's priorities. This is the day that buys the leader the right to be off-site for the next five."
      ),
    },
    {
      number: '03',
      title: v('phase3Title', 'The Other Five Days: Async Leadership'),
      detail: v(
        'phase3Detail',
        'The off-site days are not idle. The leader reviews CRM activity daily, intervenes on escalated deals within hours, coaches against recorded call replays, updates the playbook with new objection patterns, and runs the hiring pipeline (sourcing, screening, reference calls). The founder gets a Friday written recap — what was reviewed, what changed, what is forecast, what needs founder attention next week. The team runs the cadence. The leader leads through the system they built.'
      ),
    },
  ]

  const defaultFaqs = [
    {
      q: 'How do you maintain credibility with the team when you are only on-site two days a week?',
      a: 'Credibility comes from outcomes and the quality of the systems you install — not from time in the chair. By the end of the first two weeks, the team is running a weekly cadence they did not have before, every rep has a written accountability document on their desk, and the playbook is being filled in. That is what builds credibility. The team sees a leader who is making their job clearer and easier, not someone who is around for show.',
    },
    {
      q: 'What happens when a rep has an urgent deal question on a day you are not on-site?',
      a: 'Three things happen, in order. First, the rep checks the playbook — and 80 percent of recurring questions are already answered there. Second, if it is a real exception, the rep messages me, and I respond inside the same business day, usually inside an hour. Third, if it is a strategic call (a deal over a defined size, a non-standard term, a competitive escalation), I get on a quick call with the rep, and with the prospect if needed. Two days on-site does not mean five days unavailable.',
    },
    {
      q: 'How is this different from hiring a sales consultant who just advises and leaves?',
      a: 'A consultant tells you what to do. A Fractional Sales Leader does it with you and then runs it. I do not hand over a slide deck and disappear. I am inside the CRM. I am inside the pipeline reviews. I am running the 1:1s, hiring the next rep, and updating the playbook as I learn what is working. The deliverable is a team that performs — not a recommendation that sits in your inbox.',
    },
    {
      q: 'What if my team is junior or inexperienced — do they not need full-time management?',
      a: 'Junior reps need clarity more than they need presence. A junior rep with a documented playbook, a written accountability document, a fixed cadence, and a defined coaching loop will ramp faster than the same rep reporting to a full-time manager who is reactive and disorganized. The mistake most founders make with junior teams is more meetings, not better systems. The systems do the management. The leader runs the systems.',
    },
    {
      q: 'How do I know you are actually working the other five days and not just on the two you are here?',
      a: 'You get a Friday written recap that documents the week: deals reviewed, decisions made, playbook updates, pipeline movement, hiring activity, and any items that need founder attention. You also have visibility into CRM activity, meeting recordings, and the playbook history. The off-site days are not a black box — they are documented at the same level of rigor as the on-site days. That is part of the deliverable.',
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
        headline:
          "How Can a Fractional Sales Leader Lead My Team If They're Only Here Two Days a Week?",
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/can-fractional-sales-leader-lead-team-part-time',
        datePublished: '2026-05-15',
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
              {v('heroTag', 'Fractional Leadership Objections')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', 'How Can They Lead My Team')}
              <span className="block text-blue-400">
                {v('heroAccent', "If They're Only Here Two Days a Week?")}
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-blue-200 md:text-xl"
            >
              {v('heroH2', "I'll End Up Paying for a Leader But Still Doing the Managing Myself")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v(
                'heroDescription',
                'The objection is real — but it is pointed at the wrong thing. Leadership is not presence. It is the system that runs when no one is in the room. Here is how a Fractional Sales Leader actually leads a team they see two days a week — and why it often works better than a full-time manager who is always there.'
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
                Talk to Louie &mdash; 30 Minutes
              </Link>
              <Link
                href="/what-does-fractional-sales-leader-do"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                What a Fractional Sales Leader actually does &rarr;
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

      {/* How a Fractional Leader Actually Leads — 4 components */}
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
              {v('sectionComponentsHeading', 'How a Fractional Sales Leader Actually Leads')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v(
                'sectionComponentsSubheading',
                'Leadership is not desk hours. It is the four artifacts that let the team execute when the leader is not in the room.'
              )}
            </motion.p>
            <div className="space-y-8">
              {components.map((item, i) => (
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
                "The fear of 'paying for a leader but still doing the managing yourself' is the right concern — applied to the wrong model. The risk is real if you hire someone who shows up, advises, and leaves. That is a sales consultant, not a fractional leader. A real Fractional Sales Leader is an operator. They install the playbook, the cadence, the accountability document, and the decision map — the four artifacts that make the team manageable without the founder. The deliverable is not the hours on the calendar. The deliverable is the operating system."
              )}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v(
                'seoPara2',
                "The other half of the answer is that a full-time sales manager who is 'always available' is often the worst version of what you can hire. Constant availability means every rep brings every question to the manager — so the team never develops independent judgment, the manager becomes the bottleneck, and the founder is one resignation away from losing the sales function in someone's head. The systems-first approach a fractional leader brings is more durable than presence. To see how the same logic applies to installing the underlying system itself, read"
              )}{' '}
              <Link
                href="/how-to-build-sales-system-without-full-time-vp"
                className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                How Do I Build a Sales System Without a Full-Time VP of Sales &rarr;
              </Link>
              {v(
                'seoPara2b',
                '. For a closer look at the first ninety days of an engagement and how the leadership system gets installed, see'
              )}{' '}
              <Link
                href="/fractional-sales-leader-first-90-days"
                className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                What to Expect in the First 90 Days with a Fractional Sales Leader &rarr;
              </Link>
              {v('seoPara2c', '.')}
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
              {v(
                'sectionCompareHeading',
                'Full-Time Manager vs. Fractional Leader: What Actually Happens'
              )}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v(
                'sectionCompareSubheading',
                'The full-time manager is on-site five days. The fractional leader is on-site two. Watch how each one handles the same problem.'
              )}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-xl border border-neutral-200"
            >
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  {v('compareColLeft', 'Full-Time Manager (5 days, always available)')}
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  {v('compareColRight', 'Fractional Sales Leader (2 days, fully systemized)')}
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">&#x2715;</span>
                    {row.without}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">&#x2713;</span>
                    {row.withIt}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Two Days Actually Looks Like — sequence */}
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
              {v('sectionSequenceHeading', 'What Two Days a Week Actually Looks Like')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v(
                'sectionSequenceSubheading',
                "Most founders picture 'two days' as twelve hours of vague consulting. Here is how those hours are actually allocated — and what the leader is doing on the other five days."
              )}
            </motion.p>
            <div className="space-y-8">
              {phases.map((item, i) => (
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

      {/* About Louie */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-200 bg-white p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 font-serif text-2xl font-bold text-neutral-900"
            >
              About Louie Bernstein
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-3 text-neutral-700">
              {v(
                'aboutBio1',
                "I'm Louie Bernstein. I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017."
              )}
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-700">
              {v(
                'aboutBio2',
                'Every engagement starts the same way: I install the operating cadence, the written accountability document, the playbook, and the decision authority map in the first 30 to 60 days. After that, the team runs whether I am on-site or not — and the founder is no longer the manager. That is the deliverable. The two days a week are just when I show up to enforce and improve it.'
              )}
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
            <motion.h2
              variants={itemVariants}
              className="mb-6 font-serif text-xl font-bold text-neutral-900"
            >
              Related Reading
            </motion.h2>
            <motion.ul variants={itemVariants} className="space-y-3">
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
                  href="/sales-accountability-document"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  Sales Accountability Document: Why Every Team Needs One &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/how-to-run-weekly-sales-meeting"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  How to Run a Weekly Sales Meeting That Works &rarr;
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
              {v('ctaHeadline', "Stop Picturing 'Two Days.' Start Picturing the System.")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v(
                'ctaDescription',
                'In 30 minutes I can walk you through what the four artifacts — cadence, accountability, playbook, decision authority — would look like in your business, and how the engagement would be structured around your team. No slide deck. No vague promises.'
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
