import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * HeroBackground — solid dark blue hero with an image card below the text.
 * Matches the style of /fractional-sales-leader-vs-consultant.
 * Drop-in replacement for BackgroundCells.
 */

interface HeroBackgroundProps {
  children?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function HeroBackground({ children, imageSrc, imageAlt, className }: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex justify-center overflow-hidden pb-16 md:pb-20 lg:pb-24",
        className
      )}
    >
      {/* Content + image, matching the vs-consultant layout */}
      <div className="relative z-50 mt-40 select-none w-full">
        {children}

        {/* Image card below hero text */}
        <div className="mt-6 md:mt-8 px-6 pb-4">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
