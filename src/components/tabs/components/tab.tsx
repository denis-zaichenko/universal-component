import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useTabContext } from '../tabs-context';

import { IComponent } from 'typings/component';

interface ITabProps extends IComponent {}

const TabStyled = styled.div<{ isActive: boolean }>``;

export const Tab = (props: ITabProps) => {
  const { children, className } = props;
  const [index, setIndex] = useState<number>(0);
  const { generateTabIndex, setIndexTab, indexTab } = useTabContext();

  useEffect(() => setIndex(generateTabIndex()), []);

  const isActive = index === indexTab;

  const select = () => setIndexTab(index);

  return (
    <TabStyled onClick={select} isActive={isActive} className={className}>
      {children}
    </TabStyled>
  );
};
