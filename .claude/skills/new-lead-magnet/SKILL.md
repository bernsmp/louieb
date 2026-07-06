---
name: new-lead-magnet
description: >-
  Build a complete lead-magnet funnel on louiebernstein.com: a dedicated
  landing page that trades value (quiz, self-audit, checklist, calculator,
  guide) for first name + email, a Kit (kit.com) integration that tags and
  segments every signup, and the handoff for the email sequence. Use this
  whenever Louie mentions a new lead magnet, opt-in, freebie, giveaway,
  downloadable, self-audit, quiz, assessment, squeeze page, email capture,
  landing page for signups, growing his email list, or wiring anything to Kit —
  even if he doesn't say "lead magnet." Also use it when modifying an existing
  lead magnet's Kit wiring.
---

# New Lead Magnet: Landing Page + Kit Funnel

The full human-readable SOP lives at `docs/SOP-LEAD-MAGNET.md` — read it if
anything below needs more context. The canonical worked example is the Founder
Sales Trap Self-Audit; when in doubt, mirror those files exactly:

| Piece | Canonical file |
|-------|----------------|
| Interactive component | `components/FounderSalesTrapAudit.tsx` |
| API route (Kit) | `app/api/audit-subscribe/route.ts` |
| Landing page | `app/(site)/founder-sales-trap-audit/page.tsx` + `layout.tsx` |
| CMS editor | `app/cms/seo-founder-sales-trap-audit/page.tsx` |
| Seed script | `scripts/seed-founder-sales-trap-audit.js` |
| Kit setup script | `scripts/kit-audit-setup.js` |
| Tools-hub card script | `scripts/add-audit-tool-card.js` |

## Step 1 — Interview Louie (only what's missing)

Get answers to: name of the magnet · format (interactive beats downloadable —
the gate should withhold a *personalized* result) · what the visitor gets ·
how signups should be segmented in Kit (tags) · what email #1 delivers.
If Louie provided draft content, review it before building: no double
negatives; flag questions whose healthy answer is "No" and score them with
`reverse: true` rather than rewording; hunt duplicate questions **by meaning**;
match terminology to Louie's frameworks (grep `.claude/reference/`).

## Step 2 — Kit prerequisites

1. Ask Louie to create a Form in Kit (it's never displayed — it's only the
   automation trigger) and paste the embed code. Extract the numeric ID:
   `curl -s <embed-js-url> | grep -oE 'forms/[0-9]+'`.
2. `KIT_API_KEY` is already in `.env.local`. Copy `scripts/kit-audit-setup.js`
   to `scripts/kit-<magnet>-setup.js`, adapt tag/field names, and run it — it
   creates tags + custom fields idempotently and prints the env lines.
3. Env naming for additional magnets: the audit owns the unsuffixed names
   (`KIT_FORM_ID`, `KIT_TAG_*`); each new magnet uses a suffix
   (`KIT_FORM_ID_ICP_CHECKLIST` etc.) and its own API route.

### Kit v4 API facts (violating these cost a debugging cycle each)

- `POST /v4/forms/{id}/subscribers` **404s unless the subscriber already
  exists**. Order is always: `POST /v4/subscribers` (upsert: email, first_name,
  fields) → add to form → `POST /v4/tags/{id}/subscribers`. Form-add and tag
  failures after a successful create should degrade gracefully, not 500.
- API-created subscribers arrive `state: "active"` — Kit sends **no**
  double-opt-in email. Never write on-page copy saying "check your email to
  confirm"; email #1 of Louie's sequence (sent immediately) is the
  confirmation. Say "your results are on their way to your inbox."
- Custom fields must be created in Kit before the API can write them.
- Kit's UI masks API keys — if Louie pastes asterisks, tell him to use the
  copy button.

## Step 3 — Build

Create, mirroring the canonical files: component (self-contained styles, navy
`#1B3A6B` / orange `#E8610A`, first name + email gate, **always show results
even if the API call fails** — never lose the lead experience), API route
(server-side only; the key never reaches the browser), landing page (dark
`HeroBackground` hero, single CTA anchoring to the magnet, 3-card "what you
get", component in a white rounded card; all copy through
`useCmsSection('seo<PascalName>')`), `layout.tsx` metadata, CMS editor page,
seed script — then **run the seed**.

**Register in all seven places** (each was made a rule after being forgotten
once):
1. `app/cms/components/AdminSidebar.tsx` → `pages` array
2. `app/api/cms/search/route.ts` → `PAGE_REGISTRY` (2 entries incl. alt title)
   **and** `SECTION_URLS`
3. `app/(site)/site-map/page.tsx` → `TOOL_PAGES`
4. `app/sitemap.ts` → `PRIORITY_OVERRIDES` (0.8)
5. `lib/cms.ts` → `toolsPage.tools` default
6. Supabase `toolsPage` row (adapt `scripts/add-audit-tool-card.js` — CMS
   overrides code, so both 5 and 6 are required)
7. `.env.local` → new env vars

## Step 4 — Verify (all of it, before pushing)

1. `npm run lint` · `npm run typecheck` · `npm test`.
2. Browser preview: complete the entire flow. If any question is
   reverse-scored, assert the math (all-YES must not score perfect).
3. Real Kit round-trip: POST the local route with
   `louie+<magnet>test@sales-getters.com`, then GET the subscriber from the
   Kit API and confirm first_name, fields, and tag. Tell Louie which test
   subscribers to delete.

## Step 5 — Ship + hand off

Commit and push (never ask permission — standing rule). Then give Louie, in
plain non-technical language:

1. The **full live URL** (`https://louiebernstein.com/<slug>`).
2. The exact `KEY=value` block to paste into Vercel (Settings → Environment
   Variables → Add Environment Variable → paste all lines at once into Key →
   Save → Deployments → ⋯ → Redeploy). The live site cannot reach Kit until
   he does this.
3. Kit steps: Sequence (email #1 = welcome/deliver-the-value, **immediate**) +
   Visual Automation *Joins form → Add to sequence* → on. Offer to draft the
   sequence copy in his voice (`.claude/reference/` has samples).
4. Personalization reminders: `{{ subscriber.first_name }}` and custom fields.
5. Launch test: live signup with a fresh `louie+…` alias; email #1 within ~2
   minutes; subscriber tagged in Kit.

Louie is non-technical: never tell him to run terminal commands — run them for
him, and give click-by-click paths for anything in Kit or Vercel.
