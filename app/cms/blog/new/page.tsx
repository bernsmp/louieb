'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ImageUploader } from '../../components/ImageUploader'

export default function NewBlogPostPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

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
  })

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
