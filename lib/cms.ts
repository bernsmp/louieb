/**
 * Supabase CMS API utilities
 * 
 * Fetches content from Supabase for the frontend.
 * Falls back to defaults if Supabase is unavailable.
 */

import { cache } from 'react'
import { supabaseAdmin, isSupabaseConfigured } from './supabase'
import type { 
  SiteContentRow, 
  TestimonialRow, 
  FAQItemRow, 
  VideoRow,
  ServiceRow,
  ProcessStepRow
} from './supabase'

// Feature flag to enable/disable Supabase CMS
const USE_SUPABASE_CMS = process.env.USE_SUPABASE_CMS === 'true'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ServiceItem {
  title: string
  description: string
  icon?: string
  highlight?: boolean
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface FAQItem {
  question: string
  answer: string
}

interface BenefitItem {
  title: string
  description: string
  icon?: string
}

interface ToolItem {
  name: string
  description: string
  href: string
  icon?: string
}

interface VideoItem {
  videoId: string
  title: string
  description?: string
}

interface CourseModule {
  title: string
  description: string
  benefit?: string
  icon?: string
}

interface ResultStat {
  metric: string
  description: string
  source?: string
}

interface FSLPageData {
  headline: string
  tagline: string
  introHook: string
  introParagraph1: string
  introParagraph2: string
  introParagraph3: string
  introParagraph4: string
  playlistId: string
  videos: VideoItem[]
  faqs: FAQItem[]
  finalCtaHeadline: string
  finalCtaButtonText: string
  finalCtaDescription: string
  // Section titles
  videosSectionHeadline: string
  videosSectionSubheadline: string
  videosPlaylistButtonText: string
  faqSectionHeadline: string
  faqSectionSubheadline: string
  introCtaNote: string
  finalCtaSecondaryText: string
}

interface SiteSettings {
  hero: {
    headline: string
    tagline: string
    description: string
    videoId: string
    ctaPrimary: { text: string; url: string }
    ctaSecondary: { text: string; url: string }
  }
  credentials: {
    primary: string
    secondary: string
  }
  fslPage: FSLPageData
  about: {
    headline: string
    headlineAccent: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
    calloutText: string
    stat1Value: string
    stat1Label: string
    stat2Value: string
    stat2Label: string
    stat3Value: string
    stat3Label: string
  }
  services: {
    headline: string
    subheadline: string
    items: ServiceItem[]
  }
  process: {
    headline: string
    subheadline: string
    steps: ProcessStep[]
  }
  valueProposition: {
    headline: string
    subheadline: string
    description: string
    ctaText: string
  }
  faq: {
    headline: string
    subheadline: string
    items: FAQItem[]
  }
  awards: {
    headline: string
    subheadline: string
    imageUrl: string
    description: string
  }
  testimonialsSection: {
    headline: string
    subheadline: string
  }
  fractionalSalesLeader: {
    headline: string
    headlineAccent: string
    hook: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
    paragraph4: string
    calloutText: string
    ctaText: string
    ctaUrl: string
  }
  social: {
    linkedin: string
    youtube: string
    calendly: string
  }
  contact: {
    email: string
    phone: string
  }
  contactSection: {
    headline: string
    description: string
    emailLabel: string
    phoneLabel: string
    ctaButtonText: string
  }
  footer: {
    tagline: string
    slogan: string
    copyrightName: string
    quickLinksLabel: string
    getInTouchLabel: string
  }
  newsletter: {
    name: string
    playlistId: string
    subscribeUrl: string
  }
  newsletterPage: {
    headline: string
    tagline: string
    description: string
    ctaText: string
    benefitsHeadline: string
    benefits: BenefitItem[]
    finalCtaHeadline: string
    finalCtaDescription: string
    featuredContentHeadline: string
    featuredContentDescription: string
    finalCtaButtonText: string
  }
  toolsPage: {
    headline: string
    description: string
    tools: ToolItem[]
  }
  roiCalculatorPage: {
    headline: string
    subheadline: string
  }
  videosPage: {
    headline: string
    subheadline: string
    playlistId: string
    featuredVideos: VideoItem[]
    featuredShortsHeadline: string
    playlistHeadline: string
    watchOnYoutubeText: string
    watchMoreButtonText: string
    individualVideosHeadline: string
    // Individual video page settings
    videoPageBackLinkText: string
    videoPageWatchButtonText: string
    videoPageMoreVideosHeadline: string
  }
  course: {
    playlistId: string
  }
  coursePage: {
    headline: string
    tagline: string
    description: string
    resultsBadge: string
    modulesHeadline: string
    modulesSubheadline: string
    modules: CourseModule[]
    previewHeadline: string
    previewVideos: VideoItem[]
    resultsHeadline: string
    resultsSubheadline: string
    results: ResultStat[]
    caseStudyQuote: string
    caseStudyAttribution: string
    finalCtaHeadline: string
    finalCtaDescription: string
    // Extra text fields
    previewSubheadline: string
    playlistHeadline: string
    playlistDescription: string
    watchOnYoutubeText: string
    finalCtaButtonText: string
    finalCtaSecondaryText: string
  }
  seo: {
    siteTitle: string
    siteDescription: string
    keywords: string
  }
  navigation: {
    logoText: string
    logoTagline: string
    navHome: string
    navArticles: string
    navVideos: string
    navNewsletter: string
    navContact: string
  }
  articlesPage: {
    headline: string
    description: string
    emptyStateText: string
    backLinkText: string
    shareLabel: string
    viewAllText: string
  }
  roiCalculatorText: {
    // Input section
    inputSectionHeadline: string
    inputSectionDescription: string
    // Result section
    resultsSectionHeadline: string
    founderLedLabel: string
    founderLedDescription: string
    badVPLabel: string
    badVPDescription: string
    fractionalLabel: string
    fractionalDescription: string
    // Savings section
    savingsSectionHeadline: string
    savingsVsFounderLabel: string
    savingsVsBadVPLabel: string
    missedRevenuePrefix: string
    missedRevenueSuffix: string
    // CTA
    ctaText: string
    ctaButtonText: string
    // Download section
    downloadButtonText: string
    downloadDescription: string
    // Disclaimer
    disclaimerText: string
  }
}

// ============================================================================
// DEFAULT VALUES
// ============================================================================

const defaultSettings: SiteSettings = {
  hero: {
    headline: 'Fractional Sales Leader',
    tagline: 'Less Spend. More Sales.',
    description: "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
    videoId: 'fCVKpcpD8tA',
    ctaPrimary: { text: 'Learn How It Works', url: '#process' },
    ctaSecondary: { text: 'Schedule a Discussion', url: 'https://calendly.com/louiebernstein/30minutes' },
  },
  credentials: {
    primary: 'LinkedIn Top Voice',
    secondary: '50+ Years Sales Experience',
  },
  fslPage: {
    headline: 'Fractional Sales Leader',
    tagline: 'Experienced sales leadership. Fraction of the cost.',
    introHook: "You built this company from nothing. Now you're stuck running sales calls when you should be running the business.",
    introParagraph1: "I get it. The jump from $1M to $10M in revenue is brutal. You know you need sales leadership, but the thought of gambling $250K+ on a VP of Sales makes your stomach turn. And those big consulting firms? They hand you a deck and disappear. That's not leadership—that's a transaction.",
    introParagraph2: "A Fractional Sales Leader is the middle path. You get an experienced sales executive—someone who's built teams, closed deals, and scaled companies—working with you part-time at a fraction of the full-time cost. I've spent 9+ years as a Fractional Sales Leader helping 50+ companies in the $1M-$10M ARR range. I've scaled a company from zero to the INC 500. I've seen what works and what doesn't.",
    introParagraph3: "What I do: build your sales playbook, hire your first reps, coach your team, and create the systems that turn chaos into predictable revenue. Not advice—action. I embed with your team until the machine runs without me.",
    introParagraph4: "Below, I answer the five questions every founder asks before hiring a Fractional Sales Leader. Watch the videos or read the FAQs—then decide if this model fits your company.",
    playlistId: 'PL7HfhnqHyzRn0MoquOVlTgYAJPHN4_6wu',
    videos: [
      { videoId: '86r0G5LfZ2s', title: 'What is Fractional Sales Leadership?', description: "The basics. What a Fractional Sales Leader actually is, how the model works, and why it's become the go-to option for $1M-$10M companies that need sales leadership without the $250K+ VP gamble." },
      { videoId: 'apXilJj2924', title: "Here's What a Fractional Sales Leader Does", description: 'The day-to-day. Building your sales playbook, coaching your reps, managing your pipeline, and implementing the systems that turn chaos into predictable revenue.' },
      { videoId: 'wnXLkMoYMDY', title: 'Questions to Ask a Fractional Sales Leader', description: "The interview. The specific questions you need to ask before signing an engagement. What to look for, what to avoid, and how to spot someone who actually knows what they're doing." },
      { videoId: 'TObs-tUQG7E', title: 'Fractional Sales Leader vs Sales VP', description: 'The comparison. When a fractional model makes sense, when you need a full-time hire, and how to make the right decision for your specific situation and growth stage.' },
      { videoId: 'COBBnVv8ZYE', title: 'Is a Fractional Sales Leader Right for Your Business?', description: "The decision. An honest look at who benefits most from fractional sales leadership—and who doesn't. I'll tell you straight if this model fits your company." },
    ],
    faqs: [
      { question: 'What is a Fractional Sales Leader?', answer: "A Fractional Sales Leader is an experienced sales executive who works with your company part-time instead of full-time. You get the expertise of a VP of Sales—building processes, coaching reps, managing pipeline—without the $250K+ salary, benefits, and equity. I've worked as a Fractional Sales Leader for 9+ years, helping 50+ companies in the $1M-$10M ARR range build repeatable sales systems." },
      { question: 'How much does a Fractional Sales Leader cost?', answer: "Fractional Sales Leaders typically cost 30-50% of what you'd pay a full-time VP of Sales. Instead of $250K-$400K annually (salary + benefits + equity), you're looking at $5K-$15K per month depending on engagement scope. The ROI comes fast—most of my clients see measurable improvement in their sales process within 90 days." },
      { question: 'When should I hire a Fractional Sales Leader?', answer: "The sweet spot is $1M-$10M ARR. You've proven product-market fit, you're closing deals, but you're still the one running sales. You need someone to build the system, hire the team, and create the playbook—but you're not ready for a $250K+ full-time hire. That's exactly when a Fractional Sales Leader makes sense." },
      { question: "What's the difference between a Fractional Sales Leader and a sales consultant?", answer: "Consultants give advice. I do the work. A Fractional Sales Leader embeds with your team, runs your pipeline meetings, coaches your reps, and builds your sales playbook. I'm not handing you a deck and walking away—I'm in the trenches with you until the system is running." },
      { question: 'How many hours per week does a Fractional Sales Leader work?', answer: "It depends on your needs. Most engagements are 10-20 hours per week. That's enough time to run weekly pipeline reviews, coach reps, build processes, and drive meaningful change. As your team matures and systems take hold, the hours can flex down." },
      { question: 'Can a Fractional Sales Leader help me hire my first sales reps?', answer: "Absolutely. That's one of the most valuable things I do. I've developed a hiring system with 120+ interview questions specifically designed for sales roles. I'll help you write the job description, screen candidates, run interviews, and make the right hire the first time—so you don't waste months on a bad fit." },
    ],
    finalCtaHeadline: 'Ready to Stop Being the Bottleneck?',
    finalCtaButtonText: 'Schedule a 30-Minute Call',
    finalCtaDescription: "Let's talk about your sales challenges. No pitch, no pressure—just a conversation about whether a Fractional Sales Leader makes sense for your company.",
    // Section titles
    videosSectionHeadline: 'Everything You Need to Know',
    videosSectionSubheadline: 'Five videos that answer the questions every founder asks before hiring a Fractional Sales Leader.',
    videosPlaylistButtonText: 'Watch Full Playlist on YouTube',
    faqSectionHeadline: 'Frequently Asked Questions',
    faqSectionSubheadline: 'Straight answers to the questions I hear most often.',
    introCtaNote: 'No pitch. Just a conversation about your sales challenges.',
    finalCtaSecondaryText: 'Learn More About Me',
  },
  about: {
    headline: 'Fractional Sales Leadership',
    headlineAccent: 'for $1M–$10M ARR Companies',
    paragraph1: 'With over 9 years of experience as a Fractional Sales Leader, I specialize in helping technical and operational founders of companies with $1M–$10M ARR build repeatable sales systems and transition from leading sales themselves to managing high-performing sales teams.',
    paragraph2: 'My focus is on delivering systematic frameworks tailored for the critical growth stage where founders must document sales processes, onboard their first sales reps, and scale effectively without becoming a bottleneck.',
    paragraph3: 'I bring extensive expertise in sales leadership, sales and marketing alignment, and sales team development. My mission is to empower founders to optimize their time and resources while building scalable sales teams capable of generating predictable revenue.',
    calloutText: 'With a proven approach, I collaborate with businesses to develop actionable sales pipelines, implement effective scorecards for hiring, and establish reliable sales processes that drive sustainable growth.',
    stat1Value: '9+',
    stat1Label: 'Years as Fractional Sales Leader',
    stat2Value: '$1M–$10M',
    stat2Label: 'ARR Companies Served',
    stat3Value: 'INC 500',
    stat3Label: 'Scaled from Zero',
  },
  services: {
    headline: 'What I Offer',
    subheadline: 'Comprehensive sales leadership services designed to transform your team',
    items: [
      { title: 'Sales Team Organization', description: 'Structure your sales team for maximum efficiency. Clear roles, accountability, and reporting systems that keep everyone aligned.', icon: '/icons/business-team-6621979.svg', highlight: false },
      { title: 'Sales Process Optimization', description: 'Streamline your sales process from lead to close. Eliminate bottlenecks and create a repeatable, scalable system.', icon: '/icons/efficiency-6622003.svg', highlight: true },
      { title: 'Sales Team Training', description: 'Equip your team with the skills and knowledge they need. Customized training programs that address your specific challenges.', icon: '/icons/guidance-6622007.svg', highlight: false },
      { title: 'Sales Playbook Development', description: 'Create a comprehensive playbook that ensures consistency. Scripts, emails, and processes that get everyone on the same page.', icon: '/icons/business-plan-11962831.svg', highlight: false },
      { title: 'Pipeline Management', description: 'Implement proven pipeline management strategies. Forecast accurately and close more deals with predictable results.', icon: '/icons/scalable-11962814.svg', highlight: true },
      { title: 'CRM Implementation', description: 'Set up and optimize your CRM for real results. Data-driven insights that help you make better decisions faster.', icon: '/icons/analytics-11962812.svg', highlight: false },
    ],
  },
  process: {
    headline: 'How It Works',
    subheadline: 'A proven process that delivers measurable results',
    steps: [
      { number: '01', title: 'Initial Consultation', description: "We start with a deep dive into your current sales operations. I'll assess your team, processes, and challenges to create a customized plan." },
      { number: '02', title: 'Strategic Planning', description: "Together, we'll develop a roadmap for improvement. Clear objectives, measurable KPIs, and a timeline that works for your business." },
      { number: '03', title: 'Implementation', description: "I'll work directly with your team to implement new systems and processes. Hands-on training ensures everyone knows exactly what to do." },
      { number: '04', title: 'Optimization & Growth', description: "Continuous improvement is key. We'll monitor results, make adjustments, and scale what works to drive consistent growth." },
    ],
  },
  valueProposition: {
    headline: "It's not how much you sell.",
    subheadline: "It's how much you take home.",
    description: "Every dollar you spend on inefficient sales processes is a dollar you don't take home. Let's fix that.",
    ctaText: "Let's Get Going!",
  },
  faq: {
    headline: 'Frequently Asked Questions',
    subheadline: 'Everything you need to know about fractional sales leadership',
    items: [
      { question: 'What is fractional sales leadership?', answer: 'Fractional sales leadership is an outsourced service where an experienced sales leader works part-time with a company to organize, optimize, and train their sales team.' },
      { question: 'How does fractional sales leadership work?', answer: 'A fractional sales leader integrates with your existing sales team, assessing current processes, identifying areas for improvement, and implementing strategies to boost sales performance. They provide guidance, training, and support on a part-time basis.' },
      { question: 'Who is fractional sales leadership for?', answer: 'Fractional sales leadership is ideal for small to medium-sized businesses that want to improve their sales processes and results without the cost of hiring a full-time sales executive.' },
      { question: 'How much does fractional sales leadership cost?', answer: 'Pricing for fractional sales leadership varies depending on the scope of the engagement and the specific needs of the client. Contact Louie Bernstein for a customized quote.' },
      { question: 'What is the time commitment for fractional sales leadership?', answer: 'The time commitment is flexible and can be adapted to the client\'s needs. Engagements typically range from a few months to a year or more, with the fractional sales leader working on a part-time basis.' },
      { question: 'What results can I expect from fractional sales leadership?', answer: 'Clients can expect improved sales processes, increased team efficiency, and ultimately, higher sales revenue. Past clients have reported significant improvements in their sales performance after working with Louie Bernstein.' },
      { question: 'What is the process for working with a fractional sales leader?', answer: 'The process typically involves an initial consultation to assess the client\'s current sales situation and goals, followed by the development of a customized strategy. The fractional sales leader then works with the team to implement the strategy, provide training, and monitor progress.' },
    ],
  },
  awards: {
    headline: 'Recognized Excellence',
    subheadline: 'Award-winning sales consulting and leadership',
    imageUrl: 'https://d1yei2z3i6k35z.cloudfront.net/1671832/64e3c2e5505e3_fourawards.png',
    description: 'Louie Bernstein has received four prestigious awards for excellence in sales consulting and leadership.',
  },
  testimonialsSection: {
    headline: 'What Clients Say',
    subheadline: 'Real results from real businesses',
  },
  fractionalSalesLeader: {
    headline: 'Fractional Sales Leader for the',
    headlineAccent: 'Founder Trapped in Sales',
    hook: "You built this. From nothing. Now you're stuck.",
    paragraph1: "That brutal climb from $1M to $10M in revenue? It's a trap. You know you're the bottleneck, the one still running sales calls, but the thought of a $250k+ VP of Sales gamble makes your stomach churn. And those big consulting firms with their \"proprietary systems\"? They've never felt the grind of scaling from zero. They don't get it.",
    paragraph2: 'I do.',
    paragraph3: "A Fractional Sales Leader isn't just another line item on your P&L. It's your path to freedom. It's for the technical or operational founder who needs more than just a manager; you need a partner who has walked this exact path and scaled a company from the ground up to the INC 500.",
    paragraph4: "Forget the corporate jargon. This is about building a repeatable sales machine tailored for your business, so you can transition from being the Chief Salesperson back to being the CEO. We'll build your sales playbook, coach your team, and implement a pipeline you can actually trust.",
    calloutText: "Stop letting sales management steal your time and kill your growth. Let's build the system that frees you.",
    ctaText: "Let's Talk",
    ctaUrl: 'https://calendly.com/louiebernstein/30minutes',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/sales-processes/',
    youtube: 'https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
    calendly: 'https://calendly.com/louiebernstein/30minutes',
  },
  contact: {
    email: 'Louie@LouieBernstein.com',
    phone: '(404)808-5326',
  },
  contactSection: {
    headline: "Let's Talk",
    description: 'Ready to transform your sales team? Get in touch today.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    ctaButtonText: 'Schedule a 30-Minute Call',
  },
  footer: {
    tagline: 'Fractional Sales Leader',
    slogan: 'Less Spend. More Sales.',
    copyrightName: 'Louie Bernstein',
    quickLinksLabel: 'Quick Links',
    getInTouchLabel: 'Get In Touch',
  },
  newsletter: {
    name: 'The Sunday Starter',
    playlistId: 'PL7HfhnqHyzRmd7GWRKTBURlmcC7TsbdPz',
    subscribeUrl: 'https://www.linkedin.com/newsletters/the-sunday-starter-6914239256987131904/',
  },
  newsletterPage: {
    headline: 'The Sunday Starter',
    tagline: 'Delivered to Accelerate Your Success',
    description: 'Every Sunday, get actionable Business-Life insights, strategies, and tips delivered straight to your LinkedIn inbox. Join thousands of professionals who start their week right with The Sunday Starter.',
    ctaText: 'Subscribe on LinkedIn',
    benefitsHeadline: "What You'll Get",
    benefits: [
      { title: 'Weekly Insights', description: 'Actionable sales strategies and tactics you can implement immediately', icon: '/icons/analytics-11962812.svg' },
      { title: 'Real-World Examples', description: 'Case studies and lessons from actual client engagements', icon: '/icons/business-goal-11962851.svg' },
      { title: 'Growth Tips', description: 'Proven techniques to scale your sales and improve team performance', icon: '/icons/growth-6621994.svg' },
    ],
    finalCtaHeadline: 'Ready to Start Your Week Right?',
    finalCtaDescription: 'Join thousands of sales professionals who get The Sunday Starter every week',
    featuredContentHeadline: 'Featured Newsletter Content',
    featuredContentDescription: 'Watch exclusive videos and content from The Sunday Starter',
    finalCtaButtonText: 'Subscribe Now',
  },
  toolsPage: {
    headline: 'Tools',
    description: 'Free tools to help you make smarter sales decisions',
    tools: [
      {
        name: 'ROI Calculator',
        description: 'Calculate the ROI of hiring a Fractional Sales Leader vs. founder-led sales or a full-time VP hire.',
        href: '/tools/roi-calculator',
        icon: 'Calculator',
      },
    ],
  },
  roiCalculatorPage: {
    headline: 'Fractional Sales ROI Calculator',
    subheadline: 'You be the judge if a Fractional Sales Leader makes financial sense',
  },
  videosPage: {
    headline: 'Sales Videos',
    subheadline: 'The most popular sales training content, handpicked for you',
    playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
    featuredShortsHeadline: 'Featured Shorts',
    playlistHeadline: 'Complete Sales Leadership Playlist',
    watchOnYoutubeText: 'Watch on YouTube →',
    watchMoreButtonText: 'Watch More Videos on YouTube',
    individualVideosHeadline: 'Watch Individual Videos',
    // Individual video page settings
    videoPageBackLinkText: 'All Videos',
    videoPageWatchButtonText: 'Watch on YouTube',
    videoPageMoreVideosHeadline: 'More Videos',
    featuredVideos: [
      { videoId: 'ScygjngNNY4', title: 'Build This Before Hiring Salespeople', description: "Don't hire sales reps until you have a playbook. Learn why building the system first is crucial for scaling revenue." },
      { videoId: 'LgaJZ4R6Y-4', title: 'My 1st Sales Hire Mistake', description: 'Avoid common hiring pitfalls. Louie shares his personal experience with early sales hires and what he learned.' },
      { videoId: '40BopNISisE', title: 'Build The System Before The Team', description: "Why you need a sales system before a sales team. A fractional sales leader's perspective on sustainable growth." },
      { videoId: 'epPZ4qZBo5I', title: 'The Secret Email Step That Gets Replies', description: 'A tactical email outreach tip to increase your response rates immediately. Simple but effective.' },
    ],
  },
  course: {
    playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
  },
  coursePage: {
    headline: "The Founder's and CEO's Sales System",
    tagline: 'Build, optimize, and scale your sales team—without the full-time cost',
    description: "A complete 20-step system created by a Fractional Sales Leader who's been where you are. Decades of experience, distilled into actionable frameworks that work.",
    resultsBadge: '61% sales increase • 120+ hiring questions • 20-step system',
    modulesHeadline: 'What You Get With This Course',
    modulesSubheadline: 'A complete 20-step sales system with everything you need to build, optimize, and scale',
    modules: [
      { title: 'Hiring System That Saves Time', description: 'My complete system, including a Hiring Scorecard with 120+ questions and answers.', benefit: 'Free yourself from the stress and uncertainty of hiring.', icon: '/icons/ceo-11962845.svg' },
      { title: 'Sales Playbook with Ready-to-Use Templates', description: 'Start building your processes immediately. Turn chaos into clarity.', benefit: "It's the heart of your sales system.", icon: '/icons/business-plan-11962831.svg' },
      { title: 'LinkedIn Lead Generation System', description: 'Generate a steady stream of high-quality leads from LinkedIn.', benefit: "It's how I get all my customers.", icon: '/icons/network-11962856.svg' },
      { title: 'Streamlined Sales Pipeline', description: 'Create a high-performing sales pipeline in minutes.', benefit: 'Watch your cash flow projections improve.', icon: '/icons/scalable-11962814.svg' },
    ],
    previewHeadline: 'Preview the Course',
    previewVideos: [
      { videoId: 'TlC353ew34o', title: 'Step 1. Putting Together Your Sales Playbook' },
      { videoId: 'RuC-3vjtl6s', title: 'Step 2. Defining Your Ideal Customer (ICP)' },
      { videoId: 'Lh-iTnOT0kA', title: 'Step 3. Hiring Your First Salespeople - The Right Way' },
      { videoId: 'WxyaNBgAzrE', title: 'Step 4. The Sales Hiring System - Phase 2' },
    ],
    resultsHeadline: 'Real Results From Real Businesses',
    resultsSubheadline: 'This system has helped companies transform their sales operations',
    results: [
      { metric: '61%', description: 'Sales increase year-over-year', source: 'Client case study' },
      { metric: '120+', description: 'Hiring questions in the scorecard', source: 'Hiring System' },
      { metric: '20', description: 'Step-by-step modules', source: 'Complete System' },
      { metric: '588', description: 'Pages of sales training content', source: 'Professional Salesperson Guide' },
    ],
    caseStudyQuote: 'Louie helped us increase sales 61% year-over-year working on a part-time arrangement as a fractional sales manager.',
    caseStudyAttribution: 'Client Case Study',
    finalCtaHeadline: 'Start Building Your Sales System Today',
    finalCtaDescription: 'Get instant access to all 20 modules, templates, scripts, and resources',
    // Extra text fields
    previewSubheadline: "Watch the first modules to see what's inside",
    playlistHeadline: 'Complete Course Playlist',
    playlistDescription: 'Watch all 20 modules, download templates, and get lifetime access to the complete course',
    watchOnYoutubeText: 'Watch on YouTube',
    finalCtaButtonText: 'Watch on YouTube',
    finalCtaSecondaryText: 'Have Questions? Contact Me',
  },
  seo: {
    siteTitle: 'Louie Bernstein - Fractional Sales Leader',
    siteDescription: 'LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems.',
    keywords: 'fractional sales leader, sales consulting, sales team optimization',
  },
  navigation: {
    logoText: 'Louie Bernstein',
    logoTagline: 'Fractional Sales Leader',
    navHome: 'Home',
    navArticles: 'Articles',
    navVideos: 'Videos',
    navNewsletter: 'Newsletter',
    navContact: 'Contact',
  },
  articlesPage: {
    headline: 'Articles',
    description: 'Expert insights on sales leadership and team optimization',
    emptyStateText: 'Articles coming soon. Check back for expert insights on sales leadership.',
    backLinkText: 'Back to Articles',
    shareLabel: 'Share this article:',
    viewAllText: 'View All Articles',
  },
  roiCalculatorText: {
    // Input section
    inputSectionHeadline: 'Your Numbers',
    inputSectionDescription: 'Adjust these values to match your company',
    // Result section
    resultsSectionHeadline: '6-Month Cost Comparison',
    founderLedLabel: 'Founder-Led Sales',
    founderLedDescription: '{hours} hrs/week × {rate}/hr (from revenue)',
    badVPLabel: 'Bad VP Hire',
    badVPDescription: 'Includes salary + turnover costs',
    fractionalLabel: 'Fractional Sales Leader',
    fractionalDescription: '20 hours/week for 26 weeks',
    // Savings section
    savingsSectionHeadline: 'Your Potential Savings',
    savingsVsFounderLabel: 'vs. Founder-Led Sales',
    savingsVsBadVPLabel: 'vs. Bad VP Hire',
    missedRevenuePrefix: 'Plus: Without proper sales leadership, you\'re leaving an estimated',
    missedRevenueSuffix: 'on the table over 6 months from missed opportunities.',
    // CTA
    ctaText: 'Ready to see what a Fractional Sales Leader can do for your business?',
    ctaButtonText: "Let's Talk",
    // Download section
    downloadButtonText: 'Download the complete Fractional Sales Leadership pricing calculator',
    downloadDescription: 'Compare against Founder-Led Sales, Hiring a Sales VP, and hiring a Fractional Sales Leader.',
    // Disclaimer
    disclaimerText: 'Note: This calculator shows top-line impact only. Gross and net profit are not calculated.',
  },
}

// ============================================================================
// DEFAULT TESTIMONIALS
// ============================================================================

interface Testimonial {
  id?: string
  quote: string
  author: string
  role?: string
  company?: string
  image?: { url: string } | null
  featured?: boolean
  displayOrder?: number
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "When Louie came on board he wrote and organized our outbound scripts and emails. We now had everyone working off the same playbook, and it gave us consistency.",
    author: "Neal Reynolds",
    role: "CEO",
    company: "BankMarketingCenter.com",
  },
  {
    quote: "Thank you Louie for what you have done in the past year. I believe our sales are far better than where they were a year ago, great job.",
    author: "Kevin Zhao",
    role: "CEO",
    company: "ZBS POS",
  },
  {
    quote: "You taught me a great deal, the lessons will always stick with me. Your teachings have contributed to me being a better sales professional.",
    author: "Laura H.",
    role: "Sales Tech Strategist",
  },
  {
    quote: "I worked for Louie for over four years. During that time our team had constant sales growth. Louie's leadership and sales processes were key to that growth.",
    author: "David Yasson",
    role: "Group Manager, Strategic Accounts",
    company: "Intuit",
  },
  {
    quote: "In the thirty years I have had the privilege to know and work with Louie, I have observed him to be organized, efficient, extremely competent, and have an excellent rapport with people.",
    author: "Jim Nelms",
    role: "Chief Information Security Officer",
  },
  {
    quote: "If you needed help closing a deal, Louie was your man. He helped me to improve my social skills and learn how to speak to people in a way that would get them to like and trust me.",
    author: "Richard Adrian, CEM",
    role: "Building Automation Systems Sales Engineer",
  },
  {
    quote: "Louie is a highly effective and very successful sales leader. He developed processes that allow him to be on top of all details, making him extremely efficient.",
    author: "Stephen W.",
    role: "CEO, Active Angel Investor",
  },
  {
    quote: "His professionalism, his great desire to succeed, his professional ethics, as well as leadership gave me confidence to do many things in my own career.",
    author: "Christopher H. Short",
    role: "Software Engineering, CIO, CTO",
  },
  {
    quote: "He is one of the best general managers that I have worked with and is a great leader.",
    author: "Victor Hodges - CISSP",
    role: "Information Systems Specialist - Infosec",
  },
  {
    quote: "Louie is a great leader. His energy and positive business strategies are infectious. I learned a great deal working for Louie.",
    author: "Laura Diem",
    role: "Operations and Customer Experience",
  },
  {
    quote: "Not to be cliché, but Louie has forgotten more about sales and marketing than most people know. He is a tenacious, hard-working competitor.",
    author: "Dan McDade",
    role: "Managing Partner @ Prospect-Experience | B2B Marketing Expert",
  },
]

// ============================================================================
// SUPABASE DATA FETCHING
// ============================================================================

/**
 * Fetch all site content sections from Supabase
 */
async function fetchSiteContentFromSupabase(): Promise<Record<string, Record<string, unknown>>> {
  if (!supabaseAdmin) return {}

  try {
    const { data, error } = await supabaseAdmin
      .from('site_content')
      .select('section, content')

    if (error) {
      console.warn('[CMS] Error fetching site content:', error.message)
      return {}
    }

    // Convert array to object keyed by section
    const contentMap: Record<string, Record<string, unknown>> = {}
    for (const row of data as SiteContentRow[]) {
      contentMap[row.section] = row.content as Record<string, unknown>
    }
    return contentMap
  } catch (error) {
    console.warn('[CMS] Failed to fetch site content:', error)
    return {}
  }
}

/**
 * Fetch testimonials from Supabase
 */
async function fetchTestimonialsFromSupabase(): Promise<Testimonial[]> {
  if (!supabaseAdmin) return []

  try {
    const { data, error } = await supabaseAdmin
      .from('testimonials')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.warn('[CMS] Error fetching testimonials:', error.message)
      return []
    }

    return (data as TestimonialRow[]).map(row => ({
      id: row.id,
      quote: row.quote,
      author: row.author,
      role: row.role || undefined,
      company: row.company || undefined,
      image: row.image_url ? { url: row.image_url } : null,
      featured: row.featured,
      displayOrder: row.display_order,
    }))
  } catch (error) {
    console.warn('[CMS] Failed to fetch testimonials:', error)
    return []
  }
}

/**
 * Fetch FAQ items from Supabase
 */
async function fetchFAQItemsFromSupabase(page?: string): Promise<FAQItem[]> {
  if (!supabaseAdmin) return []

  try {
    let query = supabaseAdmin
      .from('faq_items')
      .select('*')
      .order('display_order', { ascending: true })

    if (page) {
      query = query.eq('page', page)
    }

    const { data, error } = await query

    if (error) {
      console.warn('[CMS] Error fetching FAQ items:', error.message)
      return []
    }

    return (data as FAQItemRow[]).map(row => ({
      question: row.question,
      answer: row.answer,
    }))
  } catch (error) {
    console.warn('[CMS] Failed to fetch FAQ items:', error)
    return []
  }
}

/**
 * Fetch videos from Supabase
 */
async function fetchVideosFromSupabase(page?: string): Promise<VideoItem[]> {
  if (!supabaseAdmin) return []

  try {
    let query = supabaseAdmin
      .from('videos')
      .select('*')
      .order('display_order', { ascending: true })

    if (page) {
      query = query.eq('page', page)
    }

    const { data, error } = await query

    if (error) {
      console.warn('[CMS] Error fetching videos:', error.message)
      return []
    }

    return (data as VideoRow[]).map(row => ({
      videoId: row.youtube_id,
      title: row.title,
      description: row.description || undefined,
    }))
  } catch (error) {
    console.warn('[CMS] Failed to fetch videos:', error)
    return []
  }
}

/**
 * Fetch only featured shorts from Supabase (is_featured_short = true, max 4)
 */
async function fetchFeaturedShortsFromSupabase(): Promise<VideoItem[]> {
  if (!supabaseAdmin) return []

  try {
    const { data, error } = await supabaseAdmin
      .from('videos')
      .select('*')
      .eq('is_featured_short', true)
      .order('display_order', { ascending: true })
      .limit(4)

    if (error) {
      console.warn('[CMS] Error fetching featured shorts:', error.message)
      return []
    }

    return (data as VideoRow[]).map(row => ({
      videoId: row.youtube_id,
      title: row.title,
      description: row.description || undefined,
    }))
  } catch (error) {
    console.warn('[CMS] Failed to fetch featured shorts:', error)
    return []
  }
}

/**
 * Fetch services from Supabase
 */
async function fetchServicesFromSupabase(): Promise<ServiceItem[]> {
  if (!supabaseAdmin) return []

  try {
    const { data, error } = await supabaseAdmin
      .from('services')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.warn('[CMS] Error fetching services:', error.message)
      return []
    }

    return (data as ServiceRow[]).map(row => ({
      title: row.title,
      description: row.description,
      icon: row.icon || undefined,
      highlight: row.highlight,
    }))
  } catch (error) {
    console.warn('[CMS] Failed to fetch services:', error)
    return []
  }
}

/**
 * Fetch process steps from Supabase
 */
async function fetchProcessStepsFromSupabase(): Promise<ProcessStep[]> {
  if (!supabaseAdmin) return []

  try {
    const { data, error } = await supabaseAdmin
      .from('process_steps')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.warn('[CMS] Error fetching process steps:', error.message)
      return []
    }

    return (data as ProcessStepRow[]).map(row => ({
      number: row.step_number,
      title: row.title,
      description: row.description,
    }))
  } catch (error) {
    console.warn('[CMS] Failed to fetch process steps:', error)
    return []
  }
}

// ============================================================================
// MERGE SETTINGS
// ============================================================================

function deepMerge<T extends Record<string, unknown>>(defaults: T, overrides: Partial<T>): T {
  const result = { ...defaults }
  
  for (const key in overrides) {
    if (overrides[key] !== undefined && overrides[key] !== null) {
      if (
        typeof defaults[key] === 'object' &&
        defaults[key] !== null &&
        !Array.isArray(defaults[key]) &&
        typeof overrides[key] === 'object' &&
        !Array.isArray(overrides[key])
      ) {
        // Recursively merge nested objects
        result[key] = deepMerge(
          defaults[key] as Record<string, unknown>,
          overrides[key] as Record<string, unknown>
        ) as T[Extract<keyof T, string>]
      } else {
        // Override primitive values and arrays
        result[key] = overrides[key] as T[Extract<keyof T, string>]
      }
    }
  }
  
  return result
}

function mergeSettings(
  defaults: SiteSettings,
  siteContent: Record<string, Record<string, unknown>>,
  services: ServiceItem[],
  processSteps: ProcessStep[],
  homepageFAQs: FAQItem[],
  fslPageFAQs: FAQItem[],
  featuredVideos: VideoItem[],
  fslPageVideos: VideoItem[],
  courseVideos: VideoItem[]
): SiteSettings {
  return {
    hero: deepMerge(defaults.hero, (siteContent.hero || {}) as Partial<SiteSettings['hero']>),
    credentials: deepMerge(defaults.credentials, (siteContent.credentials || {}) as Partial<SiteSettings['credentials']>),
    fslPage: {
      headline: (siteContent.fslPage?.headline as string) || defaults.fslPage.headline,
      tagline: (siteContent.fslPage?.tagline as string) || defaults.fslPage.tagline,
      introHook: (siteContent.fslPage?.introHook as string) || defaults.fslPage.introHook,
      introParagraph1: (siteContent.fslPage?.introParagraph1 as string) || defaults.fslPage.introParagraph1,
      introParagraph2: (siteContent.fslPage?.introParagraph2 as string) || defaults.fslPage.introParagraph2,
      introParagraph3: (siteContent.fslPage?.introParagraph3 as string) || defaults.fslPage.introParagraph3,
      introParagraph4: (siteContent.fslPage?.introParagraph4 as string) || defaults.fslPage.introParagraph4,
      playlistId: (siteContent.fslPage?.playlistId as string) || defaults.fslPage.playlistId,
      videos: fslPageVideos.length > 0 ? fslPageVideos : defaults.fslPage.videos,
      faqs: fslPageFAQs.length > 0 ? fslPageFAQs : defaults.fslPage.faqs,
      finalCtaHeadline: (siteContent.fslPage?.finalCtaHeadline as string) || defaults.fslPage.finalCtaHeadline,
      finalCtaButtonText: (siteContent.fslPage?.finalCtaButtonText as string) || defaults.fslPage.finalCtaButtonText,
      finalCtaDescription: (siteContent.fslPage?.finalCtaDescription as string) || defaults.fslPage.finalCtaDescription,
      // Section titles
      videosSectionHeadline: (siteContent.fslPage?.videosSectionHeadline as string) || defaults.fslPage.videosSectionHeadline,
      videosSectionSubheadline: (siteContent.fslPage?.videosSectionSubheadline as string) || defaults.fslPage.videosSectionSubheadline,
      videosPlaylistButtonText: (siteContent.fslPage?.videosPlaylistButtonText as string) || defaults.fslPage.videosPlaylistButtonText,
      faqSectionHeadline: (siteContent.fslPage?.faqSectionHeadline as string) || defaults.fslPage.faqSectionHeadline,
      faqSectionSubheadline: (siteContent.fslPage?.faqSectionSubheadline as string) || defaults.fslPage.faqSectionSubheadline,
      introCtaNote: (siteContent.fslPage?.introCtaNote as string) || defaults.fslPage.introCtaNote,
      finalCtaSecondaryText: (siteContent.fslPage?.finalCtaSecondaryText as string) || defaults.fslPage.finalCtaSecondaryText,
    },
    about: deepMerge(defaults.about, (siteContent.about || {}) as Partial<SiteSettings['about']>),
    services: {
      ...deepMerge(
        { headline: defaults.services.headline, subheadline: defaults.services.subheadline },
        (siteContent.servicesSection || {}) as Partial<{ headline: string; subheadline: string }>
      ),
      items: services.length > 0 ? services : defaults.services.items,
    },
    process: {
      ...deepMerge(
        { headline: defaults.process.headline, subheadline: defaults.process.subheadline },
        (siteContent.processSection || {}) as Partial<{ headline: string; subheadline: string }>
      ),
      steps: processSteps.length > 0 ? processSteps : defaults.process.steps,
    },
    valueProposition: deepMerge(defaults.valueProposition, (siteContent.valueProposition || {}) as Partial<SiteSettings['valueProposition']>),
    faq: {
      ...deepMerge(
        { headline: defaults.faq.headline, subheadline: defaults.faq.subheadline },
        (siteContent.faqSection || {}) as Partial<{ headline: string; subheadline: string }>
      ),
      items: homepageFAQs.length > 0 ? homepageFAQs : defaults.faq.items,
    },
    awards: deepMerge(defaults.awards, (siteContent.awards || {}) as Partial<SiteSettings['awards']>),
    testimonialsSection: deepMerge(defaults.testimonialsSection, (siteContent.testimonialsSection || {}) as Partial<SiteSettings['testimonialsSection']>),
    fractionalSalesLeader: deepMerge(defaults.fractionalSalesLeader, (siteContent.fractionalSalesLeader || {}) as Partial<SiteSettings['fractionalSalesLeader']>),
    social: deepMerge(defaults.social, (siteContent.social || {}) as Partial<SiteSettings['social']>),
    contact: deepMerge(defaults.contact, (siteContent.contact || {}) as Partial<SiteSettings['contact']>),
    contactSection: deepMerge(defaults.contactSection, (siteContent.contactSection || {}) as Partial<SiteSettings['contactSection']>),
    footer: deepMerge(defaults.footer, (siteContent.footer || {}) as Partial<SiteSettings['footer']>),
    newsletter: deepMerge(defaults.newsletter, (siteContent.newsletter || {}) as Partial<SiteSettings['newsletter']>),
    newsletterPage: deepMerge(defaults.newsletterPage, (siteContent.newsletterPage || {}) as Partial<SiteSettings['newsletterPage']>),
    toolsPage: deepMerge(defaults.toolsPage, (siteContent.toolsPage || {}) as Partial<SiteSettings['toolsPage']>),
    roiCalculatorPage: deepMerge(defaults.roiCalculatorPage, (siteContent.roiCalculatorPage || {}) as Partial<SiteSettings['roiCalculatorPage']>),
    videosPage: {
      ...deepMerge(defaults.videosPage, (siteContent.videosPage || {}) as Partial<SiteSettings['videosPage']>),
      featuredVideos: featuredVideos.length > 0 ? featuredVideos : defaults.videosPage.featuredVideos,
    },
    course: deepMerge(defaults.course, (siteContent.course || {}) as Partial<SiteSettings['course']>),
    coursePage: {
      ...deepMerge(defaults.coursePage, (siteContent.coursePage || {}) as Partial<SiteSettings['coursePage']>),
      previewVideos: courseVideos.length > 0 ? courseVideos : defaults.coursePage.previewVideos,
    },
    seo: deepMerge(defaults.seo, (siteContent.seo || {}) as Partial<SiteSettings['seo']>),
    navigation: deepMerge(defaults.navigation, (siteContent.navigation || {}) as Partial<SiteSettings['navigation']>),
    articlesPage: deepMerge(defaults.articlesPage, (siteContent.articlesPage || {}) as Partial<SiteSettings['articlesPage']>),
    roiCalculatorText: deepMerge(defaults.roiCalculatorText, (siteContent.roiCalculatorText || {}) as Partial<SiteSettings['roiCalculatorText']>),
  }
}

// ============================================================================
// PUBLIC API (cached)
// ============================================================================

/**
 * Get all site settings, merged with defaults
 */
export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  // If Supabase CMS is disabled or not configured, return defaults
  if (!USE_SUPABASE_CMS || !isSupabaseConfigured) {
    return defaultSettings
  }

  try {
    // Fetch all data in parallel
    const [
      siteContent,
      services,
      processSteps,
      homepageFAQs,
      fslPageFAQs,
      featuredVideos,
      fslPageVideos,
      courseVideos,
    ] = await Promise.all([
      fetchSiteContentFromSupabase(),
      fetchServicesFromSupabase(),
      fetchProcessStepsFromSupabase(),
      fetchFAQItemsFromSupabase('homepage'),
      fetchFAQItemsFromSupabase('fslPage'),
      fetchVideosFromSupabase('featured'),
      fetchVideosFromSupabase('fslPage'),
      fetchVideosFromSupabase('course'),
    ])

    return mergeSettings(
      defaultSettings,
      siteContent,
      services,
      processSteps,
      homepageFAQs,
      fslPageFAQs,
      featuredVideos,
      fslPageVideos,
      courseVideos
    )
  } catch (error) {
    console.warn('[CMS] Error fetching settings, using defaults:', error)
    return defaultSettings
  }
})

/**
 * Get testimonials
 */
export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  if (!USE_SUPABASE_CMS || !isSupabaseConfigured) {
    return defaultTestimonials
  }

  const testimonials = await fetchTestimonialsFromSupabase()
  return testimonials.length > 0 ? testimonials : defaultTestimonials
})

// ============================================================================
// HELPER EXPORTS
// ============================================================================

export async function getHeroData() {
  const settings = await getSiteSettings()
  return { ...settings.hero, credentials: settings.credentials }
}

export async function getAboutData() {
  const settings = await getSiteSettings()
  return settings.about
}

export async function getServicesData() {
  const settings = await getSiteSettings()
  return settings.services
}

export async function getProcessData() {
  const settings = await getSiteSettings()
  return settings.process
}

export async function getValuePropositionData() {
  const settings = await getSiteSettings()
  return settings.valueProposition
}

export async function getFAQData() {
  const settings = await getSiteSettings()
  return settings.faq
}

export async function getAwardsData() {
  const settings = await getSiteSettings()
  return settings.awards
}

export async function getTestimonialsSectionData() {
  const settings = await getSiteSettings()
  return settings.testimonialsSection
}

export async function getContactData() {
  const settings = await getSiteSettings()
  return { ...settings.contact, social: settings.social }
}

export async function getFooterData() {
  const settings = await getSiteSettings()
  return { ...settings.footer, contact: settings.contact, social: settings.social }
}

export async function getNewsletterPageData() {
  const settings = await getSiteSettings()
  return { ...settings.newsletterPage, newsletter: settings.newsletter }
}

export async function getVideosPageData() {
  const settings = await getSiteSettings()
  return settings.videosPage
}

export async function getCoursePageData() {
  const settings = await getSiteSettings()
  return { ...settings.coursePage, playlistId: settings.course.playlistId }
}

export async function getToolsPageData() {
  const settings = await getSiteSettings()
  return settings.toolsPage
}

export async function getROICalculatorPageData() {
  const settings = await getSiteSettings()
  return settings.roiCalculatorPage
}

export async function getFSLPageData() {
  const settings = await getSiteSettings()
  return settings.fslPage
}

export async function getNavigationData() {
  const settings = await getSiteSettings()
  return settings.navigation
}

export async function getArticlesPageData() {
  const settings = await getSiteSettings()
  return settings.articlesPage
}

export async function getROICalculatorTextData() {
  const settings = await getSiteSettings()
  return settings.roiCalculatorText
}

// ============================================================================
// PAGE LAYOUT ORDERING
// ============================================================================

/**
 * Page layout configuration for section ordering
 */
interface PageLayout {
  sections: string[]
}

// Default section orders for each page
const defaultPageLayouts: Record<string, PageLayout> = {
  'fractional-sales-leader': {
    sections: ['hero', 'videos', 'intro', 'faq', 'finalCta'],
  },
  'homepage': {
    sections: ['hero', 'credentials', 'about', 'valueProposition', 'services', 'process', 'testimonials', 'faq', 'contact'],
  },
}

/**
 * Fetch page layout from Supabase
 */
async function fetchPageLayoutFromSupabase(page: string): Promise<PageLayout | null> {
  if (!supabaseAdmin) return null

  try {
    const { data, error } = await supabaseAdmin
      .from('site_content')
      .select('content')
      .eq('section', `page_layout_${page}`)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // Not found - return null to use defaults
        return null
      }
      console.warn('[CMS] Error fetching page layout:', error.message)
      return null
    }

    const content = data?.content as Record<string, unknown>
    if (content && Array.isArray(content.sections)) {
      return { sections: content.sections as string[] }
    }
    return null
  } catch (error) {
    console.warn('[CMS] Failed to fetch page layout:', error)
    return null
  }
}

/**
 * Get page layout (section order) for a specific page
 */
export const getPageLayout = cache(async (page: string): Promise<PageLayout> => {
  const defaultLayout = defaultPageLayouts[page] || { sections: [] }

  if (!USE_SUPABASE_CMS || !isSupabaseConfigured) {
    return defaultLayout
  }

  const layout = await fetchPageLayoutFromSupabase(page)
  return layout || defaultLayout
})

/**
 * Get FSL page data with layout information
 */
export async function getFSLPageDataWithLayout() {
  const [settings, layout] = await Promise.all([
    getSiteSettings(),
    getPageLayout('fractional-sales-leader'),
  ])
  return {
    ...settings.fslPage,
    layout,
  }
}

// Video slug utilities
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export interface VideoWithSlug extends VideoItem {
  slug: string
}

/**
 * Get all video slugs for static generation and sitemap
 */
export async function getAllVideoSlugs(): Promise<string[]> {
  const settings = await getSiteSettings()
  return settings.videosPage.featuredVideos.map((video) => slugify(video.title))
}

/**
 * Get all videos with their slugs
 */
export async function getAllVideosWithSlugs(): Promise<VideoWithSlug[]> {
  const settings = await getSiteSettings()
  return settings.videosPage.featuredVideos.map((video) => ({
    ...video,
    slug: slugify(video.title),
  }))
}

/**
 * Get a single video by its slug
 */
export async function getVideoBySlug(slug: string): Promise<VideoWithSlug | null> {
  const videos = await getAllVideosWithSlugs()
  return videos.find((video) => video.slug === slug) || null
}

/**
 * Get featured shorts with slugs (only videos marked as is_featured_short, max 4)
 * Used for the Featured Shorts grid on the videos page
 */
export async function getFeaturedShortsWithSlugs(): Promise<VideoWithSlug[]> {
  const featuredShorts = await fetchFeaturedShortsFromSupabase()

  // Fallback to first 4 from settings if no featured shorts in DB
  if (featuredShorts.length === 0) {
    const settings = await getSiteSettings()
    return settings.videosPage.featuredVideos.slice(0, 4).map((video) => ({
      ...video,
      slug: slugify(video.title),
    }))
  }

  return featuredShorts.map((video) => ({
    ...video,
    slug: slugify(video.title),
  }))
}

// Re-export types for use in components
export type { SiteSettings, Testimonial, FAQItem, VideoItem, ServiceItem, ProcessStep, PageLayout }

