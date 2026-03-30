'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoScaleRevenue1mTo10mPage() {
  return (
    <SectionEditor
      section="seoScaleRevenue1mTo10m"
      title="SEO: How to Scale Revenue from $1M to $10M"
      description="Edit content for /how-to-scale-revenue-1m-to-10m"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 4 Phases
        { name: 'sectionPhasesHeading', label: 'Section: Phases — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionPhasesSubheading', label: 'Section: Phases — Subheading', type: 'text' },
        { name: 'phase1Range', label: 'Phase 1: ARR Range (e.g. $1M–$2M)', type: 'text' },
        { name: 'phase1Title', label: 'Phase 1: Title', type: 'text' },
        { name: 'phase1Body', label: 'Phase 1: Body', type: 'textarea', rows: 4 },
        { name: 'phase1Focus', label: 'Phase 1: Primary Focus (blue callout)', type: 'text' },
        { name: 'phase2Range', label: 'Phase 2: ARR Range', type: 'text' },
        { name: 'phase2Title', label: 'Phase 2: Title', type: 'text' },
        { name: 'phase2Body', label: 'Phase 2: Body', type: 'textarea', rows: 4 },
        { name: 'phase2Focus', label: 'Phase 2: Primary Focus (blue callout)', type: 'text' },
        { name: 'phase3Range', label: 'Phase 3: ARR Range', type: 'text' },
        { name: 'phase3Title', label: 'Phase 3: Title', type: 'text' },
        { name: 'phase3Body', label: 'Phase 3: Body', type: 'textarea', rows: 4 },
        { name: 'phase3Focus', label: 'Phase 3: Primary Focus (blue callout)', type: 'text' },
        { name: 'phase4Range', label: 'Phase 4: ARR Range', type: 'text' },
        { name: 'phase4Title', label: 'Phase 4: Title', type: 'text' },
        { name: 'phase4Body', label: 'Phase 4: Body', type: 'textarea', rows: 4 },
        { name: 'phase4Focus', label: 'Phase 4: Primary Focus (blue callout)', type: 'text' },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to revenue diagnosis follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 4 Mistakes
        { name: 'sectionMistakesHeading', label: 'Section: Mistakes — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionMistakesSubheading', label: 'Section: Mistakes — Subheading', type: 'text' },
        { name: 'mistake1', label: 'Mistake 1: Title', type: 'text' },
        { name: 'mistake1Why', label: 'Mistake 1: Why it kills growth', type: 'textarea', rows: 2 },
        { name: 'mistake2', label: 'Mistake 2: Title', type: 'text' },
        { name: 'mistake2Why', label: 'Mistake 2: Why it kills growth', type: 'textarea', rows: 2 },
        { name: 'mistake3', label: 'Mistake 3: Title', type: 'text' },
        { name: 'mistake3Why', label: 'Mistake 3: Why it kills growth', type: 'textarea', rows: 2 },
        { name: 'mistake4', label: 'Mistake 4: Title', type: 'text' },
        { name: 'mistake4Why', label: 'Mistake 4: Why it kills growth', type: 'textarea', rows: 2 },

        // Section: Readiness Signals
        { name: 'sectionReadinessHeading', label: 'Readiness Signals: Heading', type: 'text', aiRewrite: true },
        { name: 'sectionReadinessSubheading', label: 'Readiness Signals: Subheading', type: 'text' },
        { name: 'readiness1', label: 'Green Signal 1 (ready)', type: 'text' },
        { name: 'readiness2', label: 'Green Signal 2 (ready)', type: 'text' },
        { name: 'readiness3', label: 'Green Signal 3 (ready)', type: 'text' },
        { name: 'readiness4', label: 'Green Signal 4 (ready)', type: 'text' },
        { name: 'readiness5', label: 'Red Signal 5 (not ready)', type: 'text' },
        { name: 'readiness6', label: 'Red Signal 6 (not ready)', type: 'text' },

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
      previewUrl="/how-to-scale-revenue-1m-to-10m"
    />
  )
}
