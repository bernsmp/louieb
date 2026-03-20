import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

/**
 * HeroBackground — pure CSS hero patterns, zero JavaScript.
 * Drop-in replacement for BackgroundCells with unique per-page visuals.
 */

export type HeroPattern =
  | "dot-grid"
  | "diagonal-lines"
  | "horizontal-lines"
  | "square-grid"
  | "diagonal-cross"
  | "large-dots"
  | "grid-dots"
  | "fine-grid"
  | "vertical-lines"
  | "diamond"
  | "staggered-dots"
  | "bold-grid"
  | "sparse-dots"
  | "double-diagonal"
  | "large-grid"
  | "tiny-dots"
  | "reverse-diagonal"
  | "hex-dots"
  | "dots-offset"
  | "concentric";

const B = "rgba(9,102,194,";   // brand blue base
const PATTERNS: Record<HeroPattern, CSSProperties> = {
  /** Small blue dots on 24px grid */
  "dot-grid": {
    backgroundImage: `radial-gradient(circle, ${B}0.7) 2px, transparent 2px)`,
    backgroundSize: "24px 24px",
  },
  /** 45° diagonal lines */
  "diagonal-lines": {
    backgroundImage: `repeating-linear-gradient(45deg, transparent 0px, transparent 12px, ${B}0.5) 12px, ${B}0.5) 14px)`,
  },
  /** Horizontal rules */
  "horizontal-lines": {
    backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 24px, ${B}0.5) 24px, ${B}0.5) 26px)`,
  },
  /** Square grid (both axes) */
  "square-grid": {
    backgroundImage: `linear-gradient(${B}0.45) 1px, transparent 1px), linear-gradient(90deg, ${B}0.45) 1px, transparent 1px)`,
    backgroundSize: "32px 32px",
  },
  /** X-pattern (crossing diagonals) */
  "diagonal-cross": {
    backgroundImage: `repeating-linear-gradient(45deg, ${B}0.35) 0px, ${B}0.35) 1.5px, transparent 1.5px, transparent 18px), repeating-linear-gradient(-45deg, ${B}0.35) 0px, ${B}0.35) 1.5px, transparent 1.5px, transparent 18px)`,
  },
  /** Large dots, wide spacing */
  "large-dots": {
    backgroundImage: `radial-gradient(circle, ${B}0.65) 4px, transparent 4px)`,
    backgroundSize: "48px 48px",
  },
  /** Grid lines with bright dots at intersections */
  "grid-dots": {
    backgroundImage: `radial-gradient(circle, ${B}0.8) 2.5px, transparent 2.5px), linear-gradient(${B}0.25) 1px, transparent 1px), linear-gradient(90deg, ${B}0.25) 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
  },
  /** Fine grid */
  "fine-grid": {
    backgroundImage: `linear-gradient(${B}0.35) 1px, transparent 1px), linear-gradient(90deg, ${B}0.35) 1px, transparent 1px)`,
    backgroundSize: "16px 16px",
  },
  /** Vertical lines */
  "vertical-lines": {
    backgroundImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 24px, ${B}0.5) 24px, ${B}0.5) 26px)`,
  },
  /** Rotated diamond grid */
  "diamond": {
    backgroundImage: `repeating-linear-gradient(45deg, ${B}0.4) 0px, ${B}0.4) 1.5px, transparent 1.5px, transparent 18px), repeating-linear-gradient(135deg, ${B}0.4) 0px, ${B}0.4) 1.5px, transparent 1.5px, transparent 18px)`,
    backgroundSize: "26px 26px",
  },
  /** Staggered honeycomb dot rows */
  "staggered-dots": {
    backgroundImage: `radial-gradient(circle, ${B}0.7) 2px, transparent 2px), radial-gradient(circle, ${B}0.7) 2px, transparent 2px)`,
    backgroundSize: "32px 32px",
    backgroundPosition: "0 0, 16px 16px",
  },
  /** Bold grid lines */
  "bold-grid": {
    backgroundImage: `linear-gradient(${B}0.5) 2px, transparent 2px), linear-gradient(90deg, ${B}0.5) 2px, transparent 2px)`,
    backgroundSize: "40px 40px",
  },
  /** Sparse oversized dots */
  "sparse-dots": {
    backgroundImage: `radial-gradient(circle, ${B}0.65) 5px, transparent 5px)`,
    backgroundSize: "64px 64px",
  },
  /** Two sets of diagonals at 30° and -30° */
  "double-diagonal": {
    backgroundImage: `repeating-linear-gradient(30deg, ${B}0.4) 0px, ${B}0.4) 1.5px, transparent 1.5px, transparent 22px), repeating-linear-gradient(-30deg, ${B}0.4) 0px, ${B}0.4) 1.5px, transparent 1.5px, transparent 22px)`,
  },
  /** Large open grid squares */
  "large-grid": {
    backgroundImage: `linear-gradient(${B}0.4) 1px, transparent 1px), linear-gradient(90deg, ${B}0.4) 1px, transparent 1px)`,
    backgroundSize: "64px 64px",
  },
  /** Tight small dots */
  "tiny-dots": {
    backgroundImage: `radial-gradient(circle, ${B}0.65) 1.5px, transparent 1.5px)`,
    backgroundSize: "12px 12px",
  },
  /** -45° reverse diagonal lines */
  "reverse-diagonal": {
    backgroundImage: `repeating-linear-gradient(-45deg, transparent 0px, transparent 12px, ${B}0.5) 12px, ${B}0.5) 14px)`,
  },
  /** Hexagonal dot packing */
  "hex-dots": {
    backgroundImage: `radial-gradient(circle, ${B}0.7) 2px, transparent 2px), radial-gradient(circle, ${B}0.7) 2px, transparent 2px)`,
    backgroundSize: "36px 20px",
    backgroundPosition: "0 0, 18px 10px",
  },
  /** Dots shifted by half step */
  "dots-offset": {
    backgroundImage: `radial-gradient(circle, ${B}0.65) 2px, transparent 2px)`,
    backgroundSize: "28px 28px",
    backgroundPosition: "14px 14px",
  },
  /** Repeating concentric ring tiles */
  "concentric": {
    backgroundImage: `radial-gradient(circle at center, transparent 18px, ${B}0.5) 19px, ${B}0.5) 21px, transparent 21px, transparent 40px, ${B}0.3) 41px, ${B}0.3) 43px, transparent 43px)`,
    backgroundSize: "88px 88px",
  },
};

interface HeroBackgroundProps {
  children?: ReactNode;
  pattern: HeroPattern;
  className?: string;
}

export function HeroBackground({ children, pattern, className }: HeroBackgroundProps) {
  const patternStyle = PATTERNS[pattern] ?? PATTERNS["dot-grid"];

  return (
    <div
      className={cn(
        "relative min-h-screen flex justify-center overflow-hidden pb-16 md:pb-20 lg:pb-24",
        className
      )}
    >
      {/* Pattern — full height, fades out in the lower third */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={patternStyle} />
        {/* Fade: fully visible top half, fades out bottom third */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% via-slate-950/60 via-75% to-slate-950" />
      </div>

      {/* Content */}
      {children && (
        <div className="relative z-50 mt-40 select-none w-full">
          {children}
        </div>
      )}
    </div>
  );
}
