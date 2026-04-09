require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seed() {
  const content = {
    // Hero
    heroLine1: "10 Key Benefits of Hiring a",
    heroAccent: "Fractional Sales Leader",
    heroLine3: "for Your Small Business",
    heroDescription: "Small businesses at $1M–$10M ARR get a documented sales system, a managed team, and predictable revenue growth — at 60–80% less than a full-time VP of Sales hire.",
    ctaButtonText: "Book a Working Session",

    // Who This Is For
    whoHeading: "These Benefits Apply to You If...",
    whoItem1: "You have $1M–$10M ARR and you're the one closing most of your own deals",
    whoItem2: "You've hired salespeople but they're not performing the way you expected",
    whoItem3: "You have no documented Sales Playbook — everyone sells differently",
    whoItem4: "You can't afford (or aren't ready for) a $400k full-time VP of Sales",
    whoItem5: "You're spending 40%+ of your time managing the sales team yourself",
    whoItem6: "You want predictable revenue — not just great months followed by bad ones",

    // 10 Benefits Section
    benefitsHeading: "The 10 Key Benefits of a Fractional Sales Leader",
    benefitsSubheading: "These are not theoretical. Every benefit on this list comes from real engagements with small businesses at the $1M–$10M ARR stage.",

    benefit1Title: "You Get a Documented Sales System",
    benefit1Desc: "Most small businesses have no Sales Playbook — every rep improvises. A fractional sales leader builds the document that captures what works: ICP, discovery scripts, objection handling, pipeline stages, onboarding checklist. This is what turns founder knowledge into a repeatable system.",
    benefit2Title: "Someone Actually Manages Your Sales Team",
    benefit2Desc: "The founder shouldn't be running 1:1s, reviewing pipelines, and coaching reps. A fractional sales leader manages the team week-to-week — pipeline reviews, performance conversations, activity accountability — so you get management without doing it yourself.",
    benefit3Title: "Faster Rep Ramp Time",
    benefit3Desc: "Without a system, new sales reps take 6–9 months to get productive. With a Sales Playbook, Position Contracts, and a daily training structure, that ramp drops to 60–90 days. That's real revenue recovered — every quarter, with every hire.",
    benefit4Title: "You Know What Each Rep Is Accountable For",
    benefit4Desc: "Position Contracts define exactly what each salesperson is responsible for — calls, meetings, pipeline value, conversion rates. No more \"I thought I was doing a good job.\" Accountability becomes objective and easy to have conversations about.",
    benefit5Title: "A Pipeline That Reflects Reality",
    benefit5Desc: "Most small business pipelines are full of wishful thinking. A fractional sales leader rebuilds pipeline stages around action — what the prospect has actually done — so you can forecast with confidence and prioritize where to focus.",
    benefit6Title: "60–80% Less Than a Full-Time VP",
    benefit6Desc: "A full-time VP of Sales costs $400k–$500k all-in per year. A fractional sales leader costs $6k–$15k/month — with no equity, no benefits, and a 30-day exit clause. For small businesses at $1M–$10M ARR, the math is overwhelmingly in favor of fractional.",
    benefit7Title: "You Can Start in Weeks, Not Months",
    benefit7Desc: "Hiring a VP of Sales takes 3–6 months, then 90 days to ramp. A fractional sales leader starts in 2–4 weeks, begins the Sales Audit in week one, and has the Playbook drafted by week eight. The clock on revenue improvement starts immediately.",
    benefit8Title: "Lower Risk, Easy Exit",
    benefit8Desc: "Mis-hiring a VP of Sales sets a small business back 18–24 months. A fractional engagement has a 30-day exit clause. If it's not working, you're out. That asymmetry — big upside, limited downside — is one of the clearest benefits for small businesses with limited runway.",
    benefit9Title: "The Founder Gets Time Back",
    benefit9Desc: "The single biggest cost in most small businesses is the founder spending 40–60% of their time on sales. A fractional sales leader takes over the sales function — managing the team, running the pipeline, owning the process — so the founder can focus on product, customers, and fundraising.",
    benefit10Title: "You Build the Foundation for a Full-Time Hire",
    benefit10Desc: "The right sequence: fractional first, full-time VP later. When you hire a full-time VP of Sales, they should inherit a working system — not build one from scratch. A fractional sales leader creates that system, so your VP hire leads a team instead of being handed a blank slate.",

    // Testimonials
    testimonialsHeading: "Small Business Owners on Working With a Fractional Sales Leader",
    testimonial1Quote: "Thank you Louie for what you have done in the past year. I believe our sales are far better than where they were a year ago, great job!",
    testimonial1Name: "Kevin Zhao",
    testimonial1Title: "CEO, ZBSPOS.com",
    testimonial2Quote: "Louie, your fresh perspective and hard work have been instrumental in driving our sales results. You've helped us establish a solid foundation with documented processes, better pipeline management, and a more accountable sales culture.",
    testimonial2Name: "Brian Torrence",
    testimonial2Title: "CEO, Strategic Sales & Marketing",

    // FAQs
    faq1Question: "What are the main benefits of hiring a fractional sales leader for a small business?",
    faq1Answer: "The main benefits are: (1) a documented Sales Playbook that makes your process repeatable, (2) week-to-week team management so the founder isn't running sales, (3) faster rep onboarding and ramp time, (4) pipeline architecture based on reality rather than optimism, (5) KPIs and accountability systems for each rep, and (6) all of this at 60–80% less than a full-time VP of Sales.",
    faq2Question: "How is a fractional sales leader different from a sales consultant?",
    faq2Answer: "A consultant advises from the outside. A fractional sales leader gets embedded in your business 2–3 days per week. They manage your team, run your pipeline reviews, build your Playbook, interview your sales hires, and own the sales function. The key difference: accountability for results, not just quality of advice.",
    faq3Question: "What size small business benefits most from a fractional sales leader?",
    faq3Answer: "Companies with $1M–$10M ARR see the highest ROI. You've proven your product works and closed your first customers — now you need a system to scale what you've done. At this stage, you need real sales leadership, but a full-time VP isn't justified yet. That's exactly the gap a fractional sales leader fills.",
    faq4Question: "How much does a fractional sales leader cost for a small business?",
    faq4Answer: "Typically $6,000–$15,000 per month depending on scope and time commitment. That compares to $400,000–$500,000 all-in for a full-time VP of Sales (base, OTE, equity, benefits). Most small businesses that run the math realize the fractional model is not just cheaper — it's often more effective at this stage because the fractional leader has already built systems at 10+ companies.",
    faq5Question: "How quickly will I see results from hiring a fractional sales leader?",
    faq5Answer: "Most small businesses see meaningful improvements in the first 90 days. The first month focuses on the Sales Audit and understanding reality. Month two is Playbook and system installation. By month three, your reps are operating from a documented process, your pipeline reflects real deals, and you have a weekly rhythm that doesn't require the founder to run every meeting.",

    // CTA
    ctaHeadline: "See Which Benefits Apply to Your Business",
    ctaDescription: "30 minutes. I'll ask about your current sales situation and tell you which of these benefits are most relevant — and what it would take to get there.",
  };

  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'seoBenefitsFSL', content }, { onConflict: 'section' });

  if (error) {
    console.error('Error seeding seoBenefitsFSL:', error);
    process.exit(1);
  }

  console.log('✓ Seeded seoBenefitsFSL successfully');
}

seed();
