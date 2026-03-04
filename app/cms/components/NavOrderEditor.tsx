'use client'

import { useState, useEffect } from 'react'
import { SortableList } from './SortableList'
import { DEFAULT_NAV_ORDER, NAV_ITEM_LABELS, type NavKey } from '@/components/FloatingNavWrapper'

interface NavOrderItem {
  id: NavKey
  label: string
}

export function NavOrderEditor() {
  const [items, setItems] = useState<NavOrderItem[]>([])
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/cms/section/navigation')
        if (res.ok) {
          const data = await res.json()
          const order: string[] = data.navItemOrder?.length
            ? data.navItemOrder
            : DEFAULT_NAV_ORDER
          setItems(
            order
              .filter((key): key is NavKey => key in NAV_ITEM_LABELS)
              .map((key) => ({ id: key, label: NAV_ITEM_LABELS[key] }))
          )
        }
      } catch {
        setItems(DEFAULT_NAV_ORDER.map((key) => ({ id: key, label: NAV_ITEM_LABELS[key] })))
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function handleSave() {
    setSaving(true)
    setMessage(null)
    try {
      // Fetch current section data first so we don't overwrite other fields
      const getRes = await fetch('/api/cms/section/navigation')
      const current = getRes.ok ? await getRes.json() : {}

      const res = await fetch('/api/cms/section/navigation', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...current, navItemOrder: items.map((i) => i.id) }),
      })
      if (res.ok) {
        setMessage({ type: 'success', text: 'Navigation order saved!' })
      } else {
        setMessage({ type: 'error', text: 'Failed to save. Please try again.' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to save. Please try again.' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <p className="text-sm text-gray-500">Loading nav items…</p>
  }

  return (
    <div className="space-y-3">
      <SortableList
        items={items}
        getId={(item) => item.id}
        onReorder={setItems}
        renderItem={(item) => (
          <span className="text-sm font-medium text-gray-100">{item.label}</span>
        )}
        className="space-y-2"
      />
      <div className="flex items-center gap-3 pt-1">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Save Order'}
        </button>
        {message && (
          <p className={`text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  )
}
