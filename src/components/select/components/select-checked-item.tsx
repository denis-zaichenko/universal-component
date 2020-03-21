import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../select.context';

import { IComponent } from 'typings/component';

export interface ISelectCheckedItemProps extends IComponent {}

const CheckedItemStyled = styled.div``;

export const CheckedItem = (props: ISelectCheckedItemProps) => {
  const { className, children } = props;
  const { isOpen, setOpen } = useSelectContext();

  const handleSwitch = () => setOpen(!isOpen);

  return (
    <CheckedItemStyled className={className} onClick={handleSwitch}>
      {children}
    </CheckedItemStyled>
  );
};
