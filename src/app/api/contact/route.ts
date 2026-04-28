import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "info@vilmgroup.md";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Toate câmpurile sunt obligatorii." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresă de email invalidă." },
        { status: 400 }
      );
    }

    const host = process.env.ZOHO_SMTP_HOST;
    const port = Number(process.env.ZOHO_SMTP_PORT ?? 465);
    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "Configurare SMTP lipsă pe server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Cerere ofertă — ${name}`;
    const text = `Nume: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`;
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
        <h2 style="margin: 0 0 16px;">Cerere nouă de la ${escapeHtml(name)}</h2>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Vilm Website" <${user}>`,
      to: RECIPIENT,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Mesajul nu a putut fi trimis. Încearcă din nou." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
