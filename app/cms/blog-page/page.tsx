'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditBlogPage() {
  return (
    <SectionEditor
      section="blogPage"
      title="Blog Page"
      description="Edit the headline, subheadline, and labels shown on the blog page."
      backHref="/cms"
      backLabel="Back to Dashboard"
      fields={[
        {
          name: 'headline',
          label: 'Page Headline',
          type: 'text',
          placeholder: 'e.g., Sales Insights',
        },
        {
          name: 'subheadline',
          label: 'Page Subheadline',
          type: 'text',
          placeholder: 'e.g., Lessons from 50 years in sales, shared on LinkedIn',
        },
        {
          name: 'featuredPostsHeadline',
          label: 'Featured Posts Section Title',
          type: 'text',
          placeholder: 'e.g., Featured Posts',
        },
        {
          name: 'allPostsHeadline',
          label: 'All Posts Section Title',
          type: 'text',
          placeholder: 'e.g., All Posts',
        },
        {
          name: 'linkedInCtaText',
          label: 'LinkedIn Button Text',
          type: 'text',
          placeholder: 'e.g., Follow on LinkedIn',
        },
        {
          name: 'linkedInUrl',
          label: 'LinkedIn URL',
          type: 'url',
          placeholder: 'e.g., https://www.linkedin.com/in/sales-processes/',
        },
      ]}
    />
  )
}
