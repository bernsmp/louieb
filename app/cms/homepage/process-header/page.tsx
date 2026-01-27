'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditProcessHeaderPage() {
  return (
    <SectionEditor
      section="processSection"
      title="Process Section Header"
      description="Header text for the 'How It Works' section."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: 'e.g., How It Works',
        },
        {
          name: 'subheadline',
          label: 'Subheadline',
          type: 'text',
          placeholder: 'e.g., A proven process that delivers measurable results',
        },
      ]}
    />
  )
}
