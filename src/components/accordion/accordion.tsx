import React from 'react';
import styled from 'styled-components';

import { DropDown, Header } from './components';
import { AccordionProvide } from './accordion.context';

import { IComponent } from 'typings';

interface IAccordionProps extends IComponent {}

const AccordionStyled = styled.div``;

export const Accordion = (props: IAccordionProps) => {
  const { children, className } = props;
  return (
    <AccordionStyled className={className}>
      <AccordionProvide>{children}</AccordionProvide>
    </AccordionStyled>
  );
};

Accordion.Header = Header;
Accordion.DropDown = DropDown;
