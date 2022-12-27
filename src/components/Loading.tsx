import { ImSpinner10 } from 'react-icons/im';

const Loading: React.FC = () => {
  return (
    <div className="text-white">
      <ImSpinner10 className="animate-spin text-[60px]" />
    </div>
  );
};

export default Loading;
