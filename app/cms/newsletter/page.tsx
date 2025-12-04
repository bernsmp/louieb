'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditNewsletterPage() {
  return (
    <SectionEditor
      section="newsletterPage"
      title="Newsletter Page"
      description="Content for the /newsletter page."
      backHref="/cms"
      backLabel="Back to Dashboard"
      previewUrl="/cms/preview/newsletter"
      fields={[
        {
          name: 'headline',
          label: 'Page Headline',
          type: 'text',
          placeholder: 'e.g., The Sunday Starter',
        },
        {
          name: 'tagline',
          label: 'Tagline',
          type: 'text',
          placeholder: 'e.g., Delivered to Accelerate Your Success',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          rows: 3,
        },
        {
          name: 'ctaText',
          label: 'CTA Button Text',
          type: 'text',
          placeholder: 'e.g., Subscribe on LinkedIn',
        },
        {
          name: 'benefitsHeadline',
          label: 'Benefits Section Headline',
          type: 'text',
          placeholder: "e.g., What You'll Get",
        },
        {
          name: 'finalCtaHeadline',
          label: 'Final CTA Headline',
          type: 'text',
          placeholder: 'e.g., Ready to Start Your Week Right?',
        },
        {
          name: 'finalCtaDescription',
          label: 'Final CTA Description',
          type: 'text',
        },
        {
          name: 'featuredContentHeadline',
          label: 'Featured Content Section Headline',
          type: 'text',
          placeholder: 'e.g., Featured Newsletter Content',
        },
        {
          name: 'featuredContentDescription',
          label: 'Featured Content Description',
          type: 'text',
        },
        {
          name: 'finalCtaButtonText',
          label: 'Final CTA Button Text',
          type: 'text',
          placeholder: 'e.g., Subscribe Now',
        },
      ]}
    />
  )
}

