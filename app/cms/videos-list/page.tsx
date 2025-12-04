'use client'

import { useState, useEffect, Suspense, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

interface Video {
  id: string
  youtube_id: string
  title: string
  description: string | null
  page: string
  display_order: number
}

function VideosListContent() {
  const searchParams = useSearchParams()
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [filter, setFilter] = useState<string>('all')

  // Initialize filter from URL param
  useEffect(() => {
    const urlFilter = searchParams.get('filter')
    if (urlFilter) {
      setFilter(urlFilter)
    }
  }, [searchParams])

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/cms/videos')
      const data = await response.json()
      setVideos(data.videos || [])
    } catch (error) {
      console.error('Failed to fetch videos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return

    try {
      await fetch(`/api/cms/videos/${id}`, { method: 'DELETE' })
      setVideos(videos.filter((v) => v.id !== id))
    } catch (error) {
      console.error('Failed to delete video:', error)
    }
  }

  const handleReorder = useCallback(async (newVideos: Video[]) => {
    // Update local state immediately (optimistic)
    setVideos((prev) => {
      // Merge reordered filtered videos back into full list
      if (filter === 'all') {
        return newVideos
      }
      // For filtered view, update only filtered items in original array
      const updatedMap = new Map(newVideos.map((v, i) => [v.id, i]))
      return prev.map((v) => {
        const newIndex = updatedMap.get(v.id)
        if (newIndex !== undefined) {
          return { ...v, display_order: newIndex }
        }
        return v
      }).sort((a, b) => a.display_order - b.display_order)
    })

    // Save to API
    setSaving(true)
    try {
      const items = newVideos.map((v, index) => ({
        id: v.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'videos', items }),
      })

      if (!response.ok) {
        throw new Error('Failed to save order')
      }

      // Show toast
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save video order:', error)
      // Refetch to restore correct order
      fetchVideos()
    } finally {
      setSaving(false)
    }
  }, [filter])

  const filteredVideos = filter === 'all' ? videos : videos.filter((v) => v.page === filter)

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
          <h1 className="edit-page__title">Videos</h1>
          <p className="edit-page__description">Manage YouTube videos shown across the site. Drag to reorder.</p>
        </div>
        <div className="edit-page__actions">
          <select
            className="form-input"
            style={{ width: 'auto' }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Pages</option>
            <option value="featured">Featured (Videos Page)</option>
            <option value="fslPage">FSL Page</option>
            <option value="course">Course Page</option>
            <option value="newsletter">Newsletter</option>
          </select>
          <Link href="/cms/videos-list/new" className="btn btn--primary">+ Add Video</Link>
        </div>
      </div>

      {filter !== 'all' && (
        <div style={{
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ color: '#a3a3a3', fontSize: '0.875rem' }}>
            Showing videos for: <strong style={{ color: '#3b82f6' }}>{filter}</strong>
          </span>
          <button
            onClick={() => setFilter('all')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#737373',
              cursor: 'pointer',
              fontSize: '0.75rem',
            }}
          >
            Clear filter ×
          </button>
        </div>
      )}

      {filteredVideos.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>
            {filter === 'all' ? 'No videos found.' : `No videos found for "${filter}".`}
          </p>
          <Link href="/cms/videos-list/new" className="btn btn--primary">+ Add Video</Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={filteredVideos}
            getId={(video) => video.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(video) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__thumb">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtube_id}/default.jpg`}
                    alt={video.title}
                  />
                </div>
                <div className="sortable-block-card__info">
                  <p className="sortable-block-card__title">{video.title}</p>
                  <p className="sortable-block-card__meta">{video.page}</p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link 
                    href={`/cms/videos-list/${video.id}`} 
                    className="btn btn--secondary" 
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(video.id)
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

export default function VideosListAdmin() {
  return (
    <Suspense fallback={
      <div className="edit-page">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#737373' }}>Loading...</div>
      </div>
    }>
      <VideosListContent />
    </Suspense>
  )
}
