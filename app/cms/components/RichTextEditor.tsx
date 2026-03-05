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

// 10 colour columns × 6 shade rows (darkest → lightest, top → bottom)
const THEME_COLORS: string[][] = [
  ['#000000', '#404040', '#595959', '#808080', '#BFBFBF', '#F2F2F2'],  // Grayscale
  ['#1F3864', '#2F5496', '#4472C4', '#8FAADC', '#B4C6E7', '#DAE3F3'],  // Blue
  ['#1F497D', '#1F75B5', '#2E9BD5', '#9DC3E6', '#BDD7EE', '#DEEAF1'],  // Sky blue
  ['#843C0C', '#BE4B03', '#E36C0A', '#FAB57F', '#FCD5B0', '#FDEADA'],  // Brown/orange
  ['#7F6000', '#BF8F00', '#FFC000', '#FFD966', '#FFE699', '#FFF2CC'],  // Gold/yellow
  ['#375623', '#537D33', '#70AD47', '#A9D18E', '#C6E0B4', '#E2EFDA'],  // Green
  ['#1E4D2B', '#2E7345', '#3EA861', '#7DC99B', '#AADCBF', '#D5F0E3'],  // Teal green
  ['#0D4E6E', '#0E6B96', '#0E9ECB', '#6DC0DA', '#A2D6E8', '#D3EEF5'],  // Teal blue
  ['#1F3864', '#203FA8', '#4A86E8', '#7BAED4', '#9FC5EB', '#D6E4F4'],  // Royal blue
  ['#3A0F60', '#5C1F8A', '#7030A0', '#B47FDB', '#D4AEE9', '#ECDAF5'],  // Purple
]

const STANDARD_COLORS = [
  '#C00000', '#FF0000', '#FF6600', '#FFC000', '#FFFF00',
  '#00B050', '#00CCCC', '#00B0F0', '#0070C0', '#7030A0',
]

/** Strip colour, font-family, font-size from pasted HTML */
function sanitizePastedHtml(html: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  doc.querySelectorAll('font').forEach(el => {
    const frag = document.createDocumentFragment()
    while (el.firstChild) frag.appendChild(el.firstChild)
    el.parentNode?.replaceChild(frag, el)
  })
  doc.querySelectorAll<HTMLElement>('[style]').forEach(el => {
    const cleaned = (el.getAttribute('style') || '')
      .split(';')
      .filter(rule => {
        const prop = rule.split(':')[0].trim().toLowerCase()
        return !['color', 'background-color', 'background', 'font-family', 'font-size', 'mso-font-alt'].includes(prop)
      })
      .join(';').trim()
    cleaned ? el.setAttribute('style', cleaned) : el.removeAttribute('style')
  })
  doc.querySelectorAll('[class]').forEach(el => el.removeAttribute('class'))
  return doc.body.innerHTML
}

export function RichTextEditor({ value, onChange, minHeight = 320 }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const savedRangeRef = useRef<Range | null>(null)
  const savedColorRangeRef = useRef<Range | null>(null)
  const hasInitialized = useRef(false)
  // Tracks the last HTML we emitted via onChange — lets us detect external value
  // changes (AI suggestions, parent undo/redo) vs. round-trips of our own edits.
  const lastEmittedRef = useRef<string>('')
  const colorPickerRef = useRef<HTMLDivElement>(null)
  const customColorRef = useRef<HTMLInputElement>(null)

  const [showDialog, setShowDialog] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [dialogUrl, setDialogUrl] = useState('')
  const [dialogText, setDialogText] = useState('')
  const [dialogTarget, setDialogTarget] = useState('_self')
  const [showRemoveLink, setShowRemoveLink] = useState(false)
  const [textColor, setTextColor] = useState('#e5e5e5')
  const urlInputRef = useRef<HTMLInputElement>(null)

  // Sync editor with value prop:
  // • First non-empty value  → initial load from API
  // • value ≠ lastEmitted    → external change (AI suggestion, parent undo/redo) → overwrite
  // • value === lastEmitted  → our own onChange round-trip → ignore (no cursor jump)
  useEffect(() => {
    if (!editorRef.current) return
    if (!hasInitialized.current) {
      if (value) {
        editorRef.current.innerHTML = value
        lastEmittedRef.current = value
        hasInitialized.current = true
      }
      return
    }
    if (value !== lastEmittedRef.current) {
      editorRef.current.innerHTML = value
      lastEmittedRef.current = value
    }
  }, [value])

  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p')
  }, [])

  // Close colour picker on outside click
  useEffect(() => {
    if (!showColorPicker) return
    const handler = (e: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target as Node)) {
        setShowColorPicker(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showColorPicker])

  const emitChange = useCallback(() => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML
      lastEmittedRef.current = html
      onChange(html)
    }
  }, [onChange])

  const fmt = useCallback((cmd: string, val?: string) => {
    editorRef.current?.focus()
    document.execCommand(cmd, false, val ?? undefined)
    emitChange()
  }, [emitChange])

  // Save selection before opening colour picker (clicking the button blurs the editor)
  const openColorPicker = useCallback(() => {
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) {
      savedColorRangeRef.current = sel.getRangeAt(0).cloneRange()
    }
    setShowColorPicker(p => !p)
  }, [])

  // Restore selection then apply colour
  const applyColor = useCallback((color: string) => {
    setTextColor(color)
    editorRef.current?.focus()
    if (savedColorRangeRef.current) {
      const sel = window.getSelection()
      sel?.removeAllRanges()
      sel?.addRange(savedColorRangeRef.current)
    }
    document.execCommand('foreColor', false, color)
    emitChange()
    setShowColorPicker(false)
  }, [emitChange])

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault()
    const html = e.clipboardData.getData('text/html')
    const text = e.clipboardData.getData('text/plain')
    if (html) {
      document.execCommand('insertHTML', false, sanitizePastedHtml(html))
    } else {
      const escaped = text
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>')
      document.execCommand('insertHTML', false, escaped)
    }
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
    if (/^javascript\s*:/i.test(url)) { urlInputRef.current?.focus(); return }
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
    // Stop Ctrl+Z / Ctrl+Y bubbling to any parent undo/redo (e.g. SectionEditor).
    // The browser handles native undo/redo within contenteditable natively.
    if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'y' || (e.shiftKey && e.key === 'Z'))) {
      e.stopPropagation()
    }
  }, [openLinkDialog])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && showDialog) closeDialog() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [showDialog, closeDialog])

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
          <select title="Font family" style={selectStyle} defaultValue=""
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

        {/* ── Text colour picker ── */}
        <div style={{ ...dividerStyle, position: 'relative' }} ref={colorPickerRef}>
          <button
            type="button"
            title="Text colour"
            onClick={openColorPicker}
            style={{ ...tbBtnBase, flexDirection: 'column', gap: 1, minWidth: 34, padding: '0 6px' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <b style={{ fontSize: 14, lineHeight: 1 }}>A</b>
            <span style={{ display: 'block', width: 18, height: 4, borderRadius: 2, background: textColor }} />
          </button>

          {showColorPicker && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 9999,
              background: '#1a1a1a', border: '1px solid #525252', borderRadius: 8,
              padding: '10px 12px', boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
              minWidth: 248,
            }}>
              {/* Theme colours grid */}
              <div style={{ fontSize: 11, color: '#a3a3a3', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Theme Colors</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {Array.from({ length: 6 }, (_, rowIdx) => (
                  <div key={rowIdx} style={{ display: 'flex', gap: 2 }}>
                    {THEME_COLORS.map((col, colIdx) => (
                      <button
                        key={colIdx}
                        type="button"
                        title={col[rowIdx]}
                        onClick={() => applyColor(col[rowIdx])}
                        style={{
                          width: 20, height: 20, padding: 0, cursor: 'pointer',
                          background: col[rowIdx], borderRadius: 2,
                          border: textColor === col[rowIdx] ? '2px solid #3b82f6' : '1px solid rgba(255,255,255,0.15)',
                          transition: 'transform 0.1s',
                          flexShrink: 0,
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.25)'; (e.currentTarget as HTMLButtonElement).style.zIndex = '2'; (e.currentTarget as HTMLButtonElement).style.position = 'relative' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLButtonElement).style.zIndex = 'auto' }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Standard colours row */}
              <div style={{ fontSize: 11, color: '#a3a3a3', margin: '10px 0 6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Standard Colors</div>
              <div style={{ display: 'flex', gap: 2 }}>
                {STANDARD_COLORS.map((color, i) => (
                  <button
                    key={i}
                    type="button"
                    title={color}
                    onClick={() => applyColor(color)}
                    style={{
                      width: 20, height: 20, padding: 0, cursor: 'pointer',
                      background: color, borderRadius: 2,
                      border: textColor === color ? '2px solid #3b82f6' : '1px solid rgba(255,255,255,0.15)',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.25)'; (e.currentTarget as HTMLButtonElement).style.zIndex = '2'; (e.currentTarget as HTMLButtonElement).style.position = 'relative' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLButtonElement).style.zIndex = 'auto' }}
                  />
                ))}
              </div>

              {/* Footer actions */}
              <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
                <button
                  type="button"
                  onClick={() => { fmt('foreColor', 'inherit'); setTextColor('#e5e5e5'); setShowColorPicker(false) }}
                  style={{ flex: 1, background: 'transparent', border: '1px solid #404040', borderRadius: 5, padding: '5px 0', fontSize: 11, color: '#a3a3a3', cursor: 'pointer', fontFamily: 'inherit' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >Reset Color</button>

                <label
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, background: 'transparent', border: '1px solid #404040', borderRadius: 5, padding: '5px 0', fontSize: 11, color: '#d4d4d4', cursor: 'pointer', position: 'relative' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLLabelElement).style.background = '#262626')}
                  onMouseLeave={e => ((e.currentTarget as HTMLLabelElement).style.background = 'transparent')}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
                  </svg>
                  More Colors…
                  <input
                    ref={customColorRef}
                    type="color"
                    value={textColor === '#e5e5e5' ? '#000000' : textColor}
                    onChange={e => applyColor(e.target.value)}
                    style={{ opacity: 0, position: 'absolute', width: '100%', height: '100%', cursor: 'pointer', top: 0, left: 0 }}
                  />
                </label>
              </div>
            </div>
          )}
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

        {/* Alignment */}
        <div style={dividerStyle}>
          <button type="button" title="Align left" onClick={() => fmt('justifyLeft')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/>
            </svg>
          </button>
          <button type="button" title="Align center" onClick={() => fmt('justifyCenter')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          </button>
          <button type="button" title="Align right" onClick={() => fmt('justifyRight')} style={tbBtnBase}
            onMouseEnter={e => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="6" y1="18" x2="21" y2="18"/>
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
