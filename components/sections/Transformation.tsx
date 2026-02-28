export function Transformation() {
  const before = [
    "You're still on every sales call — even the ones your rep should own",
    "The playbook lives in your head. Nothing is documented.",
    "Revenue is unpredictable because everything runs through you",
  ];

  const after = [
    "Your team handles discovery, follow-up, and close. You review the wins.",
    "A documented sales playbook your reps follow without asking you",
    "A pipeline you can forecast in a 10-minute Monday morning review",
  ];

  return (
    <section className="bg-white py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
          Here&apos;s What Changes
        </h2>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Where you are now
            </p>
            <ul className="mt-8 space-y-6">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200">
                    <span className="h-2 w-2 rounded-full bg-neutral-500" />
                  </span>
                  <p className="text-lg text-neutral-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border-2 border-neutral-900 bg-neutral-900 p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Where you&apos;ll be in 90 days
            </p>
            <ul className="mt-8 space-y-6">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-700">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <p className="text-lg text-white">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mechanism bridge */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            The bridge between the two
          </p>
          <p className="mt-3 text-2xl font-bold text-neutral-900 md:text-3xl">
            The Founder&apos;s and CEO&apos;s Sales System
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            A 20-step, 588-page blueprint covering everything from hiring your first rep
            to building a pipeline you can forecast without being in every deal.
            One client grew sales 61% year-over-year using this exact system — and it&apos;s free.
          </p>
          <a
            href="/course"
            className="mt-8 inline-block rounded-lg border-2 border-neutral-900 px-8 py-3 font-semibold text-neutral-900 transition-all hover:bg-neutral-900 hover:text-white"
          >
            See the Full System →
          </a>
        </div>
      </div>
    </section>
  );
}
