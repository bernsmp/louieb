'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoExpensiveSalesCallMistakePage() {
  return (
    <SectionEditor
      section="seoExpensiveSalesCallMistake"
      title="SEO: Most Expensive Mistake in Sales Calls"
      description="Edit content for /most-expensive-mistake-founders-make-in-sales-calls"
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

        // Costs section
        { name: 'sectionCostsHeading', label: 'Costs: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCostsSubheading', label: 'Costs: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'cost1Title', label: 'Cost 1: Title', type: 'text', aiRewrite: true },
        { name: 'cost1Detail', label: 'Cost 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost1Fix', label: 'Cost 1: "The Fix" Box', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'cost2Title', label: 'Cost 2: Title', type: 'text', aiRewrite: true },
        { name: 'cost2Detail', label: 'Cost 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost2Fix', label: 'Cost 2: "The Fix" Box', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'cost3Title', label: 'Cost 3: Title', type: 'text', aiRewrite: true },
        { name: 'cost3Detail', label: 'Cost 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost3Fix', label: 'Cost 3: "The Fix" Box', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'cost4Title', label: 'Cost 4: Title', type: 'text', aiRewrite: true },
        { name: 'cost4Detail', label: 'Cost 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost4Fix', label: 'Cost 4: "The Fix" Box', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'cost5Title', label: 'Cost 5: Title', type: 'text', aiRewrite: true },
        { name: 'cost5Detail', label: 'Cost 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost5Fix', label: 'Cost 5: "The Fix" Box', type: 'textarea', aiRewrite: true, rows: 2 },

        // SEO paragraphs (each has an inline link after it)
        { name: 'seoPara1', label: 'SEO Paragraph 1 (text before discovery-call link)', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (text before objection-handling link)', type: 'textarea', aiRewrite: true, rows: 5 },

        // Comparison Table
        { name: 'sectionCompareHeading', label: 'Comparison: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompareSubheading', label: 'Comparison: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'compareColLeft', label: 'Comparison: Left Column Header', type: 'text' },
        { name: 'compareColRight', label: 'Comparison: Right Column Header', type: 'text' },
        { name: 'compare1Reply', label: 'Row 1: Listening to Reply (left)', type: 'text' },
        { name: 'compare1Understand', label: 'Row 1: Listening to Understand (right)', type: 'text' },
        { name: 'compare2Reply', label: 'Row 2: Listening to Reply (left)', type: 'text' },
        { name: 'compare2Understand', label: 'Row 2: Listening to Understand (right)', type: 'text' },
        { name: 'compare3Reply', label: 'Row 3: Listening to Reply (left)', type: 'text' },
        { name: 'compare3Understand', label: 'Row 3: Listening to Understand (right)', type: 'text' },
        { name: 'compare4Reply', label: 'Row 4: Listening to Reply (left)', type: 'text' },
        { name: 'compare4Understand', label: 'Row 4: Listening to Understand (right)', type: 'text' },
        { name: 'compare5Reply', label: 'Row 5: Listening to Reply (left)', type: 'text' },
        { name: 'compare5Understand', label: 'Row 5: Listening to Understand (right)', type: 'text' },
        { name: 'compare6Reply', label: 'Row 6: Listening to Reply (left)', type: 'text' },
        { name: 'compare6Understand', label: 'Row 6: Listening to Understand (right)', type: 'text' },

        // Fix steps
        { name: 'sectionFixHeading', label: 'How to Fix: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionFixSubheading', label: 'How to Fix: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'fix1Title', label: 'Fix Step 1: Title', type: 'text', aiRewrite: true },
        { name: 'fix1Detail', label: 'Fix Step 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'fix2Title', label: 'Fix Step 2: Title', type: 'text', aiRewrite: true },
        { name: 'fix2Detail', label: 'Fix Step 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'fix3Title', label: 'Fix Step 3: Title', type: 'text', aiRewrite: true },
        { name: 'fix3Detail', label: 'Fix Step 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },

        // About Louie
        { name: 'aboutBio1', label: 'About Louie: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'aboutBio2', label: 'About Louie: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 4 },

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
      previewUrl="/most-expensive-mistake-founders-make-in-sales-calls"
    />
  )
}
