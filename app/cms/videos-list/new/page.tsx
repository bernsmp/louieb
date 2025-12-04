'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewVideoPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    youtube_id: '',
    title: '',
    description: '',
    page: 'featured',
    display_order: 0,
  })

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
            <label className="form-label">YouTube Video ID *</label>
            <input type="text" className="form-input" value={form.youtube_id} onChange={(e) => setForm({ ...form, youtube_id: e.target.value })} placeholder="e.g., dQw4w9WgXcQ" required />
            <p className="form-hint">The ID from youtube.com/watch?v=ID</p>
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

