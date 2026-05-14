"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQ_CATEGORIES } from "@/lib/faqCategories";

interface FAQItem {
  question: string;
  answer: string;
  category?: string | null;
}

/** Strip clipboard paste artifacts and return cleaned HTML or plain text. */
function sanitizeAnswer(raw: string): string {
  return raw
    .replace(/<!--StartFragment-->/gi, "")
    .replace(/<!--EndFragment-->/gi, "")
    .trim();
}

/** Returns true if the string contains any HTML tags. */
function isHtml(str: string): boolean {
  return /<[a-z][\s\S]*?>/i.test(str);
}

function FAQCard({
  faq,
  index,
  openKey,
  setOpenKey,
}: {
  faq: FAQItem;
  index: string;
  openKey: string | null;
  setOpenKey: (key: string | null) => void;
}) {
  const cleanAnswer = sanitizeAnswer(faq.answer);
  const hasHtml = isHtml(cleanAnswer);
  const isOpen = openKey === index;

  return (
    <div className="group rounded-2xl border-2 border-neutral-200 bg-white transition-all hover:border-neutral-900 hover:shadow-lg">
      <button
        className="flex w-full items-center justify-between gap-4 p-6 text-left lg:p-8"
        onClick={() => setOpenKey(isOpen ? null : index)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-neutral-900 md:text-xl">
          {faq.question}
        </h3>
        <svg
          className={cn(
            "h-6 w-6 flex-shrink-0 text-neutral-600 transition-transform duration-200",
            isOpen && "rotate-180 text-neutral-900"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t border-neutral-200 px-6 pb-6 pt-4 lg:px-8 lg:pb-8">
          {hasHtml ? (
            <div
              className="faq-html-content text-base leading-relaxed text-neutral-600 md:text-lg
                [&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-800
                [&_p]:mb-3 [&_p:last-child]:mb-0
                [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
                [&_strong]:font-semibold [&_strong]:text-neutral-800
                [&_em]:italic"
              dangerouslySetInnerHTML={{ __html: cleanAnswer }}
            />
          ) : (
            <p className="whitespace-pre-line text-base leading-relaxed text-neutral-600 md:text-lg">
              {cleanAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function FAQPageContent({ faqs }: { faqs: FAQItem[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Group FAQs by category, preserving the order defined in FAQ_CATEGORIES.
  const byCategory = new Map<string, FAQItem[]>();
  for (const cat of FAQ_CATEGORIES) byCategory.set(cat.slug, []);
  const uncategorized: FAQItem[] = [];

  for (const faq of faqs) {
    if (faq.category && byCategory.has(faq.category)) {
      byCategory.get(faq.category)!.push(faq);
    } else {
      uncategorized.push(faq);
    }
  }

  return (
    <div className="space-y-16">
      {FAQ_CATEGORIES.map((cat) => {
        const items = byCategory.get(cat.slug) ?? [];
        if (items.length === 0) return null;

        return (
          <section key={cat.slug} id={cat.anchor} aria-labelledby={`${cat.anchor}-heading`} className="scroll-mt-32">
            <h2
              id={`${cat.anchor}-heading`}
              className="mb-6 border-l-4 border-blue-700 pl-4 text-2xl font-bold text-neutral-900 md:text-3xl"
            >
              {cat.label}
            </h2>
            <div className="space-y-3">
              {items.map((faq, i) => (
                <FAQCard
                  key={`${cat.slug}-${i}`}
                  faq={faq}
                  index={`${cat.slug}-${i}`}
                  openKey={openKey}
                  setOpenKey={setOpenKey}
                />
              ))}
            </div>
          </section>
        );
      })}

      {uncategorized.length > 0 && (
        <section id="other" aria-labelledby="other-heading" className="scroll-mt-32">
          <h2
            id="other-heading"
            className="mb-6 border-l-4 border-neutral-400 pl-4 text-2xl font-bold text-neutral-900 md:text-3xl"
          >
            Other
          </h2>
          <div className="space-y-3">
            {uncategorized.map((faq, i) => (
              <FAQCard
                key={`other-${i}`}
                faq={faq}
                index={`other-${i}`}
                openKey={openKey}
                setOpenKey={setOpenKey}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
