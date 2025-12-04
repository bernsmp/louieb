import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// Valid pages that support section ordering
const VALID_PAGES = [
  'fractional-sales-leader',
  'homepage',
  'videos',
  'newsletter',
  'course',
]

interface OrderSectionsRequest {
  page: string
  sections: string[]
}

/**
 * GET /api/cms/order/sections?page=<page>
 * Get the current section order for a page
 */
export async function GET(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')

    if (!page) {
      return NextResponse.json({ error: 'Page parameter is required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('site_content')
      .select('content')
      .eq('section', `page_layout_${page}`)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // Not found - return empty
        return NextResponse.json({ sections: null })
      }
      throw error
    }

    const content = data?.content as Record<string, unknown>
    return NextResponse.json({
      sections: content?.sections || null,
    })
  } catch (error) {
    console.error('[CMS API] Error fetching section order:', error)
    return NextResponse.json({ error: 'Failed to fetch section order' }, { status: 500 })
  }
}

/**
 * POST /api/cms/order/sections
 * Update the section order for a page
 */
export async function POST(request: Request) {
  // Check authentication
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const body: OrderSectionsRequest = await request.json()
    const { page, sections } = body

    // Validate page
    if (!page || typeof page !== 'string') {
      return NextResponse.json({ error: 'Page is required' }, { status: 400 })
    }

    if (!VALID_PAGES.includes(page)) {
      return NextResponse.json(
        { error: `Invalid page: ${page}. Valid pages: ${VALID_PAGES.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate sections array
    if (!Array.isArray(sections) || sections.length === 0) {
      return NextResponse.json(
        { error: 'Sections array is required and must not be empty' },
        { status: 400 }
      )
    }

    // Validate all sections are strings
    if (!sections.every((s) => typeof s === 'string')) {
      return NextResponse.json(
        { error: 'All sections must be strings' },
        { status: 400 }
      )
    }

    // Upsert the page layout
    const { error } = await supabaseAdmin
      .from('site_content')
      .upsert(
        {
          section: `page_layout_${page}`,
          content: { sections },
          updated_by: user.email,
        },
        { onConflict: 'section' }
      )

    if (error) {
      throw error
    }

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({
      success: true,
      page,
      sections,
    })
  } catch (error) {
    console.error('[CMS API] Error updating section order:', error)
    return NextResponse.json({ error: 'Failed to update section order' }, { status: 500 })
  }
}

