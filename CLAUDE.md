# louiebernstein.com — Claude Code Context

## What This Site Is
Personal website for Louie Bernstein, Fractional Sales Leader. Built with Next.js 14, deployed automatically to Vercel via GitHub (push to `main` = live in ~60 seconds).

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4 (inline `@theme` in `app/globals.css`, no tailwind.config.ts)
- **CMS:** Supabase (`site_content` table + `faq_items` table + `testimonials` table)
- **Deployment:** Vercel (auto-deploys on every push to `main`)
- **Repo:** https://github.com/bernsmp/louieb.git

## ICP (every line of copy must speak to them)
B2B founders, **$1M–$10M ARR**, stuck in founder-led sales, not ready for a full-time VP of Sales. Louie is the answer.

## Critical Rule: CMS Overrides Code
Content is stored in Supabase and **overrides** code defaults. If you change copy in a `.tsx` file but it doesn't update live, the Supabase database is overriding it. Always update Supabase directly for content changes.

## How to Make Content Changes
Use a Node.js script to update Supabase. Env vars live in `D:\louieb\.env.local`. Pattern:
```js
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
// fetch → modify → upsert({ section, content }, { onConflict: 'section' })
```

## Key Supabase Tables
| Table | What's in it |
|-------|-------------|
| `site_content` | All page sections keyed by `section` column (camelCase, e.g. `seoHowToMakeColdCall`) |
| `faq_items` | Individual FAQ questions — `page` column = 'homepage', 'faqsPage', 'fslPage' |
| `testimonials` | Client testimonials — `page` column filters by page |

## Key Files
| File | What it does |
|------|-------------|
| `app/(site)/page.tsx` | Homepage — controls section order |
| `components/Hero.tsx` | Hero section component |
| `components/sections/` | All other section components |
| `components/ui/HeroBackground.tsx` | Gradient hero wrapper used on every SEO article |
| `lib/cms.ts` | CMS fetching + type definitions |
| `lib/useCmsSection.ts` | Client hook: `useCmsSection('seoFoo')` → `{ v, cmsfaqs }` |
| `app/cms/components/SectionEditor.tsx` | CMS editor component — wrap it per article |
| `app/cms/components/AdminSidebar.tsx` | CMS sidebar — every new article's editor link goes in `pages` array here |
| `app/(site)/site-map/page.tsx` | Public site map — every new article URL goes in `SALES_GUIDES` or `FSL_PAGES` |

## Deployment Flow
1. Make changes (code or Supabase)
2. `git add`, `git commit`, `git push` for code changes
3. Vercel auto-deploys in ~60 seconds
4. Hard reload browser (`Cmd+Shift+R`) to bypass cache

════════════════════════════════════════════════════════════════
## Standing SEO Article Template Spec
════════════════════════════════════════════════════════════════

Every new SEO article page must match this spec. **Canonical reference:** `app/(site)/how-to-build-sales-system-without-full-time-vp/` (most recent full example — page.tsx, layout.tsx, plus `scripts/seed-build-sales-system-without-vp.js` and `app/cms/seo-build-sales-system-without-vp/page.tsx`).

### Files to create per article
1. **`app/(site)/<slug>/page.tsx`** — `'use client'` React component, uses `useCmsSection('<seoSectionName>')` for every editable string.
2. **`app/(site)/<slug>/layout.tsx`** — `Metadata` export (title, description, keywords[], openGraph, twitter, canonical, robots).
3. **`scripts/seed-<slug>.js`** — Node script that upserts the section row into Supabase.
4. **`app/cms/seo-<slug>/page.tsx`** — wraps `<SectionEditor />` with `fields=[]` describing every CMS field.

### Then register the article
5. Add nav link in **`app/cms/components/AdminSidebar.tsx`** (`pages` array).
6. Add public URL in **`app/(site)/site-map/page.tsx`** in the correct section (`SALES_GUIDES` or `FSL_PAGES`).

### Naming conventions
- URL slug: kebab-case of the H1 question (e.g. `/why-does-my-revenue-feel-unpredictable-month-to-month`).
- CMS section: `seo` + PascalCase of a short descriptive key (e.g. `seoRevenueUnpredictableMonthly`). Lives in the page file as `const CMS_SECTION = 'seoRevenueUnpredictableMonthly'`.

### Required on-page blocks (in order)
1. **JSON-LD** — `<script type="application/ld+json">` with `FAQPage` + `Article` graph.
2. **Hero** — `HeroBackground` component, `accentColor="#1d4ed8"` `fillColor="rgba(29,78,216,0.3)"` `className="bg-slate-950"`. Contains: eyebrow tag, H1 split across two spans (line 1 white + accent line blue), H2 subtitle in `text-blue-200`, description paragraph, primary CTA (Calendly → `https://calendly.com/louiebernstein/30minutes?month=2026-03`) + secondary link.
3. **Key Takeaways** — `rounded-xl border-l-4 border-blue-700 bg-neutral-50 p-7` with 4–5 bullet points, blue-dot bullets.
4. **Main numbered section** (4–5 items) — numbered cards `01`–`0N`, each with title + detail paragraph + optional "What You Get" outcome box (`bg-blue-50 border-blue-100`).
5. **SEO body paragraphs** (2 paragraphs, 50–100 words each) with 1–2 inline internal links styled `font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900`.
6. **Comparison table** — 2-column grid, dark header (`bg-neutral-900`), red ✕ column vs green ✓ column, 6 rows.
7. **Optional sequence/callout section** depending on topic (e.g. "Build Sequence", "Economics" — skip if the topic doesn't warrant it; `what-breaks-first-when-founder-stops-selling` has none).
8. **About Louie** — `rounded-xl border bg-neutral-50 p-8`, 2 short bio paragraphs.
9. **FAQ** — 5 rounded cards, questions + answers, pulled via `cmsfaqs(5, defaultFaqs)`.
10. **Related Reading** — H2 + 3 bulleted internal links (styled the same blue as SEO links). Must be 3 genuinely related articles.
11. **CTA** — `bg-gradient-to-br from-slate-900 to-slate-800`, headline + description + Calendly button.

### Framer Motion conventions
Every section uses `variants={containerVariants}` + `initial="hidden"` + `whileInView="visible"` + `viewport={{ once: true }}`. The hero uses `animate="visible"` instead. Variants are defined at the top of the page component (see template for exact values).

### Colors
- Primary blue (light bg): `text-blue-700`, `bg-blue-50`, `border-blue-100`, `text-blue-800`
- Primary blue (dark bg / hero): `text-blue-400`, `text-blue-200`
- Destructive accent: `text-red-500`, `bg-red-50`, `border-red-100`, `text-red-700`
- Success accent: `text-green-600`
- Neutrals: `text-neutral-700` (body), `text-neutral-900` (headings), `bg-neutral-50` (subtle), `bg-white` (sections), `bg-slate-950` (hero), `from-slate-900 to-slate-800` (CTA)
- Fonts: `font-serif` (Playfair — H1/H2), sans default (Outfit — body)

### Common Tasks Louie Can Ask For
- "Update the hero headline to..."
- "Add a new testimonial from [Name], [Title] at [Company]: [quote]"
- "Change the FAQ answer for [question] to..."
- "Add a new FAQ question: [Q] / [A]"
- "Update the About section copy to..."
- "Write me a new SEO article titled..." — follow the Standing SEO Article Template Spec above.
