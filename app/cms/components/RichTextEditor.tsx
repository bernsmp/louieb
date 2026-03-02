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

export function RichTextEditor({ value, onChange, minHeight = 320 }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const savedRangeRef = useRef<Range | null>(null)
  const hasInitialized = useRef(false)
  const [showDialog, setShowDialog] = useState(false)
  const [dialogUrl, setDialogUrl] = useState('')
  const [dialogText, setDialogText] = useState('')
  const [dialogTarget, setDialogTarget] = useState('_self')
  const [showRemoveLink, setShowRemoveLink] = useState(false)
  const urlInputRef = useRef<HTMLInputElement>(null)

  // Initialize editor once when value first arrives (e.g. after post loads from API)
  useEffect(() => {
    if (editorRef.current && value && !hasInitialized.current) {
      editorRef.current.innerHTML = value
      hasInitialized.current = true
    }
  }, [value])

  // Ensure paragraphs are wrapped in <p> tags, not <div>
  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p')
  }, [])

  const emitChange = useCallback(() => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }, [onChange])

  const fmt = useCallback((cmd: string, val?: string) => {
    document.execCommand(cmd, false, val ?? undefined)
    editorRef.current?.focus()
    emitChange()
  }, [emitChange])

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
    if (sel && sel.rangeCount > 0) {
      savedRangeRef.current = sel.getRangeAt(0).cloneRange()
    }
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
    const html = `<a href="${escHtml(url)}" target="${dialogTarget}"${rel}>${escHtml(display)}</a>`
    document.execCommand('insertHTML', false, html)
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
      const text = document.createTextNode(anchor.textContent || '')
      anchor.parentNode?.replaceChild(text, anchor)
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

  // Escape closes dialog
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDialog) closeDialog()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [showDialog, closeDialog])

  const tbBtnBase: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 30,
    height: 30,
    border: 'none',
    background: 'transparent',
    borderRadius: 5,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
    color: '#d4d4d4',
    padding: '0 8px',
    gap: 4,
  }

  const dividerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 2,
    paddingRight: 8,
    borderRight: '1px solid #404040',
    marginRight: 4,
    alignItems: 'center',
  }

  return (
    <div style={{ border: '1px solid #404040', borderRadius: 8, overflow: 'visible', background: '#1a1a1a' }}>
      {/* Toolbar */}
      <div style={{
        background: '#111',
        borderBottom: '1px solid #404040',
        borderRadius: '8px 8px 0 0',
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
      }}>
        {/* Format */}
        <div style={dividerStyle}>
          {[
            { title: 'Bold (Ctrl+B)', cmd: 'bold', label: <b>B</b> },
            { title: 'Italic (Ctrl+I)', cmd: 'italic', label: <i>I</i> },
            { title: 'Underline (Ctrl+U)', cmd: 'underline', label: <u>U</u> },
            { title: 'Strikethrough', cmd: 'strikeThrough', label: <s>S</s> },
          ].map(({ title, cmd, label }) => (
            <button key={cmd} type="button" title={title} onClick={() => fmt(cmd)} style={tbBtnBase}
              onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >{label}</button>
          ))}
        </div>

        {/* Headings */}
        <div style={dividerStyle}>
          {[
            { title: 'Heading 1', val: 'h1', label: 'H1' },
            { title: 'Heading 2', val: 'h2', label: 'H2' },
            { title: 'Heading 3', val: 'h3', label: 'H3' },
            { title: 'Paragraph', val: 'p', label: 'P' },
          ].map(({ title, val, label }) => (
            <button key={val} type="button" title={title} onClick={() => fmt('formatBlock', val)} style={tbBtnBase}
              onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >{label}</button>
          ))}
        </div>

        {/* Lists */}
        <div style={dividerStyle}>
          <button type="button" title="Bullet list" onClick={() => fmt('insertUnorderedList')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><circle cx="4" cy="6" r="2"/><rect x="9" y="5" width="12" height="2" rx="1"/><circle cx="4" cy="12" r="2"/><rect x="9" y="11" width="12" height="2" rx="1"/><circle cx="4" cy="18" r="2"/><rect x="9" y="17" width="12" height="2" rx="1"/></svg>
          </button>
          <button type="button" title="Numbered list" onClick={() => fmt('insertOrderedList')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><text x="2" y="8" style={{ fontSize: 9, fill: 'currentColor', stroke: 'none' }}>1.</text><line x1="9" y1="6" x2="20" y2="6"/><text x="2" y="14" style={{ fontSize: 9, fill: 'currentColor', stroke: 'none' }}>2.</text><line x1="9" y1="12" x2="20" y2="12"/><text x="2" y="20" style={{ fontSize: 9, fill: 'currentColor', stroke: 'none' }}>3.</text><line x1="9" y1="18" x2="20" y2="18"/></svg>
          </button>
        </div>

        {/* Link */}
        <div style={dividerStyle}>
          <button
            type="button"
            onClick={openLinkDialog}
            title="Insert / Edit Hyperlink (Ctrl+K)"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5, height: 30, padding: '0 10px',
              background: 'transparent', border: '1px solid #3b82f6', borderRadius: 5,
              cursor: 'pointer', fontSize: 12, fontWeight: 600, color: '#3b82f6',
            }}
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
            <button
              type="button"
              onClick={removeLink}
              title="Remove hyperlink"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4, height: 30, padding: '0 10px',
                background: 'transparent', border: '1px solid #ef4444', borderRadius: 5,
                cursor: 'pointer', fontSize: 12, fontWeight: 600, color: '#ef4444',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3b1212')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              Remove Link
            </button>
          )}
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

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        spellCheck
        onInput={emitChange}
        onKeyUp={checkLink}
        onMouseUp={checkLink}
        onKeyDown={handleKeyDown}
        className="rte-content"
        data-placeholder="Start typing your content here…"
        style={{ minHeight, padding: '20px 24px', outline: 'none', fontSize: 15, lineHeight: 1.7, color: '#e5e5e5', background: '#1a1a1a', borderRadius: '0 0 8px 8px' }}
      />

      {/* Link Dialog */}
      {showDialog && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) closeDialog() }}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div style={{
            background: '#1a1a1a', border: '1px solid #404040', borderRadius: 12,
            width: 500, maxWidth: '95vw', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', overflow: 'hidden',
          }}>
            {/* Header */}
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

            {/* Body */}
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Quick-pick */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#a3a3a3', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Quick-pick a page on louiebernstein.com
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {SITE_PAGES.map((p) => (
                    <button
                      key={p.url}
                      type="button"
                      onClick={() => pickPage(p.url)}
                      style={{ background: '#262626', color: '#3b82f6', border: '1px solid #404040', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#1d3461')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#262626')}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* URL */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#d4d4d4', marginBottom: 5 }}>
                  URL <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  ref={urlInputRef}
                  type="url"
                  value={dialogUrl}
                  onChange={(e) => setDialogUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && insertLink()}
                  placeholder="https://louiebernstein.com/blog"
                  style={{ width: '100%', background: '#262626', border: '1px solid #404040', borderRadius: 6, padding: '9px 12px', fontSize: 14, color: '#e5e5e5', outline: 'none', fontFamily: 'inherit' }}
                />
              </div>

              {/* Link text */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#d4d4d4', marginBottom: 5 }}>Link text (what the visitor clicks)</label>
                <input
                  type="text"
                  value={dialogText}
                  onChange={(e) => setDialogText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && insertLink()}
                  placeholder="Leave blank to use selected text"
                  style={{ width: '100%', background: '#262626', border: '1px solid #404040', borderRadius: 6, padding: '9px 12px', fontSize: 14, color: '#e5e5e5', outline: 'none', fontFamily: 'inherit' }}
                />
              </div>

              {/* Target */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#d4d4d4', marginBottom: 5 }}>Open link in</label>
                <select
                  value={dialogTarget}
                  onChange={(e) => setDialogTarget(e.target.value)}
                  style={{ width: '100%', background: '#262626', border: '1px solid #404040', borderRadius: 6, padding: '9px 12px', fontSize: 14, color: '#e5e5e5', outline: 'none', fontFamily: 'inherit' }}
                >
                  <option value="_self">Same tab (recommended for internal pages)</option>
                  <option value="_blank">New tab (recommended for external sites)</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: '14px 20px', borderTop: '1px solid #404040', display: 'flex', gap: 10, justifyContent: 'flex-end', background: '#111' }}>
              <button
                type="button" onClick={closeDialog}
                style={{ background: 'transparent', border: '1px solid #404040', borderRadius: 6, padding: '8px 16px', fontSize: 14, color: '#d4d4d4', cursor: 'pointer', fontFamily: 'inherit' }}
              >Cancel</button>
              <button
                type="button" onClick={insertLink}
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
