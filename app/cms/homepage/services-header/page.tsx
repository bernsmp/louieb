'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditServicesHeaderPage() {
  return (
    <SectionEditor
      section="servicesSection"
      title="Services Section Header"
      description="Header text for the 'What I Offer' section."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: 'e.g., What I Offer',
        },
        {
          name: 'subheadline',
          label: 'Subheadline',
          type: 'text',
          placeholder: 'e.g., Comprehensive sales leadership services designed to transform your team',
        },
      ]}
    />
  )
}
