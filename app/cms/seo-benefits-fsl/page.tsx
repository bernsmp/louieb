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
      previewUrl="/fractional-sales-leader-benefits-small-business"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroLine3', label: 'Hero: Headline Line 3', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'ctaButtonText', label: 'Hero: CTA Button Text', type: 'text' },

        // Who This Is For
        { name: 'whoHeading', label: 'Who This Is For: Section Heading', type: 'text', aiRewrite: true },
        { name: 'whoItem1', label: 'Who Item 1', type: 'text' },
        { name: 'whoItem2', label: 'Who Item 2', type: 'text' },
        { name: 'whoItem3', label: 'Who Item 3', type: 'text' },
        { name: 'whoItem4', label: 'Who Item 4', type: 'text' },
        { name: 'whoItem5', label: 'Who Item 5', type: 'text' },
        { name: 'whoItem6', label: 'Who Item 6', type: 'text' },

        // 10 Benefits Section
        { name: 'benefitsHeading', label: '10 Benefits: Section Heading', type: 'text', aiRewrite: true },
        { name: 'benefitsSubheading', label: '10 Benefits: Subheading', type: 'textarea', rows: 2 },

        { name: 'benefit1Title', label: 'Benefit 01: Title', type: 'text' },
        { name: 'benefit1Desc', label: 'Benefit 01: Description', type: 'textarea', rows: 3 },
        { name: 'benefit2Title', label: 'Benefit 02: Title', type: 'text' },
        { name: 'benefit2Desc', label: 'Benefit 02: Description', type: 'textarea', rows: 3 },
        { name: 'benefit3Title', label: 'Benefit 03: Title', type: 'text' },
        { name: 'benefit3Desc', label: 'Benefit 03: Description', type: 'textarea', rows: 3 },
        { name: 'benefit4Title', label: 'Benefit 04: Title', type: 'text' },
        { name: 'benefit4Desc', label: 'Benefit 04: Description', type: 'textarea', rows: 3 },
        { name: 'benefit5Title', label: 'Benefit 05: Title', type: 'text' },
        { name: 'benefit5Desc', label: 'Benefit 05: Description', type: 'textarea', rows: 3 },
        { name: 'benefit6Title', label: 'Benefit 06: Title', type: 'text' },
        { name: 'benefit6Desc', label: 'Benefit 06: Description', type: 'textarea', rows: 3 },
        { name: 'benefit7Title', label: 'Benefit 07: Title', type: 'text' },
        { name: 'benefit7Desc', label: 'Benefit 07: Description', type: 'textarea', rows: 3 },
        { name: 'benefit8Title', label: 'Benefit 08: Title', type: 'text' },
        { name: 'benefit8Desc', label: 'Benefit 08: Description', type: 'textarea', rows: 3 },
        { name: 'benefit9Title', label: 'Benefit 09: Title', type: 'text' },
        { name: 'benefit9Desc', label: 'Benefit 09: Description', type: 'textarea', rows: 3 },
        { name: 'benefit10Title', label: 'Benefit 10: Title', type: 'text' },
        { name: 'benefit10Desc', label: 'Benefit 10: Description', type: 'textarea', rows: 3 },

        // Testimonials
        { name: 'testimonialsHeading', label: 'Testimonials: Section Heading', type: 'text' },
        { name: 'testimonial1Quote', label: 'Testimonial 1: Quote', type: 'textarea', rows: 3 },
        { name: 'testimonial1Name', label: 'Testimonial 1: Name', type: 'text' },
        { name: 'testimonial1Title', label: 'Testimonial 1: Title / Company', type: 'text' },
        { name: 'testimonial2Quote', label: 'Testimonial 2: Quote', type: 'textarea', rows: 3 },
        { name: 'testimonial2Name', label: 'Testimonial 2: Name', type: 'text' },
        { name: 'testimonial2Title', label: 'Testimonial 2: Title / Company', type: 'text' },

        // FAQs
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', rows: 4 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', rows: 4 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', rows: 4 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', rows: 4 },
        { name: 'faq5Question', label: 'FAQ 5: Question', type: 'text' },
        { name: 'faq5Answer', label: 'FAQ 5: Answer', type: 'textarea', rows: 4 },

        // CTA
        { name: 'ctaHeadline', label: 'CTA: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA: Description', type: 'textarea', rows: 2 },
      ]}
    />
  )
}
