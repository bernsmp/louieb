import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all testimonials
export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('testimonials')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error

    return NextResponse.json({ testimonials: data })
  } catch (error) {
    console.error('[CMS API] Error fetching testimonials:', error)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

// POST: Create a new testimonial
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
    const { quote, author, role, company, image_url, featured, display_order } = body

    if (!quote || !author) {
      return NextResponse.json({ error: 'Quote and author are required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('testimonials')
      .insert({
        quote,
        author,
        role: role || null,
        company: company || null,
        image_url: image_url || null,
        featured: featured || false,
        display_order: display_order || 0,
      })
      .select()
      .single()

    if (error) throw error

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true, testimonial: data })
  } catch (error) {
    console.error('[CMS API] Error creating testimonial:', error)
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 })
  }
}

