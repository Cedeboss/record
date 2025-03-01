import { createClient } from "@supabase/supabase-js";

// const supabaseUrl: any = process.env.REACT_APP_END_POINT;
// const supabaseAnonKey: any = process.env.REACT_APP_APIKEY_PUBLIC;
const supabaseUrl: string = "https://tgjdmjlyphcayawspmdf.supabase.co";
const supabaseAnonKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnamRtamx5cGhjYXlhd3NwbWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExODAxMjksImV4cCI6MjAyNjc1NjEyOX0.8btuvj5gloBfPMfey_g7XClRCOVM6AthCD--WMON6lk";

/**
 * Create a new Supabase Client.
 */
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
