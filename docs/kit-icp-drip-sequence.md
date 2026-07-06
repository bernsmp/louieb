# Kit Drip Sequence: The ICP Clarity Checklist

10 emails over 26 days. Email 1 is the confirmation/results email and must be
set to send **immediately**. Every email is written to paste straight into Kit.

## How to set this up in Kit (one time, ~15 minutes)

1. In Kit: **Send → Sequences → New Sequence**. Name it "ICP Clarity Checklist".
2. For each email below: click **Add Email**, paste the subject and body, and
   set the delay using the timing table.
3. Email 1's timing must be **immediately** (0 days).
4. **Automate → Visual Automations → New**: trigger *Joins a form* → pick the
   **ICP Checklist form** → action *Add to sequence* → pick this sequence →
   set it **live**. (Same pattern as the audit automation — this is a second,
   separate automation.)
5. Test: sign up on the live checklist page with a fresh alias
   (louie+icpseqtest@sales-getters.com), confirm email 1 arrives with your
   name and score rendered.

**Personalization used**: `{{ subscriber.first_name }}` and
`{{ subscriber.icp_score }}`. Email 1 has a Liquid if/else block per score
band — if a test email shows raw code, delete the block and keep the middle
(6–11) paragraph.

**Timing table**

| # | Send | Subject |
|---|------|---------|
| 1 | Immediately | Your ICP Clarity Score: {{ subscriber.icp_score }} out of 15 |
| 2 | 1 day later | Selling to everyone is selling to no one |
| 3 | 2 days later | Your ICP is hiding in your closed deals |
| 4 | 3 days later | The most profitable word in sales: no |
| 5 | 3 days later | Right customer, wrong time |
| 6 | 3 days later | A slide nobody reads vs. a filter nobody can skip |
| 7 | 3 days later | Watch me build an ICP from scratch |
| 8 | 4 days later | "Won't narrowing my market shrink my revenue?" |
| 9 | 4 days later | The foundation everything else sits on |
| 10 | 3 days later | Take the checklist again in 90 days |

---

## Email 1 — send immediately

**Subject:** Your ICP Clarity Score: {{ subscriber.icp_score }} out of 15
**Alt subject:** {{ subscriber.first_name }}, here are your ICP Checklist results

{{ subscriber.first_name }},

You scored {{ subscriber.icp_score }} out of 15 on the ICP Clarity Checklist.

Here's what that means:

{% assign score = subscriber.icp_score | plus: 0 %}{% if score >= 12 %}Your ICP is a filter, not a slide. It's written, built on evidence, and actually used. That puts you in rare company. Your job now is enforcement: keeping the filter tight as you add salespeople, and having the discipline to walk away from bad-fit revenue. Most founders at your level still find one or two leaks.{% elsif score >= 6 %}You have a sketch, not a profile. You know roughly who buys from you, but roughly doesn't scale. You can feel a good fit in your gut. Your salespeople can't. Until your ICP is written down and enforced in your CRM, every person you hire will sell to a slightly different customer.{% else %}You're selling to everyone, which is selling to no one. Right now, anyone with a pulse and a budget can get into your pipeline. That's why deals stall and follow-ups go quiet. The fix isn't more leads. It's a filter. And the data to build it is already sitting in your closed deals.{% endif %}

Each NO you answered is a leak in your filter. Not a personal failure. A leak.

Over the next few weeks I'll send you short emails on how to plug them: building the profile from your real deals, writing disqualifiers, spotting trigger events, and wiring it all into your CRM.

Hit reply and tell me: which check stung the most?

I read every reply.

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

P.S. If you'd rather skip ahead and talk it through, grab 30 minutes with me here: https://calendly.com/louiebernstein/30minutes

---

## Email 2 — 1 day later

**Subject:** Selling to everyone is selling to no one

{{ subscriber.first_name }},

Ask a founder who their ideal customer is and you'll usually hear some version of:

"Well, anyone who needs X, really."

That answer feels safe. A bigger market means more chances to win, right?

Wrong. Here's what "anyone" actually gets you:

- Reps chasing deals that were never going to close
- Discovery calls with people who can't buy
- A pipeline that looks full and closes empty
- Marketing messages so broad they move nobody

Your best customers have a pattern. Industry. Size. The problem that made them pick up the phone. The title that signed.

When you know the pattern, everything sharpens: the pitch, the list, the close rate.

Here's the full walkthrough of what a real ICP looks like:
https://louiebernstein.com/how-to-create-an-ideal-customer-profile

Next email: where to find your pattern. (Spoiler: you already have it.)

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 3 — 2 days later

**Subject:** Your ICP is hiding in your closed deals

{{ subscriber.first_name }},

Founders overthink this. You don't need market research or a strategy retreat to build your ICP.

You need a spreadsheet and an afternoon.

Pull your last 20 closed-won deals. For each one, write down:

- Company size (employees and revenue)
- Industry
- The title of the person who championed you
- What was going on when they started looking (the trigger)
- How long the deal took
- What they paid

Then sort by deal size and read the top half. The pattern will jump off the page. That pattern is your ICP. Built from evidence, not hope.

While you're in there, look at your worst deals too. What did THEY have in common? That's your disqualifier list. More on that next time.

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 4 — 3 days later

**Subject:** The most profitable word in sales: no

{{ subscriber.first_name }},

The strongest part of an ICP isn't who you sell to.

It's who you refuse to sell to. In writing.

Every founder has taken a customer they knew was wrong. Too small. Wrong industry. Endless demands. You took the revenue anyway. And then paid for it for two years in support tickets, discounts, and churn.

Bad-fit customers aren't just annoying. They're expensive:

- They take longer to close
- They pay less
- They complain more
- They leave sooner

Write down three hard disqualifiers. Company traits that end the conversation, no matter how eager the prospect is. Then give your team permission to use them.

Walking away from bad-fit revenue isn't losing a deal. It's buying back your team's time to close good ones.

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 5 — 3 days later

**Subject:** Right customer, wrong time

{{ subscriber.first_name }},

A perfect-fit company that isn't feeling any pain won't buy. Not because your product is wrong. Because the timing is.

That's why a complete ICP includes trigger events: the things that turn a good-fit company into a ready-to-buy company.

Common triggers:

- A new executive walks in with a mandate
- They just raised money
- A key employee quit and took the process with them
- They lost a big customer and need to fix why
- A compliance deadline is coming

Go back to your closed-deal spreadsheet. What was happening at each company right before they bought? List the top five. Those are your triggers.

Then train everyone who sells to ask about them in the first call. Fit gets a prospect on the list. Trigger gets them on the calendar.

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 6 — 3 days later

**Subject:** A slide nobody reads vs. a filter nobody can skip

{{ subscriber.first_name }},

Most companies that "have an ICP" have a slide. It got presented once. Everyone nodded. Nobody has looked at it since.

A slide changes nothing. A filter changes everything.

The difference is enforcement:

- Required CRM fields that must be filled before a deal can enter the pipeline: size, industry, title, trigger
- A qualification checkbox a rep can't skip
- Deals that don't fit get killed in the first stage, not the fifth month

When the ICP lives in your CRM instead of a slide deck, you stop depending on anyone's judgment on a busy Friday. The system does the filtering.

That's also when your pipeline numbers start telling the truth.

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 7 — 3 days later

**Subject:** Watch me build an ICP from scratch

{{ subscriber.first_name }},

If you're more of a watcher than a reader, this one's for you.

Defining your ICP is Step 2 of my Founder's Sales System course. In the video I walk through exactly how to pull the profile out of your existing customers, question by question.

Watch it here (free, no catch):
https://www.youtube.com/watch?v=RuC-3vjtl6s

The whole 20-step course is on my site: https://louiebernstein.com/course

And if you'd rather build it together in a working session instead of solo, that's literally what I do: https://calendly.com/louiebernstein/30minutes

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 8 — 4 days later

**Subject:** "Won't narrowing my market shrink my revenue?"

{{ subscriber.first_name }},

This is the fear that keeps founders selling to everyone:

"If I narrow my focus, I'm leaving money on the table."

Here's what actually happens when you tighten the ICP:

The 20% of prospects who fit produce most of your revenue anyway. You already know this from your own numbers. Focusing on them means faster cycles, higher close rates, better pricing, and customers who stay.

The deals you "lose" by narrowing are mostly deals that were never going to close. They just hadn't told you yet. They were going to cost you six months of follow-up first.

Narrowing doesn't shrink revenue. It shrinks waste.

The table is not where your money is. Your best-fit customers are.

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 9 — 4 days later

**Subject:** The foundation everything else sits on

{{ subscriber.first_name }},

Here's why I start every engagement with the ICP, no matter what the founder thinks the problem is.

Every sales system you'll ever build sits on it:

- The playbook scripts conversations with your ICP
- The outbound lists are pulled from your ICP
- The pipeline stages qualify against your ICP
- The salespeople you hire are chosen for your ICP

Get the foundation wrong and everything above it wobbles. Get it right and the rest of the machine almost designs itself.

A consultant hands you a map and wishes you luck. A fractional sales leader gets in the car and drives with you. I build the ICP with founders from their real closed deals, then wire it into the CRM, the playbook, and the hiring, in about 90 days, at about a quarter of the cost of a full-time VP.

What that looks like week to week:
https://louiebernstein.com/fractional-sales-leader

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

---

## Email 10 — 3 days later

**Subject:** Take the checklist again in 90 days

{{ subscriber.first_name }},

You scored {{ subscriber.icp_score }} out of 15 about a month ago.

Here's my challenge: retake the checklist in 90 days. https://louiebernstein.com/icp-checklist

If you do nothing, your score will be the same. Fuzzy targeting doesn't fix itself.

If you'd rather it be different, two honest options:

1. Build it yourself. Start with the spreadsheet from my earlier email, and my free course: https://louiebernstein.com/course
2. Build it with me, part-time, from your real deal data: https://calendly.com/louiebernstein/30minutes

Either way, build it. Every stalled deal in your pipeline is asking you to.

I'm rooting for you.

Louie Bernstein
Fractional Sales Leader
https://www.linkedin.com/in/sales-processes/

P.S. This is the last email in this series. You'll still get my occasional sales-building notes, and you can unsubscribe anytime.
