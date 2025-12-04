'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EditProcessStepPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    step_number: '',
    title: '',
    description: '',
    display_order: 0,
  })

  useEffect(() => {
    fetchStep()
  }, [id])

  const fetchStep = async () => {
    try {
      const response = await fetch(`/api/cms/process-steps/${id}`)
      const data = await response.json()
      if (data.step) {
        setForm({
          step_number: data.step.step_number || '',
          title: data.step.title || '',
          description: data.step.description || '',
          display_order: data.step.display_order || 0,
        })
      }
    } catch (error) {
      console.error('Failed to fetch step:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch(`/api/cms/process-steps/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Failed to update step')
      router.push('/cms/process')
    } catch (err) {
      setError('Failed to update step.')
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
          <Link href="/cms/process" className="edit-page__back">← Back to Process Steps</Link>
          <h1 className="edit-page__title">Edit Process Step</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Step Number *</label>
            <input type="text" className="form-input" value={form.step_number} onChange={(e) => setForm({ ...form, step_number: e.target.value })} required style={{ width: '100px' }} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Title *</label>
            <input type="text" className="form-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Description *</label>
          <textarea className="form-textarea" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} required />
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

