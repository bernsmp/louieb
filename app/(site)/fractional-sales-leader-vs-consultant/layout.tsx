import { Metadata } from "next";
import { getFSLVsConsultantPageData } from "@/lib/cms";

export const metadata: Metadata = {
  title:
    "Fractional Sales Leader vs Consultant: Key Differences | Louie Bernstein",
  description:
    "Understand the critical differences between a Fractional Sales Leader and a Consultant. Learn which option is right for your business growth, with side-by-side comparisons of scope, involvement, and impact.",
  keywords: [
    "fractional sales leader vs consultant",
    "fractional sales leader",
    "sales consultant",
    "fractional VP of sales",
    "sales leadership comparison",
    "hire fractional sales leader",
    "sales consultant vs fractional",
    "fractional executive",
    "sales leadership options",
    "outsourced sales leadership",
    "part-time sales leader",
    "sales consultant comparison",
    "fractional CSO",
    "fractional chief sales officer",
  ],
  openGraph: {
    title: "Fractional Sales Leader vs Consultant: Key Differences Explained",
    description:
      "Side-by-side comparison of Fractional Sales Leaders and Consultants. Discover which is right for your business growth strategy.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leader-vs-consultant",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leader vs Consultant Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leader vs Consultant: Key Differences",
    description:
      "Understand the critical differences between hiring a Fractional Sales Leader and a Consultant for your sales growth.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader-vs-consultant",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default async function FractionalSalesLeaderVsConsultantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch CMS data server-side and pass to client component via context or props
  // The page component will handle fetching via useEffect for now
  return <>{children}</>;
}
