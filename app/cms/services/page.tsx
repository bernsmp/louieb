'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
          <p className="edit-page__description">Manage the services shown in the "What I Offer" section.</p>
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
        <div className="edit-form">
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
                borderBottom: index < services.length - 1 ? '1px solid #262626' : 'none',
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f5f5f5', fontWeight: 500, marginBottom: '0.25rem' }}>
                  {service.title}
                  {service.highlight && <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#3b82f6' }}>★ Highlighted</span>}
                </p>
                <p style={{ color: '#737373', fontSize: '0.875rem' }}>{service.description.substring(0, 100)}...</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link href={`/cms/services/${service.id}`} className="btn btn--secondary" style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}>Edit</Link>
                <button onClick={() => handleDelete(service.id)} className="btn btn--danger" style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

