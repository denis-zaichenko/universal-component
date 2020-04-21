import React, { createContext, useContext, ReactNode } from 'react';

import { ISelectState } from './select.state';

interface ISelectContext extends ISelectState {
  selectItem: TSelectItem[] | TSelectItem;

  onSelect: (data: TSelectItem[] | TSelectItem) => void;
}

const SelectContext = createContext<ISelectContext>({
  isOpen: false,
  selectItem: { value: '' },
  onSelect: () => {
    return;
  },
  setOpen: () => {
    return;
  },
});

interface ISelectProvider extends ISelectContext {
  children: ReactNode;
}

export const SelectProvider = (props: ISelectProvider) => {
  const { children, ...provider } = props;

  return (
    <SelectContext.Provider value={{ ...provider }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = (): ISelectContext => useContext(SelectContext);
