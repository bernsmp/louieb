'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
            Manage customer testimonials shown across the site.
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
        <div className="edit-form">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
                borderBottom: index < testimonials.length - 1 ? '1px solid #262626' : 'none',
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ color: '#d4d4d4', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                  &ldquo;{testimonial.quote.substring(0, 120)}...&rdquo;
                </p>
                <p style={{ color: '#737373', fontSize: '0.875rem' }}>
                  — {testimonial.author}
                  {testimonial.role && `, ${testimonial.role}`}
                  {testimonial.company && ` at ${testimonial.company}`}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link
                  href={`/cms/testimonials/${testimonial.id}`}
                  className="btn btn--secondary"
                  style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="btn btn--danger"
                  style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

