# Individual Video Watch Pages

## Goal
Create dedicated watch pages for each video (`/videos/[slug]`) so Google can index them properly. Currently all 4 videos are on `/videos` and Google reports "Video isn't on a watch page".

## Plan

- [ ] 1. Add `getVideoBySlug` and `getAllVideoSlugs` functions to `lib/cms.ts`
- [ ] 2. Create `/app/(site)/videos/[slug]/page.tsx` with:
  - Video as hero/primary content
  - Proper VideoObject schema markup
  - Dynamic metadata for SEO
  - Links to other videos
- [ ] 3. Update `/app/(site)/videos/page.tsx` to link to individual pages
- [ ] 4. Update `sitemap.ts` to include individual video URLs
- [ ] 5. Test locally - verify pages render correctly
- [ ] 6. Commit changes

## Technical Notes
- Slug generated from video title (e.g., "Build This Before Hiring Salespeople" → `build-this-before-hiring-salespeople`)
- Videos come from `getVideosPageData().featuredVideos`
- Schema markup needs: name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl

---

## Review

### Summary of Changes
- Added `slugify()`, `getAllVideoSlugs()`, `getAllVideosWithSlugs()`, and `getVideoBySlug()` functions to `lib/cms.ts`
- Created new individual video watch page at `/app/(site)/videos/[slug]/page.tsx` with:
  - Video as primary/hero content
  - VideoObject schema markup for Google indexing
  - Dynamic metadata (title, description, OpenGraph)
  - "More Videos" section linking to other videos
- Updated `/app/(site)/videos/page.tsx` to link to individual pages instead of YouTube
- Updated `sitemap.ts` to include individual video URLs

### New Video URLs
- `/videos/build-this-before-hiring-salespeople`
- `/videos/my-1st-sales-hire-mistake`
- `/videos/build-the-system-before-the-team`
- `/videos/the-secret-email-step-that-gets-replies`

### Files Modified
- `lib/cms.ts` - Added video helper functions
- `app/(site)/videos/page.tsx` - Updated links
- `app/(site)/sitemap.ts` - Added video routes

### Files Created
- `app/(site)/videos/[slug]/page.tsx` - Individual video watch page

### No New Dependencies
No new packages added.

### No New Environment Variables
No new env vars needed.

### Known Limitations
- Video upload dates are hardcoded to "2025-11-23" - could be made dynamic if dates are stored in CMS
