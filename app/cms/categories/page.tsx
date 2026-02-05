'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../components/SortableList'

interface Category {
  id: string
  name: string
  slug: string
  display_order: number
}

export default function CategoriesAdmin() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/cms/categories')
      const data = await response.json()
      setCategories(data.categories || [])
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category? Videos in this category will become uncategorized.')) return

    try {
      await fetch(`/api/cms/categories/${id}`, { method: 'DELETE' })
      setCategories(categories.filter((c) => c.id !== id))
    } catch (error) {
      console.error('Failed to delete category:', error)
    }
  }

  const handleReorder = useCallback(async (newCategories: Category[]) => {
    setCategories(newCategories)

    setSaving(true)
    try {
      const items = newCategories.map((c, index) => ({
        id: c.id,
        display_order: index,
      }))

      const response = await fetch('/api/cms/order/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'video-categories', items }),
      })

      if (!response.ok) {
        throw new Error('Failed to save order')
      }

      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save category order:', error)
      fetchCategories()
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
          <h1 className="edit-page__title">Video Categories</h1>
          <p className="edit-page__description">Manage video categories. Drag to reorder.</p>
        </div>
        <div className="edit-page__actions">
          <Link href="/cms/categories/new" className="btn btn--primary">+ Add Category</Link>
        </div>
      </div>

      {categories.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No categories found.</p>
          <Link href="/cms/categories/new" className="btn btn--primary">+ Add Category</Link>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={categories}
            getId={(c) => c.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(category) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__info" style={{ flex: 1 }}>
                  <p className="sortable-block-card__title">{category.name}</p>
                  <p className="sortable-block-card__meta">/{category.slug}</p>
                </div>
                <div className="sortable-block-card__actions">
                  <Link
                    href={`/cms/categories/${category.id}`}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(category.id)
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
