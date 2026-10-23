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
        { error: "Rate limit reached. Please wait a few minutes before trying again." },
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

    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || "contact@crorestars.com";
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO || "contact@crorestars.com";

    // If SMTP credentials are fully provided with a password
    if (smtpPass && smtpPass.trim() !== "") {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // SSL
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: true,
          },
        });

        await transporter.sendMail({
          from: `"CRORESTARS Executive Desk" <${smtpUser}>`,
          to: contactTo,
          replyTo: cleanEmail,
          subject: `[CRORESTARS Inquiry] Message from ${cleanName}`,
          text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 24px;">
              <h2 style="margin-bottom: 20px; border-bottom: 2px solid #F2A33A; padding-bottom: 8px; color: #111;">
                CRORESTARS — Direct Executive Inquiry
              </h2>
              <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${cleanName}</p>
              <p style="margin: 8px 0;"><strong>Email Address:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
              <p style="margin: 16px 0 8px;"><strong>Executive Message:</strong></p>
              <div style="background-color: #F8F9FA; padding: 20px; border-left: 4px solid #F2A33A; white-space: pre-wrap; font-size: 15px; border-radius: 2px;">${cleanMessage}</div>
              <p style="margin-top: 24px; font-size: 12px; color: #888;">Transmitted securely via crorestars.com</p>
            </div>
          `,
        });

        return NextResponse.json({
          success: true,
          method: "smtp",
          message: "Inquiry delivered directly to contact@crorestars.com via encrypted SMTP.",
        });
      } catch (smtpError) {
        console.error("[Hostinger SMTP Delivery Error]", smtpError);
        // Fall through to provide mailto fallback
        return NextResponse.json({
          success: false,
          unconfigured: false,
          error: "SMTP delivery failed. Please send directly using your email client.",
          directEmail: contactTo,
          mailtoUrl: `mailto:${contactTo}?subject=${encodeURIComponent(`[CRORESTARS Inquiry] ${cleanName}`)}&body=${encodeURIComponent(`From: ${cleanName} (${cleanEmail})\n\n${cleanMessage}`)}`,
        }, { status: 502 });
      }
    }

    // When SMTP_PASS has not been set yet in .env.local
    console.warn(
      "[CRORESTARS Contact Form] SMTP_PASS is not configured in .env.local. Generating direct mail link for:",
      { name: cleanName, email: cleanEmail }
    );

    return NextResponse.json({
      success: false,
      unconfigured: true,
      message: "Direct server SMTP requires your mailbox password in .env.local. You can instantly transmit this message directly to contact@crorestars.com using your email client below.",
      directEmail: contactTo,
      mailtoUrl: `mailto:${contactTo}?subject=${encodeURIComponent(`[CRORESTARS Inquiry] ${cleanName}`)}&body=${encodeURIComponent(`From: ${cleanName} (${cleanEmail})\n\n${cleanMessage}`)}`,
    });

  } catch (error) {
    console.error("[CRORESTARS Contact Route Error]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please contact contact@crorestars.com directly." },
      { status: 500 }
    );
  }
}
