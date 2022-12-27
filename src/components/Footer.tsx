import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <div className="w-7/12 sticky top-0 m-auto py-4 flex justify-center items-center">
      <div className="flex gap-4 text-[30px]">
        <a href="https://github.com/FarhanRafid97" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/farhan-rafid-syauqi-268a9820b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
