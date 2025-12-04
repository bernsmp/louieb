'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditCourseSettingsPage() {
  return (
    <SectionEditor
      section="course"
      title="Course Settings"
      description="Global course configuration."
      backHref="/cms/settings"
      backLabel="Back to Settings"
      fields={[
        {
          name: 'playlistId',
          label: 'Course Playlist ID',
          type: 'text',
          placeholder: 'e.g., PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
          hint: 'Main YouTube playlist for the course page',
        },
      ]}
    />
  )
}

