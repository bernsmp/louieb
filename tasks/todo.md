# Blog Page Implementation

## Goal
Create a "Blog" page mirroring the Videos page structure, where Louie can showcase LinkedIn posts as blog articles.

---

## Tasks

### 1. CMS Data Structure
- [x] Add `BlogPost` interface to `lib/cms.ts`
  - `title: string`
  - `excerpt: string` (short preview text)
  - `content: string` (full post content, markdown supported)
  - `linkedInUrl: string` (link to original LinkedIn post)
  - `publishedDate: string`
  - `image?: string` (thumbnail/featured image URL)
  - `imageAlt?: string` (alt text for accessibility)
  - `author?: string` (defaults to "Louie Bernstein")
  - `tags?: string[]` (optional categorization)
- [x] Add `blogPage` settings object to `SiteSettings` interface
- [x] Add default values for `blogPage` in defaults object
- [x] Add CMS helper functions:
  - `getBlogPageData()`
  - `getAllBlogPostsWithSlugs()`
  - `getBlogPostBySlug(slug)`
  - `getFeaturedBlogPosts()` (max 4)

### 2. Blog Listing Page
- [x] Create `/app/(site)/blog/page.tsx`
  - Header section (headline + subheadline)
  - Featured posts grid (4 cards, similar to video shorts)
    - Card shows: image thumbnail, title, excerpt, date, "Read More →" link
  - All posts links section (shows when >4 posts)
  - "Follow on LinkedIn" CTA button
  - SEO metadata + structured data (BlogPosting schema)

### 3. Individual Blog Post Page
- [x] Create `/app/(site)/blog/[slug]/page.tsx`
  - Back link to `/blog`
  - Post title (h1)
  - Published date + author
  - Tags display
  - Full content (paragraph rendering)
  - "Read on LinkedIn" button (links to original)
  - "More Posts" section at bottom
  - SEO metadata + BlogPosting schema

### 4. Navigation
- [x] Add "Blog" to "Learn" dropdown in `components/FloatingNavWrapper.tsx`
  - Position after "Articles"
  - Icon: `PenLine` from lucide-react

### 5. Sample Content
- [x] Add first blog post:
  - **Title:** "Why Buyers Really Say No (It's Not What You Think)"
  - **Content:** The "risk to their chair" LinkedIn post about job security being the #1 buyer concern
  - **Image:** Not yet added (uses placeholder gradient)

---

## File Changes Summary

| File | Action |
|------|--------|
| `lib/cms.ts` | Added BlogPost type, blogPage settings, helper functions |
| `app/(site)/blog/page.tsx` | Created (new file) |
| `app/(site)/blog/[slug]/page.tsx` | Created (new file) |
| `components/FloatingNavWrapper.tsx` | Added Blog nav item with PenLine icon |

---

## Review Section

- **Summary of changes made:**
  - Added complete blog functionality mirroring the videos page structure
  - Blog posts support: title, excerpt, content, LinkedIn URL, date, image, tags
  - Featured posts grid (max 4) with fallback placeholder for posts without images
  - Individual post pages with full content, tags, and "More Posts" section
  - Added "Blog" to Learn dropdown menu in navigation

- **New dependencies added:**
  - None (using existing lucide-react icons)

- **Environment variables needed:**
  - None

- **Known limitations / future improvements:**
  - Posts are currently stored in CMS defaults (hardcoded) - could add Supabase table for dynamic management
  - No image uploaded yet for first post (using gradient placeholder)
  - Could add pagination if post count grows significantly
  - Could add search/filter by tags
