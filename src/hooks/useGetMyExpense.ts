import { useEffect } from 'react';
import { getExpense } from '@/service/supabase';
import { useUser } from '@/store/user';

import { useExpenseState } from '@/store/expense';

export const useMyExpense = () => {
  const myExpenses = useExpenseState((state) => state.myExpense);
  const orderExpense = useExpenseState((state) => state.orderExpense);
  const addExpenseState = useExpenseState((state) => state.addExpenseState);

  const user = useUser((state) => state.user);

  useEffect(() => {
    let ignore = false;

    if (!user || user === null) {
      return;
    }
    const getdata = async () => {
      const responseMyExpense = await getExpense(user?.id);
      if (!ignore) {
        orderExpense(responseMyExpense);
      }
    };
    getdata();

    return () => {
      ignore = true;
    };
  }, [user]);
  return { myExpenses, orderExpense, addExpenseState };
};
