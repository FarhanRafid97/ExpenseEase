import { supabase } from '@/service/supabase';
import { useUser } from '@/store/user';
import { useEffect } from 'react';

export const useIsAuth = () => {
  const login = useUser((state) => state.login);
  const user = useUser((state) => state.user);

  useEffect(() => {
    if (user) {
      return;
    }
    const getUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        const { user } = data;
        if (error !== null) {
          login(false);
          return;
        }
        if (user?.user_metadata) {
          login({ ...user.user_metadata });
        }
      } catch (error) {
        console.log('fail');
        login(false);
      }
    };
    getUser();
  }, []);
};
