import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Videos | Louie Bernstein - Top Sales Insights",
  description:
    "Watch the top-rated sales training videos and insights from Louie Bernstein.",
};

export default function FeaturedVideosPage() {
  return (
    <main className="py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
            Featured Videos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            The most popular sales training content, handpicked for you
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div className="rounded-2xl border-2 border-[#0966c2] bg-card p-8 shadow-lg">
            <h2 className="mb-6 font-sans text-2xl font-bold text-foreground">
              Featured: Sales Leadership Essentials
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
                title="Featured Sales Videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#0966c2] px-8 py-4 font-sans text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#0855a3] hover:shadow-xl"
            >
              Watch More Videos
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
