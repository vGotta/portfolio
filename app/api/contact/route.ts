import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation — champs obligatoires
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 },
      );
    }

    // Validation — longueurs
    if (name.length > 50) {
      return NextResponse.json(
        { error: "Nom trop long (50 caractères max)." },
        { status: 400 },
      );
    }

    if (subject && subject.length > 150) {
      return NextResponse.json(
        { error: "Sujet trop long (150 caractères max)." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message trop long (5000 caractères max)." },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message trop court (10 caractères minimum)." },
        { status: 400 },
      );
    }

    // Validation — format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = subject ? escapeHtml(subject) : "—";
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
      from: "Portfolio <contact@vincent-gotta.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subject || "Nouveau message"} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">
            Nouveau message depuis ton portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 100px;">Nom</td>
              <td style="padding: 8px 0; font-weight: 600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Sujet</td>
              <td style="padding: 8px 0;">${safeSubject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #0f172a; line-height: 1.7; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            Envoyé depuis ton portfolio — réponds directement à cet email pour contacter ${safeName}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur serveur, réessaie plus tard." },
      { status: 500 },
    );
  }
}
