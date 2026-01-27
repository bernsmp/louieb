'use client'

import Link from 'next/link'
import { SectionEditor } from '../components/SectionEditor'

export default function EditFSLPage() {
  return (
    <>
      {/* Quick Links */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <Link
          href="/cms/fsl-page/layout"
          className="btn btn--secondary"
          style={{ textDecoration: 'none' }}
        >
          Edit Section Layout
        </Link>
        <Link
          href="/cms/fsl-page/sections"
          className="btn btn--secondary"
          style={{ textDecoration: 'none' }}
        >
          Edit Section Titles
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
        {
          name: 'seoTitle',
          label: 'SEO: Page Title',
          type: 'text',
          placeholder: 'e.g., Fractional Sales Leader | Louie Bernstein',
          hint: 'Displayed in search results and browser tabs (50-60 characters recommended)',
        },
        {
          name: 'seoDescription',
          label: 'SEO: Meta Description',
          type: 'textarea',
          rows: 3,
          placeholder: 'Brief description of this page for search engines',
          hint: 'Displayed in search results under the title (150-160 characters recommended)',
        },
        {
          name: 'seoImage',
          label: 'SEO: Social Share Image',
          type: 'image',
          folder: 'seo',
          hint: 'Image shown when page is shared on social media (og:image). Recommended: 1200x630px',
        },
      ]}
      />
    </>
  )
}

