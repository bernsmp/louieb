'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoWhatBreaksFounderSellingPage() {
  return (
    <SectionEditor
      section="seoWhatBreaksFounderSelling"
      title="SEO: What Breaks First When a Founder Stops Selling?"
      description="Edit content for /what-breaks-first-when-founder-stops-selling"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Tag (small uppercase label)', type: 'text' },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Things That Break
        { name: 'sectionBreaksHeading', label: 'Section: 5 Things That Break — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionBreaksSubheading', label: 'Section: 5 Things That Break — Subheading', type: 'text' },

        { name: 'break1Title', label: 'Breakdown 1: Title', type: 'text' },
        { name: 'break1Detail', label: 'Breakdown 1: Detail (main body)', type: 'textarea', rows: 4 },
        { name: 'break1Fix', label: 'Breakdown 1: Fix Before You Leave (blue box)', type: 'textarea', rows: 3 },

        { name: 'break2Title', label: 'Breakdown 2: Title', type: 'text' },
        { name: 'break2Detail', label: 'Breakdown 2: Detail', type: 'textarea', rows: 4 },
        { name: 'break2Fix', label: 'Breakdown 2: Fix Before You Leave (blue box)', type: 'textarea', rows: 3 },

        { name: 'break3Title', label: 'Breakdown 3: Title', type: 'text' },
        { name: 'break3Detail', label: 'Breakdown 3: Detail', type: 'textarea', rows: 4 },
        { name: 'break3Fix', label: 'Breakdown 3: Fix Before You Leave (blue box)', type: 'textarea', rows: 3 },

        { name: 'break4Title', label: 'Breakdown 4: Title', type: 'text' },
        { name: 'break4Detail', label: 'Breakdown 4: Detail', type: 'textarea', rows: 4 },
        { name: 'break4Fix', label: 'Breakdown 4: Fix Before You Leave (blue box)', type: 'textarea', rows: 3 },

        { name: 'break5Title', label: 'Breakdown 5: Title', type: 'text' },
        { name: 'break5Detail', label: 'Breakdown 5: Detail', type: 'textarea', rows: 4 },
        { name: 'break5Fix', label: 'Breakdown 5: Fix Before You Leave (blue box)', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to transition page follows)', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara2b', label: 'SEO Paragraph 2: Text after link', type: 'text' },

        // Comparison Table
        { name: 'sectionCompareHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompareSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'compare1Fail', label: 'Compare Row 1: Transition Fails (left)', type: 'text' },
        { name: 'compare1Succeed', label: 'Compare Row 1: Transition Succeeds (right)', type: 'text' },
        { name: 'compare2Fail', label: 'Compare Row 2: Fails', type: 'text' },
        { name: 'compare2Succeed', label: 'Compare Row 2: Succeeds', type: 'text' },
        { name: 'compare3Fail', label: 'Compare Row 3: Fails', type: 'text' },
        { name: 'compare3Succeed', label: 'Compare Row 3: Succeeds', type: 'text' },
        { name: 'compare4Fail', label: 'Compare Row 4: Fails', type: 'text' },
        { name: 'compare4Succeed', label: 'Compare Row 4: Succeeds', type: 'text' },
        { name: 'compare5Fail', label: 'Compare Row 5: Fails', type: 'text' },
        { name: 'compare5Succeed', label: 'Compare Row 5: Succeeds', type: 'text' },
        { name: 'compare6Fail', label: 'Compare Row 6: Fails', type: 'text' },
        { name: 'compare6Succeed', label: 'Compare Row 6: Succeeds', type: 'text' },

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
        { name: 'faq5Question', label: 'FAQ 5: Question', type: 'text' },
        { name: 'faq5Answer', label: 'FAQ 5: Answer', type: 'textarea', rows: 3 },

        // CTA
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
      ]}
      previewUrl="/what-breaks-first-when-founder-stops-selling"
    />
  )
}
