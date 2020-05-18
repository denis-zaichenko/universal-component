import React, { FC } from 'react';

import { useAccordionContext } from '../accordion.context';

import { Theme } from 'themes';

export interface IAccordionDropDownProps {
  className?: string;
}

export const DropDown: FC<IAccordionDropDownProps> = (props) => {
  const { children, className } = props;
  const { isOpen } = useAccordionContext();

  return (
    <Theme.Switch isOpen={isOpen} className={className}>
      {children}
    </Theme.Switch>
  );
};
