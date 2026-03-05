'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditSalespersonPage() {
  return (
    <SectionEditor
      section="salesperson"
      title="Salesperson Blueprint Page"
      description="Content for the /salesperson page — the 588-page blueprint landing page."
      backHref="/cms"
      backLabel="Back to Dashboard"
      fields={[
        {
          name: 'heroTagline',
          label: 'Hero Pre-headline (small label above title)',
          type: 'text',
          placeholder: 'e.g., The 588-Page Blueprint',
        },
        {
          name: 'heroHeadline',
          label: 'Page Headline (H1)',
          type: 'text',
          placeholder: 'e.g., How to Be a Professional Salesperson',
          aiRewrite: true,
        },
        {
          name: 'heroDescription',
          label: 'Hero Description',
          type: 'textarea',
          rows: 3,
          aiRewrite: true,
        },
        {
          name: 'ctaPrimaryText',
          label: 'Primary CTA Button Text',
          type: 'text',
          placeholder: 'e.g., Work With Louie',
        },
        {
          name: 'ctaPrimaryUrl',
          label: 'Primary CTA Button URL',
          type: 'text',
          placeholder: 'e.g., https://calendly.com/louiebernstein/30minutes',
        },
        {
          name: 'ctaSecondaryText',
          label: 'Secondary CTA Button Text',
          type: 'text',
          placeholder: 'e.g., Ask a Question',
        },
        {
          name: 'ctaSecondaryUrl',
          label: 'Secondary CTA Button URL',
          type: 'text',
          placeholder: 'e.g., /#contact',
        },
        {
          name: 'themesHeadline',
          label: '"What\'s Inside" Section Headline',
          type: 'text',
          placeholder: "e.g., What's Inside: 10 Core Themes",
        },
        {
          name: 'themesDescription',
          label: '"What\'s Inside" Section Description',
          type: 'textarea',
          rows: 2,
          aiRewrite: true,
        },
        {
          name: 'ctaBottomHeadline',
          label: 'Bottom CTA Headline',
          type: 'text',
          placeholder: 'e.g., Want this expertise working inside your company?',
          aiRewrite: true,
        },
        {
          name: 'ctaBottomDescription',
          label: 'Bottom CTA Description',
          type: 'textarea',
          rows: 3,
          aiRewrite: true,
        },
      ]}
    />
  )
}
