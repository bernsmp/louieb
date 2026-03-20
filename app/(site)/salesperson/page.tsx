import { Metadata } from "next";
import Link from "next/link";
import { getSalespersonSettings } from "@/lib/cms";

export const metadata: Metadata = {
  title: "210-Day Sales Training Blueprint | Louie Bernstein",
  description:
    "210 daily sales lessons + 52-week management guide by INC 500 Founder Louie Bernstein. Covers cold calling, objection handling, closing, and prospecting.",
  keywords: [
    "how to be a professional salesperson",
    "sales training program",
    "sales training blueprint",
    "cold calling techniques",
    "objection handling",
    "closing techniques",
    "sales management training",
    "sales skills",
    "Louie Bernstein sales",
    "fractional sales leader",
  ],
  openGraph: {
    title: "How to Be a Professional Salesperson — 210-Day Blueprint",
    description:
      "210 daily lessons + 52 weeks of sales management training by INC 500 Founder Louie Bernstein.",
    type: "website",
    url: "https://louiebernstein.com/salesperson",
  },
  alternates: {
    canonical: "https://louiebernstein.com/salesperson",
  },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "How to Be a Professional Salesperson",
  author: {
    "@type": "Person",
    name: "Louie Bernstein",
    url: "https://louiebernstein.com",
  },
  url: "https://louiebernstein.com/salesperson",
  numberOfPages: 588,
  description:
    "A 210-day daily training program for professional salespeople, plus 52 weeks of sales management guidance. Covers cold calling, objection handling, closing, prospecting, trust-building, and building a high-performance sales team.",
  about: [
    { "@type": "Thing", name: "Sales training" },
    { "@type": "Thing", name: "Cold calling" },
    { "@type": "Thing", name: "Sales management" },
    { "@type": "Thing", name: "Objection handling" },
    { "@type": "Thing", name: "Closing techniques" },
  ],
};

const themes = [
  {
    title: "Foundation & Mindset",
    days: "Days 1–5, 35–36, 41–42, 116, 122, 124, 131, 177",
    topics: [
      "Like, Trust, Buy — the fundamental sales equation",
      "Building the right attitude every day",
      "Never lie, never mislead — integrity as a competitive advantage",
      "Building rapport before the pitch",
      "Becoming a Trusted Advisor, not a salesperson",
      "Sales is both an art and a science",
      "Optimism, humility, and character as sales tools",
      "Selling with integrity",
    ],
  },
  {
    title: "Prospecting & Cold Calling",
    days: "Days 8–13, 16, 34, 76, 150",
    topics: [
      "Turning a cold call warm through preparation",
      "The anatomy of a successful cold call",
      "Getting past the gatekeeper — making a foe a friend",
      "Leaving voicemails that get callbacks",
      "How to call and call again without burning bridges",
      "Get proactive and get sales",
      "Jump on a lead — leap ahead on sales",
      "Systematic prospecting that fills the pipeline",
    ],
  },
  {
    title: "Qualifying & Discovery",
    days: "Days 14–15, 73, 89, 106, 125",
    topics: [
      "Qualifying your prospect before investing time",
      "Delivering value on every single call",
      "The Four W's and an H — a discovery framework",
      "Let your prospects tell you how they buy",
      "Pin the cushion — uncovering real pain",
      "Clarifying questions that open up deals",
    ],
  },
  {
    title: "Closing Techniques",
    days: "Days 20, 54, 58, 74, 84, 120, 123, 147, 188",
    topics: [
      "Is there anything else? — the soft close",
      "The Ben Franklin Close",
      "The perfect close: your mouth (when to stay quiet)",
      "If I can, will you…? — the conditional close",
      "One last thing — the late-stage close",
      "The price hasn't changed…yet — urgency without pressure",
      "Assume the sale",
      "Warm up your audience before you close",
    ],
  },
  {
    title: "Objection Handling",
    days: "Days 53, 91, 107, 112, 151, 178–180, 203, 207–208",
    topics: [
      "The match game — matching objections to answers",
      "Your price is too high — and how to respond",
      "We're happy with what we already have",
      "I'll be back — handling the brush-off",
      "Let me think it over — what it really means",
      "It's not in the budget (early-stage and late-stage versions)",
      "It costs too much to switch",
      "It's not a priority now",
      "The team isn't comfortable with this decision",
      "We had a bad experience with your company",
    ],
  },
  {
    title: "Building Relationships & Trust",
    days: "Days 17–18, 28, 49, 68, 92–93, 163–164",
    topics: [
      "Trying YOU on for size — why buyers buy people first",
      "Make the signer look good",
      "Unstalling a stall",
      "A note on saying thank you",
      "Getting and using written testimonials",
      "How to build trust with your customers",
      "Using video testimonials",
      "Getting referrals — a repeatable system",
    ],
  },
  {
    title: "Communication & Presentations",
    days: "Days 55, 61–62, 80, 82–83, 90, 135, 139, 169, 195",
    topics: [
      "Paint a picture for your prospects",
      "Presenting your best self",
      "Getting presentations delivered and consumed",
      "Your elevator speech — crafted and practiced",
      "Your proposal template",
      "Show me the agenda — structuring meetings",
      "Storytelling as a sales tool",
      "The sound and tone of your voice",
      "Be clear — eliminating ambiguity",
      "Developing good business writing skills",
    ],
  },
  {
    title: "Time Management & Productivity",
    days: "Days 47–48, 85, 138, 153",
    topics: [
      "How to organize your day for maximum revenue",
      "The smarter (and harder) I work, the luckier I get",
      "Save time for yourself and your family",
      "One thing at a time — focus as a sales skill",
      "The juggler — managing a full pipeline without dropping deals",
    ],
  },
  {
    title: "Digital & Modern Sales",
    days: "Days 40, 69, 93, 193",
    topics: [
      "Are they Googling you? — your digital reputation",
      "Emails with benefits — writing emails prospects actually read",
      "Using video testimonials in the modern sales cycle",
      "LinkedIn and Twitter as prospecting tools",
    ],
  },
  {
    title: "Advanced Sales Tactics",
    days: "Days 22–23, 71, 94, 102, 113, 140, 173, 184–185",
    topics: [
      "Positioning your product against the competition",
      "Beating the fear of rejection over the phone",
      "Only swing at what you can hit — qualifying your energy",
      "Return on Investment (ROI) as a closing argument",
      "Negotiating — the complete framework",
      "Persuade with statistics and numbers",
      "Using alternate of choice questions",
      "Reduce-to-the-ridiculous — making price irrelevant",
      "Money talk strategy: offense and delay",
    ],
  },
];

const managementWeeks = [
  { range: "Weeks 1–21", title: "The 21 Disciplines You Need from Every Salesperson", topics: ["Good attitudes", "Desire to learn", "Understanding customer business", "Beating the competition", "Quality call volume", "Documentation", "Integrity", "Getting customers not just deals", "Forecasting", "Daily sales lessons", "Listening skills", "Trusted Advisor development", "Product knowledge", "Self-worth as an equal", "Drawing the line", "Rules and accountability", "Punctuality", "Sales process creation", "Getting testimonials", "Follow-through", "Navigating company procedures"] },
  { range: "Weeks 22–27", title: "Leadership & The Sales Playbook", topics: ["Busy vs. productive", "Lead by example", "Grow your own salespeople", "Why you need a Sales Playbook", "What goes in the Sales Playbook", "How to use the Sales Playbook"] },
  { range: "Weeks 28–38", title: "Team Dynamics & Operations", topics: ["Conflict resolution on the team", "Managing the Lone Ranger", "When they won't listen", "Core values for your team", "Calling scripts", "Business writing standards", "Having your rep's back", "One-on-ones", "Work-life balance", "Knowing the competition", "Training beginners and professionals together"] },
  { range: "Weeks 39–52", title: "Coaching, Feedback & Performance", topics: ["Staying positive as a leader", "Hands-off management done right", "Giving immediate feedback", "Releasing a salesperson — the right way", "What motivates each salesperson", "Catching them doing something right", "Working with finance and numbers people", "The sales funnel", "Keeping reps out of support", "Email discipline", "Making training sessions effective", "When to push hard", "Correct the behavior, not the person", "Transparency and integrity as a manager"] },
];

export default async function SalespersonBlueprintPage() {
  const cms = await getSalespersonSettings();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-center">
        <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-blue-400">
          {cms.heroTagline}
        </p>
        <h1 className="mx-auto max-w-4xl font-serif text-4xl font-medium text-white md:text-5xl lg:text-6xl">
          {cms.heroHeadline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-neutral-300">
          {cms.heroDescription}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={cms.ctaPrimaryUrl}
            target={cms.ctaPrimaryUrl.startsWith('http') ? '_blank' : undefined}
            rel={cms.ctaPrimaryUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="rounded-lg bg-[#0966c2] px-8 py-3 font-sans text-base font-semibold text-white transition-all hover:bg-[#0855a3] hover:shadow-lg md:px-10 md:py-4"
          >
            {cms.ctaPrimaryText}
          </Link>
          <Link
            href={cms.ctaSecondaryUrl}
            className="rounded-lg border-2 border-white px-8 py-3 font-sans text-base font-semibold text-white transition-all hover:bg-white hover:text-slate-950 md:px-10 md:py-4"
          >
            {cms.ctaSecondaryText}
          </Link>
        </div>
      </section>

      {/* By the numbers */}
      <section className="border-b border-neutral-200 bg-white px-6 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { value: "588", label: "Pages" },
            { value: "210", label: "Daily Lessons" },
            { value: "52", label: "Management Weeks" },
            { value: "9+", label: "Years in the Field" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-bold text-[#0966c2]">{stat.value}</p>
              <p className="mt-1 font-sans text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-neutral-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            {cms.themesHeadline}
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center font-sans text-base text-neutral-600">
            {cms.themesDescription}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {themes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-1 font-serif text-xl font-bold text-slate-900">
                  {theme.title}
                </h3>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-wider text-[#0966c2]">
                  {theme.days}
                </p>
                <ul className="space-y-1.5">
                  {theme.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 font-sans text-sm text-neutral-700">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0966c2]" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full TOC — Part 1 */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Full Table of Contents
          </h2>
          <p className="mb-10 font-sans text-base text-neutral-600">
            Part 1: Daily Sales Training — 210 lessons, one per business day for a full year.
          </p>
          <div className="grid gap-x-10 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Introduction", "Day 1 – Like, Trust, Buy!", "Day 2 – How's your attitude?",
              "Day 3 – Don't lie. Never mislead.", "Day 4 – Building rapport",
              "Day 5 – The Trusted Advisor", "Day 6 – Setting sales goals: Preparation",
              "Day 7 – Setting sales goals: It all adds up",
              "Day 8 – Turning a cold call warm", "Day 9 – The Cold Call: Score some goals",
              "Day 10 – Making the Cold Call", "Day 11 – The Gatekeeper",
              "Day 12 – Gatekeeper Strategies", "Day 13 – Leaving voicemail",
              "Day 14 – Qualify your prospect", "Day 15 – Deliver value. Always.",
              "Day 16 – Call and call again", "Day 17 – Trying YOU on for size",
              "Day 18 – Make the signer look good", "Day 19 – Drill baby, drill",
              "Day 20 – Closing: Is there anything else?", "Day 21 – Do the math",
              "Day 22 – Positioning your product",
              "Day 23 – Beating the fear of rejection", "Day 24 – Don't be Intimidated",
              "Day 25 – When they don't want to pay for the add-on",
              "Day 26 – Puppy love", "Day 27 – Checking in is checking out",
              "Day 28 – Unstalling a stall", "Day 29 – Know when to cut your losses",
              "Day 30 – The takeover – Part 1", "Day 31 – The takeover – Part 2",
              "Day 32 – Be polite…please!", "Day 33 – Leverage: What's yours?",
              "Day 34 – Get proactive and get sales", "Day 35 – An 'ace' of an attitude",
              "Day 36 – On that note…thanks!", "Day 37 – If you own the problem",
              "Day 38 – Don't end up like Wally Pipp", "Day 39 – Price fishing",
              "Day 40 – Are they Google-ing you?", "Day 41 – Sales is an art",
              "Day 42 – Sales is a science", "Day 43 – Confirm your appointment",
              "Day 44 – Mental wind sprints", "Day 45 – Just send me a proposal",
              "Day 46 – The easiest sell", "Day 47 – How to organize your day",
              "Day 48 – The smarter (and harder) I work", "Day 49 – A note on saying 'thank you'",
              "Day 50 – How's it going? Ugh.", "Day 51 – Networking",
              "Day 52 – First impressions last", "Day 53 – Objection: The match game",
              "Day 54 – Closing time", "Day 55 – Paint a picture for your prospects",
              "Day 56 – Have discipline", "Day 57 – Change is good. But hard!",
              "Day 58 – Closing: The Ben Franklin Close", "Day 59 – 'No' fear",
              "Day 60 – Learn from the best", "Day 61 – Presenting your best",
              "Day 62 – Getting presentations delivered", "Day 63 – Unlocking the key to the deal",
              "Day 64 – Tenacity", "Day 65 – Role playing",
              "Day 66 – Restate the problem", "Day 67 – The slippery deal",
              "Day 68 – Getting and using written testimonials", "Day 69 – Emails with benefits",
              "Day 70 – Feel, felt, found", "Day 71 – Only swing at what you can hit",
              "Day 72 – The prospect in crisis", "Day 73 – The Four W's and an H",
              "Day 74 – The perfect close (your mouth)", "Day 75 – Don't forget your anniversary",
              "Day 76 – Jump on the lead", "Day 77 – Multiple contacts multiply success",
              "Day 78 – Your new account: Research", "Day 79 – Your new account: Making the call",
              "Day 80 – Your elevator speech", "Day 81 – Start at the top",
              "Day 82 – Your proposal template", "Day 83 – Show me the agenda",
              "Day 84 – Closing: If I can, will you…?", "Day 85 – Save time for your family",
              "Day 86 – Be the expert and be known", "Day 87 – Get excited or they won't",
              "Day 88 – Voicemails that speak loud and clear",
              "Day 89 – Let prospects tell you how they buy", "Day 90 – Storytelling",
              "Day 91 – Objection: Your price is too high",
              "Day 92 – How to build trust with customers",
              "Day 93 – Using video testimonials", "Day 94 – Return On Investment (ROI)",
              "Day 95 – Be an educator", "Day 96 – How to respond to setbacks",
              "Day 97 – The meeting follow up document", "Day 98 – No money for second place",
              "Day 99 – Be careful when showing your screen",
              "Day 100 – Don't throw up ridiculous bluffs", "Day 101 – Be a businessperson",
              "Day 102 – Negotiating", "Day 103 – What happens if they do nothing?",
              "Day 104 – Customers versus prospects", "Day 105 – Listen to this",
              "Day 106 – Pin the cushion",
              "Day 107 – Objection: We're happy with what we have",
              "Day 108 – What to say when you've lost the sale",
              "Day 109 – Prospects hate confrontation", "Day 110 – Show, then tell",
              "Day 111 – I sent the wrong information", "Day 112 – Objection: I'll be back",
              "Day 113 – Persuade with statistics and numbers",
              "Day 114 – Dealing with a difficult prospect",
              "Day 115 – Unreasonable requests", "Day 116 – Optimism",
              "Day 117 – Make sure the objection is resolved",
              "Day 118 – Prospects hear what they want", "Day 119 – Improve your hearing",
              "Day 120 – Closing: One last thing", "Day 121 – Forget the jargon",
              "Day 122 – Humility", "Day 123 – Closing: The price hasn't changed…yet",
              "Day 124 – Sell with Integrity", "Day 125 – Clarifying questions",
              "Day 126 – The Success Log", "Day 127 – Sweeten up that meeting",
              "Day 128 – Connect", "Day 129 – FUD",
              "Day 130 – It's okay not knowing everything",
              "Day 131 – Don't be a politician", "Day 132 – Body, Mind, Spirit: Body",
              "Day 133 – Body, Mind, Spirit: Mind", "Day 134 – Body, Mind, Spirit: Spirit",
              "Day 135 – The sound and tone of your voice",
              "Day 136 – To the best of my recollection", "Day 137 – Just think",
              "Day 138 – One thing at a time", "Day 139 – Be clear",
              "Day 140 – Using alternate of choice questions", "Day 141 – Um…You know",
              "Day 142 – Take charge!", "Day 143 – To respond, or not (the RFP question)",
              "Day 144 – Sales rituals", "Day 145 – Ice breaking information",
              "Day 146 – I'll be in your area", "Day 147 – Assume the sale",
              "Day 148 – Use humor", "Day 149 – Be a chameleon",
              "Day 150 – Prospecting", "Day 151 – Objection: Let me think it over",
              "Day 152 – Will you get back up?", "Day 153 – The juggler…you!",
              "Day 154 – Don't bad mouth the competition", "Day 155 – The next step",
              "Day 156 – The buying cycle", "Day 157 – Team players finish first",
              "Day 158 – Sell the sizzle, not the steak",
              "Day 159 – Who are your competitors?",
              "Day 160 – Your best prospects want what you have",
              "Day 161 – Save the added value", "Day 162 – Stall: Irrelevant questions",
              "Day 163 – Now they owe you", "Day 164 – Getting referrals",
              "Day 165 – Debriefing a deal", "Day 166 – The 'Hail Mary' Pass",
              "Day 167 – Using Calling Scripts", "Day 168 – Don't let 'em hear you sweat",
              "Day 169 – Develop good business writing skills",
              "Day 170 – The Fear of financial loss", "Day 171 – The complex sale",
              "Day 172 – Not so fast", "Day 173 – Reduce-to-the-ridiculous",
              "Day 174 – Stop using stupid leading questions",
              "Day 175 – Like what they have", "Day 176 – Common courtesy",
              "Day 177 – How's Your Character?",
              "Day 178 – Objection: Not in the budget (initial call)",
              "Day 179 – Objection: Not in the budget (buying cycle)",
              "Day 180 – Objection: It costs too much to switch",
              "Day 181 – Why should I buy from you?",
              "Day 182 – What's our goal for the call?",
              "Day 183 – It's always election time",
              "Day 184 – Money talk: The best offense is offense",
              "Day 185 – Money talk: Let's talk money later",
              "Day 186 – Never lose it alone", "Day 187 – Never assume anything",
              "Day 188 – Closing: Warm up your audience",
              "Day 189 – Just send me the information", "Day 190 – Same is lame",
              "Day 191 – Chase them until they catch you",
              "Day 192 – Train like a pro", "Day 193 – LinkedIn and Twitter",
              "Day 194 – Like or alike? Whatever works", "Day 195 – Writing right",
              "Day 196 – Don't be an errand boy (or girl)",
              "Day 197 – Ask questions like a lawyer",
              "Day 198 – All customers are not the same",
              "Day 199 – Your body language", "Day 200 – Empathy",
              "Day 201 – Never let your guard down",
              "Day 202 – Things happen when you meet people",
              "Day 203 – Objection: Not a priority now", "Day 204 – Persistence",
              "Day 205 – Never make anyone feel stupid", "Day 206 – Be curious",
              "Day 207 – Objection: Team comfort with the decision",
              "Day 208 – Objection: Bad experience with your company",
              "Day 209 – They'll believe if you believe",
              "Day 210 – This is your company too. Act like it.",
            ].map((item) => (
              <p key={item} className="py-0.5 font-sans text-sm text-neutral-700 border-b border-neutral-100">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2 — Sales Management */}
      <section className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 font-serif text-3xl font-bold text-white md:text-4xl">
            Part 2: Sales Management Training
          </h2>
          <p className="mb-12 font-sans text-base text-neutral-400">
            52 weeks of weekly coaching for sales managers — from building discipline
            in your team to releasing underperformers the right way.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {managementWeeks.map((section) => (
              <div key={section.range} className="rounded-xl border border-slate-700 bg-slate-900 p-6">
                <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {section.range}
                </p>
                <h3 className="mb-4 font-serif text-lg font-bold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 font-sans text-sm text-neutral-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
          {cms.ctaBottomHeadline}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl font-sans text-base text-neutral-600">
          {cms.ctaBottomDescription}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://calendly.com/louiebernstein/30minutes"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#0966c2] px-8 py-3 font-sans text-base font-semibold text-white transition-all hover:bg-[#0855a3] hover:shadow-lg md:px-10 md:py-4"
          >
            Schedule a Discussion
          </Link>
          <Link
            href="/fractional-sales-leader"
            className="rounded-lg border-2 border-slate-900 px-8 py-3 font-sans text-base font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white md:px-10 md:py-4"
          >
            What Is a Fractional Sales Leader?
          </Link>
        </div>
      </section>
    </>
  );
}
