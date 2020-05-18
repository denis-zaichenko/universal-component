import React, { createContext, useState, useContext, FC } from 'react';

interface IAccordionContext {
  switchOpen: () => void;
  isOpen: boolean;
}

const AccordionContext = createContext<IAccordionContext>({
  isOpen: false,
  switchOpen: () => {
    return;
  },
});

export const AccordionProvide: FC = (props) => {
  const { children } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const switchOpen = () => setOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, switchOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => useContext(AccordionContext);
