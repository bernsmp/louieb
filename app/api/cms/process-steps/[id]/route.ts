import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch a single process step
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
      .from('process_steps')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error

    return NextResponse.json({ step: data })
  } catch (error) {
    console.error('[CMS API] Error fetching process step:', error)
    return NextResponse.json({ error: 'Failed to fetch process step' }, { status: 500 })
  }
}

// PUT: Update a process step
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
    const { step_number, title, description, display_order } = body

    const { data, error } = await supabaseAdmin
      .from('process_steps')
      .update({
        step_number,
        title,
        description,
        display_order: display_order || 0,
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true, step: data })
  } catch (error) {
    console.error('[CMS API] Error updating process step:', error)
    return NextResponse.json({ error: 'Failed to update process step' }, { status: 500 })
  }
}

// DELETE: Delete a process step
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
      .from('process_steps')
      .delete()
      .eq('id', id)

    if (error) throw error

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[CMS API] Error deleting process step:', error)
    return NextResponse.json({ error: 'Failed to delete process step' }, { status: 500 })
  }
}
