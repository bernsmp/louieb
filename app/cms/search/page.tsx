'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

interface SearchResult {
  type: string
  label: string
  snippet: string
  editUrl: string
}

const TYPE_COLORS: Record<string, string> = {
  'Page Content': '#3b82f6',
  'FAQ': '#8b5cf6',
  'Testimonial': '#10b981',
  'Blog Post': '#f59e0b',
  'Service': '#06b6d4',
  'Process Step': '#ec4899',
}

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') ?? ''

  const [inputValue, setInputValue] = useState(initialQuery)
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [lastQuery, setLastQuery] = useState('')

  const runSearch = useCallback(async (q: string) => {
    if (!q.trim() || q.trim().length < 2) {
      setResults([])
      setSearched(false)
      return
    }
    setLoading(true)
    setSearched(true)
    setLastQuery(q.trim())
    try {
      const res = await fetch(`/api/cms/search?q=${encodeURIComponent(q.trim())}`)
      const data = await res.json()
      setResults(data.results ?? [])
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (initialQuery) {
      runSearch(initialQuery)
    }
  }, [initialQuery, runSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = inputValue.trim()
    router.replace(`/cms/search?q=${encodeURIComponent(q)}`)
    runSearch(q)
  }

  // Group results by type
  const grouped = results.reduce<Record<string, SearchResult[]>>((acc, r) => {
    if (!acc[r.type]) acc[r.type] = []
    acc[r.type].push(r)
    return acc
  }, {})

  return (
    <div className="admin-content">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="edit-page__title">Search CMS</h1>
        <p className="edit-page__description">Search across all pages, FAQs, testimonials, blog posts, services, and more.</p>
      </div>

      <form onSubmit={handleSubmit} className="cms-search-form">
        <div className="cms-search-input-wrap">
          <svg className="cms-search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <input
            type="text"
            className="form-input cms-search-input"
            placeholder="Search for any word or phrase…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          {inputValue && (
            <button
              type="button"
              className="cms-search-clear"
              onClick={() => {
                setInputValue('')
                setResults([])
                setSearched(false)
                router.replace('/cms/search')
              }}
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </div>
        <button type="submit" className="btn btn--primary">Search</button>
      </form>

      {loading && (
        <p className="cms-search-status">Searching…</p>
      )}

      {!loading && searched && results.length === 0 && (
        <p className="cms-search-status">No results found for <strong>&ldquo;{lastQuery}&rdquo;</strong>.</p>
      )}

      {!loading && results.length > 0 && (
        <>
          <p className="cms-search-count">
            {results.length} result{results.length !== 1 ? 's' : ''} for <strong>&ldquo;{lastQuery}&rdquo;</strong>
          </p>

          {Object.entries(grouped).map(([type, items]) => (
            <div key={type} className="cms-search-group">
              <h2 className="cms-search-group-title" style={{ color: TYPE_COLORS[type] ?? '#a3a3a3' }}>
                {type} <span className="cms-search-group-count">({items.length})</span>
              </h2>
              <div className="cms-search-results">
                {items.map((item, i) => (
                  <Link key={i} href={item.editUrl} className="cms-search-result">
                    <div className="cms-search-result__label">{item.label}</div>
                    <div className="cms-search-result__snippet">{item.snippet}</div>
                    <div className="cms-search-result__url">{item.editUrl} →</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  )
}
