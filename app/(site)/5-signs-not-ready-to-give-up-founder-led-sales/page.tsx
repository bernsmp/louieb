'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { useCmsSection } from '@/lib/useCmsSection'

const CALENDLY = 'https://calendly.com/louiebernstein/30minutes?month=2026-03'
const CMS_SECTION = 'seo5SignsNotReadyFounderLedSales'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FiveSignsNotReadyFounderLedSalesPage() {
  const { v, cmsfaqs } = useCmsSection(CMS_SECTION)

  const signs = [
    {
      number: '01',
      title: v('sign1Title', 'Your Salespeople Can\'t Close Without You in the Room'),
      detail: v('sign1Detail', "If every serious deal still requires you to show up — to a final meeting, a pricing conversation, or a difficult objection — that is not a performance problem with your salespeople. That is evidence your sales process hasn't been transferred yet. The closes you're making aren't coming from a repeatable system. They're coming from your personal credibility, your product knowledge, and your ability to read the room. Until you've documented the reasons customers buy, built a reference story library, and installed a closing framework your team can actually use, stepping back will cost you real deals."),
      action: v('sign1Action', "Track the close rate gap between deals you're involved in and deals you're not. If the gap is more than 30 percentage points, your process isn't ready for handoff. Build the closing infrastructure before you walk out."),
    },
    {
      number: '02',
      title: v('sign2Title', 'You Haven\'t Written Down Why Customers Buy'),
      detail: v('sign2Detail', "Most founders know intuitively why their product wins. They know which objections kill deals, which customer stories land, and which questions signal a serious buyer. The problem is that knowledge lives entirely in their head. It has never been written down, tested by a salesperson, or built into a pitch anyone else can repeat. If you handed your team a prospect list tomorrow and left the building, they wouldn't know what to say. That is not a team problem. It is a documentation problem, and it is yours to solve before you step back."),
      action: v('sign2Action', "Write down the three things customers say when they decide to buy and the three questions that kill deals. Teach both to every salesperson you have. That is the beginning of a real Sales Playbook."),
    },
    {
      number: '03',
      title: v('sign3Title', 'Your Ideal Customer Is Still a Work in Progress'),
      detail: v('sign3Detail', "Founders who are still learning who their best customers are need to stay in sales. Pattern recognition is the whole point of founder-led selling at this stage. You're not just closing deals. You're learning which companies convert, which stay long-term, and which refer others without being asked. Once you've spoken with enough customers to write a clear ICP with specific company size, industry, pain points, and disqualification criteria, you can document it and hand it off. Until then, every conversation you're having is research your future salespeople depend on."),
      action: v('sign3Action', "If you can't describe your best customer in one paragraph without using the words 'various' or 'it depends,' your ICP is not ready to hand off. Stay in sales until you can."),
    },
    {
      number: '04',
      title: v('sign4Title', 'No Salesperson on Your Team Has Ever Closed a Deal Without You'),
      detail: v('sign4Detail', "If no one on your team has run a complete sales cycle on their own, you don't yet know what breaks when you step back. You might assume the problem is qualification. It might actually be the demo. You might assume it's the close. It might actually be discovery. You can't build the right infrastructure until you've seen what fails in the real world. Before stepping back, let at least two salespeople run full cycles without your involvement. Track where deals stall. Those are the exact gaps you need to fill before any transition can work."),
      action: v('sign4Action', "Choose two active opportunities and assign them to a salesperson with clear instructions: they own the deal from this point forward. Watch what happens. Fix what fails. Then decide whether you're ready to step back."),
    },
    {
      number: '05',
      title: v('sign5Title', 'Your Sales Process Lives in Your Head, Not in Writing'),
      detail: v('sign5Detail', "A Sales Playbook isn't a nice-to-have. It is the difference between a founder who can step back and a founder who gets pulled back in within 60 days. If you don't have a written Sales Playbook that covers ICP, outreach sequences, discovery questions, demo structure, objection handling, and close criteria, you don't have a process anyone else can follow. You have a memory. Memories don't transfer, don't scale, and don't survive a salesperson turnover. The infrastructure has to exist on paper before it can live without you."),
      action: v('sign5Action', "Before your next week ends, write one page that answers four questions: Who do we sell to? How do we reach them? What do we ask in discovery? What are the top three objections and how do we handle them? That is the start. Finish it before you think about stepping back."),
    },
  ]

  const comparisonRows = [
    {
      early: v('compare1Early', 'Step back before any salesperson has run a solo cycle'),
      ready: v('compare1Ready', 'Let salespeople run complete cycles and observe what breaks'),
    },
    {
      early: v('compare2Early', 'No written ICP or disqualification criteria'),
      ready: v('compare2Ready', 'ICP documented with firmographics, pain points, and hard disqualifiers'),
    },
    {
      early: v('compare3Early', 'Sales Playbook does not exist'),
      ready: v('compare3Ready', 'Sales Playbook written and tested before stepping back'),
    },
    {
      early: v('compare4Early', 'No closing framework for salespeople to use'),
      ready: v('compare4Ready', 'Reference story library and closing criteria in place'),
    },
    {
      early: v('compare5Early', 'Step back and wait for problems to appear'),
      ready: v('compare5Ready', 'Run a controlled test cycle before making the transition permanent'),
    },
    {
      early: v('compare6Early', 'Forced back into sales after 60 days'),
      ready: v('compare6Ready', 'Clean handoff with metrics holding within 20% of baseline'),
    },
  ]

  const defaultFaqs = [
    {
      q: "Is it okay to still be doing founder-led sales at $2M or $3M ARR?",
      a: "Yes, if your sales process isn't documented, your ICP isn't finalized, or your salespeople haven't proven they can close without you. Revenue milestones don't determine readiness. Infrastructure does. Some founders should stay in sales at $5M ARR because the process still lives in their head. Others can step back at $1M ARR because they've done the documentation work. The question isn't what your ARR is. The question is whether your team can sell without you.",
    },
    {
      q: "How do I know when my sales process is ready for handoff?",
      a: "Three tests. First, can a salesperson walk through your entire pitch without asking you a single question? Second, can they qualify a deal using written criteria that exist independent of your judgment? Third, have they closed at least one deal from start to finish without your involvement? If the answer to all three is yes, your process may be ready. If any one of them is no, you're not there yet.",
    },
    {
      q: "What happens if I step back from sales before my team is ready?",
      a: "The most common outcome is a revenue drop in the first 60 to 90 days, followed by the founder stepping back in. The business loses both time and money. The salespeople lose confidence. The founder loses credibility as a leader because the transition didn't stick. The damage is real, and it sets back the next attempt by at least a quarter. Getting it right the first time is worth the extra 60 days of preparation.",
    },
    {
      q: "Can I hire a salesperson and still run founder-led sales at the same time?",
      a: "Yes, and for many businesses in the $1M to $3M range, this is exactly the right move. Hire a salesperson, stay in the deals alongside them, and use that time to document what you do, test what works without you, and build the infrastructure. Treat your own involvement as temporary and deliberate. The goal is to work yourself out of the selling role — not to hire someone and immediately disappear.",
    },
    {
      q: "What is the first thing to build if I know I'm not ready to step back yet?",
      a: "Write your Sales Playbook. Start with one page that answers four questions: Who do you sell to? How do you find them? What do you ask in discovery? What are the top three objections and how do you handle them? That single page is the foundation of everything else. Add to it every week based on what you observe in the field. Within 60 days you'll have a Playbook your salespeople can actually use.",
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
        headline: '5 Signs You\'re Not Ready to Give Up Founder-Led Sales',
        author: { '@type': 'Person', name: 'Louie Bernstein', url: 'https://louiebernstein.com' },
        url: 'https://louiebernstein.com/5-signs-not-ready-to-give-up-founder-led-sales',
        datePublished: '2026-04-19',
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
              {v('heroTag', 'Founder-Led Sales')}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {v('heroLine1', '5 Signs You\'re Not Ready')}
              <span className="block text-blue-400">{v('heroAccent', 'to Give Up Founder-Led Sales')}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              {v('heroDescription', "Don't waste time and money pretending you are. If your sales infrastructure isn't built yet, stepping back will cost you deals, momentum, and months you can't get back.")}
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
                href="/how-to-get-out-of-founder-led-sales"
                className="text-base font-semibold text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                How to get out when you're actually ready →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* 5 Signs */}
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
              {v('sectionSignsHeading', 'The 5 Signs')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionSignsSubheading', 'Any one of these is reason enough to hold off on stepping back. All five mean you have real work to do first.')}
            </motion.p>
            <div className="space-y-8">
              {signs.map((item, i) => (
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
                    <span className="font-bold text-blue-800">What to Do First: </span>
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
              {v('seoPara1', "The push to exit founder-led sales has become so loud it sounds like universal advice. It isn't. Giving up founder-led sales before you've built the right infrastructure is one of the most expensive mistakes a growing business can make. You hire salespeople who underperform because they're working without tools. You spend six months trying to diagnose why revenue isn't growing. Then you step back in, which is exactly where you started, except now you've spent the money and the time. The five signs above aren't excuses to avoid change. They're a checklist. If any of them describe your business today, the answer isn't to hire your way out of founder-led sales. The answer is to do the foundation work first.")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-neutral-700">
              {v('seoPara2', "Understand")}{' '}
              <Link href="/what-is-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                what founder-led sales actually is and why it eventually breaks →
              </Link>
              {v('seoPara2b', " — then you'll see why the timing of the transition matters as much as the transition itself. The founders who exit successfully don't step back and hope. They build the infrastructure first: the Sales Playbook, the ICP, the qualification criteria, and the Accountability Document. That work takes 60 to 90 days to build and pressure-test. When you're ready to make the move, read")}{' '}
              <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                how to get out of founder-led sales →
              </Link>
              {v('seoPara2c', " before you hire anyone new. The sequence matters.")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              {v('sectionCompHeading', 'Founders Who Step Back Too Early vs. Founders Who Time It Right')}
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-center text-neutral-600">
              {v('sectionCompSubheading', 'The difference is almost never talent or ambition. It is preparation.')}
            </motion.p>
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-2 bg-neutral-900">
                <div className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-red-400">
                  Too Early
                </div>
                <div className="border-l border-neutral-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-blue-400">
                  Right Time
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-red-500">✕</span>
                    {row.early}
                  </div>
                  <div className="flex items-center gap-3 border-l border-neutral-200 px-6 py-4 text-sm text-neutral-700">
                    <span className="shrink-0 text-green-600">✓</span>
                    {row.ready}
                  </div>
                </div>
              ))}
            </motion.div>
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
              {v('aboutBio2', "I've worked with founders who stepped back from sales too early and paid for it. The pattern is almost always the same: the infrastructure wasn't built, the salespeople weren't equipped, and the revenue dropped. My job is to build what's missing before you make the transition — so when you step back, it sticks.")}
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
                <Link href="/what-is-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Is Founder-Led Sales — and Why It Eventually Breaks →
                </Link>
              </li>
              <li>
                <Link href="/what-breaks-first-when-founder-stops-selling" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  What Breaks First When a Founder Stops Selling →
                </Link>
              </li>
              <li>
                <Link href="/how-to-get-out-of-founder-led-sales" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                  How to Get Out of Founder-Led Sales →
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
              {v('ctaHeadline', 'Get the Infrastructure Right Before You Step Back')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-neutral-300"
            >
              {v('ctaDescription', "In 30 minutes I can review where your sales process stands, identify the gaps that would cause the transition to fail, and outline exactly what needs to be built before you step back.")}
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
