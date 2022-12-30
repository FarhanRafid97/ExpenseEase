import { useOutsideClick } from '@/hooks/useOutsideClick';
import { motion } from 'framer-motion';
import { GiExpense, GiMoneyStack } from 'react-icons/gi';

import React, { useEffect, useRef, useState } from 'react';
import Input from './Input';
import { angkaTerbilang } from '@/utils/spellingNumber';
import { snakeCase } from '@/hooks/snakeCase';
import Button from './Button/Button';
import { toast } from 'react-toastify';
import { succesToast } from '@/utils/toastOption';

interface ModalInterface {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalInterface> = ({ isOpen, setIsOpen }) => {
  const wrapperRef = useRef(null);
  const [expenseData, setExpenseData] = useState({ expense_name: '', amount: 0 });

  useOutsideClick(wrapperRef, isOpen, setIsOpen);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const close = (e: any) => {
      if (!isOpen) {
        return;
      }
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isOpen, setIsOpen]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Expense Plan Created', succesToast);
  };

  return (
    <div className="relative z-50">
      <div style={{ backgroundColor: 'rgb(0,0,0, 0.75)' }} className={`fixed inset-0 flex `}>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0, transition: { type: 'spring', bounce: 0.4, duration: 0.5 } }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="w-[550px] py-6 m-auto flex flex-col gap-6 bg-white shadow-border  rounded-md p-6   overflow-auto  "
          ref={wrapperRef}
        >
          <div>
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
                  />
                </label>

                <label className="flex flex-col gal-0">
                  <span> Amount</span>
                  <Input
                    type="text"
                    placeholder="0"
                    value={Number(expenseData.amount).toLocaleString()}
                    onChange={(e) => {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const noComma: any = e.target.value.split('.').join('');
                      if (isNaN(noComma + 1)) {
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
                  <p className="ml-1 text-sm"> {snakeCase(angkaTerbilang(expenseData.amount))}</p>
                </label>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    onClick={() => setExpenseData({ amount: 0, expense_name: '' })}
                    placeholder="Submit"
                    typeButton="outlined"
                  />
                  <Button type="submit" placeholder="Submit" typeButton="normal" />
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
