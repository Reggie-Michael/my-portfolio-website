import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: string;
}

export interface Review {
  id?: string;
  name: string;
  email: string;
  rating: number;
  project: string;
  review: string;
  created_at?: string;
  status?: string;
  is_approved?: boolean;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  created_at?: string;
  is_active?: boolean;
}
