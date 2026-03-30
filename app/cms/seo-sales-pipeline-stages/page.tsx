'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoSalesPipelineStagesPage() {
  return (
    <SectionEditor
      section="seoSalesPipelineStages"
      title="SEO: Sales Pipeline Stages"
      description="Edit content for /sales-pipeline-stages"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 6 Stages
        { name: 'sectionStagesHeading', label: 'Section: 6 Stages — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionStagesSubheading', label: 'Section: 6 Stages — Subheading', type: 'text' },
        { name: 'stage1Title', label: 'Stage 1: Title', type: 'text' },
        { name: 'stage1Body', label: 'Stage 1: Body', type: 'textarea', rows: 4 },
        { name: 'stage2Title', label: 'Stage 2: Title', type: 'text' },
        { name: 'stage2Body', label: 'Stage 2: Body', type: 'textarea', rows: 4 },
        { name: 'stage3Title', label: 'Stage 3: Title', type: 'text' },
        { name: 'stage3Body', label: 'Stage 3: Body', type: 'textarea', rows: 4 },
        { name: 'stage4Title', label: 'Stage 4: Title', type: 'text' },
        { name: 'stage4Body', label: 'Stage 4: Body', type: 'textarea', rows: 4 },
        { name: 'stage5Title', label: 'Stage 5: Title', type: 'text' },
        { name: 'stage5Body', label: 'Stage 5: Body', type: 'textarea', rows: 4 },
        { name: 'stage6Title', label: 'Stage 6: Title', type: 'text' },
        { name: 'stage6Body', label: 'Stage 6: Body', type: 'textarea', rows: 4 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Comparison Table
        { name: 'sectionComparisonHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComparisonSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'comparison1Without', label: 'Comparison Row 1: Vague Stages (left)', type: 'textarea', rows: 2 },
        { name: 'comparison1With', label: 'Comparison Row 1: Criteria-Based (right)', type: 'textarea', rows: 2 },
        { name: 'comparison2Without', label: 'Comparison Row 2: Vague', type: 'textarea', rows: 2 },
        { name: 'comparison2With', label: 'Comparison Row 2: Criteria-Based', type: 'textarea', rows: 2 },
        { name: 'comparison3Without', label: 'Comparison Row 3: Vague', type: 'textarea', rows: 2 },
        { name: 'comparison3With', label: 'Comparison Row 3: Criteria-Based', type: 'textarea', rows: 2 },
        { name: 'comparison4Without', label: 'Comparison Row 4: Vague', type: 'textarea', rows: 2 },
        { name: 'comparison4With', label: 'Comparison Row 4: Criteria-Based', type: 'textarea', rows: 2 },
        { name: 'comparison5Without', label: 'Comparison Row 5: Vague', type: 'textarea', rows: 2 },
        { name: 'comparison5With', label: 'Comparison Row 5: Criteria-Based', type: 'textarea', rows: 2 },
        { name: 'comparison6Without', label: 'Comparison Row 6: Vague', type: 'textarea', rows: 2 },
        { name: 'comparison6With', label: 'Comparison Row 6: Criteria-Based', type: 'textarea', rows: 2 },

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
      previewUrl="/sales-pipeline-stages"
    />
  )
}
