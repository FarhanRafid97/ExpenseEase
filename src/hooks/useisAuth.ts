import { supabase } from '@/service/supabase';
import { useUser } from '@/store/user';
import { useEffect } from 'react';

export const useIsAuth = () => {
  const login = useUser((state) => state.login);

  useEffect(() => {
    let ignore = false;
    const getUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        const { user } = data;
        if (ignore) {
          return;
        }
        error !== null ? login(false) : login({ ...user?.user_metadata, id: user?.id });
      } catch (error) {
        login(false);
      }
    };
    getUser();
    return () => {
      ignore = true;
    };
  }, []);
};
