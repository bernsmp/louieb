import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 7 Sales KPIs Every $1M–$10M Business Should Track | Louie Bernstein",
  description: "Most small sales teams track activity. The companies that hit their numbers track outcomes. Here are the 7 KPIs that actually predict revenue — and the vanity metrics to stop wasting time on.",
  openGraph: {
    title: "The 7 Sales KPIs Every $1M–$10M Business Should Track",
    description: "Most small sales teams track activity. The companies that hit their numbers track outcomes. Here are the 7 KPIs that actually predict revenue — and the vanity metrics to stop wasting time on.",
    type: "article",
    url: "https://louiebernstein.com/sales-kpis-for-small-business",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The 7 Sales KPIs Every $1M–$10M Business Should Track",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 7 Sales KPIs Every $1M–$10M Business Should Track",
    description: "Most small sales teams track activity. The companies that hit their numbers track outcomes. Here are the 7 KPIs that actually predict revenue — and the vanity metrics to stop wasting time on.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-kpis-for-small-business",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesKpisForSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
