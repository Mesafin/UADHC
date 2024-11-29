// app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, services, message } = await req.json();

  // Configure Nodemailer with SMTP settings for GoDaddy Workspace Email
  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465, // SSL port (or use 587 for TLS)
    secure: true, // Use SSL
    auth: {
      user: "filimon@uadhc.com",
      pass: "email@filimon"
    //   user: process.env.GODADDY_EMAIL, // GoDaddy Email address
    //   pass: process.env.GODADDY_EMAIL_PASSWORD, // GoDaddy email password
    },
  });

  const mailOptions = {
    from: email, // Sender's email (from form)
    to: 'filimon@uadhc.com', // Recipient email (your email)
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
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
      { status: 500 }
    );
  }
}
