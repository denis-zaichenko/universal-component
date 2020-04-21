import React, { useState, useEffect } from 'react';

import { useTabContext } from '../tabs-context';

import { IComponent } from 'typings';

import { Theme, TCheckedStyledCSS } from 'themes';

interface ITabProps extends IComponent {
  activeStyled: TCheckedStyledCSS;
  passiveStyled: TCheckedStyledCSS;
}

export const Tab = (props: ITabProps) => {
  const { children, className, activeStyled, passiveStyled } = props;
  const [index, setIndex] = useState<number>(0);
  const { generateTabIndex, setIndexTab, indexTab } = useTabContext();

  useEffect(() => setIndex(generateTabIndex()), []);

  const isActive = index === indexTab;

  const select = () => setIndexTab(index);

  return (
    <Theme.Checked
      onClick={select}
      isChecked={isActive}
      className={className}
      activeStyled={activeStyled}
      passiveStyled={passiveStyled}
    >
      {children}
    </Theme.Checked>
  );
};
