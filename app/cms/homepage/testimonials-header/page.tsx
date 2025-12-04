'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditTestimonialsHeaderPage() {
  return (
    <SectionEditor
      section="testimonialsSection"
      title="Testimonials Section Header"
      description="Header text for the testimonials section."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: 'e.g., What Clients Say',
        },
        {
          name: 'subheadline',
          label: 'Subheadline',
          type: 'text',
          placeholder: 'e.g., Real results from real businesses',
        },
      ]}
    />
  )
}

