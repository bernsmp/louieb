'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ImageUploader } from '../components/ImageUploader'

interface VideosPageContent {
  headline: string
  subheadline: string
  playlistId: string
  featuredShortsHeadline: string
  playlistHeadline: string
  watchOnYoutubeText: string
  watchMoreButtonText: string
  // Individual video page settings
  videoPageBackLinkText: string
  videoPageWatchButtonText: string
  videoPageMoreVideosHeadline: string
  // SEO settings
  seoTitle: string
  seoDescription: string
  seoImage: string
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
  // Individual video page settings
  videoPageBackLinkText: 'All Videos',
  videoPageWatchButtonText: 'Watch on YouTube',
  videoPageMoreVideosHeadline: 'More Videos',
  // SEO settings
  seoTitle: 'Sales Videos | Louie Bernstein',
  seoDescription: 'The most popular sales training content, handpicked for you',
  seoImage: '',
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
  const [aiLoading, setAiLoading] = useState(false)
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null)

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

  const handleAiGenerate = async () => {
    const title = content.seoTitle || content.headline
    const pageContent = content.subheadline

    if (!title.trim() && !pageContent.trim()) {
      setMessage({ type: 'error', text: 'Please add a title or some content first.' })
      setTimeout(() => setMessage(null), 3000)
      return
    }

    setAiLoading(true)
    setAiSuggestion(null)

    try {
      const response = await fetch('/api/ai/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate-seo',
          title: title || undefined,
          pageContent: pageContent || undefined,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate SEO description')
      }

      const data = await response.json()
      setAiSuggestion(data.suggestion)
    } catch (error) {
      console.error('AI generate error:', error)
      setMessage({ type: 'error', text: 'Failed to generate SEO description. Please try again.' })
      setTimeout(() => setMessage(null), 3000)
    } finally {
      setAiLoading(false)
    }
  }

  const applyAiSuggestion = () => {
    if (aiSuggestion) {
      handleChange('seoDescription', aiSuggestion)
      setAiSuggestion(null)
    }
  }

  const dismissAiSuggestion = () => {
    setAiSuggestion(null)
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

          {/* Individual Video Page Settings */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '2rem',
            paddingTop: '1.5rem',
          }}>
            <h3 style={{ color: '#f5f5f5', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>
              Individual Video Page Settings
            </h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              These settings apply to individual video watch pages (/videos/video-name).
            </p>

            <div className="form-group">
              <label className="form-label">Back Link Text</label>
              <input
                type="text"
                className="form-input"
                value={content.videoPageBackLinkText}
                onChange={(e) => handleChange('videoPageBackLinkText', e.target.value)}
                placeholder={defaults.videoPageBackLinkText}
              />
              <p className="form-hint">The "← All Videos" link at the top of each video page</p>
            </div>

            <div className="form-group">
              <label className="form-label">Watch Button Text</label>
              <input
                type="text"
                className="form-input"
                value={content.videoPageWatchButtonText}
                onChange={(e) => handleChange('videoPageWatchButtonText', e.target.value)}
                placeholder={defaults.videoPageWatchButtonText}
              />
              <p className="form-hint">The YouTube button below each video</p>
            </div>

            <div className="form-group">
              <label className="form-label">More Videos Headline</label>
              <input
                type="text"
                className="form-input"
                value={content.videoPageMoreVideosHeadline}
                onChange={(e) => handleChange('videoPageMoreVideosHeadline', e.target.value)}
                placeholder={defaults.videoPageMoreVideosHeadline}
              />
              <p className="form-hint">The heading above related videos at the bottom</p>
            </div>
          </div>

          {/* SEO Settings */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '2rem',
            paddingTop: '1.5rem',
          }}>
            <h3 style={{ color: '#f5f5f5', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>
              SEO Settings
            </h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Optimize how this page appears in search engines and when shared on social media.
            </p>

            <div className="form-group">
              <label className="form-label">SEO: Page Title</label>
              <input
                type="text"
                className="form-input"
                value={content.seoTitle}
                onChange={(e) => handleChange('seoTitle', e.target.value)}
                placeholder={defaults.seoTitle}
              />
              <p className="form-hint">Displayed in search results and browser tabs (50-60 characters recommended)</p>
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label className="form-label">SEO: Meta Description</label>
                <button
                  type="button"
                  className="ai-generate-btn"
                  onClick={handleAiGenerate}
                  disabled={aiLoading}
                  title="Generate SEO Description"
                >
                  {aiLoading ? '...' : '✨ AI Generate'}
                </button>
              </div>
              <textarea
                className="form-textarea"
                value={content.seoDescription}
                onChange={(e) => handleChange('seoDescription', e.target.value)}
                placeholder={defaults.seoDescription}
                rows={3}
              />
              {aiSuggestion && (
                <div className="ai-suggestion">
                  <div className="ai-suggestion__header">
                    <span className="ai-suggestion__label">✨ AI Suggestion</span>
                    <button
                      type="button"
                      className="ai-suggestion__dismiss"
                      onClick={dismissAiSuggestion}
                      title="Dismiss"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="ai-suggestion__text">{aiSuggestion}</div>
                  <button
                    type="button"
                    className="ai-suggestion__apply"
                    onClick={applyAiSuggestion}
                  >
                    Use this
                  </button>
                </div>
              )}
              <p className="form-hint">Displayed in search results under the title (150-160 characters recommended)</p>
            </div>

            <div className="form-group">
              <label className="form-label">SEO: Social Share Image</label>
              <ImageUploader
                value={content.seoImage}
                onChange={(url) => handleChange('seoImage', url || '')}
                folder="seo"
              />
              <p className="form-hint">Image shown when page is shared on social media (og:image). Recommended: 1200x630px</p>
            </div>
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
