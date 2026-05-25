'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

interface NewsletterEntry {
  id: string
  title: string
  url: string
  display_order: number
}

export default function NewsletterEntriesAdmin() {
  const [entries, setEntries] = useState<NewsletterEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/cms/newsletter-entries')
      const data = await response.json()
      setEntries(data.entries || [])
    } catch (error) {
      console.error('Failed to fetch newsletter entries:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this newsletter entry?')) return

    try {
      await fetch(`/api/cms/newsletter-entries/${id}`, { method: 'DELETE' })
      setEntries((prev) => prev.filter((e) => e.id !== id))
    } catch (error) {
      console.error('Failed to delete entry:', error)
    }
  }

  const handleReorder = useCallback(async (newEntries: NewsletterEntry[]) => {
    setEntries(newEntries.map((e, i) => ({ ...e, display_order: i })))

    setSaving(true)
    try {
      const items = newEntries.map((e, index) => ({
        id: e.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter-entries', items }),
      })

      if (!response.ok) throw new Error('Failed to save order')

      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save order:', error)
      fetchEntries()
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
          <h1 className="edit-page__title">Newsletter Entries</h1>
          <p className="edit-page__description">
            Sunday Starter newsletter list shown on /site-map. Top of this list = directly under
            "The Sunday Starter Newsletter" on the site. New entries auto-add to the top.
            Drag to reorder.
          </p>
        </div>
        <div className="edit-page__actions">
          <Link href="/cms/newsletter-entries/new" className="btn btn--primary">+ Add Entry</Link>
        </div>
      </div>

      {entries.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No newsletter entries yet.</p>
          <Link href="/cms/newsletter-entries/new" className="btn btn--primary">+ Add Entry</Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={entries}
            getId={(entry) => entry.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(entry) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__info">
                  <p className="sortable-block-card__title">{entry.title}</p>
                  <p className="sortable-block-card__meta" style={{ wordBreak: 'break-all' }}>
                    {entry.url}
                  </p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link
                    href={`/cms/newsletter-entries/${entry.id}`}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(entry.id)
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
