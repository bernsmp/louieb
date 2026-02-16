# Tasks: FAQPage Schema Fix + Articles CMS

## Fixes

- [x] Fix 1: Merge duplicate FAQPage/Article schema into single @graph JSON-LD block
- [x] Fix 2: Build Articles CMS API routes (GET all, GET/PUT/DELETE single, POST new)
- [x] Fix 3: Build Articles CMS pages (list, edit, new)
- [x] Fix 4: Add "Articles" link to AdminSidebar Collections section
- [x] Verify: `npm run build` passes

## Review

### Changes Summary
1. **`app/(site)/fractional-sales-leader-vs-consultant/page.tsx`** — Merged two separate `<script type="application/ld+json">` blocks (Article + FAQPage) into a single block using `@graph` array. Fixes Google Search Console duplicate structured data error.

2. **`app/api/cms/articles/route.ts`** (NEW) — GET returns all articles (frontmatter only), POST creates a new .md file with slug generated from title.

3. **`app/api/cms/articles/[slug]/route.ts`** (NEW) — GET returns single article (frontmatter + content), PUT updates it, DELETE removes the .md file. All write operations require auth.

4. **`app/cms/articles/page.tsx`** (NEW) — Article list page matching blog list pattern. Shows cards with image thumbnail, title, date, Edit/Delete buttons.

5. **`app/cms/articles/[slug]/page.tsx`** (NEW) — Edit article form with all frontmatter fields + markdown content textarea + ImageUploader for featured image.

6. **`app/cms/articles/new/page.tsx`** (NEW) — New article form, generates slug from title.

7. **`app/cms/components/AdminSidebar.tsx`** — Added "Articles" link to Collections section (after Blog Posts), using existing FileTextIcon.

### New Dependencies
- None (uses existing `gray-matter` and `lib/markdown.ts`)

### Env Vars
- None new

### Limitations
- Articles stay as markdown files — no database migration
- No drag-to-reorder (articles don't have display_order)
- Slug is generated once on create; renaming title won't change the slug/filename
