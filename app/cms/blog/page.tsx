'use client'

import { useState, useEffect, Suspense, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

interface BlogPost {
  id: string
  title: string
  excerpt: string | null
  thumbnail: string | null
  published_at: string | null
  display_order: number
}

function BlogListContent() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/cms/blog')
      const data = await response.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      await fetch(`/api/cms/blog/${id}`, { method: 'DELETE' })
      setPosts(posts.filter((p) => p.id !== id))
    } catch (error) {
      console.error('Failed to delete post:', error)
    }
  }

  const handleReorder = useCallback(async (newPosts: BlogPost[]) => {
    // Update local state immediately (optimistic)
    setPosts(newPosts)

    // Save to API
    setSaving(true)
    try {
      const items = newPosts.map((p, index) => ({
        id: p.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'blog_posts', items }),
      })

      if (!response.ok) {
        throw new Error('Failed to save order')
      }

      // Show toast
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save post order:', error)
      // Refetch to restore correct order
      fetchPosts()
    } finally {
      setSaving(false)
    }
  }, [])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Draft'
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
          <h1 className="edit-page__title">Blog Posts</h1>
          <p className="edit-page__description">Manage blog posts. Drag to reorder.</p>
        </div>
        <div className="edit-page__actions">
          <Link href="/cms/blog/new" className="btn btn--primary">+ Add Post</Link>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No blog posts found.</p>
          <Link href="/cms/blog/new" className="btn btn--primary">+ Add Post</Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={posts}
            getId={(post) => post.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(post) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__thumb">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                    />
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
                  <p className="sortable-block-card__title">{post.title}</p>
                  <p className="sortable-block-card__meta">{formatDate(post.published_at)}</p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link
                    href={`/cms/blog/${post.id}`}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(post.id)
                    }}
                    className="btn btn--danger"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      )}

      {/* Order saved toast */}
      {showToast && (
        <div className="order-toast">
          ✓ Order saved
        </div>
      )}
    </div>
  )
}

export default function BlogListAdmin() {
  return (
    <Suspense fallback={
      <div className="edit-page">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#737373' }}>Loading...</div>
      </div>
    }>
      <BlogListContent />
    </Suspense>
  )
}
