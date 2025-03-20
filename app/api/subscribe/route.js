export async function GET() {
    return new Response(JSON.stringify({ message: "API is working" }), { status: 200 });
  }
  
  export async function POST(req) {
    try {
      console.log("Received a POST request");
  
      const body = await req.json();
      const email = body.email;
      const source = body.source || ""; // Get how they found you
      const role = body.role || ""; // Get the user's role
      const socialUrl = body.socialUrl || ""; // Get the social profile link
      const apply = body.apply || false; // Whether the user wants to be notified
  
      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
      }
  
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  
      if (!API_KEY || !AUDIENCE_ID) {
        return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500 });
      }
  
      const DATACENTER = API_KEY.split("-")[1]; // Extract 'usX' from API key
      const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            SOURCE: source,                 // How did you find us
            ROLE: role,                     // User's role
            URL: socialUrl,                 // Social profile link
            APPLY: apply ? "Yes" : "No",    // Whether they want to apply
          },
        }),
      });
  
      const responseData = await response.json();
  
      if (response.status >= 400) {
        return new Response(JSON.stringify({ error: "Failed to subscribe", details: responseData }), { status: 400 });
      }
  
      return new Response(JSON.stringify({ success: true, message: "Subscribed successfully!" }), { status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return new Response(JSON.stringify({ error: "Server error", details: error.message }), { status: 500 });
    }
  }
  