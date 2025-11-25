import Link from "next/link";

interface ValuePropositionProps {
  headline?: string;
  subheadline?: string;
  description?: string;
  ctaText?: string;
}

export function ValueProposition({
  headline = "It's not how much you sell.",
  subheadline = "It's how much you take home.",
  description = "Every dollar you spend on inefficient sales processes is a dollar you don't take home. Let's fix that.",
  ctaText = "Let's Get Going!",
}: ValuePropositionProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-32 text-white">
      {/* More dramatic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-white blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-6xl font-bold leading-tight md:text-7xl lg:text-8xl">
          {headline}
        </h2>
        <p className="mt-8 text-4xl font-semibold text-neutral-300 md:text-5xl lg:text-6xl">
          {subheadline}
        </p>
        <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
          {description}
        </p>
        <Link
          href="https://calendly.com/louiebernstein/30minutes"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-lg bg-white px-12 py-5 text-lg font-bold text-neutral-900 shadow-2xl transition-all hover:bg-neutral-100 hover:scale-105 hover:shadow-3xl"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
