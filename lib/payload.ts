/**
 * Payload CMS API utilities
 * 
 * Fetches content from the Payload CMS for the frontend.
 */

import { cache } from 'react';

// Always fetch from production - CMS data lives there
const PAYLOAD_URL = 'https://louiebernstein.com';

// Enable CMS fetching
const CMS_ENABLED = true;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  highlight?: boolean;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BenefitItem {
  title: string;
  description: string;
  icon?: string;
}

interface VideoItem {
  videoId: string;
  title: string;
  description?: string;
}

interface CourseModule {
  title: string;
  description: string;
  benefit?: string;
  icon?: string;
}

interface ResultStat {
  metric: string;
  description: string;
  source?: string;
}

interface SiteSettings {
  hero: {
    headline: string;
    tagline: string;
    description: string;
    videoId: string;
    ctaPrimary: { text: string; url: string };
    ctaSecondary: { text: string; url: string };
  };
  credentials: {
    primary: string;
    secondary: string;
  };
  about: {
    headline: string;
    headlineAccent: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    calloutText: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  services: {
    headline: string;
    subheadline: string;
    items: ServiceItem[];
  };
  process: {
    headline: string;
    subheadline: string;
    steps: ProcessStep[];
  };
  valueProposition: {
    headline: string;
    subheadline: string;
    description: string;
    ctaText: string;
  };
  faq: {
    headline: string;
    subheadline: string;
    items: FAQItem[];
  };
  awards: {
    headline: string;
    subheadline: string;
    imageUrl: string;
    description: string;
  };
  testimonialsSection: {
    headline: string;
    subheadline: string;
  };
  social: {
    linkedin: string;
    youtube: string;
    calendly: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  footer: {
    tagline: string;
    slogan: string;
    copyrightName: string;
  };
  newsletter: {
    name: string;
    playlistId: string;
    subscribeUrl: string;
  };
  newsletterPage: {
    headline: string;
    tagline: string;
    description: string;
    ctaText: string;
    benefitsHeadline: string;
    benefits: BenefitItem[];
    finalCtaHeadline: string;
    finalCtaDescription: string;
  };
  videosPage: {
    headline: string;
    subheadline: string;
    playlistId: string;
    featuredVideos: VideoItem[];
  };
  course: {
    playlistId: string;
  };
  coursePage: {
    headline: string;
    tagline: string;
    description: string;
    resultsBadge: string;
    modulesHeadline: string;
    modulesSubheadline: string;
    modules: CourseModule[];
    previewHeadline: string;
    previewVideos: VideoItem[];
    resultsHeadline: string;
    results: ResultStat[];
    caseStudyQuote: string;
    caseStudyAttribution: string;
    finalCtaHeadline: string;
    finalCtaDescription: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    keywords: string;
  };
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
  social: {
    linkedin: 'https://www.linkedin.com/in/sales-processes/',
    youtube: 'https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
    calendly: 'https://calendly.com/louiebernstein/30minutes',
  },
  contact: {
    email: 'Louie@LouieBernstein.com',
    phone: '(404)808-5326',
  },
  footer: {
    tagline: 'Fractional Sales Leader',
    slogan: 'Less Spend. More Sales.',
    copyrightName: 'Louie Bernstein',
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
  },
  videosPage: {
    headline: 'Sales Videos',
    subheadline: 'The most popular sales training content, handpicked for you',
    playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
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
  },
  seo: {
    siteTitle: 'Louie Bernstein - Fractional Sales Leader',
    siteDescription: 'LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems.',
    keywords: 'fractional sales leader, sales consulting, sales team optimization',
  },
};

// ============================================================================
// FETCH & MERGE
// ============================================================================

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  if (!CMS_ENABLED || !PAYLOAD_URL) {
    return defaultSettings;
  }

  try {
    const response = await fetch(`${PAYLOAD_URL}/api/globals/site-settings`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      console.warn('Failed to fetch site settings, using defaults');
      return defaultSettings;
    }

    const data = await response.json();
    return mergeSettings(defaultSettings, data);
  } catch (error) {
    console.warn('Error fetching site settings:', error);
    return defaultSettings;
  }
});

function mergeSettings(defaults: SiteSettings, data: Partial<SiteSettings>): SiteSettings {
  return {
    hero: { ...defaults.hero, ...data.hero },
    credentials: { ...defaults.credentials, ...data.credentials },
    about: { ...defaults.about, ...data.about },
    services: { 
      ...defaults.services, 
      ...data.services,
      items: data.services?.items?.length ? data.services.items : defaults.services.items,
    },
    process: {
      ...defaults.process,
      ...data.process,
      steps: data.process?.steps?.length ? data.process.steps : defaults.process.steps,
    },
    valueProposition: { ...defaults.valueProposition, ...data.valueProposition },
    faq: {
      ...defaults.faq,
      ...data.faq,
      items: data.faq?.items?.length ? data.faq.items : defaults.faq.items,
    },
    awards: { ...defaults.awards, ...data.awards },
    testimonialsSection: { ...defaults.testimonialsSection, ...data.testimonialsSection },
    social: { ...defaults.social, ...data.social },
    contact: { ...defaults.contact, ...data.contact },
    footer: { ...defaults.footer, ...data.footer },
    newsletter: { ...defaults.newsletter, ...data.newsletter },
    newsletterPage: {
      ...defaults.newsletterPage,
      ...data.newsletterPage,
      benefits: data.newsletterPage?.benefits?.length ? data.newsletterPage.benefits : defaults.newsletterPage.benefits,
    },
    videosPage: {
      ...defaults.videosPage,
      ...data.videosPage,
      featuredVideos: data.videosPage?.featuredVideos?.length ? data.videosPage.featuredVideos : defaults.videosPage.featuredVideos,
    },
    course: { ...defaults.course, ...data.course },
    coursePage: {
      ...defaults.coursePage,
      ...data.coursePage,
      modules: data.coursePage?.modules?.length ? data.coursePage.modules : defaults.coursePage.modules,
      previewVideos: data.coursePage?.previewVideos?.length ? data.coursePage.previewVideos : defaults.coursePage.previewVideos,
      results: data.coursePage?.results?.length ? data.coursePage.results : defaults.coursePage.results,
    },
    seo: { ...defaults.seo, ...data.seo },
  };
}

// ============================================================================
// HELPER EXPORTS
// ============================================================================

export async function getHeroData() {
  const settings = await getSiteSettings();
  return { ...settings.hero, credentials: settings.credentials };
}

export async function getAboutData() {
  const settings = await getSiteSettings();
  return settings.about;
}

export async function getServicesData() {
  const settings = await getSiteSettings();
  return settings.services;
}

export async function getProcessData() {
  const settings = await getSiteSettings();
  return settings.process;
}

export async function getValuePropositionData() {
  const settings = await getSiteSettings();
  return settings.valueProposition;
}

export async function getFAQData() {
  const settings = await getSiteSettings();
  return settings.faq;
}

export async function getAwardsData() {
  const settings = await getSiteSettings();
  return settings.awards;
}

export async function getTestimonialsSectionData() {
  const settings = await getSiteSettings();
  return settings.testimonialsSection;
}

export async function getContactData() {
  const settings = await getSiteSettings();
  return { ...settings.contact, social: settings.social };
}

export async function getFooterData() {
  const settings = await getSiteSettings();
  return { ...settings.footer, contact: settings.contact, social: settings.social };
}

export async function getNewsletterPageData() {
  const settings = await getSiteSettings();
  return { ...settings.newsletterPage, newsletter: settings.newsletter };
}

export async function getVideosPageData() {
  const settings = await getSiteSettings();
  return settings.videosPage;
}

export async function getCoursePageData() {
  const settings = await getSiteSettings();
  return { ...settings.coursePage, playlistId: settings.course.playlistId };
}

// ============================================================================
// TESTIMONIALS COLLECTION
// ============================================================================

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: { url: string } | null;
  featured?: boolean;
  displayOrder?: number;
}

// Default testimonials (fallback if CMS is empty)
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
];

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  if (!CMS_ENABLED || !PAYLOAD_URL) {
    return defaultTestimonials;
  }

  try {
    const response = await fetch(
      `${PAYLOAD_URL}/api/testimonials?limit=50&sort=displayOrder`,
      { next: { revalidate: 10 } }
    );

    if (!response.ok) {
      console.warn('Failed to fetch testimonials, using defaults');
      return defaultTestimonials;
    }

    const data = await response.json();
    const testimonials = data.docs as Testimonial[];

    // Return CMS testimonials if we have them, otherwise defaults
    return testimonials.length > 0 ? testimonials : defaultTestimonials;
  } catch (error) {
    console.warn('Error fetching testimonials:', error);
    return defaultTestimonials;
  }
});
