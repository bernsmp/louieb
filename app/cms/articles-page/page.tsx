'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditArticlesPagePage() {
  return (
    <SectionEditor
      section="articlesPage"
      title="Articles Page"
      description="Text displayed on the articles listing and individual article pages."
      backHref="/cms"
      backLabel="Back to Dashboard"
      fields={[
        {
          name: 'headline',
          label: 'Page Headline',
          type: 'text',
          placeholder: 'e.g., Articles',
        },
        {
          name: 'description',
          label: 'Page Description',
          type: 'text',
          placeholder: 'e.g., Expert insights on sales leadership and team optimization',
        },
        {
          name: 'emptyStateText',
          label: 'Empty State Message',
          type: 'text',
          placeholder: 'Shown when there are no articles',
          hint: 'Displayed when there are no articles to show',
        },
        {
          name: 'backLinkText',
          label: 'Back Link Text',
          type: 'text',
          placeholder: 'e.g., Back to Articles',
          hint: 'Text shown on individual article pages to go back',
        },
        {
          name: 'shareLabel',
          label: 'Share Label',
          type: 'text',
          placeholder: 'e.g., Share this article:',
        },
        {
          name: 'viewAllText',
          label: 'View All Text',
          type: 'text',
          placeholder: 'e.g., View All Articles',
        },
      ]}
    />
  )
}
