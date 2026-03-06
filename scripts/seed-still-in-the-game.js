/**
 * Seed script: adds the "Still In The Game" page content to Supabase.
 * Run once with: node scripts/seed-still-in-the-game.js
 *
 * After seeding, edit content any time at louiebernstein.com/cms
 * → site_content → section: stillInTheGame
 */

require("dotenv").config({ path: ".env.local" });
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const content = {
  heroHeadline: "Still In The Game",
  heroSubheadline: "The Decisions That Actually Keep You There",
  heroTagline:
    "Five decades. Five decisions. One framework you can use today. Each chapter closes with prompts built to run in Claude.",

  // ── Add your YouTube video ID here when your video is ready ──
  videoId: "",

  // ── Pricing ──
  price: "47",

  // ── Add your Stripe payment link URL here when Stripe is set up ──
  buyButtonUrl: "",
  buyButtonText: "Buy Now — $47",

  // ── Hook section ──
  hookHeadline:
    "Most business advice is written by people who haven't finished the race yet.",
  hookBody:
    "They're successful. They're smart. But they're still in the middle of it. They haven't hit the decisions that only come after decade two or three. The ones nobody talks about honestly because they're still too close to them.",
  hookCalloutHeadline:
    "Louie Bernstein is 74. He built a company from scratch that ran for 22 years and made the INC 500. He survived 9/11, a burnout, a depression diagnosis, and about forty other things that should have ended everything.",
  hookCalloutBody:
    "He finished the race. Then he started again. This is what he learned.",

  // ── About section ──
  aboutBio1:
    "Louie Bernstein launched his first company in 1986 with a broken vertebra, a two-year-old at home, a second child weeks away, and life savings already spent. MindIQ ran for 22 years, made the INC 500, and survived everything from 9/11 to a full founder burnout.",
  aboutBio2:
    "After stepping away in 2015, he took a Chief Sales Officer role at a Georgia Tech startup and grew sales 52% per year for three years. When that chapter ended, he built what he would have hired during his own hardest years — a Fractional Sales Leadership practice for bootstrapped founders.",
  aboutBio3:
    "At 74, he is still going. Not because he has to be. Because he knows exactly what he is doing now.",

  // ── Closing quote ──
  closingQuote:
    "Nobody arrives at the end of their life wishing they had taken fewer chances.",
};

async function seed() {
  console.log("Seeding stillInTheGame content to Supabase...");

  const { error } = await supabase.from("site_content").upsert(
    { section: "stillInTheGame", content },
    { onConflict: "section" }
  );

  if (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }

  console.log("✅ Done! Content is now editable in the CMS.");
  console.log("   → louiebernstein.com/cms");
  console.log("   → Look for section: stillInTheGame");
}

seed();
