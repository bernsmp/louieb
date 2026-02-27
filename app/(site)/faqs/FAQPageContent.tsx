"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageContent({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
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
              <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
