"use client";

/**
 * LeadMagnetQuiz — generic interactive lead magnet (yes/no quiz + gated score)
 * ---------------------------------------------------------------------------
 * One component powers every quiz-style lead magnet on the site. Each magnet
 * is a thin wrapper that passes its own questions, score bands, and copy
 * (see FounderSalesTrapAudit.tsx and IcpClarityChecklist.tsx).
 *
 * Flow: answer every question → first name + email gate → POST to
 * /api/lead-magnet-subscribe (which wires the lead into Kit) → show the
 * personalized result. Results are ALWAYS shown even if the Kit call fails —
 * never lose the lead experience to an integration hiccup.
 *
 * Brand: navy #1B3A6B, orange #E8610A.
 */

import { useMemo, useState } from "react";

const NAVY = "#1B3A6B";
const ORANGE = "#E8610A";
const CALENDLY_URL = "https://calendly.com/louiebernstein/30minutes";

type Answer = "yes" | "no";

// reverse: true means "No" is the healthy answer and earns the point.
export type QuizQuestion = { id: number; text: string; reverse?: boolean };
export type QuizSection = { title: string; questions: QuizQuestion[] };
export type QuizBand = { key: string; title: string; body: string };

export type LeadMagnetQuizProps = {
  /** Config key in app/api/lead-magnet-subscribe (usually the page slug). */
  magnet: string;
  titleMain: string;
  titleAccent: string;
  subtitle: string;
  instructions: string;
  sections: QuizSection[];
  getBand: (score: number) => QuizBand;
  nextTitle: string;
  nextCopy: string;
  ctaLabel: string;
};

export default function LeadMagnetQuiz({
  magnet,
  titleMain,
  titleAccent,
  subtitle,
  instructions,
  sections,
  getBand,
  nextTitle,
  nextCopy,
  ctaLabel,
}: LeadMagnetQuizProps) {
  const allQuestions = useMemo(() => sections.flatMap((s) => s.questions), [sections]);
  const totalQuestions = allQuestions.length;

  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions;
  const score = useMemo(
    () =>
      allQuestions.filter((q) => {
        const a = answers[q.id];
        return a !== undefined && a === (q.reverse ? "no" : "yes");
      }).length,
    [answers, allQuestions]
  );
  const band = useMemo(() => getBand(score), [score, getBand]);

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
      const res = await fetch("/api/lead-magnet-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          magnet,
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
      console.error("Lead magnet subscribe error:", err);
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
          {titleMain} <span className="fsta-title-accent">{titleAccent}</span>
        </h2>
        <p className="fsta-sub">{subtitle}</p>
      </header>

      {!showResults && (
        <>
          {/* Progress */}
          <div className="fsta-progress-wrap" aria-hidden="true">
            <div
              className="fsta-progress-bar"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
          <p className="fsta-progress-label">
            {answeredCount} of {totalQuestions} answered
          </p>

          {/* Instructions */}
          <p className="fsta-instructions">{instructions}</p>

          {/* Questions */}
          {sections.map((section, i) => (
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
                Answer all {totalQuestions} questions to unlock your score.
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
            <span className="fsta-score-num">{score}</span> out of {totalQuestions}
          </p>
          <div className="fsta-band-header">{band.title}</div>
          <p className="fsta-band-body">{band.body}</p>

          <div className="fsta-next">
            <h3 className="fsta-next-title">{nextTitle}</h3>
            <p className="fsta-next-copy">{nextCopy}</p>
            <a className="fsta-cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
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
