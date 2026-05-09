'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoCanHiringFslRelieveStressPage() {
  return (
    <SectionEditor
      section="seoCanHiringFslRelieveStress"
      title="SEO: Can a Fractional Sales Leader Relieve the Stress of Doing Everything?"
      description="Edit content for /can-hiring-a-fractional-sales-leader-relieve-some-of-the-stress-of-doing-everything"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Header
        { name: 'categoryPill', label: 'Header: Category Pill (orange uppercase)', type: 'text' },
        { name: 'h1', label: 'Header: H1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'h2Subtitle', label: 'Header: H2 Subtitle (italic)', type: 'textarea', aiRewrite: true, rows: 2 },

        // Key Takeaways
        { name: 'takeawaysHeading', label: 'Key Takeaways: Heading', type: 'text' },
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway5', label: 'Key Takeaway 5', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway6', label: 'Key Takeaway 6', type: 'textarea', aiRewrite: true, rows: 3 },

        // Intro
        { name: 'intro1', label: 'Intro: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'intro2', label: 'Intro: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'intro3', label: 'Intro: Paragraph 3', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'intro4', label: 'Intro: Paragraph 4', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'pullquote1', label: 'Intro: Pullquote (orange-bordered)', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'intro5', label: 'Intro: Paragraph 5 (after pullquote)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section 1
        { name: 'section1Heading', label: 'Section 1: H2 Heading', type: 'text', aiRewrite: true },
        { name: 'section1Para1', label: 'Section 1: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section1Para2', label: 'Section 1: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section1Para3', label: 'Section 1: Paragraph 3', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section1Para4', label: 'Section 1: Paragraph 4', type: 'textarea', aiRewrite: true, rows: 5 },

        // Section 2
        { name: 'section2Heading', label: 'Section 2: H2 Heading', type: 'text', aiRewrite: true },
        { name: 'section2Para1', label: 'Section 2: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section2Para2', label: 'Section 2: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section2Para3', label: 'Section 2: Paragraph 3', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section2Para4', label: 'Section 2: Paragraph 4', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'pullquote2', label: 'Section 2: Pullquote (orange-bordered)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section 3
        { name: 'section3Heading', label: 'Section 3: H2 Heading', type: 'text', aiRewrite: true },
        { name: 'section3Para1', label: 'Section 3: Intro Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'section3Sub1Heading', label: 'Section 3.1: H3', type: 'text', aiRewrite: true },
        { name: 'section3Sub1Para', label: 'Section 3.1: Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section3Sub2Heading', label: 'Section 3.2: H3', type: 'text', aiRewrite: true },
        { name: 'section3Sub2Para', label: 'Section 3.2: Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section3Sub3Heading', label: 'Section 3.3: H3', type: 'text', aiRewrite: true },
        { name: 'section3Sub3Para', label: 'Section 3.3: Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section3Sub4Heading', label: 'Section 3.4: H3', type: 'text', aiRewrite: true },
        { name: 'section3Sub4Para', label: 'Section 3.4: Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },

        // Inline Related Reading 1
        { name: 'related1Eyebrow', label: 'Inline Related Reading 1: Eyebrow', type: 'text' },
        { name: 'related1Title', label: 'Inline Related Reading 1: Title', type: 'text', aiRewrite: true },

        // Section 4
        { name: 'section4Heading', label: 'Section 4: H2 Heading (90-Day Plan)', type: 'text', aiRewrite: true },
        { name: 'section4Intro', label: 'Section 4: Intro Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'phase1Heading', label: 'Phase 1 (Days 1–30): H3', type: 'text', aiRewrite: true },
        { name: 'phase1Para', label: 'Phase 1 (Days 1–30): Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'phase2Heading', label: 'Phase 2 (Days 31–60): H3', type: 'text', aiRewrite: true },
        { name: 'phase2Para', label: 'Phase 2 (Days 31–60): Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'phase3Heading', label: 'Phase 3 (Days 61–90): H3', type: 'text', aiRewrite: true },
        { name: 'phase3Para', label: 'Phase 3 (Days 61–90): Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },

        // Section 5
        { name: 'section5Heading', label: 'Section 5: H2 Heading', type: 'text', aiRewrite: true },
        { name: 'section5Para1', label: 'Section 5: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section5Para2', label: 'Section 5: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'section5Para3', label: 'Section 5: Paragraph 3', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'pullquote3', label: 'Section 5: Pullquote (orange-bordered)', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'section5Para4', label: 'Section 5: Paragraph 4', type: 'textarea', aiRewrite: true, rows: 5 },

        // Inline Related Reading 2
        { name: 'related2Eyebrow', label: 'Inline Related Reading 2: Eyebrow', type: 'text' },
        { name: 'related2Title', label: 'Inline Related Reading 2: Title', type: 'text', aiRewrite: true },

        // FAQs
        { name: 'faqHeading', label: 'FAQ: Section Heading', type: 'text' },
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
        { name: 'faq6Question', label: 'FAQ 6: Question', type: 'text' },
        { name: 'faq6Answer', label: 'FAQ 6: Answer', type: 'textarea', aiRewrite: true, rows: 4 },

        // Inline Related Reading 3
        { name: 'related3Eyebrow', label: 'Inline Related Reading 3: Eyebrow', type: 'text' },
        { name: 'related3Title', label: 'Inline Related Reading 3: Title', type: 'text', aiRewrite: true },

        // CTA
        { name: 'ctaHeadline', label: 'CTA: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA: Description', type: 'textarea', aiRewrite: true, rows: 3 },

        // Author bio
        { name: 'authorBio', label: 'About the Author: Bio Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
      ]}
      previewUrl="/can-hiring-a-fractional-sales-leader-relieve-some-of-the-stress-of-doing-everything"
    />
  )
}
