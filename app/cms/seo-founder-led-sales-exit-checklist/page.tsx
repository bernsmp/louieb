'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoFounderLedSalesExitChecklistPage() {
  return (
    <SectionEditor
      section="seoFounderLedSalesExitChecklist"
      title="SEO: Founder-Led Sales Exit Checklist"
      description="Edit content for /founder-led-sales-exit-checklist"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Checklist
        { name: 'sectionChecklistHeading', label: 'Section: Checklist — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionChecklistSubheading', label: 'Section: Checklist — Subheading', type: 'text' },

        { name: 'q1Title', label: 'Item 1: Title', type: 'text' },
        { name: 'q1Detail', label: 'Item 1: Detail', type: 'textarea', rows: 4 },
        { name: 'q1Prompt', label: 'Item 1: Test', type: 'textarea', rows: 2 },

        { name: 'q2Title', label: 'Item 2: Title', type: 'text' },
        { name: 'q2Detail', label: 'Item 2: Detail', type: 'textarea', rows: 4 },
        { name: 'q2Prompt', label: 'Item 2: Test', type: 'textarea', rows: 2 },

        { name: 'q3Title', label: 'Item 3: Title', type: 'text' },
        { name: 'q3Detail', label: 'Item 3: Detail', type: 'textarea', rows: 4 },
        { name: 'q3Prompt', label: 'Item 3: Test', type: 'textarea', rows: 2 },

        { name: 'q4Title', label: 'Item 4: Title', type: 'text' },
        { name: 'q4Detail', label: 'Item 4: Detail', type: 'textarea', rows: 4 },
        { name: 'q4Prompt', label: 'Item 4: Test', type: 'textarea', rows: 2 },

        { name: 'q5Title', label: 'Item 5: Title', type: 'text' },
        { name: 'q5Detail', label: 'Item 5: Detail', type: 'textarea', rows: 4 },
        { name: 'q5Prompt', label: 'Item 5: Test', type: 'textarea', rows: 2 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara3', label: 'SEO Paragraph 3 (internal link follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Comparison Table
        { name: 'sectionCompHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'comp1Bad', label: 'Comparison Row 1: Not Ready', type: 'textarea', rows: 2 },
        { name: 'comp1Good', label: 'Comparison Row 1: Ready', type: 'textarea', rows: 2 },
        { name: 'comp2Bad', label: 'Comparison Row 2: Not Ready', type: 'textarea', rows: 2 },
        { name: 'comp2Good', label: 'Comparison Row 2: Ready', type: 'textarea', rows: 2 },
        { name: 'comp3Bad', label: 'Comparison Row 3: Not Ready', type: 'textarea', rows: 2 },
        { name: 'comp3Good', label: 'Comparison Row 3: Ready', type: 'textarea', rows: 2 },
        { name: 'comp4Bad', label: 'Comparison Row 4: Not Ready', type: 'textarea', rows: 2 },
        { name: 'comp4Good', label: 'Comparison Row 4: Ready', type: 'textarea', rows: 2 },
        { name: 'comp5Bad', label: 'Comparison Row 5: Not Ready', type: 'textarea', rows: 2 },
        { name: 'comp5Good', label: 'Comparison Row 5: Ready', type: 'textarea', rows: 2 },

        // About Louie
        { name: 'aboutBio1', label: 'About Louie: Paragraph 1', type: 'textarea', rows: 3 },
        { name: 'aboutBio2', label: 'About Louie: Paragraph 2', type: 'textarea', rows: 3 },

        // FAQs (5)
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

        // CTA
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
      ]}
      previewUrl="/founder-led-sales-exit-checklist"
    />
  )
}
