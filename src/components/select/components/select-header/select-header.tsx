import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../../select.context';

import { IComponent } from 'typings/component';

import { Theme, IFlexStyled } from 'themes/styles';

export interface ISelectHederProps extends IComponent {
  flexStyled?: IFlexStyled;
}

const HeaderStyled = styled(Theme.FlexList)`
  min-height: 1em;
`;

export const Header = (props: ISelectHederProps) => {
  const { className, children, flexStyled } = props;
  const { isOpen, setOpen } = useSelectContext();

  const handleSwitch = () => setOpen(!isOpen);

  return (
    <HeaderStyled className={className} onClick={handleSwitch} {...flexStyled}>
      {children}
    </HeaderStyled>
  );
};
