import React, { FC } from 'react';
import styled from 'styled-components';

import { ArrowIcon } from 'components/image';

import { useSelectContext } from '../../select.context';

import { Theme } from 'themes';

export interface ISelectHederProps {
  className?: string;
}

const HeaderStyled = styled(Theme.Flexbox)`
  min-height: 1em;
  padding: 0.25em;
`;

export const Header: FC<ISelectHederProps> = (props) => {
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
