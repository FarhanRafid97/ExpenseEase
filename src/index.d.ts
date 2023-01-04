declare module 'expense-app' {
  export type Theme = 'light' | 'dark';

  export type SignupUserPayload = {
    username: string;
    email: string;
    password: string;
  };

  export type SigninUserPayload = {
    email: string;
    password: string;
  };

  export type InputExpenseData = {
    expense_name: string;
    currency: string;
    id?: string;
    amount: number;
  };
  export interface MyExpenseType extends InputExpenseData {
    user_ud?: string;
    created_at: string;
  }
}
