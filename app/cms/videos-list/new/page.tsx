'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Category {
  id: string
  name: string
}

// Extract video ID from any YouTube URL format (including Shorts)
function extractYouTubeId(input: string): string {
  if (!input) return ''

  // If it's already just an ID (11 characters, alphanumeric with - and _)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) {
    return input.trim()
  }

  // Try to extract from URL
  const patterns = [
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,  // Shorts URL
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/, // Standard watch URL
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,             // Short URL
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,   // Embed URL
  ]

  for (const pattern of patterns) {
    const match = input.match(pattern)
    if (match) return match[1]
  }

  // Return original input if no pattern matches (let user see it's invalid)
  return input.trim()
}

export default function NewVideoPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [categories, setCategories] = useState<Category[]>([])

  const [form, setForm] = useState({
    youtube_id: '',
    title: '',
    description: '',
    page: 'featured',
    display_order: 0,
    category_id: '',
  })

  useEffect(() => {
    fetch('/api/cms/categories')
      .then((r) => r.json())
      .then((data) => setCategories(data.categories || []))
      .catch(() => {})
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch('/api/cms/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Failed to create video')
      router.push('/cms/videos-list')
    } catch (err) {
      setError('Failed to create video.')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/videos-list" className="edit-page__back">← Back to Videos</Link>
          <h1 className="edit-page__title">New Video</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">YouTube URL or Video ID *</label>
            <input
              type="text"
              className="form-input"
              value={form.youtube_id}
              onChange={(e) => setForm({ ...form, youtube_id: extractYouTubeId(e.target.value) })}
              placeholder="Paste URL or ID (e.g., youtube.com/shorts/...)"
              required
            />
            <p className="form-hint">Works with Shorts, regular videos, or just the ID</p>
            {form.youtube_id && /^[a-zA-Z0-9_-]{11}$/.test(form.youtube_id) && (
              <div style={{ marginTop: '0.5rem' }}>
                <img
                  src={`https://img.youtube.com/vi/${form.youtube_id}/mqdefault.jpg`}
                  alt="Video thumbnail preview"
                  style={{ width: '160px', borderRadius: '4px', border: '1px solid #333' }}
                />
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Page</label>
            <select className="form-input" value={form.page} onChange={(e) => setForm({ ...form, page: e.target.value })}>
              <option value="featured">Featured (Videos Page)</option>
              <option value="fslPage">FSL Page</option>
              <option value="course">Course</option>
              <option value="newsletter">Newsletter</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <select className="form-input" value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })}>
            <option value="">No Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Title *</label>
          <input type="text" className="form-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea className="form-textarea" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
        </div>

        <div className="form-group">
          <label className="form-label">Display Order</label>
          <input type="number" className="form-input" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })} style={{ width: '100px' }} />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">Cancel</button>
          <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? 'Creating...' : 'Create Video'}</button>
        </div>
      </form>
    </div>
  )
}

