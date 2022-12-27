import Authentication from '@/components/Authentication/Authentication';
import { useIsAuth } from '@/hooks/useisAuth';
import { signout } from '@/service/supabase';
import { useUser } from '@/store/user';
import { Link as ReachLink } from 'react-router-dom';

const Index: React.FC = () => {
  useIsAuth();
  const user = useUser((state) => state.user);

  const logout = useUser((state) => state.logout);
  console.log(null === false);

  return (
    <Authentication>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <p>{user?.name} </p>
        <img src={user?.picture} alt="" />
        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            onClick={() => {
              logout();
              signout();
            }}
          >
            Logout
          </button>
          <ReachLink to="/login">Login</ReachLink>
        </div>
      </div>
    </Authentication>
  );
};

export default Index;
