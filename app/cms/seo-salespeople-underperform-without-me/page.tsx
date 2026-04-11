'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoSalespeopleUnderperformWithoutMePage() {
  return (
    <SectionEditor
      section="seoSalespeopleUnderperformWithoutMe"
      title="SEO: Why Do My Salespeople Underperform Without Me Involved?"
      description="Edit content for /why-do-my-salespeople-underperform-without-me"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Tag (small uppercase label)', type: 'text' },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Root Causes
        { name: 'sectionCausesHeading', label: 'Section: 5 Causes — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCausesSubheading', label: 'Section: 5 Causes — Subheading', type: 'text' },

        { name: 'cause1Title', label: 'Cause 1: Title', type: 'text' },
        { name: 'cause1Detail', label: 'Cause 1: Detail (main body)', type: 'textarea', rows: 4 },
        { name: 'cause1Fix', label: 'Cause 1: What to Fix (blue box)', type: 'textarea', rows: 3 },

        { name: 'cause2Title', label: 'Cause 2: Title', type: 'text' },
        { name: 'cause2Detail', label: 'Cause 2: Detail', type: 'textarea', rows: 4 },
        { name: 'cause2Fix', label: 'Cause 2: What to Fix (blue box)', type: 'textarea', rows: 3 },

        { name: 'cause3Title', label: 'Cause 3: Title', type: 'text' },
        { name: 'cause3Detail', label: 'Cause 3: Detail', type: 'textarea', rows: 4 },
        { name: 'cause3Fix', label: 'Cause 3: What to Fix (blue box)', type: 'textarea', rows: 3 },

        { name: 'cause4Title', label: 'Cause 4: Title', type: 'text' },
        { name: 'cause4Detail', label: 'Cause 4: Detail', type: 'textarea', rows: 4 },
        { name: 'cause4Fix', label: 'Cause 4: What to Fix (blue box)', type: 'textarea', rows: 3 },

        { name: 'cause5Title', label: 'Cause 5: Title', type: 'text' },
        { name: 'cause5Detail', label: 'Cause 5: Detail', type: 'textarea', rows: 4 },
        { name: 'cause5Fix', label: 'Cause 5: What to Fix (blue box)', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (internal link follows)', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara2b', label: 'SEO Paragraph 2b (text after internal link)', type: 'text' },

        // Comparison Table
        { name: 'sectionCompHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'comp1Dependent', label: 'Compare Row 1: Founder-Dependent (left)', type: 'text' },
        { name: 'comp1Independent', label: 'Compare Row 1: Self-Sufficient (right)', type: 'text' },
        { name: 'comp2Dependent', label: 'Compare Row 2: Founder-Dependent', type: 'text' },
        { name: 'comp2Independent', label: 'Compare Row 2: Self-Sufficient', type: 'text' },
        { name: 'comp3Dependent', label: 'Compare Row 3: Founder-Dependent', type: 'text' },
        { name: 'comp3Independent', label: 'Compare Row 3: Self-Sufficient', type: 'text' },
        { name: 'comp4Dependent', label: 'Compare Row 4: Founder-Dependent', type: 'text' },
        { name: 'comp4Independent', label: 'Compare Row 4: Self-Sufficient', type: 'text' },
        { name: 'comp5Dependent', label: 'Compare Row 5: Founder-Dependent', type: 'text' },
        { name: 'comp5Independent', label: 'Compare Row 5: Self-Sufficient', type: 'text' },
        { name: 'comp6Dependent', label: 'Compare Row 6: Founder-Dependent', type: 'text' },
        { name: 'comp6Independent', label: 'Compare Row 6: Self-Sufficient', type: 'text' },

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
      previewUrl="/why-do-my-salespeople-underperform-without-me"
    />
  )
}
