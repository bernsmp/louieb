'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoWhatIsRevOpsPage() {
  return (
    <SectionEditor
      section="seoWhatIsRevOps"
      title="SEO: What Is Revenue Operations (RevOps)?"
      description="Edit content for /what-is-revenue-operations-revops"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: What RevOps Means (4 cards)
        { name: 'sectionDefinitionHeading', label: 'Section: Definition — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionDefinitionSubheading', label: 'Section: Definition — Subheading', type: 'text' },
        { name: 'def1Title', label: 'Definition Card 1: Title', type: 'text' },
        { name: 'def1Body', label: 'Definition Card 1: Body', type: 'textarea', rows: 3 },
        { name: 'def2Title', label: 'Definition Card 2: Title', type: 'text' },
        { name: 'def2Body', label: 'Definition Card 2: Body', type: 'textarea', rows: 3 },
        { name: 'def3Title', label: 'Definition Card 3: Title', type: 'text' },
        { name: 'def3Body', label: 'Definition Card 3: Body', type: 'textarea', rows: 3 },
        { name: 'def4Title', label: 'Definition Card 4: Title', type: 'text' },
        { name: 'def4Body', label: 'Definition Card 4: Body', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to forecasting follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Comparison Table (5 rows × 4 cols)
        { name: 'sectionComparisonHeading', label: 'Comparison Table: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComparisonSubheading', label: 'Comparison Table: Subheading', type: 'text' },
        { name: 'comp1Label', label: 'Row 1: Label', type: 'text' },
        { name: 'comp1Sales', label: 'Row 1: Sales column', type: 'text' },
        { name: 'comp1Revops', label: 'Row 1: RevOps column', type: 'text' },
        { name: 'comp1Fractional', label: 'Row 1: Fractional Sales Leader column', type: 'text' },
        { name: 'comp2Label', label: 'Row 2: Label', type: 'text' },
        { name: 'comp2Sales', label: 'Row 2: Sales column', type: 'text' },
        { name: 'comp2Revops', label: 'Row 2: RevOps column', type: 'text' },
        { name: 'comp2Fractional', label: 'Row 2: Fractional Sales Leader column', type: 'text' },
        { name: 'comp3Label', label: 'Row 3: Label', type: 'text' },
        { name: 'comp3Sales', label: 'Row 3: Sales column', type: 'text' },
        { name: 'comp3Revops', label: 'Row 3: RevOps column', type: 'text' },
        { name: 'comp3Fractional', label: 'Row 3: Fractional Sales Leader column', type: 'text' },
        { name: 'comp4Label', label: 'Row 4: Label', type: 'text' },
        { name: 'comp4Sales', label: 'Row 4: Sales column', type: 'text' },
        { name: 'comp4Revops', label: 'Row 4: RevOps column', type: 'text' },
        { name: 'comp4Fractional', label: 'Row 4: Fractional Sales Leader column', type: 'text' },
        { name: 'comp5Label', label: 'Row 5: Label', type: 'text' },
        { name: 'comp5Sales', label: 'Row 5: Sales column', type: 'text' },
        { name: 'comp5Revops', label: 'Row 5: RevOps column', type: 'text' },
        { name: 'comp5Fractional', label: 'Row 5: Fractional Sales Leader column', type: 'text' },

        // Section: Needs RevOps signals
        { name: 'sectionNeedsHeading', label: 'Needs RevOps: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionNeedsSubheading', label: 'Needs RevOps: Subheading', type: 'text' },
        { name: 'needs1', label: 'Red Signal 1 (needs RevOps)', type: 'text' },
        { name: 'needs2', label: 'Red Signal 2 (needs RevOps)', type: 'text' },
        { name: 'needs3', label: 'Red Signal 3 (needs RevOps)', type: 'text' },
        { name: 'needs4', label: 'Red Signal 4 (needs RevOps)', type: 'text' },
        { name: 'needs5', label: 'Red Signal 5 (needs RevOps)', type: 'text' },
        { name: 'needs6', label: 'Green Signal 6 (already has it)', type: 'text' },

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
      previewUrl="/what-is-revenue-operations-revops"
    />
  )
}
