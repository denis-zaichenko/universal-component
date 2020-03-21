import { createContext, useState, useContext } from 'react';

interface ITabContextData {
  indexTab: number;
}

interface ITabContext extends ITabContextData {
  setIndexTab: (index: number) => void;
  generateTabIndex: () => number;
  generatePanelIndex: () => number;
}

export const TabContext = createContext<ITabContext>({
  indexTab: 0,
  setIndexTab: () => {
    return;
  },
  generatePanelIndex: () => -1,
  generateTabIndex: () => -1,
});

const initialState: ITabContextData = {
  indexTab: 0,
};

export const useTabContextState = (): ITabContext => {
  const [state, setState] = useState(initialState);

  let tabIndex = 0;
  let panelIndex = 0;

  const setIndexTab = (indexTab: number) => setState({ indexTab });

  const generateTabIndex = () => tabIndex++;
  const generatePanelIndex = () => panelIndex++;

  return {
    ...state,
    setIndexTab,
    generatePanelIndex,
    generateTabIndex,
  };
};

export const useTabContext = (): ITabContext => useContext(TabContext);
