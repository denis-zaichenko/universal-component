import React from 'react';
import styled from 'styled-components';

import { useAccordionContext } from '../accordion.context';

import { IComponent } from 'typings/component';

const HeaderStyled = styled.div``;

export interface IAccordionHeaderProps extends IComponent {}

export const Header = (props: IAccordionHeaderProps) => {
  const { children, className } = props;
  const { switchOpen } = useAccordionContext();

  return (
    <HeaderStyled onClick={switchOpen} className={className}>
      {children}
    </HeaderStyled>
  );
};
