import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../select.context';
import { createItemList, TSelectItem } from '../select.utils';

import { IComponent } from 'typings/component';

import { Theme, IFlexPresetStyled } from 'themes/styles';

export interface ISelectMenuProps extends IComponent, IFlexPresetStyled {
  topGap?: string;
  itemList?: TSelectItem[];
}

interface IMenuStyled {
  topGap?: string;
  isOpen: boolean;
}

const MenuStyled = styled(Theme.FlexColumn)<IMenuStyled>`
  position: absolute;
  top: 100%;
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
  ${(p) => p.topGap && `margin-top: ${p.topGap};`}
`;

export const Menu = (props: ISelectMenuProps) => {
  const { children, className, topGap, itemList, ...flex } = props;
  const { isOpen } = useSelectContext();

  return (
    <MenuStyled isOpen={isOpen} topGap={topGap} className={className} {...flex}>
      {itemList && createItemList(itemList)}
      {children}
    </MenuStyled>
  );
};
