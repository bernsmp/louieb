require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seed() {
  const content = {
    // Hero
    heroLine1: "Series A Companies That Scale Sales",
    heroAccent: "Build the System First.",
    heroLine3: "Smart Investors Already Know This.",
    heroDescription: "A fractional sales leader gives Series A companies a documented sales system, a managed team, and a repeatable revenue model — before you bet $400k on a full-time VP hire that may not work out.",
    ctaButtonText: "Book a Working Session",

    // Why Investors Section
    investorsHeading: "Why Smart Investors Insist on Fractional Sales Leadership at Series A",
    investorsSubheading: "Series B diligence asks one question: is this revenue repeatable? The answer gets built at Series A — or not at all.",

    // 6 Investor Reason Cards
    reason1Title: "Founder-Led Sales Doesn't Scale",
    reason1Desc: "At Series A, the founder is still the best salesperson — and that's a liability. A fractional sales leader documents what the founder does, builds the playbook, and creates a system that works without the founder in every deal.",
    reason2Title: "You Can't Afford a Mis-Hire at This Stage",
    reason2Desc: "A full-time VP of Sales at Series A costs $400k–$500k all-in — and the average tenure is 19 months. A bad hire sets you back two years. A fractional sales leader gives you senior leadership for $8k–$15k/month with a 30-day exit clause.",
    reason3Title: "Investors Need a Repeatable Revenue Model",
    reason3Desc: "Series B diligence will ask: is this revenue repeatable? Can it be replicated by new hires? A fractional sales leader builds the documented system — the Sales Playbook, pipeline architecture, and KPIs — that answers yes.",
    reason4Title: "You Need Someone Who Can Hire and Manage",
    reason4Desc: "Scaling from 2 to 5 reps at Series A is where most companies fall apart. A fractional sales leader writes scorecards, runs the interviews, onboards new hires, and manages performance — so the founders can focus on product and fundraising.",
    reason5Title: "Accountability Starts Before You Scale",
    reason5Desc: "Position Contracts and activity-based KPIs aren't a Series B initiative. They need to be built at Series A, while the team is small enough to install them cleanly. Fractional sales leaders do this from day one.",
    reason6Title: "Speed to Repeatability Is Competitive Advantage",
    reason6Desc: "The company that builds a repeatable sales system fastest wins. A fractional sales leader has done this 10+ times. They skip the learning curve your first full-time VP would take two years to climb.",

    // What They Build Section
    buildHeading: "What a Fractional Sales Leader Builds at Series A",
    buildIntro: "This is not consulting. This is hands-on system installation — the infrastructure your sales team needs to operate without the founder in every conversation.",
    buildItem1: "Sales Audit to understand the current reality — not just the founder's version of it",
    buildItem2: "Documented Sales Playbook: ICP, discovery scripts, objection handling, pipeline stages",
    buildItem3: "Hiring scorecard and onboarding process for the first 1–3 sales reps",
    buildItem4: "Position Contracts that define exactly what each rep is accountable for",
    buildItem5: "Activity-based KPIs tied to the actual sales motion, not vanity metrics",
    buildItem6: "Weekly pipeline review rhythm the team can run independently",
    buildItem7: "Daily training structure (15–33 min) that shortens rep ramp time",
    buildItem8: "CRM setup and hygiene standards so data is actionable",

    // Comparison Table
    compHeading: "Fractional Sales Leader vs. Full-Time VP at Series A",
    compSubheading: "At $1M–$10M ARR, the math strongly favors fractional leadership. Here's why.",
    comp1Category: "Cost",
    comp1Fractional: "$8,000–$15,000/month",
    comp1FullTime: "$400,000–$500,000/year all-in",
    comp2Category: "Time to start",
    comp2Fractional: "2–4 weeks",
    comp2FullTime: "3–6 months to hire + 90-day ramp",
    comp3Category: "Risk",
    comp3Fractional: "30-day exit clause",
    comp3FullTime: "6–12 months severance exposure",
    comp4Category: "Experience",
    comp4Fractional: "Has built sales systems at 10+ companies",
    comp4FullTime: "May have led one or two at scale",
    comp5Category: "Focus",
    comp5Fractional: "System-building and team management",
    comp5FullTime: "Often spends first year figuring out the company",
    comp6Category: "Right time to hire full-time",
    comp6Fractional: "When you hit $10M–$15M ARR and need full-time focus",
    comp6FullTime: "Too early at Series A for most companies",

    // Testimonials
    testimonialsHeading: "What Founders Say",
    testimonial1Quote: "When Louie came on board he wrote and organized our outbound scripts and emails. We now had everyone working off the same playbook, and it gave us consistency. Results were much easier to measure. Onboarding, and getting a new BDR productive, happen quicker too.",
    testimonial1Name: "Neal Reynolds",
    testimonial1Title: "CEO, BankMarketingCenter.com",
    testimonial2Quote: "Louie, your fresh perspective and hard work have been instrumental in driving our sales results. You've helped us establish a solid foundation with documented processes, better pipeline management, and a more accountable sales culture.",
    testimonial2Name: "Brian Torrence",
    testimonial2Title: "CEO, Strategic Sales & Marketing",

    // FAQs
    faq1Question: "What is a fractional sales leader and how does it work at Series A?",
    faq1Answer: "A fractional sales leader is an experienced sales executive who embeds part-time — typically 2–3 days per week — in your business. At Series A, they build the sales system from scratch: Sales Playbook, pipeline architecture, KPIs, hiring process, and team management. They own the sales function so the founders don't have to — without the $400k–$500k full-time VP cost.",
    faq2Question: "Why do investors insist on fractional sales leadership after Series A?",
    faq2Answer: "Smart investors at the Series A stage know that most sales failures happen because the company tried to scale a process that was never documented. A fractional sales leader builds the repeatable revenue system before hiring a full-time team. That makes the Series B diligence cleaner, the revenue more defensible, and the growth story more credible.",
    faq3Question: "When should a Series A company hire a fractional sales leader vs. a full-time VP?",
    faq3Answer: "At Series A ($1M–$10M ARR), the fractional model is almost always the right call. You need a system built — not a leader hired. A full-time VP at this stage costs $400k+, takes 3–6 months to find, and carries massive mis-hire risk. A fractional sales leader gets in immediately, builds the system, and transitions to a full-time hire once you have the processes, the team, and the revenue ($10M–$15M ARR) to justify it.",
    faq4Question: "How long do Series A companies typically work with a fractional sales leader?",
    faq4Answer: "Most engagements run 12–24 months. The first 90 days are focused on the Sales Audit, Playbook, and system installation. Months 3–12 shift to team management, hiring, and pipeline optimization. By 18–24 months, you'll have a documented system and a functioning team — and you'll know exactly what your full-time VP hire needs to inherit.",
    faq5Question: "What does a fractional sales leader cost at the Series A stage?",
    faq5Answer: "Typically $8,000–$15,000 per month depending on hours and scope. That's 60–80% less than a full-time VP of Sales all-in. For most Series A companies, it's the single highest-ROI line item in the operating budget — because it builds the system that everything else scales on.",

    // CTA
    ctaHeadline: "Let's Build Your Sales System Before You Scale It",
    ctaDescription: "30 minutes. I'll ask about your current sales motion and tell you exactly what needs to be built first. No pitch, no pressure.",
  };

  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'seoSeriesAFSL', content }, { onConflict: 'section' });

  if (error) {
    console.error('Error seeding seoSeriesAFSL:', error);
    process.exit(1);
  }

  console.log('✓ Seeded seoSeriesAFSL successfully');
}

seed();
