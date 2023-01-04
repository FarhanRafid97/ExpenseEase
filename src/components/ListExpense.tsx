import { snakeCase } from '@/utils/snakeCase';
import { convertTimestamp } from '@/utils/timestamp';
import { MyExpenseType } from 'expense-app';
import { useState } from 'react';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { FcCancel } from 'react-icons/fc';
interface ListExpenseProps {
  myExpenses: MyExpenseType[];
}

const ListExpense: React.FC<ListExpenseProps> = ({ myExpenses }) => {
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  return (
    <div className="flex flex-col gap-4 mt-4 ">
      {myExpenses?.map((expense) => (
        <li
          key={expense.id}
          className="flex w-full justify-between items-center bg-white p-4 rounded-xl shadow-md border border-[#dbdbdb]"
        >
          <div>
            <div className="flex gap-2">
              <p>{expense.id}</p>
              {editId !== expense.id ? (
                <p>{snakeCase(expense.expense_name)} </p>
              ) : (
                <input
                  type="text"
                  className="border-b-2 focus:outline-none"
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
              ) : (
                <div className="text-lg flex gap-2">
                  <button
                    onClick={() => {
                      setEditName(expense.expense_name);
                      setEditId(expense.id as string);
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
          <div>
            <p>{expense.amount.toLocaleString()}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ListExpense;
