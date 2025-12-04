'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
  page: string
  display_order: number
}

export default function FAQAdmin() {
  const [items, setItems] = useState<FAQItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/cms/faq')
      const data = await response.json()
      setItems(data.items || [])
    } catch (error) {
      console.error('Failed to fetch FAQ items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ item?')) return

    try {
      await fetch(`/api/cms/faq/${id}`, { method: 'DELETE' })
      setItems(items.filter((item) => item.id !== id))
    } catch (error) {
      console.error('Failed to delete FAQ item:', error)
    }
  }

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.page === filter)

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
          <h1 className="edit-page__title">FAQ Items</h1>
          <p className="edit-page__description">Manage frequently asked questions.</p>
        </div>
        <div className="edit-page__actions">
          <select
            className="form-input"
            style={{ width: 'auto' }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Pages</option>
            <option value="homepage">Homepage</option>
            <option value="fslPage">FSL Page</option>
          </select>
          <Link href="/cms/faq/new" className="btn btn--primary">+ Add FAQ</Link>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No FAQ items found.</p>
          <Link href="/cms/faq/new" className="btn btn--primary">+ Add FAQ</Link>
        </div>
      ) : (
        <div className="edit-form">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
                borderBottom: index < filteredItems.length - 1 ? '1px solid #262626' : 'none',
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f5f5f5', fontWeight: 500, marginBottom: '0.25rem' }}>
                  {item.question}
                </p>
                <p style={{ color: '#737373', fontSize: '0.875rem' }}>
                  {item.answer.substring(0, 100)}...
                </p>
                <span style={{ fontSize: '0.75rem', color: '#525252', textTransform: 'uppercase' }}>
                  {item.page}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link
                  href={`/cms/faq/${item.id}`}
                  className="btn btn--secondary"
                  style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
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

