'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function FslVsConsultantCmsPage() {
  return (
    <SectionEditor
      section="fslVsConsultantPage"
      title="FSL vs Consultant Page"
      description="Edit content for /fractional-sales-leader-vs-consultant"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Eyebrow Tag', type: 'text', aiRewrite: true },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroH2', label: 'Hero: Subtitle (H2)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },

        // Key Takeaways
        { name: 'takeawaysHeading', label: 'Key Takeaways: Heading', type: 'text' },
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway5', label: 'Key Takeaway 5', type: 'textarea', aiRewrite: true, rows: 3 },

        // Five Differences
        { name: 'sectionDiffHeading', label: 'Differences: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionDiffSubheading', label: 'Differences: Section Subheading', type: 'textarea', rows: 2 },

        { name: 'diff1Title', label: 'Difference 1: Title', type: 'text', aiRewrite: true },
        { name: 'diff1Detail', label: 'Difference 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'diff1Outcome', label: 'Difference 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'diff2Title', label: 'Difference 2: Title', type: 'text', aiRewrite: true },
        { name: 'diff2Detail', label: 'Difference 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'diff2Outcome', label: 'Difference 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'diff3Title', label: 'Difference 3: Title', type: 'text', aiRewrite: true },
        { name: 'diff3Detail', label: 'Difference 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'diff3Outcome', label: 'Difference 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'diff4Title', label: 'Difference 4: Title', type: 'text', aiRewrite: true },
        { name: 'diff4Detail', label: 'Difference 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'diff4Outcome', label: 'Difference 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'diff5Title', label: 'Difference 5: Title', type: 'text', aiRewrite: true },
        { name: 'diff5Detail', label: 'Difference 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'diff5Outcome', label: 'Difference 5: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

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
        { name: 'compare1Consultant', label: 'Row 1: Consultant (left)', type: 'text' },
        { name: 'compare1Fsl', label: 'Row 1: Fractional Sales Leader (right)', type: 'text' },
        { name: 'compare2Consultant', label: 'Row 2: Consultant (left)', type: 'text' },
        { name: 'compare2Fsl', label: 'Row 2: Fractional Sales Leader (right)', type: 'text' },
        { name: 'compare3Consultant', label: 'Row 3: Consultant (left)', type: 'text' },
        { name: 'compare3Fsl', label: 'Row 3: Fractional Sales Leader (right)', type: 'text' },
        { name: 'compare4Consultant', label: 'Row 4: Consultant (left)', type: 'text' },
        { name: 'compare4Fsl', label: 'Row 4: Fractional Sales Leader (right)', type: 'text' },
        { name: 'compare5Consultant', label: 'Row 5: Consultant (left)', type: 'text' },
        { name: 'compare5Fsl', label: 'Row 5: Fractional Sales Leader (right)', type: 'text' },
        { name: 'compare6Consultant', label: 'Row 6: Consultant (left)', type: 'text' },
        { name: 'compare6Fsl', label: 'Row 6: Fractional Sales Leader (right)', type: 'text' },

        // When To Hire (3 cards)
        { name: 'sectionWhenHeading', label: 'When To Hire: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionWhenSubheading', label: 'When To Hire: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'when1Title', label: 'When 1: Title', type: 'text', aiRewrite: true },
        { name: 'when1Detail', label: 'When 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'when2Title', label: 'When 2: Title', type: 'text', aiRewrite: true },
        { name: 'when2Detail', label: 'When 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'when3Title', label: 'When 3: Title', type: 'text', aiRewrite: true },
        { name: 'when3Detail', label: 'When 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },

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
      previewUrl="/fractional-sales-leader-vs-consultant"
    />
  )
}
