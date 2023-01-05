import { updateExpense } from '@/service/supabase';
import { useExpenseState } from '@/store/expense';
import { useUser } from '@/store/user';
import { snakeCase } from '@/utils/snakeCase';
import { convertTimestamp } from '@/utils/timestamp';
import { MyExpenseType } from 'expense-app';
import { useState } from 'react';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { ImSpinner10 } from 'react-icons/im';
import { FcCancel } from 'react-icons/fc';
import { BsTrash } from 'react-icons/bs';
interface ListExpenseProps {
  myExpenses: MyExpenseType[];
}

const ListExpense: React.FC<ListExpenseProps> = ({ myExpenses }) => {
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const user = useUser((state) => state.user);
  const [loading, setLoading] = useState(false);
  const { editExpense } = useExpenseState();

  return (
    <div className="flex flex-col gap-6 mt-4 ">
      {myExpenses?.map((expense) => (
        <li
          key={expense.id}
          className="flex w-full justify-between items-center bg-white p-4 rounded-xl shadow-md border border-[#dbdbdb]"
        >
          <div>
            <div className="flex gap-2">
              <p>{expense.id} </p>
              {editId !== expense.id ? (
                <p>{snakeCase(expense.expense_name)} </p>
              ) : (
                <input
                  type="text"
                  className="border-b-2 focus:outline-none w-2/4"
                  onChange={(e) => setEditName(e.target.value)}
                  value={snakeCase(editName)}
                />
              )}
              {editId !== expense.id ? (
                <button
                  onClick={() => {
                    setEditName(expense.expense_name);
                    setEditId(expense.id as string);
                  }}
                >
                  <AiOutlineEdit />
                </button>
              ) : loading ? (
                <ImSpinner10 className="animate-spin text-xl " />
              ) : (
                <div className="text-lg flex gap-2">
                  <button
                    onClick={async () => {
                      setLoading(true);
                      const isUpdate = await updateExpense(
                        { ...expense, expense_name: editName },
                        user.id,
                      );
                      if (isUpdate) {
                        editExpense({ ...expense, expense_name: editName });
                        setEditId('');
                        setEditName('');
                      }
                      setLoading(false);
                    }}
                    className="text-green-500"
                  >
                    <AiOutlineCheck />
                  </button>
                  <button
                    onClick={() => {
                      setEditName('');
                      setEditId('');
                    }}
                    className="text-red-500"
                  >
                    <FcCancel />
                  </button>
                </div>
              )}
            </div>
            <p className="text-sm">{convertTimestamp(expense.created_at)}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>{expense.amount.toLocaleString()}</p>
            <div className="p-2 bg-myred text-white text-xl rounded-md hover:cursor-pointer hover:opacity-70">
              <BsTrash />
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ListExpense;
