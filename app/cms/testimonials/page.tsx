'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string | null
  company: string | null
  featured: boolean
  display_order: number
}

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/cms/testimonials')
      const data = await response.json()
      setTestimonials(data.testimonials || [])
    } catch (error) {
      console.error('Failed to fetch testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return

    try {
      await fetch(`/api/cms/testimonials/${id}`, { method: 'DELETE' })
      setTestimonials(testimonials.filter((t) => t.id !== id))
    } catch (error) {
      console.error('Failed to delete testimonial:', error)
    }
  }

  const handleReorder = useCallback(async (newTestimonials: Testimonial[]) => {
    // Update local state immediately (optimistic)
    setTestimonials(newTestimonials)

    // Save to API
    setSaving(true)
    try {
      const items = newTestimonials.map((t, index) => ({
        id: t.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'testimonials', items }),
      })

      if (!response.ok) {
        throw new Error('Failed to save order')
      }

      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save testimonial order:', error)
      fetchTestimonials()
    } finally {
      setSaving(false)
    }
  }, [])

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
          <Link href="/cms" className="edit-page__back">
            ← Back to Dashboard
          </Link>
          <h1 className="edit-page__title">Testimonials</h1>
          <p className="edit-page__description">
            Manage customer testimonials. Drag to reorder.
          </p>
        </div>
        <div className="edit-page__actions">
          <Link href="/cms/testimonials/new" className="btn btn--primary">
            + Add Testimonial
          </Link>
        </div>
      </div>

      {testimonials.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>
            No testimonials yet. Add your first one!
          </p>
          <Link href="/cms/testimonials/new" className="btn btn--primary">
            + Add Testimonial
          </Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={testimonials}
            getId={(t) => t.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(testimonial) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__info" style={{ flex: 1 }}>
                  <p className="sortable-block-card__title" style={{ fontStyle: 'italic' }}>
                    &ldquo;{testimonial.quote.substring(0, 80)}...&rdquo;
                  </p>
                  <p className="sortable-block-card__meta">
                    — {testimonial.author}
                    {testimonial.role && `, ${testimonial.role}`}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link
                    href={`/cms/testimonials/${testimonial.id}`}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(testimonial.id)
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

      {showToast && (
        <div className="order-toast">
          ✓ Order saved
        </div>
      )}
    </div>
  )
}
