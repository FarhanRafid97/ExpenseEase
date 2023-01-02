import ButtonLink from './Button/ButtonLink';
import { NavLink } from 'react-router-dom';
import { useUser } from '@/store/user';
import Avatar from './Avatar';

const Navbar: React.FC = () => {
  const user = useUser((state) => state.user);

  const SideMenu_jsx = () => {
    if (user === null) {
      return <p>Loading</p>;
    }
    if (user === null || !user) {
      return (
        <div className="flex gap-2">
          <ButtonLink label="Sign In" outlined={true} to="/login" />
          <ButtonLink label="Sign Up" outlined={false} to="/login" />
        </div>
      );
    }
    return (
      <div className="flex gap-4 items-center">
        <NavLink
          to="/my-expense"
          className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-black')}
        >
          <p className=" font-medium">My Plan</p>
        </NavLink>
        <p className="text-black font-medium">Profile</p>
        <Avatar avatar={user?.avatar_url} />
      </div>
    );
  };
  return (
    <div className="w-11/12  md:w-9/12 lg:w-8/12 xl:w-7/12 m-auto  py-4 flex justify-between items-center">
      <NavLink to="/">
        <h1 className="text-xl md:text-3xl font-bold gardient-title  ">ExpenseEase</h1>
      </NavLink>
      {SideMenu_jsx()}
    </div>
  );
};

export default Navbar;
