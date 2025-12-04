import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// Supported block types and their corresponding table names
const BLOCK_TABLES: Record<string, string> = {
  videos: 'videos',
  faq: 'faq_items',
  testimonials: 'testimonials',
  services: 'services',
  'process-steps': 'process_steps',
}

interface OrderItem {
  id: string
  display_order: number
}

interface OrderBlocksRequest {
  type: string
  items: OrderItem[]
}

/**
 * POST /api/cms/order/blocks
 * Batch update display_order for a specific block type
 */
export async function POST(request: Request) {
  // Check authentication
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  // Capture in local const for TypeScript narrowing
  const db = supabaseAdmin

  try {
    const body: OrderBlocksRequest = await request.json()
    const { type, items } = body

    // Validate block type
    const tableName = BLOCK_TABLES[type]
    if (!tableName) {
      return NextResponse.json(
        { error: `Invalid block type: ${type}. Valid types: ${Object.keys(BLOCK_TABLES).join(', ')}` },
        { status: 400 }
      )
    }

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Items array is required and must not be empty' },
        { status: 400 }
      )
    }

    // Validate each item has id and display_order
    for (const item of items) {
      if (!item.id || typeof item.display_order !== 'number') {
        return NextResponse.json(
          { error: 'Each item must have an id (string) and display_order (number)' },
          { status: 400 }
        )
      }
    }

    // Update each item's display_order
    // Using Promise.all for parallel updates
    const updatePromises = items.map((item) =>
      db
        .from(tableName)
        .update({ display_order: item.display_order })
        .eq('id', item.id)
    )

    const results = await Promise.all(updatePromises)

    // Check for errors
    const errors = results.filter((r) => r.error)
    if (errors.length > 0) {
      console.error('[CMS API] Errors updating block order:', errors)
      return NextResponse.json(
        { error: 'Some items failed to update', details: errors.map((e) => e.error?.message) },
        { status: 500 }
      )
    }

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({
      success: true,
      updated: items.length,
    })
  } catch (error) {
    console.error('[CMS API] Error updating block order:', error)
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }
}

