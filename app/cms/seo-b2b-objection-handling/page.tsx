'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoB2bObjectionHandlingPage() {
  return (
    <SectionEditor
      section="seoB2bSalesObjectionHandling"
      title="SEO: B2B Sales Objection Handling"
      description="Edit content for /b2b-sales-objection-handling"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 7 Objections
        { name: 'sectionObjectionsHeading', label: 'Section: 7 Objections — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionObjectionsSubheading', label: 'Section: 7 Objections — Subheading', type: 'text' },
        { name: 'obj1Objection', label: 'Objection 1: The objection (quoted)', type: 'text' },
        { name: 'obj1RootCause', label: 'Objection 1: Root cause', type: 'text' },
        { name: 'obj1Weak', label: 'Objection 1: Weak response (red)', type: 'textarea', rows: 2 },
        { name: 'obj1Strong', label: 'Objection 1: Strong response (green)', type: 'textarea', rows: 3 },
        { name: 'obj1Rule', label: 'Objection 1: Rule (blue)', type: 'text' },
        { name: 'obj2Objection', label: 'Objection 2: The objection (quoted)', type: 'text' },
        { name: 'obj2RootCause', label: 'Objection 2: Root cause', type: 'text' },
        { name: 'obj2Weak', label: 'Objection 2: Weak response (red)', type: 'textarea', rows: 2 },
        { name: 'obj2Strong', label: 'Objection 2: Strong response (green)', type: 'textarea', rows: 3 },
        { name: 'obj2Rule', label: 'Objection 2: Rule (blue)', type: 'text' },
        { name: 'obj3Objection', label: 'Objection 3: The objection (quoted)', type: 'text' },
        { name: 'obj3RootCause', label: 'Objection 3: Root cause', type: 'text' },
        { name: 'obj3Weak', label: 'Objection 3: Weak response (red)', type: 'textarea', rows: 2 },
        { name: 'obj3Strong', label: 'Objection 3: Strong response (green)', type: 'textarea', rows: 3 },
        { name: 'obj3Rule', label: 'Objection 3: Rule (blue)', type: 'text' },
        { name: 'obj4Objection', label: 'Objection 4: The objection (quoted)', type: 'text' },
        { name: 'obj4RootCause', label: 'Objection 4: Root cause', type: 'text' },
        { name: 'obj4Weak', label: 'Objection 4: Weak response (red)', type: 'textarea', rows: 2 },
        { name: 'obj4Strong', label: 'Objection 4: Strong response (green)', type: 'textarea', rows: 3 },
        { name: 'obj4Rule', label: 'Objection 4: Rule (blue)', type: 'text' },
        { name: 'obj5Objection', label: 'Objection 5: The objection (quoted)', type: 'text' },
        { name: 'obj5RootCause', label: 'Objection 5: Root cause', type: 'text' },
        { name: 'obj5Weak', label: 'Objection 5: Weak response (red)', type: 'textarea', rows: 2 },
        { name: 'obj5Strong', label: 'Objection 5: Strong response (green)', type: 'textarea', rows: 3 },
        { name: 'obj5Rule', label: 'Objection 5: Rule (blue)', type: 'text' },
        { name: 'obj6Objection', label: 'Objection 6: The objection (quoted)', type: 'text' },
        { name: 'obj6RootCause', label: 'Objection 6: Root cause', type: 'text' },
        { name: 'obj6Weak', label: 'Objection 6: Weak response (red)', type: 'textarea', rows: 2 },
        { name: 'obj6Strong', label: 'Objection 6: Strong response (green)', type: 'textarea', rows: 3 },
        { name: 'obj6Rule', label: 'Objection 6: Rule (blue)', type: 'text' },
        { name: 'obj7Objection', label: 'Objection 7: The objection (quoted)', type: 'text' },
        { name: 'obj7RootCause', label: 'Objection 7: Root cause', type: 'text' },
        { name: 'obj7Weak', label: 'Objection 7: Weak response (red)', type: 'textarea', rows: 2 },
        { name: 'obj7Strong', label: 'Objection 7: Strong response (green)', type: 'textarea', rows: 3 },
        { name: 'obj7Rule', label: 'Objection 7: Rule (blue)', type: 'text' },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to closing guide follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 4 Principles
        { name: 'sectionPrinciplesHeading', label: 'Section: Principles — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionPrinciplesSubheading', label: 'Section: Principles — Subheading', type: 'text' },
        { name: 'principle1', label: 'Principle 1: Title', type: 'text' },
        { name: 'principle1Detail', label: 'Principle 1: Detail', type: 'textarea', rows: 3 },
        { name: 'principle2', label: 'Principle 2: Title', type: 'text' },
        { name: 'principle2Detail', label: 'Principle 2: Detail', type: 'textarea', rows: 3 },
        { name: 'principle3', label: 'Principle 3: Title', type: 'text' },
        { name: 'principle3Detail', label: 'Principle 3: Detail', type: 'textarea', rows: 3 },
        { name: 'principle4', label: 'Principle 4: Title', type: 'text' },
        { name: 'principle4Detail', label: 'Principle 4: Detail', type: 'textarea', rows: 3 },

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

        // CTA
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
      ]}
      previewUrl="/b2b-sales-objection-handling"
    />
  )
}
