
import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";
import "isomorphic-fetch";

export async function POST(req) {
  // Get the form data from the request body
  const { name, email, phone, services, message } = await req.json();

  // Microsoft Graph API credentials
  const tenantId = process.env.TENANT_ID;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  // Set up authentication using Microsoft Graph API
  const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

  // Initialize the Microsoft Graph client
  const client = Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => {
        const token = await credential.getToken("https://graph.microsoft.com/.default");
        return token.token;
      },
    },
  });

  // Email payload
  const emailPayload = {
    message: {
      subject: `Contact form submission from ${name}`,
      body: {
        contentType: "HTML",
        content: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Services:</strong> ${services}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      },
      toRecipients: [
        {
          emailAddress: {
            address: "admin@uadhc.com", 
          },
        },
      ],
    },
    saveToSentItems: "true",
  };

  try {
    // Send the email using Microsoft Graph API
    await client.api("/me/sendMail").post(emailPayload);
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
  }
}
