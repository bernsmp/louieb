/**
 * Seed script: Will a Fractional Sales Leader Force a One-Size-Fits-All Playbook on My Unique Business?
 * - seoOneSizeFitsAllPlaybook → /will-fractional-sales-leader-force-one-size-fits-all-playbook
 *
 * Run with:
 * NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-one-size-fits-all-playbook.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const sections = {
  seoOneSizeFitsAllPlaybook: {
    // Hero
    heroTag: 'Customization, Not Cookie-Cutter',
    heroLine1: "Will a Fractional Sales Leader Force a ‘One-Size-Fits-All’ Playbook",
    heroAccent: 'on My Unique Business?',
    heroH2: "I don't want to lose control of our unique identity and sales DNA",
    heroDescription:
      "For $1M–$10M ARR founders worried that an outsider will erase what makes their business different. Short answer: no — a real Fractional Sales Leader codifies your DNA, they don't overwrite it.",

    // Key Takeaways
    takeawaysHeading: 'Key Takeaways',
    takeaway1:
      "No — a good Fractional Sales Leader does the opposite. They extract your sales DNA into a written playbook, then enforce it. The playbook is built around your business, not around a template.",
    takeaway2:
      "Generic frameworks fail because every $1M–$10M ARR business sells a different product to a different buyer in a different way. The job of the FSL is to codify what makes you different, not to erase it.",
    takeaway3:
      "The first 30 days of a real engagement is observation: shadowing your calls, reading your closed deals, interviewing your customers. Nothing gets installed until the founder motion is understood.",
    takeaway4:
      "Customization happens in the language, the qualification criteria, the objections, the ICP definition, the pricing posture, and the closing cadence. Those are the parts of selling that are uniquely yours.",
    takeaway5:
      "If a fractional leader walks in week one with a generic template, fire them. The right person walks in with questions, not answers — and walks out with a playbook that sounds like you wrote it.",

    // How Customization Actually Works — 5 components
    sectionComponentsHeading: 'How a Real Fractional Leader Customizes — Step by Step',
    sectionComponentsSubheading:
      'Customization is the work. The methodology is observation, codification, and refinement — never importation.',

    comp1Title: 'They Observe Before They Install',
    comp1Detail:
      "The first two to three weeks of a real Fractional Sales Leader engagement is pure observation. They listen to recorded calls, read closed-won and closed-lost deal notes, sit through your live demos, and interview your best customers. They are not pitching frameworks. They are decoding the founder motion — the language you use, the questions you ask, the objections you defuse without thinking, the moments where the buyer leans in. The job is to find your sales fingerprint, not to overwrite it.",
    comp1Outcome:
      'A documented map of how your business actually wins deals — before a single change is made to the process.',

    comp2Title: 'They Codify Your DNA, Not a Template',
    comp2Detail:
      "Once the founder motion is understood, it gets written down. The Ideal Customer Profile uses your real disqualifiers, not a generic checklist. The discovery questions are the ones you actually ask. The objection responses are the ones that have worked for you. The pricing posture matches your positioning. The proposal structure mirrors what your buyers expect. The result is a 20-to-40-page playbook that any rep can run from — and that reads like you sat down and wrote it yourself, because it captures the way you sell.",
    comp2Outcome:
      'A playbook your reps can execute on day one — that preserves your voice, your standards, and the specific way your customers like to buy.',

    comp3Title: 'They Customize the Operating Cadence Around You',
    comp3Detail:
      "Every business has its own rhythm. Some sell on a 30-day cycle, others on six months. Some run weekly forecasts, others bi-weekly. Some founders want to stay in the closing conversations, others want out completely. A good Fractional Sales Leader builds the pipeline review, the weekly meeting, the deal review, and the accountability document around your cadence and your involvement level — not a generic operating system imported from a previous engagement.",
    comp3Outcome:
      'A management rhythm that fits how you actually run the business — with the founder in the loop where it adds value and out of the loop where it does not.',

    comp4Title: 'They Adapt to Your Buyer, Not the Other Way Around',
    comp4Detail:
      "Your buyer is not the same as the next company's buyer. A founder selling enterprise software to CFOs runs nothing like a founder selling field services to plant managers. The sales motion has to match the buyer — the cadence of follow-up, the format of the proposal, the role of price, the use of demos, the role of references, the legal cycle, the procurement steps. A real FSL builds around the actual buyer your business sells to. A weak one tries to retrofit your buyer into a generic B2B SaaS framework that was never going to fit.",
    comp4Outcome:
      "A sales process tuned to your buyer's behavior — so deals move forward at the cadence your customers actually buy on.",

    comp5Title: 'They Make Customization Reviewable and Reversible',
    comp5Detail:
      "Every customized element of the playbook is documented and open to revision. The qualification criteria can be tightened. The objection responses get updated as the market shifts. The ICP gets refined every 90 days based on win/loss data. Customization is not a one-shot configuration — it is an ongoing relationship between what the data shows and what the founder knows. A real FSL builds the feedback loop into the system from day one.",
    comp5Outcome:
      'A living playbook that gets sharper every quarter — and a founder who keeps their hand on the strategic decisions without being stuck in every deal.',

    // SEO paragraphs
    seoPara1:
      "The fear of losing your sales DNA is the single most common objection founders raise when considering a fractional leader — and it is also the most misplaced. The whole reason the fractional model exists is because $1M–$10M ARR businesses are not interchangeable. A template that works at a 200-person SaaS company will collapse inside a 12-person services business. A real Fractional Sales Leader treats your existing sales motion as the source material — not as a problem to be replaced. They are not bringing a playbook with them. They are building yours.",
    seoPara2:
      "If you want to understand the actual artifact that gets built — what a real playbook contains and why it is the foundation of a customized system — read",
    seoPara2b:
      ". And if you want to see exactly how a Fractional Sales Leader spends their time inside an engagement — the observation, the extraction, the iteration — start with",
    seoPara2c: '. The system gets built around you. That is the entire point.',

    // Comparison table
    sectionCompareHeading: 'Template-First vs. Founder-First',
    sectionCompareSubheading:
      'Two very different approaches walk through your door with the same job title. The difference shows up in the first week.',
    compareColLeft: 'Template-First (Avoid)',
    compareColRight: 'Founder-First (Hire This)',
    compare1Without: 'Imports a template and renames the fields',
    compare1With: 'Observes for 2–3 weeks before installing anything',
    compare2Without: 'Uses generic B2B SaaS qualification criteria',
    compare2With: 'Builds qualification criteria from your closed-won deals',
    compare3Without: 'Forces your buyer into a pre-built pipeline',
    compare3With: "Builds pipeline stages around your buyer's actual journey",
    compare4Without: "Erases the founder's voice in the messaging",
    compare4With: "Codifies the founder's voice into a repeatable script",
    compare5Without: 'One operating cadence applied to every client',
    compare5With: 'Cadence customized to your team size and rhythm',
    compare6Without: 'Playbook is locked — take it or leave it',
    compare6With: 'Playbook is reviewed and refined every 90 days',

    // Customization Layers (3)
    sectionLayersHeading: 'The Three Layers That Get Customized to You',
    sectionLayersSubheading:
      'These are the parts of selling that are uniquely yours — and they are the parts a real Fractional Sales Leader builds around, not over.',
    layer1Title: 'Your Language and Positioning',
    layer1Detail:
      "The exact words your buyers respond to are not transferable from another business. The phrases that surface urgency in your market, the proof points that earn trust, the analogies that make the product click — these get pulled directly from your closed-won calls and written into the playbook verbatim. Reps do not invent new positioning. They run the positioning that already works.",
    layer2Title: 'Your ICP and Disqualifiers',
    layer2Detail:
      "Generic ICPs say 'mid-market B2B' and move on. A real ICP, customized to your business, names the industry, the revenue band, the buying role, the trigger event, the tech stack indicator, and the three things that disqualify a deal in the first call. Those disqualifiers are pulled from the deals you have lost, not from a frameworks deck. They become required fields in your CRM so reps cannot ignore them.",
    layer3Title: 'Your Operating Rhythm and Founder Involvement',
    layer3Detail:
      "How often do you want to review the pipeline? What deal size triggers your involvement? When does a rep escalate, and when do they own the call? A customized engagement defines all of this in writing — based on your preferences and the realities of your team — instead of importing a one-size cadence from someone else's playbook.",

    // About
    aboutBio1:
      "I'm Louie Bernstein. I have 50 years of business experience, including 22 as a bootstrapped founder. My Fractional Sales Leadership business has been helping founders since 2017.",
    aboutBio2:
      "I do not bring a template. I bring a method — observation, extraction, codification, iteration — and the playbook that comes out of an engagement is unmistakably yours. Most engagements install a customized sales system in 60 to 90 days that preserves the founder's voice and removes the founder's bottleneck at the same time.",

    // FAQs
    faq1Question:
      "Won't a fractional leader try to make my business look like every other client they've worked with?",
    faq1Answer:
      "A weak one will. A strong one does the opposite — they spend the first two to three weeks observing how you actually sell, then write the playbook around your sales motion. The reason fractional leaders exist is because $1M–$10M ARR businesses are too unique for off-the-shelf systems. The right person sees customization as the whole job, not a step on the way to a template.",

    faq2Question:
      "How do I tell in the first conversation whether a fractional leader will customize or just import a template?",
    faq2Answer:
      "Ask them to walk you through the first 30 days of an engagement. If they describe observation work — shadowing calls, reading closed deals, interviewing customers — you are talking to someone who customizes. If they describe installing frameworks, configuring a CRM template, or rolling out their methodology, you are talking to someone who templates. Then ask: 'What was the most surprising thing about the last engagement you ran?' A customizer can answer that question in detail. A templater cannot.",

    faq3Question:
      "What about my brand voice, my customer relationships, my reputation — does any of that change?",
    faq3Answer:
      "Not the parts that work. The whole point of codifying your sales motion is to preserve it as the team grows. Your voice, your customer relationships, and your reputation are assets — they get written into the playbook as the standards every rep is held to. What changes is the dependency on you personally to enforce them. The standards become the system. You stop being the only person who can hold the line.",

    faq4Question: 'How long does the customization process take?',
    faq4Answer:
      "Roughly 30 days of observation and extraction, followed by 30 to 60 days of installation. By day 60 you should have a playbook in writing, a CRM configured to match, qualification criteria enforced in the pipeline, and an accountability document in place. The playbook then gets refined every 90 days based on what the win/loss data shows. Customization is not a one-time event — it is an ongoing relationship between your business and the system.",

    faq5Question:
      "What happens if the customization is wrong — if the playbook does not match how my buyer actually buys?",
    faq5Answer:
      "The playbook is reviewed and revised every 90 days. Any field, any stage, any qualification criterion, any objection response is open for change based on what the data shows. The point of a real engagement is to build a living system, not a frozen artifact. If something is not working, it gets fixed. The founder always has veto power. The playbook is yours, not the fractional leader's.",

    // CTA
    ctaHeadline: 'Your Business Is Not a Template. The Playbook Should Not Be Either.',
    ctaDescription:
      "In 30 minutes I can walk you through how the customization process actually works — and show you what a playbook built around your business looks like vs. a template imported from somebody else's.",
  },
}

async function seed() {
  for (const [section, content] of Object.entries(sections)) {
    const { error } = await supabase
      .from('site_content')
      .upsert({ section, content }, { onConflict: 'section' })

    if (error) {
      console.error(`❌ ${section}:`, error.message)
    } else {
      console.log(`✅ ${section}`)
    }
  }
  console.log('Done.')
}

seed()
