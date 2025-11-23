"use client";

import Link from "next/link";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video controls are always visible
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Set controls attribute
      video.controls = true;
      video.setAttribute('controls', '');
      
      // Ensure controls don't get removed
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'controls') {
            if (!video.hasAttribute('controls')) {
              video.setAttribute('controls', '');
              video.controls = true;
            }
          }
        });
      });
      
      observer.observe(video, {
        attributes: true,
        attributeFilter: ['controls']
      });
      
      // Auto-play when user interacts (after controls are visible)
      const playVideo = () => {
        if (video.paused) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        }
      };
      
      video.addEventListener('click', playVideo);
      video.addEventListener('touchstart', playVideo);
      
      return () => {
        observer.disconnect();
        video.removeEventListener('click', playVideo);
        video.removeEventListener('touchstart', playVideo);
      };
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <BackgroundCells className="bg-slate-950">
        <div className="text-center">
          {/* Main Heading - Large, bold, white text */}
          <h1 className="text-4xl font-medium text-white md:text-5xl lg:text-7xl xl:text-8xl">
            Fractional Sales Leader
          </h1>
          
          {/* LinkedIn Credential Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900/50 px-4 py-2">
            <span className="text-sm font-semibold text-white">LinkedIn Top Voice</span>
            <span className="text-neutral-400">|</span>
            <span className="text-sm text-neutral-300">50+ Years Sales Experience</span>
          </div>
          
          {/* Tagline - Smaller, lighter weight, subtle gray */}
          <p className="mt-4 text-xl text-neutral-300 md:text-2xl lg:text-3xl">
            Less Spend. More Sales.
          </p>
          
          {/* Video - Right under subhead */}
          <div className="mx-auto mt-8 max-w-4xl px-4" style={{ pointerEvents: 'auto' }}>
            <video
              ref={videoRef}
              loop
              playsInline
              controls
              preload="metadata"
              className="w-full rounded-lg shadow-2xl"
              style={{ 
                display: 'block',
                pointerEvents: 'auto'
              } as React.CSSProperties}
            >
              <source src="/videos/Fractional Sales Leader.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Value Proposition - LinkedIn copy */}
          <p className="mx-auto mt-8 max-w-3xl text-base text-neutral-200 md:text-lg lg:text-xl">
            I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.
          </p>

          {/* CTA Buttons - With accent colors */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#process");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-blue-50 hover:shadow-lg hover:border-2 hover:border-[#0966c2] md:px-10 md:py-4 md:text-lg"
            >
              Learn How It Works
            </Link>
            <Link
              href="https://calendly.com/louiebernstein/30minutes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-[#0966c2] bg-[#0966c2] px-8 py-3 text-base font-semibold text-white transition-all hover:border-[#0855a3] hover:bg-[#0855a3] hover:shadow-lg md:px-10 md:py-4 md:text-lg"
            >
              Schedule a Discussion
            </Link>
          </div>
        </div>
      </BackgroundCells>
    </section>
  );
}
