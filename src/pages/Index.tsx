interface IndexProps {}
import { Link as ReachLink } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { signout, supabase } from '@/service/supabase';
import { User, UserMetadata } from '@supabase/supabase-js';

type TypeUserMetadata = { picture: string };

const Index: React.FC<IndexProps> = ({}) => {
  const [user, setUser] = useState<UserMetadata>({});

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user } = data;
      console.log(user?.user_metadata);
      if (user?.user_metadata) {
        setUser(user.user_metadata);
      }
    };
    getUser();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <p>{user.name} </p>
      <img src={user.picture} alt="" />
      <div style={{ display: 'flex', gap: '15px' }}>
        <button onClick={() => signout()}>Logout</button>
        <ReachLink to="/login">Login</ReachLink>
      </div>
    </div>
  );
};

export default Index;
