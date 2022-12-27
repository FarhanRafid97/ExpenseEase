import { createClient } from '@supabase/supabase-js';
import { SignupUserPayload } from 'expense-app';
import toast from 'react-hot-toast';

export const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY,
);

export const SignInWithGoogle = async () => {
  const data = await supabase.auth.signInWithOAuth({ provider: 'google' });
  return data;
};

export async function signout() {
  const { error } = await supabase.auth.signOut();
}
