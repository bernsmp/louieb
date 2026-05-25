import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('newsletter_entries')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
      }
      throw error
    }

    return NextResponse.json({ entry: data })
  } catch (error) {
    console.error('[CMS API] Error fetching newsletter entry:', error)
    return NextResponse.json({ error: 'Failed to fetch newsletter entry' }, { status: 500 })
  }
}

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
    const { title, url, display_order } = body

    const updates: Record<string, unknown> = {}
    if (typeof title === 'string') updates.title = title
    if (typeof url === 'string') updates.url = url
    if (typeof display_order === 'number') updates.display_order = display_order

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('newsletter_entries')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    revalidatePath('/site-map')

    return NextResponse.json({ success: true, entry: data })
  } catch (error) {
    console.error('[CMS API] Error updating newsletter entry:', error)
    return NextResponse.json({ error: 'Failed to update newsletter entry' }, { status: 500 })
  }
}

export async function DELETE(
  _request: Request,
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
      .from('newsletter_entries')
      .delete()
      .eq('id', id)

    if (error) throw error

    revalidatePath('/site-map')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[CMS API] Error deleting newsletter entry:', error)
    return NextResponse.json({ error: 'Failed to delete newsletter entry' }, { status: 500 })
  }
}
