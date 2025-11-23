import { Metadata } from "next";

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

// Video data structure with SEO metadata
const featuredVideos = [
  {
    id: "ScygjngNNY4",
    title: "Build This Before Hiring Salespeople",
    description:
      "Don't hire sales reps until you have a playbook. Learn why building the system first is crucial for scaling revenue.",
    isShort: true,
  },
  {
    id: "LgaJZ4R6Y-4",
    title: "My 1st Sales Hire Mistake",
    description:
      "Avoid common hiring pitfalls. Louie shares his personal experience with early sales hires and what he learned.",
    isShort: true,
  },
  {
    id: "40BopNISisE",
    title: "Build The System Before The Team",
    description:
      "Why you need a sales system before a sales team. A fractional sales leader's perspective on sustainable growth.",
    isShort: true,
  },
  {
    id: "Mc7TZt_YW2E",
    title: "The Secret Email Step That Gets Replies",
    description:
      "A tactical email outreach tip to increase your response rates immediately. Simple but effective.",
    isShort: true,
  },
];

// Generate VideoObject schema for SEO/AEO
function generateVideoSchema() {
  const videoObjects = featuredVideos.map((video) => ({
    "@type": "VideoObject",
    "@id": `https://louiebernstein.com/videos#video-${video.id}`,
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    uploadDate: "2025-11-23",
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
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

export default function VideosPage() {
  const videoSchema = generateVideoSchema();

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
              Sales Videos
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
              The most popular sales training content, handpicked for you
            </p>
          </div>

          {/* Video Gallery */}
          <div className="mt-16">
            {/* YouTube Shorts Gallery - Responsive Grid */}
            <div className="mb-12">
              <h2 className="mb-8 font-sans text-3xl font-bold text-foreground">
                Featured Shorts
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="group rounded-2xl border-2 border-[#0966c2] bg-card p-4 shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
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
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block font-sans text-sm font-medium text-[#0966c2] hover:underline"
                      >
                        Watch on YouTube →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Playlist Section */}
            <div className="rounded-2xl border-2 border-[#0966c2] bg-card p-8 shadow-lg">
              <h2 className="mb-6 font-sans text-2xl font-bold text-foreground">
                Complete Sales Leadership Playlist
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
                  title="Featured Sales Videos Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <a
                href="https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#0966c2] px-8 py-4 font-sans text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#0855a3] hover:shadow-xl"
              >
                Watch More Videos on YouTube
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
