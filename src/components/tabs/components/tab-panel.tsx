import React, { useState, useEffect, FC } from 'react';

import { useTabContext } from '../tabs-context';

import { Theme } from 'themes';

export interface ITabPanelProps {
  className?: string;
}

export const TabPanel: FC<ITabPanelProps> = (props) => {
  const { children, className } = props;

  const [index, setIndex] = useState<number>(0);
  const { generatePanelIndex, indexTab } = useTabContext();
  useEffect(() => setIndex(generatePanelIndex()), []);

  const isOpen = index === indexTab;

  return (
    <Theme.Switch className={className} isOpen={isOpen}>
      {children}
    </Theme.Switch>
  );
};
