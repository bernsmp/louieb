'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditFAQHeaderPage() {
  return (
    <SectionEditor
      section="faqSection"
      title="FAQ Section Header"
      description="Header text for the 'Frequently Asked Questions' section."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: 'e.g., Frequently Asked Questions',
        },
        {
          name: 'subheadline',
          label: 'Subheadline',
          type: 'text',
          placeholder: 'e.g., Everything you need to know about fractional sales leadership',
        },
      ]}
    />
  )
}
