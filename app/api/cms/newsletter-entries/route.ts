import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all newsletter entries, ordered by display_order ascending
// (lower = appears higher on /site-map, right under "The Sunday Starter Newsletter").
export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('newsletter_entries')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error

    return NextResponse.json({ entries: data })
  } catch (error) {
    console.error('[CMS API] Error fetching newsletter entries:', error)
    return NextResponse.json({ error: 'Failed to fetch newsletter entries' }, { status: 500 })
  }
}

// POST: Create a new newsletter entry. New entries appear at the top of the list
// (display_order = MIN(existing) - 1) so they land right under "The Sunday Starter Newsletter".
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
    const { title, url } = body

    if (!title || !url) {
      return NextResponse.json({ error: 'Title and URL are required' }, { status: 400 })
    }

    const { data: minRow } = await supabaseAdmin
      .from('newsletter_entries')
      .select('display_order')
      .order('display_order', { ascending: true })
      .limit(1)
      .maybeSingle()

    const newOrder = (minRow?.display_order ?? 0) - 1

    const { data, error } = await supabaseAdmin
      .from('newsletter_entries')
      .insert({ title, url, display_order: newOrder })
      .select()
      .single()

    if (error) throw error

    revalidatePath('/site-map')

    return NextResponse.json({ success: true, entry: data })
  } catch (error) {
    console.error('[CMS API] Error creating newsletter entry:', error)
    return NextResponse.json({ error: 'Failed to create newsletter entry' }, { status: 500 })
  }
}
