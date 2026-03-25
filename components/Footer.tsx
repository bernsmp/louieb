import Image from "next/image";
import Link from "next/link";

interface QuickLink {
  label: string;
  href: string;
}

interface FooterProps {
  tagline?: string;
  slogan?: string;
  copyrightName?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  youtube?: string;
  quickLinksLabel?: string;
  servicesLinksLabel?: string;
  getInTouchLabel?: string;
  quickLinks?: QuickLink[];
  servicesLinks?: QuickLink[];
}

const DEFAULT_QUICK_LINKS: QuickLink[] = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Videos", href: "/videos" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "FAQs", href: "/faqs" },
  { label: "Tools", href: "/tools" },
];

const DEFAULT_SERVICES_LINKS: QuickLink[] = [
  { label: "Fractional Sales Leader", href: "/fractional-sales-leader" },
  { label: "For Entrepreneurs", href: "/entrepreneurs" },
  { label: "For Founders", href: "/founders" },
  { label: "Sales Training", href: "/salesperson" },
  { label: "Course", href: "/course" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer({
  tagline = "Fractional Sales Leader",
  slogan = "Less Spend. More Sales.",
  copyrightName = "Louie Bernstein",
  email = "Louie@LouieBernstein.com",
  phone = "(404) 808-5326",
  linkedin = "https://www.linkedin.com/in/sales-processes/",
  youtube = "https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl",
  quickLinksLabel = "Explore",
  servicesLinksLabel = "Services",
  getInTouchLabel = "Get In Touch",
  quickLinks = DEFAULT_QUICK_LINKS,
  servicesLinks = DEFAULT_SERVICES_LINKS,
}: FooterProps) {
  const phoneLink = `tel:+1${phone.replace(/\D/g, '')}`;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* Explore Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
              {quickLinksLabel}
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-neutral-600 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
              {servicesLinksLabel}
            </h4>
            <ul className="mt-4 space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-neutral-600 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
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
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/images/Inc500.jpg"
                alt="Inc. 500 Winner"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
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
