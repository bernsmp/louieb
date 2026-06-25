import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// Registry of all public site pages — searched by title/slug
const PAGE_REGISTRY: { title: string; slug: string; editUrl: string }[] = [
  // Homepage
  { title: 'Homepage', slug: '', editUrl: '/cms/homepage' },
  // Core pages
  { title: 'Fractional Sales Leader', slug: 'fractional-sales-leader', editUrl: '/cms/fsl-page' },
  { title: 'Fractional Sales Leader vs Consultant', slug: 'fractional-sales-leader-vs-consultant', editUrl: '/cms/fsl-vs-consultant-page' },
  { title: 'Fractional Sales Leader vs Sales Coach', slug: 'fractional-sales-leader-vs-sales-coach', editUrl: '/cms/seo-fsl-vs-sales-coach' },
  { title: 'FSL vs. Sales Coach', slug: 'fractional-sales-leader-vs-sales-coach', editUrl: '/cms/seo-fsl-vs-sales-coach' },
  { title: 'Fractional Sales Leader vs Sales Consultant', slug: 'fractional-sales-leader-vs-sales-consultant', editUrl: '/cms/seo-fsl-vs-sales-consultant' },
  { title: 'FSL vs. Sales Consultant', slug: 'fractional-sales-leader-vs-sales-consultant', editUrl: '/cms/seo-fsl-vs-sales-consultant' },
  { title: 'What Does a Fractional Sales Leader Do', slug: 'what-does-fractional-sales-leader-do', editUrl: '/cms/seo-what-fsl-does' },
  { title: 'What Does a FSL Do Week to Week', slug: 'what-does-fractional-sales-leader-do', editUrl: '/cms/seo-what-fsl-does' },
  { title: 'Is Fractional Sales Leadership Worth It', slug: 'is-fractional-sales-leadership-worth-it', editUrl: '/cms/seo-fsl-worth-it' },
  { title: 'When to Hire a Fractional Sales Leader', slug: 'when-to-hire-a-fractional-sales-leader', editUrl: '/cms/seo-when-to-hire-fsl' },
  { title: 'How Do I Vet a Fractional Sales Leader', slug: 'how-do-i-vet-a-fractional-sales-leader', editUrl: '/cms/seo-vet-fractional-sales-leader' },
  { title: '5 Things to Look For Before Hiring a Fractional Sales Leader', slug: 'how-do-i-vet-a-fractional-sales-leader', editUrl: '/cms/seo-vet-fractional-sales-leader' },
  { title: 'How Can a Fractional Sales Leader Lead My Team Part-Time', slug: 'can-fractional-sales-leader-lead-team-part-time', editUrl: '/cms/seo-fractional-leader-part-time' },
  { title: 'FSL Leading Team Part-Time (25 hrs/wk)', slug: 'can-fractional-sales-leader-lead-team-part-time', editUrl: '/cms/seo-fractional-leader-part-time' },
  { title: 'Cost of Fractional VP of Sales', slug: 'cost-of-fractional-vp-sales', editUrl: '/cms/seo-cost-fractional-vp' },
  { title: 'Fractional VP of Sales for Small Businesses', slug: 'fractional-vp-of-sales-for-small-businesses', editUrl: '/cms/seo-cost-fractional-vp' },
  { title: 'Fractional VP Sales vs Full-Time VP', slug: 'fractional-vp-sales-vs-full-time-vp', editUrl: '/cms/seo-vp-sales-vs-full-time' },
  // Fractional CRO
  { title: 'Fractional CRO for $1M–$10M Founders', slug: 'fractional-cro-for-1m-10m-founders', editUrl: '/cms/seo-fractional-cro' },
  { title: 'Fractional CRO Pricing', slug: 'fractional-cro-pricing', editUrl: '/cms/seo-cro-pricing' },
  { title: 'Fractional CRO vs Full-Time CRO', slug: 'fractional-cro-vs-full-time-cro', editUrl: '/cms/seo-cro-vs-full-time' },
  { title: 'How Much Does a Fractional CRO Cost', slug: 'how-much-does-a-fractional-cro-cost', editUrl: '/cms/seo-cro-cost' },
  { title: 'When to Hire a Fractional CRO', slug: 'when-to-hire-a-fractional-cro', editUrl: '/cms/seo-when-to-hire-cro' },
  { title: 'When to Hire a CRO', slug: 'when-to-hire-a-cro', editUrl: '/cms/seo-when-to-hire-cro' },
  { title: 'VP of Sales vs CRO: What\'s the Difference', slug: 'vp-sales-vs-cro-difference', editUrl: '/cms/seo-vp-vs-cro' },
  // Founder-led sales
  { title: 'What Is Founder-Led Sales', slug: 'what-is-founder-led-sales', editUrl: '/cms/seo-what-is-founder-led-sales' },
  { title: 'How to Get Out of Founder-Led Sales', slug: 'how-to-get-out-of-founder-led-sales', editUrl: '/cms/seo-get-out-founder-led-sales' },
  { title: 'Transition Out of Founder-Led Sales', slug: 'transition-out-of-founder-led-sales', editUrl: '/cms/seo-transition-founder-led-sales' },
  { title: 'How to Replace Founder-Led Sales', slug: 'how-to-replace-founder-led-sales', editUrl: '/cms/seo-replace-founder-sales' },
  { title: 'Founder-Led Sales Not Scaling', slug: 'founder-led-sales-not-scaling', editUrl: '/cms/seo-founder-sales-not-scaling' },
  { title: "What's the Best Way to Exit Founder-Led Sales", slug: 'what-is-the-best-way-to-exit-founder-led-sales', editUrl: '/cms/seo-best-way-to-exit-founder-led-sales' },
  { title: 'Best Way to Exit Founder-Led Sales', slug: 'what-is-the-best-way-to-exit-founder-led-sales', editUrl: '/cms/seo-best-way-to-exit-founder-led-sales' },
  { title: 'Will a Fractional Sales Leader Force a One-Size-Fits-All Playbook on My Unique Business', slug: 'will-fractional-sales-leader-force-one-size-fits-all-playbook', editUrl: '/cms/seo-one-size-fits-all-playbook' },
  { title: 'One-Size-Fits-All Sales Playbook (Customization)', slug: 'will-fractional-sales-leader-force-one-size-fits-all-playbook', editUrl: '/cms/seo-one-size-fits-all-playbook' },
  { title: 'How Much Time Do I Need to Spend With a Fractional Sales Leader', slug: 'how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader', editUrl: '/cms/seo-time-with-fractional-sales-leader' },
  { title: 'Founder Time Commitment With a Fractional Sales Leader', slug: 'how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader', editUrl: '/cms/seo-time-with-fractional-sales-leader' },
  { title: '5 Benefits of a Fractional Sales Leader for a Small Business (Beyond Revenue)', slug: '5-benefits-fractional-sales-leader-beyond-revenue', editUrl: '/cms/seo-5-benefits-beyond-revenue' },
  { title: 'Non-Revenue Benefits of a Fractional Sales Leader', slug: '5-benefits-fractional-sales-leader-beyond-revenue', editUrl: '/cms/seo-5-benefits-beyond-revenue' },
  // Sales leadership & process
  { title: 'Sales Leadership for $1M–$10M Companies', slug: 'sales-leadership-for-1m-10m-companies', editUrl: '/cms/seo-sales-leadership-1m-10m' },
  { title: 'How to Build a Sales Process After $1M ARR', slug: 'how-to-build-a-sales-process-after-1m-arr', editUrl: '/cms/seo-build-sales-process' },
  { title: 'How Do I Jumpstart Revenue Acceleration and Get Quick Wins', slug: 'how-do-i-jumpstart-revenue-acceleration-and-get-quick-wins', editUrl: '/cms/seo-jumpstart-revenue-acceleration' },
  { title: 'Jumpstart Revenue Acceleration & Quick Wins', slug: 'how-do-i-jumpstart-revenue-acceleration-and-get-quick-wins', editUrl: '/cms/seo-jumpstart-revenue-acceleration' },
  { title: 'How to Build a Sales Process for SaaS', slug: 'how-to-build-a-sales-process-for-saas', editUrl: '/cms/seo-saas-sales-process' },
  { title: 'How to Build an Outbound Sales System', slug: 'how-to-build-outbound-sales-system', editUrl: '/cms/seo-outbound-sales-system' },
  { title: 'How to Build a Sales Pipeline', slug: 'how-to-build-a-sales-pipeline', editUrl: '/cms/seo-build-sales-pipeline' },
  { title: 'Build a Sales Team After $1M ARR', slug: 'build-sales-team-after-1m-arr', editUrl: '/cms/seo-build-sales-team-1m-arr' },
  { title: 'Sales Forecasting for Small Business', slug: 'sales-forecasting-for-small-business', editUrl: '/cms/seo-sales-forecasting' },
  { title: 'Sales Forecasting for Investors', slug: 'sales-forecasting-for-investors', editUrl: '/cms/seo-sales-forecasting-investors' },
  { title: 'What Is a Sales Audit', slug: 'what-is-a-sales-audit', editUrl: '/cms/seo-sales-audit' },
  { title: 'What Is a Sales Playbook', slug: 'what-is-a-sales-playbook', editUrl: '/cms/seo-sales-playbook' },
  { title: 'Does My Sales Playbook Cover All the Essentials', slug: 'does-my-sales-playbook-cover-all-the-essentials', editUrl: '/cms/seo-does-my-sales-playbook-cover-all-the-essentials' },
  { title: 'Sales Playbook Checklist Essentials', slug: 'does-my-sales-playbook-cover-all-the-essentials', editUrl: '/cms/seo-does-my-sales-playbook-cover-all-the-essentials' },
  { title: 'What Is a Sales Cadence', slug: 'what-is-a-sales-cadence', editUrl: '/cms/seo-what-is-a-sales-cadence' },
  { title: 'Sales Compensation Plan', slug: 'how-to-build-sales-compensation-plan', editUrl: '/cms/seo-sales-comp-plan' },
  { title: 'How to Build a Sales Compensation Plan', slug: 'how-to-build-sales-compensation-plan', editUrl: '/cms/seo-sales-comp-plan' },
  { title: 'How to Run a Sales Pipeline Review', slug: 'how-to-run-a-sales-pipeline-review', editUrl: '/cms/seo-run-sales-pipeline-review' },
  { title: 'What Do Pipeline Stages Have to Do With Pipeline Velocity', slug: 'what-do-pipeline-stages-have-to-do-with-pipeline-velocity', editUrl: '/cms/seo-pipeline-stages-velocity' },
  { title: 'Pipeline Stages and Pipeline Velocity', slug: 'what-do-pipeline-stages-have-to-do-with-pipeline-velocity', editUrl: '/cms/seo-pipeline-stages-velocity' },
  { title: 'Sales Tech Stack for Small Business', slug: 'sales-tech-stack-for-small-business', editUrl: '/cms/seo-sales-tech-stack' },
  { title: 'Sales KPIs for Small Business', slug: 'sales-kpis-for-small-business', editUrl: '/cms/seo-sales-kpis-small-business' },
  { title: 'How to Set Sales Quota', slug: 'how-to-set-sales-quota', editUrl: '/cms/seo-set-sales-quota' },
  { title: 'How to Create an ICP', slug: 'how-to-create-an-ideal-customer-profile', editUrl: '/cms/seo-how-to-create-icp' },
  { title: 'How to Write a Cold Email', slug: 'how-to-write-a-cold-email', editUrl: '/cms/seo-how-to-write-cold-email' },
  { title: 'How to Run a Discovery Call', slug: 'how-to-run-a-discovery-call', editUrl: '/cms/seo-how-to-run-discovery-call' },
  { title: 'Close Deals Without Discounting', slug: 'how-to-close-deals-without-discounting', editUrl: '/cms/seo-close-deals-no-discount' },
  { title: 'The Most Expensive Mistake Founders Make in Sales Calls', slug: 'most-expensive-mistake-founders-make-in-sales-calls', editUrl: '/cms/seo-most-expensive-mistake-sales-calls' },
  { title: 'Listening to Reply vs Listening to Understand on Sales Calls', slug: 'most-expensive-mistake-founders-make-in-sales-calls', editUrl: '/cms/seo-most-expensive-mistake-sales-calls' },
  { title: 'Sales Accountability Document', slug: 'sales-accountability-document', editUrl: '/cms/seo-sales-accountability-document' },
  // Hiring & team
  { title: 'How to Hire Your First Sales Rep', slug: 'how-to-hire-first-sales-rep', editUrl: '/cms/seo-hire-first-sales-rep' },
  { title: 'When Ready to Hire First Sales Rep', slug: 'when-ready-hire-first-sales-rep', editUrl: '/cms/seo-when-ready-hire-sales-rep' },
  { title: 'Hire One or Two Salespeople', slug: 'hire-one-salesperson-or-two', editUrl: '/cms/seo-hire-one-or-two-salespeople' },
  { title: 'Hire One Salesperson or Two', slug: 'hire-one-salesperson-or-two', editUrl: '/cms/seo-hire-one-or-two-salespeople' },
  { title: 'How to Onboard a New Sales Rep', slug: 'how-to-onboard-new-sales-rep', editUrl: '/cms/seo-onboard-sales-rep' },
  { title: 'Why Startups Fail at Sales Hiring', slug: 'why-startups-fail-at-sales-hiring', editUrl: '/cms/seo-startups-fail-sales-hiring' },
  { title: 'The $250K VP of Sales Mistake', slug: '250k-mistake-vp-sales-hire-too-early', editUrl: '/cms/seo-250k-vp-sales-mistake' },
  { title: 'The $250K Mistake: Hiring VP of Sales Too Early', slug: '250k-mistake-vp-sales-hire-too-early', editUrl: '/cms/seo-250k-vp-sales-mistake' },
  { title: 'Am I Ready to Hire a VP of Sales Yet', slug: 'am-i-ready-to-hire-a-vp-of-sales-yet', editUrl: '/cms/seo-am-i-ready-to-hire-a-vp-of-sales-yet' },
  { title: '5 Things to Complete Before Hiring a VP of Sales', slug: 'am-i-ready-to-hire-a-vp-of-sales-yet', editUrl: '/cms/seo-am-i-ready-to-hire-a-vp-of-sales-yet' },
  // Sales team problems
  { title: 'Sales Team Not Hitting Quota', slug: 'sales-team-not-hitting-quota', editUrl: '/cms/seo-sales-team-not-hitting-quota' },
  { title: 'Why Your Sales Team Isn\'t Hitting Quota', slug: 'why-your-sales-team-isnt-hitting-quota', editUrl: '/cms/seo-sales-team-not-hitting-quota' },
  { title: 'Why Sales Team Not Growing Revenue', slug: 'why-sales-team-not-growing-revenue', editUrl: '/cms/seo-sales-team-not-growing' },
  { title: 'Why Sales Reps Fail in Startups', slug: 'why-sales-reps-fail-in-startups', editUrl: '/cms/seo-sales-reps-fail' },
  { title: 'No Pipeline: What to Do', slug: 'no-pipeline-what-to-do', editUrl: '/cms/seo-no-pipeline' },
  { title: '5 Warning Signs Sales Process Breaking', slug: '5-warning-signs-sales-process-breaking', editUrl: '/cms/seo-warning-signs-sales-process' },
  { title: 'Diagnose Sales Team Problems', slug: 'diagnose-sales-team-problems', editUrl: '/cms/seo-diagnose-sales-team' },
  // Operations
  { title: 'How to Run a Weekly Sales Meeting', slug: 'how-to-run-weekly-sales-meeting', editUrl: '/cms/seo-weekly-sales-meeting' },
  { title: 'How to Set Up HubSpot for a Small Sales Team', slug: 'how-to-set-up-hubspot-for-small-sales-team', editUrl: '/cms/seo-hubspot-setup' },
  // New batch — growth, RevOps, enablement, GTM, ROI, objections
  { title: 'What Is Sales Enablement', slug: 'what-is-sales-enablement', editUrl: '/cms/seo-what-is-sales-enablement' },
  { title: 'How to Scale Revenue from $1M to $10M', slug: 'how-to-scale-revenue-1m-to-10m', editUrl: '/cms/seo-scale-revenue-1m-to-10m' },
  { title: 'Scale Revenue $1M to $10M Roadmap', slug: 'how-to-scale-revenue-1m-to-10m', editUrl: '/cms/seo-scale-revenue-1m-to-10m' },
  { title: 'What Is Revenue Operations (RevOps)', slug: 'what-is-revenue-operations-revops', editUrl: '/cms/seo-what-is-revops' },
  { title: 'RevOps for Founders', slug: 'what-is-revenue-operations-revops', editUrl: '/cms/seo-what-is-revops' },
  { title: 'Fractional Sales Leadership ROI', slug: 'fractional-sales-leadership-roi', editUrl: '/cms/seo-fsl-roi' },
  { title: 'What Does Fractional Sales Leadership Cost and Return', slug: 'fractional-sales-leadership-roi', editUrl: '/cms/seo-fsl-roi' },
  { title: 'How to Build a Go-to-Market Strategy', slug: 'how-to-build-a-go-to-market-strategy', editUrl: '/cms/seo-go-to-market-strategy' },
  { title: 'GTM Strategy for B2B Companies', slug: 'how-to-build-a-go-to-market-strategy', editUrl: '/cms/seo-go-to-market-strategy' },
  { title: 'B2B Sales Objection Handling', slug: 'b2b-sales-objection-handling', editUrl: '/cms/seo-b2b-objection-handling' },
  { title: 'How to Handle Sales Objections', slug: 'b2b-sales-objection-handling', editUrl: '/cms/seo-b2b-objection-handling' },
  // Audience pages
  { title: 'For Founders', slug: 'founders', editUrl: '/cms/founders' },
  { title: 'For Entrepreneurs', slug: 'entrepreneurs', editUrl: '/cms/entrepreneurs' },
  { title: 'For Salesperson', slug: 'salesperson', editUrl: '/cms/salesperson' },
  // Case study
  { title: 'Case Study: 61% Sales Growth', slug: 'case-study-61-percent-sales-growth', editUrl: '/cms/seo-case-study-61-growth' },
  // Content pages
  { title: 'Blog', slug: 'blog', editUrl: '/cms/blog-page' },
  { title: 'Articles', slug: 'articles', editUrl: '/cms/articles-page' },
  { title: 'Videos', slug: 'videos', editUrl: '/cms/videos' },
  { title: 'Newsletter', slug: 'newsletter', editUrl: '/cms/newsletter' },
  { title: 'FAQs', slug: 'faqs', editUrl: '/cms/faq' },
  { title: 'Course', slug: 'course', editUrl: '/cms/course' },
  // Tools
  { title: 'Tools', slug: 'tools', editUrl: '/cms/tools/landing' },
  { title: 'ROI Calculator', slug: 'tools/roi-calculator', editUrl: '/cms/tools/roi-calculator' },
]

// Maps site_content section keys → CMS edit URLs
const SECTION_URLS: Record<string, string> = {
  // Homepage sections
  hero: '/cms/homepage/hero',
  credentials: '/cms/homepage/credentials',
  about: '/cms/homepage/about',
  fractionalSalesLeader: '/cms/homepage/fractional-sales-leader',
  valueProposition: '/cms/homepage/value-proposition',
  servicesSection: '/cms/homepage/services-header',
  processSection: '/cms/homepage/process-header',
  faqSection: '/cms/homepage/faq-header',
  testimonialsSection: '/cms/homepage/testimonials-header',
  awards: '/cms/homepage/awards',
  contactSection: '/cms/homepage/contact',
  // Other pages
  fslPage: '/cms/fsl-page/sections',
  fslVsConsultantPage: '/cms/fsl-vs-consultant-page',
  salespersonPage: '/cms/salesperson',
  videosPage: '/cms/videos',
  newsletterPage: '/cms/newsletter',
  blogPage: '/cms/blog-page',
  articlesPage: '/cms/articles-page',
  coursePage: '/cms/course',
  toolsPage: '/cms/tools/landing',
  roiCalculatorPage: '/cms/tools/roi-calculator',
  roiCalculatorText: '/cms/tools/roi-calculator-text',
  founders: '/cms/founders',
  entrepreneurs: '/cms/entrepreneurs',
  // Settings
  footer: '/cms/settings/footer',
  navigation: '/cms/settings/navigation',
  seo: '/cms/seo',
  contact: '/cms/settings/contact',
  newsletter: '/cms/settings/newsletter',
  course: '/cms/settings/course',
  // SEO pages
  seoFractionalCRO: '/cms/seo-fractional-cro',
  seoFractionalVP: '/cms/seo-fractional-vp',
  seoWhenToHire: '/cms/seo-when-to-hire',
  seoCROPricing: '/cms/seo-cro-pricing',
  seoReplaceFounderSales: '/cms/seo-replace-founder-sales',
  seoSalesTeamQuota: '/cms/seo-sales-team-quota',
  seoBuildSalesProcess: '/cms/seo-build-sales-process',
  seoSaasSalesProcess: '/cms/seo-saas-sales-process',
  seoFounderSalesNotScaling: '/cms/seo-founder-sales-not-scaling',
  seoNoPipeline: '/cms/seo-no-pipeline',
  seoSalesTeamNotHittingQuota: '/cms/seo-sales-team-not-hitting-quota',
  seoSalesRepsFail: '/cms/seo-sales-reps-fail',
  seoHireFirstSalesRep: '/cms/seo-hire-first-sales-rep',
  seoSalesLeadership1m10m: '/cms/seo-sales-leadership-1m-10m',
  seoBuildSalesTeam1mArr: '/cms/seo-build-sales-team-1m-arr',
  seoStartupsFailSalesHiring: '/cms/seo-startups-fail-sales-hiring',
  seoCroVsFullTime: '/cms/seo-cro-vs-full-time',
  seoVpVsCro: '/cms/seo-vp-vs-cro',
  seoCroCost: '/cms/seo-cro-cost',
  seoWhenToHireCro: '/cms/seo-when-to-hire-cro',
  seoFslVsConsultant: '/cms/seo-fsl-vs-consultant',
  seoVpSalesVsFullTime: '/cms/seo-vp-sales-vs-full-time',
  seoWhenToHireFsl: '/cms/seo-when-to-hire-fsl',
  seoCostFractionalVp: '/cms/seo-cost-fractional-vp',
  seoFslWorthIt: '/cms/seo-fsl-worth-it',
  seoWhatIsFounderLedSales: '/cms/seo-what-is-founder-led-sales',
  seoGetOutFounderLedSales: '/cms/seo-get-out-founder-led-sales',
  seoSalesTeamNotGrowingRevenue: '/cms/seo-sales-team-not-growing',
  seoSalesForecastingSmallBusiness: '/cms/seo-sales-forecasting',
  seoWhatIsASalesAudit: '/cms/seo-sales-audit',
  seoBuildOutboundSalesSystem: '/cms/seo-outbound-sales-system',
  // New batch
  seoWhatIsSalesEnablement: '/cms/seo-what-is-sales-enablement',
  seoScaleRevenue1mTo10m: '/cms/seo-scale-revenue-1m-to-10m',
  seoWhatIsRevOps: '/cms/seo-what-is-revops',
  seoFractionalSalesLeadershipRoi: '/cms/seo-fsl-roi',
  seoBuildGoToMarketStrategy: '/cms/seo-go-to-market-strategy',
  seoB2bSalesObjectionHandling: '/cms/seo-b2b-objection-handling',
  seoBestWayToExitFounderLedSales: '/cms/seo-best-way-to-exit-founder-led-sales',
  seoJumpstartRevenueAccelerationQuickWins: '/cms/seo-jumpstart-revenue-acceleration',
  seoFractionalLeaderPartTime: '/cms/seo-fractional-leader-part-time',
  seoOneSizeFitsAllPlaybook: '/cms/seo-one-size-fits-all-playbook',
  seoTimeWithFractionalSalesLeader: '/cms/seo-time-with-fractional-sales-leader',
  seoFiveBenefitsFslBeyondRevenue: '/cms/seo-5-benefits-beyond-revenue',
  seoSalesPlaybookChecklist: '/cms/seo-does-my-sales-playbook-cover-all-the-essentials',
  seoVetFractionalSalesLeader: '/cms/seo-vet-fractional-sales-leader',
  seoReadyToHireVpSales: '/cms/seo-am-i-ready-to-hire-a-vp-of-sales-yet',
  seoExpensiveSalesCallMistake: '/cms/seo-most-expensive-mistake-sales-calls',
  seoPipelineStagesVelocity: '/cms/seo-pipeline-stages-velocity',
}

function extractSnippet(text: string, query: string, maxLen = 120): string {
  const lower = text.toLowerCase()
  const idx = lower.indexOf(query.toLowerCase())
  if (idx === -1) return text.slice(0, maxLen) + (text.length > maxLen ? '…' : '')
  const start = Math.max(0, idx - 40)
  const end = Math.min(text.length, idx + query.length + 80)
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '')
}

function searchInObject(obj: unknown, query: string): string | null {
  const text = JSON.stringify(obj)
  if (text.toLowerCase().includes(query.toLowerCase())) {
    // Strip JSON syntax, find a readable snippet
    const cleaned = text.replace(/[{}"\\[\]]/g, ' ').replace(/\s+/g, ' ').trim()
    return extractSnippet(cleaned, query)
  }
  return null
}

export async function GET(request: Request) {
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')?.trim()

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] })
  }

  const like = `%${q}%`

  try {
    // Run all searches in parallel
    const [
      siteContentRes,
      faqRes,
      testimonialsRes,
      blogRes,
      servicesRes,
      processRes,
    ] = await Promise.all([
      supabaseAdmin.from('site_content').select('section, content').filter('content::text', 'ilike', like),
      supabaseAdmin.from('faq_items').select('id, question, answer, page').or(`question.ilike.${like},answer.ilike.${like}`),
      supabaseAdmin.from('testimonials').select('id, quote, author, role, company').or(`quote.ilike.${like},author.ilike.${like},role.ilike.${like},company.ilike.${like}`),
      supabaseAdmin.from('blog_posts').select('id, title, excerpt').or(`title.ilike.${like},excerpt.ilike.${like},content.ilike.${like}`),
      supabaseAdmin.from('services').select('id, title, description').or(`title.ilike.${like},description.ilike.${like}`),
      supabaseAdmin.from('process_steps').select('id, title, description').or(`title.ilike.${like},description.ilike.${like}`),
    ])

    const results: {
      type: string
      label: string
      snippet: string
      editUrl: string
    }[] = []

    // Site content results
    for (const row of siteContentRes.data ?? []) {
      const snippet = searchInObject(row.content, q)
      if (snippet) {
        results.push({
          type: 'Page Content',
          label: row.section,
          snippet,
          editUrl: SECTION_URLS[row.section] ?? '/cms',
        })
      }
    }

    // FAQ results
    for (const row of faqRes.data ?? []) {
      const matchIn = row.question.toLowerCase().includes(q.toLowerCase()) ? row.question : row.answer
      results.push({
        type: 'FAQ',
        label: row.question,
        snippet: extractSnippet(matchIn, q),
        editUrl: `/cms/faq`,
      })
    }

    // Testimonials
    for (const row of testimonialsRes.data ?? []) {
      const full = [row.quote, row.author, row.role, row.company].filter(Boolean).join(' ')
      results.push({
        type: 'Testimonial',
        label: `${row.author}${row.company ? ` — ${row.company}` : ''}`,
        snippet: extractSnippet(full, q),
        editUrl: `/cms/testimonials`,
      })
    }

    // Blog posts
    for (const row of blogRes.data ?? []) {
      results.push({
        type: 'Blog Post',
        label: row.title,
        snippet: extractSnippet(row.excerpt ?? row.title, q),
        editUrl: `/cms/blog`,
      })
    }

    // Services
    for (const row of servicesRes.data ?? []) {
      const full = [row.title, row.description].filter(Boolean).join(' ')
      results.push({
        type: 'Service',
        label: row.title,
        snippet: extractSnippet(full, q),
        editUrl: `/cms/services`,
      })
    }

    // Process steps
    for (const row of processRes.data ?? []) {
      const full = [row.title, row.description].filter(Boolean).join(' ')
      results.push({
        type: 'Process Step',
        label: row.title,
        snippet: extractSnippet(full, q),
        editUrl: `/cms/process`,
      })
    }

    // Page registry results — match title or slug against query (either direction)
    const qLower = q.toLowerCase()
    for (const page of PAGE_REGISTRY) {
      const searchable = `${page.title} ${page.slug.replace(/-/g, ' ')}`.toLowerCase()
      if (searchable.includes(qLower) || qLower.includes(page.title.toLowerCase())) {
        results.unshift({
          type: 'Page',
          label: page.title,
          snippet: `/${page.slug}`,
          editUrl: page.editUrl,
        })
      }
    }

    return NextResponse.json({ results, query: q })
  } catch (error) {
    console.error('[CMS Search] Error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
