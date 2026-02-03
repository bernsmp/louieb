import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all blog posts
export async function GET(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error

    return NextResponse.json({ posts: data })
  } catch (error) {
    console.error('[CMS API] Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

// POST: Create a new blog post
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
    const {
      title,
      excerpt,
      content,
      linkedin_url,
      published_date,
      image,
      image_alt,
      author,
      tags,
      display_order,
      is_featured
    } = body

    if (!title || !excerpt || !content || !published_date) {
      return NextResponse.json({
        error: 'Title, excerpt, content, and published_date are required'
      }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .insert({
        title,
        excerpt,
        content,
        linkedin_url: linkedin_url || null,
        published_date,
        image: image || null,
        image_alt: image_alt || null,
        author: author || null,
        tags: tags || [],
        display_order: display_order || 0,
        is_featured: is_featured || false,
      })
      .select()
      .single()

    if (error) throw error

    // Revalidate so changes appear immediately
    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true, post: data })
  } catch (error) {
    console.error('[CMS API] Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}
