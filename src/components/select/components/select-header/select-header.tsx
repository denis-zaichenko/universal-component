import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../../select.context';

import { IComponent } from 'typings/component';

export interface ISelectHederProps extends IComponent {}

const HeaderStyled = styled.div`
  min-height: 1em;
`;

export const Header = (props: ISelectHederProps) => {
  const { className, children } = props;
  const { isOpen, setOpen } = useSelectContext();

  const handleSwitch = () => setOpen(!isOpen);

  return (
    <HeaderStyled className={className} onClick={handleSwitch}>
      {children}
    </HeaderStyled>
  );
};
