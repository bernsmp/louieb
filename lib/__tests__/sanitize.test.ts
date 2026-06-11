import { describe, it, expect } from 'vitest'
import { sanitizeHtml } from '../sanitize'

describe('sanitizeHtml', () => {
  it('returns empty string for null/undefined/empty input', () => {
    expect(sanitizeHtml(null)).toBe('')
    expect(sanitizeHtml(undefined)).toBe('')
    expect(sanitizeHtml('')).toBe('')
  })

  it('preserves legitimate formatting tags', () => {
    const html = '<p><strong>Bold</strong> and <em>italic</em> text</p>'
    expect(sanitizeHtml(html)).toBe(html)
  })

  it('removes script tags and their contents', () => {
    const out = sanitizeHtml('<p>hi</p><script>alert(1)</script><p>bye</p>')
    expect(out).toBe('<p>hi</p><p>bye</p>')
  })

  it('removes style tags and their contents', () => {
    const out = sanitizeHtml('<p>hi</p><style>body{display:none}</style>')
    expect(out).toBe('<p>hi</p>')
  })

  it('strips double-quoted event handler attributes', () => {
    const out = sanitizeHtml('<img src="x.png" onclick="evil()">')
    expect(out).not.toContain('onclick')
    expect(out).toContain('src="x.png"')
  })

  it('strips single-quoted event handler attributes', () => {
    const out = sanitizeHtml("<img src='x.png' onerror='evil()'>")
    expect(out).not.toContain('onerror')
  })

  it('strips unquoted event handler attributes', () => {
    const out = sanitizeHtml('<img src=x onerror=alert(1)>')
    expect(out).not.toContain('onerror')
  })

  it('neutralizes javascript: URLs in href', () => {
    const out = sanitizeHtml('<a href="javascript:alert(1)">x</a>')
    expect(out).not.toContain('javascript:')
    expect(out).toContain('href="#"')
  })

  it('neutralizes javascript: URLs with whitespace tricks', () => {
    const out = sanitizeHtml('<a href=" javascript :alert(1)">x</a>')
    expect(out).not.toMatch(/javascript\s*:/)
  })

  it('blocks data: URIs in src', () => {
    const out = sanitizeHtml('<img src="data:text/html;base64,PHNjcmlwdD4=">')
    expect(out).not.toContain('data:')
  })
})
