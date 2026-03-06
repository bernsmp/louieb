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
          hint: 'Current: Still In The Game',
          aiRewrite: true,
        },
        {
          name: 'heroSubheadline',
          label: 'Hero Subheadline',
          type: 'text',
          placeholder: 'The Decisions That Actually Keep You There',
          hint: 'Current: The Decisions That Actually Keep You There',
          aiRewrite: true,
        },
        {
          name: 'heroTagline',
          label: 'Hero Tagline',
          type: 'textarea',
          rows: 3,
          placeholder: 'Five decades. Five decisions...',
          hint: 'Current: Five decades. Five decisions. One framework that builds the resilience to get you to the next stage — and keep you there. Each chapter closes with prompts built to run in Claude.',
        },

        // ── VIDEO ─────────────────────────────────────────────
        {
          name: 'videoId',
          label: 'YouTube Video ID',
          type: 'text',
          placeholder: 'e.g., fCVKpcpD8tA',
          hint: 'Paste the ID from your YouTube URL: youtube.com/watch?v=THIS_PART — leave blank to show the "Video Coming Soon" placeholder until your video is ready.',
        },

        // ── PRICING & BUY BUTTON ──────────────────────────────
        {
          name: 'price',
          label: 'Price (number only, no $)',
          type: 'text',
          placeholder: '47',
          hint: 'Current: 47  —  Displayed as "$47" on the page.',
        },
        {
          name: 'buyButtonUrl',
          label: 'Buy Button URL (Stripe Payment Link)',
          type: 'url',
          placeholder: 'https://buy.stripe.com/...',
          hint: 'Current: blank (button shows "Coming Soon"). Paste your Stripe payment link here to activate the buy button.',
        },
        {
          name: 'buyButtonText',
          label: 'Buy Button Text',
          type: 'text',
          placeholder: 'Buy Now — $47',
          hint: 'Current: Buy Now — $47',
        },

        // ── HOOK / PROBLEM SECTION ────────────────────────────
        {
          name: 'hookHeadline',
          label: 'Hook Headline',
          type: 'textarea',
          rows: 2,
          placeholder: "Most business advice is written by people who haven't finished the race yet.",
          hint: "Current: Most business advice is written by people who haven't finished the race yet.",
          aiRewrite: true,
        },
        {
          name: 'hookBody',
          label: 'Hook Body Paragraph',
          type: 'textarea',
          rows: 3,
          placeholder: "They're successful. They're smart...",
          hint: "Current: They're successful. They're smart. But they're still in the middle of it. They haven't hit the decisions that only come after decade two or three — the ones nobody talks about honestly because they're still too close to them.",
        },
        {
          name: 'hookCalloutHeadline',
          label: 'Callout Box — Headline',
          type: 'textarea',
          rows: 3,
          placeholder: 'Louie Bernstein is 74...',
          hint: 'Current: Louie Bernstein is 74. He built a bootstrapped company that ran for 22 years and made the INC 500. He survived 9/11, a burnout, a depression diagnosis, and about forty other things that should have ended everything.',
        },
        {
          name: 'hookCalloutBody',
          label: 'Callout Box — Body',
          type: 'textarea',
          rows: 2,
          placeholder: 'He finished the race. Then he started again...',
          hint: 'Current: He finished the race. Then he started again. This framework is what he learned.  (Note: "This framework is what he learned." appears bold on the page.)',
        },

        // ── ABOUT SECTION ─────────────────────────────────────
        {
          name: 'aboutBio1',
          label: 'About — Paragraph 1',
          type: 'textarea',
          rows: 3,
          placeholder: 'Louie Bernstein launched his first company in 1986...',
          hint: 'Current: Louie Bernstein launched his first company in 1986 with a broken vertebra, a two-year-old at home, a second child weeks away, and life savings already spent. MindIQ ran for 22 years, made the INC 500, and survived everything from 9/11 to a full founder burnout.',
        },
        {
          name: 'aboutBio2',
          label: 'About — Paragraph 2',
          type: 'textarea',
          rows: 3,
          placeholder: 'After stepping away in 2015...',
          hint: 'Current: After stepping away in 2015, he took a Chief Sales Officer role at a Georgia Tech startup and grew sales 52% per year for three years. When that chapter ended, he built what he would have hired during his own hardest years — a Fractional Sales Leadership practice for bootstrapped founders and entrepreneurs.',
        },
        {
          name: 'aboutBio3',
          label: 'About — Paragraph 3',
          type: 'textarea',
          rows: 2,
          placeholder: 'At 74, he is still going...',
          hint: 'Current: At 74, he is still going. Not because he has to be. Because he knows exactly what he is doing now.',
        },

        // ── CLOSING QUOTE ─────────────────────────────────────
        {
          name: 'closingQuote',
          label: 'Closing Quote (bottom of page)',
          type: 'textarea',
          rows: 2,
          placeholder: "Nobody arrives at the end of their life wishing they had taken fewer chances.",
          hint: 'Current: Nobody arrives at the end of their life wishing they had taken fewer chances.  —  Attributed to Louie Bernstein automatically.',
        },

      ]}
    />
  )
}
