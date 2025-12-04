import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch a specific section's content
export async function GET(
  request: Request,
  { params }: { params: Promise<{ section: string }> }
) {
  const { section } = await params

  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: 'CMS not configured' },
      { status: 503 }
    )
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('site_content')
      .select('content, updated_at')
      .eq('section', section)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // Not found - return empty content
        return NextResponse.json({ content: {}, updated_at: null })
      }
      throw error
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('[CMS API] Error fetching section:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}

// PUT: Update a section's content
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ section: string }> }
) {
  const { section } = await params

  // Check authentication
  const user = await getUser()
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: 'CMS not configured' },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const { content } = body

    if (typeof content !== 'object') {
      return NextResponse.json(
        { error: 'Content must be an object' },
        { status: 400 }
      )
    }

    // Upsert the content
    const { data, error } = await supabaseAdmin
      .from('site_content')
      .upsert({
        section,
        content,
        updated_by: user.email,
      }, {
        onConflict: 'section',
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json({
      success: true,
      data,
    })
  } catch (error) {
    console.error('[CMS API] Error updating section:', error)
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    )
  }
}

