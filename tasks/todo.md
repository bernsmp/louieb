# CMS Editability & Admin UX Overhaul

## Overview
Two-part project to ensure all site content is CMS-editable and reorganize the admin panel for better UX.

---

## Part 1: Make Everything CMS-Editable

### COMPLETE CONTENT AUDIT

#### HOMEPAGE (/) - Status: Mostly CMS-Connected
| Section | Component | CMS Status | Notes |
|---------|-----------|------------|-------|
| Hero | Hero.tsx | ✅ Connected | headline, tagline, description, videoId, credentials, CTAs |
| About | About.tsx | ✅ Connected | All fields from settings.about |
| Services | Services.tsx | ✅ Connected | headline, subheadline, items array |
| Value Proposition | ValueProposition.tsx | ✅ Connected | headline, subheadline, description, ctaText |
| Testimonials | Testimonials.tsx | ✅ Connected | headline, subheadline + testimonials collection |
| **Fractional Sales Leader** | FractionalSalesLeader.tsx | ❌ HARDCODED | **NEEDS CMS** |
| Process | Process.tsx | ✅ Connected | headline, subheadline, steps array |
| FAQ | FAQ.tsx | ✅ Connected | headline, subheadline, items array |
| Contact | Contact.tsx | ⚠️ Partial | email/phone/calendly from CMS, but labels hardcoded |
| Awards | Awards.tsx | ✅ Connected | headline, subheadline, imageUrl, description |

#### FRACTIONAL SALES LEADER SECTION - ❌ NEEDS CMS
- [ ] Headline: "Fractional Sales Leader for the Founder Trapped in Sales"
- [ ] Headline accent: "Founder Trapped in Sales"
- [ ] Hook: "You built this. From nothing. Now you're stuck."
- [ ] Body paragraph 1 (the $1M-$10M trap)
- [ ] Body paragraph 2 ("I do.")
- [ ] Body paragraph 3 (Fractional Sales Leader explanation)
- [ ] Body paragraph 4 (forget corporate jargon)
- [ ] Callout text: "Stop letting sales management..."
- [ ] CTA button text: "Let's Talk"
- [ ] CTA URL (calendly link)

#### CONTACT SECTION - ⚠️ NEEDS MORE FIELDS
- [ ] Section headline: "Let's Talk" (hardcoded)
- [ ] Section description: "Ready to transform your sales team?" (hardcoded)
- [ ] Email label: "Email" (hardcoded)
- [ ] Phone label: "Phone" (hardcoded)
- [ ] CTA button text: "Schedule a 30-Minute Call" (hardcoded)

#### TOOLS PAGE (/tools) - ❌ FULLY HARDCODED
- [ ] Page headline: "Tools"
- [ ] Page description: "Free tools to help you make smarter sales decisions"
- [ ] Tools array (name, description, href, icon for each tool)

#### ROI CALCULATOR PAGE (/tools/roi-calculator) - ❌ HARDCODED
- [ ] Page headline: "Fractional Sales ROI Calculator"
- [ ] Page subheadline: "You be the judge if a Fractional Sales Leader makes financial sense"

#### NEWSLETTER PAGE (/newsletter) - ⚠️ MOSTLY CONNECTED
- [ ] "Featured Newsletter Content" headline (hardcoded)
- [ ] "Watch exclusive videos..." description (hardcoded)
- [ ] "Subscribe Now" final CTA button text (hardcoded)

#### VIDEOS PAGE (/videos) - ⚠️ MOSTLY CONNECTED
- [ ] "Featured Shorts" heading (hardcoded)
- [ ] "Complete Sales Leadership Playlist" heading (hardcoded)
- [ ] "Watch on YouTube →" link text (hardcoded)
- [ ] "Watch More Videos on YouTube" button text (hardcoded)

#### COURSE PAGE (/course) - ✅ CONNECTED
- All content comes from CMS (coursePage settings)

#### FOOTER - ⚠️ PARTIAL
- [ ] "Quick Links" label (hardcoded)
- [ ] "Get In Touch" label (hardcoded)
- [ ] Navigation links (Home, Articles, Videos, Newsletter) - hardcoded list

---

### IMPLEMENTATION TASKS

#### Priority 1: FractionalSalesLeader Section (Biggest Gap)
- [ ] Add `fractionalSalesLeader` group to SiteSettings.ts
- [ ] Add fields: headline, headlineAccent, hook, paragraphs 1-4, calloutText, ctaText, ctaUrl
- [ ] Update FractionalSalesLeader.tsx to accept props
- [ ] Wire up in page.tsx to pass CMS data
- [ ] Add to lib/payload.ts defaults and types

#### Priority 2: Contact Section Labels
- [ ] Add contact section fields to SiteSettings: headline, description, emailLabel, phoneLabel, ctaButtonText
- [ ] Update Contact.tsx to accept new props
- [ ] Wire up in page.tsx

#### Priority 3: Tools Page
- [ ] Add `toolsPage` group to SiteSettings.ts
- [ ] Add fields: headline, description, tools array (name, description, href, icon)
- [ ] Update tools/page.tsx to fetch from CMS

#### Priority 4: ROI Calculator Page
- [ ] Add `roiCalculatorPage` group to SiteSettings.ts
- [ ] Add fields: headline, subheadline
- [ ] Update roi-calculator/page.tsx to fetch from CMS

#### Priority 5: Newsletter/Videos Page Labels
- [ ] Add missing label fields to existing videosPage and newsletterPage groups
- [ ] Update components to use CMS values

#### Priority 6: Footer Labels
- [ ] Add footer section labels to SiteSettings
- [ ] Update Footer.tsx component

---

## Part 2: Admin UX Overhaul
(To be done after Part 1 is complete)

### Current State (Problematic)
- 6 separate tabs
- Content scattered
- Hard to find things

### New Structure (Goal)
Single-page with collapsible sections, logically grouped

---

## Review
(To be filled after completion)
