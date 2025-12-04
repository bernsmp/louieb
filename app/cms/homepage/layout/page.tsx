'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../../components/SortableList'

// Section definitions for the homepage
const HOMEPAGE_SECTIONS = [
  {
    id: 'hero',
    label: 'Hero Section',
    description: 'Main headline, video, and CTA buttons',
    icon: '🎯',
  },
  {
    id: 'credentials',
    label: 'Credentials Badge',
    description: 'LinkedIn Top Voice / Experience badge',
    icon: '🏆',
  },
  {
    id: 'about',
    label: 'About Section',
    description: 'Fractional Sales Leadership intro with stats',
    icon: '👤',
  },
  {
    id: 'valueProposition',
    label: 'Value Proposition',
    description: '"It\'s not how much you sell..." banner',
    icon: '💡',
  },
  {
    id: 'services',
    label: 'Services Grid',
    description: '"What I Offer" - 6 service cards',
    icon: '🛠️',
  },
  {
    id: 'process',
    label: 'Process Steps',
    description: '"How It Works" - 4-step process',
    icon: '📋',
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    description: 'Client testimonial carousel',
    icon: '💬',
  },
  {
    id: 'faq',
    label: 'FAQ Section',
    description: 'Frequently asked questions accordion',
    icon: '❓',
  },
  {
    id: 'contact',
    label: 'Contact Section',
    description: 'Email, phone, and Calendly CTA',
    icon: '📞',
  },
]

// Default order
const DEFAULT_ORDER = [
  'hero',
  'credentials',
  'about',
  'valueProposition',
  'services',
  'process',
  'testimonials',
  'faq',
  'contact',
]

interface Section {
  id: string
  label: string
  description: string
  icon: string
}

export default function HomepageLayoutEditor() {
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
      const response = await fetch('/api/cms/order/sections?page=homepage')
      const data = await response.json()

      // Get saved order or use default
      const savedOrder = data.sections || DEFAULT_ORDER

      // Map section IDs to full section objects in saved order
      const orderedSections = savedOrder
        .map((id: string) => HOMEPAGE_SECTIONS.find((s) => s.id === id))
        .filter(Boolean) as Section[]

      // Add any missing sections at the end
      HOMEPAGE_SECTIONS.forEach((s) => {
        if (!orderedSections.find((os) => os.id === s.id)) {
          orderedSections.push(s)
        }
      })

      setSections(orderedSections)
    } catch (error) {
      console.error('Failed to fetch layout:', error)
      setSections(HOMEPAGE_SECTIONS)
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
          page: 'homepage',
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
    setSections(HOMEPAGE_SECTIONS)
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
          <Link href="/cms/homepage" className="edit-page__back">
            ← Back to Homepage
          </Link>
          <h1 className="edit-page__title">Homepage Layout</h1>
          <p className="edit-page__description">
            Drag sections to reorder how they appear on the homepage.
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

      <div
        style={{
          background: 'rgba(251, 191, 36, 0.1)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <p style={{ color: '#fbbf24', fontSize: '0.85rem', margin: 0 }}>
          <strong>Note:</strong> Homepage section reordering is saved but requires a
          code update to take effect. The FSL page already supports dynamic layout.
        </p>
      </div>

      <div className="edit-form" style={{ padding: '1.5rem' }}>
        <p className="layout-editor__hint">
          Drag sections up or down to change their order. Use arrow buttons for
          keyboard navigation.
        </p>

        <SortableList
          items={sections}
          getId={(s) => s.id}
          disabled={saving}
          onReorder={handleReorder}
          renderItem={(section, index) => (
            <div className="sortable-section-card">
              <div className="sortable-section-card__icon">{section.icon}</div>
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

      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <Link
          href="/"
          target="_blank"
          className="btn btn--secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          Preview Live Homepage ↗
        </Link>
      </div>

      {showToast && <div className="order-toast">✓ Layout saved</div>}
    </div>
  )
}

