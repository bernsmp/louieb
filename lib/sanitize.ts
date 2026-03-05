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
    // Remove <script> tags entirely
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove <style> tags (can hide content or override layout)
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    // Remove all event handler attributes (onclick, onerror, onload, onmouseover, etc.)
    .replace(/\s+on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\s+on\w+\s*=\s*'[^']*'/gi, '')
    .replace(/\s+on\w+\s*=[^\s>]*/gi, '')
    // Block javascript: protocol in href / src / action / formaction
    .replace(/(href|src|action|formaction)\s*=\s*"?\s*javascript\s*:[^"'>]*/gi, '$1="#"')
    // Block data: URIs in src (can embed executable content)
    .replace(/(src)\s*=\s*"?\s*data\s*:[^"'>]*/gi, '$1=""')
}
