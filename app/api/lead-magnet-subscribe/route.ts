/**
 * POST /api/lead-magnet-subscribe
 * -------------------------------
 * One shared route for every lead magnet on the site. Receives
 * { magnet, email, firstName, score, band } from LeadMagnetQuiz and wires the
 * prospect into Kit (kit.com).
 *
 * Adding a new lead magnet = add one entry to MAGNETS below. Form and tag IDs
 * are not secrets, so they live here in code — only KIT_API_KEY comes from the
 * environment (already set in Vercel), which means new magnets need zero
 * Vercel changes.
 *
 * What every signup gets in Kit:
 *   - subscriber created/updated (first name + <scoreField> custom field)
 *   - lead_source custom field = the magnet slug (first touch wins: never
 *     overwritten if the subscriber already has one)
 *   - added to the magnet's form (fires the "joins form -> sequence"
 *     automation Louie builds in Kit)
 *   - a "Magnet: ..." source tag + a score-band tag for segmentation
 *
 * Kit v4 API facts (learned the hard way — see docs/SOP-LEAD-MAGNET.md):
 *   - the form endpoint 404s unless the subscriber exists, so create first
 *   - API-created subscribers are auto-confirmed; no double-opt-in email is
 *     sent — sequence email #1 is the "confirmation"
 *   - custom fields must exist in Kit before the API can write them
 */

import { NextResponse } from "next/server";

const KIT_BASE = "https://api.kit.com/v4";

type MagnetConfig = {
  formId: string;
  /** Kit custom field that stores the quiz score. Must exist in Kit. */
  scoreField: string;
  /** "Magnet: ..." tag id — marks which lead magnet brought the subscriber. */
  sourceTagId: number;
  /** band key (from the component's getBand) → Kit tag id */
  bandTags: Record<string, number>;
};

const MAGNETS: Record<string, MagnetConfig> = {
  "founder-sales-trap-audit": {
    formId: "9648246",
    scoreField: "audit_score",
    sourceTagId: 20924189, // Magnet: Founder Sales Trap Audit
    bandTags: {
      deep: 20897538, // Audit: Deep in the Trap
      halfway: 20897539, // Audit: Halfway Out
      systems: 20897540, // Audit: Has Systems
    },
  },
  "icp-checklist": {
    formId: "9652270",
    scoreField: "icp_score",
    sourceTagId: 20924188, // Magnet: ICP Checklist
    bandTags: {
      everyone: 20924185, // ICP: Selling to Everyone
      sketch: 20924186, // ICP: Sketch Not Profile
      filter: 20924187, // ICP: Filter Installed
    },
  },
};

function kitHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Kit-Api-Key": process.env.KIT_API_KEY || "",
  };
}

/** Non-fatal tag application — a failed tag should never cost us the lead. */
async function applyTag(tagId: number, emailAddress: string) {
  const res = await fetch(`${KIT_BASE}/tags/${tagId}/subscribers`, {
    method: "POST",
    headers: kitHeaders(),
    body: JSON.stringify({ email_address: emailAddress }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`Kit tag ${tagId} failed:`, res.status, detail);
  }
}

export async function POST(request: Request) {
  try {
    const { magnet, email, firstName, score, band } = await request.json();

    const config = MAGNETS[String(magnet)];
    if (!config) {
      return NextResponse.json({ error: "Unknown lead magnet." }, { status: 400 });
    }
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    if (!process.env.KIT_API_KEY) {
      // Fail loudly in logs, but the client still shows results to the user.
      console.error("KIT_API_KEY is not set.");
      return NextResponse.json({ error: "Server not configured." }, { status: 500 });
    }

    const emailAddress = email.trim();
    const name = typeof firstName === "string" ? firstName.trim() : "";

    // First touch wins for lead_source: if this email already has one
    // (e.g. they took another magnet first), keep the original.
    let existingSource = "";
    try {
      const lookup = await fetch(
        `${KIT_BASE}/subscribers?email_address=${encodeURIComponent(emailAddress)}`,
        { headers: kitHeaders() }
      );
      if (lookup.ok) {
        const data = await lookup.json();
        existingSource = data?.subscribers?.[0]?.fields?.lead_source || "";
      }
    } catch {
      // Lookup is best-effort; worst case we set lead_source again.
    }

    // 1) Create/upsert the subscriber (required before the form call — Kit v4
    //    404s otherwise). Upserts on email_address, so retakes don't duplicate.
    const fields: Record<string, string> = {
      [config.scoreField]: String(score ?? ""),
    };
    if (!existingSource) fields.lead_source = String(magnet);

    const createRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: "POST",
      headers: kitHeaders(),
      body: JSON.stringify({
        email_address: emailAddress,
        ...(name ? { first_name: name } : {}),
        fields,
      }),
    });
    if (!createRes.ok) {
      const detail = await createRes.text().catch(() => "");
      console.error("Kit subscriber create failed:", createRes.status, detail);
      return NextResponse.json({ error: "Subscription failed." }, { status: 502 });
    }

    // 2) Add to the magnet's form — fires the Kit automation.
    const formRes = await fetch(`${KIT_BASE}/forms/${config.formId}/subscribers`, {
      method: "POST",
      headers: kitHeaders(),
      body: JSON.stringify({ email_address: emailAddress }),
    });
    if (!formRes.ok) {
      const detail = await formRes.text().catch(() => "");
      console.error("Kit form subscribe failed:", formRes.status, detail);
      return NextResponse.json({ error: "Subscription failed." }, { status: 502 });
    }

    // 3) Source tag + band tag (non-fatal).
    await applyTag(config.sourceTagId, emailAddress);
    const bandTagId = config.bandTags[String(band)];
    if (bandTagId) await applyTag(bandTagId, emailAddress);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("lead-magnet-subscribe route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
