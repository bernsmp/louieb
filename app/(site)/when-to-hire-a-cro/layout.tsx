import { Metadata } from "next";

export const metadata: Metadata = {
  title: "When to Hire a CRO | Louie Bernstein",
  description: "Most companies hire a CRO either too early or too late. Here are the signals that tell you it\\u2019s time \\u2014 and the ones that tell you you\\u2019re not ready yet.",
  openGraph: {
    title: "When to Hire a CRO",
    description: "Most companies hire a CRO either too early or too late. Here are the signals that tell you it\\u2019s time \\u2014 and the ones that tell you you\\u2019re not ready yet.",
    type: "article",
    url: "https://louiebernstein.com/when-to-hire-a-cro",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "When to Hire a CRO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "When to Hire a CRO",
    description: "Most companies hire a CRO either too early or too late. Here are the signals that tell you it\\u2019s time \\u2014 and the ones that tell you you\\u2019re not ready yet.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/when-to-hire-a-cro",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhenToHireACroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
