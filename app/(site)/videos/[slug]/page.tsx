import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getVideoBySlug, getAllVideosWithSlugs, getVideosPageData } from "@/lib/cms";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all videos
export async function generateStaticParams() {
  const videos = await getAllVideosWithSlugs();
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);

  if (!video) {
    return {
      title: "Video Not Found | Louie Bernstein",
    };
  }

  return {
    title: `${video.title} | Louie Bernstein`,
    description: video.description || `Watch ${video.title} - Sales training video from Louie Bernstein`,
    openGraph: {
      title: video.title,
      description: video.description || `Watch ${video.title} - Sales training video from Louie Bernstein`,
      type: "video.other",
      videos: [
        {
          url: `https://www.youtube.com/watch?v=${video.videoId}`,
        },
      ],
    },
  };
}

// Generate VideoObject schema for this specific video
function generateVideoSchema(video: { videoId: string; title: string; description?: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `https://louiebernstein.com/videos/${video.slug}`,
    name: video.title,
    description: video.description || `${video.title} - Sales training video from Louie Bernstein`,
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
    uploadDate: "2025-11-23",
    contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`,
    publisher: {
      "@type": "Person",
      name: "Louie Bernstein",
      url: "https://louiebernstein.com",
    },
  };
}

export default async function VideoPage({ params }: Props) {
  const { slug } = await params;
  const [video, pageData, allVideos] = await Promise.all([
    getVideoBySlug(slug),
    getVideosPageData(),
    getAllVideosWithSlugs(),
  ]);

  if (!video) {
    notFound();
  }

  // Get other videos for "More Videos" section
  const otherVideos = allVideos.filter((v) => v.slug !== slug);

  const videoSchema = generateVideoSchema(video);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <main className="py-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/videos"
            className="mb-8 inline-flex items-center font-sans text-sm text-muted-foreground hover:text-foreground"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {pageData.videoPageBackLinkText}
          </Link>

          {/* Video Player - Primary Content */}
          <div className="overflow-hidden rounded-2xl border-2 border-[#0966c2] bg-card shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-8">
            <h1 className="font-serif text-3xl font-bold text-primary md:text-4xl">
              {video.title}
            </h1>
            {video.description && (
              <p className="mt-4 font-sans text-lg text-muted-foreground">
                {video.description}
              </p>
            )}
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-[#0966c2] px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0855a3] hover:shadow-lg"
            >
              {pageData.videoPageWatchButtonText}
            </a>
          </div>

          {/* More Videos Section */}
          {otherVideos.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="mb-8 font-sans text-2xl font-bold text-foreground">
                {pageData.videoPageMoreVideosHeadline}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherVideos.map((otherVideo) => (
                  <Link
                    key={otherVideo.videoId}
                    href={`/videos/${otherVideo.slug}`}
                    className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-[#0966c2] hover:shadow-md"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${otherVideo.videoId}/mqdefault.jpg`}
                        alt={otherVideo.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-sans text-sm font-semibold text-foreground group-hover:text-[#0966c2]">
                        {otherVideo.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
