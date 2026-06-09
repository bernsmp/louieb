import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Entrepreneurs — Fractional Sales Leadership | Louie Bernstein",
  description: "Fractional sales leadership for bootstrapped entrepreneurs who need a repeatable sales system without the cost of a full-time VP of Sales.",
  openGraph: {
    title: "For Entrepreneurs — Fractional Sales Leadership",
    description: "Fractional sales leadership for bootstrapped entrepreneurs who need a repeatable sales system without the cost of a full-time VP of Sales.",
    type: "article",
    url: "https://louiebernstein.com/entrepreneurs",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "For Entrepreneurs — Fractional Sales Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Entrepreneurs — Fractional Sales Leadership",
    description: "Fractional sales leadership for bootstrapped entrepreneurs who need a repeatable sales system without the cost of a full-time VP of Sales.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/entrepreneurs",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function EntrepreneursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
