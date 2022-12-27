import ButtonLink from './ButtonLink';
const Navbar: React.FC = () => {
  return (
    <div className="w-7/12 sticky top-0 m-auto  py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold gardient-title  ">ExpenseEase</h1>
      <div className="flex gap-2">
        <ButtonLink label="Sign In" outlined={true} to="/login" />
        <ButtonLink label="Sign Up" outlined={false} to="/login" />
      </div>
    </div>
  );
};

export default Navbar;
