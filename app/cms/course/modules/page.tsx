'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { SortableList } from '../../components/SortableList'

interface CourseModule {
  id: string
  title: string
  description: string
  benefit: string
  icon: string
}

export default function CourseModulesAdmin() {
  const [modules, setModules] = useState<CourseModule[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [editingModule, setEditingModule] = useState<CourseModule | null>(null)
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    fetchModules()
  }, [])

  const fetchModules = async () => {
    try {
      const response = await fetch('/api/cms/section/coursePage')
      const data = await response.json()
      const rawModules = data.content?.modules || []
      // Add IDs if they don't exist
      const modulesWithIds = rawModules.map((m: Omit<CourseModule, 'id'> & { id?: string }, index: number) => ({
        ...m,
        id: m.id || `module-${index}`,
      }))
      setModules(modulesWithIds)
    } catch (error) {
      console.error('Failed to fetch modules:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveModules = async (newModules: CourseModule[]) => {
    setSaving(true)
    try {
      // Strip IDs before saving (they're just for UI)
      const modulesToSave = newModules.map(({ id: _id, ...rest }) => rest)
      
      const response = await fetch('/api/cms/section/coursePage', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: { modules: modulesToSave } }),
      })

      if (!response.ok) {
        throw new Error('Failed to save')
      }

      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Failed to save modules:', error)
      alert('Failed to save. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this module?')) return
    
    const newModules = modules.filter((m) => m.id !== id)
    setModules(newModules)
    await saveModules(newModules)
  }

  const handleReorder = useCallback(async (newModules: CourseModule[]) => {
    setModules(newModules)
    await saveModules(newModules)
  }, [])

  const handleEdit = (module: CourseModule) => {
    setEditingModule({ ...module })
    setIsNew(false)
  }

  const handleAdd = () => {
    setEditingModule({
      id: `module-${Date.now()}`,
      title: '',
      description: '',
      benefit: '',
      icon: '/icons/business-plan-11962831.svg',
    })
    setIsNew(true)
  }

  const handleSaveModule = async () => {
    if (!editingModule) return
    if (!editingModule.title.trim() || !editingModule.description.trim()) {
      alert('Title and description are required')
      return
    }

    let newModules: CourseModule[]
    if (isNew) {
      newModules = [...modules, editingModule]
    } else {
      newModules = modules.map((m) => 
        m.id === editingModule.id ? editingModule : m
      )
    }

    setModules(newModules)
    await saveModules(newModules)
    setEditingModule(null)
  }

  const handleCancelEdit = () => {
    setEditingModule(null)
    setIsNew(false)
  }

  if (loading) {
    return (
      <div className="edit-page">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#737373' }}>Loading...</div>
      </div>
    )
  }

  // Edit/Add Modal
  if (editingModule) {
    return (
      <div className="edit-page">
        <div className="edit-page__header">
          <div>
            <button onClick={handleCancelEdit} className="edit-page__back" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              ← Back to Modules
            </button>
            <h1 className="edit-page__title">{isNew ? 'Add Module' : 'Edit Module'}</h1>
          </div>
          <div className="edit-page__actions">
            <button onClick={handleCancelEdit} className="btn btn--secondary">
              Cancel
            </button>
            <button onClick={handleSaveModule} className="btn btn--primary" disabled={saving}>
              {saving ? 'Saving...' : 'Save Module'}
            </button>
          </div>
        </div>

        <div className="edit-form">
          <div className="form-group">
            <label className="form-label">Module Title *</label>
            <input
              type="text"
              className="form-input"
              value={editingModule.title}
              onChange={(e) => setEditingModule({ ...editingModule, title: e.target.value })}
              placeholder="e.g., Hiring System That Saves Time"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea
              className="form-textarea"
              value={editingModule.description}
              onChange={(e) => setEditingModule({ ...editingModule, description: e.target.value })}
              placeholder="e.g., My complete system, including a Hiring Scorecard with 120+ questions and answers."
              rows={3}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Benefit</label>
            <textarea
              className="form-textarea"
              value={editingModule.benefit}
              onChange={(e) => setEditingModule({ ...editingModule, benefit: e.target.value })}
              placeholder="e.g., Free yourself from the stress and uncertainty of hiring."
              rows={2}
            />
            <p className="form-hint">Optional. Shown as highlighted text below the description.</p>
          </div>

          <div className="form-group">
            <label className="form-label">Icon Path</label>
            <input
              type="text"
              className="form-input"
              value={editingModule.icon}
              onChange={(e) => setEditingModule({ ...editingModule, icon: e.target.value })}
              placeholder="/icons/business-plan-11962831.svg"
            />
            <p className="form-hint">Path to icon SVG in /public/icons/</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/course" className="edit-page__back">← Back to Course Page</Link>
          <h1 className="edit-page__title">Course Modules</h1>
          <p className="edit-page__description">
            The 4 cards shown in &quot;What you get with this FREE course&quot;. Drag to reorder.
          </p>
        </div>
        <div className="edit-page__actions">
          <button onClick={handleAdd} className="btn btn--primary">+ Add Module</button>
        </div>
      </div>

      {modules.length === 0 ? (
        <div className="edit-form" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#737373', marginBottom: '1rem' }}>No modules found.</p>
          <button onClick={handleAdd} className="btn btn--primary">+ Add Module</button>
        </div>
      ) : (
        <div className="edit-form" style={{ padding: '1rem' }}>
          <SortableList
            items={modules}
            getId={(m) => m.id}
            disabled={saving}
            onReorder={handleReorder}
            renderItem={(module) => (
              <div className="sortable-block-card">
                <div className="sortable-block-card__info" style={{ flex: 1 }}>
                  <p className="sortable-block-card__title">{module.title}</p>
                  <p className="sortable-block-card__meta">
                    {module.description.substring(0, 80)}{module.description.length > 80 ? '...' : ''}
                  </p>
                  {module.benefit && (
                    <p className="sortable-block-card__meta" style={{ fontStyle: 'italic', color: '#3b82f6' }}>
                      {module.benefit}
                    </p>
                  )}
                </div>
                <div className="sortable-block-card__actions">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleEdit(module)
                    }}
                    className="btn btn--secondary"
                    style={{ padding: '0.4rem 0.6rem', fontSize: '0.7rem' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(module.id)
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
          ✓ Saved
        </div>
      )}
    </div>
  )
}

