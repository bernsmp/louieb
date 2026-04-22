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
  { title: "What Breaks First When a Founder Stops Selling?", url: "/what-breaks-first-when-founder-stops-selling" },
  { title: "Why Do My Salespeople Underperform Without Me Involved?", url: "/why-do-my-salespeople-underperform-without-me" },
  { title: "5 Signs You're Not Ready to Give Up Founder-Led Sales", url: "/5-signs-not-ready-to-give-up-founder-led-sales" },
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
  return (
    <li>
      <Link
        href={url}
        className="group flex items-start gap-2 py-1.5 text-neutral-700 hover:text-primary transition-colors duration-150"
      >
        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-primary transition-colors duration-150" />
        <span className="text-sm leading-relaxed group-hover:underline underline-offset-2">
          {title}
        </span>
      </Link>
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Site Map</span>
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
              count={1}
            >
              <ul className="space-y-0.5">
                <PageLink title="The Sunday Starter Newsletter" url="/newsletter" />
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
