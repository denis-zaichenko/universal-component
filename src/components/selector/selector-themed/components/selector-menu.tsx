import React, { FC } from 'react';
import styled from 'styled-components';

import { SELECTOR_THEME, TThemeSelector } from '../selector.constants';

import { CSS } from 'typings';

import { Theme, COLORS, Z_INDEXES } from 'themes';

interface ISelectorMenuProps {
  topSpace: string;
  itemGap: string;

  isOpen: boolean;
  theme: TThemeSelector;
}

interface ISelectorMenuStyled {
  isOpen: boolean;
  topSpace: string;
  css: CSS;
}

const Menu = styled(Theme.Wrapper)<ISelectorMenuStyled>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-top: ${(props) => props.topSpace};
  min-height: 16px;
  border: 1px solid black;
  border-radius: 8px;

  position: absolute;
  width: 100%;
  z-index: ${Z_INDEXES.MENU};
  background-color: ${COLORS.white};

  ${(props) => props.css}
`;

export const SelectorMenu: FC<ISelectorMenuProps> = (props) => {
  const { children, topSpace, isOpen, theme, itemGap } = props;
  const themeStyled = SELECTOR_THEME[theme].menu;

  return (
    <Menu
      isOpen={isOpen}
      topSpace={topSpace}
      css={themeStyled}
      itemGap={itemGap}
    >
      {children}
    </Menu>
  );
};
