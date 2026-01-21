import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all videos (optionally filtered by page)
export async function GET(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')

    let query = supabaseAdmin
      .from('videos')
      .select('*')
      .order('display_order', { ascending: true })

    if (page) {
      query = query.eq('page', page)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ videos: data })
  } catch (error) {
    console.error('[CMS API] Error fetching videos:', error)
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 })
  }
}

// POST: Create a new video
export async function POST(request: Request) {
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { youtube_id, title, description, page, display_order, is_featured_short } = body

    if (!youtube_id || !title) {
      return NextResponse.json({ error: 'YouTube ID and title are required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('videos')
      .insert({
        youtube_id,
        title,
        description: description || null,
        page: page || 'featured',
        display_order: display_order || 0,
        is_featured_short: is_featured_short || false,
      })
      .select()
      .single()

    if (error) throw error

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true, video: data })
  } catch (error) {
    console.error('[CMS API] Error creating video:', error)
    return NextResponse.json({ error: 'Failed to create video' }, { status: 500 })
  }
}

