"use client";

/**
 * The ICP Clarity Checklist — 15 yes/no checks across 3 sections.
 * Content-only wrapper; all quiz mechanics live in LeadMagnetQuiz.tsx.
 * Kit wiring (form/tags) is configured in app/api/lead-magnet-subscribe.
 */

import LeadMagnetQuiz, { QuizBand, QuizSection } from "./LeadMagnetQuiz";

const SECTIONS: QuizSection[] = [
  {
    title: "Is Your ICP Written Down?",
    questions: [
      { id: 1, text: "My Ideal Customer Profile is a written document, not a picture in my head." },
      { id: 2, text: "I can name the exact industry (or two) where we win most often." },
      { id: 3, text: "My ICP includes a company size and revenue range, with real numbers." },
      { id: 4, text: "I know the exact job title that signs the check, and who can block the deal." },
      { id: 5, text: "My ICP includes disqualifiers: who we will NOT sell to, in writing." },
    ],
  },
  {
    title: "Is It Built on Evidence?",
    questions: [
      { id: 6, text: "My ICP came from analyzing my closed-won deals, not from guessing who might buy." },
      { id: 7, text: "I know the top three problems my best customers hired us to solve." },
      { id: 8, text: "I can name the trigger events that make a prospect ready to buy now." },
      { id: 9, text: "I know why my best customers chose us over the alternatives." },
      { id: 10, text: "I know what my worst customers had in common before we signed them." },
    ],
  },
  {
    title: "Is It Actually Used?",
    questions: [
      { id: 11, text: "Anyone who sells for us can recite our ICP without me in the room." },
      { id: 12, text: "My CRM forces every new deal to be checked against the ICP before it enters the pipeline." },
      { id: 13, text: "We have walked away from real revenue because the customer did not fit." },
      { id: 14, text: "Our outbound lists are built from the ICP, not bought in bulk." },
      { id: 15, text: "Most of the deals in my pipeline right now fit the ICP." },
    ],
  },
];

function getBand(score: number): QuizBand {
  if (score >= 12) {
    return {
      key: "filter",
      title: "Your ICP Is a Filter, Not a Slide",
      body:
        "Your ICP is written, built on evidence, and actually used. That puts you in rare company. Your growth lever now is enforcement: keeping the filter tight as you add salespeople, and refreshing it as your market shifts. Most founders at your level still find one or two leaks, usually in outbound list quality or the discipline to walk away from bad-fit revenue.",
    };
  }
  if (score >= 6) {
    return {
      key: "sketch",
      title: "You Have a Sketch, Not a Profile",
      body:
        "You know roughly who buys from you. But roughly does not scale. You can feel a good fit in your gut; your salespeople cannot. Until the ICP is written down, backed by your closed-won deals, and enforced in your CRM, every person you hire will sell to a slightly different customer, and your pipeline will keep filling with deals that stall.",
    };
  }
  return {
    key: "everyone",
    title: "You Are Selling to Everyone, Which Is Selling to No One",
    body:
      "Right now, anyone with a pulse and a budget can get into your pipeline. That is why deals stall, cycles drag, and follow-ups go quiet. The fix is not more leads. It is a filter, built from the customers you have already won. The good news: you already have all the data you need sitting in your closed deals. It just has never been written down.",
  };
}

export default function IcpClarityChecklist() {
  return (
    <LeadMagnetQuiz
      magnet="icp-checklist"
      titleMain="The ICP Clarity"
      titleAccent="Checklist"
      subtitle="15 checks to find out if you actually know who your best customer is."
      instructions="Answer YES or NO based on how things actually run today, not how you want them to run."
      sections={SECTIONS}
      getBand={getBand}
      nextTitle="What to do next"
      nextCopy="Your ICP is the foundation every other sales system sits on: the playbook, the outbound lists, the pipeline stages, the hiring profile. Get it wrong and everything downstream wobbles. My job as a fractional sales leader is to build it with you from your actual closed deals, then wire it into your CRM so it does the filtering for you."
      ctaLabel="Book your free 30-minute call"
    />
  );
}
