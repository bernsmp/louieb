'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../../components/SortableList'

// Section definitions for the FSL page
const FSL_SECTIONS = [
  {
    id: 'hero',
    label: 'Hero Section',
    description: 'Page headline, tagline, and credentials badge',
    icon: '🎯',
  },
  {
    id: 'videos',
    label: 'Video Section',
    description: 'YouTube Shorts grid with 5 videos',
    icon: '🎬',
  },
  {
    id: 'intro',
    label: 'Long-form Text',
    description: 'Intro hook and 4 paragraphs with CTA',
    icon: '📝',
  },
  {
    id: 'faq',
    label: 'FAQ Section',
    description: 'Frequently asked questions list',
    icon: '❓',
  },
  {
    id: 'finalCta',
    label: 'Final CTA',
    description: 'Call-to-action banner at bottom',
    icon: '🚀',
  },
]

// Default order
const DEFAULT_ORDER = ['hero', 'videos', 'intro', 'faq', 'finalCta']

interface Section {
  id: string
  label: string
  description: string
  icon: string
}

export default function FSLLayoutEditor() {
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    fetchLayout()
  }, [])

  const fetchLayout = async () => {
    try {
      const response = await fetch('/api/cms/order/sections?page=fractional-sales-leader')
      const data = await response.json()

      // Get saved order or use default
      const savedOrder = data.sections || DEFAULT_ORDER

      // Map section IDs to full section objects in saved order
      const orderedSections = savedOrder
        .map((id: string) => FSL_SECTIONS.find((s) => s.id === id))
        .filter(Boolean) as Section[]

      // Add any missing sections at the end
      FSL_SECTIONS.forEach((s) => {
        if (!orderedSections.find((os) => os.id === s.id)) {
          orderedSections.push(s)
        }
      })

      setSections(orderedSections)
    } catch (error) {
      console.error('Failed to fetch layout:', error)
      // Fall back to default
      setSections(FSL_SECTIONS)
    } finally {
      setLoading(false)
    }
  }

  const handleReorder = useCallback((newSections: Section[]) => {
    setSections(newSections)
    setHasChanges(true)
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const sectionIds = sections.map((s) => s.id)

      const response = await fetch('/api/cms/order/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: 'fractional-sales-leader',
          sections: sectionIds,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save layout')
      }

      setShowToast(true)
      setHasChanges(false)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save layout:', error)
      alert('Failed to save layout. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleReset = () => {
    if (!confirm('Reset to default section order?')) return
    setSections(FSL_SECTIONS)
    setHasChanges(true)
  }

  if (loading) {
    return (
      <div className="edit-page">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#737373' }}>
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/fsl-page" className="edit-page__back">
            ← Back to FSL Page
          </Link>
          <h1 className="edit-page__title">Page Layout</h1>
          <p className="edit-page__description">
            Drag sections to reorder how they appear on the Fractional Sales Leader page.
          </p>
        </div>
        <div className="edit-page__actions">
          <button
            onClick={handleReset}
            className="btn btn--secondary"
            disabled={saving}
          >
            Reset to Default
          </button>
          <button
            onClick={handleSave}
            className="btn btn--primary"
            disabled={saving || !hasChanges}
          >
            {saving ? 'Saving...' : hasChanges ? 'Save Layout' : 'Saved'}
          </button>
        </div>
      </div>

      <div className="edit-form" style={{ padding: '1.5rem' }}>
        <p className="layout-editor__hint">
          Drag sections up or down to change their order on the live page. Use the arrow
          buttons for keyboard navigation.
        </p>

        <SortableList
          items={sections}
          getId={(s) => s.id}
          disabled={saving}
          onReorder={handleReorder}
          renderItem={(section, index) => (
            <div className="sortable-section-card">
              <div className="sortable-section-card__icon">
                {section.icon}
              </div>
              <div className="sortable-section-card__info">
                <p className="sortable-section-card__title">
                  {index + 1}. {section.label}
                </p>
                <p className="sortable-section-card__description">
                  {section.description}
                </p>
              </div>
            </div>
          )}
        />
      </div>

      {/* Preview link */}
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <Link
          href="/fractional-sales-leader"
          target="_blank"
          className="btn btn--secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          Preview Live Page ↗
        </Link>
      </div>

      {showToast && (
        <div className="order-toast">
          ✓ Layout saved
        </div>
      )}
    </div>
  )
}

