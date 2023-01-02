import { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton: 'outlined' | 'normal';
  label: string | React.ReactNode;
};

const Button: React.FC<ButtonType> = ({ type, label, typeButton, ...props }) => {
  if (typeButton === 'outlined') {
    return (
      <button
        type={type}
        {...props}
        className="px-4 lg:px-8  py-3 w-fit border-2 border-blues hover:bg-blues hover:text-white hover:opacity-70 rounded-xl text-xs md:text-sm font-semibold text-blues "
      >
        {label}
      </button>
    );
  }
  return (
    <button
      type={type}
      {...props}
      className="px-4 lg:px-8 w-fit py-3 border-2  text-white rounded-xl text-xs md:text-sm font-semibold  border-blues bg-blues hover:opacity-70"
    >
      {label}
    </button>
  );
};

export default Button;
