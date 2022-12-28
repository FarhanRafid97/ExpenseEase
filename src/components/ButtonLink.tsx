import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;

  label: string;
  outlined: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ label, to, outlined }) => {
  if (outlined) {
    return (
      <Link to={to}>
        <p
          className={`px-4 lg:px-8  py-3 w-fit border-2 border-purple hover:bg-purple hover:text-white hover:opacity-70 rounded-xl text-xs md:text-sm font-semibold text-purple `}
        >
          {label}
        </p>
      </Link>
    );
  }
  return (
    <Link to={to}>
      <p
        className={`px-4 lg:px-8 w-fit py-3 border-2  text-white rounded-xl text-xs md:text-sm font-semibold  border-purple bg-purple hover:opacity-70  `}
      >
        {label}
      </p>
    </Link>
  );
};

export default ButtonLink;
