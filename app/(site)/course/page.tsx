import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { getCoursePageData } from "@/lib/cms";

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

export default async function CoursePage() {
  // Fetch course page data from CMS
  const pageData = await getCoursePageData();

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
              {pageData.headline}
            </h1>
            <p className="mx-auto mt-6 text-xl leading-relaxed text-neutral-200 md:text-2xl lg:text-3xl">
              {pageData.tagline}
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-300 md:text-xl">
              {pageData.description}
            </p>

            {/* Results Badge */}
            <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-6 py-3">
              <span className="text-sm font-semibold">Proven Results:</span>
              <span className="text-sm text-neutral-300">{pageData.resultsBadge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
              {pageData.modulesHeadline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              {pageData.modulesSubheadline}
            </p>
          </div>

          {/* Course Modules - Compact List */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              {pageData.modules.map((module, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900 hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <Icon src={module.icon || "/icons/business-plan-11962831.svg"} alt={module.title} size={48} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900">
                      {module.title}
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      {module.description}
                    </p>
                    {module.benefit && (
                      <p className="mt-2 text-sm font-semibold text-neutral-700">
                        {module.benefit}
                      </p>
                    )}
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
              {pageData.previewHeadline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              Watch the first modules to see what&apos;s inside
            </p>
          </div>

          <div className="mt-20 space-y-12">
            {pageData.previewVideos.map((video, index) => (
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
                    {video.description && (
                      <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                        {video.description}
                      </p>
                    )}
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
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${pageData.playlistId}`}
                title="The Founder's and CEO's Sales System - Complete Course"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="mt-8 text-center">
              <a
                href={`https://www.youtube.com/playlist?list=${pageData.playlistId}`}
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
              {pageData.resultsHeadline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              This system has helped companies transform their sales operations
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pageData.results.map((result, index) => (
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
                {result.source && (
                  <div className="mt-2 text-sm text-neutral-500">
                    {result.source}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Case Study Highlight */}
          <div className="mt-16 rounded-2xl border-l-4 border-neutral-900 bg-neutral-50 p-8">
            <p className="text-lg font-semibold text-neutral-900 md:text-xl">
              &ldquo;{pageData.caseStudyQuote}&rdquo;
            </p>
            <p className="mt-4 text-base text-neutral-600">
              — {pageData.caseStudyAttribution}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-32 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            {pageData.finalCtaHeadline}
          </h2>
          <p className="mx-auto mt-6 text-xl text-neutral-200 md:text-2xl">
            {pageData.finalCtaDescription}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://www.youtube.com/playlist?list=${pageData.playlistId}`}
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
