'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FieldConfig {
  name: string
  label: string
  type: 'text' | 'textarea' | 'url'
  placeholder?: string
  hint?: string
  rows?: number
  nested?: string // For nested fields like 'ctaPrimary.text'
}

interface SectionEditorProps {
  section: string
  title: string
  description: string
  backHref: string
  backLabel: string
  fields: FieldConfig[]
  previewUrl?: string // Optional preview route URL
}

export function SectionEditor({
  section,
  title,
  description,
  backHref,
  backLabel,
  fields,
  previewUrl,
}: SectionEditorProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [content, setContent] = useState<Record<string, unknown>>({})
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Update preview when content changes
  const updatePreview = useCallback((newContent: Record<string, unknown>) => {
    if (previewUrl && iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          type: 'preview-update',
          content: newContent,
        }),
        '*'
      )
    }
  }, [previewUrl])

  const fetchContent = useCallback(async () => {
    try {
      const response = await fetch(`/api/cms/section/${section}`)
      const data = await response.json()
      if (data.content && Object.keys(data.content).length > 0) {
        setContent(data.content)
        // Update preview after initial load
        setTimeout(() => updatePreview(data.content), 500)
      }
    } catch (error) {
      console.error('Failed to fetch content:', error)
    } finally {
      setLoading(false)
    }
  }, [section, updatePreview])

  useEffect(() => {
    fetchContent()
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [fetchContent])

  const getValue = (field: FieldConfig): string => {
    if (field.nested) {
      const [parent, child] = field.nested.split('.')
      const parentObj = content[parent] as Record<string, unknown> | undefined
      return (parentObj?.[child] as string) || ''
    }
    return (content[field.name] as string) || ''
  }

  const setValue = (field: FieldConfig, value: string) => {
    let newContent: Record<string, unknown>
    
    if (field.nested) {
      const [parent, child] = field.nested.split('.')
      newContent = {
        ...content,
        [parent]: {
          ...((content[parent] as Record<string, unknown>) || {}),
          [child]: value,
        },
      }
    } else {
      newContent = { ...content, [field.name]: value }
    }
    
    setContent(newContent)
    
    // Debounce preview updates
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      updatePreview(newContent)
    }, 150)
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage(null)

    try {
      const response = await fetch(`/api/cms/section/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })

      if (!response.ok) {
        throw new Error('Failed to save')
      }

      setMessage({ type: 'success', text: 'Saved successfully!' })
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save. Please try again.' })
      console.error(error)
    } finally {
      setSaving(false)
    }
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
          <Link href={backHref} className="edit-page__back">
            ← {backLabel}
          </Link>
          <h1 className="edit-page__title">{title}</h1>
          <p className="edit-page__description">{description}</p>
        </div>
        <div className="edit-page__actions">
          <button onClick={() => router.back()} className="btn btn--secondary">
            Cancel
          </button>
          <button onClick={handleSave} className="btn btn--primary" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {message && (
        <div className={`toast toast--${message.type}`}>{message.text}</div>
      )}

      {/* Layout: with or without preview */}
      <div className={previewUrl ? 'edit-with-preview' : ''}>
        <div className="edit-form">
          {fields.map((field) => (
            <div key={field.nested || field.name} className="form-group">
              <label className="form-label">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  className="form-textarea"
                  value={getValue(field)}
                  onChange={(e) => setValue(field, e.target.value)}
                  placeholder={field.placeholder}
                  rows={field.rows || 4}
                />
              ) : (
                <input
                  type={field.type === 'url' ? 'url' : 'text'}
                  className="form-input"
                  value={getValue(field)}
                  onChange={(e) => setValue(field, e.target.value)}
                  placeholder={field.placeholder}
                />
              )}
              {field.hint && <p className="form-hint">{field.hint}</p>}
            </div>
          ))}
        </div>

        {/* Preview Panel */}
        {previewUrl && (
          <div className="preview-panel">
            <div className="preview-panel__header">
              <span className="preview-panel__badge">Live Preview</span>
              <span className="preview-panel__hint">Updates as you type</span>
            </div>
            <div style={{ height: '750px', background: '#fafaf9' }}>
              <iframe
                ref={iframeRef}
                src={previewUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                title={`${title} Preview`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
