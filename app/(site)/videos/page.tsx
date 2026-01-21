import { Metadata } from "next";
import Link from "next/link";
import { getVideosPageData, getAllVideosWithSlugs, getFeaturedShortsWithSlugs } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Sales Training Videos | Louie Bernstein - Top Sales Insights",
  description:
    "Watch the top-rated sales training videos and insights from Louie Bernstein. Featured YouTube Shorts and sales leadership content.",
  openGraph: {
    title: "Sales Training Videos | Louie Bernstein - Top Sales Insights",
    description:
      "Watch the top-rated sales training videos and insights from Louie Bernstein.",
    type: "website",
  },
};

// Generate VideoObject schema for SEO/AEO
function generateVideoSchema(videos: Array<{ videoId: string; title: string; description?: string }>) {
  const videoObjects = videos.map((video) => ({
    "@type": "VideoObject",
    "@id": `https://louiebernstein.com/videos#video-${video.videoId}`,
    name: video.title,
    description: video.description || "",
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
    uploadDate: "2025-11-23",
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
    "@type": "CollectionPage",
    name: "Sales Training Videos",
    description:
      "Featured sales training videos and insights from Louie Bernstein",
    url: "https://louiebernstein.com/videos",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: videoObjects.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: video,
      })),
    },
  };
}

export default async function VideosPage() {
  // Fetch videos page data from CMS
  const pageData = await getVideosPageData();
  const featuredShorts = await getFeaturedShortsWithSlugs(); // For the grid (max 4)
  const allVideos = await getAllVideosWithSlugs(); // For video links section
  const videoSchema = generateVideoSchema(allVideos);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <main className="py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
              {pageData.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
              {pageData.subheadline}
            </p>
          </div>

          {/* Video Gallery */}
          <div className="mt-16">
            {/* YouTube Shorts Gallery - Responsive Grid */}
            <div className="mb-12">
              <h2 className="mb-8 font-sans text-3xl font-bold text-foreground">
                {pageData.featuredShortsHeadline}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredShorts.map((video) => (
                  <div
                    key={video.videoId}
                    className="group rounded-2xl border-2 border-[#0966c2] bg-card p-4 shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-lg">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-sans text-lg font-semibold text-foreground">
                        {video.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-muted-foreground">
                        {video.description}
                      </p>
                      <Link
                        href={`/videos/${video.slug}`}
                        className="mt-3 inline-block font-sans text-sm font-medium text-[#0966c2] hover:underline"
                      >
                        Watch Video →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Playlist Section */}
            <div className="rounded-2xl border-2 border-[#0966c2] bg-card p-8 shadow-lg">
              <h2 className="mb-6 font-sans text-2xl font-bold text-foreground">
                {pageData.playlistHeadline}
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/videoseries?list=${pageData.playlistId}`}
                  title="Featured Sales Videos Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Video Links Section */}
            <div className="mt-10 text-center">
              <h3 className="mb-4 font-sans text-lg font-semibold text-foreground">
                Watch Individual Videos
              </h3>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {allVideos.map((video) => (
                  <Link
                    key={video.slug}
                    href={`/videos/${video.slug}`}
                    className="font-sans text-[#0966c2] hover:underline"
                  >
                    {video.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <a
                href={`https://www.youtube.com/playlist?list=${pageData.playlistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#0966c2] px-8 py-4 font-sans text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#0855a3] hover:shadow-xl"
              >
                {pageData.watchMoreButtonText}
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
