'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ImageUploader } from '../../components/ImageUploader'

interface Category {
  id: string
  name: string
  slug: string
}

export default function NewBlogPostPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState('')
  const [creatingCategory, setCreatingCategory] = useState(false)

  // Get today's date in YYYY-MM-DD format for the default
  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    linkedin_url: '',
    published_date: today,
    image: '',
    image_alt: '',
    author: 'Louie Bernstein',
    tags: '',
    is_featured: false,
    category_id: '',
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/cms/categories')
      const data = await res.json()
      if (data.categories) setCategories(data.categories)
    } catch (err) {
      console.error('Failed to fetch categories:', err)
    }
  }

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return
    setCreatingCategory(true)
    try {
      const res = await fetch('/api/cms/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCategoryName.trim() }),
      })
      const data = await res.json()
      if (data.category) {
        setCategories([...categories, data.category])
        setForm({ ...form, category_id: data.category.id })
        setNewCategoryName('')
        setShowNewCategory(false)
      }
    } catch (err) {
      console.error('Failed to create category:', err)
    } finally {
      setCreatingCategory(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      // Convert tags string to array
      const tagsArray = form.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0)

      const response = await fetch('/api/cms/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tags: tagsArray,
          category_id: form.category_id || null,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.details || data.error || 'Failed to create blog post')
      }
      router.push('/cms/blog')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create blog post'
      setError(errorMessage)
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms/blog" className="edit-page__back">← Back to Blog Posts</Link>
          <h1 className="edit-page__title">New Blog Post</h1>
        </div>
      </div>

      {error && <div className="form-error" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label className="form-label">Title *</label>
          <input
            type="text"
            className="form-input"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Excerpt *</label>
          <textarea
            className="form-textarea"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            rows={3}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Content *</label>
          <textarea
            className="form-textarea"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={15}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">LinkedIn URL</label>
          <input
            type="text"
            className="form-input"
            value={form.linkedin_url}
            onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })}
            placeholder="https://linkedin.com/posts/..."
          />
        </div>

        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Published Date *</label>
            <input
              type="date"
              className="form-input"
              value={form.published_date}
              onChange={(e) => setForm({ ...form, published_date: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-input"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Featured Image</label>
          <ImageUploader
            value={form.image}
            onChange={(url) => setForm({ ...form, image: url || '' })}
            folder="blog"
            showAltTextButton={true}
            onAltTextGenerated={(altText) => setForm({ ...form, image_alt: altText })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Image Alt Text</label>
          <input
            type="text"
            className="form-input"
            value={form.image_alt}
            onChange={(e) => setForm({ ...form, image_alt: e.target.value })}
            placeholder="Descriptive alt text for the image"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Tags</label>
          <input
            type="text"
            className="form-input"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="leadership, strategy, sales (comma separated)"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <select
              className="form-input"
              value={form.category_id}
              onChange={(e) => setForm({ ...form, category_id: e.target.value })}
            >
              <option value="">No category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setShowNewCategory(!showNewCategory)}
              className="btn btn--secondary"
              style={{ whiteSpace: 'nowrap' }}
            >
              + New
            </button>
          </div>
          {showNewCategory && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <input
                type="text"
                className="form-input"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="New category name"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleCreateCategory())}
              />
              <button
                type="button"
                onClick={handleCreateCategory}
                className="btn btn--primary"
                disabled={creatingCategory || !newCategoryName.trim()}
              >
                {creatingCategory ? 'Adding...' : 'Add'}
              </button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={form.is_featured}
              onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
            />
            Featured Post
          </label>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn--primary" disabled={saving}>
            {saving ? 'Creating...' : 'Create Blog Post'}
          </button>
        </div>
      </form>
    </div>
  )
}
