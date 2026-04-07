'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoInterviewFractionalSalesLeaderPage() {
  return (
    <SectionEditor
      section="seoHowToInterviewFractionalSalesLeader"
      title="SEO: How to Interview a Fractional Sales Leader"
      description="Edit content for /how-to-interview-a-fractional-sales-leader"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Questions
        { name: 'sectionQuestionsHeading', label: 'Section: 5 Questions — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionQuestionsSubheading', label: 'Section: 5 Questions — Subheading', type: 'text' },

        { name: 'q1Title', label: 'Q1: Title', type: 'text' },
        { name: 'q1Detail', label: 'Q1: Detail', type: 'textarea', rows: 4 },
        { name: 'q1Prompt', label: 'Q1: Follow-up Prompt', type: 'textarea', rows: 2 },

        { name: 'q2Title', label: 'Q2: Title', type: 'text' },
        { name: 'q2Detail', label: 'Q2: Detail', type: 'textarea', rows: 4 },
        { name: 'q2Prompt', label: 'Q2: Follow-up Prompt', type: 'textarea', rows: 2 },

        { name: 'q3Title', label: 'Q3: Title', type: 'text' },
        { name: 'q3Detail', label: 'Q3: Detail', type: 'textarea', rows: 4 },
        { name: 'q3Prompt', label: 'Q3: Follow-up Prompt', type: 'textarea', rows: 2 },

        { name: 'q4Title', label: 'Q4: Title', type: 'text' },
        { name: 'q4Detail', label: 'Q4: Detail', type: 'textarea', rows: 4 },
        { name: 'q4Prompt', label: 'Q4: Follow-up Prompt', type: 'textarea', rows: 2 },

        { name: 'q5Title', label: 'Q5: Title', type: 'text' },
        { name: 'q5Detail', label: 'Q5: Detail', type: 'textarea', rows: 4 },
        { name: 'q5Prompt', label: 'Q5: Follow-up Prompt', type: 'textarea', rows: 2 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara3', label: 'SEO Paragraph 3 (internal link follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: Comparison Table
        { name: 'sectionCompHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'comp1Bad', label: 'Comparison Row 1: Weak Process', type: 'textarea', rows: 2 },
        { name: 'comp1Good', label: 'Comparison Row 1: Strong Process', type: 'textarea', rows: 2 },
        { name: 'comp2Bad', label: 'Comparison Row 2: Weak Process', type: 'textarea', rows: 2 },
        { name: 'comp2Good', label: 'Comparison Row 2: Strong Process', type: 'textarea', rows: 2 },
        { name: 'comp3Bad', label: 'Comparison Row 3: Weak Process', type: 'textarea', rows: 2 },
        { name: 'comp3Good', label: 'Comparison Row 3: Strong Process', type: 'textarea', rows: 2 },
        { name: 'comp4Bad', label: 'Comparison Row 4: Weak Process', type: 'textarea', rows: 2 },
        { name: 'comp4Good', label: 'Comparison Row 4: Strong Process', type: 'textarea', rows: 2 },
        { name: 'comp5Bad', label: 'Comparison Row 5: Weak Process', type: 'textarea', rows: 2 },
        { name: 'comp5Good', label: 'Comparison Row 5: Strong Process', type: 'textarea', rows: 2 },

        // About Louie
        { name: 'aboutBio1', label: 'About Louie: Paragraph 1', type: 'textarea', rows: 3 },
        { name: 'aboutBio2', label: 'About Louie: Paragraph 2', type: 'textarea', rows: 3 },

        // FAQs (5)
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
      previewUrl="/how-to-interview-a-fractional-sales-leader"
    />
  )
}
