'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ImageUploader } from '../../components/ImageUploader'

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    linkedin_url: '',
    published_date: '',
    image: '',
    image_alt: '',
    author: 'Louie Bernstein',
    tags: '',
    is_featured: false,
  })

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/cms/blog/${id}`)
      const data = await response.json()
      if (data.post) {
        setForm({
          title: data.post.title || '',
          excerpt: data.post.excerpt || '',
          content: data.post.content || '',
          linkedin_url: data.post.linkedin_url || '',
          published_date: data.post.published_date || '',
          image: data.post.image || '',
          image_alt: data.post.image_alt || '',
          author: data.post.author || 'Louie Bernstein',
          tags: Array.isArray(data.post.tags) ? data.post.tags.join(', ') : '',
          is_featured: data.post.is_featured || false,
        })
      }
    } catch (error) {
      console.error('Failed to fetch post:', error)
    } finally {
      setLoading(false)
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

      const response = await fetch(`/api/cms/blog/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tags: tagsArray,
        }),
      })

      if (!response.ok) throw new Error('Failed to update post')
      router.push('/cms/blog')
    } catch (err) {
      setError('Failed to update post.')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const handleImageChange = (url: string | null) => {
    setForm({ ...form, image: url || '' })
  }

  const handleAltTextGenerated = (altText: string) => {
    setForm({ ...form, image_alt: altText })
  }

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
          <Link href="/cms/blog" className="edit-page__back">← Back to Blog</Link>
          <h1 className="edit-page__title">Edit Blog Post</h1>
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
          <label className="form-label">Featured Image</label>
          <ImageUploader
            value={form.image}
            onChange={handleImageChange}
            folder="blog"
            showAltTextButton={true}
            onAltTextGenerated={handleAltTextGenerated}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Image Alt Text</label>
          <input
            type="text"
            className="form-input"
            value={form.image_alt}
            onChange={(e) => setForm({ ...form, image_alt: e.target.value })}
            placeholder="Descriptive text for image accessibility"
          />
        </div>

        <div className="edit-form__row">
          <div className="form-group">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-input"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>
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

        <div className="form-group">
          <label className="form-label">Tags</label>
          <input
            type="text"
            className="form-input"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="leadership, strategy, sales (comma separated)"
          />
          <p style={{ fontSize: '0.875rem', color: '#737373', marginTop: '0.25rem' }}>
            Separate multiple tags with commas
          </p>
        </div>

        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={form.is_featured}
              onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
              style={{ width: '18px', height: '18px' }}
            />
            Featured Post
          </label>
          <p style={{ fontSize: '0.875rem', color: '#737373', marginTop: '0.25rem' }}>
            Featured posts appear prominently on the blog page
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn--secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn--primary" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}
