"use client";

/**
 * The Founder Sales Trap Self-Audit — 20 yes/no questions across 5 sections.
 * Content-only wrapper; all quiz mechanics live in LeadMagnetQuiz.tsx.
 * Kit wiring (form/tags) is configured in app/api/lead-magnet-subscribe.
 */

import LeadMagnetQuiz, { QuizBand, QuizSection } from "./LeadMagnetQuiz";

const SECTIONS: QuizSection[] = [
  {
    title: "Founder-Led Sales Dependency",
    questions: [
      { id: 1, text: "I could take a two week vacation right now and sales would keep closing without me." },
      { id: 2, text: "I am the person who closes most of our deals.", reverse: true },
      { id: 3, text: "My calendar has more strategy time than sales calls most weeks." },
      { id: 4, text: "If I got sick tomorrow, someone else could run my sales meetings." },
    ],
  },
  {
    title: "Sales Process and Playbook",
    questions: [
      { id: 5, text: "I have a written sales playbook a new hire could follow without me in the room." },
      { id: 6, text: "My sales process is the same for every rep, not just the one in my head." },
      { id: 7, text: "I have documented exactly how I made my first ten sales." },
      { id: 8, text: "A new salesperson could get up to speed in two weeks, not two months." },
    ],
  },
  {
    title: "Pipeline Discipline",
    questions: [
      { id: 9, text: "Every deal in my pipeline moved forward because of a buyer action, not a rep's gut feeling." },
      { id: 10, text: "My pipeline stages are defined by what the buyer did, not what my rep hopes will happen." },
      { id: 11, text: "I review my pipeline on a set schedule, not just when I remember to." },
      { id: 12, text: "I trust my forecast enough to make hiring and spending decisions on it." },
    ],
  },
  {
    title: "Hiring and Team Readiness",
    questions: [
      { id: 13, text: "I closed at least ten sales myself before I hired anyone." },
      { id: 14, text: "When I hire salespeople, I hire two at a time, not one." },
      { id: 15, text: "Every sales role has a written Accountability Document that spells out what success looks like." },
      { id: 16, text: "I have an onboarding plan ready before a new hire's first day." },
    ],
  },
  {
    title: "Accountability and Systems",
    questions: [
      { id: 17, text: "Every salesperson knows their closing percentage." },
      { id: 18, text: "My salespeople hit their weekly activity targets without me chasing them." },
      { id: 19, text: "My CRM has more useful data in it than I can remember myself." },
      { id: 20, text: "I know my sales numbers cold without pulling a report." },
    ],
  },
];

function getBand(score: number): QuizBand {
  if (score >= 16) {
    return {
      key: "systems",
      title: "You Have Real Systems",
      body:
        "You have already built what most founders never get to: a sales function that does not depend entirely on you. Your job now is to protect what you built and decide if it is time to add a Sales Manager or scale the team further. Even here, most founders find two or three gaps that are quietly capping growth.",
    };
  }
  if (score >= 9) {
    return {
      key: "halfway",
      title: "You Are Halfway Out of the Trap",
      body:
        "You have pieces in place, but not a system. This is the most common score I see, and it is also the most dangerous range. You have enough structure to feel like you are covered, but enough gaps that growth still runs through you. A few missing pieces, built correctly, close this gap fast.",
    };
  }
  return {
    key: "deep",
    title: "You Are Deep in the Founder Sales Trap",
    body:
      "Sales runs on you, your memory, and your hustle. That worked to get you here. It will not get you past $10M. Every day this continues, growth is capped at your personal bandwidth. This is fixable, and it does not require a $250K VP of Sales hire to fix it.",
  };
}

export default function FounderSalesTrapAudit() {
  return (
    <LeadMagnetQuiz
      magnet="founder-sales-trap-audit"
      titleMain="The Founder Sales Trap"
      titleAccent="Self-Audit"
      subtitle="20 questions to find out if you are the bottleneck holding back your own sales growth."
      instructions="Answer YES or NO based on how things actually run today, not how you want them to run."
      sections={SECTIONS}
      getBand={getBand}
      nextTitle="What to do next"
      nextCopy="Whatever you scored, here is what I would not do: hire a full-time VP of Sales to fix this. A consultant gives you a map. A fractional sales leader helps you drive the car. My job is to build the playbook, the pipeline discipline, and the hiring system alongside you, so the next hire you make actually works."
      ctaLabel="Book your free 30-minute call"
    />
  );
}
