'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoPipelineStagesVelocityPage() {
  return (
    <SectionEditor
      section="seoPipelineStagesVelocity"
      title="SEO: Pipeline Stages & Pipeline Velocity"
      description="Edit content for /what-do-pipeline-stages-have-to-do-with-pipeline-velocity"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Eyebrow Tag', type: 'text', aiRewrite: true },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroH2', label: 'Hero: Subtitle (H2)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Key Takeaways
        { name: 'takeawaysHeading', label: 'Key Takeaways: Heading', type: 'text' },
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway5', label: 'Key Takeaway 5', type: 'textarea', aiRewrite: true, rows: 3 },

        // Insights Section Heading
        { name: 'sectionInsightsHeading', label: 'Insights: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionInsightsSubheading', label: 'Insights: Section Subheading', type: 'textarea', rows: 2 },

        // Insight 1
        { name: 'insight1Title', label: 'Insight 1: Title', type: 'text', aiRewrite: true },
        { name: 'insight1Detail', label: 'Insight 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'insight1Outcome', label: 'Insight 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Insight 2
        { name: 'insight2Title', label: 'Insight 2: Title', type: 'text', aiRewrite: true },
        { name: 'insight2Detail', label: 'Insight 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'insight2Outcome', label: 'Insight 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Insight 3
        { name: 'insight3Title', label: 'Insight 3: Title', type: 'text', aiRewrite: true },
        { name: 'insight3Detail', label: 'Insight 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'insight3Outcome', label: 'Insight 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Insight 4
        { name: 'insight4Title', label: 'Insight 4: Title', type: 'text', aiRewrite: true },
        { name: 'insight4Detail', label: 'Insight 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'insight4Outcome', label: 'Insight 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Insight 5
        { name: 'insight5Title', label: 'Insight 5: Title', type: 'text', aiRewrite: true },
        { name: 'insight5Detail', label: 'Insight 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'insight5Outcome', label: 'Insight 5: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // SEO paragraphs (with inline links)
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (text before first link)', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara2b', label: 'SEO Paragraph 2 (text between the two links)', type: 'textarea', rows: 2 },
        { name: 'seoPara2c', label: 'SEO Paragraph 2 (text after second link)', type: 'textarea', rows: 2 },

        // Comparison Table
        { name: 'sectionCompareHeading', label: 'Comparison: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompareSubheading', label: 'Comparison: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'compareColLeft', label: 'Comparison: Left Column Header', type: 'text' },
        { name: 'compareColRight', label: 'Comparison: Right Column Header', type: 'text' },
        { name: 'compare1Without', label: 'Row 1: Labels (left)', type: 'text' },
        { name: 'compare1With', label: 'Row 1: Stopwatch (right)', type: 'text' },
        { name: 'compare2Without', label: 'Row 2: Labels (left)', type: 'text' },
        { name: 'compare2With', label: 'Row 2: Stopwatch (right)', type: 'text' },
        { name: 'compare3Without', label: 'Row 3: Labels (left)', type: 'text' },
        { name: 'compare3With', label: 'Row 3: Stopwatch (right)', type: 'text' },
        { name: 'compare4Without', label: 'Row 4: Labels (left)', type: 'text' },
        { name: 'compare4With', label: 'Row 4: Stopwatch (right)', type: 'text' },
        { name: 'compare5Without', label: 'Row 5: Labels (left)', type: 'text' },
        { name: 'compare5With', label: 'Row 5: Stopwatch (right)', type: 'text' },
        { name: 'compare6Without', label: 'Row 6: Labels (left)', type: 'text' },
        { name: 'compare6With', label: 'Row 6: Stopwatch (right)', type: 'text' },

        // Velocity Formula callout
        { name: 'sectionFormulaHeading', label: 'Formula: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionFormulaSubheading', label: 'Formula: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'formulaLine', label: 'Formula: The Equation Line', type: 'text' },
        { name: 'formulaBody', label: 'Formula: Body Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },

        // About Louie
        { name: 'aboutBio1', label: 'About Louie: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'aboutBio2', label: 'About Louie: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 3 },

        // FAQs
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'faq5Question', label: 'FAQ 5: Question', type: 'text' },
        { name: 'faq5Answer', label: 'FAQ 5: Answer', type: 'textarea', aiRewrite: true, rows: 4 },

        // CTA
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', aiRewrite: true, rows: 3 },
      ]}
      previewUrl="/what-do-pipeline-stages-have-to-do-with-pipeline-velocity"
    />
  )
}
