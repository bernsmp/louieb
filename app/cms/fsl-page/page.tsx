'use client'

import Link from 'next/link'
import { SectionEditor } from '../components/SectionEditor'

export default function EditFSLPage() {
  return (
    <>
      {/* Layout Editor Link */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.02) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        borderRadius: '0.75rem',
        padding: '1rem 1.5rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <h3 style={{ color: '#f5f5f5', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
            Section Layout
          </h3>
          <p style={{ color: '#a3a3a3', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
            Drag and drop to reorder sections on this page
          </p>
        </div>
        <Link href="/cms/fsl-page/layout" className="btn btn--primary">
          Edit Layout
        </Link>
      </div>

      <SectionEditor
        section="fslPage"
        title="Fractional Sales Leader Page"
        description="SEO landing page content for the /fractional-sales-leader route."
        backHref="/cms"
        backLabel="Back to Dashboard"
        fields={[
        {
          name: 'headline',
          label: 'Page Headline',
          type: 'text',
          placeholder: 'e.g., Fractional Sales Leader',
        },
        {
          name: 'tagline',
          label: 'Tagline',
          type: 'text',
          placeholder: 'e.g., Experienced sales leadership. Fraction of the cost.',
        },
        {
          name: 'introHook',
          label: 'Intro Hook',
          type: 'textarea',
          rows: 2,
          hint: 'The attention-grabbing first line',
        },
        {
          name: 'introParagraph1',
          label: 'Intro Paragraph 1 (Pain Point)',
          type: 'textarea',
          rows: 4,
        },
        {
          name: 'introParagraph2',
          label: 'Intro Paragraph 2 (What is FSL)',
          type: 'textarea',
          rows: 4,
        },
        {
          name: 'introParagraph3',
          label: 'Intro Paragraph 3 (What I Do)',
          type: 'textarea',
          rows: 4,
        },
        {
          name: 'introParagraph4',
          label: 'Intro Paragraph 4 (CTA Lead-in)',
          type: 'textarea',
          rows: 3,
        },
        {
          name: 'playlistId',
          label: 'YouTube Playlist ID',
          type: 'text',
          placeholder: 'e.g., PL7HfhnqHyzRn0MoquOVlTgYAJPHN4_6wu',
          hint: 'Playlist containing the FSL explainer videos',
        },
        {
          name: 'finalCtaHeadline',
          label: 'Final CTA Headline',
          type: 'text',
          placeholder: 'e.g., Ready to Stop Being the Bottleneck?',
        },
        {
          name: 'finalCtaButtonText',
          label: 'Final CTA Button Text',
          type: 'text',
          placeholder: 'e.g., Schedule a 30-Minute Call',
        },
        {
          name: 'finalCtaDescription',
          label: 'Final CTA Description',
          type: 'textarea',
          rows: 2,
        },
      ]}
      />
    </>
  )
}

