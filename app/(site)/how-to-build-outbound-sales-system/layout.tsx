import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build an Outbound Sales System From Scratch | Louie Bernstein",
  description: "Waiting for inbound is not a growth strategy at $1M–$10M ARR. Here's the 6-step system to build outbound pipeline that fills your calendar without relying on referrals or luck.",
  openGraph: {
    title: "How to Build an Outbound Sales System From Scratch",
    description: "Waiting for inbound is not a growth strategy at $1M–$10M ARR. Here's the 6-step system to build outbound pipeline that fills your calendar without relying on referrals or luck.",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-outbound-sales-system",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build an Outbound Sales System From Scratch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build an Outbound Sales System From Scratch",
    description: "Waiting for inbound is not a growth strategy at $1M–$10M ARR. Here's the 6-step system to build outbound pipeline that fills your calendar without relying on referrals or luck.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-build-outbound-sales-system",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToBuildOutboundSalesSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
