import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Add your email service logic here (e.g., Mailchimp, SendGrid, etc.)
    // Example: Log to the console for now
    console.log(`New subscriber: ${email}`);

    // Respond with success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error subscribing user:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
