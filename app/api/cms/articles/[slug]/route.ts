import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { getArticleBySlug } from '@/lib/markdown'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

// GET: Fetch a single article (frontmatter + content)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  try {
    const article = getArticleBySlug(slug)
    if (!article) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json({ article })
  } catch (error) {
    console.error('[CMS API] Error fetching article:', error)
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

// PUT: Update an article
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const user = await getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const filePath = path.join(articlesDirectory, `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const body = await request.json()
    const { title, description, keywords, author, date, image, content } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Build frontmatter
    const frontmatter: Record<string, string> = {
      title,
      description: description || '',
      keywords: keywords || '',
      author: author || 'Louie Bernstein',
      date: date || new Date().toISOString().split('T')[0],
    }
    if (image) {
      frontmatter.image = image
    }

    const fileContent = matter.stringify(content, frontmatter)
    fs.writeFileSync(filePath, fileContent, 'utf8')

    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error('[CMS API] Error updating article:', error)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

// DELETE: Delete an article
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const user = await getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const filePath = path.join(articlesDirectory, `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    fs.unlinkSync(filePath)

    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[CMS API] Error deleting article:', error)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}
