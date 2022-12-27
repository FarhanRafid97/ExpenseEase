import { ImSpinner10 } from 'react-icons/im';
import Layout from './Layout';

const Loading: React.FC = () => {
  return (
    <Layout>
      <div className="text-purple w-full h-[70vh] flex justify-center items-center ">
        <ImSpinner10 className="animate-spin text-[60px]" />
      </div>
    </Layout>
  );
};

export default Loading;
