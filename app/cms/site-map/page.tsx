'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditSiteMapPage() {
  return (
    <SectionEditor
      section="siteMapPage"
      title="Site Map Page"
      description="SEO and display settings for the /site-map page. The page content (list of all pages) is generated automatically."
      backHref="/cms"
      backLabel="Back to Dashboard"
      previewUrl="/site-map"
      fields={[
        {
          name: 'seoTitle',
          label: 'SEO Title',
          type: 'text',
          placeholder: 'e.g., Site Map | Louie Bernstein',
        },
        {
          name: 'seoDescription',
          label: 'Meta Description',
          type: 'textarea',
          rows: 3,
          placeholder: 'e.g., A complete directory of all pages on louiebernstein.com...',
        },
        {
          name: 'pageHeadline',
          label: 'Page Headline',
          type: 'text',
          placeholder: 'e.g., Site Map',
        },
        {
          name: 'pageSubheadline',
          label: 'Page Subheadline',
          type: 'text',
          placeholder: 'e.g., A complete directory of every page on louiebernstein.com, organized by category.',
        },
      ]}
    />
  )
}
