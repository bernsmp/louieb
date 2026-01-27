"use client";

import Link from "next/link";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";

interface HeroProps {
  headline?: string;
  tagline?: string;
  description?: string;
  videoId?: string;
  credentialPrimary?: string;
  credentialSecondary?: string;
  ctaPrimaryText?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryText?: string;
  ctaSecondaryUrl?: string;
}

export function Hero({
  headline = "Fractional Sales Leader",
  tagline = "Less Spend. More Sales.",
  description = "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
  videoId = "fCVKpcpD8tA",
  credentialPrimary = "LinkedIn Top Voice",
  credentialSecondary = "50+ Years Sales Experience",
  ctaPrimaryText = "Learn How It Works",
  ctaPrimaryUrl = "#process",
  ctaSecondaryText = "Schedule a Discussion",
  ctaSecondaryUrl = "https://calendly.com/louiebernstein/30minutes",
}: HeroProps) {

  return (
    <section className="relative w-full overflow-hidden">
      <BackgroundCells className="bg-slate-950">
        <div className="text-center">
          {/* Main Heading - Large, bold, white text */}
          <h1 className="text-4xl font-medium text-white md:text-5xl lg:text-7xl xl:text-8xl">
            {headline}
          </h1>
          
          {/* LinkedIn Credential Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-4 py-2">
            <span className="text-sm font-semibold text-white">{credentialPrimary}</span>
            <span className="text-neutral-400">|</span>
            <span className="text-sm text-neutral-300">{credentialSecondary}</span>
          </div>
          
          {/* Tagline - Smaller, lighter weight, subtle gray */}
          <p className="mt-4 text-xl text-neutral-300 md:text-2xl lg:text-3xl">
            {tagline}
          </p>
          
          {/* Video - Right under subhead */}
          <div className="mx-auto mt-8 max-w-4xl px-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={headline}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Value Proposition - LinkedIn copy */}
          <p className="mx-auto mt-8 max-w-3xl whitespace-pre-line text-base text-neutral-200 md:text-lg lg:text-xl">
            {description}
          </p>

          {/* CTA Buttons - With accent colors */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href={ctaPrimaryUrl}
              onClick={(e) => {
                if (ctaPrimaryUrl.startsWith('#')) {
                  e.preventDefault();
                  const element = document.querySelector(ctaPrimaryUrl);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }}
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-blue-50 hover:shadow-lg hover:border-2 hover:border-[#0966c2] md:px-10 md:py-4 md:text-lg"
            >
              {ctaPrimaryText}
            </Link>
            <Link
              href={ctaSecondaryUrl}
              target={ctaSecondaryUrl.startsWith('http') ? "_blank" : undefined}
              rel={ctaSecondaryUrl.startsWith('http') ? "noopener noreferrer" : undefined}
              className="rounded-lg border-2 border-[#0966c2] bg-[#0966c2] px-8 py-3 text-base font-semibold text-white transition-all hover:border-[#0855a3] hover:bg-[#0855a3] hover:shadow-lg md:px-10 md:py-4 md:text-lg"
            >
              {ctaSecondaryText}
            </Link>
          </div>
        </div>
      </BackgroundCells>
    </section>
  );
}
