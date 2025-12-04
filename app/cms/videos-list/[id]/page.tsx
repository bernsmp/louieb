'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EditVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    youtube_id: '',
    title: '',
    description: '',
    page: 'featured',
    display_order: 0,
  })

  useEffect(() => {
    fetchVideo()
  }, [id])

  const fetchVideo = async () => {
    try {
      const response = await fetch(`/api/cms/videos/${id}`)
      const data = await response.json()
      if (data.video) {
        setForm({
          youtube_id: data.video.youtube_id || '',
          title: data.video.title || '',
          description: data.video.description || '',
          page: data.video.page || 'featured',
          display_order: data.video.display_order || 0,
        })
      }
    } catch (error) {
      console.error('Failed to fetch video:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch(`/api/cms/videos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Failed to update video')
      router.push('/cms/videos-list')
    } catch (err) {
      setError('Failed to update video.')
      console.error(err)
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
          <Link href="/cms/videos-list" className="edit-page__back">← Back to Videos</Link>
          <h1 className="edit-page__title">Edit Video</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">YouTube Video ID *</label>
            <input type="text" className="form-input" value={form.youtube_id} onChange={(e) => setForm({ ...form, youtube_id: e.target.value })} required />
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
          <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? 'Saving...' : 'Save Changes'}</button>
        </div>
      </form>
    </div>
  )
}

