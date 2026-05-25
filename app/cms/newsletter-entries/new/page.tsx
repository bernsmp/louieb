'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewNewsletterEntryPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    title: '',
    url: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch('/api/cms/newsletter-entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Failed to create newsletter entry')
      router.push('/cms/newsletter-entries')
    } catch (err) {
      setError('Failed to create newsletter entry.')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/newsletter-entries" className="edit-page__back">← Back to Newsletter Entries</Link>
          <h1 className="edit-page__title">New Newsletter Entry</h1>
          <p className="edit-page__description">
            This entry will appear at the top of the list on /site-map, directly under
            "The Sunday Starter Newsletter".
          </p>
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
            placeholder="e.g., The Monday Morning Audit Explained"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">URL *</label>
          <input
            type="url"
            className="form-input"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            placeholder="e.g., https://youtu.be/abc123"
            required
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">Cancel</button>
          <button type="submit" className="btn btn--primary" disabled={saving}>
            {saving ? 'Creating...' : 'Create Entry'}
          </button>
        </div>
      </form>
    </div>
  )
}
