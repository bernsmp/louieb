import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does 90-Day Sales Planning Have to Do With Fractional Sales Management? | Louie Bernstein",
  description:
    "Fractional sales management runs on 90-day plans, not open-ended retainers. If you're considering a Fractional Sales Leader, here are the 5 deliverables to look for before you sign.",
  keywords: [
    "90 day sales plan",
    "fractional sales management",
    "fractional sales leader",
    "90 day sales planning",
    "hiring a fractional sales leader",
    "fractional sales leader first 90 days",
    "sales accountability document",
    "founder-led sales",
  ],
  openGraph: {
    title: "What Does 90-Day Sales Planning Have to Do With Fractional Sales Management?",
    description:
      "Fractional sales management runs on 90-day plans, not open-ended retainers. Here are the 5 deliverables to look for before you hire a Fractional Sales Leader.",
    type: "article",
    url: "https://louiebernstein.com/90-day-sales-planning-fractional-sales-management",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Does 90-Day Sales Planning Have to Do With Fractional Sales Management?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Does 90-Day Sales Planning Have to Do With Fractional Sales Management?",
    description:
      "Fractional sales management runs on 90-day plans, not open-ended retainers. Here are the 5 deliverables to look for before you hire a Fractional Sales Leader.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/90-day-sales-planning-fractional-sales-management",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function NinetyDaySalesPlanningFractionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
