import { SignInWithGoogle } from '@/service/supabase';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <div>
      <button onClick={() => SignInWithGoogle()}>Login google</button>
    </div>
  );
};

export default Login;
