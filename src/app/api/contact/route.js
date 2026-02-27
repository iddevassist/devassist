import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Pesan Baru dari ${name}`,
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No HP:</strong> ${phone || "-"}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}