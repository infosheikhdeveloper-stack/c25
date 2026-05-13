// =========================
// FILE: supabase.js
// =========================

// SUPABASE URL
const SUPABASE_URL =
"https://sogyxzqvbquwrqlqpdaj.supabase.co";

// SUPABASE ANON KEY
const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZ3l4enF2YnF1d3JxbHFwZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1OTI0MjcsImV4cCI6MjA5NDE2ODQyN30.kubX_vDW8CiHJR7HLXs7-5RpeNI6DBlJLgt4uEhBEFE";


// CREATE CLIENT
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);