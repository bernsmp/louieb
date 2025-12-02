import Link from "next/link";

interface FractionalSalesLeaderProps {
  headline?: string;
  headlineAccent?: string;
  hook?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  calloutText?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export function FractionalSalesLeader({
  headline = "Fractional Sales Leader for the",
  headlineAccent = "Founder Trapped in Sales",
  hook = "You built this. From nothing. Now you're stuck.",
  paragraph1 = "That brutal climb from $1M to $10M in revenue? It's a trap. You know you're the bottleneck, the one still running sales calls, but the thought of a $250k+ VP of Sales gamble makes your stomach churn. And those big consulting firms with their \"proprietary systems\"? They've never felt the grind of scaling from zero. They don't get it.",
  paragraph2 = "I do.",
  paragraph3 = "A Fractional Sales Leader isn't just another line item on your P&L. It's your path to freedom. It's for the technical or operational founder who needs more than just a manager; you need a partner who has walked this exact path and scaled a company from the ground up to the INC 500.",
  paragraph4 = "Forget the corporate jargon. This is about building a repeatable sales machine tailored for your business, so you can transition from being the Chief Salesperson back to being the CEO. We'll build your sales playbook, coach your team, and implement a pipeline you can actually trust.",
  calloutText = "Stop letting sales management steal your time and kill your growth. Let's build the system that frees you.",
  ctaText = "Let's Talk",
  ctaUrl = "https://calendly.com/louiebernstein/30minutes",
}: FractionalSalesLeaderProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {headline}{" "}
            <span className="text-neutral-500">{headlineAccent}</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-2xl font-semibold leading-relaxed text-neutral-800 md:text-3xl">
            {hook}
          </p>
        </div>

        <div className="mt-12 space-y-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
          <p>{paragraph1}</p>

          <p className="text-xl font-semibold text-neutral-900 md:text-2xl">
            {paragraph2}
          </p>

          <p>{paragraph3}</p>

          <p>{paragraph4}</p>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-neutral-900 bg-white p-8 shadow-sm">
          <p className="text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl">
            {calloutText}
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-neutral-900 px-12 py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-neutral-800 hover:scale-105"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
