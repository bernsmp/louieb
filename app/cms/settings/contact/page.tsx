'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditContactPage() {
  return (
    <SectionEditor
      section="contact"
      title="Contact Information"
      description="Primary contact details shown across the site."
      backHref="/cms/settings"
      backLabel="Back to Settings"
      fields={[
        {
          name: 'email',
          label: 'Email Address',
          type: 'text',
          placeholder: 'e.g., Louie@LouieBernstein.com',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          placeholder: 'e.g., (404) 808-5326',
        },
      ]}
    />
  )
}

