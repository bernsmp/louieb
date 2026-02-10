'use client'

import { useState } from 'react'
import Link from 'next/link'

interface BlogPostItem {
  title: string
  excerpt: string
  publishedDate: string
  slug: string
  categoryId?: string
  categoryName?: string
}

interface BlogCategory {
  id: string
  name: string
  slug: string
}

interface BlogGridProps {
  posts: BlogPostItem[]
  categories: BlogCategory[]
}

const INITIAL_COUNT = 6

export default function BlogGrid({ posts, categories }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [expanded, setExpanded] = useState(false)

  const filtered = activeCategory === 'all'
    ? posts
    : posts.filter((p) => p.categoryId === activeCategory)

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hasMore = filtered.length > INITIAL_COUNT

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id)
    setExpanded(false)
  }

  return (
    <div>
      {/* Filter Tabs */}
      {categories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#0966c2] text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#0966c2] text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Blog Post Grid */}
      {filtered.length === 0 ? (
        <p className="py-12 text-center font-sans text-muted-foreground">
          No posts in this category yet.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="p-4">
                  <p className="font-sans text-xs text-muted-foreground">
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="mt-1 font-sans text-base font-semibold text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  {post.categoryName && (
                    <span className="mt-2 inline-block rounded-full bg-muted px-2.5 py-0.5 font-sans text-xs text-muted-foreground">
                      {post.categoryName}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Show More / Show Less */}
          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="rounded-lg border border-border px-6 py-2.5 font-sans text-sm font-medium text-muted-foreground transition-colors hover:border-[#0966c2] hover:text-[#0966c2]"
              >
                {expanded
                  ? 'Show Less'
                  : `Show All ${filtered.length} Posts`}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
