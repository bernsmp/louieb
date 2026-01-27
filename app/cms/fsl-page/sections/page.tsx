'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditFSLSectionsPage() {
  return (
    <SectionEditor
      section="fslPage"
      title="FSL Page Section Titles"
      description="Headlines and descriptions for each section on the Fractional Sales Leader page."
      backHref="/cms/fsl-page"
      backLabel="Back to FSL Page"
      fields={[
        {
          name: 'videosSectionHeadline',
          label: 'Videos Section Headline',
          type: 'text',
          placeholder: 'e.g., Everything You Need to Know',
        },
        {
          name: 'videosSectionSubheadline',
          label: 'Videos Section Subheadline',
          type: 'text',
          placeholder: 'e.g., Five videos that answer the questions every founder asks...',
        },
        {
          name: 'videosPlaylistButtonText',
          label: 'Videos Playlist Button Text',
          type: 'text',
          placeholder: 'e.g., Watch Full Playlist on YouTube',
        },
        {
          name: 'faqSectionHeadline',
          label: 'FAQ Section Headline',
          type: 'text',
          placeholder: 'e.g., Frequently Asked Questions',
        },
        {
          name: 'faqSectionSubheadline',
          label: 'FAQ Section Subheadline',
          type: 'text',
          placeholder: 'e.g., Straight answers to the questions I hear most often.',
        },
        {
          name: 'introCtaNote',
          label: 'Intro CTA Note',
          type: 'text',
          placeholder: 'e.g., No pitch. Just a conversation about your sales challenges.',
          hint: 'Small text shown below the intro section CTA button',
        },
        {
          name: 'finalCtaSecondaryText',
          label: 'Final CTA Secondary Button Text',
          type: 'text',
          placeholder: 'e.g., Learn More About Me',
        },
      ]}
    />
  )
}
