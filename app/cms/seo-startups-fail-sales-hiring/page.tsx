'use client'
import { SectionEditor } from '../components/SectionEditor'

export default function SeoStartupsFailSalesHiringPage() {
  return (
    <SectionEditor
      section="seoStartupsFailSalesHiring"
      title="SEO: Why Startups Fail at Sales Hiring"
      description="Edit content for /why-startups-fail-at-sales-hiring"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        { key: 'heroLine1', label: 'Hero Line 1', type: 'text' },
        { key: 'heroAccent', label: 'Hero Accent (blue text)', type: 'text' },
        { key: 'heroDescription', label: 'Hero Description', type: 'textarea' },
        { key: 'ctaHeadline', label: 'CTA Headline', type: 'text' },
        { key: 'ctaDescription', label: 'CTA Description', type: 'textarea' },
        { key: 'aboutBio1', label: 'About Bio Paragraph 1', type: 'textarea' },
        { key: 'aboutBio2', label: 'About Bio Paragraph 2', type: 'textarea' },
        { key: 'aboutBio3', label: 'About Bio Paragraph 3', type: 'textarea' },
        { key: 'faq1Question', label: 'FAQ 1 — Question', type: 'text' },
        { key: 'faq1Answer', label: 'FAQ 1 — Answer', type: 'textarea' },
        { key: 'faq2Question', label: 'FAQ 2 — Question', type: 'text' },
        { key: 'faq2Answer', label: 'FAQ 2 — Answer', type: 'textarea' },
        { key: 'faq3Question', label: 'FAQ 3 — Question', type: 'text' },
        { key: 'faq3Answer', label: 'FAQ 3 — Answer', type: 'textarea' },
        { key: 'faq4Question', label: 'FAQ 4 — Question', type: 'text' },
        { key: 'faq4Answer', label: 'FAQ 4 — Answer', type: 'textarea' },
        { key: 'faq5Question', label: 'FAQ 5 — Question', type: 'text' },
        { key: 'faq5Answer', label: 'FAQ 5 — Answer', type: 'textarea' },
      ]}
    />
  )
}
