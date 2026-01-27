# Louie's CMS User Guide

Hey Louie! Your site now has a bunch of new editing features. Here's what's new and how to use it.

---

## Quick Start Checklist

Before testing, make sure:
- [ ] You're logged into the CMS at `/cms`
- [ ] The site is running (`npm run dev`)
- [ ] Supabase storage bucket is set up (Max did this)

---

## New Features

### 1. Device Preview Toggle

**Where:** Any section editor (Hero, About, Awards, etc.)

**What it does:** See how your content looks on different screen sizes without resizing your browser.

**How to use:**
1. Go to any section editor
2. Look at the preview panel on the right
3. Click the device icons: 🖥️ Desktop | 📱 Tablet | 📱 Mobile
4. Preview resizes to show that device view

---

### 2. Section Visibility Toggle

**Where:** Any section editor

**What it does:** Hide sections from your site without deleting the content. Great for testing or seasonal content.

**How to use:**
1. Go to any section editor
2. Find the "Visibility" toggle at the top
3. Toggle OFF to hide the section from the live site
4. Toggle ON to show it again
5. Your content stays saved either way

---

### 3. Save Indicators & Shortcuts

**Where:** All editors

**What's new:**
- **"Last saved at X"** — Shows when you last saved
- **Cmd+S / Ctrl+S** — Keyboard shortcut to save
- **Unsaved changes warning** — Browser warns you if you try to leave with unsaved work
- **Green checkmark** — Appears when save succeeds

---

### 4. Image Uploads (Drag & Drop)

**Where:** Hero (video thumbnail), Awards, Testimonials

**What it does:** Upload images directly instead of pasting URLs.

**How to use:**
1. Go to an editor with an image field (e.g., Awards)
2. Drag an image onto the upload zone, OR click to browse
3. Watch the progress bar as it uploads
4. Image preview appears when done
5. Click "Change" to replace, or "Remove" to delete

**Test it:**
- [ ] Go to `/cms/homepage/awards`
- [ ] Drag an image onto the Awards Image field
- [ ] Verify it uploads and shows preview
- [ ] Save and check the live site

---

### 5. Undo/Redo

**Where:** Any section editor using SectionEditor component

**What it does:** Undo your last 20 changes without refreshing.

**How to use:**
- **Undo:** Click ← button or press `Ctrl+Z` (Cmd+Z on Mac)
- **Redo:** Click → button or press `Ctrl+Y` or `Ctrl+Shift+Z`

**Note:** This is in-session only. If you refresh, history resets.

**Test it:**
- [ ] Go to any section editor
- [ ] Make a few text changes
- [ ] Press Ctrl+Z — should undo
- [ ] Press Ctrl+Y — should redo

---

### 6. SEO Fields

**Where:** FSL Page, Course Page, Videos Page editors

**What it does:** Set custom titles, descriptions, and social images for each page.

**Fields:**
- **SEO: Page Title** — Shows in browser tab and Google results
- **SEO: Meta Description** — The snippet in Google results (aim for 150-160 chars)
- **SEO: Social Share Image** — Image shown when page is shared on social media

**Test it:**
- [ ] Go to `/cms/fsl-page`
- [ ] Scroll to SEO fields
- [ ] Fill in a custom title and description
- [ ] Save
- [ ] Check the live page's `<title>` tag (View Source or browser tab)

---

### 7. AI Content Assistant ✨

**Where:** Various editors (see below)

**What it does:** AI helps you write better content using smart suggestions.

#### A) Suggest Alt Text (Images)
**Where:** ImageUploader fields (when enabled)

1. Upload an image
2. Click the ✨ sparkle button
3. AI analyzes the image and suggests alt text
4. Edit if needed, or use as-is

#### B) Rewrite Headlines
**Where:** Value Proposition (headline, subheadline), About (headline)

1. Write your headline
2. Click "✨ AI Rewrite" button (purple)
3. AI suggests a punchier version
4. Click "Use this" to replace, or ✕ to dismiss

**Test it:**
- [ ] Go to `/cms/homepage/value-proposition`
- [ ] Type something in the Headline field
- [ ] Click "✨ AI Rewrite"
- [ ] See the suggestion, try "Use this"

#### C) Generate SEO Description
**Where:** FSL, Course, Videos page SEO fields

1. Fill in your page title/headline
2. Click "AI Generate" button (green) on the SEO Description field
3. AI creates a 150-160 char meta description
4. Edit if needed

**Test it:**
- [ ] Go to `/cms/fsl-page`
- [ ] Fill in the SEO Title
- [ ] Click "AI Generate" on SEO Description
- [ ] See the generated description

---

## Testing Checklist

### Basic Flow
- [ ] Log into CMS
- [ ] Edit a section (e.g., Hero)
- [ ] Make changes, see preview update
- [ ] Save with Cmd+S
- [ ] See "Last saved" timestamp update
- [ ] Check live site reflects changes

### Image Uploads
- [ ] Upload image to Awards section
- [ ] Upload author photo to a Testimonial
- [ ] Upload video thumbnail to Hero
- [ ] Try drag-and-drop AND click-to-browse

### Undo/Redo
- [ ] Make 3-4 edits
- [ ] Undo all of them
- [ ] Redo one
- [ ] Verify text changes correctly

### AI Features
- [ ] Generate alt text for an uploaded image
- [ ] Rewrite a headline in Value Proposition
- [ ] Generate SEO description for FSL page

### Visibility Toggle
- [ ] Hide a section (e.g., Awards)
- [ ] Check live homepage — section should be gone
- [ ] Unhide it — should reappear

### Device Preview
- [ ] Switch between Desktop/Tablet/Mobile
- [ ] Verify preview width changes

---

## Tips

1. **Save often** — Use Cmd+S, it's quick
2. **AI suggestions are starting points** — Always review and edit
3. **Alt text matters** — Good for SEO and accessibility
4. **SEO descriptions** — Keep them 150-160 characters, make them compelling
5. **Image sizes** — Keep images under 5MB, the uploader will reject larger files

---

## If Something Breaks

1. **Refresh the page** — Fixes most display issues
2. **Check browser console** — Press F12, look for red errors
3. **Clear browser cache** — Sometimes old CSS/JS causes issues
4. **Contact Max** — If it's really broken

---

## Quick Reference

| Feature | Shortcut |
|---------|----------|
| Save | Cmd+S / Ctrl+S |
| Undo | Cmd+Z / Ctrl+Z |
| Redo | Cmd+Shift+Z / Ctrl+Y |

| Button | What it does |
|--------|--------------|
| ✨ AI Rewrite (purple) | Rewrites headlines |
| AI Generate (green) | Generates SEO descriptions |
| ✨ on images | Suggests alt text |

---

That's it! Go make your site awesome. 🚀
