import { NextRequest, NextResponse } from "next/server";
import { getEmailService } from "@/lib/email";

/**
 * GET endpoint - Health check
 */
export async function GET() {
  return NextResponse.json({ message: "API is working" });
}

/**
 * POST endpoint - Handle waitlist subscription
 * 
 * This endpoint receives waitlist form submissions and sends an email
 * notification to hello@bitfeed.ai with the user's information.
 * 
 * Note: We only send emails to the team, not to the user themselves.
 */
export async function POST(req: NextRequest) {
  try {
    console.log("Received a POST request");

    const body = await req.json();
    const email = body.email;
    const formType = body.formType || "notified"; // "notified" or "earlyAccess"
    const source = body.source || "";
    const role = body.role || "";
    const socialUrl = body.socialUrl || "";
    const apply = body.apply || false;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get the email service (modular - can switch providers easily)
    const emailService = getEmailService();

    // IMPORTANT: Only send notification email to hello@bitfeed.ai (team)
    // We do NOT send confirmation emails to users - this is disabled
    // The user's email is only used as replyTo in the notification email
    await emailService.sendWaitlistNotification({
      email,
      formType,
      apply,
      source: apply ? source : undefined,
      role: apply ? role : undefined,
      socialUrl: apply ? socialUrl : undefined,
    });

    return NextResponse.json(
      { success: true, message: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error:", error);

    // Provide helpful error messages
    if (error.message?.includes("Email configuration")) {
      return NextResponse.json(
        { error: "Server misconfiguration: Email service not properly configured" },
        { status: 500 }
      );
    }

    if (error.code === "ECONNECTION" || error.code === "EAUTH") {
      return NextResponse.json(
        { error: "Failed to connect to email server. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}

