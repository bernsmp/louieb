'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

interface Service {
  id: string
  title: string
  description: string
  icon: string | null
  highlight: boolean
  display_order: number
}

export default function ServicesAdmin() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/cms/services')
      const data = await response.json()
      setServices(data.services || [])
    } catch (error) {
      console.error('Failed to fetch services:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return

    try {
      await fetch(`/api/cms/services/${id}`, { method: 'DELETE' })
      setServices(services.filter((s) => s.id !== id))
    } catch (error) {
      console.error('Failed to delete service:', error)
    }
  }

  const handleReorder = useCallback(async (newServices: Service[]) => {
    // Update local state immediately (optimistic)
    setServices(newServices)

    // Save to API
    setSaving(true)
    try {
      const items = newServices.map((s, index) => ({
        id: s.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'services', items }),
      })

      if (!response.ok) {
        throw new Error('Failed to save order')
      }

      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save service order:', error)
      fetchServices()
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
          <h1 className="edit-page__title">Services</h1>
          <p className="edit-page__description">Manage services in &quot;What I Offer&quot;. Drag to reorder.</p>
        </div>
        <div className="edit-page__actions">
          <Link href="/cms/services/new" className="btn btn--primary">+ Add Service</Link>
        </div>
      </div>

      {services.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No services found.</p>
          <Link href="/cms/services/new" className="btn btn--primary">+ Add Service</Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={services}
            getId={(s) => s.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(service) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__info" style={{ flex: 1 }}>
                  <p className="sortable-block-card__title">
                    {service.title}
                    {service.highlight && (
                      <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', color: '#3b82f6' }}>★ Highlighted</span>
                    )}
                  </p>
                  <p className="sortable-block-card__meta">
                    {service.description.substring(0, 80)}...
                  </p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link
                    href={`/cms/services/${service.id}`}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(service.id)
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
