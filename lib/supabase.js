import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wraavikaiypemwfowcoz.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyYWF2aWthaXlwZW13Zm93Y296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NTQ0NzQsImV4cCI6MjA0ODQzMDQ3NH0.nL2u4OHmyhyiUOQm4UmJUTWIuDT_r1kmcSpm7iuWeDQ'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
