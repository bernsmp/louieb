'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewProcessStepPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    step_number: '',
    title: '',
    description: '',
    display_order: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch('/api/cms/process-steps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Failed to create step')
      router.push('/cms/process')
    } catch (err) {
      setError('Failed to create step.')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/process" className="edit-page__back">← Back to Process Steps</Link>
          <h1 className="edit-page__title">New Process Step</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Step Number *</label>
            <input type="text" className="form-input" value={form.step_number} onChange={(e) => setForm({ ...form, step_number: e.target.value })} placeholder="e.g., 01" required style={{ width: '100px' }} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Title *</label>
            <input type="text" className="form-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g., Initial Consultation" required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Description *</label>
          <textarea className="form-textarea" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} required />
        </div>

        <div className="form-group">
          <label className="form-label">Display Order</label>
          <input type="number" className="form-input" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })} style={{ width: '100px' }} />
          <p className="form-hint">Lower numbers appear first</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">Cancel</button>
          <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? 'Creating...' : 'Create Step'}</button>
        </div>
      </form>
    </div>
  )
}

