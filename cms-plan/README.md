# Louie Custom CMS

A simple, custom CMS for Louie's website built with Supabase and Next.js.

## Quick Start

### 1. Set Up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `schema.sql`
3. Run `seed-data.sql` to populate initial content
4. Go to **Settings** → **API** and copy your keys

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
USE_SUPABASE_CMS=true
```

### 3. Create Admin User

1. Go to **Authentication** → **Users** in Supabase
2. Click **Add user** → **Create new user**
3. Enter Louie's email and a password
4. Disable public signups if desired

### 4. Run the App

```bash
npm run dev
```

Visit `http://localhost:3000/admin` to access the CMS.

## File Structure

```
cms-plan/
├── PLAN.md              # Full implementation plan
├── README.md            # This file
├── schema.sql           # Database schema
├── seed-data.sql        # Initial content
└── SUPABASE-SETUP.md    # Detailed setup guide

app/
├── admin/               # Admin UI pages
│   ├── layout.tsx       # Admin shell with sidebar
│   ├── page.tsx         # Dashboard
│   ├── login/           # Login page
│   ├── homepage/        # Homepage section editors
│   ├── testimonials/    # Testimonials CRUD
│   ├── faq/            # FAQ items CRUD
│   ├── videos-list/    # Videos CRUD
│   ├── services/       # Services CRUD
│   ├── process/        # Process steps CRUD
│   ├── fsl-page/       # FSL page editor
│   ├── videos/         # Videos page editor
│   ├── newsletter/     # Newsletter page editor
│   ├── course/         # Course page editor
│   ├── tools/          # Tools pages editor
│   ├── settings/       # Site settings editors
│   └── seo/            # SEO settings editor
│
├── api/
│   ├── auth/           # Login/logout endpoints
│   └── cms/            # CMS API routes
│       ├── section/    # JSON section CRUD
│       ├── testimonials/
│       ├── faq/
│       ├── videos/
│       ├── services/
│       └── process-steps/

lib/
├── supabase.ts         # Supabase client
├── auth.ts             # Auth utilities
└── cms.ts              # CMS data fetching (replaces payload.ts)
```

## How It Works

### Content Storage

- **Section content** (hero, about, etc.) is stored as JSON in the `site_content` table
- **Collection content** (testimonials, FAQs, videos, etc.) is stored in dedicated tables
- All content merges with defaults from `lib/cms.ts` - if a field isn't set in the database, the default value is used

### Feature Flag

Set `USE_SUPABASE_CMS=false` to disable Supabase and use hardcoded defaults only. This is useful for:
- Local development without Supabase
- Testing before migration
- Emergency fallback

### Authentication

- Uses Supabase email/password authentication
- All admin routes are protected
- All write API endpoints require authentication

## Migration from Payload

1. Set up Supabase (see above)
2. Run the seed scripts to populate defaults
3. Set `USE_SUPABASE_CMS=true` in your environment
4. Test all pages render correctly
5. Remove Payload dependencies when ready

## API Reference

### Section Content

```
GET  /api/cms/section/[section]     # Get section content
PUT  /api/cms/section/[section]     # Update section content
```

### Testimonials

```
GET    /api/cms/testimonials        # List all
POST   /api/cms/testimonials        # Create
GET    /api/cms/testimonials/[id]   # Get one
PUT    /api/cms/testimonials/[id]   # Update
DELETE /api/cms/testimonials/[id]   # Delete
```

### FAQ Items

```
GET    /api/cms/faq?page=homepage   # List (filterable by page)
POST   /api/cms/faq                 # Create
GET    /api/cms/faq/[id]            # Get one
PUT    /api/cms/faq/[id]            # Update
DELETE /api/cms/faq/[id]            # Delete
```

### Videos

```
GET    /api/cms/videos?page=featured # List (filterable by page)
POST   /api/cms/videos               # Create
GET    /api/cms/videos/[id]          # Get one
PUT    /api/cms/videos/[id]          # Update
DELETE /api/cms/videos/[id]          # Delete
```

### Services

```
GET    /api/cms/services        # List all
POST   /api/cms/services        # Create
PUT    /api/cms/services/[id]   # Update
DELETE /api/cms/services/[id]   # Delete
```

### Process Steps

```
GET    /api/cms/process-steps        # List all
POST   /api/cms/process-steps        # Create
PUT    /api/cms/process-steps/[id]   # Update
DELETE /api/cms/process-steps/[id]   # Delete
```
