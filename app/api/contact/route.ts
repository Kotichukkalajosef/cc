import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, organisation, enquiryType, message } = data;

    // Required field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // In a production setup with Resend / Postmark / SendGrid:
    // You would wire the API call here using process.env.RESEND_API_KEY.
    // Example:
    // if (process.env.RESEND_API_KEY) {
    //   await resend.emails.send({ ... });
    // }

    // Log the enquiry to the server console for audit/development
    console.log("[CRORESTARS Contact Submission]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      organisation: organisation?.trim() || "N/A",
      enquiryType: enquiryType || "General Enquiry",
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully.",
      recipient: siteConfig.email,
    });
  } catch (error) {
    console.error("[CRORESTARS Contact Error]", error);
    return NextResponse.json(
      { error: "Failed to process contact request." },
      { status: 500 }
    );
  }
}
