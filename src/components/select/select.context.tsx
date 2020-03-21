import React, { createContext, useContext, ReactNode } from 'react';

import { ISelectItem } from './select.typings';
import { ISelectState } from './select.state';

interface ISelectContext extends ISelectState {
  selectItem: ISelectItem;

  onSelect: (data: ISelectItem) => void;
}

const SelectContext = createContext<ISelectContext>({
  isOpen: false,
  onSelect: () => {
    return;
  },
  selectItem: { value: '' },
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
