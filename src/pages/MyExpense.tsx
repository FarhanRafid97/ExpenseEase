import Authentication from '@/components/Authentication/Authentication';

import ListExpense from '@/components/ListExpense';
import MyModal from '@/components/ModalForm';
import { useMyExpense } from '@/hooks/useGetMyExpense';
import { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const MyExpense: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { myExpenses, setForm, setTo, loading, isMore } = useMyExpense();

  useEffect(() => {
    console.log(myExpenses);
  }, [myExpenses]);
  return (
    <Authentication>
      <div>
        <div className="flex justify-center w-full  flex-col gap-4">
          <h1 className="gardient-title">My Expense </h1>
          <p className="font-light  text-justify text-sm">{`Welcome to the expense page! Here you can manage and track your expenses, making it easy to stay on top of your budget and financial goals. With this app, you can create new expenses, view and edit existing expenses, and see your expenses organized by category and time period`}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="ml-auto px-4 sticky lg:px-8 w-fit py-3 border-2  text-white rounded-xl text-xs md:text-sm font-semibold  border-blue bg-blues hover:opacity-70 flex items-center gap-1"
          >
            <IoMdAdd className="text-xl" /> <p> Add Expense </p>
          </button>
          <ListExpense myExpenses={myExpenses} />
          {isMore && (
            <button
              disabled={loading}
              onClick={() => {
                setForm((prev) => prev + 5);
                setTo((prev) => prev + 5);
              }}
              className="px-4 lg:px-20 w-fit py-3 border-2  text-white rounded-xl text-xs md:text-sm font-semibold  border-blues bg-blues hover:opacity-70 m-auto"
            >
              {loading ? <CgSpinnerTwoAlt className="animate-spin text-xl" /> : 'Load More'}
            </button>
          )}
        </div>
        {isOpen && <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </Authentication>
  );
};

export default MyExpense;
