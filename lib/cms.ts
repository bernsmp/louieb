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
  VideoCategoryRow,
  ServiceRow,
  ProcessStepRow,
  BlogPostRow
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

interface VideoCategory {
  id: string
  name: string
  slug: string
}

interface BlogPost {
  title: string
  excerpt: string
  content: string
  linkedInUrl: string
  publishedDate: string
  image?: string
  imageAlt?: string
  author?: string
  tags?: string[]
  categoryId?: string
  categoryName?: string
  categorySlug?: string
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
  blogPage: {
    headline: string
    subheadline: string
    featuredPosts: BlogPost[]
    featuredPostsHeadline: string
    allPostsHeadline: string
    linkedInCtaText: string
    linkedInUrl: string
    // Individual post page settings
    postPageBackLinkText: string
    postPageReadOnLinkedInText: string
    postPageMorePostsHeadline: string
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
    ogImageUrl?: string
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
  fslVsConsultantPage: {
    hero: {
      badgeText: string
      badgeSubtext: string
      headline: string
      headlineAccent: string
      description: string
      ctaPrimary: string
      ctaSecondary: string
      imageAlt: string
    }
    introduction: {
      text: string
    }
    comparison: {
      headline: string
      subheadline: string
      points: Array<{
        category: string
        fsl: string
        consultant: string
      }>
    }
    summary: {
      headline: string
      fslCard: {
        badge: string
        headline: string
        description: string
        benefits: string[]
        ctaText: string
      }
      consultantCard: {
        badge: string
        headline: string
        description: string
        benefits: string[]
      }
    }
    finalCta: {
      headline: string
      description: string
      ctaPrimary: string
      ctaSecondary: string
    }
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
      {
        name: 'Sales Leadership Assessment',
        description: 'Find out if your business needs a fractional sales manager with this free 2-minute assessment. Get a personalized recommendation based on your team\'s current state.',
        href: '/tools/assessment',
        icon: 'Target',
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
  blogPage: {
    headline: 'Sales Insights',
    subheadline: 'Lessons from 50 years in sales, shared on LinkedIn',
    featuredPostsHeadline: 'Featured Posts',
    allPostsHeadline: 'All Posts',
    linkedInCtaText: 'Follow on LinkedIn',
    linkedInUrl: 'https://www.linkedin.com/in/sales-processes/',
    postPageBackLinkText: 'All Posts',
    postPageReadOnLinkedInText: 'Read on LinkedIn',
    postPageMorePostsHeadline: 'More Posts',
    featuredPosts: [
      {
        title: "Why Buyers Really Say No (It's Not What You Think)",
        excerpt: "Risk, including losing a job, is the biggest issue when it comes to buyers giving the go ahead. Not features. Not benefits. Their livelihood.",
        content: `Most buyers, sometimes even the CEO, only want one thing before they buy from you:

They want to make sure their decision will not result with someone else sitting in "their chair" at the office when they show up in the morning. In office or virtual.

Risk, including losing a job, is the biggest issue when it comes to buyers giving the go ahead to purchase your product.
Not features.
Not benefits.
Their livelihood.
Their career.

Sellers, particularly founder-led sellers, ignore this at your own risk.

Companies will often buy a less capable product for a more secure outcome.
After 50 years in business I have seen this hundreds of times.

Whatever guarantees, warranties, testimonials, references, etc. you have, make sure they are part of your value proposition.

This is trust at its most basic and important level.

Have you witnessed this?`,
        linkedInUrl: 'https://www.linkedin.com/in/louiebernstein/',
        publishedDate: '2025-01-15',
        author: 'Louie Bernstein',
        tags: ['sales psychology', 'buyer behavior', 'trust'],
      },
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
    ogImageUrl: 'https://louiebernstein.com/logo/og-image.png',
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
  fslVsConsultantPage: {
    hero: {
      badgeText: 'Making the Right Choice',
      badgeSubtext: 'Sales Leadership Guide',
      headline: 'Fractional Sales Leader',
      headlineAccent: 'vs Consultant',
      description: 'Understanding the key differences can make or break your sales growth strategy',
      ctaPrimary: 'See the Differences',
      ctaSecondary: 'Schedule a Discussion',
      imageAlt: 'Professional sales leadership team collaboration',
    },
    introduction: {
      text: 'These distinctions are based on common practices in business development, sales strategy, and organizational consulting. Note that these roles can sometimes overlap or vary by industry, but the core differences highlight their scope, involvement, and impact.',
    },
    comparison: {
      headline: 'The Critical Differences',
      subheadline: 'A side-by-side comparison of what you actually get',
      points: [
        { category: 'Discovery', fsl: 'Starts with a Sales Audit to understand the details', consultant: 'Speaks mostly with the CEO' },
        { category: 'Process Building', fsl: 'Builds Sales Processes and Systems', consultant: 'Offers advice' },
        { category: 'Team Management', fsl: 'Manages the Sales Team', consultant: 'Rarely manages teams' },
        { category: 'Engagement', fsl: 'Embedded in the business', consultant: 'Project based' },
        { category: 'Pipeline Assessment', fsl: 'Creates a sales pipeline based on reality', consultant: 'Takes the pipeline at face value' },
        { category: 'Leadership Role', fsl: 'Acts as part of leadership', consultant: 'Advice from the outside' },
        { category: 'Accountability', fsl: 'Accountable for results', consultant: 'Only accountable for the quality of their advice' },
        { category: 'Hiring Support', fsl: 'Helps in interviewing and hiring the sales team', consultant: 'Very rarely interviews any salespeople' },
        { category: 'Approach', fsl: 'Balances strategy with operational tactics', consultant: 'More strategy providing one-off expertise' },
        { category: 'Involvement', fsl: 'Front line activities with the salespeople', consultant: 'Hands off' },
        { category: 'Metrics', fsl: 'Develops relevant KPIs and metrics', consultant: 'Gives advice on what other companies do' },
        { category: 'Daily Operations', fsl: 'Implements a daily sales cadence', consultant: 'Does not get that granular. More high level' },
        { category: 'Tools & Technology', fsl: 'Familiar with most CRMs, sales tools including AI', consultant: 'Book knowledge' },
        { category: 'Growth Systems', fsl: 'Builds the Sales Playbook for consistent growth', consultant: 'Uses existing company knowledge they uncover' },
      ],
    },
    summary: {
      headline: 'The Bottom Line',
      fslCard: {
        badge: 'Recommended',
        headline: 'Hire a Fractional Sales Leader',
        description: 'If you need someone to run sales while you scale or search for a full-time executive.',
        benefits: ['Embedded leadership', 'Accountable for results', 'Builds systems that scale'],
        ctaText: 'Talk to a Fractional Sales Leader',
      },
      consultantCard: {
        badge: 'Alternative',
        headline: 'Hire a Consultant',
        description: 'If you need specialized insight, market validation, or a roadmap that your existing team can execute.',
        benefits: ['External perspective', 'Project-based engagement', 'Strategic advice'],
      },
    },
    finalCta: {
      headline: 'Ready to Accelerate Your Sales?',
      description: "Let's discuss whether a Fractional Sales Leader is the right fit for your business.",
      ctaPrimary: 'Schedule a Free Consultation',
      ctaSecondary: 'Learn About FSL',
    },
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
 * Fetch video categories from Supabase
 */
async function fetchVideoCategoriesFromSupabase(): Promise<VideoCategory[]> {
  if (!supabaseAdmin) return []

  try {
    const { data, error } = await supabaseAdmin
      .from('video_categories')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.warn('[CMS] Error fetching video categories:', error.message)
      return []
    }

    return (data as VideoCategoryRow[]).map(row => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
    }))
  } catch (error) {
    console.warn('[CMS] Failed to fetch video categories:', error)
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

/**
 * Fetch blog posts from Supabase
 */
async function fetchBlogPostsFromSupabase(): Promise<BlogPost[]> {
  if (!USE_SUPABASE_CMS || !isSupabaseConfigured || !supabaseAdmin) {
    return []
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('*, video_categories(id, name, slug)')
      .order('display_order', { ascending: true })

    if (error) {
      console.warn('[CMS] Error fetching blog posts:', error.message)
      return []
    }

    return (data as Record<string, unknown>[]).map(row => {
      const cat = row.video_categories as { id: string; name: string; slug: string } | null
      return {
        title: row.title as string,
        excerpt: row.excerpt as string,
        content: row.content as string,
        linkedInUrl: row.linkedin_url as string,
        publishedDate: row.published_date as string,
        image: (row.image as string) || undefined,
        imageAlt: (row.image_alt as string) || undefined,
        author: (row.author as string) || undefined,
        tags: (row.tags as string[]) || undefined,
        categoryId: cat?.id,
        categoryName: cat?.name,
        categorySlug: cat?.slug,
      }
    })
  } catch (error) {
    console.warn('[CMS] Failed to fetch blog posts:', error)
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
    blogPage: deepMerge(defaults.blogPage, (siteContent.blogPage || {}) as Partial<SiteSettings['blogPage']>),
    course: deepMerge(defaults.course, (siteContent.course || {}) as Partial<SiteSettings['course']>),
    coursePage: {
      ...deepMerge(defaults.coursePage, (siteContent.coursePage || {}) as Partial<SiteSettings['coursePage']>),
      previewVideos: courseVideos.length > 0 ? courseVideos : defaults.coursePage.previewVideos,
    },
    seo: deepMerge(defaults.seo, (siteContent.seo || {}) as Partial<SiteSettings['seo']>),
    navigation: deepMerge(defaults.navigation, (siteContent.navigation || {}) as Partial<SiteSettings['navigation']>),
    articlesPage: deepMerge(defaults.articlesPage, (siteContent.articlesPage || {}) as Partial<SiteSettings['articlesPage']>),
    roiCalculatorText: deepMerge(defaults.roiCalculatorText, (siteContent.roiCalculatorText || {}) as Partial<SiteSettings['roiCalculatorText']>),
    fslVsConsultantPage: deepMerge(defaults.fslVsConsultantPage, (siteContent.fslVsConsultantPage || {}) as Partial<SiteSettings['fslVsConsultantPage']>),
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

export async function getFSLVsConsultantPageData() {
  const settings = await getSiteSettings()
  return settings.fslVsConsultantPage
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
  categoryId?: string
  categoryName?: string
  categorySlug?: string
}

/**
 * Get all video categories
 */
export const getCategories = cache(async (): Promise<VideoCategory[]> => {
  if (!USE_SUPABASE_CMS || !isSupabaseConfigured) {
    return []
  }
  return fetchVideoCategoriesFromSupabase()
})

/**
 * Get all video slugs for static generation and sitemap
 */
export async function getAllVideoSlugs(): Promise<string[]> {
  const settings = await getSiteSettings()
  return settings.videosPage.featuredVideos.map((video) => slugify(video.title))
}

/**
 * Get all videos with their slugs (includes category data)
 */
export async function getAllVideosWithSlugs(): Promise<VideoWithSlug[]> {
  // Try fetching from Supabase with category join
  if (USE_SUPABASE_CMS && isSupabaseConfigured && supabaseAdmin) {
    try {
      const { data, error } = await supabaseAdmin
        .from('videos')
        .select('*, video_categories(id, name, slug)')
        .eq('page', 'featured')
        .order('display_order', { ascending: true })

      if (!error && data && data.length > 0) {
        return data.map((row: Record<string, unknown>) => {
          const cat = row.video_categories as { id: string; name: string; slug: string } | null
          return {
            videoId: row.youtube_id as string,
            title: row.title as string,
            description: (row.description as string) || undefined,
            slug: slugify(row.title as string),
            categoryId: cat?.id,
            categoryName: cat?.name,
            categorySlug: cat?.slug,
          }
        })
      }
    } catch (error) {
      console.warn('[CMS] Failed to fetch videos with categories:', error)
    }
  }

  // Fallback to settings
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

// ============================================================================
// BLOG PAGE DATA FETCHING
// ============================================================================

interface BlogPostWithSlug extends BlogPost {
  slug: string
}

/**
 * Get blog page data (headline, subheadline, etc.)
 */
export async function getBlogPageData() {
  const settings = await getSiteSettings()
  return settings.blogPage
}

/**
 * Get all blog posts with their slugs
 */
export async function getAllBlogPostsWithSlugs(): Promise<BlogPostWithSlug[]> {
  // Try fetching from Supabase first
  const postsFromDB = await fetchBlogPostsFromSupabase()

  // If we got posts from Supabase, use them
  if (postsFromDB.length > 0) {
    return postsFromDB.map((post) => ({
      ...post,
      slug: slugify(post.title),
    }))
  }

  // Fallback to defaults
  const settings = await getSiteSettings()
  return settings.blogPage.featuredPosts.map((post) => ({
    ...post,
    slug: slugify(post.title),
  }))
}

/**
 * Get a single blog post by its slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostWithSlug | null> {
  const posts = await getAllBlogPostsWithSlugs()
  return posts.find((post) => post.slug === slug) || null
}

/**
 * Get featured blog posts (max 4)
 */
export async function getFeaturedBlogPosts(): Promise<BlogPostWithSlug[]> {
  // Try fetching from Supabase first
  if (USE_SUPABASE_CMS && isSupabaseConfigured && supabaseAdmin) {
    try {
      const { data, error } = await supabaseAdmin
        .from('blog_posts')
        .select('*, video_categories(id, name, slug)')
        .eq('is_featured', true)
        .order('display_order', { ascending: true })
        .limit(4)

      if (error) {
        console.warn('[CMS] Error fetching featured blog posts:', error.message)
      } else if (data && data.length > 0) {
        return (data as Record<string, unknown>[]).map(row => {
          const cat = row.video_categories as { id: string; name: string; slug: string } | null
          return {
            title: row.title as string,
            excerpt: row.excerpt as string,
            content: row.content as string,
            linkedInUrl: row.linkedin_url as string,
            publishedDate: row.published_date as string,
            image: (row.image as string) || undefined,
            imageAlt: (row.image_alt as string) || undefined,
            author: (row.author as string) || undefined,
            tags: (row.tags as string[]) || undefined,
            categoryId: cat?.id,
            categoryName: cat?.name,
            categorySlug: cat?.slug,
            slug: slugify(row.title as string),
          }
        })
      }
    } catch (error) {
      console.warn('[CMS] Failed to fetch featured blog posts:', error)
    }
  }

  // Fallback to defaults
  const settings = await getSiteSettings()
  return settings.blogPage.featuredPosts.slice(0, 4).map((post) => ({
    ...post,
    slug: slugify(post.title),
  }))
}

// ============================================================================
// SEO DATA FETCHING
// ============================================================================

interface PageSEO {
  seoTitle?: string
  seoDescription?: string
  seoImage?: string
}

/**
 * Fetch SEO data for a specific page from site_content table
 */
async function fetchPageSEOFromSupabase(section: string): Promise<PageSEO> {
  if (!supabaseAdmin) return {}

  try {
    const { data, error } = await supabaseAdmin
      .from('site_content')
      .select('content')
      .eq('section', section)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // Not found - return empty object
        return {}
      }
      console.warn('[CMS] Error fetching page SEO:', error.message)
      return {}
    }

    const content = data?.content as Record<string, unknown>
    return {
      seoTitle: content?.seoTitle as string | undefined,
      seoDescription: content?.seoDescription as string | undefined,
      seoImage: content?.seoImage as string | undefined,
    }
  } catch (error) {
    console.warn('[CMS] Failed to fetch page SEO:', error)
    return {}
  }
}

/**
 * Get SEO data for FSL page
 */
export const getFSLPageSEO = cache(async (): Promise<PageSEO> => {
  if (!USE_SUPABASE_CMS || !isSupabaseConfigured) {
    return {}
  }
  return fetchPageSEOFromSupabase('fslPage')
})

/**
 * Get SEO data for Course page
 */
export const getCoursePageSEO = cache(async (): Promise<PageSEO> => {
  if (!USE_SUPABASE_CMS || !isSupabaseConfigured) {
    return {}
  }
  return fetchPageSEOFromSupabase('coursePage')
})

/**
 * Get SEO data for Videos page
 */
export const getVideosPageSEO = cache(async (): Promise<PageSEO> => {
  if (!USE_SUPABASE_CMS || !isSupabaseConfigured) {
    return {}
  }
  return fetchPageSEOFromSupabase('videosPage')
})

/**
 * Get site-wide SEO settings (title, description, keywords, OG image)
 */
export const getSEOSettings = cache(async (): Promise<SiteSettings['seo']> => {
  const settings = await getSiteSettings()
  return settings.seo
})

/**
 * Get FAQ items for the dedicated FAQs page
 */
export const getFAQsPageFAQs = cache(async (): Promise<FAQItem[]> => {
  if (USE_SUPABASE_CMS && isSupabaseConfigured) {
    const items = await fetchFAQItemsFromSupabase('faqsPage')
    if (items.length > 0) return items
  }

  // Default: all FAQs from the master FAQ document
  return [
    { question: "What is founder-led sales?", answer: "Founder-led sales is when the CEO or founder of a company is personally responsible for closing most or all of the company's deals. It typically happens in the early stages of a business when the founder is the most knowledgeable and passionate person to sell the product or service. While it works well at first, founder-led sales becomes a serious bottleneck as the company grows, because the founder's time and attention are finite and increasingly needed elsewhere." },
    { question: "Why does founder-led sales become a problem?", answer: "As a company scales, the founder becomes the single biggest obstacle to growth if they are still closing every deal. They have limited hours, and spending those hours on sales calls means they are not working on product, operations, strategy, or team building. It also creates fragile revenue—if the founder gets sick, takes a vacation, or simply burns out, the pipeline collapses. Founder-led sales is a necessary phase, but it must be transitioned out of to reach the next level." },
    { question: "How do I know if I am stuck in founder-led sales?", answer: "Common signs include: you are still the one making most sales calls and closing most deals, your pipeline stalls when you are traveling or unavailable, your salespeople struggle to perform without your direct involvement, and you feel like you cannot step away from the business for more than a few days. If your company's revenue growth is directly tied to how many hours you personally put into selling, you are stuck in founder-led sales." },
    { question: "How do I get out of founder-led sales?", answer: "The first step is documenting everything you do to close a deal—your scripts, email sequences, objection handling, follow-up cadences, and process steps—into a formal Sales Playbook. Once that institutional knowledge is captured, you can hire salespeople who follow the proven system rather than reinventing the wheel. You also need pipeline management processes, CRM discipline, and someone to coach and hold the team accountable. Many founders use a Fractional Sales Leader to build this infrastructure before hiring a full-time VP of Sales." },
    { question: "What is the difference between founder-led sales and a scalable sales system?", answer: "Founder-led sales depends entirely on the founder's personal relationships, intuition, and hustle. A scalable sales system is built on documented processes, repeatable outbound sequences, clearly defined pipeline stages, CRM data hygiene, and a trained sales team following a Sales Playbook. The goal of a scalable system is that revenue grows even when the founder is not in the room. It replaces heroics with consistency." },
    { question: "What is the rule of thumb before hiring your first salesperson?", answer: "Close at least 10 sales yourself and document every step of how you did it. That documentation becomes your Sales Playbook. When you hand it to a new salesperson, they are not guessing—they are following a proven model. Hiring before this documentation exists is one of the most expensive mistakes a founder can make, because the new hire has no roadmap and is likely to fail." },
    { question: "How many salespeople should I hire first?", answer: "Hire two salespeople at the same time, not one. If you hire one and they quit or underperform, you are right back where you started—doing all the selling yourself. With two hires, you have a hedge against turnover, a built-in competitive dynamic that elevates performance, and the foundation for one of them to eventually step into a sales manager role. It also gives you better comparison data for evaluating what works." },
    { question: "What is a Sales Playbook and why do I need one?", answer: "A Sales Playbook is a documented guide that captures your entire sales process—prospecting scripts, email templates, call frameworks, objection responses, competitive positioning, pipeline stage definitions, and onboarding materials for new reps. It is the single most important asset you can create before scaling your sales team. Without it, every new hire starts from scratch, and your results depend on individual talent rather than a repeatable system." },
    { question: "What is Fractional Sales Leadership?", answer: "Fractional Sales Leadership is a model where an experienced sales executive works with your company part-time or on a contract basis—typically 10 to 30 hours per week—to build, implement, and run your sales function. You get the expertise of a VP of Sales without the $250,000-plus full-time salary, benefits, bonuses, and equity. A Fractional Sales Leader is not a consultant who gives advice and walks away. They embed with your team, build the systems, coach the reps, and drive execution." },
    { question: "What does a Fractional Sales Leader actually do?", answer: "A Fractional Sales Leader builds your Sales Playbook, defines and implements your sales process from first contact to close, sets up and optimizes your CRM, establishes pipeline management systems, develops hiring scorecards and interview processes, recruits and onboards your first salespeople, runs weekly pipeline reviews, coaches reps on calls and presentations, creates compensation plans, and holds the team accountable to KPIs. They do the work—not just advise on it." },
    { question: "Who is Fractional Sales Leadership for?", answer: "Fractional Sales Leadership is typically the right fit for companies between $1 million and $10 million in annual recurring revenue where the founder is still closing most deals. These are companies that have proven product-market fit and are generating real revenue, but have not yet built the sales infrastructure to scale beyond personal founder involvement. They need experienced leadership immediately but cannot yet justify or afford a $250,000-plus full-time VP of Sales." },
    { question: "Who should not use a Fractional Sales Leader?", answer: "Companies that already have a functioning sales team with documented processes and a full-time sales leader in place generally do not need a Fractional Sales Leader. Businesses under $500,000 in revenue that have not yet validated product-market fit may not be ready either, as the founder still needs to be doing the selling at that stage to understand the market. Fractional Sales Leadership works best when there is a sales problem to solve and budget to invest in solving it." },
    { question: "Why shouldn't I just hire a full-time VP of Sales?", answer: "At the $1 million to $10 million ARR stage, most companies are not ready for a full-time VP of Sales because the sales infrastructure does not yet exist. A VP of Sales is a manager—they are built to run a system, not build one from scratch. When you hire a VP before the systems are in place, you are paying $250,000 or more for someone who is likely to fail because they have nothing to manage. Build the foundation first, then hire the VP to run it." },
    { question: "What is the cost of hiring a VP of Sales too early?", answer: "Beyond the $250,000-plus salary and the equity and benefits, the real cost is the time lost. A failed VP of Sales hire typically takes three to six months to identify as a failure, another one to three months to exit, and then the process starts over. Meanwhile, your sales are stagnating and the founder is pulled back into selling. The total cost of a failed VP hire—direct compensation, lost opportunity, recruiting fees, and founder distraction—often exceeds $400,000." },
    { question: "What is the difference between a Fractional Sales Leader and a full-time VP of Sales?", answer: "A full-time VP of Sales is on your payroll at $200,000 to $350,000 per year, typically expects sales systems and a team to already exist, and is a long-term full-time commitment. A Fractional Sales Leader works part-time at a fraction of the cost, specializes in building the systems and processes from scratch, and is designed to either become permanent or hand off to a full-time VP once the infrastructure is in place. You get the expertise without the risk." },
    { question: "What is the difference between a Fractional Sales Leader and a sales consultant?", answer: "A sales consultant delivers a report, a deck, or a set of recommendations and then leaves. A Fractional Sales Leader implements. They are inside your business week after week, running pipeline meetings, coaching reps, building the playbook, and driving execution. The accountability is fundamentally different—a consultant is paid for deliverables; a Fractional Sales Leader is accountable for results." },
    { question: "What is the difference between a Fractional Sales Leader and a sales coach?", answer: "A sales coach works one-on-one or with individual reps to improve skills—call technique, objection handling, closing. A Fractional Sales Leader is responsible for the entire sales function: strategy, process, hiring, pipeline management, CRM, team structure, and performance. They are not just improving skills; they are building the machine. Many Fractional Sales Leaders include coaching as part of what they do, but their scope is much broader." },
    { question: "How much does a Fractional Sales Leader cost?", answer: "Fractional Sales Leaders typically charge between $5,000 and $15,000 per month depending on the scope of work, hours required, and the leader's experience level. When compared to the $250,000-plus fully loaded cost of a VP of Sales, fractional leadership typically represents savings of $150,000 to $200,000 annually while delivering faster results. The ROI is further amplified when you factor in the cost of the founder's own time, which is often worth $300 to $500 per hour." },
    { question: "How many hours per week does a Fractional Sales Leader work?", answer: "Most Fractional Sales Leader engagements range from 10 to 25 hours per week. That is typically sufficient to run weekly pipeline reviews, coach reps, build documentation, implement systems, and drive meaningful progress. The hours often flex over time—higher during the initial build phase when there is heavy lifting, and lower once the systems are running and the team is self-sufficient." },
    { question: "How long does a Fractional Sales Leader engagement typically last?", answer: "Most engagements last between six months and two years. The first few months involve building the core infrastructure—Sales Playbook, CRM setup, pipeline process, and initial hiring. The middle phase focuses on coaching, optimization, and results. The final phase is often preparing the business to hire a full-time sales leader or making the fractional role permanent. The goal is always to leave the company stronger than when the engagement started." },
    { question: "What results can I expect from working with a Fractional Sales Leader?", answer: "Results vary by company, but common outcomes include a documented Sales Playbook that enables consistent onboarding, a functional and trustworthy CRM, a defined pipeline process that removes guesswork, reduced founder involvement in day-to-day selling, improved quota attainment from the sales team, and predictable revenue growth. Clients who commit to the process and implement the systems consistently see measurable improvements in sales velocity within three to six months." },
    { question: "How quickly can a Fractional Sales Leader make an impact?", answer: "Initial impact is typically visible within the first 30 to 60 days—pipeline cleanup, early versions of documented processes, CRM hygiene improvements, and quick wins from coaching conversations. Structural results like repeatable outbound, consistent quota attainment, and reduced founder involvement in selling usually materialize in the three to six month range. Transformational results—a team that performs without the founder—typically take six to twelve months depending on the starting point." },
    { question: "Will I lose control of my sales team if I bring in a Fractional Sales Leader?", answer: "No. A good Fractional Sales Leader reinforces your culture, follows your vision, and builds systems that reflect your values and business model. You retain full strategic control. What you delegate is the day-to-day operational management of the sales function—the pipeline meetings, the coaching, the CRM discipline. Many founders find that having clear processes and an experienced leader actually gives them more visibility into what is happening in sales, not less." },
    { question: "Does asking for help from a Fractional Sales Leader make me look weak to my team?", answer: "The opposite is true. Bringing in an experienced sales leader signals to your team that you are serious about building a world-class sales organization. It demonstrates strategic thinking and self-awareness—two qualities that earn respect. Salespeople generally perform better under experienced leadership with clear systems than they do working in chaos with a founder who is stretched too thin." },
    { question: "How do I know if I am ready to step back from sales as the founder?", answer: "You are ready when you have documented at least the core steps of your sales process, closed enough deals to understand the patterns of what works, and have at least one other person capable of following the documented process. You do not need to have everything perfect—that is what the Fractional Sales Leader will help build. What you need is self-awareness that the business cannot scale with you as the only salesperson, and a willingness to invest in building the system." },
    { question: "I am stuck at $2 million ARR. Why can't I just hire a few sales reps to grow?", answer: "Hiring salespeople without documented processes, a Sales Playbook, and a pipeline system in place is one of the most expensive mistakes a growing company makes. Reps without a system do not know what to do, create inconsistent results, and typically fail within six to nine months—costing you $100,000 to $150,000 per bad hire. You need to build the infrastructure first, then staff it. That is exactly what a Fractional Sales Leader does before the reps are hired." },
    { question: "What is pipeline management and why does it matter?", answer: "Pipeline management is the process of tracking all active sales opportunities through defined stages from initial contact to close, using objective criteria to determine what stage each prospect belongs in. Good pipeline management tells you where your revenue is actually coming from, eliminates wishful thinking from forecasting, and makes it easy to identify which deals need attention. Without it, founders are flying blind and close rates are largely a function of luck rather than process." },
    { question: "Why do pipeline meetings fail and how do I fix them?", answer: "Most pipeline meetings fail because prospects are placed in stages based on what the salesperson hopes will happen rather than what the prospect has actually done. A prospect should only advance to the next stage when they take a specific, verifiable action—attending a demo, sending the contract to legal, making an intro to the decision-maker. When stage advancement is tied to prospect behavior rather than salesperson optimism, your pipeline becomes a reliable forecasting tool instead of a wish list." },
    { question: "What is CRM optimization and why do I need it?", answer: "CRM optimization means configuring your customer relationship management system to reflect your actual sales process, training your team to use it consistently, and maintaining data hygiene so that what is in the CRM accurately represents what is in your pipeline. Most growing companies have a CRM that is either barely used or filled with inaccurate data. An optimized CRM becomes the single source of truth for your sales team, enabling better forecasting, coaching, and decision-making." },
    { question: "Which CRM should I use for my sales team?", answer: "The best CRM is the one your team will actually use consistently. For companies in the $1 million to $10 million ARR range, commonly used options include HubSpot, Salesforce, Pipedrive, and Zoho. HubSpot is popular for its ease of use and strong free tier. Salesforce is more powerful but requires more administration. The most important thing is not which CRM you choose but whether you define clear pipeline stages, require data entry discipline, and use the data to make decisions. A Fractional Sales Leader can help you select and optimize the right tool." },
    { question: "How do I build a sales process from scratch?", answer: "Start by mapping every step you personally take from first contact with a prospect to a signed deal. Document the actions, the timing, the scripts, the emails, and the decision criteria at each stage. Then test whether another person can follow that process and get similar results. Refine based on what you learn. This documented process becomes the foundation of your Sales Playbook. It does not need to be perfect from day one—it just needs to exist and improve over time." },
    { question: "What is a sales compensation plan and how should I structure mine?", answer: "A sales compensation plan defines how salespeople are paid—base salary, commission rate, bonus triggers, and any accelerators for exceeding quota. For early-stage companies, a common structure is a base salary sufficient to attract good talent combined with uncapped commissions tied to revenue generated. Plans should be simple enough that salespeople can calculate their own earnings in their head. Complex plans with too many variables create confusion, erode trust, and reduce selling motivation." },
    { question: "How do I set sales quotas for my team?", answer: "Quotas should be based on historical data if it exists, or realistic assumptions about sales cycle length, deal size, and lead volume if you are starting from scratch. A common mistake is setting quotas based on what the business needs to survive rather than what is achievable given the pipeline and resources. Quotas that are too high destroy morale; quotas that are too low do not drive growth. A Fractional Sales Leader will help you model quota based on actual market data and your pipeline capacity." },
    { question: "What KPIs should I track for my sales team?", answer: "Focus on metrics that directly connect activity to revenue: number of new prospects added to the pipeline per week, conversion rate from meeting to proposal, conversion rate from proposal to close, average deal size, average sales cycle length, and quota attainment per rep. Avoid tracking vanity metrics like number of calls made if those calls are not converting. The right KPIs tell you where in the process deals are getting stuck so you can fix the specific problem rather than just pushing harder." },
    { question: "How do I hire my first salesperson?", answer: "Before hiring, document your sales process and create a detailed job description that describes what the person will actually do—not a generic job description. Develop a scorecard with objective criteria for evaluating candidates. Use behavioral interview questions that reveal how they have performed in the past rather than how they think they would perform. Always check references. And, critically, hire two people rather than one to give yourself a hedge against turnover and better comparison data." },
    { question: "What should I look for when hiring salespeople?", answer: "Look for a track record of results in a similar sales environment—not just potential. Strong salespeople demonstrate curiosity about your business before the interview, ask intelligent questions, and can clearly articulate their personal sales process. Check for consistency: does their actual track record match what they say in the interview? A hiring scorecard with objective criteria helps remove emotion from the process. A bad hire costs $100,000 to $150,000 or more when you factor in salary, time, and lost opportunity." },
    { question: "Why do sales VP hires fail so often?", answer: "VP of Sales hires fail most often because the company brings them in before the fundamental sales infrastructure exists. The VP is expected to build a team and drive results, but there is no playbook, no defined process, no clean CRM data, and no documented pipeline system to work from. They spend months trying to figure out what works, and by the time the company realizes the hire is not working, they have burned through $200,000 or more. The lesson: build the infrastructure first, then hire the leader to run it." },
    { question: "What is the difference between a Fractional Sales Leader and outsourced sales?", answer: "Outsourced sales typically means hiring an external agency or team of SDRs to generate leads or make calls on behalf of your company—execution work done outside your organization. A Fractional Sales Leader is an embedded strategic and operational leader inside your organization who builds the entire sales function: processes, people, pipeline, CRM, and playbook. They lead your team, they do not replace it. The outcome is an internal sales capability you own permanently." },
    { question: "Can a Fractional Sales Leader help me scale from $1 million to $10 million?", answer: "Yes. The $1 million to $10 million ARR range is exactly where Fractional Sales Leadership is most valuable. You have proven the product works and are generating real revenue, but the sales motion is still largely dependent on the founder. A Fractional Sales Leader builds the repeatable system—playbook, pipeline, CRM, team—that allows revenue to grow without the founder closing every deal. Companies that successfully make this transition often see significant revenue acceleration within the first year." },
    { question: "How do I know if a Fractional Sales Leader has a track record worth trusting?", answer: "Ask for specific, measurable results from past engagements: what was the company's revenue when they started, what was it when the engagement ended, and what specifically did they build or change? Ask for client references you can actually call. Look for someone who has built sales teams from the ground up—not just managed existing ones—and who has relevant experience in companies of similar size and stage to yours. Someone who has also operated as a founder or grown their own company has additional credibility." },
    { question: "What questions should I ask before hiring a Fractional Sales Leader?", answer: "Ask how many clients they currently work with and whether they have capacity to do your work with full attention. Ask for specific examples of sales systems they have built and the results those systems produced. Ask how they charge and what is included. Ask what happens if results are not materializing—how do they diagnose and course correct. Ask whether they will do the implementation work themselves or hand it off to junior staff. A great Fractional Sales Leader should answer all of these confidently with specifics." },
    { question: "How many clients does a Fractional Sales Leader work with at the same time?", answer: "This varies widely. Some fractional leaders run large rosters of clients with minimal involvement in each. Others, like the best practitioners, limit themselves to one or two clients at a time to ensure deep engagement and real results. When evaluating a Fractional Sales Leader, ask specifically how many clients they are currently serving and how many hours per week they are available to dedicate to your account. More clients does not always mean more experience—it often means less attention." },
    { question: "How do I get started working with Louie Bernstein?", answer: "The best first step is scheduling a no-obligation 30-minute discovery call at louiebernstein.com. I will ask about your current sales situation, your team, your revenue, and what is not working. If there is a fit, I will explain exactly how I work and what we would build together. I only take one to two clients at a time to ensure complete focus, so I want to make sure both of us believe this is the right engagement before moving forward." },
    { question: "What does Louie Bernstein do differently than other Fractional Sales Leaders?", answer: "I work with one to two clients at a time, dedicating 20 to 30 hours per week per engagement. I do not delegate the work—I do it myself. I have 50 years of sales experience and scaled my own company from zero to INC 500 over 22 years, so I know what it is like to be in the founder's seat, doing all the selling, burning out, and needing help. I bring that lived experience, plus nine years as a Fractional Sales Leader, into everything I build for clients." },
    { question: "Who does Louie Bernstein work with?", answer: "I work with founders and CEOs of B2B companies between $1 million and $10 million in ARR who are stuck in founder-led sales. My clients are typically technical or operational founders—people who built great products or services but who did not come from a sales background. They are ready to invest in building a real sales system and transitioning out of being the primary salesperson, but they are not ready for the risk and cost of a full-time VP of Sales." },
    { question: "What does a Louie Bernstein engagement include?", answer: "Every engagement is customized, but typically includes a sales audit and strategic planning session, Sales Playbook development, CRM optimization, pipeline stage definition and management, sales hiring support including a scorecard and interview process, rep onboarding and training, weekly pipeline reviews, ongoing coaching of your sales team, and KPI development. I work hands-on inside your business until the system is running and your team can perform without you in every deal." },
    { question: "Can Louie Bernstein help me even if I do not have any salespeople yet?", answer: "Yes. In fact, many of my best engagements start before the first salesperson is hired. We document the founder's sales process, build the playbook, define the pipeline, clean up the CRM, create the hiring scorecard, and then run the hiring process together. That sequence—build the system, then staff it—produces much better outcomes than hiring first and hoping the reps figure it out." },
    { question: "How much does working with Louie Bernstein cost?", answer: "My engagements typically run $10,000 to $12,000 per month. To put that in context: if you are a founder running a $1 million ARR company and spending 20 hours a week on sales, your time has an implied cost of $24,000 per month. I can step in for less than half that cost and build a system that frees you from day-to-day selling. A full-time VP of Sales would run $200,000 to $350,000 annually—plus benefits, bonus, and equity. The math strongly favors the fractional model at this stage." },
    { question: "Won't I lose customers if I stop selling personally?", answer: "Not if the transition is done correctly. The goal is to build a sales system that delivers the same quality of engagement to your prospects even when you are not the one in the room. Your Sales Playbook captures your best thinking. Your trained reps execute it. Your CRM ensures no follow-up is missed. Many founders discover that their customers actually respond better to a dedicated salesperson who has time to follow up consistently than to a distracted founder who is managing ten other priorities." },
    { question: "Can't I just train my current salespeople without a Fractional Sales Leader?", answer: "You can, and many founders try. The challenge is that training without a defined system to train people into produces inconsistent results. You need documented processes first, then coaching against those processes, then measurement of the results. Most founders lack the time to build all three layers simultaneously while also running the business. A Fractional Sales Leader builds the system and delivers the training simultaneously, which compresses the timeline significantly." },
    { question: "What is a sales audit and do I need one?", answer: "A sales audit is a structured assessment of your current sales function—team, processes, pipeline, CRM, metrics, and compensation—to identify what is working, what is not, and where the biggest gaps are. It is the starting point for any serious sales improvement effort. You need one if you are not sure why your sales team is underperforming, if your pipeline is unpredictable, if your founder is still closing most deals, or if you are preparing to hire your first sales VP and want to make sure the infrastructure is ready." },
    { question: "What is the hidden cost of founder-led sales?", answer: "The hidden cost is your time. A founder at a $1 million ARR company whose time is worth $481 per hour who spends 20 hours per week on sales activities is consuming $38,000 per month in implied cost. That time is not being spent on strategy, product, partnerships, or investor relationships. The longer a founder stays stuck in sales, the more the company pays in opportunity cost—not just in dollars but in growth that did not happen because the CEO was on sales calls instead of building the business." },
    { question: "What is outbound sales and why does it matter for scaling?", answer: "Outbound sales is the proactive process of identifying ideal prospects and initiating contact through calls, emails, LinkedIn messages, or other channels rather than waiting for inbound leads to arrive. Scaling companies cannot rely solely on referrals and inbound. A systematic outbound process—with a defined ICP, scripted sequences, and follow-up cadences built into the Sales Playbook—creates predictable pipeline that does not depend on luck, timing, or the founder's network." },
    { question: "What is an Ideal Customer Profile and why is it important?", answer: "An Ideal Customer Profile (ICP) is a detailed description of the type of company or buyer that is most likely to buy from you, get value from your product, pay on time, and refer others. It includes firmographic characteristics like company size, industry, and revenue range, as well as behavioral characteristics like their buying triggers and pain points. Salespeople without a clear ICP waste enormous time pursuing prospects who will never close. Defining and documenting the ICP is one of the first things a Fractional Sales Leader does." },
    { question: "What is the difference between inbound and outbound sales and which should I focus on?", answer: "Inbound sales means prospects find you through content, SEO, referrals, or marketing. Outbound means you find and contact prospects directly. Both matter, but companies in the $1 million to $10 million ARR range cannot afford to rely exclusively on inbound. A systematic outbound process fills the pipeline regardless of how the marketing is performing. The best-run sales organizations operate both in parallel—inbound to capture demand, outbound to create it." },
    { question: "How do I build a repeatable outbound sales system?", answer: "Start with a clearly defined ICP so you know exactly who you are targeting. Build a sequence of touchpoints—typically a mix of calls, emails, and LinkedIn messages over 10 to 15 business days—with specific scripts and templates for each step. Define the trigger that moves a prospect from the sequence into an active opportunity. Assign daily and weekly activity targets. Track conversion rates at each step and optimize where conversion is lowest. This is documented in your Sales Playbook so any new rep can replicate it." },
    { question: "How do I know if my sales team is underperforming or just undersupported?", answer: "Look at whether the systems and tools they need to succeed actually exist. Do they have a Sales Playbook with scripts and email templates? Are pipeline stage definitions clear? Is the CRM set up so they can use it efficiently? Are they getting regular coaching and feedback? Are their quotas achievable based on the available pipeline? If the answer to any of these is no, you have a support problem before you have a performance problem. Underperforming salespeople are often just under-supported salespeople." },
    { question: "What is the cost of a bad sales hire?", answer: "A bad sales hire typically costs between $100,000 and $150,000 when you add up salary paid during the ramp period, recruiting fees, time spent onboarding and managing them out, and the opportunity cost of lost deals they should have closed. The biggest cost is often the six to nine months it takes to recognize the hire is not working—time during which the pipeline was stagnating and the founder may have been pulled back into selling. A rigorous hiring process with a scorecard and behavioral interviews dramatically reduces this risk." },
    { question: "How do I retain good salespeople once I have hired them?", answer: "Retention starts with clarity: a written job description, a documented list of accountabilities, a transparent compensation plan, and regular coaching and feedback. Good salespeople leave when they feel unsupported, when expectations are unclear, or when they are not earning what they expected. Weekly 1:1s that focus on development rather than just pipeline are critical. So is recognition—celebrating wins publicly matters more than most founders realize. A high-performing sales culture does not happen by accident." },
    { question: "What is a sales onboarding process and why is it important?", answer: "Sales onboarding is a structured one-to-two-week program that gets new salespeople productive as quickly as possible. It covers the product, the ICP, the Sales Playbook, the pipeline process, the CRM, the scripts, and the objection handling framework. Without a formal onboarding process, every new hire spends weeks or months figuring out what works by trial and error—costing the company time and money. A documented onboarding process, built from the Sales Playbook, cuts that ramp time significantly." },
    { question: "What is the ROI of investing in a Fractional Sales Leader?", answer: "The ROI calculation has several components: the founder's time freed up multiplied by their hourly cost, revenue generated from a better-functioning sales team, cost avoided from not making a premature VP of Sales hire, and the compounding value of a sales infrastructure that keeps delivering after the engagement ends. Most engagements begin paying for themselves within the first three to six months. The long-term ROI is the scalable sales system that continues to generate revenue for years." },
    { question: "How does Fractional Sales Leadership help with founder burnout?", answer: "Founder burnout in sales-driven businesses almost always comes from the same source: the founder is doing everything, has no system to delegate into, and cannot see a way off the treadmill. A Fractional Sales Leader builds the off-ramp. They create the documented processes, hire and train the team, and implement the systems that allow the founder to hand off the day-to-day selling. The result is not just better sales performance—it is a founder who can sleep again and focus on the parts of the business they actually built it to do." },
    { question: "What happens after a Fractional Sales Leader engagement ends?", answer: "The goal of any Fractional Sales Leader engagement is to leave the company in a stronger, more self-sufficient position than when it started. That means a running Sales Playbook, a functioning pipeline process, a trained sales team, and a CRM that is actually useful. Many founders use the Fractional Sales Leader period to evaluate whether to hire a full-time VP of Sales—and the systems built during the engagement become the infrastructure that VP will run. Some relationships evolve into a long-term advisory role." },
    { question: "Can a Fractional Sales Leader help align my sales and marketing teams?", answer: "Yes. One of the most common issues in $1 million to $10 million ARR companies is that sales and marketing are not aligned—marketing generates leads that sales cannot close, or sales blames marketing for poor lead quality while marketing blames sales for poor follow-up. A Fractional Sales Leader helps define what a qualified lead looks like, creates a handoff process from marketing to sales, and establishes feedback loops so both teams are working toward the same goals." },
    { question: "What industries does Fractional Sales Leadership work best in?", answer: "Fractional Sales Leadership works across virtually all B2B industries, including SaaS, professional services, technology, manufacturing, logistics, financial services, and consulting. The common thread is not the industry but the situation: a founder-led company in the $1 million to $10 million ARR range that needs a repeatable sales system. The principles of pipeline management, Sales Playbook development, CRM optimization, and hiring are applicable regardless of what the company sells." },
    { question: "How does Fractional Sales Leadership work with AI and modern sales tools?", answer: "Modern sales tools—AI-powered prospecting, automated outreach sequences, intent data, and conversation intelligence—can dramatically improve efficiency when deployed inside a well-built sales system. A Fractional Sales Leader evaluates and recommends the right tools for the company's stage, implements them inside the Sales Playbook, and trains the team to use them effectively. Tools without processes are just expensive software. Processes without tools are slow. The right combination multiplies results." },
    { question: "What is sales infrastructure and why does every growing company need it?", answer: "Sales infrastructure is the collection of systems, processes, tools, and documentation that allows a sales team to operate consistently and predictably—without depending on any single individual. It includes the Sales Playbook, CRM configuration, pipeline stage definitions, outbound sequences, hiring scorecards, onboarding programs, compensation plans, and KPI dashboards. Companies without sales infrastructure are dependent on heroics. Companies with it are scalable." },
    { question: "Is Fractional Sales Leadership a long-term or short-term solution?", answer: "It depends on what the company needs. For most $1 million to $10 million ARR companies, Fractional Sales Leadership is a transitional solution—it bridges the gap between founder-led sales chaos and a fully built sales organization ready for a full-time VP of Sales. For smaller companies or those with a lean model, it can be a permanent solution that provides ongoing senior sales leadership at a fraction of the full-time cost. Both are legitimate outcomes." },
    { question: "What is the Sunday Starters newsletter and who is it for?", answer: "Sunday Starters is Louie Bernstein's weekly newsletter focused on resilience, leadership, and work-life balance for business founders and executives. It goes out every Sunday and covers the mental and emotional side of building a company—not just tactics and frameworks. It is for founders who want to stay sharp, think clearly, and lead with intention. You can subscribe at louiebernstein.com." },
    { question: "How does Louie Bernstein use LinkedIn to help founders?", answer: "I post daily on LinkedIn with content specifically designed for founders and CEOs stuck in founder-led sales. The posts cover sales systems, hiring frameworks, pipeline management, real client stories, and the emotional reality of building a company. I have been recognized as a LinkedIn Top Voice. Following the content is a free way to get ongoing tactical value even before you are ready to engage with a Fractional Sales Leader. You can find me by searching Louie Bernstein on LinkedIn." },
  ]
})

// Re-export types for use in components
export type { SiteSettings, Testimonial, FAQItem, VideoItem, VideoCategory, BlogPost, ServiceItem, ProcessStep, PageLayout, PageSEO }

