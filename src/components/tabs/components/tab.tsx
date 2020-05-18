import React, { useState, useEffect, FC } from 'react';

import { useTabContext } from '../tabs-context';

import { Theme, TCheckedStyledCSS } from 'themes';

interface ITabProps {
  className?: string;
  activeStyled: TCheckedStyledCSS;
  passiveStyled: TCheckedStyledCSS;
}

export const Tab: FC<ITabProps> = (props) => {
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
