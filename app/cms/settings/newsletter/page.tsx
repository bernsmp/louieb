'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditNewsletterSettingsPage() {
  return (
    <SectionEditor
      section="newsletter"
      title="Newsletter Settings"
      description="General newsletter configuration."
      backHref="/cms/settings"
      backLabel="Back to Settings"
      fields={[
        {
          name: 'name',
          label: 'Newsletter Name',
          type: 'text',
          placeholder: 'e.g., The Sunday Starter',
        },
        {
          name: 'playlistId',
          label: 'YouTube Playlist ID',
          type: 'text',
          placeholder: 'e.g., PL7HfhnqHyzRmd7GWRKTBURlmcC7TsbdPz',
          hint: 'Playlist for newsletter page videos',
        },
        {
          name: 'subscribeUrl',
          label: 'Subscribe URL',
          type: 'url',
          placeholder: 'https://www.linkedin.com/newsletters/...',
        },
      ]}
    />
  )
}

