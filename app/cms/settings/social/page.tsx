'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditSocialPage() {
  return (
    <SectionEditor
      section="social"
      title="Social Links"
      description="Links to social media profiles."
      backHref="/cms/settings"
      backLabel="Back to Settings"
      fields={[
        {
          name: 'linkedin',
          label: 'LinkedIn URL',
          type: 'url',
          placeholder: 'https://www.linkedin.com/in/...',
        },
        {
          name: 'youtube',
          label: 'YouTube URL',
          type: 'url',
          placeholder: 'https://www.youtube.com/@...',
        },
        {
          name: 'calendly',
          label: 'Calendly URL',
          type: 'url',
          placeholder: 'https://calendly.com/...',
        },
      ]}
    />
  )
}

