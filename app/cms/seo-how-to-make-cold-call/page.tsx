'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoHowToMakeColdCallPage() {
  return (
    <SectionEditor
      section="seoHowToMakeColdCall"
      title="SEO: How to Make a Cold Call"
      description="Edit content for /how-to-make-a-cold-call"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // ── Hero ──────────────────────────────────────────────────────────────
        { name: 'heroLabel', label: 'Hero: Category Label (small text above headline)', type: 'text', placeholder: 'Outbound Sales' },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true, placeholder: 'How to Make a Cold Call' },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true, placeholder: 'That Actually Books Meetings' },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'heroPrimaryButton', label: 'Hero: Primary Button Text', type: 'text', placeholder: 'Talk to Louie. 30 Minutes.' },
        { name: 'heroSecondaryLink', label: 'Hero: Secondary Link Text', type: 'text', placeholder: 'How cold calls fit into a cadence →' },

        // ── Key Takeaways ─────────────────────────────────────────────────────
        { name: 'takeaway1', label: 'Key Takeaway 1', type: 'textarea', rows: 2 },
        { name: 'takeaway2', label: 'Key Takeaway 2', type: 'textarea', rows: 2 },
        { name: 'takeaway3', label: 'Key Takeaway 3', type: 'textarea', rows: 2 },
        { name: 'takeaway4', label: 'Key Takeaway 4', type: 'textarea', rows: 2 },

        // ── Cold Call Openers Section (H2) ────────────────────────────────────
        { name: 'openersHeading', label: 'Openers Section: Heading (H2)', type: 'text', placeholder: 'Cold Call Openers That Work' },
        { name: 'openersSubheading', label: 'Openers Section: Subheading', type: 'text' },

        { name: 'opener1Label', label: 'Opener 1: Label', type: 'text', placeholder: 'The Pattern Interrupt' },
        { name: 'opener1Detail', label: 'Opener 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'opener1Example', label: 'Opener 1: Example', type: 'textarea', rows: 3 },

        { name: 'opener2Label', label: 'Opener 2: Label', type: 'text', placeholder: 'The Specific Trigger' },
        { name: 'opener2Detail', label: 'Opener 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'opener2Example', label: 'Opener 2: Example', type: 'textarea', rows: 3 },

        { name: 'opener3Label', label: 'Opener 3: Label', type: 'text', placeholder: 'The Permission Question' },
        { name: 'opener3Detail', label: 'Opener 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'opener3Example', label: 'Opener 3: Example', type: 'textarea', rows: 3 },

        { name: 'opener4Label', label: 'Opener 4: Label', type: 'text', placeholder: 'The Curiosity Hook' },
        { name: 'opener4Detail', label: 'Opener 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'opener4Example', label: 'Opener 4: Example', type: 'textarea', rows: 3 },

        { name: 'opener5Label', label: 'Opener 5: Label', type: 'text', placeholder: 'The Referral Bridge' },
        { name: 'opener5Detail', label: 'Opener 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'opener5Example', label: 'Opener 5: Example', type: 'textarea', rows: 3 },

        // ── SEO Paragraph Section ─────────────────────────────────────────────
        { name: 'seoParagraph1', label: 'SEO Section: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoParagraph2', label: 'SEO Section: Paragraph 2 (text before the cadence link)', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoParagraph2LinkText', label: 'SEO Section: Cadence Link Text', type: 'text', placeholder: 'read the full cadence guide →' },

        // ── Before / After Section ────────────────────────────────────────────
        { name: 'beforeAfterHeading', label: 'Before/After Section: Heading', type: 'text', placeholder: 'Before and After: Real Cold Call Rewrites' },
        { name: 'beforeAfterSubheading', label: 'Before/After Section: Subheading', type: 'text' },

        { name: 'beforeAfterRow1Label', label: 'Before/After Row 1: Label', type: 'text', placeholder: 'Opening Line' },
        { name: 'beforeAfterRow1Bad', label: 'Before/After Row 1: Before (Gets Hung Up On)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow1Good', label: 'Before/After Row 1: After (Books Meetings)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow2Label', label: 'Before/After Row 2: Label', type: 'text', placeholder: 'Reason for Call' },
        { name: 'beforeAfterRow2Bad', label: 'Before/After Row 2: Before (Gets Hung Up On)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow2Good', label: 'Before/After Row 2: After (Books Meetings)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow3Label', label: 'Before/After Row 3: Label', type: 'text', placeholder: 'Value Statement' },
        { name: 'beforeAfterRow3Bad', label: 'Before/After Row 3: Before (Gets Hung Up On)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow3Good', label: 'Before/After Row 3: After (Books Meetings)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow4Label', label: 'Before/After Row 4: Label', type: 'text', placeholder: 'Permission Ask' },
        { name: 'beforeAfterRow4Bad', label: 'Before/After Row 4: Before (Gets Hung Up On)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow4Good', label: 'Before/After Row 4: After (Books Meetings)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow5Label', label: 'Before/After Row 5: Label', type: 'text', placeholder: 'Close' },
        { name: 'beforeAfterRow5Bad', label: 'Before/After Row 5: Before (Gets Hung Up On)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow5Good', label: 'Before/After Row 5: After (Books Meetings)', type: 'textarea', rows: 2 },

        // ── Cold Call vs Cold Email Comparison ────────────────────────────────
        { name: 'compareHeading', label: 'Comparison Section: Heading', type: 'text', placeholder: 'Cold Call vs. Cold Email' },
        { name: 'compareSubheading', label: 'Comparison Section: Subheading', type: 'text' },

        { name: 'compareRow1Label', label: 'Comparison Row 1: Metric', type: 'text', placeholder: 'Connect Rate' },
        { name: 'compareRow1Call', label: 'Comparison Row 1: Cold Call Value', type: 'textarea', rows: 2 },
        { name: 'compareRow1Email', label: 'Comparison Row 1: Cold Email Value', type: 'textarea', rows: 2 },

        { name: 'compareRow2Label', label: 'Comparison Row 2: Metric', type: 'text', placeholder: 'Meeting Conversion' },
        { name: 'compareRow2Call', label: 'Comparison Row 2: Cold Call Value', type: 'textarea', rows: 2 },
        { name: 'compareRow2Email', label: 'Comparison Row 2: Cold Email Value', type: 'textarea', rows: 2 },

        { name: 'compareRow3Label', label: 'Comparison Row 3: Metric', type: 'text', placeholder: 'Time per Touch' },
        { name: 'compareRow3Call', label: 'Comparison Row 3: Cold Call Value', type: 'textarea', rows: 2 },
        { name: 'compareRow3Email', label: 'Comparison Row 3: Cold Email Value', type: 'textarea', rows: 2 },

        { name: 'compareRow4Label', label: 'Comparison Row 4: Metric', type: 'text', placeholder: 'Conversation Quality' },
        { name: 'compareRow4Call', label: 'Comparison Row 4: Cold Call Value', type: 'textarea', rows: 2 },
        { name: 'compareRow4Email', label: 'Comparison Row 4: Cold Email Value', type: 'textarea', rows: 2 },

        { name: 'compareRow5Label', label: 'Comparison Row 5: Metric', type: 'text', placeholder: 'Where It Fits' },
        { name: 'compareRow5Call', label: 'Comparison Row 5: Cold Call Value', type: 'textarea', rows: 2 },
        { name: 'compareRow5Email', label: 'Comparison Row 5: Cold Email Value', type: 'textarea', rows: 2 },

        // ── About Section ─────────────────────────────────────────────────────
        { name: 'aboutBio1', label: 'About: Bio Paragraph 1', type: 'textarea', rows: 2 },
        { name: 'aboutBio2', label: 'About: Bio Paragraph 2', type: 'textarea', rows: 4 },

        // ── FAQ Section ───────────────────────────────────────────────────────
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

        // ── CTA Section ───────────────────────────────────────────────────────
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
        { name: 'ctaButton', label: 'CTA Section: Button Text', type: 'text', placeholder: 'Book a Free 30-Minute Call' },
      ]}
    />
  )
}
