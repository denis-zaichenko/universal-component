import React, { useState } from 'react';

import { useTabContext } from '../tabs-context';
import { useCallOneTime } from 'services/hooks';

import { IComponent } from 'typings/component';

import { TabStyled, ITabStyled } from '../tabs.styles';

interface ITabProps extends IComponent, ITabStyled {}

export const Tab = (props: ITabProps) => {
  const { children, className } = props;
  const [index, setIndex] = useState<number>(0);
  const { generateTabIndex, setIndexTab, indexTab } = useTabContext();

  useCallOneTime(() => setIndex(generateTabIndex()));

  const isActive = index === indexTab;
  const select = () => setIndexTab(index);

  return (
    <TabStyled onClick={select} isActive={isActive} className={className}>
      {children}
    </TabStyled>
  );
};
