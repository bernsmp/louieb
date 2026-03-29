const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const pages = [
  {
    section: 'seoWhatIsSalesEnablement',
    content: {
      heroLine1: 'What Is Sales Enablement?',
      heroAccent: 'And Why Your Small Team Desperately Needs It',
      heroDescription:
        "Sales enablement is the system that gives your reps everything they need to sell consistently — the content, training, process, tools, and coaching. Without it, your team is improvising. Here's what it actually includes and how to build it.",
      ctaHeadline: 'Ready to Build a Sales System Your Team Can Actually Use?',
      ctaDescription:
        "In 30 minutes I can assess which components of sales enablement your team is missing — and tell you exactly what to build first to move the number in 90 days.",
      aboutBio1:
        "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2:
        "Building sales enablement infrastructure is one of the first things I do in every engagement. In most cases, the reps aren't the problem — the system is. Give good people a real playbook, real training, and a real feedback loop, and performance improves within 60 days. Without those things, even great reps underperform.",
      faq1Question: 'Is sales enablement only for large companies with dedicated teams?',
      faq1Answer:
        "No — and this is the most expensive misconception in B2B sales. The companies that benefit most from sales enablement are $1M–$10M businesses where every rep's performance matters and there's no margin for a slow ramp or an inconsistent pitch. You don't need a dedicated enablement team. You need documented processes, real training, and a playbook. A fractional sales leader can build all three.",
      faq2Question: "What's the difference between sales enablement and sales training?",
      faq2Answer:
        "Sales training is one component of sales enablement. Enablement is the full system: content, training, playbooks, tools, and coaching loops. Training tells reps what to do. Enablement ensures they have everything they need to do it consistently — and a feedback loop to keep improving.",
      faq3Question: 'How long does it take to build a sales enablement system?',
      faq3Answer:
        "The core infrastructure — playbook, onboarding program, basic content library, and CRM setup — can be built in 60–90 days. The coaching and feedback loops take longer to mature because they require data from real deals. Most companies see measurable improvement in ramp time and close rates within 90 days of having the basics in place.",
      faq4Question: "Can a founder build sales enablement without hiring a VP of Sales?",
      faq4Answer:
        "Yes — and this is often the right sequence. Build the enablement system first: document how you sell, create the playbook, set up the CRM properly, and define what good looks like. Then hire. A rep onboarded into a functioning system closes faster and stays longer than a rep hired into chaos. A fractional sales leader can build this system at a fraction of the cost of a VP hire.",
    },
  },
  {
    section: 'seoScaleRevenue1mTo10m',
    content: {
      heroLine1: 'How to Scale Revenue from $1M to $10M',
      heroAccent: "The Founder's Roadmap",
      heroDescription:
        "Most founders who hit $1M know how to sell. Almost none of them know how to build a sales system that scales without them. Here is the four-phase roadmap that covers the gap.",
      ctaHeadline: "Stuck Between $1M and $10M? Let's Figure Out Why.",
      ctaDescription:
        "In 30 minutes I can identify exactly which phase you're in, what's blocking the next stage, and what it would take to get your sales org to the next level.",
      aboutBio1:
        "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2:
        "I've worked with dozens of founders at exactly this stage — stuck between $1M and $10M, trying to scale a sales function that was never built to scale. The roadmap on this page reflects the patterns I've seen work repeatedly. The mistakes are the ones I've watched kill momentum in companies that had everything else going for them.",
      faq1Question: 'How long does it realistically take to scale from $1M to $10M?',
      faq1Answer:
        "For B2B businesses with strong product-market fit: 3–5 years. The companies that do it faster have usually done the infrastructure work early — documented ICP, functioning CRM, trained reps, clear process. The companies that stall in the $2M–$4M range are almost always founder-dependent and lack the systems to delegate sales without losing revenue.",
      faq2Question: 'When should I stop closing deals myself as the founder?',
      faq2Answer:
        "Not all at once — and probably not fully until $4M–$6M ARR. The goal isn't to remove yourself from sales. It's to ensure your involvement isn't required for deals to close. Stay active on strategic accounts and high-value prospects. Step back from everything else once reps are ramped and the process is documented. A fractional sales leader can manage this transition so revenue doesn't dip.",
      faq3Question: "What's the biggest mistake founders make between $1M and $3M ARR?",
      faq3Answer:
        "Hiring before documenting. They bring in a rep or a VP of Sales, hand over the pipeline, and watch it stall because no one has ever written down how deals actually get closed. The rep improvises. Conversion rates drop. The hire fails. The mistake wasn't the hire — it was skipping the documentation step that would have made the hire successful.",
      faq4Question: 'Do I need a full-time VP of Sales to scale past $5M?',
      faq4Answer:
        "Not necessarily — not yet. A fractional sales leader can build the infrastructure and manage the team through the $5M–$7M stage. A full-time VP makes sense when the team has 4+ reps and the processes are stable enough that you're scaling something that works. Hiring a VP before that is paying VP-level compensation to build what a fractional leader would build for a fraction of the cost.",
    },
  },
  {
    section: 'seoWhatIsRevOps',
    content: {
      heroLine1: 'What Is Revenue Operations (RevOps)?',
      heroAccent: 'A Plain-English Guide for Founders',
      heroDescription:
        "RevOps is one of the most buzzed-about concepts in B2B sales — and one of the least understood by founders who need it most. Here's what it actually is, what it does, and whether your $1M–$10M business needs it now.",
      ctaHeadline: "Want Revenue That's Actually Predictable?",
      ctaDescription:
        "In 30 minutes I can review your current revenue infrastructure — CRM, pipeline process, and handoffs — and tell you exactly where the friction is costing you deals.",
      aboutBio1:
        "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2:
        "In most of my engagements, I serve as the de facto RevOps function for the first 6–12 months — configuring the CRM, building the pipeline review cadence, and establishing the reporting infrastructure. For companies under $10M ARR, this is almost always the right approach: get the function done by someone who's also running the sales team, before you hire a dedicated RevOps head.",
      faq1Question: 'Does a $3M ARR company need Revenue Operations?',
      faq1Answer:
        "It needs the function — not necessarily a dedicated headcount. At $3M ARR, RevOps typically means: a well-configured CRM, clean lead routing from marketing to sales, a reliable pipeline review process, and basic reporting dashboards. A fractional sales leader often handles all of this as part of their engagement. You don't need to hire a RevOps director to get the benefit.",
      faq2Question: "What's the difference between Revenue Operations and Sales Operations?",
      faq2Answer:
        "Sales operations focuses specifically on the sales function: CRM management, territory planning, quota setting, and sales process optimization. Revenue operations expands that scope to include marketing operations and customer success operations — so the entire revenue-generating function runs on shared data, shared tools, and shared accountability. For most companies under $10M, the distinction is academic; both functions are handled by the same person or team.",
      faq3Question: 'When should I hire a dedicated RevOps person?',
      faq3Answer:
        "When you have 6+ quota-carrying reps, a marketing team generating significant pipeline, and a customer success team managing renewals and expansions. Before that, RevOps responsibilities are typically handled by a fractional sales leader or a sales operations generalist. Hiring a full-time RevOps director too early creates overhead without proportional impact.",
      faq4Question: 'How does RevOps improve revenue forecasting?',
      faq4Answer:
        "Forecasting accuracy is a data quality problem as much as a judgment problem. When stage definitions are clear and enforced, when reps update CRM records consistently, and when pipeline reviews use real exit criteria rather than guesswork — the data becomes trustworthy. RevOps builds and maintains the systems that produce that data. Most companies that miss their forecast consistently are missing the RevOps infrastructure to produce a clean pipeline.",
    },
  },
  {
    section: 'seoFractionalSalesLeadershipRoi',
    content: {
      heroLine1: 'Fractional Sales Leadership ROI:',
      heroAccent: 'What Does the Investment Actually Return?',
      heroDescription:
        "Before you commit, you want to know what you're actually buying. Here are the real numbers — cost vs. full-time hire, time to results, and revenue impact — without the sales pitch.",
      ctaHeadline: 'Want to Know the ROI for Your Specific Situation?',
      ctaDescription:
        "In 30 minutes I can give you a specific estimate of what a fractional engagement would cost, what results you could expect in 90 days, and whether the ROI makes sense for your stage.",
      aboutBio1:
        "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2:
        "The ROI numbers on this page are based on real engagements — not projections. The cost savings versus a full-time VP hire are real. The 30–90 day timeline to results is real. The 20–35% revenue improvement is real for companies where the engagement conditions are right. I'll tell you honestly in a 30-minute call whether your situation meets those conditions.",
      faq1Question: 'How do I calculate the ROI of a fractional sales leader for my specific business?',
      faq1Answer:
        "Start with what a bad outcome costs you: a VP of Sales hired too early ($200,000–$400,000 fully loaded, often wasted), or two years of founder-dependent sales instead of a scalable process. Then estimate what a 20% improvement in close rate would mean for your revenue. For a company at $3M ARR with a 25% close rate, improving close rate to 30% on the same pipeline adds $600,000 in annual revenue. Against a $72,000–$96,000 annual fractional investment, the math is straightforward.",
      faq2Question: "What if the engagement doesn't produce the results expected?",
      faq2Answer:
        "There should be measurable leading indicators within 60 days: pipeline accuracy improves, reps are more accountable, the founder is less involved in individual deals. If these signals aren't present by day 60, something is wrong with the engagement design — not the model. A well-structured fractional engagement has clear 30/60/90-day milestones. If you're evaluating one, ask for those milestones upfront.",
      faq3Question: 'Is the ROI different for early-stage companies versus companies at $8M–$10M ARR?',
      faq3Answer:
        "Yes — but it's high at both ends for different reasons. At $1M–$3M, the primary ROI is speed: building infrastructure that would take a founder 12–18 months to build alone gets done in 60–90 days. At $5M–$10M, the ROI shifts to scale: fixing the process and management gaps that are preventing a working sales team from performing at its potential. The economic impact is larger at higher ARR — but the leverage is real at every stage.",
      faq4Question: 'How does fractional sales leadership ROI compare to sales coaching?',
      faq4Answer:
        "Sales coaching improves individual rep performance. Fractional sales leadership improves the entire revenue system. A coach helps reps handle objections better. A fractional sales leader fixes the pipeline, the process, the forecast, the hiring, and the coaching — simultaneously. For most companies, coaching alone won't move the number because the constraint isn't rep skill — it's system quality.",
    },
  },
  {
    section: 'seoBuildGoToMarketStrategy',
    content: {
      heroLine1: 'How to Build a Go-to-Market Strategy',
      heroAccent: 'for a $1M–$10M B2B Business',
      heroDescription:
        "Most founders have a sales process. Few have a go-to-market strategy. The difference is what separates companies that stall at $3M from companies that break through to $10M. Here's the five-component framework.",
      ctaHeadline: 'Want to Build a GTM That Actually Produces Predictable Revenue?',
      ctaDescription:
        "In 30 minutes I can review your current GTM — ICP, message, motion, and channels — and tell you exactly where the gaps are and what to fix first.",
      aboutBio1:
        "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2:
        "The go-to-market strategy work I do with founders almost always starts the same way: pulling the last 30 closed-won deals and asking hard questions about who actually bought, why, and how. What comes out of that analysis almost always surprises founders — and it becomes the foundation of a GTM that actually produces predictable revenue instead of sporadic wins.",
      faq1Question: "Do I need a go-to-market strategy if I already have $3M in ARR?",
      faq1Answer:
        "Yes — more than ever. At $3M ARR, you've validated that some version of your GTM works. The question is whether it's built on repeatable fundamentals (clear ICP, documented process, known channels) or on founder relationships and luck. If it's the latter, scaling past $5M will be much harder than it should be. A formal GTM review at $3M–$5M ARR is one of the highest-leverage investments a founder can make.",
      faq2Question: 'How often should a go-to-market strategy be revised?',
      faq2Answer:
        "The core ICP and value proposition should be reviewed quarterly and updated when the data changes — when close rates shift, when win/loss patterns change, or when a new segment starts outperforming the original. The channel strategy should be reviewed monthly. Most companies under $10M are running on a GTM built in the first year and never updated — which means they're often selling to the wrong buyers with the wrong message through the wrong channels.",
      faq3Question: "What's the relationship between a go-to-market strategy and a sales playbook?",
      faq3Answer:
        "The GTM strategy defines the 'what' and 'who' — which buyers to target, with what message, through what channels. The sales playbook defines the 'how' — the specific process reps use to convert those buyers into customers. The GTM strategy should be built before the playbook, because the playbook is built around the buyer journey the GTM strategy defines. Most companies build the playbook first and wonder why it doesn't work.",
      faq4Question: 'Can a fractional sales leader help build a go-to-market strategy?',
      faq4Answer:
        "Yes — and this is one of the highest-value applications of fractional sales leadership. Building a GTM strategy requires both strategic clarity (ICP, value prop, motion) and operational execution (configuring the CRM, training reps, running pipeline reviews against the new framework). Consultants can deliver the strategy document. A fractional sales leader builds the strategy and then implements it.",
    },
  },
  {
    section: 'seoB2bSalesObjectionHandling',
    content: {
      heroLine1: 'B2B Sales Objection Handling:',
      heroAccent: 'How to Respond to the 7 Most Common Objections',
      heroDescription:
        "Every lost deal has an objection somewhere in it. Most reps respond to the objection they hear, not the one that's actually driving it. Here are the 7 most common B2B sales objections, their real root causes, and the responses that actually work.",
      ctaHeadline: 'Losing Deals to Objections You Should Be Handling?',
      ctaDescription:
        "In 30 minutes I can review your most common lost-deal objections and tell you whether the problem is rep skill, messaging, or process — and what to fix first.",
      aboutBio1:
        "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2:
        "The objections on this page are the ones I hear on call recordings every week in my engagements. Most reps struggle with them not because they're bad at sales, but because nobody has ever shown them what the root cause is. When I build a coaching program for a team, objection handling is always in the first 30 days — because fixing it moves the close rate faster than almost anything else.",
      faq1Question: 'Should sales reps memorize objection handling scripts?',
      faq1Answer:
        "Scripts are a starting point, not a destination. A rep who memorizes a script sounds like they memorized a script — which undermines the trust that drives sales. The goal is internalization: understanding the root cause of each objection and being able to respond authentically in the buyer's language. Use scripts for training, not for live calls.",
      faq2Question: "What's the most common mistake reps make with objections?",
      faq2Answer:
        "Responding immediately without diagnosing. Most objections have multiple possible root causes — and the script for one root cause is wrong for another. A price objection from a buyer who doesn't understand ROI requires a different response than a price objection from a buyer comparing against a lower-cost competitor. Ask one question before answering.",
      faq3Question: "How do you handle objections when you're not the one on the call?",
      faq3Answer:
        "This is a coaching problem. If reps are losing deals to the same objections repeatedly, the answer isn't a better script — it's a training program that teaches reps how to diagnose objections, not just respond to them. Weekly call reviews where objection handling is specifically analyzed are one of the highest-value coaching activities a fractional sales leader runs.",
      faq4Question: 'When is an objection actually a no?',
      faq4Answer:
        "When the buyer can't articulate what would need to change for them to move forward — and the cost-of-delay conversation doesn't move them. If a buyer says 'not right now' and can't tell you what 'right time' looks like, they're likely not a real opportunity. The right response is to close the loop clearly rather than chasing indefinitely. A clean no is more valuable than an uncertain maybe.",
    },
  },
]

async function seed() {
  for (const page of pages) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section: page.section, content: page.content }, { onConflict: 'section' })

    if (error) {
      console.error(`❌ ${page.section}:`, error.message)
    } else {
      console.log(`✅ ${page.section}`)
    }
  }
}

seed()
