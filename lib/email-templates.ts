/**
 * Email Templates for Bitfeed
 * 
 * These templates replace the Mailchimp templates that were previously used.
 */

export interface WaitlistFormData {
  email: string;
  formType: "notified" | "earlyAccess";
  apply: boolean;
  source?: string;
  role?: string;
  socialUrl?: string;
}

/**
 * Get waitlist notification email template
 * This email is sent to hello@bitfeed.ai with the user's information
 */
export function getWaitlistEmailTemplate(data: WaitlistFormData) {
  const currentYear = new Date().getFullYear();
  const siteUrl = process.env.SITE_URL || "https://bitfeed.ai";

  // Format the additional information if user applied for early access
  let additionalInfo = "";
  if (data.apply) {
    additionalInfo = `
Additional Information:
- How did they find us: ${data.source || "Not provided"}
- Current role: ${data.role || "Not provided"}
- Social/Website: ${data.socialUrl || "Not provided"}
`;
  }

  const formTypeLabel = data.formType === "earlyAccess" ? "Early Access" : "Get Notified";
  const subject = `New ${formTypeLabel} Form Submission from ${data.email}`;

  // Plain text version
  const text = `
${siteUrl}

** Welcome to Bitfeed
------------------------------------------------------------

** New ${formTypeLabel} Form Submission
------------------------------------------------------------

Form Type: ${formTypeLabel}
Email: ${data.email}
${data.formType === "earlyAccess" ? `Early Access Request: ${data.apply ? "Yes" : "No"}` : ""}
${additionalInfo}

---
This is an automated notification from the Bitfeed waitlist form.

Smarter Feeds 🧠 Daily
${siteUrl}
https://x.com/bitfeedai
https://www.linkedin.com/company/bitfeed/

Copyright (C) ${currentYear} Bitfeed. All rights reserved.
`;

  // HTML version
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Waitlist Signup</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <a href="${siteUrl}" style="color: #333; text-decoration: none; font-size: 24px; font-weight: bold;">
      ${siteUrl}
    </a>
  </div>

  <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
    <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
      ** Welcome to Bitfeed
    </h2>
    
    <h3 style="color: #374151; margin-top: 20px;">
      ** New ${formTypeLabel} Form Submission
    </h3>

    <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 15px;">
      <p style="margin: 10px 0;"><strong>Form Type:</strong> ${formTypeLabel}</p>
      <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
      ${data.formType === "earlyAccess" ? `<p style="margin: 10px 0;"><strong>Early Access Request:</strong> ${data.apply ? "Yes" : "No"}</p>` : ""}
      ${data.apply ? `
      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
        <h4 style="color: #4b5563; margin-top: 0;">Additional Information:</h4>
        <p style="margin: 8px 0;"><strong>How did they find us:</strong> ${data.source || "Not provided"}</p>
        <p style="margin: 8px 0;"><strong>Current role:</strong> ${data.role || "Not provided"}</p>
        <p style="margin: 8px 0;"><strong>Social/Website:</strong> ${data.socialUrl ? `<a href="${data.socialUrl}" style="color: #2563eb;">${data.socialUrl}</a>` : "Not provided"}</p>
      </div>
      ` : ""}
    </div>
  </div>

  <div style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
    <p style="margin: 5px 0;">This is an automated notification from the Bitfeed waitlist form.</p>
    <p style="margin: 15px 0;">
      <strong style="color: #1f2937;">Smarter Feeds 🧠 Daily</strong>
    </p>
    <p style="margin: 5px 0;">
      <a href="${siteUrl}" style="color: #2563eb; text-decoration: none;">${siteUrl}</a>
    </p>
    <p style="margin: 5px 0;">
      <a href="https://x.com/bitfeedai" style="color: #2563eb; text-decoration: none;">https://x.com/bitfeedai</a>
    </p>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/company/bitfeed/" style="color: #2563eb; text-decoration: none;">https://www.linkedin.com/company/bitfeed/</a>
    </p>
    <p style="margin: 20px 0 5px 0; color: #9ca3af;">
      Copyright (C) ${currentYear} Bitfeed. All rights reserved.
    </p>
  </div>
</body>
</html>
`;

  return { subject, text, html };
}

