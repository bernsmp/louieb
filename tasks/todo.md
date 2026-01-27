# CMS Enhancement Plan (Revised)

## Goal
Make Louie's life easier editing his site. Not building Wix.

---

## Phase 1 - Essential Polish ✅ COMPLETE

### 1. Device Preview Toggle ✅
See mobile/tablet layouts without resizing browser.

- [x] 1.1 Create `DevicePreviewToggle` component (desktop/tablet/mobile buttons)
- [x] 1.2 Add to preview panel header
- [x] 1.3 Control iframe width (desktop: 100%, tablet: 768px, mobile: 375px)
- [x] 1.4 Persist selection in localStorage

### 2. Section Visibility Toggle ✅
Hide sections without deleting content = safe experimentation.

- [x] 2.1 Add `visible` boolean to section content in `site_content`
- [x] 2.2 Create toggle component for section editors
- [x] 2.3 Update homepage to check visibility before rendering
- [x] 2.4 Test toggling sections on/off

### 3. Editor Confidence Indicators ✅
Peace of mind that changes are saved.

- [x] 3.1 Add "Last saved at X" timestamp in editor header
- [x] 3.2 Add Cmd+S / Ctrl+S keyboard shortcut to save
- [x] 3.3 Add "Unsaved changes" warning on navigate away

---

## Phase 2 - Media Foundation ✅ COMPLETE

### 4. Supabase Storage Setup ✅
Infrastructure for image uploads.

- [x] 4.1 Create `media` storage bucket in Supabase
- [x] 4.2 Configure bucket policies (public read, authenticated write)
- [x] 4.3 Add upload helper functions to `lib/supabase.ts`

### 5. Image Upload Component ✅
Replace painful URL pasting with drag-and-drop.

- [x] 5.1 Create `ImageUploader` component with drag-and-drop
- [x] 5.2 Add upload progress indicator
- [x] 5.3 Show image preview after upload
- [x] 5.4 Return public URL on success

### 6. Replace URL Inputs with Uploader ✅
Swap out manual URL paste fields.

- [x] 6.1 Hero section - video thumbnail
- [x] 6.2 Awards section - awards image
- [x] 6.3 Testimonials - author photos
- [x] 6.4 Add "pick from uploaded" modal for reuse

---

## Phase 3 - Editor Safety ✅ COMPLETE

### 7. In-Session Undo/Redo ✅
Recover from typos without page reload. No database needed.

- [x] 7.1 Create `useUndoRedo` hook (state stack, last 20 states)
- [x] 7.2 Add undo/redo buttons to editor header
- [x] 7.3 Implement Ctrl+Z / Ctrl+Y keyboard shortcuts
- [x] 7.4 Show disabled state when nothing to undo/redo

### 8. Per-Page SEO Fields ✅
Individual pages need their own meta tags.

- [x] 8.1 Add SEO fields (title, description, ogImage) to page content
- [x] 8.2 Update FSL, Course, Videos page editors
- [x] 8.3 Wire up page metadata in frontend

---

## Phase 4 - Delighters (Optional)

### 9. AI Content Assistant
Smart suggestions to help Louie write better content. Uses cost-efficient models:
- **Gemini 3 Flash** for vision tasks (alt text) — $0.10/$0.40 per 1M tokens
- **Claude 4.5 Haiku** for text tasks (headlines, SEO) — fast + great prose

- [ ] 9.1 Add API keys to environment (GEMINI_API_KEY, ANTHROPIC_API_KEY)
- [ ] 9.2 Create `/api/ai/suggest` endpoint with model routing
- [ ] 9.3 "Suggest alt text" button for images (Gemini Flash vision)
- [ ] 9.4 "Rewrite headline" button for text fields (Haiku)
- [ ] 9.5 "Generate SEO description" from page content (Haiku)

### 10. Preview Enhancements
Make previews more useful.

- [ ] 10.1 SEO preview card (how it looks in Google/social)
- [ ] 10.2 Side-by-side before/after comparison

---

## Explicitly NOT Building

| Feature | Reason |
|---------|--------|
| Draft/publish workflow | Single user, low stakes. Just don't click save. |
| Version history table | Git + Vercel deployment history already exists |
| Global style system | Site design is stable, code changes are fine |
| Page creation from CMS | How often does Louie add pages? Almost never. |
| Custom CSS injection | Dangerous footgun for non-developers |
| Role-based permissions | Single user |
| Image optimization pipeline | Use Vercel Image Optimization (free, automatic) |

---

## Files to Create/Modify

**Phase 1:**
- `app/cms/components/DevicePreviewToggle.tsx` (new)
- `app/cms/components/VisibilityToggle.tsx` (new)
- `app/cms/components/EditorHeader.tsx` (new) - last saved, keyboard shortcuts
- `app/(site)/page.tsx` - check section visibility

**Phase 2:**
- `lib/supabase.ts` - storage helpers
- `app/cms/components/ImageUploader.tsx` (new)
- `app/cms/components/ImagePicker.tsx` (new)
- Various editor pages - replace URL inputs

**Phase 3:**
- `app/cms/hooks/useUndoRedo.ts` (new)
- Various editor pages - add SEO fields

**Phase 4:**
- `app/api/ai/suggest/route.ts` (new)
- `.env.local` - add `GEMINI_API_KEY`

---

## Verification
- [x] Run `npm run build` after each phase
- [x] Test in browser (Playwright verified Phase 1)
- [x] No regressions (Phase 1)

---

## Review - Phase 1 Complete

### Summary of Changes

**Device Preview Toggle:**
- Created `app/cms/components/DevicePreviewToggle.tsx` — 3 device buttons with SVG icons
- Integrated in SectionEditor.tsx — manages state, controls iframe width
- Added styles to cms.css — button styling, centered iframe with shadow
- Persists selection in localStorage (`cms-preview-device`)

**Section Visibility Toggle:**
- Created `app/cms/components/VisibilityToggle.tsx` — toggle with eye icons + status badges
- Integrated in SectionEditor.tsx — visibility saved with content
- Updated `app/(site)/page.tsx` — checks `visible !== false` before rendering each section
- Added styles to cms.css — toggle styling matching dark theme

**Editor Confidence Indicators:**
- Added "Last saved at X" timestamp with relative time formatting
- Added Cmd+S / Ctrl+S keyboard shortcut to trigger save
- Added beforeunload warning for unsaved changes (dirty state tracking)
- Added visual feedback: pulsing save button, green checkmark animation on success
- Added styles to cms.css — save states, animations

### New Dependencies
None

### Environment Variables
None

---

## Review - Phase 2 Complete

### Summary of Changes

**Supabase Storage Setup:**
- Created `supabase/migrations/20240127_create_media_bucket.sql` — bucket creation
- Created `supabase/migrations/20240127_media_bucket_policies.sql` — RLS policies (public read, auth write/delete)
- Added `uploadImage()`, `deleteImage()`, `listImages()` helpers to `lib/supabase.ts`

**ImageUploader Component:**
- Created `app/cms/components/ImageUploader.tsx` — drag-and-drop with progress bar, preview, remove/change buttons
- 5MB file size limit, image type validation
- Matches CMS dark theme

**ImagePicker Modal:**
- Created `app/cms/components/ImagePicker.tsx` — browse previously uploaded images or upload new
- Grid view with folder filtering
- Reusable across all image fields

**Integration:**
- Hero editor (`app/cms/homepage/hero/page.tsx`) — added `videoThumbnail` field with ImageUploader
- SectionEditor — added `type: 'image'` field support with optional folder
- Awards (`app/cms/homepage/awards/page.tsx`) — switched from URL input to ImageUploader
- Testimonials (`app/cms/testimonials/[id]/page.tsx`, `new/page.tsx`) — added author photo upload

### New Dependencies
None

### Environment Variables
None

### Setup Required
Run the SQL migrations in Supabase to create the `media` bucket and policies:
1. Go to Supabase Dashboard → SQL Editor
2. Run `supabase/migrations/20240127_create_media_bucket.sql`
3. Run `supabase/migrations/20240127_media_bucket_policies.sql`

---

## Review - Phase 3 Complete

### Summary of Changes

**Undo/Redo System:**
- Created `app/cms/hooks/useUndoRedo.ts` — state history hook (max 20 states)
- Integrated into SectionEditor with undo/redo buttons
- Keyboard shortcuts: Ctrl+Z (undo), Ctrl+Y or Ctrl+Shift+Z (redo)
- Buttons disabled when nothing to undo/redo

**Per-Page SEO Fields:**
- Added seoTitle, seoDescription, seoImage fields to:
  - FSL page editor (`app/cms/fsl-page/page.tsx`)
  - Course page editor (`app/cms/course/page.tsx`)
  - Videos page editor (`app/cms/videos/page.tsx`)
- Created `PageSEO` interface and fetch helpers in `lib/cms.ts`
- Updated frontend pages to use `generateMetadata()` with CMS values
- Fallbacks to defaults if SEO fields empty

### New Dependencies
None

### Environment Variables
None
