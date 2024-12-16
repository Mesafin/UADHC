

import { supabase } from '../../../../lib/supabase';

export async function POST(req) {
  try {
    console.log('Request received');

    // Parse FormData
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');

    console.log('FormData:', { name, email, phone, address });

    // Validate required fields
    if (!name || !email || !phone || !address) {
      throw new Error('All fields are required.');
    }

    // Insert form data into Supabase database
    const { data, error: insertError } = await supabase.from('career_form').insert([
      { name, email, phone, address }, // No `resume_url`
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

