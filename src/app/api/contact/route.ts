import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "minnthetpaingoo@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7C3AED;">New message from your portfolio</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; color: #6B7280; width: 80px;"><strong>Name</strong></td>
              <td style="padding: 8px; color: #111827;">${name}</td>
            </tr>
            <tr style="background:#F9FAFB;">
              <td style="padding: 8px; color: #6B7280;"><strong>Email</strong></td>
              <td style="padding: 8px; color: #111827;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; color: #6B7280;"><strong>Subject</strong></td>
              <td style="padding: 8px; color: #111827;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #F3F4F6; border-radius: 8px;">
            <p style="color: #6B7280; margin: 0 0 8px;"><strong>Message</strong></p>
            <p style="color: #111827; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
