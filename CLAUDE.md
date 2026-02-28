# louiebernstein.com — Claude Code Context

## What This Site Is
Personal website for Louie Bernstein, Fractional Sales Leader. Built with Next.js 14, deployed automatically to Vercel via GitHub (push to `main` = live in ~60 seconds).

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **CMS:** Supabase (`site_content` table + `faq_items` table + `faq_items` table + `testimonials` table)
- **Deployment:** Vercel (auto-deploys on every push to `main`)
- **Repo:** https://github.com/bernsmp/louieb.git

## Critical Rule: CMS Overrides Code
Content is stored in Supabase and **overrides** code defaults. If you change copy in a `.tsx` file but it doesn't update live, the Supabase database is overriding it. Always update Supabase directly for content changes.

## How to Make Content Changes
Use a Node.js script to update Supabase. Pattern:
```js
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
// fetch → modify → upsert
```

## Key Supabase Tables
| Table | What's in it |
|-------|-------------|
| `site_content` | All page sections (hero, about, process, FAQ metadata, etc.) — keyed by `section` column |
| `faq_items` | Individual FAQ questions — `page` column = 'homepage', 'faqsPage', 'fslPage' |
| `testimonials` | Client testimonials — `page` column filters by page |

## Key Files
| File | What it does |
|------|-------------|
| `app/(site)/page.tsx` | Homepage — controls section order |
| `components/Hero.tsx` | Hero section component |
| `components/sections/` | All other section components |
| `lib/cms.ts` | All CMS fetching and defaults |

## Deployment Flow
1. Make changes (code or Supabase)
2. `git add`, `git commit`, `git push` for code changes
3. Vercel auto-deploys in ~60 seconds
4. Hard reload browser (`Cmd+Shift+R`) to bypass cache

## Common Tasks Louie Can Ask For
- "Update the hero headline to..."
- "Add a new testimonial from [Name], [Title] at [Company]: [quote]"
- "Change the FAQ answer for [question] to..."
- "Add a new FAQ question: [Q] / [A]"
- "Update the About section copy to..."
- "Change the process steps to..."
