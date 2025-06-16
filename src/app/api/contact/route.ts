import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, company, position, whatsapp, description } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // pode trocar para outro provedor
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Fazza Agro Bank" <${process.env.EMAIL_USER}>`,
    to: `"Fazza Agro Bank" <${process.env.EMAIL_TO}`, // email destino
    subject: `Contato de ${name}`,
    text: `
Nome: ${name}
Email: ${email}
Empresa: ${company}
Cargo: ${position}
WhatsApp: ${whatsapp}

Mensagem:
${description}
    `,
    replyTo: email, // Responder para o e-mail do remetente
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, error });
  }
}
