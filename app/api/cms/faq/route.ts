import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all FAQ items (optionally filtered by page)
export async function GET(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')

    let query = supabaseAdmin
      .from('faq_items')
      .select('*')
      .order('display_order', { ascending: true })

    if (page) {
      query = query.eq('page', page)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ items: data })
  } catch (error) {
    console.error('[CMS API] Error fetching FAQ items:', error)
    return NextResponse.json({ error: 'Failed to fetch FAQ items' }, { status: 500 })
  }
}

// POST: Create a new FAQ item
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
    const { question, answer, page, display_order } = body

    if (!question || !answer) {
      return NextResponse.json({ error: 'Question and answer are required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('faq_items')
      .insert({
        question,
        answer,
        page: page || 'homepage',
        display_order: display_order || 0,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, item: data })
  } catch (error) {
    console.error('[CMS API] Error creating FAQ item:', error)
    return NextResponse.json({ error: 'Failed to create FAQ item' }, { status: 500 })
  }
}

