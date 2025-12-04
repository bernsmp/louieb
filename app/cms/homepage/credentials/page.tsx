'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditCredentialsPage() {
  return (
    <SectionEditor
      section="credentials"
      title="Credentials Badge"
      description="The badge shown near the hero section."
      backHref="/cms/homepage"
      backLabel="Back to Homepage"
      fields={[
        {
          name: 'primary',
          label: 'Primary Credential',
          type: 'text',
          placeholder: 'e.g., LinkedIn Top Voice',
          hint: 'Main credential displayed prominently',
        },
        {
          name: 'secondary',
          label: 'Secondary Credential',
          type: 'text',
          placeholder: 'e.g., 50+ Years Sales Experience',
          hint: 'Supporting credential',
        },
      ]}
    />
  )
}

