# New SEO Page + Social — Reusable Prompt Template

Copy the block below into a new Claude Code session at the repo root. Fill the four bracketed fields.

This prompt produces the same on-page artifact as `new-article-prompt.md` (a TSX page under `app/(site)/`) **plus** two social deliverables: a 300–400 word LinkedIn text post and a 30–50 second YouTube script derived from the page. Use this version when you plan to promote the page on socials at publish time.

**Color is locked to standard Tailwind blue on this prompt — no rotation.** This prompt is intentionally on-brand: it always uses Tailwind's `blue-*` scale (hero `#1d4ed8`, body `text-blue-700`, etc.) — the dominant blue treatment across the existing site. Web pages stay visually consistent. (The article prompt is the one that rotates color themes.)

All standing context (tech stack, ICP, template spec, CMS field map, colors) lives in `CLAUDE.md` — you don't need to repeat it here.

---

## Ending the "Allow" prompts (do this once, then forget about it)

The original version of this prompt tried to suppress permission prompts by writing "Always Allow" inline (e.g. `Don't ask: Allow Claude to fetch https://www.vendux.org/ ? Always Allow.`). **That does nothing.** Permission prompts are a Claude Code harness feature — they are not influenced by prompt text. Two real fixes:

1. **Preferred — project allowlist.** `.claude/settings.json` in this repo pre-allows everything this workflow needs (git, gh, node scripts, webfetch to the competitor research URLs, env-file reads, supabase seeds, PR auto-merge). If a prompt still appears, it's a command the allowlist doesn't cover — approve it once and ask Claude to add it to `.claude/settings.json` so it never asks again.
2. **Nuclear — launch with `--dangerously-skip-permissions`.** Start the CLI as `claude --dangerously-skip-permissions`. No prompts for anything. Use only when you're actively supervising the session.

If you find yourself being prompted repeatedly for the same command, invoke `/less-permission-prompts` — it scans the session and extends the allowlist.

---

## The prompt (paste everything below into Claude Code)

```
Write a new SEO page for louiebernstein.com following the Standing SEO Article Template Spec in CLAUDE.md. Read CLAUDE.md first.

Examples to follow for layout, components, hero treatment, and section rhythm — match these exactly (the HeroBackground "mind/process" graphic, the numbered cards, the comparison table, the related-reading block):
- https://louiebernstein.com/why-does-my-sales-pipeline-depend-on-me
- https://louiebernstein.com/what-breaks-first-when-founder-stops-selling
- https://louiebernstein.com/5-warning-signs-sales-process-breaking

H1: [PASTE THE H1 QUESTION]
H2: [PASTE THE H2 SUBTITLE]
URL slug: [PASTE THE KEBAB-CASE SLUG]
CMS section key: [PASTE seo<PascalCaseKey>]

Pre-flight checks (do these before writing any code — abort and ask if any fail):
1. Open app/(site)/site-map/page.tsx and confirm the slug above is NOT already a page. If it is, stop and ask whether to update the existing page instead of creating a near-duplicate URL.
2. Grep the codebase for the CMS section key (e.g. `useCmsSection('seoFoo')`). If it already exists, stop and ask.
3. Read today's date from the environment. Use it for the schema.org `datePublished` field and the `?month=YYYY-MM` parameter on every Calendly link. Do NOT carry forward stale months from older pages.

Color — Standard Tailwind blue (LOCKED, do not rotate or substitute):
- Reference page: app/(site)/5-warning-signs-sales-process-breaking/page.tsx — match its color treatment exactly. This is the dominant blue treatment across ~80% of existing pages and the canonical CLAUDE.md template.
- HeroBackground "mind/process" graphic (always these props): accentColor="#1d4ed8" fillColor="rgba(29,78,216,0.3)" className="bg-slate-950"
- Use the standard Tailwind `blue-*` scale (NOT bracketed arbitrary hex). The substitution slots:
    - Eyebrow tag: text-blue-400
    - H1 accent span (line 2): text-blue-400
    - H2 subtitle on dark hero: text-blue-200
    - Hero CTA button: bg-blue-700 hover:bg-blue-800
    - Key Takeaways card: border-l-4 border-blue-700, heading text-blue-800, bullets bg-blue-700
    - Numbered card numbers ("01", "02"…): text-blue-200
    - "What You Get" / "Fix" outcome boxes inside numbered cards: bg-blue-50 border-blue-100, body text-blue-800
    - "What to Do Next" / action checklist numbers: text-blue-700
    - Comparison table right column header: text-blue-400
    - SEO body inline links + Related Reading links: text-blue-700 underline underline-offset-2 hover:text-blue-900
- DO NOT rotate or substitute. DO NOT use Louie Blue (`#0966c2`) on this prompt — that hex is only used on a single one-off page (how-to-hire-first-sales-rep).
- DO NOT change (semantic or chrome — constant on every page):
    - Comparison table left column: text-red-400 (header) / text-red-500 (✕)
    - Comparison table right column ✓: text-green-600
    - Dark hero wrapper: className="bg-slate-950"
    - Final CTA section: bg-gradient-to-br from-slate-900 to-slate-800
    - Body text neutrals: text-neutral-700, text-neutral-900, bg-neutral-50, bg-white

Competitor research (fetch and mine for angles, phrasing, FAQ ideas — do not copy):
- https://salesmanagernow.com/
- https://www.chiefoutsiders.com/
- https://strategicpete.com/blog/the-truth-about-fractional-sales-leadership/
- https://salesxceleration.com/
- https://www.vendux.org/
- https://www.activatedscale.com/
- https://www.salesqb.com/

Deliver (in this order):
1. app/(site)/<slug>/page.tsx — full page using useCmsSection('<CMS_SECTION>') with standard Tailwind blue applied to every substitution slot listed above.
2. app/(site)/<slug>/layout.tsx — Metadata export (title, description, keywords, OG, Twitter, canonical, robots).
3. scripts/seed-<slug>.js — upsert all CMS fields into site_content.
4. app/cms/seo-<slug>/page.tsx — <SectionEditor fields=[...]/> covering every editable field.
5. Add a link to the editor in app/cms/components/AdminSidebar.tsx (pages array).
6. Add the public URL to app/(site)/site-map/page.tsx in the correct section (SALES_GUIDES or FSL_PAGES).
7. Verify the 3 Related Reading links resolve — each href must match an existing folder under app/(site)/ or an entry in site-map/page.tsx. Replace any that don't.
8. Run the seed script to populate Supabase (env at D:\louieb\.env.local).
9. Run `npm run build` and fix any errors before committing. Most common failure: unescaped apostrophes/quotes inside JSX strings — use `&apos;` / `&quot;` or wrap the string in backticks. (Past Vercel break: commit 6613f26.)
10. Commit on a new branch, push, open a PR with gh, merge with --squash --auto.
11. Write content/social/<slug>.md containing BOTH of the following sections (use these exact H2 headings so Louie can find them later):

    ## LinkedIn Post (300–400 words)
    - Line 1 = scroll-stopping hook. Use curiosity, a contrarian take, or a specific number. No "I'm excited to share…" openers.
    - 1–2 sentences per paragraph max. LinkedIn rewards whitespace — every line break is a chance for the reader to keep going.
    - Body covers the 2–3 most valuable insights from the page — not a summary. Pick the moments a founder will nod at.
    - One sentence of inspirational takeaway near the end (forward-looking, not "I help founders").
    - Final line: a CTA + the full URL — "Full breakdown: https://louiebernstein.com/<slug>"
    - No hashtags. No emoji. No "DM me." Louie is a serious B2B voice.

    ## YouTube Script (30–50 seconds, 75–125 words)
    - First line is a 3-second hook that names the pain the viewer already feels (e.g. "If you're a founder doing your own sales at $3M ARR, this is for you.").
    - One clear insight in the middle. Conversational sentences. No jargon, no buzzwords.
    - End with: "If you want the full playbook, the link is in the description." (Louie will paste the URL into YouTube manually.)
    - Plain prose only — no camera directions, no [HOOK]/[BODY] tags, no shot lists. Louie reads this directly into the camera.

12. Print BOTH the LinkedIn post and the YouTube script in the closing report so Louie can copy-paste without opening the file.

Content rules:
- Every paragraph speaks to the ICP: B2B founders $1M–$10M ARR, stuck in founder-led sales, not ready for a full-time VP. Position Louie as the answer.
- Follow the 11 required on-page blocks from CLAUDE.md in order. Skip optional blocks (economics callout, build sequence) only if the topic doesn't warrant them.
- 3 Related Reading links — real, existing URLs on louiebernstein.com that actually relate to this topic (verified in deliverable 7).
- Write tight. No padding. 1,800–2,500 words total across all on-page sections.
- The LinkedIn post and YouTube script must derive from the SAME core insight as the page — not a different angle. A reader who sees the LinkedIn post should land on the page and feel "yes, this is the deeper version of what I just read."
- Don't ask for confirmation between steps. Don't ask which option to pick — make the best call and keep moving.

When you're done, report:
- Confirmation that standard Tailwind blue (hero #1d4ed8, text-blue-700/400/200, bg-blue-50) is in use throughout — and that Louie Blue (`#0966c2`) is NOT present.
- The PR URL.
- Any Related Reading links you swapped because the original suggestion didn't exist.
- The full LinkedIn post (paste it in chat).
- The full YouTube script (paste it in chat).
- The path to content/social/<slug>.md for reference.
```

---

## Quick reminders (human-to-human)

- **Don't pick an H1 that duplicates an existing page.** The prompt now does a pre-flight check against the site-map, but it's faster to scan the site-map yourself before you even open the prompt.
- **The `H1` should be a question your ICP would literally type into Google.** "How do I design a good sales comp plan?" is good. "Sales comp plan design best practices" is not.
- **The `H2` is the supporting concept** — often the first question a reader asks *after* the H1.
- **Color is locked.** Standard Tailwind blue (`#1d4ed8` hero, `text-blue-700` body) on every web page — this is the dominant pattern on the existing site. If you want a one-off page in a different color, edit the color block in the prompt before pasting it — don't expect Claude to pick.
- **This prompt vs `new-article-prompt.md`:** both produce the same on-page TSX artifact + social deliverables. The difference is color — this one stays on-brand with Louie Blue, the article prompt rotates through the approved palette for visual variety. Use this one for canonical site pages; use the article prompt for content-style pieces that benefit from variety.
- **YouTube script timing rule of thumb:** ~150 words/minute conversational pace → 75–125 words is your 30–50 second window. If it runs long when Louie reads it aloud, trim a sentence, don't speed up.
