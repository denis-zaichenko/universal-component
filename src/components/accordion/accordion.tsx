import React, { ReactNode } from 'react';

import { DropDown, Header } from './components';
import { AccordionProvide } from './accordion.context';

interface IAccordionProps {
  className?: string;
  children?: ReactNode;
}

export const Accordion = (props: IAccordionProps) => {
  const { children, className } = props;
  return (
    <div className={className}>
      <AccordionProvide>{children}</AccordionProvide>
    </div>
  );
};

Accordion.Header = Header;
Accordion.DropDown = DropDown;
