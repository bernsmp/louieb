'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoSeriesAPage() {
  return (
    <SectionEditor
      section="seoSeriesAFSL"
      title="SEO: Fractional Sales Leadership for Series A"
      description="Edit content for /fractional-sales-leadership-series-a"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true, placeholder: 'Series A Companies That Scale Sales' },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true, placeholder: 'Build the System First.' },
        { name: 'heroLine3', label: 'Hero: Line 3', type: 'text', placeholder: 'Smart Investors Already Know This.' },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3, placeholder: 'A fractional sales leader gives Series A companies a documented sales system...' },
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true, placeholder: "Let's Build Your Sales System Before You Scale It" },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2, placeholder: '30 minutes. I\'ll ask about your current sales motion...' },
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', rows: 3 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', rows: 3 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', rows: 3 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', rows: 3 },
        { name: 'faq5Question', label: 'FAQ 5: Question', type: 'text' },
        { name: 'faq5Answer', label: 'FAQ 5: Answer', type: 'textarea', rows: 3 },
      ]}
    />
  )
}
