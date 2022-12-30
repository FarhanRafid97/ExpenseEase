import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY,
);

export const SignInWithGoogle = async () => {
  const data = await supabase.auth.signInWithOAuth({ provider: 'google' });
  return data;
};

export async function signout() {
  return await supabase.auth.signOut();
}

export const getExpense = async (id: string) => {
  try {
    const response = await supabase
      .from('expense')
      .insert({ expense_name: 'test-farhan', amount: 500000, user_id: id, currency: 'IDR' })
      .returns();

    if (response.error) {
      console.log(response.error);
    }
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);

    return null;
  }
};
