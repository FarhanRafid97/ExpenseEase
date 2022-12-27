import { supabase } from '@/service/supabase';
import { useUser } from '@/store/user';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const useIsAuth = () => {
  const login = useUser((state) => state.login);

  useEffect(() => {
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
