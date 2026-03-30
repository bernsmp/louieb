'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoSalesVelocityPage() {
  return (
    <SectionEditor
      section="seoSalesVelocityB2b"
      title="SEO: Sales Velocity B2B"
      description="Edit content for /sales-velocity-b2b"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 4 Levers
        { name: 'sectionLeversHeading', label: 'Section: 4 Levers — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionLeversSubheading', label: 'Section: 4 Levers — Subheading', type: 'text' },
        { name: 'lever1Title', label: 'Lever 1: Title', type: 'text' },
        { name: 'lever1Body', label: 'Lever 1: Body', type: 'textarea', rows: 4 },
        { name: 'lever2Title', label: 'Lever 2: Title', type: 'text' },
        { name: 'lever2Body', label: 'Lever 2: Body', type: 'textarea', rows: 4 },
        { name: 'lever3Title', label: 'Lever 3: Title', type: 'text' },
        { name: 'lever3Body', label: 'Lever 3: Body', type: 'textarea', rows: 4 },
        { name: 'lever4Title', label: 'Lever 4: Title', type: 'text' },
        { name: 'lever4Body', label: 'Lever 4: Body', type: 'textarea', rows: 4 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Diagnostic Table
        { name: 'sectionDiagHeading', label: 'Section: Diagnostic Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionDiagSubheading', label: 'Section: Diagnostic Table — Subheading', type: 'text' },
        { name: 'diag1Problem', label: 'Diagnostic Row 1: Problem (left)', type: 'text' },
        { name: 'diag1Cause', label: 'Diagnostic Row 1: Root Cause (right)', type: 'text' },
        { name: 'diag2Problem', label: 'Diagnostic Row 2: Problem', type: 'text' },
        { name: 'diag2Cause', label: 'Diagnostic Row 2: Root Cause', type: 'text' },
        { name: 'diag3Problem', label: 'Diagnostic Row 3: Problem', type: 'text' },
        { name: 'diag3Cause', label: 'Diagnostic Row 3: Root Cause', type: 'text' },
        { name: 'diag4Problem', label: 'Diagnostic Row 4: Problem', type: 'text' },
        { name: 'diag4Cause', label: 'Diagnostic Row 4: Root Cause', type: 'text' },
        { name: 'diag5Problem', label: 'Diagnostic Row 5: Problem', type: 'text' },
        { name: 'diag5Cause', label: 'Diagnostic Row 5: Root Cause', type: 'text' },

        // Section: Signals
        { name: 'sectionSignalsHeading', label: 'Section: Signals — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionSignalsSubheading', label: 'Section: Signals — Subheading', type: 'text' },
        { name: 'signal1', label: 'Signal 1', type: 'text' },
        { name: 'signal2', label: 'Signal 2', type: 'text' },
        { name: 'signal3', label: 'Signal 3', type: 'text' },
        { name: 'signal4', label: 'Signal 4', type: 'text' },
        { name: 'signal5', label: 'Signal 5', type: 'text' },
        { name: 'signal6', label: 'Signal 6', type: 'text' },

        // About Louie
        { name: 'aboutBio1', label: 'About Louie: Paragraph 1', type: 'textarea', rows: 3 },
        { name: 'aboutBio2', label: 'About Louie: Paragraph 2', type: 'textarea', rows: 3 },

        // FAQs
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', rows: 3 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', rows: 3 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', rows: 3 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', rows: 3 },

        // CTA
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
      ]}
      previewUrl="/sales-velocity-b2b"
    />
  )
}
