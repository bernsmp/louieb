'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function EditFoundersPage() {
  return (
    <SectionEditor
      section="founders"
      title="Founders Page — Staying In The Game"
      description="Your $47 product landing page at louiebernstein.com/founders"
      backHref="/cms"
      backLabel="Back to Dashboard"
      fields={[

        // ── HERO ──────────────────────────────────────────────
        {
          name: 'heroHeadline',
          label: 'Hero Headline',
          type: 'text',
          placeholder: 'Staying In The Game',
          hint: 'Current: Staying In The Game',
          aiRewrite: true,
        },
        {
          name: 'heroSubheadline',
          label: 'Hero Subheadline',
          type: 'text',
          placeholder: 'Five Decades. Five Decisions. One Framework.',
          hint: 'Current: Five Decades. Five Decisions. One Framework.',
          aiRewrite: true,
        },
        {
          name: 'heroTagline',
          label: 'Hero Tagline',
          type: 'textarea',
          rows: 2,
          placeholder: 'The resilience framework for founders who are already in it...',
          hint: 'Current: The resilience framework for founders who are already in it — and need to stay standing through what comes next.',
        },
        {
          name: 'videoId',
          label: 'Hero Video — YouTube Video ID',
          type: 'text',
          placeholder: 'e.g. fCVKpcpD8tA',
          hint: 'Paste just the video ID from the YouTube URL (the part after ?v= or /shorts/). The 16:9 video will appear below the headline and tagline. Leave blank to hide the video.',
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
          label: 'Buy Button URL (Gumroad link)',
          type: 'url',
          placeholder: 'https://louiebernstein.gumroad.com/l/staying',
          hint: 'Current: https://louiebernstein.gumroad.com/l/staying',
        },
        {
          name: 'buyButtonText',
          label: 'Buy Button Text',
          type: 'text',
          placeholder: 'Get Staying In The Game — $47 →',
          hint: 'Current: Get Staying In The Game — $47 →',
        },

        // ── HOOK / PROBLEM SECTION ────────────────────────────
        {
          name: 'hookHeadline',
          label: 'Hook Headline',
          type: 'textarea',
          rows: 2,
          placeholder: 'Nobody tells you what the hard parts actually look like until you\'re already in them.',
          hint: 'Current: Nobody tells you what the hard parts actually look like until you\'re already in them.',
          aiRewrite: true,
        },
        {
          name: 'hookBody',
          label: 'Hook Body Paragraph',
          type: 'textarea',
          rows: 3,
          placeholder: 'The crisis that blindsides you...',
          hint: 'Current: The crisis that blindsides you. The burnout you didn\'t see coming. The moment you wonder if you should quit or keep going. Most founders walk into every one of these unprepared — because nobody who survived them talks about what they really looked like.',
        },

        // ── ABOUT SECTION ─────────────────────────────────────
        {
          name: 'aboutBio1',
          label: 'About — Paragraph 1',
          type: 'textarea',
          rows: 3,
          placeholder: 'Louie Bernstein started MindIQ in 1986...',
          hint: 'Current: Louie Bernstein started MindIQ in 1986 — two kids, a broken vertebra, life savings gone. The company ran for 22 years and made the INC 500.',
        },
        {
          name: 'aboutBio2',
          label: 'About — Paragraph 2',
          type: 'textarea',
          rows: 3,
          placeholder: 'He has been through every decision in this framework...',
          hint: 'Current: He has been through every decision in this framework. Not as case studies. As his actual life. The crisis, the burnout, the reinvention, the long game. He built this framework because he wishes someone had handed it to him thirty years ago.',
        },
        {
          name: 'aboutBio3',
          label: 'About — Paragraph 3',
          type: 'textarea',
          rows: 2,
          placeholder: 'At 74, he is still building...',
          hint: 'Current: At 74, he is still building. Still learning. And still telling the honest version of what it takes.',
        },

        // ── CLOSING QUOTE ─────────────────────────────────────
        {
          name: 'closingQuote',
          label: 'Closing Quote (bottom of dark CTA section)',
          type: 'textarea',
          rows: 2,
          placeholder: 'Resilience is not a personality trait. It is a skill...',
          hint: 'Current: Resilience is not a personality trait. It is a skill. And like every skill, it is built — decision by decision, decade by decade.  —  Attributed to Louie Bernstein automatically.',
        },

        // ── FREE GUIDE URL ────────────────────────────────────
        {
          name: 'freeGuideUrl',
          label: 'Free Guide URL (Before You Leave The Dock)',
          type: 'url',
          placeholder: 'https://louiebernstein.gumroad.com/l/entrepreneurs',
          hint: 'Current: https://louiebernstein.gumroad.com/l/entrepreneurs — The "Get Before You Leave The Dock — Free" button at the bottom of the page.',
        },

      ]}
    />
  )
}
