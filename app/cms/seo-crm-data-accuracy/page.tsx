'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoCrmDataAccuracyPage() {
  return (
    <SectionEditor
      section="seoCrmDataAccuracy"
      title="SEO: Is My CRM Data Actually Accurate?"
      description="Edit content for /how-do-i-know-if-my-crm-data-is-actually-accurate"
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

        // Five Tests
        { name: 'sectionTestsHeading', label: 'Five Tests: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionTestsSubheading', label: 'Five Tests: Section Subheading', type: 'textarea', rows: 2 },

        { name: 'test1Title', label: 'Test 1: Title', type: 'text', aiRewrite: true },
        { name: 'test1Detail', label: 'Test 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'test1Outcome', label: 'Test 1: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'test2Title', label: 'Test 2: Title', type: 'text', aiRewrite: true },
        { name: 'test2Detail', label: 'Test 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'test2Outcome', label: 'Test 2: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'test3Title', label: 'Test 3: Title', type: 'text', aiRewrite: true },
        { name: 'test3Detail', label: 'Test 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'test3Outcome', label: 'Test 3: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'test4Title', label: 'Test 4: Title', type: 'text', aiRewrite: true },
        { name: 'test4Detail', label: 'Test 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'test4Outcome', label: 'Test 4: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        { name: 'test5Title', label: 'Test 5: Title', type: 'text', aiRewrite: true },
        { name: 'test5Detail', label: 'Test 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 6 },
        { name: 'test5Outcome', label: 'Test 5: "What You Get" Outcome', type: 'textarea', aiRewrite: true, rows: 2 },

        // SEO paragraphs
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

        // Coaching sentences (4)
        { name: 'sectionCoachHeading', label: 'Coach Reps: Section Heading', type: 'text', aiRewrite: true },
        { name: 'sectionCoachSubheading', label: 'Coach Reps: Section Subheading', type: 'textarea', rows: 2 },
        { name: 'coach1Title', label: 'Coach 1: Sentence Title', type: 'text', aiRewrite: true },
        { name: 'coach1Detail', label: 'Coach 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'coach2Title', label: 'Coach 2: Sentence Title', type: 'text', aiRewrite: true },
        { name: 'coach2Detail', label: 'Coach 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'coach3Title', label: 'Coach 3: Sentence Title', type: 'text', aiRewrite: true },
        { name: 'coach3Detail', label: 'Coach 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },
        { name: 'coach4Title', label: 'Coach 4: Sentence Title', type: 'text', aiRewrite: true },
        { name: 'coach4Detail', label: 'Coach 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 5 },

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
      previewUrl="/how-do-i-know-if-my-crm-data-is-actually-accurate"
    />
  )
}
