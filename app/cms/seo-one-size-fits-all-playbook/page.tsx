'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoOneSizeFitsAllPlaybookPage() {
  return (
    <SectionEditor
      section="seoOneSizeFitsAllPlaybook"
      title="SEO: One-Size-Fits-All Playbook? (Customization)"
      description="Edit content for /will-fractional-sales-leader-force-one-size-fits-all-playbook"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Eyebrow Tag', type: 'text', aiRewrite: true },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (violet text)', type: 'text', aiRewrite: true },
        { name: 'heroH2', label: 'Hero: Subtitle (H2)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Key Takeaways
        { name: 'takeawaysHeading', label: 'Key Takeaways: Heading', type: 'text' },
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway5', label: 'Key Takeaway 5', type: 'textarea', aiRewrite: true, rows: 3 },

        // How Customization Works — 5 Components
        { name: 'sectionComponentsHeading', label: 'Customization Steps: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionComponentsSubheading', label: 'Customization Steps: Section Subheading', type: 'textarea', rows: 2 },

        { name: 'comp1Title', label: 'Component 1: Title', type: 'text', aiRewrite: true },
        { name: 'comp1Detail', label: 'Component 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp1Outcome', label: 'Component 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'comp2Title', label: 'Component 2: Title', type: 'text', aiRewrite: true },
        { name: 'comp2Detail', label: 'Component 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp2Outcome', label: 'Component 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'comp3Title', label: 'Component 3: Title', type: 'text', aiRewrite: true },
        { name: 'comp3Detail', label: 'Component 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp3Outcome', label: 'Component 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'comp4Title', label: 'Component 4: Title', type: 'text', aiRewrite: true },
        { name: 'comp4Detail', label: 'Component 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp4Outcome', label: 'Component 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'comp5Title', label: 'Component 5: Title', type: 'text', aiRewrite: true },
        { name: 'comp5Detail', label: 'Component 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'comp5Outcome', label: 'Component 5: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // SEO paragraphs (with inline links)
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (text before first link)', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'seoPara2b', label: 'SEO Paragraph 2 (text between the two links)', type: 'textarea', rows: 2 },
        { name: 'seoPara2c', label: 'SEO Paragraph 2 (text after second link)', type: 'textarea', rows: 2 },

        // Comparison Table
        { name: 'sectionCompareHeading', label: 'Comparison: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompareSubheading', label: 'Comparison: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'compareColLeft', label: 'Comparison: Left Column Header', type: 'text' },
        { name: 'compareColRight', label: 'Comparison: Right Column Header', type: 'text' },
        { name: 'compare1Without', label: 'Row 1: Without (left)', type: 'text' },
        { name: 'compare1With', label: 'Row 1: With (right)', type: 'text' },
        { name: 'compare2Without', label: 'Row 2: Without (left)', type: 'text' },
        { name: 'compare2With', label: 'Row 2: With (right)', type: 'text' },
        { name: 'compare3Without', label: 'Row 3: Without (left)', type: 'text' },
        { name: 'compare3With', label: 'Row 3: With (right)', type: 'text' },
        { name: 'compare4Without', label: 'Row 4: Without (left)', type: 'text' },
        { name: 'compare4With', label: 'Row 4: With (right)', type: 'text' },
        { name: 'compare5Without', label: 'Row 5: Without (left)', type: 'text' },
        { name: 'compare5With', label: 'Row 5: With (right)', type: 'text' },
        { name: 'compare6Without', label: 'Row 6: Without (left)', type: 'text' },
        { name: 'compare6With', label: 'Row 6: With (right)', type: 'text' },

        // Customization Layers (3)
        { name: 'sectionLayersHeading', label: 'Layers: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionLayersSubheading', label: 'Layers: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'layer1Title', label: 'Layer 1: Title', type: 'text', aiRewrite: true },
        { name: 'layer1Detail', label: 'Layer 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'layer2Title', label: 'Layer 2: Title', type: 'text', aiRewrite: true },
        { name: 'layer2Detail', label: 'Layer 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'layer3Title', label: 'Layer 3: Title', type: 'text', aiRewrite: true },
        { name: 'layer3Detail', label: 'Layer 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },

        // About Louie
        { name: 'aboutBio1', label: 'About Louie: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'aboutBio2', label: 'About Louie: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 3 },

        // FAQs
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

        // CTA
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', aiRewrite: true, rows: 3 },
      ]}
      previewUrl="/will-fractional-sales-leader-force-one-size-fits-all-playbook"
    />
  )
}
