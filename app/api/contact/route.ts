import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitMap.get(ip) || []).filter((time) => time > windowStart);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    // Basic IP detection
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, website_url } = body;

    // Honeypot check: If the hidden field is filled, silently discard spam
    if (website_url) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailPattern.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO || smtpUser;

    if (smtpUser && smtpPass && contactTo) {
      // Connect to Hostinger SMTP over port 465 SSL
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"CRORESTARS Contact" <${smtpUser}>`,
        to: contactTo,
        replyTo: cleanEmail,
        subject: `[CRORESTARS Inquiry] Message from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1A1A1A;">
            <h2 style="margin-bottom: 16px; border-bottom: 1px solid #E5E5E5; padding-bottom: 8px;">
              New Inquiry — CRORESTARS
            </h2>
            <p><strong>Name:</strong> ${cleanName}</p>
            <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #F7F7F7; padding: 16px; border-left: 3px solid #1A1A1A; white-space: pre-wrap;">${cleanMessage}</div>
          </div>
        `,
      });
    } else {
      // Fallback in development or when SMTP credentials are not yet set
      console.warn(
        "[CRORESTARS Contact Form] SMTP credentials not set. Message logged to console:\n",
        { name: cleanName, email: cleanEmail, messageLength: cleanMessage.length }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message delivered successfully.",
    });
  } catch (error) {
    console.error("[CRORESTARS Contact Form Error]", error);
    return NextResponse.json(
      { error: "Failed to send message. Please use the direct email link below." },
      { status: 500 }
    );
  }
}
