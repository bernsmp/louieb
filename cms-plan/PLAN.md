# Louie Custom CMS & Editor Plan

## Goals

- **Replace Payload CMS** with a simpler, fully custom CMS and editor tailored to Louie's site.
- **Preserve all existing content structure** so the live site looks and behaves the same (hero, about, services, process, FAQ, testimonials, videos, newsletter, course, tools, SEO, etc.).
- **Give Louie a clean, obvious admin UI** where every editable part of the site is grouped by page/section (mirroring the current `SiteSettings` structure without Payload complexity).
- **Minimize risk** by introducing the new CMS behind feature flags and keeping existing defaults as fallback.

## High-Level Architecture

- **Database**: Supabase (PostgreSQL) with a mix of structured columns and JSONB for flexible sections.
- **Backend API**: Next.js Route Handlers under `app/api/cms/*` for CRUD operations, authenticated via Supabase auth tokens.
- **Admin UI**: New protected routes under `app/admin/*` in the existing Next.js app, using simple forms and lists (no drag-and-drop).
- **Content Fetching Layer**: Replace `lib/payload.ts` with a new `lib/cms.ts` that reads from Supabase (with fallback to current defaults), while keeping the same TypeScript interfaces.
- **Auth**: Supabase email+password (or magic link) for Louie; role-based check for `admin` access on all write endpoints.

## Data Model & Schema

- **Single JSON-backed settings record** for all global/page content that currently lives in `SiteSettings`:
- Table `site_content(section TEXT UNIQUE, content JSONB, updated_at, updated_by)`.
- Sections: `hero`, `about`, `valueProposition`, `fractionalSalesLeader`, `process`, `services`, `faqSettings`, `awards`, `testimonialsSection`, `videosPage`, `newsletterPage`, `coursePage`, `toolsPage`, `siteSettings` (social, contact, newsletter, course, footer, seo), `fslPage`.
- **Structured tables for repeatable/collection data**:
- `testimonials`: each row = testimonial; fields match `Testimonial` interface and include `featured`, `display_order`.
- `faq_items`: `question`, `answer`, `display_order`, `page` (e.g., `homepage`, `fslPage`).
- `videos`: `youtube_id`, `title`, `description`, `page` (e.g., `featured`, `course`, `fslPage`), `display_order`.
- **Indexes & constraints**:
- Unique index on `site_content.section`.
- Index on `testimonials.display_order`, `faq_items.display_order`, `videos.display_order` for ordered queries.

## Backend: API Layer

- **Read APIs** (internal/front-end only):
- `GET /api/cms/settings`: returns merged settings for all sections (reads from `site_content` + defaults in code).
- `GET /api/cms/testimonials`: returns ordered testimonials with optional `featured` filter.
- `GET /api/cms/faq`: returns FAQ items, filterable by `page`.
- `GET /api/cms/videos`: returns videos, filterable by `page`.
- **Write APIs** (admin only):
- `PUT /api/cms/section/[section]`: upsert JSON `content` for a given section name.
- `POST/PUT/DELETE /api/cms/testimonials`: CRUD for testimonials.
- `POST/PUT/DELETE /api/cms/faq` and `/api/cms/videos` similarly.
- **Auth & security**:
- Middleware that verifies Supabase session on all `api/cms` write routes.
- Additional check that user has an `admin` flag/role in Supabase.
- Rate limiting or basic abuse protection (optional, given single-admin use case).

## Frontend: Content Fetching & Integration

- **New content library**:
- Create `lib/cms.ts` modeled after `lib/payload.ts` interfaces, but sourcing from Supabase via the new APIs.
- Implement a `getSettings()` function that:
  - Fetches `site_content` JSON for all sections.
  - Deep-merges section JSON into the existing `defaultSettings` (preserving your current fallback behavior).
- **Frontend page updates**:
- Update homepage (`app/(site)/page.tsx`) to import from `lib/cms.ts` instead of `lib/payload.ts` (keeping prop shapes identical).
- Update other pages to use new helpers:
  - `/fractional-sales-leader` page → `getFSLPageData()`.
  - `/videos` → `getVideosPageData()`.
  - `/newsletter` → `getNewsletterPageData()`.
  - `/course` → `getCoursePageData()`.
  - `/tools` and `/tools/roi-calculator` → tools/ROI helpers.
- Leave current `defaultSettings` and testimonial defaults in place for safe fallback if the CMS data is missing or API fails.
- **Feature flag for cut-over**:
- Use an env flag (e.g., `USE_SUPABASE_CMS`) to switch between `lib/payload.ts` and `lib/cms.ts` while testing.

## Admin UI: Structure & UX

- **Route structure**:
- `app/admin/layout.tsx` – shared admin shell (sidebar, header, logout button).
- `app/admin/page.tsx` – dashboard overview (lists main sections and quick links).
- `app/admin/homepage/*` – hero, about, services, process, value prop, awards, FAQ header, testimonials header, contact section.
- `app/admin/testimonials/*` – list, create, edit.
- `app/admin/faq/*` – list, create, edit.
- `app/admin/videos/*` – featured videos and videos page config.
- `app/admin/newsletter/*` – newsletter page copy + featured content.
- `app/admin/course/*` – course page header, modules, preview videos, results, case study.
- `app/admin/tools/*` – tools page and ROI calculator header.
- `app/admin/settings/*` – social links, contact info, newsletter settings, course settings, footer, SEO.
- **Shared form components**:
- `AdminForm` wrapper with consistent styling and Save/Cancel buttons.
- Text, textarea, select, checkbox inputs wired to JSON structures (with simple Zod or TypeScript validation on submit).
- `ArrayEditor` component for ordered lists (services, process steps, FAQs, testimonials, videos, modules, results) with add/remove/reorder.
- **UX conventions**:
- Each page scoped to a single logical section with a clear description ("This controls the hero section on the homepage").
- Explicit character count hints where relevant (e.g., SEO description).
- Confirmation toasts on successful save; inline error messages on validation/API failure.
- Optional: simple "This is how it appears on the site" preview text block (non-WYSIWYG) beside the form.

## Auth & Access Control

- **Supabase auth setup**:
- Create a Supabase project and enable email+password auth.
- Seed a single admin user (Louie) and any backup admin accounts.
- **Next.js integration**:
- Use Supabase client in server components/route handlers to validate sessions.
- Guard `app/admin/*` routes with an auth check (redirect to `/admin/login` if not logged in).
- `app/admin/login` page posts credentials to Supabase and sets cookies/session.
- **Roles/permissions**:
- Maintain an `is_admin` boolean in Supabase `auth.users` metadata or a small `user_roles` table.
- API layer checks `is_admin` before allowing writes.

## Migration Strategy

- **1. Inventory existing content**:
- Use current `defaultSettings` and live Payload data (if still accessible) to create a snapshot of all sections.
- **2. Seed Supabase**:
- Write one-time scripts (local or via Supabase SQL editor) to:
  - Insert a `site_content` row for each section with JSON matching existing content.
  - Populate `testimonials`, `faq_items`, and `videos` from either live Payload data or your hardcoded defaults.
- **3. Dry-run frontend integration**:
- Enable `USE_SUPABASE_CMS` in a preview/staging environment.
- Validate that all pages render identically (spot-check visually and for key copy).
- **4. Cut-over**:
- Flip `USE_SUPABASE_CMS` to true in production.
- Keep `lib/payload.ts` and old config in the repo as a fallback (for at least one release cycle).

## Non-Functional Considerations

- **Performance**:
- Cache `GET` responses from Supabase via Next.js `revalidate` options or `cache()` wrappers (similar to current implementation).
- Use a single batched `GET /api/cms/settings` for all non-collection content to minimize round-trips.
- **Reliability & observability**:
- Add basic logging around CMS API errors and Supabase failures.
- Optionally add a minimal admin "status" view that shows last-updated times for each section.
- **Security**:
- Ensure no write routes are accessible without a valid Supabase session and admin role.
- Disable signups for random external users in Supabase (invite-only).

## Milestones & Phased Delivery

- **Phase 1 – Foundations (Supabase + data model)**
- Set up Supabase project, tables, and indexes.
- Create service account keys and `.env` wiring for Next.js.
- Implement the `site_content`-based settings fetch with merging into `defaultSettings` in a new `lib/cms.ts`.
- **Phase 2 – Read-only integration**
- Switch homepage and key pages to read from Supabase via `lib/cms.ts` behind a feature flag.
- Verify data fidelity vs current Payload-powered site.
- **Phase 3 – Admin auth and basic UI**
- Implement Supabase-backed login/logout (`/admin/login`).
- Build the admin layout shell and dashboard.
- Implement one representative edit screen end-to-end (e.g., Hero section) to validate the full stack.
- **Phase 4 – Full admin coverage**
- Implement edit pages for all homepage sections.
- Implement CRUD UIs for testimonials, FAQ, and videos.
- Implement admin pages for newsletter, course, tools, and site settings (social, contact, footer, SEO).
- **Phase 5 – Polish, migration, and cut-over**
- Migrate existing live content and validate.
- Add UX polish (help text, confirmation messages, basic previews).
- Flip the feature flag in production and monitor.

- **Phase 6 – Live Preview (Future)**
- Add iframe-based live preview to all edit pages
- Preview panel shows actual site page with unsaved changes
- Changes reflect in real-time as user types
- "Save" button publishes changes, preview is instant
- Implementation approach:
  - Add `/cms/preview/[page]` routes that render site pages with draft data
  - Pass form state to iframe via postMessage or URL params
  - Debounce updates for performance
  - Show loading state while preview updates
- Estimated effort: 6-8 hours

