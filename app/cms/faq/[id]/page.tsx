'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EditFAQPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    question: '',
    answer: '',
    page: 'homepage',
    display_order: 0,
  })

  useEffect(() => {
    fetchItem()
  }, [id])

  const fetchItem = async () => {
    try {
      const response = await fetch(`/api/cms/faq/${id}`)
      const data = await response.json()
      if (data.item) {
        setForm({
          question: data.item.question || '',
          answer: data.item.answer || '',
          page: data.item.page || 'homepage',
          display_order: data.item.display_order || 0,
        })
      }
    } catch (error) {
      console.error('Failed to fetch FAQ item:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const response = await fetch(`/api/cms/faq/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Failed to update FAQ item')
      router.push('/cms/faq')
    } catch (err) {
      setError('Failed to update FAQ item.')
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
          <Link href="/cms/faq" className="edit-page__back">← Back to FAQ</Link>
          <h1 className="edit-page__title">Edit FAQ Item</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label className="form-label">Question *</label>
          <input type="text" className="form-input" value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} required />
        </div>

        <div className="form-group">
          <label className="form-label">Answer *</label>
          <textarea className="form-textarea" value={form.answer} onChange={(e) => setForm({ ...form, answer: e.target.value })} rows={4} required />
        </div>

        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Page</label>
            <select className="form-input" value={form.page} onChange={(e) => setForm({ ...form, page: e.target.value })}>
              <option value="homepage">Homepage</option>
              <option value="fslPage">FSL Page</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Display Order</label>
            <input type="number" className="form-input" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">Cancel</button>
          <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? 'Saving...' : 'Save Changes'}</button>
        </div>
      </form>
    </div>
  )
}

