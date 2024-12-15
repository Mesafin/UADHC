// app/api/newsletter/route.js
export async function POST(req) {
    const { email } = await req.json();
  
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }
  
    try {
      // Example: Save to a service like Mailchimp
      const response = await fetch('https://YOUR_MAILCHIMP_API_URL', {
        method: 'POST',
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
  
      return new Response(JSON.stringify({ message: 'Subscribed successfully!' }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to subscribe' }), { status: 500 });
    }
  }
  