import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { getAllArticles } from '@/lib/markdown'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

// GET: Fetch all articles (frontmatter only)
export async function GET() {
  try {
    const articles = getAllArticles()
    return NextResponse.json({
      articles: articles.map((a) => a.metadata),
    })
  } catch (error) {
    console.error('[CMS API] Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

// POST: Create a new article
export async function POST(request: Request) {
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, description, keywords, author, date, image, content } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const filePath = path.join(articlesDirectory, `${slug}.md`)

    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'An article with this slug already exists' },
        { status: 409 }
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

    // Ensure directory exists
    if (!fs.existsSync(articlesDirectory)) {
      fs.mkdirSync(articlesDirectory, { recursive: true })
    }

    fs.writeFileSync(filePath, fileContent, 'utf8')

    revalidatePath('/', 'layout')

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error('[CMS API] Error creating article:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Failed to create article', details: errorMessage },
      { status: 500 }
    )
  }
}
