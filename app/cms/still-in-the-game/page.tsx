'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditStillInTheGamePage() {
  return (
    <SectionEditor
      section="stillInTheGame"
      title="Still In The Game"
      description="Your digital guide sales page at louiebernstein.com/still-in-the-game"
      backHref="/cms"
      backLabel="Back to Dashboard"
      fields={[
        // ── HERO ──────────────────────────────────────────────
        {
          name: 'heroHeadline',
          label: 'Hero Headline',
          type: 'text',
          placeholder: 'Still In The Game',
          aiRewrite: true,
        },
        {
          name: 'heroSubheadline',
          label: 'Hero Subheadline',
          type: 'text',
          placeholder: 'The Decisions That Actually Keep You There',
          aiRewrite: true,
        },
        {
          name: 'heroTagline',
          label: 'Hero Tagline (under subheadline)',
          type: 'textarea',
          rows: 2,
          placeholder: 'Five decades. Five decisions...',
          hint: 'Short descriptor shown under the subheadline in the hero.',
        },

        // ── VIDEO ─────────────────────────────────────────────
        {
          name: 'videoId',
          label: 'YouTube Video ID',
          type: 'text',
          placeholder: 'e.g., fCVKpcpD8tA',
          hint: 'The ID from your YouTube URL: youtube.com/watch?v=THIS_PART — leave blank to show a placeholder until your video is ready.',
        },

        // ── PRICING & BUY BUTTON ──────────────────────────────
        {
          name: 'price',
          label: 'Price (number only, no $)',
          type: 'text',
          placeholder: '47',
          hint: 'Shown as "$47" on the page. Just enter the number.',
        },
        {
          name: 'buyButtonUrl',
          label: 'Buy Button URL (Stripe Payment Link)',
          type: 'url',
          placeholder: 'https://buy.stripe.com/...',
          hint: 'Leave blank to show "Coming Soon" button. Add your Stripe payment link here when ready.',
        },
        {
          name: 'buyButtonText',
          label: 'Buy Button Text',
          type: 'text',
          placeholder: 'Buy Now — $47',
        },

        // ── HOOK / PROBLEM SECTION ────────────────────────────
        {
          name: 'hookHeadline',
          label: 'Hook Headline',
          type: 'textarea',
          rows: 2,
          placeholder: "Most business advice is written by people who haven't finished the race yet.",
          aiRewrite: true,
          hint: 'The bold statement at the top of the problem section.',
        },
        {
          name: 'hookBody',
          label: 'Hook Body Paragraph',
          type: 'textarea',
          rows: 3,
          placeholder: "They're successful. They're smart. But they're still in the middle of it...",
          hint: 'The paragraph under the hook headline.',
        },
        {
          name: 'hookCalloutHeadline',
          label: 'Callout Box — Headline',
          type: 'textarea',
          rows: 3,
          placeholder: 'Louie Bernstein is 74...',
          hint: 'Bold text inside the left-bordered callout box.',
        },
        {
          name: 'hookCalloutBody',
          label: 'Callout Box — Body',
          type: 'textarea',
          rows: 2,
          placeholder: 'He finished the race. Then he started again. This is what he learned.',
          hint: 'Smaller text below the callout headline. "This is what he learned." will be bolded automatically.',
        },

        // ── ABOUT SECTION ─────────────────────────────────────
        {
          name: 'aboutBio1',
          label: 'About — Paragraph 1',
          type: 'textarea',
          rows: 3,
          hint: 'First paragraph of the About Louie section.',
        },
        {
          name: 'aboutBio2',
          label: 'About — Paragraph 2',
          type: 'textarea',
          rows: 3,
          hint: 'Second paragraph of the About Louie section.',
        },
        {
          name: 'aboutBio3',
          label: 'About — Paragraph 3',
          type: 'textarea',
          rows: 2,
          hint: 'Third paragraph of the About Louie section.',
        },

        // ── CLOSING QUOTE ─────────────────────────────────────
        {
          name: 'closingQuote',
          label: 'Closing Quote (bottom of page)',
          type: 'textarea',
          rows: 2,
          placeholder: "Nobody arrives at the end of their life wishing they had taken fewer chances.",
          hint: 'Shown in the pricing section footer. Attributed to Louie Bernstein automatically.',
        },
      ]}
    />
  )
}
