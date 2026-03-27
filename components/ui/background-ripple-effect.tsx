"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

// Pre-computed outside component — avoids recreation on every render
const matrix = Array.from({ length: 47 }, (_, i) =>
  Array.from({ length: 30 }, (_, j) => ({ row: i, col: j }))
);

interface BackgroundCellsProps {
  children?: React.ReactNode;
  className?: string;
  accentColor?: string;
  fillColor?: string;
}

export const BackgroundCells = ({
  children,
  className,
  accentColor = "#0966c2",
  fillColor = "rgba(14,165,233,0.3)",
}: BackgroundCellsProps) => {
  return (
    <div className={cn("relative min-h-screen flex justify-center overflow-hidden pb-16 md:pb-20 lg:pb-24", className)}>
      <BackgroundCellCore accentColor={accentColor} fillColor={fillColor} />
      {children && (
        <div className="relative z-50 mt-40 select-none w-full">
          {children}
        </div>
      )}
    </div>
  );
};

const BackgroundCellCore = ({
  accentColor,
  fillColor,
}: {
  accentColor: string;
  fillColor: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  // Cache the bounding rect — only recalculate on resize, not every mouse move
  useEffect(() => {
    const updateRect = () => {
      rectRef.current = ref.current?.getBoundingClientRect() ?? null;
    };
    updateRect();
    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  // Throttle mouse move to one update per animation frame
  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (rafRef.current !== null) return;
    const clientX = event.clientX;
    const clientY = event.clientY;
    rafRef.current = requestAnimationFrame(() => {
      const rect = rectRef.current;
      if (rect) {
        setMousePosition({ x: clientX - rect.left, y: clientY - rect.top });
      }
      rafRef.current = null;
    });
  }, []);

  const size = 300;
  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="h-full absolute inset-0">
      <div className="absolute h-[20rem] inset-y-0 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern accentColor={accentColor} fillColor={fillColor} isAccent />
        </div>
        <Pattern className="opacity-[0.5]" fillColor={fillColor} />
      </div>
    </div>
  );
};

interface PatternProps {
  className?: string;
  accentColor?: string;
  fillColor?: string;
  isAccent?: boolean;
}

const Pattern = ({ className, accentColor, fillColor = "rgba(14,165,233,0.3)", isAccent }: PatternProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Imperative click ripple — no React re-renders, direct DOM animation
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>("[data-row]");
    if (!target || !containerRef.current) return;

    const clickRow = parseInt(target.dataset.row!, 10);
    const clickCol = parseInt(target.dataset.col!, 10);
    const inners = containerRef.current.querySelectorAll<HTMLElement>("[data-inner]");

    // Remove all animations first, then force a single reflow, then set new animations
    inners.forEach((el) => { el.style.animation = "none"; });
    void containerRef.current.offsetHeight; // single reflow to restart animations
    inners.forEach((el) => {
      const r = parseInt(el.dataset.row!, 10);
      const c = parseInt(el.dataset.col!, 10);
      const dist = Math.sqrt(Math.pow(clickRow - r, 2) + Math.pow(clickCol - c, 2));
      el.style.animation = `bgCellRipple ${Math.min(dist * 0.2 + 0.3, 2)}s ease-out ${dist * 0.05}s forwards`;
    });
  }, []);

  return (
    <div ref={containerRef} className={cn("flex flex-row relative z-30", className)} onClick={handleClick}>
      {matrix.map((row, rowIdx) => (
        <div key={rowIdx} className="flex flex-col relative z-20 border-b">
          {row.map((_, colIdx) => (
            <div
              key={colIdx}
              data-row={rowIdx}
              data-col={colIdx}
              className="bg-transparent border-l border-b border-neutral-600 relative z-[100] group"
              style={isAccent && accentColor ? { borderColor: accentColor } : undefined}
            >
              <div
                data-inner
                data-row={rowIdx}
                data-col={colIdx}
                className="h-12 w-12 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{ backgroundColor: fillColor }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
