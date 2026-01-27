'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditNavigationPage() {
  return (
    <SectionEditor
      section="navigation"
      title="Navigation & Branding"
      description="Logo text and navigation labels that appear in the header."
      backHref="/cms/settings"
      backLabel="Back to Settings"
      fields={[
        {
          name: 'logoText',
          label: 'Logo Text',
          type: 'text',
          placeholder: 'e.g., Louie Bernstein',
          hint: 'The main name shown in the header',
        },
        {
          name: 'logoTagline',
          label: 'Logo Tagline',
          type: 'text',
          placeholder: 'e.g., Fractional Sales Leader',
          hint: 'Shown next to the logo on desktop',
        },
        {
          name: 'navHome',
          label: 'Home Link Label',
          type: 'text',
          placeholder: 'e.g., Home',
        },
        {
          name: 'navArticles',
          label: 'Articles Link Label',
          type: 'text',
          placeholder: 'e.g., Articles',
        },
        {
          name: 'navVideos',
          label: 'Videos Link Label',
          type: 'text',
          placeholder: 'e.g., Videos',
        },
        {
          name: 'navNewsletter',
          label: 'Newsletter Link Label',
          type: 'text',
          placeholder: 'e.g., Newsletter',
        },
        {
          name: 'navContact',
          label: 'Contact Link Label',
          type: 'text',
          placeholder: 'e.g., Contact',
        },
      ]}
    />
  )
}
