import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, locale } = await req.json();

    // Email a Eli
    await resend.emails.send({
      from: "Trama Viva <noreply@trama-viva.com>",
      to: ["afur.santiago29@gmail.com"],
      subject: `Nuevo mensaje de contacto — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #3B1B0E;">
          <div style="background: #292E17; padding: 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #E8DCC4; margin: 0; font-size: 24px;">Nuevo mensaje de contacto</h2>
          </div>
          <div style="background: #F4EDE0; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; color: #868859; font-weight: bold; width: 120px;">Nombre</td><td>${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #868859; font-weight: bold;">Email</td><td><a href="mailto:${email}" style="color: #7E2625;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #868859; font-weight: bold;">Asunto</td><td>${subject || "No especificado"}</td></tr>
            </table>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #868859;">
              <p style="color: #868859; font-weight: bold; margin: 0 0 8px;">Mensaje</p>
              <p style="margin: 0; line-height: 1.7;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Email de confirmación al usuario
    await resend.emails.send({
      from: "Trama Viva <noreply@trama-viva.com>",
      to: [email],
      subject: locale === "es"
        ? "Recibimos tu mensaje — Trama Viva"
        : "We received your message — Trama Viva",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #3B1B0E;">
          <div style="background: #292E17; padding: 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #E8DCC4; margin: 0; font-size: 24px;">Hola ${name} 🌿</h2>
          </div>
          <div style="background: #F4EDE0; padding: 32px; border-radius: 0 0 12px 12px;">
            <p style="line-height: 1.7; margin: 0 0 16px;">${locale === "es" ? "Recibimos tu mensaje y nos pondremos en contacto a la brevedad." : "We received your message and will get back to you shortly."}</p>
            <p style="line-height: 1.7; margin: 0 0 32px;">${locale === "es" ? "Mientras tanto, podés seguirnos en Instagram" : "In the meantime, follow us on Instagram"} <a href="https://instagram.com/tramaviva.red" style="color: #7E2625;">@tramaviva.red</a></p>
            <p style="color: #868859; font-size: 14px; margin: 0;">${locale === "es" ? "Con amor," : "With love,"}<br/>El equipo de Trama Viva</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}