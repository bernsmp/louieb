'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoRunSalesPipelineReviewPage() {
  return (
    <SectionEditor
      section="seoRunSalesPipelineReview"
      title="SEO: How to Run a Sales Pipeline Review"
      description="Edit content for /how-to-run-a-sales-pipeline-review"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true, placeholder: 'How to Run a Sales Pipeline Review' },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true, placeholder: 'Without It Becoming a Waste of Time' },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
        { name: 'aboutBio1', label: 'About: Bio Paragraph 1', type: 'textarea', rows: 2 },
        { name: 'aboutBio2', label: 'About: Bio Paragraph 2', type: 'textarea', rows: 3 },
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', rows: 3 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', rows: 3 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', rows: 3 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', rows: 3 },
      ]}
    />
  )
}
