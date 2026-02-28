"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  headline?: string;
  subheadline?: string;
  items?: FAQItem[];
}

// Maps each question to its category. Questions not listed fall into "General".
const CATEGORY_MAP: Record<string, string> = {
  "What is Fractional Sales Leadership?": "The Basics",
  "What are the benefits of Fractional sales leadership?": "The Basics",
  "How does Fractional Sales Leadership work?": "The Basics",
  "Who uses Fractional Sales Leadership?": "The Basics",
  "Who is fractional sales leadership for?": "The Basics",
  "What problems does Fractional Sales Leadership solve?": "The Basics",
  "What is fractional sales leadership?": "The Basics",
  "How does fractional sales leadership work?": "The Basics",
  "Doesn't asking for help from a Fractional Sales Leader make me look weak to my team?": "Is It Right for Me?",
  "How do I know if I'm ready to step back from sales?": "Is It Right for Me?",
  "I'm stuck at $2M ARR. Why can't I just hire a few sales reps to grow?": "Is It Right for Me?",
  "Won't I lose customers if I stop selling personally?": "Is It Right for Me?",
  "How much does a Fractional Sales Leader cost?": "Pricing & Commitment",
  "How much does fractional sales leadership cost?": "Pricing & Commitment",
  "What is the time commitment for fractional sales leadership?": "Pricing & Commitment",
  "How many clients do Fractional Sales Leaders work with, at the same time?": "Pricing & Commitment",
  "How can I tell if a Fractional Sales Leader has a \"track record\"?": "Pricing & Commitment",
  "What is the process for working with a fractional sales leader?": "Working Together",
  "What results can I expect from fractional sales leadership?": "Working Together",
};

const CATEGORY_ORDER = ["The Basics", "Is It Right for Me?", "Pricing & Commitment", "Working Together"];

const defaultFAQs: FAQItem[] = [
  { question: "What is fractional sales leadership?", answer: "Fractional sales leadership is an outsourced service where an experienced sales leader works part-time with a company to organize, optimize, and train their sales team." },
  { question: "How does fractional sales leadership work?", answer: "A fractional sales leader integrates with your existing sales team, assessing current processes, identifying areas for improvement, and implementing strategies to boost sales performance. They provide guidance, training, and support on a part-time basis." },
  { question: "Who is fractional sales leadership for?", answer: "Fractional sales leadership is ideal for small to medium-sized businesses that want to improve their sales processes and results without the cost of hiring a full-time sales executive." },
  { question: "How much does fractional sales leadership cost?", answer: "Pricing for fractional sales leadership varies depending on the scope of the engagement and the specific needs of the client. Contact Louie Bernstein for a customized quote." },
  { question: "What is the time commitment for fractional sales leadership?", answer: "The time commitment is flexible and can be adapted to the client's needs. Engagements typically range from a few months to a year or more, with the fractional sales leader working on a part-time basis." },
  { question: "What results can I expect from fractional sales leadership?", answer: "Clients can expect improved sales processes, increased team efficiency, and ultimately, higher sales revenue. Past clients have reported significant improvements in their sales performance after working with Louie Bernstein." },
  { question: "What is the process for working with a fractional sales leader?", answer: "The process typically involves an initial consultation to assess the client's current sales situation and goals, followed by the development of a customized strategy. The fractional sales leader then works with the team to implement the strategy, provide training, and monitor progress." },
];

function groupByCategory(faqs: FAQItem[]): { category: string; items: FAQItem[] }[] {
  const grouped: Record<string, FAQItem[]> = {};

  for (const faq of faqs) {
    const category = CATEGORY_MAP[faq.question] ?? "General";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(faq);
  }

  // Sort categories by CATEGORY_ORDER, then any unknowns appended
  const ordered = CATEGORY_ORDER.filter((c) => grouped[c]).map((c) => ({ category: c, items: grouped[c] }));
  const rest = Object.keys(grouped)
    .filter((c) => !CATEGORY_ORDER.includes(c))
    .map((c) => ({ category: c, items: grouped[c] }));

  return [...ordered, ...rest];
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={cn("h-5 w-5 flex-shrink-0 transition-transform duration-200", open && "rotate-180")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function FAQ({
  headline = "Frequently Asked Questions",
  subheadline = "Everything you need to know about fractional sales leadership",
  items = defaultFAQs,
}: FAQProps) {
  const faqs = items.length > 0 ? items : defaultFAQs;
  const categories = groupByCategory(faqs);

  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    const isOpening = openCategory !== category;
    setOpenCategory(isOpening ? category : null);
    setOpenQuestion(null); // close any open question when switching categories
  };

  const toggleQuestion = (key: string) => {
    setOpenQuestion(openQuestion === key ? null : key);
  };

  return (
    <section id="faq" className="bg-neutral-900 py-32">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-400">
            {subheadline}
          </p>
        </div>

        <div className="mt-20 space-y-3">
          {categories.map(({ category, items: catItems }) => {
            const isCatOpen = openCategory === category;
            return (
              <div
                key={category}
                className={cn(
                  "rounded-2xl border-2 transition-all",
                  isCatOpen
                    ? "border-white bg-neutral-800"
                    : "border-neutral-700 bg-neutral-800 hover:border-neutral-500"
                )}
              >
                {/* Category header */}
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left lg:px-8"
                  onClick={() => toggleCategory(category)}
                  aria-expanded={isCatOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded",
                      isCatOpen ? "bg-white text-neutral-900" : "bg-neutral-700 text-neutral-400"
                    )}>
                      {catItems.length}
                    </span>
                    <h3 className="text-lg font-bold text-white md:text-xl">
                      {category}
                    </h3>
                  </div>
                  <ChevronIcon open={isCatOpen} />
                </button>

                {/* Questions inside category — always in DOM for SEO, hidden visually */}
                <div className={cn(isCatOpen ? "block" : "hidden")}>
                  <div className="border-t border-neutral-700 px-4 pb-4 pt-2 lg:px-6 lg:pb-6">
                    <div className="space-y-2 pt-2">
                      {catItems.map((faq) => {
                        const key = `${category}::${faq.question}`;
                        const isOpen = openQuestion === key;
                        return (
                          <div
                            key={key}
                            className={cn(
                              "rounded-xl border transition-all",
                              isOpen
                                ? "border-neutral-500 bg-neutral-900"
                                : "border-neutral-700 bg-neutral-800/50 hover:border-neutral-500"
                            )}
                          >
                            <button
                              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                              onClick={() => toggleQuestion(key)}
                              aria-expanded={isOpen}
                            >
                              <span className={cn(
                                "text-base font-medium md:text-lg",
                                isOpen ? "text-white" : "text-neutral-200"
                              )}>
                                {faq.question}
                              </span>
                              <ChevronIcon open={isOpen} />
                            </button>
                            {isOpen && (
                              <div className="border-t border-neutral-700 px-5 pb-5 pt-3">
                                <p className="text-sm leading-relaxed text-neutral-300 md:text-base whitespace-pre-line">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
