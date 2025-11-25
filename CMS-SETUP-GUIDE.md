# CMS Setup Guide

## Overview

This site uses **Payload CMS** with a MongoDB database. Content can be edited via the admin panel at `/admin`.

## Important: Default Content

**All visible content on the site should be editable in the CMS.**

There are two places content can come from:
1. **CMS Database** - Editable via admin panel (preferred)
2. **Code Defaults** (`lib/payload.ts`) - Fallback when CMS is empty

### The Problem
If you see content on the site but can't edit it in the admin, it's coming from code defaults, not the database.

### The Solution
Run the seed script or manually add defaults to the CMS.

---

## Initial Setup (New Deployment)

### 1. Environment Variables

Add these to Vercel (or `.env.local` for local dev):

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/louiebernstein
PAYLOAD_SECRET=your-secure-random-string
```

### 2. Create Admin User

1. Go to `yourdomain.com/admin`
2. Create the first admin user
3. Save credentials securely

### 3. Seed Default Content

After deployment, seed the CMS with default content so everything is editable:

**Option A: Manual (Current)**
1. Log into `/admin`
2. Go to Settings → Site Settings
3. Add items to empty arrays (Benefits, Services, FAQ, etc.)

**Option B: Seed Script (Recommended)**
```bash
npx ts-node scripts/seed-defaults.ts
```

---

## Content That Needs Seeding

If these are empty in the CMS, add them manually:

### Newsletter Page → Benefit Cards
| Title | Description | Icon |
|-------|-------------|------|
| Weekly Insights | Actionable strategies and tactics you can implement immediately | /icons/analytics-11962812.svg |
| Real-World Examples | Case studies and lessons from actual client engagements | /icons/business-goal-11962851.svg |
| Growth Tips | Proven techniques to scale your business and improve team performance | /icons/growth-6621994.svg |

### Services → Service Items
6 default services (Sales Team Organization, Process Optimization, Training, Playbook, Pipeline, CRM)

### Process → Steps
4 default steps (Consultation, Planning, Implementation, Optimization)

### FAQ → Items
7 default FAQ questions and answers

### Videos Page → Featured Videos
4 default YouTube video IDs

### Course Page → Modules
4 default course modules

---

## Adding New Editable Content

When adding new content to the site:

1. **Add to Payload schema** (`payload/globals/SiteSettings.ts`)
2. **Add default value** (`lib/payload.ts` in `defaultSettings`)
3. **Update seed script** (`scripts/seed-defaults.ts`)
4. **Use in component** (fetch via `getSiteSettings()`)

This ensures:
- Site works immediately with sensible defaults
- Content is editable via CMS once seeded
- New deployments have all content available

---

## Troubleshooting

### Content shows on site but not in CMS
- The content is from code defaults
- Add it to the CMS database manually or via seed script

### Changes in CMS not appearing on site
- Wait 60 seconds (ISR cache)
- Hard refresh: Cmd+Shift+R
- Check if MongoDB is connected (env vars)

### Can't log into admin
- Verify MONGODB_URI is set correctly
- Check Vercel function logs for errors

---

## File Structure

```
website/
├── payload.config.ts         # Main Payload config
├── payload/
│   ├── collections/          # Content types
│   └── globals/
│       └── SiteSettings.ts   # Site-wide settings schema
├── lib/
│   └── payload.ts            # API helpers + DEFAULT VALUES
├── scripts/
│   └── seed-defaults.ts      # Database seeding script
└── CMS-SETUP-GUIDE.md        # This file
```

---

## Quick Reference

| Task | Location |
|------|----------|
| Edit content | `/admin` |
| Add new field | `payload/globals/SiteSettings.ts` |
| Set default value | `lib/payload.ts` |
| Seed database | `scripts/seed-defaults.ts` |
| Check API data | `/api/globals/site-settings` |

