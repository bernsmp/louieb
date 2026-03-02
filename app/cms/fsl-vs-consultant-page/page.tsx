'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { RichTextEditor } from '../components/RichTextEditor'

interface ComparisonPoint {
  category: string
  fsl: string
  consultant: string
}

interface FormState {
  // Hero
  heroBadgeText: string
  heroBadgeSubtext: string
  heroDescription: string
  heroCtaPrimary: string
  heroCtaSecondary: string
  // Introduction
  introText: string
  // Comparison table
  comparisonHeadline: string
  comparisonSubheadline: string
  comparisonPoints: ComparisonPoint[]
  // Summary
  summaryHeadline: string
  fslCardBadge: string
  fslCardHeadline: string
  fslCardDescription: string
  fslCardBenefits: string   // newline-separated
  fslCardCtaText: string
  consultantCardBadge: string
  consultantCardHeadline: string
  consultantCardDescription: string
  consultantCardBenefits: string  // newline-separated
  // Final CTA
  finalCtaHeadline: string
  finalCtaDescription: string
  finalCtaPrimary: string
  finalCtaSecondary: string
}

const emptyForm: FormState = {
  heroBadgeText: '',
  heroBadgeSubtext: '',
  heroDescription: '',
  heroCtaPrimary: '',
  heroCtaSecondary: '',
  introText: '',
  comparisonHeadline: '',
  comparisonSubheadline: '',
  comparisonPoints: [],
  summaryHeadline: '',
  fslCardBadge: '',
  fslCardHeadline: '',
  fslCardDescription: '',
  fslCardBenefits: '',
  fslCardCtaText: '',
  consultantCardBadge: '',
  consultantCardHeadline: '',
  consultantCardDescription: '',
  consultantCardBenefits: '',
  finalCtaHeadline: '',
  finalCtaDescription: '',
  finalCtaPrimary: '',
  finalCtaSecondary: '',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dataToForm(d: any): FormState {
  return {
    heroBadgeText: d.hero?.badgeText || '',
    heroBadgeSubtext: d.hero?.badgeSubtext || '',
    heroDescription: d.hero?.description || '',
    heroCtaPrimary: d.hero?.ctaPrimary || '',
    heroCtaSecondary: d.hero?.ctaSecondary || '',
    introText: d.introduction?.text || '',
    comparisonHeadline: d.comparison?.headline || '',
    comparisonSubheadline: d.comparison?.subheadline || '',
    comparisonPoints: Array.isArray(d.comparison?.points) ? d.comparison.points : [],
    summaryHeadline: d.summary?.headline || '',
    fslCardBadge: d.summary?.fslCard?.badge || '',
    fslCardHeadline: d.summary?.fslCard?.headline || '',
    fslCardDescription: d.summary?.fslCard?.description || '',
    fslCardBenefits: Array.isArray(d.summary?.fslCard?.benefits) ? d.summary.fslCard.benefits.join('\n') : '',
    fslCardCtaText: d.summary?.fslCard?.ctaText || '',
    consultantCardBadge: d.summary?.consultantCard?.badge || '',
    consultantCardHeadline: d.summary?.consultantCard?.headline || '',
    consultantCardDescription: d.summary?.consultantCard?.description || '',
    consultantCardBenefits: Array.isArray(d.summary?.consultantCard?.benefits) ? d.summary.consultantCard.benefits.join('\n') : '',
    finalCtaHeadline: d.finalCta?.headline || '',
    finalCtaDescription: d.finalCta?.description || '',
    finalCtaPrimary: d.finalCta?.ctaPrimary || '',
    finalCtaSecondary: d.finalCta?.ctaSecondary || '',
  }
}

function formToContent(form: FormState) {
  return {
    hero: {
      badgeText: form.heroBadgeText,
      badgeSubtext: form.heroBadgeSubtext,
      description: form.heroDescription,
      ctaPrimary: form.heroCtaPrimary,
      ctaSecondary: form.heroCtaSecondary,
    },
    introduction: {
      text: form.introText,
    },
    comparison: {
      headline: form.comparisonHeadline,
      subheadline: form.comparisonSubheadline,
      points: form.comparisonPoints,
    },
    summary: {
      headline: form.summaryHeadline,
      fslCard: {
        badge: form.fslCardBadge,
        headline: form.fslCardHeadline,
        description: form.fslCardDescription,
        benefits: form.fslCardBenefits.split('\n').map(s => s.trim()).filter(Boolean),
        ctaText: form.fslCardCtaText,
      },
      consultantCard: {
        badge: form.consultantCardBadge,
        headline: form.consultantCardHeadline,
        description: form.consultantCardDescription,
        benefits: form.consultantCardBenefits.split('\n').map(s => s.trim()).filter(Boolean),
      },
    },
    finalCta: {
      headline: form.finalCtaHeadline,
      description: form.finalCtaDescription,
      ctaPrimary: form.finalCtaPrimary,
      ctaSecondary: form.finalCtaSecondary,
    },
  }
}

const fieldsetStyle: React.CSSProperties = {
  border: '1px solid #2a2a2a',
  borderRadius: '8px',
  padding: '1.25rem',
  marginBottom: '1.5rem',
}
const legendStyle: React.CSSProperties = {
  padding: '0 0.5rem',
  fontWeight: 600,
  color: '#e5e5e5',
  fontSize: '0.95rem',
}

export default function FslVsConsultantCmsPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [form, setForm] = useState<FormState>(emptyForm)

  useEffect(() => {
    fetch('/api/cms/fsl-vs-consultant')
      .then(res => res.json())
      .then(data => setForm(dataToForm(data)))
      .catch(err => console.error('Failed to load:', err))
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async () => {
    setSaving(true)
    setMessage(null)
    try {
      const res = await fetch('/api/cms/section/fslVsConsultantPage', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: formToContent(form) }),
      })
      if (!res.ok) throw new Error('Save failed')
      setMessage({ type: 'success', text: 'Saved successfully!' })
      setTimeout(() => setMessage(null), 3000)
    } catch {
      setMessage({ type: 'error', text: 'Failed to save. Please try again.' })
    } finally {
      setSaving(false)
    }
  }

  const set = (key: keyof FormState, value: string) => setForm(prev => ({ ...prev, [key]: value }))

  const updatePoint = (index: number, key: keyof ComparisonPoint, value: string) => {
    setForm(prev => ({
      ...prev,
      comparisonPoints: prev.comparisonPoints.map((p, i) =>
        i === index ? { ...p, [key]: value } : p
      ),
    }))
  }

  if (loading) {
    return (
      <div className="edit-form">
        <p style={{ color: '#a3a3a3' }}>Loading…</p>
      </div>
    )
  }

  const SaveBar = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
      <Link href="/cms" className="btn btn--secondary">← Back to Dashboard</Link>
      <button className="btn btn--primary" onClick={handleSave} disabled={saving}>
        {saving ? 'Saving…' : 'Save Changes'}
      </button>
    </div>
  )

  return (
    <div className="edit-form">
      <SaveBar />

      {message && (
        <div
          style={{
            marginBottom: '1rem',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            background: message.type === 'success' ? '#14532d' : '#450a0a',
            color: message.type === 'success' ? '#86efac' : '#fca5a5',
            fontSize: '0.9rem',
          }}
        >
          {message.text}
        </div>
      )}

      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
        FSL vs Consultant Page
      </h1>
      <p style={{ color: '#a3a3a3', marginBottom: '2rem' }}>
        Edit content for{' '}
        <a
          href="https://louiebernstein.com/fractional-sales-leader-vs-consultant"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0966c2' }}
        >
          /fractional-sales-leader-vs-consultant
        </a>
      </p>

      {/* ── Hero ── */}
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Hero Section</legend>
        <div className="form-group">
          <label className="form-label">Badge Text</label>
          <input className="form-input" value={form.heroBadgeText} onChange={e => set('heroBadgeText', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Badge Subtext</label>
          <input className="form-input" value={form.heroBadgeSubtext} onChange={e => set('heroBadgeSubtext', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Hero Description (subtitle)</label>
          <input className="form-input" value={form.heroDescription} onChange={e => set('heroDescription', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Primary CTA Button Text</label>
          <input className="form-input" value={form.heroCtaPrimary} onChange={e => set('heroCtaPrimary', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Secondary CTA Button Text</label>
          <input className="form-input" value={form.heroCtaSecondary} onChange={e => set('heroCtaSecondary', e.target.value)} />
        </div>
      </fieldset>

      {/* ── Introduction ── */}
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Introduction Paragraph</legend>
        <div className="form-group">
          <label className="form-label">Intro Text</label>
          <RichTextEditor
            value={form.introText}
            onChange={val => set('introText', val)}
            minHeight={120}
          />
        </div>
      </fieldset>

      {/* ── Comparison Table ── */}
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Comparison Table</legend>
        <div className="form-group">
          <label className="form-label">Section Headline</label>
          <input className="form-input" value={form.comparisonHeadline} onChange={e => set('comparisonHeadline', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Section Subheadline</label>
          <input className="form-input" value={form.comparisonSubheadline} onChange={e => set('comparisonSubheadline', e.target.value)} />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <p className="form-label" style={{ marginBottom: '0.75rem' }}>
            Comparison Rows ({form.comparisonPoints.length} rows)
          </p>
          {form.comparisonPoints.map((point, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #333',
                borderRadius: '6px',
                padding: '1rem',
                marginBottom: '0.75rem',
                background: '#1a1a1a',
              }}
            >
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#737373', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Row {i + 1}
              </p>
              <div className="form-group">
                <label className="form-label">Category</label>
                <input
                  className="form-input"
                  value={point.category}
                  onChange={e => updatePoint(i, 'category', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: '#86efac' }}>Fractional Sales Leader</label>
                <textarea
                  className="form-textarea"
                  rows={2}
                  value={point.fsl}
                  onChange={e => updatePoint(i, 'fsl', e.target.value)}
                />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ color: '#fca5a5' }}>Consultant</label>
                <textarea
                  className="form-textarea"
                  rows={2}
                  value={point.consultant}
                  onChange={e => updatePoint(i, 'consultant', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>

      {/* ── Summary ── */}
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Summary Section ("The Bottom Line")</legend>
        <div className="form-group">
          <label className="form-label">Section Headline</label>
          <input className="form-input" value={form.summaryHeadline} onChange={e => set('summaryHeadline', e.target.value)} />
        </div>

        <p style={{ fontWeight: 600, color: '#a3a3a3', fontSize: '0.85rem', margin: '1rem 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Fractional Sales Leader Card
        </p>
        <div className="form-group">
          <label className="form-label">Badge Label</label>
          <input className="form-input" value={form.fslCardBadge} onChange={e => set('fslCardBadge', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Card Headline</label>
          <input className="form-input" value={form.fslCardHeadline} onChange={e => set('fslCardHeadline', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Card Description</label>
          <RichTextEditor value={form.fslCardDescription} onChange={val => set('fslCardDescription', val)} minHeight={80} />
        </div>
        <div className="form-group">
          <label className="form-label">Bullet Points <span style={{ color: '#737373', fontWeight: 400 }}>(one per line)</span></label>
          <textarea
            className="form-textarea"
            rows={3}
            value={form.fslCardBenefits}
            onChange={e => set('fslCardBenefits', e.target.value)}
            placeholder="Embedded leadership&#10;Accountable for results&#10;Builds systems that scale"
          />
        </div>
        <div className="form-group">
          <label className="form-label">CTA Button Text</label>
          <input className="form-input" value={form.fslCardCtaText} onChange={e => set('fslCardCtaText', e.target.value)} />
        </div>

        <p style={{ fontWeight: 600, color: '#a3a3a3', fontSize: '0.85rem', margin: '1rem 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Consultant Card
        </p>
        <div className="form-group">
          <label className="form-label">Badge Label</label>
          <input className="form-input" value={form.consultantCardBadge} onChange={e => set('consultantCardBadge', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Card Headline</label>
          <input className="form-input" value={form.consultantCardHeadline} onChange={e => set('consultantCardHeadline', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Card Description</label>
          <RichTextEditor value={form.consultantCardDescription} onChange={val => set('consultantCardDescription', val)} minHeight={80} />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Bullet Points <span style={{ color: '#737373', fontWeight: 400 }}>(one per line)</span></label>
          <textarea
            className="form-textarea"
            rows={3}
            value={form.consultantCardBenefits}
            onChange={e => set('consultantCardBenefits', e.target.value)}
            placeholder="External perspective&#10;Project-based engagement&#10;Strategic advice"
          />
        </div>
      </fieldset>

      {/* ── Final CTA ── */}
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Final CTA Section</legend>
        <div className="form-group">
          <label className="form-label">Headline</label>
          <input className="form-input" value={form.finalCtaHeadline} onChange={e => set('finalCtaHeadline', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <RichTextEditor value={form.finalCtaDescription} onChange={val => set('finalCtaDescription', val)} minHeight={80} />
        </div>
        <div className="form-group">
          <label className="form-label">Primary Button Text</label>
          <input className="form-input" value={form.finalCtaPrimary} onChange={e => set('finalCtaPrimary', e.target.value)} />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Secondary Button Text</label>
          <input className="form-input" value={form.finalCtaSecondary} onChange={e => set('finalCtaSecondary', e.target.value)} />
        </div>
      </fieldset>

      <SaveBar />
    </div>
  )
}
