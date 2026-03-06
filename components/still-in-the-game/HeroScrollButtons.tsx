"use client";

interface HeroScrollButtonsProps {
  ctaPrimaryText: string;
  ctaSecondaryText: string;
}

export function HeroScrollButtons({
  ctaPrimaryText,
  ctaSecondaryText,
}: HeroScrollButtonsProps) {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
      <button
        onClick={() => scrollTo("#get-the-guide")}
        className="rounded-lg bg-white px-10 py-4 text-lg font-bold text-slate-950 transition-all hover:bg-blue-50 hover:shadow-lg"
      >
        {ctaPrimaryText}
      </button>
      <button
        onClick={() => scrollTo("#whats-inside")}
        className="rounded-lg border-2 border-neutral-600 px-10 py-4 text-lg font-semibold text-neutral-300 transition-all hover:border-neutral-400 hover:text-white"
      >
        {ctaSecondaryText}
      </button>
    </div>
  );
}
