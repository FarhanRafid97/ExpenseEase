import { Children } from 'react';
import Navbar from './Navbar';
interface LayoutInterface {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <div className="w-screen ">
      <div className="w-full border-b-[0.5px] border-[#dbdbdb] shadow-sm">
        <Navbar />
      </div>
      <div className="w-7/12 py-4  m-auto">{children}</div>
    </div>
  );
};

export default Layout;
