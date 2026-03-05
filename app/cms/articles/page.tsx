'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
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
  const [orderDirty, setOrderDirty] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const dragIndex = useRef<number | null>(null)

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

  const moveArticle = (index: number, direction: 'up' | 'down') => {
    const newArticles = [...articles]
    const swapIndex = direction === 'up' ? index - 1 : index + 1
    if (swapIndex < 0 || swapIndex >= newArticles.length) return
    ;[newArticles[index], newArticles[swapIndex]] = [newArticles[swapIndex], newArticles[index]]
    setArticles(newArticles)
    setOrderDirty(true)
    setSaveMsg('')
  }

  const handleDragStart = (index: number) => {
    dragIndex.current = index
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (dragIndex.current === null || dragIndex.current === index) return
    const newArticles = [...articles]
    const dragged = newArticles.splice(dragIndex.current, 1)[0]
    newArticles.splice(index, 0, dragged)
    dragIndex.current = index
    setArticles(newArticles)
    setOrderDirty(true)
    setSaveMsg('')
  }

  const handleDragEnd = () => {
    dragIndex.current = null
  }

  const saveOrder = async () => {
    setSaving(true)
    setSaveMsg('')
    try {
      const order = articles.map((a) => a.slug)
      const res = await fetch('/api/cms/articles/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order }),
      })
      if (!res.ok) throw new Error('Failed')
      setOrderDirty(false)
      setSaveMsg('Order saved!')
    } catch {
      setSaveMsg('Failed to save order.')
    } finally {
      setSaving(false)
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
          <p className="edit-page__description">Drag or use ↑↓ to reorder. Save order when done.</p>
        </div>
        <div className="edit-page__actions" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {saveMsg && (
            <span style={{ fontSize: '0.8rem', color: saveMsg.includes('Failed') ? '#ef4444' : '#22c55e' }}>
              {saveMsg}
            </span>
          )}
          {orderDirty && (
            <button onClick={saveOrder} disabled={saving} className="btn btn--primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
              {saving ? 'Saving…' : 'Save Order'}
            </button>
          )}
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
          {articles.map((article, index) => (
            <div
              key={article.slug}
              className="sortable-block-card"
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              style={{ cursor: 'grab' }}
            >
              {/* Drag handle */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 0.5rem',
                color: '#525252',
                fontSize: '1rem',
                cursor: 'grab',
                userSelect: 'none',
                flexShrink: 0,
              }}>
                ⠿
              </div>

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
                {/* Up/down buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <button
                    onClick={() => moveArticle(index, 'up')}
                    disabled={index === 0}
                    title="Move up"
                    style={{
                      background: 'none',
                      border: '1px solid #404040',
                      borderRadius: '4px',
                      color: index === 0 ? '#404040' : '#a3a3a3',
                      cursor: index === 0 ? 'default' : 'pointer',
                      padding: '0.15rem 0.4rem',
                      fontSize: '0.7rem',
                      lineHeight: 1,
                    }}
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveArticle(index, 'down')}
                    disabled={index === articles.length - 1}
                    title="Move down"
                    style={{
                      background: 'none',
                      border: '1px solid #404040',
                      borderRadius: '4px',
                      color: index === articles.length - 1 ? '#404040' : '#a3a3a3',
                      cursor: index === articles.length - 1 ? 'default' : 'pointer',
                      padding: '0.15rem 0.4rem',
                      fontSize: '0.7rem',
                      lineHeight: 1,
                    }}
                  >
                    ↓
                  </button>
                </div>
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
