import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all services
export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('services')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error

    return NextResponse.json({ services: data })
  } catch (error) {
    console.error('[CMS API] Error fetching services:', error)
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}

// POST: Create a new service
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
    const { title, description, icon, highlight, display_order } = body

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('services')
      .insert({
        title,
        description,
        icon: icon || null,
        highlight: highlight || false,
        display_order: display_order || 0,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, service: data })
  } catch (error) {
    console.error('[CMS API] Error creating service:', error)
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 })
  }
}

