import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "The Founder's and CEO's Sales System | Complete Sales Training Course",
  description:
    "Build, optimize, and scale your sales team with this complete 20-step system. Includes hiring system, sales playbook, LinkedIn lead generation, pipeline management, and more. Created by a Fractional Sales Leader with decades of experience.",
  keywords: [
    "sales system course",
    "CEO sales training",
    "fractional sales leader",
    "build sales team",
    "sales playbook",
    "sales hiring system",
    "LinkedIn lead generation",
    "sales pipeline management",
  ],
};

export default function CoursePage() {
  const courseModules = [
    {
      title: "Hiring System That Saves Time",
      description:
        "My complete system, including a Hiring Scorecard with 120+ questions and answers. Hire top performers faster, reduce turnover, and increase sales.",
      benefit: "Free yourself from the stress and uncertainty of hiring by ensuring you hire the right fit.",
      icon: "/icons/ceo-11962845.svg",
    },
    {
      title: "Sales Playbook with Ready-to-Use Templates",
      description:
        "Start building your processes immediately. Turn chaos into clarity, which builds the foundation of a system you can trust.",
      benefit: "Frees you to build other parts of your business. It's the heart of your sales system.",
      icon: "/icons/business-plan-11962831.svg",
    },
    {
      title: "LinkedIn Lead Generation System",
      description:
        "Generate a steady stream of high-quality leads from LinkedIn. Turn LinkedIn into a lead-generating machine that brings in qualified prospects and drives revenue.",
      benefit: "Use this simple, proven approach to engage decision-makers, build trust, and close deals without cold calling. It's how I get all my customers.",
      icon: "/icons/network-11962856.svg",
    },
    {
      title: "Streamlined Sales Pipeline",
      description:
        "Create a high-performing sales pipeline in minutes and eliminate lost opportunities.",
      benefit: "Stop losing deals to disorganization. Structure your pipeline the right way to capture every opportunity, and watch your cash flow projections improve.",
      icon: "/icons/scalable-11962814.svg",
    },
    {
      title: "Sales & Marketing Alignment",
      description:
        "Learn how to create synergy between these critical functions, why it's crucial, and how it leads to more leads and faster deal cycles.",
      benefit: "Increase your sales at least 10% with proper alignment.",
      icon: "/icons/teamwork-11962815.svg",
    },
    {
      title: "Effective Sales & 1:1 Meetings",
      description:
        "Transform your sales meetings into powerful tools for growth. Discover actionable strategies to engage your team, align on goals, and drive results.",
      benefit: "Make you a leader your team respects and follows with every interaction.",
      icon: "/icons/feedback-11962832.svg",
    },
    {
      title: "Sales Manager's Checklist",
      description:
        "12 steps to keep your team pumped, motivated, and in harmony.",
      benefit: "Build a high-energy, motivated sales team. Create a culture of collaboration and peak performance, so your team consistently hits their targets and drives your business forward.",
      icon: "/icons/business-goal-11962851.svg",
    },
    {
      title: "588-Page Sales Training Course PDF",
      description:
        "How to be a Professional Salesperson - a complete guide to professional selling, packed with insights and strategies.",
      benefit: "Equip your team with proven techniques to elevate skills, confidence, and build long-term customer relationships. When used, this alone will increase your sales.",
      icon: "/icons/business-plan-11962831.svg",
    },
    {
      title: "Cold Call & Voicemail Scripts",
      description:
        "Scripts that get your prospect to engage and call back.",
      benefit: "Break through the noise with scripts designed to grab attention, build trust, and spark meaningful conversations. Convert cold leads into warm opportunities.",
      icon: "/icons/deal-11962821.svg",
    },
    {
      title: "AI Impact on Sales Department",
      description:
        "What you can do about AI's impact on sales, and tools to stay competitive.",
      benefit: "Stay ahead of the curve with actionable insights. Learn how to leverage cutting-edge tools to streamline processes, outsmart competitors, and future-proof your sales department.",
      icon: "/icons/innovation-11962816.svg",
    },
    {
      title: "CRM Selection Guide",
      description:
        "What to look for in CRM systems. Choose the CRM that works for you.",
      benefit: "Get expert guidance to select a system that fits your business, streamlines your processes, and maximizes your team's efficiency. Avoid costly mistakes and find the perfect fit.",
      icon: "/icons/analytics-11962812.svg",
    },
    {
      title: "Video Guidance & Step-by-Step Instruction",
      description:
        "Easy-to-follow videos that make the process of learning and transformation simple.",
      benefit: "Get my advice and step-by-step instruction through clear, actionable video content.",
      icon: "/icons/business-presentation-11962857.svg",
    },
  ];

  const previewVideos = [
    {
      title: "Introduction: The Founder's and CEO's Sales System",
      videoId: "sN8tuE_BXjs",
      description: "Learn what you'll get from this complete sales system and how it will transform your business.",
    },
    {
      title: "Module 1: Hiring System That Saves Time",
      videoId: "TlC353ew34o",
      description: "Discover the 120+ question hiring scorecard that helps you hire top performers faster.",
    },
    {
      title: "Module 2: Building Your Sales Playbook",
      videoId: "RuC-3vjtl6s",
      description: "Turn chaos into clarity with ready-to-use templates and proven processes.",
    },
    {
      title: "Module 3: LinkedIn Lead Generation",
      videoId: "Lh-iTnOT0kA",
      description: "Turn LinkedIn into a lead-generating machine without cold calling.",
    },
    {
      title: "Module 4: Sales Pipeline Management",
      videoId: "WxyaNBgAzrE",
      description: "Create a streamlined pipeline that captures every opportunity and improves cash flow.",
    },
  ];

  const results = [
    {
      metric: "61%",
      description: "Sales increase year-over-year",
      source: "Client case study",
    },
    {
      metric: "120+",
      description: "Hiring questions in the scorecard system",
      source: "Hiring System",
    },
    {
      metric: "20",
      description: "Step-by-step modules",
      source: "Complete System",
    },
    {
      metric: "588",
      description: "Pages of sales training content",
      source: "Professional Salesperson Guide",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-32 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              The Founder's and CEO's Sales System
            </h1>
            <p className="mx-auto mt-6 text-xl leading-relaxed text-neutral-200 md:text-2xl lg:text-3xl">
              Build, optimize, and scale your sales team—without the full-time cost
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-300 md:text-xl">
              A complete 20-step system created by a Fractional Sales Leader who's been where you are. Decades of experience, distilled into actionable frameworks that work.
            </p>
            
            {/* Results Badge */}
            <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-6 py-3">
              <span className="text-sm font-semibold">Proven Results:</span>
              <span className="text-sm text-neutral-300">61% sales increase • 120+ hiring questions • 20-step system</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
              What You Get With This Course
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              A complete 20-step sales system with everything you need to build, optimize, and scale
            </p>
          </div>

          {/* Course Modules - Compact List */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              {courseModules.map((module, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900 hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <Icon src={module.icon} alt={module.title} size={48} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900">
                      {module.title}
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      {module.description}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-neutral-700">
                      💡 {module.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Previews Section */}
      <section className="bg-neutral-50 py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
              Preview the Course
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              Watch the first modules to see what's inside
            </p>
          </div>

          <div className="mt-20 space-y-12">
            {previewVideos.map((video, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-lg"
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-neutral-900">
                      {video.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Course Playlist */}
          <div className="mt-16 rounded-3xl border-2 border-neutral-900 bg-neutral-900 p-12">
            <h3 className="text-center text-4xl font-bold text-white md:text-5xl">
              Complete Course Playlist
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-neutral-200">
              Watch all 20 modules, download templates, and get lifetime access to the complete course
            </p>
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
                title="The Founder's and CEO's Sales System - Complete Course"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-semibold text-neutral-900 transition-all hover:bg-neutral-100 hover:shadow-xl"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
              Real Results From Real Businesses
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              This system has helped companies transform their sales operations
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-8 text-center"
              >
                <div className="text-5xl font-bold text-neutral-900">
                  {result.metric}
                </div>
                <div className="mt-2 text-lg text-neutral-600">
                  {result.description}
                </div>
                <div className="mt-2 text-sm text-neutral-500">
                  {result.source}
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Highlight */}
          <div className="mt-16 rounded-2xl border-l-4 border-neutral-900 bg-neutral-50 p-8">
            <p className="text-lg font-semibold text-neutral-900 md:text-xl">
              "Louie helped us increase sales 61% year-over-year working on a part-time arrangement as a fractional sales manager."
            </p>
            <p className="mt-4 text-base text-neutral-600">
              — Client Case Study
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-32 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            Start Building Your Sales System Today
          </h2>
          <p className="mx-auto mt-6 text-xl text-neutral-200 md:text-2xl">
            Get instant access to all 20 modules, templates, scripts, and resources
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-neutral-900 transition-all hover:bg-neutral-100 hover:shadow-xl"
            >
              Watch on YouTube
            </a>
            <Link
              href="/#contact"
              className="rounded-lg border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-neutral-900"
            >
              Have Questions? Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

