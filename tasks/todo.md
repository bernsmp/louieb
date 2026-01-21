# Task: Featured Shorts Selection Control

## Goal
Allow Louie to control which 4 videos appear as "Featured Shorts" on the /videos page while all videos still get individual pages and appear in the video links section.

## Current Behavior
- All videos with `page: 'featured'` appear in the Featured Shorts grid (no limit)
- Same videos appear in Video Links section
- No way to distinguish between "shown in grid" vs "just has a page"

## Desired Behavior
- Only 4 videos appear in Featured Shorts grid
- CMS toggle to mark which videos are "Featured Shorts"
- All videos with `page: 'featured'` get individual pages
- All videos appear in Video Links section
- Display order controls the order of Featured Shorts

## Tasks

- [ ] Add `is_featured_short` column to Supabase videos table
- [ ] Update CMS video edit form with "Featured Short" checkbox
- [ ] Update API routes to handle `is_featured_short` field
- [ ] Update `fetchVideosFromSupabase` to include the new field
- [ ] Create separate fetch functions for featured shorts vs all videos
- [ ] Update videos page to use featured shorts for grid, all videos for links
- [ ] Test the changes locally
- [ ] Verify existing videos still work

## Files to Modify
- Supabase database (add column)
- `/app/cms/videos-list/[id]/page.tsx` - Add checkbox
- `/app/api/cms/videos/route.ts` - Handle new field in POST
- `/app/api/cms/videos/[id]/route.ts` - Handle new field in PUT
- `/lib/cms.ts` - Add function to get featured shorts
- `/app/(site)/videos/page.tsx` - Use separate data sources

---

## Review

### Summary of Changes

Added ability to control which videos appear as "Featured Shorts" in the grid on the /videos page:

1. **Supabase** - Added `is_featured_short` boolean column to videos table
2. **CMS Edit Form** - Added "Featured Short" checkbox with helper text
3. **API Routes** - Updated POST and PUT to handle `is_featured_short` field
4. **lib/cms.ts** - Added `fetchFeaturedShortsFromSupabase()` and `getFeaturedShortsWithSlugs()` functions
5. **Videos Page** - Grid uses featured shorts (max 4), links section uses all videos

### Files Modified
- `/app/cms/videos-list/[id]/page.tsx` - Added checkbox to form
- `/app/api/cms/videos/route.ts` - Handle field in POST
- `/app/api/cms/videos/[id]/route.ts` - Handle field in PUT
- `/lib/cms.ts` - New fetch functions for featured shorts
- `/app/(site)/videos/page.tsx` - Separate data sources for grid vs links

### How It Works Now
- **Featured Shorts Grid**: Shows only videos with `is_featured_short: true` (max 4)
- **Video Links Section**: Shows ALL videos with `page: 'featured'`
- **Individual Pages**: All featured videos get their own `/videos/[slug]` page

### Workflow for Louie
1. Add new video in CMS → gets individual page + appears in Video Links
2. Check "Featured Short" → also appears in the grid (limit 4, ordered by display_order)
3. Uncheck to remove from grid while keeping the individual page

### No New Dependencies
No new packages added.

### No New Environment Variables
No changes needed.
