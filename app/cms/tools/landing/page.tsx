'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditToolsLandingPage() {
  return (
    <SectionEditor
      section="toolsPage"
      title="Tools Landing Page"
      description="Header content for the /tools page."
      backHref="/cms/tools"
      backLabel="Back to Tools"
      fields={[
        {
          name: 'headline',
          label: 'Page Headline',
          type: 'text',
          placeholder: 'e.g., Tools',
        },
        {
          name: 'description',
          label: 'Page Description',
          type: 'text',
          placeholder: 'e.g., Free tools to help you make smarter sales decisions',
        },
      ]}
    />
  )
}

