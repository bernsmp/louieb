'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SiteMapPageCms() {
  return (
    <SectionEditor
      section="siteMapPage"
      title="Site Map Page"
      description="Edit SEO and headline content for /site-map"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        { name: 'seoTitle', label: 'SEO Title (browser tab)', type: 'text' },
        { name: 'seoDescription', label: 'SEO Meta Description', type: 'textarea', rows: 2 },
        { name: 'pageHeadline', label: 'Page Headline (H1)', type: 'text' },
        { name: 'pageSubheadline', label: 'Page Subheadline', type: 'text' },
      ]}
      previewUrl="/site-map"
    />
  )
}
