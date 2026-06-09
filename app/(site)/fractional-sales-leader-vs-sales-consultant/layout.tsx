import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Sales Leader vs. Sales Consultant: One Drives Results. One Delivers Slides. | Louie Bernstein",
  description: "Both claim to fix your sales problem. One hands you a document. The other builds the machine that generates revenue. Here's how to tell which one you're actually hiring.",
  openGraph: {
    title: "Fractional Sales Leader vs. Sales Consultant: One Drives Results. One Delivers Slides.",
    description: "Both claim to fix your sales problem. One hands you a document. The other builds the machine that generates revenue. Here's how to tell which one you're actually hiring.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leader-vs-sales-consultant",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leader vs. Sales Consultant: One Drives Results. One Delivers Slides.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leader vs. Sales Consultant: One Drives Results. One Delivers Slides.",
    description: "Both claim to fix your sales problem. One hands you a document. The other builds the machine that generates revenue. Here's how to tell which one you're actually hiring.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader-vs-sales-consultant",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalSalesLeaderVsSalesConsultantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
