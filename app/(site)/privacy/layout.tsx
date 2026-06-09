import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Louie Bernstein",
  description: "How louiebernstein.com collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy",
    description: "How louiebernstein.com collects, uses, and protects your information.",
    type: "article",
    url: "https://louiebernstein.com/privacy",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "How louiebernstein.com collects, uses, and protects your information.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
