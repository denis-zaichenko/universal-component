import React from 'react';
import styled from 'styled-components';

import { useAccordionContext } from '../accordion.context';

import { IComponent } from 'typings/component';

import { Theme } from 'themes/styles';

const DropDownStyled = styled(Theme.Switch)``;

export interface IAccordionDropDownProps extends IComponent {}

export const DropDown = (props: IAccordionDropDownProps) => {
  const { children, className } = props;
  const { isOpen } = useAccordionContext();

  return (
    <DropDownStyled isOpen={isOpen} className={className}>
      {children}
    </DropDownStyled>
  );
};