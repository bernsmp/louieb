'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { DevicePreviewToggle, type DeviceType } from './DevicePreviewToggle'
import { VisibilityToggle } from './VisibilityToggle'

// Helper to format relative time
function formatRelativeTime(dateString: string | null): string {
  if (!dateString) return 'Never'

  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 10) return 'Just now'
  if (diffInSeconds < 60) return 'A few seconds ago'
  if (diffInSeconds < 120) return 'A minute ago'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`

  // For older saves, show time: "2:34 PM"
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

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
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null)
  const [isDirty, setIsDirty] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [device, setDevice] = useState<DeviceType>('desktop')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Load device preference from localStorage on mount
  useEffect(() => {
    const savedDevice = localStorage.getItem('cms-preview-device')
    if (savedDevice === 'tablet' || savedDevice === 'mobile' || savedDevice === 'desktop') {
      setDevice(savedDevice)
    }
  }, [])

  // Handle device change and persist to localStorage
  const handleDeviceChange = (newDevice: DeviceType) => {
    setDevice(newDevice)
    localStorage.setItem('cms-preview-device', newDevice)
  }

  // Get iframe width based on device
  const getIframeWidth = () => {
    switch (device) {
      case 'mobile':
        return '375px'
      case 'tablet':
        return '768px'
      default:
        return '100%'
    }
  }

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
      } else {
        // Initialize with visible: true by default if no content exists
        setContent({ visible: true })
      }
      // Set initial last saved timestamp
      if (data.updated_at) {
        setLastSavedAt(data.updated_at)
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

  // Keyboard shortcut: Cmd+S / Ctrl+S to save
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        handleSave()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [content, section])

  // Warn on navigate away if unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [isDirty])

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
    setIsDirty(true)

    // Debounce preview updates
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      updatePreview(newContent)
    }, 150)
  }

  const handleVisibilityChange = (visible: boolean) => {
    const newContent = { ...content, visible }
    setContent(newContent)
    setIsDirty(true)
    updatePreview(newContent)
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

      const responseData = await response.json()
      // Extract updated_at from the API response (data.data.updated_at)
      if (responseData.data?.updated_at) {
        setLastSavedAt(responseData.data.updated_at)
      } else {
        // Fallback to current time if not provided
        setLastSavedAt(new Date().toISOString())
      }
      setIsDirty(false)
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 2000)

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p className="edit-page__description">{description}</p>
            {lastSavedAt && (
              <span className="last-saved-indicator">
                {saveSuccess && <span className="save-checkmark">✓</span>}
                Last saved {formatRelativeTime(lastSavedAt)}
              </span>
            )}
          </div>
        </div>
        <div className="edit-page__actions">
          <VisibilityToggle
            visible={content.visible !== false}
            onChange={handleVisibilityChange}
          />
          <button onClick={() => router.back()} className="btn btn--secondary">
            Cancel
          </button>
          <button onClick={handleSave} className={`btn btn--primary ${saving ? 'btn--saving' : ''} ${saveSuccess ? 'btn--saved' : ''}`} disabled={saving}>
            {saving ? 'Saving...' : saveSuccess ? 'Saved!' : 'Save Changes'}
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
              <DevicePreviewToggle value={device} onChange={handleDeviceChange} />
            </div>
            <div className="preview-panel__iframe-container" style={{ height: '750px', background: '#020617', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <iframe
                ref={iframeRef}
                src={previewUrl}
                style={{
                  width: getIframeWidth(),
                  height: '100%',
                  border: device !== 'desktop' ? '1px solid #262626' : 'none',
                  boxShadow: device !== 'desktop' ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none',
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
