'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditValuePropositionPage() {
  return (
    <SectionEditor
      section="valueProposition"
      title="Value Proposition"
      description="The 'It's not how much you sell' section."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: "e.g., It's not how much you sell.",
          aiRewrite: true,
        },
        {
          name: 'subheadline',
          label: 'Subheadline',
          type: 'text',
          placeholder: "e.g., It's how much you take home.",
          aiRewrite: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          rows: 2,
        },
        {
          name: 'ctaText',
          label: 'CTA Button Text',
          type: 'text',
          placeholder: "e.g., Let's Get Going!",
        },
      ]}
    />
  )
}
