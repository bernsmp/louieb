import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import matter from 'gray-matter'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_REPO = process.env.GITHUB_REPO || 'bernsmp/louieb'
const ARTICLES_PATH = 'content/articles'

async function ghApi(path: string, options?: RequestInit) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
  return res
}

// GET: Fetch a single article from GitHub (always latest)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GitHub token not configured' }, { status: 503 })
  }

  try {
    const res = await ghApi(`${ARTICLES_PATH}/${slug}.md`)
    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
      }
      throw new Error(`GitHub API error: ${res.status}`)
    }

    const file = await res.json()
    const raw = Buffer.from(file.content, 'base64').toString('utf8')
    const { data, content } = matter(raw)

    return NextResponse.json({
      article: {
        metadata: {
          title: data.title || '',
          description: data.description || '',
          keywords: data.keywords || '',
          author: data.author || 'Louie Bernstein',
          date: data.date || '',
          slug,
          image: data.image || undefined,
        },
        content,
      },
    })
  } catch (error) {
    console.error('[CMS API] Error fetching article:', error)
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

// PUT: Update an article via GitHub
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const user = await getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GitHub token not configured' }, { status: 503 })
  }

  try {
    // Get current file SHA (required for updates)
    const getRes = await ghApi(`${ARTICLES_PATH}/${slug}.md`)
    if (!getRes.ok) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const currentFile = await getRes.json()
    const sha = currentFile.sha

    const body = await request.json()
    const { title, description, keywords, author, date, image, content } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Build markdown with frontmatter
    const frontmatter: Record<string, string> = {
      title,
      description: description || '',
      keywords: keywords || '',
      author: author || 'Louie Bernstein',
      date: date || new Date().toISOString().split('T')[0],
    }
    if (image) frontmatter.image = image

    const fileContent = matter.stringify(content, frontmatter)
    const encoded = Buffer.from(fileContent).toString('base64')

    const updateRes = await ghApi(`${ARTICLES_PATH}/${slug}.md`, {
      method: 'PUT',
      body: JSON.stringify({
        message: `Update article: ${title}`,
        content: encoded,
        sha,
      }),
    })

    if (!updateRes.ok) {
      const err = await updateRes.json()
      throw new Error(err.message || 'GitHub API error')
    }

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error('[CMS API] Error updating article:', error)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

// DELETE: Delete an article via GitHub
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const user = await getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GitHub token not configured' }, { status: 503 })
  }

  try {
    // Get current file SHA (required for deletes)
    const getRes = await ghApi(`${ARTICLES_PATH}/${slug}.md`)
    if (!getRes.ok) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const currentFile = await getRes.json()
    const sha = currentFile.sha

    const deleteRes = await ghApi(`${ARTICLES_PATH}/${slug}.md`, {
      method: 'DELETE',
      body: JSON.stringify({
        message: `Delete article: ${slug}`,
        sha,
      }),
    })

    if (!deleteRes.ok) {
      const err = await deleteRes.json()
      throw new Error(err.message || 'GitHub API error')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[CMS API] Error deleting article:', error)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}
