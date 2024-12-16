import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  // Example credentials from environment variables
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
  }
}
