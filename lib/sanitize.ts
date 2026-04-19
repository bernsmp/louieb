/**
 * Sanitizes HTML to remove XSS vectors while preserving
 * legitimate formatting tags produced by the CMS rich text editor.
 *
 * Works in both Node.js (server components) and browser (client components).
 * No external dependencies required.
 */
export function sanitizeHtml(html: string | undefined | null): string {
  if (!html) return ''

  return html
    // Remove dangerous tags entirely (including their content)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^>]*\/?>/gi, '')
    .replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, '')
    // Remove all event handler attributes (onclick, onerror, onload, onmouseover, etc.)
    .replace(/\s+on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\s+on\w+\s*=\s*'[^']*'/gi, '')
    .replace(/\s+on\w+\s*=[^\s>]*/gi, '')
    // Block javascript: protocol in href / src / action / formaction
    .replace(/(href|src|action|formaction)\s*=\s*"?\s*javascript\s*:[^"'>]*/gi, '$1="#"')
    // Block data: URIs in src (can embed executable content)
    .replace(/(src)\s*=\s*"?\s*data\s*:[^"'>]*/gi, '$1=""')
}
