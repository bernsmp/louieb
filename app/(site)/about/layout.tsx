import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Louie Bernstein | Fractional Sales Leader — Atlanta, Georgia",
  description:
    "Louie Bernstein is a Fractional Sales Leader and Fractional VP of Sales based in Atlanta, Georgia. 50 years in business, INC 500 founder, LinkedIn Top Voice. Serving founders at $1M–$10M ARR.",
  keywords:
    "Louie Bernstein, fractional sales leader Atlanta, fractional VP of sales Atlanta, fractional sales leader Georgia, sales leadership Atlanta, about Louie Bernstein",
  alternates: {
    canonical: "https://louiebernstein.com/about",
  },
  openGraph: {
    title: "About Louie Bernstein | Fractional Sales Leader — Atlanta, Georgia",
    description:
      "Fractional Sales Leader and Fractional VP of Sales based in Atlanta, Georgia. INC 500 founder. Helping $1M–$10M ARR founders build scalable sales systems since 2017.",
    url: "https://louiebernstein.com/about",
    siteName: "Louie Bernstein",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Louie Bernstein | Fractional Sales Leader — Atlanta, Georgia",
    description:
      "Fractional Sales Leader based in Atlanta, Georgia. INC 500 founder. Serving $1M–$10M ARR companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
