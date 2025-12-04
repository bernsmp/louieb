'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditSEOPage() {
  return (
    <SectionEditor
      section="seo"
      title="SEO Settings"
      description="Settings that affect how your site appears in search results."
      backHref="/cms"
      backLabel="Back to Dashboard"
      fields={[
        {
          name: 'siteTitle',
          label: 'Site Title',
          type: 'text',
          placeholder: 'e.g., Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader',
          hint: 'The title that appears in browser tabs and search results',
        },
        {
          name: 'siteDescription',
          label: 'Site Description',
          type: 'textarea',
          rows: 3,
          hint: 'The description that appears in search results (keep under 160 characters)',
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
          placeholder: 'e.g., fractional sales leader, sales consulting, sales team optimization',
          hint: 'Comma-separated keywords for SEO',
        },
      ]}
    />
  )
}

