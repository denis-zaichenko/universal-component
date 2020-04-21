import React, { useState, useEffect } from 'react';

import { useTabContext } from '../tabs-context';

import { IComponent } from 'typings';

import { Theme } from 'themes';

export interface ITabPanelProps extends IComponent {}

export const Panel = (props: ITabPanelProps) => {
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
