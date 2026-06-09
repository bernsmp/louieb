import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Sales Qualified Lead (SQL)? And Why Your Team Needs a Clear Definition | Louie Bernstein",
  description: "Most sales teams have an informal sense of what a good lead looks like. Almost none have it written down. Without a documented SQL definition, sales and marketing argue about lead quality, pipeline…",
  openGraph: {
    title: "What Is a Sales Qualified Lead (SQL)? And Why Your Team Needs a Clear Definition",
    description: "Most sales teams have an informal sense of what a good lead looks like. Almost none have it written down. Without a documented SQL definition, sales and marketing argue about lead quality, pipeline…",
    type: "article",
    url: "https://louiebernstein.com/sales-qualified-lead-definition",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is a Sales Qualified Lead (SQL)? And Why Your Team Needs a Clear Definition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Sales Qualified Lead (SQL)? And Why Your Team Needs a Clear Definition",
    description: "Most sales teams have an informal sense of what a good lead looks like. Almost none have it written down. Without a documented SQL definition, sales and marketing argue about lead quality, pipeline…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-qualified-lead-definition",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesQualifiedLeadDefinitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
