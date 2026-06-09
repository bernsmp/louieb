import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Sales Reps Fail in Startups | Louie Bernstein",
  description: "Most startup sales reps fail in the first 90 days. The reasons are almost never what founders think. Here are the 6 real causes \\u2014 and the specific fix for each one.",
  openGraph: {
    title: "Why Sales Reps Fail in Startups",
    description: "Most startup sales reps fail in the first 90 days. The reasons are almost never what founders think. Here are the 6 real causes \\u2014 and the specific fix for each one.",
    type: "article",
    url: "https://louiebernstein.com/why-sales-reps-fail-in-startups",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Sales Reps Fail in Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Sales Reps Fail in Startups",
    description: "Most startup sales reps fail in the first 90 days. The reasons are almost never what founders think. Here are the 6 real causes \\u2014 and the specific fix for each one.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/why-sales-reps-fail-in-startups",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhySalesRepsFailInStartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
