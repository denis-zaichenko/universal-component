import React from 'react';
import styled from 'styled-components';

import { ArrowIcon } from 'components/icons';

import { useSelectContext } from '../../select.context';

import { FComponent } from 'typings';

import { Theme } from 'themes';

export interface ISelectHederProps {}

const HeaderStyled = styled(Theme.FlexList)`
  min-height: 1em;
  padding: 0.25em;
`;

export const Header: FComponent<ISelectHederProps> = (props) => {
  const { className, children } = props;
  const { isOpen, setOpen } = useSelectContext();

  const handleSwitch = () => setOpen(!isOpen);

  return (
    <HeaderStyled
      className={className}
      onClick={handleSwitch}
      justifyContent="space-between"
      alignItem="center"
    >
      {children}
      <ArrowIcon isArrowUp={!isOpen} size="1em" />
    </HeaderStyled>
  );
};
