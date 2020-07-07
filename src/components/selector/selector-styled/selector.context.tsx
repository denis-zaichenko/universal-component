import React, { createContext, useContext, useState, FC } from 'react';

export interface ISelectorContextParameters {
  selectValue: IItem;
  setValue(value: IItem): void;
}

interface ISelectorContextProps extends ISelectorContextParameters {
  isOpen: boolean;
  setOpen(isOpen: boolean): () => void;
}

const SelectorContext = createContext<ISelectorContextProps>({
  setValue: () => {
    return;
  },
  selectValue: { value: '' },
  isOpen: false,
  setOpen: () => () => {
    return;
  },
});

export const useSelectorContext = () => useContext(SelectorContext);

export const SelectorProvider: FC<ISelectorContextParameters> = (props) => {
  const { children, ...parameters } = props;
  SelectorContext.displayName = 'Selector';

  const [isOpen, setOpen] = useState(false);
  const onSetOpen = (isNewOpen: boolean) => () => setOpen(isNewOpen);

  return (
    <SelectorContext.Provider
      value={{ ...parameters, isOpen, setOpen: onSetOpen }}
    >
      {children}
    </SelectorContext.Provider>
  );
};
