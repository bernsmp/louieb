'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ImageUploader } from '@/app/cms/components/ImageUploader'

export default function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    quote: '',
    author: '',
    role: '',
    company: '',
    image_url: '',
    featured: false,
    display_order: 0,
  })

  useEffect(() => {
    fetchTestimonial()
  }, [id])

  const fetchTestimonial = async () => {
    try {
      const response = await fetch(`/api/cms/testimonials/${id}`)
      const data = await response.json()
      if (data.testimonial) {
        setForm({
          quote: data.testimonial.quote || '',
          author: data.testimonial.author || '',
          role: data.testimonial.role || '',
          company: data.testimonial.company || '',
          image_url: data.testimonial.image_url || '',
          featured: data.testimonial.featured || false,
          display_order: data.testimonial.display_order || 0,
        })
      }
    } catch (error) {
      console.error('Failed to fetch testimonial:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch(`/api/cms/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to update testimonial')
      }

      router.push('/cms/testimonials')
    } catch (err) {
      setError('Failed to update testimonial. Please try again.')
      console.error(err)
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
          <Link href="/cms/testimonials" className="edit-page__back">
            ← Back to Testimonials
          </Link>
          <h1 className="edit-page__title">Edit Testimonial</h1>
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
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Author Photo (optional)</label>
          <ImageUploader
            value={form.image_url}
            onChange={(url) => setForm({ ...form, image_url: url || '' })}
            folder="testimonials"
          />
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
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

