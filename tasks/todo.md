# Add Categories to Blog Posts

## Goal
Let Louie assign categories to blog posts in the CMS, reusing the same categories that already exist for videos (`video_categories` table). Rename the concept to just "categories" since they're shared.

---

## Tasks

### 1. Add `category_id` column to `blog_posts` table in Supabase
- [ ] Add nullable `category_id` (UUID) column to `blog_posts`
- [ ] (Optional) Add foreign key reference to `video_categories.id`

### 2. Update Blog Post CMS Editor — Add category dropdown
- [ ] In `app/cms/blog/new/page.tsx` — fetch categories, add dropdown select
- [ ] In `app/cms/blog/[id]/page.tsx` — fetch categories, add dropdown select, load existing value

### 3. Update Blog Post API route
- [ ] In `app/api/cms/blog/route.ts` — handle `category_id` on create and update

### 4. Update data fetching in `lib/cms.ts`
- [ ] Include `category_id` when fetching blog posts (if needed for frontend display)

### 5. (Optional) Rename "Video Categories" to "Categories" in CMS sidebar
- [ ] Update AdminSidebar label so it's clear categories are shared

### 6. Test
- [ ] Create a blog post with a category assigned
- [ ] Edit a blog post and change its category
- [ ] Verify category is saved and loads correctly

---

## Files Touched

| File | Change |
|------|--------|
| Supabase `blog_posts` table | ADD `category_id` column |
| `app/cms/blog/new/page.tsx` | ADD category dropdown |
| `app/cms/blog/[id]/page.tsx` | ADD category dropdown |
| `app/api/cms/blog/route.ts` | HANDLE `category_id` |
| `lib/cms.ts` | MINOR — include category in fetch if needed |
| `app/cms/components/AdminSidebar.tsx` | OPTIONAL — rename label |
