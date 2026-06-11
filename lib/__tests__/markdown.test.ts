import { describe, it, expect } from 'vitest'
import { getArticleSlugs, getArticleBySlug, getAllArticles } from '../markdown'

// These tests run against the real content/articles directory (cwd-relative),
// so they assert invariants rather than specific article content.

describe('getArticleBySlug', () => {
  it('returns null for a slug that does not exist', () => {
    expect(getArticleBySlug('this-slug-does-not-exist-xyz-123')).toBeNull()
  })

  it('returns metadata and content for an existing slug', () => {
    const slugs = getArticleSlugs()
    if (slugs.length === 0) return // no articles in repo; nothing to assert
    const article = getArticleBySlug(slugs[0])
    expect(article).not.toBeNull()
    expect(typeof article!.metadata.title).toBe('string')
    expect(article!.metadata.slug).toBe(slugs[0])
    expect(typeof article!.content).toBe('string')
  })
})

describe('getArticleSlugs', () => {
  it('returns slugs without the .md extension', () => {
    for (const slug of getArticleSlugs()) {
      expect(slug.endsWith('.md')).toBe(false)
      expect(slug.length).toBeGreaterThan(0)
    }
  })
})

describe('getAllArticles', () => {
  it('returns articles sorted newest-first by date', () => {
    const articles = getAllArticles()
    for (let i = 1; i < articles.length; i++) {
      const prev = new Date(articles[i - 1].metadata.date).getTime()
      const curr = new Date(articles[i].metadata.date).getTime()
      expect(prev).toBeGreaterThanOrEqual(curr)
    }
  })

  it('every article has author and date defaults applied', () => {
    for (const article of getAllArticles()) {
      expect(article.metadata.author.length).toBeGreaterThan(0)
      expect(article.metadata.date.length).toBeGreaterThan(0)
    }
  })
})
