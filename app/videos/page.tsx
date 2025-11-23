import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Videos | Louie Bernstein - Sales Training & Tips",
  description:
    "Watch all sales training videos, tips, and insights from Louie Bernstein on YouTube.",
};

export default function VideosPage() {
  return (
    <main className="py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
            All Videos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            Sales training, tips, and insights from the field
          </p>
        </div>

        <div className="mt-16">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#0966c2] shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl"
              title="Louie Bernstein YouTube Playlist"
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
              className="inline-block rounded-lg bg-primary px-8 py-4 font-sans text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              View Full Playlist on YouTube
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
