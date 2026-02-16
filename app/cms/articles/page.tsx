'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'

interface ArticleMeta {
  title: string
  description: string
  keywords: string
  author: string
  date: string
  slug: string
  image?: string
}

function ArticlesListContent() {
  const [articles, setArticles] = useState<ArticleMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/cms/articles')
      const data = await response.json()
      setArticles(data.articles || [])
    } catch (error) {
      console.error('Failed to fetch articles:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return

    try {
      await fetch(`/api/cms/articles/${slug}`, { method: 'DELETE' })
      setArticles(articles.filter((a) => a.slug !== slug))
    } catch (error) {
      console.error('Failed to delete article:', error)
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  if (loading) {
    return (
      <div className="edit-page">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#737373' }}>Loading...</div>
      </div>
    )
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms" className="edit-page__back">← Back to Dashboard</Link>
          <h1 className="edit-page__title">Articles</h1>
          <p className="edit-page__description">Manage markdown articles.</p>
        </div>
        <div className="edit-page__actions">
          <Link href="/cms/articles/new" className="btn btn--primary">+ Add Article</Link>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No articles found.</p>
          <Link href="/cms/articles/new" className="btn btn--primary">+ Add Article</Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          {articles.map((article) => (
            <div key={article.slug} className="sortable-block-card">
              <div className="sortable-block-card__thumb">
                {article.image ? (
                  <img src={article.image} alt={article.title} />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#262626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#737373',
                    fontSize: '0.75rem',
                  }}>
                    No Image
                  </div>
                )}
              </div>
              <div className="sortable-block-card__info">
                <p className="sortable-block-card__title">{article.title}</p>
                <p className="sortable-block-card__meta">{formatDate(article.date)}</p>
              </div>
              <div className="sortable-block-card__actions">
                <Link
                  href={`/cms/articles/${article.slug}`}
                  className="btn btn--secondary"
                  style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(article.slug)}
                  className="btn btn--danger"
                  style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ArticlesListAdmin() {
  return (
    <Suspense fallback={
      <div className="edit-page">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#737373' }}>Loading...</div>
      </div>
    }>
      <ArticlesListContent />
    </Suspense>
  )
}
