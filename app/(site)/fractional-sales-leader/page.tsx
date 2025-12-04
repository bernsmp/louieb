import { Metadata } from "next";
import Link from "next/link";
import { getFSLPageDataWithLayout } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Fractional Sales Leader | What It Is & How It Works | Louie Bernstein",
  description:
    "A Fractional Sales Leader gives you experienced sales leadership at a fraction of the cost. Learn what they do, how to hire one, and if it's right for your $1M-$10M company.",
  keywords: [
    "fractional sales leader",
    "fractional sales leadership",
    "fractional VP of sales",
    "fractional sales manager",
    "part-time sales leader",
    "outsourced sales leadership",
    "sales leadership consulting",
    "fractional executive",
  ],
  openGraph: {
    title: "Fractional Sales Leader | What It Is & How It Works",
    description:
      "A Fractional Sales Leader gives you experienced sales leadership at a fraction of the cost. Learn what they do and if it's right for your company.",
    type: "website",
    url: "https://louiebernstein.com/fractional-sales-leader",
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader",
  },
};

// Types for page data
interface VideoItem {
  videoId: string;
  title: string;
  description?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface PageData {
  headline: string;
  tagline: string;
  introHook: string;
  introParagraph1: string;
  introParagraph2: string;
  introParagraph3: string;
  introParagraph4: string;
  playlistId: string;
  videos: VideoItem[];
  faqs: FAQItem[];
  finalCtaHeadline: string;
  finalCtaButtonText: string;
  finalCtaDescription: string;
  layout: { sections: string[] };
}

// Generate FAQPage schema for SEO
function generateFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate VideoObject schema for each video
function generateVideoListSchema(videos: VideoItem[]) {
  const videoObjects = videos.map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.description || "",
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
    uploadDate: "2024-12-01",
    contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`,
    publisher: {
      "@type": "Person",
      name: "Louie Bernstein",
      url: "https://louiebernstein.com",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videoObjects.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: video,
    })),
  };
}

// Section: Hero
function HeroSection({ pageData }: { pageData: PageData }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-24 text-white md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-4 py-2">
            <span className="text-sm font-semibold">LinkedIn Top Voice</span>
            <span className="text-neutral-400">|</span>
            <span className="text-sm text-neutral-300">9+ Years as Fractional Sales Leader</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {pageData.headline}
          </h1>
          <p className="mx-auto mt-4 text-xl text-neutral-300 md:text-2xl">
            {pageData.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}

// Section: Videos
function VideosSection({ pageData }: { pageData: PageData }) {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            Everything You Need to Know
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Five videos that answer the questions every founder asks before hiring a Fractional Sales Leader.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pageData.videos.map((video, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-lg transition-all hover:border-[#0966c2] hover:shadow-xl"
            >
              <div className="aspect-[9/16] w-full bg-neutral-900">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <div className="mb-1 text-xs font-semibold text-[#0966c2]">
                  {index + 1} of {pageData.videos.length}
                </div>
                <h3 className="text-base font-bold leading-tight text-neutral-900">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                    {video.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://www.youtube.com/playlist?list=${pageData.playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border-2 border-[#0966c2] bg-white px-8 py-4 text-lg font-semibold text-[#0966c2] transition-all hover:bg-[#0966c2] hover:text-white"
          >
            Watch Full Playlist on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

// Section: Intro (Long-form text)
function IntroSection({ pageData }: { pageData: PageData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose prose-lg prose-neutral mx-auto max-w-none">
          <p className="text-xl leading-relaxed text-neutral-700">
            {pageData.introHook}
          </p>

          <p className="text-lg leading-relaxed text-neutral-600">
            {pageData.introParagraph1}
          </p>

          <p className="text-lg leading-relaxed text-neutral-600">
            {pageData.introParagraph2}
          </p>

          <p className="text-lg leading-relaxed text-neutral-600">
            {pageData.introParagraph3}
          </p>

          <p className="text-lg leading-relaxed text-neutral-600">
            {pageData.introParagraph4}
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://calendly.com/louiebernstein/30minutes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#0966c2] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#0855a3] hover:shadow-xl"
          >
            {pageData.finalCtaButtonText}
          </Link>
          <p className="mt-3 text-sm text-neutral-500">
            No pitch. Just a conversation about your sales challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

// Section: FAQ
function FAQSection({ pageData }: { pageData: PageData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Straight answers to the questions I hear most often.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {pageData.faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-neutral-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-neutral-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section: Final CTA
function FinalCtaSection({ pageData }: { pageData: PageData }) {
  return (
    <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 text-white md:py-24">
      <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {pageData.finalCtaHeadline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-200">
          {pageData.finalCtaDescription}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://calendly.com/louiebernstein/30minutes"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-neutral-900 transition-all hover:bg-neutral-100 hover:shadow-xl"
          >
            {pageData.finalCtaButtonText}
          </Link>
          <Link
            href="/"
            className="rounded-lg border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-neutral-900"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}

// Map section IDs to render functions
const SECTION_COMPONENTS: Record<string, React.ComponentType<{ pageData: PageData }>> = {
  hero: HeroSection,
  videos: VideosSection,
  intro: IntroSection,
  faq: FAQSection,
  finalCta: FinalCtaSection,
};

export default async function FractionalSalesLeaderPage() {
  // Fetch page data from CMS (includes layout)
  const pageData = await getFSLPageDataWithLayout();

  const faqSchema = generateFaqSchema(pageData.faqs);
  const videoSchema = generateVideoListSchema(pageData.videos);

  // Get sections in layout order
  const sectionOrder = pageData.layout?.sections || ['hero', 'videos', 'intro', 'faq', 'finalCta'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <main className="bg-white">
        {sectionOrder.map((sectionId) => {
          const SectionComponent = SECTION_COMPONENTS[sectionId];
          if (!SectionComponent) return null;
          return <SectionComponent key={sectionId} pageData={pageData} />;
        })}
      </main>
    </>
  );
}
