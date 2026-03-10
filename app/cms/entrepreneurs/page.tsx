'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditEntrepreneursPage() {
  return (
    <SectionEditor
      section="entrepreneurs"
      title="Before You Leave The Dock"
      description="Your free PDF guide landing page at louiebernstein.com/entrepreneurs"
      backHref="/cms"
      backLabel="Back to Dashboard"
      fields={[

        // ── HERO ──────────────────────────────────────────────
        {
          name: 'heroHeadline',
          label: 'Hero Headline',
          type: 'text',
          placeholder: 'Are You Ready to Start — or Just Restless?',
          hint: 'Current: Are You Ready to Start — or Just Restless?',
          aiRewrite: true,
        },
        {
          name: 'heroTagline',
          label: 'Hero Tagline (below headline)',
          type: 'textarea',
          rows: 2,
          placeholder: 'Five critical questions that surface whether you\'re built for founding — before the cost is real.',
          hint: 'Current: Five critical questions that surface whether you\'re built for founding — before the cost is real.',
          aiRewrite: true,
        },

        // ── GUMROAD URL ───────────────────────────────────────
        {
          name: 'gumroadUrl',
          label: 'Gumroad URL (free product link)',
          type: 'url',
          placeholder: 'https://louiebernstein.gumroad.com/l/entrepreneurs',
          hint: 'Current: https://louiebernstein.gumroad.com/l/entrepreneurs — This is the link all "Get the Free Guide" buttons point to.',
        },

        // ── HOOK / PROBLEM SECTION ────────────────────────────
        {
          name: 'hookHeadline',
          label: 'Hook Headline',
          type: 'textarea',
          rows: 2,
          placeholder: 'Most founders don\'t fail because they worked too hard. They fail because they started wrong.',
          hint: 'Current: Most founders don\'t fail because they worked too hard. They fail because they started wrong.',
          aiRewrite: true,
        },
        {
          name: 'hookBody',
          label: 'Hook Body Paragraph',
          type: 'textarea',
          rows: 3,
          placeholder: 'They started for the wrong reasons...',
          hint: 'Current: They started for the wrong reasons. They solved a problem nobody had. They didn\'t know what they were signing up for. And by the time they figured it out, the cost was already real.',
        },

        // ── CLOSING QUOTE ─────────────────────────────────────
        {
          name: 'closingQuote',
          label: 'Closing Quote (bottom of dark CTA section)',
          type: 'textarea',
          rows: 2,
          placeholder: 'Leaving the dock is not the hard part. Starting right is.',
          hint: 'Current: Leaving the dock is not the hard part. Starting right is.  —  Attributed to Louie Bernstein automatically.',
        },

        // ── UPSELL URL ────────────────────────────────────────
        {
          name: 'upsellUrl',
          label: 'Upsell URL (Staying In The Game — $47)',
          type: 'url',
          placeholder: 'https://louiebernstein.gumroad.com/l/staying',
          hint: 'Current: https://louiebernstein.gumroad.com/l/staying — The "Get Staying In The Game" button at the bottom of the page.',
        },

      ]}
    />
  )
}
