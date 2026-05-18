'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoTimeWithFractionalSalesLeaderPage() {
  return (
    <SectionEditor
      section="seoTimeWithFractionalSalesLeader"
      title="SEO: How Much Time Do I Need to Spend With a Fractional Sales Leader?"
      description="Edit content for /how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader"
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

        // Phases section
        { name: 'sectionPhasesHeading', label: 'Phases: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionPhasesSubheading', label: 'Phases: Section Subheading', type: 'textarea', rows: 2 },

        // Phase 1
        { name: 'phase1Title', label: 'Phase 1: Title', type: 'text', aiRewrite: true },
        { name: 'phase1Detail', label: 'Phase 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'phase1Outcome', label: 'Phase 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Phase 2
        { name: 'phase2Title', label: 'Phase 2: Title', type: 'text', aiRewrite: true },
        { name: 'phase2Detail', label: 'Phase 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'phase2Outcome', label: 'Phase 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Phase 3
        { name: 'phase3Title', label: 'Phase 3: Title', type: 'text', aiRewrite: true },
        { name: 'phase3Detail', label: 'Phase 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'phase3Outcome', label: 'Phase 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Phase 4
        { name: 'phase4Title', label: 'Phase 4: Title', type: 'text', aiRewrite: true },
        { name: 'phase4Detail', label: 'Phase 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'phase4Outcome', label: 'Phase 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // SEO paragraphs (with inline link)
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (text before inline link)', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2b', label: 'SEO Paragraph 2 (text after inline link)', type: 'textarea', rows: 2 },

        // Comparison Table
        { name: 'sectionCompareHeading', label: 'Comparison: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompareSubheading', label: 'Comparison: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'compareColLeft', label: 'Comparison: Left Column Header', type: 'text' },
        { name: 'compareColRight', label: 'Comparison: Right Column Header', type: 'text' },
        { name: 'compare1Dependent', label: 'Row 1: Stalls (left)', type: 'text' },
        { name: 'compare1System', label: 'Row 1: Installs (right)', type: 'text' },
        { name: 'compare2Dependent', label: 'Row 2: Stalls (left)', type: 'text' },
        { name: 'compare2System', label: 'Row 2: Installs (right)', type: 'text' },
        { name: 'compare3Dependent', label: 'Row 3: Stalls (left)', type: 'text' },
        { name: 'compare3System', label: 'Row 3: Installs (right)', type: 'text' },
        { name: 'compare4Dependent', label: 'Row 4: Stalls (left)', type: 'text' },
        { name: 'compare4System', label: 'Row 4: Installs (right)', type: 'text' },
        { name: 'compare5Dependent', label: 'Row 5: Stalls (left)', type: 'text' },
        { name: 'compare5System', label: 'Row 5: Installs (right)', type: 'text' },
        { name: 'compare6Dependent', label: 'Row 6: Stalls (left)', type: 'text' },
        { name: 'compare6System', label: 'Row 6: Installs (right)', type: 'text' },

        // What to Do This Week
        { name: 'sectionNextHeading', label: 'How to Prepare: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionNextSubheading', label: 'How to Prepare: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'next1', label: 'Prep Item 1', type: 'text', aiRewrite: true },
        { name: 'next2', label: 'Prep Item 2', type: 'text', aiRewrite: true },
        { name: 'next3', label: 'Prep Item 3', type: 'text', aiRewrite: true },
        { name: 'next4', label: 'Prep Item 4', type: 'text', aiRewrite: true },
        { name: 'next5', label: 'Prep Item 5', type: 'text', aiRewrite: true },

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
      previewUrl="/how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader"
    />
  )
}
