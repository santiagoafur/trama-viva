import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, interest, message } = await req.json();

    await resend.emails.send({
      from: "Trama Viva <noreply@trama-viva.com>",
      to: ["afur.santiago29@gmail.com"],
      subject: `Nuevo mensaje de contacto — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #292E17;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #868859; font-weight: bold;">Nombre</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #868859; font-weight: bold;">Email</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #868859; font-weight: bold;">Teléfono</td><td>${phone || "No proporcionado"}</td></tr>
            <tr><td style="padding: 8px 0; color: #868859; font-weight: bold;">Interés</td><td>${interest}</td></tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="color: #868859; font-weight: bold;">Mensaje</p>
            <p style="color: #3B1B0E;">${message}</p>
          </div>
        </div>
      `,
    });

    // Email de confirmación al usuario
    await resend.emails.send({
      from: "Trama Viva <noreply@trama-viva.com>",
      to: [email],
      subject: "Recibimos tu mensaje — Trama Viva",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #292E17;">Hola ${name} 🌿</h2>
          <p style="color: #3B1B0E; line-height: 1.7;">
            Recibimos tu mensaje y nos pondremos en contacto pronto.
          </p>
          <p style="color: #3B1B0E; line-height: 1.7;">
            Mientras tanto, podés seguirnos en Instagram 
            <a href="https://instagram.com/tramaviva.red" style="color: #7E2625;">@tramaviva.red</a>
          </p>
          <p style="color: #868859; margin-top: 32px; font-size: 14px;">
            Con amor,<br/>El equipo de Trama Viva
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}