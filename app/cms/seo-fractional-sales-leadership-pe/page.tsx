'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoFractionalSalesLeadershipPEPage() {
  return (
    <SectionEditor
      section="seoFractionalSalesLeadershipPrivateEquity"
      title="SEO: Fractional Sales Leadership for Private Equity"
      description="Edit content for /fractional-sales-leadership-for-private-equity"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Meta / SEO fields
        { name: 'slug', label: 'Slug (URL path)', type: 'text' },
        { name: 'title', label: 'Page Title (H1)', type: 'text', aiRewrite: true },
        { name: 'meta_description', label: 'Meta Description', type: 'textarea', rows: 2 },

        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'hero_headline', label: 'Hero: Full Headline (combined)', type: 'textarea', rows: 2 },

        // Section: 5 Pillars
        { name: 'sectionPillarsHeading', label: 'Section: 5 Pillars — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionPillarsSubheading', label: 'Section: 5 Pillars — Subheading', type: 'text' },

        { name: 'p1Title', label: 'Pillar 1: Title', type: 'text' },
        { name: 'p1Detail', label: 'Pillar 1: Detail', type: 'textarea', rows: 5 },
        { name: 'p1Prompt', label: 'Pillar 1: PE Application', type: 'textarea', rows: 2 },

        { name: 'p2Title', label: 'Pillar 2: Title', type: 'text' },
        { name: 'p2Detail', label: 'Pillar 2: Detail', type: 'textarea', rows: 5 },
        { name: 'p2Prompt', label: 'Pillar 2: PE Application', type: 'textarea', rows: 2 },

        { name: 'p3Title', label: 'Pillar 3: Title', type: 'text' },
        { name: 'p3Detail', label: 'Pillar 3: Detail', type: 'textarea', rows: 5 },
        { name: 'p3Prompt', label: 'Pillar 3: PE Application', type: 'textarea', rows: 2 },

        { name: 'p4Title', label: 'Pillar 4: Title', type: 'text' },
        { name: 'p4Detail', label: 'Pillar 4: Detail', type: 'textarea', rows: 5 },
        { name: 'p4Prompt', label: 'Pillar 4: PE Application', type: 'textarea', rows: 2 },

        { name: 'p5Title', label: 'Pillar 5: Title', type: 'text' },
        { name: 'p5Detail', label: 'Pillar 5: Detail', type: 'textarea', rows: 5 },
        { name: 'p5Prompt', label: 'Pillar 5: PE Application', type: 'textarea', rows: 2 },

        // Body (full text)
        { name: 'body', label: 'Body (full page text, all sections in order)', type: 'textarea', rows: 20 },

        // Key Takeaways
        { name: 'key_takeaways', label: 'Key Takeaways', type: 'textarea', rows: 6 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara3', label: 'SEO Paragraph 3 (internal link follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Comparison Table
        { name: 'sectionCompHeading', label: 'Section: Comparison Table — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompSubheading', label: 'Section: Comparison Table — Subheading', type: 'text' },
        { name: 'comp1Bad', label: 'Comparison Row 1: Without', type: 'textarea', rows: 2 },
        { name: 'comp1Good', label: 'Comparison Row 1: With', type: 'textarea', rows: 2 },
        { name: 'comp2Bad', label: 'Comparison Row 2: Without', type: 'textarea', rows: 2 },
        { name: 'comp2Good', label: 'Comparison Row 2: With', type: 'textarea', rows: 2 },
        { name: 'comp3Bad', label: 'Comparison Row 3: Without', type: 'textarea', rows: 2 },
        { name: 'comp3Good', label: 'Comparison Row 3: With', type: 'textarea', rows: 2 },
        { name: 'comp4Bad', label: 'Comparison Row 4: Without', type: 'textarea', rows: 2 },
        { name: 'comp4Good', label: 'Comparison Row 4: With', type: 'textarea', rows: 2 },
        { name: 'comp5Bad', label: 'Comparison Row 5: Without', type: 'textarea', rows: 2 },
        { name: 'comp5Good', label: 'Comparison Row 5: With', type: 'textarea', rows: 2 },

        // About Louie
        { name: 'aboutBio1', label: 'About Louie: Paragraph 1', type: 'textarea', rows: 3 },
        { name: 'aboutBio2', label: 'About Louie: Paragraph 2', type: 'textarea', rows: 4 },
        { name: 'about_author', label: 'About Author (CMS field)', type: 'textarea', rows: 3 },

        // FAQs (5)
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', rows: 4 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', rows: 4 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', rows: 4 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', rows: 4 },
        { name: 'faq5Question', label: 'FAQ 5: Question', type: 'text' },
        { name: 'faq5Answer', label: 'FAQ 5: Answer', type: 'textarea', rows: 4 },
        { name: 'faqs', label: 'FAQs (structured, all Q&A in order)', type: 'textarea', rows: 10 },

        // CTA
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
        { name: 'cta_text', label: 'CTA Text + Button Label', type: 'textarea', rows: 2 },

        // Internal links
        { name: 'internal_links', label: 'Internal Links Used on Page', type: 'textarea', rows: 2 },
      ]}
      previewUrl="/fractional-sales-leadership-for-private-equity"
    />
  )
}
