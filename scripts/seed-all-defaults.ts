/**
 * Comprehensive Seed Script - Populates ALL CMS pages with default content
 * 
 * This script uses SUPABASE ONLY - no MongoDB/Payload dependencies.
 * All content is stored in Supabase's site_content table.
 * 
 * Usage: npm run seed:all
 * Or: npx tsx scripts/seed-all-defaults.ts
 * 
 * IMPORTANT: This script only adds defaults if fields are empty.
 * It will NOT overwrite existing content.
 * 
 * Required environment variables:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - SUPABASE_SERVICE_ROLE_KEY
 */

// Load environment variables FIRST before any other imports
import dotenv from 'dotenv'
import { resolve } from 'path'

// Try to load .env.local first, then .env
dotenv.config({ path: resolve(process.cwd(), '.env.local') })
dotenv.config({ path: resolve(process.cwd(), '.env') })

// Check Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Supabase configuration is missing.');
  console.error('   Required environment variables:');
  console.error('   - NEXT_PUBLIC_SUPABASE_URL');
  console.error('   - SUPABASE_SERVICE_ROLE_KEY');
  console.error('\n   Please add these to your .env.local file.');
  process.exit(1);
}

// Import Supabase after env vars are loaded
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Default course modules
const defaultCourseModules = [
  { title: 'Hiring System That Saves Time', description: 'My complete system, including a Hiring Scorecard with 120+ questions and answers.', benefit: 'Free yourself from the stress and uncertainty of hiring.', icon: '/icons/ceo-11962845.svg' },
  { title: 'Sales Playbook with Ready-to-Use Templates', description: 'Start building your processes immediately. Turn chaos into clarity.', benefit: "It's the heart of your sales system.", icon: '/icons/business-plan-11962831.svg' },
  { title: 'LinkedIn Lead Generation System', description: 'Generate a steady stream of high-quality leads from LinkedIn.', benefit: "It's how I get all my customers.", icon: '/icons/network-11962856.svg' },
  { title: 'Streamlined Sales Pipeline', description: 'Create a high-performing sales pipeline in minutes.', benefit: 'Watch your cash flow projections improve.', icon: '/icons/scalable-11962814.svg' },
];

/**
 * Deep merge function - merges defaults with existing data
 * Only adds defaults where fields are empty/null/undefined
 */
function deepMergeDefaults(existing: any, defaults: any): any {
  if (!existing || typeof existing !== 'object' || Array.isArray(existing)) {
    return existing || defaults;
  }
  
  const merged: any = { ...existing };
  
  for (const key in defaults) {
    if (defaults[key] === null || defaults[key] === undefined) {
      continue;
    }
    
    if (Array.isArray(defaults[key])) {
      // For arrays, use existing if it has items, otherwise use defaults
      if (!existing[key] || !Array.isArray(existing[key]) || existing[key].length === 0) {
        merged[key] = defaults[key];
      } else {
        merged[key] = existing[key];
      }
    } else if (typeof defaults[key] === 'object' && defaults[key] !== null) {
      // Recursively merge nested objects
      merged[key] = deepMergeDefaults(existing[key], defaults[key]);
    } else {
      // For primitives, use existing if it exists, otherwise use default
      if (existing[key] === null || existing[key] === undefined || existing[key] === '') {
        merged[key] = defaults[key];
      }
    }
  }
  
  return merged;
}

/**
 * Upsert a section to Supabase
 */
async function upsertSection(section: string, content: Record<string, any>) {
  const { data: existing } = await supabaseAdmin
    .from('site_content')
    .select('content')
    .eq('section', section)
    .single()

  const mergedContent = deepMergeDefaults(existing?.content || {}, content);

  const { error } = await supabaseAdmin
    .from('site_content')
    .upsert({
      section,
      content: mergedContent,
      updated_by: 'seed-script',
    }, {
      onConflict: 'section',
    })

  if (error) {
    throw error;
  }

  return mergedContent;
}

async function seedAllDefaults() {
  console.log('🌱 Seeding ALL CMS pages with default content...\n');
  console.log(`📡 Connecting to Supabase: ${supabaseUrl!.substring(0, 30)}...\n`);

  try {
    // Test connection
    const { error: testError } = await supabaseAdmin.from('site_content').select('section').limit(1);
    if (testError) {
      throw new Error(`Failed to connect to Supabase: ${testError.message}`);
    }
    console.log('✅ Connected to Supabase\n');

    // Homepage Hero Section
    console.log('📝 Seeding Homepage Hero...');
    await upsertSection('hero', {
      headline: 'Fractional Sales Leader',
      tagline: 'Less Spend. More Sales.',
      description: "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
      videoId: 'fCVKpcpD8tA',
      ctaPrimary: { text: 'Learn How It Works', url: '#process' },
      ctaSecondary: { text: 'Schedule a Discussion', url: 'https://calendly.com/louiebernstein/30minutes' },
    });
    console.log('  ✅ Hero section seeded\n');

    // Credentials
    console.log('📝 Seeding Credentials...');
    await upsertSection('credentials', {
      primary: 'LinkedIn Top Voice',
      secondary: '50+ Years Sales Experience',
    });
    console.log('  ✅ Credentials seeded\n');

    // About Section
    console.log('📝 Seeding About Section...');
    await upsertSection('about', {
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
    });
    console.log('  ✅ About section seeded\n');

    // Value Proposition
    console.log('📝 Seeding Value Proposition...');
    await upsertSection('valueProposition', {
      headline: "It's not how much you sell.",
      subheadline: "It's how much you take home.",
      description: "Every dollar you spend on inefficient sales processes is a dollar you don't take home. Let's fix that.",
      ctaText: "Let's Get Going!",
    });
    console.log('  ✅ Value Proposition seeded\n');

    // Fractional Sales Leader Section
    console.log('📝 Seeding Fractional Sales Leader Section...');
    await upsertSection('fractionalSalesLeader', {
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
    });
    console.log('  ✅ Fractional Sales Leader section seeded\n');

    // Services
    console.log('📝 Seeding Services...');
    await upsertSection('services', {
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
    });
    console.log('  ✅ Services seeded\n');

    // Process Steps
    console.log('📝 Seeding Process Steps...');
    await upsertSection('process', {
      headline: 'How It Works',
      subheadline: 'A proven process that delivers measurable results',
      steps: [
        { number: '01', title: 'Initial Consultation', description: "We start with a deep dive into your current sales operations. I'll assess your team, processes, and challenges to create a customized plan." },
        { number: '02', title: 'Strategic Planning', description: "Together, we'll develop a roadmap for improvement. Clear objectives, measurable KPIs, and a timeline that works for your business." },
        { number: '03', title: 'Implementation', description: "I'll work directly with your team to implement new systems and processes. Hands-on training ensures everyone knows exactly what to do." },
        { number: '04', title: 'Optimization & Growth', description: "Continuous improvement is key. We'll monitor results, make adjustments, and scale what works to drive consistent growth." },
      ],
    });
    console.log('  ✅ Process steps seeded\n');

    // FAQ
    console.log('📝 Seeding FAQ...');
    await upsertSection('faq', {
      headline: 'Frequently Asked Questions',
      subheadline: 'Everything you need to know about fractional sales leadership',
      items: [
        { question: 'What is fractional sales leadership?', answer: 'Fractional sales leadership is an outsourced service where an experienced sales leader works part-time with a company to organize, optimize, and train their sales team.' },
        { question: 'How does fractional sales leadership work?', answer: 'A fractional sales leader integrates with your existing sales team, assessing current processes, identifying areas for improvement, and implementing strategies to boost sales performance. They provide guidance, training, and support on a part-time basis.' },
        { question: 'Who is fractional sales leadership for?', answer: 'Fractional sales leadership is ideal for small to medium-sized businesses that want to improve their sales processes and results without the cost of hiring a full-time sales executive.' },
        { question: 'How much does fractional sales leadership cost?', answer: 'Pricing for fractional sales leadership varies depending on the scope of the engagement and the specific needs of the client. Contact Louie Bernstein for a customized quote.' },
        { question: 'What is the time commitment for fractional sales leadership?', answer: "The time commitment is flexible and can be adapted to the client's needs. Engagements typically range from a few months to a year or more, with the fractional sales leader working on a part-time basis." },
        { question: 'What results can I expect from fractional sales leadership?', answer: 'Clients can expect improved sales processes, increased team efficiency, and ultimately, higher sales revenue. Past clients have reported significant improvements in their sales performance after working with Louie Bernstein.' },
        { question: 'What is the process for working with a fractional sales leader?', answer: "The process typically involves an initial consultation to assess the client's current sales situation and goals, followed by the development of a customized strategy. The fractional sales leader then works with the team to implement the strategy, provide training, and monitor progress." },
      ],
    });
    console.log('  ✅ FAQ seeded\n');

    // Testimonials Section Header
    console.log('📝 Seeding Testimonials Section Header...');
    await upsertSection('testimonialsSection', {
      headline: 'What Clients Say',
      subheadline: 'Real results from real businesses',
    });
    console.log('  ✅ Testimonials section header seeded\n');

    // Awards
    console.log('📝 Seeding Awards...');
    await upsertSection('awards', {
      headline: 'Recognized Excellence',
      subheadline: 'Award-winning sales consulting and leadership',
      imageUrl: 'https://d1yei2z3i6k35z.cloudfront.net/1671832/64e3c2e5505e3_fourawards.png',
      description: 'Louie Bernstein has received four prestigious awards for excellence in sales consulting and leadership.',
    });
    console.log('  ✅ Awards seeded\n');

    // Contact Section
    console.log('📝 Seeding Contact Section...');
    await upsertSection('contactSection', {
      headline: "Let's Talk",
      description: 'Ready to transform your sales team? Get in touch today.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      ctaButtonText: 'Schedule a 30-Minute Call',
    });
    console.log('  ✅ Contact section seeded\n');

    // FSL Page
    console.log('📝 Seeding FSL Page...');
    await upsertSection('fslPage', {
      headline: 'Fractional Sales Leader',
      tagline: 'Experienced sales leadership. Fraction of the cost.',
      introHook: "You built this company from nothing. Now you're stuck running sales calls when you should be running the business.",
      introParagraph1: "I get it. The jump from $1M to $10M in revenue is brutal. You know you need sales leadership, but the thought of gambling $250K+ on a VP of Sales makes your stomach turn. And those big consulting firms? They hand you a deck and disappear. That's not leadership—that's a transaction.",
      introParagraph2: "A Fractional Sales Leader is the middle path. You get an experienced sales executive—someone who's built teams, closed deals, and scaled companies—working with you part-time at a fraction of the full-time cost. I've spent 9+ years as a Fractional Sales Leader helping 50+ companies in the $1M-$10M ARR range. I've scaled a company from zero to the INC 500. I've seen what works and what doesn't.",
      introParagraph3: "What I do: build your sales playbook, hire your first reps, coach your team, and create the systems that turn chaos into predictable revenue. Not advice—action. I embed with your team until the machine runs without me.",
      introParagraph4: "Below, I answer the five questions every founder asks before hiring a Fractional Sales Leader. Watch the videos or read the FAQs—then decide if this model fits your company.",
      playlistId: 'PL7HfhnqHyzRn0MoquOVlTgYAJPHN4_6wu',
      finalCtaHeadline: 'Ready to Stop Being the Bottleneck?',
      finalCtaButtonText: 'Schedule a 30-Minute Call',
      finalCtaDescription: "Let's talk about your sales challenges. No pitch, no pressure—just a conversation about whether a Fractional Sales Leader makes sense for your company.",
    });
    console.log('  ✅ FSL page seeded\n');

    // Videos Page
    console.log('📝 Seeding Videos Page...');
    await upsertSection('videosPage', {
      headline: 'Sales Videos',
      subheadline: 'The most popular sales training content, handpicked for you',
      playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
      featuredShortsHeadline: 'Featured Shorts',
      playlistHeadline: 'Complete Sales Leadership Playlist',
      watchOnYoutubeText: 'Watch on YouTube →',
      watchMoreButtonText: 'Watch More Videos on YouTube',
    });
    console.log('  ✅ Videos page seeded\n');

    // Newsletter Page
    console.log('📝 Seeding Newsletter Page...');
    await upsertSection('newsletterPage', {
      headline: 'The Sunday Starter',
      tagline: 'Delivered to Accelerate Your Success',
      description: 'Every Sunday, get actionable sales insights, strategies, and tips delivered straight to your LinkedIn inbox. Join thousands of sales professionals who start their week right with The Sunday Starter.',
      ctaText: 'Subscribe on LinkedIn',
      benefitsHeadline: "What You'll Get",
      finalCtaHeadline: 'Ready to Start Your Week Right?',
      finalCtaDescription: 'Join thousands of sales professionals who get The Sunday Starter every week',
      featuredContentHeadline: 'Featured Newsletter Content',
      featuredContentDescription: 'Watch exclusive videos and content from The Sunday Starter',
      finalCtaButtonText: 'Subscribe Now',
    });
    console.log('  ✅ Newsletter page seeded\n');

    // Course Page
    console.log('📝 Seeding Course Page...');
    await upsertSection('coursePage', {
      headline: "The Founder's and CEO's Sales System",
      tagline: 'Build, optimize, and scale your sales team—without the full-time cost',
      description: "A complete 20-step system created by a Fractional Sales Leader who's been where you are. Decades of experience, distilled into actionable frameworks that work.",
      resultsBadge: '61% sales increase • 120+ hiring questions • 20-step system',
      modulesHeadline: 'What You Get With This Course',
      modulesSubheadline: 'A complete 20-step sales system with everything you need to build, optimize, and scale',
      modules: defaultCourseModules,
      previewHeadline: 'Preview the Course',
      resultsHeadline: 'Real Results From Real Businesses',
      caseStudyQuote: 'Louie helped us increase sales 61% year-over-year working on a part-time arrangement as a fractional sales manager.',
      caseStudyAttribution: 'Client Case Study',
      finalCtaHeadline: 'Start Building Your Sales System Today',
      finalCtaDescription: 'Get instant access to all 20 modules, templates, scripts, and resources',
    });
    console.log('  ✅ Course page seeded\n');

    // Course Settings
    console.log('📝 Seeding Course Settings...');
    await upsertSection('course', {
      playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
    });
    console.log('  ✅ Course settings seeded\n');

    // Social Links
    console.log('📝 Seeding Social Links...');
    await upsertSection('social', {
      linkedin: 'https://www.linkedin.com/in/louiebernstein/',
      youtube: 'https://www.youtube.com/@LouieBernstein',
      calendly: 'https://calendly.com/louiebernstein/30minutes',
    });
    console.log('  ✅ Social links seeded\n');

    // Contact Info
    console.log('📝 Seeding Contact Info...');
    await upsertSection('contact', {
      email: 'Louie@LouieBernstein.com',
      phone: '(404) 808-5326',
    });
    console.log('  ✅ Contact info seeded\n');

    // Newsletter Settings
    console.log('📝 Seeding Newsletter Settings...');
    await upsertSection('newsletter', {
      name: 'The Sunday Starter',
      playlistId: 'PL7HfhnqHyzRmd7GWRKTBURlmcC7TsbdPz',
      subscribeUrl: 'https://www.linkedin.com/newsletters/the-sunday-starter-6914239256987131904/',
    });
    console.log('  ✅ Newsletter settings seeded\n');

    // Footer
    console.log('📝 Seeding Footer...');
    await upsertSection('footer', {
      tagline: 'Fractional Sales Leader',
      slogan: 'Less Spend. More Sales.',
      copyrightName: 'Louie Bernstein',
      quickLinksLabel: 'Quick Links',
      getInTouchLabel: 'Get In Touch',
    });
    console.log('  ✅ Footer seeded\n');

    // SEO
    console.log('📝 Seeding SEO Settings...');
    await upsertSection('seo', {
      siteTitle: 'Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader',
      siteDescription: 'LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems and high-performing sales teams.',
      keywords: 'fractional sales leader, sales consulting, sales team optimization',
    });
    console.log('  ✅ SEO settings seeded\n');

    console.log('✨ All default content has been seeded!');
    console.log('\n📋 Summary:');
    console.log('  ✅ Homepage sections (hero, about, services, process, FAQ, etc.)');
    console.log('  ✅ Course page');
    console.log('  ✅ FSL page');
    console.log('  ✅ Videos page');
    console.log('  ✅ Newsletter page');
    console.log('  ✅ Site settings (social, contact, footer, SEO)');
    console.log('\n🎉 Done! Visit /admin to see your populated CMS.');

  } catch (error) {
    console.error('❌ Error seeding defaults:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      if (error.stack) {
        console.error('Stack:', error.stack);
      }
    }
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  seedAllDefaults();
}

export { seedAllDefaults };
