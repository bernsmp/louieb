'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoSalesPlaybookChecklistPage() {
  return (
    <SectionEditor
      section="seoSalesPlaybookChecklist"
      title="SEO: Does My Sales Playbook Cover All the Essentials?"
      description="Edit content for /does-my-sales-playbook-cover-all-the-essentials"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Eyebrow Tag', type: 'text', aiRewrite: true },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroH2', label: 'Hero: Subtitle (H2)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },

        // Key Takeaways
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway5', label: 'Key Takeaway 5', type: 'textarea', aiRewrite: true, rows: 3 },

        // 5 Essentials Section Heading
        { name: 'sectionEssentialsHeading', label: '5 Essentials: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionEssentialsSubheading', label: '5 Essentials: Section Subheading', type: 'textarea', rows: 2 },

        // Essential 1
        { name: 'essential1Title', label: 'Essential 1: Title', type: 'text', aiRewrite: true },
        { name: 'essential1Detail', label: 'Essential 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'essential1Fix', label: 'Essential 1: "Check it" Box', type: 'textarea', aiRewrite: true, rows: 3 },

        // Essential 2
        { name: 'essential2Title', label: 'Essential 2: Title', type: 'text', aiRewrite: true },
        { name: 'essential2Detail', label: 'Essential 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'essential2Fix', label: 'Essential 2: "Check it" Box', type: 'textarea', aiRewrite: true, rows: 3 },

        // Essential 3
        { name: 'essential3Title', label: 'Essential 3: Title', type: 'text', aiRewrite: true },
        { name: 'essential3Detail', label: 'Essential 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'essential3Fix', label: 'Essential 3: "Check it" Box', type: 'textarea', aiRewrite: true, rows: 3 },

        // Essential 4
        { name: 'essential4Title', label: 'Essential 4: Title', type: 'text', aiRewrite: true },
        { name: 'essential4Detail', label: 'Essential 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'essential4Fix', label: 'Essential 4: "Check it" Box', type: 'textarea', aiRewrite: true, rows: 3 },

        // Essential 5
        { name: 'essential5Title', label: 'Essential 5: Title', type: 'text', aiRewrite: true },
        { name: 'essential5Detail', label: 'Essential 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'essential5Fix', label: 'Essential 5: "Check it" Box', type: 'textarea', aiRewrite: true, rows: 3 },

        // SEO paragraphs
        { name: 'seoPara1', label: 'SEO Paragraph 1', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'seoPara2', label: 'SEO Paragraph 2 (text before inline link)', type: 'textarea', aiRewrite: true, rows: 4 },

        // Comparison Table
        { name: 'sectionCompareHeading', label: 'Comparison: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCompareSubheading', label: 'Comparison: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'compareColLeft', label: 'Comparison: Left Column Header', type: 'text' },
        { name: 'compareColRight', label: 'Comparison: Right Column Header', type: 'text' },
        { name: 'compare1Left', label: 'Row 1: Left ("Document called playbook")', type: 'text' },
        { name: 'compare1Right', label: 'Row 1: Right ("Real working playbook")', type: 'text' },
        { name: 'compare2Left', label: 'Row 2: Left', type: 'text' },
        { name: 'compare2Right', label: 'Row 2: Right', type: 'text' },
        { name: 'compare3Left', label: 'Row 3: Left', type: 'text' },
        { name: 'compare3Right', label: 'Row 3: Right', type: 'text' },
        { name: 'compare4Left', label: 'Row 4: Left', type: 'text' },
        { name: 'compare4Right', label: 'Row 4: Right', type: 'text' },
        { name: 'compare5Left', label: 'Row 5: Left', type: 'text' },
        { name: 'compare5Right', label: 'Row 5: Right', type: 'text' },
        { name: 'compare6Left', label: 'Row 6: Left', type: 'text' },
        { name: 'compare6Right', label: 'Row 6: Right', type: 'text' },

        // What to Do This Week
        { name: 'sectionActionsHeading', label: 'Actions: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionActionsSubheading', label: 'Actions: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'action1', label: 'Action 1', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'action2', label: 'Action 2', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'action3', label: 'Action 3', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'action4', label: 'Action 4', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'action5', label: 'Action 5', type: 'textarea', aiRewrite: true, rows: 2 },

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
      previewUrl="/does-my-sales-playbook-cover-all-the-essentials"
    />
  )
}
