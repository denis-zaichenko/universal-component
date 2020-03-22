import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../../select.context';
import { updateSelectItems } from '../../select.utils';

import { IComponent } from 'typings/component';
import { ISelectItem } from '../../select.typings';

import { Theme } from 'themes/styles';

export interface ISelectItemProps extends IComponent {
  value: ISelectItem;
}

const ItemStyled = styled(Theme.FlexList)``;

export const Item = (props: ISelectItemProps) => {
  const { children, value, className } = props;
  const { onSelect, setOpen, selectItem } = useSelectContext();

  const handleSelect = () => {
    Array.isArray(selectItem)
      ? onSelect(updateSelectItems(value, selectItem))
      : onSelect(value);
    setOpen(false);
  };

  return (
    <ItemStyled className={className} onClick={handleSelect}>
      {children}
    </ItemStyled>
  );
};
