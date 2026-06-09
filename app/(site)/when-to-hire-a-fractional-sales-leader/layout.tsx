import { Metadata } from "next";

export const metadata: Metadata = {
  title: "When to Hire a Fractional Sales Leader | Louie Bernstein",
  description: "Most founders wait too long \\u2014 or move too early. Here are the specific signals that tell you it\\u2019s time to bring in a fractional sales leader.",
  openGraph: {
    title: "When to Hire a Fractional Sales Leader",
    description: "Most founders wait too long \\u2014 or move too early. Here are the specific signals that tell you it\\u2019s time to bring in a fractional sales leader.",
    type: "article",
    url: "https://louiebernstein.com/when-to-hire-a-fractional-sales-leader",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "When to Hire a Fractional Sales Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "When to Hire a Fractional Sales Leader",
    description: "Most founders wait too long \\u2014 or move too early. Here are the specific signals that tell you it\\u2019s time to bring in a fractional sales leader.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/when-to-hire-a-fractional-sales-leader",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhenToHireAFractionalSalesLeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
