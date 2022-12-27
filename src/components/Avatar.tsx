import { useState } from 'react';
import { signout } from '@/service/supabase';
import { useUser } from '@/store/user';
interface AvatarProps {
  avatar: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
  const logout = useUser((state) => state.logout);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <img className="w-[44px] h-[44px] rounded-[14px]" src={avatar} />
      {showMenu && (
        <>
          <div className="absolute w-full  h-[10px] bottom-0-0 z-[99]" />
          <div className="absolute w-[200px] flex   flex-col items-end bg-white shadow-md border-[0.5px] rounded-md  top-[53px] right-0 -0 z-[99] p-2  ">
            <p
              className="border-b-2 w-full text-end py-2 px-4"
              onClick={() => {
                signout();
                logout();
              }}
            >
              Logout
            </p>
            <p className="border-b-2 w-full text-end py-2 px-4">Logout</p>
            <p className="border-b-2 w-full text-end py-2 px-4">Logout</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Avatar;
