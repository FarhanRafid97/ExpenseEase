import create from 'zustand';

import { MyExpenseType } from 'expense-app';

export interface MyExpenseHook {
  myExpense: MyExpenseType[];
  addExpenseState: (data: MyExpenseType) => void;
  orderExpense: (data: MyExpenseType[]) => void;
}
export const useExpenseState = create<MyExpenseHook>(
  (set): MyExpenseHook => ({
    myExpense: [],
    addExpenseState: (data: MyExpenseType) =>
      set((state) => ({
        myExpense: [...state.myExpense, data],
      })),
    orderExpense: (data) =>
      set(() => ({
        myExpense: data,
      })),
  }),
);
