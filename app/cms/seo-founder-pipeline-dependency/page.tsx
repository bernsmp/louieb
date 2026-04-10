'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoFounderPipelineDependencyPage() {
  return (
    <SectionEditor
      section="seoFounderPipelineDependency"
      title="SEO: Why Does My Sales Pipeline Depend Entirely on Me?"
      description="Edit content for /why-does-my-sales-pipeline-depend-on-me"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Tag (small uppercase label)', type: 'text' },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Reasons
        { name: 'sectionReasonsHeading', label: 'Section: 5 Reasons — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionReasonsSubheading', label: 'Section: 5 Reasons — Subheading', type: 'text' },

        { name: 'reason1Title', label: 'Reason 1: Title', type: 'text' },
        { name: 'reason1Detail', label: 'Reason 1: Detail (main body)', type: 'textarea', rows: 4 },
        { name: 'reason1Fix', label: 'Reason 1: Diagnosis (blue box)', type: 'textarea', rows: 3 },

        { name: 'reason2Title', label: 'Reason 2: Title', type: 'text' },
        { name: 'reason2Detail', label: 'Reason 2: Detail', type: 'textarea', rows: 4 },
        { name: 'reason2Fix', label: 'Reason 2: Diagnosis (blue box)', type: 'textarea', rows: 3 },

        { name: 'reason3Title', label: 'Reason 3: Title', type: 'text' },
        { name: 'reason3Detail', label: 'Reason 3: Detail', type: 'textarea', rows: 4 },
        { name: 'reason3Fix', label: 'Reason 3: Diagnosis (blue box)', type: 'textarea', rows: 3 },

        { name: 'reason4Title', label: 'Reason 4: Title', type: 'text' },
        { name: 'reason4Detail', label: 'Reason 4: Detail', type: 'textarea', rows: 4 },
        { name: 'reason4Fix', label: 'Reason 4: Diagnosis (blue box)', type: 'textarea', rows: 3 },

        { name: 'reason5Title', label: 'Reason 5: Title', type: 'text' },
        { name: 'reason5Detail', label: 'Reason 5: Detail', type: 'textarea', rows: 4 },
        { name: 'reason5Fix', label: 'Reason 5: Diagnosis (blue box)', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to sales audit follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Comparison Table
        { name: 'sectionCompareHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompareSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'compare1Dependent', label: 'Compare Row 1: Founder-Dependent (left)', type: 'text' },
        { name: 'compare1System', label: 'Compare Row 1: System-Driven (right)', type: 'text' },
        { name: 'compare2Dependent', label: 'Compare Row 2: Founder-Dependent', type: 'text' },
        { name: 'compare2System', label: 'Compare Row 2: System-Driven', type: 'text' },
        { name: 'compare3Dependent', label: 'Compare Row 3: Founder-Dependent', type: 'text' },
        { name: 'compare3System', label: 'Compare Row 3: System-Driven', type: 'text' },
        { name: 'compare4Dependent', label: 'Compare Row 4: Founder-Dependent', type: 'text' },
        { name: 'compare4System', label: 'Compare Row 4: System-Driven', type: 'text' },
        { name: 'compare5Dependent', label: 'Compare Row 5: Founder-Dependent', type: 'text' },
        { name: 'compare5System', label: 'Compare Row 5: System-Driven', type: 'text' },
        { name: 'compare6Dependent', label: 'Compare Row 6: Founder-Dependent', type: 'text' },
        { name: 'compare6System', label: 'Compare Row 6: System-Driven', type: 'text' },

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
      previewUrl="/why-does-my-sales-pipeline-depend-on-me"
    />
  )
}
