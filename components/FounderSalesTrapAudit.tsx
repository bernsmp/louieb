"use client";

/**
 * Founder Sales Trap Self-Audit — interactive lead magnet
 * ------------------------------------------------------
 * 20 yes/no questions across 5 sections. The prospect answers all 20,
 * then enters their first name + email to unlock their score (gated).
 * The lead is posted to /api/audit-subscribe, which wires them into Kit.
 *
 * Brand: navy #1B3A6B, orange #E8610A.
 */

import { useMemo, useState } from "react";

const NAVY = "#1B3A6B";
const ORANGE = "#E8610A";
const CALENDLY_URL = "https://calendly.com/louiebernstein/30minutes";

type Answer = "yes" | "no";

// reverse: true means "No" is the healthy answer and earns the point.
type Question = { id: number; text: string; reverse?: boolean };
type Section = { title: string; questions: Question[] };

const SECTIONS: Section[] = [
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

const ALL_QUESTIONS = SECTIONS.flatMap((s) => s.questions);
const TOTAL_QUESTIONS = ALL_QUESTIONS.length;

type Band = { key: string; title: string; body: string };

function getBand(score: number): Band {
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
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === TOTAL_QUESTIONS;
  const score = useMemo(
    () =>
      ALL_QUESTIONS.filter((q) => {
        const a = answers[q.id];
        return a !== undefined && a === (q.reverse ? "no" : "yes");
      }).length,
    [answers]
  );
  const band = useMemo(() => getBand(score), [score]);

  function setAnswer(id: number, value: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function validEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  async function handleSubmit() {
    if (!firstName.trim()) {
      setErrorMsg("Please enter your first name.");
      setStatus("error");
      return;
    }
    if (!validEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/audit-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          score,
          band: band.key,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Subscription failed.");
      }
      setStatus("done");
    } catch (err: unknown) {
      // The lead is still valuable — show results even if Kit hiccups,
      // and log the failure so it can be retried server-side if desired.
      console.error("Audit subscribe error:", err);
      setStatus("done");
    }
  }

  const showResults = status === "done";

  return (
    <div className="fsta-root">
      <style>{styles}</style>

      {/* Header */}
      <header className="fsta-header">
        <h2 className="fsta-title">
          The Founder Sales Trap <span className="fsta-title-accent">Self-Audit</span>
        </h2>
        <p className="fsta-sub">
          20 questions to find out if you are the bottleneck holding back your own sales growth.
        </p>
      </header>

      {!showResults && (
        <>
          {/* Progress */}
          <div className="fsta-progress-wrap" aria-hidden="true">
            <div
              className="fsta-progress-bar"
              style={{ width: `${(answeredCount / TOTAL_QUESTIONS) * 100}%` }}
            />
          </div>
          <p className="fsta-progress-label">
            {answeredCount} of {TOTAL_QUESTIONS} answered
          </p>

          {/* Instructions */}
          <p className="fsta-instructions">
            Answer YES or NO based on how things actually run today, not how you want them to run.
          </p>

          {/* Questions */}
          {SECTIONS.map((section, i) => (
            <section key={section.title} className="fsta-section">
              <div className="fsta-section-header">
                Section {i + 1}: {section.title}
              </div>
              <ul className="fsta-question-list">
                {section.questions.map((q) => {
                  const current = answers[q.id];
                  return (
                    <li key={q.id} className="fsta-question">
                      <span className="fsta-question-text">
                        <span className="fsta-question-num">{q.id}.</span> {q.text}
                      </span>
                      <span className="fsta-answer-buttons" role="group" aria-label={`Question ${q.id}`}>
                        <button
                          type="button"
                          className={`fsta-answer-btn ${current === "yes" ? "fsta-answer-yes-active" : ""}`}
                          aria-pressed={current === "yes"}
                          onClick={() => setAnswer(q.id, "yes")}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className={`fsta-answer-btn ${current === "no" ? "fsta-answer-no-active" : ""}`}
                          aria-pressed={current === "no"}
                          onClick={() => setAnswer(q.id, "no")}
                        >
                          No
                        </button>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          {/* Name + email gate */}
          <div className={`fsta-gate ${allAnswered ? "fsta-gate-active" : "fsta-gate-locked"}`}>
            {allAnswered ? (
              <>
                <h2 className="fsta-gate-title">Your results are ready.</h2>
                <p className="fsta-gate-copy">
                  Enter your first name and email to see your score, what it means, and what to do next.
                </p>
                <div className="fsta-gate-form">
                  <input
                    type="text"
                    className="fsta-name-input"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    aria-label="First name"
                    autoComplete="given-name"
                  />
                  <input
                    type="email"
                    className="fsta-email-input"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && status !== "submitting") handleSubmit();
                    }}
                    aria-label="Email address"
                    autoComplete="email"
                  />
                  <button
                    type="button"
                    className="fsta-submit-btn"
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Scoring…" : "Show my score"}
                  </button>
                </div>
                {status === "error" && <p className="fsta-error">{errorMsg}</p>}
                <p className="fsta-consent">
                  You will also get occasional sales-building notes. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <p className="fsta-gate-locked-copy">
                Answer all {TOTAL_QUESTIONS} questions to unlock your score.
              </p>
            )}
          </div>
        </>
      )}

      {/* Results */}
      {showResults && (
        <div className="fsta-results">
          <p className="fsta-score-line">
            {firstName.trim() ? `${firstName.trim()}, you` : "You"} scored{" "}
            <span className="fsta-score-num">{score}</span> out of {TOTAL_QUESTIONS}
          </p>
          <div className="fsta-band-header">{band.title}</div>
          <p className="fsta-band-body">{band.body}</p>

          <div className="fsta-next">
            <h3 className="fsta-next-title">What to do next</h3>
            <p className="fsta-next-copy">
              Whatever you scored, here is what I would not do: hire a full-time VP of Sales to fix
              this. A consultant gives you a map. A fractional sales leader helps you drive the car. My
              job is to build the playbook, the pipeline discipline, and the hiring system alongside
              you, so the next hire you make actually works.
            </p>
            <a className="fsta-cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book your free 30-minute call
            </a>
            <p className="fsta-check-email">Your results and next steps are on their way to your inbox.</p>
          </div>
        </div>
      )}

      {/* Bio */}
      <footer className="fsta-bio">
        Louie Bernstein has 50 years of sales experience. He founded MindIQ in 1986 and bootstrapped
        it to INC 500 status over 22 years. Since 2016 he has worked as a fractional sales leader,
        helping founders build the systems that let them step back from closing every deal themselves.
      </footer>
    </div>
  );
}

const styles = `
.fsta-root {
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px 48px;
  line-height: 1.5;
  box-sizing: border-box;
}
.fsta-root *, .fsta-root *::before, .fsta-root *::after { box-sizing: border-box; }

.fsta-header { text-align: center; margin-bottom: 20px; }
.fsta-title { font-size: 30px; font-weight: 700; color: ${NAVY}; margin: 0 0 8px; line-height: 1.2; }
.fsta-title-accent { color: ${ORANGE}; }
.fsta-sub { font-size: 16px; color: #555; font-style: italic; margin: 0; }

.fsta-progress-wrap {
  height: 8px; background: #e8ebf1; border-radius: 999px; overflow: hidden; margin-top: 8px;
}
.fsta-progress-bar {
  height: 100%; background: ${ORANGE}; border-radius: 999px; transition: width 0.25s ease;
}
.fsta-progress-label { font-size: 13px; color: #777; text-align: right; margin: 6px 0 0; }

.fsta-instructions {
  font-size: 15px; color: #444; background: #f6f8fb; border-left: 3px solid ${NAVY};
  padding: 10px 14px; border-radius: 4px; margin: 16px 0 24px;
}

.fsta-section { margin-bottom: 22px; }
.fsta-section-header {
  background: ${NAVY}; color: #fff; font-weight: 700; font-size: 15px;
  padding: 10px 14px; border-radius: 4px;
}
.fsta-question-list { list-style: none; margin: 0; padding: 0; }
.fsta-question {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 4px; border-bottom: 1px solid #eee;
}
.fsta-question-text { font-size: 15px; color: #222; flex: 1; }
.fsta-question-num { color: ${ORANGE}; font-weight: 700; margin-right: 4px; }

.fsta-answer-buttons { display: flex; gap: 8px; flex-shrink: 0; }
.fsta-answer-btn {
  font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
  border: 1.5px solid #cfd6e2; background: #fff; color: #667;
  border-radius: 6px; padding: 8px 16px; min-width: 56px; transition: all 0.15s ease;
}
.fsta-answer-btn:hover { border-color: ${NAVY}; }
.fsta-answer-yes-active {
  background: ${NAVY}; border-color: ${NAVY}; color: #fff;
}
.fsta-answer-no-active {
  background: #4a5568; border-color: #4a5568; color: #fff;
}

.fsta-gate {
  margin-top: 24px; padding: 24px; border-radius: 8px; text-align: center;
  transition: opacity 0.3s ease;
}
.fsta-gate-locked { background: #f4f5f7; opacity: 0.7; }
.fsta-gate-locked-copy { color: #888; font-size: 15px; margin: 0; }
.fsta-gate-active { background: #f6f8fb; border: 2px solid ${NAVY}; }
.fsta-gate-title { color: ${NAVY}; font-size: 22px; font-weight: 700; margin: 0 0 6px; }
.fsta-gate-copy { color: #444; font-size: 15px; margin: 0 0 16px; }
.fsta-gate-form { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.fsta-name-input, .fsta-email-input {
  font-family: inherit; font-size: 16px; padding: 12px 14px; border: 1.5px solid #cfd6e2;
  border-radius: 6px; max-width: 100%; color: #222; background: #fff;
}
.fsta-name-input { width: 160px; }
.fsta-email-input { width: 250px; }
.fsta-name-input:focus, .fsta-email-input:focus { outline: none; border-color: ${NAVY}; }
.fsta-submit-btn {
  font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer;
  background: ${ORANGE}; color: #fff; border: none; border-radius: 6px; padding: 12px 22px;
  transition: filter 0.15s ease;
}
.fsta-submit-btn:hover { filter: brightness(0.94); }
.fsta-submit-btn:disabled { opacity: 0.65; cursor: default; }
.fsta-error { color: #c0392b; font-size: 14px; margin: 10px 0 0; }
.fsta-consent { color: #888; font-size: 12px; margin: 14px 0 0; }

.fsta-results { margin-top: 8px; }
.fsta-score-line { text-align: center; font-size: 18px; color: #444; margin: 0 0 16px; }
.fsta-score-num { color: ${ORANGE}; font-weight: 700; font-size: 24px; }
.fsta-band-header {
  background: ${NAVY}; color: #fff; font-weight: 700; font-size: 18px;
  padding: 14px 18px; border-radius: 6px; text-align: center;
}
.fsta-band-body { font-size: 16px; color: #333; margin: 16px 4px 28px; }

.fsta-next {
  background: #f6f8fb; border-radius: 8px; padding: 24px; text-align: center;
}
.fsta-next-title { color: ${NAVY}; font-size: 20px; font-weight: 700; margin: 0 0 10px; }
.fsta-next-copy { font-size: 15px; color: #444; margin: 0 0 20px; text-align: left; }
.fsta-cta {
  display: inline-block; background: ${ORANGE}; color: #fff; text-decoration: none;
  font-size: 17px; font-weight: 700; padding: 14px 28px; border-radius: 6px;
  transition: filter 0.15s ease;
}
.fsta-cta:hover { filter: brightness(0.94); }
.fsta-check-email { font-size: 13px; color: #888; margin: 16px 0 0; }

.fsta-bio {
  font-size: 13px; color: #888; font-style: italic; margin-top: 40px;
  padding-top: 16px; border-top: 1px solid #ddd;
}

@media (max-width: 520px) {
  .fsta-title { font-size: 24px; }
  .fsta-question { flex-direction: column; align-items: flex-start; }
  .fsta-answer-buttons { width: 100%; }
  .fsta-answer-btn { flex: 1; }
  .fsta-name-input, .fsta-email-input { width: 100%; }
  .fsta-gate-form { flex-direction: column; }
  .fsta-submit-btn { width: 100%; }
}
`;
