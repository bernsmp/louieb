'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoHowToTreatEmployeesPage() {
  return (
    <SectionEditor
      section="seoHowToTreatEmployees"
      title="SEO: How Should a Founder Treat Their Employees?"
      description="Edit content for /how-should-a-founder-treat-their-employees"
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
        { name: 'takeawaysHeading', label: 'Key Takeaways: Heading', type: 'text' },
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'takeaway5', label: 'Key Takeaway 5', type: 'textarea', aiRewrite: true, rows: 3 },

        // The Formula — section heading
        { name: 'sectionRulesHeading', label: 'The Formula: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionRulesSubheading', label: 'The Formula: Section Subheading', type: 'textarea', rows: 2 },

        // Rule 1
        { name: 'rule1Title', label: 'Rule 1: Title', type: 'text', aiRewrite: true },
        { name: 'rule1Detail', label: 'Rule 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'rule1Outcome', label: 'Rule 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Rule 2
        { name: 'rule2Title', label: 'Rule 2: Title', type: 'text', aiRewrite: true },
        { name: 'rule2Detail', label: 'Rule 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'rule2Outcome', label: 'Rule 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Rule 3
        { name: 'rule3Title', label: 'Rule 3: Title', type: 'text', aiRewrite: true },
        { name: 'rule3Detail', label: 'Rule 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'rule3Outcome', label: 'Rule 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Rule 4
        { name: 'rule4Title', label: 'Rule 4: Title', type: 'text', aiRewrite: true },
        { name: 'rule4Detail', label: 'Rule 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'rule4Outcome', label: 'Rule 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // Rule 5
        { name: 'rule5Title', label: 'Rule 5: Title', type: 'text', aiRewrite: true },
        { name: 'rule5Detail', label: 'Rule 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'rule5Outcome', label: 'Rule 5: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

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
        { name: 'compare1Fail', label: 'Row 1: Costs (left)', type: 'text' },
        { name: 'compare1Succeed', label: 'Row 1: Partners (right)', type: 'text' },
        { name: 'compare2Fail', label: 'Row 2: Costs (left)', type: 'text' },
        { name: 'compare2Succeed', label: 'Row 2: Partners (right)', type: 'text' },
        { name: 'compare3Fail', label: 'Row 3: Costs (left)', type: 'text' },
        { name: 'compare3Succeed', label: 'Row 3: Partners (right)', type: 'text' },
        { name: 'compare4Fail', label: 'Row 4: Costs (left)', type: 'text' },
        { name: 'compare4Succeed', label: 'Row 4: Partners (right)', type: 'text' },
        { name: 'compare5Fail', label: 'Row 5: Costs (left)', type: 'text' },
        { name: 'compare5Succeed', label: 'Row 5: Partners (right)', type: 'text' },
        { name: 'compare6Fail', label: 'Row 6: Costs (left)', type: 'text' },
        { name: 'compare6Succeed', label: 'Row 6: Partners (right)', type: 'text' },

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
      previewUrl="/how-should-a-founder-treat-their-employees"
    />
  )
}
