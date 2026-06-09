import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 5 Warning Signs Your Sales Process Is About to Break | Louie Bernstein",
  description: "Most sales processes don't fail suddenly. They give you signals for months before revenue drops. Here are the five you can't afford to ignore.",
  openGraph: {
    title: "The 5 Warning Signs Your Sales Process Is About to Break",
    description: "Most sales processes don't fail suddenly. They give you signals for months before revenue drops. Here are the five you can't afford to ignore.",
    type: "article",
    url: "https://louiebernstein.com/5-warning-signs-sales-process-breaking",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The 5 Warning Signs Your Sales Process Is About to Break",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 5 Warning Signs Your Sales Process Is About to Break",
    description: "Most sales processes don't fail suddenly. They give you signals for months before revenue drops. Here are the five you can't afford to ignore.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/5-warning-signs-sales-process-breaking",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function Page5WarningSignsSalesProcessBreakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
