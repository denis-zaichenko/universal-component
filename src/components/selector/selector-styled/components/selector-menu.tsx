import React, { FC } from 'react';
import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

import { Theme, COLORS, Z_INDEXES, IWrapperStyled } from 'themes';

interface ISelectorMenuProps extends IWrapperStyled {
  className?: string;

  topGap: string;
}

interface ISelectorMenuStyled extends IWrapperStyled {
  isOpen: boolean;
  topGap: string;
}

const Menu = styled(Theme.Wrapper)<ISelectorMenuStyled>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-top: ${(props) => props.topGap};
  min-height: 16px;
  border: 1px solid black;
  border-radius: 8px;

  position: absolute;
  width: 100%;
  z-index: ${Z_INDEXES.MENU};
  background-color: ${COLORS.white};
`;

export const SelectorMenu: FC<ISelectorMenuProps> = (props) => {
  const { className, children, topGap, ...wrapperProps } = props;
  const { isOpen } = useSelectorContext();

  return (
    <Menu
      className={className}
      isOpen={isOpen}
      topGap={topGap}
      {...wrapperProps}
    >
      {children}
    </Menu>
  );
};
