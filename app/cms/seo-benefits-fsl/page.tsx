'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoBenefitsFSLPage() {
  return (
    <SectionEditor
      section="seoBenefitsFSL"
      title="SEO: Key Benefits of Hiring a Fractional Sales Leader"
      description="Edit content for /fractional-sales-leader-benefits-small-business"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true, placeholder: '10 Key Benefits of Hiring a' },
        { name: 'heroAccent', label: 'Hero: Accent Line (green text)', type: 'text', aiRewrite: true, placeholder: 'Fractional Sales Leader' },
        { name: 'heroLine3', label: 'Hero: Line 3', type: 'text', placeholder: 'for Your Small Business' },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3, placeholder: 'Small businesses at $1M–$10M ARR get a documented sales system...' },
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true, placeholder: 'See Which Benefits Apply to Your Business' },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2, placeholder: '30 minutes. I\'ll ask about your current sales situation...' },
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
