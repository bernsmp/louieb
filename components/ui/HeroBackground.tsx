"use client";

import { ReactNode } from "react";
import { BackgroundCells } from "@/components/ui/background-ripple-effect";

interface HeroBackgroundProps {
  children?: ReactNode;
  accentColor?: string;
  fillColor?: string;
  className?: string;
}

export function HeroBackground({
  children,
  accentColor = "#0966c2",
  fillColor = "rgba(14,165,233,0.3)",
  className,
}: HeroBackgroundProps) {
  return (
    <BackgroundCells accentColor={accentColor} fillColor={fillColor} className={className}>
      {children}
    </BackgroundCells>
  );
}
