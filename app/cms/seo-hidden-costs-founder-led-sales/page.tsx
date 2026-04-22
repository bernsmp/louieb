'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoHiddenCostsFounderLedSalesPage() {
  return (
    <SectionEditor
      section="seoHiddenCostsFounderLedSales"
      title="SEO: Hidden Costs of Founder-Led Sales"
      description="Edit content for /what-are-the-hidden-costs-of-founder-led-sales"
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

        // Five Hidden Costs Section Heading
        { name: 'sectionCostsHeading', label: 'Five Hidden Costs: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCostsSubheading', label: 'Five Hidden Costs: Section Subheading', type: 'textarea', rows: 2 },

        // Cost 1
        { name: 'cost1Title', label: 'Cost 1: Title', type: 'text', aiRewrite: true },
        { name: 'cost1Detail', label: 'Cost 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost1Outcome', label: 'Cost 1: "What You Reclaim" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Cost 2
        { name: 'cost2Title', label: 'Cost 2: Title', type: 'text', aiRewrite: true },
        { name: 'cost2Detail', label: 'Cost 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost2Outcome', label: 'Cost 2: "What You Reclaim" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Cost 3
        { name: 'cost3Title', label: 'Cost 3: Title', type: 'text', aiRewrite: true },
        { name: 'cost3Detail', label: 'Cost 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost3Outcome', label: 'Cost 3: "What You Reclaim" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Cost 4
        { name: 'cost4Title', label: 'Cost 4: Title', type: 'text', aiRewrite: true },
        { name: 'cost4Detail', label: 'Cost 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost4Outcome', label: 'Cost 4: "What You Reclaim" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Cost 5
        { name: 'cost5Title', label: 'Cost 5: Title', type: 'text', aiRewrite: true },
        { name: 'cost5Detail', label: 'Cost 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'cost5Outcome', label: 'Cost 5: "What You Reclaim" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

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
        { name: 'compare1Without', label: 'Row 1: Cost (left)', type: 'text' },
        { name: 'compare1With', label: 'Row 1: Reclaim (right)', type: 'text' },
        { name: 'compare2Without', label: 'Row 2: Cost (left)', type: 'text' },
        { name: 'compare2With', label: 'Row 2: Reclaim (right)', type: 'text' },
        { name: 'compare3Without', label: 'Row 3: Cost (left)', type: 'text' },
        { name: 'compare3With', label: 'Row 3: Reclaim (right)', type: 'text' },
        { name: 'compare4Without', label: 'Row 4: Cost (left)', type: 'text' },
        { name: 'compare4With', label: 'Row 4: Reclaim (right)', type: 'text' },
        { name: 'compare5Without', label: 'Row 5: Cost (left)', type: 'text' },
        { name: 'compare5With', label: 'Row 5: Reclaim (right)', type: 'text' },
        { name: 'compare6Without', label: 'Row 6: Cost (left)', type: 'text' },
        { name: 'compare6With', label: 'Row 6: Reclaim (right)', type: 'text' },

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
      previewUrl="/what-are-the-hidden-costs-of-founder-led-sales"
    />
  )
}
