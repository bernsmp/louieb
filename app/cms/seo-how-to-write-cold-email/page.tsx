'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoHowToWriteColdEmailPage() {
  return (
    <SectionEditor
      section="seoHowToWriteColdEmail"
      title="SEO: How to Write a Cold Email That Gets Replies"
      description="Edit content for /how-to-write-a-cold-email"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // ── Hero ──────────────────────────────────────────────────────────────
        { name: 'heroLabel', label: 'Hero: Category Label (small text above headline)', type: 'text', placeholder: 'Outbound Sales' },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true, placeholder: 'How to Write a Cold Email That Gets Replies' },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true, placeholder: 'Without Sounding Like Spam' },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'heroPrimaryButton', label: 'Hero: Primary Button Text', type: 'text', placeholder: 'Talk to Louie — 30 Minutes' },
        { name: 'heroSecondaryLink', label: 'Hero: Secondary Link Text', type: 'text', placeholder: 'How cold email fits into a cadence →' },

        // ── 5-Line Formula Section ────────────────────────────────────────────
        { name: 'formulaHeading', label: 'Formula Section: Heading', type: 'text', placeholder: 'The 5-Line Cold Email Formula' },
        { name: 'formulaSubheading', label: 'Formula Section: Subheading', type: 'text', placeholder: "75–125 words. One ask. Earns the meeting — doesn't try to close it." },

        { name: 'formulaLine1Label', label: 'Formula Line 1: Label', type: 'text', placeholder: 'The Hook — Make It Specific to Them' },
        { name: 'formulaLine1Detail', label: 'Formula Line 1: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'formulaLine1Example', label: 'Formula Line 1: Example', type: 'textarea', rows: 2 },

        { name: 'formulaLine2Label', label: 'Formula Line 2: Label', type: 'text', placeholder: 'The Problem — Name the Pain Without Overstating It' },
        { name: 'formulaLine2Detail', label: 'Formula Line 2: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'formulaLine2Example', label: 'Formula Line 2: Example', type: 'textarea', rows: 2 },

        { name: 'formulaLine3Label', label: 'Formula Line 3: Label', type: 'text', placeholder: 'The Solution — One Sentence, Not a Pitch' },
        { name: 'formulaLine3Detail', label: 'Formula Line 3: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'formulaLine3Example', label: 'Formula Line 3: Example', type: 'textarea', rows: 2 },

        { name: 'formulaLine4Label', label: 'Formula Line 4: Label', type: 'text', placeholder: 'The Proof — One Specific Result' },
        { name: 'formulaLine4Detail', label: 'Formula Line 4: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'formulaLine4Example', label: 'Formula Line 4: Example', type: 'textarea', rows: 2 },

        { name: 'formulaLine5Label', label: 'Formula Line 5: Label', type: 'text', placeholder: 'The CTA — One Ask, Low Friction' },
        { name: 'formulaLine5Detail', label: 'Formula Line 5: Detail Paragraph', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'formulaLine5Example', label: 'Formula Line 5: Example', type: 'textarea', rows: 2 },

        // ── SEO Paragraph Section ─────────────────────────────────────────────
        { name: 'seoParagraph1', label: 'SEO Section: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoParagraph2', label: 'SEO Section: Paragraph 2 (text before the cadence link)', type: 'textarea', aiRewrite: true, rows: 4 },
        { name: 'seoParagraph2LinkText', label: 'SEO Section: Cadence Link Text', type: 'text', placeholder: 'read the full cadence guide →' },

        // ── Before / After Section ────────────────────────────────────────────
        { name: 'beforeAfterHeading', label: 'Before/After Section: Heading', type: 'text', placeholder: 'Before and After: Real Cold Email Rewrites' },
        { name: 'beforeAfterSubheading', label: 'Before/After Section: Subheading', type: 'text', placeholder: 'The difference between a deleted email and a replied-to one is usually these changes.' },

        { name: 'beforeAfterRow1Label', label: 'Before/After Row 1: Label', type: 'text', placeholder: 'Subject Line' },
        { name: 'beforeAfterRow1Bad', label: 'Before/After Row 1: Before (Gets Deleted)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow1Good', label: 'Before/After Row 1: After (Gets Replies)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow2Label', label: 'Before/After Row 2: Label', type: 'text', placeholder: 'Opening Line' },
        { name: 'beforeAfterRow2Bad', label: 'Before/After Row 2: Before (Gets Deleted)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow2Good', label: 'Before/After Row 2: After (Gets Replies)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow3Label', label: 'Before/After Row 3: Label', type: 'text', placeholder: 'Problem Statement' },
        { name: 'beforeAfterRow3Bad', label: 'Before/After Row 3: Before (Gets Deleted)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow3Good', label: 'Before/After Row 3: After (Gets Replies)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow4Label', label: 'Before/After Row 4: Label', type: 'text', placeholder: 'What You Do' },
        { name: 'beforeAfterRow4Bad', label: 'Before/After Row 4: Before (Gets Deleted)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow4Good', label: 'Before/After Row 4: After (Gets Replies)', type: 'textarea', rows: 2 },

        { name: 'beforeAfterRow5Label', label: 'Before/After Row 5: Label', type: 'text', placeholder: 'CTA' },
        { name: 'beforeAfterRow5Bad', label: 'Before/After Row 5: Before (Gets Deleted)', type: 'textarea', rows: 2 },
        { name: 'beforeAfterRow5Good', label: 'Before/After Row 5: After (Gets Replies)', type: 'textarea', rows: 2 },

        // ── About Section ─────────────────────────────────────────────────────
        { name: 'aboutBio1', label: 'About: Bio Paragraph 1', type: 'textarea', rows: 2 },
        { name: 'aboutBio2', label: 'About: Bio Paragraph 2', type: 'textarea', rows: 3 },

        // ── FAQ Section ───────────────────────────────────────────────────────
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', rows: 3 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', rows: 3 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', rows: 3 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', rows: 3 },

        // ── CTA Section ───────────────────────────────────────────────────────
        { name: 'ctaHeadline', label: 'CTA Section: Headline', type: 'text', aiRewrite: true },
        { name: 'ctaDescription', label: 'CTA Section: Description', type: 'textarea', rows: 2 },
        { name: 'ctaButton', label: 'CTA Section: Button Text', type: 'text', placeholder: 'Book a Free 30-Minute Call' },
      ]}
    />
  )
}
