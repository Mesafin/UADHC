import { supabase } from '../../../lib/supabase.js';

export async function GET() {
  try {
    // Fetch all subscribers from the newsletter_subscribers table
    const { data, error } = await supabase.from('newsletter_subscribers').select('*');

    if (error) {
      console.error('Error fetching subscribers:', error);
      throw new Error('Failed to fetch subscribers.');
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in GET handler:', error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
