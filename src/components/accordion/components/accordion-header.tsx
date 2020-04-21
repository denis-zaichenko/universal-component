import React from 'react';
import styled from 'styled-components';

import { ArrowIcon } from 'components/icons';

import { useAccordionContext } from '../accordion.context';

import { IComponent } from 'typings';

const HeaderStyled = styled.div``;

export interface IAccordionHeaderProps extends IComponent {}

export const Header = (props: IAccordionHeaderProps) => {
  const { children, className } = props;
  const { switchOpen, isOpen } = useAccordionContext();

  return (
    <HeaderStyled onClick={switchOpen} className={className}>
      {children}
      <ArrowIcon isArrowUp={!isOpen} />
    </HeaderStyled>
  );
};
