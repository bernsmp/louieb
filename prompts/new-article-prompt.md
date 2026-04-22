# New SEO Article — Reusable Prompt Template

Copy the block below into a new Claude Code session at the repo root. Fill the four bracketed fields. Leave everything else alone. All standing context (tech stack, ICP, template spec, CMS field map, colors) lives in `CLAUDE.md` — you don't need to repeat it here.

---

## Ending the "Allow" prompts (do this once, then forget about it)

Permission prompts are a harness feature, not a prompt feature. Writing "never display permission prompts" into your prompt does nothing. Two real fixes:

1. **Preferred — project allowlist.** `.claude/settings.json` in this repo pre-allows everything this workflow needs (git, gh, node scripts, webfetch to louiebernstein.com, etc.). If a prompt still appears, it's a command the allowlist doesn't cover — approve it once and ask Claude to add it to `.claude/settings.json` so it never asks again.
2. **Nuclear — launch with `--dangerously-skip-permissions`.** Start the CLI as `claude --dangerously-skip-permissions`. No prompts for anything. Use only when you're actively supervising the session.

If you find yourself being prompted repeatedly for the same command, invoke `/less-permission-prompts` — it scans the session and extends the allowlist.

---

## The prompt (paste everything below into Claude Code)

```
Write a new SEO article for louiebernstein.com following the Standing SEO Article Template Spec in CLAUDE.md. Read CLAUDE.md first.

H1: [PASTE THE H1 QUESTION]
H2: [PASTE THE H2 SUBTITLE]
URL slug: [PASTE THE KEBAB-CASE SLUG]
CMS section key: [PASTE seo<PascalCaseKey>]

Competitor research (fetch and mine for angles, phrasing, FAQ ideas — do not copy):
- https://salesmanagernow.com/
- https://www.chiefoutsiders.com/
- https://strategicpete.com/blog/the-truth-about-fractional-sales-leadership/
- https://salesxceleration.com/
- https://www.vendux.org/
- https://www.activatedscale.com/
- https://www.salesqb.com/

Deliver:
1. app/(site)/<slug>/page.tsx — full page using useCmsSection('<CMS_SECTION>')
2. app/(site)/<slug>/layout.tsx — Metadata export (title, description, keywords, OG, Twitter, canonical)
3. scripts/seed-<slug>.js — upsert all CMS fields into site_content
4. app/cms/seo-<slug>/page.tsx — <SectionEditor fields=[...]/> covering every editable field
5. Add a link to the editor in app/cms/components/AdminSidebar.tsx (pages array)
6. Add the public URL to app/(site)/site-map/page.tsx in the correct section (SALES_GUIDES or FSL_PAGES)
7. Run the seed script to populate Supabase (env at D:\louieb\.env.local)
8. Commit on a new branch, push, open a PR with gh, merge with --squash --auto

Content rules:
- Every paragraph speaks to the ICP: B2B founders $1M–$10M ARR, stuck in founder-led sales, not ready for a full-time VP. Position Louie as the answer.
- Follow the 11 required on-page blocks from CLAUDE.md in order. Skip optional blocks (economics callout, build sequence) only if the topic doesn't warrant them.
- 3 Related Reading links — real, existing URLs on louiebernstein.com that actually relate to this topic.
- Write tight. No padding. 1,800–2,500 words total across all sections.
- Don't ask for confirmation between steps. Don't ask which option to pick — make the best call and keep moving.
```

---

## Quick reminders (human-to-human)

- **Don't pick an H1 that duplicates an existing page.** Before writing the prompt, search the site-map for the keyword — if it's already a page, update the existing one instead of creating a near-duplicate URL.
- **The `H1` should be a question your ICP would literally type into Google.** "Why does my revenue feel unpredictable month to month?" is good. "Revenue unpredictability strategies" is not.
- **The `H2` is the supporting concept** — often the first question a reader asks *after* the H1 (e.g. H1 "Why does my revenue feel unpredictable?" → H2 "What are revenue fluctuations?").
