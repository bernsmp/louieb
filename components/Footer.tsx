import Link from "next/link";

interface FooterProps {
  tagline?: string;
  slogan?: string;
  copyrightName?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  youtube?: string;
  quickLinksLabel?: string;
  getInTouchLabel?: string;
}

export function Footer({
  tagline = "Fractional Sales Leader",
  slogan = "Less Spend. More Sales.",
  copyrightName = "Louie Bernstein",
  email = "Louie@LouieBernstein.com",
  phone = "(404) 808-5326",
  linkedin = "https://www.linkedin.com/in/sales-processes/",
  youtube = "https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl",
  quickLinksLabel = "Quick Links",
  getInTouchLabel = "Get In Touch",
}: FooterProps) {
  const phoneLink = `tel:+1${phone.replace(/\D/g, '')}`;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand & Tagline */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary">
              {copyrightName}
            </h3>
            <p className="mt-3 font-sans text-base text-neutral-600">
              {tagline}
            </p>
            <p className="mt-1 font-sans text-lg font-semibold text-foreground">
              {slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
              {quickLinksLabel}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="font-sans text-base text-neutral-600 transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" className="font-sans text-base text-neutral-600 transition-colors hover:text-primary">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/videos" className="font-sans text-base text-neutral-600 transition-colors hover:text-primary">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="font-sans text-base text-neutral-600 transition-colors hover:text-primary">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="font-sans text-base text-neutral-600 transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
              {getInTouchLabel}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${email}`} className="font-sans text-base text-neutral-600 transition-colors hover:text-primary">
                  {email}
                </a>
              </li>
              <li>
                <a href={phoneLink} aria-label={`Call ${phone}`} className="font-sans text-base text-neutral-600 transition-colors hover:text-primary">
                  {phone}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:bg-[#0966c2] hover:shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:bg-[#0966c2] hover:shadow-md"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center font-sans text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} {copyrightName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
