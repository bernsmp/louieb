import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all process steps
export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('process_steps')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error

    return NextResponse.json({ steps: data })
  } catch (error) {
    console.error('[CMS API] Error fetching process steps:', error)
    return NextResponse.json({ error: 'Failed to fetch process steps' }, { status: 500 })
  }
}

// POST: Create a new process step
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
    const { step_number, title, description, display_order } = body

    if (!step_number || !title || !description) {
      return NextResponse.json({ error: 'Step number, title, and description are required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('process_steps')
      .insert({
        step_number,
        title,
        description,
        display_order: display_order || 0,
      })
      .select()
      .single()

    if (error) throw error

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true, step: data })
  } catch (error) {
    console.error('[CMS API] Error creating process step:', error)
    return NextResponse.json({ error: 'Failed to create process step' }, { status: 500 })
  }
}

