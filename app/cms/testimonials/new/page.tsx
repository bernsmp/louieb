'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewTestimonialPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    quote: '',
    author: '',
    role: '',
    company: '',
    featured: false,
    display_order: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch('/api/cms/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to create testimonial')
      }

      router.push('/cms/testimonials')
    } catch (err) {
      setError('Failed to create testimonial. Please try again.')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/testimonials" className="edit-page__back">
            ← Back to Testimonials
          </Link>
          <h1 className="edit-page__title">New Testimonial</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label className="form-label">Quote *</label>
          <textarea
            className="form-textarea"
            value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
            placeholder="The testimonial text..."
            rows={4}
            required
          />
        </div>

        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Author Name *</label>
            <input
              type="text"
              className="form-input"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="e.g., John Smith"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Role/Title</label>
            <input
              type="text"
              className="form-input"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              placeholder="e.g., CEO"
            />
          </div>
        </div>

        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Company</label>
            <input
              type="text"
              className="form-input"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="e.g., Acme Inc."
            />
          </div>
          <div className="form-group">
            <label className="form-label">Display Order</label>
            <input
              type="number"
              className="form-input"
              value={form.display_order}
              onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })}
            />
            <p className="form-hint">Lower numbers appear first</p>
          </div>
        </div>

        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
            />
            <span className="form-label" style={{ marginBottom: 0 }}>Featured testimonial</span>
          </label>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn--primary" disabled={saving}>
            {saving ? 'Creating...' : 'Create Testimonial'}
          </button>
        </div>
      </form>
    </div>
  )
}

