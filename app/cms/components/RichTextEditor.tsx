'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
  minHeight?: number
}

const SITE_PAGES = [
  { label: 'Home', url: '/' },
  { label: 'Blog', url: '/blog' },
  { label: 'Articles', url: '/articles' },
  { label: 'Videos', url: '/videos' },
  { label: 'Tools', url: '/tools' },
  { label: 'Newsletter', url: '/newsletter' },
  { label: 'How It Works', url: '/#process' },
  { label: 'Contact', url: '/#contact' },
  { label: 'Schedule a Call ↗', url: 'https://calendly.com/louiebernstein/30minutes' },
]

const FONTS = [
  { label: 'Default (Outfit)', value: '' },
  { label: 'Georgia (Serif)', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: 'Times New Roman, serif' },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Courier New (Mono)', value: 'Courier New, monospace' },
]

/** Strip color, background-color, and font-family from pasted HTML so external
 *  formatting (e.g. LinkedIn red text) never bleeds into the editor. */
function sanitizePastedHtml(html: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  // Unwrap <font> tags — keep their children, lose the tag
  doc.querySelectorAll('font').forEach(el => {
    const frag = document.createDocumentFragment()
    while (el.firstChild) frag.appendChild(el.firstChild)
    el.parentNode?.replaceChild(frag, el)
  })

  // Strip color / font-family / font-size from inline styles
  doc.querySelectorAll<HTMLElement>('[style]').forEach(el => {
    const cleaned = (el.getAttribute('style') || '')
      .split(';')
      .filter(rule => {
        const prop = rule.split(':')[0].trim().toLowerCase()
        return !['color', 'background-color', 'background', 'font-family', 'font-size', 'mso-font-alt'].includes(prop)
      })
      .join(';')
      .trim()
    cleaned ? el.setAttribute('style', cleaned) : el.removeAttribute('style')
  })

  // Remove class attributes (often carry Word/Google Docs styling)
  doc.querySelectorAll('[class]').forEach(el => el.removeAttribute('class'))

  return doc.body.innerHTML
}

export function RichTextEditor({ value, onChange, minHeight = 320 }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const savedRangeRef = useRef<Range | null>(null)
  const hasInitialized = useRef(false)
  const colorInputRef = useRef<HTMLInputElement>(null)

  const [showDialog, setShowDialog] = useState(false)
  const [dialogUrl, setDialogUrl] = useState('')
  const [dialogText, setDialogText] = useState('')
  const [dialogTarget, setDialogTarget] = useState('_self')
  const [showRemoveLink, setShowRemoveLink] = useState(false)
  const [textColor, setTextColor] = useState('#e5e5e5')
  const urlInputRef = useRef<HTMLInputElement>(null)

  // Initialize editor once when value first arrives (e.g. after post loads from API)
  useEffect(() => {
    if (editorRef.current && value && !hasInitialized.current) {
      editorRef.current.innerHTML = value
      hasInitialized.current = true
    }
  }, [value])

  // Ensure new paragraphs use <p>, not <div>
  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p')
  }, [])

  const emitChange = useCallback(() => {
    if (editorRef.current) onChange(editorRef.current.innerHTML)
  }, [onChange])

  const fmt = useCallback((cmd: string, val?: string) => {
    document.execCommand(cmd, false, val ?? undefined)
    editorRef.current?.focus()
    emitChange()
  }, [emitChange])

  // ── Paste: sanitize incoming HTML to strip colour/font formatting ──────────
  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault()
    const html = e.clipboardData.getData('text/html')
    const text = e.clipboardData.getData('text/plain')
    if (html) {
      document.execCommand('insertHTML', false, sanitizePastedHtml(html))
    } else {
      // Plain-text fallback: preserve line breaks as <br>
      const escaped = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>')
      document.execCommand('insertHTML', false, escaped)
    }
    emitChange()
  }, [emitChange])

  // ── Link helpers ─────────────────────────────────────────────────────────
  const checkLink = useCallback(() => {
    const sel = window.getSelection()
    if (!sel || sel.rangeCount === 0) { setShowRemoveLink(false); return }
    const node = sel.getRangeAt(0).commonAncestorContainer
    const anchor = node.nodeType === 3
      ? (node as Text).parentElement?.closest('a')
      : (node as Element).closest?.('a')
    setShowRemoveLink(!!anchor)
  }, [])

  const openLinkDialog = useCallback(() => {
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) savedRangeRef.current = sel.getRangeAt(0).cloneRange()
    const node = sel && sel.rangeCount > 0 ? sel.getRangeAt(0).commonAncestorContainer : null
    const anchor = node
      ? (node.nodeType === 3
        ? (node as Text).parentElement?.closest('a')
        : (node as Element).closest?.('a'))
      : null
    if (anchor) {
      setDialogUrl(anchor.getAttribute('href') || '')
      setDialogText(anchor.textContent || '')
      setDialogTarget(anchor.getAttribute('target') || '_self')
    } else {
      setDialogUrl('')
      setDialogText(sel?.toString() || '')
      setDialogTarget('_self')
    }
    setShowDialog(true)
    setTimeout(() => urlInputRef.current?.focus(), 50)
  }, [])

  const closeDialog = useCallback(() => {
    setShowDialog(false)
    editorRef.current?.focus()
  }, [])

  const pickPage = useCallback((url: string) => {
    setDialogUrl(url)
    setDialogTarget(url.startsWith('http') && !url.includes('louiebernstein.com') ? '_blank' : '_self')
    urlInputRef.current?.focus()
  }, [])

  function escHtml(s: string) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  const insertLink = useCallback(() => {
    const url = dialogUrl.trim()
    if (!url) { urlInputRef.current?.focus(); return }
    closeDialog()
    editorRef.current?.focus()
    if (savedRangeRef.current) {
      const sel = window.getSelection()
      sel?.removeAllRanges()
      sel?.addRange(savedRangeRef.current)
    }
    const display = dialogText.trim() || (savedRangeRef.current?.toString() || url)
    const rel = dialogTarget === '_blank' ? ' rel="noopener noreferrer"' : ''
    document.execCommand('insertHTML', false, `<a href="${escHtml(url)}" target="${dialogTarget}"${rel}>${escHtml(display)}</a>`)
    savedRangeRef.current = null
    emitChange()
    checkLink()
  }, [dialogUrl, dialogText, dialogTarget, closeDialog, emitChange, checkLink])

  const removeLink = useCallback(() => {
    const sel = window.getSelection()
    if (!sel || sel.rangeCount === 0) return
    const node = sel.getRangeAt(0).commonAncestorContainer
    const anchor = node.nodeType === 3
      ? (node as Text).parentElement?.closest('a')
      : (node as Element).closest?.('a')
    if (anchor) {
      anchor.parentNode?.replaceChild(document.createTextNode(anchor.textContent || ''), anchor)
      emitChange()
      setShowRemoveLink(false)
    }
  }, [emitChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault()
      openLinkDialog()
    }
  }, [openLinkDialog])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && showDialog) closeDialog() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [showDialog, closeDialog])

  // ── Shared styles ─────────────────────────────────────────────────────────
  const tbBtnBase: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    minWidth: 30, height: 30, border: 'none', background: 'transparent',
    borderRadius: 5, cursor: 'pointer', fontSize: 13, fontWeight: 600,
    color: '#d4d4d4', padding: '0 8px', gap: 4,
  }
  const dividerStyle: React.CSSProperties = {
    display: 'flex', gap: 2, paddingRight: 8,
    borderRight: '1px solid #404040', marginRight: 4, alignItems: 'center',
  }
  const selectStyle: React.CSSProperties = {
    height: 30, background: '#1a1a1a', border: '1px solid #404040',
    borderRadius: 5, color: '#d4d4d4', fontSize: 12, padding: '0 6px',
    cursor: 'pointer', outline: 'none', fontFamily: 'inherit',
  }

  return (
    <div style={{ border: '1px solid #404040', borderRadius: 8, overflow: 'visible', background: '#1a1a1a' }}>

      {/* ── Toolbar ── */}
      <div style={{
        background: '#111', borderBottom: '1px solid #404040', borderRadius: '8px 8px 0 0',
        padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', rowGap: 6,
      }}>

        {/* Font family */}
        <div style={dividerStyle}>
          <select
            title="Font family"
            style={selectStyle}
            defaultValue=""
            onChange={e => { if (e.target.value) fmt('fontName', e.target.value); else fmt('removeFormat'); editorRef.current?.focus() }}
          >
            {FONTS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
          </select>
        </div>

        {/* Bold / Italic / Underline / Strikethrough */}
        <div style={dividerStyle}>
          {([
            { title: 'Bold (Ctrl+B)', cmd: 'bold', label: <b>B</b> },
            { title: 'Italic (Ctrl+I)', cmd: 'italic', label: <i>I</i> },
            { title: 'Underline (Ctrl+U)', cmd: 'underline', label: <u>U</u> },
            { title: 'Strikethrough', cmd: 'strikeThrough', label: <s>S</s> },
          ] as const).map(({ title, cmd, label }) => (
            <button key={cmd} type="button" title={title} onClick={() => fmt(cmd)} style={tbBtnBase}
              onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >{label}</button>
          ))}
        </div>

        {/* Text colour */}
        <div style={dividerStyle}>
          <label
            title="Text colour"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer', height: 30, padding: '0 8px', borderRadius: 5, fontSize: 12, fontWeight: 600, color: '#d4d4d4' }}
            onMouseEnter={e => ((e.currentTarget as HTMLLabelElement).style.background = '#262626')}
            onMouseLeave={e => ((e.currentTarget as HTMLLabelElement).style.background = 'transparent')}
          >
            {/* "A" with colour swatch underline */}
            <span style={{ position: 'relative', lineHeight: 1 }}>
              <b style={{ fontSize: 14 }}>A</b>
              <span style={{ display: 'block', height: 3, borderRadius: 2, background: textColor, marginTop: 1 }} />
            </span>
            <input
              ref={colorInputRef}
              type="color"
              value={textColor}
              onChange={e => {
                setTextColor(e.target.value)
                fmt('foreColor', e.target.value)
              }}
              style={{ width: 0, height: 0, opacity: 0, position: 'absolute', pointerEvents: 'none' }}
              tabIndex={-1}
            />
          </label>
          {/* Reset to default colour */}
          <button
            type="button"
            title="Reset text colour to default"
            onClick={() => { setTextColor('#e5e5e5'); fmt('foreColor', 'inherit') }}
            style={{ ...tbBtnBase, fontSize: 11, color: '#a3a3a3' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >Reset</button>
        </div>

        {/* Headings */}
        <div style={dividerStyle}>
          {(['h1', 'h2', 'h3', 'p'] as const).map(tag => (
            <button key={tag} type="button" title={tag === 'p' ? 'Paragraph' : `Heading ${tag[1]}`}
              onClick={() => fmt('formatBlock', tag)} style={tbBtnBase}
              onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >{tag === 'p' ? 'P' : tag.toUpperCase()}</button>
          ))}
        </div>

        {/* Lists */}
        <div style={dividerStyle}>
          <button type="button" title="Bullet list" onClick={() => fmt('insertUnorderedList')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <circle cx="4" cy="6" r="2"/><rect x="9" y="5" width="12" height="2" rx="1"/>
              <circle cx="4" cy="12" r="2"/><rect x="9" y="11" width="12" height="2" rx="1"/>
              <circle cx="4" cy="18" r="2"/><rect x="9" y="17" width="12" height="2" rx="1"/>
            </svg>
          </button>
          <button type="button" title="Numbered list" onClick={() => fmt('insertOrderedList')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <text x="2" y="8" style={{ fontSize: 9, fill: 'currentColor', stroke: 'none' }}>1.</text><line x1="9" y1="6" x2="20" y2="6"/>
              <text x="2" y="14" style={{ fontSize: 9, fill: 'currentColor', stroke: 'none' }}>2.</text><line x1="9" y1="12" x2="20" y2="12"/>
              <text x="2" y="20" style={{ fontSize: 9, fill: 'currentColor', stroke: 'none' }}>3.</text><line x1="9" y1="18" x2="20" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Insert / Remove Link */}
        <div style={dividerStyle}>
          <button type="button" onClick={openLinkDialog} title="Insert / Edit Hyperlink (Ctrl+K)"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 30, padding: '0 10px', background: 'transparent', border: '1px solid #3b82f6', borderRadius: 5, cursor: 'pointer', fontSize: 12, fontWeight: 600, color: '#3b82f6' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1d3461')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            Insert Link
          </button>
          {showRemoveLink && (
            <button type="button" onClick={removeLink} title="Remove hyperlink"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 30, padding: '0 10px', background: 'transparent', border: '1px solid #ef4444', borderRadius: 5, cursor: 'pointer', fontSize: 12, fontWeight: 600, color: '#ef4444' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3b1212')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >Remove Link</button>
          )}
        </div>

        {/* Clear all formatting */}
        <div style={dividerStyle}>
          <button type="button" title="Clear all formatting from selected text"
            onClick={() => { fmt('removeFormat'); setTextColor('#e5e5e5') }}
            style={{ ...tbBtnBase, fontSize: 11, color: '#a3a3a3', border: '1px solid #404040', borderRadius: 5 }}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >✕ Clear Format</button>
        </div>

        {/* Undo / Redo */}
        <div style={{ display: 'flex', gap: 2 }}>
          <button type="button" title="Undo (Ctrl+Z)" onClick={() => fmt('undo')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >↩</button>
          <button type="button" title="Redo (Ctrl+Y)" onClick={() => fmt('redo')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >↪</button>
        </div>
      </div>

      {/* ── Editable area ── */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        spellCheck
        onInput={emitChange}
        onKeyUp={checkLink}
        onMouseUp={checkLink}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        className="rte-content"
        data-placeholder="Start typing your content here…"
        style={{ minHeight, padding: '20px 24px', outline: 'none', fontSize: 15, lineHeight: 1.7, color: '#e5e5e5', background: '#1a1a1a', borderRadius: '0 0 8px 8px' }}
      />

      {/* ── Link Dialog ── */}
      {showDialog && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) closeDialog() }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ background: '#1a1a1a', border: '1px solid #404040', borderRadius: 12, width: 500, maxWidth: '95vw', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', overflow: 'hidden' }}>
            <div style={{ background: '#111', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #404040' }}>
              <span style={{ fontWeight: 600, color: '#f5f5f5', fontSize: 15 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                Insert Hyperlink
              </span>
              <button type="button" onClick={closeDialog} style={{ background: 'none', border: 'none', color: '#a3a3a3', cursor: 'pointer', fontSize: 22, lineHeight: 1, padding: 0 }}>×</button>
            </div>

            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#a3a3a3', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Quick-pick a page on louiebernstein.com
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {SITE_PAGES.map(p => (
                    <button key={p.url} type="button" onClick={() => pickPage(p.url)}
                      style={{ background: '#262626', color: '#3b82f6', border: '1px solid #404040', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#1d3461')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#262626')}
                    >{p.label}</button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#d4d4d4', marginBottom: 5 }}>URL <span style={{ color: '#ef4444' }}>*</span></label>
                <input ref={urlInputRef} type="url" value={dialogUrl} onChange={e => setDialogUrl(e.target.value)} onKeyDown={e => e.key === 'Enter' && insertLink()}
                  placeholder="https://louiebernstein.com/blog"
                  style={{ width: '100%', background: '#262626', border: '1px solid #404040', borderRadius: 6, padding: '9px 12px', fontSize: 14, color: '#e5e5e5', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#d4d4d4', marginBottom: 5 }}>Link text (what the visitor clicks)</label>
                <input type="text" value={dialogText} onChange={e => setDialogText(e.target.value)} onKeyDown={e => e.key === 'Enter' && insertLink()}
                  placeholder="Leave blank to use selected text"
                  style={{ width: '100%', background: '#262626', border: '1px solid #404040', borderRadius: 6, padding: '9px 12px', fontSize: 14, color: '#e5e5e5', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#d4d4d4', marginBottom: 5 }}>Open link in</label>
                <select value={dialogTarget} onChange={e => setDialogTarget(e.target.value)}
                  style={{ width: '100%', background: '#262626', border: '1px solid #404040', borderRadius: 6, padding: '9px 12px', fontSize: 14, color: '#e5e5e5', outline: 'none', fontFamily: 'inherit' }}>
                  <option value="_self">Same tab (recommended for internal pages)</option>
                  <option value="_blank">New tab (recommended for external sites)</option>
                </select>
              </div>
            </div>

            <div style={{ padding: '14px 20px', borderTop: '1px solid #404040', display: 'flex', gap: 10, justifyContent: 'flex-end', background: '#111' }}>
              <button type="button" onClick={closeDialog}
                style={{ background: 'transparent', border: '1px solid #404040', borderRadius: 6, padding: '8px 16px', fontSize: 14, color: '#d4d4d4', cursor: 'pointer', fontFamily: 'inherit' }}>Cancel</button>
              <button type="button" onClick={insertLink}
                style={{ background: '#2563eb', border: 'none', borderRadius: 6, padding: '8px 20px', fontSize: 14, fontWeight: 600, color: 'white', cursor: 'pointer', fontFamily: 'inherit' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
                onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
