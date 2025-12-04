'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
          <p className="edit-page__description">Manage the steps in the "How It Works" section.</p>
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
        <div className="edit-form">
          {steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
                borderBottom: index < steps.length - 1 ? '1px solid #262626' : 'none',
              }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6', minWidth: '40px' }}>
                {step.step_number}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f5f5f5', fontWeight: 500, marginBottom: '0.25rem' }}>{step.title}</p>
                <p style={{ color: '#737373', fontSize: '0.875rem' }}>{step.description.substring(0, 100)}...</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link href={`/cms/process/${step.id}`} className="btn btn--secondary" style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}>Edit</Link>
                <button onClick={() => handleDelete(step.id)} className="btn btn--danger" style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

