'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

interface ProcessStep {
  id: string
  step_number: string
  title: string
  description: string
  display_order: number
}

export default function ProcessAdmin() {
  const [steps, setSteps] = useState<ProcessStep[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    fetchSteps()
  }, [])

  const fetchSteps = async () => {
    try {
      const response = await fetch('/api/cms/process-steps')
      const data = await response.json()
      setSteps(data.steps || [])
    } catch (error) {
      console.error('Failed to fetch process steps:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this step?')) return

    try {
      await fetch(`/api/cms/process-steps/${id}`, { method: 'DELETE' })
      setSteps(steps.filter((s) => s.id !== id))
    } catch (error) {
      console.error('Failed to delete step:', error)
    }
  }

  const handleReorder = useCallback(async (newSteps: ProcessStep[]) => {
    // Update local state immediately (optimistic)
    setSteps(newSteps)

    // Save to API
    setSaving(true)
    try {
      const items = newSteps.map((s, index) => ({
        id: s.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'process-steps', items }),
      })

      if (!response.ok) {
        throw new Error('Failed to save order')
      }

      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save step order:', error)
      fetchSteps()
    } finally {
      setSaving(false)
    }
  }, [])

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
          <Link href="/cms" className="edit-page__back">← Back to Dashboard</Link>
          <h1 className="edit-page__title">Process Steps</h1>
          <p className="edit-page__description">Manage &quot;How It Works&quot; steps. Drag to reorder.</p>
        </div>
        <div className="edit-page__actions">
          <Link href="/cms/process/new" className="btn btn--primary">+ Add Step</Link>
        </div>
      </div>

      {steps.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No process steps found.</p>
          <Link href="/cms/process/new" className="btn btn--primary">+ Add Step</Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={steps}
            getId={(s) => s.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(step) => (
              <div className="sortable-block-card">
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#3b82f6',
                    minWidth: '40px',
                    textAlign: 'center',
                  }}
                >
                  {step.step_number}
                </div>
                <div className="sortable-block-card__info" style={{ flex: 1 }}>
                  <p className="sortable-block-card__title">{step.title}</p>
                  <p className="sortable-block-card__meta">
                    {step.description.substring(0, 80)}...
                  </p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link
                    href={`/cms/process/${step.id}`}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(step.id)
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
