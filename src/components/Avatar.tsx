import { useState } from 'react';
import { signout, supabase } from '@/service/supabase';
import { useUser } from '@/store/user';

interface AvatarProps {
  avatar: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
  const logout = useUser((state) => state.logout);
  const [showMenu, setShowMenu] = useState(false);

  const singOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error === null) {
        logout();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="relative cursor-pointer "
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <img loading="lazy" className="w-[44px] h-[44px] rounded-[14px]" src={avatar} />
      {showMenu && (
        <>
          <div className="absolute w-full  h-[10px] bottom-0-0  " />
          <div className="absolute w-[200px] flex flex-col items-end bg-white  shadow-md border-[0.5px] rounded-md  top-[53px] right-0  p-2  ">
            <p className="hover:bg-gray-200 rounded-md w-full text-end py-2 px-4" onClick={singOut}>
              Logout
            </p>

            <p
              className="hover:bg-gray-200 rounded-md w-full text-end py-2 px-4"
              onClick={() => {
                const data = signout();
                console.log(data);
              }}
            >
              Logout
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Avatar;
