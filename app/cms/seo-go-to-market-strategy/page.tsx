'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoGoToMarketStrategyPage() {
  return (
    <SectionEditor
      section="seoBuildGoToMarketStrategy"
      title="SEO: How to Build a Go-to-Market Strategy"
      description="Edit content for /how-to-build-a-go-to-market-strategy"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 GTM Components
        { name: 'sectionGtmHeading', label: 'Section: GTM Components — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionGtmSubheading', label: 'Section: GTM Components — Subheading', type: 'text' },
        { name: 'gtm1Title', label: 'GTM Component 1: Title', type: 'text' },
        { name: 'gtm1Body', label: 'GTM Component 1: Body', type: 'textarea', rows: 4 },
        { name: 'gtm1Question', label: 'GTM Component 1: Test question (blue callout)', type: 'text' },
        { name: 'gtm2Title', label: 'GTM Component 2: Title', type: 'text' },
        { name: 'gtm2Body', label: 'GTM Component 2: Body', type: 'textarea', rows: 4 },
        { name: 'gtm2Question', label: 'GTM Component 2: Test question (blue callout)', type: 'text' },
        { name: 'gtm3Title', label: 'GTM Component 3: Title', type: 'text' },
        { name: 'gtm3Body', label: 'GTM Component 3: Body', type: 'textarea', rows: 4 },
        { name: 'gtm3Question', label: 'GTM Component 3: Test question (blue callout)', type: 'text' },
        { name: 'gtm4Title', label: 'GTM Component 4: Title', type: 'text' },
        { name: 'gtm4Body', label: 'GTM Component 4: Body', type: 'textarea', rows: 4 },
        { name: 'gtm4Question', label: 'GTM Component 4: Test question (blue callout)', type: 'text' },
        { name: 'gtm5Title', label: 'GTM Component 5: Title', type: 'text' },
        { name: 'gtm5Body', label: 'GTM Component 5: Body', type: 'textarea', rows: 4 },
        { name: 'gtm5Question', label: 'GTM Component 5: Test question (blue callout)', type: 'text' },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to sales audit follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: GTM Done Right vs Wrong
        { name: 'sectionComparisonHeading', label: 'GTM Comparison: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComparisonSubheading', label: 'GTM Comparison: Subheading', type: 'text' },
        { name: 'comparison1Wrong', label: 'GTM Row 1: Wrong (red)', type: 'textarea', rows: 2 },
        { name: 'comparison1Right', label: 'GTM Row 1: Right (green)', type: 'textarea', rows: 2 },
        { name: 'comparison2Wrong', label: 'GTM Row 2: Wrong (red)', type: 'text' },
        { name: 'comparison2Right', label: 'GTM Row 2: Right (green)', type: 'text' },
        { name: 'comparison3Wrong', label: 'GTM Row 3: Wrong (red)', type: 'text' },
        { name: 'comparison3Right', label: 'GTM Row 3: Right (green)', type: 'text' },
        { name: 'comparison4Wrong', label: 'GTM Row 4: Wrong (red)', type: 'text' },
        { name: 'comparison4Right', label: 'GTM Row 4: Right (green)', type: 'text' },
        { name: 'comparison5Wrong', label: 'GTM Row 5: Wrong (red)', type: 'text' },
        { name: 'comparison5Right', label: 'GTM Row 5: Right (green)', type: 'text' },

        // Section: 4 GTM Mistakes
        { name: 'sectionMistakesHeading', label: 'GTM Mistakes: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionMistakesSubheading', label: 'GTM Mistakes: Subheading', type: 'text' },
        { name: 'mistake1', label: 'Mistake 1: Title', type: 'text' },
        { name: 'mistake1Why', label: 'Mistake 1: Why it kills traction', type: 'textarea', rows: 2 },
        { name: 'mistake2', label: 'Mistake 2: Title', type: 'text' },
        { name: 'mistake2Why', label: 'Mistake 2: Why it kills traction', type: 'textarea', rows: 2 },
        { name: 'mistake3', label: 'Mistake 3: Title', type: 'text' },
        { name: 'mistake3Why', label: 'Mistake 3: Why it kills traction', type: 'textarea', rows: 2 },
        { name: 'mistake4', label: 'Mistake 4: Title', type: 'text' },
        { name: 'mistake4Why', label: 'Mistake 4: Why it kills traction', type: 'textarea', rows: 2 },

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
      previewUrl="/how-to-build-a-go-to-market-strategy"
    />
  )
}
