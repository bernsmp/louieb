/**
 * POST /api/audit-subscribe
 * -------------------------
 * Receives { email, firstName, score, band } from the Founder Sales Trap
 * Self-Audit and wires the prospect into Kit (kit.com, formerly ConvertKit).
 *
 * The Kit API key is a secret and must never ship to the browser, so the
 * client component POSTs here and this route calls Kit server-side.
 *
 * What it does:
 *   1. Subscribes the email to the Kit form (KIT_FORM_ID). With double opt-in
 *      enabled on the form, Kit sends the confirmation email; the automation
 *      "joins form -> add to sequence" starts the drip emails.
 *   2. Upserts the subscriber profile with first_name and the audit_score
 *      custom field (non-fatal — the field must exist in Kit first).
 *   3. Applies a score-band tag (deep / halfway / systems) for segmentation
 *      (non-fatal).
 *
 * Required env vars: KIT_API_KEY, KIT_FORM_ID.
 * Optional env vars: KIT_TAG_DEEP, KIT_TAG_HALFWAY, KIT_TAG_SYSTEMS.
 * Run `node scripts/kit-audit-setup.js` to create the tags + custom field
 * and print the values to paste into Vercel.
 */

import { NextResponse } from "next/server";

const KIT_BASE = "https://api.kit.com/v4";

const BAND_TAG_ENV: Record<string, string | undefined> = {
  deep: process.env.KIT_TAG_DEEP,
  halfway: process.env.KIT_TAG_HALFWAY,
  systems: process.env.KIT_TAG_SYSTEMS,
};

function kitHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Kit-Api-Key": process.env.KIT_API_KEY || "",
  };
}

export async function POST(request: Request) {
  try {
    const { email, firstName, score, band } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    if (!process.env.KIT_API_KEY || !process.env.KIT_FORM_ID) {
      // Fail loudly in logs, but the client still shows results to the user.
      console.error("Kit env vars missing: KIT_API_KEY and/or KIT_FORM_ID.");
      return NextResponse.json({ error: "Server not configured." }, { status: 500 });
    }

    const emailAddress = email.trim();
    const name = typeof firstName === "string" ? firstName.trim() : "";

    // 1) Subscribe to the form. This is what triggers the double opt-in
    //    confirmation email and the "joins form -> sequence" automation.
    const formRes = await fetch(
      `${KIT_BASE}/forms/${process.env.KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: kitHeaders(),
        body: JSON.stringify({ email_address: emailAddress }),
      }
    );

    if (!formRes.ok) {
      const detail = await formRes.text().catch(() => "");
      console.error("Kit form subscribe failed:", formRes.status, detail);
      return NextResponse.json({ error: "Subscription failed." }, { status: 502 });
    }

    // 2) Upsert the profile with first name + audit score. Kit upserts on
    //    email_address, so this enriches the subscriber created in step 1.
    //    Non-fatal: the subscription already succeeded.
    const profileRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: "POST",
      headers: kitHeaders(),
      body: JSON.stringify({
        email_address: emailAddress,
        ...(name ? { first_name: name } : {}),
        // Requires a custom field named exactly "audit_score" in Kit;
        // Kit silently drops unknown fields if it doesn't exist yet.
        fields: { audit_score: String(score ?? "") },
      }),
    });
    if (!profileRes.ok) {
      const detail = await profileRes.text().catch(() => "");
      console.error("Kit profile upsert failed:", profileRes.status, detail);
    }

    // 3) Apply the band tag for segmentation (non-fatal if it fails).
    const tagId = BAND_TAG_ENV[String(band)];
    if (tagId) {
      const tagRes = await fetch(`${KIT_BASE}/tags/${tagId}/subscribers`, {
        method: "POST",
        headers: kitHeaders(),
        body: JSON.stringify({ email_address: emailAddress }),
      });
      if (!tagRes.ok) {
        const detail = await tagRes.text().catch(() => "");
        console.error("Kit tag failed:", tagRes.status, detail);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("audit-subscribe route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
