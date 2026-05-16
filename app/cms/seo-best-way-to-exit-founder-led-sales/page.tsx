'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoBestWayToExitFounderLedSalesPage() {
  return (
    <SectionEditor
      section="seoBestWayToExitFounderLedSales"
      title="SEO: Best Way to Exit Founder-Led Sales"
      description="Edit content for /what-is-the-best-way-to-exit-founder-led-sales"
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

        // Checklist Section Heading
        { name: 'sectionChecklistHeading', label: 'Checklist: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionChecklistSubheading', label: 'Checklist: Section Subheading', type: 'textarea', rows: 2 },

        // Item 1
        { name: 'item1Title', label: 'Item 1: Title', type: 'text', aiRewrite: true },
        { name: 'item1Detail', label: 'Item 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'item1Outcome', label: 'Item 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Item 2
        { name: 'item2Title', label: 'Item 2: Title', type: 'text', aiRewrite: true },
        { name: 'item2Detail', label: 'Item 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'item2Outcome', label: 'Item 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Item 3
        { name: 'item3Title', label: 'Item 3: Title', type: 'text', aiRewrite: true },
        { name: 'item3Detail', label: 'Item 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'item3Outcome', label: 'Item 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Item 4
        { name: 'item4Title', label: 'Item 4: Title', type: 'text', aiRewrite: true },
        { name: 'item4Detail', label: 'Item 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'item4Outcome', label: 'Item 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Item 5
        { name: 'item5Title', label: 'Item 5: Title', type: 'text', aiRewrite: true },
        { name: 'item5Detail', label: 'Item 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'item5Outcome', label: 'Item 5: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // SEO paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (text before first link)', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara2b', label: 'SEO Paragraph 2 (text between the two links)', type: 'textarea', rows: 2 },
        { name: 'seoPara2c', label: 'SEO Paragraph 2 (text after second link)', type: 'textarea', rows: 2 },

        // Comparison
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

        // What to Do This Week
        { name: 'sectionTodoHeading', label: 'What to Do This Week: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionTodoSubheading', label: 'What to Do This Week: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'todo1', label: 'Action 1', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'todo2', label: 'Action 2', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'todo3', label: 'Action 3', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'todo4', label: 'Action 4', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'todo5', label: 'Action 5', type: 'textarea', aiRewrite: true, rows: 2 },

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
      previewUrl="/what-is-the-best-way-to-exit-founder-led-sales"
    />
  )
}
