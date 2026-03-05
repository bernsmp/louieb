import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch custom article order
export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json({ order: [] })
  }

  const { data } = await supabaseAdmin
    .from('site_content')
    .select('content')
    .eq('section', 'articlesOrder')
    .single()

  return NextResponse.json({ order: (data?.content as { order?: string[] })?.order || [] })
}

// POST: Save custom article order
export async function POST(request: Request) {
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  const { order } = await request.json()

  const { error } = await supabaseAdmin
    .from('site_content')
    .upsert({ section: 'articlesOrder', content: { order } }, { onConflict: 'section' })

  if (error) {
    console.error('[CMS API] Error saving article order:', error)
    return NextResponse.json({ error: 'Failed to save order' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
