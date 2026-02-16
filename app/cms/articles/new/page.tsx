'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ImageUploader } from '../../components/ImageUploader'

export default function NewArticlePage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState({
    title: '',
    description: '',
    keywords: '',
    author: 'Louie Bernstein',
    date: today,
    image: '',
    content: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch('/api/cms/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.details || data.error || 'Failed to create article')
      }
      router.push('/cms/articles')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create article'
      setError(errorMessage)
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/articles" className="edit-page__back">← Back to Articles</Link>
          <h1 className="edit-page__title">New Article</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label className="form-label">Title *</label>
          <input
            type="text"
            className="form-input"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <p style={{ fontSize: '0.875rem', color: '#737373', marginTop: '0.25rem' }}>
            Slug will be generated from the title
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Content (Markdown) *</label>
          <textarea
            className="form-textarea"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={20}
            required
            style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Featured Image</label>
          <ImageUploader
            value={form.image}
            onChange={(url) => setForm({ ...form, image: url || '' })}
            folder="articles"
          />
        </div>

        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Date *</label>
            <input
              type="date"
              className="form-input"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-input"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Keywords</label>
          <input
            type="text"
            className="form-input"
            value={form.keywords}
            onChange={(e) => setForm({ ...form, keywords: e.target.value })}
            placeholder="fractional sales, leadership, scaling (comma separated)"
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn--primary" disabled={saving}>
            {saving ? 'Creating...' : 'Create Article'}
          </button>
        </div>
      </form>
    </div>
  )
}
