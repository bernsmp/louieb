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
anything below needs more context. The canonical worked example is the ICP
Clarity Checklist (second magnet, built on the shared architecture); when in
doubt, mirror those files exactly:

| Piece | Canonical file |
|-------|----------------|
| Quiz engine (shared, do not fork) | `components/LeadMagnetQuiz.tsx` |
| Per-magnet content wrapper | `components/IcpClarityChecklist.tsx` |
| Shared API route (Kit) — add a MAGNETS entry | `app/api/lead-magnet-subscribe/route.ts` |
| Landing page | `app/(site)/icp-checklist/page.tsx` + `layout.tsx` |
| CMS editor | `app/cms/seo-icp-checklist/page.tsx` |
| Seed script | `scripts/seed-icp-checklist.js` |
| Kit setup script | `scripts/kit-icp-setup.js` |
| Tools-hub card script | `scripts/add-icp-tool-card.js` |
| Drip sequence draft | `docs/kit-icp-drip-sequence.md` |

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
2. `KIT_API_KEY` is already in `.env.local` AND Vercel. Copy
   `scripts/kit-icp-setup.js` to `scripts/kit-<magnet>-setup.js`, adapt the
   tag/field names (band tags + a `Magnet: <Name>` source tag + a
   `<magnet>_score` custom field), and run it — idempotent; prints the tag IDs.
3. Add one entry to `MAGNETS` in `app/api/lead-magnet-subscribe/route.ts`
   (formId, scoreField, sourceTagId, bandTags). Form/tag IDs are not secrets —
   they live in code, which is why new magnets need **zero env vars and zero
   Vercel changes**. The route already handles `lead_source` (first touch
   wins) and source tags for every magnet.

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

Create, mirroring the canonical files: a thin content wrapper around
`LeadMagnetQuiz` (questions + `getBand` + copy only — the engine already
handles the gate, reverse scoring, graceful Kit failure, and POSTs to the
shared route with the magnet key), landing page (dark `HeroBackground` hero,
single CTA anchoring to the magnet, 3-card "what you get", component in a
white rounded card; all copy through `useCmsSection('seo<PascalName>')`),
`layout.tsx` metadata, CMS editor page, seed script — then **run the seed**.
Never fork LeadMagnetQuiz for one magnet's needs — extend it with an optional
prop so every magnet benefits.

**Register in all seven places** (each was made a rule after being forgotten
once):
1. `app/cms/components/AdminSidebar.tsx` → `pages` array
2. `app/api/cms/search/route.ts` → `PAGE_REGISTRY` (2 entries incl. alt title)
   **and** `SECTION_URLS`
3. `app/(site)/site-map/page.tsx` → `TOOL_PAGES`
4. `app/sitemap.ts` → `PRIORITY_OVERRIDES` (0.8)
5. `lib/cms.ts` → `toolsPage.tools` default
6. Supabase `toolsPage` row (adapt `scripts/add-icp-tool-card.js` — CMS
   overrides code, so both 5 and 6 are required)
7. `MAGNETS` config in `app/api/lead-magnet-subscribe/route.ts` (no env vars)

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
2. Kit steps (his ONLY manual work — Kit's API cannot create sequences or
   automations): paste the drafted Sequence (email #1 = welcome/deliver-the-
   value, **immediate**) + Visual Automation *Joins form → Add to sequence* →
   on. Always draft the full drip sequence yourself
   (`docs/kit-<magnet>-drip-sequence.md`, ~10 emails, Louie's voice from
   `.claude/reference/`, Liquid personalization with first_name + score field,
   no unverified stats, LinkedIn URL is /in/sales-processes/).
3. Launch test: live signup with a fresh `louie+…` alias; email #1 within ~2
   minutes; subscriber tagged in Kit. No Vercel steps — the API key is already
   there and magnet config lives in code.

Louie is non-technical: never tell him to run terminal commands — run them for
him, and give click-by-click paths for anything in Kit or Vercel.
