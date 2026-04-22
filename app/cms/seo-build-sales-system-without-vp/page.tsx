'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoBuildSalesSystemWithoutVpPage() {
  return (
    <SectionEditor
      section="seoBuildSalesSystemWithoutVp"
      title="SEO: Build a Sales System Without a Full-Time VP"
      description="Edit content for /how-to-build-sales-system-without-full-time-vp"
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

        // Four Components Section Heading
        { name: 'sectionComponentsHeading', label: 'Four Components: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComponentsSubheading', label: 'Four Components: Section Subheading', type: 'textarea', rows: 2 },

        // Component 1
        { name: 'comp1Title', label: 'Component 1: Title', type: 'text', aiRewrite: true },
        { name: 'comp1Detail', label: 'Component 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp1Outcome', label: 'Component 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Component 2
        { name: 'comp2Title', label: 'Component 2: Title', type: 'text', aiRewrite: true },
        { name: 'comp2Detail', label: 'Component 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp2Outcome', label: 'Component 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Component 3
        { name: 'comp3Title', label: 'Component 3: Title', type: 'text', aiRewrite: true },
        { name: 'comp3Detail', label: 'Component 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp3Outcome', label: 'Component 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Component 4
        { name: 'comp4Title', label: 'Component 4: Title', type: 'text', aiRewrite: true },
        { name: 'comp4Detail', label: 'Component 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp4Outcome', label: 'Component 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

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
        { name: 'compare1Without', label: 'Row 1: Without (left)', type: 'text' },
        { name: 'compare1With', label: 'Row 1: With (right)', type: 'text' },
        { name: 'compare2Without', label: 'Row 2: Without (left)', type: 'text' },
        { name: 'compare2With', label: 'Row 2: With (right)', type: 'text' },
        { name: 'compare3Without', label: 'Row 3: Without (left)', type: 'text' },
        { name: 'compare3With', label: 'Row 3: With (right)', type: 'text' },
        { name: 'compare4Without', label: 'Row 4: Without (left)', type: 'text' },
        { name: 'compare4With', label: 'Row 4: With (right)', type: 'text' },
        { name: 'compare5Without', label: 'Row 5: Without (left)', type: 'text' },
        { name: 'compare5With', label: 'Row 5: With (right)', type: 'text' },
        { name: 'compare6Without', label: 'Row 6: Without (left)', type: 'text' },
        { name: 'compare6With', label: 'Row 6: With (right)', type: 'text' },

        // Build Sequence (3 phases)
        { name: 'sectionSequenceHeading', label: 'Build Sequence: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionSequenceSubheading', label: 'Build Sequence: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'phase1Title', label: 'Phase 1: Title', type: 'text', aiRewrite: true },
        { name: 'phase1Detail', label: 'Phase 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'phase2Title', label: 'Phase 2: Title', type: 'text', aiRewrite: true },
        { name: 'phase2Detail', label: 'Phase 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'phase3Title', label: 'Phase 3: Title', type: 'text', aiRewrite: true },
        { name: 'phase3Detail', label: 'Phase 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },

        // Economics Callout
        { name: 'sectionEconomicsHeading', label: 'Economics: Section Heading', type: 'text', aiRewrite: true },
        { name: 'econLeftLabel', label: 'Economics Left: Label', type: 'text' },
        { name: 'econLeftCost', label: 'Economics Left: Cost', type: 'text' },
        { name: 'econLeftDetail', label: 'Economics Left: Detail', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'econRightLabel', label: 'Economics Right: Label', type: 'text' },
        { name: 'econRightCost', label: 'Economics Right: Cost', type: 'text' },
        { name: 'econRightDetail', label: 'Economics Right: Detail', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'econSummary', label: 'Economics: Summary (text below)', type: 'textarea', aiRewrite: true, rows: 3 },

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
      previewUrl="/how-to-build-sales-system-without-full-time-vp"
    />
  )
}
