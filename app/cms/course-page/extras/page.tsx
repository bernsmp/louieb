'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditCourseExtrasPage() {
  return (
    <SectionEditor
      section="coursePage"
      title="Course Page Extras"
      description="Additional text for the course page sections."
      backHref="/cms/course"
      backLabel="Back to Course"
      fields={[
        {
          name: 'previewSubheadline',
          label: 'Preview Section Subheadline',
          type: 'text',
          placeholder: "e.g., Watch the first modules to see what's inside",
        },
        {
          name: 'playlistHeadline',
          label: 'Playlist Section Headline',
          type: 'text',
          placeholder: 'e.g., Complete Course Playlist',
        },
        {
          name: 'playlistDescription',
          label: 'Playlist Section Description',
          type: 'textarea',
          rows: 2,
          placeholder: 'e.g., Watch all 20 modules, download templates...',
        },
        {
          name: 'watchOnYoutubeText',
          label: 'Watch on YouTube Button Text',
          type: 'text',
          placeholder: 'e.g., Watch on YouTube',
        },
        {
          name: 'resultsSubheadline',
          label: 'Results Section Subheadline',
          type: 'text',
          placeholder: 'e.g., This system has helped companies transform...',
        },
        {
          name: 'finalCtaButtonText',
          label: 'Final CTA Primary Button Text',
          type: 'text',
          placeholder: 'e.g., Watch on YouTube',
        },
        {
          name: 'finalCtaSecondaryText',
          label: 'Final CTA Secondary Button Text',
          type: 'text',
          placeholder: 'e.g., Have Questions? Contact Me',
        },
      ]}
    />
  )
}
