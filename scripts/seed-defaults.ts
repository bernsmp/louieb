/**
 * Seed Script - Populates CMS database with default content
 * 
 * Run this script after initial deployment to ensure all default content
 * is in the database and editable via the CMS admin panel.
 * 
 * Usage: npx ts-node scripts/seed-defaults.ts
 * Or add to package.json: "seed": "ts-node scripts/seed-defaults.ts"
 * 
 * IMPORTANT: This script only adds defaults if fields are empty.
 * It will NOT overwrite existing content.
 */

const PAYLOAD_URL = process.env.PAYLOAD_URL || 'https://louiebernstein.com';

// Default benefits for Newsletter Page
const defaultBenefits = [
  {
    title: 'Weekly Insights',
    description: 'Actionable strategies and tactics you can implement immediately',
    icon: '/icons/analytics-11962812.svg',
  },
  {
    title: 'Real-World Examples',
    description: 'Case studies and lessons from actual client engagements',
    icon: '/icons/business-goal-11962851.svg',
  },
  {
    title: 'Growth Tips',
    description: 'Proven techniques to scale your business and improve team performance',
    icon: '/icons/growth-6621994.svg',
  },
];

// Default services for Home Page
const defaultServices = [
  { title: 'Sales Team Organization', description: 'Structure your sales team for maximum efficiency. Clear roles, accountability, and reporting systems that keep everyone aligned.', icon: '/icons/business-team-6621979.svg', highlight: false },
  { title: 'Sales Process Optimization', description: 'Streamline your sales process from lead to close. Eliminate bottlenecks and create a repeatable, scalable system.', icon: '/icons/efficiency-6622003.svg', highlight: true },
  { title: 'Sales Team Training', description: 'Equip your team with the skills and knowledge they need. Customized training programs that address your specific challenges.', icon: '/icons/guidance-6622007.svg', highlight: false },
  { title: 'Sales Playbook Development', description: 'Create a comprehensive playbook that ensures consistency. Scripts, emails, and processes that get everyone on the same page.', icon: '/icons/business-plan-11962831.svg', highlight: false },
  { title: 'Pipeline Management', description: 'Implement proven pipeline management strategies. Forecast accurately and close more deals with predictable results.', icon: '/icons/scalable-11962814.svg', highlight: true },
  { title: 'CRM Implementation', description: 'Set up and optimize your CRM for real results. Data-driven insights that help you make better decisions faster.', icon: '/icons/analytics-11962812.svg', highlight: false },
];

// Default process steps
const defaultProcessSteps = [
  { number: '01', title: 'Initial Consultation', description: "We start with a deep dive into your current sales operations. I'll assess your team, processes, and challenges to create a customized plan." },
  { number: '02', title: 'Strategic Planning', description: "Together, we'll develop a roadmap for improvement. Clear objectives, measurable KPIs, and a timeline that works for your business." },
  { number: '03', title: 'Implementation', description: "I'll work directly with your team to implement new systems and processes. Hands-on training ensures everyone knows exactly what to do." },
  { number: '04', title: 'Optimization & Growth', description: "Continuous improvement is key. We'll monitor results, make adjustments, and scale what works to drive consistent growth." },
];

// Default FAQ items
const defaultFAQItems = [
  { question: 'What is fractional sales leadership?', answer: 'Fractional sales leadership is an outsourced service where an experienced sales leader works part-time with a company to organize, optimize, and train their sales team.' },
  { question: 'How does fractional sales leadership work?', answer: 'A fractional sales leader integrates with your existing sales team, assessing current processes, identifying areas for improvement, and implementing strategies to boost sales performance. They provide guidance, training, and support on a part-time basis.' },
  { question: 'Who is fractional sales leadership for?', answer: 'Fractional sales leadership is ideal for small to medium-sized businesses that want to improve their sales processes and results without the cost of hiring a full-time sales executive.' },
  { question: 'How much does fractional sales leadership cost?', answer: 'Pricing for fractional sales leadership varies depending on the scope of the engagement and the specific needs of the client. Contact Louie Bernstein for a customized quote.' },
  { question: 'What is the time commitment for fractional sales leadership?', answer: "The time commitment is flexible and can be adapted to the client's needs. Engagements typically range from a few months to a year or more, with the fractional sales leader working on a part-time basis." },
  { question: 'What results can I expect from fractional sales leadership?', answer: 'Clients can expect improved sales processes, increased team efficiency, and ultimately, higher sales revenue. Past clients have reported significant improvements in their sales performance after working with Louie Bernstein.' },
  { question: 'What is the process for working with a fractional sales leader?', answer: "The process typically involves an initial consultation to assess the client's current sales situation and goals, followed by the development of a customized strategy. The fractional sales leader then works with the team to implement the strategy, provide training, and monitor progress." },
];

// Default featured videos
const defaultFeaturedVideos = [
  { videoId: 'ScygjngNNY4', title: 'Build This Before Hiring Salespeople', description: "Don't hire sales reps until you have a playbook. Learn why building the system first is crucial for scaling revenue." },
  { videoId: 'LgaJZ4R6Y-4', title: 'My 1st Sales Hire Mistake', description: 'Avoid common hiring pitfalls. Louie shares his personal experience with early sales hires and what he learned.' },
  { videoId: '40BopNISisE', title: 'Build The System Before The Team', description: "Why you need a sales system before a sales team. A fractional sales leader's perspective on sustainable growth." },
  { videoId: 'epPZ4qZBo5I', title: 'The Secret Email Step That Gets Replies', description: 'A tactical email outreach tip to increase your response rates immediately. Simple but effective.' },
];

// Default course modules
const defaultCourseModules = [
  { title: 'Hiring System That Saves Time', description: 'My complete system, including a Hiring Scorecard with 120+ questions and answers.', benefit: 'Free yourself from the stress and uncertainty of hiring.', icon: '/icons/ceo-11962845.svg' },
  { title: 'Sales Playbook with Ready-to-Use Templates', description: 'Start building your processes immediately. Turn chaos into clarity.', benefit: "It's the heart of your sales system.", icon: '/icons/business-plan-11962831.svg' },
  { title: 'LinkedIn Lead Generation System', description: 'Generate a steady stream of high-quality leads from LinkedIn.', benefit: "It's how I get all my customers.", icon: '/icons/network-11962856.svg' },
  { title: 'Streamlined Sales Pipeline', description: 'Create a high-performing sales pipeline in minutes.', benefit: 'Watch your cash flow projections improve.', icon: '/icons/scalable-11962814.svg' },
];

async function seedDefaults() {
  console.log('🌱 Seeding CMS with default content...\n');

  try {
    // Fetch current settings
    const response = await fetch(`${PAYLOAD_URL}/api/globals/site-settings`);
    if (!response.ok) {
      throw new Error(`Failed to fetch settings: ${response.status}`);
    }
    const current = await response.json();

    // Build update payload - only add defaults where data is missing
    const updates: Record<string, unknown> = {};

    // Newsletter Page Benefits
    if (!current.newsletterPage?.benefits?.length) {
      console.log('📝 Adding default Newsletter Page benefits...');
      updates.newsletterPage = {
        ...current.newsletterPage,
        benefits: defaultBenefits,
      };
    } else {
      console.log('✅ Newsletter Page benefits already exist');
    }

    // Services
    if (!current.services?.items?.length) {
      console.log('📝 Adding default Services...');
      updates.services = {
        ...current.services,
        items: defaultServices,
      };
    } else {
      console.log('✅ Services already exist');
    }

    // Process Steps
    if (!current.process?.steps?.length) {
      console.log('📝 Adding default Process steps...');
      updates.process = {
        ...current.process,
        steps: defaultProcessSteps,
      };
    } else {
      console.log('✅ Process steps already exist');
    }

    // FAQ Items
    if (!current.faq?.items?.length) {
      console.log('📝 Adding default FAQ items...');
      updates.faq = {
        ...current.faq,
        items: defaultFAQItems,
      };
    } else {
      console.log('✅ FAQ items already exist');
    }

    // Featured Videos
    if (!current.videosPage?.featuredVideos?.length) {
      console.log('📝 Adding default Featured Videos...');
      updates.videosPage = {
        ...current.videosPage,
        featuredVideos: defaultFeaturedVideos,
      };
    } else {
      console.log('✅ Featured Videos already exist');
    }

    // Course Modules
    if (!current.coursePage?.modules?.length) {
      console.log('📝 Adding default Course modules...');
      updates.coursePage = {
        ...current.coursePage,
        modules: defaultCourseModules,
      };
    } else {
      console.log('✅ Course modules already exist');
    }

    // Apply updates if any
    if (Object.keys(updates).length > 0) {
      console.log('\n🚀 Applying updates to CMS...');
      
      // Note: This requires authentication - see instructions below
      console.log('\n⚠️  MANUAL STEP REQUIRED:');
      console.log('The Payload API requires authentication to update globals.');
      console.log('Please add the following in the CMS admin panel:\n');
      
      if (updates.newsletterPage) {
        console.log('📌 Newsletter Page → Benefit Cards:');
        defaultBenefits.forEach((b, i) => {
          console.log(`   ${i + 1}. Title: "${b.title}"`);
          console.log(`      Description: "${b.description}"`);
          console.log(`      Icon: "${b.icon}"\n`);
        });
      }

      console.log('\n💡 TIP: To automate this, set up a Payload seed hook or local API.');
    } else {
      console.log('\n✨ All defaults already exist in the database!');
    }

  } catch (error) {
    console.error('❌ Error seeding defaults:', error);
    process.exit(1);
  }
}

// Run if called directly
seedDefaults();

