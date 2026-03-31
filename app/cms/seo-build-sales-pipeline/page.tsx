'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoBuildSalesPipelinePage() {
  return (
    <SectionEditor
      section="seoBuildSalesPipeline"
      title="SEO: How to Build a Sales Pipeline That Actually Fills Itself"
      description="Edit content for /how-to-build-a-sales-pipeline"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Pipeline Layers
        { name: 'sectionLayersHeading', label: 'Section: 5 Layers — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionLayersSubheading', label: 'Section: 5 Layers — Subheading', type: 'text' },
        { name: 'layer1Title', label: 'Layer 1: Title', type: 'text' },
        { name: 'layer1Detail', label: 'Layer 1: Detail (main body)', type: 'textarea', rows: 4 },
        { name: 'layer1Fix', label: 'Layer 1: Action (blue box)', type: 'textarea', rows: 3 },
        { name: 'layer2Title', label: 'Layer 2: Title', type: 'text' },
        { name: 'layer2Detail', label: 'Layer 2: Detail', type: 'textarea', rows: 4 },
        { name: 'layer2Fix', label: 'Layer 2: Action (blue box)', type: 'textarea', rows: 3 },
        { name: 'layer3Title', label: 'Layer 3: Title', type: 'text' },
        { name: 'layer3Detail', label: 'Layer 3: Detail', type: 'textarea', rows: 4 },
        { name: 'layer3Fix', label: 'Layer 3: Action (blue box)', type: 'textarea', rows: 3 },
        { name: 'layer4Title', label: 'Layer 4: Title', type: 'text' },
        { name: 'layer4Detail', label: 'Layer 4: Detail', type: 'textarea', rows: 4 },
        { name: 'layer4Fix', label: 'Layer 4: Action (blue box)', type: 'textarea', rows: 3 },
        { name: 'layer5Title', label: 'Layer 5: Title', type: 'text' },
        { name: 'layer5Detail', label: 'Layer 5: Detail', type: 'textarea', rows: 4 },
        { name: 'layer5Fix', label: 'Layer 5: Action (blue box)', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (link to sales audit follows)', type: 'textarea', aiRewrite: true, rows: 3 },

        // Section: 5 Pipeline Killers
        { name: 'sectionKillersHeading', label: 'Section: Pipeline Killers — Heading', type: 'text', aiRewrite: true },
        { name: 'sectionKillersSubheading', label: 'Section: Pipeline Killers — Subheading', type: 'text' },
        { name: 'killer1Killer', label: 'Killer 1: Bad habit (red card title)', type: 'text' },
        { name: 'killer1Result', label: 'Killer 1: Result (red card body)', type: 'text' },
        { name: 'killer2Killer', label: 'Killer 2: Bad habit', type: 'text' },
        { name: 'killer2Result', label: 'Killer 2: Result', type: 'text' },
        { name: 'killer3Killer', label: 'Killer 3: Bad habit', type: 'text' },
        { name: 'killer3Result', label: 'Killer 3: Result', type: 'text' },
        { name: 'killer4Killer', label: 'Killer 4: Bad habit', type: 'text' },
        { name: 'killer4Result', label: 'Killer 4: Result', type: 'text' },
        { name: 'killer5Killer', label: 'Killer 5: Bad habit', type: 'text' },
        { name: 'killer5Result', label: 'Killer 5: Result', type: 'text' },

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
      previewUrl="/how-to-build-a-sales-pipeline"
    />
  )
}
