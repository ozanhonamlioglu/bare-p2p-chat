import { useState, useCallback } from 'react';

const useDisclose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclose;
