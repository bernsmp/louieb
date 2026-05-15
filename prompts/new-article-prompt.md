# New SEO Article — Reusable Prompt Template

Copy the block below into a new Claude Code session at the repo root. Fill the four bracketed fields (the 5th, Color theme, is optional — leave blank to let Claude auto-rotate). Leave everything else alone. All standing context (tech stack, ICP, template spec, CMS field map, colors) lives in `CLAUDE.md` — you don't need to repeat it here.

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
Color theme: [LEAVE BLANK FOR AUTO-ROTATE — or specify one of: emerald | teal | violet | rose | indigo | cyan | fuchsia]

Pre-flight checks (do these before writing any code — abort and ask if any fail):
1. Open app/(site)/site-map/page.tsx and confirm the slug above is NOT already a page. If it is, stop and ask whether to update the existing article instead of creating a near-duplicate URL.
2. Grep the codebase for the CMS section key (e.g. `useCmsSection('seoFoo')`). If it already exists, stop and ask.
3. Read today's date from the environment. Use it for the schema.org `datePublished` field and the `?month=YYYY-MM` parameter on every Calendly link. Do NOT carry forward stale months from older articles.

Color theme rotation (the site is over-indexed on blue/orange — rotate deliberately):
- Approved palette (pick one): emerald, teal, violet, rose, indigo, cyan, fuchsia.
- Do NOT use blue, sky, amber, or orange families unless the user explicitly named them in the "Color theme" line above.
- If "Color theme" is blank, grep `accentColor=` across the last ~15 SEO article page.tsx files in app/(site)/, look at what shipped recently, and pick a family that does NOT appear in the most recent 5 articles.
- Apply the chosen family wherever the template spec in CLAUDE.md says "blue". The substitution slots are:
    - Eyebrow tag: text-{color}-400
    - H1 accent span (line 2): text-{color}-400
    - H2 subtitle: text-{color}-200
    - Hero CTA button: bg-{color}-700 hover:bg-{color}-800
    - Key Takeaways: border-l-4 border-{color}-700, heading text-{color}-800, bullets bg-{color}-700
    - Numbered card numbers ("01", "02"…): text-{color}-200
    - "What You Get" outcome boxes: bg-{color}-50 border-{color}-100 text-{color}-800
    - Comparison table right column header: text-{color}-400
    - SEO body inline links + Related Reading links: text-{color}-700 underline underline-offset-2 hover:text-{color}-900
- HeroBackground props use the 700-level hex of the chosen family:
    emerald: accentColor="#047857" fillColor="rgba(4,120,87,0.3)"
    teal:    accentColor="#0f766e" fillColor="rgba(15,118,110,0.3)"
    violet:  accentColor="#6d28d9" fillColor="rgba(109,40,217,0.3)"
    rose:    accentColor="#be123c" fillColor="rgba(190,18,60,0.3)"
    indigo:  accentColor="#4338ca" fillColor="rgba(67,56,202,0.3)"
    cyan:    accentColor="#0e7490" fillColor="rgba(14,116,144,0.3)"
    fuchsia: accentColor="#a21caf" fillColor="rgba(162,28,175,0.3)"
- DO NOT rotate (these are semantic or chrome and stay constant on every article):
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
1. app/(site)/<slug>/page.tsx — full page using useCmsSection('<CMS_SECTION>') with the chosen color theme applied to every substitution slot listed above.
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
    - Body covers the 2–3 most valuable insights from the article — not a summary. Pick the moments a founder will nod at.
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
- The LinkedIn post and YouTube script must derive from the SAME core insight as the article — not a different angle. A reader who sees the LinkedIn post should land on the page and feel "yes, this is the deeper version of what I just read."
- Don't ask for confirmation between steps. Don't ask which option to pick — make the best call and keep moving.

When you're done, report:
- The color theme you chose and why (which recent themes you were avoiding).
- The PR URL.
- Any Related Reading links you swapped because the original suggestion didn't exist.
- The full LinkedIn post (paste it in chat).
- The full YouTube script (paste it in chat).
- The path to content/social/<slug>.md for reference.
```

---

## Quick reminders (human-to-human)

- **Don't pick an H1 that duplicates an existing page.** The prompt now does a pre-flight check against the site-map, but it's faster to scan the site-map yourself before you even open the prompt.
- **The `H1` should be a question your ICP would literally type into Google.** "Why does my revenue feel unpredictable month to month?" is good. "Revenue unpredictability strategies" is not.
- **The `H2` is the supporting concept** — often the first question a reader asks *after* the H1 (e.g. H1 "Why does my revenue feel unpredictable?" → H2 "What are revenue fluctuations?").
- **Color theme is optional.** Leave blank and Claude will rotate intelligently. Override only when a topic begs for a specific feel (e.g. urgent/risk topics → rose; financial/ROI topics → emerald; strategic/process topics → violet or indigo).
- **If two articles ship the same week with the same theme by accident**, it's not the end of the world — but flag it and Claude will swap one before merging the second PR.
- **YouTube script timing rule of thumb:** ~150 words/minute conversational pace → 75–125 words is your 30–50 second window. If it runs long when Louie reads it aloud, trim a sentence, don't speed up.
