// import { supabase } from '../../../../lib/supabase';

// export async function POST(req) {
//   try {
//     console.log('Request received');

//     // Parse FormData
//     const formData = await req.formData();
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const phone = formData.get('phone');
//     const address = formData.get('address');
//     const resume = formData.get('resume'); // File object

//     console.log('FormData:', { name, email, phone, address, resume });

//     // Validate FormData
//     if (!resume || !resume.name) {
//       throw new Error('Resume file is required');
//     }

//     // Upload the file to Supabase storage
//     const filePath = `${Date.now()}_${resume.name}`;
//     const { data: fileData, error: uploadError } = await supabase.storage
//       .from('resume')
//       .upload(filePath, resume.stream(), {
//         cacheControl: '3600',
//         upsert: false,
//         // duplex: 'half',
//       });

//     if (uploadError) {
//       console.error('File upload error:', uploadError);
//       throw new Error(uploadError.message);
//     }

//     console.log('File uploaded:', fileData);

//     // Insert form data into Supabase database
//     const { publicUrl } = supabase.storage.from('resumes').getPublicUrl(filePath);
//     const { data, error: insertError } = await supabase.from('career_form').insert([
//       { name, email, phone, address, resume_url: publicUrl },
//     ]);

//     if (insertError) {
//       console.error('Database insert error:', insertError);
//       throw new Error(insertError.message);
//     }

//     console.log('Database insert successful:', data);

//     return new Response(JSON.stringify({ success: true, data }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error in POST handler:', error.message);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500, headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }

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

