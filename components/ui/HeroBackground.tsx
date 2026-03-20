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

const PATTERNS: Record<HeroPattern, CSSProperties> = {
  /** Small blue dots on 24px grid */
  "dot-grid": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.45) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  },
  /** 45° diagonal lines */
  "diagonal-lines": {
    backgroundImage:
      "repeating-linear-gradient(45deg, transparent 0px, transparent 14px, rgba(9,102,194,0.22) 14px, rgba(9,102,194,0.22) 15px)",
  },
  /** Horizontal rules */
  "horizontal-lines": {
    backgroundImage:
      "repeating-linear-gradient(0deg, transparent 0px, transparent 27px, rgba(9,102,194,0.22) 27px, rgba(9,102,194,0.22) 28px)",
  },
  /** Square grid (both axes) */
  "square-grid": {
    backgroundImage:
      "linear-gradient(rgba(9,102,194,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(9,102,194,0.22) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
  },
  /** X-pattern (crossing diagonals) */
  "diagonal-cross": {
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(9,102,194,0.14) 0px, rgba(9,102,194,0.14) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(9,102,194,0.14) 0px, rgba(9,102,194,0.14) 1px, transparent 1px, transparent 20px)",
  },
  /** Large dots, wide spacing */
  "large-dots": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.4) 2.5px, transparent 2.5px)",
    backgroundSize: "48px 48px",
  },
  /** Grid with accent dots at intersections */
  "grid-dots": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.5) 1.5px, transparent 1.5px), linear-gradient(rgba(9,102,194,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(9,102,194,0.1) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  },
  /** Very fine grid */
  "fine-grid": {
    backgroundImage:
      "linear-gradient(rgba(9,102,194,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(9,102,194,0.14) 1px, transparent 1px)",
    backgroundSize: "16px 16px",
  },
  /** Vertical lines */
  "vertical-lines": {
    backgroundImage:
      "repeating-linear-gradient(90deg, transparent 0px, transparent 27px, rgba(9,102,194,0.22) 27px, rgba(9,102,194,0.22) 28px)",
  },
  /** Rotated diamond grid */
  "diamond": {
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(9,102,194,0.18) 0px, rgba(9,102,194,0.18) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(135deg, rgba(9,102,194,0.18) 0px, rgba(9,102,194,0.18) 1px, transparent 1px, transparent 20px)",
    backgroundSize: "28px 28px",
  },
  /** Staggered honeycomb dot rows */
  "staggered-dots": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.45) 1.5px, transparent 1.5px), radial-gradient(circle, rgba(9,102,194,0.45) 1.5px, transparent 1.5px)",
    backgroundSize: "32px 32px",
    backgroundPosition: "0 0, 16px 16px",
  },
  /** Bold grid lines */
  "bold-grid": {
    backgroundImage:
      "linear-gradient(rgba(9,102,194,0.28) 2px, transparent 2px), linear-gradient(90deg, rgba(9,102,194,0.28) 2px, transparent 2px)",
    backgroundSize: "40px 40px",
  },
  /** Sparse oversized dots */
  "sparse-dots": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.38) 3px, transparent 3px)",
    backgroundSize: "64px 64px",
  },
  /** Two sets of diagonals at 30° and -30° */
  "double-diagonal": {
    backgroundImage:
      "repeating-linear-gradient(30deg, rgba(9,102,194,0.12) 0px, rgba(9,102,194,0.12) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(-30deg, rgba(9,102,194,0.12) 0px, rgba(9,102,194,0.12) 1px, transparent 1px, transparent 24px)",
  },
  /** Large open grid squares */
  "large-grid": {
    backgroundImage:
      "linear-gradient(rgba(9,102,194,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(9,102,194,0.18) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
  },
  /** Tiny tight dots */
  "tiny-dots": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.55) 0.75px, transparent 0.75px)",
    backgroundSize: "12px 12px",
  },
  /** -45° reverse diagonal lines */
  "reverse-diagonal": {
    backgroundImage:
      "repeating-linear-gradient(-45deg, transparent 0px, transparent 14px, rgba(9,102,194,0.22) 14px, rgba(9,102,194,0.22) 15px)",
  },
  /** Hexagonal dot packing */
  "hex-dots": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.42) 1.5px, transparent 1.5px), radial-gradient(circle, rgba(9,102,194,0.42) 1.5px, transparent 1.5px)",
    backgroundSize: "36px 20px",
    backgroundPosition: "0 0, 18px 10px",
  },
  /** Dots offset by half for a shifted feel */
  "dots-offset": {
    backgroundImage:
      "radial-gradient(circle, rgba(9,102,194,0.4) 1.5px, transparent 1.5px)",
    backgroundSize: "28px 28px",
    backgroundPosition: "14px 14px",
  },
  /** Repeating concentric ring tiles */
  "concentric": {
    backgroundImage:
      "radial-gradient(circle at center, transparent 20px, rgba(9,102,194,0.18) 21px, transparent 22px, transparent 42px, rgba(9,102,194,0.1) 43px, transparent 44px)",
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
      {/* CSS pattern — top 320px, fades to dark */}
      <div className="absolute top-0 left-0 right-0 h-80 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={patternStyle} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
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
