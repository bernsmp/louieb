'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface HeroContent {
  headline?: string
  tagline?: string
  description?: string
  videoId?: string
  credentialPrimary?: string
  credentialSecondary?: string
  ctaPrimary?: { text?: string; url?: string }
  ctaSecondary?: { text?: string; url?: string }
}

export default function EditHeroPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  
  const [content, setContent] = useState<HeroContent>({
    headline: '',
    tagline: '',
    description: '',
    videoId: '',
    credentialPrimary: '',
    credentialSecondary: '',
    ctaPrimary: { text: '', url: '' },
    ctaSecondary: { text: '', url: '' },
  })

  // Debounced preview update
  const updatePreview = useCallback((newContent: HeroContent) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          type: 'preview-update',
          content: {
            ...newContent,
            credentialPrimary: newContent.credentialPrimary,
            credentialSecondary: newContent.credentialSecondary,
          }
        }),
        '*'
      )
    }
  }, [])

  // Debounce timer ref
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Update content and trigger debounced preview
  const handleContentChange = (updates: Partial<HeroContent>) => {
    const newContent = { ...content, ...updates }
    setContent(newContent)
    
    // Debounce preview updates
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      updatePreview(newContent)
    }, 150)
  }

  useEffect(() => {
    fetchContent()
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const fetchContent = async () => {
    try {
      // Fetch hero content
      const heroResponse = await fetch('/api/cms/section/hero')
      const heroData = await heroResponse.json()
      
      // Fetch credentials content
      const credResponse = await fetch('/api/cms/section/credentials')
      const credData = await credResponse.json()
      
      const newContent: HeroContent = {
        headline: heroData.content?.headline || '',
        tagline: heroData.content?.tagline || '',
        description: heroData.content?.description || '',
        videoId: heroData.content?.videoId || '',
        credentialPrimary: credData.content?.primary || '',
        credentialSecondary: credData.content?.secondary || '',
        ctaPrimary: {
          text: heroData.content?.ctaPrimary?.text || '',
          url: heroData.content?.ctaPrimary?.url || '',
        },
        ctaSecondary: {
          text: heroData.content?.ctaSecondary?.text || '',
          url: heroData.content?.ctaSecondary?.url || '',
        },
      }
      
      setContent(newContent)
      
      // Update preview after a short delay to ensure iframe is loaded
      setTimeout(() => updatePreview(newContent), 500)
    } catch (error) {
      console.error('Failed to fetch content:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage(null)

    try {
      // Save hero content
      const heroResponse = await fetch('/api/cms/section/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: {
            headline: content.headline,
            tagline: content.tagline,
            description: content.description,
            videoId: content.videoId,
            ctaPrimary: content.ctaPrimary,
            ctaSecondary: content.ctaSecondary,
          }
        }),
      })

      if (!heroResponse.ok) {
        throw new Error('Failed to save hero content')
      }
      
      // Save credentials content
      const credResponse = await fetch('/api/cms/section/credentials', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: {
            primary: content.credentialPrimary,
            secondary: content.credentialSecondary,
          }
        }),
      })

      if (!credResponse.ok) {
        throw new Error('Failed to save credentials')
      }

      setMessage({ type: 'success', text: 'Hero section saved successfully!' })
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
        <div style={{ padding: '2rem', textAlign: 'center', color: '#737373' }}>
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/homepage" className="edit-page__back">
            ← Back to Homepage
          </Link>
          <h1 className="edit-page__title">Hero Section</h1>
          <p className="edit-page__description">
            The main banner at the top of the homepage.
          </p>
        </div>
        <div className="edit-page__actions">
          <button
            onClick={() => router.back()}
            className="btn btn--secondary"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="btn btn--primary"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {message && (
        <div className={`toast toast--${message.type}`}>
          {message.text}
        </div>
      )}

      {/* Split layout: Form + Preview */}
      <div className="edit-with-preview">
        {/* Form Panel */}
        <div className="edit-form">
          <div className="edit-form__section">
            <h3 className="edit-form__section-title">Main Content</h3>
            
            <div className="form-group">
              <label className="form-label">Headline</label>
              <input
                type="text"
                className="form-input"
                value={content.headline}
                onChange={(e) => handleContentChange({ headline: e.target.value })}
                placeholder="e.g., Fractional Sales Leader"
              />
              <p className="form-hint">Large text at the top of the hero</p>
            </div>

            <div className="edit-form__row">
              <div className="form-group">
                <label className="form-label">Credential Primary</label>
                <input
                  type="text"
                  className="form-input"
                  value={content.credentialPrimary}
                  onChange={(e) => handleContentChange({ credentialPrimary: e.target.value })}
                  placeholder="e.g., LinkedIn Top Voice"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Credential Secondary</label>
                <input
                  type="text"
                  className="form-input"
                  value={content.credentialSecondary}
                  onChange={(e) => handleContentChange({ credentialSecondary: e.target.value })}
                  placeholder="e.g., 50+ Years Sales Experience"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Tagline</label>
              <input
                type="text"
                className="form-input"
                value={content.tagline}
                onChange={(e) => handleContentChange({ tagline: e.target.value })}
                placeholder="e.g., Less Spend. More Sales."
              />
              <p className="form-hint">Short catchy phrase below the headline</p>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                value={content.description}
                onChange={(e) => handleContentChange({ description: e.target.value })}
                placeholder="Longer paragraph explaining your value proposition..."
                rows={4}
              />
            </div>

            <div className="form-group">
              <label className="form-label">YouTube Video ID</label>
              <input
                type="text"
                className="form-input"
                value={content.videoId}
                onChange={(e) => handleContentChange({ videoId: e.target.value })}
                placeholder="e.g., fCVKpcpD8tA"
              />
              <p className="form-hint">The ID from the YouTube URL (e.g., youtube.com/watch?v=fCVKpcpD8tA)</p>
            </div>
          </div>

          <div className="edit-form__section">
            <h3 className="edit-form__section-title">Call to Action Buttons</h3>
            
            <div className="edit-form__row">
              <div className="form-group">
                <label className="form-label">Primary Button Text</label>
                <input
                  type="text"
                  className="form-input"
                  value={content.ctaPrimary?.text}
                  onChange={(e) => handleContentChange({
                    ctaPrimary: { ...content.ctaPrimary, text: e.target.value }
                  })}
                  placeholder="e.g., Learn How It Works"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Primary Button URL</label>
                <input
                  type="text"
                  className="form-input"
                  value={content.ctaPrimary?.url}
                  onChange={(e) => handleContentChange({
                    ctaPrimary: { ...content.ctaPrimary, url: e.target.value }
                  })}
                  placeholder="e.g., #process"
                />
              </div>
            </div>

            <div className="edit-form__row">
              <div className="form-group">
                <label className="form-label">Secondary Button Text</label>
                <input
                  type="text"
                  className="form-input"
                  value={content.ctaSecondary?.text}
                  onChange={(e) => handleContentChange({
                    ctaSecondary: { ...content.ctaSecondary, text: e.target.value }
                  })}
                  placeholder="e.g., Schedule a Discussion"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Secondary Button URL</label>
                <input
                  type="text"
                  className="form-input"
                  value={content.ctaSecondary?.url}
                  onChange={(e) => handleContentChange({
                    ctaSecondary: { ...content.ctaSecondary, url: e.target.value }
                  })}
                  placeholder="e.g., https://calendly.com/..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="preview-panel">
          <div className="preview-panel__header">
            <span className="preview-panel__badge">Live Preview</span>
            <span className="preview-panel__hint">Updates as you type</span>
          </div>
          <div style={{ height: '750px', background: '#020617' }}>
            <iframe
              ref={iframeRef}
              src="/cms/preview/hero"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="Hero Preview"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
