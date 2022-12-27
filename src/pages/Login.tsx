import { SignInWithGoogle } from '@/service/supabase';
import { useUser } from '@/store/user';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const user = useUser((state) => state.user);
  console.log(user);
  return (
    <div>
      <button onClick={() => SignInWithGoogle()}>Login google</button>
    </div>
  );
};

export default Login;
