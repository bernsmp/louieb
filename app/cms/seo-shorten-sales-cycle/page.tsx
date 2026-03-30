'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoShortenSalesCyclePage() {
  return (
    <SectionEditor
      section="seoHowToShortenSalesCycle"
      title="SEO: How to Shorten the Sales Cycle"
      description="Edit content for /how-to-shorten-sales-cycle"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Tactics
        { name: 'sectionTacticsHeading', label: 'Section: 5 Tactics — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionTacticsSubheading', label: 'Section: 5 Tactics — Subheading', type: 'text' },
        { name: 'tactic1Title', label: 'Tactic 1: Title', type: 'text' },
        { name: 'tactic1Body', label: 'Tactic 1: Body', type: 'textarea', rows: 4 },
        { name: 'tactic2Title', label: 'Tactic 2: Title', type: 'text' },
        { name: 'tactic2Body', label: 'Tactic 2: Body', type: 'textarea', rows: 4 },
        { name: 'tactic3Title', label: 'Tactic 3: Title', type: 'text' },
        { name: 'tactic3Body', label: 'Tactic 3: Body', type: 'textarea', rows: 4 },
        { name: 'tactic4Title', label: 'Tactic 4: Title', type: 'text' },
        { name: 'tactic4Body', label: 'Tactic 4: Body', type: 'textarea', rows: 4 },
        { name: 'tactic5Title', label: 'Tactic 5: Title', type: 'text' },
        { name: 'tactic5Body', label: 'Tactic 5: Body', type: 'textarea', rows: 4 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Comparison Table
        { name: 'sectionComparisonHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComparisonSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'comparison1Without', label: 'Comparison Row 1: Long Cycle (left)', type: 'textarea', rows: 2 },
        { name: 'comparison1With', label: 'Comparison Row 1: Short Cycle (right)', type: 'textarea', rows: 2 },
        { name: 'comparison2Without', label: 'Comparison Row 2: Long Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison2With', label: 'Comparison Row 2: Short Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison3Without', label: 'Comparison Row 3: Long Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison3With', label: 'Comparison Row 3: Short Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison4Without', label: 'Comparison Row 4: Long Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison4With', label: 'Comparison Row 4: Short Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison5Without', label: 'Comparison Row 5: Long Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison5With', label: 'Comparison Row 5: Short Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison6Without', label: 'Comparison Row 6: Long Cycle', type: 'textarea', rows: 2 },
        { name: 'comparison6With', label: 'Comparison Row 6: Short Cycle', type: 'textarea', rows: 2 },

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
      previewUrl="/how-to-shorten-sales-cycle"
    />
  )
}
