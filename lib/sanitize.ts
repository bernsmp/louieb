import DOMPurify from 'isomorphic-dompurify'

const ALLOWED_TAGS = ['p', 'br', 'strong', 'em', 'b', 'i', 'ul', 'ol', 'li', 'a', 'h2', 'h3', 'h4', 'span', 'div']
const ALLOWED_ATTR = ['href', 'target', 'rel', 'class']

export function sanitizeHtml(html: string | undefined | null): string {
  if (!html) return ''
  return DOMPurify.sanitize(html, { ALLOWED_TAGS, ALLOWED_ATTR })
}
