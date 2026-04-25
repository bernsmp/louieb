import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  UserCheck,
  BookOpen,
  FileText,
  PenLine,
  Video,
  Mail,
  GraduationCap,
  HelpCircle,
  Layers,
  Wrench,
  TrendingUp,
  Target,
  Users,
  BarChart2,
  Lightbulb,
  Map,
} from "lucide-react";
import {
  getSiteMapPageData,
  getAllBlogPostsWithSlugs,
  getAllVideosWithSlugs,
} from "@/lib/cms";
import { getAllArticles } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteMapPageData();
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: { canonical: "https://louiebernstein.com/site-map" },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: "https://louiebernstein.com/site-map",
      type: "website",
    },
  };
}

// ─── Static page definitions ─────────────────────────────────────────────────

const FSL_PAGES = [
  { title: "What Is a Fractional Sales Leader?", url: "/fractional-sales-leader" },
  { title: "Fractional Sales Leader vs. Consultant", url: "/fractional-sales-leader-vs-consultant" },
  { title: "Fractional Sales Leader vs. Sales Coach", url: "/fractional-sales-leader-vs-sales-coach" },
  { title: "Fractional Sales Leader vs. Sales Consultant", url: "/fractional-sales-leader-vs-sales-consultant" },
  { title: "What to Expect in the First 90 Days with a Fractional Sales Leader", url: "/fractional-sales-leader-first-90-days" },
  { title: "Fractional Sales Leadership ROI: What Does the Investment Return?", url: "/fractional-sales-leadership-roi" },
  { title: "Fractional CRO for $1M–$10M Founders", url: "/fractional-cro-for-1m-10m-founders" },
  { title: "Fractional CRO Pricing", url: "/fractional-cro-pricing" },
  { title: "Fractional CRO vs. Full-Time CRO: Which Do You Need?", url: "/fractional-cro-vs-full-time-cro" },
  { title: "Fractional VP of Sales for Small Businesses", url: "/fractional-vp-of-sales-for-small-businesses" },
  { title: "Fractional VP of Sales vs. Full-Time VP", url: "/fractional-vp-sales-vs-full-time-vp" },
  { title: "Cost of a Fractional VP of Sales", url: "/cost-of-fractional-vp-sales" },
  { title: "How Much Does a Fractional CRO Cost?", url: "/how-much-does-a-fractional-cro-cost" },
  { title: "Is Fractional Sales Leadership Worth It? An Honest Assessment", url: "/is-fractional-sales-leadership-worth-it" },
  { title: "When to Hire a Fractional Sales Leader", url: "/when-to-hire-a-fractional-sales-leader" },
  { title: "When Are You Ready to Hire a Fractional CRO?", url: "/when-to-hire-a-fractional-cro" },
  { title: "What Does a Fractional Sales Leader Do Week to Week?", url: "/what-does-fractional-sales-leader-do" },
  { title: "How to Interview a Fractional Sales Leader", url: "/how-to-interview-a-fractional-sales-leader" },
  { title: "Fractional Sales Leadership for Private Equity", url: "/fractional-sales-leadership-for-private-equity" },
  { title: "VP of Sales vs. CRO: What's the Difference?", url: "/vp-sales-vs-cro-difference" },
  { title: "When Are You Ready to Hire a CRO?", url: "/when-to-hire-a-cro" },
  { title: "The $250K Mistake: Hiring a VP of Sales Too Early", url: "/250k-mistake-vp-sales-hire-too-early" },
  { title: "How to Build a Sales System Without Hiring a Full-Time VP of Sales", url: "/how-to-build-sales-system-without-full-time-vp" },
  { title: "Fractional Sales Leadership for Series A Companies", url: "/fractional-sales-leadership-series-a" },
];

const SALES_GUIDES = [
  // Hiring & Team Building
  { title: "How to Hire Your First Sales Rep", url: "/how-to-hire-first-sales-rep" },
  { title: "When Are You Ready to Hire Your First Sales Rep?", url: "/when-ready-hire-first-sales-rep" },
  { title: "Should You Hire One Salesperson or Two?", url: "/hire-one-salesperson-or-two" },
  { title: "Why Startups Fail at Sales Hiring", url: "/why-startups-fail-at-sales-hiring" },
  { title: "How to Build a Sales Team After $1M ARR", url: "/build-sales-team-after-1m-arr" },
  { title: "How to Onboard a New Sales Rep in 30, 60, and 90 Days", url: "/how-to-onboard-new-sales-rep" },
  { title: "How to Manage an Underperforming Salesperson", url: "/how-to-manage-underperforming-salesperson" },
  { title: "Sales Performance Improvement Plan (PIP) Guide", url: "/sales-performance-improvement-plan" },
  // Founder-Led Sales
  { title: "What Is Founder-Led Sales — And Why It Eventually Breaks", url: "/what-is-founder-led-sales" },
  { title: "Founder-Led Sales Not Scaling? Here's Why", url: "/founder-led-sales-not-scaling" },
  { title: "How to Get Out of Founder-Led Sales", url: "/how-to-get-out-of-founder-led-sales" },
  { title: "How to Replace Founder-Led Sales Without Losing Momentum", url: "/how-to-replace-founder-led-sales" },
  { title: "How to Transition Out of Founder-Led Sales", url: "/transition-out-of-founder-led-sales" },
  { title: "Founder-Led Sales Exit Checklist", url: "/founder-led-sales-exit-checklist" },
  { title: "Why Does My Sales Pipeline Depend Entirely on Me?", url: "/why-does-my-sales-pipeline-depend-on-me" },
  { title: "Why Does My Revenue Feel Unpredictable Month to Month?", url: "/why-does-my-revenue-feel-unpredictable-month-to-month" },
  { title: "What Are the Hidden Costs of Founder-Led Sales?", url: "/what-are-the-hidden-costs-of-founder-led-sales" },
  { title: "What Breaks First When a Founder Stops Selling?", url: "/what-breaks-first-when-founder-stops-selling" },
  { title: "Why Do My Salespeople Underperform Without Me Involved?", url: "/why-do-my-salespeople-underperform-without-me" },
  { title: "5 Signs You're Not Ready to Give Up Founder-Led Sales", url: "/5-signs-not-ready-to-give-up-founder-led-sales" },
  { title: "How Do I Step Out of Day-to-Day Sales Without Losing Revenue?", url: "/how-do-i-step-out-of-day-to-day-sales-without-losing-revenue" },
  // Sales Process & Pipeline
  { title: "How to Build a Sales Process After $1M ARR", url: "/how-to-build-a-sales-process-after-1m-arr" },
  { title: "How to Build a Sales Process for SaaS", url: "/how-to-build-a-sales-process-for-saas" },
  { title: "How to Build a Sales Pipeline That Fills Itself", url: "/how-to-build-a-sales-pipeline" },
  { title: "Sales Pipeline Stages: How to Define Them", url: "/sales-pipeline-stages" },
  { title: "How to Run a Sales Pipeline Review", url: "/how-to-run-a-sales-pipeline-review" },
  { title: "No Pipeline: What to Do When Your Pipeline Is Empty", url: "/no-pipeline-what-to-do" },
  { title: "5 Warning Signs Your Sales Process Is Breaking", url: "/5-warning-signs-sales-process-breaking" },
  { title: "B2B Sales Process of Small Companies", url: "/b2b-sales-process-small-companies" },
  // Outbound & Lead Gen
  { title: "How to Build an Outbound Sales System From Scratch", url: "/how-to-build-outbound-sales-system" },
  { title: "How to Write a Cold Email That Gets Replies", url: "/how-to-write-a-cold-email" },
  { title: "How to Make a Cold Call That Actually Books Meetings", url: "/how-to-make-a-cold-call" },
  { title: "How to Build a B2B Referral Program That Works", url: "/b2b-referral-program-sales" },
  { title: "B2B Sales Objection Handling: 7 Common Objections", url: "/b2b-sales-objection-handling" },
  { title: "How to Run a Sales Discovery Call That Moves Deals Forward", url: "/how-to-run-a-discovery-call" },
  { title: "How to Close More Deals Without Discounting", url: "/how-to-close-deals-without-discounting" },
  { title: "How to Shorten Your B2B Sales Cycle", url: "/how-to-shorten-sales-cycle" },
  // Sales Leadership & Management
  { title: "Sales Leadership for $1M–$10M Companies", url: "/sales-leadership-for-1m-10m-companies" },
  { title: "How to Scale Revenue from $1M to $10M", url: "/how-to-scale-revenue-1m-to-10m" },
  { title: "How to Run a Sales QBR for a Small B2B Team", url: "/how-to-run-a-sales-qbr" },
  { title: "How to Run a Weekly Sales Meeting That Works", url: "/how-to-run-weekly-sales-meeting" },
  { title: "How to Set Quota for a Small Sales Team", url: "/how-to-set-sales-quota" },
  { title: "How to Build a Sales Compensation Plan", url: "/how-to-build-sales-compensation-plan" },
  { title: "How to Build a Sales Culture at a Small B2B Company", url: "/how-to-build-sales-culture" },
  { title: "Sales Accountability Document: Why Every Team Needs One", url: "/sales-accountability-document" },
  // Diagnostics & Analytics
  { title: "Sales Team Not Hitting Quota: Diagnostic & Fix Guide", url: "/sales-team-not-hitting-quota" },
  { title: "Why Your Sales Team Isn't Hitting Quota", url: "/why-your-sales-team-isnt-hitting-quota" },
  { title: "Why Your Sales Team Isn't Growing Revenue", url: "/why-sales-team-not-growing-revenue" },
  { title: "Diagnose Your Sales Team Problems", url: "/diagnose-sales-team-problems" },
  { title: "Why Sales Reps Fail in Startups", url: "/why-sales-reps-fail-in-startups" },
  { title: "The 7 Sales KPIs Every $1M–$10M Business Should Track", url: "/sales-kpis-for-small-business" },
  { title: "Sales Forecasting for Small Business", url: "/sales-forecasting-for-small-business" },
  { title: "How to Create a Sales Forecast Investors Will Believe", url: "/sales-forecasting-for-investors" },
  { title: "How Do I Know If My CRM Data Is Actually Accurate?", url: "/how-do-i-know-if-my-crm-data-is-actually-accurate" },
  { title: "What Is Sales Velocity? The Metric That Predicts Revenue", url: "/sales-velocity-b2b" },
  { title: "How to Run a Win/Loss Analysis", url: "/win-loss-analysis-sales" },
  { title: "Case Study: 61% Sales Growth in One Year", url: "/case-study-61-percent-sales-growth" },
  // Sales Concepts & Definitions
  { title: "What Is a Sales Audit — And Does Your Business Need One?", url: "/what-is-a-sales-audit" },
  { title: "What Is a Sales Playbook — And Does Your Business Have One?", url: "/what-is-a-sales-playbook" },
  { title: "What Is a Sales Cadence? How to Build One That Books Meetings", url: "/what-is-a-sales-cadence" },
  { title: "What Is a Sales Qualified Lead (SQL)?", url: "/sales-qualified-lead-definition" },
  { title: "What Is Revenue Operations (RevOps)? A Plain-English Guide", url: "/what-is-revenue-operations-revops" },
  { title: "What Is Sales Enablement? And Why Your Team Needs It", url: "/what-is-sales-enablement" },
  // Tools & Strategy
  { title: "How to Build a Go-to-Market Strategy for a B2B Business", url: "/how-to-build-a-go-to-market-strategy" },
  { title: "How to Create an Ideal Customer Profile", url: "/how-to-create-an-ideal-customer-profile" },
  { title: "How to Set Up HubSpot for a Small Sales Team", url: "/how-to-set-up-hubspot-for-small-sales-team" },
  { title: "Sales Tech Stack for Small Business: The Minimum Setup", url: "/sales-tech-stack-for-small-business" },
  { title: "Key Benefits of Hiring a Fractional Sales Leader for Small Businesses", url: "/fractional-sales-leader-benefits-small-business" },
];

const FRAMEWORK_PAGES = [
  { title: "Before You Quit Your Day Job", url: "/entrepreneurs" },
  { title: "Staying In The Game", url: "/founders" },
];

const TOOL_PAGES = [
  { title: "Tools Hub", url: "/tools" },
  { title: "Sales Readiness Assessment", url: "/tools/assessment" },
  { title: "Fractional Sales Leader ROI Calculator", url: "/tools/roi-calculator" },
];

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

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryHeader({
  icon,
  title,
  count,
  color,
}: {
  icon: ReactNode;
  title: string;
  count: number;
  color: string;
}) {
  return (
    <div className={`flex items-center gap-3 mb-6 pb-3 border-b-2 ${color}`}>
      <div className={`p-2 rounded-lg ${color.replace("border-", "bg-").replace("-600", "-100")}`}>
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-neutral-900">{title}</h2>
        <p className="text-sm text-neutral-500">{count} {count === 1 ? "page" : "pages"}</p>
      </div>
    </div>
  );
}

function PageLink({ title, url }: { title: string; url: string }) {
  const isExternal = /^https?:\/\//.test(url);
  const linkClassName =
    "group flex items-start gap-2 py-1.5 text-neutral-700 hover:text-primary transition-colors duration-150";
  const inner = (
    <>
      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-primary transition-colors duration-150" />
      <span className="text-sm leading-relaxed group-hover:underline underline-offset-2">
        {title}
      </span>
    </>
  );
  return (
    <li>
      {isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {inner}
        </a>
      ) : (
        <Link href={url} className={linkClassName}>
          {inner}
        </Link>
      )}
    </li>
  );
}

function Section({
  icon,
  title,
  colorClass,
  children,
  count,
}: {
  icon: ReactNode;
  title: string;
  colorClass: string;
  children: ReactNode;
  count: number;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
      <CategoryHeader icon={icon} title={title} count={count} color={colorClass} />
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SiteMapPage() {
  const [pageData, articles, blogPosts, videos] = await Promise.all([
    getSiteMapPageData(),
    Promise.resolve(getAllArticles()),
    getAllBlogPostsWithSlugs(),
    getAllVideosWithSlugs(),
  ]);

  const totalPages =
    FSL_PAGES.length +
    SALES_GUIDES.length +
    articles.length +
    blogPosts.length +
    videos.length +
    5 + // Learn section pages: /articles, /blog, /videos, /newsletter, /course
    1 + // FAQs
    FRAMEWORK_PAGES.length +
    TOOL_PAGES.length;

  return (
    <main className="min-h-screen bg-neutral-50 pt-28 pb-24">
      {/* Hero */}
      <div className="bg-white border-b border-neutral-200 py-12 mb-12">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-5">
            <Map className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Site Map &amp; Library</span>
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
            {pageData.pageHeadline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            {pageData.pageSubheadline}
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            {totalPages}+ pages — updated automatically as new content is published
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Fractional Sales Leader ── */}
          <Section
            icon={<UserCheck className="h-5 w-5 text-blue-600" />}
            title="Fractional Sales Leader"
            colorClass="border-blue-600"
            count={FSL_PAGES.length}
          >
            <ul className="space-y-0.5">
              {FSL_PAGES.map((p) => (
                <PageLink key={p.url} title={p.title} url={p.url} />
              ))}
            </ul>
          </Section>

          {/* ── Sales Education Guides ── */}
          <Section
            icon={<TrendingUp className="h-5 w-5 text-emerald-600" />}
            title="Sales Education Guides"
            colorClass="border-emerald-600"
            count={SALES_GUIDES.length}
          >
            <ul className="space-y-0.5">
              {SALES_GUIDES.map((p) => (
                <PageLink key={p.url} title={p.title} url={p.url} />
              ))}
            </ul>
          </Section>

          {/* ── Learn: Articles ── */}
          <Section
            icon={<FileText className="h-5 w-5 text-violet-600" />}
            title="Articles"
            colorClass="border-violet-600"
            count={articles.length + 1}
          >
            <ul className="space-y-0.5">
              <PageLink title="All Articles" url="/articles" />
              {articles.map((a) => (
                <PageLink
                  key={a.metadata.slug}
                  title={a.metadata.title}
                  url={`/articles/${a.metadata.slug}`}
                />
              ))}
            </ul>
          </Section>

          {/* ── Learn: Blog ── */}
          <Section
            icon={<PenLine className="h-5 w-5 text-rose-600" />}
            title="Blog"
            colorClass="border-rose-600"
            count={blogPosts.length + 1}
          >
            <ul className="space-y-0.5">
              <PageLink title="All Blog Posts" url="/blog" />
              {blogPosts.map((p) => (
                <PageLink
                  key={p.slug}
                  title={p.title}
                  url={`/blog/${p.slug}`}
                />
              ))}
              {blogPosts.length === 0 && (
                <li className="text-sm text-neutral-400 py-1.5 ml-3.5">
                  No blog posts published yet.
                </li>
              )}
            </ul>
          </Section>

          {/* ── Learn: Videos ── */}
          <Section
            icon={<Video className="h-5 w-5 text-amber-600" />}
            title="Videos"
            colorClass="border-amber-600"
            count={videos.length + 1}
          >
            <ul className="space-y-0.5">
              <PageLink title="All Videos" url="/videos" />
              {videos.map((v) => (
                <PageLink
                  key={v.slug}
                  title={v.title}
                  url={`/videos/${v.slug}`}
                />
              ))}
              {videos.length === 0 && (
                <li className="text-sm text-neutral-400 py-1.5 ml-3.5">
                  No videos published yet.
                </li>
              )}
            </ul>
          </Section>

          {/* ── Learn: Newsletter & Course ── */}
          <div className="grid gap-8">
            <Section
              icon={<Mail className="h-5 w-5 text-cyan-600" />}
              title="Newsletter"
              colorClass="border-cyan-600"
              count={1 + SUNDAY_STARTERS.length}
            >
              <ul className="space-y-0.5">
                <PageLink title="The Sunday Starter Newsletter" url="/newsletter" />
                {SUNDAY_STARTERS.map((p, i) => (
                  <PageLink key={`${p.url}-${i}`} title={p.title} url={p.url} />
                ))}
              </ul>
            </Section>

            <Section
              icon={<GraduationCap className="h-5 w-5 text-indigo-600" />}
              title="Course"
              colorClass="border-indigo-600"
              count={1}
            >
              <ul className="space-y-0.5">
                <PageLink title="Sales Leadership Course" url="/course" />
              </ul>
            </Section>

            {/* ── FAQs ── */}
            <Section
              icon={<HelpCircle className="h-5 w-5 text-orange-600" />}
              title="FAQs"
              colorClass="border-orange-600"
              count={1}
            >
              <ul className="space-y-0.5">
                <PageLink title="Frequently Asked Questions" url="/faqs" />
              </ul>
            </Section>

            <Section
              icon={<UserCheck className="h-5 w-5 text-neutral-600" />}
              title="About & Contact"
              colorClass="border-neutral-600"
              count={1}
            >
              <ul className="space-y-0.5">
                <PageLink title="About Louie Bernstein / Let's Talk" url="/about" />
              </ul>
            </Section>
          </div>

          {/* ── Frameworks ── */}
          <Section
            icon={<Layers className="h-5 w-5 text-teal-600" />}
            title="Frameworks"
            colorClass="border-teal-600"
            count={FRAMEWORK_PAGES.length}
          >
            <ul className="space-y-0.5">
              {FRAMEWORK_PAGES.map((p) => (
                <PageLink key={p.url} title={p.title} url={p.url} />
              ))}
            </ul>
          </Section>

          {/* ── Tools ── */}
          <Section
            icon={<Wrench className="h-5 w-5 text-slate-600" />}
            title="Tools"
            colorClass="border-slate-600"
            count={TOOL_PAGES.length}
          >
            <ul className="space-y-0.5">
              {TOOL_PAGES.map((p) => (
                <PageLink key={p.url} title={p.title} url={p.url} />
              ))}
            </ul>
          </Section>

        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-sm text-neutral-400">
          This site map updates automatically when new blog posts, articles, or videos are published.
        </p>
      </div>
    </main>
  );
}
