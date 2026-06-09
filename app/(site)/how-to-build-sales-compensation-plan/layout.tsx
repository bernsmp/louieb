import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Sales Compensation Plan for a Small Team | Louie Bernstein",
  description: "The wrong comp plan drives the wrong behavior — or drives your best rep to a competitor. Here's how to build a plan that attracts strong performers, rewards results, and doesn't cap the upside that…",
  openGraph: {
    title: "How to Build a Sales Compensation Plan for a Small Team",
    description: "The wrong comp plan drives the wrong behavior — or drives your best rep to a competitor. Here's how to build a plan that attracts strong performers, rewards results, and doesn't cap the upside that…",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-sales-compensation-plan",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a Sales Compensation Plan for a Small Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Sales Compensation Plan for a Small Team",
    description: "The wrong comp plan drives the wrong behavior — or drives your best rep to a competitor. Here's how to build a plan that attracts strong performers, rewards results, and doesn't cap the upside that…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-build-sales-compensation-plan",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToBuildSalesCompensationPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
