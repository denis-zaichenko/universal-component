import React, { useState, useEffect, FC } from 'react';

import { useTabContext } from '../tabs-context';

import { TAB_THEMES, TTabThemes } from '../tabs.constants';

import { Theme } from 'themes';

interface ITabProps {
  className?: string;
  theme?: TTabThemes;
}

export const Tab: FC<ITabProps> = (props) => {
  const { children, className, theme } = props;
  const { active, inactive } = TAB_THEMES[theme ?? 'default'];

  const [index, setIndex] = useState<number>(0);
  const { generateTabIndex, setIndexTab, indexTab } = useTabContext();

  useEffect(() => setIndex(generateTabIndex()), []);

  return (
    <Theme.Checked
      className={className}
      onClick={setIndexTab(index)}
      css={index === indexTab ? active : inactive}
    >
      {children}
    </Theme.Checked>
  );
};
