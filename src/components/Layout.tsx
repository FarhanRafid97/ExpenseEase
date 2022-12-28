import { motion, Variants } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export const variants: Variants = {
  hidden: { opacity: 0, y: 25 },
  enter: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.3 } },
  exit: { opacity: 0, y: 0, x: 25, transition: { ease: 'easeIn', duration: 0.25 } },
};

const Layout: React.FunctionComponent = () => {
  return (
    <div className="w-screen ">
      <div className="w-full sticky top-0 bg-white z-[999] border-b-[0.5px] border-[#dbdbdb] shadow-sm">
        <Navbar />
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className="w-11/12  md:w-9/12 lg:w-8/12 xl:w-7/12 py-4 min-h-[85vh]  m-auto"
      >
        <Outlet />
      </motion.div>
      <div className="w-full border-t-[0.5px]  border-[#dbdbdb]  shadow-t-sm">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
