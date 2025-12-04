'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewServicePage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    title: '',
    description: '',
    icon: '',
    highlight: false,
    display_order: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch('/api/cms/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Failed to create service')
      router.push('/cms/services')
    } catch (err) {
      setError('Failed to create service.')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/services" className="edit-page__back">← Back to Services</Link>
          <h1 className="edit-page__title">New Service</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label className="form-label">Title *</label>
          <input type="text" className="form-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g., Sales Team Organization" required />
        </div>

        <div className="form-group">
          <label className="form-label">Description *</label>
          <textarea className="form-textarea" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} required />
        </div>

        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Icon Path</label>
            <input type="text" className="form-input" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} placeholder="e.g., /icons/business-team.svg" />
          </div>
          <div className="form-group">
            <label className="form-label">Display Order</label>
            <input type="number" className="form-input" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })} />
          </div>
        </div>

        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input type="checkbox" checked={form.highlight} onChange={(e) => setForm({ ...form, highlight: e.target.checked })} />
            <span className="form-label" style={{ marginBottom: 0 }}>Highlight this service</span>
          </label>
          <p className="form-hint">Highlighted services get special styling</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">Cancel</button>
          <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? 'Creating...' : 'Create Service'}</button>
        </div>
      </form>
    </div>
  )
}

