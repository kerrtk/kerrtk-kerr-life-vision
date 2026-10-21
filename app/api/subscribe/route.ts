import { NextResponse } from "next/server";

// Adds a subscriber to the Brevo list for The Legacy Blueprint.
// Needs BREVO_API_KEY and BREVO_LIST_ID set in Vercel. Until both are set,
// this says so plainly instead of pretending the sign-up worked.

const BREVO_CONTACTS = "https://api.brevo.com/v3/contacts";
const FALLBACK = "kerr.systems@gmail.com";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error("[subscribe] BREVO_API_KEY or BREVO_LIST_ID is not set");
    return NextResponse.json(
      {
        ok: false,
        error: `Sign-up is not switched on yet. Email ${FALLBACK} and I will send it to you myself.`,
      },
      { status: 503 },
    );
  }

  let payload: { email?: string; firstName?: string; website?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "That did not come through. Please try again." },
      { status: 400 },
    );
  }

  // Honeypot: a hidden field people never fill in. Bots do.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const email = String(payload.email ?? "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address does not look quite right." },
      { status: 400 },
    );
  }

  const firstName = String(payload.firstName ?? "").trim().slice(0, 80);

  try {
    const response = await fetch(BREVO_CONTACTS, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        listIds: [Number(listId)],
        attributes: firstName ? { FIRSTNAME: firstName } : {},
      }),
      cache: "no-store",
    });

    // 201 on create, 204 when an existing contact is updated.
    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({ ok: true });
    }

    const detail = await response.text();
    console.error(`[subscribe] Brevo responded ${response.status}: ${detail}`);
    return NextResponse.json(
      {
        ok: false,
        error: `That did not save just now. Please try again, or email ${FALLBACK}.`,
      },
      { status: 502 },
    );
  } catch (error) {
    console.error("[subscribe] request to Brevo failed", error);
    return NextResponse.json(
      {
        ok: false,
        error: `I could not reach the email service. Please try again shortly, or email ${FALLBACK}.`,
      },
      { status: 502 },
    );
  }
}
