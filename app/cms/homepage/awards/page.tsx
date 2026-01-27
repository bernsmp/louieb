'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditAwardsPage() {
  return (
    <SectionEditor
      section="awards"
      title="Awards Section"
      description="The awards/recognition section."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          placeholder: 'e.g., Recognized Excellence',
        },
        {
          name: 'subheadline',
          label: 'Subheadline',
          type: 'text',
          placeholder: 'e.g., Award-winning sales consulting and leadership',
        },
        {
          name: 'imageUrl',
          label: 'Awards Image',
          type: 'image',
          folder: 'awards',
          hint: 'Upload or drag and drop an awards image',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          rows: 2,
        },
      ]}
    />
  )
}

