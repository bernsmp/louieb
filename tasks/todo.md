# Task: Fix YouTube Shorts URL Support in CMS

## Problem
When pasting YouTube Shorts URLs like `https://youtube.com/shorts/L04eim_5gDU`, the CMS stores the full URL instead of extracting the video ID. This breaks:
- Thumbnail display (uses `img.youtube.com/vi/{ID}/...`)
- Video embed (uses `youtube-nocookie.com/embed/{ID}`)

## Solution
Add automatic URL parsing to extract video IDs from any YouTube URL format:
- `https://youtube.com/shorts/VIDEO_ID`
- `https://youtube.com/shorts/VIDEO_ID?feature=share`
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- Or just the raw ID

## Tasks

- [ ] Create `extractYouTubeId()` helper function
- [ ] Update New Video form to auto-extract ID from URLs
- [ ] Update Edit Video form to auto-extract ID from URLs
- [ ] Add thumbnail preview so user sees it worked
- [ ] Update label/hint text to clarify "paste URL or ID"
- [ ] Test with Shorts URL
- [ ] Test with regular YouTube URL
- [ ] Test with just an ID

## Files to Modify
- `/app/cms/videos-list/new/page.tsx`
- `/app/cms/videos-list/[id]/page.tsx`

---

## Review

### Summary of Changes
Added automatic YouTube URL parsing to the CMS video forms so Louie can paste any YouTube URL (including Shorts) and the video ID will be extracted automatically.

**What was added:**
1. `extractYouTubeId()` helper function that handles:
   - YouTube Shorts URLs (`youtube.com/shorts/ID`)
   - Regular watch URLs (`youtube.com/watch?v=ID`)
   - Short URLs (`youtu.be/ID`)
   - Embed URLs (`youtube.com/embed/ID`)
   - Raw IDs (passed through as-is)

2. Thumbnail preview - shows the video thumbnail as soon as a valid ID is detected

3. Updated labels from "YouTube Video ID" to "YouTube URL or Video ID"

### Files Modified
- `/app/cms/videos-list/new/page.tsx` - New video form
- `/app/cms/videos-list/[id]/page.tsx` - Edit video form

### No New Dependencies
No new packages added.

### No New Environment Variables
No changes needed.

### How It Works Now
1. Louie pastes any YouTube URL (Shorts, regular, short link, etc.)
2. The ID is automatically extracted and stored
3. A thumbnail preview appears to confirm it worked
4. Embeds and thumbnails now work correctly on the video pages

