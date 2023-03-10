import create from 'zustand';

import { MyExpenseType } from 'expense-app';

export interface MyExpenseHook {
  myExpense: MyExpenseType[];
  addExpenseState: (data: MyExpenseType) => void;
  orderExpense: (data: MyExpenseType[]) => void;
  editExpense: (data: MyExpenseType) => void;
  paginationExpense: (data: MyExpenseType[]) => void;
}
export const useExpenseState = create<MyExpenseHook>(
  (set): MyExpenseHook => ({
    myExpense: [],
    addExpenseState: (data: MyExpenseType) =>
      set((state) => ({
        myExpense: [data, ...state.myExpense],
      })),
    orderExpense: (data) =>
      set(() => ({
        myExpense: data,
      })),
    paginationExpense: (data) =>
      set((state) => ({
        myExpense: [...state.myExpense, ...data],
      })),
    editExpense: (data: MyExpenseType) =>
      set((state) => {
        const indexDataExpense = state.myExpense.findIndex((d) => d.id === data.id);
        const dataState = state.myExpense;
        dataState[indexDataExpense] = data;
        return { myExpense: dataState };
      }),
  }),
);
