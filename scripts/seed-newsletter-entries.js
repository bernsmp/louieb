/**
 * Seed script: imports the hardcoded SUNDAY_STARTERS array into the
 * newsletter_entries Supabase table.
 *
 * Run ONCE (after creating the table via the SQL migration):
 *   node scripts/seed-newsletter-entries.js
 *
 * The script is idempotent — it deletes all existing rows first, then re-inserts
 * the full list. Safe to re-run.
 *
 * After seeding, manage entries at /cms/newsletter-entries (no more code edits).
 */

require("dotenv").config({ path: ".env.local" });
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Mirror of SUNDAY_STARTERS from app/(site)/site-map/page.tsx.
// Position in array = display_order (lower = appears higher on /site-map).
const SUNDAY_STARTERS = [
  { title: "Why gratitude feels broken", url: "https://youtu.be/nK-yzDOgd1Q" },
  { title: "I'm 74", url: "https://youtu.be/KBnTClY9Jks" },
  { title: "Staying calm when business gets tough", url: "https://youtu.be/QKlY97yU-wk" },
  { title: "The moment everything turned around", url: "https://youtu.be/XTvYFFmYi94" },
  { title: "The Monday Morning Audit Explained", url: "https://youtu.be/L5ZSUv_IsGM" },
  { title: "Put out the burnout", url: "https://youtu.be/oMzqZ65MFu4" },
  { title: "you're stronger than you think", url: "https://youtu.be/oPmiPk_TSns" },
  { title: "Why Founders Stop Growing", url: "https://youtu.be/Kg9KXivquEU" },
  { title: "The Secret To A Career With No Regrets", url: "https://youtu.be/Qu5-SKy0ZU0" },
  { title: "How founders really dominate", url: "https://youtu.be/uMHOq3KQKNw" },
  { title: "The 3-Step fix to pressure", url: "https://youtu.be/xz3IPXHTcwE" },
  { title: "Why resilience is key", url: "https://youtu.be/VMIwzlx5UzM" },
  { title: "Why Your Character Is Your Real Resume", url: "https://youtu.be/olTiHsrj1xM" },
  { title: "Some people know what they are talking about. Some don't.", url: "https://youtu.be/OSMkaQt-vrM" },
  { title: "The plan that almost destroyed me", url: "https://youtu.be/THo1yNaX5lQ" },
  { title: "The lie that is holding you back", url: "https://youtu.be/JWUFp_apcsA" },
  { title: "Fix it now", url: "https://youtu.be/qpoDfMP9FuM" },
  { title: "No One Becomes Excellent by Accident (The Truth Hurts)", url: "https://youtu.be/4-yzOX4bl_o" },
  { title: "How I Built Success in 30 Minute Chunks", url: "https://youtu.be/9KrYUE-XGnQ" },
  { title: "The Real Reason You’re Not Getting Results Yet", url: "https://youtu.be/At5NWonnmUY" },
  { title: "Why you don't want to win every single argument", url: "https://youtu.be/elnToQpTzgA" },
  { title: "The hiddenn cost of working past 7pm", url: "https://youtu.be/utgFzwCtFNc" },
  { title: "Stop Letting Fear Run Your Life Act Now Before it's Too Late", url: "https://youtu.be/p4QhSku3UAA" },
  { title: "Choose your own path", url: "https://youtu.be/W2oayT4ot0c" },
  { title: "Beat pressure with these tips", url: "https://youtu.be/SDpwHK9GmNU" },
  { title: "Your part in the Universe: How to make the most o", url: "https://youtu.be/8Nj_cF8TPNY" },
  { title: "I am in control", url: "https://youtu.be/297a-F8PjNc" },
  { title: "Just say no to beo happy", url: "https://youtu.be/j_yC5LxiKYU" },
  { title: "Why resilience wins every time", url: "https://youtu.be/CCblX9F2hzA" },
  { title: "How to beat decision fatigue", url: "https://youtu.be/xtqRfw0hMWc" },
  { title: "Transform your grind into growth", url: "https://youtu.be/2BetP914iL8" },
  { title: "I turned 73 today", url: "https://youtu.be/3qexRYuBvdA" },
  { title: "Is life's uncertainty worrying you? Watch this!", url: "https://youtu.be/z76eRONLYVw" },
  { title: "The truth about courage", url: "https://youtu.be/1IUPkOaQ_p0" },
  { title: "I'm as mad as hell and I'm not going to take it", url: "https://youtu.be/0zQVafuuQrI" },
  { title: "Hope and Inspiratoin", url: "https://youtu.be/Daeq0whIMLE" },
  { title: "Fear is a choice. Winning is too.", url: "https://youtu.be/givRPxje5QU" },
  { title: "Here's the third secret to success", url: "https://youtu.be/qDe55UCRQsM" },
  { title: "The phrase that KILLS your dreams", url: "https://youtu.be/cSYO7xRkoT8" },
  { title: "Your best is waiting for you to respond - IT’S NEVER TO", url: "https://youtu.be/-T1cXxsgiIk" },
  { title: "The Hidden Power of Flexible Intent vs Rigid Goals", url: "https://youtu.be/PFFi0ONCodQ" },
  { title: "Day one. The ‘Day One’ Secret That 90% of People Miss", url: "https://youtu.be/VfZPWah4Kmc" },
  { title: "The truth about motivation", url: "https://youtu.be/MQsgmN9APvM" },
  { title: "Fear and worry can lead  you to success Reposted 3-30-2025", url: "https://youtu.be/2Bhab8WT0xQ" },
  { title: "How Silence makes you more money", url: "https://youtu.be/M62V7Bpb-as" },
  { title: "5 Steps To Excellence Plus One Critical Path", url: "https://youtu.be/6UrDfiNyqjQ" },
  { title: "Learning like a Pro:3 Hacks", url: "https://youtu.be/1yX_-nu8WjU" },
  { title: "Stop killing your business with worry", url: "https://youtu.be/x3YkMeGz3io" },
  { title: "Break Free From the burden of responsibility", url: "https://youtu.be/4VNrVPxFwi8" },
  { title: "Conquering Anxiety", url: "https://youtu.be/IMW4MQH9oWI" },
  { title: "Negative thinking", url: "https://youtu.be/-7w2QAElCbk" },
  { title: "Your to-do list is lying to you. Mental clarity", url: "https://youtu.be/TotiR7XgHIY" },
  { title: "Quiet doesn’t mean weak in business—it means strategic", url: "https://youtu.be/mP6W7y5ci_M" },
  { title: "The frog - job burnout", url: "https://youtu.be/o1RBna-_7A8" },
  { title: "Why the fear of the unknown", url: "https://youtu.be/FPeuw3-UNXg" },
  { title: "How to Stay Disciplined and Achieve Success in Business", url: "https://youtu.be/6hy-TnTsqTA" },
  { title: "Focus Pocus - Surfing the chaos", url: "https://youtu.be/p-ncanNb_nU" },
  { title: "How to fix fear of failure", url: "https://youtu.be/cR2Fhu3kb3w" },
  { title: "peronal pervasive permanent", url: "https://youtu.be/707SFaAL43c" },
  { title: "Are you frustrated", url: "https://youtu.be/XPrkwKZUMGg" },
  { title: "Overcoming rejection", url: "https://youtu.be/3p56nhZU1xo" },
  { title: "Open Up", url: "https://youtu.be/0yCL8CE_mM8" },
  { title: "The hardest word to say, in any language, is No.", url: "https://youtu.be/OHqCFY_Wvik" },
  { title: "Hope", url: "https://youtu.be/fC1AVkLt654" },
  { title: "How to make big decisions", url: "https://youtu.be/8f4IURurQm8" },
  { title: "The hidden power of routines", url: "https://youtu.be/lwPzP-gWOi0" },
  { title: "Power to persevere", url: "https://youtu.be/FYdXB1xFuF4" },
  { title: "The Empathy Advantage", url: "https://youtu.be/YX0-EUYiCUk" },
  { title: "From Resentment to Contentment", url: "https://youtu.be/kObmkJn4kCs" },
  { title: "Hitting a wall?  3 tips to bounce back.", url: "https://youtu.be/swAC0x-9mdw" },
  { title: "criticize blame complain", url: "https://youtu.be/4NMNmoh42q8" },
  { title: "I NEVER Had Work-Life Balance: Now I Know Why", url: "https://youtu.be/QBKKCROZ8kU" },
  { title: "Failing to fail", url: "https://youtu.be/vDf-5fXgMDk" },
  { title: "The power of intention", url: "https://youtu.be/5ghw3ysnFkE" },
  { title: "Listen to your heart beat", url: "https://youtu.be/rWUZBwl45Ns" },
  { title: "Depression", url: "https://youtu.be/rePIdkn6qzc" },
  { title: "How to change for the good", url: "https://youtu.be/yp_a8hGi3bI" },
  { title: "How to rid yourself of self-doubt", url: "https://youtu.be/d1W4_jI1QB0" },
  { title: "Ambition and happiness", url: "https://youtu.be/M55ZxUCrgTw" },
  { title: "The present", url: "https://youtu.be/_5mzcQZVEmg" },
  { title: "Attitude is everything", url: "https://youtu.be/iMZDqcuWXqU" },
  { title: "The $1 million postcard", url: "https://youtu.be/zH4REztpMQc" },
  { title: "What's old is new. And it's me", url: "https://youtu.be/RHbxoxqOEdM" },
  { title: "All Aboard - how to future-proof yourself", url: "https://youtu.be/pxg8X_3GECo" },
  { title: "How lifelong learning will grow your business", url: "https://youtu.be/D7IwwGaQpKM" },
  { title: "Why you sould stop cricizing others", url: "https://youtu.be/l7VCA5dg_Q0" },
  { title: "Why consistency and patience are important in life: ", url: "https://youtu.be/OJ7DCcOHpYU" },
  { title: "Time tested path to victory", url: "https://youtu.be/VGVW7-WOJ7o" },
  { title: "find peace on paper - journaling", url: "https://youtu.be/nx3MpW9iZiE" },
  { title: "Bend. Don't break", url: "https://youtu.be/0AjvxT1QfoM" },
  { title: "Start small, Aim big", url: "https://youtu.be/3RG5P67Coac" },
  { title: "Grieve then crush your goals", url: "https://youtu.be/tWHpYr_sp_w" },
  { title: "Toough times call for tough mindsets", url: "https://youtu.be/slXoweQlBmw" },
  { title: "Your happy age", url: "https://youtu.be/S5JyJ5d27qQ" },
  { title: "It is what it is", url: "https://youtu.be/1AFXY5NCnWs" },
  { title: "Maintaining Friendships: Essential Tips For A Stronger Bond:", url: "https://youtu.be/Jg-e6kH6hCY" },
  { title: "Being usefull", url: "https://youtu.be/fylSkBoiAPU" },
  { title: "The happiness problem", url: "https://youtu.be/caWfN4GEtQ8" },
  { title: "You are worthy - impostor syndrome", url: "https://youtu.be/OVNzE9bTphk" },
  { title: "How to be happy", url: "https://youtu.be/hGgrYKvJRlE" },
  { title: "Excellence: How to do everything better", url: "https://youtu.be/ULXaeKfL2zQ" },
  { title: "Help!", url: "https://youtu.be/bZgxYghho6w" },
  { title: "Process this", url: "https://youtu.be/Vk5n26VFsXM" },
  { title: "The 4 step anxiety annhiliator system", url: "https://youtu.be/kWqjuWFaASQ" },
  { title: "Carry on - time to fight back", url: "https://youtu.be/alNIp6W4P54" },
  { title: "You have years of success ahead of you", url: "https://youtu.be/6R1EV_TjEGY" },
  { title: "You're closer than you think", url: "https://youtu.be/uHXXqYx-0M8" },
  { title: "4 steps to finding motivation and Inspiration", url: "https://youtu.be/u2u7n_4Jnxw" },
  { title: "Perseverance and resilience", url: "https://youtu.be/-Zxz3ig-TdI" },
  { title: "67% don't know discipline", url: "https://youtu.be/oFTLhM4zlFI" },
  { title: "Money Needs? Pay attention", url: "https://youtu.be/DD-dlPXqQog" },
  { title: "Rough week?", url: "https://youtu.be/WbIiSuhW7ts" },
  { title: "Master Your Skills And Level Up Like A Pro ", url: "https://youtu.be/qiKDqQvj8Vw" },
  { title: "Bad Decisions", url: "https://youtu.be/MLhoV9e0UpU" },
  { title: "My Inspiring Drive to Success", url: "https://youtu.be/S9kKdnQWMKk" },
  { title: "The secret to your motivation", url: "https://youtu.be/Dl4RfH6lAgw" },
  { title: "Self-doubt crushing dreams", url: "https://youtu.be/KfJsH1lQQdo" },
  { title: "Passion and alignment", url: "https://youtu.be/8Ckg9vQG7mo?si=kUoQ-DO8JDSRug_j" },
  { title: "Power of 20", url: "https://youtu.be/JzWQzz4eM9A" },
  { title: "Pandora", url: "https://youtu.be/xakIScysbY0" },
  { title: "Money grows where focus goes", url: "https://youtu.be/Uz1aoAcdeqM" },
  { title: "Depression in business", url: "https://youtu.be/k1Isd_sj0bU" },
  { title: "Your control panel", url: "https://youtu.be/q7YYZ_RnD3U" },
  { title: "Motivate yourself and succeed", url: "https://youtu.be/FRjlGp75duo" },
  { title: "Become The Resilient Achiever:", url: "https://youtu.be/8SuJhiCAbrQ" },
  { title: "What Ben Franklin taaught me", url: "https://youtu.be/Ul4ebLvsUgo" },
  { title: "never give up on your dreams", url: "https://youtu.be/MPU8T6C1reE" },
  { title: "Work-Life balance", url: "https://youtu.be/Xta27npcq9Q" },
  { title: "Start Where You Are, with What You Have", url: "https://youtu.be/AQNUp2GKds4" },
  { title: "How to Turn Your Bad Week into a Great Year ", url: "https://youtu.be/WbIiSuhW7ts" },
  { title: "How to Run Your Business Like an Ultra-Marathoner", url: "https://youtu.be/LURm3X9zlOo" },
  { title: "4 Steps to Prepare for Any Change", url: "https://youtu.be/BsJyoqYHbFo" },
  { title: "5 Tips to Build Empathy", url: "https://youtu.be/voA9SWehaC8" },
  { title: "3 simple steps to get rid of worrying", url: "https://youtu.be/e_JDsMNnFXw" },
  { title: "How tto Master Anything with One", url: "https://youtu.be/WQCsqW-c43E" },
  { title: "Joy to your world", url: "https://youtu.be/ffSJ6uQOr2M" },
  { title: "Self-Care: The Secret to Success", url: "https://youtu.be/3L3lkOoUsXU" },
  { title: "How I Overcame Anxiety and Built a Successful Business", url: "https://youtu.be/2BJvc8hkyDY" },
  { title: "The 4 Core Values That Changed My Life", url: "https://youtu.be/muRSFkYP3cU" },
  { title: "7 steps to Stress Less and thrive", url: "https://youtu.be/UoM3pv0eIm4" },
  { title: "How to Be Lucky and Successful in Life", url: "https://youtu.be/Woxw5E_ZwC4" },
  { title: "The 3-Step Process to Get Rid of Frustration", url: "https://youtu.be/2WTiKkIajc4" },
  { title: "The Commitment To Be Successful", url: "https://youtu.be/30WL3gQoSI4" },
  { title: "How I quit my job and made 10x", url: "https://youtu.be/GDvskiiNBEM" },
  { title: "The Commitment To Be Successful", url: "https://youtu.be/30WL3gQoSI4" },
  { title: "How to master anything in 4 steps", url: "https://youtu.be/G0RaApZfsRs" },
  { title: "How Curiosity Can Boost Your Business and Life", url: "https://youtu.be/FMiFVNPquPo" },
  { title: "The power of confidence and experience", url: "https://youtu.be/EVG7WIPZBFM" },
  { title: "How to Avoid Anxiety and Get into Flow", url: "https://youtu.be/Kk3d8gMXDAg" },
  { title: "How to Stop Wasting Time and Achieve Your Goals", url: "https://youtu.be/nSLsI7o4-Jk" },
  { title: "Why sleeping 8 hours a night", url: "https://youtu.be/vvfuYMakJCo" },
  { title: "How to Balance Work and Life without Feeling Guilty", url: "https://youtu.be/M3-IopqbOuw" },
  { title: "Why envy is a poison", url: "https://youtu.be/pSVxoUU-woE" },
  { title: "How I Learned to Live in the Present and Make Better Decisions", url: "https://youtu.be/sZS_ZQRDCZA" },
  { title: "How to win in business with tenacity", url: "https://youtu.be/3SqgC7juzUs" },
  { title: "How to achieve any goal with determination", url: "https://youtu.be/e3Ek7b1DWFI" },
  { title: "14 minutes to greatness", url: "https://youtu.be/J_xvnmZOpvE" },
  { title: "Yesterday's gone", url: "https://youtu.be/47oxZp4qTw0" },
  { title: "What you think of me is none of my business", url: "https://youtu.be/TQmfqugPWA8" },
  { title: "don't be the schmuck", url: "https://youtu.be/M5WYWYbe8e0" },
  { title: "The secret weapon fo founders", url: "https://youtu.be/luB2bewWQPI" },
  { title: "The Best Time to Start a Business is Now", url: "https://youtu.be/YFhkj_NNE8w" },
  { title: "Build resilience and courage", url: "https://youtu.be/v1WDtw5Fajw" },
  { title: "master  your day with journaling", url: "https://youtu.be/narB4fWZjzg" },
  { title: "The power of patience", url: "https://youtu.be/4c1iN_88P8c" },
  { title: "The 3-Step Movement Plan for Success:", url: "https://youtu.be/kYYmw7PldVQ" },
  { title: "4 signs of burnout", url: "https://youtu.be/G3OOrKvBq1w" },
  { title: "How To Increase Your Willpower And Self-Control:", url: "https://youtu.be/q2i37eAklqg" },
  { title: "How firing my best salesperson was my best decision", url: "https://youtu.be/xYbDhoP9AgE" },
  { title: "The day my boss turned into a con man", url: "https://youtu.be/jF7AaopA-Qk" },
  { title: "How to Turn Negative Feedback into Success", url: "https://youtu.be/RDUC2ubmgT8" },
  { title: "How to Succeed After 1,000 Rejections", url: "https://youtu.be/phm0qQrKc3Y" },
  { title: "How to be a better leader", url: "https://youtu.be/xoDEUEmlbnI" },
  { title: "The trusth about self-doubt", url: "https://youtu.be/ovcB_eydmfc" },
  { title: "How to Turn Your Worst Moments into Your Best Opportunities", url: "https://youtu.be/mNiJVh0OwXQ" },
  { title: "What my hairdresser taught me about gratitude", url: "https://youtu.be/O0NByNB79xk" },
  { title: "Conquering Fear", url: "https://youtu.be/qw900D_H91k" },
  { title: "Why sleeping 8 hours a night", url: "https://youtu.be/vvfuYMakJCo" },
  { title: "Meditation: The Ultimate Business Tool", url: "https://youtu.be/uEsPQDQBXg4" },
  { title: "Overcoming Business Adversity:", url: "https://youtu.be/FhxCA11q6tk" },
  { title: "Turning pro", url: "https://youtu.be/A_CXSLmzOXU" },
  { title: "The Key to Success: Keep Pedaling", url: "https://youtu.be/5OOV_Rk98vw" },
  { title: "Upgrade Your operating system", url: "https://youtu.be/ugcgIzhQPHA" },
  { title: "The Secret to Endless Motivation at Work", url: "https://youtu.be/AtWzo4GD_tI" },
  { title: "Stop blaming and take control", url: "https://youtu.be/szRkTsnFMeU" },
  { title: "Unlock your full potential with the Sunday starter", url: "https://youtu.be/0eaz5S852pY" },
];

async function seed() {
  console.log(`Seeding ${SUNDAY_STARTERS.length} newsletter entries...`);

  // Wipe existing rows so re-running is idempotent.
  const { error: deleteError } = await supabase
    .from("newsletter_entries")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");

  if (deleteError) {
    console.error("Failed to clear existing entries:", deleteError);
    process.exit(1);
  }

  const rows = SUNDAY_STARTERS.map((entry, index) => ({
    title: entry.title,
    url: entry.url,
    display_order: index,
  }));

  // Insert in chunks of 100 to avoid request-size limits.
  const chunkSize = 100;
  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    const { error } = await supabase.from("newsletter_entries").insert(chunk);
    if (error) {
      console.error(`Failed to insert chunk starting at ${i}:`, error);
      process.exit(1);
    }
    console.log(`  Inserted rows ${i + 1}–${i + chunk.length}`);
  }

  console.log(`Done. ${rows.length} entries seeded.`);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
