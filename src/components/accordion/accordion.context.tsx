import React, { createContext, useState, ReactNode, useContext } from 'react';

interface IAccordionContext {
  switchOpen: () => void;
  isOpen: boolean;
}

interface IAccordionProvider {
  children?: ReactNode;
}

const AccordionContext = createContext<IAccordionContext>({
  isOpen: false,
  switchOpen: () => {
    return;
  },
});

export const AccordionProvide = (props: IAccordionProvider) => {
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
