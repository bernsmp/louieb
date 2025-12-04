'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditAboutPage() {
  return (
    <SectionEditor
      section="about"
      title="About Section"
      description="The 'About Louie' section on the homepage."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      previewUrl="/cms/preview/about"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: 'e.g., Fractional Sales Leadership',
        },
        {
          name: 'headlineAccent',
          label: 'Headline Accent (colored text)',
          type: 'text',
          placeholder: 'e.g., for $1M–$10M ARR Companies',
        },
        {
          name: 'paragraph1',
          label: 'First Paragraph',
          type: 'textarea',
          rows: 3,
        },
        {
          name: 'paragraph2',
          label: 'Second Paragraph',
          type: 'textarea',
          rows: 3,
        },
        {
          name: 'paragraph3',
          label: 'Third Paragraph',
          type: 'textarea',
          rows: 3,
        },
        {
          name: 'calloutText',
          label: 'Callout Box Text',
          type: 'textarea',
          rows: 3,
          hint: 'Highlighted text in the callout box',
        },
        {
          name: 'stat1Value',
          label: 'Stat 1 Value',
          type: 'text',
          placeholder: 'e.g., 9+',
        },
        {
          name: 'stat1Label',
          label: 'Stat 1 Label',
          type: 'text',
          placeholder: 'e.g., Years as Fractional Sales Leader',
        },
        {
          name: 'stat2Value',
          label: 'Stat 2 Value',
          type: 'text',
          placeholder: 'e.g., $1M–$10M',
        },
        {
          name: 'stat2Label',
          label: 'Stat 2 Label',
          type: 'text',
          placeholder: 'e.g., ARR Companies Served',
        },
        {
          name: 'stat3Value',
          label: 'Stat 3 Value',
          type: 'text',
          placeholder: 'e.g., INC 500',
        },
        {
          name: 'stat3Label',
          label: 'Stat 3 Label',
          type: 'text',
          placeholder: 'e.g., Scaled from Zero',
        },
      ]}
    />
  )
}
