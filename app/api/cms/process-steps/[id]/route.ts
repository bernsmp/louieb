import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[CMS API] Error deleting process step:', error)
    return NextResponse.json({ error: 'Failed to delete process step' }, { status: 500 })
  }
}

