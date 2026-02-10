# Add Category Filtering to Blog Page (Frontend)

## Goal
Show category filter tabs on the public blog page, matching the same pattern used on the videos page (`VideoGrid` component). Categories already exist in the DB and CMS — this is frontend display only.

---

## Tasks

### 1. Update `BlogPost` interface to include category fields
- [ ] Add `categoryId?`, `categoryName?`, `categorySlug?` to `BlogPost` in `lib/cms.ts`

### 2. Update `fetchBlogPostsFromSupabase()` to join category data
- [ ] Join `video_categories` table on `category_id` to get name/slug
- [ ] Map `categoryId`, `categoryName`, `categorySlug` into returned objects

### 3. Update `getFeaturedBlogPosts()` to include category data
- [ ] Same join pattern for featured posts

### 4. Create `BlogGrid` client component
- [ ] Mirror `VideoGrid` pattern — filter tabs, "All" default, show more/less
- [ ] Place at `app/(site)/blog/BlogGrid.tsx`

### 5. Update blog page to use `BlogGrid` with categories
- [ ] Fetch categories via `getCategories()` in the server page
- [ ] Replace the current all-posts section with `BlogGrid`
- [ ] Keep featured posts section as-is, add category filter to the grid below

### 6. Test
- [ ] Verify filter tabs appear on blog page
- [ ] Verify clicking a category filters posts correctly
- [ ] Verify "All" shows all posts

---

## Files Touched

| File | Change |
|------|--------|
| `lib/cms.ts` | Add category fields to BlogPost, update fetch functions |
| `app/(site)/blog/BlogGrid.tsx` | NEW — client component with category filter tabs |
| `app/(site)/blog/page.tsx` | Fetch categories, use BlogGrid component |
