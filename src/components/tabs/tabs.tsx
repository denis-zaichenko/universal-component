import React, { ReactNode } from 'react';

import { Tab, Panel } from './components';

import { TabContext, useTabContextState } from './tabs-context';

import { Theme } from 'themes';

interface ITabsProps {
  children: ReactNode;
  className?: string;
}

export const Tabs = (props: ITabsProps) => {
  const { children, className } = props;
  const state = useTabContextState();
  return (
    <Theme.Flexbox
      isColumn
      itemGap="16px"
      alignItem="space-between"
      className={className}
    >
      <TabContext.Provider value={{ ...state }}>{children}</TabContext.Provider>
    </Theme.Flexbox>
  );
};

Tabs.Tab = Tab;
Tabs.TabPanel = Panel;
