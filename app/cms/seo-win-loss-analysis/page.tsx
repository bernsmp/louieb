'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoWinLossAnalysisPage() {
  return (
    <SectionEditor
      section="seoWinLossAnalysis"
      title="SEO: Win-Loss Analysis"
      description="Edit content for /win-loss-analysis-sales"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Steps
        { name: 'sectionStepsHeading', label: 'Section: 5 Steps — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionStepsSubheading', label: 'Section: 5 Steps — Subheading', type: 'text' },
        { name: 'step1Title', label: 'Step 1: Title', type: 'text' },
        { name: 'step1Body', label: 'Step 1: Body', type: 'textarea', rows: 4 },
        { name: 'step2Title', label: 'Step 2: Title', type: 'text' },
        { name: 'step2Body', label: 'Step 2: Body', type: 'textarea', rows: 4 },
        { name: 'step3Title', label: 'Step 3: Title', type: 'text' },
        { name: 'step3Body', label: 'Step 3: Body', type: 'textarea', rows: 4 },
        { name: 'step4Title', label: 'Step 4: Title', type: 'text' },
        { name: 'step4Body', label: 'Step 4: Body', type: 'textarea', rows: 4 },
        { name: 'step5Title', label: 'Step 5: Title', type: 'text' },
        { name: 'step5Body', label: 'Step 5: Body', type: 'textarea', rows: 4 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Comparison Table
        { name: 'sectionComparisonHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComparisonSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'comparison1Without', label: 'Comparison Row 1: Without Win-Loss', type: 'textarea', rows: 2 },
        { name: 'comparison1With', label: 'Comparison Row 1: With Win-Loss', type: 'textarea', rows: 2 },
        { name: 'comparison2Without', label: 'Comparison Row 2: Without', type: 'textarea', rows: 2 },
        { name: 'comparison2With', label: 'Comparison Row 2: With', type: 'textarea', rows: 2 },
        { name: 'comparison3Without', label: 'Comparison Row 3: Without', type: 'textarea', rows: 2 },
        { name: 'comparison3With', label: 'Comparison Row 3: With', type: 'textarea', rows: 2 },
        { name: 'comparison4Without', label: 'Comparison Row 4: Without', type: 'textarea', rows: 2 },
        { name: 'comparison4With', label: 'Comparison Row 4: With', type: 'textarea', rows: 2 },
        { name: 'comparison5Without', label: 'Comparison Row 5: Without', type: 'textarea', rows: 2 },
        { name: 'comparison5With', label: 'Comparison Row 5: With', type: 'textarea', rows: 2 },
        { name: 'comparison6Without', label: 'Comparison Row 6: Without', type: 'textarea', rows: 2 },
        { name: 'comparison6With', label: 'Comparison Row 6: With', type: 'textarea', rows: 2 },

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
      previewUrl="/win-loss-analysis-sales"
    />
  )
}
