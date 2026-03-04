"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
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

export function FAQPageContent({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const cleanAnswer = sanitizeAnswer(faq.answer);
        const hasHtml = isHtml(cleanAnswer);

        return (
          <div
            key={index}
            className="group rounded-2xl border-2 border-neutral-200 bg-white transition-all hover:border-neutral-900 hover:shadow-lg"
          >
            <button
              className="flex w-full items-center justify-between gap-4 p-6 text-left lg:p-8"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <h2 className="text-lg font-semibold text-neutral-900 md:text-xl">
                {faq.question}
              </h2>
              <svg
                className={cn(
                  "h-6 w-6 flex-shrink-0 text-neutral-600 transition-transform duration-200",
                  openIndex === index && "rotate-180 text-neutral-900"
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

            {openIndex === index && (
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
      })}
    </div>
  );
}
