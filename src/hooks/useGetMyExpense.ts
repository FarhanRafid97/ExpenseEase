import { useEffect, useState } from 'react';
import { getExpense } from '@/service/supabase';
import { useUser } from '@/store/user';

import { useExpenseState } from '@/store/expense';

export const useMyExpense = () => {
  const myExpenses = useExpenseState((state) => state.myExpense);
  const paginationExpense = useExpenseState((state) => state.paginationExpense);
  const addExpenseState = useExpenseState((state) => state.addExpenseState);
  const [from, setForm] = useState(0);
  const [to, setTo] = useState(4);
  const [loading, setLoading] = useState(false);
  const user = useUser((state) => state.user);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    let ignore = false;

    if (!isMore) {
      return;
    }

    if (!user || user === null) {
      return;
    }
    const getdata = async () => {
      setLoading(true);
      try {
        const responseMyExpense = await getExpense(user?.id, from, to);

        if (
          responseMyExpense[responseMyExpense.length - 1]?.id ===
          myExpenses[myExpenses.length - 1]?.id
        ) {
          return false;
        }
        if (!ignore) {
          paginationExpense(responseMyExpense);
        }
        if (responseMyExpense.length < 5) {
          console.log('from limit', responseMyExpense);
          setIsMore(false);
          return false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(false);
    getdata();

    return () => {
      ignore = true;
    };
  }, [user, from, to, isMore]);
  return { myExpenses, paginationExpense, isMore, addExpenseState, setForm, setTo, loading };
};
