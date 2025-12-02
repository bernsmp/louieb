# CMS Editability Plan - 2025-12-02

## Goal
Make every visible piece of content on the site editable through the CMS so the client doesn't need to call for every text change.

---

## Part 1: Complete Content Audit

### HOMEPAGE (/) - Current Status

| Section | Component | CMS Status |
|---------|-----------|------------|
| Hero | Hero.tsx | ✅ Connected |
| About | About.tsx | ✅ Connected |
| Services | Services.tsx | ✅ Connected |
| Value Proposition | ValueProposition.tsx | ✅ Connected |
| Testimonials | Testimonials.tsx | ✅ Connected |
| **Fractional Sales Leader** | FractionalSalesLeader.tsx | ❌ HARDCODED |
| Process | Process.tsx | ✅ Connected |
| FAQ | FAQ.tsx | ✅ Connected |
| Contact | Contact.tsx | ⚠️ Partial |
| Awards | Awards.tsx | ✅ Connected |

### OTHER PAGES

| Page | Status | Missing Fields |
|------|--------|----------------|
| /course | ✅ Connected | None |
| /newsletter | ⚠️ Partial | 3 hardcoded labels |
| /videos | ⚠️ Partial | 4 hardcoded labels |
| /tools | ❌ HARDCODED | All content |
| /tools/roi-calculator | ❌ HARDCODED | Headline, subheadline |

### FOOTER
- ⚠️ Partial - section labels hardcoded

---

## Part 1: Implementation Tasks

### Priority 1: FractionalSalesLeader Section
**Files to modify:**
- `payload/globals/SiteSettings.ts` - Add fractionalSalesLeader group
- `components/sections/FractionalSalesLeader.tsx` - Accept props
- `app/(site)/page.tsx` - Pass CMS data
- `lib/payload.ts` - Add types and defaults

**Fields to add:**
```
fractionalSalesLeader:
  - headline: "Fractional Sales Leader for the"
  - headlineAccent: "Founder Trapped in Sales"
  - hook: "You built this. From nothing. Now you're stuck."
  - paragraph1: (the $1M-$10M trap text)
  - paragraph2: "I do."
  - paragraph3: (FSL explanation)
  - paragraph4: (forget corporate jargon)
  - calloutText: "Stop letting sales management..."
  - ctaText: "Let's Talk"
  - ctaUrl: calendly link
```

### Priority 2: Contact Section Labels
**Files to modify:**
- `payload/globals/SiteSettings.ts` - Add to contact group
- `components/sections/Contact.tsx` - Accept new props
- `app/(site)/page.tsx` - Pass new props
- `lib/payload.ts` - Add types/defaults

**Fields to add:**
```
contactSection:
  - headline: "Let's Talk"
  - description: "Ready to transform your sales team? Get in touch today."
  - emailLabel: "Email"
  - phoneLabel: "Phone"
  - ctaButtonText: "Schedule a 30-Minute Call"
```

### Priority 3: Tools Page
**Files to modify:**
- `payload/globals/SiteSettings.ts` - Add toolsPage group
- `app/(site)/tools/page.tsx` - Fetch from CMS
- `lib/payload.ts` - Add types/defaults

**Fields to add:**
```
toolsPage:
  - headline: "Tools"
  - description: "Free tools to help you make smarter sales decisions"
  - tools: array of { name, description, href, icon }
```

### Priority 4: ROI Calculator Page
**Files to modify:**
- `payload/globals/SiteSettings.ts` - Add to toolsPage or new group
- `app/(site)/tools/roi-calculator/page.tsx` - Fetch from CMS
- `lib/payload.ts` - Add types/defaults

**Fields to add:**
```
roiCalculatorPage:
  - headline: "Fractional Sales ROI Calculator"
  - subheadline: "You be the judge if a Fractional Sales Leader makes financial sense"
```

### Priority 5: Newsletter Page Labels
**Files to modify:**
- `payload/globals/SiteSettings.ts` - Add to newsletterPage group
- `app/(site)/newsletter/page.tsx` - Use new fields
- `lib/payload.ts` - Add defaults

**Fields to add:**
```
newsletterPage (additional):
  - featuredContentHeadline: "Featured Newsletter Content"
  - featuredContentDescription: "Watch exclusive videos..."
  - finalCtaButtonText: "Subscribe Now"
```

### Priority 6: Videos Page Labels
**Files to modify:**
- `payload/globals/SiteSettings.ts` - Add to videosPage group
- `app/(site)/videos/page.tsx` - Use new fields
- `lib/payload.ts` - Add defaults

**Fields to add:**
```
videosPage (additional):
  - featuredShortsHeadline: "Featured Shorts"
  - playlistHeadline: "Complete Sales Leadership Playlist"
  - watchOnYoutubeText: "Watch on YouTube →"
  - watchMoreButtonText: "Watch More Videos on YouTube"
```

### Priority 7: Footer Labels
**Files to modify:**
- `payload/globals/SiteSettings.ts` - Add to footer group
- `components/Footer.tsx` - Accept new props
- `lib/payload.ts` - Add defaults

**Fields to add:**
```
footer (additional):
  - quickLinksLabel: "Quick Links"
  - getInTouchLabel: "Get In Touch"
```

---

## Part 2: Admin UX Overhaul (After Part 1)

### Current Problem
- 6 separate tabs in CMS admin
- Hard to find content
- Not intuitive

### Goal
- Single page with collapsible sections
- Logically grouped content
- Easy to scan and find anything

---

## Execution Order
1. FractionalSalesLeader (biggest gap, most content)
2. Contact labels
3. Tools page
4. ROI Calculator page
5. Newsletter labels
6. Videos labels
7. Footer labels
8. Test all changes
9. Commit and push
10. Part 2: Admin UX overhaul
