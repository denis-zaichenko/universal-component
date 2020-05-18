import React, { FC } from 'react';

import { ArrowIcon } from 'components/image';

import { useAccordionContext } from '../accordion.context';

export interface IAccordionHeaderProps {
  className?: string;
}

export const Header: FC<IAccordionHeaderProps> = (props) => {
  const { children, className } = props;
  const { switchOpen, isOpen } = useAccordionContext();

  return (
    <div onClick={switchOpen} className={className}>
      {children}
      <ArrowIcon isArrowUp={!isOpen} />
    </div>
  );
};
