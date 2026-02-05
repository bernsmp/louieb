# Video Categories + Filterable Grid

## Goal
Add a category system for videos with full CMS management, then replace the flat text links on the public videos page with a filterable thumbnail card grid.

---

## Tasks

### 1. Database Migration
- [x] Create `supabase/migrations/20250205_add_video_categories.sql`
  - `video_categories` table (id, name, slug, display_order, created_at, updated_at)
  - Add `category_id` (nullable FK) to `videos` table
  - RLS policies (public read, authenticated write)
  - `ON DELETE SET NULL`
  - Reuse `handle_updated_at()` trigger

### 2. Add Types
- [x] Modify `lib/supabase.ts`
  - Add `VideoCategoryRow` interface
  - Add `category_id: string | null` to `VideoRow`

### 3. Categories API Routes
- [x] Create `app/api/cms/categories/route.ts` (GET + POST)
- [x] Create `app/api/cms/categories/[id]/route.ts` (GET + PUT + DELETE)
  - Follow pattern from `app/api/cms/services/` routes
  - Auto-generate slug from name on create

### 4. Register in Order Blocks API
- [x] Modify `app/api/cms/order/blocks/route.ts`
  - Add `'video-categories': 'video_categories'` to `BLOCK_TABLES`

### 5. CMS Categories Pages
- [x] Create `app/cms/categories/page.tsx` (list with drag-to-reorder)
- [x] Create `app/cms/categories/new/page.tsx` (create form)
- [x] Create `app/cms/categories/[id]/page.tsx` (edit form)
  - Follow pattern from `app/cms/services/` pages

### 6. Add to Sidebar Nav
- [x] Modify `app/cms/components/AdminSidebar.tsx`
  - Add `{ name: 'Categories', href: '/cms/categories', icon: TagIcon }` to Collections
  - Add `TagIcon` SVG function

### 7. Update Video Forms with Category Dropdown
- [x] Modify `app/api/cms/videos/route.ts` — add `category_id` to POST
- [x] Modify `app/api/cms/videos/[id]/route.ts` — add `category_id` to PUT
- [x] Modify `app/cms/videos-list/new/page.tsx` — fetch categories, add `<select>`
- [x] Modify `app/cms/videos-list/[id]/page.tsx` — same, pre-select current

### 8. Add Data Fetch Functions
- [x] Modify `lib/cms.ts`
  - Add `getCategories()` function
  - Update `getAllVideosWithSlugs()` to include category data

### 9. Redesign Public Videos Page
- [x] Modify `app/(site)/videos/page.tsx`
- [x] Create `app/(site)/videos/VideoGrid.tsx` (client component)
  - Filter tabs: "All" + one per category
  - Thumbnail card grid (YouTube thumbnail, title, link)
  - Client-side filtering via `useState`
  - Keep hero, featured shorts, playlist, CTA unchanged

---

## Key Patterns (for reference)
- API routes: follow `app/api/cms/services/` pattern exactly
- CMS pages: follow `app/cms/services/` pattern (SortableList, forms)
- Types: follow `lib/supabase.ts` interface pattern
- Data fetching: follow `lib/cms.ts` pattern with cache()
- Sidebar: icon functions defined at bottom of AdminSidebar.tsx

## Files Touched

| File | Type |
|------|------|
| `supabase/migrations/20250205_add_video_categories.sql` | NEW |
| `lib/supabase.ts` | MODIFY |
| `app/api/cms/categories/route.ts` | NEW |
| `app/api/cms/categories/[id]/route.ts` | NEW |
| `app/api/cms/order/blocks/route.ts` | MODIFY (1 line) |
| `app/cms/categories/page.tsx` | NEW |
| `app/cms/categories/new/page.tsx` | NEW |
| `app/cms/categories/[id]/page.tsx` | NEW |
| `app/cms/components/AdminSidebar.tsx` | MODIFY |
| `app/api/cms/videos/route.ts` | MODIFY |
| `app/api/cms/videos/[id]/route.ts` | MODIFY |
| `app/cms/videos-list/new/page.tsx` | MODIFY |
| `app/cms/videos-list/[id]/page.tsx` | MODIFY |
| `lib/cms.ts` | MODIFY |
| `app/(site)/videos/page.tsx` | MODIFY |
| `app/(site)/videos/VideoGrid.tsx` | NEW |

---

## Review

### Summary of Changes
- Added a `video_categories` table with full CRUD support (API, CMS pages, drag-to-reorder)
- Added `category_id` nullable FK to `videos` table with `ON DELETE SET NULL`
- Updated video forms (new + edit) with a category dropdown
- Updated `getAllVideosWithSlugs()` to join category data from Supabase
- Added `getCategories()` cached fetch function
- Replaced flat text video links with a filterable thumbnail card grid (`VideoGrid` client component)
- Added "Categories" to CMS sidebar navigation

### New Dependencies
- None

### Environment Variables
- No new environment variables required
- Migration must be run on Supabase: `supabase/migrations/20250205_add_video_categories.sql`

### Known Limitations / Future Improvements
- Categories only appear as filter tabs when at least one category exists in the database
- Videos without a category still show under "All" but won't appear in any specific category tab
- The `VideoGrid` uses YouTube `mqdefault.jpg` thumbnails (320x180) — could upgrade to `maxresdefault.jpg` if higher resolution is needed
