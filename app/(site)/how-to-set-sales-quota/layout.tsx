import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Set Quota for a Small Sales Team When You Have No Benchmarks | Louie Bernstein",
  description: "Most early-stage quotas are either made up or borrowed from enterprise playbooks that don't apply. Here's how to set quotas that are ambitious enough to drive performance — and honest enough to be…",
  openGraph: {
    title: "How to Set Quota for a Small Sales Team When You Have No Benchmarks",
    description: "Most early-stage quotas are either made up or borrowed from enterprise playbooks that don't apply. Here's how to set quotas that are ambitious enough to drive performance — and honest enough to be…",
    type: "article",
    url: "https://louiebernstein.com/how-to-set-sales-quota",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Set Quota for a Small Sales Team When You Have No Benchmarks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Set Quota for a Small Sales Team When You Have No Benchmarks",
    description: "Most early-stage quotas are either made up or borrowed from enterprise playbooks that don't apply. Here's how to set quotas that are ambitious enough to drive performance — and honest enough to be…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-set-sales-quota",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToSetSalesQuotaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
