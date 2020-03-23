import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../select.context';
import { createItemList, TSelectItem } from '../select.utils';

import { IComponent } from 'typings/component';

import { Theme } from 'themes/styles';

export interface ISelectMenuProps extends IComponent {
  topGap?: string;
  itemList?: TSelectItem[];
}

interface IMenuStyled {
  topGap?: string;
  isOpen: boolean;
}

const MenuStyled = styled(Theme.Wrapper)<IMenuStyled>`
  position: absolute;
  top: 100%;
  min-width: 100%;
  display: ${(p) => (p.isOpen ? 'block' : 'none')};
  ${(p) => p.topGap && `margin-top: ${p.topGap};`}
`;

export const Menu = (props: ISelectMenuProps) => {
  const { children, className, topGap, itemList } = props;
  const { isOpen } = useSelectContext();

  return (
    <MenuStyled isOpen={isOpen} topGap={topGap} className={className}>
      {itemList && createItemList(itemList)}
      {children}
    </MenuStyled>
  );
};
