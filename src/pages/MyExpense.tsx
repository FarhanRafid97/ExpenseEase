import Authentication from '@/components/Authentication/Authentication';
import ListExpense from '@/components/ListExpense';
import MyModal from '@/components/ModalForm';
import { useMyExpense } from '@/hooks/useGetMyExpense';
import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';

const MyExpense: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { myExpenses } = useMyExpense();

  return (
    <Authentication>
      <div>
        <div className="flex justify-between flex-col gap-4">
          <h1 className="gardient-title">My Expense </h1>
          <p className="font-light  text-justify text-sm">{`Welcome to the expense page! Here you can manage and track your expenses, making it easy to stay on top of your budget and financial goals. With this app, you can create new expenses, view and edit existing expenses, and see your expenses organized by category and time period`}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="ml-auto px-4 sticky lg:px-8 w-fit py-3 border-2  text-white rounded-xl text-xs md:text-sm font-semibold  border-blue bg-blues hover:opacity-70 flex items-center gap-1"
          >
            <IoMdAdd className="text-xl" /> <p> Add Expense </p>
          </button>
        </div>
        <ListExpense myExpenses={myExpenses} />
        {isOpen && <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </Authentication>
  );
};

export default MyExpense;
