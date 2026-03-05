'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/lib/markdown'

interface ArticleGridProps {
  articles: Article[]
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Derive unique non-empty categories, preserving first-seen order
  const categories = Array.from(
    new Set(
      articles
        .map((a) => a.metadata.category?.trim())
        .filter((c): c is string => !!c)
    )
  )

  const showPills = categories.length > 0

  const displayed = activeCategory
    ? articles.filter((a) => a.metadata.category?.trim() === activeCategory)
    : articles

  return (
    <>
      {showPills && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '2.5rem',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              border: '2px solid',
              borderColor: activeCategory === null ? '#0966c2' : 'var(--border)',
              background: activeCategory === null ? '#0966c2' : 'transparent',
              color: activeCategory === null ? '#fff' : 'var(--muted-foreground)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                border: '2px solid',
                borderColor: activeCategory === cat ? '#0966c2' : 'var(--border)',
                background: activeCategory === cat ? '#0966c2' : 'transparent',
                color: activeCategory === cat ? '#fff' : 'var(--muted-foreground)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {displayed.length > 0 ? (
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayed.map((article) => (
            <Link
              key={article.metadata.slug}
              href={`/articles/${article.metadata.slug}`}
              className="group rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-[#0966c2] hover:shadow-lg"
            >
              <div className="mb-4 aspect-square w-full rounded-lg bg-gradient-to-br from-[#0966c2]/10 to-[#0855a3]/10 overflow-hidden relative">
                {article.metadata.image ? (
                  <Image
                    src={article.metadata.image}
                    alt={article.metadata.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#0966c2] flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide">
                      Article
                    </p>
                  </div>
                )}
              </div>

              {article.metadata.category && (
                <span
                  style={{
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                    padding: '0.15rem 0.6rem',
                    borderRadius: '9999px',
                    background: '#0966c2',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-sans)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {article.metadata.category}
                </span>
              )}

              <h2 className="mt-2 font-sans text-2xl font-bold text-foreground group-hover:text-[#0966c2] transition-colors">
                {article.metadata.title}
              </h2>
              <p className="mt-4 font-sans text-base text-muted-foreground line-clamp-3">
                {article.metadata.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <time dateTime={article.metadata.date}>
                  {new Date(article.metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="font-sans text-lg text-muted-foreground">
            No articles in this category yet.
          </p>
        </div>
      )}
    </>
  )
}
