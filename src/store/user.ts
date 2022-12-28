import create from 'zustand';
import { UserMetadata } from '@supabase/supabase-js';

export const useUser = create<UserMetadata>((set) => ({
  user: null,
  login: (data: UserMetadata) =>
    set(() => ({
      user: data,
    })),
  logout: () => set(() => ({ user: false })),
}));
