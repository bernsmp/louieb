'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoSeriesAPage() {
  return (
    <SectionEditor
      section="seoSeriesAFSL"
      title="SEO: Fractional Sales Leadership for Series A"
      description="Edit content for /fractional-sales-leadership-series-a"
      backHref="/cms"
      backLabel="Dashboard"
      previewUrl="/fractional-sales-leadership-series-a"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroLine3', label: 'Hero: Headline Line 3', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'ctaButtonText', label: 'Hero: CTA Button Text', type: 'text' },

        // Why Investors Section
        { name: 'investorsHeading', label: 'Why Investors: Section Heading', type: 'text', aiRewrite: true },
        { name: 'investorsSubheading', label: 'Why Investors: Subheading', type: 'textarea', rows: 2 },

        // 6 Investor Reason Cards
        { name: 'reason1Title', label: 'Reason 1: Title', type: 'text' },
        { name: 'reason1Desc', label: 'Reason 1: Description', type: 'textarea', rows: 3 },
        { name: 'reason2Title', label: 'Reason 2: Title', type: 'text' },
        { name: 'reason2Desc', label: 'Reason 2: Description', type: 'textarea', rows: 3 },
        { name: 'reason3Title', label: 'Reason 3: Title', type: 'text' },
        { name: 'reason3Desc', label: 'Reason 3: Description', type: 'textarea', rows: 3 },
        { name: 'reason4Title', label: 'Reason 4: Title', type: 'text' },
        { name: 'reason4Desc', label: 'Reason 4: Description', type: 'textarea', rows: 3 },
        { name: 'reason5Title', label: 'Reason 5: Title', type: 'text' },
        { name: 'reason5Desc', label: 'Reason 5: Description', type: 'textarea', rows: 3 },
        { name: 'reason6Title', label: 'Reason 6: Title', type: 'text' },
        { name: 'reason6Desc', label: 'Reason 6: Description', type: 'textarea', rows: 3 },

        // What They Build Section
        { name: 'buildHeading', label: 'What They Build: Section Heading', type: 'text', aiRewrite: true },
        { name: 'buildIntro', label: 'What They Build: Intro Paragraph', type: 'textarea', rows: 2 },
        { name: 'buildItem1', label: 'Build Item 1', type: 'text' },
        { name: 'buildItem2', label: 'Build Item 2', type: 'text' },
        { name: 'buildItem3', label: 'Build Item 3', type: 'text' },
        { name: 'buildItem4', label: 'Build Item 4', type: 'text' },
        { name: 'buildItem5', label: 'Build Item 5', type: 'text' },
        { name: 'buildItem6', label: 'Build Item 6', type: 'text' },
        { name: 'buildItem7', label: 'Build Item 7', type: 'text' },
        { name: 'buildItem8', label: 'Build Item 8', type: 'text' },

        // Comparison Table
        { name: 'compHeading', label: 'Comparison Table: Heading', type: 'text', aiRewrite: true },
        { name: 'compSubheading', label: 'Comparison Table: Subheading', type: 'textarea', rows: 2 },
        { name: 'comp1Category', label: 'Comparison Row 1: Category', type: 'text' },
        { name: 'comp1Fractional', label: 'Comparison Row 1: Fractional Value', type: 'text' },
        { name: 'comp1FullTime', label: 'Comparison Row 1: Full-Time Value', type: 'text' },
        { name: 'comp2Category', label: 'Comparison Row 2: Category', type: 'text' },
        { name: 'comp2Fractional', label: 'Comparison Row 2: Fractional Value', type: 'text' },
        { name: 'comp2FullTime', label: 'Comparison Row 2: Full-Time Value', type: 'text' },
        { name: 'comp3Category', label: 'Comparison Row 3: Category', type: 'text' },
        { name: 'comp3Fractional', label: 'Comparison Row 3: Fractional Value', type: 'text' },
        { name: 'comp3FullTime', label: 'Comparison Row 3: Full-Time Value', type: 'text' },
        { name: 'comp4Category', label: 'Comparison Row 4: Category', type: 'text' },
        { name: 'comp4Fractional', label: 'Comparison Row 4: Fractional Value', type: 'text' },
        { name: 'comp4FullTime', label: 'Comparison Row 4: Full-Time Value', type: 'text' },
        { name: 'comp5Category', label: 'Comparison Row 5: Category', type: 'text' },
        { name: 'comp5Fractional', label: 'Comparison Row 5: Fractional Value', type: 'text' },
        { name: 'comp5FullTime', label: 'Comparison Row 5: Full-Time Value', type: 'text' },
        { name: 'comp6Category', label: 'Comparison Row 6: Category', type: 'text' },
        { name: 'comp6Fractional', label: 'Comparison Row 6: Fractional Value', type: 'text' },
        { name: 'comp6FullTime', label: 'Comparison Row 6: Full-Time Value', type: 'text' },

        // Testimonials
        { name: 'testimonialsHeading', label: 'Testimonials: Section Heading', type: 'text' },
        { name: 'testimonial1Quote', label: 'Testimonial 1: Quote', type: 'textarea', rows: 3 },
        { name: 'testimonial1Name', label: 'Testimonial 1: Name', type: 'text' },
        { name: 'testimonial1Title', label: 'Testimonial 1: Title / Company', type: 'text' },
        { name: 'testimonial2Quote', label: 'Testimonial 2: Quote', type: 'textarea', rows: 3 },
        { name: 'testimonial2Name', label: 'Testimonial 2: Name', type: 'text' },
        { name: 'testimonial2Title', label: 'Testimonial 2: Title / Company', type: 'text' },

        // FAQs
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

        // CTA
        { name: 'ctaHeadline', label: 'CTA: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA: Description', type: 'textarea', rows: 2 },
      ]}
    />
  )
}
