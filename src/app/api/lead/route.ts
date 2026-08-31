import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_TO = process.env.LEAD_NOTIFY_EMAIL ?? "admin@vortexaerotech.co.za";
const NOTIFY_FROM = process.env.LEAD_NOTIFY_FROM ?? "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  const { name, contact } = await req.json();

  if (typeof name !== "string" || !name.trim() || typeof contact !== "string" || !contact.trim()) {
    return NextResponse.json({ error: "Naam en kontakbesonderhede is verpligtend" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: NOTIFY_FROM,
    to: NOTIFY_TO,
    subject: `Nuwe navraag: ${name.trim()}`,
    text: `Naam: ${name.trim()}\nKontak: ${contact.trim()}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
