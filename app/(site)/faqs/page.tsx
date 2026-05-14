import { Metadata } from "next";
import { getFAQsPageFAQs } from "@/lib/cms";
import { FAQ_CATEGORIES } from "@/lib/faqCategories";
import { FAQPageContent } from "./FAQPageContent";

export const revalidate = 60;

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

  // Count FAQs per category for the TOC.
  const counts = new Map<string, number>();
  for (const faq of faqs) {
    if (!faq.category) continue;
    counts.set(faq.category, (counts.get(faq.category) ?? 0) + 1);
  }
  const tocItems = FAQ_CATEGORIES
    .map((c) => ({ ...c, count: counts.get(c.slug) ?? 0 }))
    .filter((c) => c.count > 0);

  return (
    <main className="min-h-screen bg-neutral-50 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            Everything you need to know about founder-led sales, fractional sales leadership, and working with Louie Bernstein.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            Last Updated: May 2026
          </p>
        </div>

        {tocItems.length > 0 && (
          <nav
            aria-label="FAQ categories"
            className="mb-16 rounded-2xl border-2 border-neutral-200 bg-white p-6 lg:p-8"
          >
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Jump to a topic
            </h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {tocItems.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`#${cat.anchor}`}
                    className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-900 transition hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span>{cat.label}</span>
                    <span className="ml-2 text-xs text-neutral-500">{cat.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <FAQPageContent faqs={faqs} />
      </div>
    </main>
  );
}
