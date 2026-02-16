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

// GET: Fetch all articles from GitHub (always latest)
export async function GET() {
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GitHub token not configured' }, { status: 503 })
  }

  try {
    const res = await ghApi(ARTICLES_PATH)
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)

    const files = await res.json()
    const mdFiles = files.filter((f: { name: string }) => f.name.endsWith('.md'))

    const articles = await Promise.all(
      mdFiles.map(async (file: { name: string; download_url: string }) => {
        const contentRes = await fetch(file.download_url)
        const raw = await contentRes.text()
        const { data } = matter(raw)
        const slug = file.name.replace(/\.md$/, '')

        return {
          title: data.title || '',
          description: data.description || '',
          keywords: data.keywords || '',
          author: data.author || 'Louie Bernstein',
          date: data.date || '',
          slug,
          image: data.image || undefined,
        }
      })
    )

    // Sort newest first
    articles.sort((a: { date: string }, b: { date: string }) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return NextResponse.json({ articles })
  } catch (error) {
    console.error('[CMS API] Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

// POST: Create a new article via GitHub
export async function POST(request: Request) {
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GitHub token not configured' }, { status: 503 })
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

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    // Check if file already exists
    const checkRes = await ghApi(`${ARTICLES_PATH}/${slug}.md`)
    if (checkRes.ok) {
      return NextResponse.json(
        { error: 'An article with this slug already exists' },
        { status: 409 }
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

    const createRes = await ghApi(`${ARTICLES_PATH}/${slug}.md`, {
      method: 'PUT',
      body: JSON.stringify({
        message: `Add article: ${title}`,
        content: encoded,
      }),
    })

    if (!createRes.ok) {
      const err = await createRes.json()
      throw new Error(err.message || 'GitHub API error')
    }

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
