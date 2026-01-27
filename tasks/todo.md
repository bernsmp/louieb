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

## Phase 2 - Media Foundation (2-3 days)

### 4. Supabase Storage Setup
Infrastructure for image uploads.

- [ ] 4.1 Create `media` storage bucket in Supabase
- [ ] 4.2 Configure bucket policies (public read, authenticated write)
- [ ] 4.3 Add upload helper functions to `lib/supabase.ts`

### 5. Image Upload Component
Replace painful URL pasting with drag-and-drop.

- [ ] 5.1 Create `ImageUploader` component with drag-and-drop
- [ ] 5.2 Add upload progress indicator
- [ ] 5.3 Show image preview after upload
- [ ] 5.4 Return public URL on success

### 6. Replace URL Inputs with Uploader
Swap out manual URL paste fields.

- [ ] 6.1 Hero section - video thumbnail
- [ ] 6.2 Awards section - awards image
- [ ] 6.3 Testimonials - author photos
- [ ] 6.4 Add "pick from uploaded" modal for reuse

---

## Phase 3 - Editor Safety (1 day)

### 7. In-Session Undo/Redo
Recover from typos without page reload. No database needed.

- [ ] 7.1 Create `useUndoRedo` hook (state stack, last 20 states)
- [ ] 7.2 Add undo/redo buttons to editor header
- [ ] 7.3 Implement Ctrl+Z / Ctrl+Y keyboard shortcuts
- [ ] 7.4 Show disabled state when nothing to undo/redo

### 8. Per-Page SEO Fields
Individual pages need their own meta tags.

- [ ] 8.1 Add SEO fields (title, description, ogImage) to page content
- [ ] 8.2 Update FSL, Course, Videos page editors
- [ ] 8.3 Wire up page metadata in frontend

---

## Phase 4 - Delighters (Optional)

### 9. AI Content Assistant (Gemini 2.5)
Smart suggestions to help Louie write better content.

- [ ] 9.1 Add Gemini API key to environment
- [ ] 9.2 Create `/api/ai/suggest` endpoint
- [ ] 9.3 "Suggest alt text" button for images
- [ ] 9.4 "Rewrite headline" button for text fields
- [ ] 9.5 "Generate SEO description" from page content

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
