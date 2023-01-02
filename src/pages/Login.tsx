import Input from '@/components/Input';
import { FcGoogle } from 'react-icons/fc';
import { SignInWithGoogle } from '@/service/supabase';
import { useUser } from '@/store/user';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai';

const Login: React.FC = () => {
  const [show, setShow] = useState(false);
  const user = useUser((state) => state.user);
  console.log(user);

  return (
    <div className="w-11/12  md:w-9/12 lg:w-8/12 xl:w-7/12 flex m-auto flex-col gap-4">
      <h1 className="gardient-title  font-bold text-3xl md:text-[36px] text-center">Login Page</h1>
      <form action="" className="flex flex-col gap-4">
        <Input placeholder="Username" icon={<AiOutlineUser className="icon-input-style" />} />
        <Input
          placeholder="Password"
          type={show ? 'text' : 'password'}
          icon={
            show ? (
              <AiOutlineEye
                onClick={() => setShow(false)}
                className="cursor-pointer z-[99] icon-input-style"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setShow(true)}
                className="cursor-pointer z-[99] icon-input-style"
              />
            )
          }
        />
        <button
          type="button"
          className="px-8 py-3 w-full border-2 border-purple hover:bg-purple hover:text-white hover:opacity-70 rounded-xl text-xs md:text-sm font-semibold text-purple "
        >
          Sign In
        </button>
        <button
          type="button"
          className="px-8 w-full py-3 border-2  text-white rounded-xl text-xs md:text-sm font-semibold  border-black bg-black hover:opacity-70  "
        >
          <div
            className="flex cursor-pointer h-fit w-full justify-center items-center gap-2"
            onClick={() => SignInWithGoogle()}
          >
            <FcGoogle /> <p> Sign In With Google</p>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Login;
