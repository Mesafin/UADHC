import { supabase } from '../../../lib/supabase.js';

export async function GET() {
  try {
    // Fetch all records from the career_form table
    const { data, error } = await supabase.from('career_form').select('*');

    if (error) {
      console.error('Error fetching data:', error);
      throw new Error(error.message);
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
