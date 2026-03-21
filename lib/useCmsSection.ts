'use client'

import { useState, useEffect } from 'react'

export function useCmsSection(section: string) {
  const [c, setC] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch(`/api/cms/section/${section}`)
      .then((r) => r.json())
      .then((d) => { if (d?.content) setC(d.content as Record<string, string>) })
      .catch(() => {})
  }, [section])

  const v = (key: string, def: string): string => c[key] || def

  const cmsfaqs = (count: number, defaults: Array<{ q: string; a: string }>) => {
    const list: Array<{ q: string; a: string }> = []
    for (let i = 1; i <= count; i++) {
      const q = c[`faq${i}Question`]
      const a = c[`faq${i}Answer`]
      if (q && a) list.push({ q, a })
    }
    return list.length > 0 ? list : defaults
  }

  return { v, cmsfaqs }
}
