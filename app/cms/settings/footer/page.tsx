'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditFooterPage() {
  return (
    <SectionEditor
      section="footer"
      title="Footer"
      description="Footer content shown at the bottom of every page."
      backHref="/cms/settings"
      backLabel="Back to Settings"
      fields={[
        {
          name: 'tagline',
          label: 'Footer Tagline',
          type: 'text',
          placeholder: 'e.g., Fractional Sales Leader',
        },
        {
          name: 'slogan',
          label: 'Footer Slogan',
          type: 'text',
          placeholder: 'e.g., Less Spend. More Sales.',
        },
        {
          name: 'copyrightName',
          label: 'Copyright Name',
          type: 'text',
          placeholder: 'e.g., Louie Bernstein',
        },
        {
          name: 'quickLinksLabel',
          label: 'Quick Links Section Label',
          type: 'text',
          placeholder: 'e.g., Quick Links',
        },
        {
          name: 'getInTouchLabel',
          label: 'Get In Touch Section Label',
          type: 'text',
          placeholder: 'e.g., Get In Touch',
        },
      ]}
    />
  )
}

