'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoFslRoiPage() {
  return (
    <SectionEditor
      section="seoFractionalSalesLeadershipRoi"
      title="SEO: Fractional Sales Leadership ROI"
      description="Edit content for /fractional-sales-leadership-roi"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 4 ROI Dimensions
        { name: 'sectionRoiHeading', label: 'Section: ROI Dimensions — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionRoiSubheading', label: 'Section: ROI Dimensions — Subheading', type: 'text' },
        { name: 'roi1Metric', label: 'ROI Card 1: Metric label', type: 'text' },
        { name: 'roi1Value', label: 'ROI Card 1: Value badge (e.g. "60–75% less")', type: 'text' },
        { name: 'roi1Detail', label: 'ROI Card 1: Detail paragraph', type: 'textarea', rows: 3 },
        { name: 'roi2Metric', label: 'ROI Card 2: Metric label', type: 'text' },
        { name: 'roi2Value', label: 'ROI Card 2: Value badge', type: 'text' },
        { name: 'roi2Detail', label: 'ROI Card 2: Detail paragraph', type: 'textarea', rows: 3 },
        { name: 'roi3Metric', label: 'ROI Card 3: Metric label', type: 'text' },
        { name: 'roi3Value', label: 'ROI Card 3: Value badge', type: 'text' },
        { name: 'roi3Detail', label: 'ROI Card 3: Detail paragraph', type: 'textarea', rows: 3 },
        { name: 'roi4Metric', label: 'ROI Card 4: Metric label', type: 'text' },
        { name: 'roi4Value', label: 'ROI Card 4: Value badge', type: 'text' },
        { name: 'roi4Detail', label: 'ROI Card 4: Detail paragraph', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to case study follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Cost Comparison Table
        { name: 'sectionCostHeading', label: 'Cost Comparison: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCostSubheading', label: 'Cost Comparison: Subheading', type: 'text' },
        { name: 'cost1Item', label: 'Cost Row 1: Label', type: 'text' },
        { name: 'cost1Fractional', label: 'Cost Row 1: Fractional value', type: 'text' },
        { name: 'cost1FullTime', label: 'Cost Row 1: Full-time value', type: 'text' },
        { name: 'cost2Item', label: 'Cost Row 2: Label', type: 'text' },
        { name: 'cost2Fractional', label: 'Cost Row 2: Fractional value', type: 'text' },
        { name: 'cost2FullTime', label: 'Cost Row 2: Full-time value', type: 'text' },
        { name: 'cost3Item', label: 'Cost Row 3: Label', type: 'text' },
        { name: 'cost3Fractional', label: 'Cost Row 3: Fractional value', type: 'text' },
        { name: 'cost3FullTime', label: 'Cost Row 3: Full-time value', type: 'text' },
        { name: 'cost4Item', label: 'Cost Row 4: Label', type: 'text' },
        { name: 'cost4Fractional', label: 'Cost Row 4: Fractional value', type: 'text' },
        { name: 'cost4FullTime', label: 'Cost Row 4: Full-time value', type: 'text' },
        { name: 'cost5Item', label: 'Cost Row 5: Label', type: 'text' },
        { name: 'cost5Fractional', label: 'Cost Row 5: Fractional value', type: 'text' },
        { name: 'cost5FullTime', label: 'Cost Row 5: Full-time value', type: 'text' },

        // Section: ROI Timeline
        { name: 'sectionTimelineHeading', label: 'ROI Timeline: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionTimelineSubheading', label: 'ROI Timeline: Subheading', type: 'text' },
        { name: 'timeline1Phase', label: 'Timeline Phase 1: Label (e.g. "Days 1–30")', type: 'text' },
        { name: 'timeline1Title', label: 'Timeline Phase 1: Title', type: 'text' },
        { name: 'timeline1O1', label: 'Timeline Phase 1: Outcome 1', type: 'text' },
        { name: 'timeline1O2', label: 'Timeline Phase 1: Outcome 2', type: 'text' },
        { name: 'timeline1O3', label: 'Timeline Phase 1: Outcome 3', type: 'text' },
        { name: 'timeline1O4', label: 'Timeline Phase 1: Outcome 4', type: 'text' },
        { name: 'timeline2Phase', label: 'Timeline Phase 2: Label', type: 'text' },
        { name: 'timeline2Title', label: 'Timeline Phase 2: Title', type: 'text' },
        { name: 'timeline2O1', label: 'Timeline Phase 2: Outcome 1', type: 'text' },
        { name: 'timeline2O2', label: 'Timeline Phase 2: Outcome 2', type: 'text' },
        { name: 'timeline2O3', label: 'Timeline Phase 2: Outcome 3', type: 'text' },
        { name: 'timeline2O4', label: 'Timeline Phase 2: Outcome 4', type: 'text' },
        { name: 'timeline3Phase', label: 'Timeline Phase 3: Label', type: 'text' },
        { name: 'timeline3Title', label: 'Timeline Phase 3: Title', type: 'text' },
        { name: 'timeline3O1', label: 'Timeline Phase 3: Outcome 1', type: 'text' },
        { name: 'timeline3O2', label: 'Timeline Phase 3: Outcome 2', type: 'text' },
        { name: 'timeline3O3', label: 'Timeline Phase 3: Outcome 3', type: 'text' },
        { name: 'timeline3O4', label: 'Timeline Phase 3: Outcome 4', type: 'text' },

        // Section: When ROI Is Real
        { name: 'sectionWhenHeading', label: 'When ROI Is Real: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionWhenSubheading', label: 'When ROI Is Real: Subheading', type: 'text' },
        { name: 'when1', label: 'Green Signal 1 (ROI is real)', type: 'text' },
        { name: 'when2', label: 'Green Signal 2 (ROI is real)', type: 'text' },
        { name: 'when3', label: 'Green Signal 3 (ROI is real)', type: 'text' },
        { name: 'when4', label: 'Green Signal 4 (ROI is real)', type: 'text' },
        { name: 'when5', label: 'Red Signal 5 (ROI is not real)', type: 'text' },
        { name: 'when6', label: 'Red Signal 6 (ROI is not real)', type: 'text' },

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
      previewUrl="/fractional-sales-leadership-roi"
    />
  )
}
