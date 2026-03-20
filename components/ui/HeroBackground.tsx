"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";

interface HeroBackgroundProps {
  children?: ReactNode;
  accentColor?: string;
  fillColor?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroBackground({
  children,
  accentColor = "#0966c2",
  fillColor = "rgba(14,165,233,0.3)",
  className,
  imageSrc = "/images/fractional-sales-leader-hero.png",
  imageAlt = "Sales leadership",
}: HeroBackgroundProps) {
  return (
    <BackgroundCells accentColor={accentColor} fillColor={fillColor} className={className}>
      {children}
      <div className="mt-4 md:mt-6 px-6">
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
    </BackgroundCells>
  );
}
