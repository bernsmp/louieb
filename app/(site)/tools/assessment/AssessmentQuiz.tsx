"use client";

import { useState } from "react";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

type Question = {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "Who currently manages your sales team day-to-day?",
    options: [
      { text: "A dedicated full-time sales manager", score: 1 },
      { text: "A senior rep who also sells", score: 2 },
      { text: "Me (the CEO/founder), part-time", score: 3 },
      { text: "Nobody — reps manage themselves", score: 4 },
    ],
  },
  {
    id: 2,
    question: "How would you describe your sales process?",
    options: [
      { text: "Documented, followed consistently, and measured", score: 1 },
      { text: "Exists but not always followed", score: 2 },
      { text: "Informal — each rep does their own thing", score: 3 },
      { text: "We don't really have one", score: 4 },
    ],
  },
  {
    id: 3,
    question: "How often do your sales reps get 1-on-1 coaching?",
    options: [
      { text: "Weekly with structured feedback", score: 1 },
      { text: "Monthly or as-needed", score: 2 },
      { text: "Rarely — only when there's a problem", score: 3 },
      { text: "Never", score: 4 },
    ],
  },
  {
    id: 4,
    question: "How accurate is your sales forecast?",
    options: [
      { text: "Within 10% — we trust our pipeline data", score: 1 },
      { text: "Roughly directional — off by 20-30%", score: 2 },
      { text: "Mostly guessing based on gut feel", score: 3 },
      { text: "We don't forecast", score: 4 },
    ],
  },
  {
    id: 5,
    question: "What's happening with your sales team's performance?",
    options: [
      { text: "Consistently hitting or exceeding targets", score: 1 },
      { text: "Some reps hit quota, others don't", score: 2 },
      { text: "Most reps are underperforming", score: 3 },
      { text: "We don't have clear targets or quotas", score: 4 },
    ],
  },
  {
    id: 6,
    question: "How is your CRM being used?",
    options: [
      {
        text: "Fully adopted — pipeline, activities, reporting all tracked",
        score: 1,
      },
      { text: "Used for basic contact tracking but not pipeline", score: 2 },
      { text: "Some reps use it, some don't", score: 3 },
      { text: "We don't have one, or it's abandoned", score: 4 },
    ],
  },
  {
    id: 7,
    question: "What's your annual revenue range?",
    options: [
      { text: "Under $500K", score: 1 },
      { text: "$500K – $2M", score: 2 },
      { text: "$2M – $10M", score: 3 },
      { text: "$10M+", score: 4 },
    ],
  },
  {
    id: 8,
    question: "What's your budget comfort for sales leadership?",
    options: [
      { text: "I can't invest anything right now", score: 1 },
      { text: "Under $3K/month", score: 2 },
      { text: "$3K – $8K/month", score: 3 },
      { text: "$8K+/month — I need results", score: 4 },
    ],
  },
];

type ResultTier = {
  name: string;
  range: [number, number];
  message: string;
  tierKey: string;
};

const resultTiers: ResultTier[] = [
  {
    name: "Strong Fit",
    range: [26, 32],
    tierKey: "strong-fit",
    message:
      "Your sales team is running without real leadership — and it's costing you. A fractional sales manager would bring immediate structure, accountability, and process without the $150K+ commitment of a full-time hire. This is exactly what fractional sales leadership is built for.",
  },
  {
    name: "Likely Fit",
    range: [17, 25],
    tierKey: "likely-fit",
    message:
      "You have some pieces in place, but gaps in process, coaching, or accountability are holding your team back. A fractional sales manager could fill those gaps and accelerate your growth — especially if you're not ready for a full-time hire.",
  },
  {
    name: "Not Yet",
    range: [8, 16],
    tierKey: "not-yet",
    message:
      "You're in a solid position. Your sales leadership needs are either covered or your business may not be at the stage where fractional management makes sense yet. That said, if you're feeling a ceiling on growth, a conversation could still uncover opportunities.",
  },
];

function getTier(score: number): ResultTier {
  return (
    resultTiers.find(
      (tier) => score >= tier.range[0] && score <= tier.range[1]
    ) || resultTiers[2]
  );
}

export function AssessmentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const isQuestionAnswered = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const tier = getTier(totalScore);

  const handleSelectOption = (score: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: score }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border-2 border-[#0966c2] bg-card p-8 shadow-lg md:p-12">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#0966c2] px-6 py-2 text-white">
              <span className="font-sans text-sm font-medium">
                Your Result
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              {tier.name}
            </h2>
            <p className="mt-2 font-sans text-lg text-muted-foreground">
              Score: {totalScore} / 32
            </p>
          </div>

          <div className="mt-8 rounded-xl bg-blue-50 dark:bg-blue-950 p-6">
            <p className="font-sans text-base leading-relaxed text-foreground md:text-lg">
              {tier.message}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#0966c2] px-8 py-3 font-sans font-medium text-white transition-colors hover:bg-[#0855a3]"
            >
              Book a Free Consultation
            </Link>
            <button
              onClick={handleRetake}
              className="inline-flex items-center justify-center rounded-lg border-2 border-border bg-background px-8 py-3 font-sans font-medium text-foreground transition-colors hover:bg-muted"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-sans text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="font-sans text-sm font-medium text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-[#0966c2] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-lg md:p-8">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {questions[currentQuestion].question}
        </h2>

        <div className="mt-6 space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = answers[currentQuestion] === option.score;
            return (
              <button
                key={index}
                onClick={() => handleSelectOption(option.score)}
                className={`w-full rounded-xl border-2 p-4 text-left font-sans transition-all ${
                  isSelected
                    ? "border-[#0966c2] bg-blue-50 dark:bg-blue-950"
                    : "border-border bg-background hover:border-[#0966c2] hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-foreground">
                    {option.text}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#0966c2]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-6 py-3 font-sans font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isQuestionAnswered}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0966c2] px-6 py-3 font-sans font-medium text-white transition-colors hover:bg-[#0855a3] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLastQuestion ? "View Results" : "Next"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
