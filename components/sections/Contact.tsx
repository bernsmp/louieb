import Link from "next/link";

interface ContactProps {
  email?: string;
  phone?: string;
  calendlyUrl?: string;
  headline?: string;
  description?: string;
  emailLabel?: string;
  phoneLabel?: string;
  ctaButtonText?: string;
}

export function Contact({
  email = "Louie@LouieBernstein.com",
  phone = "(404) 808-5326",
  calendlyUrl = "https://calendly.com/louiebernstein/30minutes",
  headline = "Let's Talk",
  description = "Ready to transform your sales team? Get in touch today.",
  emailLabel = "Email",
  phoneLabel = "Phone",
  ctaButtonText = "Schedule a 30-Minute Call",
}: ContactProps) {
  // Format phone for tel: link
  const phoneLink = `tel:+1${phone.replace(/\D/g, '')}`;

  return (
    <section id="contact" className="bg-white py-32">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            {description}
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          {/* Email */}
          <div className="group w-full max-w-sm rounded-2xl border-2 border-neutral-200 bg-white p-10 text-center transition-all hover:border-neutral-900 hover:shadow-xl">
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
              {emailLabel}
            </h3>
            <a
              href={`mailto:${email}`}
              className="mt-4 inline-block text-lg font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {email}
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-neutral-900 px-12 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-neutral-800 hover:scale-105 hover:shadow-2xl"
          >
            {ctaButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
