import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Cold Email That Gets Replies Without Sounding Like Spam | Louie Bernstein",
  description: "Most cold emails fail because they pitch instead of connect. Here's the 5-line formula that earns replies — plus real before/after rewrites of the most common cold email mistakes.",
  openGraph: {
    title: "How to Write a Cold Email That Gets Replies Without Sounding Like Spam",
    description: "Most cold emails fail because they pitch instead of connect. Here's the 5-line formula that earns replies — plus real before/after rewrites of the most common cold email mistakes.",
    type: "article",
    url: "https://louiebernstein.com/how-to-write-a-cold-email",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Write a Cold Email That Gets Replies Without Sounding Like Spam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Cold Email That Gets Replies Without Sounding Like Spam",
    description: "Most cold emails fail because they pitch instead of connect. Here's the 5-line formula that earns replies — plus real before/after rewrites of the most common cold email mistakes.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-write-a-cold-email",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToWriteAColdEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
