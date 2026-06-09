import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create an Ideal Customer Profile for a B2B Sales Team | Louie Bernstein",
  description: "Most founders describe the customer they want. The right ICP is built by reverse-engineering the customers you've already won.",
  openGraph: {
    title: "How to Create an Ideal Customer Profile for a B2B Sales Team",
    description: "Most founders describe the customer they want. The right ICP is built by reverse-engineering the customers you've already won.",
    type: "article",
    url: "https://louiebernstein.com/how-to-create-an-ideal-customer-profile",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Create an Ideal Customer Profile for a B2B Sales Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create an Ideal Customer Profile for a B2B Sales Team",
    description: "Most founders describe the customer they want. The right ICP is built by reverse-engineering the customers you've already won.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-create-an-ideal-customer-profile",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToCreateAnIdealCustomerProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
