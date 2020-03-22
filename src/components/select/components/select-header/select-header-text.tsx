import React from 'react';

import { Placeholder } from '../select-placeholder';
import { Header, ISelectHederProps } from './select-header';

import { ITextStyled } from 'themes/styles';

type THederExtends = ISelectHederProps & ITextStyled;
export interface ISelectTextHeaderProps extends THederExtends {}

export const HeaderText = (props: ISelectTextHeaderProps) => {
  const { children, className, ...textStyled } = props;
  return (
    <Header className={className} {...textStyled}>
      <Placeholder />
      {children}
    </Header>
  );
};
