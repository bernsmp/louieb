'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes'
const SLUG = 'can-hiring-a-fractional-sales-leader-relieve-some-of-the-stress-of-doing-everything'
const CMS_SECTION = 'seoCanHiringFslRelieveStress'
const ARTICLE_TITLE =
  'Can Hiring a Fractional Sales Leader Relieve Some of the Stress of Doing Everything?'
const PUBLISH_DATE = '2026-05-09'
const PUBLISH_DATE_DISPLAY = 'May 9, 2026'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function CanFslRelieveStressPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const takeaways = [
    v(
      'takeaway1',
      'If you are a $1M–$10M ARR founder doing twenty-five hours a week of selling, the math is brutal. At a $1,442 hourly equivalent, that single line item is costing your business close to $1.8 million a year.'
    ),
    v(
      'takeaway2',
      'The bottleneck is not your ambition. The role you are filling — running the sales motion — is a full-time job. You are doing it on top of the other full-time job of running the company.'
    ),
    v(
      'takeaway3',
      'A Fractional Sales Leader is not a coach, a consultant, or a placeholder for a VP. They build the sales system, run it, and hand you back the hours and the headspace.'
    ),
    v(
      'takeaway4',
      'Six months of founder-led selling carries about $1.14 million in opportunity cost. Six months of fractional leadership runs about $65,000. The savings is the price of a bad VP hire — without the bad VP hire.'
    ),
    v(
      'takeaway5',
      'Stress relief is a side effect, not the goal. The goal is a sales engine that runs without you. The relief shows up the moment you stop being the only person in the building who can close a deal.'
    ),
    v(
      'takeaway6',
      'You do not need to be ready for a full-time VP. You need to be ready to stop being the VP yourself.'
    ),
  ]

  const defaultFaqs = [
    {
      q: 'How is a Fractional Sales Leader different from a sales consultant or coach?',
      a: 'A consultant gives you a slide deck. A coach gives you advice. A Fractional Sales Leader gives you a system and runs it. They are an operator, not an advisor. They sit inside your business twenty hours a week, build the playbook, configure the CRM, run the weekly pipeline review, coach the reps, and own the forecast. When you ask "what is the state of the pipeline this week," the answer comes from them, not from you.',
    },
    {
      q: 'Will I lose control of my sales process?',
      a: 'You will lose the day-to-day. You will not lose strategic control. The Fractional Sales Leader runs the cadence and owns the operational decisions. You stay in on the big calls — pricing, key accounts, hiring, comp plan changes. The trade is hours for ownership. Most founders find within sixty days that the part of sales they actually love — the strategic conversations and the closing of the right deals — is still theirs. The part they were drowning in is gone.',
    },
    {
      q: 'How long until I actually feel relief?',
      a: 'Real relief shows up between weeks four and eight. By week four the playbook is documented and the CRM is honest. By week six the reps are running the new motion and the founder is no longer being pulled into every deal. By week eight the founder has noticed they had a full weekend off without anyone calling. That last part is not a metric. It is a milestone, and every founder I have worked with remembers when it happened.',
    },
    {
      q: 'What does a Fractional Sales Leader actually cost?',
      a: 'About $10,000 to $14,000 per month for twenty hours a week. Roughly a quarter of a fully loaded VP of Sales. No equity grant, no bonus structure, no recruiting fee, no severance risk. The engagement is month-to-month or quarter-to-quarter. If it is not working, you stop. The economics are designed for a founder who cannot bet a year of runway on a single hire.',
    },
    {
      q: 'What size company is this for?',
      a: 'Companies between roughly $1M and $10M in ARR with a founder still doing most of the selling. Below $1M you usually do not need the infrastructure yet — you need more meetings. Above $10M you typically need a full-time VP running a larger organization. The sweet spot is the band where the founder is the bottleneck, the company has product-market fit, and there is real revenue at risk because the founder cannot scale themselves.',
    },
    {
      q: 'What happens at the end of the engagement?',
      a: 'You have a working sales system, a documented playbook, a CRM that tells the truth, two or three reps who are ramped, a weekly cadence that runs itself, and a forecast that does not require the founder to interpret it. From there you have three options: keep the fractional engagement at a lower hour count for ongoing oversight, hire a full-time VP into a system that already works, or run it yourself with the head of sales you developed during the engagement. All three are real options. None of them are "go back to founder-led sales."',
    },
  ]

  const displayFaqs = cmsfaqs(6, defaultFaqs)

  const articleSchema = {
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
        headline: ARTICLE_TITLE,
        author: {
          '@type': 'Person',
          name: 'Louie Bernstein',
          url: 'https://louiebernstein.com',
          jobTitle: 'Fractional Sales Leader',
        },
        url: `https://louiebernstein.com/${SLUG}`,
        datePublished: PUBLISH_DATE,
        dateModified: PUBLISH_DATE,
        publisher: {
          '@type': 'Organization',
          name: 'Louie Bernstein',
          logo: {
            '@type': 'ImageObject',
            url: 'https://louiebernstein.com/logo/og-image.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://louiebernstein.com/${SLUG}`,
        },
      },
    ],
  }

  const linkClass =
    'font-semibold text-[#1B3A6B] underline underline-offset-2 decoration-[#E8610A]/60 hover:decoration-[#E8610A]'

  return (
    <main className="bg-white pt-28 pb-20 md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="container mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back to Articles */}
        <nav className="mb-8">
          <Link
            href="/articles"
            className="text-sm font-semibold text-[#1B3A6B] hover:text-[#E8610A]"
          >
            ← Back to Articles
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#E8610A]">
            {v('categoryPill', 'Fractional Sales Leadership')}
          </p>
          <h1 className="mb-5 font-serif text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-[3.25rem]">
            {v('h1', ARTICLE_TITLE)}
          </h1>
          <p className="mb-7 font-serif text-2xl italic leading-snug text-neutral-600 md:text-[1.65rem]">
            {v('h2Subtitle', 'Am I the bottleneck holding up my company’s growth?')}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            <span className="font-semibold text-neutral-700">By Louie Bernstein</span>
            <span>•</span>
            <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE_DISPLAY}</time>
            <span>•</span>
            <span>9 min read</span>
          </div>
        </header>

        {/* Key Takeaways */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 rounded-r-md border-l-4 border-[#1B3A6B] bg-[#EDF2F9] px-7 py-6"
        >
          <motion.h3
            variants={itemVariants}
            className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#1B3A6B]"
          >
            {v('takeawaysHeading', 'Key Takeaways')}
          </motion.h3>
          <motion.ul variants={itemVariants} className="space-y-2.5">
            {takeaways.map((t, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-neutral-800">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B3A6B]" />
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Intro */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-[17px] leading-[1.75] text-neutral-800"
        >
          <motion.p variants={itemVariants}>
            {v(
              'intro1',
              'You did not start your company to run a sales floor. You started it because you saw a problem nobody was solving the right way, and you went and built the answer. Then somewhere between your first ten customers and your fiftieth, the business handed you a second job: chief salesperson. Nobody asked if you wanted it. Nobody asked if you had the time. The job just attached itself, and now it is the loudest thing in your week.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'intro2',
              'Twenty-five hours a week of demos, follow-ups, proposals, and pipeline reviews. Another twenty-five trying to keep the rest of the company from breaking. You answer customer emails on Sunday night. You take pricing questions in the school parking lot. The two reps you hired ramp slowly, ask for help on every deal, and forward you the hard ones. The CRM is a graveyard of half-finished notes. The forecast is a feeling.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'intro3',
              'You know something has to change. You also know what most founders do at this stage and watch fail. They hire a $400K VP of Sales into a company that has no sales system to hand them. The VP arrives, has nothing to operate, spends six months trying to build the thing the founder needed built before the hire, and leaves. The founder is back where they started, with less money and less time and a deeper sense that the problem cannot be solved.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'intro4',
              'There is a different option, and it is the one almost every founder I work with did not know existed before they were drowning. A Fractional Sales Leader. Not a coach. Not a consultant. An operator who comes in twenty hours a week, builds the system you have been meaning to build for two years, runs it for you, and is gone in nine to twelve months — leaving behind a sales engine that runs without you in it.'
            )}
          </motion.p>
          <motion.blockquote
            variants={itemVariants}
            className="my-9 border-l-[3px] border-[#E8610A] bg-[#FFF7F1] px-6 py-4 text-[17px] italic leading-[1.65] text-neutral-800"
          >
            {v(
              'pullquote1',
              '"Salespeople do not quit companies. They quit chaos. And the chaos starts at the top, with a founder who is the only person in the building who knows how to close."'
            )}
          </motion.blockquote>
          <motion.p variants={itemVariants}>
            {v(
              'intro5',
              'This article is about whether that path makes sense for you. The math is in here. The story is in here. The honest answer about what changes and what does not is in here. You are the judge.'
            )}
          </motion.p>
        </motion.section>

        {/* Graphic 1 — Cost of CEO Running Sales */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-12 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(27,58,107,0.1)]"
        >
          <svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <rect width="720" height="380" fill="#1B3A6B" />
            <text x="360" y="38" textAnchor="middle" fontFamily="Georgia, serif" fontSize="17" fontWeight="700" fill="#ffffff">
              What Founder-Led Sales Costs the CEO
            </text>
            <text x="360" y="58" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#8aa8d0" letterSpacing="0.05em">
              25 HOURS / WEEK • $1,442 HOURLY EQUIVALENT • 50 WORKING WEEKS
            </text>

            {/* Inputs row */}
            <rect x="30" y="80" width="660" height="60" rx="8" fill="#ffffff" fillOpacity="0.06" />
            <text x="60" y="102" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#8aa8d0" letterSpacing="0.05em">CEO HOURLY COST</text>
            <text x="60" y="125" fontFamily="Inter, Arial, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff">$901</text>
            <text x="240" y="102" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#8aa8d0" letterSpacing="0.05em">HOURS / WEEK SELLING</text>
            <text x="240" y="125" fontFamily="Inter, Arial, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff">25</text>
            <text x="440" y="102" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#8aa8d0" letterSpacing="0.05em">MONTHLY MISSED OPPS</text>
            <text x="440" y="125" fontFamily="Inter, Arial, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff">8 deals</text>
            <text x="600" y="102" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#8aa8d0" letterSpacing="0.05em">UNREALIZED REV / MO</text>
            <text x="600" y="125" fontFamily="Inter, Arial, sans-serif" fontSize="20" fontWeight="700" fill="#E8610A">$40,000</text>

            {/* Stacked cost breakdown */}
            <text x="360" y="172" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11.5" fill="#cdd9ec" letterSpacing="0.04em">THE LINE ITEM NOBODY PUTS ON THE P&amp;L</text>

            {/* Weekly card */}
            <rect x="30" y="190" width="200" height="135" rx="8" fill="#ffffff" fillOpacity="0.07" />
            <rect x="30" y="190" width="200" height="6" rx="3" fill="#E8610A" />
            <text x="130" y="222" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff" letterSpacing="0.06em">PER WEEK</text>
            <text x="130" y="265" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="28" fontWeight="900" fill="#ffffff">$36,058</text>
            <line x1="60" y1="282" x2="200" y2="282" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
            <text x="130" y="305" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#8aa8d0">25 hrs × $901</text>

            {/* Monthly card */}
            <rect x="245" y="190" width="200" height="135" rx="8" fill="#ffffff" fillOpacity="0.10" />
            <rect x="245" y="190" width="200" height="6" rx="3" fill="#E8610A" />
            <text x="345" y="222" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff" letterSpacing="0.06em">PER MONTH</text>
            <text x="345" y="265" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="28" fontWeight="900" fill="#ffffff">$144,231</text>
            <line x1="275" y1="282" x2="415" y2="282" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
            <text x="345" y="305" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#8aa8d0">4 weeks of selling</text>

            {/* Annual card */}
            <rect x="460" y="190" width="230" height="135" rx="8" fill="#E8610A" fillOpacity="0.18" />
            <rect x="460" y="190" width="230" height="6" rx="3" fill="#E8610A" />
            <text x="575" y="222" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff" letterSpacing="0.06em">PER YEAR</text>
            <text x="575" y="265" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="32" fontWeight="900" fill="#ffffff">$1,802,885</text>
            <line x1="490" y1="282" x2="660" y2="282" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
            <text x="575" y="305" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#ffd9c2">50 weeks — 2 weeks of vacation</text>

            {/* Footer */}
            <text x="360" y="354" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#8aa8d0">
              Source: Fractional Sales Management ROI Calculator — louiebernstein.com/tools/roi-calculator
            </text>
          </svg>
        </motion.div>

        {/* H2: Why You Became the Bottleneck */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-[17px] leading-[1.75] text-neutral-800"
        >
          <motion.h2 variants={itemVariants} className="mt-12 mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-[2rem]">
            {v('section1Heading', 'Why You Became the Bottleneck')}
          </motion.h2>
          <motion.p variants={itemVariants}>
            {v(
              'section1Para1',
              'No founder sets out to be the bottleneck. The path is the same in almost every company. You closed the first ten deals because nobody else could explain the product the way you could. You closed the next twenty because the early reps you hired needed help on the hard ones. By deal fifty you had built a sales motion so deep inside your own head that nobody else could run it without your fingerprints on every conversation.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section1Para2',
              'That motion was your competitive advantage when revenue was a million dollars a year. It is your ceiling now. Every conversation that has to route through you is a conversation that has to wait for your calendar. Every reps deal you have to rescue is a deal that did not close on its own. Every weekend you spend cleaning up the pipeline is a weekend the rest of the business did not get from you.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section1Para3',
              'The reps you hired are not bad. They are running without a playbook. There is no documented version of what you do. There is no CRM stage they can move a deal into without asking you. There are no qualification rules they can lean on to kill a bad deal early. Without that infrastructure, every rep ends up running the version of the sales motion they remember from their last job, which is not your motion at all.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section1Para4',
              'This is the moment most founders look at the org chart and decide they need a VP of Sales. The instinct is correct. The execution is almost always wrong. You do not need a VP. You need the system a VP would build, installed, and someone running it for nine to twelve months while the company gets used to having one. That is what a Fractional Sales Leader is.'
            )}
          </motion.p>
        </motion.section>

        {/* H2: What Doing Everything Actually Costs */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-[17px] leading-[1.75] text-neutral-800"
        >
          <motion.h2 variants={itemVariants} className="mt-12 mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-[2rem]">
            {v('section2Heading', 'What Doing Everything Actually Costs You')}
          </motion.h2>
          <motion.p variants={itemVariants}>
            {v(
              'section2Para1',
              'Pull out a calculator. A founder of a $3M ARR business with a reasonable equity position is worth roughly $1,442 an hour to the company. That is not a vanity number — it is what an honest cost-per-hour looks like when you build it up from comp, equity, and the value of the decisions only you can make. Every hour you spend selling is an hour priced at that rate.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section2Para2',
              'Twenty-five hours a week of selling is $36,058 a week. Almost $145,000 a month. Just over $1.8 million a year. That is the line item nobody puts on the P&L because the founder is not cutting themselves a check for it. The cost shows up as the things that did not happen — the partnership you did not pursue, the product roadmap that slipped, the hiring decision that took six weeks instead of two.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section2Para3',
              'Then layer in the missed opportunities. Eight deals a month walk away because nobody followed up on the right cadence, the demo got rescheduled three times, the proposal sat in the founder’s inbox over a long weekend. At a $5,000 first-year value per customer, that is $40,000 a month — almost half a million a year — in revenue that should have been yours and went somewhere else.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section2Para4',
              'And then the hire-the-wrong-VP risk. The average bad VP of Sales hire at this stage costs about $315,000 over the first six months alone — base, benefits, recruiting, the two reps who quit because the new VP did not fit, and the months of pipeline that died waiting for the new leader to figure out what they had inherited. Add it up across the three columns and the total cost of staying where you are dwarfs anything a fractional engagement would cost.'
            )}
          </motion.p>
          <motion.blockquote
            variants={itemVariants}
            className="my-9 border-l-[3px] border-[#E8610A] bg-[#FFF7F1] px-6 py-4 text-[17px] italic leading-[1.65] text-neutral-800"
          >
            {v(
              'pullquote2',
              '"Your time is the most expensive resource in your company. You are the only person in the building who cannot be billed for it. That does not make it free."'
            )}
          </motion.blockquote>
        </motion.section>

        {/* H2: What a Fractional Sales Leader Actually Does */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-[17px] leading-[1.75] text-neutral-800"
        >
          <motion.h2 variants={itemVariants} className="mt-12 mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-[2rem]">
            {v('section3Heading', 'What a Fractional Sales Leader Actually Does')}
          </motion.h2>
          <motion.p variants={itemVariants}>
            {v(
              'section3Para1',
              'A Fractional Sales Leader is an operator who comes in twenty hours a week and builds the thing your business has been missing. Not in a slide deck. In your CRM. In your inbox. In the room with your reps. The work is unglamorous and concrete.'
            )}
          </motion.p>

          <motion.h3 variants={itemVariants} className="mt-8 mb-2 font-serif text-xl font-bold text-neutral-900">
            {v('section3Sub1Heading', 'They write the playbook you keep meaning to write')}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {v(
              'section3Sub1Para',
              'Twenty to forty pages. The Ideal Customer Profile with disqualifying criteria, not just qualifying ones. The discovery script you actually use, not the one in the deck. Every recurring objection and the response that works. The proposal template. The closing cadence. By the end of week three a new rep can run your sales motion without ever being in the room with you.'
            )}
          </motion.p>

          <motion.h3 variants={itemVariants} className="mt-8 mb-2 font-serif text-xl font-bold text-neutral-900">
            {v('section3Sub2Heading', 'They build a CRM that tells the truth')}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {v(
              'section3Sub2Para',
              'Five pipeline stages, ten required fields, and action-based exit criteria for each stage — not hope-based ones. A deal does not move forward because the rep had a meeting. It moves forward because the buyer confirmed the budget, the timeline, and the decision-maker. If it is not in the CRM, it never happened.'
            )}
          </motion.p>

          <motion.h3 variants={itemVariants} className="mt-8 mb-2 font-serif text-xl font-bold text-neutral-900">
            {v('section3Sub3Heading', 'They run the weekly cadence so you do not have to')}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {v(
              'section3Sub3Para',
              'A forty-five-minute pipeline review every Monday. Every open deal named out loud. Every stalled deal challenged. Every forecasted close defended with evidence. You are welcome to attend. After about week six most founders stop, because the meeting works without them.'
            )}
          </motion.p>

          <motion.h3 variants={itemVariants} className="mt-8 mb-2 font-serif text-xl font-bold text-neutral-900">
            {v('section3Sub4Heading', 'They coach the reps you already have and source the ones you do not')}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {v(
              'section3Sub4Para',
              'The reps who can grow into the playbook get coached up. The ones who cannot, get managed out — honestly and with enough runway to land somewhere they will succeed. New hires get sourced through the fractional leader’s network and run through a hiring process that pattern-matches them against the playbook, not against the founder’s gut.'
            )}
          </motion.p>
        </motion.section>

        {/* Inline Related Reading 1 */}
        <RelatedReadingCallout
          href="/what-are-the-hidden-costs-of-founder-led-sales"
          eyebrow={v('related1Eyebrow', 'Related Reading')}
          title={v(
            'related1Title',
            'What Are the Hidden Costs of Founder-Led Sales?'
          )}
        />

        {/* H2: First 90 Days */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-[17px] leading-[1.75] text-neutral-800"
        >
          <motion.h2 variants={itemVariants} className="mt-12 mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-[2rem]">
            {v('section4Heading', 'The First 90 Days: What Actually Happens')}
          </motion.h2>
          <motion.p variants={itemVariants}>
            {v(
              'section4Intro',
              'Most founders ask one of two questions when they hear about a fractional engagement. The first is "what does it cost." The second, more honest one, is "what changes inside my week." Here is the day-by-day truth.'
            )}
          </motion.p>

          <motion.h3 variants={itemVariants} className="mt-8 mb-2 font-serif text-xl font-bold text-neutral-900">
            {v('phase1Heading', 'Days 1–30: Diagnose, document, and clean the room')}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {v(
              'phase1Para',
              'Week one is shadowing — listening to your sales calls, watching your inbox, reading your CRM. Week two is extraction: the playbook gets drafted in a working session with you, on the calls you have already had. Week three is the CRM rebuild — five stages, ten fields, exit criteria written down. Week four the new system goes live with your reps. You are still on every important call. You are no longer the only person managing the pipeline.'
            )}
          </motion.p>

          <motion.h3 variants={itemVariants} className="mt-8 mb-2 font-serif text-xl font-bold text-neutral-900">
            {v('phase2Heading', 'Days 31–60: Run the cadence, cut the chaos')}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {v(
              'phase2Para',
              'The Monday pipeline review is up and running. Reps are using the playbook on real calls and the fractional leader is coaching them after each one. The forecast is honest for the first time in a year. Bad deals are getting killed instead of dragged. You start noticing you have not been pulled into a deal that was not yours in two weeks. By day sixty you are spending fewer than ten hours a week on sales.'
            )}
          </motion.p>

          <motion.h3 variants={itemVariants} className="mt-8 mb-2 font-serif text-xl font-bold text-neutral-900">
            {v('phase3Heading', 'Days 61–90: Hand off, scale up, plan the exit')}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {v(
              'phase3Para',
              'Your remaining hours move toward strategic deals only — the lighthouse accounts, the partnership-shaped opportunities, the customer expansions that need the founder’s name on them. The fractional leader starts sourcing the next hire if one is needed. By day ninety the system has produced a quarter of clean forecast data, the reps are accountable, and the conversation about what comes next — extend the engagement, hire a full-time leader, run the system yourself — is happening with real numbers, not anxiety.'
            )}
          </motion.p>
        </motion.section>

        {/* Graphic 2 — Savings & Growth */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-12 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(27,58,107,0.1)]"
        >
          <svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <rect width="720" height="400" fill="#ffffff" />
            <text x="360" y="36" textAnchor="middle" fontFamily="Georgia, serif" fontSize="17" fontWeight="700" fill="#1B3A6B">
              Six-Month Cost Comparison
            </text>
            <text x="360" y="56" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#5a6a84" letterSpacing="0.04em">
              FOUNDER-LED SELLING vs. BAD VP HIRE vs. FRACTIONAL SALES LEADER
            </text>

            {/* Bar baseline */}
            <line x1="60" y1="290" x2="660" y2="290" stroke="#E2E6ED" strokeWidth="1.5" />

            {/* Founder bar */}
            <rect x="100" y="100" width="120" height="190" fill="#1B3A6B" />
            <rect x="100" y="100" width="120" height="6" fill="#E8610A" />
            <text x="160" y="92" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#1B3A6B" letterSpacing="0.04em">FOUNDER-LED</text>
            <text x="160" y="155" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#ffffff" letterSpacing="0.04em">6 MONTHS COST</text>
            <text x="160" y="195" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="22" fontWeight="900" fill="#ffffff">$1,141,442</text>
            <text x="160" y="225" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#cdd9ec">25 hrs/wk × 26 wks</text>
            <text x="160" y="245" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10.5" fill="#cdd9ec">at $901/hr</text>
            <text x="160" y="310" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#5a6a84">PLUS $240K/yr</text>
            <text x="160" y="324" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#5a6a84">missed opportunities</text>

            {/* Bad VP bar */}
            <rect x="300" y="225" width="120" height="65" fill="#7C8DA6" />
            <rect x="300" y="225" width="120" height="6" fill="#E8610A" />
            <text x="360" y="217" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#1B3A6B" letterSpacing="0.04em">BAD VP HIRE</text>
            <text x="360" y="252" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#ffffff" letterSpacing="0.04em">6 MONTHS COST</text>
            <text x="360" y="278" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="20" fontWeight="900" fill="#ffffff">$315,000</text>
            <text x="360" y="310" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#5a6a84">$200K comp + 2 lost reps</text>
            <text x="360" y="324" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#5a6a84">+ replacement costs</text>

            {/* Fractional bar */}
            <rect x="500" y="275" width="120" height="15" fill="#E8610A" />
            <text x="560" y="267" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#E8610A" letterSpacing="0.04em">FRACTIONAL LEADER</text>
            <text x="560" y="285" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#ffffff">$65,000</text>
            <text x="560" y="310" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#5a6a84">20 hrs/wk × 26 wks</text>
            <text x="560" y="324" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#5a6a84">no equity, no recruiting</text>

            {/* Savings callouts */}
            <line x1="240" y1="350" x2="480" y2="350" stroke="#E2E6ED" strokeWidth="1" />
            <rect x="60" y="345" width="280" height="38" rx="6" fill="#FFF7F1" stroke="#E8610A" strokeOpacity="0.4" strokeWidth="1" />
            <text x="80" y="361" fontFamily="Inter, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#E8610A" letterSpacing="0.06em">SAVINGS vs. FOUNDER-LED</text>
            <text x="80" y="377" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#1B3A6B">$1,076,442 in 6 months</text>

            <rect x="380" y="345" width="280" height="38" rx="6" fill="#FFF7F1" stroke="#E8610A" strokeOpacity="0.4" strokeWidth="1" />
            <text x="400" y="361" fontFamily="Inter, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#E8610A" letterSpacing="0.06em">SAVINGS vs. BAD VP HIRE</text>
            <text x="400" y="377" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#1B3A6B">$250,000 in 6 months</text>
          </svg>
        </motion.div>

        {/* H2: What Changes for You Personally */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-[17px] leading-[1.75] text-neutral-800"
        >
          <motion.h2 variants={itemVariants} className="mt-12 mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-[2rem]">
            {v('section5Heading', 'What Changes for You Personally')}
          </motion.h2>
          <motion.p variants={itemVariants}>
            {v(
              'section5Para1',
              'I have run this engagement enough times to know what the founder notices first, and it is almost never the revenue. The revenue improvement shows up in month three or four, after the system has run long enough to compound. The thing the founder notices in week six is smaller and more personal: they had a Tuesday afternoon with no sales pings.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section5Para2',
              'You stop being the person who has to remember whether that prospect was supposed to get a follow-up this week. You stop being the person who has to log the call notes. You stop being the person who has to coach the rep who fumbled the demo. Those things still happen — they just happen to someone else, and you find out about them in the weekly review.'
            )}
          </motion.p>
          <motion.p variants={itemVariants}>
            {v(
              'section5Para3',
              'You also stop being the only person who knows what is in the pipeline. That is the change founders underestimate the most. Walking into Monday morning and seeing the state of the business in a CRM you trust, populated by people who actually filled it in, is a feeling you forgot was available. It is the difference between running a company and being the company.'
            )}
          </motion.p>
          <motion.blockquote
            variants={itemVariants}
            className="my-9 border-l-[3px] border-[#E8610A] bg-[#FFF7F1] px-6 py-4 text-[17px] italic leading-[1.65] text-neutral-800"
          >
            {v(
              'pullquote3',
              '"If it is not in the CRM, it never happened. And if it lives only in your head, it owns you."'
            )}
          </motion.blockquote>
          <motion.p variants={itemVariants}>
            {v(
              'section5Para4',
              'The financial argument for a fractional engagement is unambiguous. The personal argument is harder to put on a spreadsheet, but every founder I have worked with has named it the same way at month four. They got their evenings back. They got their judgment back. They started thinking about the next product, the next market, the next hire — instead of the next deal that needed rescuing. That is the thing the calculator does not show.'
            )}
          </motion.p>
        </motion.section>

        {/* Inline Related Reading 2 */}
        <RelatedReadingCallout
          href="/how-to-build-sales-system-without-full-time-vp"
          eyebrow={v('related2Eyebrow', 'Related Reading')}
          title={v(
            'related2Title',
            'How to Build a Sales System Without Hiring a Full-Time VP of Sales'
          )}
        />

        {/* FAQ */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14"
        >
          <motion.h2 variants={itemVariants} className="mb-7 font-serif text-3xl font-bold text-neutral-900 md:text-[2rem]">
            {v('faqHeading', 'Frequently Asked Questions')}
          </motion.h2>
          <div className="divide-y divide-neutral-200">
            {displayFaqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants} className="py-7">
                <p className="mb-2 font-bold text-[#1B3A6B]">Q: {faq.q}</p>
                <p className="text-[17px] leading-[1.7] text-neutral-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Inline Related Reading 3 — before CTA */}
        <RelatedReadingCallout
          href="/fractional-sales-leader-first-90-days"
          eyebrow={v('related3Eyebrow', 'Related Reading')}
          title={v(
            'related3Title',
            'What to Expect in the First 90 Days With a Fractional Sales Leader'
          )}
        />

        {/* CTA */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-14 rounded-xl bg-[#1B3A6B] px-8 py-12 text-center md:px-12"
        >
          <motion.h3 variants={itemVariants} className="mb-3 font-serif text-2xl font-bold text-white md:text-3xl">
            {v('ctaHeadline', 'Get your hours and your headspace back.')}
          </motion.h3>
          <motion.p variants={itemVariants} className="mx-auto mb-7 max-w-2xl text-[15px] leading-relaxed text-blue-100/90 md:text-base">
            {v(
              'ctaDescription',
              'Thirty minutes. We walk through what your week actually looks like, what it is costing you, and whether a fractional engagement is the right move. No pitch. Just a clear read.'
            )}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#E8610A] px-9 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-[#c95208] hover:shadow-lg"
            >
              Schedule a 30-Minute Call
            </Link>
          </motion.div>
        </motion.section>

        {/* About the Author */}
        <section className="mt-14 border-t-2 border-neutral-200 pt-9">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1B3A6B]">
            About the Author
          </p>
          <p className="mb-2 font-bold text-neutral-900">Louie Bernstein</p>
          <p className="mb-3 text-[16px] leading-[1.7] text-neutral-700">
            {v(
              'authorBio',
              'Fractional Sales Leader with 50 years of sales experience helping $1M–$10M ARR companies build scalable, repeatable sales systems. Founder of MindIQ (INC 500). LinkedIn Top Voice in Sales Management, Sales Operations, and Sales Coaching.'
            )}
          </p>
          <p className="text-sm">
            <a href="https://www.linkedin.com/in/louiebernstein" target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
            <span className="mx-2 text-neutral-400">|</span>
            <Link href="/newsletter" className={linkClass}>
              Subscribe to The Sunday Starter
            </Link>
            <span className="mx-2 text-neutral-400">|</span>
            <a href="https://www.youtube.com/@LouieBernstein" target="_blank" rel="noopener noreferrer" className={linkClass}>
              YouTube
            </a>
          </p>
        </section>

        {/* Article footer row */}
        <footer className="mt-12 border-t border-neutral-200 pt-7">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://louiebernstein.com/${SLUG}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#1B3A6B] hover:text-[#E8610A]"
            >
              Share to LinkedIn →
            </a>
            <Link href="/articles" className="text-sm font-semibold text-[#1B3A6B] hover:text-[#E8610A]">
              View All Articles →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  )
}

function RelatedReadingCallout({
  href,
  eyebrow,
  title,
}: {
  href: string
  eyebrow: string
  title: string
}) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="my-10"
    >
      <Link
        href={href}
        className="block rounded-md border-l-4 border-[#E8610A] bg-neutral-50 px-6 py-5 transition-colors hover:bg-[#FFF7F1]"
      >
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8610A]">
          {eyebrow}
        </p>
        <p className="font-serif text-lg font-bold leading-snug text-[#1B3A6B] md:text-xl">
          {title} →
        </p>
      </Link>
    </motion.div>
  )
}
