import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The ICP Clarity Checklist | Free 15-Point Ideal Customer Profile Check | Louie Bernstein",
  description:
    "15 yes/no checks to find out if you actually know who your best customer is. Free 2-minute checklist for B2B founders at $1M–$10M ARR — get your ICP Clarity Score and what to fix first.",
  keywords: [
    "ICP checklist",
    "ideal customer profile checklist",
    "ICP clarity",
    "how good is my ICP",
    "ideal customer profile assessment",
    "b2b ICP audit",
    "target customer checklist",
    "customer profile quiz",
    "ICP for founders",
    "free ICP tool",
  ],
  openGraph: {
    title: "The ICP Clarity Checklist",
    description:
      "15 checks to find out if you actually know who your best customer is. Free 2-minute checklist for B2B founders.",
    type: "website",
    url: "https://louiebernstein.com/icp-checklist",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The ICP Clarity Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The ICP Clarity Checklist",
    description:
      "15 checks to find out if you actually know who your best customer is. Free 2-minute checklist for B2B founders.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/icp-checklist",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function IcpChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
