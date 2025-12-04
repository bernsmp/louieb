import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch a single FAQ item
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('faq_items')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
      }
      throw error
    }

    return NextResponse.json({ item: data })
  } catch (error) {
    console.error('[CMS API] Error fetching FAQ item:', error)
    return NextResponse.json({ error: 'Failed to fetch FAQ item' }, { status: 500 })
  }
}

// PUT: Update a FAQ item
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
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

    const { data, error } = await supabaseAdmin
      .from('faq_items')
      .update({
        question,
        answer,
        page: page || 'homepage',
        display_order: display_order || 0,
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, item: data })
  } catch (error) {
    console.error('[CMS API] Error updating FAQ item:', error)
    return NextResponse.json({ error: 'Failed to update FAQ item' }, { status: 500 })
  }
}

// DELETE: Delete a FAQ item
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const user = await getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { error } = await supabaseAdmin
      .from('faq_items')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[CMS API] Error deleting FAQ item:', error)
    return NextResponse.json({ error: 'Failed to delete FAQ item' }, { status: 500 })
  }
}

