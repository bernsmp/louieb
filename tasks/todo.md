# CMS Editability & Admin UX Overhaul

## Overview
Two-part project to ensure all site content is CMS-editable and reorganize the admin panel for better UX.

---

## Part 1: Make Everything CMS-Editable ✅ COMPLETE
All content is now CMS-editable (see tasks/cms-editability-plan-2025-12-02.md for details).

---

## Part 2: Admin UX Overhaul

### Current State (Problematic)
6 separate tabs that make it hard to find content:
1. Homepage
2. Services & Process
3. FAQ
4. Other Pages
5. Brand & Contact
6. SEO

### New Structure (Goal)
Single page with collapsible sections organized by **what page/section they affect**:

```
📄 HOMEPAGE CONTENT (collapsed by default)
├── Hero Section
├── Credentials Badge
├── About Section
├── Value Proposition
├── Awards Section
├── Testimonials Header
├── Fractional Sales Leader Section
└── Contact Section

📄 SERVICES & PROCESS (collapsed by default)
├── Services Section
└── Process Section

📄 FAQ (collapsed by default)
└── FAQ Items

📄 VIDEOS PAGE /videos
├── Page Header
├── Featured Videos
└── Section Labels

📄 NEWSLETTER PAGE /newsletter
├── Page Header & Benefits
├── Featured Content
└── Final CTA

📄 COURSE PAGE /course
├── Header & Tagline
├── Modules
├── Preview Videos
├── Results
└── Case Study

📄 TOOLS PAGES /tools
├── Tools Landing Page
└── ROI Calculator

📄 BRAND & SOCIAL
├── Social Links
├── Contact Info
├── Newsletter Settings
└── Course Settings

📄 FOOTER

📄 SEO
```

---

### Implementation Tasks

- [ ] 1. Backup current SiteSettings.ts before changes
- [ ] 2. Convert tabs to top-level collapsible sections
- [ ] 3. Test in admin panel - verify all fields appear correctly
- [ ] 4. Verify frontend still works (field paths unchanged)
- [ ] 5. Commit changes

### Key Principle
**Field paths stay the same** (e.g., `hero.headline`, `services.items`) - we're only changing the admin UI organization, not the data structure. The frontend code won't need any changes.

---

## Review
_To be completed after implementation_
