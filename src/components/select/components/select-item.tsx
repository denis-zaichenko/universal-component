import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../select.context';

import { IComponent } from 'typings/component';
import { ISelectItem } from '../select.typings';

import { Theme, ITextStyled } from 'themes/styles';

export interface ISelectDropdownItemProps extends IComponent, ITextStyled {
  value: ISelectItem;
}

const ItemStyled = styled(Theme.Paragraph)``;

export const Item = (props: ISelectDropdownItemProps) => {
  const { children, value, className, ...styles } = props;
  const { onSelect, setOpen } = useSelectContext();

  const handleSelect = () => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <ItemStyled className={className} onClick={handleSelect} {...styles}>
      {children}
    </ItemStyled>
  );
};
