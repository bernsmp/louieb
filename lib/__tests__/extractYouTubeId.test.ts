import { describe, it, expect } from 'vitest'
import { extractYouTubeId } from '../cms'

const ID = 'dQw4w9WgXcQ'

describe('extractYouTubeId', () => {
  it('returns a bare 11-char ID unchanged', () => {
    expect(extractYouTubeId(ID)).toBe(ID)
  })

  it('trims whitespace around a bare ID', () => {
    expect(extractYouTubeId(`  ${ID}  `)).toBe(ID)
  })

  it('extracts from a watch URL', () => {
    expect(extractYouTubeId(`https://www.youtube.com/watch?v=${ID}`)).toBe(ID)
  })

  it('extracts from a watch URL with extra params', () => {
    expect(extractYouTubeId(`https://www.youtube.com/watch?v=${ID}&t=10s`)).toBe(ID)
  })

  it('extracts from a youtu.be short link', () => {
    expect(extractYouTubeId(`https://youtu.be/${ID}`)).toBe(ID)
  })

  it('extracts from a youtu.be link with query string', () => {
    expect(extractYouTubeId(`https://youtu.be/${ID}?si=abcdef`)).toBe(ID)
  })

  it('extracts from a shorts URL', () => {
    expect(extractYouTubeId(`https://www.youtube.com/shorts/${ID}`)).toBe(ID)
  })

  it('extracts from an embed URL', () => {
    expect(extractYouTubeId(`https://www.youtube.com/embed/${ID}`)).toBe(ID)
  })

  it('returns non-URL garbage as-is (trimmed)', () => {
    expect(extractYouTubeId(' not a url ')).toBe('not a url')
  })

  it('returns empty string for empty input', () => {
    expect(extractYouTubeId('')).toBe('')
  })
})
