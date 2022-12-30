import { Listbox, Transition } from '@headlessui/react';
import { RiCheckLine } from 'react-icons/ri';

interface MyListBoxType {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  currency: string[];
}
const MyListbox: React.FC<MyListBoxType> = ({ selected, setSelected, currency }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative  z-[10]">
        <Listbox.Button className="focus:ring-1  focus:outline-none w-full text-sm bg-white dark:bg-dark-500 border-transparent-100 text-black placeholder-gray-500 border rounded-xl py-4 pr-10 pl-4 text-left">
          <span className="block truncate">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {currency.map((cur, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-blue-300  text-white' : 'text-gray-900'
                  }`
                }
                value={cur}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {cur}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blues">
                        {' '}
                        <RiCheckLine className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default MyListbox;
