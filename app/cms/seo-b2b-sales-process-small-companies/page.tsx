'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoB2bSalesProcessSmallCompaniesPage() {
  return (
    <SectionEditor
      section="seoB2bSalesProcessSmallCompanies"
      title="SEO: B2B Sales Process of Small Companies"
      description="Edit content for /b2b-sales-process-small-companies"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroLabel', label: 'Hero: Category Label (small text above headline)', type: 'text', placeholder: 'Sales Process' },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true, placeholder: 'B2B Sales Process of Small Companies' },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true, placeholder: 'The 5 Stages That Actually Work' },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'heroPrimaryButton', label: 'Hero: Primary Button Text', type: 'text', placeholder: 'Talk to Louie. 30 Minutes.' },
        { name: 'heroSecondaryLink', label: 'Hero: Secondary Link Text', type: 'text' },

        // Key Takeaways
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', rows: 2 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', rows: 2 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', rows: 2 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', rows: 2 },

        // Stages Section (H2)
        { name: 'stagesHeading', label: 'Stages Section: Heading (H2)', type: 'text', placeholder: 'What should a sales process actually look like for a small B2B company?' },
        { name: 'stagesSubheading', label: 'Stages Section: Subheading', type: 'text' },

        { name: 'stage1Label', label: 'Stage 1: Label', type: 'text', placeholder: 'Target' },
        { name: 'stage1Detail', label: 'Stage 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'stage1Example', label: 'Stage 1: Example', type: 'textarea', rows: 3 },

        { name: 'stage2Label', label: 'Stage 2: Label', type: 'text', placeholder: 'Engage' },
        { name: 'stage2Detail', label: 'Stage 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'stage2Example', label: 'Stage 2: Example', type: 'textarea', rows: 3 },

        { name: 'stage3Label', label: 'Stage 3: Label', type: 'text', placeholder: 'Qualify' },
        { name: 'stage3Detail', label: 'Stage 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'stage3Example', label: 'Stage 3: Example', type: 'textarea', rows: 3 },

        { name: 'stage4Label', label: 'Stage 4: Label', type: 'text', placeholder: 'Validate' },
        { name: 'stage4Detail', label: 'Stage 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'stage4Example', label: 'Stage 4: Example', type: 'textarea', rows: 3 },

        { name: 'stage5Label', label: 'Stage 5: Label', type: 'text', placeholder: 'Close' },
        { name: 'stage5Detail', label: 'Stage 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'stage5Example', label: 'Stage 5: Example', type: 'textarea', rows: 3 },

        // SEO Paragraphs
        { name: 'seoParagraph1', label: 'SEO Section: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoParagraph2', label: 'SEO Section: Paragraph 2 (text before the link)', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoParagraph2LinkText', label: 'SEO Section: Link Text', type: 'text' },

        // Before / After
        { name: 'beforeAfterHeading', label: 'Before/After Section: Heading', type: 'text' },
        { name: 'beforeAfterSubheading', label: 'Before/After Section: Subheading', type: 'text' },

        { name: 'beforeAfterRow1Label', label: 'Before/After Row 1: Label', type: 'text', placeholder: 'Pipeline Stages' },
        { name: 'beforeAfterRow1Bad', label: 'Before/After Row 1: Before (Breaks at Scale)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow1Good', label: 'Before/After Row 1: After (Predictable Revenue)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow2Label', label: 'Before/After Row 2: Label', type: 'text', placeholder: 'Exit Criteria' },
        { name: 'beforeAfterRow2Bad', label: 'Before/After Row 2: Before (Breaks at Scale)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow2Good', label: 'Before/After Row 2: After (Predictable Revenue)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow3Label', label: 'Before/After Row 3: Label', type: 'text', placeholder: 'Qualification' },
        { name: 'beforeAfterRow3Bad', label: 'Before/After Row 3: Before (Breaks at Scale)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow3Good', label: 'Before/After Row 3: After (Predictable Revenue)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow4Label', label: 'Before/After Row 4: Label', type: 'text', placeholder: 'Forecast Accuracy' },
        { name: 'beforeAfterRow4Bad', label: 'Before/After Row 4: Before (Breaks at Scale)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow4Good', label: 'Before/After Row 4: After (Predictable Revenue)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow5Label', label: 'Before/After Row 5: Label', type: 'text', placeholder: 'Founder Involvement' },
        { name: 'beforeAfterRow5Bad', label: 'Before/After Row 5: Before (Breaks at Scale)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow5Good', label: 'Before/After Row 5: After (Predictable Revenue)', type: 'textarea', rows: 2 },

        // Small vs Enterprise Comparison
        { name: 'compareHeading', label: 'Comparison Section: Heading', type: 'text' },
        { name: 'compareSubheading', label: 'Comparison Section: Subheading', type: 'text' },

        { name: 'compareRow1Label', label: 'Comparison Row 1: Dimension', type: 'text', placeholder: 'Number of Stages' },
        { name: 'compareRow1Small', label: 'Comparison Row 1: Small B2B Value', type: 'textarea', rows: 2 },
        { name: 'compareRow1Enterprise', label: 'Comparison Row 1: Enterprise Value', type: 'textarea', rows: 2 },

        { name: 'compareRow2Label', label: 'Comparison Row 2: Dimension', type: 'text', placeholder: 'Team Structure' },
        { name: 'compareRow2Small', label: 'Comparison Row 2: Small B2B Value', type: 'textarea', rows: 2 },
        { name: 'compareRow2Enterprise', label: 'Comparison Row 2: Enterprise Value', type: 'textarea', rows: 2 },

        { name: 'compareRow3Label', label: 'Comparison Row 3: Dimension', type: 'text', placeholder: 'Deal Size' },
        { name: 'compareRow3Small', label: 'Comparison Row 3: Small B2B Value', type: 'textarea', rows: 2 },
        { name: 'compareRow3Enterprise', label: 'Comparison Row 3: Enterprise Value', type: 'textarea', rows: 2 },

        { name: 'compareRow4Label', label: 'Comparison Row 4: Dimension', type: 'text', placeholder: 'Tools' },
        { name: 'compareRow4Small', label: 'Comparison Row 4: Small B2B Value', type: 'textarea', rows: 2 },
        { name: 'compareRow4Enterprise', label: 'Comparison Row 4: Enterprise Value', type: 'textarea', rows: 2 },

        { name: 'compareRow5Label', label: 'Comparison Row 5: Dimension', type: 'text', placeholder: 'Metrics Tracked' },
        { name: 'compareRow5Small', label: 'Comparison Row 5: Small B2B Value', type: 'textarea', rows: 2 },
        { name: 'compareRow5Enterprise', label: 'Comparison Row 5: Enterprise Value', type: 'textarea', rows: 2 },

        // About
        { name: 'aboutBio1', label: 'About: Bio Paragraph 1', type: 'textarea', rows: 2 },
        { name: 'aboutBio2', label: 'About: Bio Paragraph 2', type: 'textarea', rows: 4 },

        // FAQ
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
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
        { name: 'ctaButton', label: 'CTA Section: Button Text', type: 'text', placeholder: 'Book a Free 30-Minute Call' },
      ]}
    />
  )
}
