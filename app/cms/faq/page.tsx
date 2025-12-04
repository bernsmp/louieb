'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

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
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)
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

  const handleReorder = useCallback(async (newItems: FAQItem[]) => {
    // Update local state immediately (optimistic)
    setItems((prev) => {
      if (filter === 'all') {
        return newItems
      }
      const updatedMap = new Map(newItems.map((v, i) => [v.id, i]))
      return prev.map((v) => {
        const newIndex = updatedMap.get(v.id)
        if (newIndex !== undefined) {
          return { ...v, display_order: newIndex }
        }
        return v
      }).sort((a, b) => a.display_order - b.display_order)
    })

    // Save to API
    setSaving(true)
    try {
      const orderItems = newItems.map((v, index) => ({
        id: v.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'faq', items: orderItems }),
      })

      if (!response.ok) {
        throw new Error('Failed to save order')
      }

      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save FAQ order:', error)
      fetchItems()
    } finally {
      setSaving(false)
    }
  }, [filter])

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
          <p className="edit-page__description">Manage frequently asked questions. Drag to reorder.</p>
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
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={filteredItems}
            getId={(item) => item.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(item) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__info" style={{ flex: 1 }}>
                  <p className="sortable-block-card__title">{item.question}</p>
                  <p className="sortable-block-card__meta">
                    {item.answer.substring(0, 80)}... • {item.page}
                  </p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link
                    href={`/cms/faq/${item.id}`}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(item.id)
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
