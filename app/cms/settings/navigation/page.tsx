'use client'

import { SectionEditor } from '../../components/SectionEditor'
import { NavOrderEditor } from '../../components/NavOrderEditor'

export default function EditNavigationPage() {
  return (
    <div className="space-y-8">
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

      {/* Nav item order */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-lg font-semibold text-gray-900">Navigation Order</h2>
        <p className="mb-4 text-sm text-gray-500">
          Drag items up or down (or use the arrows) to rearrange the top-level nav links. Click{' '}
          <strong>Save Order</strong> when done.
        </p>
        <NavOrderEditor />
      </div>
    </div>
  )
}
