'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface VideosPageContent {
  headline: string
  subheadline: string
  playlistId: string
  featuredShortsHeadline: string
  playlistHeadline: string
  watchOnYoutubeText: string
  watchMoreButtonText: string
}

// Default values that match what's shown on the live site
const defaults: VideosPageContent = {
  headline: 'Sales Videos',
  subheadline: 'The most popular sales training content, handpicked for you',
  playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
  featuredShortsHeadline: 'Featured Shorts',
  playlistHeadline: 'Complete Sales Leadership Playlist',
  watchOnYoutubeText: 'Watch on YouTube →',
  watchMoreButtonText: 'Watch More Videos on YouTube',
}

export default function EditVideosPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [content, setContent] = useState<VideosPageContent>(defaults)
  const [videoCount, setVideoCount] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Update preview
  const updatePreview = useCallback((newContent: VideosPageContent) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ type: 'preview-update', content: newContent }),
        '*'
      )
    }
  }, [])

  useEffect(() => {
    fetchContent()
    fetchVideoCount()
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/cms/section/videosPage')
      const data = await response.json()
      if (data.content && Object.keys(data.content).length > 0) {
        // Merge with defaults to ensure all fields are present
        setContent({ ...defaults, ...data.content })
      }
      setTimeout(() => updatePreview(content), 500)
    } catch (error) {
      console.error('Failed to fetch content:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchVideoCount = async () => {
    try {
      const response = await fetch('/api/cms/videos?page=featured')
      const data = await response.json()
      setVideoCount(data.videos?.length || 0)
    } catch (error) {
      console.error('Failed to fetch video count:', error)
    }
  }

  const handleChange = (field: keyof VideosPageContent, value: string) => {
    const newContent = { ...content, [field]: value }
    setContent(newContent)
    
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => updatePreview(newContent), 150)
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage(null)

    try {
      const response = await fetch('/api/cms/section/videosPage', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })

      if (!response.ok) throw new Error('Failed to save')

      setMessage({ type: 'success', text: 'Saved successfully!' })
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save. Please try again.' })
      console.error(error)
    } finally {
      setSaving(false)
    }
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
          <h1 className="edit-page__title">Videos Page</h1>
          <p className="edit-page__description">Content for the /videos page.</p>
        </div>
        <div className="edit-page__actions">
          <button onClick={() => router.back()} className="btn btn--secondary">Cancel</button>
          <button onClick={handleSave} className="btn btn--primary" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {message && <div className={`toast toast--${message.type}`}>{message.text}</div>}

      <div className="edit-with-preview">
        <div className="edit-form">
          {/* Link to manage individual videos */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(9, 102, 194, 0.15), rgba(9, 102, 194, 0.05))',
            border: '1px solid rgba(9, 102, 194, 0.3)',
            borderRadius: '0.75rem',
            padding: '1.25rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ color: '#f5f5f5', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Featured Shorts ({videoCount} videos)
                </h3>
                <p style={{ color: '#a3a3a3', fontSize: '0.875rem' }}>
                  Manage the individual video cards shown in the Featured Shorts section.
                </p>
              </div>
              <Link 
                href="/cms/videos-list?filter=featured" 
                className="btn btn--primary"
                style={{ whiteSpace: 'nowrap' }}
              >
                Manage Videos →
              </Link>
            </div>
          </div>

          {/* Page Content Fields */}
          <div className="form-group">
            <label className="form-label">Page Headline</label>
            <input
              type="text"
              className="form-input"
              value={content.headline}
              onChange={(e) => handleChange('headline', e.target.value)}
              placeholder={defaults.headline}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Page Subheadline</label>
            <input
              type="text"
              className="form-input"
              value={content.subheadline}
              onChange={(e) => handleChange('subheadline', e.target.value)}
              placeholder={defaults.subheadline}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Featured Shorts Section Headline</label>
            <input
              type="text"
              className="form-input"
              value={content.featuredShortsHeadline}
              onChange={(e) => handleChange('featuredShortsHeadline', e.target.value)}
              placeholder={defaults.featuredShortsHeadline}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Playlist Section Headline</label>
            <input
              type="text"
              className="form-input"
              value={content.playlistHeadline}
              onChange={(e) => handleChange('playlistHeadline', e.target.value)}
              placeholder={defaults.playlistHeadline}
            />
          </div>

          <div className="form-group">
            <label className="form-label">YouTube Playlist ID</label>
            <input
              type="text"
              className="form-input"
              value={content.playlistId}
              onChange={(e) => handleChange('playlistId', e.target.value)}
              placeholder={defaults.playlistId}
            />
            <p className="form-hint">The main playlist embed (from URL: youtube.com/playlist?list=...)</p>
          </div>

          <div className="form-group">
            <label className="form-label">Watch on YouTube Link Text</label>
            <input
              type="text"
              className="form-input"
              value={content.watchOnYoutubeText}
              onChange={(e) => handleChange('watchOnYoutubeText', e.target.value)}
              placeholder={defaults.watchOnYoutubeText}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Watch More Button Text</label>
            <input
              type="text"
              className="form-input"
              value={content.watchMoreButtonText}
              onChange={(e) => handleChange('watchMoreButtonText', e.target.value)}
              placeholder={defaults.watchMoreButtonText}
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div className="preview-panel">
          <div className="preview-panel__header">
            <span className="preview-panel__badge">Live Preview</span>
            <span className="preview-panel__hint">Updates as you type</span>
          </div>
          <div style={{ height: '750px', background: '#fafaf9' }}>
            <iframe
              ref={iframeRef}
              src="/cms/preview/videos"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Videos Page Preview"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
