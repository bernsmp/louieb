const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const pages = [
  {
    section: 'seoHowToCreateICP',
    content: {
      heroLine1: 'How to Create an Ideal Customer Profile',
      heroAccent: 'for a B2B Sales Team',
      heroDescription: "Most founders describe the customer they want. The right ICP is built by reverse-engineering the customers you've already won. Here's the 5-step framework that turns ICP from a slide into a sales filter.",
      ctaHeadline: "Let's Define Your ICP Together",
      ctaDescription: "In 30 minutes I can assess your current pipeline, identify your actual best-fit customers from closed-won data, and map the ICP criteria that will improve your win rate immediately.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "ICP definition is one of the first things I work on in every engagement. Most founder-led companies are chasing deals that were never going to close — not because of bad selling, but because the filter was never built. When an ICP is operationalized in the CRM, win rates typically climb 10–15 percentage points within the first quarter.",
      faq1Question: 'How often should I update my ICP?',
      faq1Answer: "Revisit your ICP quarterly for the first year, then annually once it's stable. The two triggers that should force an immediate review: your win rate drops below 20% on qualified pipeline (the ICP may have drifted), or you close 3+ deals outside your current ICP definition (there may be a new segment worth formalizing). Your ICP should evolve as your product and market evolve — treating it as a fixed document is the second most common mistake after not having one at all.",
      faq2Question: "What if my ICP is too narrow and I run out of prospects?",
      faq2Answer: "This concern is almost always theoretical. A US-based SaaS company between 50–500 employees with an active sales team is a market of tens of thousands of companies. A specific ICP concentrates your effort — it doesn't eliminate your market. The founders who fear a narrow ICP are usually the ones chasing every inbound lead and closing none of them. The data almost always shows that 80% of your best customers share 3–4 specific attributes. Start there.",
      faq3Question: 'Can I have more than one ICP?',
      faq3Answer: "Yes — but not until your primary ICP is fully documented, operationalized in your CRM, and producing consistent results. Most companies at $1M–$5M ARR benefit from a singular focus. Once you've built a repeatable motion for ICP #1, you can add a second. Running two ICPs simultaneously before you have enough sales infrastructure to serve both usually means you do both poorly.",
      faq4Question: 'When should a fractional sales leader help with ICP definition?',
      faq4Answer: "ICP work is one of the first things I do in every engagement. It's foundational to everything else — outbound targeting, pipeline qualification, rep training, and forecasting all depend on it. If your team is spending more than 30% of selling time on deals that never close, or if your pipeline has a win rate below 15%, those are signals that the ICP is either missing or not being enforced.",
    },
  },
  {
    section: 'seoSalesKPIsSmallBusiness',
    content: {
      heroLine1: 'The 7 Sales KPIs Every',
      heroAccent: '$1M–$10M Business Should Track',
      heroDescription: "Most small sales teams track activity. The companies that hit their numbers track outcomes. Here are the 7 KPIs that actually predict revenue — and the vanity metrics to stop wasting time on.",
      ctaHeadline: "Let's Build Your KPI Dashboard Together",
      ctaDescription: "In 30 minutes I can audit your current sales metrics, identify the two or three numbers that matter most at your stage, and map out how to start tracking them this week.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "One of the first things I do in every engagement is pull a KPI audit — what are they tracking, what are the actual numbers, and how do they compare to what the founder believes. In most cases, the founder has been optimistic about win rates and too pessimistic about sales cycle length. Getting to accurate baselines changes every decision that follows.",
      faq1Question: "Which KPI should I focus on first if I'm starting from scratch?",
      faq1Answer: "Pipeline coverage ratio. It's the most immediate signal of whether you have enough fuel in the engine to hit your revenue target this quarter. If you're below 3× coverage, nothing else matters as much as generating more qualified opportunities. Once coverage is healthy, stage conversion rates become the most useful KPI — they show you exactly where in the process deals are stalling.",
      faq2Question: 'How do I set benchmarks when I have no historical data?',
      faq2Answer: "Start by tracking actuals for 90 days before setting targets. Pull every deal that entered your pipeline in the last 6 months and calculate the four core metrics: win rate, average cycle, stage conversion at each stage, and activity-to-meeting ratio. These become your baseline. Set your first targets at 10–15% improvement over baseline, not at industry benchmarks — benchmarks from companies with different ACVs, markets, and team sizes are largely irrelevant to your specific situation.",
      faq3Question: "My team says the KPIs feel like micromanagement. How do I handle that?",
      faq3Answer: "This objection almost always means one of two things: the KPIs are tracking activity (inputs) instead of outcomes, or the metrics are being used to punish rather than coach. KPIs should answer the question 'where is the process breaking?' not 'who is underperforming?' When reps understand that stage conversion rates help them get better — and get more support on stuck deals — the resistance usually dissolves. Lead with coaching, not scorecarding.",
      faq4Question: 'When should I bring in a fractional sales leader to help set up KPI tracking?',
      faq4Answer: "If you've been in business for more than 12 months at $1M+ ARR and can't answer 'what is our win rate on qualified pipeline?' and 'what is our average sales cycle?' — you need external help. Not because the metrics are complicated, but because without them you're making hiring, comp, and pipeline decisions on instinct. A fractional sales leader will build the tracking infrastructure and the review cadence that makes the metrics meaningful.",
    },
  },
  {
    section: 'seoWhatIsASalesCadence',
    content: {
      heroLine1: 'What Is a Sales Cadence?',
      heroAccent: 'How to Build One That Books Meetings',
      heroDescription: "A sales cadence is a structured, multi-touch outreach sequence that systematically moves a cold prospect toward a meeting. Here's the 10-touch, 28-day framework and how to build it into your outbound motion.",
      ctaHeadline: "Let's Build Your Outbound Cadence",
      ctaDescription: "In 30 minutes I can assess your current outreach process, identify where prospects are falling through the cracks, and map a cadence that fits your ICP and sales cycle.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "Building cadences is one of the first operational things I do when a company's outbound is inconsistent. In most cases, reps are abandoning prospects after 1–2 touches because there's no system telling them to persist. Installing a cadence and measuring reply rates at each step typically doubles meeting-booked rates within 60 days — not because we're doing more, but because we're doing it systematically.",
      faq1Question: 'How many touches should a sales cadence have?',
      faq1Answer: "Research consistently shows that 80% of deals require 5 or more touches before a prospect responds. Most reps stop at 1–2. A 10-touch cadence over 28 days is the right starting point for most B2B outbound programs targeting mid-market buyers. For enterprise buyers with longer research cycles, 12–15 touches over 45 days is more appropriate. The goal isn't more volume — it's systematic, multi-channel persistence that earns the meeting.",
      faq2Question: "What's the right mix of email, phone, and LinkedIn in a cadence?",
      faq2Answer: "For most B2B sales teams, a 10-touch cadence breaks down as: 4–5 emails (the highest-volume, lowest-effort channel), 3 phone attempts (the highest-conversion channel when done well), and 2–3 LinkedIn touchpoints (research, connection, and content engagement). The exact mix should be adjusted based on your ICP — senior executives are harder to reach by phone but more active on LinkedIn; operational buyers often respond better to email.",
      faq3Question: 'Should every rep have their own cadence or should there be one company cadence?',
      faq3Answer: "Start with one company cadence that every rep uses. Variation before you have data is noise, not strategy. Once you've run the cadence through 100+ prospects and have reply rates and meeting rates at each step, you can test variations. Reps can personalize within the cadence, but the structure should be consistent. Consistency is what makes the data meaningful.",
      faq4Question: 'What tools do I need to run a cadence for a small team?',
      faq4Answer: "For a team of 1–4 reps, Apollo.io (outbound + sequencing + prospecting data) handles most of what you need at a reasonable price point. HubSpot Sequences works if you're already on HubSpot and your list management is in good shape. The tool matters less than the cadence design and the discipline to actually run it — start simple and add sophistication as you learn what works.",
    },
  },
  {
    section: 'seoHowToWriteColdEmail',
    content: {
      heroLine1: 'How to Write a Cold Email That Gets Replies',
      heroAccent: 'Without Sounding Like Spam',
      heroDescription: "Most cold emails fail because they pitch instead of connect. Here's the 5-line formula that earns replies — plus real before/after rewrites of the most common cold email mistakes.",
      ctaHeadline: "Want Me to Audit Your Cold Emails?",
      ctaDescription: "In 30 minutes I can review your current outbound emails, identify the specific lines killing your reply rate, and rewrite them using the formula that consistently earns meetings.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "Cold email audits are something I do in every outbound engagement. The most common finding: emails are too long, lead with a pitch, and ask for too much too soon. The fix is almost always the same — shorten it, personalize the first line, and replace the pitch with a specific problem hypothesis. Reply rates typically double within two weeks of making those changes.",
      faq1Question: "What's the right length for a cold email?",
      faq1Answer: "Between 75 and 125 words. Short enough to read in 30 seconds on a phone, long enough to include all five lines of the formula. Every word beyond 125 is statistically decreasing your reply rate. If you find yourself writing longer, it's usually because you're trying to explain too much before earning the right to a conversation. The goal of a cold email is not to close a deal — it's to earn a meeting.",
      faq2Question: 'Should I personalize every cold email or use templates?',
      faq2Answer: "Use a template for Lines 2–5 (problem, solution, proof, CTA) — these can be consistent across an ICP segment. Personalize Line 1 (the hook) for every prospect. The hook is what makes the email feel human and relevant. Even a single personalized sentence increases reply rates significantly compared to pure templates. At scale, use tools like Apollo.io with custom fields that let you insert personalized variables automatically.",
      faq3Question: 'How do I know if my cold email is performing well?',
      faq3Answer: "Track three metrics: open rate (target 40%+), reply rate (target 3–5% for cold outreach), and positive reply rate (target 1–2%). If your open rate is low, the problem is the subject line or sender reputation. If opens are high but replies are low, the email content isn't landing. If you're getting replies but they're all negative, you're targeting the wrong ICP or leading too aggressively with a pitch.",
      faq4Question: 'How does cold email fit into a broader outbound system?',
      faq4Answer: "Cold email is one channel in a multi-touch cadence — typically the highest-volume touchpoint because it's the lowest-effort to execute at scale. It works best when combined with phone calls and LinkedIn touchpoints, not as a standalone channel. A prospect who gets a relevant email, sees your LinkedIn comment on their post two days later, and receives a voicemail the following week is far more likely to respond than one who only receives emails.",
    },
  },
  {
    section: 'seoHowToRunDiscoveryCall',
    content: {
      heroLine1: 'How to Run a Sales Discovery Call',
      heroAccent: 'That Actually Moves Deals Forward',
      heroDescription: "Most discovery calls are status checks in disguise. Here are the 8 questions that separate real discovery from a pleasant conversation that leads nowhere — plus a comparison table and call scorecard for rep coaching.",
      ctaHeadline: "Let's Shadow a Discovery Call Together",
      ctaDescription: "In 30 minutes I can review your current discovery process, identify the questions that are missing or being skipped, and build a qualification scorecard your team can use starting this week.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "I shadow calls in the first 30 days of every engagement. The most common observation: reps are spending 40% of a discovery call on product features before they've confirmed that a real problem exists. The fix is a documented discovery framework that reps use consistently. When discovery answers become required CRM fields, deal quality improves immediately because reps can't advance phantom opportunities.",
      faq1Question: 'How long should a discovery call be?',
      faq1Answer: "Book 45 minutes; run it in 30 if you get what you need. The trap most reps fall into is booking 30 minutes and using 20 of them on a product demo because they ran out of discovery time. Discovery must come first. Product comes after you've confirmed that a real problem exists, that the buyer has urgency, and that the buying team and budget are real.",
      faq2Question: 'Should I use BANT or MEDDIC in my discovery process?',
      faq2Answer: "Both are qualification frameworks, not conversation scripts. BANT (Budget, Authority, Need, Timeline) covers the minimum. MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion) is more thorough and better suited to complex B2B deals. Neither framework tells you what questions to ask — they tell you what information you need to leave the call with. The 8 questions above are a practical implementation of MEDDIC in a natural conversation flow.",
      faq3Question: 'What if the prospect wants to jump straight to pricing?',
      faq3Answer: "Acknowledge the question and redirect: 'I want to make sure any number I give you actually fits what you're trying to do — can I ask a few questions first so we're not wasting each other's time?' Most reasonable buyers accept this. If a prospect refuses to engage in discovery and only wants pricing, that's useful information: they're either in early evaluation mode or using you as a competitive benchmark for a deal they've already decided on.",
      faq4Question: 'How should reps document discovery findings?',
      faq4Answer: "Every answer from the 8 questions goes into the CRM as a required field before a deal can advance past Stage 1. 'Trigger event,' 'economic buyer name and title,' 'cost of inaction,' 'decision process,' and 'timeline' should all be required text fields — not checkboxes. Checkboxes allow reps to mark things done without actually having the information. Text fields require the rep to write what they heard, which forces the conversation to happen and creates accountability to the data.",
    },
  },
  {
    section: 'seoHowToCloseDealsNoDiscount',
    content: {
      heroLine1: 'How to Close More Deals',
      heroAccent: 'Without Discounting Your Price',
      heroDescription: "Discounting doesn't close deals — it trains buyers to wait and colleagues to expect it. Here are the 6 non-price closing levers that protect your margin and move deals to signature.",
      ctaHeadline: "Let's Fix Your Closing Process",
      ctaDescription: "In 30 minutes I can review your recent lost deals, identify whether the problem is price, value, or process, and give you the 2–3 specific changes that will protect your margin starting this quarter.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "In most of my engagements, discounting is running at 20–30% before I arrive. The underlying cause is almost always the same: reps are hearing 'it's too expensive' and treating it as a price problem when it's actually a value communication problem. The fix is never to discount — it's to rebuild the discovery process and the ROI conversation so price is never the variable that's in question.",
      faq1Question: "What do I say when a prospect directly asks for a discount?",
      faq1Answer: "'I hear you on price — let me ask a question before we go there. Is the concern about the total investment, or is it about confidence that this will deliver the result?' In most cases, the answer reveals a risk concern, not a price concern. Respond to what's actually in the way. If the concern is genuinely budget-constrained, explore scope reduction or phasing rather than discounting the same scope at a lower price.",
      faq2Question: 'Is it ever appropriate to offer a discount?',
      faq2Answer: "Yes — in specific circumstances. Multi-year contracts where the buyer is genuinely reducing your renewal risk. True budget constraints at early-stage companies where a smaller deal today builds a much larger relationship over time. And strategic accounts where a reference customer or case study creates outsized future value. The test: is the discount creating real value for your business, or are you just accepting less money because the buyer pushed back?",
      faq3Question: "My competitors always discount. How do I compete on value without matching their price?",
      faq3Answer: "You compete by making the comparison irrelevant. If you're being evaluated purely on price, you've already lost the value conversation. Go back to discovery: what does the buyer actually need to achieve? Build the ROI case for your solution. Quantify what it costs them to go with the cheaper option that doesn't fully solve the problem. A buyer who's seen the math rarely makes the decision on price alone.",
      faq4Question: 'When should I bring in a fractional sales leader to fix my pricing and discounting problems?',
      faq4Answer: "When your discount rate exceeds 15% of average deal size, when reps are discounting in the first conversation before a proposal is even built, or when you're consistently losing to lower-priced competitors on deals where you had a clear performance advantage. These are symptoms of a value positioning problem and a discovery process problem — not a pricing problem.",
    },
  },
  {
    section: 'seoSalesAccountabilityDocument',
    content: {
      heroLine1: 'Why Every Sales Team Needs',
      heroAccent: 'an Accountability Document',
      heroDescription: "Most sales teams operate on unspoken expectations. When those expectations aren't met, founders manage behavior instead of outcomes. An accountability document changes that — here's what it contains and why it's the single document that lets a founder step back.",
      ctaHeadline: "Let's Build Your Accountability System",
      ctaDescription: "In 30 minutes I can assess your current team structure, identify the accountability gaps that are keeping you involved in day-to-day selling, and show you what an accountability document would look like for your specific roles.",
      aboutBio1: "I'm Louie Bernstein — I have 50 years in business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
      aboutBio2: "I build an accountability document for every sales role in the first 60 days of every engagement. It's the document that makes every other management conversation easier — because instead of having opinions about performance, we have a shared reference for what was agreed. It's also the document that most directly enables founders to step back from managing reps day-to-day, because the system manages expectations instead of requiring the founder to.",
      faq1Question: 'How is an accountability document different from a job description?',
      faq1Answer: "A job description describes a role for recruiting. An accountability document defines performance expectations for someone already in the role. Job descriptions are written to attract candidates — they're often aspirational and broad. Accountability documents are written to create operational clarity: specific activity standards, specific KPIs with specific targets, specific decision rights, and specific consequences when standards aren't met. A rep should review their accountability document weekly, not just once during onboarding.",
      faq2Question: 'When should I create accountability documents for my team?',
      faq2Answer: "Before you hire your first quota-carrying rep — not after. The document should be part of the offer process: this is the role, these are the standards, these are the KPIs you'll own. If you already have a team without accountability documents, create them now. The conversation doesn't have to be adversarial: 'I want to be clearer about what success looks like for you and how I'll support you in getting there.' Most reps welcome the clarity — ambiguity is more stressful than high standards.",
      faq3Question: 'How specific should the activity standards be?',
      faq3Answer: "Specific enough to be measurable, not so specific that they micromanage tactics. 'Make 40 outbound touches per week' is an activity standard. 'Call prospects between 9am and 11am on Tuesdays' is micromanagement. The standards should be set by working backward from the pipeline math: if a rep needs $500K in new ARR, and your close rate is 25%, and your average stage 1 to close cycle is 90 days, how many new opportunities does the rep need to create each month? That number drives the activity standard.",
      faq4Question: 'How does a fractional sales leader use accountability documents?',
      faq4Answer: "I build an accountability document for every role in the first 60 days of an engagement. It becomes the basis for every coaching conversation, every pipeline review, and every performance discussion. When a rep is underperforming, the document tells us exactly where: activity, conversion, cycle time, or quota attainment. Without it, underperformance is a feeling. With it, underperformance is a data point — and data points have solutions.",
    },
  },
]

async function seed() {
  console.log('Seeding 7 new pages (Batch 2 + Accountability)...\n')
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
  console.log('\nDone.')
}

seed()
