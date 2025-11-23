"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is fractional sales leadership?",
      answer:
        "Fractional sales leadership is an outsourced service where an experienced sales leader works part-time with a company to organize, optimize, and train their sales team.",
    },
    {
      question: "How does fractional sales leadership work?",
      answer:
        "A fractional sales leader integrates with your existing sales team, assessing current processes, identifying areas for improvement, and implementing strategies to boost sales performance. They provide guidance, training, and support on a part-time basis.",
    },
    {
      question: "Who is fractional sales leadership for?",
      answer:
        "Fractional sales leadership is ideal for small to medium-sized businesses that want to improve their sales processes and results without the cost of hiring a full-time sales executive.",
    },
    {
      question: "How much does fractional sales leadership cost?",
      answer:
        "Pricing for fractional sales leadership varies depending on the scope of the engagement and the specific needs of the client. Contact Louie Bernstein for a customized quote.",
    },
    {
      question: "What is the time commitment for fractional sales leadership?",
      answer:
        "The time commitment is flexible and can be adapted to the client's needs. Engagements typically range from a few months to a year or more, with the fractional sales leader working on a part-time basis.",
    },
    {
      question: "What results can I expect from fractional sales leadership?",
      answer:
        "Clients can expect improved sales processes, increased team efficiency, and ultimately, higher sales revenue. Past clients have reported significant improvements in their sales performance after working with Louie Bernstein.",
    },
    {
      question: "What is the process for working with a fractional sales leader?",
      answer:
        "The process typically involves an initial consultation to assess the client's current sales situation and goals, followed by the development of a customized strategy. The fractional sales leader then works with the team to implement the strategy, provide training, and monitor progress.",
    },
  ];

  return (
    <section id="faq" className="bg-neutral-50 py-32">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            Everything you need to know about fractional sales leadership
          </p>
        </div>

        <div className="mt-20 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl border-2 border-neutral-200 bg-white transition-all hover:border-neutral-900 hover:shadow-lg"
            >
              <button
                className="flex w-full items-center justify-between gap-4 p-6 text-left lg:p-8"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-neutral-900 md:text-xl lg:text-2xl">
                  {faq.question}
                </h3>
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
      </div>
    </section>
  );
}
