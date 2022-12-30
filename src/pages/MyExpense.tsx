import MyModal from '@/components/ModalForm';

import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';

const MyExpense: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="gardient-title">My Expense </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="px-4 sticky lg:px-8 w-fit py-3 border-2  text-white rounded-xl text-xs md:text-sm font-semibold  border-blue bg-blues hover:opacity-70 flex items-center gap-1"
        >
          <IoMdAdd className="text-xl" /> <p> Add Expense </p>
        </button>
      </div>
      {isOpen && <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default MyExpense;
