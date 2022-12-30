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
    amount: string;
  };
}
