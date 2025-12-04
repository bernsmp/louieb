'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditContactSectionPage() {
  return (
    <SectionEditor
      section="contactSection"
      title="Contact Section"
      description="Labels and text for the contact section on the homepage."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Section Headline',
          type: 'text',
          placeholder: "e.g., Let's Talk",
        },
        {
          name: 'description',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g., Ready to transform your sales team? Get in touch today.',
        },
        {
          name: 'emailLabel',
          label: 'Email Card Label',
          type: 'text',
          placeholder: 'e.g., Email',
        },
        {
          name: 'phoneLabel',
          label: 'Phone Card Label',
          type: 'text',
          placeholder: 'e.g., Phone',
        },
        {
          name: 'ctaButtonText',
          label: 'CTA Button Text',
          type: 'text',
          placeholder: 'e.g., Schedule a 30-Minute Call',
        },
      ]}
    />
  )
}

