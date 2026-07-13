import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Should a Founder Treat Their Employees? | Louie Bernstein",
  description:
    "Treat your employees exactly as you want them to treat your best customers. The founder's formula for a sales team you can actually hand your customers to.",
  keywords: [
    "how should a founder treat their employees",
    "how to treat your employees as a founder",
    "treat employees like customers",
    "sales culture for founders",
    "how founders should treat salespeople",
    "employee treatment and customer experience",
    "founder leadership sales team",
    "sales accountability document",
    "how to build a sales culture",
    "founder-led sales culture",
    "treat people well business",
    "fractional sales leader culture",
  ],
  openGraph: {
    title: "How Should a Founder Treat Their Employees? | Louie Bernstein",
    description:
      "Treat your employees exactly as you want them to treat your best customers. The founder's formula that decides whether you can ever hand off your customers.",
    type: "article",
    url: "https://louiebernstein.com/how-should-a-founder-treat-their-employees",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Should a Founder Treat Their Employees?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Should a Founder Treat Their Employees?",
    description:
      "Treat your employees exactly as you want them to treat your best customers. The founder's formula for a sales team you can hand your customers to.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-should-a-founder-treat-their-employees",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToTreatEmployeesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
