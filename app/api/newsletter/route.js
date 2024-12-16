import { supabase } from '../../../lib/supabase.js';

export async function POST(req) {
  try {
    console.log('Request received for newsletter');

    // Parse JSON input (since we're sending JSON, not FormData)
    const { name, email } = await req.json();

    console.log('Received Data:', { name, email });

    // Validate required fields
    if (!name || !email) {
      throw new Error('Name and email are required.');
    }

    // Insert form data into the Supabase table
    const { data, error: insertError } = await supabase.from('newsletter_subscribers').insert([
      { name, email },
    ]);

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw new Error(insertError.message);
    }

    console.log('Database insert successful:', data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in POST handler:', error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
