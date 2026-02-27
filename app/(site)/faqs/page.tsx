import { Metadata } from "next";
import { getFAQsPageFAQs } from "@/lib/cms";
import { FAQPageContent } from "./FAQPageContent";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FAQs | Fractional Sales Leadership | Louie Bernstein",
    description: "Answers to the most common questions about founder-led sales, fractional sales leadership, sales team building, and working with Louie Bernstein.",
    keywords: "fractional sales leader FAQ, founder-led sales questions, fractional sales leadership answers, sales team FAQ, Louie Bernstein FAQ",
    openGraph: {
      title: "FAQs | Fractional Sales Leadership | Louie Bernstein",
      description: "Answers to the most common questions about founder-led sales, fractional sales leadership, sales team building, and working with Louie Bernstein.",
      url: "https://louiebernstein.com/faqs",
      type: "website",
    },
    alternates: {
      canonical: "https://louiebernstein.com/faqs",
    },
  };
}

export default async function FAQsPage() {
  const faqs = await getFAQsPageFAQs();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-neutral-50 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            Everything you need to know about founder-led sales, fractional sales leadership, and working with Louie Bernstein.
          </p>
        </div>
        <FAQPageContent faqs={faqs} />
      </div>
    </main>
  );
}
