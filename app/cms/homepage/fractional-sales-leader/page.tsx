'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditFractionalSalesLeaderPage() {
  return (
    <SectionEditor
      section="fractionalSalesLeader"
      title="Fractional Sales Leader Section"
      description="The marketing section targeting founders stuck in sales."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: 'e.g., Fractional Sales Leader for the',
        },
        {
          name: 'headlineAccent',
          label: 'Headline Accent (colored text)',
          type: 'text',
          placeholder: 'e.g., Founder Trapped in Sales',
        },
        {
          name: 'hook',
          label: 'Hook Line',
          type: 'text',
          placeholder: "e.g., You built this. From nothing. Now you're stuck.",
          hint: 'Bold text below the headline',
        },
        {
          name: 'paragraph1',
          label: 'Paragraph 1 (The Pain Point)',
          type: 'textarea',
          rows: 4,
        },
        {
          name: 'paragraph2',
          label: 'Paragraph 2 (Short Response)',
          type: 'text',
          placeholder: 'e.g., I do.',
        },
        {
          name: 'paragraph3',
          label: 'Paragraph 3 (What FSL Is)',
          type: 'textarea',
          rows: 4,
        },
        {
          name: 'paragraph4',
          label: 'Paragraph 4 (Value Proposition)',
          type: 'textarea',
          rows: 4,
        },
        {
          name: 'calloutText',
          label: 'Callout Box Text',
          type: 'textarea',
          rows: 2,
          hint: 'Highlighted text in the callout box',
        },
        {
          name: 'ctaText',
          label: 'CTA Button Text',
          type: 'text',
          placeholder: "e.g., Let's Talk",
        },
        {
          name: 'ctaUrl',
          label: 'CTA Button URL',
          type: 'url',
          placeholder: 'e.g., https://calendly.com/...',
        },
      ]}
    />
  )
}

