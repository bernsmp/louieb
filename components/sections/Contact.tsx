import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-32">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            Let's Talk
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            Ready to transform your sales team? Get in touch today.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {/* Email */}
          <div className="group rounded-2xl border-2 border-neutral-200 bg-white p-10 text-center transition-all hover:border-neutral-900 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform group-hover:scale-110">
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-2xl font-bold text-neutral-900">
              Email
            </h3>
            <a
              href="mailto:Louie@LouieBernstein.com"
              className="mt-4 inline-block text-lg font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Louie@LouieBernstein.com
            </a>
          </div>

          {/* Phone */}
          <div className="group rounded-2xl border-2 border-neutral-200 bg-white p-10 text-center transition-all hover:border-neutral-900 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform group-hover:scale-110">
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-2xl font-bold text-neutral-900">
              Phone
            </h3>
            <a
              href="tel:+14048085326"
              className="mt-4 inline-block text-lg font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              (404) 808-5326
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="https://calendly.com/louiebernstein/30minutes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-neutral-900 px-12 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-neutral-800 hover:scale-105 hover:shadow-2xl"
          >
            Schedule a 30-Minute Call
          </Link>
        </div>
      </div>
    </section>
  );
}
