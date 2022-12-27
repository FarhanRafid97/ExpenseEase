import Footer from './Footer';
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
      <div className="w-11/12  md:w-9/12 lg:w-8/12 xl:w-7/12 py-4 min-h-[85vh]  m-auto">
        {children}
      </div>
      <div className="w-full border-t-[0.5px] border-[#dbdbdb]  shadow-t-sm">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
