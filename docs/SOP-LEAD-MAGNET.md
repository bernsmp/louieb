# SOP: Lead Magnet + Landing Page + Kit Email System

**What this produces:** a dedicated landing page on louiebernstein.com that trades
something valuable (a quiz, checklist, calculator, guide) for a visitor's first
name + email, wires every signup into Kit with segmentation tags, and starts an
automated email sequence.

**Built the first time for:** The Founder Sales Trap Self-Audit
(https://louiebernstein.com/founder-sales-trap-audit), July 2026.

**How to reuse this:** tell Claude Code *"new lead magnet: [name/idea]"* — the
`new-lead-magnet` skill in `.claude/skills/` walks Claude through every step
below automatically. This document is the human-readable reference.

---

## Who does what

| Step | Louie | Claude |
|------|-------|--------|
| Decide the magnet concept & content | ✅ (with Claude's help) | drafts |
| Create the form in Kit | ✅ (2 min) | extracts the form ID from it |
| Kit tags + custom fields | | ✅ automated via script |
| Build page, component, API route, CMS | | ✅ |
| Register page everywhere (7 places) | | ✅ |
| Test end-to-end incl. real Kit | | ✅ |
| Commit + push (auto-deploys) | | ✅ |
| Paste env vars into Vercel + redeploy | ✅ (5 min) | provides exact lines |
| Write the email sequence in Kit | ✅ | can draft the copy |
| Build the Kit automation (form → sequence) | ✅ (2 min) | provides exact clicks |

---

## Phase 1 — Define the lead magnet (Louie + Claude)

Answer these before any code is written:

1. **Name** — short, specific, promise-driven (e.g., "The Founder Sales Trap Self-Audit").
2. **Format** — interactive quiz/audit, checklist, calculator, or downloadable guide.
   Interactive formats convert better because the email gate withholds a
   *personalized* result, not just a file.
3. **The trade** — what exactly does the visitor get for their email?
   (For the audit: their 0–20 score + what it means + what to do next.)
4. **Segmentation** — how should signups be bucketed in Kit?
   (For the audit: three score bands → three tags.)
5. **The emails** — what does email #1 deliver, and what does the drip series sell?

Copy rules (always): speak to B2B founders at $1M–$10M ARR stuck in founder-led
sales; Louie's plain, direct voice; every stat names its source inline; LinkedIn
URL is https://www.linkedin.com/in/sales-processes/ (never /in/louiebernstein).

**Quality checks on quiz-style content (learned the hard way):**
- No double negatives ("I am *not* the person who..." + Yes/No = confusion).
- If a question's *healthy* answer is No, mark it `reverse: true` in the code so
  scoring stays accurate — don't contort the wording to force Yes=good.
- Scan for duplicate questions *by meaning*, not wording (Q11/Q18 and Q15/Q17
  were duplicates in draft 1).
- Consistent terminology with Louie's frameworks (Accountability Document,
  Sales Playbook, Position Contract, etc. — grep `.claude/reference/` to match
  his published usage).

## Phase 2 — Kit account prep

1. **Louie:** in Kit, create a new Form (any style — it's never displayed; it
   only exists as the API entry point that triggers automation). Copy the embed
   code and paste it to Claude.
2. **Claude:** extract the numeric form ID from the embed script:
   `curl -s <embed-src-url> | grep -oE 'forms/[0-9]+'`
3. **Claude:** run the Kit setup script (pattern: `scripts/kit-audit-setup.js`)
   to create the segmentation tags and any custom fields, and print the env
   values. The V4 API key already lives in `.env.local` (`KIT_API_KEY`).

**Kit API gotchas (cost us a debugging cycle each — don't rediscover):**
- Kit's UI shows API keys **masked**. Use the copy button; selecting the
  displayed text copies asterisks.
- Kit v4: `POST /v4/forms/{id}/subscribers` returns **404 if the subscriber
  doesn't exist yet**. Always `POST /v4/subscribers` (create/upsert) first,
  then add to the form, then tag.
- Subscribers created via the API arrive **already confirmed** (`state:
  "active"`). Kit will **not** send its double-opt-in confirmation email. The
  "confirmation" email must be **email #1 of the sequence**, set to send
  immediately.
- Custom fields must exist in Kit *before* the API can write them (the setup
  script creates them); unknown fields are silently dropped.
- Kit upserts on email address, so repeat signups never create duplicates.

## Phase 3 — Build (Claude)

Files per magnet (mirror the audit; canonical paths in parentheses):

1. **Interactive component** (`components/FounderSalesTrapAudit.tsx`) — self-
   contained client component, navy `#1B3A6B` / orange `#E8610A` brand, first
   name + email gate, POSTs to the API route, **shows results even if the Kit
   call fails** (never lose the lead experience to an integration hiccup).
2. **API route** (`app/api/audit-subscribe/route.ts`) — server-side (the API
   key must never reach the browser). Order: create subscriber → add to form →
   tag. New magnets get their own route + suffixed env vars
   (`KIT_FORM_ID_<MAGNET>`, `KIT_TAG_..._<MAGNET>`).
3. **Landing page** (`app/(site)/<slug>/page.tsx`) — dark `HeroBackground` hero
   whose only CTA is an anchor to the magnet (`#audit`), a 3-card "what you
   get" section, then the component. All copy CMS-editable via
   `useCmsSection('seo<PascalName>')`.
4. **Metadata** (`app/(site)/<slug>/layout.tsx`) — title/description/OG/
   canonical/robots.
5. **CMS editor** (`app/cms/seo-<slug>/page.tsx`) + **seed script**
   (`scripts/seed-<slug>.js`) — run the seed.
6. **Registrations — all seven, every time:**
   - `app/cms/components/AdminSidebar.tsx` (`pages` array)
   - `app/api/cms/search/route.ts` (`PAGE_REGISTRY` + `SECTION_URLS`)
   - `app/(site)/site-map/page.tsx` (`TOOL_PAGES`)
   - `app/sitemap.ts` (`PRIORITY_OVERRIDES`, 0.8)
   - `lib/cms.ts` (toolsPage defaults) **and** Supabase `toolsPage` row
     (script pattern: `scripts/add-audit-tool-card.js` — the CMS row overrides
     code, so both are required)
   - `.env.local` (new env vars)

## Phase 4 — Test (Claude, before every push)

1. `npm run lint` && `npm run typecheck` && `npm test` — all green.
2. Browser preview: complete the full flow (answer everything, gate appears,
   submit, correct result). If any scoring is reversed, verify the math (e.g.,
   all-YES must *not* be a perfect score when a reverse-scored question exists).
3. **Real Kit round-trip:** POST to the local route with
   `louie+<magnet>test@sales-getters.com`, then read the subscriber back from
   the Kit API and confirm first name, custom fields, and tag all landed.
4. Tell Louie which test subscribers were created so he can delete them.

## Phase 5 — Ship

1. Claude commits + pushes (Vercel auto-deploys in ~60s).
2. **Louie:** Vercel → project → Settings → Environment Variables → **Add
   Environment Variable** → paste all the `KEY=value` lines Claude provides at
   once into the Key field (Vercel auto-splits) → Save → Deployments → ⋯ on the
   newest → **Redeploy**. *The live site cannot reach Kit until this is done.*

## Phase 6 — Emails in Kit (Louie; Claude drafts copy on request)

1. **Send → Sequences → New sequence.** Email #1 = welcome/confirmation +
   deliver the promised value, timed **immediately**. Drip emails follow with
   chosen delays.
2. **Automate → Visual Automations → New:** trigger *"Joins a form"* (the
   magnet's form) → action *"Add to sequence"* → turn it **on**.
3. Personalization available in any email: `{{ subscriber.first_name }}` and
   any custom field (e.g., "You scored {{ subscriber.audit_score }} out of 20").

## Phase 7 — Launch checklist

- [ ] Take the magnet on the **live** site with a fresh `louie+…` alias
- [ ] Email #1 arrives within ~2 minutes
- [ ] Subscriber in Kit has first name, tag, custom field
- [ ] Page appears on /tools, /site-map, and in CMS search
- [ ] Promote: LinkedIn post (Louie), link from related articles (Claude)

---

## Improvements queued for next time

1. **One generic subscribe route.** Today each magnet gets its own API route.
   A single `/api/lead-magnet-subscribe` with a per-magnet config map (slug →
   form ID + tags) would mean zero new backend code per magnet.
2. **Thank-you redirect + conversion tracking.** Fire a GA4 event (or redirect
   to `/thanks-<slug>`) on successful signup so ad/LinkedIn traffic can be
   measured per magnet.
3. **Custom OG image per magnet.** Louie shares these on LinkedIn; a branded
   1200×630 card (magnet name + score preview) will outperform the generic
   hero image. Use the existing `scripts/svg-to-png.js` pipeline.
4. **Kit "source" field.** Add a `lead_source` custom field set to the magnet
   slug, so when there are 5 magnets Louie can see which one acquired each
   subscriber without relying on tags alone.
5. **Cross-promotion block.** Add a "Try the Self-Audit" CTA card to the 3–4
   highest-traffic articles; the audit's related topic pages are the cheapest
   traffic source available.
6. ~~Draft the sequence with Claude.~~ **Done for the audit** — see
   `docs/kit-audit-drip-sequence.md` (10 emails / 26 days, paste-ready, Liquid
   personalization). Do the same for every future magnet: Claude drafts from
   the writing samples in `.claude/reference/`, Louie pastes and schedules.
