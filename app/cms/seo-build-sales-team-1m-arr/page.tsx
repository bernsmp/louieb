'use client'
import { SectionEditor } from '../components/SectionEditor'

export default function SeoBuildSalesTeam1mArrPage() {
  return (
    <SectionEditor
      section="seoBuildSalesTeam1mArr"
      title="SEO: Build Sales Team After $1M ARR"
      description="Edit content for /build-sales-team-after-1m-arr"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        { name: 'heroLine1', label: 'Hero Line 1', type: 'text' },
        { name: 'heroAccent', label: 'Hero Accent (blue text)', type: 'text' },
        { name: 'heroDescription', label: 'Hero Description', type: 'textarea' },
        { name: 'ctaHeadline', label: 'CTA Headline', type: 'text' },
        { name: 'ctaDescription', label: 'CTA Description', type: 'textarea' },
        { name: 'aboutBio1', label: 'About Bio Paragraph 1', type: 'textarea' },
        { name: 'aboutBio2', label: 'About Bio Paragraph 2', type: 'textarea' },
        { name: 'faq1Question', label: 'FAQ 1 — Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1 — Answer', type: 'textarea' },
        { name: 'faq2Question', label: 'FAQ 2 — Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2 — Answer', type: 'textarea' },
        { name: 'faq3Question', label: 'FAQ 3 — Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3 — Answer', type: 'textarea' },
        { name: 'faq4Question', label: 'FAQ 4 — Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4 — Answer', type: 'textarea' },
        { name: 'faq5Question', label: 'FAQ 5 — Question', type: 'text' },
        { name: 'faq5Answer', label: 'FAQ 5 — Answer', type: 'textarea' },
      ]}
    />
  )
}
