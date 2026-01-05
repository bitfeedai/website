import nodemailer from "nodemailer";

/**
 * Email Service Configuration
 * 
 * This service is designed to be modular - you can easily switch between
 * different email providers (SMTP, Mailchimp, SendGrid, etc.) by changing
 * the implementation in this file.
 */

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  username: string;
  password: string;
  from: string;
  recipient: string;
}

/**
 * Get email configuration from environment variables
 */
function getEmailConfig(): EmailConfig {
  const config = {
    host: process.env.EMAIL_SERVER_HOST || "",
    port: parseInt(process.env.EMAIL_SERVER_PORT || "465", 10),
    secure: process.env.EMAIL_SERVER_SECURE === "true",
    username: process.env.EMAIL_USERNAME || "",
    password: process.env.EMAIL_PASSWORD || "",
    from: process.env.EMAIL_FROM || "Bitfeed <hello@bitfeed.ai>",
    recipient: process.env.EMAIL_RECIPIENT || "hello@bitfeed.ai",
  };

  // Validate required fields
  if (!config.host || !config.username || !config.password) {
    throw new Error(
      "Email configuration is incomplete. Please check your environment variables."
    );
  }

  return config;
}

/**
 * Create and verify SMTP transporter
 */
async function createTransporter() {
  const config = getEmailConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.username,
      pass: config.password,
    },
    debug: true,
    logger: true,
  });

  // Verify connection
  await transporter.verify();

  return transporter;
}

/**
 * Send email using SMTP
 */
export async function sendEmail(options: {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}) {
  const config = getEmailConfig();
  const transporter = await createTransporter();

  const mailOptions = {
    from: config.from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    replyTo: options.replyTo,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}

/**
 * Email service interface - allows easy switching between providers
 */
export interface EmailService {
  sendWaitlistNotification(data: WaitlistFormData): Promise<void>;
}

export interface WaitlistFormData {
  email: string;
  apply: boolean;
  source?: string;
  role?: string;
  socialUrl?: string;
}

/**
 * SMTP Email Service Implementation
 */
class SMTPEmailService implements EmailService {
  async sendWaitlistNotification(data: WaitlistFormData): Promise<void> {
    const config = getEmailConfig();
    const { getWaitlistEmailTemplate } = await import("./email-templates");

    const { subject, text, html } = getWaitlistEmailTemplate(data);

    // IMPORTANT: Only send emails to hello@bitfeed.ai (team), NOT to the user
    // The user's email is only used as replyTo so we can respond to them
    await sendEmail({
      to: config.recipient, // Always send to hello@bitfeed.ai, never to user
      subject,
      text,
      html,
      replyTo: data.email, // Allow replying directly to the user
    });

    // NOTE: User confirmation emails are disabled for now
    // If you need to send confirmation emails to users in the future, uncomment below:
    /*
    try {
      const { getWaitlistConfirmationTemplate } = await import("./email-templates");
      const { subject: confirmSubject, text: confirmText, html: confirmHtml } = 
        getWaitlistConfirmationTemplate(data);
      
      await sendEmail({
        to: data.email, // Send confirmation to user
        subject: confirmSubject,
        text: confirmText,
        html: confirmHtml,
      });
    } catch (error) {
      // Don't fail the main notification if confirmation fails
      console.error("Failed to send confirmation email to user:", error);
    }
    */
  }
}

/**
 * Mailchimp Email Service Implementation (for future use)
 * This is kept as an example of how to switch providers
 */
class MailchimpEmailService implements EmailService {
  async sendWaitlistNotification(data: WaitlistFormData): Promise<void> {
    // Implementation for Mailchimp
    // This can be restored if needed in the future
    throw new Error("Mailchimp service is not currently active");
  }
}

/**
 * Get the active email service
 * Change this to switch between providers
 */
export function getEmailService(): EmailService {
  // For now, use SMTP. To switch back to Mailchimp, change this:
  return new SMTPEmailService();
  // return new MailchimpEmailService();
}

