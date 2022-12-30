import React, { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isOpen, setIsOpen]);
};
