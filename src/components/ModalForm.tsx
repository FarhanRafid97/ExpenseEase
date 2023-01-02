import { snakeCase } from '@/hooks/snakeCase';
import { addExpense } from '@/service/supabase';
import { useUser } from '@/store/user';
import { angkaTerbilang } from '@/utils/spellingNumber';
import { Dialog, Transition } from '@headlessui/react';
import { InputExpenseData } from 'expense-app';
import { Fragment, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiExpense, GiMoneyStack } from 'react-icons/gi';
import Button from './Button/Button';
import Input from './Input';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import MyListbox from './MyListBox';

interface MyModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const currency = ['IDR', '$Dolar'];

const MyModal: React.FC<MyModal> = ({ isOpen, setIsOpen }) => {
  const [expenseData, setExpenseData] = useState<InputExpenseData>({
    expense_name: '',
    amount: 0,
    currency: '',
  });
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(currency[0]);

  function closeModal() {
    setIsOpen(false);
  }
  const user = useUser((state) => state.user);
  console.log(user);

  useEffect(() => {
    setExpenseData({ ...expenseData, currency: selected });
  }, [selected]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await addExpense({ ...expenseData, id: user?.id });
      console.log(data);
      resetState();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setSelected(currency[0]);
    setExpenseData({
      amount: 0,
      expense_name: '',
      currency: currency[0],
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 flex text-gray-900"
                  >
                    <div
                      className="p-2 bg-myred rounded-xl w-fit hover:opacity-70 text-white ml-auto cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <AiOutlineClose />
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={onSubmit} action="">
                      <div className="flex flex-col gap-6">
                        <label>
                          <span className="mb-4">Expense Name</span>
                          <Input
                            value={expenseData.expense_name}
                            onChange={(e) =>
                              setExpenseData({ ...expenseData, expense_name: e.target.value })
                            }
                            placeholder="June Coffe Expense"
                            icon={<GiExpense />}
                            required
                          />
                        </label>
                        <div>
                          <p>Currency</p>
                          <MyListbox
                            selected={selected}
                            setSelected={setSelected}
                            currency={currency}
                          />
                        </div>
                        <label className="flex flex-col gal-0">
                          <span> Amount</span>
                          <Input
                            type="text"
                            required
                            placeholder="0"
                            value={Number(expenseData.amount).toLocaleString()}
                            onChange={(e) => {
                              const noComma = e.target.value.split('.').join('');
                              if (isNaN(Number(noComma))) {
                                return;
                              }
                              if (Number(noComma) > 1000000000) {
                                setExpenseData({ ...expenseData, amount: 1000000000 });
                                return;
                              }

                              setExpenseData({ ...expenseData, amount: Number(noComma) });
                            }}
                            icon={<GiMoneyStack />}
                          />
                          <p className="ml-1 text-sm">
                            {' '}
                            {snakeCase(angkaTerbilang(expenseData.amount))}
                          </p>
                        </label>
                        <div className="flex gap-2 justify-end">
                          <Button
                            type="button"
                            disabled={loading}
                            label="Reset"
                            onClick={() => {
                              resetState();
                            }}
                            typeButton="outlined"
                          />
                          <Button
                            type="submit"
                            disabled={loading}
                            label={
                              loading ? <CgSpinnerTwoAlt className="animate-spin" /> : 'Submit'
                            }
                            typeButton="normal"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyModal;
