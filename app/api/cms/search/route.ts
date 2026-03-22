import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

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

    return NextResponse.json({ results, query: q })
  } catch (error) {
    console.error('[CMS Search] Error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
