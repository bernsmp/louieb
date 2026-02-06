# "Do You Need a Fractional Sales Manager?" Quiz/Assessment

## Goal
Build an 8-question scored quiz that helps visitors self-assess whether they need a fractional sales manager. Show results immediately (score + tier + personalized recommendation). **Fully free, no email capture or database.**

This is the site's **first lead generation funnel** — referenced from SEO research (`tasks/seo-aeo-research.md`, Section 6, Tool #1).

---

## Design Decisions

- **8 questions** (sweet spot — abandonment spikes after 7, but we need coverage)
- **Equal weight scoring** (keep v1 simple — each answer 1-4 points)
- **3 tiers**: Strong Fit (26-32), Likely Fit (17-25), Not Yet (8-16)
- **No database needed** — pure client-side quiz with immediate results display
- **No new dependencies** — pure React state, existing Tailwind
- **Follow ROI Calculator pattern** exactly: server page with metadata → client component

---

## Tasks

### 1. Quiz Client Component
- [ ] Create `app/(site)/tools/assessment/AssessmentQuiz.tsx`
  - 8 hardcoded questions, each with 4 multiple-choice options (scored 1-4)
  - State: `currentQuestion`, `answers`, `showResults`
  - Progress bar showing question X of 8
  - Single question per screen with animated transitions
  - Calculate score on completion, determine tier
  - Results screen: tier badge, score, personalized recommendation text
  - Final CTA: "Book a Free Consultation" linking to Calendly/contact

### 2. Quiz Page (Server Component)
- [ ] Create `app/(site)/tools/assessment/page.tsx`
  - SEO metadata (title, description, keywords, OpenGraph)
  - Schema.org Quiz structured data
  - Hero section: headline + subheadline
  - Render `<AssessmentQuiz />`
  - Follow ROI calculator page pattern exactly

### 3. Add to Tools Hub
- [ ] Modify CMS tools data or `app/(site)/tools/page.tsx`
  - Add assessment card to the tools grid
  - Icon: `Target` or `Users` from Lucide
  - Link to `/tools/assessment`

### 4. Deploy + Verify
- [ ] Commit, push, verify on production

---

## Quiz Questions (Draft)

Each question has 4 options scored 1-4 (1 = least need, 4 = strongest need).

**Q1: Who currently manages your sales team day-to-day?**
1. A dedicated full-time sales manager (1)
2. A senior rep who also sells (2)
3. Me (the CEO/founder), part-time (3)
4. Nobody — reps manage themselves (4)

**Q2: How would you describe your sales process?**
1. Documented, followed consistently, and measured (1)
2. Exists but not always followed (2)
3. Informal — each rep does their own thing (3)
4. We don't really have one (4)

**Q3: How often do your sales reps get 1-on-1 coaching?**
1. Weekly with structured feedback (1)
2. Monthly or as-needed (2)
3. Rarely — only when there's a problem (3)
4. Never (4)

**Q4: How accurate is your sales forecast?**
1. Within 10% — we trust our pipeline data (1)
2. Roughly directional — off by 20-30% (2)
3. Mostly guessing based on gut feel (3)
4. We don't forecast (4)

**Q5: What's happening with your sales team's performance?**
1. Consistently hitting or exceeding targets (1)
2. Some reps hit quota, others don't (2)
3. Most reps are underperforming (3)
4. We don't have clear targets or quotas (4)

**Q6: How is your CRM being used?**
1. Fully adopted — pipeline, activities, reporting all tracked (1)
2. Used for basic contact tracking but not pipeline (2)
3. Some reps use it, some don't (3)
4. We don't have one, or it's abandoned (4)

**Q7: What's your annual revenue range?**
1. Under $500K (1)
2. $500K – $2M (2)
3. $2M – $10M (3)
4. $10M+ (4)

**Q8: What's your budget comfort for sales leadership?**
1. I can't invest anything right now (1)
2. Under $3K/month (2)
3. $3K – $8K/month (3)
4. $8K+/month — I need results (4)

---

## Result Tiers

**Strong Fit (26-32 points)**
> Your sales team is running without real leadership — and it's costing you. A fractional sales manager would bring immediate structure, accountability, and process without the $150K+ commitment of a full-time hire. This is exactly what fractional sales leadership is built for.

**Likely Fit (17-25 points)**
> You have some pieces in place, but gaps in process, coaching, or accountability are holding your team back. A fractional sales manager could fill those gaps and accelerate your growth — especially if you're not ready for a full-time hire.

**Not Yet (8-16 points)**
> You're in a solid position. Your sales leadership needs are either covered or your business may not be at the stage where fractional management makes sense yet. That said, if you're feeling a ceiling on growth, a conversation could still uncover opportunities.

---

## Files Touched

| File | Type |
|------|------|
| `app/(site)/tools/assessment/page.tsx` | NEW |
| `app/(site)/tools/assessment/AssessmentQuiz.tsx` | NEW |
| `app/(site)/tools/page.tsx` or CMS data | MODIFY (add card) |

---

## v2 Ideas (Not Now)
- CMS-editable questions and scoring weights
- Automated email delivery of detailed results PDF
- Lead capture with email gate
- Admin dashboard showing lead analytics
- A/B test different question sets
- Retargeting pixel on results page
