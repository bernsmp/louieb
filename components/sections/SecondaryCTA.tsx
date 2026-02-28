import Link from "next/link";

export function SecondaryCTA() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
          Not ready to book a call yet?
        </p>
        <h2 className="mt-4 text-4xl font-bold text-neutral-900 md:text-5xl">
          Get the free course
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
          The complete Founder&apos;s and CEO&apos;s Sales System — 20 modules, templates,
          scripts, and the 588-page playbook that&apos;s helped companies grow sales over
          61% year-over-year. Free on YouTube.
        </p>
        <Link
          href="/course"
          className="mt-8 inline-block rounded-lg bg-neutral-900 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-xl"
        >
          Get the Free Course →
        </Link>
      </div>
    </section>
  );
}
