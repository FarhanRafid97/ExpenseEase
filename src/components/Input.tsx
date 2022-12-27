interface InputProps {
  placeholder?: string;
  icon: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ placeholder, icon }) => {
  return (
    <div className="relative mb-4">
      <input
        className="focus:ring-1  focus:outline-none w-full text-sm bg-white dark:bg-dark-500 border-transparent-100 text-black placeholder-gray-500 border rounded-xl py-4 pr-10 pl-4"
        type="text"
        aria-label={placeholder}
        placeholder={placeholder}
      />
      {icon}
    </div>
  );
};

export default Input;
