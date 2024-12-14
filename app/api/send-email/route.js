// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, services, message } = await req.json();

 const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GODADDY_EMAIL,
    pass: process.env.GODADDY_EMAIL_PASSWORD,
  },
  logger: true,
  debug: true,
});


  const mailOptions = {
    from: `"${name}" <mercyride24@gmail.com>`, // Sender's email (from form)
    to: "filimon@uadhc.com", // Recipient email (your email)
    subject: `Contact form submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Services: ${services}
      Message: ${message}
    `,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Services:</strong> ${services}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
