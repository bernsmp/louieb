'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface QuickLink {
  label: string
  href: string
}

interface FooterContent {
  tagline?: string
  slogan?: string
  copyrightName?: string
  quickLinksLabel?: string
  getInTouchLabel?: string
  quickLinks?: QuickLink[]
}

const DEFAULT_LINKS: QuickLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Videos', href: '/videos' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Sales Training', href: '/salesperson' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function EditFooterPage() {
  const [content, setContent] = useState<FooterContent>({})
  const [links, setLinks] = useState<QuickLink[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Inline edit state
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editLabel, setEditLabel] = useState('')
  const [editHref, setEditHref] = useState('')

  // Add new link state
  const [addingNew, setAddingNew] = useState(false)
  const [newLabel, setNewLabel] = useState('')
  const [newHref, setNewHref] = useState('')

  useEffect(() => {
    fetch('/api/cms/section/footer')
      .then((r) => r.json())
      .then((data) => {
        const c: FooterContent = data.content || {}
        setContent(c)
        setLinks(
          Array.isArray(c.quickLinks) && c.quickLinks.length > 0
            ? c.quickLinks
            : DEFAULT_LINKS
        )
        setSavedAt(data.updated_at)
      })
      .catch(() => {
        setLinks(DEFAULT_LINKS)
      })
      .finally(() => setLoading(false))
  }, [])

  const save = async (overrideLinks?: QuickLink[]) => {
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/cms/section/footer', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: {
            ...content,
            quickLinks: overrideLinks ?? links,
          },
        }),
      })
      if (!res.ok) throw new Error('Save failed')
      setSavedAt(new Date().toISOString())
    } catch {
      setError('Failed to save. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleFieldChange = (field: keyof FooterContent, value: string) => {
    setContent((prev) => ({ ...prev, [field]: value }))
  }

  // Link editing
  const startEdit = (i: number) => {
    setEditingIndex(i)
    setEditLabel(links[i].label)
    setEditHref(links[i].href)
    setAddingNew(false)
  }

  const saveEdit = () => {
    if (!editLabel.trim() || !editHref.trim()) return
    const updated = links.map((l, i) =>
      i === editingIndex ? { label: editLabel.trim(), href: editHref.trim() } : l
    )
    setLinks(updated)
    setEditingIndex(null)
  }

  const cancelEdit = () => setEditingIndex(null)

  const removeLink = (i: number) => {
    setLinks(links.filter((_, idx) => idx !== i))
  }

  const moveUp = (i: number) => {
    if (i === 0) return
    const updated = [...links]
    ;[updated[i - 1], updated[i]] = [updated[i], updated[i - 1]]
    setLinks(updated)
  }

  const moveDown = (i: number) => {
    if (i === links.length - 1) return
    const updated = [...links]
    ;[updated[i], updated[i + 1]] = [updated[i + 1], updated[i]]
    setLinks(updated)
  }

  const startAdd = () => {
    setAddingNew(true)
    setNewLabel('')
    setNewHref('')
    setEditingIndex(null)
  }

  const confirmAdd = () => {
    if (!newLabel.trim() || !newHref.trim()) return
    setLinks([...links, { label: newLabel.trim(), href: newHref.trim() }])
    setAddingNew(false)
    setNewLabel('')
    setNewHref('')
  }

  const cancelAdd = () => {
    setAddingNew(false)
    setNewLabel('')
    setNewHref('')
  }

  if (loading) {
    return (
      <div className="cms-page-container">
        <div className="cms-loading">Loading…</div>
      </div>
    )
  }

  return (
    <div className="cms-page-container">
      {/* Header */}
      <div className="cms-page-header">
        <div className="cms-page-header__back">
          <Link href="/cms/settings" className="cms-back-link">
            ← Back to Settings
          </Link>
        </div>
        <div className="cms-page-header__main">
          <div>
            <h1 className="cms-page-title">Footer</h1>
            <p className="cms-page-description">
              Footer content shown at the bottom of every page.
            </p>
          </div>
          <div className="cms-page-header__actions">
            {savedAt && (
              <span className="cms-saved-indicator">
                Last saved {new Date(savedAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
              </span>
            )}
            <button
              onClick={() => save()}
              disabled={saving}
              className="btn btn--primary"
            >
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </div>
        {error && <p className="cms-error-message">{error}</p>}
      </div>

      <div className="cms-page-content">
        {/* Text Fields */}
        <div className="cms-section-card">
          <h2 className="cms-section-card__title">Footer Text</h2>

          {[
            { field: 'tagline' as const, label: 'Footer Tagline', placeholder: 'e.g., Fractional Sales Leader' },
            { field: 'slogan' as const, label: 'Footer Slogan', placeholder: 'e.g., Less Spend. More Sales.' },
            { field: 'copyrightName' as const, label: 'Copyright Name', placeholder: 'e.g., Louie Bernstein' },
            { field: 'quickLinksLabel' as const, label: 'Quick Links Section Label', placeholder: 'e.g., Quick Links' },
            { field: 'getInTouchLabel' as const, label: 'Get In Touch Section Label', placeholder: 'e.g., Get In Touch' },
          ].map(({ field, label, placeholder }) => (
            <div key={field} className="cms-field-group">
              <label className="cms-field-label">{label}</label>
              <input
                type="text"
                className="cms-input"
                value={(content[field] as string) ?? ''}
                placeholder={placeholder}
                onChange={(e) => handleFieldChange(field, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Quick Links Manager */}
        <div className="cms-section-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h2 className="cms-section-card__title" style={{ margin: 0 }}>Quick Links</h2>
            <button
              onClick={startAdd}
              className="btn btn--primary btn--sm"
              disabled={addingNew}
            >
              + Add Link
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {links.map((link, i) => (
              <div key={i} style={{ border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.75rem 1rem', background: 'var(--background)' }}>
                {editingIndex === i ? (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                    <div style={{ flex: '1', minWidth: '140px' }}>
                      <label className="cms-field-label" style={{ fontSize: '0.75rem' }}>Label</label>
                      <input
                        type="text"
                        className="cms-input"
                        value={editLabel}
                        onChange={(e) => setEditLabel(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div style={{ flex: '2', minWidth: '200px' }}>
                      <label className="cms-field-label" style={{ fontSize: '0.75rem' }}>URL</label>
                      <input
                        type="text"
                        className="cms-input"
                        value={editHref}
                        onChange={(e) => setEditHref(e.target.value)}
                        placeholder="e.g., /salesperson or https://..."
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={saveEdit} className="btn btn--primary btn--sm">Save</button>
                      <button onClick={cancelEdit} className="btn btn--secondary btn--sm">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {/* Reorder buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <button
                        onClick={() => moveUp(i)}
                        disabled={i === 0}
                        title="Move up"
                        style={{ background: 'none', border: 'none', cursor: i === 0 ? 'default' : 'pointer', opacity: i === 0 ? 0.3 : 1, fontSize: '0.7rem', lineHeight: 1, padding: '2px' }}
                      >▲</button>
                      <button
                        onClick={() => moveDown(i)}
                        disabled={i === links.length - 1}
                        title="Move down"
                        style={{ background: 'none', border: 'none', cursor: i === links.length - 1 ? 'default' : 'pointer', opacity: i === links.length - 1 ? 0.3 : 1, fontSize: '0.7rem', lineHeight: 1, padding: '2px' }}
                      >▼</button>
                    </div>
                    {/* Link info */}
                    <div style={{ flex: 1 }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{link.label}</span>
                      <span style={{ marginLeft: '0.75rem', color: 'var(--muted-foreground)', fontSize: '0.8rem' }}>{link.href}</span>
                    </div>
                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => startEdit(i)} className="btn btn--secondary btn--sm">Edit</button>
                      <button
                        onClick={() => removeLink(i)}
                        className="btn btn--sm"
                        style={{ background: 'none', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '0.375rem', padding: '0.25rem 0.75rem', cursor: 'pointer', fontSize: '0.875rem' }}
                      >Remove</button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Add new link row */}
            {addingNew && (
              <div style={{ border: '2px dashed var(--primary)', borderRadius: '0.5rem', padding: '0.75rem 1rem', background: 'var(--background)' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                  <div style={{ flex: '1', minWidth: '140px' }}>
                    <label className="cms-field-label" style={{ fontSize: '0.75rem' }}>Label</label>
                    <input
                      type="text"
                      className="cms-input"
                      value={newLabel}
                      onChange={(e) => setNewLabel(e.target.value)}
                      placeholder="e.g., Sales Training"
                      autoFocus
                    />
                  </div>
                  <div style={{ flex: '2', minWidth: '200px' }}>
                    <label className="cms-field-label" style={{ fontSize: '0.75rem' }}>URL</label>
                    <input
                      type="text"
                      className="cms-input"
                      value={newHref}
                      onChange={(e) => setNewHref(e.target.value)}
                      placeholder="e.g., /salesperson or https://..."
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={confirmAdd} className="btn btn--primary btn--sm">Add</button>
                    <button onClick={cancelAdd} className="btn btn--secondary btn--sm">Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
            Use relative paths (e.g., <code>/salesperson</code>) for pages on this site, or full URLs for external links.
          </p>
        </div>
      </div>
    </div>
  )
}
