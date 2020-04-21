import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../../select.context';
import { updateSelectItem } from '../../select.utils';

import { IComponent } from 'typings';

import { Theme } from 'themes';

export interface ISelectItemProps extends IComponent {
  value: TSelectItem;
}

const ItemStyled = styled(Theme.FlexList)``;

export const Item = (props: ISelectItemProps) => {
  const { children, value, className } = props;
  const { onSelect, setOpen, selectItem } = useSelectContext();

  const handleSelect = () => {
    setOpen(false);
    updateSelectItem(onSelect, value, selectItem);
  };

  return (
    <ItemStyled className={className} onClick={handleSelect}>
      {children}
    </ItemStyled>
  );
};
