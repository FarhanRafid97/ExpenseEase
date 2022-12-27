import { useUser } from '@/store/user';
import { Navigate } from 'react-router';
import Loading from '../Loading';
interface AuthenticationProps {
  children: React.ReactNode;
}

const Authentication: React.FC<AuthenticationProps> = ({ children }) => {
  const user = useUser((state) => state.user);

  if (user === null) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default Authentication;
