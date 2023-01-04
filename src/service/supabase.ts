import { succesToast } from '@/utils/toastOption';
import { createClient } from '@supabase/supabase-js';
import { InputExpenseData, MyExpenseType } from 'expense-app';
import { toast } from 'react-toastify';

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

export const getExpense = async (id: string): Promise<MyExpenseType[]> => {
  if (!id) {
    return [];
  }
  try {
    const response = await supabase.from('expense').select('*').eq('user_id', id);

    if (response.error) {
      return [];
    }

    return response.data as MyExpenseType[];
  } catch (e) {
    return [];
  }
};
export const addExpense = async (payload: InputExpenseData): Promise<MyExpenseType | null> => {
  const { amount, currency, expense_name, id } = payload;
  try {
    const response = await supabase
      .from('expense')
      .insert({ expense_name, amount, user_id: id, currency })
      .select();

    if (response.error) {
      toast.error('Expense Plan Created', succesToast);
      return null;
    }
    toast.success('Expense Plan Created', succesToast);

    return response.data[0] as MyExpenseType;
  } catch (e) {
    return null;
  }
};
