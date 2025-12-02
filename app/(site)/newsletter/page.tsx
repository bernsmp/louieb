import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { getNewsletterPageData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "The Sunday Starter Newsletter | Louie Bernstein",
  description:
    "Subscribe to The Sunday Starter newsletter on LinkedIn - delivered weekly to accelerate your sales success.",
};

export default async function NewsletterPage() {
  const data = await getNewsletterPageData();

  return (
    <main className="py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <Image
              src="/logo/sunday-starter.png"
              alt="The Sunday Starter Newsletter"
              width={300}
              height={100}
              className="h-auto w-auto"
            />
          </div>
          <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
            {data.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-2xl font-semibold text-accent md:text-3xl">
            {data.tagline}
          </p>
          <p className="mx-auto mt-8 max-w-3xl font-sans text-lg text-muted-foreground md:text-xl">
            {data.description}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href={data.newsletter.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#0966c2] px-12 py-6 font-sans text-2xl font-bold text-white shadow-2xl transition-all hover:bg-[#0855a3] hover:shadow-3xl"
          >
            {data.ctaText}
          </Link>
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <h2 className="text-center font-serif text-4xl font-bold text-primary md:text-5xl">
            {data.benefitsHeadline}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl border-2 border-[#0966c2] bg-card p-8 text-center transition-all hover:border-[#0966c2] hover:shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0966c2] bg-white">
                  <Icon src={benefit.icon || "/icons/analytics-11962812.svg"} alt={benefit.title} size={40} />
                </div>
                <h3 className="mt-6 font-sans text-2xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-4 font-sans text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Content Section */}
        <div className="mt-24">
          <h2 className="text-center font-serif text-4xl font-bold text-primary md:text-5xl">
            {data.featuredContentHeadline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-lg text-muted-foreground md:text-xl">
            {data.featuredContentDescription}
          </p>
          <div className="mt-12 aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#0966c2] shadow-lg">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${data.newsletter.playlistId}`}
              title="Sunday Starter Newsletter Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            {data.finalCtaHeadline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg md:text-xl">
            {data.finalCtaDescription}
          </p>
          <Link
            href={data.newsletter.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-accent px-12 py-6 font-sans text-2xl font-bold text-accent-foreground shadow-2xl transition-all hover:bg-accent/90 hover:shadow-3xl"
          >
            {data.finalCtaButtonText}
          </Link>
        </div>
      </div>
    </main>
  );
}
