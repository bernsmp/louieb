'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoWhatIsSalesEnablementPage() {
  return (
    <SectionEditor
      section="seoWhatIsSalesEnablement"
      title="SEO: What Is Sales Enablement?"
      description="Edit content for /what-is-sales-enablement"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Components
        { name: 'sectionComponentsHeading', label: 'Section: 5 Components — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComponentsSubheading', label: 'Section: 5 Components — Subheading', type: 'text' },
        { name: 'component1Title', label: 'Component 1: Title', type: 'text' },
        { name: 'component1Body', label: 'Component 1: Body', type: 'textarea', rows: 3 },
        { name: 'component2Title', label: 'Component 2: Title', type: 'text' },
        { name: 'component2Body', label: 'Component 2: Body', type: 'textarea', rows: 3 },
        { name: 'component3Title', label: 'Component 3: Title', type: 'text' },
        { name: 'component3Body', label: 'Component 3: Body', type: 'textarea', rows: 3 },
        { name: 'component4Title', label: 'Component 4: Title', type: 'text' },
        { name: 'component4Body', label: 'Component 4: Body', type: 'textarea', rows: 3 },
        { name: 'component5Title', label: 'Component 5: Title', type: 'text' },
        { name: 'component5Body', label: 'Component 5: Body', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to diagnostic follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Comparison Table
        { name: 'sectionComparisonHeading', label: 'Comparison Table: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComparisonSubheading', label: 'Comparison Table: Subheading', type: 'text' },
        { name: 'comparison1Without', label: 'Comparison Row 1: Without (red)', type: 'text' },
        { name: 'comparison1With', label: 'Comparison Row 1: With (green)', type: 'text' },
        { name: 'comparison2Without', label: 'Comparison Row 2: Without (red)', type: 'text' },
        { name: 'comparison2With', label: 'Comparison Row 2: With (green)', type: 'text' },
        { name: 'comparison3Without', label: 'Comparison Row 3: Without (red)', type: 'text' },
        { name: 'comparison3With', label: 'Comparison Row 3: With (green)', type: 'text' },
        { name: 'comparison4Without', label: 'Comparison Row 4: Without (red)', type: 'text' },
        { name: 'comparison4With', label: 'Comparison Row 4: With (green)', type: 'text' },
        { name: 'comparison5Without', label: 'Comparison Row 5: Without (red)', type: 'text' },
        { name: 'comparison5With', label: 'Comparison Row 5: With (green)', type: 'text' },
        { name: 'comparison6Without', label: 'Comparison Row 6: Without (red)', type: 'text' },
        { name: 'comparison6With', label: 'Comparison Row 6: With (green)', type: 'text' },

        // Section: Warning Signals
        { name: 'sectionSignalsHeading', label: 'Warning Signals: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionSignalsSubheading', label: 'Warning Signals: Subheading', type: 'text' },
        { name: 'signal1', label: 'Warning Signal 1', type: 'text' },
        { name: 'signal2', label: 'Warning Signal 2', type: 'text' },
        { name: 'signal3', label: 'Warning Signal 3', type: 'text' },
        { name: 'signal4', label: 'Warning Signal 4', type: 'text' },
        { name: 'signal5', label: 'Warning Signal 5', type: 'text' },
        { name: 'signal6', label: 'Warning Signal 6', type: 'text' },

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
      previewUrl="/what-is-sales-enablement"
    />
  )
}
