import { useEffect, useState } from 'react';
import { getExpense } from '@/service/supabase';
import { useUser } from '@/store/user';
import { MyExpenseType } from 'expense-app';

export const useMyExpense = () => {
  const [myExpenses, setMyExpenses] = useState<MyExpenseType[] | []>([]);

  const user = useUser((state) => state.user);

  useEffect(() => {
    let ignore = false;

    if (!user || user === null) {
      return;
    }
    const getdata = async () => {
      const responseMyExpense = await getExpense(user?.id);
      if (!ignore) {
        setMyExpenses(responseMyExpense);
      }
    };
    getdata();

    return () => {
      ignore = true;
    };
  }, [user]);
  return { myExpenses };
};
